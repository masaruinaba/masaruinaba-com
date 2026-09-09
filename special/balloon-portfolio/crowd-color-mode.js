import * as THREE from 'three';

export function createColorMode(scene,renderer,redraw=()=>{}){
  const originals=new WeakMap(),lights=new WeakMap();
  const buttons=[...document.querySelectorAll('[data-color-mode]')];
  const palettes=[
    {background:'#242522',accent:'#e85a18',tones:['#494640','#837767','#b8aa92','#353633','#625b52']},
    {background:'#141414',accent:'#a6a6a6',tones:['#333333','#555555','#929292','#222222','#707070'],mono:true}
  ];
  let current='pop',lastPalette=-1;
  try{current=localStorage.getItem('crowd-color-mode')==='chic'?'chic':'pop';}catch{}

  function apply(mode){
    if(current!==mode)lastPalette=-1;current=mode;document.body.dataset.colorMode=mode;
    let selected;
    if(mode==='chic'){lastPalette=(lastPalette+1)%palettes.length;selected=palettes[lastPalette];}
    document.body.dataset.chicVariant=selected?.mono?'mono':'warm';
    try{localStorage.setItem('crowd-color-mode',mode);}catch{}

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
        else if(hsl.s>.25&&hsl.h<.12){tone=selected.accent;}
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
