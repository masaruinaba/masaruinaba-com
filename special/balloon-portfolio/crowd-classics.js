import {roundedStarPath} from './origin-body.js';
export const classicPaths={
  triangle:'M 474 205 Q 500 160 526 205 L 774 635 Q 800 680 748 680 L 252 680 Q 200 680 226 635 Z',
  square:'M 295 180 L 705 180 Q 820 180 820 295 L 820 705 Q 820 820 705 820 L 295 820 Q 180 820 180 705 L 180 295 Q 180 180 295 180 Z',
  heart:'M 500 340 C 415 185 180 220 180 390 C 180 535 350 665 480 765 Q 500 781 520 765 C 650 665 820 535 820 390 C 820 220 585 185 500 340 Z',
  star:roundedStarPath(),
  spark:roundedSparkPath()
};

function roundedSparkPath(){
  const points=Array.from({length:16},(_,i)=>{const a=i*Math.PI/8-Math.PI/2,r=i%2?222:360;return {x:500+Math.cos(a)*r,y:500+Math.sin(a)*r};});
  const mix=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
  const first=mix(points[0],points[15],.12);let d=`M ${first.x} ${first.y}`;
  for(let i=0;i<16;i++){const p=points[i],next=points[(i+1)%16],t=i%2?.22:.12,out=mix(p,next,t),enter=mix(next,p,(i+1)%2?.22:.12);d+=` Q ${p.x} ${p.y} ${out.x} ${out.y} L ${enter.x} ${enter.y}`;}
  return d+' Z';
}
