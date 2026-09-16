import { mountHomeGlass } from './home-glass'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const scroller=document.querySelector<HTMLElement>('#scrollArea')!
const toggle=document.querySelector<HTMLButtonElement>('.profile-toggle')!
const panel=document.querySelector<HTMLElement>('#profile-panel')!
const reduced=matchMedia('(prefers-reduced-motion: reduce)')
const hover=matchMedia('(hover: hover) and (pointer: fine)')
const cells=Array.from(panel.querySelectorAll<HTMLElement>('dt,dd'))
const reveals=cells.map(cell=>{
 const reveal=document.createElement('div');reveal.className='profile-reveal'
 reveal.append(...Array.from(cell.childNodes));cell.append(reveal);return reveal
})
function positionProfile(){panel.style.setProperty('--profile-top',`${toggle.getBoundingClientRect().bottom+(matchMedia('(max-width:768px)').matches?48:24)}px`)}
window.addEventListener('resize',positionProfile)
const profileBackground=Array.from(document.querySelectorAll<HTMLElement>('.portfolio-section,.portfolio-outro,body>.app-icon-link'))
let outsideCloseTimer:number|undefined
function cancelOutsideClose(){window.clearTimeout(outsideCloseTimer);outsideCloseTimer=undefined}
let expanded=false
let transition:gsap.core.Timeline|undefined
function setProfile(open:boolean){
 cancelOutsideClose()
 if(expanded===open)return
 expanded=open;toggle.setAttribute('aria-expanded',String(open));transition?.kill()
 if(open){
  document.body.classList.add('profile-is-open')
  document.body.dataset.workHoverBlocked='true'
  profileBackground.forEach(element=>{element.inert=true})
  positionProfile()
  const fresh=panel.hidden
  panel.hidden=false;panel.inert=false
  gsap.set(panel,{height:'auto',opacity:1})
  if(fresh){gsap.set(cells,{clipPath:'inset(0 0 100% 0)'});gsap.set(reveals,{y:14})}
  transition=gsap.timeline({onComplete:()=>{ScrollTrigger.refresh()}})
  cells.forEach((cell,i)=>{
   const at=reduced.matches?0:Math.floor(i/2)*.045
   transition!.to(cell,{clipPath:'inset(0 0 0% 0)',duration:reduced.matches?0:.55,ease:'power3.out'},at)
    .to(reveals[i],{y:0,duration:reduced.matches?0:.65,ease:'power3.out'},at)
  })
  transition.fromTo('.home-photo',{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:reduced.matches?0:.75,ease:'power3.inOut'},reduced.matches?0:.18)
  ScrollTrigger.refresh()
 }else{
  panel.inert=true
  transition=gsap.timeline({onComplete:()=>{panel.hidden=true;document.body.classList.remove('profile-is-open');profileBackground.forEach(element=>{element.inert=false});ScrollTrigger.refresh()}})
   .to(cells,{clipPath:'inset(0 0 100% 0)',duration:reduced.matches?0:.24,ease:'power2.in'},0)
   .to(reveals,{y:-5,duration:reduced.matches?0:.24,ease:'power2.in'},0)
 }
}
let pointerAfterClose:{x:number,y:number}|undefined
document.addEventListener('pointermove',event=>{
 if(expanded||!panel.hidden){pointerAfterClose=undefined;return}
 if(!document.body.dataset.workHoverBlocked)return
 if(!pointerAfterClose){pointerAfterClose={x:event.clientX,y:event.clientY};return}
 if(Math.hypot(event.clientX-pointerAfterClose.x,event.clientY-pointerAfterClose.y)>6){delete document.body.dataset.workHoverBlocked;pointerAfterClose=undefined}
},{passive:true})
function usesProfileHover(){return hover.matches&&!matchMedia('(max-width:768px)').matches}
toggle.querySelector('.profile-wordmark-stacked')!.addEventListener('pointerenter',event=>{if((event as PointerEvent).pointerType==='mouse'&&usesProfileHover())setProfile(true)})
toggle.addEventListener('click',event=>{
 const onMark=event.target instanceof Element&&!!event.target.closest('.profile-open-mark')
 setProfile(onMark||!usesProfileHover()?!expanded:true)
})
// Treat the logo, the panel, and the gap between them as one hover region.
function handleProfilePointer(event:PointerEvent){
 if(!expanded||!usesProfileHover()||event.pointerType==='touch')return
 const logo=toggle.getBoundingClientRect(),content=panel.getBoundingClientRect()
 const inside=event.clientX>=Math.min(logo.left,content.left)-64&&event.clientX<=Math.max(logo.right,content.right)+64&&event.clientY>=logo.top-64&&event.clientY<=Math.max(logo.bottom,content.bottom)+64
 if(inside||event.buttons){cancelOutsideClose();return}
 if(outsideCloseTimer===undefined)outsideCloseTimer=window.setTimeout(()=>setProfile(false),180)
}
document.addEventListener('pointermove',handleProfilePointer,{passive:true})
// Covered content stays blocked; clicking outside no longer dismisses the profile.
document.addEventListener('click',event=>{
 const target=event.target
 if(expanded&&target instanceof Node&&!panel.contains(target)&&!toggle.contains(target)){
  event.preventDefault();event.stopImmediatePropagation()
 }
},true)
if(import.meta.hot)import.meta.hot.dispose(()=>{cancelOutsideClose();document.removeEventListener('pointermove',handleProfilePointer)})
toggle.addEventListener('focus',()=>{if(usesProfileHover()&&toggle.matches(':focus-visible'))setProfile(true)})
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&expanded){setProfile(false);toggle.focus()}})
const disposeHomeGlass=mountHomeGlass(document.querySelector<HTMLElement>('.home-photo')!)
if(import.meta.hot)import.meta.hot.dispose(()=>disposeHomeGlass?.())
const stage=document.querySelector<HTMLElement>('.monster-gathering')!
// Test the opaque silhouette, not the transparent rectangle around each character.
const characterAlpha=new WeakMap<HTMLImageElement,Uint8ClampedArray>()
function characterCovers(x:number,y:number){
 const stageRect=stage.getBoundingClientRect()
 if(y<stageRect.top-stageRect.width*.4||y>stageRect.bottom)return false
 for(const element of stage.querySelectorAll<HTMLElement>('.gather-character')){
  const img=element.querySelector('img')!
  if(!img.complete||!img.naturalWidth)continue
  const style=getComputedStyle(element)
  if(Number(style.opacity)<.6||style.visibility==='hidden')continue
  let pixels=characterAlpha.get(img)
  if(!pixels){
   const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128
   const ctx=canvas.getContext('2d',{willReadFrequently:true})!
   ctx.drawImage(img,0,0,128,128);pixels=ctx.getImageData(0,0,128,128).data
   characterAlpha.set(img,pixels)
  }
  const rect=element.getBoundingClientRect()
  const matrix=new DOMMatrix(style.transform==='none'?undefined:style.transform)
  matrix.e=0;matrix.f=0
  const local=new DOMPoint(x-(rect.left+rect.width/2),y-(rect.top+rect.height/2)).matrixTransform(matrix.inverse())
  const u=local.x/element.offsetWidth+.5,v=local.y/element.offsetHeight+.5
  if(u>=0&&u<1&&v>=0&&v<1&&pixels[(Math.floor(v*128)*128+Math.floor(u*128))*4+3]>180)return true
 }
 return false
}
function headerOverCharacter(element:Element|null){
 if(!element)return false
 const rect=element.getBoundingClientRect()
 return characterCovers(rect.left+rect.width*.5,rect.top+rect.height*.5)
}
function updateLogoOverCharacters(){
 document.body.classList.toggle('logo-over-characters',headerOverCharacter(toggle.querySelector('.profile-wordmark-stacked')))
 document.body.classList.toggle('index-over-characters',headerOverCharacter(document.querySelector('.current-section')))
}
let lastCharacterCheck=0
function trackCharacterMotion(){
 const now=performance.now()
 if(now-lastCharacterCheck<80)return
 lastCharacterCheck=now;updateLogoOverCharacters()
}
scroller.addEventListener('scroll',updateLogoOverCharacters,{passive:true})
window.addEventListener('resize',updateLogoOverCharacters)
ScrollTrigger.addEventListener('refresh',updateLogoOverCharacters)
gsap.ticker.add(trackCharacterMotion)
updateLogoOverCharacters()
if(import.meta.hot)import.meta.hot.dispose(()=>{
 scroller.removeEventListener('scroll',updateLogoOverCharacters)
 window.removeEventListener('resize',updateLogoOverCharacters)
 ScrollTrigger.removeEventListener('refresh',updateLogoOverCharacters)
 gsap.ticker.remove(trackCharacterMotion)
})

