import * as THREE from 'three';

export function createColorMode(scene,renderer,redraw=()=>{}){
  const originals=new WeakMap(),lights=new WeakMap();
  const buttons=[...document.querySelectorAll('[data-color-mode]')];
  // Keep the warm Chic base; cycle the accent and randomly choose its characters.
  const accents=[
    '#e85a18','#ed4935','#e9b51b','#a4bd22','#14b785',
    '#12a9c4','#337fe5','#9252df','#e33c90','#ef8420',
    '#df2852','#f06479','#edcd20','#6ebc27','#19aa52',
    '#08b3a4','#16b5e3','#405de0','#bc43dc','#ed45b9'
  ];
  const palettes=accents.map(accent=>({
    background:'#242522',accent,tones:['#494640','#837767','#b8aa92','#353633','#625b52']
  }));
  let current='pop',lastPalette=-1,previousAccents=new Set();
  try{current=localStorage.getItem('crowd-color-mode')==='chic'?'chic':'pop';}catch{}

  function apply(mode){
    if(current!==mode)lastPalette=-1;current=mode;document.body.dataset.colorMode=mode;
    let selected;
    if(mode==='chic'){lastPalette=(lastPalette+1)%palettes.length;selected=palettes[lastPalette];}
    document.body.dataset.chicVariant='warm';
    document.body.dataset.chicAccent=selected?.accent||'';
    document.body.dataset.chicAccentIndex=selected?String(lastPalette):'';
    try{localStorage.setItem('crowd-color-mode',mode);}catch{}

    const accentActors=new Set();
    if(selected){
      const candidates=[];
      scene.traverse(object=>{const actor=object.userData.actor;if(actor?.face&&actor.body===object)candidates.push(actor);});
      for(let i=candidates.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[candidates[i],candidates[j]]=[candidates[j],candidates[i]];}
      const count=Math.ceil(candidates.length*.3);
      for(const actor of candidates.slice(0,count))accentActors.add(actor);
      // Avoid repeating the exact same cast on consecutive clicks.
      if(count<candidates.length&&accentActors.size===previousAccents.size&&[...accentActors].every(actor=>previousAccents.has(actor))){
        accentActors.delete(candidates[count-1]);accentActors.add(candidates[count]);
      }
      previousAccents=accentActors;
    }
    document.body.dataset.chicAccentCount=String(accentActors.size);
    const done=new Set();
    scene.traverse(object=>{
      if(object.isLight){if(!lights.has(object))lights.set(object,object.color.clone());object.color.copy(mode==='pop'?lights.get(object):new THREE.Color('#ffffff'));}
      for(const material of object.material?(Array.isArray(object.material)?object.material:[object.material]):[]){
        if(done.has(material)||!material.color)continue;done.add(material);
        if(!originals.has(material))originals.set(material,{color:material.color.clone(),attenuation:material.attenuationColor?.clone()});
        const original=originals.get(material);
        if(mode==='pop'){material.color.copy(original.color);if(original.attenuation)material.attenuationColor.copy(original.attenuation);continue;}
        const luminance=Math.sqrt(.2126*original.color.r+.7152*original.color.g+.0722*original.color.b);
        const hsl=original.color.getHSL({h:0,s:0,l:0});
        const actor=object.userData.actor,body=actor?.body===object||actor&&!actor.face;
        let tone;
        if(!body){tone=luminance<.20?'#242320':luminance>.80?'#f3eddf':'#a18a78';}
        else if(accentActors.has(actor)){tone=selected.accent;}
        else{
          const tones=selected.tones;
          tone=tones[Math.min(4,Math.floor(hsl.h*5))];
        }
        material.color.set(tone);
        if(material.attenuationColor)material.attenuationColor.copy(material.color);
      }
    });
    const background=selected?.background||'#dcd8d0';renderer.setClearColor(background);document.body.style.background=background;
    document.body.style.setProperty('--portfolio-link-color',new THREE.Color(background).getHSL({h:0,s:0,l:0}).l<.3?'#eee6d8':'#454039');
    for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.colorMode===mode));
    redraw();
  }
  for(const button of buttons)button.addEventListener('click',()=>apply(button.dataset.colorMode));
  apply(current);
  return {apply};
}
