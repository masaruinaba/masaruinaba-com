import test from 'node:test';
import assert from 'node:assert/strict';
import {crowdShell,relaxCrowdShell} from './crowd-shell.js';
import {weldContour} from './crowd-weld.js';
import {crowdShape} from './crowd-shapes.js';
import {Membrane} from './physics.js';
import {placeWork} from './crowd-work-layout.js';

test('welded lip remains one closed, finite surface on round, oval and lobed silhouettes',()=>{
 for(const kind of ['round','oval','petal']){
  const base=crowdShell(),data=weldContour(relaxCrowdShell(crowdShape(base,kind)));
  assert.ok(data.positions.every(Number.isFinite),kind);
  const edges=new Map();
  for(let t=0;t<data.triangles.length;t+=3)for(let k=0;k<3;k++){const a=data.triangles[t+k],b=data.triangles[t+(k+1)%3],key=[a,b].sort((a,b)=>a-b).join(':');edges.set(key,(edges.get(key)||0)+1);}
  assert.ok([...edges.values()].every(count=>count===2),kind);
  const physics=new Membrane(data);assert.ok(physics.volume()>0,kind);
  for(let j=0;j<data.rim.length;j++){
   const i=data.rim[j],n=data.rim.length;
   assert.ok(data.positions[(i-n)*3+2]>data.positions[(i+n)*3+2],kind);
   assert.ok(Math.abs(data.positions[i*3+2]-.4)<.009,kind);
  }
 }
});

test('opening work does not jump sides or resize while anchor and speech gently float',()=>{
 const viewport={width:1100,height:800},obstacle={left:390,right:650,top:250,bottom:450};
 const first=placeWork({x:760,y:280},obstacle,viewport);
 let previous=first;
 for(let i=0;i<300;i++){
  const dx=Math.sin(i*.04)*4,dy=Math.cos(i*.03)*4;
  const next=placeWork({x:760+dx,y:280+dy},{left:390+dx,right:650+dx,top:250+dy,bottom:450+dy},viewport,208,130,previous);
  assert.equal(next.width,first.width);
  assert.ok(Math.hypot(next.x-previous.x,next.y-previous.y)<5);
  previous=next;
 }
});


test('original pressure drag recovers the detailed welded membrane',()=>{
 const data=weldContour(relaxCrowdShell(crowdShape(crowdShell(),'petal'))),sim=new Membrane(data);
 for(let i=0;i<24;i++)sim.step(1/120,{tension:.65,colliders:[{x:.15,y:.3,z:.78,r:.32}]});
 assert.ok(sim.metrics().finite);
 for(let i=0;i<150;i++)sim.recover(1/30);
 assert.ok(sim.metrics().finite);
 assert.ok(Math.max(...sim.p.map((v,i)=>Math.abs(v-sim.rest[i])))<.001);
});
