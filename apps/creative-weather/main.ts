// ============================================================
// Creative Weather - Mood-based Bitmap Visualization
// ============================================================

interface City {
  name: string;
  lat: number;
  lon: number;
}

// 200都市リスト（国名なし）
const CITIES: City[] = [
  { name: 'Tokyo', lat: 35.68, lon: 139.69 }, { name: 'Delhi', lat: 28.61, lon: 77.21 }, { name: 'Shanghai', lat: 31.23, lon: 121.47 },
  { name: 'São Paulo', lat: -23.55, lon: -46.63 }, { name: 'Mexico City', lat: 19.43, lon: -99.13 }, { name: 'Cairo', lat: 30.04, lon: 31.24 },
  { name: 'Mumbai', lat: 19.08, lon: 72.88 }, { name: 'Beijing', lat: 39.90, lon: 116.41 }, { name: 'Dhaka', lat: 23.81, lon: 90.41 },
  { name: 'Osaka', lat: 34.69, lon: 135.50 }, { name: 'New York', lat: 40.71, lon: -74.01 }, { name: 'Karachi', lat: 24.86, lon: 67.01 },
  { name: 'Buenos Aires', lat: -34.60, lon: -58.38 }, { name: 'Chongqing', lat: 29.43, lon: 106.91 }, { name: 'Istanbul', lat: 41.01, lon: 28.98 },
  { name: 'Kolkata', lat: 22.57, lon: 88.36 }, { name: 'Manila', lat: 14.60, lon: 120.98 }, { name: 'Lagos', lat: 6.52, lon: 3.38 },
  { name: 'Rio de Janeiro', lat: -22.91, lon: -43.17 }, { name: 'Tianjin', lat: 39.34, lon: 117.36 }, { name: 'Kinshasa', lat: -4.44, lon: 15.27 },
  { name: 'Guangzhou', lat: 23.13, lon: 113.26 }, { name: 'Los Angeles', lat: 34.05, lon: -118.24 }, { name: 'Moscow', lat: 55.76, lon: 37.62 },
  { name: 'Shenzhen', lat: 22.54, lon: 114.06 }, { name: 'Lahore', lat: 31.55, lon: 74.34 }, { name: 'Bangalore', lat: 12.97, lon: 77.59 },
  { name: 'Paris', lat: 48.86, lon: 2.35 }, { name: 'Bogotá', lat: 4.71, lon: -74.07 }, { name: 'Jakarta', lat: -6.21, lon: 106.85 },
  { name: 'Chennai', lat: 13.08, lon: 80.27 }, { name: 'Lima', lat: -12.05, lon: -77.04 }, { name: 'Bangkok', lat: 13.76, lon: 100.50 },
  { name: 'Seoul', lat: 37.57, lon: 126.98 }, { name: 'Nagoya', lat: 35.18, lon: 136.91 }, { name: 'Hyderabad', lat: 17.39, lon: 78.49 },
  { name: 'London', lat: 51.51, lon: -0.13 }, { name: 'Tehran', lat: 35.69, lon: 51.42 }, { name: 'Chicago', lat: 41.88, lon: -87.63 },
  { name: 'Chengdu', lat: 30.57, lon: 104.07 }, { name: 'Nanjing', lat: 32.06, lon: 118.80 }, { name: 'Wuhan', lat: 30.59, lon: 114.31 },
  { name: 'Ho Chi Minh', lat: 10.82, lon: 106.63 }, { name: 'Luanda', lat: -8.84, lon: 13.23 }, { name: 'Ahmedabad', lat: 23.02, lon: 72.57 },
  { name: 'Kuala Lumpur', lat: 3.14, lon: 101.69 }, { name: 'Xi\'an', lat: 34.27, lon: 108.95 }, { name: 'Hong Kong', lat: 22.40, lon: 114.11 },
  { name: 'Dongguan', lat: 23.05, lon: 113.74 }, { name: 'Hangzhou', lat: 30.27, lon: 120.15 }, { name: 'Foshan', lat: 23.02, lon: 113.12 },
  { name: 'Shenyang', lat: 41.81, lon: 123.43 }, { name: 'Riyadh', lat: 24.69, lon: 46.72 }, { name: 'Baghdad', lat: 33.31, lon: 44.37 },
  { name: 'Santiago', lat: -33.45, lon: -70.67 }, { name: 'Surat', lat: 21.17, lon: 72.83 }, { name: 'Madrid', lat: 40.42, lon: -3.70 },
  { name: 'Suzhou', lat: 31.30, lon: 120.62 }, { name: 'Pune', lat: 18.52, lon: 73.86 }, { name: 'Harbin', lat: 45.80, lon: 126.53 },
  { name: 'Houston', lat: 29.76, lon: -95.37 }, { name: 'Dallas', lat: 32.78, lon: -96.80 }, { name: 'Toronto', lat: 43.65, lon: -79.38 },
  { name: 'Dar es Salaam', lat: -6.79, lon: 39.21 }, { name: 'Miami', lat: 25.76, lon: -80.19 }, { name: 'Belo Horizonte', lat: -19.92, lon: -43.94 },
  { name: 'Singapore', lat: 1.35, lon: 103.82 }, { name: 'Philadelphia', lat: 39.95, lon: -75.17 }, { name: 'Atlanta', lat: 33.75, lon: -84.39 },
  { name: 'Fukuoka', lat: 33.59, lon: 130.40 }, { name: 'Khartoum', lat: 15.55, lon: 32.53 }, { name: 'Barcelona', lat: 41.39, lon: 2.17 },
  { name: 'Johannesburg', lat: -26.20, lon: 28.04 }, { name: 'Saint Petersburg', lat: 59.93, lon: 30.34 }, { name: 'Qingdao', lat: 36.07, lon: 120.38 },
  { name: 'Dalian', lat: 38.91, lon: 121.60 }, { name: 'Washington', lat: 38.91, lon: -77.04 }, { name: 'Yangon', lat: 16.87, lon: 96.20 },
  { name: 'Alexandria', lat: 31.20, lon: 29.92 }, { name: 'Jinan', lat: 36.65, lon: 116.98 }, { name: 'Guadalajara', lat: 20.67, lon: -103.35 },
  { name: 'Boston', lat: 42.36, lon: -71.06 }, { name: 'Phoenix', lat: 33.45, lon: -112.07 }, { name: 'Sydney', lat: -33.87, lon: 151.21 },
  { name: 'Melbourne', lat: -37.81, lon: 144.96 }, { name: 'Dubai', lat: 25.20, lon: 55.27 }, { name: 'Abu Dhabi', lat: 24.47, lon: 54.37 },
  { name: 'Berlin', lat: 52.52, lon: 13.41 }, { name: 'Rome', lat: 41.90, lon: 12.50 }, { name: 'Milan', lat: 45.46, lon: 9.19 },
  { name: 'Munich', lat: 48.14, lon: 11.58 }, { name: 'Vienna', lat: 48.21, lon: 16.37 }, { name: 'Amsterdam', lat: 52.37, lon: 4.90 },
  { name: 'Brussels', lat: 50.85, lon: 4.35 }, { name: 'Warsaw', lat: 52.23, lon: 21.01 }, { name: 'Prague', lat: 50.08, lon: 14.44 },
  { name: 'Budapest', lat: 47.50, lon: 19.04 }, { name: 'Copenhagen', lat: 55.68, lon: 12.57 }, { name: 'Stockholm', lat: 59.33, lon: 18.07 },
  { name: 'Oslo', lat: 59.91, lon: 10.75 }, { name: 'Helsinki', lat: 60.17, lon: 24.94 }, { name: 'Zurich', lat: 47.37, lon: 8.54 },
  { name: 'Dublin', lat: 53.35, lon: -6.26 }, { name: 'Lisbon', lat: 38.72, lon: -9.14 }, { name: 'Athens', lat: 37.98, lon: 23.73 },
  { name: 'Cape Town', lat: -33.93, lon: 18.42 }, { name: 'Nairobi', lat: -1.29, lon: 36.82 }, { name: 'Casablanca', lat: 33.57, lon: -7.59 },
  { name: 'Addis Ababa', lat: 9.03, lon: 38.74 }, { name: 'Auckland', lat: -36.85, lon: 174.76 }, { name: 'Vancouver', lat: 49.28, lon: -123.12 },
  { name: 'Montreal', lat: 45.50, lon: -73.57 }, { name: 'Seattle', lat: 47.61, lon: -122.33 }, { name: 'San Francisco', lat: 37.77, lon: -122.42 },
  { name: 'Denver', lat: 39.74, lon: -104.99 }, { name: 'Minneapolis', lat: 44.98, lon: -93.27 }, { name: 'Detroit', lat: 42.33, lon: -83.05 },
  { name: 'Portland', lat: 45.52, lon: -122.68 }, { name: 'Taipei', lat: 25.03, lon: 121.57 }, { name: 'Kyoto', lat: 35.01, lon: 135.77 },
  { name: 'Sapporo', lat: 43.06, lon: 141.35 }, { name: 'Seattle', lat: 47.61, lon: -122.33 }, { name: 'Portland', lat: 45.52, lon: -122.68 },
  { name: 'Vancouver', lat: 49.28, lon: -123.12 }, { name: 'San Diego', lat: 32.72, lon: -117.16 }, { name: 'Austin', lat: 30.27, lon: -97.74 },
  { name: 'Helsinki', lat: 60.17, lon: 24.94 }, { name: 'Oslo', lat: 59.91, lon: 10.75 }, { name: 'Stockholm', lat: 59.33, lon: 18.07 },
  { name: 'Copenhagen', lat: 55.68, lon: 12.57 }, { name: 'Reykjavik', lat: 64.13, lon: -21.94 }, { name: 'Anchorage', lat: 61.22, lon: -149.90 },
  { name: 'Honolulu', lat: 21.31, lon: -157.86 }, { name: 'Nassau', lat: 25.05, lon: -77.34 }, { name: 'Havana', lat: 23.11, lon: -82.37 },
  { name: 'Kingston', lat: 17.97, lon: -76.79 }, { name: 'San Juan', lat: 18.47, lon: -66.11 }, { name: 'Port of Spain', lat: 10.67, lon: -61.52 },
  { name: 'Curacao', lat: 12.12, lon: -68.93 }, { name: 'Georgetown', lat: 6.80, lon: -58.16 }, { name: 'Paramaribo', lat: 5.85, lon: -55.20 },
  { name: 'Cayenne', lat: 4.92, lon: -52.31 }, { name: 'Belem', lat: -1.46, lon: -48.49 }, { name: 'Manaus', lat: -3.12, lon: -60.02 },
  { name: 'Recife', lat: -8.05, lon: -34.88 }, { name: 'Salvador', lat: -12.97, lon: -38.50 }, { name: 'Brasilia', lat: -15.79, lon: -47.88 },
  { name: 'Curitiba', lat: -25.43, lon: -49.27 }, { name: 'Porto Alegre', lat: -30.03, lon: -51.23 }, { name: 'Montevideo', lat: -34.90, lon: -56.16 },
  { name: 'Asuncion', lat: -25.26, lon: -57.58 }, { name: 'La Paz', lat: -16.49, lon: -68.12 }, { name: 'Quito', lat: -0.18, lon: -78.47 },
  { name: 'Medellin', lat: 6.24, lon: -75.59 }, { name: 'Panama City', lat: 8.98, lon: -79.52 }, { name: 'San Jose', lat: 9.93, lon: -84.08 },
  { name: 'Managua', lat: 12.11, lon: -86.24 }, { name: 'Tegucigalpa', lat: 14.07, lon: -87.19 }, { name: 'San Salvador', lat: 13.69, lon: -89.19 },
  { name: 'Guatemala City', lat: 14.63, lon: -90.51 }, { name: 'Belize City', lat: 17.50, lon: -88.20 }, { name: 'Cancun', lat: 21.16, lon: -86.85 },
  { name: 'Monterrey', lat: 25.68, lon: -100.31 }, { name: 'Tijuana', lat: 32.51, lon: -117.04 }, { name: 'Phoenix', lat: 33.45, lon: -112.07 },
  { name: 'Las Vegas', lat: 36.17, lon: -115.14 }, { name: 'Salt Lake City', lat: 40.76, lon: -111.89 }, { name: 'Boise', lat: 43.61, lon: -116.20 },
  { name: 'Cheyenne', lat: 41.14, lon: -104.82 }, { name: 'Omaha', lat: 41.25, lon: -95.93 }, { name: 'Wichita', lat: 37.69, lon: -97.34 },
  { name: 'Oklahoma City', lat: 35.47, lon: -97.51 }, { name: 'Little Rock', lat: 34.75, lon: -92.29 }, { name: 'Jackson', lat: 32.30, lon: -90.18 },
  { name: 'Birmingham', lat: 33.52, lon: -86.81 }, { name: 'Nashville', lat: 36.16, lon: -86.78 }, { name: 'Louisville', lat: 38.25, lon: -85.76 },
  { name: 'Columbus', lat: 39.96, lon: -82.99 }, { name: 'Indianapolis', lat: 39.77, lon: -86.16 }, { name: 'Des Moines', lat: 41.59, lon: -93.60 },
  { name: 'Minneapolis', lat: 44.98, lon: -93.27 }, { name: 'Milwaukee', lat: 43.04, lon: -87.91 }, { name: 'Detroit', lat: 42.33, lon: -83.05 },
  { name: 'Cleveland', lat: 41.50, lon: -81.69 }, { name: 'Pittsburgh', lat: 40.44, lon: -80.00 }, { name: 'Buffalo', lat: 42.89, lon: -78.88 },
];