const characters=Array.from(stage.querySelectorAll<HTMLElement>('.gather-character'))
const media=gsap.matchMedia()
media.add('(prefers-reduced-motion: no-preference)',()=>{
 const timeline=gsap.timeline({paused:true})
 characters.forEach((el,i)=>{
  const resting=Number(gsap.getProperty(el,'rotation'))||0
  timeline.fromTo(el,{y:()=>stage.clientHeight*.35,rotation:resting+(i%2?-65:70),scale:.8,autoAlpha:1},{y:0,rotation:resting,scale:1,autoAlpha:1,duration:1.65,ease:'none'},i*.13)
 })
 timeline.fromTo('.gather-wordmark',{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.7,ease:'power2.out'},1.4)
 const trigger=ScrollTrigger.create({trigger:stage,scroller,animation:timeline,start:'clamp(top bottom)',end:'clamp(bottom bottom)',scrub:true,invalidateOnRefresh:true})
 return()=>{trigger.kill();timeline.revert()}
})
if(import.meta.hot)import.meta.hot.dispose(()=>media.revert())
// Defer the large opening images until the visitor approaches the footer.
const loadObserver=new IntersectionObserver(entries=>{if(!entries.some(e=>e.isIntersecting))return;stage.querySelectorAll<HTMLImageElement>('img[data-src]').forEach(img=>{img.src=img.dataset.src!;delete img.dataset.src});loadObserver.disconnect()},{root:scroller,rootMargin:'1200px'})
loadObserver.observe(stage)
document.fonts.ready.then(()=>ScrollTrigger.refresh())

