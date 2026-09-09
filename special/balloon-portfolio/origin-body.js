import {SVGLoader} from 'three/addons/loaders/SVGLoader.js';

export function inflateOrigin(base,d){
  const svg=new SVGLoader().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${d}"/></svg>`);
  const points=SVGLoader.createShapes(svg.paths[0])[0].getPoints(16);
  const max=Math.max(...points.map(p=>Math.hypot(p.x-500,p.y-500)));
  const outline=points.map(p=>({x:(p.x-500)/max*1.20,y:(500-p.y)/max*1.20}));
  const cross=(ax,ay,bx,by)=>ax*by-ay*bx;
  function radius(a){const dx=Math.cos(a),dy=Math.sin(a);let hit=Infinity;
    for(let j=0;j<outline.length;j++){const p=outline[j],q=outline[(j+1)%outline.length],ex=q.x-p.x,ey=q.y-p.y,den=cross(dx,dy,ex,ey);if(Math.abs(den)<1e-8)continue;const t=cross(p.x,p.y,ex,ey)/den,u=cross(p.x,p.y,dx,dy)/den;if(t>0&&u>=0&&u<=1)hit=Math.min(hit,t);}
    return Number.isFinite(hit)?hit:.75;
  }
  const positions=base.positions.slice(),seed=d.length%17,pressure=.74+(seed%5)*.055;
  for(let i=0;i<positions.length;i+=3){
    const bx=base.positions[i],by=base.positions[i+1],bz=base.positions[i+2],r=Math.min(1,Math.hypot(bx,by)/.95),a=Math.atan2(by,bx);
    const edge=radius(a),rho=r*(.56+(edge-.56)*r),x=Math.cos(a)*rho,y=Math.sin(a)*rho;
    let distance=Infinity;
    for(let j=0;j<outline.length;j++){const p=outline[j],q=outline[(j+1)%outline.length],dx=q.x-p.x,dy=q.y-p.y,t=Math.max(0,Math.min(1,((x-p.x)*dx+(y-p.y)*dy)/(dx*dx+dy*dy||1)));distance=Math.min(distance,Math.hypot(x-p.x-t*dx,y-p.y-t*dy));}
    let folds=0;
    for(let k=0;k<3;k++){const center=k*2.094+seed*.37,delta=Math.atan2(Math.sin(a-center),Math.cos(a-center)),width=.20+(k%2)*.07;folds+=(.006+(k%3)*.003)*Math.exp(-((delta/width)**2))*Math.exp(-(((distance-.15)/.15)**2));}
    const side=Math.sign(bz-.40),puff=.35*pressure*Math.sqrt(1-Math.exp(-distance/.15));
    positions[i]=x;positions[i+1]=y;positions[i+2]=.40+side*Math.max(0,puff-folds*Math.min(1,distance/.08));
  }
  return {...base,positions};
}

// A deliberately round five-point balloon, with generous curves at tips and valleys.
export function roundedStarPath(){
  const points=Array.from({length:10},(_,i)=>{const a=-Math.PI/2+i*Math.PI/5,r=i%2?195:330;return {x:500+Math.cos(a)*r,y:500+Math.sin(a)*r};});
  const mix=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
  const start=mix(points[0],points[9],.34);let path=`M ${start.x} ${start.y}`;
  for(let i=0;i<10;i++){const p=points[i],next=points[(i+1)%10],out=mix(p,next,.34),enter=mix(next,p,.34);path+=` Q ${p.x} ${p.y} ${out.x} ${out.y} L ${enter.x} ${enter.y}`;}
  return path+' Z';
}
