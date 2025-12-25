// @ts-nocheck
import * as THREE from 'three';

/* ==========================================================================
   CONFIG - 全ての調整可能なパラメータをここに集約
   ========================================================================== */
export const CONFIG = {
  // 画像の配置設定
  count: 10,              // 画像の枚数
  spacing: 2.4,           // X軸方向の間隔
  planeWidth: 2.0,        // プレーンの幅
  planeHeight: 1.4,       // プレーンの高さ（3:2程度のアスペクト比）

  // 3D演出パラメータ
  depthFactor: 1.6,       // フォーカスからの距離に応じたZ方向の後退量
  minScale: 0.5,          // 最小スケール（遠くの画像）
  falloff: 2.8,           // スケール減衰の緩やかさ（大きいほどゆっくり減衰）
  rotFactor: 0.4,         // 回転係数（正:右回転、負:左回転）
  rotMax: 0.6,            // 最大回転角度（ラジアン）

  // カメラ設定
  camera: {
    fov: 50,
    z: 5,                 // カメラのZ位置
  },

  // スクロール設定
  scrollMultiplier: 8,    // スクロール量の倍率（ビューポート数）

  // TEMPOプリセット
  // gain: スクロール進捗に対するフォーカス移動の増幅率
  // ease: 慣性イージング係数（0-1、大きいほど追従が速い）
  tempo: {
    calm: { gain: 0.85, ease: 0.05 },
    drift: { gain: 1.0, ease: 0.07 },
    rush: { gain: 1.25, ease: 0.11 },
  } as Record<string, { gain: number; ease: number }>,
};

/* ==========================================================================
   画像URL（Unsplash - CORSが許可されている）
   ========================================================================== */
const IMAGE_URLS = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80',
];

/* ==========================================================================
   STATE - アプリケーションの状態
   ========================================================================== */
const state = {
  currentTempo: 'drift' as string,
  scrollProgress: 0,      // 正規化されたスクロール進捗 [0..1]
  targetIndex: 0,         // 目標フォーカスインデックス
  smoothIndex: 0,         // 慣性適用後のスムーズなインデックス
};

/* ==========================================================================
   ユーティリティ関数
   ========================================================================== */

/**
 * 線形補間
 * @param a - 開始値
 * @param b - 終了値
 * @param t - 補間係数 [0..1]
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * 値を範囲内にクランプ
 */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * 0〜1にクランプ
 */
function clamp01(value: number): number {
  return clamp(value, 0, 1);
}

/* ==========================================================================
   GALLERY CLASS
   ========================================================================== */

class ScrollGallery {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private planes: THREE.Mesh[] = [];
  private textureLoader: THREE.TextureLoader;
  private container: HTMLElement;
  private scrollSpacer: HTMLElement;

  constructor() {
    this.container = document.getElementById('webgl')!;
    this.scrollSpacer = document.getElementById('scroll-spacer')!;

    // レンダラー
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x0a0a0a, 1);
    this.container.appendChild(this.renderer.domElement);

    // シーン
    this.scene = new THREE.Scene();

    // カメラ（固定、OrbitControlsなし）
    this.camera = new THREE.PerspectiveCamera(
      CONFIG.camera.fov,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.z = CONFIG.camera.z;

    // テクスチャローダー
    this.textureLoader = new THREE.TextureLoader();

    this.init();
  }

  private init(): void {
    this.createPlanes();
    this.initScroll();
    this.initTempoUI();
    this.initResize();
    this.animate();
  }

  /**
   * 画像プレーンを作成
   * X軸に沿って配置（円筒ではない）
   */
  private createPlanes(): void {
    const { count, spacing, planeWidth, planeHeight } = CONFIG;
    
    // 全体の幅の中央を原点にするためのオフセット
    const offsetX = (count - 1) * spacing / 2;

    for (let i = 0; i < count; i++) {
      // ジオメトリ
      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      
      // マテリアル（テクスチャは後で設定）
      const material = new THREE.MeshBasicMaterial({
        color: 0x222222,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1,
      });

      // テクスチャ読み込み
      const url = IMAGE_URLS[i % IMAGE_URLS.length];
      this.textureLoader.load(
        url,
        (texture: THREE.Texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          material.map = texture;
          material.color.set(0xffffff);
          material.needsUpdate = true;
        },
        undefined,
        (err: unknown) => {
          console.warn(`Failed to load texture: ${url}`, err);
        }
      );

      // メッシュ作成
      const mesh = new THREE.Mesh(geometry, material);
      
      // X軸上に配置（中央揃え）
      // x = i * spacing - offsetX → 中央が原点
      mesh.position.x = i * spacing - offsetX;
      mesh.position.y = 0;
      mesh.position.z = 0;

      // カスタムプロパティ: 元のインデックスを保持
      mesh.userData.index = i;
      mesh.userData.baseX = mesh.position.x;

      this.scene.add(mesh);
      this.planes.push(mesh);
    }
  }

