import test from 'node:test';
import assert from 'node:assert/strict';
import {crowdShell} from './crowd-shell.js';
import {Membrane} from './physics.js';
import {convexPart,worldParts,shapeContact} from './crowd-collision.js';
import {initializeMotion,resolveDepth} from './crowd-physics.js';
import {estimateMotion,breathLevel,cameraGust} from './crowd-wind.js';
import {cornerPosition} from './camera-position.js';

test('balloon surface is closed, positive, and has one shared equator',()=>{
 const d=crowdShell(),edges=new Map();for(let i=0;i<d.triangles.length;i+=3)for(let j=0;j<3;j++){const key=[d.triangles[i+j],d.triangles[i+(j+1)%3]].sort((a,b)=>a-b).join(',');edges.set(key,(edges.get(key)||0)+1);}assert.ok([...edges.values()].every(n=>n===2));assert.ok(new Membrane(d).volume()>0);assert.equal(new Set(d.rim).size,192);assert.ok(d.rim.every(i=>Math.abs(d.positions[i*3+2]-.4)<1e-8));
});
export function fixture(){return Array.from({length:40},(_,i)=>{const a={x:(i%8)*.7,y:Math.floor(i/8)*.7,z:i*.013,baseSize:.6+(i%4)*.15,squeeze:1,kick:0,angle:i*.17,phase:i*.93,collision:[convexPart([{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1}],-.4,.4)]};initializeMotion(a,1);return a;});}
test('independent float stays separated for two minutes without depth jitter',()=>{
 const objects=fixture();resolveDepth(objects);const depths=objects.map(a=>a.z);
 for(let frame=0;frame<1200;frame++){const t=frame*.1;for(const a of objects){a.floatX=Math.sin(t*.43+a.phase)*.115;a.floatY=Math.sin(t*.489+a.phase*1.7)*.17;a.floatAngle=Math.sin(t*.35+a.phase)*.018;a.worldCollision=worldParts(a);}for(let i=0;i<objects.length;i++)for(let j=i+1;j<objects.length;j++)assert.equal(shapeContact(objects[i],objects[j]),null);if(frame%50===0){resolveDepth(objects);assert.deepEqual(objects.map(a=>a.z),depths);}}
});
test('still camera and silence create no wind; motion and breath do',()=>{
 const w=80,h=60,p=new Uint8Array(w*h);for(let y=0;y<h;y++)for(let x=0;x<w;x++)p[y*w+x]=(x*37+y*19+x*y*7)%256;
 assert.equal(estimateMotion(p,p,w,h).strength,0);
 const c=new Uint8Array(w*h);for(let y=0;y<h;y++)for(let x=3;x<w;x++)c[y*w+x]=p[y*w+x-3];const motion=estimateMotion(p,c,w,h);assert.ok(motion.strength>.15);assert.ok(motion.x<0);
 assert.equal(breathLevel(new Float32Array(1024),new Float32Array(512).fill(-90),48000),0);
 assert.ok(breathLevel(new Float32Array(1024).fill(.10),new Float32Array(512).fill(-20),48000)>.5);
});
test('camera fits all four corners on mobile and desktop',()=>{for(const [w,h] of [[390,844],[1280,720]])for(const corner of ['top-left','top-right','bottom-left','bottom-right']){const p=cornerPosition(corner,180,135,w,h);assert.ok(p.x>=0&&p.y>=0&&p.x+180<=w&&p.y+135<=h);}});

test('camera gestures drive stronger main-scene gusts without idle wind or reversal lag',()=>{
 assert.equal(cameraGust({x:0,y:0,strength:1}).strength,0);
 assert.equal(cameraGust({x:.4,y:.3,strength:1}).strength,0);
 const slow=cameraGust({x:1.2,y:0,strength:.6});
 const wave=cameraGust({x:4,y:1,strength:.9});
 assert.ok(wave.strength>slow.strength*3);
 assert.ok(wave.strength<=1.7);
 const reverse=cameraGust({x:-4,y:1,strength:.9});
 assert.ok(wave.x>0&&reverse.x<0);
});

test('3D rotation updates collision depth and projected width',()=>{
 const a=fixture()[0];a.angle=0;a.tiltY=0;
 const flat=worldParts(a)[0];a.tiltY=Math.PI/2;
 const turned=worldParts(a)[0];
 assert.ok(turned.zMax-turned.zMin>flat.zMax-flat.zMin);
 assert.ok(turned.maxX-turned.minX<flat.maxX-flat.minX);
 assert.ok(Object.values(turned).filter(v=>typeof v==='number').every(Number.isFinite));
});
