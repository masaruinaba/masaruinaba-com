import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const media = gsap.matchMedia()
media.add('(prefers-reduced-motion: no-preference)', () => {
  const stage = document.querySelector<HTMLElement>('.logo-stage')!
  const first = document.querySelector<HTMLElement>('.logo-masaru')!
  const second = document.querySelector<HTMLElement>('.logo-inaba')!
  const sections = gsap.utils.toArray<HTMLElement>('.portfolio-section')
  const scroller = document.querySelector<HTMLElement>('#scrollArea')!
  let timeline: gsap.core.Timeline
  const build = () => {
    timeline?.scrollTrigger?.kill()
    timeline?.kill()
    const w = scroller.clientWidth, h = stage.clientHeight
    const small = Math.min(270 / w, .42)
    const firstHeight = w * 870 / 4200
    gsap.set(first, {x: (w - w * small) / 2, y:h * .44 - firstHeight * small, scale:small, rotation:0})
    gsap.set(second, {x: (w - w * .691666667 * small) / 2, y:h * .44, scale:small, rotation:0})
    gsap.set(stage, {color:'#2800ff'})
    timeline = gsap.timeline({defaults:{ease:'power2.inOut'},scrollTrigger:{trigger:stage,scroller,start:'top top',end:()=>`+=${innerHeight * 1.8}`,pin:true,scrub:.65,invalidateOnRefresh:true}})
    timeline.to(first,{x:-w*.015,y:0,scale:1.04,duration:1},0)
      .to(second,{x:w*.28,y:firstHeight*1.03,scale:1.04,duration:1},0)
      .to(first,{x:w*.59,y:0,scale:.44,duration:1},1.15)
      .to(second,{x:-w*.05,y:h*.53,scale:1.65,rotation:-16,duration:1},1.15)
      .to(first,{x:0,y:0,scale:.586,rotation:0,duration:1},2.3)
      .to(second,{x:w*.6,y:0,scale:.586,rotation:0,duration:1},2.3)
      .to(stage,{color:'#0a0a0a',duration:.65},2.65)
    timeline.fromTo(sections,{y:-innerHeight * 1.8},{y:0,duration:3.3,ease:'none'},0)
    ScrollTrigger.refresh()
  }
  build()
  let resizeTimer: ReturnType<typeof setTimeout>
  const resize = () => {clearTimeout(resizeTimer);resizeTimer=setTimeout(build,180)}
  window.addEventListener('resize',resize)
  document.fonts.ready.then(()=>ScrollTrigger.refresh())
  return () => {clearTimeout(resizeTimer);window.removeEventListener('resize',resize);timeline?.scrollTrigger?.kill();timeline?.kill()}
})
