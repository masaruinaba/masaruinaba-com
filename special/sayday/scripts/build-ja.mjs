// Builds the Japanese landing page (public/ja/index.html) from the English one (public/index.html).
// Edit the English page, then run `node special/sayday/scripts/build-ja.mjs` from the portfolio root.
// Display type (headings, labels, footer) stays English; the hero line and the feature copy are Japanese.
// Every replacement must match exactly once, so a changed English string stops the build instead of
// leaving English behind on the Japanese page.
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';

const root = new URL('../public/', import.meta.url);
let html = readFileSync(new URL('index.html', root), 'utf8');

const SITE = 'https://sayday.masaruinaba.com';
const US_FLAG = '<svg viewBox="0 0 30 20" aria-hidden="true"><defs><clipPath id="flag-us"><rect width="30" height="20" rx="4"/></clipPath></defs><g clip-path="url(#flag-us)"><rect width="30" height="20" fill="#fff"/><path d="M0 0h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0z" fill="#c8303a"/><rect width="13" height="10.77" fill="#2b3a8c"/></g><rect x=".5" y=".5" width="29" height="19" rx="3.5" fill="none" stroke="#00000026"/></svg>';

const description = 'その日の写真といっしょに、今日のひとことを残そう。SAYDAYで、声と写真を思い出に。';

const replacements = [
  // Head
  ['<html lang="en">', '<html lang="ja">'],
  [`<link rel="canonical" href="${SITE}/">`, `<link rel="canonical" href="${SITE}/ja/">`],
  ['<meta property="og:locale" content="en_US">', '<meta property="og:locale" content="ja_JP">'],
  [`<meta property="og:url" content="${SITE}/">`, `<meta property="og:url" content="${SITE}/ja/">`],
  [/content="Keep the little things they say, along with photos from the day\. Save voice recordings and photos as memories with SAYDAY\."/g, `content="${description}"`, 3],

  // Hero
  ['<p>Keep the little things they say, along with photos from the day.</p>', '<p>その日の写真といっしょに、今日のひとことを残そう。</p>'],

  // Features
  ['That new word, a quick hello, the way they say a familiar name—each is worth hearing again. Keep the memory voice-only or add a photo from the day. Later, find it by date and press play.',
    '覚えたての言葉、ちょっとしたあいさつ、いつもの名前の呼び方。どれも、あとで何度でも聞き返したくなる声です。声だけでも、その日の写真を添えても残せます。あとから日付で探して、再生するだけ。'],
  ['A star, a bell, a bright little blob—there’s a friend for every kind of day. Browse the characters and choose who appears with this voice memory.',
    '星、ベル、まあるいカラフルなかたち。どんな日にもぴったりのキャラクターがいます。一覧から、この声の思い出にいっしょに登場するキャラクターを選びましょう。'],
  ["Say something, and your words float up in your friend's bubble. Speech becomes text right on your phone, so nothing is sent anywhere. Fix a word whenever you like, and find the day again by what was said.",
    '話しかけると、その言葉がキャラクターの吹き出しにふわっと浮かびます。文字起こしはiPhoneの中で行うので、どこにも送られません。言葉はいつでも直せて、話した内容からその日を探せます。'],
  ['Take a photo or choose one from your library. Keep the full image or make a cutout, then move, resize, and rotate it beside the character.',
    '写真を撮るか、ライブラリから選びます。そのまま使っても、切り抜いてもOK。キャラクターの横で、動かしたり、大きさや向きを変えたりできます。'],
  ['Open a saved day and play the voices from it. When there’s one you want to send, arrange the photos and words in the export preview and share a copy. The saved memory stays unchanged.',
    '保存した日を開いて、その日の声を再生。送りたいものがあれば、書き出しのプレビューで写真と言葉を並べて、コピーをおすそわけできます。保存した思い出はそのまま残ります。'],

  // Language switch: the flag and the footer link go back to English; privacy goes to the Japanese policy.
  [/<a class="floating-flag" href="\/ja\/" hreflang="ja" lang="ja" aria-label="日本語で見る">.*?<\/svg><\/a>/s,
    `<a class="floating-flag" href="/" hreflang="en" lang="en" aria-label="View in English">${US_FLAG}</a>`],
  ['href="/ja/" hreflang="ja">JAPANESE</a>', 'href="/" hreflang="en" lang="en">ENGLISH</a>'],
  ['href="/privacy/">PRIVACY POLICY</a>', 'href="/ja/privacy/">PRIVACY POLICY</a>'],
];

for (const [from, to, times = 1] of replacements) {
  const found = typeof from === 'string' ? html.split(from).length - 1 : (html.match(from.global ? from : new RegExp(from.source, from.flags + 'g')) || []).length;
  if (found !== times) throw new Error(`Expected ${times} match(es), found ${found}: ${String(from).slice(0, 80)}`);
  html = typeof from === 'string' ? html.split(from).join(to) : html.replace(from, to);
}

mkdirSync(new URL('ja/', root), {recursive: true});
writeFileSync(new URL('ja/index.html', root), html);
console.log('wrote public/ja/index.html');
