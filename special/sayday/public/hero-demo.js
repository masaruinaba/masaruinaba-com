(()=>{
 const video=document.querySelector('.hero-demo');if(!video)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let visible=false,listening=false;
 const sync=()=>{if(visible&&!document.hidden&&(listening||!reduced.matches))video.play().catch(()=>{});else video.pause();};
 video.muted=true;video.autoplay=!reduced.matches;
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05}).observe(video);
 document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
 // A quiet speaker in the corner of the phone screen. The video stays muted until someone asks for sound.
 const device=video.parentElement;if(!device)return;
 const speaker='<path d="M4 9.5h3.2L12 5.5v13l-4.8-4H4z"/>';
 const on=speaker+'<path class="hero-sound-wave" d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/>';
 const off=speaker+'<path d="m16 9.5 5 5m0-5-5 5"/>';
 const button=document.createElement('button');button.type='button';button.className='hero-sound';
 const render=()=>{button.setAttribute('aria-pressed',String(listening));button.setAttribute('aria-label',listening?'Mute demo sound':'Play demo sound');button.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${listening?on:off}</svg>`;};
 button.onclick=()=>{listening=!listening;video.muted=!listening;if(listening){video.play().catch(()=>{});}render();sync();};
 render();device.append(button);
})();
