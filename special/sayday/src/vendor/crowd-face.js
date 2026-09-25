import * as THREE from 'three';
const sphere=new THREE.SphereGeometry(1,32,24);
const pupilSphere=new THREE.SphereGeometry(1,24,18);
const ivory=new THREE.MeshStandardMaterial({color:'#f3e8ce',roughness:.42});
const ink=new THREE.MeshStandardMaterial({color:'#202329',roughness:.28});
const lip=new THREE.MeshPhysicalMaterial({color:'#d77f82',roughness:.33,clearcoat:.18,clearcoatRoughness:.28});
const inner=new THREE.MeshStandardMaterial({color:'#68464c',roughness:.7});
const mouthPoints=Array.from({length:49},(_,i)=>{const a=i/48*Math.PI*2,x=.114*Math.cos(a);return new THREE.Vector3(x,.028*Math.sin(a)+.016*(x/.114)**2,.013);});
const lipsGeometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(mouthPoints.slice(0,-1),true),72,.024,12,true);
const openingGeometry=new THREE.ShapeGeometry(new THREE.Shape(mouthPoints.map(p=>new THREE.Vector2(p.x,p.y))),16);
export function createCrowdedFace(root,body,index,anchor){
  const variation=k=>{const x=Math.sin(index*127.1+k*311.7)*43758.5453;return x-Math.floor(x);};
  const eyeSize=.91+variation(1)*.18,eyeSpacing=.062+variation(2)*.022,eyeHeight=.285+variation(3)*.027;
  const mouthHeight=.107+variation(4)*.035,mouthSize=.79+variation(5)*.17;
  const face=new THREE.Group();root.add(face);const parts=[],eyes=[];let reaction=0,speech=0,nextBlink=18+(index*17.31)%55,blinkAt=-10,gazeX=0,gazeY=0,targetX=0,targetY=0,lastLook=-100;
  function part(x,y){const g=new THREE.Group();g.userData.anchor={x,y};parts.push(g);face.add(g);return g;}
  for(const side of [-1,1]){
    const g=part((anchor?.x||0)+side*(anchor?.052:eyeSpacing),anchor?anchor.y+.025:eyeHeight),white=new THREE.Mesh(sphere,ivory),pupil=new THREE.Mesh(pupilSphere,ink);
    white.scale.set(.078,.088,.055);pupil.scale.set(.032,.035,.014);pupil.position.set(-side*.005,-.004,.053);g.add(white,pupil);eyes.push(g);
  }
  const mouth=part(anchor?.x||0,anchor?anchor.y-.045:mouthHeight);mouth.add(new THREE.Mesh(lipsGeometry,lip));const opening=new THREE.Mesh(openingGeometry,inner);opening.position.z=.002;mouth.add(opening);
  const ray=new THREE.Raycaster(),up=new THREE.Vector3(0,0,1),point=new THREE.Vector3(),normal=new THREE.Vector3(),temp=new THREE.Vector3();
  function bind(){root.updateWorldMatrix(true,true);for(const g of parts){const a=g.userData.anchor;ray.set(root.localToWorld(new THREE.Vector3(a.x,a.y,2)),new THREE.Vector3(0,0,-1).applyQuaternion(root.quaternion));const h=ray.intersectObject(body)[0];if(!h)continue;const pos=body.geometry.attributes.position,ids=[h.face.a,h.face.b,h.face.c],vs=ids.map(i=>new THREE.Vector3().fromBufferAttribute(pos,i)),weights=new THREE.Vector3();THREE.Triangle.getBarycoord(body.worldToLocal(h.point.clone()),...vs,weights);g.userData.binding={ids,weights:weights.toArray()};}}
  return {face,mouthPosition(){root.updateWorldMatrix(true,true);return mouth.getWorldPosition(new THREE.Vector3());},look(x,y){targetX=Math.max(-1,Math.min(1,(x-(anchor?.x||0))*1.4));targetY=Math.max(-1,Math.min(1,(y-(anchor?anchor.y+.025:eyeHeight))*1.4));lastLook=performance.now();},speak(v){speech=v;},touch(){reaction=1;},update(t,dt,mood,pressed,paused,reduced){
    if(!parts[0].userData.binding)bind();
    const p=body.geometry.attributes.position,n=body.geometry.attributes.normal;
    for(const g of parts){const b=g.userData.binding;if(!b)continue;point.set(0,0,0);normal.set(0,0,0);for(let i=0;i<3;i++){point.addScaledVector(temp.fromBufferAttribute(p,b.ids[i]),b.weights[i]);normal.addScaledVector(temp.fromBufferAttribute(n,b.ids[i]),b.weights[i]);}normal.normalize();g.position.copy(point).addScaledVector(normal,anchor?.035:.012);g.quaternion.setFromUnitVectors(up,normal);}
    // A crease can tilt the two eye mounts in opposite directions. Preserve
    // their attachment positions, but align their gaze when the mounts diverge.
    const leftDirection=point.copy(up).applyQuaternion(eyes[0].quaternion);
    const rightDirection=normal.copy(up).applyQuaternion(eyes[1].quaternion);
    if(leftDirection.angleTo(rightDirection)>.15){
      leftDirection.add(rightDirection).normalize();
      eyes[0].quaternion.setFromUnitVectors(up,leftDirection);
      eyes[1].quaternion.copy(eyes[0].quaternion);
    }
    reaction=Math.max(0,reaction-dt*2);if(t>nextBlink){blinkAt=t;nextBlink=t+35+(index*13.7+t*1.7)%65;}const phase=t-blinkAt,blink=reduced?0:phase>=0&&phase<.20?Math.sin(phase/.20*Math.PI):0;
    if(performance.now()-lastLook>1800){targetX=Math.sin(Math.floor(t/(11+index%5))+index*2.1)*.6;targetY=Math.cos(Math.floor(t/17)+index)*.3;}
    const follow=1-Math.exp(-18*dt);gazeX+=(targetX-gazeX)*follow;gazeY+=(targetY-gazeY)*follow;
    for(const eye of eyes){const pupil=eye.children[1];pupil.position.x=gazeX*.031;pupil.position.y=-.002+gazeY*.027;pupil.position.z=.055*Math.sqrt(Math.max(.1,1-(pupil.position.x/.078)**2-(pupil.position.y/.088)**2))+.006;}
    const closure=Math.max(blink,pressed*.48);for(const eye of eyes)eye.scale.set(anchor?.60:eyeSize,(anchor?.60:eyeSize)*(1-closure*.85),anchor?.60:eyeSize);
    mouth.scale.setScalar(anchor?.48:mouthSize);mouth.scale.y*=1+speech*.70+reaction*.08;
  },dispose(){root.remove(face);}};
}
