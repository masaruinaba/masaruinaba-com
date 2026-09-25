import {gsap} from 'gsap';
import Lenis from 'lenis';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './vendor/balloon-icon.js';
gsap.registerPlugin(ScrollTrigger);
const media=gsap.matchMedia();
const gallery=document.querySelector('.gallery-window');
if(gallery){
 const track=gallery.querySelector('.photo-track'),cards=[...track.children].slice(0,7);
 track.replaceChildren(...cards);let active=3,timer,visible=false;
 const reduce=matchMedia('(prefers-reduced-motion:reduce)');
 cards.forEach((card,i)=>{const friend=card.querySelector('.photo-friend');const corner=[1,2,3,1,3,0,2][i];friend.style.left=corner%2?'auto':'5%';friend.style.right=corner%2?'5%':'auto';friend.style.top=corner<2?'5%':'auto';friend.style.bottom=corner<2?'auto':'5%';card.querySelector('.memory-photo').style.objectPosition=['10% center','50% center','50% center','5% center','10% center','50% center','50% center'][i];});
 function arrange(animate=true){cards.forEach((card,i)=>{const position=((i-active+10)%7)-3;const previous=Number(card.dataset.position??position);card.dataset.position=position;
 const far=Math.abs(position)>2;const scale=position===0?1:.64;const x=position*(innerWidth<=760?215:390);const rotation=position===0?4:position<0?-9:10;
 card.style.zIndex=String(10-Math.abs(position));
 const vars={x,xPercent:-50,yPercent:-50,scale,rotation,opacity:far?0:1,duration:animate&&!reduce.matches?(innerWidth<=760?1.35:1.1):0,ease:'power2.inOut',overwrite:true};
 if(Math.abs(previous-position)>3){gsap.set(card,{...vars,opacity:0});}else gsap.to(card,vars);
 const friend=card.querySelector('.photo-friend');
 if(animate&&!reduce.matches&&position===0){gsap.killTweensOf(friend);gsap.timeline().fromTo(friend,{y:14,rotation:-26,scale:.82},{y:-9,rotation:13,scale:1.1,duration:.48,delay:.3,ease:'back.out(1.7)'}).to(friend,{y:0,rotation:-7,scale:1,duration:.48,ease:'elastic.out(1,.55)'});}
 else if(position!==0)gsap.to(friend,{y:0,rotation:position<0?-12:9,scale:1,duration:.6,ease:'power2.out',overwrite:true});
 });}
 arrange(false);function run(){clearInterval(timer);if(visible&&!reduce.matches&&!document.hidden)timer=setInterval(()=>{active=(active+1)%cards.length;arrange();},innerWidth<=760?5500:3000);}
 let touch=null;
 gallery.addEventListener('dragstart',e=>e.preventDefault());
 gallery.addEventListener('pointerdown',e=>{if(e.target.closest('button,a'))return;touch={x:e.clientX,y:e.clientY};clearInterval(timer);},{passive:true});
 gallery.addEventListener('pointerup',e=>{if(!touch)return;const dx=e.clientX-touch.x,dy=e.clientY-touch.y;touch=null;if(Math.abs(dx)>35&&Math.abs(dx)>Math.abs(dy)*1.2){active=(active+(dx<0?1:-1)+cards.length)%cards.length;arrange();}run();},{passive:true});
 gallery.addEventListener('pointercancel',()=>{touch=null;run();},{passive:true});
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;run();},{threshold:.1}).observe(gallery);document.addEventListener('visibilitychange',run);reduce.addEventListener('change',run);addEventListener('resize',()=>arrange(false));
}
media.add('(prefers-reduced-motion: no-preference)',()=>{
 const lenis=new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:true,wheelMultiplier:1,touchMultiplier:2});
 lenis.on('scroll',ScrollTrigger.update);const tick=time=>lenis.raf(time*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
 // Same timeline, stagger, rotations and scroll range as portfolio-layout.ts.
 const stage=document.querySelector('.footer-art');
 if(stage){const characters=[...stage.querySelectorAll('[data-name="Base"]>div')];const timeline=gsap.timeline({paused:true});characters.forEach((el,i)=>{const resting=Number(gsap.getProperty(el,'rotation'))||0;timeline.fromTo(el,{y:()=>1565*.35,rotation:resting+(i%2?-65:70),scale:.8,autoAlpha:1},{y:0,rotation:resting,scale:1,autoAlpha:1,duration:1.65,ease:'none'},i*.13);});timeline.fromTo('.gather-wordmark',{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.7,ease:'power2.out'},1.4);ScrollTrigger.create({trigger:stage,animation:timeline,start:'clamp(top bottom)',end:'clamp(bottom bottom)',scrub:true,invalidateOnRefresh:true});}
 document.querySelectorAll('.feature').forEach((card,index)=>{
 const root=card.querySelector('.feature-stage>div'),title=root.querySelector('[data-name="Title"]'),device=root.querySelector('[data-name="Device"]');
 const timeline=gsap.timeline({scrollTrigger:{trigger:card,start:'top 80%',toggleActions:'play none none none'}});
 // Animate the image, not its authored placement wrapper (which uses translate).
 const mobile=innerWidth<=760;
 const character=mobile?root.querySelector('.mobile-feature-character'):root.firstElementChild.querySelector('img');
 if(character)gsap.fromTo(character,{rotation:index%2?-32:32,scale:.88,y:80},{rotation:0,scale:1,y:0,ease:'none',scrollTrigger:{trigger:card,start:'top 95%',end:'top 10%',scrub:.3}});
 if(title)timeline.fromTo([...title.children],{y:35,opacity:0},{y:0,opacity:1,stagger:.12,duration:.85,ease:'power3.out'},.15);
 const copy=root.querySelector(':scope>p');if(copy)timeline.fromTo(copy,{opacity:0},{opacity:1,duration:.6},.3);
 const visibleDevice=mobile?root.querySelector('.mobile-feature-device'):device;
 if(visibleDevice)timeline.fromTo(visibleDevice,{y:110,rotation:5,opacity:0},{y:0,rotation:0,opacity:1,duration:1.25,ease:'power3.out'},.3);
 });
 let heroPlayed=false;
 function heroEnter(){if(heroPlayed||(document.body.dataset.opening&&document.body.dataset.opening!=='done'))return;heroPlayed=true;const balloons=document.querySelectorAll('.hero-art .design-stage>div>div');gsap.fromTo(balloons,{y:-65,rotation:i=>i%2?5:-5},{y:0,rotation:0,duration:.68,stagger:{each:.045,from:'random'},ease:'back.out(1.35)'});gsap.fromTo('.hero-copy>*',{y:32,opacity:0},{y:0,opacity:1,duration:.65,stagger:.075,ease:'power3.out'});gsap.fromTo('.hero-device',{y:80,opacity:0},{y:0,opacity:1,duration:.8,delay:.12,ease:'power3.out'});}
 const observer=new MutationObserver(()=>{if(document.body.dataset.opening==='done')heroEnter();});observer.observe(document.body,{attributes:true,attributeFilter:['data-opening']});setTimeout(()=>{if(!document.querySelector('.opening'))heroEnter();},350);
 document.fonts.ready.then(()=>ScrollTrigger.refresh());return()=>{observer.disconnect();gsap.ticker.remove(tick);lenis.destroy();};
});
