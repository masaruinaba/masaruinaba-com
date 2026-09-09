import * as THREE from 'three';

// Small decorative balloons need a smooth outline, not thousands of hidden facets.
// Cluster nearby vertices once at load time and retain the averaged surface normals.
export function compactItemGeometry(source){
  const p=source.attributes.position,n=source.attributes.normal;
  if(p.count<1800)return source;
  source.computeBoundingBox();
  const extent=source.boundingBox.getSize(new THREE.Vector3()),cell=Math.max(extent.x,extent.y,extent.z)/32;
  const groups=new Map(),vertices=[],remap=new Uint32Array(p.count);
  for(let i=0;i<p.count;i++){
    const key=[p.getX(i),p.getY(i),p.getZ(i)].map(v=>Math.round(v/cell)).join(',');
    let id=groups.get(key);
    if(id===undefined){id=vertices.length;groups.set(key,id);vertices.push({p:new THREE.Vector3(),n:new THREE.Vector3(),count:0});}
    const v=vertices[id];v.p.add(new THREE.Vector3().fromBufferAttribute(p,i));if(n)v.n.add(new THREE.Vector3().fromBufferAttribute(n,i));v.count++;remap[i]=id;
  }
  const indices=[],seen=new Set(),count=source.index?.count||p.count;
  for(let i=0;i<count;i+=3){const ids=[0,1,2].map(j=>remap[source.index?source.index.getX(i+j):i+j]);if(new Set(ids).size<3)continue;const key=ids.slice().sort((a,b)=>a-b).join(',');if(seen.has(key))continue;seen.add(key);indices.push(...ids);}
  const result=new THREE.BufferGeometry();
  result.setAttribute('position',new THREE.Float32BufferAttribute(vertices.flatMap(v=>v.p.divideScalar(v.count).toArray()),3));
  result.setAttribute('normal',new THREE.Float32BufferAttribute(vertices.flatMap(v=>v.n.normalize().toArray()),3));
  result.setIndex(indices);result.computeBoundingBox();result.computeBoundingSphere();return result;
}
