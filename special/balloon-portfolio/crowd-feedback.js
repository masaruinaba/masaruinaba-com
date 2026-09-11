import {createFeedback} from './feedback.js';
export function setupFeedback(){
  const feedback=createFeedback({soundEnabled:()=>document.body.dataset.opening==='done'&&document.querySelector('#mic-toggle')?.getAttribute('aria-pressed')!=='true',hapticsEnabled:()=>true,volume:()=>.17});
  document.addEventListener('pointerdown',event=>{if(event.target.closest('#world,.play-controls,[data-color-mode],#work-close'))feedback.unlock();},{capture:true});
  document.addEventListener('click',event=>{
    const button=event.target.closest('.play-controls button,[data-color-mode],#work-close');if(!button||button.disabled)return;
    feedback.unlock();
    const toggle=button.matches('#camera-toggle,#mic-toggle');
    feedback.pulse(toggle?(button.getAttribute('aria-pressed')==='true'?'off':'on'):'button',.4);
  },{capture:true});
  document.addEventListener('visibilitychange' ,()=>{if(document.hidden)feedback.stop();});
  const mic=document.querySelector('#mic-toggle');
  if(mic)new MutationObserver(()=>{if(mic.getAttribute('aria-pressed')==='true')feedback.stop();}).observe(mic,{attributes:true,attributeFilter:['aria-pressed']});
  window.addEventListener('pagehide',()=>feedback.stop());
  return feedback;
}
