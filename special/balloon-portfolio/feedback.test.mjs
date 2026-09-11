import test from 'node:test';import assert from 'node:assert/strict';import {createFeedback} from './feedback.js';
test('audio is gesture-gated, short, linked to vibration, and muted on request',()=>{const events=[],vibrations=[];let enabled=true;class Context{constructor(){events.push('context');this.state='running';this.currentTime=0;this.sampleRate=1000;this.destination={};}createBuffer(c,n){return{getChannelData:()=>new Float32Array(n)};}createBufferSource(){return{connect(){return this;},disconnect(){},start(t){events.push(['start',t]);},stop(t){events.push(['stop',t]);}};}createBiquadFilter(){return{Q:{},frequency:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){return this;},disconnect(){}};}createGain(){return{gain:{setValueAtTime(){},linearRampToValueAtTime(v){assert.ok(v<=.18);},exponentialRampToValueAtTime(){}},connect(){return this;},disconnect(){}};}}
 let clock=0;const originalPerformance=globalThis.performance;globalThis.performance={now:()=>clock+=200};globalThis.window={AudioContext:Context};Object.defineProperty(globalThis,'navigator',{value:{vibrate:p=>vibrations.push(p)},configurable:true});const f=createFeedback({soundEnabled:()=>enabled,hapticsEnabled:()=>true,volume:()=>.08});f.pulse('press');assert.equal(events.length,0);f.unlock();f.pulse('press',.7);f.pulse('grip',1);f.pulse('release',.5);assert.equal(events.filter(e=>e[0]==='start').length,3);assert.ok(events.filter(e=>e[0]==='stop').every(e=>e[1]<=.19));assert.ok(vibrations.some(Array.isArray));globalThis.document={hidden:false,documentElement:{dataset:{}}};const prior=events.filter(e=>e[0]==='start').length;f.babble({size:1});f.babble({size:1});assert.equal(events.filter(e=>e[0]==='start').length,prior+2);delete globalThis.document;enabled=false;f.stop();const count=events.length;f.pulse('press');assert.equal(events.length,count);delete globalThis.window;globalThis.performance=originalPerformance;});

test('Safari fallback requests a switch click only during user activation',()=>{
 let clicks=0;const dataset={};
 const make=tag=>({switch:false,isConnected:false,style:{},setAttribute(){},append(el){el.isConnected=true;},click(){clicks++;}});
 globalThis.document={hidden:false,documentElement:{dataset},createElement:make,body:{append(){}}};
 Object.defineProperty(globalThis,'navigator',{value:{userActivation:{isActive:true}},configurable:true});
 const f=createFeedback({soundEnabled:()=>false,hapticsEnabled:()=>true,volume:()=>0});f.pulse('press');
 assert.equal(clicks,1);assert.equal(dataset.hapticState,'switch-requested');
 navigator.userActivation.isActive=false;
 createFeedback({soundEnabled:()=>false,hapticsEnabled:()=>true,volume:()=>0}).pulse('press');assert.equal(clicks,1);
 delete globalThis.document;
});
