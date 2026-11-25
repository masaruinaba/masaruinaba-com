/*
  Template motion engine (see ../RULES.md, Motion).
  Load order: vendor/gsap, ScrollTrigger, SplitText, CustomEase, lenis, then this file.

  Vocabulary (data attributes)
    data-lines            text splits into masked lines; each rises from 105% on enter
    data-fade             opacity + 16px rise
    data-group            children enter one after another (short 0.06s step, no blur)
    data-clip             wrapper of an img: clip-path wipe opens upward, img settles 1.12 -> 1
    data-clip="left|right|down"   other wipe directions
    data-settle           img inside settles 1.12 -> 1 tied to scroll (no vertical drift)
    data-count="1200"     number runs up once on enter
    data-delay="0.2"      extra delay on any reveal
    data-hero             reveals inside run in the load intro, not on scroll
    data-nav              header hides on scroll down, returns on scroll up; .is-scrolled after 40px
    data-progress         scaleX follows page scroll
    data-rows             list: hovered row fills from the left, others drop to 32%  (CSS in base.css)
    data-hover-img        list rows with data-img="path": preview follows the cursor
    data-register="10"    a second ink copy (colour --ink2, multiply) slides into register
    data-draw             SVG paths inside draw themselves with scroll (charts, diagrams)
    data-open="14"        image starts as an inset window and opens to full bleed with scroll
    data-hscroll          section pinned while its [data-track] moves sideways with scroll
    data-goo-swap="6"     one picture (data-srcs list) changes every N s through the goo transition
    data-goo              photo pushed in by noise and dissolved through grain (WebGL, from the Ink. site); "-1" reverses
    data-shutter          slatted roller shutter nudges up, catches, then rolls away (colours --shutter-a/-b)
    data-swap             FV slideshow: children .slide (img) wipe in turn; [data-swap-text] lines swap;
                          [data-swap-meter] fills per slide. Pauses when out of view.
  Theme hooks
    window.templateIntro = (tl, gsap) => { ... }   add steps to the load timeline
*/
(() => {
  const { gsap } = window;
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
  CustomEase.create('settle', '.22,1,.36,1');
  CustomEase.create('soft', '.2,.8,.2,1');
  CustomEase.create('wipe', '.76,0,.24,1');
  CustomEase.create('e0', '.26,.06,0,1');   // the Ink. site's reveal curve: fast start, very long settle
  CustomEase.create('e2', '.43,.05,.17,1');

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DUR = 1.1;

  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;
    // pinned sections change the page height after Lenis measured it
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        const el = id.length > 1 && document.querySelector(id);
        if (!el && id !== '#top') return;
        e.preventDefault();
        lenis.scrollTo(el ? el.getBoundingClientRect().top + scrollY : 0, { duration: 1.6 }); // numeric: stays right with pinned sections
      })
    );
  }

  const intro = gsap.timeline({ paused: true, defaults: { ease: 'settle', duration: DUR } });
  const inHero = (el) => !!el.closest('[data-hero]');
  const delayOf = (el) => parseFloat(el.dataset.delay || 0);

  function reveal(el, from, opts = {}) {
    if (reduce) return;
    const targets = opts.targets || el;
    const vars = { ...from, stagger: opts.stagger ?? 0 };
    if (inHero(el)) {
      intro.from(targets, vars, 0.15 + delayOf(el));
    } else {
      gsap.from(targets, {
        ease: 'settle', duration: DUR, ...vars, delay: delayOf(el),
        scrollTrigger: { trigger: el, start: opts.start || 'top 88%', once: true },
      });
    }
  }

  function clip(el) {
    const dir = el.dataset.clip || 'up';
    const from = { up: 'inset(100% 0% 0% 0%)', down: 'inset(0% 0% 100% 0%)', left: 'inset(0% 100% 0% 0%)', right: 'inset(0% 0% 0% 100%)' }[dir];
    const img = el.querySelector('img, video');
    if (reduce) return;
    const tl = inHero(el) ? intro : gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
    const at = (inHero(el) ? 0.1 : 0) + delayOf(el);
    tl.fromTo(el, { clipPath: from }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.15, ease: 'e0' }, at);
    if (img) tl.fromTo(img, { scale: 1.14 }, { scale: 1, duration: 1.7, ease: 'e0' }, at);
  }


  // ---- goo transition, ported from the Ink. site (flow.js gooImg) ----------------------------------------------------
  // Draws one short WebGL pass over the <img>: picture A is pushed by fbm noise along `dir` while picture B dissolves in
  // through grain, with a slight RGB slip along the push and a lift of the blacks; then the canvas is freed.
  // toSrc = null reveals the img itself from the page's paper colour.
  function gooImg(img, toSrc, dir, done) {
    const b = new Image(); b.crossOrigin = 'anonymous';
    b.onload = () => {
      const box = img.parentNode; if (getComputedStyle(box).position === 'static') box.style.position = 'relative';
      const cv = document.createElement('canvas'), dpr = Math.min(2, devicePixelRatio || 1);
      const W = Math.round(img.clientWidth * dpr), H = Math.round(img.clientHeight * dpr);
      cv.width = W; cv.height = H;
      cv.style.cssText = `position:absolute;left:${img.offsetLeft}px;top:${img.offsetTop}px;width:${img.clientWidth}px;height:${img.clientHeight}px;z-index:1;pointer-events:none`;
      img.after(cv);
      const gl = cv.getContext('webgl', { preserveDrawingBuffer: true });
      if (!gl) { cv.remove(); if (toSrc) img.src = toSrc; done && done(); return; }
      const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return o; }, pr = gl.createProgram();
      gl.attachShader(pr, sh(gl.VERTEX_SHADER, 'attribute vec2 q; varying vec2 uv; void main(){ uv = q * .5 + .5; uv.y = 1. - uv.y; gl_Position = vec4(q, 0., 1.); }'));
      gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, `precision highp float; varying vec2 uv; uniform sampler2D A, B; uniform vec2 ca, cb; uniform float p, d, asp, seed;
        float h(vec2 q){ vec3 r = fract(vec3(q.xyx) * .1031); r += dot(r, r.yzx + 33.33); return fract((r.x + r.y) * r.z); }
        float n(vec2 q){ vec2 i = floor(q), f = fract(q); f = f * f * (3. - 2. * f); return mix(mix(h(i), h(i + vec2(1., 0.)), f.x), mix(h(i + vec2(0., 1.)), h(i + vec2(1., 1.)), f.x), f.y); }
        float fbm(vec2 q){ float v = 0., a = .5; for (int k = 0; k < 4; k++){ v += a * n(q); q = q * 2.03 + 7.1; a *= .5; } return v; }
        vec2 cover(vec2 u, vec2 c){ return (u - .5) * c + .5; }
        void main(){ vec2 q = vec2(uv.x * asp, uv.y) + seed; float w = sin(3.14159 * p), sp = smoothstep(0., 1., p);
          float nx = fbm(q * 2.2 + vec2(p * 1.3 * d, 0.)), ny = fbm(q * 2.6 + 4.7 - p * .9);
          vec2 push = vec2(d * (.16 + .5 * (nx - .5)), (ny - .5) * .22) * w;
          vec2 ua = cover(uv - push * (.6 + p), ca), ub = cover((uv + push * (1. - p) * .8 - .5) / (1. + .06 * (1. - p)) + .5, cb);
          float m = clamp(-fbm(q * 1.6 + 2.3 + vec2(d * p * .4, 0.)) * .95 + 1.95 * sp, 0., 1.);
          float g = h(floor(gl_FragCoord.xy / 1.5) + seed * 13.1) - .5;
          float e = 1. - abs(m * 2. - 1.); m = clamp(m + g * .35 * e, 0., 1.);
          vec2 ch = vec2(d * .0022, 0.) * w;
          vec3 a = vec3(texture2D(A, ua + ch).r, texture2D(A, ua).g, texture2D(A, ua - ch).b);
          vec3 bb = vec3(texture2D(B, ub + ch * .6).r, texture2D(B, ub).g, texture2D(B, ub - ch * .6).b);
          vec3 col = mix(a, bb, m);
          col = mix(col, col * .95 + .035, .4 * w) + g * .045 * w;
          gl_FragColor = vec4(col, 1.); }`));
      gl.linkProgram(pr); gl.useProgram(pr);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const lq = gl.getAttribLocation(pr, 'q'); gl.enableVertexAttribArray(lq); gl.vertexAttribPointer(lq, 2, gl.FLOAT, false, 0, 0);
      const tex = (im, u) => { gl.activeTexture(gl.TEXTURE0 + u); gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
        [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER].forEach((k) => gl.texParameteri(gl.TEXTURE_2D, k, gl.LINEAR));
        [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach((k) => gl.texParameteri(gl.TEXTURE_2D, k, gl.CLAMP_TO_EDGE));
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im); };
      // picture A: the current image, or a sheet of the paper colour when revealing
      let A = img;
      if (!toSrc) { A = document.createElement('canvas'); A.width = A.height = 4; const c = A.getContext('2d');
        let bg = 'transparent', n = box; while (n && (bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)')) { bg = getComputedStyle(n).backgroundColor; n = n.parentElement; }
        c.fillStyle = bg && bg !== 'rgba(0, 0, 0, 0)' ? bg : '#f4f2ee'; c.fillRect(0, 0, 4, 4); }
      tex(A, 0); tex(b, 1);
      const U = (k) => gl.getUniformLocation(pr, k), ar = W / H;
      const cov = (im) => { const iw = im.naturalWidth || im.width, ih = im.naturalHeight || im.height, ia = iw / ih; return ia > ar ? [ar / ia, 1] : [1, ia / ar]; };
      gl.uniform1i(U('A'), 0); gl.uniform1i(U('B'), 1); gl.uniform2fv(U('ca'), toSrc ? cov(img) : [1, 1]); gl.uniform2fv(U('cb'), cov(b));
      gl.uniform1f(U('d'), dir > 0 ? 1 : -1); gl.uniform1f(U('asp'), ar); gl.uniform1f(U('seed'), Math.random() * 40); gl.viewport(0, 0, W, H);
      const t0 = performance.now(), T = toSrc ? 1250 : 1500; let swapped = false;
      (function f(now) {
        const t = window.__gooHold != null ? window.__gooHold : Math.min(1, (now - t0) / T), e = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        gl.uniform1f(U('p'), e); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (!swapped && t > .5) { swapped = true; if (toSrc) img.src = toSrc; else done && done(); }
        if (t < 1) requestAnimationFrame(f);
        else { const x = gl.getExtension('WEBGL_lose_context'); if (x) x.loseContext(); cv.remove(); if (toSrc) done && done(); }
      })(t0);
    };
    b.src = toSrc || img.currentSrc || img.src;
  }

  // data-goo-swap="6" with data-srcs="a.jpg,b.jpg": one picture that changes every N seconds through the goo transition.
  // [data-swap-text] children inside change with it; [data-swap-meter] fills per picture.
  window.gooImg = gooImg;   // for template-specific slide sequences
  function gooSwap(root) {
    const img = root.querySelector('img'), srcs = root.dataset.srcs.split(',').map((x) => x.trim());
    const texts = [...root.querySelectorAll('[data-swap-text]')];
    const meters = [...root.querySelectorAll('[data-swap-meter] > *')].map((m) => m.firstElementChild || m);
    const HOLD = parseFloat(root.dataset.gooSwap) || 6; let i = 0, visible = true;
    srcs.forEach((s) => { const p = new Image(); p.src = s; });
    texts.forEach((t) => [...t.children].forEach((c, k) => gsap.set(c, { yPercent: k ? 105 : 0 })));
    const fill = (k) => { meters.forEach((m, j) => gsap.set(m, { scaleX: j < k ? 1 : 0, transformOrigin: 'left' })); if (meters[k]) gsap.fromTo(meters[k], { scaleX: 0 }, { scaleX: 1, duration: HOLD, ease: 'none' }); };
    ScrollTrigger.create({ trigger: root, start: 'top bottom', end: 'bottom top', onToggle: (s) => (visible = s.isActive) });
    if (reduce) return;
    fill(0);
    setInterval(() => {
      if (!visible || document.hidden) return;
      const prev = i; i = (i + 1) % srcs.length;
      gooImg(img, srcs[i], 1);
      texts.forEach((t) => { const c = t.children; gsap.to(c[prev], { yPercent: -105, duration: 0.7, ease: 'e2' }); gsap.fromTo(c[i], { yPercent: 105 }, { yPercent: 0, duration: 0.9, ease: 'e0', delay: 0.35 }); });
      fill(i);
    }, HOLD * 1000);
  }

  function swap(root) {
    const slides = [...root.querySelectorAll('.slide')];
    const texts = [...root.querySelectorAll('[data-swap-text]')];
    const meters = [...root.querySelectorAll('[data-swap-meter] > *')].map((m) => m.firstElementChild || m);
    const HOLD = parseFloat(root.dataset.swap) || 6;
    let i = 0, timer = null, visible = true;
    slides.forEach((s, k) => gsap.set(s, { clipPath: k ? 'inset(100% 0% 0% 0%)' : 'inset(0% 0% 0% 0%)', zIndex: k ? 0 : 1 }));
    texts.forEach((t) => [...t.children].forEach((c, k) => gsap.set(c, { yPercent: k ? 105 : 0 })));
    const fill = (k) => {
      meters.forEach((m, j) => gsap.set(m, { scaleX: j < k ? 1 : 0, transformOrigin: 'left' }));
      if (meters[k]) gsap.fromTo(meters[k], { scaleX: 0 }, { scaleX: 1, duration: HOLD, ease: 'none' });
    };
    const go = () => {
      const prev = i; i = (i + 1) % slides.length;
      const a = slides[prev], b = slides[i];
      gsap.set(slides, { zIndex: 0 }); gsap.set(a, { zIndex: 1 }); gsap.set(b, { zIndex: 2 });
      gsap.fromTo(b, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'wipe' });
      gsap.fromTo(b.querySelector('img'), { scale: 1.12 }, { scale: 1, duration: 7, ease: 'settle' });
      gsap.to(a.querySelector('img'), { yPercent: -6, duration: 1.3, ease: 'wipe', onComplete: () => gsap.set(a.querySelector('img'), { yPercent: 0 }) });
      texts.forEach((t) => {
        const c = t.children;
        gsap.to(c[prev], { yPercent: -105, duration: 0.7, ease: 'wipe' });
        gsap.fromTo(c[i], { yPercent: 105 }, { yPercent: 0, duration: 0.9, ease: 'settle', delay: 0.25 });
      });
      fill(i);
    };
    const loop = () => { clearInterval(timer); timer = setInterval(() => visible && !document.hidden && go(), HOLD * 1000); };
    ScrollTrigger.create({ trigger: root, start: 'top bottom', end: 'bottom top', onToggle: (s) => (visible = s.isActive) });
    if (!reduce) { gsap.fromTo(slides[0].querySelector('img'), { scale: 1.12 }, { scale: 1, duration: 7, ease: 'settle' }); fill(0); loop(); }
  }

  async function init() {
    await document.fonts.ready;

    document.querySelectorAll('[data-lines]').forEach((el) => {
      const s = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'ln' });
      reveal(el, { yPercent: 105 }, { targets: s.lines, stagger: 0.08 });
    });
    document.querySelectorAll('[data-fade]').forEach((el) => reveal(el, { opacity: 0, y: 16, ease: 'soft' }));
    document.querySelectorAll('[data-group]').forEach((el) =>
      reveal(el, { opacity: 0, y: 20, ease: 'soft' }, { targets: el.children, stagger: 0.06 })
    );
    document.querySelectorAll('[data-clip]').forEach(clip);
    document.querySelectorAll('[data-settle]').forEach((el) => {
      if (reduce) return;
      const img = el.querySelector('img, video');
      gsap.fromTo(img, { scale: 1.12 }, { scale: 1, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom 40%', scrub: 0.6 } });
    });
    document.querySelectorAll('[data-count]').forEach((el) => {
      const end = parseFloat(el.dataset.count);
      const dec = (el.dataset.count.split('.')[1] || '').length;
      const fmt = (v) => v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (reduce) { el.textContent = fmt(end); return; }
      const o = { v: 0 }; el.textContent = fmt(0);
      gsap.to(o, { v: end, duration: 1.8, ease: 'settle', onUpdate: () => (el.textContent = fmt(o.v)),
        scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });
    document.querySelectorAll('[data-progress]').forEach((el) =>
      gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, ease: 'none', transformOrigin: 'left', scrollTrigger: { start: 0, end: 'max', scrub: true } })
    );
    const nav = document.querySelector('[data-nav]');
    if (nav) {
      let last = 0;
      ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => {
        const y = self.scroll();
        nav.classList.toggle('is-hidden', y > 240 && y > last);
        nav.classList.toggle('is-scrolled', y > 40);
        last = y;
      } });
    }
    document.querySelectorAll('[data-hover-img]').forEach((list) => {
      const fig = document.createElement('div');
      fig.className = 'hover-float';
      fig.innerHTML = '<img alt="">';
      document.body.appendChild(fig);
      const img = fig.querySelector('img');
      gsap.set(fig, { xPercent: 14, yPercent: -50, scale: 0.94, autoAlpha: 0 });
      const xTo = gsap.quickTo(fig, 'x', { duration: 0.6, ease: 'power3' });
      const yTo = gsap.quickTo(fig, 'y', { duration: 0.6, ease: 'power3' });
      list.addEventListener('mousemove', (e) => { xTo(e.clientX); yTo(e.clientY); });
      list.querySelectorAll('[data-img]').forEach((row) => {
        row.addEventListener('mouseenter', () => { img.src = row.dataset.img; gsap.to(fig, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'settle' }); });
        row.addEventListener('mouseleave', () => gsap.to(fig, { autoAlpha: 0, scale: 0.94, duration: 0.35, ease: 'settle' }));
      });
    });
    document.querySelectorAll('[data-swap]').forEach(swap);
    document.querySelectorAll('[data-goo-swap]').forEach(gooSwap);
    // two-colour misregistration: a second ink layer sits off-register and slides into register
    // (on load inside data-hero, otherwise tied to scroll). Colour comes from --ink2 on the element.
    document.querySelectorAll('[data-register]').forEach((el) => {
      const k = parseFloat(el.dataset.register) || 10;
      const ink = document.createElement('span');
      ink.className = 'reg-ink'; ink.setAttribute('aria-hidden', 'true');
      ink.innerHTML = el.innerHTML;
      el.style.position = el.style.position || 'relative';
      el.appendChild(ink);
      if (reduce) return;
      // ends slightly off register (15%), the way a hand-pulled second colour sits
      const from = { x: k, y: -k * 0.7 }, to = { x: k * 0.15, y: -k * 0.1 };
      gsap.set(ink, to);
      if (inHero(el)) intro.fromTo(ink, from, { ...to, duration: 1.6, ease: 'wipe' }, 0.3 + delayOf(el));
      else gsap.fromTo(ink, from, { ...to, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 45%', scrub: 0.6 } });
    });
    // SVG lines drawn by scroll: every path inside gets drawn from start to end while the element crosses the viewport
    document.querySelectorAll('[data-draw]').forEach((el) => {
      const paths = el.querySelectorAll('path');
      paths.forEach((p) => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = reduce ? 0 : L; });
      if (reduce) return;
      gsap.to(paths, { strokeDashoffset: 0, ease: 'none', stagger: 0.15,
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: 0.6 } });
    });
    // image window opens from an inset frame to full bleed while it crosses the viewport (scroll-linked)
    document.querySelectorAll('[data-open]').forEach((el) => {
      if (reduce) return;
      const k = parseFloat(el.dataset.open) || 14;
      gsap.fromTo(el, { clipPath: `inset(${k}% ${k * 1.6}% ${k}% ${k * 1.6}%)` }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 10%', scrub: 0.6 } });
    });
    // horizontal track pinned while the page scrolls (scroll-linked only, stops when scrolling stops)
    document.querySelectorAll('[data-hscroll]').forEach((sec) => {
      const track = sec.querySelector('[data-track]');
      const dist = () => track.scrollWidth - innerWidth;
      gsap.to(track, { x: () => -dist(), ease: 'none',
        scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    });

    // goo: ported from the Ink. site (gooImg). The photo is pushed in by noise and dissolves through film grain, the
    // colours slipping apart along the push, then the canvas is removed. data-goo on a wrapper of one <img> reveals it from
    // the paper colour when it enters; data-goo="-1" pushes the other way. Also used by data-swap for slide changes.
    document.querySelectorAll('[data-goo]').forEach((el) => {
      const img = el.querySelector('img');
      if (!img || reduce) return;
      img.style.opacity = '0';
      const run = () => gooImg(img, null, parseFloat(el.dataset.goo) || 1, () => (img.style.opacity = ''));
      if (inHero(el)) intro.add(run, 0.1 + delayOf(el));
      else ScrollTrigger.create({ trigger: el, start: 'top 78%', once: true, onEnter: () => setTimeout(run, delayOf(el) * 1000) });
    });

    // grow (from the Ink. site): a section pinned while its [data-grow-pic] opens from a small framed picture (its own box
    // in the layout) to the whole screen; the photo inside scales so its framing changes continuously. Scroll-linked.
    document.querySelectorAll('[data-grow]').forEach((sec) => {
      const pic = sec.querySelector('[data-grow-pic]'), img = pic && pic.querySelector('img');
      if (!pic || reduce) return;
      const st = { p: 0 };
      const apply = () => {
        const r0 = pic.getBoundingClientRect(), s = sec.getBoundingClientRect();
        const W = innerWidth, H = innerHeight, e = st.p;
        const t = (r0.top - s.top) * (1 - e), l = r0.left * (1 - e), r = (W - r0.right) * (1 - e), b = (H - (r0.top - s.top) - r0.height) * (1 - e);
        sec.style.setProperty('--gt', t + 'px'); sec.style.setProperty('--gl', l + 'px'); sec.style.setProperty('--gr', r + 'px'); sec.style.setProperty('--gb', b + 'px');
        sec.style.setProperty('--gs', (1.18 - 0.18 * e).toFixed(4)); sec.style.setProperty('--gp', e.toFixed(4));
      };
      gsap.to(st, { p: 1, ease: 'none', onUpdate: apply,
        scrollTrigger: { trigger: sec, start: 'top top', end: '+=' + Math.round(innerHeight * 1.1), pin: true, scrub: 0.8, onRefresh: apply } });
      apply();
    });

    // roller shutter: a slatted cover is nudged up, catches for a beat, then rolls away and the photo settles.
    // Colours from --shutter-a / --shutter-b on the element.
    document.querySelectorAll('[data-shutter]').forEach((el) => {
      if (reduce) return;
      const cover = document.createElement('div');
      cover.className = 'shutter'; cover.setAttribute('aria-hidden', 'true');
      el.style.position = el.style.position || 'relative';
      el.appendChild(cover);
      const img = el.querySelector('img, video');
      const tl = inHero(el) ? intro : gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
      const at = (inHero(el) ? 0.1 : 0) + delayOf(el);
      tl.to(cover, { yPercent: -9, duration: 0.45, ease: 'power2.out' }, at)
        .to(cover, { yPercent: -101, duration: 1.1, ease: 'power3.in' }, at + 0.7)
        .set(cover, { display: 'none' }, at + 1.85);
      if (img) tl.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 2.2, ease: 'settle' }, at + 0.9);
    });

    document.documentElement.classList.add('is-ready');
    if (typeof window.templateIntro === 'function') window.templateIntro(intro, gsap);
    intro.play(0);
    ScrollTrigger.refresh();
  }

  init();
})();
