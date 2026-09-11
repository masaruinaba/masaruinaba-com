import * as THREE from 'three';
import {createCrowdedFace} from '../special/balloon-portfolio/crowd-face.js';

const colors=['#0079F2','#FF6500','#FFD000','#EE1686','#7924D8','#00AD80'];
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
for(const link of document.querySelectorAll('.app-icon-link')){
  link.replaceChildren();
  Object.assign(link.style,{width:'30px',height:'30px'});
  link.href='/special/balloon-portfolio/';
  link.removeAttribute('target');
  link.setAttribute('aria-label','Balloon Portfolio');
  const canvas=document.createElement('canvas');
  canvas.setAttribute('aria-hidden','true');
  Object.assign(canvas.style,{width:'100%',height:'100%',display:'block',borderRadius:'34%'});
  link.append(canvas);
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.3;
  const scene=new THREE.Scene();
  scene.background=new THREE.Color(colors[0]);
  scene.add(new THREE.HemisphereLight('#fffaf1','#61546e',2.6));
  const light=new THREE.DirectionalLight('#ffffff',3.2);light.position.set(-2,3,5);scene.add(light);
  const fill=new THREE.DirectionalLight('#b9d6ff',.6);fill.position.set(2,-1,3);scene.add(fill);
  const camera=new THREE.OrthographicCamera(-.25,.25,.25,-.25,.01,10);
  camera.position.set(0,.215,3);camera.lookAt(0,.215,0);
  const root=new THREE.Group();scene.add(root);
  // Keep the body saturated; bright face lighting must not wash out its color.
  const material=new THREE.MeshBasicMaterial({color:colors[0],vertexColors:true,toneMapped:false});
  const geometry=new THREE.SphereGeometry(1,40,32);
  geometry.scale(.55,.55,.21);geometry.translate(0,.215,0);
  const shades=[];
  for(let i=0;i<geometry.attributes.position.count;i++){
    const shade=.84+.16*THREE.MathUtils.clamp((geometry.attributes.position.getY(i)+.335)/1.1,0,1);
    shades.push(shade,shade,shade);
  }
  geometry.setAttribute('color',new THREE.Float32BufferAttribute(shades,3));
  const body=new THREE.Mesh(geometry,material);
  root.add(body);
  // Exact eye meshes, lip geometry, gaze smoothing and blinking from the balloon scene.
  const face=createCrowdedFace(root,body,0);
  // Compact the icon's face before the shared surface-binding pass.
  face.face.children.forEach((part,index)=>{part.userData.anchor.y+=index===2?.035:-.01;});
  let visible=false,frame=0,last=0,nextColor=0,colorIndex=-1;
  const resize=new ResizeObserver(()=>{const r=link.getBoundingClientRect();if(r.width&&r.height)renderer.setSize(r.width,r.height,false);});resize.observe(link);
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;resume();});observer.observe(link);
  function draw(now){
    frame=0;if(!visible||document.hidden)return;
    if(now-last>=1000/30){
      const dt=Math.min((now-last)/1000,.05);last=now;
      if(colorIndex<0||(!reduced.matches&&now>=nextColor)){
        colorIndex=(colorIndex+1)%colors.length;nextColor=now+3000;
        material.color.set(colors[colorIndex]);scene.background.set(colors[colorIndex]);
        canvas.dataset.color=colors[colorIndex];
      }
      face.update(now/1000,dt,'awake',0,false,reduced.matches);
      renderer.render(scene,camera);
    }
    frame=requestAnimationFrame(draw);
  }
  function resume(){cancelAnimationFrame(frame);frame=0;if(visible&&!document.hidden){last=performance.now()-34;frame=requestAnimationFrame(draw);}}
  function look(event){const r=link.getBoundingClientRect();if(!r.width||!visible)return;face.look((event.clientX-r.left-r.width/2)/Math.max(r.width,180),.30-(event.clientY-r.top-r.height/2)/Math.max(r.height,180));}
  document.addEventListener('pointermove',look,{passive:true});
  link.addEventListener('pointerenter',()=>face.touch());
  document.addEventListener('visibilitychange',resume);
  window.addEventListener('pageshow',resume);
  window.addEventListener('pagehide',()=>cancelAnimationFrame(frame));
}
