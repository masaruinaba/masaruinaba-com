const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function placeWork(anchor,obstacle,viewport,width=208,height=130,previous=null){
  for(const scale of [1,.85,.7,.55]){
    const w=width*scale,h=height*scale;
    if(previous&&w>previous.width+.01)continue;
    // Reserve the outer frame, tilt and the opening animation's overshoot.
    const halfW=(w+44)*.55+(h+44)*.16,halfH=(h+44)*.55+(w+44)*.16;
    const fit=p=>({x:clamp(p.x,halfW+12,viewport.width-halfW-12),y:clamp(p.y,halfH+12,viewport.height-halfH-(viewport.width<=620?150:78)),width:w});
    const preferred=fit(anchor),gap=18;
    const candidates=[preferred];
    if(obstacle)candidates.push(fit({x:obstacle.right+gap+halfW,y:anchor.y}),fit({x:obstacle.left-gap-halfW,y:anchor.y}),fit({x:anchor.x,y:obstacle.top-gap-halfH}),fit({x:anchor.x,y:obstacle.bottom+gap+halfH}));
    const safe=candidates.filter(p=>!obstacle||p.x+halfW+gap<=obstacle.left||p.x-halfW-gap>=obstacle.right||p.y+halfH+gap<=obstacle.top||p.y-halfH-gap>=obstacle.bottom);
    const retained=previous&&safe.find(p=>Math.hypot(p.x-previous.x,p.y-previous.y)<32);
    if(retained)return retained;
    if(safe.length)return safe.sort((a,b)=>Math.hypot(a.x-anchor.x,a.y-anchor.y)-Math.hypot(b.x-anchor.x,b.y-anchor.y))[0];
  }
  return null;
}
