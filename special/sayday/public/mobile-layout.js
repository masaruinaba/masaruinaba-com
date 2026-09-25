// Separate compact compositions preserve the authored desktop frames.
const stripIds=node=>{node.removeAttribute('data-node-id');node.removeAttribute('id');node.querySelectorAll('[data-node-id],[id]').forEach(n=>{n.removeAttribute('data-node-id');n.removeAttribute('id');});return node;};
const copy=document.querySelector('.hero-copy'),store=document.querySelector('.floating-store .store-button');
if(copy&&store){const button=store.cloneNode(true);button.classList.add('mobile-store');copy.append(button);}
document.querySelectorAll('.feature-stage>div').forEach(root=>{
 const original=root.querySelector(':scope>[data-name="Device"]'),image=root.firstElementChild.querySelector('img');
 if(!original||!image)return;
 const art=document.createElement('div');art.className='mobile-feature-art';art.setAttribute('aria-hidden','true');
 const character=image.cloneNode(true);character.removeAttribute('style');character.className='mobile-feature-character';
 const device=stripIds(original.cloneNode(true));device.className='mobile-feature-device';device.removeAttribute('data-name');
 art.append(character,device);root.append(art);
});
document.querySelectorAll('.footer-art').forEach(footer=>{
 const nav=document.createElement('div');nav.className='mobile-footer-meta';
 nav.innerHTML='<a class="mobile-credit" href="https://www.masaruinaba.com/" aria-label="Masaru Inaba"><img src="/assets/95591bfa-5a6e-4740-9042-a0def881542b.svg" alt="Masaru Inaba"></a><div><span>© 2026 SAYDAY</span><a href="/privacy/">PRIVACY POLICY</a></div>';
 footer.append(nav);
});
