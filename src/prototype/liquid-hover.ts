import { Renderer, Triangle, Program, Mesh, Texture, Flowmap, Vec2, type OGLRenderingContext } from 'ogl'

const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragment = /* glsl */ `
  precision highp float;

  uniform sampler2D tFlow;
  uniform sampler2D tPrev;
  uniform sampler2D tCurr;
  uniform vec2 uPrevSize;
  uniform vec2 uCurrSize;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uFade;
  uniform float uReveal;
  uniform float uTime;
  uniform float uFlowScale;
  uniform float uSeed;
  uniform vec2 uMaskCenter;
  uniform vec2 uMaskSize;
  varying vec2 vUv;

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float f = snoise(p);
    f += 0.35 * snoise(p * 1.9 + 17.7);
    return f / 1.35;
  }

  vec2 coverUv(vec2 uv, vec2 res, vec2 img) {
    float rRes = res.x / res.y;
    float rImg = img.x / img.y;
    vec2 scale = (rRes > rImg) ? vec2(1.0, rImg / rRes) : vec2(rRes / rImg, 1.0);
    return (uv - 0.5) * scale + 0.5;
  }

  vec3 sampleRGB(sampler2D tex, vec2 uv, vec2 off) {
    vec3 c;
    c.r = texture2D(tex, uv + off * 0.72).r;
    c.g = texture2D(tex, uv + off * 0.66).g;
    c.b = texture2D(tex, uv + off * 0.60).b;
    return c;
  }

  float rowMask(vec2 uv) {
    vec2 halfSize = uMaskSize * 0.5;
    vec2 d = abs(uv - uMaskCenter) - halfSize;
    float base = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
    return 1.0 - smoothstep(-0.01, 0.035, base);
  }

  void main() {
    vec3 flow = texture2D(tFlow, vUv).rgb;
    vec2 vel = flow.rg;

    float mask = rowMask(vUv);
    vec2 p = vUv * vec2(2.0, 9.0) + vec2(uSeed, uTime * 0.08);
    vec2 rowDrift = vec2(
      fbm(p + vec2(uTime * 0.035, 0.0)),
      fbm(p + vec2(0.0, -uTime * 0.03) + 57.3)
    ) * 0.0035;
    vec2 disp = (vel * uFlowScale + rowDrift) * mask;

    vec2 uvPrev = coverUv(vUv, uResolution, uPrevSize);
    vec2 uvCurr = coverUv(vUv, uResolution, uCurrSize);

    vec3 cPrev = sampleRGB(tPrev, uvPrev, disp);
    vec3 cCurr = sampleRGB(tCurr, uvCurr, disp);
    vec3 col = mix(cPrev, cCurr, uFade);
    col = mix(col, col * 0.94, mask * 0.28);

    vec2 q = vUv - 0.5;
    float vig = 1.0 - dot(q, q) * 0.42;
    col *= vig;

    gl_FragColor = vec4(col, uReveal);
  }
`

interface TexEntry {
  texture: Texture
  size: [number, number]
}

export class LiquidHover {
  private renderer!: Renderer
  private gl!: OGLRenderingContext
  private mesh!: Mesh
  private flowmap!: Flowmap
  private program!: Program

  private cache = new Map<string, TexEntry>()
  private blank!: Texture
  private currentSrc: string | null = null

  private targetReveal = 0
  private targetFade = 1
  private lastFrameT = 0

  private mouse = new Vec2(-1)
  private velocity = new Vec2()
  private lastMouse = new Vec2()
  private lastTime = performance.now()

