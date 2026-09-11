import {startFavicon} from '../special/balloon-portfolio/favicon.js';
import './portfolio-chrome.css';
const nav=document.querySelector('.versions-nav');
const button=nav?.querySelector('button');
if(button){
 button.setAttribute('aria-expanded','false');
 const list=nav.querySelector('.version-list');list.id='portfolio-version-menu';button.setAttribute('aria-controls',list.id);
 const close=()=>{delete nav.dataset.open;button.setAttribute('aria-expanded','false');};
 button.addEventListener('click',()=>{const open=nav.dataset.open!=='true';nav.dataset.open=String(open);button.setAttribute('aria-expanded',String(open));});
 document.addEventListener('pointerdown',event=>{if(!nav.contains(event.target))close();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'){close();button.blur();}});
}

startFavicon('blue','/special/balloon-portfolio/');
