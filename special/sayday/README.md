# SAYDAY landing page

SAYDAY landing page and privacy policy for https://sayday.masaruinaba.com, in English (`/`, `/privacy/`) and Japanese (`/ja/`, `/ja/privacy/`). The flag beside @SaydayApp (floating, and at the left of the footer) switches languages.

`public/ja/index.html` is generated: edit `public/index.html`, then run `node special/sayday/scripts/build-ja.mjs` from the portfolio root. The two privacy pages are edited by hand; keep them in step. Japanese text uses the app's Japanese font (Zen Kaku Gothic New Medium, OFL, `public/fonts/zen-kaku-OFL.txt`) through `public/ja.css`; the font file is a subset of the characters on the Japanese pages, so after changing Japanese text run `python3 special/sayday/scripts/subset-ja-font.py` (needs `pip install fonttools brotli`).

This is a standalone static Vercel project in the portfolio repository. Set the Vercel root directory to `special/sayday`, framework to Other, output directory to `public`, and leave build/install commands empty. The main portfolio build is independent.

Edit HTML/CSS/JS in `public/`. Motion authoring source is in `src/`; `public/motion.js` is its bundled GSAP/Lenis/Three.js output. Shared motion dependencies resolve from the portfolio root. To rebuild, use esbuild with `src/motion.js` as entry, browser ESM output, bundle and minification enabled.

The hero video is a 17-second motion cut of the real app, rendered frame by frame (friends arriving, picking a friend, recording, a color change, a shaped photo sticker, saving, flipping memories), with an original BGM. It plays muted and loops, pausing offscreen or for reduced motion; a small white speaker over the app's gear in the top right of the screen turns the sound on. App Store links are placeholders pending release.

Mobile cards use the desktop 780px phone crop, 24px corner radius and 6px gaps. The mobile carousel accepts swipes and advances every 5.5 seconds. Landing CTA colors stay fixed; privacy colors follow the chosen palette, with white photo-overlay text for Paper.
