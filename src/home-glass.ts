import { Renderer, Triangle, Program, Mesh, Texture } from 'ogl'

// Selected photographs in the supplied 01–05 order.
const photos = ['01', '02', '03', '04', '05']

// One continuous photographic strip, refracted through the two edges.
export function mountHomeGlass(host: HTMLElement) {
 const still = host.querySelector<HTMLImageElement>('img')!
 const reduced = matchMedia('(prefers-reduced-motion: reduce)')
 let renderer: Renderer
 try { renderer = new Renderer({ alpha: true, dpr: Math.min(devicePixelRatio, 2), antialias: false }) }
 catch { return }
 const gl = renderer.gl
 const canvas = gl.canvas as HTMLCanvasElement
 canvas.setAttribute('aria-hidden', 'true')
 const texture = new Texture(gl, { generateMipmaps: false })
 // Random texels avoid the precision bands produced by sine-based shader hashes.
 const grainPixels=new Uint8Array(256*256*4)
 for(let offset=0;offset<grainPixels.length;offset+=65536)crypto.getRandomValues(grainPixels.subarray(offset,offset+65536))
 const grainTexture=new Texture(gl,{image:grainPixels,width:256,height:256,generateMipmaps:false,minFilter:gl.NEAREST,magFilter:gl.NEAREST,wrapS:gl.REPEAT,wrapT:gl.REPEAT,flipY:false})
 const geometry = new Triangle(gl)
 const program = new Program(gl, {
  vertex: `attribute vec2 uv; attribute vec2 position; varying vec2 vUv;
   void main(){vUv=uv;gl_Position=vec4(position,0.,1.);}`,
  fragment: `precision highp float;
   uniform sampler2D tPhotos; uniform sampler2D tGrain; uniform float uTravel; uniform float uTime; uniform float uPush; uniform vec2 uPointer; uniform float uHover; uniform float uGrain;
   varying vec2 vUv;
   vec3 photograph(vec2 p,float tile){
    // Refraction stays inside its own photograph, including RGB separation.
    float x=mod(tile,${photos.length}.)+clamp(p.x-tile,.002,.998);
    return texture2D(tPhotos,vec2(x/${photos.length}.,clamp(p.y,.002,.998))).rgb;
   }
   void main(){
    vec2 p=vUv;
    vec2 delta=p-uPointer;
    p+=delta*exp(-dot(delta,delta)*14.)*uHover*.24;
    float side=p.x*2.-1.;
    float edge=pow(smoothstep(.44,1.,abs(side)),1.7);
    float wave=sin(p.y*6.2+uTime*.55);
    // The incoming photograph bows forward, squeezing the outgoing one sideways.
    float bow=sin(p.y*3.141593)*sin(p.x*3.141593)*uPush*.24;
    float reference=p.x+uTravel+bow;
    float tile=floor(reference);
    p.x=reference+side*edge*(.035+.12*uPush+.024*wave);
    float pressure=uPush*pow(abs(side),1.5);
    p.y=.5+(p.y-.5)*(1.+edge*.26+pressure*.9);
    p.y+=edge*(.024+.11*uPush)*sin(vUv.y*6.2+uTime*.45);
    float split=edge*(.003+.012*uPush);
    vec3 color=vec3(photograph(p+vec2(split,0.),tile).r,photograph(p,tile).g,photograph(p-vec2(split,0.),tile).b);
    color=mix(color,vec3(.97),edge*.07);
    // Fine monochrome grain, fixed to the screen rather than the refracted image.
    // Slightly larger grains with balanced ±4/255 variation keep exposure unchanged.
    float grainFrame=floor(uTime*12.);
    vec2 grainPixel=floor(gl_FragCoord.xy/2.);
    float grain=texture2D(tGrain,(grainPixel+vec2(grainFrame*73.,grainFrame*151.)+.5)/256.).r-.5;
    color=clamp(color+vec3(grain*.032*uGrain),0.,1.);
    gl_FragColor=vec4(color,1.);
   }`,
  uniforms: { tPhotos: { value: texture }, tGrain: { value: grainTexture }, uTravel: { value: 0 }, uTime: { value: 0 }, uPush: { value: 0 }, uPointer: { value: [.5,.5] }, uHover: { value: 0 }, uGrain: { value: 1 } },
  depthTest: false, depthWrite: false,
 })
 const mesh = new Mesh(gl, { geometry, program })
 let visible=false,ready=false,frame=0,last=0,elapsed=0,disposed=false
 let travel=0,target=0,autoFrom=0,autoElapsed=0,manualUntil=0,hovered=false,dragging=false
 let startX=0,startTravel=0,moved=0,pointerId=-1
 const events=new AbortController()
 const options={signal:events.signal}
 host.tabIndex=0
 host.setAttribute('role','group')
 host.setAttribute('aria-label','Workspace photographs. Drag or use left and right arrow keys to browse.')
 function point(event:PointerEvent){
  const rect=host.getBoundingClientRect()
  program.uniforms.uPointer.value=[(event.clientX-rect.left)/rect.width,1-(event.clientY-rect.top)/rect.height]
 }
 function settle(value:number){
  target=value;autoFrom=value;autoElapsed=0;manualUntil=performance.now()+3500;resume()
 }
 host.addEventListener('pointerenter',event=>{hovered=true;point(event);resume()},options)
 host.addEventListener('pointerleave',()=>{hovered=false;resume()},options)
 host.addEventListener('pointerdown',event=>{
  if(event.button!==0||!ready)return
  point(event);dragging=true;pointerId=event.pointerId;startX=event.clientX;startTravel=travel;moved=0
  host.setPointerCapture(event.pointerId);host.classList.add('is-dragging');resume()
 },options)
 host.addEventListener('pointermove',event=>{
  point(event)
  if(dragging&&event.pointerId===pointerId){moved=event.clientX-startX;travel=startTravel-moved/host.clientWidth;target=travel}
  resume()
 },options)
 function release(event:PointerEvent){
  if(!dragging||event.pointerId!==pointerId)return
  dragging=false;host.classList.remove('is-dragging')
  if(host.hasPointerCapture(event.pointerId))host.releasePointerCapture(event.pointerId)
  if(event.type==='pointercancel'){settle(Math.round(travel));return}
  if(Math.abs(moved)<5){
   const x=(event.clientX-host.getBoundingClientRect().left)/host.clientWidth
   settle(Math.round(travel)+(x<.35?-1:x>.65?1:0))
  }else{
   const step=Math.abs(moved)>host.clientWidth*.12?(moved<0?1:-1):0
   settle(step?Math.round(startTravel)+step:Math.round(travel))
  }
 }
 host.addEventListener('pointerup',release,options)
 host.addEventListener('pointercancel',release,options)
 host.addEventListener('keydown',event=>{
  if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return
  event.preventDefault();settle(Math.round(target)+(event.key==='ArrowRight'?1:-1))
 },options)
 host.addEventListener('dragstart',event=>event.preventDefault(),options)
 const resize = new ResizeObserver(() => {
  if(host.clientWidth)renderer.setSize(host.clientWidth,host.clientHeight)
  if(ready)renderer.render({scene:mesh})
 })
 resize.observe(host)
 function render(now:number){
  if(!visible||!ready||disposed||document.hidden){frame=0;last=0;return}
  const dt=last?Math.min((now-last)/1000,.05):0
  elapsed+=dt;last=now
  if(!dragging){
   if(now<manualUntil){
    travel=reduced.matches?target:travel+(target-travel)*(1-Math.exp(-dt*9))
   }else if(!hovered&&!reduced.matches){
    autoElapsed+=dt
    const cycle=autoElapsed/4.8,phase=cycle%1
    const p=Math.min(1,Math.max(0,(phase-.18)/.68))
    const ease=p*p*p*(p*(p*6-15)+10)
    travel=autoFrom+Math.floor(cycle)+ease;target=travel
   }
  }
  const hoverTarget=hovered||dragging?1:0
  program.uniforms.uHover.value=reduced.matches?0:program.uniforms.uHover.value+(hoverTarget-program.uniforms.uHover.value)*(1-Math.exp(-dt*10))
  const grainTarget=hovered||dragging?0:1
  program.uniforms.uGrain.value=reduced.matches?grainTarget:program.uniforms.uGrain.value+(grainTarget-program.uniforms.uGrain.value)*(1-Math.exp(-dt*12))
  program.uniforms.uTravel.value=travel
  program.uniforms.uPush.value=reduced.matches?0:Math.abs(Math.sin(travel*Math.PI))
  program.uniforms.uTime.value=reduced.matches?0:elapsed
  renderer.render({scene:mesh})
  frame=reduced.matches?0:requestAnimationFrame(render)
 }
 function resume(){if(visible&&ready&&!frame&&!document.hidden)frame=requestAnimationFrame(render)}
 const visibility=new IntersectionObserver(entries=>{
  visible=entries[0].isIntersecting;resume()
 },{threshold:.01})
 visibility.observe(host)
 document.addEventListener('visibilitychange',resume)
 reduced.addEventListener('change',resume)
 Promise.all(photos.map(async name=>{
  const image=new Image();image.src=`/images/home/${name}.webp`;await image.decode();return image
 })).then(images=>{
  if(disposed)return
  // Fit the complete strip within the device's texture limit, including mobile GPUs.
  const tileWidth=Math.min(480,Math.floor(gl.getParameter(gl.MAX_TEXTURE_SIZE)/images.length))
  const tileHeight=Math.round(tileWidth*2/3)
  const atlas=document.createElement('canvas');atlas.width=tileWidth*images.length;atlas.height=tileHeight
  const ctx=atlas.getContext('2d')!
  images.forEach((image,i)=>{
   const scale=Math.max(tileWidth/image.width,tileHeight/image.height),w=tileWidth/scale,h=tileHeight/scale
   ctx.drawImage(image,(image.width-w)/2,(image.height-h)/2,w,h,i*tileWidth,0,tileWidth,tileHeight)
  })
  texture.image=atlas;texture.needsUpdate=true
  host.append(canvas);still.style.visibility='hidden';ready=true
  renderer.setSize(host.clientWidth||240,host.clientHeight||160);resume()
 }).catch(()=>{ /* The original still remains visible if a photograph cannot load. */ })
 return()=>{
  disposed=true;events.abort();host.classList.remove('is-dragging');cancelAnimationFrame(frame);resize.disconnect();visibility.disconnect()
  document.removeEventListener('visibilitychange',resume);reduced.removeEventListener('change',resume)
  geometry.remove();program.remove();gl.deleteTexture(texture.texture);gl.deleteTexture(grainTexture.texture);canvas.remove();still.style.visibility=''
 }
}
