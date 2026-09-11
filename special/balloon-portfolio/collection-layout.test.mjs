import {test} from 'node:test';
import assert from 'node:assert/strict';
import {collectionLayout,collectionRollY} from './collection-layout.js';
for(const [width,height] of [[1440,900],[1074,1118],[390,844],[375,667]]){
 test(`collection has 25 separate, addressable slots at ${width}x${height}`,()=>{
  const slots=collectionLayout(25,width,height,2026);
  assert.equal(new Set(slots.map(s=>s.projectIndex)).size,25);
  for(const a of slots){
   assert.ok(a.x-a.size/2>=0&&a.x+a.size/2<=width);
   assert.ok(a.y-a.size/2>=0&&Number.isFinite(a.y+a.size/2));
   for(const b of slots){if(a===b)continue;assert.ok(Math.abs(a.x-b.x)>(a.size+b.size)/2||Math.abs(a.y-b.y)>(a.size+b.size)/2);}
  }
  assert.deepEqual(slots,collectionLayout(25,width,height,2026));
  assert.notDeepEqual(slots.map(s=>s.projectIndex),collectionLayout(25,width,height,7).map(s=>s.projectIndex));
 });
}

test('short desktop windows scroll instead of shrinking the collection',()=>{
 const tall=collectionLayout(25,1440,1000,2026),short=collectionLayout(25,1440,400,2026);
 assert.deepEqual(short,tall);
 assert.ok(short.every(slot=>slot.size>=95&&slot.size<=110));
 assert.ok(Math.max(...short.map(slot=>slot.y+slot.size/2))>400);
});

test('desktop grid fills the width with equal square cells',()=>{
 const slots=collectionLayout(25,1440,900,2026);
 const first=slots[0],cols=slots.filter(slot=>slot.y===first.y).length;
 assert.equal(first.x,first.cellWidth/2);
 assert.equal(first.y,first.cellHeight/2);
 assert.equal(first.cellWidth,first.cellHeight);
 assert.ok(Math.abs(1440-slots[cols-1].x-first.x)<1e-8);
});

test('1440px collection keeps small characters across five spacious columns',()=>{
 const slots=collectionLayout(25,1440,900,2026);
 assert.equal(slots.filter(slot=>slot.y===slots[0].y).length,5);
 assert.equal(slots[0].size,100);
 assert.ok(Math.abs(slots[1].x-slots[0].x-288)<1e-8);
});

test('mobile uses three equal full-width columns',()=>{
 const slots=collectionLayout(25,390,844,2026);
 assert.deepEqual(slots.slice(0,3).map(slot=>slot.x),[65,195,325]);
 assert.equal(slots[0].x,390-slots[2].x);
});

test('rolling rows keep the same position when the scroll origin wraps',()=>{
 for(const scroll of [-1801,-1,0,1799,1800,3601]){
  for(const y of [150,450,1650]){
   const before=collectionRollY(y,scroll,1800,300);
   assert.equal(before,collectionRollY(y,scroll+1800,1800,300));
   assert.ok(before>=-150&&before<1650);
  }
 }
 assert.equal(collectionRollY(150,1799,1800,300)-collectionRollY(150,1800,1800,300),1);
});
