import {projects} from './portfolio-projects.js';
import {rollGrip,coastGrip,scaleGrip} from './crowd-manipulation.js';
import {createOpening} from './opening.js';
import {setupFeedback} from './crowd-feedback.js';
import {createProfile} from './crowd-profile.js';
import {attachFrost} from './crowd-frost.js';
import {weldContour} from './crowd-weld.js';
import {classicPaths} from './crowd-classics.js';
import {createColorMode} from './crowd-color-mode.js';
import {crowdShell,relaxCrowdShell} from './crowd-shell.js';
import {compactItemGeometry} from './crowd-lod.js';
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {skin,sampleSkin} from './surface.js';
import {crowdShape} from './crowd-shapes.js';
import {inflateOrigin} from './origin-body.js';
import {createSpeech} from './crowd-speech.js';
import {createWindControls} from './crowd-wind.js';
import {showWork,updateWork,closeWork} from './crowd-portfolio.js';
import {prepareFilm,softenFilm} from './crowd-film.js';
import {colorNeighbors} from './crowd-colors.js';
import {createSeam,updateSeam} from './crowd-seam.js';
import {createCrowdedFace} from './crowd-face.js';
import {Membrane} from './physics.js';
import {initializeMotion,advancePile} from './crowd-physics.js';
import {polygonParts,meshParts,convexPart} from './crowd-collision.js';

