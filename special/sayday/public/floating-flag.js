// Keeps the 日本 flag just after the floating X account, and hides it with the account.
(()=>{
  const x=document.querySelector('.floating-x'),flag=document.querySelector('.floating-flag');if(!x||!flag)return
  // Horizontal from the link's box (its hide/show slide is vertical only); vertical from its CSS, so a hidden link
  // (moved down 16px) doesn't move the flag's resting place.
  const place=()=>{const cs=getComputedStyle(x),r=x.getBoundingClientRect(),pt=parseFloat(cs.paddingTop)||0,pb=parseFloat(cs.paddingBottom)||0
    flag.style.setProperty('--flag-left',`${Math.round(r.right-(parseFloat(cs.paddingRight)||0)+5)}px`)
    flag.style.setProperty('--flag-bottom',`${Math.round((parseFloat(cs.bottom)||0)+pb+(x.offsetHeight-pt-pb)/2-5.7)}px`)}
  const sync=()=>flag.classList.toggle('is-away',x.classList.contains('is-away'))
  new MutationObserver(sync).observe(x,{attributes:true,attributeFilter:['class']})
  addEventListener('resize',place);document.fonts?.ready.then(place);place();sync()
})()
