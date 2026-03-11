/**
 * Studio Fonts — Typography Explorer
 * Interactive font browsing experience
 */

// ===================================
// Font Data
// ===================================
const FONTS = [
  // Sans-Serif
  { name: 'Inter', family: "'Inter', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Inter' },
  { name: 'DM Sans', family: "'DM Sans', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/DM+Sans' },
  { name: 'Roboto', family: "'Roboto', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [100,300,400,500,700,900], googleUrl: 'https://fonts.google.com/specimen/Roboto' },
  { name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Montserrat' },
  { name: 'Poppins', family: "'Poppins', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Poppins' },
  { name: 'Oswald', family: "'Oswald', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [200,300,400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/Oswald' },
  { name: 'Lato', family: "'Lato', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [100,300,400,700,900], googleUrl: 'https://fonts.google.com/specimen/Lato' },
  { name: 'Open Sans', family: "'Open Sans', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [300,400,500,600,700,800], googleUrl: 'https://fonts.google.com/specimen/Open+Sans' },
  { name: 'Raleway', family: "'Raleway', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Raleway' },
  { name: 'Source Sans 3', family: "'Source Sans 3', sans-serif", category: 'sans-serif', language: 'latin', vendor: 'Google Fonts', weights: [200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Source+Sans+3' },
  
  // Serif
  { name: 'Playfair Display', family: "'Playfair Display', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Playfair+Display' },
  { name: 'Merriweather', family: "'Merriweather', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [300,400,700,900], googleUrl: 'https://fonts.google.com/specimen/Merriweather' },
  { name: 'Lora', family: "'Lora', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/Lora' },
  { name: 'Crimson Text', family: "'Crimson Text', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [400,600,700], googleUrl: 'https://fonts.google.com/specimen/Crimson+Text' },
  { name: 'Libre Baskerville', family: "'Libre Baskerville', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [400,700], googleUrl: 'https://fonts.google.com/specimen/Libre+Baskerville' },
  { name: 'EB Garamond', family: "'EB Garamond', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [400,500,600,700,800], googleUrl: 'https://fonts.google.com/specimen/EB+Garamond' },
  { name: 'Cormorant Garamond', family: "'Cormorant Garamond', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [300,400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/Cormorant+Garamond' },
  { name: 'Source Serif 4', family: "'Source Serif 4', serif", category: 'serif', language: 'latin', vendor: 'Google Fonts', weights: [200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Source+Serif+4' },
  
  // Monospace
  { name: 'JetBrains Mono', family: "'JetBrains Mono', monospace", category: 'monospace', language: 'latin', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700,800], googleUrl: 'https://fonts.google.com/specimen/JetBrains+Mono' },
  { name: 'Fira Code', family: "'Fira Code', monospace", category: 'monospace', language: 'latin', vendor: 'Google Fonts', weights: [300,400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/Fira+Code' },
  { name: 'Source Code Pro', family: "'Source Code Pro', monospace", category: 'monospace', language: 'latin', vendor: 'Google Fonts', weights: [200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Source+Code+Pro' },
  { name: 'IBM Plex Mono', family: "'IBM Plex Mono', monospace", category: 'monospace', language: 'latin', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/IBM+Plex+Mono' },
  { name: 'Space Mono', family: "'Space Mono', monospace", category: 'monospace', language: 'latin', vendor: 'Google Fonts', weights: [400,700], googleUrl: 'https://fonts.google.com/specimen/Space+Mono' },
  
  // Display
  { name: 'Bebas Neue', family: "'Bebas Neue', sans-serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Bebas+Neue' },
  { name: 'Anton', family: "'Anton', sans-serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Anton' },
  { name: 'Archivo Black', family: "'Archivo Black', sans-serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Archivo+Black' },
  { name: 'Black Ops One', family: "'Black Ops One', sans-serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Black+Ops+One' },
  { name: 'Passion One', family: "'Passion One', sans-serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400,700,900], googleUrl: 'https://fonts.google.com/specimen/Passion+One' },
  { name: 'Righteous', family: "'Righteous', sans-serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Righteous' },
  { name: 'Abril Fatface', family: "'Abril Fatface', serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Abril+Fatface' },
  { name: 'Alfa Slab One', family: "'Alfa Slab One', serif", category: 'display', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Alfa+Slab+One' },
  
  // Handwriting
  { name: 'Caveat', family: "'Caveat', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/Caveat' },
  { name: 'Dancing Script', family: "'Dancing Script', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400,500,600,700], googleUrl: 'https://fonts.google.com/specimen/Dancing+Script' },
  { name: 'Pacifico', family: "'Pacifico', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Pacifico' },
  { name: 'Great Vibes', family: "'Great Vibes', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Great+Vibes' },
  { name: 'Satisfy', family: "'Satisfy', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Satisfy' },
  { name: 'Sacramento', family: "'Sacramento', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Sacramento' },
  { name: 'Permanent Marker', family: "'Permanent Marker', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Permanent+Marker' },
  { name: 'Shadows Into Light', family: "'Shadows Into Light', cursive", category: 'handwriting', language: 'latin', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Shadows+Into+Light' },
  
  // Japanese
  { name: 'Noto Sans JP', family: "'Noto Sans JP', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [100,200,300,400,500,600,700,800,900], googleUrl: 'https://fonts.google.com/specimen/Noto+Sans+JP' },
  { name: 'Noto Serif JP', family: "'Noto Serif JP', serif", category: 'serif', language: 'japanese', vendor: 'Google Fonts', weights: [200,300,400,500,600,700,900], googleUrl: 'https://fonts.google.com/specimen/Noto+Serif+JP' },
  { name: 'M PLUS 1p', family: "'M PLUS 1p', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [100,300,400,500,700,800,900], googleUrl: 'https://fonts.google.com/specimen/M+PLUS+1p' },
  { name: 'M PLUS Rounded 1c', family: "'M PLUS Rounded 1c', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [100,300,400,500,700,800,900], googleUrl: 'https://fonts.google.com/specimen/M+PLUS+Rounded+1c' },
  { name: 'Kosugi Maru', family: "'Kosugi Maru', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Kosugi+Maru' },
  { name: 'Sawarabi Gothic', family: "'Sawarabi Gothic', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Sawarabi+Gothic' },
  { name: 'Sawarabi Mincho', family: "'Sawarabi Mincho', serif", category: 'serif', language: 'japanese', vendor: 'Google Fonts', weights: [400], googleUrl: 'https://fonts.google.com/specimen/Sawarabi+Mincho' },
  { name: 'Zen Kaku Gothic New', family: "'Zen Kaku Gothic New', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [300,400,500,700,900], googleUrl: 'https://fonts.google.com/specimen/Zen+Kaku+Gothic+New' },
  { name: 'Zen Maru Gothic', family: "'Zen Maru Gothic', sans-serif", category: 'sans-serif', language: 'japanese', vendor: 'Google Fonts', weights: [300,400,500,700,900], googleUrl: 'https://fonts.google.com/specimen/Zen+Maru+Gothic' },
  { name: 'Shippori Mincho', family: "'Shippori Mincho', serif", category: 'serif', language: 'japanese', vendor: 'Google Fonts', weights: [400,500,600,700,800], googleUrl: 'https://fonts.google.com/specimen/Shippori+Mincho' },
  { name: 'Kiwi Maru', family: "'Kiwi Maru', serif", category: 'serif', language: 'japanese', vendor: 'Google Fonts', weights: [300,400,500], googleUrl: 'https://fonts.google.com/specimen/Kiwi+Maru' },
];

// Showcase items with custom display text
const SHOWCASE_DATA = [
  { font: 'Playfair Display', text: 'Elegance', style: 'italic' },
  { font: 'Inter', text: 'Clarity' },
  { font: 'Bebas Neue', text: 'BOLD IMPACT' },
  { font: 'Noto Sans JP', text: '美しさ' },
  { font: 'EB Garamond', text: 'Timeless' },
  { font: 'JetBrains Mono', text: '</code>' },
  { font: 'Shippori Mincho', text: '静寂' },
  { font: 'Montserrat', text: 'MODERN' },
];

// Fonts in Use examples
const INUSE_DATA = [
  { font: 'Inter', context: 'Tech Startup Landing Page', tags: ['web', 'ui'], text: 'Build something amazing' },
  { font: 'Playfair Display', context: 'Luxury Fashion Brand', tags: ['branding', 'print'], text: 'Timeless Elegance' },
  { font: 'Noto Sans JP', context: 'Japanese Restaurant Menu', tags: ['menu', 'print'], text: '本日のおすすめ' },
  { font: 'JetBrains Mono', context: 'Developer Portfolio', tags: ['web', 'code'], text: 'console.log("Hello")' },
  { font: 'Bebas Neue', context: 'Sports Event Poster', tags: ['poster', 'event'], text: 'CHAMPIONSHIP 2026' },
  { font: 'Lora', context: 'Book Interior Design', tags: ['book', 'editorial'], text: 'Chapter One' },
  { font: 'Shippori Mincho', context: 'Traditional Japanese Branding', tags: ['branding', 'cultural'], text: '伝統と革新' },
  { font: 'Poppins', context: 'Mobile App Interface', tags: ['app', 'ui'], text: 'Welcome back!' },
  { font: 'EB Garamond', context: 'Academic Journal', tags: ['editorial', 'academic'], text: 'Research & Discovery' },
  { font: 'Caveat', context: 'Personal Blog Header', tags: ['blog', 'personal'], text: 'My Creative Journey' },
  { font: 'M PLUS Rounded 1c', context: 'Children\'s App', tags: ['app', 'kids'], text: 'たのしくまなぼう' },
  { font: 'Oswald', context: 'News Website Headline', tags: ['web', 'news'], text: 'BREAKING NEWS' },
];

// ===================================
// State
// ===================================
let state = {
  theme: 'dark',
  view: 'explore',
  layout: 'list',
  searchQuery: '',
  categoryFilter: 'all',
  languageFilter: 'all',
  fontSize: 48,
  fontWeight: 400,
  previewText: 'The quick brown fox jumps over the lazy dog',
  selectedFont: null,
};

// ===================================
// DOM Elements
// ===================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const elements = {
  fontList: $('#fontList'),
  showcaseGrid: $('#showcaseGrid'),
  inuseGrid: $('#inuseGrid'),
  searchInput: $('#searchInput'),
  fontSizeSlider: $('#fontSizeSlider'),
  fontSizeValue: $('#fontSizeValue'),
  fontWeightSlider: $('#fontWeightSlider'),
  fontWeightValue: $('#fontWeightValue'),
  previewText: $('#previewText'),
  modal: $('#fontModal'),
  modalFontName: $('#modalFontName'),
  modalCategory: $('#modalCategory'),
  modalPreview: $('#modalPreview'),
  glyphGrid: $('#glyphGrid'),
  weightSamples: $('#weightSamples'),
  googleFontsLink: $('#googleFontsLink'),
  copyFontFamily: $('#copyFontFamily'),
  toast: $('#toast'),
};

// ===================================
// Utilities
// ===================================
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => elements.toast.classList.remove('show'), 2500);
}

// ===================================
// Theme
// ===================================
function initTheme() {
  const saved = localStorage.getItem('studio-fonts-theme');
  if (saved) {
    state.theme = saved;
    document.documentElement.setAttribute('data-theme', saved);
  }
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('studio-fonts-theme', state.theme);
}

// ===================================
// Filtering
// ===================================
function getFilteredFonts() {
  return FONTS.filter(font => {
    // Search
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      if (!font.name.toLowerCase().includes(query) && 
          !font.category.toLowerCase().includes(query)) {
        return false;
      }
    }
    
    // Category
    if (state.categoryFilter !== 'all' && font.category !== state.categoryFilter) {
      return false;
    }
    
    // Language
    if (state.languageFilter !== 'all' && font.language !== state.languageFilter) {
      return false;
    }
    
    return true;
  });
}

// ===================================
// Render Functions
// ===================================
function renderFontList() {
  const fonts = getFilteredFonts();
  
  if (fonts.length === 0) {
    elements.fontList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">フォントが見つかりません</h3>
        <p class="empty-text">検索条件を変更してお試しください</p>
      </div>
    `;
    return;
  }
  
  const previewText = state.languageFilter === 'japanese' || 
    (state.previewText && /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(state.previewText))
    ? 'あのイーハトーヴォのすきとおった風'
    : state.previewText;
  
  elements.fontList.innerHTML = fonts.map((font, index) => {
    const displayText = font.language === 'japanese' 
      ? 'あのイーハトーヴォのすきとおった風' 
      : state.previewText;
    
    return `
      <div class="font-card" data-font-index="${FONTS.indexOf(font)}" style="animation-delay: ${Math.min(index * 0.05, 0.5)}s">
        <div class="font-card-header">
          <div class="font-meta">
            <span class="font-name">${font.name}</span>
            <span class="font-category">${font.category}</span>
          </div>
          <span class="font-vendor">${font.vendor}</span>
        </div>
        <div class="font-preview ${font.language === 'japanese' ? 'japanese' : ''}" 
             style="font-family: ${font.family}; font-size: ${state.fontSize}px; font-weight: ${state.fontWeight}">
          ${displayText}
        </div>
      </div>
    `;
  }).join('');
  
  // Update layout class
  elements.fontList.className = `font-list ${state.layout === 'grid' ? 'grid-layout' : ''}`;
}

function renderShowcase() {
  elements.showcaseGrid.innerHTML = SHOWCASE_DATA.map((item, index) => {
    const font = FONTS.find(f => f.name === item.font);
    if (!font) return '';
    
    const isLarge = index === 0 || index === 3;
    const fontStyle = item.style === 'italic' ? 'font-style: italic;' : '';
    
    return `
      <div class="showcase-item ${isLarge ? 'large' : ''}" data-font-name="${font.name}">
        <div class="showcase-bg" style="font-family: ${font.family}">${item.text.charAt(0)}</div>
        <div class="showcase-content">
          <div class="showcase-text" style="font-family: ${font.family}; ${fontStyle}">${item.text}</div>
          <span class="showcase-name">${font.name}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderInUse() {
  elements.inuseGrid.innerHTML = INUSE_DATA.map(item => {
    const font = FONTS.find(f => f.name === item.font);
    if (!font) return '';
    
    return `
      <div class="inuse-card" data-font-name="${font.name}">
        <div class="inuse-preview">
          <div class="inuse-preview-text" style="font-family: ${font.family}">${item.text}</div>
        </div>
        <div class="inuse-info">
          <div>
            <div class="inuse-font-name">${font.name}</div>
            <div class="inuse-context">${item.context}</div>
          </div>
          <div class="inuse-tags">
            ${item.tags.map(tag => `<span class="inuse-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderModal(font) {
  elements.modalFontName.textContent = font.name;
  elements.modalFontName.style.fontFamily = font.family;
  elements.modalCategory.textContent = font.category;
  
  const displayText = font.language === 'japanese' 
    ? 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら'
    : state.previewText;
  
  elements.modalPreview.textContent = displayText;
  elements.modalPreview.style.fontFamily = font.family;
  elements.modalPreview.style.fontWeight = state.fontWeight;
  
  // Glyphs
  const glyphs = font.language === 'japanese'
    ? 'あいうえおかきくけこさしすせそたちつてとなにぬねの'
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  elements.glyphGrid.innerHTML = glyphs.split('').slice(0, 36).map(char => `
    <div class="glyph-item" style="font-family: ${font.family}">${char}</div>
  `).join('');
  
  // Weight samples
  elements.weightSamples.innerHTML = font.weights.map(weight => `
    <div class="weight-sample">
      <span class="weight-label">${weight}</span>
      <span class="weight-text" style="font-family: ${font.family}; font-weight: ${weight}">
        ${font.language === 'japanese' ? 'あいうえお' : 'Typography'}
      </span>
    </div>
  `).join('');
  
  // Links
  elements.googleFontsLink.href = font.googleUrl;
  
  state.selectedFont = font;
}

function updatePreviews() {
  $$('.font-preview').forEach(el => {
    el.style.fontSize = `${state.fontSize}px`;
    el.style.fontWeight = state.fontWeight;
  });
  
  if (elements.modalPreview) {
    elements.modalPreview.style.fontWeight = state.fontWeight;
  }
}

// ===================================
// View Management
// ===================================
function switchView(view) {
  state.view = view;
  
  // Update nav buttons
  $$('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
  
  // Update view sections
  $$('.view-section').forEach(section => {
    section.classList.toggle('active', section.id === `${view}View`);
  });
  
  // Render appropriate view
  if (view === 'explore') {
    renderFontList();
  } else if (view === 'showcase') {
    renderShowcase();
  } else if (view === 'inuse') {
    renderInUse();
  }
}

// ===================================
// Event Handlers
// ===================================
function setupEventListeners() {
  // Theme toggle
  $('.theme-toggle').addEventListener('click', toggleTheme);
  
  // Navigation
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });
  
  // Search
  elements.searchInput.addEventListener('input', debounce(e => {
    state.searchQuery = e.target.value;
    renderFontList();
  }, 200));
  
  // Category filter
  $$('.pill[data-category]').forEach(pill => {
    pill.addEventListener('click', () => {
      state.categoryFilter = pill.dataset.category;
      $$('.pill[data-category]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderFontList();
    });
  });
  
  // Language filter
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.languageFilter = btn.dataset.lang;
      $$('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update preview text
      if (btn.dataset.lang === 'japanese') {
        elements.previewText.value = 'あのイーハトーヴォのすきとおった風';
        state.previewText = elements.previewText.value;
      } else if (btn.dataset.lang === 'latin' && /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(state.previewText)) {
        elements.previewText.value = 'The quick brown fox jumps over the lazy dog';
        state.previewText = elements.previewText.value;
      }
      
      renderFontList();
    });
  });
  
  // Font size slider
  elements.fontSizeSlider.addEventListener('input', e => {
    state.fontSize = parseInt(e.target.value);
    elements.fontSizeValue.textContent = `${state.fontSize}px`;
    updatePreviews();
  });
  
  // Font weight slider
  elements.fontWeightSlider.addEventListener('input', e => {
    state.fontWeight = parseInt(e.target.value);
    elements.fontWeightValue.textContent = state.fontWeight;
    updatePreviews();
  });
  
  // Preview text
  elements.previewText.addEventListener('input', e => {
    state.previewText = e.target.value || 'The quick brown fox jumps over the lazy dog';
    renderFontList();
  });
  
  // Preset buttons
  $$('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      elements.previewText.value = btn.dataset.text;
      state.previewText = btn.dataset.text;
      renderFontList();
    });
  });
  
  // View toggle
  $$('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.layout = btn.dataset.layout;
      $$('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderFontList();
    });
  });
  
  // Font card clicks
  elements.fontList.addEventListener('click', e => {
    const card = e.target.closest('.font-card');
    if (card) {
      const index = parseInt(card.dataset.fontIndex);
      openModal(FONTS[index]);
    }
  });
  
  // Showcase/InUse clicks
  elements.showcaseGrid.addEventListener('click', e => {
    const item = e.target.closest('.showcase-item');
    if (item) {
      const font = FONTS.find(f => f.name === item.dataset.fontName);
      if (font) openModal(font);
    }
  });
  
  elements.inuseGrid.addEventListener('click', e => {
    const item = e.target.closest('.inuse-card');
    if (item) {
      const font = FONTS.find(f => f.name === item.dataset.fontName);
      if (font) openModal(font);
    }
  });
  
  // Modal
  $('.modal-close').addEventListener('click', closeModal);
  $('.modal-backdrop').addEventListener('click', closeModal);
  
  elements.copyFontFamily.addEventListener('click', () => {
    if (state.selectedFont) {
      navigator.clipboard.writeText(`font-family: ${state.selectedFont.family};`);
      showToast('font-family をコピーしました');
    }
  });
  
  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(font) {
  renderModal(font);
  elements.modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.modal.classList.remove('active');
  document.body.style.overflow = '';
  state.selectedFont = null;
}

// ===================================
// Initialize
// ===================================
function init() {
  initTheme();
  setupEventListeners();
  renderFontList();
  renderShowcase();
  renderInUse();
}

// Start
document.addEventListener('DOMContentLoaded', init);