const canvas=document.querySelector('#world'),status=document.querySelector('#status');
const opening=createOpening();let openingReleased=false;
const feedback=setupFeedback();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const sessionSeed=Number(new URLSearchParams(location.search).get('seed'))||crypto.getRandomValues(new Uint32Array(1))[0];
const colorSets=[
  ['#008beC','#ff5e44','#ffda19','#10c89e','#fc4a9b','#9a5ae9'],
  ['#ff7c30','#0f86f9','#ffda1e','#fa4fa0','#12ceae','#975dea'],
  ['#0987f7','#ffd51d','#fc54a3','#9d5ae9','#10c9a0','#ff664a'],
  ['#ff6043','#ffdd19','#069fea','#fc50a2','#1bcb95','#9a5feb'],
  ['#1788f9','#ff7d35','#ffd71c','#fb4b9e','#0ec7b5','#9463ea'],
];
const palette=colorSets[sessionSeed%colorSets.length];
// Playful silhouettes lead; simple shapes are occasional smaller accents.
const kinds=['round','heart','triangle','square','star','spark','petal','coil'];
const shapeMix=['petal','spark','star','coil','heart','petal','triangle','spark','coil','star','round','petal','heart','spark','square','coil'];
const actors=[],ornaments=[],pickables=[];let itemOrder=[];
let profiler;
let renderer,scene,camera,models,geometries,columns=0,rows=0,viewWidth=12,viewHeight=8,raf=0,last=0,time=0;
let held=null,renderSkin,speech,entered=false,motionUntil=3;
let seed=sessionSeed;
function random(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
const material=color=>new THREE.MeshPhysicalMaterial({color,roughness:.30,clearcoat:.22,clearcoatRoughness:.26,ior:1.46,transmission:0});

function makeMonster(i){
  const kind=shapeMix[i%shapeMix.length],shapeIndex=kinds.indexOf(kind),root=new THREE.Group(),mat=material(palette[Math.floor(random()*palette.length)]);
  mat.roughness=.44+(i%3)*.025;mat.clearcoat=.04;mat.transmission=[.10,.18,.06,.24][i%4];mat.thickness=.16;mat.ior=1.38;mat.attenuationDistance=1.6;mat.attenuationColor.copy(mat.color);
  const shape=geometries[shapeIndex];if(!shape.data.noSeam)softenFilm(mat,i,shape.body);const body=new THREE.Mesh(shape.body,mat),rim=new THREE.Mesh(shape.rim,mat);
  if(!shape.data.noSeam)attachFrost(body);
  root.add(body);scene.add(root);
  const face=createCrowdedFace(root,body,i,shape.data.faceAnchor);rim.visible=!shape.data.noSeam;
  // Bind the face to its original surface before rotating the whole balloon.
  face.update(i*.63,0,'awake',0,true,true);
  const actor={root,body,face,phase:random()*Math.PI*2,angle:(random()-.5)*2.5,size:.48+random()**2*1.90,squeeze:.94+random()*.12,z:random()*.75,kick:0,velocity:0,x:0,y:0};
  if(['round','square','triangle'].includes(kind))actor.size*=.72;
  actor.projectIndex=i%projects.length;actor.collision=shape.collision;actor.shape=shape;actor.rim=rim;actor.press=0;body.userData.actor=actor;pickables.push(body);face.face.traverse(o=>{if(o.isMesh){o.userData.actor=actor;pickables.push(o);}});actors.push(actor);
}
function makeItem(i){
  const root=new THREE.Group(),model=models[itemOrder[i%itemOrder.length]].clone(true);
  const tones=new Map(),flower=['flower','daisy','spark','star'].includes(model.userData.itemId);
  model.traverse(o=>{if(o.isMesh){const name=model.userData.itemId==='bubbles'?'bubble-'+(o.name.match(/(\d+)$/)?.[1]||'0'):o.material.name;if(!tones.has(name))tones.set(name,palette[(i*3+tones.size*2)%palette.length]);o.material=o.material.clone();o.material.color.set(flower?(/^Center/i.test(o.name)?'#f2bf2e':'#fffaf1'):tones.get(name));o.material.roughness=.42;}});
  root.add(model);scene.add(root);
  const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  model.position.sub(center);const scale=(.55+random()*.40)/Math.max(size.x,size.y);model.scale.setScalar(scale);model.position.multiplyScalar(scale);
  // Tilt the centered model itself, so the collision hull includes its depth.
  const tilt=new THREE.Group();tilt.add(model);root.add(tilt);
  tilt.rotation.set((random()<.5?-1:1)*(.20+random()*.55),(random()<.5?-1:1)*(.18+random()*.62),0);
  const a={root,phase:random()*6.28,angle:random()*6.28,size:1,squeeze:1,z:.8+random()*.25,kick:0,velocity:0,x:0,y:0};
  a.collision=meshParts(root);root.traverse(o=>{if(o.isMesh){o.userData.actor=a;pickables.push(o);}});ornaments.push(a);
}
function rebuild(){
  held=null;speech?.clear();closeWork();
  for(const a of actors){a.face.dispose();scene.remove(a.root);a.body.material.dispose();if(a.isGlyph)a.body.geometry.dispose();if(a.sim){a.body.geometry.dispose();a.rim.geometry.dispose();}}
  for(const a of ornaments){scene.remove(a.root);a.root.traverse(o=>{if(o.isMesh){o.material.dispose();if(a.letter)o.geometry.dispose();}});}
  actors.length=ornaments.length=pickables.length=0;seed=sessionSeed;
  for(let i=0;i<Math.max(projects.length,Math.ceil(columns*rows*1.15));i++)makeMonster(i);
  itemOrder=models.map((_,i)=>i);for(let i=itemOrder.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[itemOrder[i],itemOrder[j]]=[itemOrder[j],itemOrder[i]];}
  for(let i=0;i<Math.max(5,Math.ceil(columns*rows*.26));i++)makeItem(i);
  document.body.dataset.letters='';
  document.body.dataset.seed=String(sessionSeed);document.body.dataset.palette=palette.join(',');document.body.dataset.shapes=kinds.join(',');document.body.dataset.monsters=actors.length;document.body.dataset.items=ornaments.length;
}
function resize(){
  const w=innerWidth,h=innerHeight;
  renderer.setSize(w,h,false);renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));
  const nextCols=Math.max(3,Math.round(w/230)),nextRows=Math.max(w<600?5:3,Math.round(h/220));
  viewWidth=nextCols*1.90;viewHeight=viewWidth*h/w;
  camera.left=-viewWidth/2;camera.right=viewWidth/2;camera.top=viewHeight/2;camera.bottom=-viewHeight/2;camera.updateProjectionMatrix();
  if(!actors.length){columns=nextCols;rows=nextRows;rebuild();}
  seed=(sessionSeed^0x93ae17)>>>0;
  const cell=Math.sqrt(viewWidth*viewHeight/actors.length);
  actors.forEach(a=>{a.baseSize=a.size*cell/1.9;a.radius=a.baseSize*.89;a.x=(random()-.5)*(viewWidth+.7);a.y=(random()-.5)*(viewHeight+.7);});
  const area=actors.reduce((sum,a)=>sum+Math.PI*a.radius*a.radius,0),fill=Math.sqrt(viewWidth*viewHeight*1.35/area);
  for(const a of actors){a.baseSize*=fill;a.radius*=fill;}
  // Settle unequal balloons into a compressed pile, with no rows or columns.
  for(let step=0;step<180;step++){
    for(let i=0;i<actors.length;i++)for(let j=i+1;j<actors.length;j++){
      const a=actors[i],b=actors[j],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||.001;
      const overlap=(a.radius+b.radius)*.93-d;
      if(overlap>0){const push=overlap*.23;a.x-=dx/d*push;a.y-=dy/d*push;b.x+=dx/d*push;b.y+=dy/d*push;}
    }
    for(const a of actors){a.x=THREE.MathUtils.clamp(a.x,-viewWidth/2+a.radius*.36,viewWidth/2-a.radius*.36);a.y=THREE.MathUtils.clamp(a.y,-viewHeight/2+a.radius*.36,viewHeight/2-a.radius*.36);}
  }
  // Little objects are caught between neighboring bodies, at different depths.
  ornaments.forEach((a,i)=>{
    const first=actors[i%actors.length],near=actors.filter(b=>b!==first).sort((b,c)=>Math.hypot(b.x-first.x,b.y-first.y)-Math.hypot(c.x-first.x,c.y-first.y));
    const second=near[i%Math.min(3,near.length)];
    a.x=(first.x+second.x)/2+(random()-.5)*.3;a.y=(first.y+second.y)/2+(random()-.5)*.3;a.baseSize=cell/1.9;
  });
  for(const a of actors){const size=a.userScale||1;a.userScale=1;initializeMotion(a,a.radius);scaleGrip(a,size);}
  for(const a of ornaments){const size=a.userScale||1;a.userScale=1;initializeMotion(a,(a.letter?.60:.29)*a.baseSize);scaleGrip(a,size);}
  // Choose neighboring colors once, before the first visible frame.
  if(!entered)document.body.dataset.colorConflicts=String(colorNeighbors(actors,palette,random));
  if((!entered||!openingReleased)&&!reduced.matches){
    for(const a of [...actors,...ornaments]){a.px=a.x*.06;a.py=a.y*.06;a.vx=a.x*3.9;a.vy=a.y*3.9;a.turn=(random()-.5)*2.7;a.omega=(random()-.5)*5;a.entry=.07;a.entryVelocity=0;a.delay=random()*.13;}
  }
  entered=true;draw(0);wake();
}
function pose(a,dt,isMonster){
  coastGrip(a,dt,held?.actor===a);
  if(a.delay>0)a.delay-=dt;
  else if(a.entry!==undefined){a.entryVelocity+=((1-a.entry)*90-a.entryVelocity*10)*dt;a.entry+=a.entryVelocity*dt;}
  a.velocity+=(-a.kick*55-a.velocity*15)*dt;a.kick+=a.velocity*dt;
  const p=a.phase,t=time;
  // Independent slow currents; motion is visual, so it never feeds a contact spring.
  const floating=reduced.matches||held?.actor===a?0:1;
  a.floatBlend=(a.floatBlend??floating)+(floating-(a.floatBlend??floating))*(1-Math.exp(-4*dt));
  a.floatX=Math.sin(t*(.25+(p%1)*.18)+p)*(.045+(p%1)*.07)*a.floatBlend;
  a.floatY=Math.sin(t*(.32+(p%1.3)*.13)+p*1.7)*(.075+(p%1)*.095)*a.floatBlend;
  a.floatAngle=Math.sin(t*(.22+(p%1)*.13)+p*2.3)*.018*a.floatBlend;
  const lift=a.speaking?Math.max(0,4.1-a.layerOrder):0;a.focusLift=((a.focusLift||0)+(lift-(a.focusLift||0))*(1-Math.exp(-10*dt)));
  a.root.position.set(a.px+a.floatX,a.py+a.floatY,a.z+a.depth+a.focusLift);
  a.root.rotation.set(a.tiltX||0,a.tiltY||0,a.angle+a.turn+a.kick*.06+a.floatAngle);
  const breath=1+Math.sin(t*(.48+(p%1)*.17)+p)*(reduced.matches?0:.006),s=a.baseSize*breath*(a.entry??1);
  a.root.scale.set(s*a.squeeze*(1+a.kick*.10),s/a.squeeze*(1-a.kick*.09),s*.85);
  if(isMonster){deform(a,dt);a.face.update(t+p,dt,'awake',Math.max(0,a.kick)*.3+a.press*.7,false,reduced.matches);}
}
function deform(a,dt){
  if(!a.sim||!a.deforming||!dt)return;
  const pressing=held?.actor===a;
  a.press+=((pressing?held.strength:0)-a.press)*(1-Math.exp(-14*dt));
  if(pressing&&a.press>.65&&!held.feltCompression){held.feltCompression=true;feedback.pulse('grip',a.press);}
  if(pressing){
    const p=held.local,steps=Math.ceil(dt*120);
    for(let i=0;i<steps;i++)a.sim.step(dt/steps,{tension:.65,colliders:[{x:p.x,y:p.y,z:p.z+.29-.24*a.press,r:.32}]});
  }else if(a.sim.recover(dt)){a.deforming=false;a.press=0;}
  const out=a.body.geometry.attributes.position.array;
  a.shape.skin.stencils.forEach((stencil,i)=>out.set(sampleSkin(a.sim.p,stencil),i*3));
  a.body.geometry.attributes.position.needsUpdate=true;a.body.geometry.computeVertexNormals();a.body.geometry.computeBoundingSphere();if(!a.shape.data.noSeam)updateSeam(a.rim.geometry,out,a.shape.skin.rim);
}
function draw(dt){
  const objects=[...actors,...ornaments];
  if(held){held.elapsed+=dt;held.strength=.08+.92*Math.min(1,held.elapsed/2);}
  const awake=!!held||time<motionUntil;
  const contacts=awake?advancePile(objects,dt,time,held,reduced.matches,viewWidth,viewHeight):0;
  if(!awake)for(const a of objects){a.angle+=a.turn;a.turn=0;a.entry=1;a.entryVelocity=0;a.vx=a.vy=a.omega=a.velocity=a.vz=0;a.kick=0;a.x=a.px;a.y=a.py;}

  for(const a of actors)pose(a,dt,true);for(const a of ornaments)pose(a,dt,false);updateGaze();speech?.update(time,dt,actors,camera,reduced.matches,held);updateWork(camera);profiler?.begin();renderer.render(scene,camera);profiler?.end();
  if(time-(draw.metricsAt||-1)>.25){
    draw.metricsAt=time;document.body.dataset.triangles=String(renderer.info.render.triangles);document.body.dataset.drawCalls=String(renderer.info.render.calls);document.body.dataset.time=time.toFixed(2);document.body.dataset.sleeping=String(!awake);document.body.dataset.entry=String(Math.min(...objects.map(a=>a.entry??1)).toFixed(3));document.body.dataset.motion=JSON.stringify({contacts:Math.round(contacts),speed:+objects.reduce((sum,a)=>sum+Math.hypot(a.vx,a.vy),0).toFixed(3),press:+(held?.actor.press||0).toFixed(3),deforming:actors.filter(a=>a.deforming).length});
  }
}
function tick(now){raf=0;if(document.hidden)return;if(time>=motionUntil&&!held&&now-last<32){raf=requestAnimationFrame(tick);return;}const dt=Math.min((now-last)/1000||0,.035);last=now;time+=dt;draw(dt);if(!reduced.matches||held||[...actors,...ornaments].some(a=>a.deforming||Math.abs(a.kick)+Math.abs(a.velocity)+Math.hypot(a.vx,a.vy)>.002))raf=requestAnimationFrame(tick);}
function wake(){if(openingReleased&&!raf&&!document.hidden){last=performance.now();raf=requestAnimationFrame(tick);}}
function applyWind(dx,dy,strength){
  if(!actors.length)return;
  motionUntil=time+5;
  for(const a of [...actors,...ornaments]){const gain=strength*6/Math.sqrt(Math.max(.5,a.mass));a.vx+=dx*gain;a.vy+=dy*gain;a.omega+=(a.phase/Math.PI-1)*gain*.09;a.face?.touch(dx*.1,dy*.1);}
  document.body.dataset.wind=String(strength.toFixed(3));wake();
}
function bounce(a,strength=1){motionUntil=time+2.3;a.velocity=5*strength;a.vx+=Math.cos(a.phase)*.7*strength;a.vy+=Math.sin(a.phase)*.7*strength;a.omega+=.35*strength;a.face?.touch(0,.4);document.body.dataset.touches=String(+(document.body.dataset.touches||0)+1);wake();}
const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
let pointerActive=false;
canvas.addEventListener('pointerleave',()=>{pointerActive=false;});
function updateGaze(){
  if(!pointerActive)return;
  const x=pointer.x*camera.right,y=pointer.y*camera.top;
  for(const a of actors){
    if(Math.hypot(x-a.root.position.x,y-a.root.position.y)>a.radius+1.8)continue;
    a.root.updateWorldMatrix(true,false);
    const local=a.root.worldToLocal(new THREE.Vector3(x,y,a.root.position.z));a.face.look(local.x,local.y);
  }
}
const dragPlane=new THREE.Plane(new THREE.Vector3(0,0,1),0);
function pointerWorld(e){pointer.set(e.clientX/innerWidth*2-1,1-e.clientY/innerHeight*2);ray.setFromCamera(pointer,camera);return ray.ray.intersectPlane(dragPlane,new THREE.Vector3());}
function anchorGrip(){
  const a=held.actor;
  a.root.rotation.set(a.tiltX||0,a.tiltY||0,a.angle+a.turn);
  a.root.updateMatrixWorld(true);
  const anchor=a.root.localToWorld(held.local.clone());
  held.offset.set(anchor.x-a.px,anchor.y-a.py,0);
}
function rebaseGesture(){
  const p=[...held.points.values()];
  held.previous=p.length===2?p[0].clone().add(p[1]).multiplyScalar(.5):p[0].clone();
  held.distance=p.length===2?p[0].distanceTo(p[1]):0;
  held.twist=p.length===2?Math.atan2(p[1].y-p[0].y,p[1].x-p[0].x):0;
  held.lastMove=performance.now();
  held.target=held.previous.clone();
  held.offset.set(held.target.x-held.actor.px,held.target.y-held.actor.py,0);
  held.local=held.actor.root.worldToLocal(new THREE.Vector3(held.target.x,held.target.y,held.actor.root.position.z));
}
canvas.addEventListener('pointerdown',e=>{
  if(!camera||e.button!==0)return;
  const world=pointerWorld(e);
  if(held){
    if(e.pointerType==='touch'&&!held.points.has(e.pointerId)&&held.points.size<2){held.points.set(e.pointerId,world);held.moved=true;rebaseGesture();canvas.setPointerCapture(e.pointerId);}return;
  }
  const invitation=speech?.invitedActor(ray);if(invitation){showWork(invitation,speech,time,reduced.matches);return;}
  if(speech?.hit(ray))return;
  closeWork();
  const hit=ray.intersectObjects(pickables,false)[0];if(!hit)return;
  const a=hit.object.userData.actor,bodyHit=a.body?ray.intersectObject(a.body)[0]:null,local=a.root.worldToLocal((bodyHit?.point||hit.point).clone());
  held={id:e.pointerId,actor:a,startX:e.clientX,startY:e.clientY,startAt:performance.now(),elapsed:0,strength:.08,moved:false,points:new Map([[e.pointerId,world]]),local,target:world,offset:new THREE.Vector3(world.x-a.px,world.y-a.py,0)};
  held.previous=world.clone();held.lastMove=performance.now();
  if(a.body&&!a.isGlyph){if(!a.sim){a.sim=new Membrane(a.shape.data);a.body.geometry=a.body.geometry.clone();a.rim.geometry=a.rim.geometry.clone();}a.deforming=true;}
  feedback.pulse('press',.25+Math.min(.4,Math.hypot(local.x,local.y)*.2),{size:a.userScale||1});canvas.setPointerCapture(e.pointerId);bounce(a,.08);document.body.dataset.held='true';wake();
});
canvas.addEventListener('pointermove',e=>{
  if(!camera)return;
  const gaze=pointerWorld(e);
  pointerActive=true;
  if(!held)canvas.style.cursor=ray.intersectObjects(pickables,false).length?'grab':'default';
  wake();
  if(!held||!held.points.has(e.pointerId))return;
  held.points.set(e.pointerId,gaze);
  if(Math.hypot(e.clientX-held.startX,e.clientY-held.startY)>9)held.moved=true;
  const p=[...held.points.values()],center=p.length===2?p[0].clone().add(p[1]).multiplyScalar(.5):gaze;
  const now=performance.now(),dt=Math.max(.008,Math.min(.1,(now-held.lastMove)/1000));
  rollGrip(held.actor,held.offset,center.x-held.previous.x,center.y-held.previous.y,dt);
  if(p.length===2){
    const distance=p[0].distanceTo(p[1]),twist=Math.atan2(p[1].y-p[0].y,p[1].x-p[0].x);
    if(held.distance>.05)scaleGrip(held.actor,(held.actor.userScale||1)*distance/held.distance);
    held.actor.angle+=Math.atan2(Math.sin(twist-held.twist),Math.cos(twist-held.twist));
    held.distance=distance;held.twist=twist;
  }
  const speed=center.distanceTo(held.previous)/dt;
  if(speed>.12)feedback.pulse('rub',Math.min(1,speed/6),{size:held.actor.userScale||1});
  if(p.length===2&&Math.abs((held.actor.userScale||1)-(held.soundScale||1))>.035){
    feedback.pulse('scale',.5,{size:held.actor.userScale||1,direction:(held.actor.userScale||1)-(held.soundScale||1)});held.soundScale=held.actor.userScale||1;
  }
  held.previous=center.clone();held.lastMove=now;held.target=center;
  anchorGrip();
  document.body.dataset.rotation3d=JSON.stringify({x:held.actor.tiltX,y:held.actor.tiltY});
  document.body.dataset.balloonScale=String(held.actor.userScale||1);
  wake();
});
canvas.addEventListener('wheel',e=>{
  if(!camera)return;
  pointerWorld(e);
  const actor=held?.actor||ray.intersectObjects(pickables,false)[0]?.object.userData.actor;
  if(!actor)return;
  e.preventDefault();
  const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
  const before=actor.userScale||1;
  scaleGrip(actor,(actor.userScale||1)*Math.exp(-Math.max(-100,Math.min(100,delta))*.002));
  if(actor.userScale!==before){feedback.unlock();feedback.pulse('scale',Math.min(1,Math.abs(delta)/80),{size:actor.userScale,direction:actor.userScale-before});}
  if(held)anchorGrip();
  motionUntil=time+2.3;document.body.dataset.balloonScale=String(actor.userScale);wake();
},{passive:false});

