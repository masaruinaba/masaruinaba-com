# Cylinder Gallery - Cinematic 3D Scroll Experience

CodropsのCinematic 3D Scroll Experiencesにインスパイアされた、スクロール駆動の3Dシリンダーギャラリーです。

## 技術スタック

- **Vite** - 高速なビルドツール
- **Vanilla TypeScript** - フレームワークなし
- **OGL** - 軽量WebGLライブラリ
- **Lenis** - スムース/慣性スクロール
- **GSAP ScrollTrigger** - スクロール進捗とアニメーションの同期

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build
```

## ファイル構造

```
studio-play-v1/
├── index.html           # メインHTML
├── src/
│   ├── main.ts          # メインアプリケーション
│   └── style.css        # スタイル
├── public/
│   └── img/             # 画像アセット（後で追加予定）
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 調整可能なパラメータ

`src/main.ts`のCONFIGオブジェクトで調整可能:

```typescript
const CONFIG = {
  cylinder: {
    radius: 4,              // シリンダーの半径
    planeWidth: 2.4,        // 画像プレーンの幅
    planeHeight: 1.6,       // 画像プレーンの高さ
    imageCount: 12,         // 画像の枚数
  },
  camera: {
    fov: 45,                // 視野角
    z: 8,                   // カメラ位置
  },
  scroll: {
    imagesPerViewport: 1.5, // 1ビューポートで進む画像数
    totalLoops: 10,         // 総ループ回数
  },
  tempo: {
    calm: { rotationGain: 0.8, lerpFactor: 0.04 },
    drift: { rotationGain: 1.0, lerpFactor: 0.06 },
    rush: { rotationGain: 1.4, lerpFactor: 0.1 },
  },
}
```

## TEMPO プリセット

画面下部のUIから選択可能:

- **Calm**: ゆっくりとした回転、柔らかいイージング
- **Drift**: 中間的な速度（デフォルト）
- **Rush**: 速い回転、でも滑らかさを維持

## 今後の追加予定

- [ ] 画像アップロードUI
- [ ] ローカル画像サポート
- [ ] より多くのビジュアルエフェクト
