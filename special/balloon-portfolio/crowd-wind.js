import {makeCameraMovable} from './camera-position.js';
import {createCameraFriends} from './crowd-camera.js';
// Low-resolution local motion estimation. No camera data leaves the page.
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
export function createWindControls(onWind){
  makeCameraMovable(document.querySelector('#camera-window'));
  const notice=document.querySelector('#sensor-status'),video=document.querySelector('#camera-preview');
  const cameraButton=document.querySelector('#camera-toggle');
  const buffer=document.createElement('canvas');buffer.width=80;buffer.height=60;const ctx=buffer.getContext('2d',{willReadFrequently:true});
  let stopFriends=null,cameraStream=null,previous=null,timer=0,cameraToken=0;
  const setStatus=text=>notice.textContent=/^Camera off$/.test(text)?'':text;
  function stopCamera(){cameraToken++;stopFriends?.();stopFriends=null;document.querySelector("#camera-friends")?.setAttribute("hidden","");cameraStream?.getTracks().forEach(t=>t.stop());cameraStream=null;video.srcObject=null;video.hidden=true;previous=null;cameraButton.disabled=false;cameraButton.setAttribute('aria-pressed','false');cameraButton.setAttribute('aria-label','Camera');}
  cameraButton.addEventListener('click',async()=>{
    if(cameraStream){stopCamera();setStatus('Camera off');return;}
    const token=++cameraToken;cameraButton.disabled=true;
    try{
      const stream=await navigator.mediaDevices.getUserMedia({video:{width:160,height:120,facingMode:'user'},audio:false});
      if(token!==cameraToken||document.hidden){stream.getTracks().forEach(t=>t.stop());return;}
      cameraStream=stream;video.srcObject=stream;await video.play();video.hidden=false;cameraButton.setAttribute('aria-pressed','true');cameraButton.setAttribute('aria-label','Camera on');setStatus('Wave a hand or fan. Make a little wind.');
      createCameraFriends(video,setStatus).then(stop=>{if(token!==cameraToken)stop();else stopFriends=stop;}).catch(()=>{if(token===cameraToken)setStatus('Face tracking unavailable. Wave to make wind.');});
    }catch(e){stopCamera();setStatus(e.name==='NotAllowedError'?'Camera access was declined. You can still drag the balloons.':'Camera unavailable. You can still drag the balloons.');}
    finally{cameraButton.disabled=false;}
  });
  timer=setInterval(()=>{
    if(document.hidden)return;
    if(cameraStream&&video.readyState>=2){
      ctx.drawImage(video,0,0,80,60);const rgba=ctx.getImageData(0,0,80,60).data,current=new Uint8Array(4800);
      for(let i=0;i<current.length;i++)current[i]=(rgba[i*4]+rgba[i*4+1]+rgba[i*4+2])/3;
      if(previous){const gust=cameraGust(estimateMotion(previous,current,80,60));if(gust.strength>0)onWind(gust.x,gust.y,gust.strength);}
      previous=current;
    }
  },80);
  function stop(){stopCamera();setStatus('Camera off');}
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  window.addEventListener('pagehide',()=>{stop();clearInterval(timer);});
  return {stop};
}
