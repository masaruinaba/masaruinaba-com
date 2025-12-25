import './style.css'
import { Renderer, Camera, Transform, Program, Mesh, Plane, Texture } from 'ogl'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ==========================================================================
   CONFIG - 全ての調整可能なパラメータをここに集約
   ========================================================================== */
const CONFIG = {
  // シリンダーの設定
  cylinder: {
    radius: 4,              // シリンダーの半径（カメラからの距離）
    planeWidth: 2.4,        // 各画像プレーンの幅
    planeHeight: 1.6,       // 各画像プレーンの高さ
    imageCount: 12,         // 画像の枚数
  },

  // カメラの設定
  camera: {
    fov: 45,                // 視野角（度）
    near: 0.1,
    far: 100,
    z: 8,                   // カメラのZ位置
  },

  // スクロールの設定
  scroll: {
    // 1ビューポートスクロールで何画像分進むか
    imagesPerViewport: 1.5,
    // スクロール全体のループ回数（無限スクロール風）
    totalLoops: 10,
  },

  // TEMPO プリセット
  // rotationGain: スクロール進捗に対する回転の増幅率
  // lerpFactor: 現在値→目標値への補間係数（0-1、大きいほど追従が速い）
  tempo: {
    calm: {
      rotationGain: 0.8,
      lerpFactor: 0.04,
    },
    drift: {
      rotationGain: 1.0,
      lerpFactor: 0.06,
    },
    rush: {
      rotationGain: 1.4,
      lerpFactor: 0.1,
    },
  },
}

/* ==========================================================================
   STATE - アプリケーションの状態
   ========================================================================== */
const state = {
  currentTempo: 'drift' as keyof typeof CONFIG.tempo,
  scrollProgress: 0,        // ScrollTriggerからの進捗（0-1）
  targetRotation: 0,        // 目標回転角度（ラジアン）
  currentRotation: 0,       // 現在の回転角度（ラジアン、lerp適用後）
  isLoaded: false,
}

/* ==========================================================================
   SHADERS - WebGLシェーダー
   ========================================================================== */

// 頂点シェーダー
// - 通常の変換行列を適用
// - UVをフラグメントシェーダーに渡す
const vertexShader = /* glsl */ `
  attribute vec3 position;
  attribute vec2 uv;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// フラグメントシェーダー
// - テクスチャをサンプリングして表示
// - オプションでビネット効果を追加
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D tMap;
  uniform float uOpacity;

  varying vec2 vUv;

  void main() {
    vec4 color = texture2D(tMap, vUv);
    
    // 軽いビネット効果（エッジを少し暗く）
    vec2 uv = vUv * 2.0 - 1.0;
    float vignette = 1.0 - dot(uv, uv) * 0.15;
    
    gl_FragColor = vec4(color.rgb * vignette, color.a * uOpacity);
  }
`

/* ==========================================================================
   MAIN APPLICATION
   ========================================================================== */

class CylinderGallery {
  private renderer!: Renderer
  private gl!: WebGL2RenderingContext | WebGLRenderingContext
  private camera!: Camera
  private scene!: Transform
  private planes: Mesh[] = []
  private lenis!: Lenis
  private container: HTMLElement
  private scrollSpacer: HTMLElement

  constructor() {
    this.container = document.getElementById('webgl')!
    this.scrollSpacer = document.getElementById('scroll-spacer')!
    
    this.init()
  }

  /**
   * 初期化
   */
  private async init(): Promise<void> {
    this.initRenderer()
    this.initCamera()
    this.resize() // カメラ初期化後にリサイズ
    this.initScene()
    await this.loadImages()
    this.createPlanes()
    this.initLenis()
    this.initScrollTrigger()
    this.initTempoUI()
    this.hideLoading()
    this.animate()
  }

