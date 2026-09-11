import {createCollectionFaceIcon} from './collection-face-icon.js';
import * as THREE from 'three';
import {projects} from './portfolio-projects.js';
import {showWork,closeWork} from './crowd-portfolio.js';
import {collectionLayout,collectionAnchor} from './collection-layout.js';
import './collection.css';

export function createCollection({actors,ornaments,scene,camera,renderer,feedback,seed,wake,onChange,speech,getTime}){
  let active=false,selected=null,layout=[],oldBackground,oldClear,transition=null;
  const savedGeometry=new Map();
  const chrome=document.createElement('nav');chrome.className='collection-switch';chrome.setAttribute('aria-label','Display mode');
  const crowdButton=document.createElement('button'),collectionButton=document.createElement('button');
  for(const [button,name] of [[crowdButton,'Crowd'],[collectionButton,'Collection']]){
    button.setAttribute('aria-label',name);button.dataset.mode=name.toLowerCase();
    const icon=document.createElement('span');icon.className='mode-symbol';icon.setAttribute('aria-hidden','true');
    if(name==='Collection'){
      icon.classList.add('mode-balloon-grid');
      for(let i=0;i<4;i++){const block=document.createElement('i');icon.append(block);}
    }

    button.append(icon);
  }
  for(const button of [crowdButton,collectionButton])button.type='button';
  chrome.append(crowdButton,collectionButton);document.querySelector('.play-controls').insertBefore(chrome,document.querySelector('#reload-crowd'));document.body.append(document.querySelector('#reload-crowd'));
  const updateIcon=createCollectionFaceIcon(crowdButton.querySelector('.mode-symbol'));
  const labels=document.createElement('div');labels.className='collection-labels';labels.hidden=true;document.body.append(labels);
  const numbers=document.createElement('div');numbers.className='collection-numbers';numbers.hidden=true;document.body.append(numbers);
  function clear(){closeWork();speech.clear();selected=null;labels.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed','false'));}
  function select(actor){
    if(!active||actor.projectIndex>=projects.length)return;
    if(selected===actor){clear();return;}
    clear();feedback.unlock();selected=actor;
    const slot=actor.collectionSlot;
    const options=[];
    const speechWidth=innerWidth<620?142:210,workWidth=Math.min(168,innerWidth*.39);
    for(let i=0;i<24;i++){
      const workAngle=(Math.floor(Math.random()*4)*90+25+Math.random()*40)*Math.PI/180;
      const speechAngle=workAngle+(135+Math.random()*90)*Math.PI/180;
      const gap=5+Math.random()*9;
      const boxes=[{angle:workAngle,width:workWidth,height:workWidth*.8},{angle:speechAngle,width:speechWidth,height:90}];
      let overflow=0;
      for(const box of boxes){
        const {x,y}=collectionAnchor(slot,box.angle,box.width,box.height,gap);
        overflow+=Math.max(0,12-(x-box.width/2))+Math.max(0,x+box.width/2-innerWidth+12)+Math.max(0,66-(y-box.height/2))+Math.max(0,y+box.height/2-innerHeight+20);
      }
      options.push({workAngle,speechAngle,gap,overflow});
    }
    const minimum=Math.min(...options.map(option=>option.overflow));
    const available=options.filter(option=>option.overflow<=minimum+1);
    actor.collectionArrangement=available[Math.floor(Math.random()*available.length)];
    actor.collectionPop=getTime();
    showWork(actor,speech,getTime(),matchMedia('(prefers-reduced-motion: reduce)').matches);
    labels.querySelector(`[data-project="${actor.projectIndex}"]`)?.setAttribute('aria-pressed','true');wake();
  }
  function positionActor(a){
    const slot=a.collectionSlot;slot.y=slot.layoutY-labels.scrollTop;const unit=(camera.right-camera.left)/innerWidth;
    const center=a.body.geometry.boundingBox.getCenter(new THREE.Vector3()).multiplyScalar(a.root.scale.x).applyEuler(a.root.rotation);
    a.root.position.set(camera.left+slot.x*unit-center.x,camera.top-slot.y*unit-center.y,-center.z);
  }
  function resize(){
    if(!active)return;
    renderer.setPixelRatio(Math.min(devicePixelRatio,2.5));
    layout=collectionLayout(projects.length,labels.clientWidth,innerHeight,seed);
    const oldScroll=labels.scrollTop;
    labels.replaceChildren();numbers.replaceChildren();
    const extent=document.createElement('div');extent.className='collection-extent';extent.style.height=Math.max(innerHeight,...layout.map(s=>s.y+s.cellHeight/2+110))+'px';labels.append(extent);
    actors.forEach((a,i)=>{a.root.visible=i<projects.length;});ornaments.forEach(a=>a.root.visible=false);
    for(const [index,slot] of layout.entries()){
      const a=actors[slot.projectIndex];
      a.collectionFaces=()=>actors.slice(0,projects.length).filter(other=>other.root.visible).map(other=>{const p=other.face.mouthPosition().project(camera);const x=(p.x*.5+.5)*innerWidth,y=(-p.y*.5+.5)*innerHeight;const r=Math.max(18,other.collectionSlot.size*.16);return {left:x-r,right:x+r,top:y-r*1.6,bottom:y+r};});
      a.body.geometry.computeBoundingBox();
      const bounds=a.body.geometry.boundingBox,size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());
      const unit=(camera.right-camera.left)/innerWidth,scale=slot.size*unit/Math.max(size.x,size.y)/1.17;
      const angle=slot.angle; a.collectionSlot={...slot,layoutY:slot.y};
      a.root.scale.setScalar(scale);if(!a.collectionRotation)a.collectionRotation=new THREE.Euler(0,0,angle);a.root.rotation.copy(a.collectionRotation);positionActor(a);
      const button=document.createElement('button');button.type='button';button.dataset.project=slot.projectIndex;
      button.setAttribute('aria-label',`${index+1}. ${projects[slot.projectIndex].title}`);button.setAttribute('aria-pressed',String(selected===a));
      button.style.cssText=`left:${slot.x}px;top:${slot.y}px;width:${slot.size+14}px;height:${slot.size+20}px`;
      const number=document.createElement('span');number.textContent=String(index+1);number.dataset.project=slot.projectIndex;numbers.append(number);
      let drag=null,suppressClick=false;
      button.addEventListener('pointerdown',e=>{if(e.button!==0)return;delete a.collectionPop;a.root.rotation.copy(a.collectionRotation);drag={x:e.clientX,y:e.clientY,moved:false};suppressClick=false;button.setPointerCapture(e.pointerId);});
      button.addEventListener('pointermove',e=>{
        if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
        if(!drag.moved&&Math.hypot(dx,dy)<5)return;
        drag.moved=true;suppressClick=true;
        a.root.rotateOnWorldAxis(new THREE.Vector3(0,1,0),dx*.012);
        a.root.rotateOnWorldAxis(new THREE.Vector3(1,0,0),dy*.012);
        a.collectionRotation.copy(a.root.rotation);positionActor(a);drag.x=e.clientX;drag.y=e.clientY;wake();
      });
      for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>{drag=null;});
      button.addEventListener('click',()=>{if(suppressClick){suppressClick=false;return;}select(a);});labels.append(button);
    }
    labels.scrollTop=oldScroll;actors.slice(0,projects.length).forEach(positionActor);
  }
  labels.addEventListener('scroll',()=>{
    if(!active)return;
    for(const a of actors.slice(0,projects.length))positionActor(a);
    if(selected&&(selected.collectionSlot.y<50||selected.collectionSlot.y>innerHeight-20))clear();
    wake();
  },{passive:true});
  labels.addEventListener('click',e=>{if(e.target===labels||e.target.classList.contains('collection-extent'))clear();});
  function setActive(next){
    if(active===next)return;
    const from=new Map([...actors,...ornaments].map(a=>[a,{position:a.root.position.clone(),quaternion:a.root.quaternion.clone(),scale:a.root.visible?a.root.scale.clone():new THREE.Vector3(.001,.001,.001)}]));
    const fromColor=scene.background?.isColor?scene.background.clone():renderer.getClearColor(new THREE.Color());
    transition=null;
    clear();active=next;document.body.style.setProperty('--collection-footer-opacity','0');document.body.dataset.collection=String(active);document.querySelector('#camera-toggle').inert=active;labels.hidden=!active;numbers.hidden=!active;
    crowdButton.setAttribute('aria-pressed',String(!active));collectionButton.setAttribute('aria-pressed',String(active));
    onChange(active);
    if(active){
      oldBackground=scene.background;oldClear=renderer.getClearColor(new THREE.Color());scene.background=new THREE.Color('#ffffff');
      for(const a of actors){savedGeometry.set(a,a.body.geometry);a.body.geometry=a.shape.body;}
      resize();
    }else{
      scene.background=oldBackground;renderer.setClearColor(oldClear);
      for(const a of actors){a.body.geometry=savedGeometry.get(a)||a.body.geometry;a.root.visible=true;delete a.collectionSlot;delete a.collectionRotation;}
      ornaments.forEach(a=>a.root.visible=true);savedGeometry.clear();
    }
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
      const toColor=scene.background?.isColor?scene.background.clone():renderer.getClearColor(new THREE.Color());
      transition={from,fromColor,toColor,start:getTime()};
      blend(getTime());
    }
    if(!transition)document.body.style.setProperty('--collection-footer-opacity',active?'1':'0');
    const url=new URL(location.href);if(active)url.searchParams.set('mode','collection');else url.searchParams.delete('mode');history.replaceState(null,'',url);
    wake();
  }
  function blend(time){
    if(!transition)return;
    const progress=Math.min(1,Math.max(0,(time-transition.start)/.95));
    const ease=progress*progress*progress*(progress*(progress*6-15)+10);
    for(const a of [...actors,...ornaments]){
      const start=transition.from.get(a);if(!start)continue;
      const hide=active&&(!a.collectionSlot);
      if(active&&a.collectionSlot)positionActor(a);
      const targetScale=hide?new THREE.Vector3(.001,.001,.001):a.root.scale.clone();
      // Collection targets stay fixed while the crowd computes fresh target poses each frame.
      if(active){
        if(!start.target){start.target={position:a.root.position.clone(),quaternion:a.root.quaternion.clone(),scale:targetScale};}
        a.root.position.copy(start.target.position);a.root.quaternion.copy(start.target.quaternion);targetScale.copy(start.target.scale);
      }
      a.root.position.lerpVectors(start.position,a.root.position,ease);
      const targetQuaternion=a.root.quaternion.clone();
      a.root.quaternion.slerpQuaternions(start.quaternion,targetQuaternion,ease);
      a.root.scale.lerpVectors(start.scale,targetScale,ease);a.root.visible=progress<1||!hide;
    }
    scene.background=new THREE.Color().lerpColors(transition.fromColor,transition.toColor,ease);
    // Reveal numbering only once the characters are nearly settled.
    const labelProgress=Math.max(0,Math.min(1,(progress-.8)/.2));
    labels.style.opacity=String(active?labelProgress*labelProgress*(3-2*labelProgress):0);numbers.style.opacity=labels.style.opacity;
    labels.style.pointerEvents=progress<1?'none':'';
    if(progress===1){transition=null;labels.style.opacity='';numbers.style.opacity='';labels.style.pointerEvents='';document.body.style.setProperty('--collection-footer-opacity',active?'1':'0');}
  }
  function update(time,dt,reduced){
    if(!active)return;
    for(const a of actors.slice(0,projects.length)){
      positionActor(a);
      if(a.collectionPop!==undefined){
        const age=time-a.collectionPop;
        a.root.rotation.copy(a.collectionRotation);
        if(!reduced&&age<.7){const spring=Math.sin(age/.7*Math.PI)*Math.exp(-age*2);a.root.rotation.y+=spring*.65;a.root.rotation.z+=spring*.13;positionActor(a);a.root.position.y+=spring*.18;}
        else{delete a.collectionPop;positionActor(a);}
      }
      a.face.update(time+a.phase,dt,'awake',0,false,reduced);
    }

  }
  function updateLabels(){
    if(!active)return;
    const cloud=speech.bounds(),work=document.querySelector('#work-bubble');
    const obstacles=[cloud,work&&!work.hidden&&work.style.visibility==='visible'?work.getBoundingClientRect():null].filter(Boolean);
    const states=[...numbers.querySelectorAll('span')].map(number=>{
      const actor=actors[Number(number.dataset.project)],slot=actor.collectionSlot;
      number.style.left=(slot.x-slot.size/2-7)+'px';
      number.style.top=(slot.y+slot.size/2-8)+'px';
      const rect=number.getBoundingClientRect();
      return [number,obstacles.some(o=>rect.right>o.left-8&&rect.left<o.right+8&&rect.bottom>o.top-8&&rect.top<o.bottom+8)];
    });
    for(const [number,covered] of states)number.style.visibility=covered?'hidden':'';
  }
  crowdButton.addEventListener('click',()=>setActive(false));collectionButton.addEventListener('click',()=>setActive(true));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')clear();});
  crowdButton.setAttribute('aria-pressed','true');collectionButton.setAttribute('aria-pressed','false');
  return {get active(){return active;},setActive,resize,select,clear,update,blend,updateLabels,updateIcon};
}
