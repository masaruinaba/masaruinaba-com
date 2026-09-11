import {voicePhrase} from './voice-phrase.js';
// Adapted from nezo-muzo/prototypes/inflatable-character-v04/feedback.js.
// One tactile event drives audio and vibration. No audio before a user gesture.
export function createFeedback({soundEnabled,hapticsEnabled,volume}){
 let context=null,lastMove=-Infinity,lastHaptic=-Infinity,switchInput=null,switchLabel=null,voiceSource=null;const voices=new Set();
 function unlock(){if(!soundEnabled())return;const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;context??=new Audio();if(context.state==='suspended')context.resume().catch(()=>{});}
 function stopVoice(){if(voiceSource){try{voiceSource.stop();}catch{}voices.delete(voiceSource);voiceSource=null;}}
 function stop(){stopVoice();for(const v of voices){try{v.stop();}catch{}}voices.clear();if(typeof navigator.vibrate==='function')navigator.vibrate(0);}
 function haptic(kind,s){
  if(!hapticsEnabled()||(typeof document!=='undefined'&&document.hidden))return;
  const now=performance.now();if(now-lastHaptic<80)return;
  let mode='unsupported';
  try{
    if(typeof navigator.vibrate==='function'){
      const length=Math.round(8+s*16);
      mode=navigator.vibrate(kind==='grip'?[length,20,10]:length)?'vibration-requested':'vibration-rejected';
    }else{
      switchInput??=document.createElement('input');
      if('switch' in switchInput&&navigator.userActivation?.isActive){
        if(!switchInput.isConnected){switchInput.type='checkbox';switchInput.setAttribute('switch','');switchInput.tabIndex=-1;switchInput.setAttribute('aria-hidden','true');switchInput.style.cssText='position:fixed;left:-100px;top:-100px;width:1px;height:1px;opacity:0;pointer-events:none';switchLabel=document.createElement('label');switchLabel.style.cssText=switchInput.style.cssText;switchLabel.append(switchInput);document.body.append(switchLabel);}
        switchLabel.click();mode='switch-requested';
      }
    }
  }catch{mode='unavailable';}
  lastHaptic=now;if(typeof document!=='undefined')document.documentElement.dataset.hapticState=mode;
 }
 function pulse(kind,strength=.5,details={}){const s=Math.min(1,Math.max(0,strength)),move=kind==='rub'||kind==='scale';if(move&&performance.now()-lastMove<160)return;if(move)lastMove=performance.now();
 if(kind!=='voice')haptic(kind,s);
 if(!soundEnabled()||!context)return;
 if(context.state==='suspended'){context.resume().then(()=>{if(soundEnabled())play(kind,s,move,details);}).catch(()=>{});return;}
 play(kind,s,move,details);
 }
 function play(kind,s,move,details){if(context.state!=='running')return;
 const variation=.9+Math.random()*.2,size=Math.max(.65,Math.min(1.5,details.size||1));
 const pitch=variation/Math.sqrt(size)*( .86+s*.32);
 const t=context.currentTime,duration=kind==='voice'?details.phrase.duration:(kind==='grip'?.16:kind==='release'?.13:move?.075:.10)*variation;
 // A rounded pitch-dropping pop, with a little airy texture underneath.
 const n=Math.ceil(context.sampleRate*duration),buffer=context.createBuffer(1,n,context.sampleRate),data=buffer.getChannelData(0);let smooth=0,phase=0;
 for(let i=0;i<n;i++){
   const u=i/n;
   if(kind==='voice'){
     const elapsed=i/context.sampleRate,syllable=details.phrase.syllables.find(s=>elapsed>=s.start&&elapsed<s.start+s.length);
     if(!syllable)continue;
     const v=(elapsed-syllable.start)/syllable.length;
     const frequency=(440+s*100)*variation/Math.pow(size,.18)*Math.max(.92,syllable.pitch)*(1+syllable.bend*(v-.5));
     phase+=Math.PI*2*frequency/context.sampleRate;
     const vowel=syllable.vowel;
     data[i]=(Math.sin(phase)*.56+Math.sin(phase*vowel)*.13+Math.sin(phase*(vowel+1))*.055)*Math.pow(Math.sin(Math.PI*v),.7);
     continue;
   }
   const from=(kind==='on'?680:kind==='off'?480:kind==='button'?760:kind==='scale'?(details.direction>0?300:620):kind==='rub'?380:kind==='grip'?310:kind==='release'?560:460)*pitch,to=(kind==='on'?920:kind==='off'?260:kind==='button'?450:kind==='scale'?(details.direction>0?640:290):kind==='rub'?250:kind==='grip'?145:kind==='release'?280:205)*pitch;
   const frequency=to+(from-to)*Math.exp(-u*5)+Math.sin(u*Math.PI*3)*22*(1-u);
   phase+=Math.PI*2*frequency/context.sampleRate;
   smooth=.68*smooth+.32*(Math.random()*2-1);
   data[i]=Math.sin(phase)*.78+Math.sin(phase*2)*.10*(1-u)+smooth*.10;
 }
 const source=context.createBufferSource();source.buffer=buffer;if(kind==='voice'){stopVoice();voiceSource=source;}const filter=context.createBiquadFilter();filter.type='lowpass';filter.Q.value=.5;filter.frequency.setValueAtTime(kind==='voice'?3400:1800,t);filter.frequency.exponentialRampToValueAtTime(kind==='voice'?2600:900,t+duration);
 const gain=context.createGain(),level=Math.min(.18,Math.max(0,volume()))*(.22+.5*s)*(kind==='voice'?1.35:move?.4:1);gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(level,t+.012);if(kind==='voice')gain.gain.setValueAtTime(level*.65,t+duration*.8);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);source.connect(filter).connect(gain).connect(context.destination);if(voices.size>=4){const oldest=[...voices].find(v=>v!==voiceSource);try{oldest.stop();}catch{}voices.delete(oldest);}voices.add(source);source.onended=()=>{if(voiceSource===source)voiceSource=null;voices.delete(source);source.disconnect();filter.disconnect();gain.disconnect();};source.start(t);source.stop(t+duration+.01);if(typeof document!=='undefined'){document.documentElement.dataset.audioState=context.state;document.documentElement.dataset.feedback=kind;}
 }
 function babble(details={}){
  if(!context||!soundEnabled()||document.hidden)return;
  stopVoice();pulse('voice',.55,{...details,phrase:details.phrase||voicePhrase(details.message)});
 }
 return {unlock,pulse,stop,babble,stopVoice};
}
