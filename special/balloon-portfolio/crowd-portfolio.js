import {collectionAnchor} from './collection-layout.js';
import {frameSurface} from './crowd-frame-surface.js';
import {frameKinds,frameMask} from './crowd-work-frame.js';
import {placeWork} from './crowd-work-layout.js';
import {projects} from './portfolio-projects.js';
import {chooseComment,projectKey} from './portfolio-comments.js';

const bubble=document.querySelector('#work-bubble'),image=document.querySelector('#work-image'),link=document.querySelector('#work-link'),hello=document.querySelector('#work-hello');
const lastComments=new Map();
let owner=null,animation=null,shownAt=0,speaker=null,frameIndex=-1,frameKey='',lastPlacement=null,lastViewport='',photoSide=1,revealed=false;
export function showWork(actor,speech,time,reduced){
  const item=projects[actor.projectIndex%projects.length];owner?.face.speak(0);owner=actor;shownAt=performance.now();photoSide=actor.face.mouthPosition().x>0?1:-1;revealed=false;
  const comment=chooseComment(item,lastComments.get(projectKey(item)));lastComments.set(projectKey(item),comment);hello.textContent=comment;speaker=speech;speaker.say(actor,time,reduced,comment,true);
  link.href=new URL(item.url||item.file,'https://www.masaruinaba.com/').href;
  const cover=item.image||item.thumbnail;image.hidden=!cover;
  if(cover){image.src='./portfolio'+cover;image.alt=item.titleEn||item.title;}
  link.setAttribute('aria-label','View '+(item.titleEn||item.title));
  frameIndex=(frameIndex+1+Math.floor(Math.random()*(frameKinds.length-1)))%frameKinds.length;frameKey='';lastPlacement=null;bubble.dataset.frame=frameKinds[frameIndex];
  bubble.hidden=false;hello.hidden=true;
  bubble.style.visibility='hidden';
  animation?.cancel();

  document.body.dataset.work=item.titleEn||item.title;
}
export function updateWork(camera){
  if(!owner||bubble.hidden)return;

  const position=owner.face.mouthPosition();position.y+=owner.baseSize*.12+(matchMedia('(prefers-reduced-motion: reduce)').matches?0:Math.sin(performance.now()*.00085+owner.phase+.7)*.05);position.project(camera);
  const anchorX=(position.x*.5+.5)*innerWidth,anchorY=(-position.y*.5+.5)*innerHeight;
  const imageHeight=image.naturalWidth?208*image.naturalHeight/image.naturalWidth:130;
  const viewportKey=innerWidth+':'+innerHeight;if(viewportKey!==lastViewport){lastViewport=viewportKey;lastPlacement=null;}
  if(!image.complete||!image.naturalWidth)return;
  const bounds=speaker?.bounds();if(!bounds)return;
  const obstacle=bounds;
  let target={x:anchorX,y:anchorY-imageHeight/2},cardWidth=208,cardHeight=imageHeight;
  if(owner.collectionSlot){
    const slot=owner.collectionSlot,arrangement=owner.collectionArrangement;
    cardWidth=Math.min(168,innerWidth*.39);cardHeight=imageHeight*cardWidth/208;
    target=collectionAnchor(slot,arrangement.workAngle,cardWidth,cardHeight,arrangement.gap);

  }
  const placement=owner.collectionSlot?{...target,width:cardWidth}:placeWork(target,obstacle,{width:innerWidth,height:innerHeight},cardWidth,cardHeight,lastPlacement);
  if(!placement){bubble.style.visibility='hidden';return;}
  lastPlacement=placement;
  const nextKey=[placement.width,imageHeight,frameIndex].join(':');
  if(!owner.collectionSlot&&nextKey!==frameKey){frameKey=nextKey;bubble.style.setProperty('--frame-surface',frameSurface(placement.width,imageHeight*placement.width/208,frameKinds[frameIndex]));}
  bubble.style.width=placement.width+'px';bubble.style.left=placement.x+'px';bubble.style.top=placement.y+'px';bubble.style.transform='translate(-50%,-50%)';bubble.style.visibility='visible';bubble.style.rotate=owner.collectionSlot?'0deg':(owner.projectIndex%2?7:-7)+'deg';
  if(!revealed){revealed=true;
  animation=bubble.animate([{opacity:0,transform:'translate(-50%, -50%) scale(.18) rotate(-9deg)'},{opacity:1,transform:'translate(-50%, -50%) scale(1) rotate(0deg)',offset:.7},{opacity:1,transform:'translate(-50%, -50%) scale(1) rotate(0deg)'}],{duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:480,easing:'cubic-bezier(.18,.8,.3,1)'});
  }

}
export function closeWork(){owner?.face.speak(0);speaker?.clear();speaker=null;owner=null;animation?.cancel();bubble.hidden=true;hello.hidden=true;document.body.dataset.work='';}

link.addEventListener('click',closeWork);
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeWork();});

document.querySelector('#work-close').addEventListener('click',event=>{event.preventDefault();event.stopPropagation();closeWork();document.querySelector('#world').focus({preventScroll:true});});
