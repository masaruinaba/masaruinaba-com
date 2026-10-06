function resizeStages(){document.documentElement.style.setProperty('--scale',String(innerWidth/1440));}
resizeStages();window.addEventListener('resize',resizeStages,{passive:true});

const reduced=matchMedia('(prefers-reduced-motion: reduce)');

// The original portfolio opening, with only SAYDAY's mark and copy substituted.
// The inline script at the top of <body> sets the same flag before the FV can paint.
let seen=false;try{seen=sessionStorage.getItem('sayday-intro')==='seen';}catch{}
if(!document.body.classList.contains('privacy')&&!seen&&!reduced.matches){
 document.body.dataset.opening='loading';
 import('/opening.js').then(async({createOpening})=>{const opening=createOpening();const failsafe=setTimeout(()=>opening.cancel(),9000);await opening.finish(()=>{});clearTimeout(failsafe);try{sessionStorage.setItem('sayday-intro','seen');}catch{}}).catch(()=>{document.body.dataset.opening='done';document.querySelectorAll('[inert]').forEach(el=>el.inert=false);});
}

// Match Figma's 16.5-second conversational expression sequence.
const expressions=[[0,0],[1.7,3],[3.4,8],[5.4,6],[6.8,1],[8.3,4],[9.3,5],[10.6,2],[12.2,9],[13.8,7],[15,0]];
const faces=[...document.querySelectorAll('[data-name^="Web Motion"]')];
function expression(){if(document.hidden||reduced.matches)return;const t=(performance.now()/1000)%16.5;const frame=expressions.findLast(([start])=>t>=start)[1];faces.forEach(face=>[...face.children].forEach((child,i)=>{child.style.opacity=i===frame?'1':'0';child.style.transition='opacity 240ms ease-in-out';}));}
const faceTimer=setInterval(expression,120);

const features=[...document.querySelectorAll('.feature')];let queued=false;
function scrollMotion(){queued=false;if(reduced.matches||innerWidth<=760){features.forEach(el=>el.firstElementChild.style.transform="none");return;}const h=innerHeight;features.forEach((card,i)=>{const top=card.getBoundingClientRect().top;const enter=Math.max(0,Math.min(1,(h-top)/(h*.88)));const next=features[i+1]?.getBoundingClientRect().top;const cover=next===undefined?0:Math.max(0,Math.min(1,1-next/h));const angle=i===features.length-1?0:(i%2?1:-1)*(1-enter)*5;card.firstElementChild.style.transform=`translateY(${(1-enter)*30}px) rotate(${angle}deg) scale(${1/(1+Math.abs(Math.sin(angle*Math.PI/180))*card.offsetHeight/card.offsetWidth*1.7)})`;});}
function requestMotion(){if(!queued){queued=true;requestAnimationFrame(scrollMotion);}}
addEventListener('scroll',requestMotion,{passive:true});addEventListener('resize',requestMotion,{passive:true});reduced.addEventListener('change',()=>{if(reduced.matches)features.forEach(el=>el.firstElementChild.style.transform='none');else requestMotion();});requestMotion();

const pageBottom=document.querySelector('.page-bottom'),floatingStore=document.querySelector('.floating-store');
const floatingX=document.querySelector('.floating-x');
if(pageBottom&&floatingX)new IntersectionObserver(entries=>floatingX.classList.toggle('is-away',entries[0].isIntersecting),{threshold:0}).observe(pageBottom);
if(pageBottom&&floatingStore)new IntersectionObserver(entries=>{floatingStore.hidden=entries[0].isIntersecting;},{threshold:0}).observe(pageBottom);

