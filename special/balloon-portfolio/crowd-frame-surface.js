import * as THREE from 'three';
let renderer;
const cache=new Map();
// Render an actual rounded solid once per frame variant; no extra animation pass.
export function frameSurface(width,height,kind){
  const key=[width,height,kind].join(':');if(cache.has(key))return cache.get(key);
  renderer??=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
  const w=width+64,h=height+64;
  renderer.setPixelRatio(2);renderer.setSize(w,h,false);renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-w/2,w/2,h/2,-h/2,.1,1000);camera.position.z=400;
  scene.add(new THREE.HemisphereLight('#ffffff','#e5e2d9',2.5));
  const light=new THREE.DirectionalLight('#ffffff',.65);light.position.set(-100,180,250);scene.add(light);
  const path=new THREE.Shape(),x=w/2-13,y=h/2-13,r=22;
  // Repeat the edge detail around each corner too, with matching joins.
  const points=[];
  const period=kind==='pearls'?16:kind==='cloud'?44:kind==='burst'?35:25;
  const corners=[[x-r,y-r,0],[-x+r,y-r,Math.PI/2],[-x+r,-y+r,Math.PI],[x-r,-y+r,Math.PI*1.5]];
  for(let corner=0;corner<4;corner++){
    const [cx,cy,angle]=corners[corner],next=corners[(corner+1)%4];
    const cornerCount=Math.max(1,Math.round(r*Math.PI/2/period)),cornerSteps=64;
    for(let j=0;j<=cornerSteps;j++){
      const t=j/cornerSteps,a=angle+t*Math.PI/2,phase=t*cornerCount*Math.PI*2;
      const rounded=(1-Math.cos(phase))*.5;
      const wave=kind==='pillow'?0:kind==='ticket'?-4*rounded:kind==='steps'?-5*rounded*rounded:-6*rounded;
      points.push(new THREE.Vector2(cx+(r+wave)*Math.cos(a),cy+(r+wave)*Math.sin(a)));
    }
    const start=points.at(-1),end=new THREE.Vector2(next[0]+r*Math.cos(next[2]),next[1]+r*Math.sin(next[2]));
    const length=start.distanceTo(end),count=Math.max(1,Math.round(length/period)),steps=Math.max(2,Math.ceil(length));
    const tangent=end.clone().sub(start).normalize(),normal=new THREE.Vector2(tangent.y,-tangent.x);
    for(let j=1;j<steps;j++){
      const t=j/steps,phase=t*count*Math.PI*2;
      const rounded=(1-Math.cos(phase))*.5;
      const pointed=Math.acos(Math.cos(phase))/Math.PI;
      const fade=Math.min(1,t*count*2,(1-t)*count*2);
      const envelope=fade*fade*(3-2*fade);
      const wave=kind==='pillow'?0:kind==='ticket'?-4*rounded:kind==='zigzag'||kind==='burst'?7*pointed*envelope:kind==='steps'?5*rounded*rounded:6*rounded;
      points.push(start.clone().lerp(end,t).addScaledVector(normal,wave));
    }
  }
  path.moveTo(points[0].x,points[0].y);for(const p of points.slice(1))path.lineTo(p.x,p.y);path.closePath();
  const geometry=new THREE.ExtrudeGeometry(path,{depth:2,bevelEnabled:true,bevelSize:3.5,bevelThickness:3,bevelSegments:8,curveSegments:24,steps:1});
  const material=new THREE.MeshStandardMaterial({color:'#fffdf7',roughness:.72,metalness:0});scene.add(new THREE.Mesh(geometry,material));
  renderer.render(scene,camera);const result=`url("${renderer.domElement.toDataURL('image/png')}")`;
  geometry.dispose();material.dispose();if(cache.size>24)cache.delete(cache.keys().next().value);cache.set(key,result);return result;
}
