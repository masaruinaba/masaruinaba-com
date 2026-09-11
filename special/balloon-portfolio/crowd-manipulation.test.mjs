import test from 'node:test';
import assert from 'node:assert/strict';
import {rollGrip,coastGrip,scaleGrip} from './crowd-manipulation.js';
const actor=()=>({radius:1,baseSize:1,mass:1,angle:0});
test('center and rim pulls both roll, with continuous leverage and decaying release momentum',()=>{
 const center=actor(),rim=actor();rollGrip(center,{x:0,y:0},.2,.1,.016);rollGrip(rim,{x:.9,y:0},.2,.1,.016);
 assert.ok(center.tiltY>0&&center.tiltX<0);assert.ok(rim.tiltY>center.tiltY);assert.ok(rim.angle>0);
 const before=rim.tiltY,velocity=rim.rollY;coastGrip(rim,.016,false);
 assert.ok(rim.tiltY>before&&rim.rollY<velocity);
 for(let i=0;i<180;i++)coastGrip(rim,1/60,false);
 assert.ok(Math.abs(rim.rollY)<.00001);
});
test('zoom clamps while keeping physical and visible size in sync without cumulative drift',()=>{
 const a=actor();scaleGrip(a,10);assert.equal(a.userScale,1.5);assert.equal(a.radius,1.5);assert.equal(a.baseSize,1.5);
 scaleGrip(a,.01);assert.equal(a.userScale,.65);assert.ok(Math.abs(a.mass-.65**2)<1e-12);
 scaleGrip(a,1);assert.ok(Math.abs(a.radius-1)<1e-12&&Math.abs(a.baseSize-1)<1e-12);
});
