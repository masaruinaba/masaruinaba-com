export const frameKinds=['scallop','pearls','cloud','pillow','zigzag','burst','ticket','steps'];
export function frameMask(width,height,kind){
  const pad=20,w=width+pad*2,h=height+pad*2;
  let shapes='';
  if(kind==='pillow')shapes=`<rect x="0" y="0" width="${w}" height="${h}" rx="26" fill="white"/>`;
  else if(['zigzag','burst','steps'].includes(kind)){
    const points=[],inset=15;
    const edge=(ax,ay,bx,by,nx,ny)=>{const length=Math.hypot(bx-ax,by-ay),count=Math.max(3,Math.round(length/(kind==='burst'?32:20)));for(let i=0;i<count;i++){const t=i/count,u=(i+.5)/count,depth=kind==='burst'?(i%2?15:9):9;points.push([ax+(bx-ax)*t,ay+(by-ay)*t]);if(kind==='steps'){points.push([ax+(bx-ax)*t+nx*depth,ay+(by-ay)*t+ny*depth]);}points.push([ax+(bx-ax)*u+nx*depth,ay+(by-ay)*u+ny*depth]);}};
    edge(inset,inset,w-inset,inset,0,-1);edge(w-inset,inset,w-inset,h-inset,1,0);edge(w-inset,h-inset,inset,h-inset,0,1);edge(inset,h-inset,inset,inset,-1,0);
    shapes=`<polygon points="${points.map(p=>p.join(',')).join(' ')}" fill="white"/>`;
  }else if(kind==='ticket'){
    shapes=`<path d="M 12 0 H ${w-12} Q ${w-12} 12 ${w} 12 V ${h-12} Q ${w-12} ${h-12} ${w-12} ${h} H 12 Q 12 ${h-12} 0 ${h-12} V 12 Q 12 12 12 0" fill="white"/>`;
  }else{
    const r=kind==='pearls'?6:kind==='cloud'?15:11;
    shapes=`<rect x="${r}" y="${r}" width="${w-2*r}" height="${h-2*r}" fill="white"/>`;
    const edge=(length,horizontal)=>{const count=Math.max(2,Math.round((length-2*r)/(r*1.75)));for(let i=0;i<=count;i++){const at=r+(length-2*r)*i/count;const radius=kind==='cloud'&&i>0&&i<count?r*(.88+.12*Math.cos(i*1.7)):r;for(const side of [r,(horizontal?h:w)-r])shapes+=`<circle cx="${horizontal?at:side}" cy="${horizontal?side:at}" r="${radius}" fill="white"/>`;}};
    edge(w,true);edge(h,false);
  }
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${shapes}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
