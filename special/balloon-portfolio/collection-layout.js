// Shuffled projects occupy a regular grid; incomplete rows stay left aligned.
export function collectionLayout(count,width,height,seed=1){
  let state=seed>>>0;
  const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  const mobile=width<620,margin=0,top=mobile?64:0;
  const usableW=width-margin*2;
  // Height never changes the column count or character size.
  const cols=mobile?3:Math.max(3,Math.round(usableW/240));
  const cw=usableW/cols,ch=cw*(mobile?1.45:1);
  const size=mobile?Math.min(cw,ch)*.64:Math.min(100,cw*.56);
  const order=Array.from({length:count},(_,i)=>i);
  for(let i=count-1;i>0;i--){const j=Math.floor(random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  return order.map((projectIndex,index)=>{
    const row=Math.floor(index/cols),col=index%cols;
    return {projectIndex,x:margin+(col+.5)*cw,
      y:mobile?top+size/2+row*ch:(row+.5)*ch,
      size,angle:0,cellWidth:cw,cellHeight:ch};
  });
}

export function collectionAnchor(slot,angle,width,height,gap=8){
  const dx=Math.cos(angle),dy=Math.sin(angle);
  const edge=Math.min((width/2)/Math.max(.001,Math.abs(dx)),(height/2)/Math.max(.001,Math.abs(dy)));
  const distance=edge+slot.size*.34+gap;
  return {x:slot.x+dx*distance,y:slot.y+dy*distance};
}
