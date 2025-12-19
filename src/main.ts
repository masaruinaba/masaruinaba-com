import './style.css'

/**
 * Bento Portfolio
 * 
 * グリッドベースのポートフォリオサイト
 * アニメーションとインタラクションは後で追加予定
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initBentoGrid()
})

/**
 * Bento Grid の初期化
 */
function initBentoGrid(): void {
  const cards = document.querySelectorAll<HTMLElement>('.bento-card')
  
  // カードのインタラクションを設定
  cards.forEach((card, index) => {
    // アニメーション用のインデックスを設定
    card.style.setProperty('--card-index', String(index))
    
    // フォーカス可能にする（キーボードナビゲーション用）
    if (!card.querySelector('a')) {
      card.setAttribute('tabindex', '0')
    }
  })
  
  // グリッドの準備完了をマーク
  const grid = document.querySelector('.bento-grid')
  if (grid) {
    grid.classList.add('bento-grid--ready')
  }
}

/**
 * 将来のアニメーション追加用のプレースホルダー
 * 
 * 追加予定の機能:
 * - スクロール連動のフェードインアニメーション
 * - ホバー時の3Dチルトエフェクト
 * - マウス追従のパララックス
 * - カードのドラッグ&ドロップ並べ替え
 * - Intersection Observer による遅延読み込み
 */

// Export for potential module usage
export { initBentoGrid }
