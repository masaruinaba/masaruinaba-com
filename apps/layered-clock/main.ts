// ============================================================
// Conceptual Clock Studio - Enhanced Designs & Interaction
// ============================================================

// プレビューモードの検出
const urlParams = new URLSearchParams(window.location.search);
const isPreview = urlParams.get('preview') === 'true';

type SecondsMode = 'smooth' | 'tick' | 'sweep';

interface CityItem {
  label: string;
  tz: string;
}

const CITY_LIST: CityItem[] = [
  { label: 'TOKYO', tz: 'local' },
  { label: 'LONDON', tz: 'Europe/London' },
  { label: 'NEW YORK', tz: 'America/New_York' },
  { label: 'BERLIN', tz: 'Europe/Berlin' },
  { label: 'PARIS', tz: 'Europe/Paris' },
];

interface DesignState {
  id: string;
  name: string;
  showMarkers: boolean;
  markerDensity: 4 | 12 | 60 | 120;
  markerType: 'line' | 'dot' | 'heavy' | 'micro';
  showNumbers: boolean;
  numberStyle: 'full' | 'corners' | 'single-6' | 'precision' | 'none' | 'roman';
  showFaceRing: boolean;
  handStyle: 'minimal' | 'tapered' | 'industrial' | 'heavy' | 'breguet';
  handWidthMultiplier: number;
  faceOpacity: number;
  subDials: boolean;
  structuralRings: number;
  conceptualLabels: boolean;
  crosshair: boolean;
  showDate: boolean;
}

const DESIGNS: DesignState[] = [
  {
    id: 'layered-deep',
    name: 'LAYERED DEEP',
    showMarkers: true,
    markerDensity: 120,
    markerType: 'micro',
    showNumbers: true,
    numberStyle: 'corners',
    showFaceRing: true,
    handStyle: 'minimal',
    handWidthMultiplier: 0.6,
    faceOpacity: 0.12,
    subDials: false,
    structuralRings: 1,
    conceptualLabels: false,
    crosshair: true,
    showDate: false
  }
];

class BraunClock {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width = 0;
  private height = 0;
  private dpr = 1;
  private isLayerMode = false;
  private isDarkMode = false;
  private startTime = Date.now();
  private secondsMode: SecondsMode = 'smooth';

  private designIndex = 0;
  private design: DesignState = DESIGNS[0];
  private timezone: string = 'local';
  private cityButtons: HTMLElement[] = [];
  private cityItemHeight = 30;
  private cityIndex = 0;

  private smoothHour = 0;
  private smoothMinute = 0;
  private smoothSecond = 0;
  private targetSecond = 0;
  private layerFactor = 0;
  // depth state
  private depth = 0.5; // 0..1 固定値
  private layerLabel = 'MID';
  private labelHideTimer: number | null = null;
  private knobRotation = 0;

  // Knob interaction state
  private isRotatingKnob = false;
  private knobStartAngle = 0;
  private knobBaseRotation = 0;
  private isKnobExpanded = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.setupEvents();
    this.updateDesign();
    this.loop();
    
