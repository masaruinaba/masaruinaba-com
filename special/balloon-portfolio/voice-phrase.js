// Stable nonsense syllables per comment; timing is shared by audio and mouth.
export function voicePhrase(message='hello'){
 let seed=2166136261;for(const c of message)seed=Math.imul(seed^c.codePointAt(0),16777619)>>>0;
 const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const count=5+Math.floor(random()*5),syllables=[];let duration=0;
 for(let i=0;i<count;i++){
  const length=.12+random()*.13,gap=i===Math.floor(count/2)?.13:.025;
  syllables.push({start:duration,length,pitch:.76+random()*.65,vowel:2+Math.floor(random()*4),bend:(random()-.5)*.6});duration+=length+gap;
 }
 return {syllables,duration};
}
export function voiceMouth(phrase,time){
 const syllable=phrase?.syllables.find(s=>time>=s.start&&time<s.start+s.length);
 return syllable?Math.pow(Math.sin(Math.PI*(time-syllable.start)/syllable.length),.7):0;
}
