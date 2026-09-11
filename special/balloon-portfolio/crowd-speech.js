import {collectionAnchor} from './collection-layout.js';
import {voicePhrase,voiceMouth} from './voice-phrase.js';
import * as THREE from 'three';
import {MarchingCubes} from 'three/addons/objects/MarchingCubes.js';
const lines=['psst… over here!','a tiny tap? pretty please.','I have something to show you.','pick me! I brought a project.','hellooo, curious human.','tap for a little peek.','my pockets are full of work.','look what I helped make!','a little work, a lot of heart.','got a second? got a project.','come closer. tiny surprise.','your next little peek is here.'];
export function createSpeech(scene,onSay=()=>{},onClear=()=>{}){
  const root=new THREE.Group();root.visible=false;scene.add(root);
  const mat=new THREE.MeshBasicMaterial({color:'#fffdf8',toneMapped:false});
  const cloudLightness={value:0};
  mat.onBeforeCompile=shader=>{
    shader.uniforms.cloudLightness=cloudLightness;
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 balloonNormal;').replace('#include <begin_vertex>','#include <begin_vertex>\nballoonNormal=normalize(normalMatrix*normal);');
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 balloonNormal;\nuniform float cloudLightness;').replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.rgb*=mix(mix(vec3(.76,.75,.72),vec3(.86,.855,.845),cloudLightness),vec3(1.0),smoothstep(-.8,.65,balloonNormal.y));');
  };
  const caption=document.createElement('div');caption.id='speech-caption';caption.hidden=true;caption.setAttribute('role','status');document.body.append(caption);
  const shapes=new Map();let screenBounds=null,phrase=null;
  function bubbleGeometry(lobes,variant,width=1,height=.48){
    const key=[lobes,variant,width.toFixed(2),height.toFixed(2)].join(':');if(shapes.has(key))return shapes.get(key);
    const resolution=38,extent=1.4,mc=new MarchingCubes(resolution,mat,false,false,18000);mc.isolation=0;
    const radius=height*.68,rx=radius/width;
    const circles=Array.from({length:lobes||6},(_,i)=>{const a=(i+(variant===2?.35:0))/(lobes||6)*Math.PI*2;return {x:Math.cos(a)*(1-rx*.7),y:Math.sin(a)*.55,r:1+.09*Math.sin(i*2.1+variant)};});
    const smoothMax=(a,b)=>{const h=Math.max(.24-Math.abs(a-b),0)/.24;return Math.max(a,b)+h*h*.06;};
    for(let z=0;z<resolution;z++)for(let y=0;y<resolution;y++)for(let x=0;x<resolution;x++){
      const px=(x/resolution*2-1)*extent,py=(y/resolution*2-1)*extent,pz=(z/resolution*2-1)*extent;
      let field=1-(px/.88)**2-(py/.69)**2-(pz/.82)**2;
      for(const c of circles)field=smoothMax(field,1-((px-c.x)/(rx*c.r))**2-((py-c.y)/(.68*c.r))**2-(pz/(.84*c.r))**2);
      mc.field[z*resolution*resolution+y*resolution+x]=field;
    }
    mc.update();const geometry=new THREE.BufferGeometry(),count=mc.geometry.drawRange.count;
    for(const name of ['position','normal'])geometry.setAttribute(name,new THREE.Float32BufferAttribute(mc.geometry.attributes[name].array.slice(0,count*3),3));
    geometry.scale(extent,extent,extent);geometry.computeBoundingSphere();geometry.computeBoundingBox();mc.geometry.dispose();
    if(shapes.size>=16){const oldest=shapes.keys().next().value;shapes.get(oldest).dispose();shapes.delete(oldest);}
    shapes.set(key,geometry);return geometry;
  }
  const shell=new THREE.Mesh(bubbleGeometry(0,0),mat);shell.scale.set(1,.48,.21);root.add(shell);
  const tailGeometry=new THREE.SphereGeometry(1,24,16),tail=new THREE.Mesh(tailGeometry,mat);tail.scale.set(.11,.21,.10);tail.rotation.z=-.42;tail.position.set(-.36,-.45,-.02);root.add(tail);
  const thought=new THREE.Group();for(const [x,y,s] of [[-.36,-.53,.095],[-.48,-.74,.055]]){const puff=new THREE.Mesh(tailGeometry,mat);puff.position.set(x,y,-.02);puff.scale.setScalar(s);thought.add(puff);}root.add(thought);
  const ctx=document.createElement('canvas').getContext('2d');
  const qa=new URLSearchParams(location.search).get('qa')==='speech';
  let next=qa?4:6+Math.random()*3,actor=null,start=0,last=-1,lastShape=-1,size=0,velocity=0,rotation=0,dragging=false,persistent=false,bubbleWidth=1,bubbleHeight=.48,lastCaller=null,anchorSide=1;
  function clear(){onClear();actor?.face.speak(0);if(actor)actor.speaking=false;actor=null;root.visible=false;screenBounds=null;caption.hidden=true;document.body.dataset.speech='';dragging=false;persistent=false;}
  function say(who,time,reduced,comment=null,keep=false){
    if(!who?.face)return;actor?.face.speak(0);if(actor)actor.speaking=false;actor=who;actor.speaking=true;start=time;rotation=Math.sin(who.phase*2.7)*.12;persistent=keep;screenBounds=null;anchorSide=who.face.mouthPosition().x>0?-1:1;
      let choice;do{choice=Math.floor(Math.random()*lines.length);}while(choice===last);last=choice;
      const kind=1+(lastShape===1?1:0);lastShape=kind;
      tail.visible=kind===0;thought.visible=kind!==0;mat.color.set(actor.collectionSlot?'#ffffff':'#fffdf8');cloudLightness.value=actor.collectionSlot?1:0;
      const message=comment||lines[choice];
      ctx.font='400 76px fatfrank, sans-serif';
      const fullWidth=ctx.measureText(message).width,targetWidth=Math.max(400,Math.min(800,Math.sqrt(fullWidth*470)));
      const words=message.split(' '),rows=[''];
      for(const word of words){const k=rows.length-1,next=rows[k]?rows[k]+' '+word:word;if(ctx.measureText(next).width>targetWidth&&rows[k])rows.push(word);else rows[k]=next;}
      caption.textContent=rows.join('\n');caption.hidden=false;
      const widest=Math.max(...rows.map(row=>ctx.measureText(row).width)),unit=.0022;
      bubbleWidth=Math.max(.66,(widest+260)*unit/2);bubbleHeight=Math.max(.38,(rows.length*90+200)*unit/2);
      const lobes=kind?Math.max(5,Math.min(9,3+Math.ceil(widest/260)+rows.length-1)):0;
      shell.geometry=bubbleGeometry(lobes,kind,bubbleWidth,bubbleHeight);shell.scale.set(bubbleWidth,bubbleHeight,.34);
      document.body.dataset.bubbleShape=kind===0?'oval':kind===1?'thought-cloud':'speech-cloud';document.body.dataset.bubbleLobes=String(lobes);document.body.dataset.bubbleLines=String(rows.length);
      phrase=voicePhrase(message);onSay(who,message,phrase);size=reduced?1:0;velocity=0;root.visible=true;document.body.dataset.speech=message;
    next=time+14+Math.random()*10;
  }
  return {clear,say,bounds(){return screenBounds;},invitedActor(ray){return !persistent&&actor&&root.visible&&ray.intersectObjects(root.children,true).length?actor:null;},hit(ray){return root.visible&&ray.intersectObjects(root.children,true).length>0;},update(time,dt,actors,camera,reduced,held){
    if(!actor&&time>next&&!held){
      const pool=actors.filter(a=>a.face&&a!==lastCaller&&Math.abs(a.px)<camera.right*.72&&Math.abs(a.py)<camera.top*.65);
      if(pool.length){lastCaller=pool[Math.floor(Math.random()*pool.length)];say(lastCaller,time,reduced);}else next=time+5;
    }
    if(!actor)return;
    if(dragging)start+=dt;
    const age=time-start,target=persistent||age<4.2?1:0;
    if(reduced)size=target;else{velocity+=((target-size)*110-velocity*13)*dt;size+=velocity*dt;}
    const pulse=reduced?0:voiceMouth(phrase,age);actor.face.speak(pulse);
    const fit=Math.min(persistent?.82:.76,(camera.right-camera.left)/(bubbleWidth*2.4+.7),actor.collectionSlot?(innerWidth<620?142:210)*(camera.right-camera.left)/innerWidth/(bubbleWidth*2.6):Infinity),margin=bubbleWidth*1.14*fit;
    const mouth=actor.face.mouthPosition(),side=anchorSide;
    root.position.set(THREE.MathUtils.clamp(mouth.x+side*((bubbleWidth*1.14+.6)*fit),-camera.right+margin,camera.right-margin),THREE.MathUtils.clamp(mouth.y+(.10+Math.sin(time*.85+actor.phase)*.045)*fit,-camera.top+bubbleHeight*1.2*fit,camera.top-bubbleHeight*1.2*fit),Math.min(camera.position.z-1,Math.max(7,mouth.z+1)));
    if(actor.collectionSlot){
      const slot=actor.collectionSlot,arrangement=actor.collectionArrangement;
      const unit=(camera.right-camera.left)/innerWidth,halfW=margin/unit,halfH=bubbleHeight*1.4*fit/unit;
      const {x,y}=collectionAnchor(slot,arrangement.speechAngle,halfW*2,halfH*2,arrangement.gap);
      root.position.set(camera.left+x*unit,camera.top-y*unit,10);
    }
    root.scale.setScalar(Math.max(.001,size)*fit);root.rotation.z=rotation;
    const screen=root.position.clone().project(camera),pixelScale=innerWidth/(camera.right-camera.left)*fit;
    caption.style.left=((screen.x*.5+.5)*innerWidth)+'px';caption.style.top=((-screen.y*.5+.5)*innerHeight)+'px';caption.style.fontSize=(70*.0022*pixelScale)+'px';caption.style.transform='translate(-50%,-50%) rotate('+(-rotation)+'rad) scale('+Math.max(.001,size)+')';
    const cpx=(screen.x*.5+.5)*innerWidth,cpy=(-screen.y*.5+.5)*innerHeight;
    const box=shell.geometry.boundingBox,hw=Math.max(Math.abs(box.min.x),Math.abs(box.max.x))*bubbleWidth,hh=Math.max(Math.abs(box.min.y),Math.abs(box.max.y))*bubbleHeight;
    const halfW=(hw*Math.abs(Math.cos(rotation))+hh*Math.abs(Math.sin(rotation)))*pixelScale*1.06,halfH=(hh*Math.abs(Math.cos(rotation))+hw*Math.abs(Math.sin(rotation)))*pixelScale*1.06;
    screenBounds={left:cpx-halfW,right:cpx+halfW,top:cpy-halfH,bottom:cpy+halfH};
    // Aim the tail at the actual lip anchor, even when the balloon is rotated.
    const c=Math.cos(-rotation),s=Math.sin(-rotation),wx=(mouth.x-root.position.x)/fit,wy=(mouth.y-root.position.y)/fit;
    const dx=wx*c-wy*s,dy=wx*s+wy*c,d=Math.hypot(dx,dy)||1,ux=dx/d,uy=dy/d;
    const edge=1/Math.sqrt(ux*ux/(bubbleWidth*bubbleWidth)+uy*uy/(bubbleHeight*bubbleHeight)),length=Math.max(.08,Math.min(.22,d-edge+.07));
    tail.position.set(ux*(edge+length*.35),uy*(edge+length*.35),-.02);tail.scale.set(.10,length*.65,.10);tail.rotation.z=Math.atan2(uy,ux)-Math.PI/2;
    thought.children.forEach((p,i)=>{const reach=edge+.13+i*.17;p.position.set(ux*reach,uy*reach,-.02);});
    if(!persistent&&age>4.9){clear();next=time+14+Math.random()*10;}
  }};
}
