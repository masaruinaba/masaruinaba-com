/*
  Folio kit: live parts and micro-interactions on top of engine.js. Load after engine.js.
  data-roll                         digits roll when the value changes (Folio.roll(el, text))
  data-clock [data-tz] [data-seconds] [data-format="ja"]      live local time
  data-countdown="ISO" | data-every="sat 06:30" [data-tz]     time left, rolling (d h m)
  data-hours="07:00-18:00" [data-tz] [data-closed="wed,thu"] [data-open-text] [data-closed-text]
  data-tip="text"                   tooltip on hover / focus / tap
  data-magnet                       primary CTA follows the cursor, max 6px (not on touch)
  [data-nav-track] a[data-nav-link] current section highlight with a sliding .nav-pill
  [data-menu-toggle] + #menu[data-menu]   phone menu (focus trap, Esc, scroll lock, aria-expanded)
*/
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = matchMedia('(hover: none)').matches;
  const gsap = window.gsap;

  // ---------- digit roller ----------
  function roll(el, text) {
    text = String(text);
    if (el.dataset.shown === text) return;
    const prev = el.dataset.shown || '';
    el.dataset.shown = text;
    if (reduce || !prev || prev.length !== text.length || !gsap) { el.textContent = text; el.setAttribute('aria-label', text); return; }
    el.setAttribute('aria-label', text);
    el.innerHTML = '';
    [...text].forEach((ch, i) => {
      const old = prev[i];
      const cell = document.createElement('span');
      cell.className = 'roll-cell';
      cell.setAttribute('aria-hidden', 'true');
      if (old === ch) { cell.textContent = ch; el.appendChild(cell); return; }
      const col = document.createElement('span');
      col.className = 'roll-col';
      col.innerHTML = `<span>${old ?? ''}</span><span>${ch}</span>`;
      cell.appendChild(col); el.appendChild(cell);
      gsap.fromTo(col, { yPercent: 0 }, { yPercent: -50, duration: 0.6, ease: 'settle', delay: i * 0.03,
        onComplete: () => { cell.textContent = ch; } });
    });
  }

  const css = document.createElement('style');
  css.textContent = `
  [data-roll],[data-clock],[data-countdown] { display:inline-flex !important; white-space:nowrap; }
  .roll-cell { display:inline-block !important; overflow:hidden; height:1.15em; line-height:1.15em; vertical-align:bottom; }
  .roll-col { display:flex !important; flex-direction:column; }
  .roll-col > span { display:block; height:1.15em; }
  .live-dot { display:inline-block; width:.5em; height:.5em; border-radius:50%; background:var(--live, currentColor); animation: of-breathe 2.4s ease-in-out infinite; }
  @keyframes of-breathe { 0%,100% { opacity:1 } 50% { opacity:.35 } }
  .of-tip { position:fixed; z-index:90; pointer-events:none; padding:6px 10px; border-radius:6px; font-size:12px; line-height:1.35;
    max-width:240px; background:var(--tip-bg, var(--fg)); color:var(--tip-fg, var(--bg)); opacity:0; translate:0 4px;
    transition: opacity .18s var(--soft), translate .18s var(--soft); }
  .of-tip.is-on { opacity:1; translate:0 0; }
  [data-nav-track] { position:relative; }
  .nav-pill { position:absolute; left:0; top:0; pointer-events:none; border-radius:999px; z-index:-1;
    transition: transform .42s var(--ease), width .42s var(--ease), opacity .3s var(--soft); }
  html.menu-open, html.menu-open body { overflow:hidden; }
  @media (prefers-reduced-motion: reduce) { .live-dot { animation:none; } }`;
  document.head.appendChild(css);

  // ---------- time helpers ----------
  const parts = (tz, d = new Date()) => {
    const f = new Intl.DateTimeFormat('en-GB', { timeZone: tz || undefined, weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
    const o = Object.fromEntries(f.formatToParts(d).map((p) => [p.type, p.value]));
    return { wd: o.weekday.toLowerCase().slice(0, 3), h: +o.hour, m: +o.minute, s: +o.second };
  };
  const pad = (n) => String(n).padStart(2, '0');
  const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  function tick() {
    document.querySelectorAll('[data-clock]').forEach((el) => {
      const p = parts(el.dataset.tz);
      let t = `${pad(p.h)}:${pad(p.m)}` + (el.hasAttribute('data-seconds') ? `:${pad(p.s)}` : '');
      if (el.dataset.format === 'ja') t = `${p.h}:${pad(p.m)}`;
      roll(el, t);
    });
    document.querySelectorAll('[data-countdown],[data-every]').forEach((el) => {
      let target;
      if (el.dataset.countdown) target = new Date(el.dataset.countdown).getTime();
      else {
        const [day, hm] = el.dataset.every.split(' '), [H, M] = hm.split(':').map(Number);
        const p = parts(el.dataset.tz), now = Date.now();
        let ahead = (DAYS.indexOf(day) - DAYS.indexOf(p.wd) + 7) % 7;
        let mins = ahead * 1440 + (H * 60 + M) - (p.h * 60 + p.m);
        if (mins <= 0) mins += 7 * 1440;
        target = now + mins * 60000 - p.s * 1000;
      }
      let left = Math.max(0, Math.floor((target - Date.now()) / 60000));
      const d = Math.floor(left / 1440), h = Math.floor((left % 1440) / 60), m = left % 60;
      const ja = el.dataset.format === 'ja';
      roll(el, ja ? (d ? `${d}日${pad(h)}時間${pad(m)}分` : `${pad(h)}時間${pad(m)}分`) : (d ? `${d}d ${pad(h)}h ${pad(m)}m` : `${pad(h)}h ${pad(m)}m`));
    });
    document.querySelectorAll('[data-hours]').forEach((el) => {
      const p = parts(el.dataset.tz);
      const closedDays = (el.dataset.closed || '').toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
      const now = p.h * 60 + p.m;
      const open = !closedDays.includes(p.wd) && el.dataset.hours.split(',').some((r) => {
        const [a, b] = r.trim().split('-').map((x) => { const [hh, mm] = x.split(':').map(Number); return hh * 60 + (mm || 0); });
        return b > a ? now >= a && now < b : now >= a || now < b;
      });
      el.classList.toggle('is-open', open);
      const txt = open ? (el.dataset.openText || 'Open now') : (el.dataset.closedText || 'Closed now');
      if (el.textContent !== txt) {
        if (gsap && !reduce && el.dataset.init) gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.32, ease: 'soft' });
        el.textContent = txt;
      }
      el.dataset.init = '1';
    });
  }
  tick();
  setInterval(tick, 1000);

  // ---------- tooltips ----------
  const tip = document.createElement('div'); tip.className = 'of-tip'; tip.setAttribute('role', 'tooltip');
  document.body.appendChild(tip);
  const showTip = (el) => {
    tip.textContent = el.dataset.tip;
    const r = el.getBoundingClientRect();
    tip.style.left = Math.min(innerWidth - 250, Math.max(8, r.left)) + 'px';
    tip.style.top = (r.top > 60 ? r.top - tip.offsetHeight - 8 : r.bottom + 8) + 'px';
    tip.classList.add('is-on');
  };
  const hideTip = () => tip.classList.remove('is-on');
  document.querySelectorAll('[data-tip]').forEach((el) => {
    if (!el.hasAttribute('tabindex') && !/^(A|BUTTON)$/.test(el.tagName)) el.setAttribute('tabindex', '0');
    el.addEventListener('mouseenter', () => showTip(el));
    el.addEventListener('mouseleave', hideTip);
    el.addEventListener('focus', () => showTip(el));
    el.addEventListener('blur', hideTip);
    el.addEventListener('click', () => { if (touch) { showTip(el); setTimeout(hideTip, 2400); } });
  });
  addEventListener('scroll', hideTip, { passive: true });

  // ---------- magnetic CTA ----------
  if (!touch && !reduce && gsap) document.querySelectorAll('[data-magnet]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' }), yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo(Math.max(-6, Math.min(6, (e.clientX - r.left - r.width / 2) * 0.2)));
      yTo(Math.max(-6, Math.min(6, (e.clientY - r.top - r.height / 2) * 0.3)));
    });
    el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
  });

  // ---------- nav current section ----------
  document.querySelectorAll('[data-nav-track]').forEach((track) => {
    const links = [...track.querySelectorAll('a[data-nav-link]')];
    let pill = track.querySelector('.nav-pill');
    if (!pill) { pill = document.createElement('span'); pill.className = 'nav-pill'; track.prepend(pill); }
    const place = (a) => {
      if (!a) { pill.style.opacity = 0; return; }
      const r = a.getBoundingClientRect(), t = track.getBoundingClientRect();
      pill.style.opacity = 1; pill.style.width = r.width + 'px'; pill.style.height = r.height + 'px';
      pill.style.transform = `translate(${r.left - t.left}px, ${r.top - t.top}px)`;
    };
    let current = null;
    const set = (a) => { if (a === current) return; current = a; links.forEach((l) => l.classList.toggle('is-current', l === a)); place(a); };
    const check = () => {
      let best = null;
      links.forEach((a) => { const s = document.querySelector(a.getAttribute('href')); if (s && s.getBoundingClientRect().top < innerHeight * 0.45) best = a; });
      set(best);
    };
    addEventListener('scroll', check, { passive: true }); addEventListener('resize', () => place(current)); check();
  });

  // ---------- phone menu ----------
  const btn = document.querySelector('[data-menu-toggle]'), menu = document.querySelector('[data-menu]');
  if (btn && menu) {
    const focusables = () => [...menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'), btn];
    const open = (on) => {
      btn.setAttribute('aria-expanded', on); menu.classList.toggle('is-open', on); menu.toggleAttribute('inert', !on);
      document.documentElement.classList.toggle('menu-open', on);
      if (window.__lenis) on ? window.__lenis.stop() : window.__lenis.start();
      if (gsap && !reduce) {
        if (on) { gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.5, ease: 'settle' });
          gsap.from(menu.querySelectorAll('a'), { yPercent: 60, opacity: 0, duration: 0.45, ease: 'settle', stagger: 0.05, delay: 0.12 }); }
      }
      if (on) setTimeout(() => focusables()[0]?.focus(), 60); else btn.focus();
    };
    menu.toggleAttribute('inert', true);
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => open(btn.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => open(false)));
    document.addEventListener('keydown', (e) => {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      if (e.key === 'Escape') open(false);
      if (e.key === 'Tab') {
        const f = focusables(), i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
      }
    });
  }

  // ScrollTrigger: recalc on orientation change
  addEventListener('orientationchange', () => window.ScrollTrigger && setTimeout(() => ScrollTrigger.refresh(), 300));

  window.Folio = { roll, tick };
})();
