# SAYDAY landing page

English SAYDAY landing page and privacy policy for https://sayday.masaruinaba.com.

This is a standalone static Vercel project in the portfolio repository. Set the Vercel root directory to `special/sayday`, framework to Other, output directory to `public`, and leave build/install commands empty. The main portfolio build is independent.

Edit HTML/CSS/JS in `public/`. Motion authoring source is in `src/`; `public/motion.js` is its bundled GSAP/Lenis/Three.js output. Shared motion dependencies resolve from the portfolio root. To rebuild, use esbuild with `src/motion.js` as entry, browser ESM output, bundle and minification enabled.

The hero video is an edited simulator walkthrough. English voice/text are demo inputs; photo editing, saving and calendar navigation use the actual app. It plays muted and loops, pausing offscreen or for reduced motion. App Store links are placeholders pending release.

Mobile cards use the desktop 780px phone crop, 24px corner radius and 6px gaps. The mobile carousel accepts swipes and advances every 5.5 seconds. Landing CTA colors stay fixed; privacy colors follow the chosen palette, with white photo-overlay text for Paper.
