import './opening.css';
import {startFavicon} from './favicon.js';

// The six authored Figma compositions, not six random recolorings.
export const openingPatterns = [
  {id:'blue', background:'#dcd8d0', ink:'#ed5811', size:95, x:53.35, y:51.1, angle:29.18},
  {id:'triangle', background:'#121ddd', ink:'#87b0dc', size:117.19, x:59.64, y:50.4, angle:0, flip:-1},
  {id:'star', background:'#222222', ink:'#f3d583', size:112.86, x:46.22, y:50, angle:-40.49},
  {id:'flower', background:'#ffdc50', ink:'#1c11ed', size:105.1, x:50, y:75.9, angle:0},
  {id:'coil', background:'#dcb0ff', ink:'#ecf1f3', size:103.02, x:55.47, y:50, angle:0},
  {id:'round', background:'#efefef', ink:'#ed4f4f', size:138.71, x:49.77, y:72.5, angle:12.18},
];

function words(element, lines) {
  element.setAttribute('aria-label', lines.join(' '));
  lines.forEach((line, index) => {
    if(index)element.append(document.createElement('br'));
    line.split(' ').forEach((word, i) => {
      if(i)element.append(' ');
      const clip=document.createElement('span'), text=document.createElement('span');
      clip.className='opening-word';clip.setAttribute('aria-hidden','true');
      text.textContent=word;clip.append(text);element.append(clip);
    });
  });
}

export function createOpening() {
  const params=new URLSearchParams(location.search);
  const forced=openingPatterns.find(p=>p.id===params.get('opening'));
  const pattern=forced||openingPatterns[crypto.getRandomValues(new Uint32Array(1))[0]%6];
  startFavicon(pattern.id);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const root=document.createElement('section');
  root.className='opening';root.setAttribute('aria-label','Playground — Made for Fun.');
  root.innerHTML=`<div class="opening-paper"></div>
    <div class="opening-character"><img alt="" draggable="false" fetchpriority="high"></div>
    <div class="opening-logo" role="img" aria-label="Playground"><i class="opening-logo-base"></i><i class="opening-logo-o"></i><i class="opening-logo-u"></i></div>
    <p class="opening-description"></p><p class="opening-copy"></p>
    <div class="opening-footer"><h1 class="opening-title"></h1><p class="opening-edition"></p></div>`;
  const character=root.querySelector('.opening-character'), img=character.querySelector('img');
  root.style.setProperty('--opening-bg',pattern.background);root.style.setProperty('--opening-ink',pattern.ink);
  character.style.cssText=`--character-size:${pattern.size}vw;--character-x:${pattern.x}%;--character-y:${pattern.y}%;--character-angle:${pattern.angle}deg;--character-flip:${pattern.flip||1}`;
  img.src=`./opening/${pattern.id}.png`;
  words(root.querySelector('.opening-description'),['A collection of little','experiments, made for','the fun of it.']);
  words(root.querySelector('.opening-copy'),['Pull, bend, and rearrange','them until something','unnamed begins to take','form.']);
  words(root.querySelector('.opening-title'),['Made for Fun.']);
  words(root.querySelector('.opening-edition'),['Tiny Apps / N° 001']);
  document.body.dataset.opening='loading';document.body.dataset.openingPattern=pattern.id;
  document.body.append(root);
  const controls=[...document.querySelectorAll('.play-controls,.portfolio-home,#reload-crowd,#world')];
  const previousInert=controls.map(el=>el.inert);controls.forEach(el=>el.inert=true);
  const animations=[];
  const animate=(el,frames,options)=>{const a=el.animate(frames,{fill:'both',...options});animations.push(a);return a;};
  let cancelled=false,shownAt=0;
  const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  const shown=(async()=>{
    // Only the selected character is fetched. Slow or missing art never blocks the site.
    await Promise.race([img.decode().catch(()=>{img.hidden=true;}),wait(5000)]);
    if(cancelled)return;
    shownAt=performance.now();document.body.dataset.opening='entering';
    setTimeout(()=>{if(!cancelled&&document.body.dataset.opening==='entering')document.body.dataset.opening='holding';},1800);
    if(reduced.matches){root.classList.add('opening-static');return;}
    animate(img,[{opacity:0,transform:`translateY(24%) rotate(${pattern.angle-65}deg) scale(.76) scaleY(${pattern.flip||1})`},
      {opacity:1,offset:.25},{opacity:1,transform:`translateY(0) rotate(${pattern.angle}deg) scale(1) scaleY(${pattern.flip||1})`}],
      {duration:1600,easing:'cubic-bezier(.16,1,.3,1)'});
    animate(root.querySelector('.opening-logo'),[{opacity:0,transform:'translateY(24px)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'translateY(0)',clipPath:'inset(-40% -5% -40% -5%)'}],{delay:180,duration:950,easing:'cubic-bezier(.22,1,.36,1)'});
    for(const [selector,delay] of [['.opening-description',320],['.opening-copy',450],['.opening-title',680],['.opening-edition',850]]){
      root.querySelectorAll(`${selector} .opening-word > span`).forEach((word,i)=>animate(word,[{transform:'translateY(115%) rotate(3deg)',opacity:0},{transform:'translateY(0) rotate(0)',opacity:1}],{delay:delay+i*24,duration:850,easing:'cubic-bezier(.22,1,.36,1)'}));
    }
  })();
  function cleanup(){
    cancelled=true;animations.forEach(a=>a.cancel());root.remove();
    controls.forEach((el,i)=>el.inert=previousInert[i]);document.body.dataset.opening='done';
  }
  return {
    async finish(release){
      await shown;if(cancelled)return;
      // Development-only art direction view; production always continues into the scene.
      if(import.meta.env.DEV&&params.has('openingPreview'))return;
      await wait(Math.max(0,(reduced.matches?250:2800)-(performance.now()-shownAt)));
      if(cancelled)return;
      document.body.dataset.opening='exiting';
      if(reduced.matches){cleanup();release();return;}
      // Reveal the real burst while the poster character is still rotating out.
      animate(root.querySelector('.opening-paper'),[{opacity:1},{opacity:0}],{duration:450,easing:'ease-in'});
      animate(character,[{opacity:1,transform:'translate(-50%,-50%) scale(1) rotate(0)'},{opacity:0,transform:'translate(-50%,-65%) scale(1.3) rotate(28deg)'}],{duration:850,easing:'cubic-bezier(.55,0,.2,1)'});
      root.querySelectorAll('.opening-word > span').forEach((word,i)=>animate(word,[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-110%)'}],{delay:i*6,duration:350,easing:'cubic-bezier(.55,0,.8,.4)'}));
      animate(root.querySelector('.opening-logo'),[{opacity:1},{opacity:0,transform:'translateY(-18px)'}],{duration:300});
      release();await wait(900);cleanup();
    },
    cancel:cleanup,
  };
}
