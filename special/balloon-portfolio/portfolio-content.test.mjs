import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {projects} from './portfolio-projects.js';
import {projectComments,projectKey,chooseComment} from './portfolio-comments.js';
import {voicePhrase,voiceMouth} from './voice-phrase.js';
test('all 25 current works have local covers, unique identities and ten non-repeating voiced comments',()=>{
 assert.equal(projects.length,25);
 assert.equal(new Set(projects.map(projectKey)).size,25);
 for(const work of projects){
  assert.ok(existsSync(new URL('./public/portfolio'+(work.image||work.thumbnail),import.meta.url)),work.title);
  const comments=projectComments[projectKey(work)];assert.equal(comments.length,10,work.title);
  assert.equal(new Set(comments).size,10);
  assert.notEqual(chooseComment(work,comments[0],()=>0),comments[0]);
  for(const line of comments){const phrase=voicePhrase(line);assert.ok(phrase.duration>0);assert.equal(voiceMouth(phrase,phrase.duration+.1),0);}
 }
});
test('comments follow the work after sorting, and Studio links keep /ja',()=>{
 const before=projects.map(work=>[projectKey(work),chooseComment(work,null,()=>0)]);
 for(const work of [...projects].reverse())assert.equal(chooseComment(work,null,()=>0),before.find(([key])=>key===projectKey(work))[1]);
 for(const work of projects.filter(w=>['Studio','Studio.Design'].includes(w.title))){assert.equal(work.url,'https://studio.design/ja');assert.equal(work.displayFile,'studio.design');}
 const crowd=readFileSync(new URL('./crowd.js',import.meta.url),'utf8');assert.ok(crowd.includes('i%projects.length'));assert.ok(crowd.includes('Math.max(projects.length,'));
});