const gridGuide=document.querySelector<HTMLElement>('#layout-grid')!
function toggleGrid(){
 const visible=gridGuide.hidden
 gridGuide.hidden=!visible
}
document.addEventListener('keydown',event=>{
 const target=event.target
 if(event.repeat||event.ctrlKey||event.metaKey||event.altKey||!event.shiftKey||event.key.toLowerCase()!=='g')return
 if(target instanceof HTMLElement&&(target.isContentEditable||target.closest('input,textarea,select,[role="textbox"]')))return
 event.preventDefault()
 toggleGrid()
})



const currentSection=document.querySelector<HTMLElement>('.current-section')!
const sectionLabel=currentSection.querySelector<HTMLElement>('.current-section-label')!
const characterMessage=currentSection.querySelector<HTMLElement>('.current-section-message')!
const invitations=['Hey, hello!','Almost there!','Come play!','A little further!','Come say hi!','See you down here!']
let previousInvitation=-1
function changeInvitation(){
 if(!currentSection.classList.contains('is-character')||document.hidden)return
 const next=(previousInvitation+1+Math.floor(Math.random()*(invitations.length-1)))%invitations.length
 previousInvitation=next
 characterMessage.textContent=`（ ${invitations[next]} ）`

}
const invitationTimer=window.setInterval(changeInvitation,5500)
if(import.meta.hot)import.meta.hot.dispose(()=>clearInterval(invitationTimer))
const playgroundSection=document.querySelector('#worksBody')!.closest('section')!
function updateCurrentSection(){
 const boundary=currentSection.getBoundingClientRect().top+15
 const name=playgroundSection.getBoundingClientRect().top<=boundary?'Playground':'Index'
 if(sectionLabel.textContent!==name)sectionLabel.textContent=name
 const wasCharacter=currentSection.classList.contains('is-character')
 currentSection.classList.toggle('is-character',playgroundSection.getBoundingClientRect().bottom<=boundary)
 if(!wasCharacter)changeInvitation()
}
scroller.addEventListener('scroll',updateCurrentSection,{passive:true})
window.addEventListener('resize',updateCurrentSection)
ScrollTrigger.addEventListener('refresh',updateCurrentSection)
updateCurrentSection()
if(import.meta.hot)import.meta.hot.dispose(()=>{
 scroller.removeEventListener('scroll',updateCurrentSection)
 window.removeEventListener('resize',updateCurrentSection)
 ScrollTrigger.removeEventListener('refresh',updateCurrentSection)
})


// A full first viewport gives the opening rule a deliberate starting edge.
const firstWorksSection=document.querySelector('#clientWorksBody')!.closest('section')!
function updateListPresence(){
 const visible=firstWorksSection.getBoundingClientRect().top<scroller.getBoundingClientRect().bottom-24
 document.body.classList.toggle('list-has-entered',visible)
}
scroller.addEventListener('scroll',updateListPresence,{passive:true})
window.addEventListener('resize',updateListPresence)
updateListPresence()
if(import.meta.hot)import.meta.hot.dispose(()=>{
 scroller.removeEventListener('scroll',updateListPresence)
 window.removeEventListener('resize',updateListPresence)
})

ScrollTrigger.refresh()

function dismissInitialShade(){
 if(scroller.scrollTop>2){
  document.body.classList.add('list-scroll-started')
  scroller.removeEventListener('scroll',dismissInitialShade)
 }
}
scroller.addEventListener('scroll',dismissInitialShade,{passive:true})
dismissInitialShade()
if(import.meta.hot)import.meta.hot.dispose(()=>scroller.removeEventListener('scroll',dismissInitialShade))
