// CM film: loads as it nears the view and plays muted while at least a quarter of it is on screen; scrolled away, it
// pauses (and comes back muted). The button (or a click on the film) toggles sound; on phones a tap enlarges it.
// Entrance (owner's pick, 2026-10-22): the film arrives edge to edge with square corners and, as the page scrolls,
// settles into its rounded frame. Scroll-linked, transform only, so the page never shifts.
(()=>{
  const section=document.querySelector('.cm');if(!section)return
  const frame=section.querySelector('.cm__frame'),video=section.querySelector('.cm__video'),sound=section.querySelector('.cm__sound')
  const setMuted=muted=>{video.muted=muted;sound.dataset.muted=muted;sound.setAttribute('aria-label',muted?'Turn sound on':'Turn sound off')}
  const toggle=()=>{setMuted(!video.muted);if(!video.muted&&video.paused)video.play().catch(()=>{})}
  sound.addEventListener('click',toggle)
  // Phones: a tap on the film opens it full screen with sound; closing it goes back to the quiet loop.
  const phone=matchMedia('(max-width: 760px)')
  const enlarge=()=>{setMuted(false);video.play().catch(()=>{})
    if(video.webkitEnterFullscreen)video.webkitEnterFullscreen()
    else (video.requestFullscreen||video.webkitRequestFullscreen)?.call(video)}
  const shrink=()=>{if(!document.fullscreenElement&&!document.webkitFullscreenElement)setMuted(true)}
  video.addEventListener('webkitendfullscreen',()=>setMuted(true))
  document.addEventListener('fullscreenchange',shrink);document.addEventListener('webkitfullscreenchange',shrink)
  video.addEventListener('click',()=>phone.matches?enlarge():toggle())
  const load=()=>{if(!video.src){video.src=video.dataset.src;video.load()}}
  new IntersectionObserver(([entry])=>{if(entry.isIntersecting)load()},{rootMargin:'600px 0px'}).observe(section)
  // isIntersecting stays true for any sliver on screen, so the quarter rule is read from the ratio itself.
  new IntersectionObserver(([entry])=>{
    if(entry.intersectionRatio>=.25){load();video.play().catch(()=>{})}
    else{video.pause();if(!video.muted)setMuted(true)}
  },{threshold:[0,.25]}).observe(frame)

  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
  const radius=parseFloat(getComputedStyle(frame).borderTopLeftRadius)||0
  const easeOut=t=>1-Math.pow(1-t,3)
  let near=false,queued=false
  const update=()=>{queued=false
    const r=frame.getBoundingClientRect(),w=frame.offsetWidth,h=frame.offsetHeight
    const top=r.top+(r.height-h)/2   // layout top, without the current scale
    // 0 when the frame's top meets the bottom of the screen, 1 when its centre reaches the centre.
    const start=innerHeight,end=innerHeight/2-h/2
    const p=easeOut(Math.min(1,Math.max(0,(start-top)/(start-end))))
    const s0=document.documentElement.clientWidth/w,s=s0+(1-s0)*p
    frame.style.transform=s===1?'':`scale(${s})`
    frame.style.borderRadius=`${(radius*p)/s}px`
  }
  const queue=()=>{if(near&&!queued){queued=true;requestAnimationFrame(update)}}
  new IntersectionObserver(([entry])=>{near=entry.isIntersecting;queue()},{rootMargin:'200px 0px'}).observe(section)
  addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue)
  update()
})()
