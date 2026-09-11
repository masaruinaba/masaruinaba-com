// Shuffled projects occupy a regular grid; incomplete rows stay left aligned.
export function collectionLayout(count,width,height,seed=1){
  let state=seed>>>0;
  const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
  const margin=width<620?18:48,top=width<620?64:32,bottom=width<620?100:90;
  const usableW=width-margin*2,usableH=width<620?Math.ceil(count/3)*(usableW/3)*1.45:Math.max(180,height-top-bottom);
  const cols=width<620?3:Math.max(5,Math.round(Math.sqrt(count*usableW/usableH)));
  const rows=Math.ceil(count/cols),cw=usableW/cols,ch=usableH/rows;
  const order=Array.from({length:count},(_,i)=>i);
  for(let i=count-1;i>0;i--){const j=Math.floor(random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
  return order.map((projectIndex,index)=>{
    const row=Math.floor(index/cols),col=index%cols;
    return {projectIndex,x:margin+(col+.5)*cw,
      y:top+Math.min(cw,ch)*.35+row*ch,
      size:Math.min(cw,ch)*.7,angle:0,cellWidth:cw,cellHeight:ch};
  });
}

export function collectionAnchor(slot,angle,width,height,gap=8){
  const dx=Math.cos(angle),dy=Math.sin(angle);
  const edge=Math.min((width/2)/Math.max(.001,Math.abs(dx)),(height/2)/Math.max(.001,Math.abs(dy)));
  const distance=edge+slot.size*.34+gap;
  return {x:slot.x+dx*distance,y:slot.y+dy*distance};
}
