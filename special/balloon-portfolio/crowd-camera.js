// Face locations are processed locally and discarded when Camera is switched off.
export async function createCameraFriends(video,onStatus){
  const {FaceDetector,FilesetResolver}=await import('@mediapipe/tasks-vision');
  const files=await FilesetResolver.forVisionTasks(new URL('./vision/',location.href).href);
  const detector=await FaceDetector.createFromOptions(files,{baseOptions:{modelAssetPath:new URL('./vision/face.tflite',location.href).href,delegate:'CPU'},runningMode:'VIDEO',minDetectionConfidence:.6});
  const canvas=document.querySelector('#camera-friends'),ctx=canvas.getContext('2d');canvas.width=360;canvas.height=270;canvas.hidden=false;
  const friends=Array.from({length:9},(_,i)=>({x:25+(i%5)*70,y:25+Math.floor(i/5)*200,vx:i%2?55:-45,vy:30,r:20+i%3*3,color:['#f1c444','#ee779c','#43b5b3','#648fda','#ed9260'][i%5],squish:0}));
  const sparks=[];
  let face=null,lastSeen=0,lastDetection=0,last=performance.now(),raf=0,alive=true;
  function frame(now){
    if(!alive)return;const dt=Math.min(.04,(now-last)/1000);last=now;
    if(video.readyState>=2&&now-lastDetection>150){
      lastDetection=now;
      try{const box=detector.detectForVideo(video,now).detections[0]?.boundingBox;
        if(box){const target={x:360*(1-(box.originX+box.width/2)/video.videoWidth),y:270*(box.originY+box.height/2)/video.videoHeight,rx:box.width/video.videoWidth*180,ry:box.height/video.videoHeight*135};if(!face)face=target;else for(const k of ['x','y','rx','ry'])face[k]+=(target[k]-face[k])*.5;lastSeen=now;}
        else if(now-lastSeen>450)face=null;
        document.body.dataset.faceDetected=String(!!face);
      }catch{face=null;}
    }
    ctx.clearRect(0,0,360,270);
    for(const [i,p] of friends.entries()){
      p.vy+=Math.sin(now*.0007+i)*dt*9;
      if(face){p.vx+=(face.x-p.x)*dt*.36;p.vy+=(face.y-p.y)*dt*.25;}
      p.x+=p.vx*dt;p.y+=p.vy*dt;p.squish*=Math.exp(-9*dt);
      if(face){const dx=p.x-face.x,dy=p.y-face.y,rx=face.rx+p.r,ry=face.ry+p.r,d=Math.hypot(dx/rx,dy/ry);
        if(d<1){const nx=dx/(rx*rx),ny=dy/(ry*ry),norm=Math.hypot(nx,ny)||1,ux=nx/norm,uy=ny/norm;
          p.x=face.x+dx/Math.max(.01,d)*1.015;p.y=face.y+dy/Math.max(.01,d)*1.015;
          const speed=p.vx*ux+p.vy*uy;if(speed<0){p.vx-=ux*(speed*1.6-24);p.vy-=uy*(speed*1.6-24);p.squish=.28;if(sparks.length<90)for(let j=0;j<7;j++){const a=j/7*Math.PI*2;sparks.push({x:p.x,y:p.y,vx:Math.cos(a)*90,vy:Math.sin(a)*90,life:.55,color:p.color});}document.body.dataset.faceBumps=String(+(document.body.dataset.faceBumps||0)+1);}
        }
      }
      if(p.x<p.r){p.x=p.r;p.vx=Math.abs(p.vx);}if(p.x>360-p.r){p.x=360-p.r;p.vx=-Math.abs(p.vx);}if(p.y<p.r){p.y=p.r;p.vy=Math.abs(p.vy);}if(p.y>270-p.r){p.y=270-p.r;p.vy=-Math.abs(p.vy);}
      const speed=Math.hypot(p.vx,p.vy);if(speed>110){p.vx*=110/speed;p.vy*=110/speed;}
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.vx*.002);ctx.scale(1+p.squish,1-p.squish);
      const gradient=ctx.createRadialGradient(-p.r*.35,-p.r*.4,1,0,0,p.r*1.25);gradient.addColorStop(0,'#fff4dc');gradient.addColorStop(.3,p.color);gradient.addColorStop(1,p.color+'bb');ctx.fillStyle=gradient;
      ctx.beginPath();for(let n=0;n<=64;n++){const a=n/64*Math.PI*2,r=p.r*(i%2?1:.86+.14*Math.cos(a*5));ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);}ctx.closePath();ctx.fill();
      for(const x of [-4,4]){ctx.fillStyle='#fff7e7';ctx.beginPath();ctx.ellipse(x,-2,3.2,4,0,0,7);ctx.fill();ctx.fillStyle='#24242a';ctx.beginPath();ctx.arc(x+.5,-1.4,1.6,0,7);ctx.fill();}
      ctx.strokeStyle='#ac5069';ctx.lineWidth=2.4;ctx.lineCap='round';ctx.beginPath();ctx.ellipse(0,5,3.5,1.8,0,0,Math.PI);ctx.stroke();ctx.restore();
    }
    for(let i=sparks.length-1;i>=0;i--){const p=sparks[i];p.life-=dt;if(p.life<=0){sparks.splice(i,1);continue;}p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=70*dt;ctx.globalAlpha=p.life/.55;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,2.5,0,7);ctx.fill();}ctx.globalAlpha=1;
    raf=requestAnimationFrame(frame);
  }
  onStatus('A little hello. A little head bump.');raf=requestAnimationFrame(frame);
  return ()=>{alive=false;cancelAnimationFrame(raf);detector.close();canvas.hidden=true;ctx.clearRect(0,0,360,270);document.body.dataset.faceDetected='false';};
}
