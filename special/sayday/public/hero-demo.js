(()=>{
 const video=document.querySelector('.hero-demo');if(!video)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=false;
 const sync=()=>{if(visible&&!document.hidden&&!reduced.matches)video.play().catch(()=>{});else video.pause();};
 video.muted=true;video.autoplay=!reduced.matches;
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05}).observe(video);
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
})();