  /**
   * WebGLレンダラーの初期化
   */
  private initRenderer(): void {
    this.renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: false,
      antialias: true,
    })
    this.gl = this.renderer.gl
    this.gl.clearColor(0.04, 0.04, 0.04, 1)
    
    this.container.appendChild(this.gl.canvas as HTMLCanvasElement)
    // resize()はカメラ初期化後に呼ぶ
    window.addEventListener('resize', () => this.resize())
  }

  /**
   * カメラの初期化
   */
  private initCamera(): void {
    this.camera = new Camera(this.gl, {
      fov: CONFIG.camera.fov,
      near: CONFIG.camera.near,
      far: CONFIG.camera.far,
    })
    this.camera.position.z = CONFIG.camera.z
  }

  /**
   * シーンの初期化（シリンダーの親Transform）
   */
  private initScene(): void {
    this.scene = new Transform()
  }

  /**
   * ダミー画像のロード
   * 今後アップロードUIを追加予定だが、今はplaceholderを使用
   */
  private async loadImages(): Promise<Texture[]> {
    const textures: Texture[] = []
    const imageCount = CONFIG.cylinder.imageCount
    
    for (let i = 0; i < imageCount; i++) {
      const texture = new Texture(this.gl, {
        generateMipmaps: true,
        minFilter: this.gl.LINEAR_MIPMAP_LINEAR,
      })
      
      // ダミー画像（Unsplash Source API使用）
      // 実際のプロジェクトでは /public/img/01.jpg などを使用
      const img = new Image()
      img.crossOrigin = 'anonymous'
      
      // 異なる画像を取得するためにsigパラメータを追加
      img.src = `https://picsum.photos/800/600?random=${i + 1}`
      
      await new Promise<void>((resolve) => {
        img.onload = () => {
          texture.image = img
          resolve()
        }
        img.onerror = () => {
          // フォールバック: グレーのプレースホルダー
          console.warn(`Failed to load image ${i}, using placeholder`)
          resolve()
        }
      })
      
      textures.push(texture)
    }
    
    return textures
  }

  /**
   * シリンダー状に配置された画像プレーンの作成
   * 
   * 数学的な解説:
   * - N枚の画像を円周上に均等配置
   * - 各画像の角度 = (2π / N) × i
   * - X座標 = radius × sin(angle)
   * - Z座標 = radius × cos(angle)
   * - Y軸回転 = angle（プレーンがカメラ側を向くように）
   */
  private createPlanes(): void {
    const { radius, planeWidth, planeHeight, imageCount } = CONFIG.cylinder
    const angleStep = (Math.PI * 2) / imageCount

    for (let i = 0; i < imageCount; i++) {
      // この画像の角度を計算
      const angle = angleStep * i

      // プログラム（シェーダー）の作成
      const program = new Program(this.gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          tMap: { value: new Texture(this.gl) },
          uOpacity: { value: 1.0 },
        },
        transparent: true,
      })

      // ダミーテクスチャをロード（非同期で更新される）
      this.loadSingleImage(i).then((texture) => {
        program.uniforms.tMap.value = texture
      })

      // プレーンジオメトリの作成
      const geometry = new Plane(this.gl, {
        width: planeWidth,
        height: planeHeight,
        widthSegments: 1,
        heightSegments: 1,
      })

      // メッシュの作成
      const mesh = new Mesh(this.gl, { geometry, program })

      // シリンダー上の位置を計算
      // X = radius × sin(θ): 左右の位置
      // Z = radius × cos(θ): 前後の位置（カメラはZ軸正方向を見ている）
      mesh.position.x = radius * Math.sin(angle)
      mesh.position.z = radius * Math.cos(angle)
      mesh.position.y = 0

      // プレーンを外側（カメラ側）に向ける
      // Y軸周りの回転 = 元の角度 + π（180度回転して外向きに）
      mesh.rotation.y = angle + Math.PI

      mesh.setParent(this.scene)
      this.planes.push(mesh)
    }
  }

  /**
   * 単一画像のロード
   */
  private async loadSingleImage(index: number): Promise<Texture> {
    const texture = new Texture(this.gl, {
      generateMipmaps: true,
      minFilter: this.gl.LINEAR_MIPMAP_LINEAR,
    })

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = `https://picsum.photos/800/600?random=${index + 1}`

    return new Promise((resolve) => {
      img.onload = () => {
        texture.image = img
        resolve(texture)
      }
      img.onerror = () => {
        // 失敗時は空のテクスチャを返す
        resolve(texture)
      }
    })
  }

  /**
   * Lenis（スムーススクロール）の初期化
   * 慣性スクロールを実現し、シネマティックな動きを補助
   */
  private initLenis(): void {
    this.lenis = new Lenis({
      duration: 1.2,        // スクロールの継続時間
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // LenisとGSAPのticker連携
    this.lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  }

  /**
   * GSAP ScrollTriggerの初期化
   * スクロール進捗とシリンダー回転を同期
   */
  private initScrollTrigger(): void {
    const { imageCount } = CONFIG.cylinder
    const { imagesPerViewport, totalLoops } = CONFIG.scroll

    // スクロール可能な高さを計算
    // 1ビューポートでimagesPerViewport枚進む → 全画像で必要なビューポート数
    const viewportsNeeded = (imageCount / imagesPerViewport) * totalLoops
    const scrollHeight = window.innerHeight * viewportsNeeded

    // scroll-spacerの高さを設定
    this.scrollSpacer.style.height = `${scrollHeight}px`

    // ScrollTriggerの設定
    ScrollTrigger.create({
      trigger: this.scrollSpacer,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        state.scrollProgress = self.progress
      },
    })
  }

  /**
   * TEMPO UIの初期化
   */
  private initTempoUI(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.tempo-btn')
    
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tempo = btn.dataset.tempo as keyof typeof CONFIG.tempo
        if (tempo && CONFIG.tempo[tempo]) {
          state.currentTempo = tempo
          buttons.forEach((b) => b.classList.remove('active'))
          btn.classList.add('active')
        }
      })
    })
  }

  /**
   * ローディングオーバーレイを非表示
   */
  private hideLoading(): void {
    const loading = document.getElementById('loading')
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden')
        state.isLoaded = true
      }, 500)
    }
  }

  /**
   * リサイズハンドラ
   */
  private resize(): void {
    const width = window.innerWidth
    const height = window.innerHeight
    
    this.renderer.setSize(width, height)
    this.camera.perspective({
      aspect: width / height,
    })
  }

  /**
   * アニメーションループ
   * 
   * 回転の計算:
   * 1. scrollProgress (0-1) から目標回転角度を計算
   * 2. TEMPOプリセットのgainを適用
   * 3. lerpで現在値を目標値に滑らかに補間
   */
  private animate = (): void => {
    requestAnimationFrame(this.animate)

    const { imageCount } = CONFIG.cylinder
    const { totalLoops } = CONFIG.scroll
    const tempoSettings = CONFIG.tempo[state.currentTempo]

    // 目標回転角度の計算
    // - 1周 = 2π ラジアン
    // - totalLoops周分のスクロールで 2π × totalLoops 回転
    // - rotationGainで速度調整
    state.targetRotation = 
      state.scrollProgress * 
      (Math.PI * 2) * 
      totalLoops * 
      tempoSettings.rotationGain

    // Lerp（線形補間）で滑らかに追従
    // current += (target - current) × lerpFactor
    state.currentRotation += 
      (state.targetRotation - state.currentRotation) * 
      tempoSettings.lerpFactor

    // シーン全体をY軸周りに回転
    // これによりシリンダー上の全プレーンが一緒に回転
    this.scene.rotation.y = state.currentRotation

    // レンダリング
    this.renderer.render({ scene: this.scene, camera: this.camera })
  }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
  new CylinderGallery()
})

export { CylinderGallery, CONFIG }
