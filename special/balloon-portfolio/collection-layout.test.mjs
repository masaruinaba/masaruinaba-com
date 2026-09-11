import {test} from 'node:test';
import assert from 'node:assert/strict';
import {collectionLayout} from './collection-layout.js';
for(const [width,height] of [[1440,900],[1074,1118],[390,844],[375,667]]){
 test(`collection has 25 separate, addressable slots at ${width}x${height}`,()=>{
  const slots=collectionLayout(25,width,height,2026);
  assert.equal(new Set(slots.map(s=>s.projectIndex)).size,25);
  for(const a of slots){
   assert.ok(a.x-a.size/2>=0&&a.x+a.size/2<=width);
   assert.ok(a.y-a.size/2>=0&&a.y+a.size/2<=(width<620?2000:height));
   for(const b of slots){if(a===b)continue;assert.ok(Math.abs(a.x-b.x)>(a.size+b.size)/2||Math.abs(a.y-b.y)>(a.size+b.size)/2);}
  }
  assert.deepEqual(slots,collectionLayout(25,width,height,2026));
  assert.notDeepEqual(slots.map(s=>s.projectIndex),collectionLayout(25,width,height,7).map(s=>s.projectIndex));
 });
}
