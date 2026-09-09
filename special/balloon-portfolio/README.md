# Balloon Portfolio — Made for Fun

バルーンキャラクターで遊べる、ポートフォリオの特別な体験。

## 開発

```sh
npm ci
npm run dev
```

http://127.0.0.1:4190/special/balloon-portfolio/ を開きます。

## ビルド

```sh
npm test
npm run build
```

`dist/` に生成し、Portfolio本体の `public/special/balloon-portfolio/` に同期します。その後Portfolio本体を通常どおりビルドすると含まれます。
公開予定URL: https://www.masaruinaba.com/special/balloon-portfolio/

OGP画像、実績画像、カメラ用モデルとWASMを同梱しています。Adobe Fontsはネット接続が必要です。カメラとマイクはHTTPSまたはlocalhostで利用します。