function release(tap=false){
  if(held){if(tap&&(held.moved||held.actor.press>.15))feedback.pulse('release',Math.min(1,.25+Math.hypot(held.actor.vx,held.actor.vy)/8),{size:held.actor.userScale||1});motionUntil=time+2.3;if(tap&&!held.moved&&performance.now()-held.startAt<650&&held.actor.face){showWork(held.actor,speech,time,reduced.matches);}}
  held=null;document.body.dataset.held='false';wake();
}
function endPointer(e,tap){
  if(!held?.points.has(e.pointerId))return;
  held.points.delete(e.pointerId);
  if(held.points.size){held.id=held.points.keys().next().value;rebaseGesture();return;}
  release(tap);
}
canvas.addEventListener('pointerup',e=>endPointer(e,true));
for(const event of ['pointercancel','lostpointercapture'])canvas.addEventListener(event,e=>endPointer(e,false));
window.addEventListener('blur',()=>release(false));
canvas.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();actors.forEach(a=>bounce(a));}});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else wake();});
reduced.addEventListener('change',()=>{draw(0);wake();});
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);raf=0;status.textContent='Restoring the playground…';status.hidden=false;});
canvas.addEventListener('webglcontextrestored',()=>location.reload());

function balloonFlower(id){
  const root=new THREE.Group(),petals=id==='daisy'?7:5,geometry=new THREE.SphereGeometry(1,24,16),white=material('#fffaf1'),yellow=material('#f2bf2e');white.name='Petals';yellow.name='Center';
  for(let i=0;i<petals;i++){const angle=i/petals*Math.PI*2,petal=new THREE.Mesh(geometry,white);petal.name='Petal';petal.position.set(Math.cos(angle)*.29,Math.sin(angle)*.29,0);petal.scale.set(.32,.145,.14);petal.rotation.z=angle;root.add(petal);}
  const center=new THREE.Mesh(geometry,yellow);center.name='Center';center.position.z=.14;center.scale.set(.19,.19,.15);root.add(center);root.userData.itemId=id;return root;
}
async function init(){
  try{
    renderer=new THREE.WebGLRenderer({canvas,antialias:true});profiler=createProfile(renderer);renderer.transmissionResolutionScale=.5;renderer.setClearColor('#dcd8d0');renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.98;
    scene=new THREE.Scene();camera=new THREE.OrthographicCamera(-6,6,4,-4,.1,200);camera.position.set(0,0,15);
    const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.04);scene.environment=env.texture;scene.environmentIntensity=.32;room.dispose();pmrem.dispose();
    scene.add(new THREE.HemisphereLight('#fffaf0','#c9bfac',.78));const key=new THREE.DirectionalLight('#fff7ee',1.9);key.position.set(-5,7,9);scene.add(key);
    const fill=new THREE.DirectionalLight('#e2ecff',.4);fill.position.set(5,-2,6);scene.add(fill);
    const response=await fetch('./membrane.json');if(!response.ok)throw Error('Membrane load failed');await response.json();const data=crowdShell();renderSkin=skin(data);document.body.dataset.shapeSource='Authored classic balloon outlines';
    geometries=kinds.map(kind=>{const shaped=weldContour(relaxCrowdShell(classicPaths[kind]?inflateOrigin(data,classicPaths[kind]):crowdShape(data,kind))),renderSkin={stencils:Array.from({length:shaped.positions.length/3},(_,i)=>[[i,1]]),triangles:shaped.triangles,rim:shaped.rim},positions=renderSkin.stencils.flatMap(s=>sampleSkin(shaped.positions,s));const body=new THREE.BufferGeometry();body.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));body.setIndex(renderSkin.triangles);body.computeVertexNormals();if(!shaped.noSeam)prepareFilm(body,renderSkin.rim);const rim=createSeam(renderSkin.rim.length);updateSeam(rim,positions,renderSkin.rim);rim.setAttribute('filmEdge',new THREE.BufferAttribute(new Float32Array(rim.attributes.position.count),1));let collision;
      if(shaped.noSeam){collision=[];for(let k=0;k<140;k+=5){const vertices=[];let lo=Infinity,hi=-Infinity;for(let row=k;row<=Math.min(144,k+5);row++)for(let j=0;j<12;j++){const v=row*12+j,z=shaped.positions[v*3+2];vertices.push({x:shaped.positions[v*3],y:shaped.positions[v*3+1]});lo=Math.min(lo,z);hi=Math.max(hi,z);}collision.push(convexPart(vertices,lo,hi));}}
      else{const contour=renderSkin.rim.map(i=>({x:positions[i*3],y:positions[i*3+1]}));body.computeBoundingBox();collision=polygonParts(contour,body.boundingBox.min.z-.012,body.boundingBox.max.z+.10);}
      return {body,rim,data:shaped,skin:renderSkin,collision};});
    const manifest=await fetch('./items/manifest.json');if(!manifest.ok)throw Error('Items load failed');const items=(await manifest.json()).filter(item=>!['bean','pillow','cloud','leaf'].includes(item.id)),loader=new GLTFLoader();
    models=await Promise.all(items.map(async item=>{if(['flower','daisy','spark','star'].includes(item.id))return balloonFlower(item.id);const gltf=await loader.loadAsync('./items/'+item.id+'.glb');gltf.scene.traverse(o=>{if(!o.isMesh)return;for(const a of [o.geometry.attributes.position,o.geometry.attributes.normal]){if(!a)continue;for(let i=0;i<a.count;i++){const y=a.getY(i),z=a.getZ(i);a.setY(i,-z);a.setZ(i,y);}a.needsUpdate=true;}o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();o.material.side=item.id==='heart'?THREE.DoubleSide:THREE.FrontSide;if(item.id!=='heart'&&!o.material.map){const original=o.geometry;o.geometry=compactItemGeometry(original);if(o.geometry!==original)original.dispose();}});gltf.scene.userData.itemId=item.id;return gltf.scene;}));
    await document.fonts.load('400 80px fatfrank');document.body.dataset.typeface=document.fonts.check('400 80px fatfrank')?'FatFrank':'fallback';
    speech=createSpeech(scene,(actor,message,phrase)=>feedback.babble({size:actor.userScale||1,message,phrase}),()=>feedback.stopVoice());createWindControls(applyWind);resize();createColorMode(scene,renderer,()=>draw(0));window.addEventListener('resize',resize);await renderer.compileAsync(scene,camera);draw(0);status.hidden=true;document.body.dataset.ready='true';
    await opening.finish(()=>{openingReleased=true;wake();});
  }catch(error){opening.cancel();console.error(error);status.hidden=false;status.textContent='Could not load the playground. Please refresh.';document.body.dataset.error=error.message;}
}
document.querySelector('#reload-crowd').addEventListener('click',event=>{
  const button=event.currentTarget;button.disabled=true;button.dataset.reloading='true';
  setTimeout(()=>location.reload(),reduced.matches?0:180);
});
init();
