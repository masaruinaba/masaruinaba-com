// Adapted from nezo-muzo/prototypes/inflatable-character-v04/feedback.js.
// One tactile event drives audio and vibration. No audio before a user gesture.
export function createFeedback({soundEnabled,hapticsEnabled,volume}){
 let context=null,lastMove=0;const voices=new Set();
 function unlock(){if(!soundEnabled())return;const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;context??=new Audio();if(context.state==='suspended')context.resume().catch(()=>{});}
 function stop(){for(const v of voices){try{v.stop();}catch{}}voices.clear();if(typeof navigator.vibrate==='function')navigator.vibrate(0);}
 function pulse(kind,strength=.5){const s=Math.min(1,Math.max(0,strength)),move=kind==='rub';if(move&&performance.now()-lastMove<100)return;if(move)lastMove=performance.now();
 if(hapticsEnabled()&&typeof navigator.vibrate==='function')navigator.vibrate(kind==='release'?8:kind==='grip'?[12,18,9]:move?5:12);
 if(!soundEnabled()||!context)return;
 if(context.state==='suspended'){context.resume().then(()=>{if(soundEnabled())play(kind,s,move);}).catch(()=>{});return;}
 play(kind,s,move);
 }
 function play(kind,s,move){if(context.state!=='running')return;
 const t=context.currentTime,duration=kind==='grip'?.16:kind==='release'?.13:move?.06:.10;
 // A rounded pitch-dropping pop, with a little airy texture underneath.
 const n=Math.ceil(context.sampleRate*duration),buffer=context.createBuffer(1,n,context.sampleRate),data=buffer.getChannelData(0);let smooth=0,phase=0;
 for(let i=0;i<n;i++){
   const u=i/n;
   const from=kind==='grip'?310:kind==='release'?520:460,to=kind==='grip'?145:kind==='release'?280:205;
   const frequency=to+(from-to)*Math.exp(-u*5)+Math.sin(u*Math.PI*3)*22*(1-u);
   phase+=Math.PI*2*frequency/context.sampleRate;
   smooth=.68*smooth+.32*(Math.random()*2-1);
   data[i]=Math.sin(phase)*.78+Math.sin(phase*2)*.10*(1-u)+smooth*.10;
 }
 const source=context.createBufferSource();source.buffer=buffer;const filter=context.createBiquadFilter();filter.type='lowpass';filter.Q.value=.5;filter.frequency.setValueAtTime(1800,t);filter.frequency.exponentialRampToValueAtTime(900,t+duration);
 const gain=context.createGain(),level=Math.min(.18,Math.max(0,volume()))*(.22+.5*s)*(move?.4:1);gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(level,t+.012);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);source.connect(filter).connect(gain).connect(context.destination);if(voices.size>=4){const oldest=voices.values().next().value;try{oldest.stop();}catch{}voices.delete(oldest);}voices.add(source);source.onended=()=>{voices.delete(source);source.disconnect();filter.disconnect();gain.disconnect();};source.start(t);source.stop(t+duration+.01);if(typeof document!=='undefined'){document.documentElement.dataset.audioState=context.state;document.documentElement.dataset.feedback=kind;}
 }
 return {unlock,pulse,stop};
}