  /**
   * スクロール設定
   */
  private initScroll(): void {
    // スクロール可能な高さを設定
    const scrollHeight = window.innerHeight * CONFIG.scrollMultiplier;
    this.scrollSpacer.style.height = `${scrollHeight}px`;

    // スクロールイベント
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  /**
   * スクロールイベントハンドラ
   * 正規化されたスクロール進捗を計算
   */
  private onScroll(): void {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // 正規化されたスクロール進捗 [0..1]
    state.scrollProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
  }

  /**
   * TEMPO UI 初期化
   */
  private initTempoUI(): void {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.tempo-btn');
    
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tempo = btn.dataset.tempo;
        if (tempo && CONFIG.tempo[tempo]) {
          state.currentTempo = tempo;
          buttons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  }

  /**
   * リサイズハンドラ
   */
  private initResize(): void {
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  /**
   * アニメーションループ
   * 
   * コアロジック:
   * 1. スクロール進捗 p [0..1] から目標インデックスを計算
   * 2. 慣性（ease）を適用してスムーズなインデックスを更新
   * 3. 各プレーンについて、フォーカスからの距離 d を計算
   * 4. 距離に応じて Z位置、スケール、Y回転を適用
   */
  private animate = (): void => {
    requestAnimationFrame(this.animate);

    const { count, depthFactor, minScale, falloff, rotFactor, rotMax, spacing } = CONFIG;
    const tempoSettings = CONFIG.tempo[state.currentTempo];

    // ===== 1. 目標インデックスの計算 =====
    // scrollProgress [0..1] → targetIndex [0..count-1]
    // gain でスクロール感度を調整
    state.targetIndex = state.scrollProgress * (count - 1) * tempoSettings.gain;

    // ===== 2. 慣性適用（スムーズなフォーカス移動） =====
    // smoothIndex += (targetIndex - smoothIndex) * ease
    // ease が小さいほどゆっくり追従（Calm）、大きいほど速く追従（Rush）
    state.smoothIndex += (state.targetIndex - state.smoothIndex) * tempoSettings.ease;

    // ===== 3. 各プレーンの変換を適用 =====
    const offsetX = (count - 1) * spacing / 2;

    this.planes.forEach((mesh, i) => {
      // フォーカスからの距離（符号付き）
      // d > 0: プレーンはフォーカスより右側
      // d < 0: プレーンはフォーカスより左側
      const d = i - state.smoothIndex;
      const absD = Math.abs(d);

      // ----- Z位置（奥行き） -----
      // フォーカスから離れるほど後退（-Z方向）
      // z = -absD * depthFactor
      const targetZ = -absD * depthFactor;
      mesh.position.z = lerp(mesh.position.z, targetZ, 0.1);

      // ----- スケール -----
      // フォーカス = 1.0、離れるほど minScale に近づく
      // falloff が大きいほどゆっくり減衰
      const scaleT = clamp01(absD / falloff);
      const targetScale = lerp(1.0, minScale, scaleT);
      mesh.scale.setScalar(lerp(mesh.scale.x, targetScale, 0.1));

      // ----- Y軸回転 -----
      // フォーカスより左のプレーン (d < 0) → 右向きに回転（正の角度）
      // フォーカスより右のプレーン (d > 0) → 左向きに回転（負の角度）
      // rotFactor で回転量を調整、rotMax で最大角度を制限
      const targetRotY = clamp(d * rotFactor, -rotMax, rotMax);
      mesh.rotation.y = lerp(mesh.rotation.y, targetRotY, 0.08);

      // ----- X位置（フォーカス追従） -----
      // カメラに対して中央のプレーンが見えるように、全体をX方向にシフト
      // smoothIndex * spacing だけ左にシフト
      const targetX = mesh.userData.baseX - state.smoothIndex * spacing + offsetX;
      mesh.position.x = lerp(mesh.position.x, targetX, 0.1);

      // ----- オパシティ（オプション、距離で薄くする） -----
      const targetOpacity = lerp(1.0, 0.4, clamp01(absD / (falloff * 1.5)));
      (mesh.material as THREE.MeshBasicMaterial).opacity = lerp(
        (mesh.material as THREE.MeshBasicMaterial).opacity, 
        targetOpacity, 
        0.1
      );
    });

    // レンダリング
    this.renderer.render(this.scene, this.camera);
  }
}

/* ==========================================================================
   初期化
   ========================================================================== */
export function initScrollGallery(): void {
  new ScrollGallery();
}

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', () => {
  initScrollGallery();
});



