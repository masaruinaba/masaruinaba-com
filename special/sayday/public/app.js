function resizeStages(){document.documentElement.style.setProperty('--scale',String(innerWidth/1440));}
resizeStages();window.addEventListener('resize',resizeStages,{passive:true});

const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const dialog=document.querySelector('.store-dialog');
document.querySelectorAll('[data-store]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
dialog?.querySelectorAll('.dialog-close,.dialog-done').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog?.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});

// The original portfolio opening, with only SAYDAY's mark and copy substituted.
if(!document.body.classList.contains('privacy')){
 let seen=false;try{seen=sessionStorage.getItem('sayday-intro')==='seen';}catch{}
 if(!seen&&!reduced.matches){
  document.body.dataset.opening='loading';
  import('/opening.js').then(async({createOpening})=>{const opening=createOpening();const failsafe=setTimeout(()=>opening.cancel(),9000);await opening.finish(()=>{});clearTimeout(failsafe);try{sessionStorage.setItem('sayday-intro','seen');}catch{}}).catch(()=>{document.body.dataset.opening='done';document.querySelectorAll('[inert]').forEach(el=>el.inert=false);});
 }
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