    // プレビューモード: 自動でレイヤーモードを有効化し、ノブを自動回転
    if (isPreview) {
      this.startPreviewAnimation();
    }
  }

  private resize() {
    this.dpr = window.devicePixelRatio || 1;
    const parent = this.canvas.parentElement;
    if (parent) {
      this.width = parent.clientWidth;
      this.height = parent.clientHeight;
    }
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  private setupEvents() {
    window.addEventListener('resize', () => this.resize());
    
    // プレビューモードではキーボードショートカットを無効化
    if (!isPreview) {
      window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'l') this.toggleLayerMode();
        if (e.key.toLowerCase() === 'r') this.randomizeDesign();
        if (e.key.toLowerCase() === 't') this.toggleTheme();
      });
    }

    // プレビューモードではレイヤートグルを無効化
    if (!isPreview) {
      document.getElementById('toggle-layer')?.addEventListener('click', () => this.toggleLayerMode());
    }
    
    const knob = document.getElementById('random-knob');
    const knobContainer = document.getElementById('knob-container');
    
    knob?.addEventListener('mousedown', (e) => {
      this.isKnobExpanded = true;
      knobContainer?.classList.add('knob-expanded');
      this.isRotatingKnob = true;
      knob.classList.add('knob-active');
      const rect = knob.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      this.knobStartAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
      this.knobBaseRotation = this.knobRotation;
      e.preventDefault();
      e.stopPropagation();
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isRotatingKnob || !knob || !this.isKnobExpanded) return;
      const rect = knob.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const currentAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI;
      let delta = currentAngle - this.knobStartAngle;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      this.knobRotation = this.knobBaseRotation + delta;
      this.updateFromKnob();
    });

    window.addEventListener('mouseup', () => {
      if (this.isRotatingKnob) {
        this.isRotatingKnob = false;
        knob?.classList.remove('knob-active');
        this.isKnobExpanded = false;
        knobContainer?.classList.remove('knob-expanded');
        // 停止後もしばらくラベル表示 → フェードアウト
        this.showLayerLabel(true);
      }
    });

    // プレビューモードではテーマトグルを無効化
    if (!isPreview) {
      document.getElementById('theme-toggle')?.addEventListener('click', () => this.toggleTheme());
    }

    // プレビューモードではモードボタンを無効化
    if (!isPreview) {
      const modeBtns = document.querySelectorAll('.text-link[data-mode]');
      modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.target as HTMLButtonElement;
          this.secondsMode = target.dataset.mode as SecondsMode;
          modeBtns.forEach(b => b.classList.remove('active'));
          target.classList.add('active');
        });
      });
    }

    const worldTimeContainer = document.querySelector('.world-time') as HTMLElement | null;
    const worldTimeTrack = document.querySelector('.world-time-track') as HTMLElement | null;

    // Build city list (simple 5-city list)
    if (worldTimeTrack) {
      worldTimeTrack.innerHTML = '';
      CITY_LIST.forEach((city, idx) => {
        const div = document.createElement('div');
        div.className = 'world-time-city';
        if (idx === 0) div.classList.add('active');
        div.dataset.tz = city.tz;
        div.dataset.idx = String(idx);
        div.textContent = city.label;
        worldTimeTrack.appendChild(div);
      });
      this.cityButtons = Array.from(worldTimeTrack.querySelectorAll('.world-time-city')) as HTMLElement[];
      this.cityIndex = 0;
    }

    const setActive = (idx: number, updateTime: boolean) => {
      if (!this.cityButtons.length) return;
      const target = Math.min(Math.max(idx, 0), this.cityButtons.length - 1);
      this.cityIndex = target;
      this.cityButtons.forEach((b, i) => b.classList.toggle('active', i === target));
      if (updateTime) {
        const activeBtn = CITY_LIST[target];
        this.timezone = activeBtn.tz || 'local';
        const leftLabel = document.getElementById('selected-city-left');
        if (leftLabel) leftLabel.textContent = activeBtn.label || '';
      }
    };

    if (worldTimeContainer && this.cityButtons.length) {
      const measureHeight = () => {
        const h = this.cityButtons[0].offsetHeight || 48;
        this.cityItemHeight = h;
      };
      measureHeight();

      // 初期位置
      setActive(this.cityIndex, true);

      // クリックで選択のみ（スクロール選択なし）
      // プレビューモードでは都市選択を無効化
      if (!isPreview) {
        this.cityButtons.forEach((btn) => {
          const idx = Number(btn.dataset.idx || 0);
          btn.addEventListener('click', () => {
            setActive(idx, true);
          });
        });
      }
    }
  }

  private updateFromKnob() {
    const knob = document.getElementById('random-knob');
    if (!knob) return;

    // 見た目：ノブは回す（現状維持）
    knob.style.transform = `rotate(${this.knobRotation}deg)`;

    // レイヤーモードがONでないと動作させない
    if (!this.isLayerMode) return;

    // 角度 -> depth(0..1)
    const rot = ((this.knobRotation % 360) + 360) % 360; // 0..359
    this.depth = rot / 360;

    // 深度名（3層）
    const nextLabel =
      this.depth < 1 / 3 ? 'SURFACE' :
      this.depth < 2 / 3 ? 'MID' :
      'DEEP';

    if (nextLabel !== this.layerLabel) this.layerLabel = nextLabel;

    // ラベル表示（操作中＆停止後1.5sで消える）
    this.showLayerLabel();
  }

  private showLayerLabel(_fromRelease = false) {
    const el = document.getElementById('layer-label');
    if (!el || !this.isLayerMode) return;

    el.textContent = this.layerLabel;
    el.classList.add('is-visible');

    if (this.labelHideTimer) window.clearTimeout(this.labelHideTimer);

    // 操作中は消さない。mouseup後(or毎回更新)は1.5sで消す
    this.labelHideTimer = window.setTimeout(() => {
      el.classList.remove('is-visible');
    }, 1500);
  }

  private toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    const sunIcon = document.querySelector('.sun-icon') as HTMLElement;
    const moonIcon = document.querySelector('.moon-icon') as HTMLElement;
    if (this.isDarkMode) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  private toggleLayerMode() {
    this.isLayerMode = !this.isLayerMode;
    document.body.classList.toggle('layer-mode', this.isLayerMode);
    document.getElementById('toggle-layer')?.classList.toggle('active', this.isLayerMode);
  }

  private randomizeDesign() {
    this.designIndex = (this.designIndex + 1) % DESIGNS.length;
    this.updateDesign();
    this.knobRotation += 60;
  }

  private updateDesign() {
    this.design = DESIGNS[this.designIndex];
  }

  // Drum-roll selection is handled in setupEvents via scroll; no click toggle

  private updateTime() {
    const now = new Date();
    let time = now;
    
    if (this.timezone !== 'local') {
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: this.timezone,
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false
      }).formatToParts(now);
      const p: any = {};
      parts.forEach(({type, value}) => p[type] = value);
      time = new Date(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
    }

    const ms = now.getMilliseconds();
    const s = time.getSeconds();
    const m = time.getMinutes();
    const h = time.getHours();

    const targetH = (h % 12) + m / 60 + s / 3600;
    const targetM = m + s / 60;
    
    this.smoothHour += (targetH - this.smoothHour) * 0.1;
    this.smoothMinute += (targetM - this.smoothMinute) * 0.1;

    switch (this.secondsMode) {
      case 'smooth': this.targetSecond = s + ms / 1000; break;
      case 'tick': this.targetSecond = s; break;
      case 'sweep': this.targetSecond = s + Math.floor(ms / 100) / 10; break;
    }

    if (Math.abs(this.targetSecond - this.smoothSecond) > 30) this.smoothSecond = this.targetSecond;
    this.smoothSecond += (this.targetSecond - this.smoothSecond) * 0.3;

    // layer-mode ON: depth(0..1) を深度として使う / OFF: 0に戻す
    const targetFactor = this.isLayerMode ? this.depth : 0;
    this.layerFactor += (targetFactor - this.layerFactor) * 0.12;
  }

  private loop() {
    this.updateTime();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }
  
  private startPreviewAnimation() {
    // プレビューモードではレイヤーモードを有効化せず、通常の時計表示のみ
    // 何も特別な処理は不要（時計は自動的に動作している）
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const cx = this.width / 2;
    const cy = this.height / 2;
    const radius = Math.min(this.width, this.height) * 0.32;

    this.ctx.save();
    this.ctx.translate(cx, cy);

    if (this.layerFactor > 0.01) {
      this.ctx.transform(1, -0.2 * this.layerFactor, 0.4 * this.layerFactor, 0.6 + 0.4 * (1 - this.layerFactor), 0, 0);
    }

    const colorMain = this.isLayerMode ? '#000' : (this.isDarkMode ? '#ffffff' : '#000000');

    // Layer 1: Face & Structural Rings (deepest layer)
    this.ctx.save();
    this.ctx.translate(0, 200 * this.layerFactor);
    this.drawFace(radius, colorMain);
    this.ctx.restore();

    // Layer 2: Markers, Labels, Crosshair, Date
    this.ctx.save();
    this.ctx.translate(0, 80 * this.layerFactor);
    this.drawDetails(radius, colorMain);
    if (this.design.showDate) this.drawDate(radius, colorMain);
    this.ctx.restore();

    // Layer 3: Numbers & Sub-dials
    this.ctx.save();
    this.ctx.translate(0, -80 * this.layerFactor);
    this.drawNumbers(radius, colorMain);
    if (this.design.subDials) this.drawSubDials(radius, colorMain);
    this.ctx.restore();

    // Layer 4: Hands (foreground layer)
    this.ctx.save();
    this.ctx.translate(0, -250 * this.layerFactor);
    this.drawHands(radius, colorMain);
    this.ctx.restore();

    this.ctx.restore();
  }

  private drawFace(radius: number, color: string) {
    if (this.design.structuralRings > 0) {
      this.ctx.strokeStyle = this.isLayerMode ? 'rgba(0,0,0,0.2)' : (this.isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)');
      this.ctx.lineWidth = 1;
      // 外側ほど間隔を大きく、中心に近づくにつれて細かくなる非線形配置
      const total = this.design.structuralRings;
      const ratio = 0.82;
      for (let i = 0; i < total; i++) {
        const r = radius * Math.pow(ratio, i);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, r, 0, Math.PI * 2);
        this.ctx.stroke();
      }
    } else {
      const alpha = this.design.faceOpacity;
      if (this.isLayerMode) {
        this.ctx.fillStyle = `rgba(0,0,0,${alpha * 0.05})`;
      } else if (this.isDarkMode) {
        this.ctx.fillStyle = `rgba(255,255,255,${Math.max(0.08, alpha * 0.12)})`; // Reduced opacity for dark mode
      } else {
        this.ctx.fillStyle = `rgba(247,247,247,${alpha})`;
      }
      this.ctx.beginPath();
      this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  private drawDate(radius: number, color: string) {
    const now = new Date();
    const day = now.getDate().toString();
    this.ctx.save();
    this.ctx.font = `bold ${radius * 0.05}px "Inter", sans-serif`;
    this.ctx.fillStyle = color;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    // Date window at 3 o'clock
    const x = radius * 0.55;
    const y = 0;
    this.ctx.strokeStyle = color;
    this.ctx.globalAlpha = 0.2;
    this.ctx.strokeRect(x - radius * 0.05, y - radius * 0.04, radius * 0.1, radius * 0.08);
    this.ctx.globalAlpha = 1;
    this.ctx.fillText(day, x, y);
    this.ctx.restore();
  }

  private drawDetails(radius: number, color: string) {
    if (this.design.crosshair) {
      this.ctx.strokeStyle = this.isLayerMode ? 'rgba(0,0,0,0.06)' : (this.isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)');
      this.ctx.lineWidth = 0.6;
      this.ctx.beginPath();
      this.ctx.moveTo(-radius, 0); this.ctx.lineTo(radius, 0);
      this.ctx.moveTo(0, -radius); this.ctx.lineTo(0, radius);
      this.ctx.stroke();
    }

    if (this.design.conceptualLabels) {
      this.ctx.fillStyle = color;
      this.ctx.font = `500 ${radius * 0.06}px "Inter", sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      const labels = [
        { text: 'PAST', y: -radius * 0.4 },
        { text: 'PRESENT', y: 0 },
        { text: 'FUTURE', y: radius * 0.4 }
      ];
      labels.forEach(l => this.ctx.fillText(l.text, 0, l.y));
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = 2;
      [0.2, 0.5, 0.8].forEach(f => {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius * f, Math.PI * 0.2, Math.PI * 0.8);
        this.ctx.stroke();
      });
    }

    if (this.design.showMarkers) {
      this.ctx.save();
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      this.ctx.globalAlpha = this.isLayerMode ? 0.4 : (this.isDarkMode ? 0.85 : 0.7);
      const count = this.design.markerDensity;
      for (let i = 0; i < count; i++) {
        const isMajor = i % (count/12) === 0;
        if (this.design.markerType === 'dot') {
          if (isMajor) {
            const dotSize = radius * (this.isDarkMode ? 0.012 : 0.01);
            this.ctx.beginPath();
            this.ctx.arc(0, -radius * 0.9, dotSize, 0, Math.PI * 2);
            this.ctx.fill();
          }
        } else if (this.design.markerType === 'micro') {
          const isQuart = i % (count/4) === 0;
          const length = isQuart ? radius * 0.07 : (isMajor ? radius * 0.045 : radius * 0.025);
          this.ctx.lineWidth = isMajor ? 1.2 : (isQuart ? 0.5 : 0.35);
          this.ctx.beginPath();
          this.ctx.moveTo(0, -radius * 0.98);
          this.ctx.lineTo(0, -radius * 0.98 + length);
          this.ctx.stroke();
        } else {
          const length = isMajor ? radius * 0.09 : radius * 0.035;
          this.ctx.lineWidth = isMajor ? (this.design.markerType === 'heavy' ? 4.5 : 1.8) : 0.6;
          this.ctx.beginPath();
          this.ctx.moveTo(0, -radius * 0.95);
          this.ctx.lineTo(0, -radius * 0.95 + length);
          this.ctx.stroke();
        }
        this.ctx.rotate((Math.PI * 2) / count);
      }
      this.ctx.restore();
    }
  }

  private drawNumbers(radius: number, color: string) {
    this.ctx.save();
    this.ctx.fillStyle = color;
    this.ctx.globalAlpha = this.isDarkMode ? 0.95 : 1;
    const style = this.design.numberStyle;
    if (style === 'precision') {
      this.ctx.font = `300 ${radius * 0.052}px "Inter", sans-serif`;
      this.ctx.globalAlpha = this.isDarkMode ? 0.7 : 0.6;
      for (let i = 1; i <= 12; i++) {
        const angle = (i * Math.PI) / 6;
        const val = (i * 5).toString().padStart(2, '0');
        this.ctx.fillText(val, Math.sin(angle) * radius * 1.05, -Math.cos(angle) * radius * 1.05);
      }
      this.ctx.globalAlpha = this.isDarkMode ? 0.95 : 1;
      this.ctx.font = `400 ${radius * 0.105}px "Inter", sans-serif`;
      for (let i = 1; i <= 12; i++) {
        const angle = (i * Math.PI) / 6;
        this.ctx.fillText(i.toString(), Math.sin(angle) * radius * 0.7, -Math.cos(angle) * radius * 0.7);
      }
    } else if (style === 'full' || style === 'corners') {
      const fontSize = style === 'corners' ? radius * 0.06 : radius * 0.125;
      this.ctx.font = `300 ${fontSize}px "Inter", sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      const nums = style === 'full' ? [1,2,3,4,5,6,7,8,9,10,11,12] : [12,3,6,9];
      nums.forEach(i => {
        const angle = (i * Math.PI) / 6;
        this.ctx.fillText(i.toString(), Math.sin(angle) * radius * 0.85, -Math.cos(angle) * radius * 0.85);
      });
    } else if (style === 'single-6') {
      this.ctx.font = `500 ${radius * 0.26}px "Inter", sans-serif`;
      this.ctx.fillText('6', 0, radius * 0.4);
    }
    this.ctx.restore();
  }

  private drawSubDials(radius: number, color: string) {
    this.ctx.strokeStyle = color;
    this.ctx.globalAlpha = 0.3;
    this.ctx.lineWidth = 1;
    [radius * 0.45, -radius * 0.45].forEach(y => {
      this.ctx.beginPath();
      this.ctx.arc(0, y, radius * 0.25, 0, Math.PI * 2);
      this.ctx.stroke();
      for (let i = 0; i < 24; i++) {
        this.ctx.save();
        this.ctx.translate(0, y);
        this.ctx.rotate(i * Math.PI / 12);
        this.ctx.beginPath();
        this.ctx.moveTo(0, -radius * 0.25);
        this.ctx.lineTo(0, -radius * 0.2);
        this.ctx.stroke();
        this.ctx.restore();
      }
    });
  }

  private drawHands(radius: number, color: string) {
    this.ctx.save();
    const mult = this.design.handWidthMultiplier;
    const style = this.design.handStyle;
    this.ctx.globalAlpha = this.isDarkMode ? 0.95 : 1;
    const drawHand = (angle: number, length: number, width: number, c: string) => {
      this.ctx.save();
      this.ctx.rotate(angle);
      this.ctx.strokeStyle = c;
      this.ctx.lineWidth = width * mult;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0, -length);
      this.ctx.stroke();
      if (style === 'tapered') {
        this.ctx.lineWidth = width * 2.2 * mult;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, -length * 0.22);
        this.ctx.stroke();
      }
      this.ctx.restore();
    };
    // より繊細な手の幅を採用
    drawHand(this.smoothHour * Math.PI / 6, radius * 0.46, radius * 0.03, color);
    drawHand(this.smoothMinute * Math.PI / 30, radius * 0.76, radius * 0.015, color);
    const secColor = this.isLayerMode ? '#000' : (this.isDarkMode ? '#ff4444' : '#ff0000');
    this.ctx.globalAlpha = this.isDarkMode ? 0.9 : 1;
    drawHand(this.smoothSecond * Math.PI / 30, radius * 0.86, radius * 0.008, secColor);
    this.ctx.globalAlpha = this.isDarkMode ? 0.95 : 1;
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, radius * 0.022 * mult, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
if (canvas) new BraunClock(canvas);
