export function cornerPosition(corner,width,height,viewportWidth,viewportHeight){
  return {x:corner.includes('left')?14:Math.max(14,viewportWidth-width-14),y:corner.includes('top')?(viewportWidth<=620?64:14):Math.max(14,viewportHeight-height-94)};
}
export function makeCameraMovable(element){
  let corner='bottom-right',drag=null;
  function snap(){const p=cornerPosition(corner,element.offsetWidth||180,element.offsetHeight||135,innerWidth,innerHeight);element.style.left=p.x+'px';element.style.top=p.y+'px';element.style.right=element.style.bottom='auto';element.dataset.corner=corner;}
  element.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();const rect=element.getBoundingClientRect();drag={id:e.pointerId,x:e.clientX-rect.left,y:e.clientY-rect.top};element.dataset.dragging='true';element.setPointerCapture(e.pointerId);});
  element.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;element.style.left=Math.max(0,Math.min(innerWidth-element.offsetWidth,e.clientX-drag.x))+'px';element.style.top=Math.max(0,Math.min(innerHeight-element.offsetHeight,e.clientY-drag.y))+'px';});
  function finish(){if(!drag)return;const r=element.getBoundingClientRect();corner=(r.top+r.height/2<innerHeight/2?'top':'bottom')+'-'+(r.left+r.width/2<innerWidth/2?'left':'right');drag=null;element.dataset.dragging='false';snap();}
  for(const event of ['pointerup','pointercancel','lostpointercapture'])element.addEventListener(event,finish);
  element.addEventListener('keydown',e=>{if(!e.key.startsWith('Arrow'))return;e.preventDefault();let [v,h]=corner.split('-');if(e.key==='ArrowUp')v='top';if(e.key==='ArrowDown')v='bottom';if(e.key==='ArrowLeft')h='left';if(e.key==='ArrowRight')h='right';corner=v+'-'+h;snap();});
  window.addEventListener('resize',snap);snap();
}
