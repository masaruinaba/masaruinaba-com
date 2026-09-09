import * as THREE from 'three';
import {familyData} from './family.js';

export const extraKinds=['burst','coil','petal'];
export function crowdShape(base,kind){
  if(kind==='coil')return coil();
  if(kind!=='burst'&&kind!=='petal')return familyData(base,kind,.72);
  const data={...base,positions:base.positions.slice()},count=kind==='burst'?7:6;
  const outline=Array.from({length:256},(_,i)=>{
    const a=i/256*Math.PI*2,lobe=Math.pow((1+Math.cos(count*(a-Math.PI/2)))/2,kind==='burst'?.70:.48);
    const radius=.44+(kind==='burst'?.77:.68)*lobe;return [Math.cos(a)*radius*.95,Math.sin(a)*radius*.95];
  });
  for(let i=0;i<data.positions.length;i+=3){
    const bx=base.positions[i],by=base.positions[i+1],bz=base.positions[i+2],a=Math.atan2(by,bx),r=Math.hypot(bx,by)/.95;
    const lobe=Math.pow((1+Math.cos(count*(a-Math.PI/2)))/2,kind==='burst'?.70:.48),radius=.44+(kind==='burst'?.77:.68)*lobe;
    const f=.74+(radius-.74)*Math.min(1,r*r),x=bx*f,y=by*f;
    let distance=Infinity;
    for(let j=0;j<outline.length;j++){const p=outline[j],q=outline[(j+1)%outline.length],dx=q[0]-p[0],dy=q[1]-p[1],t=Math.max(0,Math.min(1,((x-p[0])*dx+(y-p[1])*dy)/(dx*dx+dy*dy)));distance=Math.min(distance,Math.hypot(x-p[0]-t*dx,y-p[1]-t*dy));}
    const puff=.34*Math.sqrt(1-Math.exp(-distance/.14));
    data.positions[i]=x;data.positions[i+1]=y;data.positions[i+2]=.40+Math.sign(bz-.40)*puff;
  }
  return data;
}
function coil(){
  const centers=[];
  for(let i=0;i<=120;i++){const t=i/120,a=Math.PI+t*Math.PI*4.5;centers.push(new THREE.Vector3(.70*Math.cos(a),.93-t*1.86,.69+.43*Math.sin(a)));}
  const path=new THREE.CatmullRomCurve3(centers),g=new THREE.TubeGeometry(path,144,.205,12,false),p=g.attributes.position;
  // Weld the tube's repeated radial seam and add rounded, sealed end caps.
  const positions=[],triangles=[],n=145,m=12;
  for(let i=0;i<n;i++)for(let j=0;j<m;j++){const k=i*13+j;positions.push(p.getX(k),p.getY(k),p.getZ(k));}
  for(let i=0;i<n-1;i++)for(let j=0;j<m;j++){const a=i*m+j,b=(i+1)*m+j,c=i*m+(j+1)%m,d=(i+1)*m+(j+1)%m;triangles.push(a,c,b,b,c,d);}
  for(const end of [0,n-1]){
    const center=path.getPointAt(end===0?0:1),tangent=path.getTangentAt(end===0?0:1).multiplyScalar(end===0?-.16:.16),id=positions.length/3;
    center.add(tangent);positions.push(center.x,center.y,center.z);
    for(let j=0;j<m;j++){const a=end*m+j,b=end*m+(j+1)%m;if(end===0)triangles.push(id,b,a);else triangles.push(id,a,b);}
  }
  for(let i=0;i<triangles.length;i+=3)[triangles[i+1],triangles[i+2]]=[triangles[i+2],triangles[i+1]];
  g.dispose();return {positions,triangles,rim:Array.from({length:m},(_,j)=>j),noSeam:true,faceAnchor:{x:-.68,y:.91}};
}