// Exact background / foreground / CTA overlay pairs from Figma 2136:7246.
const colors=[['Paper','#f7f7f7','#121212',1],['Ink','#222222','#f3d583',.02],['Sand','#dcd8d0','#ed5811',.10],['Blue','#121ddd','#87b0dc',.05],['Yellow','#ffdc50','#1c11ed',.10],['Lilac','#dcb0ff','#ecf1f3',.08],['Mint','#79dcce','#ed4f4f',.08]];
const paletteToggle=document.querySelector('.palette-toggle'),rail=document.querySelector('.color-rail');let activeColor=0,wash=null;
function setColor(index,origin,animate=true){if(!colors[index])return;const previous=getComputedStyle(document.body).backgroundColor;wash?.remove();activeColor=index;document.documentElement.style.setProperty('--page-paper',colors[index][1]);document.documentElement.style.setProperty('--page-ink',colors[index][2]);document.body.dataset.dark=String(index===1||index===3); document.documentElement.style.setProperty('--cta-white-alpha',colors[index][3]);rail.querySelectorAll('[data-color]').forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===index));b.style.setProperty('--slot',i);b.dataset.peek=String(i<3);});try{localStorage.setItem('sayday-design-color-v2',String(index));}catch{}
 if(animate&&!reduced.matches){const layer=document.createElement('div');layer.className='color-wash';layer.style.background=previous;const circle=document.createElement('div');circle.style.cssText=`position:absolute;inset:0;background:${colors[index][1]}`;layer.append(circle);document.body.prepend(layer);wash=layer;const x=origin?.x??innerWidth,y=origin?.y??0,r=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y))+2;circle.animate([{clipPath:`circle(0px at ${x}px ${y}px)`},{clipPath:`circle(${r}px at ${x}px ${y}px)`}],{duration:1050,easing:'cubic-bezier(.2,.65,.25,1)',fill:'both'}).onfinish=()=>{layer.remove();if(wash===layer)wash=null;};}
}
function expandRail(open){rail.dataset.expanded=String(open);paletteToggle.setAttribute('aria-expanded',String(open));rail.querySelectorAll('button').forEach(b=>{b.tabIndex=open?0:-1;b.style.setProperty('--delay',`${Math.random()*110}ms`);b.style.setProperty('--hover-scale',1);});}
if(rail){let saved=0;try{saved=Number(localStorage.getItem('sayday-design-color-v2'))||0;}catch{}setColor(colors[saved]?saved:0,null,false);expandRail(false);
 paletteToggle.addEventListener('click',()=>expandRail(rail.dataset.expanded!=='true'));
 rail.querySelectorAll('[data-color]').forEach(button=>button.addEventListener('click',()=>{const r=button.getBoundingClientRect();setColor(Number(button.dataset.color),{x:r.left+r.width/2,y:r.top+r.height/2});}));
 rail.addEventListener('pointermove',e=>{if(rail.dataset.expanded!=='true')return;rail.querySelectorAll('button').forEach(b=>{const r=b.getBoundingClientRect();b.style.setProperty('--hover-scale',1+.22*Math.max(0,1-Math.abs(e.clientX-r.left-r.width/2)/40));});});
 rail.addEventListener('pointerleave',()=>rail.querySelectorAll('button').forEach(b=>b.style.setProperty('--hover-scale',1)));
 document.addEventListener('pointerdown',e=>{if(!e.target.closest('.palette'))expandRail(false);});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&rail.dataset.expanded==='true'){expandRail(false);paletteToggle.focus();}});
}

