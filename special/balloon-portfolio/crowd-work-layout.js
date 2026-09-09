const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function placeWork(anchor,obstacle,viewport,width=208,height=130,previous=null){
  for(const scale of [1,.85,.7,.55,.4]){
    const w=width*scale,h=height*scale;
    if(previous&&w>previous.width+.01)continue;
    const halfW=((w+64)*.993+(h+64)*.122)/2+3,halfH=((h+64)*.993+(w+64)*.122)/2+3;
    const top=viewport.width<=620?62:12,bottom=viewport.width<=620?78:64;
    if(halfW*2+24>viewport.width||halfH*2+top+bottom>viewport.height)continue;
    const fit=(p,side)=>({x:clamp(p.x,halfW+12,viewport.width-halfW-12),y:clamp(p.y,halfH+top,viewport.height-halfH-bottom),width:w,side});
    if(!obstacle)return fit(anchor,'free');
    const gap=10,cx=(obstacle.left+obstacle.right)/2,cy=(obstacle.top+obstacle.bottom)/2;
    // The work is always next to its cloud, never on the far side of the actor.
    const candidates=[fit({x:obstacle.right+gap+halfW,y:cy},'right'),fit({x:obstacle.left-gap-halfW,y:cy},'left'),fit({x:cx,y:obstacle.top-gap-halfH},'above'),fit({x:cx,y:obstacle.bottom+gap+halfH},'below')];
    const safe=candidates.filter(p=>p.x+halfW+gap<=obstacle.left+.01||p.x-halfW-gap>=obstacle.right-.01||p.y+halfH+gap<=obstacle.top+.01||p.y-halfH-gap>=obstacle.bottom-.01);
    const retained=previous&&safe.find(p=>p.side===previous.side);
    if(retained)return retained;
    if(safe.length)return safe.sort((a,b)=>Math.hypot(a.x-anchor.x,a.y-anchor.y)-Math.hypot(b.x-anchor.x,b.y-anchor.y))[0];
  }
  return previous;
}
