import * as THREE from 'three';
const cross=(a,b,c)=>(b.x-a.x)*(c.y-a.y)-(b.y-a.y)*(c.x-a.x);
function hull(points){const p=[...new Map(points.map(p=>[`${p.x},${p.y}`,p])).values()].sort((a,b)=>a.x-b.x||a.y-b.y);if(p.length<3)return p;const lo=[],hi=[];for(const q of p){while(lo.length>1&&cross(lo.at(-2),lo.at(-1),q)<=0)lo.pop();lo.push(q);}for(const q of p.toReversed()){while(hi.length>1&&cross(hi.at(-2),hi.at(-1),q)<=0)hi.pop();hi.push(q);}return lo.slice(0,-1).concat(hi.slice(0,-1));}
const area=p=>Math.abs(p.reduce((sum,a,i)=>{const b=p[(i+1)%p.length];return sum+a.x*b.y-b.x*a.y;},0)/2);
export function polygonParts(points,zMin=0,zMax=.8){
  const sampled=points.filter((_,i)=>i%Math.max(1,Math.floor(points.length/40))===0).map(p=>new THREE.Vector2(p.x,p.y));
  const parts=THREE.ShapeUtils.triangulateShape(sampled,[]).map(ids=>ids.map(i=>sampled[i]));
  let changed=true;
  while(changed){changed=false;outer:for(let i=0;i<parts.length;i++)for(let j=i+1;j<parts.length;j++){
    const shared=parts[i].filter(p=>parts[j].includes(p));if(shared.length<2)continue;
    const merged=hull([...parts[i],...parts[j]]);if(Math.abs(area(merged)-area(parts[i])-area(parts[j]))<1e-7){parts[i]=merged;parts.splice(j,1);changed=true;break outer;}
  }}
  return parts.map(points=>({points,zMin,zMax}));
}
export function convexPart(points,zMin,zMax){return {points:hull(points),zMin,zMax};}
export function meshParts(root){
  root.updateMatrixWorld(true);const points=[];let zMin=Infinity,zMax=-Infinity;
  root.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i+=Math.max(1,Math.floor(p.count/160))){const v=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);root.worldToLocal(v);points.push(v);zMin=Math.min(zMin,v.z);zMax=Math.max(zMax,v.z);}});
  return [{points:hull(points),zMin,zMax}];
}
export function worldParts(a){
  const scale=a.baseSize*(a.entry??1),sx=scale*a.squeeze*(1+a.kick*.10),sy=scale/a.squeeze*(1-a.kick*.09),angle=a.angle+a.turn+a.kick*.06+(a.floatAngle||0),c=Math.cos(angle),s=Math.sin(angle);
  if(a.tiltX||a.tiltY){
    const rotation=new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(a.tiltX||0,a.tiltY||0,angle));
    return a.collision.map(part=>{
      const vertices=[];
      for(const p of part.points)for(const z of [part.zMin,part.zMax])vertices.push(new THREE.Vector3(p.x*sx,p.y*sy,z*scale*.85).applyMatrix4(rotation));
      const points=hull(vertices.map(p=>({x:a.px+(a.floatX||0)+p.x,y:a.py+(a.floatY||0)+p.y})));
      const axes=points.map((p,i)=>{const q=points[(i+1)%points.length],len=Math.hypot(q.x-p.x,q.y-p.y);return len>1e-8?{x:-(q.y-p.y)/len,y:(q.x-p.x)/len}:null;}).filter(Boolean);
      const z=a.z+a.depth+(a.focusLift||0);
      return {points,axes,minX:Math.min(...points.map(p=>p.x)),maxX:Math.max(...points.map(p=>p.x)),minY:Math.min(...points.map(p=>p.y)),maxY:Math.max(...points.map(p=>p.y)),zMin:z+Math.min(...vertices.map(p=>p.z)),zMax:z+Math.max(...vertices.map(p=>p.z))};
    });
  }
  return a.collision.map(part=>{const points=part.points.map(p=>({x:a.px+(a.floatX||0)+p.x*sx*c-p.y*sy*s,y:a.py+(a.floatY||0)+p.x*sx*s+p.y*sy*c}));const axes=points.map((p,i)=>{const q=points[(i+1)%points.length],len=Math.hypot(q.x-p.x,q.y-p.y);return len>1e-8?{x:-(q.y-p.y)/len,y:(q.x-p.x)/len}:null;}).filter(Boolean);return {points,axes,minX:Math.min(...points.map(p=>p.x)),maxX:Math.max(...points.map(p=>p.x)),minY:Math.min(...points.map(p=>p.y)),maxY:Math.max(...points.map(p=>p.y)),zMin:a.z+a.depth+(a.focusLift||0)+part.zMin*scale*.85,zMax:a.z+a.depth+(a.focusLift||0)+part.zMax*scale*.85};});
}
function sat(a,b){
  if(a.maxX<=b.minX||b.maxX<=a.minX||a.maxY<=b.minY||b.maxY<=a.minY||a.zMax<=b.zMin||b.zMax<=a.zMin)return null;
  const za=a.zMax-b.zMin,zb=b.zMax-a.zMin;
  let depth=Math.min(za,zb),nx=0,ny=0,nz=za<zb?1:-1;
  for(const axes of [a.axes,b.axes])for(const {x,y} of axes){
    let amin=Infinity,amax=-Infinity,bmin=Infinity,bmax=-Infinity;
    for(const p of a.points){const t=p.x*x+p.y*y;amin=Math.min(amin,t);amax=Math.max(amax,t);}for(const p of b.points){const t=p.x*x+p.y*y;bmin=Math.min(bmin,t);bmax=Math.max(bmax,t);}
    if(amax<=bmin||bmax<=amin)return null;
    const positive=amax-bmin,negative=bmax-amin,d=Math.min(positive,negative);if(d<depth){depth=d;nx=positive<negative?x:-x;ny=positive<negative?y:-y;nz=0;}
  }
  return {depth,nx,ny,nz};
}
export function shapeContact(a,b){
  let deepest=null;
  for(const p of a.worldCollision)for(const q of b.worldCollision){const hit=sat(p,q);if(hit&&(!deepest||hit.depth>deepest.depth))deepest=hit;}
  return deepest;
}