// データ生成 (Seed-based)
function generateData(city: City): { focus: number; clarity: number; momentum: number } {
  const seed = Math.abs(city.lat * 1000 + city.lon * 100);
  const rand = (offset: number) => {
    const x = Math.sin(seed + offset) * 10000;
    return x - Math.floor(x);
  };
  return {
    focus: Math.round(15 + rand(1) * 75), // 15-90
    clarity: Math.round(10 + rand(2) * 80), // 10-90
    momentum: Math.round(20 + rand(3) * 70), // 20-90
  };
}

// HSL to RGB
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100; l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

// ============================================================
// Bitmap Renderer
// ============================================================

class BitmapRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private time: number = 0;
  private isHovered: boolean = false;
  
  private city: City;
  private data: { focus: number; clarity: number; momentum: number };
  private targetData: { focus: number; clarity: number; momentum: number };
  
  constructor(canvas: HTMLCanvasElement, size: number) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false })!;
    this.width = size;
    this.height = size;
    this.city = CITIES[0];
    this.data = generateData(this.city);
    this.targetData = { ...this.data };
    this.resize();
  }
  
  private resize() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  }
  
  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.resize();
  }
  
  setHover(hovered: boolean) {
    this.isHovered = hovered;
  }

  setCity(city: City) {
    this.city = city;
    this.targetData = generateData(city);
  }
  
  getCity(): City {
    return this.city;
  }
  
  getData() {
    return { 
      focus: Math.round(this.data.focus), 
      clarity: Math.round(this.data.clarity), 
      momentum: Math.round(this.data.momentum) 
    };
  }
  
  update(deltaTime: number) {
    // Momentum -> 速度への変換
    const speedScale = 0.00005 + (this.data.momentum / 100) * 0.0002;
    this.time += deltaTime * speedScale;
    
    const lerp = 0.05;
    this.data.focus += (this.targetData.focus - this.data.focus) * lerp;
    this.data.clarity += (this.targetData.clarity - this.data.clarity) * lerp;
    this.data.momentum += (this.targetData.momentum - this.data.momentum) * lerp;
  }
  
  render(bgColor: string) {
    const { focus, clarity, momentum } = this.data;
    
    this.ctx.fillStyle = bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Focus -> 密度の変換 (ホバーでさらに鋭く)
    const basePixelSize = 12 - (focus / 100) * 8;
    const pixelSize = this.isHovered ? Math.max(2, basePixelSize * 0.7) : basePixelSize;
    
    const cols = Math.ceil(this.width / pixelSize);
    const rows = Math.ceil(this.height / pixelSize);
    
    // Latitude -> 色相の変換
    const baseHue = ((this.city.lat + 90) / 180) * 360;
    // Clarity -> 階調の変換
    const colorSteps = Math.max(3, Math.round((clarity / 100) * 12));
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * pixelSize;
        const y = row * pixelSize;
        
        const nx = col / cols;
        const ny = row / rows;
        const verticalPos = 1 - ny;
        
        // Momentum -> 波形の変換
        const waveFreq = 2 + (momentum / 100) * 6;
        const waveAmp = (momentum / 100) * 0.4;
        const wave = Math.sin(nx * waveFreq + this.time + verticalPos * 2) * waveAmp;
        let gradPos = verticalPos + wave;
        
        // Bayer 4x4 dithering (テクスチャ感)
        const bayerMatrix = [
          [0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]
        ];
        const bayerValue = bayerMatrix[row % 4][col % 4] / 16;
        
        // Clarity -> コントラスト/エッジ
        const ditherStrength = 0.15 - (clarity / 100) * 0.1;
        const quantized = Math.floor((gradPos + bayerValue * ditherStrength) * colorSteps) / colorSteps;
        
        const hue = (baseHue + quantized * 40) % 360;
        // Focus -> 彩度の変換 (彩度が高い=意識が外、低い=内)
        const saturation = 20 + focus * 0.5;
        // 明暗レンジの決定
        const brightnessRange = 5 + (clarity / 100) * 40;
        const lightness = 4 + quantized * brightnessRange;
        
        const [r, g, b] = hslToRgb(hue, saturation, clamp(lightness, 2, 60));
        
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        // 正方形ドット（隙間なしでグリッドを強調）
        this.ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }
  }
}

