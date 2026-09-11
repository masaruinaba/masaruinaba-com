import * as THREE from 'three';
import {createCrowdedFace} from './crowd-face.js';

export function createCollectionFaceIcon(container){
  const canvas=document.createElement('canvas');container.append(canvas);
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2.5));renderer.setSize(32,32,false);
  renderer.setClearColor(0,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;
  const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight('#fffaf1','#61546e',2.6));
  const light=new THREE.DirectionalLight('#ffffff',3.2);light.position.set(-2,3,5);scene.add(light);
  const camera=new THREE.OrthographicCamera(-.21,.21,.21,-.21,.01,10);camera.position.set(0,.215,3);camera.lookAt(0,.215,0);
  const root=new THREE.Group();scene.add(root);
  const geometry=new THREE.SphereGeometry(1,40,32);geometry.scale(.55,.55,.21);geometry.translate(0,.215,0);
  const body=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({colorWrite:false,depthWrite:false}));root.add(body);
  const face=createCrowdedFace(root,body,0);
  face.face.children.forEach((part,index)=>{part.userData.anchor.y+=index===2?.035:-.01;});
  let last=-1,started=-Infinity,resting=false,hovered=false,focused=false;
  const button=container.closest('button');
  const react=()=>{started=performance.now();resting=false;};
  button.addEventListener('pointerenter',()=>{hovered=true;react();});
  button.addEventListener('pointerleave',()=>{hovered=false;resting=false;});
  button.addEventListener('focus',()=>{focused=button.matches(':focus-visible');react();});
  button.addEventListener('blur',()=>{focused=false;resting=false;});
  return (time,dt,reduced)=>{
    const age=((performance.now()-started)/1000)%1.8,playing=!reduced&&(hovered||focused);
    if(resting&&!playing)return;
    if(time-last<1/30)return;last=time;
    const glance=playing?Math.sin(Math.min(1,age/.9)*Math.PI*2)*.42:0;
    face.look(glance,.30);
    // Freeze the shared face's idle clock; this icon reacts only on interaction.
    face.update(0,.08,'awake',0,false,true);
    if(playing){
      const blink=Math.max(0,1-Math.abs(age-.67)/.09);
      for(const eye of face.face.children.slice(0,2))eye.scale.y*=1-blink*.92;
    }
    renderer.render(scene,camera);
    if(!playing){face.look(0,.30);face.update(0,1,'awake',0,false,true);renderer.render(scene,camera);resting=true;}
  };
}
