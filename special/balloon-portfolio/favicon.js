const faces=['blue','triangle','star','flower','coil','round'];

export function startFavicon(first='blue',base=import.meta.env.BASE_URL){
  const link=document.querySelector('#character-favicon');
  if(!link)return;
  let index=Math.max(0,faces.indexOf(first)),timer;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const show=()=>{link.href=`${base}favicons/${faces[index]}.png`;link.dataset.character=faces[index];};
  const stop=()=>{clearInterval(timer);timer=undefined;};
  const resume=()=>{
    stop();
    if(document.hidden||reduced.matches)return;
    timer=setInterval(()=>{index=(index+1)%faces.length;show();},3000);
  };
  show();resume();
  document.addEventListener('visibilitychange',resume);
  reduced.addEventListener('change',resume);
  window.addEventListener('pagehide',stop);
  window.addEventListener('pageshow',resume);
}