// ============================================================
// App Controller
// ============================================================

class App {
  private cardRenderer: BitmapRenderer;
  private bgRenderer: BitmapRenderer;
  private surfaceEl: HTMLElement;
  private cardEl: HTMLElement;
  private labelEl: HTMLElement;
  private focusEl: HTMLElement;
  private clarityEl: HTMLElement;
  private momentumEl: HTMLElement;
  private cityListEl: HTMLElement;
  private activeButton: HTMLButtonElement | null = null;
  
  constructor() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const bgCanvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    
    this.cardRenderer = new BitmapRenderer(canvas, 340);
    this.bgRenderer = new BitmapRenderer(bgCanvas, window.innerWidth);
    this.bgRenderer.setSize(window.innerWidth, window.innerHeight);
    
    this.surfaceEl = document.getElementById('surface')!;
    this.cardEl = document.getElementById('card')!;
    this.labelEl = document.getElementById('card-label')!;
    this.focusEl = document.getElementById('focus-value')!;
    this.clarityEl = document.getElementById('clarity-value')!;
    this.momentumEl = document.getElementById('momentum-value')!;
    this.cityListEl = document.getElementById('city-list')!;
    
    this.buildCityList();
    this.selectCity(CITIES[0]);
    this.setupInteractions();
    this.setupResize();
    this.startLoop();
  }
  
  private setupInteractions() {
    // ホバー時の状態深化
    this.cardEl.addEventListener('mouseenter', () => {
      this.surfaceEl.classList.add('expanded');
      this.cardRenderer.setHover(true);
      this.bgRenderer.setHover(true);
    });
    
    this.cardEl.addEventListener('mouseleave', () => {
      this.surfaceEl.classList.remove('expanded');
      this.cardRenderer.setHover(false);
      this.bgRenderer.setHover(false);
    });

    // カードクリックでランダム遷移
    this.cardEl.addEventListener('click', () => {
      this.selectRandomCity();
    });
  }
  
  private selectRandomCity() {
    const currentCity = this.cardRenderer.getCity();
    const availableCities = CITIES.filter(city => city.name !== currentCity.name);
    const randomCity = availableCities[Math.floor(Math.random() * availableCities.length)];
    
    const buttons = Array.from(this.cityListEl.querySelectorAll('.city-name')) as HTMLButtonElement[];
    const targetButton = buttons.find(btn => btn.textContent === randomCity.name);
    
    if (targetButton) {
      if (this.activeButton) this.activeButton.classList.remove('active');
      targetButton.classList.add('active');
      this.activeButton = targetButton;
    }
    this.selectCity(randomCity);
  }

  private setupResize() {
    window.addEventListener('resize', () => {
      this.bgRenderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
  
  private buildCityList() {
    CITIES.forEach((city, index) => {
      const btn = document.createElement('button');
      btn.className = 'city-name' + (index === 0 ? ' active' : '');
      btn.textContent = city.name;
      btn.addEventListener('click', () => {
        if (this.activeButton) this.activeButton.classList.remove('active');
        btn.classList.add('active');
        this.activeButton = btn;
        this.selectCity(city);
      });
      this.cityListEl.appendChild(btn);
      if (index === 0) this.activeButton = btn;
    });
  }
  
  private selectCity(city: City) {
    this.cardRenderer.setCity(city);
    this.bgRenderer.setCity(city);
    this.labelEl.textContent = city.name;
  }
  
  private updateUI() {
    const data = this.cardRenderer.getData();
    this.focusEl.textContent = data.focus.toString();
    this.clarityEl.textContent = data.clarity.toString();
    this.momentumEl.textContent = data.momentum.toString();
  }
  
  private startLoop() {
    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = lastTime ? currentTime - lastTime : 16;
      lastTime = currentTime;
      
      this.cardRenderer.update(deltaTime);
      this.cardRenderer.render('#0f0f0f');
      this.bgRenderer.update(deltaTime);
      this.bgRenderer.render('#1a1a1a');
      
      this.updateUI();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}

// Initialize
new App();
