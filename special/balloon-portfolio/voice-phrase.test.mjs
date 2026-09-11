import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {voicePhrase,voiceMouth} from './voice-phrase.js';
test('every invitation has its own stable phrase and mouth closes between syllables and at the end',()=>{
 const source=readFileSync(new URL('./crowd-speech.js',import.meta.url),'utf8');
 const lines=[...source.match(/const lines=\[(.*?)\];/s)[1].matchAll(/'([^']*)'/g)].map(m=>m[1]);
 const phrases=lines.map(voicePhrase);assert.equal(new Set(phrases.map(JSON.stringify)).size,lines.length);
 for(let i=0;i<phrases.length;i++){
  const p=phrases[i];assert.deepEqual(p,voicePhrase(lines[i]));assert.ok(p.duration>0.7&&p.duration<3);
  assert.equal(voiceMouth(p,p.duration+.1),0);
  for(const s of p.syllables){assert.ok(voiceMouth(p,s.start+s.length/2)>.99);assert.equal(voiceMouth(p,s.start+s.length+.01),0);}
 }
});
