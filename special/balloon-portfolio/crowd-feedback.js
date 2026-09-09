import {createFeedback} from './feedback.js';
export function setupFeedback(){
  const feedback=createFeedback({soundEnabled:()=>document.querySelector('#mic-toggle')?.getAttribute('aria-pressed')!=='true',hapticsEnabled:()=>true,volume:()=>.12});
  document.addEventListener('pointerdown',event=>{if(event.target.closest('#world,.play-controls'))feedback.unlock();},{capture:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)feedback.stop();});
  window.addEventListener('pagehide',()=>feedback.stop());
  return feedback;
}
