import {makeCameraMovable} from './camera-position.js';
import {createCameraFriends} from './crowd-camera.js';
// Low-resolution local motion estimation. No camera or microphone data leaves the page.
export function estimateMotion(previous,current,width,height){
  let x=0,y=0,weight=0;
  for(let cy=8;cy<height-8;cy+=8)for(let cx=8;cx<width-8;cx+=8){
    let baseline=0,best=Infinity,bx=0,by=0,texture=0;
    for(let j=-2;j<=2;j++)for(let i=-2;i<=2;i++){const k=(cy+j)*width+cx+i;baseline+=Math.abs(current[k]-previous[k]);texture+=Math.abs(previous[k]-previous[k+1]);}
    if(baseline<130||texture<80)continue;
    for(let dy=-5;dy<=5;dy++)for(let dx=-5;dx<=5;dx++){
      let error=0;for(let j=-2;j<=2;j++)for(let i=-2;i<=2;i++)error+=Math.abs(current[(cy+j+dy)*width+cx+i+dx]-previous[(cy+j)*width+cx+i]);
      if(error<best){best=error;bx=dx;by=dy;}
    }
    const confidence=1-best/baseline;if(confidence<.45||Math.hypot(bx,by)<1)continue;
    x+=bx*confidence;y+=by*confidence;weight+=confidence;
  }
  return weight<3?{x:0,y:0,strength:0}:{x:-x/weight,y:-y/weight,strength:Math.min(1,weight/18)};
}
// Scale real camera motion into a directional gust for the main balloon scene.
export function cameraGust(motion){
  const speed=Math.hypot(motion.x,motion.y);
  if(motion.strength<=.15||speed<=.8)return {x:0,y:0,strength:0};
  return {x:motion.x/speed,y:motion.y/speed,strength:Math.min(1.7,motion.strength*Math.min(1,(speed-.8)/3)*1.7)};
}
export function breathLevel(samples,bins,sampleRate){
  const rms=Math.sqrt(samples.reduce((sum,v)=>sum+v*v,0)/samples.length);
  let total=0,high=0;for(let i=1;i<bins.length;i++){const energy=10**(bins[i]/10);total+=energy;if(i*sampleRate/(bins.length*2)>1600)high+=energy;}
  return rms>.025&&high/(total||1)>.16?Math.min(1,(rms-.025)*9):0;
}
export function createWindControls(onWind){
  makeCameraMovable(document.querySelector('#camera-window'));
  const notice=document.querySelector('#sensor-status'),video=document.querySelector('#camera-preview');
  const cameraButton=document.querySelector('#camera-toggle'),micButton=document.querySelector('#mic-toggle');
  const buffer=document.createElement('canvas');buffer.width=80;buffer.height=60;const ctx=buffer.getContext('2d',{willReadFrequently:true});
  let stopFriends=null,cameraStream=null,micStream=null,audio=null,analyser=null,previous=null,timer=0,cameraToken=0,micToken=0;
  const setStatus=text=>notice.textContent=/^(Camera off|Microphone off|Camera and microphone off)$/.test(text)?'':text;
  function stopCamera(){cameraToken++;stopFriends?.();stopFriends=null;document.querySelector("#camera-friends")?.setAttribute("hidden","");cameraStream?.getTracks().forEach(t=>t.stop());cameraStream=null;video.srcObject=null;video.hidden=true;previous=null;cameraButton.disabled=false;cameraButton.setAttribute('aria-pressed','false');cameraButton.textContent='Camera';}
  function stopMic(){micToken++;micStream?.getTracks().forEach(t=>t.stop());micStream=null;audio?.close();audio=null;analyser=null;micButton.disabled=false;micButton.setAttribute('aria-pressed','false');micButton.textContent='Blow';}
  cameraButton.addEventListener('click',async()=>{
    if(cameraStream){stopCamera();setStatus('Camera off');return;}
    const token=++cameraToken;cameraButton.disabled=true;
    try{
      const stream=await navigator.mediaDevices.getUserMedia({video:{width:160,height:120,facingMode:'user'},audio:false});
      if(token!==cameraToken||document.hidden){stream.getTracks().forEach(t=>t.stop());return;}
      cameraStream=stream;video.srcObject=stream;await video.play();video.hidden=false;cameraButton.setAttribute('aria-pressed','true');cameraButton.textContent='Camera on';setStatus('Wave a hand or fan. Make a little wind.');
      createCameraFriends(video,setStatus).then(stop=>{if(token!==cameraToken)stop();else stopFriends=stop;}).catch(()=>{if(token===cameraToken)setStatus('Face tracking unavailable. Wave to make wind.');});
    }catch(e){stopCamera();setStatus(e.name==='NotAllowedError'?'Camera access was declined. You can still drag the balloons.':'Camera unavailable. You can still drag the balloons.');}
    finally{cameraButton.disabled=false;}
  });
  micButton.addEventListener('click',async()=>{
    if(micStream){stopMic();setStatus('Microphone off');return;}
    const token=++micToken;micButton.disabled=true;
    try{
      audio=new AudioContext();await audio.resume();
      const stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false},video:false});
      if(token!==micToken||document.hidden){stream.getTracks().forEach(t=>t.stop());return;}
      micStream=stream;analyser=audio.createAnalyser();analyser.fftSize=1024;audio.createMediaStreamSource(stream).connect(analyser);micButton.setAttribute('aria-pressed','true');micButton.textContent='Blow on';setStatus('A gentle puff near your microphone.');
    }catch(e){stopMic();setStatus(e.name==='NotAllowedError'?'Microphone access was declined. You can still drag the balloons.':'Microphone unavailable. You can still drag the balloons.');}
    finally{micButton.disabled=false;}
  });
  const samples=new Float32Array(1024),bins=new Float32Array(512);
  timer=setInterval(()=>{
    if(document.hidden)return;
    if(cameraStream&&video.readyState>=2){
      ctx.drawImage(video,0,0,80,60);const rgba=ctx.getImageData(0,0,80,60).data,current=new Uint8Array(4800);
      for(let i=0;i<current.length;i++)current[i]=(rgba[i*4]+rgba[i*4+1]+rgba[i*4+2])/3;
      if(previous){const gust=cameraGust(estimateMotion(previous,current,80,60));if(gust.strength>0)onWind(gust.x,gust.y,gust.strength);}
      previous=current;
    }
    if(analyser){analyser.getFloatTimeDomainData(samples);analyser.getFloatFrequencyData(bins);const strength=breathLevel(samples,bins,audio.sampleRate);if(strength>.03)onWind(.3,1,strength*.75);}
  },80);
  function stop(){stopCamera();stopMic();setStatus('Camera and microphone off');}
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  window.addEventListener('pagehide',()=>{stop();clearInterval(timer);});
  return {stop};
}