  private uniforms!: {
    tFlow: { value: Texture | null }
    tPrev: { value: Texture }
    tCurr: { value: Texture }
    uPrevSize: { value: [number, number] }
    uCurrSize: { value: [number, number] }
    uResolution: { value: [number, number] }
    uMouse: { value: Vec2 }
    uFade: { value: number }
    uReveal: { value: number }
    uTime: { value: number }
    uFlowScale: { value: number }
    uSeed: { value: number }
    uMaskCenter: { value: [number, number] }
    uMaskSize: { value: [number, number] }
  }

  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.init()
  }

  private init() {
    this.renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true })
    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)

    const canvas = this.gl.canvas as HTMLCanvasElement
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;'
    this.container.appendChild(canvas)

    this.flowmap = new Flowmap(this.gl, { falloff: 0.26, dissipation: 0.965, alpha: 1 })
    this.blank = new Texture(this.gl)

    this.uniforms = {
      tFlow: this.flowmap.uniform,
      tPrev: { value: this.blank },
      tCurr: { value: this.blank },
      uPrevSize: { value: [1, 1] },
      uCurrSize: { value: [1, 1] },
      uResolution: { value: [1, 1] },
      uMouse: { value: this.mouse },
      uFade: { value: 1 },
      uReveal: { value: 0 },
      uTime: { value: 0 },
      uFlowScale: { value: 0.055 },
      uSeed: { value: 0 },
      uMaskCenter: { value: [0.5, 0.5] },
      uMaskSize: { value: [1, 0.08] },
    }

    this.program = new Program(this.gl, { vertex, fragment, uniforms: this.uniforms, transparent: true })
    this.mesh = new Mesh(this.gl, { geometry: new Triangle(this.gl), program: this.program })

    this.resize()
    window.addEventListener('resize', this.resize)
    window.addEventListener('mousemove', this.onMove)

    requestAnimationFrame(this.loop)
  }

  private resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight
    this.renderer.setSize(w, h)
    this.uniforms.uResolution.value = [w, h]
    this.flowmap.aspect = w / h
  }

  private onMove = (e: MouseEvent) => {
    const now = performance.now()
    const dt = Math.max(10, now - this.lastTime)
    this.lastTime = now

    if (this.mouse.x === -1) {
      this.lastMouse.set(e.clientX, e.clientY)
    }
    this.velocity.set((e.clientX - this.lastMouse.x) / dt, (e.clientY - this.lastMouse.y) / dt)
    this.lastMouse.set(e.clientX, e.clientY)
    this.mouse.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight)
  }

  private load(src: string): Promise<TexEntry> {
    const hit = this.cache.get(src)
    if (hit) return Promise.resolve(hit)

    const texture = new Texture(this.gl, { generateMipmaps: false })
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    const entry: TexEntry = { texture, size: [1, 1] }
    this.cache.set(src, entry)

    return new Promise((resolve) => {
      img.onload = () => {
        texture.image = img
        entry.size = [img.naturalWidth, img.naturalHeight]
        resolve(entry)
      }
      img.onerror = () => resolve(entry)
    })
  }

  async show(src: string, rect?: DOMRect) {
    this.targetReveal = 1
    if (rect) this.setMask(rect)

    if (src === this.currentSrc) return
    this.currentSrc = src

    const entry = await this.load(src)
    if (this.currentSrc !== src) return

    this.uniforms.tPrev.value = this.uniforms.tCurr.value
    this.uniforms.uPrevSize.value = this.uniforms.uCurrSize.value
    this.uniforms.tCurr.value = entry.texture
    this.uniforms.uCurrSize.value = entry.size

    this.uniforms.uFade.value = 0
    this.targetFade = 1
    this.uniforms.uSeed.value = Math.random() * 100
  }

  setMask(rect: DOMRect) {
    const cx = (rect.left + rect.width * 0.5) / window.innerWidth
    const cy = 1 - (rect.top + rect.height * 0.5) / window.innerHeight
    const width = Math.min(1, Math.max(0.4, rect.width / window.innerWidth))
    const height = Math.min(0.2, Math.max(0.08, (rect.height + 72) / window.innerHeight))
    this.uniforms.uMaskCenter.value = [cx, cy]
    this.uniforms.uMaskSize.value = [width, height]
  }

  hide() {
    this.targetReveal = 0
    this.currentSrc = null
  }

  private loop = (t: number) => {
    requestAnimationFrame(this.loop)
    this.uniforms.uTime.value = t * 0.001

    const dt = Math.max(0, (t - this.lastFrameT) / 1000)
    this.lastFrameT = t
    const u = this.uniforms
    const kReveal = 1 - Math.exp(-dt * 6)
    const kFade = 1 - Math.exp(-dt * 5)
    u.uReveal.value += (this.targetReveal - u.uReveal.value) * kReveal
    u.uFade.value += (this.targetFade - u.uFade.value) * kFade
    if (Math.abs(this.targetReveal - u.uReveal.value) < 0.001) u.uReveal.value = this.targetReveal
    if (Math.abs(this.targetFade - u.uFade.value) < 0.001) u.uFade.value = this.targetFade

    this.velocity.x *= 0.85
    this.velocity.y *= 0.85

    this.flowmap.mouse.copy(this.mouse)
    this.flowmap.velocity.lerp(this.velocity, 0.5)
    this.flowmap.update()

    this.renderer.render({ scene: this.mesh })
  }
}