// Concept movie: the card morphs into the player and back (after Studio.Drop's film card).
const filmCard=document.querySelector('.film-card'),filmDialog=document.querySelector('.film-dialog');
if(filmCard&&filmDialog){
 const panel=filmDialog.querySelector('.film-dialog__panel'),media=filmDialog.querySelector('.film-dialog__media'),backdrop=filmDialog.querySelector('.film-dialog__backdrop'),closeButton=filmDialog.querySelector('.film-dialog__close');
 const player=media.querySelector('video'),preview=filmCard.querySelector('video'),playButton=filmDialog.querySelector('.film-play'),muteButton=filmDialog.querySelector('.film-mute'),seek=filmDialog.querySelector('.film-controls input'),clock=filmDialog.querySelector('.film-controls time');
 const radius=()=>innerWidth<=760?14:24;
 const inOut=p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
 let running=[],controlsTimer,closing=false;
 const playPreview=()=>{if(!reduced.matches&&!filmDialog.open)preview.play().catch(()=>{});};
 if(reduced.matches)preview.pause();else playPreview();reduced.addEventListener('change',()=>reduced.matches?preview.pause():playPreview());
 const time=s=>Number.isFinite(s)?`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`:'0:00';
 function syncControls(){
  playButton.dataset.playing=String(!player.paused);playButton.setAttribute('aria-label',player.paused?'Play':'Pause');
  muteButton.dataset.muted=String(player.muted);muteButton.setAttribute('aria-label',player.muted?'Unmute':'Mute');
  if(player.duration)seek.value=String(Math.round(player.currentTime/player.duration*1000));
  clock.textContent=`${time(player.currentTime)} / ${time(player.duration)}`;
 }
 function showControls(){clearTimeout(controlsTimer);media.classList.add('is-controls-visible');if(!player.paused)controlsTimer=setTimeout(()=>media.classList.remove('is-controls-visible'),1600);}
 ['play','pause','timeupdate','durationchange','volumechange','ended'].forEach(type=>player.addEventListener(type,()=>{syncControls();if(type!=='timeupdate')showControls();}));
 const togglePlay=()=>player.paused||player.ended?player.play().catch(()=>{}):player.pause();
 player.addEventListener('click',togglePlay);playButton.addEventListener('click',togglePlay);
 muteButton.addEventListener('click',()=>{player.muted=!player.muted;});
 seek.addEventListener('input',()=>{if(player.duration)player.currentTime=seek.value/1000*player.duration;});
 media.addEventListener('pointermove',showControls);media.addEventListener('focusin',showControls);
 // Sampled keyframes keep the corner radius constant on screen while the panel scales.
 function morph(open){
  running.forEach(a=>a.cancel());running=[];
  const source=filmCard.getBoundingClientRect(),target=panel.getBoundingClientRect();
  const dx=source.left+source.width/2-(target.left+target.width/2),dy=source.top+source.height/2-(target.top+target.height/2);
  const scale=source.width/target.width,clipY=Math.max(0,(target.height-source.height/scale)/2),r=radius(),cardRadius=parseFloat(getComputedStyle(filmCard).borderTopLeftRadius)||0;
  const transform=[],clip=[];
  for(let i=0;i<=30;i++){const e=inOut(i/30),k=open?1-e:e,s=scale+(1-scale)*(1-k);transform.push({transform:`translate(${dx*k}px,${dy*k}px) scale(${s})`});clip.push({clipPath:`inset(${clipY*k}px 0px round ${(r+(cardRadius-r)*k)/s}px)`});}
  const run=(el,frames,options)=>{const a=el.animate(frames,{fill:'both',...options});running.push(a);return a;};
  if(open){
   run(panel,transform,{duration:820});run(media,clip,{duration:820});
   run(backdrop,[{opacity:0},{opacity:1}],{duration:480,easing:'cubic-bezier(.33,1,.68,1)'});
   run(closeButton,[{opacity:0,transform:'translateY(42px)'},{opacity:1,transform:'none'}],{delay:580,duration:300,easing:'cubic-bezier(.215,.61,.355,1)'});
   run(filmCard,[{opacity:0},{opacity:0}],{duration:1});
   return running.at(-1).finished.catch(()=>{});
  }
  run(closeButton,[{opacity:1,transform:'none'},{opacity:0,transform:'translateY(42px)'}],{duration:200,easing:'cubic-bezier(.55,.085,.68,.53)'});
  run(panel,transform,{delay:80,duration:720});run(media,clip,{delay:80,duration:720});
  run(backdrop,[{opacity:1},{opacity:0}],{delay:80,duration:420,easing:'cubic-bezier(.55,.085,.68,.53)'});
  run(filmCard,[{opacity:0},{opacity:1}],{delay:620,duration:140,easing:'cubic-bezier(.33,1,.68,1)'});
  return run(media,[{opacity:1},{opacity:0}],{delay:640,duration:120,easing:'ease-in'}).finished;
 }
 function openFilm(){
  if(filmDialog.open)return;
  closing=false;preview.pause();filmDialog.showModal();document.documentElement.style.overflow='hidden';
  player.muted=false;player.play().catch(()=>{});syncControls();showControls();
  if(reduced.matches)filmCard.style.opacity='0';else morph(true);
 }
 async function closeFilm(){
  if(!filmDialog.open||closing)return;
  closing=true;player.pause();
  if(!reduced.matches)await morph(false).catch(()=>{});
  if(!closing)return;
  closing=false;filmDialog.close();running.forEach(a=>a.cancel());running=[];filmCard.style.opacity='';
  document.documentElement.style.overflow='';filmCard.focus({preventScroll:true});playPreview();
 }
 filmCard.addEventListener('click',openFilm);
 filmDialog.querySelectorAll('[data-film-close]').forEach(button=>button.addEventListener('click',closeFilm));
 filmDialog.addEventListener('cancel',event=>{event.preventDefault();closeFilm();});
 player.addEventListener('ended',()=>{player.currentTime=0;});
 if(pageBottom)new IntersectionObserver(entries=>filmCard.classList.toggle('is-away',entries[0].isIntersecting),{threshold:0}).observe(pageBottom);
 // Sit just left of the floating App Store button; on phones that button is hidden and CSS takes over.
 const placeFilm=()=>{const r=floatingStore?.getBoundingClientRect();if(r?.width)filmCard.style.setProperty('--film-right',`${Math.round(document.documentElement.clientWidth-r.left+8)}px`);};
 placeFilm();addEventListener('resize',placeFilm,{passive:true});if(floatingStore)new ResizeObserver(placeFilm).observe(floatingStore);document.fonts?.ready.then(placeFilm);
}
