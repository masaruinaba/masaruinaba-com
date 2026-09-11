(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Zu(i,e,t,n,s){const r=Math.max(.2,i.radius),o=Math.hypot(e.x,e.y),a=Math.min(1,o/r),c=(.22+.58*a)/r,l=-n*c,u=t*c,h=(e.x*n-e.y*t)*.35/(r*r);i.tiltX=(i.tiltX||0)+l,i.tiltY=(i.tiltY||0)+u,i.angle+=h;const f=1-Math.exp(-18*s);i.rollX=(i.rollX||0)*(1-f)+l/Math.max(.008,s)*f,i.rollY=(i.rollY||0)*(1-f)+u/Math.max(.008,s)*f}function Qu(i,e,t){const n=Math.exp(-(t?14:5)*e);t||(i.tiltX=(i.tiltX||0)+(i.rollX||0)*e,i.tiltY=(i.tiltY||0)+(i.rollY||0)*e),i.rollX=(i.rollX||0)*n,i.rollY=(i.rollY||0)*n}function Kr(i,e){const t=Math.max(.65,Math.min(1.5,e)),n=t/(i.userScale||1);return i.baseSize*=n,i.radius*=n,i.root?.scale.multiplyScalar(n),i.mass=Math.max(.15,i.radius*i.radius),i.userScale=t,t}const or=["blue","triangle","star","flower","coil","round"];function ef(i="blue"){const e=document.querySelector("#character-favicon");if(!e)return;let t=Math.max(0,or.indexOf(i)),n;const s=matchMedia("(prefers-reduced-motion: reduce)"),r=()=>{e.href=`/special/balloon-portfolio/favicons/${or[t]}.png`,e.dataset.character=or[t]},o=()=>{clearInterval(n),n=void 0},a=()=>{o(),!(document.hidden||s.matches)&&(n=setInterval(()=>{t=(t+1)%or.length,r()},3e3))};r(),a(),document.addEventListener("visibilitychange",a),s.addEventListener("change",a),window.addEventListener("pagehide",o),window.addEventListener("pageshow",a)}const Kc=[{id:"blue",background:"#dcd8d0",ink:"#ed5811",size:95,x:53.35,y:51.1,angle:29.18},{id:"triangle",background:"#121ddd",ink:"#87b0dc",size:117.19,x:59.64,y:50.4,angle:0,flip:-1},{id:"star",background:"#222222",ink:"#f3d583",size:112.86,x:46.22,y:50,angle:-40.49},{id:"flower",background:"#ffdc50",ink:"#1c11ed",size:105.1,x:50,y:75.9,angle:0},{id:"coil",background:"#dcb0ff",ink:"#ecf1f3",size:103.02,x:55.47,y:50,angle:0},{id:"round",background:"#efefef",ink:"#ed4f4f",size:138.71,x:49.77,y:72.5,angle:12.18}];function ar(i,e){i.setAttribute("aria-label",e.join(" ")),e.forEach((t,n)=>{n&&i.append(document.createElement("br")),t.split(" ").forEach((s,r)=>{r&&i.append(" ");const o=document.createElement("span"),a=document.createElement("span");o.className="opening-word",o.setAttribute("aria-hidden","true"),a.textContent=s,o.append(a),i.append(o)})})}function tf(){const i=new URLSearchParams(location.search),t=Kc.find(m=>m.id===i.get("opening"))||Kc[crypto.getRandomValues(new Uint32Array(1))[0]%6];ef(t.id);const n=matchMedia("(prefers-reduced-motion: reduce)"),s=document.createElement("section");s.className="opening",s.setAttribute("aria-label","Playground — Made for Fun."),s.innerHTML=`<div class="opening-paper"></div>
    <div class="opening-character"><img alt="" draggable="false" fetchpriority="high"></div>
    <div class="opening-logo" role="img" aria-label="Playground"><i class="opening-logo-base"></i><i class="opening-logo-o"></i><i class="opening-logo-u"></i></div>
    <p class="opening-description"></p><p class="opening-copy"></p>
    <div class="opening-footer"><h1 class="opening-title"></h1><p class="opening-edition"></p></div>`;const r=s.querySelector(".opening-character"),o=r.querySelector("img");s.style.setProperty("--opening-bg",t.background),s.style.setProperty("--opening-ink",t.ink),r.style.cssText=`--character-size:${t.size}vw;--character-x:${t.x}%;--character-y:${t.y}%;--character-angle:${t.angle}deg;--character-flip:${t.flip||1}`,o.src=`./opening/${t.id}.png`,ar(s.querySelector(".opening-description"),["A collection of little","experiments, made for","the fun of it."]),ar(s.querySelector(".opening-copy"),["Pull, bend, and rearrange","them until something","unnamed begins to take","form."]),ar(s.querySelector(".opening-title"),["Made for Fun."]),ar(s.querySelector(".opening-edition"),["Tiny Apps / N° 001"]),document.body.dataset.opening="loading",document.body.dataset.openingPattern=t.id,document.body.append(s);const a=[...document.querySelectorAll(".play-controls,.color-modes,.portfolio-home,#world")],c=a.map(m=>m.inert);a.forEach(m=>m.inert=!0);const l=[],u=(m,p,v)=>{const x=m.animate(p,{fill:"both",...v});return l.push(x),x};let h=!1,f=0;const d=m=>new Promise(p=>setTimeout(p,m)),g=(async()=>{if(await Promise.race([o.decode().catch(()=>{o.hidden=!0}),d(5e3)]),!h){if(f=performance.now(),document.body.dataset.opening="entering",setTimeout(()=>{!h&&document.body.dataset.opening==="entering"&&(document.body.dataset.opening="holding")},1800),n.matches){s.classList.add("opening-static");return}u(o,[{opacity:0,transform:`translateY(24%) rotate(${t.angle-65}deg) scale(.76) scaleY(${t.flip||1})`},{opacity:1,offset:.25},{opacity:1,transform:`translateY(0) rotate(${t.angle}deg) scale(1) scaleY(${t.flip||1})`}],{duration:1600,easing:"cubic-bezier(.16,1,.3,1)"}),u(s.querySelector(".opening-logo"),[{opacity:0,transform:"translateY(24px)",clipPath:"inset(0 0 100% 0)"},{opacity:1,transform:"translateY(0)",clipPath:"inset(-40% -5% -40% -5%)"}],{delay:180,duration:950,easing:"cubic-bezier(.22,1,.36,1)"});for(const[m,p]of[[".opening-description",320],[".opening-copy",450],[".opening-title",680],[".opening-edition",850]])s.querySelectorAll(`${m} .opening-word > span`).forEach((v,x)=>u(v,[{transform:"translateY(115%) rotate(3deg)",opacity:0},{transform:"translateY(0) rotate(0)",opacity:1}],{delay:p+x*24,duration:850,easing:"cubic-bezier(.22,1,.36,1)"}))}})();function _(){h=!0,l.forEach(m=>m.cancel()),s.remove(),a.forEach((m,p)=>m.inert=c[p]),document.body.dataset.opening="done"}return{async finish(m){if(await g,!h&&(await d(Math.max(0,(n.matches?250:2800)-(performance.now()-f))),!h)){if(document.body.dataset.opening="exiting",n.matches){_(),m();return}u(s.querySelector(".opening-paper"),[{opacity:1},{opacity:0}],{duration:450,easing:"ease-in"}),u(r,[{opacity:1,transform:"translate(-50%,-50%) scale(1) rotate(0)"},{opacity:0,transform:"translate(-50%,-65%) scale(1.3) rotate(28deg)"}],{duration:850,easing:"cubic-bezier(.55,0,.2,1)"}),s.querySelectorAll(".opening-word > span").forEach((p,v)=>u(p,[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-110%)"}],{delay:v*6,duration:350,easing:"cubic-bezier(.55,0,.8,.4)"})),u(s.querySelector(".opening-logo"),[{opacity:1},{opacity:0,transform:"translateY(-18px)"}],{duration:300}),m(),await d(900),_()}},cancel:_}}function zh(i="hello"){let e=2166136261;for(const o of i)e=Math.imul(e^o.codePointAt(0),16777619)>>>0;const t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=5+Math.floor(t()*5),s=[];let r=0;for(let o=0;o<n;o++){const a=.12+t()*.13,c=o===Math.floor(n/2)?.13:.025;s.push({start:r,length:a,pitch:.76+t()*.65,vowel:2+Math.floor(t()*4),bend:(t()-.5)*.6}),r+=a+c}return{syllables:s,duration:r}}function nf(i,e){const t=i?.syllables.find(n=>e>=n.start&&e<n.start+n.length);return t?Math.pow(Math.sin(Math.PI*(e-t.start)/t.length),.7):0}function sf({soundEnabled:i,hapticsEnabled:e,volume:t}){let n=null,s=-1/0,r=-1/0,o=null,a=null,c=null;const l=new Set;function u(){if(!i())return;const p=window.AudioContext||window.webkitAudioContext;p&&(n??=new p,n.state==="suspended"&&n.resume().catch(()=>{}))}function h(){if(c){try{c.stop()}catch{}l.delete(c),c=null}}function f(){h();for(const p of l)try{p.stop()}catch{}l.clear(),typeof navigator.vibrate=="function"&&navigator.vibrate(0)}function d(p,v){if(!e()||typeof document<"u"&&document.hidden)return;const x=performance.now();if(x-r<80)return;let y="unsupported";try{if(typeof navigator.vibrate=="function"){const b=Math.round(8+v*16);y=navigator.vibrate(p==="grip"?[b,20,10]:b)?"vibration-requested":"vibration-rejected"}else o??=document.createElement("input"),"switch"in o&&navigator.userActivation?.isActive&&(o.isConnected||(o.type="checkbox",o.setAttribute("switch",""),o.tabIndex=-1,o.setAttribute("aria-hidden","true"),o.style.cssText="position:fixed;left:-100px;top:-100px;width:1px;height:1px;opacity:0;pointer-events:none",a=document.createElement("label"),a.style.cssText=o.style.cssText,a.append(o),document.body.append(a)),a.click(),y="switch-requested")}catch{y="unavailable"}r=x,typeof document<"u"&&(document.documentElement.dataset.hapticState=y)}function g(p,v=.5,x={}){const y=Math.min(1,Math.max(0,v)),b=p==="rub"||p==="scale";if(!(b&&performance.now()-s<160)&&(b&&(s=performance.now()),p!=="voice"&&d(p,y),!(!i()||!n))){if(n.state==="suspended"){n.resume().then(()=>{i()&&_(p,y,b,x)}).catch(()=>{});return}_(p,y,b,x)}}function _(p,v,x,y){if(n.state!=="running")return;const b=.9+Math.random()*.2,E=Math.max(.65,Math.min(1.5,y.size||1)),T=b/Math.sqrt(E)*(.86+v*.32),R=n.currentTime,M=p==="voice"?y.phrase.duration:(p==="grip"?.16:p==="release"?.13:x?.075:.1)*b,S=Math.ceil(n.sampleRate*M),D=n.createBuffer(1,S,n.sampleRate),U=D.getChannelData(0);let H=0,Y=0;for(let ie=0;ie<S;ie++){const he=ie/S;if(p==="voice"){const $=ie/n.sampleRate,O=y.phrase.syllables.find(ne=>$>=ne.start&&$<ne.start+ne.length);if(!O)continue;const C=($-O.start)/O.length,A=(440+v*100)*b/Math.pow(E,.18)*Math.max(.92,O.pitch)*(1+O.bend*(C-.5));Y+=Math.PI*2*A/n.sampleRate;const j=O.vowel;U[ie]=(Math.sin(Y)*.56+Math.sin(Y*j)*.13+Math.sin(Y*(j+1))*.055)*Math.pow(Math.sin(Math.PI*C),.7);continue}const ue=(p==="on"?680:p==="off"?480:p==="button"?760:p==="scale"?y.direction>0?300:620:p==="rub"?380:p==="grip"?310:p==="release"?560:460)*T,xe=(p==="on"?920:p==="off"?260:p==="button"?450:p==="scale"?y.direction>0?640:290:p==="rub"?250:p==="grip"?145:p==="release"?280:205)*T,be=xe+(ue-xe)*Math.exp(-he*5)+Math.sin(he*Math.PI*3)*22*(1-he);Y+=Math.PI*2*be/n.sampleRate,H=.68*H+.32*(Math.random()*2-1),U[ie]=Math.sin(Y)*.78+Math.sin(Y*2)*.1*(1-he)+H*.1}const W=n.createBufferSource();W.buffer=D,p==="voice"&&(h(),c=W);const V=n.createBiquadFilter();V.type="lowpass",V.Q.value=.5,V.frequency.setValueAtTime(p==="voice"?3400:1800,R),V.frequency.exponentialRampToValueAtTime(p==="voice"?2600:900,R+M);const X=n.createGain(),F=Math.min(.18,Math.max(0,t()))*(.22+.5*v)*(p==="voice"?1.35:x?.4:1);if(X.gain.setValueAtTime(0,R),X.gain.linearRampToValueAtTime(F,R+.012),p==="voice"&&X.gain.setValueAtTime(F*.65,R+M*.8),X.gain.exponentialRampToValueAtTime(1e-4,R+M),W.connect(V).connect(X).connect(n.destination),l.size>=4){const ie=[...l].find(he=>he!==c);try{ie.stop()}catch{}l.delete(ie)}l.add(W),W.onended=()=>{c===W&&(c=null),l.delete(W),W.disconnect(),V.disconnect(),X.disconnect()},W.start(R),W.stop(R+M+.01),typeof document<"u"&&(document.documentElement.dataset.audioState=n.state,document.documentElement.dataset.feedback=p)}function m(p={}){!n||!i()||document.hidden||(h(),g("voice",.55,{...p,phrase:p.phrase||zh(p.message)}))}return{unlock:u,pulse:g,stop:f,babble:m,stopVoice:h}}function rf(){const i=sf({soundEnabled:()=>document.body.dataset.opening==="done"&&document.querySelector("#mic-toggle")?.getAttribute("aria-pressed")!=="true",hapticsEnabled:()=>!0,volume:()=>.17});document.addEventListener("pointerdown",t=>{t.target.closest("#world,.play-controls,[data-color-mode],#work-close")&&i.unlock()},{capture:!0}),document.addEventListener("click",t=>{const n=t.target.closest(".play-controls button,[data-color-mode],#work-close");if(!n||n.disabled)return;i.unlock();const s=n.matches("#camera-toggle,#mic-toggle");i.pulse(s?n.getAttribute("aria-pressed")==="true"?"off":"on":"button",.4)},{capture:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.stop()});const e=document.querySelector("#mic-toggle");return e&&new MutationObserver(()=>{e.getAttribute("aria-pressed")==="true"&&i.stop()}).observe(e,{attributes:!0,attributeFilter:["aria-pressed"]}),window.addEventListener("pagehide",()=>i.stop()),i}function of(i){if(!new URLSearchParams(location.search).has("profile"))return null;const e=i.getContext(),t=e.getExtension("EXT_disjoint_timer_query_webgl2");let n=null,s=!1,r=0;const o=[],a=[],c=()=>{const l=u=>u.length?u.reduce((h,f)=>h+f,0)/u.length:null;document.body.dataset.profile=JSON.stringify({cpuMs:l(o),gpuMs:l(a),samples:o.length,gpuSamples:a.length})};return{begin(){n&&e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)&&(e.getParameter(t.GPU_DISJOINT_EXT)||(a.push(e.getQueryParameter(n,e.QUERY_RESULT)/1e6),a.length>120&&a.shift()),e.deleteQuery(n),n=null),t&&!n&&(n=e.createQuery(),e.beginQuery(t.TIME_ELAPSED_EXT,n),s=!0),r=performance.now()},end(){s&&(e.endQuery(t.TIME_ELAPSED_EXT),s=!1),o.push(performance.now()-r),o.length>120&&o.shift(),c()}}}const lc="180",af=0,$c=1,cf=2,kh=1,lf=2,Un=3,En=0,Ft=1,ln=2,ii=0,Ki=1,Jc=2,Zc=3,Qc=4,hf=5,vi=100,uf=101,ff=102,df=103,pf=104,mf=200,gf=201,xf=202,_f=203,sa=204,ra=205,yf=206,vf=207,Mf=208,Sf=209,bf=210,Ef=211,Tf=212,wf=213,Af=214,oa=0,aa=1,ca=2,Qi=3,la=4,ha=5,ua=6,fa=7,hc=0,Rf=1,Cf=2,si=0,Pf=1,If=2,Lf=3,Hh=4,Df=5,Nf=6,Uf=7,el="attached",Ff="detached",Vh=300,es=301,ts=302,da=303,pa=304,ro=306,ns=1e3,ei=1001,$r=1002,Rt=1003,Gh=1004,As=1005,Vt=1006,kr=1007,Sn=1008,Tn=1009,Wh=1010,Xh=1011,zs=1012,uc=1013,bi=1014,un=1015,Qs=1016,fc=1017,dc=1018,ks=1020,qh=35902,Yh=35899,jh=1021,Kh=1022,en=1023,Hs=1026,Vs=1027,pc=1028,mc=1029,$h=1030,gc=1031,xc=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,ma=35840,ga=35841,xa=35842,_a=35843,ya=36196,va=37492,Ma=37496,Sa=37808,ba=37809,Ea=37810,Ta=37811,wa=37812,Aa=37813,Ra=37814,Ca=37815,Pa=37816,Ia=37817,La=37818,Da=37819,Na=37820,Ua=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Ha=36285,Va=36286,Gs=2300,Ws=2301,po=2302,tl=2400,nl=2401,il=2402,Of=2500,Bf=0,Jh=1,Ga=2,zf=3200,kf=3201,_c=0,Hf=1,Zn="",St="srgb",Ot="srgb-linear",Jr="linear",ct="srgb",Pi=7680,sl=519,Vf=512,Gf=513,Wf=514,Zh=515,Xf=516,qf=517,Yf=518,jf=519,Wa=35044,cr=35048,rl="300 es",bn=2e3,Zr=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const Ps=Math.PI/180,is=180/Math.PI;function nn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function yc(i,e){return(i%e+e)%e}function Kf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $f(i,e,t){return i!==e?(t-i)/(e-i):0}function Is(i,e,t){return(1-t)*i+t*e}function Jf(i,e,t,n){return Is(i,e,1-Math.exp(-t*n))}function Zf(i,e=1){return e-Math.abs(yc(i,e*2)-e)}function Qf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ed(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function td(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nd(i,e){return i+Math.random()*(e-i)}function id(i){return i*(.5-Math.random())}function sd(i){i!==void 0&&(ol=i);let e=ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rd(i){return i*Ps}function od(i){return i*is}function ad(i){return(i&i-1)===0&&i!==0}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ld(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hd(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xs={DEG2RAD:Ps,RAD2DEG:is,generateUUID:nn,clamp:$e,euclideanModulo:yc,mapLinear:Kf,inverseLerp:$f,lerp:Is,damp:Jf,pingpong:Zf,smoothstep:Qf,smootherstep:ed,randInt:td,randFloat:nd,randFloatSpread:id,seededRandom:sd,degToRad:rd,radToDeg:od,isPowerOfTwo:ad,ceilPowerOfTwo:cd,floorPowerOfTwo:ld,setQuaternionFromProperEuler:hd,normalize:rt,denormalize:hn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,p*v);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const y=a*v;if(c=c*m+f*y,l=l*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=b,l*=b,u*=b,h*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new z,al=new ai;class Xe{constructor(e,t,n,s,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],x=s[4],y=s[7],b=s[2],E=s[5],T=s[8];return r[0]=o*_+a*v+c*b,r[3]=o*m+a*x+c*E,r[6]=o*p+a*y+c*T,r[1]=l*_+u*v+h*b,r[4]=l*m+u*x+h*E,r[7]=l*p+u*y+h*T,r[2]=f*_+d*v+g*b,r[5]=f*m+d*x+g*E,r[8]=f*p+d*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Xe;function Qh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){const i=qs("canvas");return i.style.display="block",i}const cl={};function Ys(i){i in cl||(cl[i]=!0,console.warn(i))}function fd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ll=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){const i={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ot]:{primaries:e,whitePoint:n,transfer:Jr,toXYZ:ll,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:ll,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}const et=dd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class pd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=qs("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xo(s[o].image)):r.push(xo(s[o]))}else r=xo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;const _o=new z;class bt extends hs{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=ei,s=ei,r=Vt,o=Sn,a=en,c=Tn,l=bt.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=nn(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Vh;bt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(d+1)/2,b=(p+1)/2,E=(u+f)/4,T=(h+_)/4,R=(g+m)/4;return x>y&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=R/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=R/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends hs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new bt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends xd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eu extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),hr.subVectors(this.max,_s),Li.subVectors(e.a,_s),Di.subVectors(e.b,_s),Ni.subVectors(e.c,_s),Gn.subVectors(Di,Li),Wn.subVectors(Ni,Di),hi.subVectors(Li,Ni);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!yo(t,Li,Di,Ni,hr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,Li,Di,Ni,hr))?!1:(ur.crossVectors(Gn,Wn),t=[ur.x,ur.y,ur.z],yo(t,Li,Di,Ni,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new z,new z,new z,new z,new z,new z,new z,new z],on=new z,lr=new wn,Li=new z,Di=new z,Ni=new z,Gn=new z,Wn=new z,hi=new z,_s=new z,hr=new z,ur=new z,ui=new z;function yo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=e.dot(ui),l=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const yd=new wn,ys=new z,vo=new z;class gn{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(vo)),this.expandByPoint(ys.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new z,Mo=new z,fr=new z,Xn=new z,So=new z,dr=new z,bo=new z;class er{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mo.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fr),a=Xn.dot(this.direction),c=-Xn.dot(fr),l=Xn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Mo).addScaledVector(fr,f),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){So.subVectors(t,e),dr.subVectors(n,e),bo.crossVectors(So,dr);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const c=a*this.direction.dot(dr.crossVectors(Xn,dr));if(c<0)return null;const l=a*this.direction.dot(So.cross(Xn));if(l<0||c+l>o)return null;const u=-a*Xn.dot(bo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,s,r,o,a,c,l,u,h,f,d,g,_,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,d,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,Md)}lookAt(e,t,n){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),qn.crossVectors(n,Xt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),qn.crossVectors(n,Xt)),qn.normalize(),pr.crossVectors(Xt,qn),s[0]=qn.x,s[4]=pr.x,s[8]=Xt.x,s[1]=qn.y,s[5]=pr.y,s[9]=Xt.y,s[2]=qn.z,s[6]=pr.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],b=n[15],E=s[0],T=s[4],R=s[8],M=s[12],S=s[1],D=s[5],U=s[9],H=s[13],Y=s[2],W=s[6],V=s[10],X=s[14],F=s[3],ie=s[7],he=s[11],ue=s[15];return r[0]=o*E+a*S+c*Y+l*F,r[4]=o*T+a*D+c*W+l*ie,r[8]=o*R+a*U+c*V+l*he,r[12]=o*M+a*H+c*X+l*ue,r[1]=u*E+h*S+f*Y+d*F,r[5]=u*T+h*D+f*W+d*ie,r[9]=u*R+h*U+f*V+d*he,r[13]=u*M+h*H+f*X+d*ue,r[2]=g*E+_*S+m*Y+p*F,r[6]=g*T+_*D+m*W+p*ie,r[10]=g*R+_*U+m*V+p*he,r[14]=g*M+_*H+m*X+p*ue,r[3]=v*E+x*S+y*Y+b*F,r[7]=v*T+x*D+y*W+b*ie,r[11]=v*R+x*U+y*V+b*he,r[15]=v*M+x*H+y*X+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,y=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,b=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,E=t*v+n*x+s*y+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*T,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*T,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*T,e[4]=x*T,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*T,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*d+t*c*d)*T,e[8]=y*T,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*T,e[12]=b*T,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=c*l,x=c*u,y=c*h,b=n.x,E=n.y,T=n.z;return s[0]=(1-(_+p))*b,s[1]=(d+y)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+x)*T,s[9]=(m-v)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const l=1/r,u=1/o,h=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=bn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===bn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=bn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===bn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Zr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new z,an=new Ye,vd=new z(0,0,0),Md=new z(1,1,1),qn=new z,pr=new z,Xt=new z,ul=new Ye,fl=new ai;class sn{constructor(e=0,t=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const dl=new z,Fi=new ai,In=new Ye,mr=new z,vs=new z,bd=new z,Ed=new ai,pl=new z(1,0,0),ml=new z(0,1,0),gl=new z(0,0,1),xl={type:"added"},Td={type:"removed"},Oi={type:"childadded",child:null},Eo={type:"childremoved",child:null};class dt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new z,t=new sn,n=new ai,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Xe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(vs,mr,this.up):In.lookAt(mr,vs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(In),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new z(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new z,Ln=new z,To=new z,Dn=new z,Bi=new z,zi=new z,_l=new z,wo=new z,Ao=new z,Ro=new z,Co=new Qe,Po=new Qe,Io=new Qe;class Qt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),Ln.subVectors(n,t),To.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Ln),c=cn.dot(To),l=Ln.dot(Ln),u=Ln.dot(To),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Co.setScalar(0),Po.setScalar(0),Io.setScalar(0),Co.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,n),Io.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Co,r.x),o.addScaledVector(Po,r.y),o.addScaledVector(Io,r.z),o}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),Ln.subVectors(e,t),cn.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),zi.subVectors(r,n),wo.subVectors(e,n);const c=Bi.dot(wo),l=zi.dot(wo);if(c<=0&&l<=0)return t.copy(n);Ao.subVectors(e,s);const u=Bi.dot(Ao),h=zi.dot(Ao);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Bi,o);Ro.subVectors(e,r);const d=Bi.dot(Ro),g=zi.dot(Ro);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(zi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return _l.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(_l,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=yc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lo(o,r,e+1/3),this.g=Lo(o,r,e),this.b=Lo(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return et.workingToColorSpace(Pt.copy(this),e),Math.round($e(Pt.r*255,0,255))*65536+Math.round($e(Pt.g*255,0,255))*256+Math.round($e(Pt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=St){et.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(gr);const n=Is(Yn.h,gr.h,t),s=Is(Yn.s,gr.s,t),r=Is(Yn.l,gr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new ze;ze.NAMES=tu;let wd=0;class fn extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=Ki,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ti extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,xr=new fe;let Ad=0;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}}class nu extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class iu extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rd=0;const Jt=new Ye,Do=new dt,ki=new z,qt=new wn,Ms=new wn,wt=new z;class Mt extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?iu:nu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(qt.min,Ms.min),qt.expandByPoint(wt),wt.addVectors(qt.max,Ms.max),qt.expandByPoint(wt)):(qt.expandByPoint(Ms.min),qt.expandByPoint(Ms.max))}qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(e,l),wt.add(ki)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new z,c[R]=new z;const l=new z,u=new z,h=new z,f=new fe,d=new fe,g=new fe,_=new z,m=new z;function p(R,M,S){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[R].add(_),a[M].add(_),a[S].add(_),c[R].add(m),c[M].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],D=S.start,U=S.count;for(let H=D,Y=D+U;H<Y;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new z,y=new z,b=new z,E=new z;function T(R){b.fromBufferAttribute(s,R),E.copy(b);const M=a[R];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(E,M);const D=y.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,M=v.length;R<M;++R){const S=v[R],D=S.start,U=S.count;for(let H=D,Y=D+U;H<Y;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Ye,fi=new er,_r=new gn,vl=new z,yr=new z,vr=new z,Mr=new z,No=new z,Sr=new z,Ml=new z,br=new z;class tt extends dt{constructor(e=new Mt,t=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(No.fromBufferAttribute(h,e),o?Sr.addScaledVector(No,u):Sr.addScaledVector(No.sub(t),u))}t.add(Sr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(_r.containsPoint(fi.origin)===!1&&(fi.intersectSphere(_r,vl)===null||fi.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(yl.copy(r).invert(),fi.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=x;y<b;y+=3){const E=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);s=Er(this,p,e,n,l,u,h,E,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=Er(this,o,e,n,l,u,h,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=x;y<b;y+=3){const E=y,T=y+1,R=y+2;s=Er(this,p,e,n,l,u,h,E,T,R),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;s=Er(this,o,e,n,l,u,h,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Cd(i,e,t,n,s,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===En,a),c===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:i}}function Er(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,yr),i.getVertexPosition(c,vr),i.getVertexPosition(l,Mr);const u=Cd(i,e,t,n,yr,vr,Mr,Ml);if(u){const h=new z;Qt.getBarycoord(Ml,yr,vr,Mr,h),s&&(u.uv=Qt.getInterpolatedAttribute(s,a,c,l,h,new fe)),r&&(u.uv1=Qt.getInterpolatedAttribute(r,a,c,l,h,new fe)),o&&(u.normal=Qt.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};Qt.getNormal(yr,vr,Mr,f.normal),u.face=f,u.barycoord=h}return u}class us extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(_,m,p,v,x,y,b,E,T,R,M){const S=y/T,D=b/R,U=y/2,H=b/2,Y=E/2,W=T+1,V=R+1;let X=0,F=0;const ie=new z;for(let he=0;he<V;he++){const ue=he*D-H;for(let xe=0;xe<W;xe++){const be=xe*S-U;ie[_]=be*v,ie[m]=ue*x,ie[p]=Y,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(xe/T),h.push(1-he/R),X+=1}}for(let he=0;he<R;he++)for(let ue=0;ue<T;ue++){const xe=f+ue+W*he,be=f+ue+W*(he+1),$=f+(ue+1)+W*(he+1),O=f+(ue+1)+W*he;c.push(xe,be,O),c.push(be,$,O),F+=6}a.addGroup(d,F,M),d+=F,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=ss(i[t]);for(const s in n)e[s]=n[s]}return e}function Pd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function su(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Id={clone:ss,merge:Dt};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ru extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new z,Sl=new fe,bl=new fe;class Ht extends ru{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,bl),t.subVectors(bl,Sl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class Nd extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const r=new Ht(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Ht(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Ht(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const c=new Ht(Hi,Vi,e,t);c.layers=this.layers,this.add(c);const l=new Ht(Hi,Vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ou extends bt{constructor(e=[],t=es,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ou(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new us(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ii});r.uniforms.tEquirect.value=t;const o=new tt(s,r),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=Vt),new Nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ut extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class Uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Sc extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Od{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new z;class bc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const El=new z,Tl=new Qe,wl=new Qe,Bd=new z,Al=new Ye,Tr=new z,Fo=new gn,Rl=new Ye,Oo=new er;class zd extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=el,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingBox.expandByPoint(Tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tr),this.boundingSphere.expandByPoint(Tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(s),e.ray.intersectsSphere(Fo)!==!1&&(Rl.copy(s).invert(),Oo.copy(e.ray).applyMatrix4(Rl),!(this.boundingBox!==null&&Oo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===el?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Tl.fromBufferAttribute(s.attributes.skinIndex,e),wl.fromBufferAttribute(s.attributes.skinWeight,e),El.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=wl.getComponent(r);if(o!==0){const a=Tl.getComponent(r);Al.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Bd.copy(El).applyMatrix4(Al),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class au extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cu extends bt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Rt,u=Rt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cl=new Ye,kd=new Ye;class Ec{constructor(e=[],t=[]){this.uuid=nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kd;Cl.multiplyMatrices(a,t[r]),Cl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ec(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cu(t,e,e,en,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new au),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Xa extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gi=new Ye,Pl=new Ye,wr=[],Il=new wn,Hd=new Ye,Ss=new tt,bs=new gn;class lu extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Il.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Il)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),bs.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),Pl.multiplyMatrices(n,Gi),Ss.matrixWorld=Pl,Ss.raycast(e,wr);for(let o=0,a=wr.length;o<a;o++){const c=wr[o];c.instanceId=r,c.object=this,t.push(c)}wr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cu(new Float32Array(s*this.count),s,this.count,pc,un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bo=new z,Vd=new z,Gd=new Xe;class $n{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Bo.subVectors(n,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gd.getNormalMatrix(e),s=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new gn,Wd=new fe(.5,.5),Ar=new z;class Tc{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],x=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-o,d-u,p-g,b-v).normalize(),s[1].setComponents(l+o,d+u,p+g,b+v).normalize(),s[2].setComponents(l+a,d+h,p+_,b+x).normalize(),s[3].setComponents(l-a,d-h,p-_,b-x).normalize(),n)s[4].setComponents(c,f,m,y).normalize(),s[5].setComponents(l-c,d-f,p-m,b-y).normalize();else if(s[4].setComponents(l-c,d-f,p-m,b-y).normalize(),t===bn)s[5].setComponents(l+c,d+f,p+m,b+y).normalize();else if(t===Zr)s[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=Wd.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hu extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qr=new z,eo=new z,Ll=new Ye,Es=new er,Rr=new gn,zo=new z,Dl=new z;class wc extends dt{constructor(e=new Mt,t=new hu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qr.fromBufferAttribute(t,s-1),eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qr.distanceTo(eo);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;Ll.copy(s).invert(),Es.copy(e.ray).applyMatrix4(Ll);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=u.getX(_),v=u.getX(_+1),x=Cr(this,e,Es,c,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Cr(this,e,Es,c,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=Cr(this,e,Es,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Cr(this,e,Es,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Qr.fromBufferAttribute(a,s),eo.fromBufferAttribute(a,r),t.distanceSqToSegment(Qr,eo,zo,Dl)>n)return;zo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zo);if(!(l<e.near||l>e.far))return{distance:l,point:Dl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Nl=new z,Ul=new z;class Xd extends wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nl.fromBufferAttribute(t,s),Ul.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nl.distanceTo(Ul);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class uu extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fl=new Ye,qa=new er,Pr=new gn,Ir=new z;class Yd extends dt{constructor(e=new Mt,t=new uu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;Fl.copy(s).invert(),qa.copy(e.ray).applyMatrix4(Fl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);Ir.fromBufferAttribute(h,m),Ol(Ir,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ir.fromBufferAttribute(h,g),Ol(Ir,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ol(i,e,t,n,s,r,o){const a=qa.distanceSqToPoint(i);if(a<t){const c=new z;qa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jd extends bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Rt,this.minFilter=Rt,this.generateMipmaps=!1,this.needsUpdate=!0}}class fu extends bt{constructor(e,t,n=bi,s,r,o,a=Rt,c=Rt,l,u=Hs,h=1){if(u!==Hs&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class du extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,s=[],r=[],o=[],a=new z,c=new Ye;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ac extends An{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kd extends Ac{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Lr=new z,ko=new Rc,Ho=new Rc,Vo=new Rc;class Cc extends An{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Lr.subVectors(s[0],s[1]).add(s[0]),l=Lr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ko.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),Ho.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Vo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Ho.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Vo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ko.calc(c),Ho.calc(c),Vo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function $d(i,e){const t=1-i;return t*t*e}function Jd(i,e){return 2*(1-i)*i*e}function Zd(i,e){return i*i*e}function Ls(i,e,t,n){return $d(i,e)+Jd(i,t)+Zd(i,n)}function Qd(i,e){const t=1-i;return t*t*t*e}function ep(i,e){const t=1-i;return 3*t*t*i*e}function tp(i,e){return 3*(1-i)*i*i*e}function np(i,e){return i*i*i*e}function Ds(i,e,t,n,s){return Qd(i,e)+ep(i,t)+tp(i,n)+np(i,s)}class pu extends An{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(e,s.x,r.x,o.x,a.x),Ds(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ip extends An{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(e,s.x,r.x,o.x,a.x),Ds(e,s.y,r.y,o.y,a.y),Ds(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mu extends An{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends An{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends An{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(e,s.x,r.x,o.x),Ls(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xu extends An{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ls(e,s.x,r.x,o.x),Ls(e,s.y,r.y,o.y),Ls(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Bl(a,c.x,l.x,u.x,h.x),Bl(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var to=Object.freeze({__proto__:null,ArcCurve:Kd,CatmullRomCurve3:Cc,CubicBezierCurve:pu,CubicBezierCurve3:ip,EllipseCurve:Ac,LineCurve:mu,LineCurve3:sp,QuadraticBezierCurve:gu,QuadraticBezierCurve3:xu,SplineCurve:_u});class rp extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new to[s.type]().fromJSON(s))}return this}}class Ji extends rp{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new mu(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new gu(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new pu(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _u(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ac(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ri extends Ji{constructor(e){super(e),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ji().fromJSON(s))}return this}}function op(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=yu(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=up(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>u&&(u=d),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return js(r,o,t,a,c,l,0),o}function yu(i,e,t,n,s){let r;if(s===Sp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=zl(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=zl(o/n|0,i[o],i[o+1],r);return r&&rs(r,r.next)&&($s(r),r=r.next),r}function Ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rs(t,t.next)||xt(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function js(i,e,t,n,s,r,o){if(!i)return;!o&&r&&gp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?cp(i,n,s,r):ap(i)){e.push(c.i,i.i,l.i),$s(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=lp(Ti(i),e),js(i,e,t,n,s,r,2)):o===2&&hp(i,e,t,n,s,r):js(Ti(i),e,t,n,s,r,1);break}}}function ap(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Rs(s,a,r,c,o,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(xt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(u,h,f),_=Math.max(a,c,l),m=Math.max(u,h,f),p=Ya(d,g,e,t,n),v=Ya(_,m,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Rs(a,u,c,h,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Rs(a,u,c,h,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Rs(a,u,c,h,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Rs(a,u,c,h,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function lp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!rs(n,s)&&Mu(n,t,t.next,s)&&Ks(n,s)&&Ks(s,n)&&(e.push(n.i,t.i,s.i),$s(t),$s(t.next),t=i=s),t=t.next}while(t!==i);return Ti(t)}function hp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yp(o,a)){let c=Su(o,a);o=Ti(o,o.next),c=Ti(c,c.next),js(o,e,t,n,s,r,0),js(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function up(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=yu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(_p(l))}s.sort(fp);for(let r=0;r<s.length;r++)t=dp(s[r],t);return t}function fp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function dp(i,e){const t=pp(i,e);if(!t)return e;const n=Su(t,i);return Ti(n,n.next),Ti(t,t.next)}function pp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(rs(i,t))return t;do{if(rs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&vu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);Ks(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&mp(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function mp(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function gp(i,e,t,n){let s=i;do s.z===0&&(s.z=Ya(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xp(s)}function xp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ya(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _p(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function vu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Rs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&vu(i,e,t,n,s,r,o,a)}function yp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vp(i,e)&&(Ks(i,e)&&Ks(e,i)&&Mp(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||rs(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rs(i,e){return i.x===e.x&&i.y===e.y}function Mu(i,e,t,n){const s=Nr(xt(i,e,t)),r=Nr(xt(i,e,n)),o=Nr(xt(t,n,i)),a=Nr(xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Dr(i,t,e)||r===0&&Dr(i,n,e)||o===0&&Dr(t,i,n)||a===0&&Dr(t,e,n))}function Dr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Nr(i){return i>0?1:i<0?-1:0}function vp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ks(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Mp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Su(i,e){const t=ja(i.i,i.x,i.y),n=ja(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zl(i,e,t,n){const s=ja(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ja(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class bp{static triangulate(e,t,n=2){return op(e,t,n)}}class tn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return tn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];kl(e),Hl(n,e);let o=e.length;t.forEach(kl);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Hl(n,t[c]);const a=bp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function kl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Pc extends Mt{constructor(e=new ri([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Ep;let x,y=!1,b,E,T,R;p&&(x=p.getSpacedPoints(u),y=!0,f=!1,b=p.computeFrenetFrames(u,!1),E=new z,T=new z,R=new z),f||(m=0,d=0,g=0,_=0);const M=a.extractPoints(l);let S=M.shape;const D=M.holes;if(!tn.isClockWise(S)){S=S.reverse();for(let G=0,q=D.length;G<q;G++){const Q=D[G];tn.isClockWise(Q)&&(D[G]=Q.reverse())}}function H(G){const Q=10000000000000001e-36;let J=G[0];for(let B=1;B<=G.length;B++){const I=B%G.length,oe=G[I],Ee=oe.x-J.x,Ue=oe.y-J.y,N=Ee*Ee+Ue*Ue,w=Math.max(Math.abs(oe.x),Math.abs(oe.y),Math.abs(J.x),Math.abs(J.y)),Z=Q*w*w;if(N<=Z){G.splice(I,1),B--;continue}J=oe}}H(S),D.forEach(H);const Y=D.length,W=S;for(let G=0;G<Y;G++){const q=D[G];S=S.concat(q)}function V(G,q,Q){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(q,Q)}const X=S.length;function F(G,q,Q){let J,B,I;const oe=G.x-q.x,Ee=G.y-q.y,Ue=Q.x-G.x,N=Q.y-G.y,w=oe*oe+Ee*Ee,Z=oe*N-Ee*Ue;if(Math.abs(Z)>Number.EPSILON){const se=Math.sqrt(w),pe=Math.sqrt(Ue*Ue+N*N),le=q.x-Ee/se,Pe=q.y+oe/se,_e=Q.x-N/pe,Ie=Q.y+Ue/pe,De=((_e-le)*N-(Ie-Pe)*Ue)/(oe*N-Ee*Ue);J=le+oe*De-G.x,B=Pe+Ee*De-G.y;const ye=J*J+B*B;if(ye<=2)return new fe(J,B);I=Math.sqrt(ye/2)}else{let se=!1;oe>Number.EPSILON?Ue>Number.EPSILON&&(se=!0):oe<-Number.EPSILON?Ue<-Number.EPSILON&&(se=!0):Math.sign(Ee)===Math.sign(N)&&(se=!0),se?(J=-Ee,B=oe,I=Math.sqrt(w)):(J=oe,B=Ee,I=Math.sqrt(w/2))}return new fe(J/I,B/I)}const ie=[];for(let G=0,q=W.length,Q=q-1,J=G+1;G<q;G++,Q++,J++)Q===q&&(Q=0),J===q&&(J=0),ie[G]=F(W[G],W[Q],W[J]);const he=[];let ue,xe=ie.concat();for(let G=0,q=Y;G<q;G++){const Q=D[G];ue=[];for(let J=0,B=Q.length,I=B-1,oe=J+1;J<B;J++,I++,oe++)I===B&&(I=0),oe===B&&(oe=0),ue[J]=F(Q[J],Q[I],Q[oe]);he.push(ue),xe=xe.concat(ue)}let be;if(m===0)be=tn.triangulateShape(W,D);else{const G=[],q=[];for(let Q=0;Q<m;Q++){const J=Q/m,B=d*Math.cos(J*Math.PI/2),I=g*Math.sin(J*Math.PI/2)+_;for(let oe=0,Ee=W.length;oe<Ee;oe++){const Ue=V(W[oe],ie[oe],I);ne(Ue.x,Ue.y,-B),J===0&&G.push(Ue)}for(let oe=0,Ee=Y;oe<Ee;oe++){const Ue=D[oe];ue=he[oe];const N=[];for(let w=0,Z=Ue.length;w<Z;w++){const se=V(Ue[w],ue[w],I);ne(se.x,se.y,-B),J===0&&N.push(se)}J===0&&q.push(N)}}be=tn.triangulateShape(G,q)}const $=be.length,O=g+_;for(let G=0;G<X;G++){const q=f?V(S[G],xe[G],O):S[G];y?(T.copy(b.normals[0]).multiplyScalar(q.x),E.copy(b.binormals[0]).multiplyScalar(q.y),R.copy(x[0]).add(T).add(E),ne(R.x,R.y,R.z)):ne(q.x,q.y,0)}for(let G=1;G<=u;G++)for(let q=0;q<X;q++){const Q=f?V(S[q],xe[q],O):S[q];y?(T.copy(b.normals[G]).multiplyScalar(Q.x),E.copy(b.binormals[G]).multiplyScalar(Q.y),R.copy(x[G]).add(T).add(E),ne(R.x,R.y,R.z)):ne(Q.x,Q.y,h/u*G)}for(let G=m-1;G>=0;G--){const q=G/m,Q=d*Math.cos(q*Math.PI/2),J=g*Math.sin(q*Math.PI/2)+_;for(let B=0,I=W.length;B<I;B++){const oe=V(W[B],ie[B],J);ne(oe.x,oe.y,h+Q)}for(let B=0,I=D.length;B<I;B++){const oe=D[B];ue=he[B];for(let Ee=0,Ue=oe.length;Ee<Ue;Ee++){const N=V(oe[Ee],ue[Ee],J);y?ne(N.x,N.y+x[u-1].y,x[u-1].x+Q):ne(N.x,N.y,h+Q)}}}C(),A();function C(){const G=s.length/3;if(f){let q=0,Q=X*q;for(let J=0;J<$;J++){const B=be[J];k(B[2]+Q,B[1]+Q,B[0]+Q)}q=u+m*2,Q=X*q;for(let J=0;J<$;J++){const B=be[J];k(B[0]+Q,B[1]+Q,B[2]+Q)}}else{for(let q=0;q<$;q++){const Q=be[q];k(Q[2],Q[1],Q[0])}for(let q=0;q<$;q++){const Q=be[q];k(Q[0]+X*u,Q[1]+X*u,Q[2]+X*u)}}n.addGroup(G,s.length/3-G,0)}function A(){const G=s.length/3;let q=0;j(W,q),q+=W.length;for(let Q=0,J=D.length;Q<J;Q++){const B=D[Q];j(B,q),q+=B.length}n.addGroup(G,s.length/3-G,1)}function j(G,q){let Q=G.length;for(;--Q>=0;){const J=Q;let B=Q-1;B<0&&(B=G.length-1);for(let I=0,oe=u+m*2;I<oe;I++){const Ee=X*I,Ue=X*(I+1),N=q+J+Ee,w=q+B+Ee,Z=q+B+Ue,se=q+J+Ue;re(N,w,Z,se)}}}function ne(G,q,Q){c.push(G),c.push(q),c.push(Q)}function k(G,q,Q){de(G),de(q),de(Q);const J=s.length/3,B=v.generateTopUV(n,s,J-3,J-2,J-1);L(B[0]),L(B[1]),L(B[2])}function re(G,q,Q,J){de(G),de(q),de(J),de(q),de(Q),de(J);const B=s.length/3,I=v.generateSideWallUV(n,s,B-6,B-3,B-2,B-1);L(I[0]),L(I[1]),L(I[3]),L(I[1]),L(I[2]),L(I[3])}function de(G){s.push(c[G*3+0]),s.push(c[G*3+1]),s.push(c[G*3+2])}function L(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new to[s.type]().fromJSON(s)),new Pc(n,e.options)}}const Ep={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new fe(r,o),new fe(a,c),new fe(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new fe(o,1-c),new fe(l,1-h),new fe(f,1-g),new fe(_,1-p)]:[new fe(a,1-c),new fe(u,1-h),new fe(d,1-g),new fe(m,1-p)]}};function Tp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oo extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let x=0;x<l;x++){const y=x*h-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,y=v+l*(p+1),b=v+1+l*(p+1),E=v+1+l*p;d.push(x,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ic extends Mt{constructor(e=new ri([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(o,2));function l(u){const h=s.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;tn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];tn.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=tn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],x=v[0]+h,y=v[1]+h,b=v[2]+h;n.push(x,y,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return wp(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Ic(n,e.curveSegments)}}function wp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class fs extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new z,f=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const E=b/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(E+y,1-x),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=u[p][v+1],y=u[p][v],b=u[p+1][v],E=u[p+1][v+1];(p!==0||o>0)&&d.push(x,y,E),(p!==n-1||c<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends Mt{constructor(e=new xu(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,c=new z,l=new fe;let u=new z;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),p()}function m(x){u=e.getPointAt(x/t,u);const y=o.normals[x],b=o.binormals[x];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,R=Math.sin(T),M=-Math.cos(T);c.x=M*y.x+R*b.x,c.y=M*y.y+R*b.y,c.z=M*y.z+R*b.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=s;y++){const b=(s+1)*(x-1)+(y-1),E=(s+1)*x+(y-1),T=(s+1)*x+y,R=(s+1)*(x-1)+y;g.push(b,E,R),g.push(E,T,R)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=s;y++)l.x=x/t,l.y=y/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ao(new to[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hn extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rn extends Hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ap extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rp extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ip(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function bu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class tr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Lp extends tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nl:r=e,a=2*t-n;break;case il:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nl:o=e,c=2*n-t;break;case il:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+v*o[l+b]+x*o[c+b]+y*o[h+b];return r}}class Dp extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class Np extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Np(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Pp(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Ws;class ds extends xn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Gs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Eu extends xn{constructor(e,t,n,s){super(e,t,n,s)}}Eu.prototype.ValueTypeName="color";class os extends xn{constructor(e,t,n,s){super(e,t,n,s)}}os.prototype.ValueTypeName="number";class Up extends tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ai.slerpFlat(r,0,o,l-a,o,l,c);return r}}class as extends xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Up(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends xn{constructor(e,t,n){super(e,t,n)}}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Gs;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class cs extends xn{constructor(e,t,n,s){super(e,t,n,s)}}cs.prototype.ValueTypeName="vector";class Fp{constructor(e="",t=-1,n=[],s=Of){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bp(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(xn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Ip(c);c=Vl(c,1,u),l=Vl(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new os(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];bu(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new os(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(cs,d+".position",f,"pos",s),n(as,d+".quaternion",f,"rot",s),n(cs,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Op(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return Eu;case"quaternion":return as;case"bool":case"boolean":return ds;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Bp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Op(i.type);if(i.times===void 0){const t=[],n=[];bu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Bn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zp{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const kp=new zp;class Ri{constructor(e){this.manager=e!==void 0?e:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class Hp extends Error{constructor(e,t){super(e),this.response=t}}class Lc extends Ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:s});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Nn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,T=u.length;E<T;E++){const R=u[E];R.onProgress&&R.onProgress(b)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Hp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Bn.add(`file:${e}`,l);const u=Nn[e];delete Nn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Wi=new WeakMap;class Vp extends Ri{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Wi.get(o);h===void 0&&(h=[],Wi.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=qs("img");function c(){u(),t&&t(this);const h=Wi.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Wi.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Bn.remove(`image:${e}`);const f=Wi.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Wi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Gp extends Ri{constructor(e){super(e)}load(e,t,n,s){const r=new bt,o=new Vp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class co extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tu extends co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Go=new Ye,Gl=new z,Wl=new z;class Dc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tc,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),Wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wl),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wp extends Dc{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xp extends co{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xl=new Ye,Ts=new z,Wo=new z;class qp extends Dc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),Wo.copy(n.position),Wo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wo),n.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,n.coordinateSystem,n.reversedDepth)}}class wu extends co{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nr extends ru{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yp extends Dc{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class no extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Yp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ns{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xo=new WeakMap;class jp extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Xo.has(o)===!0)s&&s(Xo.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Xo.set(c,l),Bn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Kp extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nc="\\[\\]\\.:\\/",$p=new RegExp("["+Nc+"]","g"),Uc="[^"+Nc+"]",Jp="[^"+Nc.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Qp=/(WCOD+)?/.source.replace("WCOD",Jp),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),nm=new RegExp("^"+Zp+Qp+em+tm+"$"),im=["material","materials","bones","map"];class sm{constructor(e,t,n){const s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($p,"")}static parseTrackName(e){const t=nm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);im.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=sm;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ql=new Ye;class Au{constructor(e,t,n=0,s=1/0){this.ray=new er(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ql.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ql),this}intersectObject(e,t=!0,n=[]){return Ka(e,this,n,t),n.sort(Yl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ka(e[s],this,n,t);return n.sort(Yl),n}}function Yl(i,e){return i.distance-e.distance}function Ka(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ka(r[o],e,t,!0)}}const jl=new fe;class rm{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class pi{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ji,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let x=0,y=p.length;x<y;x++){const b=p[x],E=new ri;E.curves=b.curves,v.push(E)}return v}function n(p,v){const x=v.length;let y=!1;for(let b=x-1,E=0;E<x;b=E++){let T=v[b],R=v[E],M=R.x-T.x,S=R.y-T.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(T=v[E],M=-M,R=v[b],S=-S),p.y<T.y||p.y>R.y)continue;if(p.y===T.y){if(p.x===T.x)return!0}else{const D=S*(p.x-T.x)-M*(p.y-T.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==T.y)continue;if(R.x<=p.x&&p.x<=T.x||T.x<=p.x&&p.x<=R.x)return!0}}return y}const s=tn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new ri,c.curves=a.curves,l.push(c),l;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,_;f[g]=void 0,d[g]=[];for(let p=0,v=r.length;p<v;p++)a=r[p],_=a.getPoints(),o=s(_),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new ri,p:_},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,v=0;for(let x=0,y=f.length;x<y;x++)h[x]=[];for(let x=0,y=f.length;x<y;x++){const b=d[x];for(let E=0;E<b.length;E++){const T=b[E];let R=!0;for(let M=0;M<f.length;M++)n(T.p,f[M].p)&&(x!==M&&v++,R?(R=!1,h[M].push(T)):p=!0);R&&h[x].push(T)}}v>0&&p===!1&&(d=h)}let m;for(let p=0,v=f.length;p<v;p++){c=f[p].s,l.push(c),m=d[p];for(let x=0,y=m.length;x<y;x++)c.holes.push(m[x].h)}return l}}function Kl(i,e,t,n){const s=om(n);switch(t){case jh:return i*e;case pc:return i*e/s.components*s.byteLength;case mc:return i*e/s.components*s.byteLength;case $h:return i*e*2/s.components*s.byteLength;case gc:return i*e*2/s.components*s.byteLength;case Kh:return i*e*3/s.components*s.byteLength;case en:return i*e*4/s.components*s.byteLength;case xc:return i*e*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case _a:return Math.max(i,16)*Math.max(e,8)/4;case ma:case xa:return Math.max(i,8)*Math.max(e,8)/2;case ya:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ha:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(i){switch(i){case Tn:case Wh:return{byteLength:1,components:1};case zs:case Xh:case Qs:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case bi:case uc:case un:return{byteLength:4,components:1};case qh:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);function Ru(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function am(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Im=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,w0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:cm,alphahash_pars_fragment:lm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:fm,alphatest_pars_fragment:dm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:xm,begin_vertex:_m,beginnormal_vertex:ym,bsdfs:vm,iridescence_fragment:Mm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:wm,color_fragment:Am,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Pm,common:Im,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:km,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:jm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:$m,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Zm,lights_pars_begin:Qm,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:yg,morphinstance_vertex:vg,morphcolor_vertex:Mg,morphnormal_vertex:Sg,morphtarget_pars_vertex:bg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Ng,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:zg,dithering_pars_fragment:kg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:jg,skinning_vertex:Kg,skinnormal_vertex:$g,specularmap_fragment:Jg,specularmap_pars_fragment:Zg,tonemapping_fragment:Qg,tonemapping_pars_fragment:e0,transmission_fragment:t0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:c0,backgroundCube_vert:l0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:f0,depth_vert:d0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:x0,equirect_frag:_0,linedashed_vert:y0,linedashed_frag:v0,meshbasic_vert:M0,meshbasic_frag:S0,meshlambert_vert:b0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:w0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:I0,meshphysical_frag:L0,meshtoon_vert:D0,meshtoon_frag:N0,points_vert:U0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:k0},we={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Mn={basic:{uniforms:Dt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dt([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dt([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dt([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Dt([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Dt([we.lights,we.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Mn.physical={uniforms:Dt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Fr={r:0,b:0,g:0},mi=new sn,H0=new Ye;function V0(i,e,t,n,s,r,o){const a=new ze(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const b=g(x);b===null?p(a,c):b&&b.isColor&&(p(b,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===ro)?(u===void 0&&(u=new tt(new us(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ss(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),mi.copy(y.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(mi)),u.material.toneMapped=et.getTransfer(b.colorSpace)!==ct,(h!==b||f!==b.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new tt(new oo(2,2),new oi({name:"BackgroundMaterial",uniforms:ss(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Fr,su(i)),n.buffers.color.setClear(Fr.r,Fr.g,Fr.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:v}}function G0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,D,U,H,Y){let W=!1;const V=h(H,U,D);r!==V&&(r=V,l(r.object)),W=d(S,H,U,Y),W&&g(S,H,U,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(S,D,U,H),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,D,U){const H=U.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let W=Y[D.id];W===void 0&&(W={},Y[D.id]=W);let V=W[H];return V===void 0&&(V=f(c()),W[H]=V),V}function f(S){const D=[],U=[],H=[];for(let Y=0;Y<t;Y++)D[Y]=0,U[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:H,object:S,attributes:{},index:null}}function d(S,D,U,H){const Y=r.attributes,W=D.attributes;let V=0;const X=U.getAttributes();for(const F in X)if(X[F].location>=0){const he=Y[F];let ue=W[F];if(ue===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),he===void 0||he.attribute!==ue||ue&&he.data!==ue.data)return!0;V++}return r.attributesNum!==V||r.index!==H}function g(S,D,U,H){const Y={},W=D.attributes;let V=0;const X=U.getAttributes();for(const F in X)if(X[F].location>=0){let he=W[F];he===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const ue={};ue.attribute=he,he&&he.data&&(ue.data=he.data),Y[F]=ue,V++}r.attributes=Y,r.attributesNum=V,r.index=H}function _(){const S=r.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const U=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;U[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),Y[S]!==D&&(i.vertexAttribDivisor(S,D),Y[S]=D)}function v(){const S=r.newAttributes,D=r.enabledAttributes;for(let U=0,H=D.length;U<H;U++)D[U]!==S[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function x(S,D,U,H,Y,W,V){V===!0?i.vertexAttribIPointer(S,D,U,Y,W):i.vertexAttribPointer(S,D,U,H,Y,W)}function y(S,D,U,H){_();const Y=H.attributes,W=U.getAttributes(),V=D.defaultAttributeValues;for(const X in W){const F=W[X];if(F.location>=0){let ie=Y[X];if(ie===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),ie!==void 0){const he=ie.normalized,ue=ie.itemSize,xe=e.get(ie);if(xe===void 0)continue;const be=xe.buffer,$=xe.type,O=xe.bytesPerElement,C=$===i.INT||$===i.UNSIGNED_INT||ie.gpuType===uc;if(ie.isInterleavedBufferAttribute){const A=ie.data,j=A.stride,ne=ie.offset;if(A.isInstancedInterleavedBuffer){for(let k=0;k<F.locationSize;k++)p(F.location+k,A.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let k=0;k<F.locationSize;k++)m(F.location+k);i.bindBuffer(i.ARRAY_BUFFER,be);for(let k=0;k<F.locationSize;k++)x(F.location+k,ue/F.locationSize,$,he,j*O,(ne+ue/F.locationSize*k)*O,C)}else{if(ie.isInstancedBufferAttribute){for(let A=0;A<F.locationSize;A++)p(F.location+A,ie.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let A=0;A<F.locationSize;A++)m(F.location+A);i.bindBuffer(i.ARRAY_BUFFER,be);for(let A=0;A<F.locationSize;A++)x(F.location+A,ue/F.locationSize,$,he,ue*O,ue/F.locationSize*A*O,C)}}else if(V!==void 0){const he=V[X];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(F.location,he);break;case 3:i.vertexAttrib3fv(F.location,he);break;case 4:i.vertexAttrib4fv(F.location,he);break;default:i.vertexAttrib1fv(F.location,he)}}}}v()}function b(){R();for(const S in n){const D=n[S];for(const U in D){const H=D[U];for(const Y in H)u(H[Y].object),delete H[Y];delete D[U]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const U in D){const H=D[U];for(const Y in H)u(H[Y].object),delete H[Y];delete D[U]}delete n[S.id]}function T(S){for(const D in n){const U=n[D];if(U[S.id]===void 0)continue;const H=U[S.id];for(const Y in H)u(H[Y].object),delete H[Y];delete U[S.id]}}function R(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function W0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function X0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==en&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Tn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==un&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:b,maxSamples:E}}function q0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new $n,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;c.value=y,y=u(g,f,x,d);for(let b=0;b!==x;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Y0(i){let e=new WeakMap;function t(o,a){return a===da?o.mapping=es:a===pa&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===da||a===pa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ud(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ji=4,$l=[.125,.215,.35,.446,.526,.582],Mi=20,qo=new nr,Jl=new ze;let Yo=null,jo=0,Ko=0,$o=!1;const yi=(1+Math.sqrt(5))/2,Xi=1/yi,Zl=[new z(-yi,Xi,0),new z(yi,Xi,0),new z(-Xi,0,yi),new z(Xi,0,yi),new z(0,yi,-Xi),new z(0,yi,Xi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],j0=new z;class $a{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=j0}=r;Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,jo,Ko),this._renderer.xr.enabled=$o,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Qs,format:en,colorSpace:Ot,depthBuffer:!1},s=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(r)),this._blurMaterial=$0(r,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,s,r){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Jl),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new ti({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new tt(new us,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(Jl),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));const b=this._cubeSize;Or(s,y*b,x>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===es||e.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zl[(s-r-1)%Zl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let v=0;for(let T=0;T<Mi;++T){const R=T/_,M=Math.exp(-R*R/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[s],b=3*y*(s>x-ji?s-x+ji:0),E=4*(this._cubeSize-y);Or(t,b,E,3*y,2*y),c.setRenderTarget(t),c.render(h,qo)}}function K0(i){const e=[],t=[],n=[];let s=i;const r=i-ji+1+$l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ji?c=$l[o-i+ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,R=E>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(M,_*g*E),x.set(f,m*g*E);const S=[E,E,E,E,E,E];y.set(S,p*g*E)}const b=new Mt;b.setAttribute("position",new yt(v,_)),b.setAttribute("uv",new yt(x,m)),b.setAttribute("faceIndex",new yt(y,p)),e.push(b),s>ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(i,e,t){const n=new Ei(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $0(i,e,t){const n=new Float32Array(Mi),s=new z(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function eh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function th(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===da||c===pa,u=c===es||c===ts;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $a(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new $a(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const b=v[x+0],E=v[x+1],T=v[x+2];f.push(b,E,E,T,T,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const b=x+0,E=x+1,T=x+2;f.push(b,E,E,T,T,b)}}else return;const m=new(Qh(f)?iu:nu)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function e1(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function t1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function n1(i,e,t){const n=new WeakMap,s=new Qe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*E*4*h),R=new eu(T,b,E,h);R.type=un,R.needsUpdate=!0;const M=y*4;for(let D=0;D<h;D++){const U=p[D],H=v[D],Y=x[D],W=b*E*4*D;for(let V=0;V<U.count;V++){const X=V*M;g===!0&&(s.fromBufferAttribute(U,V),T[W+X+0]=s.x,T[W+X+1]=s.y,T[W+X+2]=s.z,T[W+X+3]=0),_===!0&&(s.fromBufferAttribute(H,V),T[W+X+4]=s.x,T[W+X+5]=s.y,T[W+X+6]=s.z,T[W+X+7]=0),m===!0&&(s.fromBufferAttribute(Y,V),T[W+X+8]=s.x,T[W+X+9]=s.y,T[W+X+10]=s.z,T[W+X+11]=Y.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new fe(b,E)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function i1(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Cu=new bt,nh=new fu(1,1),Pu=new eu,Iu=new _d,Lu=new ou,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function s1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function r1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function o1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function c1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;ah.set(n),i.uniformMatrix2fv(this.addr,!1,ah),Tt(t,n)}}function l1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;oh.set(n),i.uniformMatrix3fv(this.addr,!1,oh),Tt(t,n)}}function h1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;rh.set(n),i.uniformMatrix4fv(this.addr,!1,rh),Tt(t,n)}}function u1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function f1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function m1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function x1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function y1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=Zh,r=nh):r=Cu,t.setTexture2D(e||r,s)}function v1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Iu,s)}function M1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Lu,s)}function S1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pu,s)}function b1(i){switch(i){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return c1;case 35675:return l1;case 35676:return h1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return x1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return S1}}function E1(i,e){i.uniform1fv(this.addr,e)}function T1(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function w1(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function A1(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function R1(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function C1(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function P1(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function I1(i,e){i.uniform1iv(this.addr,e)}function L1(i,e){i.uniform2iv(this.addr,e)}function D1(i,e){i.uniform3iv(this.addr,e)}function N1(i,e){i.uniform4iv(this.addr,e)}function U1(i,e){i.uniform1uiv(this.addr,e)}function F1(i,e){i.uniform2uiv(this.addr,e)}function O1(i,e){i.uniform3uiv(this.addr,e)}function B1(i,e){i.uniform4uiv(this.addr,e)}function z1(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cu,r[o])}function k1(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Iu,r[o])}function H1(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lu,r[o])}function V1(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pu,r[o])}function G1(i){switch(i){case 5126:return E1;case 35664:return T1;case 35665:return w1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return N1;case 5125:return U1;case 36294:return F1;case 36295:return O1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}class W1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b1(t.type)}}class X1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=G1(t.type)}}class q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function ch(i,e){i.seq.push(e),i.map[e.id]=e}function Y1(i,e,t){const n=i.name,s=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),o=Jo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ch(t,l===void 0?new W1(a,i,e):new X1(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new q1(a),ch(t,h)),t=h}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Y1(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j1=37297;let K1=0;function $1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const hh=new Xe;function J1(i){et._getMatrix(hh,et.workingColorSpace,i);const e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Jr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$1(i.getShaderSource(e),a)}else return r}function Z1(i,e){const t=J1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Q1(i,e){let t;switch(e){case Pf:t="Linear";break;case If:t="Reinhard";break;case Lf:t="Cineon";break;case Hh:t="ACESFilmic";break;case Nf:t="AgX";break;case Uf:t="Neutral";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new z;function ex(){et.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function nx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Cs(i){return i!==""}function fh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(sx,ox)}const rx=new Map;function ox(i,e){let t=Ke[e];if(t===void 0){const n=rx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(i){return i.replace(ax,cx)}function cx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ts&&(e="ENVMAP_MODE_REFRACTION"),e}function fx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hc:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function dx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function px(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=lx(t),l=hx(t),u=ux(t),h=fx(t),f=dx(t),d=tx(t),g=nx(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cs).join(`
`),p.length>0&&(p+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),p=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Ke.tonemapping_pars_fragment:"",t.toneMapping!==si?Q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Z1("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Ja(o),o=fh(o,t),o=dh(o,t),a=Ja(a),a=fh(a,t),a=dh(a,t),o=ph(o),a=ph(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,b=lh(s,s.VERTEX_SHADER,x),E=lh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,b),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(D){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(b)||"",Y=s.getShaderInfoLog(E)||"",W=U.trim(),V=H.trim(),X=Y.trim();let F=!0,ie=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{const he=uh(s,b,"vertex"),ue=uh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+he+`
`+ue)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||X==="")&&(ie=!1);ie&&(D.diagnostics={runnable:F,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(b),s.deleteShader(E),R=new Xr(s,_),M=ix(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,j1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xx(e),t.set(e,n)),n}}class xx{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function _x(i,e,t,n,s,r,o){const a=new Mc,c=new gx,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,U,H){const Y=U.fog,W=H.geometry,V=M.isMeshStandardMaterial?U.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),F=X&&X.mapping===ro?X.image.height:null,ie=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ue=he!==void 0?he.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let be,$,O,C;if(ie){const it=Mn[ie];be=it.vertexShader,$=it.fragmentShader}else be=M.vertexShader,$=M.fragmentShader,c.update(M),O=c.getVertexShaderID(M),C=c.getFragmentShaderID(M);const A=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ne=H.isInstancedMesh===!0,k=H.isBatchedMesh===!0,re=!!M.map,de=!!M.matcap,L=!!X,G=!!M.aoMap,q=!!M.lightMap,Q=!!M.bumpMap,J=!!M.normalMap,B=!!M.displacementMap,I=!!M.emissiveMap,oe=!!M.metalnessMap,Ee=!!M.roughnessMap,Ue=M.anisotropy>0,N=M.clearcoat>0,w=M.dispersion>0,Z=M.iridescence>0,se=M.sheen>0,pe=M.transmission>0,le=Ue&&!!M.anisotropyMap,Pe=N&&!!M.clearcoatMap,_e=N&&!!M.clearcoatNormalMap,Ie=N&&!!M.clearcoatRoughnessMap,De=Z&&!!M.iridescenceMap,ye=Z&&!!M.iridescenceThicknessMap,Ae=se&&!!M.sheenColorMap,Ge=se&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Re=!!M.specularColorMap,je=!!M.specularIntensityMap,K=pe&&!!M.transmissionMap,Se=pe&&!!M.thicknessMap,Te=!!M.gradientMap,Ne=!!M.alphaMap,ve=M.alphaTest>0,me=!!M.alphaHash,Oe=!!M.extensions;let qe=si;M.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(qe=i.toneMapping);const ut={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:$,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:C,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:k,batchingColor:k&&H._colorsTexture!==null,instancing:ne,instancingColor:ne&&H.instanceColor!==null,instancingMorph:ne&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ot,alphaToCoverage:!!M.alphaToCoverage,map:re,matcap:de,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:F,aoMap:G,lightMap:q,bumpMap:Q,normalMap:J,displacementMap:f&&B,emissiveMap:I,normalMapObjectSpace:J&&M.normalMapType===Hf,normalMapTangentSpace:J&&M.normalMapType===_c,metalnessMap:oe,roughnessMap:Ee,anisotropy:Ue,anisotropyMap:le,clearcoat:N,clearcoatMap:Pe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ie,dispersion:w,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:ye,sheen:se,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Re,specularIntensityMap:je,transmission:pe,transmissionMap:K,thicknessMap:Se,gradientMap:Te,opaque:M.transparent===!1&&M.blending===Ki&&M.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:me,combine:M.combine,mapUv:re&&_(M.map.channel),aoMapUv:G&&_(M.aoMap.channel),lightMapUv:q&&_(M.lightMap.channel),bumpMapUv:Q&&_(M.bumpMap.channel),normalMapUv:J&&_(M.normalMap.channel),displacementMapUv:B&&_(M.displacementMap.channel),emissiveMapUv:I&&_(M.emissiveMap.channel),metalnessMapUv:oe&&_(M.metalnessMap.channel),roughnessMapUv:Ee&&_(M.roughnessMap.channel),anisotropyMapUv:le&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(M.sheenRoughnessMap.channel),specularMapUv:Be&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:je&&_(M.specularIntensityMap.channel),transmissionMapUv:K&&_(M.transmissionMap.channel),thicknessMapUv:Se&&_(M.thicknessMap.channel),alphaMapUv:Ne&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(J||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(re||Ne),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:j,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:I&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||k)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let D;if(S){const U=Mn[S];D=Id.clone(U.uniforms)}else D=M.uniforms;return D}function b(M,S){let D;for(let U=0,H=u.length;U<H;U++){const Y=u[U];if(Y.cacheKey===S){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new px(i,S,M,r),u.push(D)),D}function E(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:R}}function yx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||vx),n.length>1&&n.sort(f||gh),s.length>1&&s.sort(f||gh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Mx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new xh,i.set(n,[o])):s>=r.length?(o=new xh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ex=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wx(i){const e=new Sx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,r=new Ye,o=new Ye;function a(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,b=0,E=0,T=0;l.sort(Tx);for(let M=0,S=l.length;M<S;M++){const D=l[M],U=D.color,H=D.intensity,Y=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*H,h+=U.g*H,f+=U.b*H;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],H);T++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,F=t.get(D);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=V,d++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(U).multiplyScalar(H),V.distance=Y,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const X=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=X.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=W,y++}_++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(U).multiplyScalar(H),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const X=D.shadow,F=t.get(D);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(H),V.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==b||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=b,R.numLightProbes=T,n.version=Ex++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _h(i){const e=new wx(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ax(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _h(i),e.set(s,[a])):r>=o.length?(a=new _h(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Px(i,e,t){let n=new Tc;const s=new fe,r=new fe,o=new Qe,a=new Rp({depthPacking:kf}),c=new Cp,l={},u=t.maxTextureSize,h={[En]:Ft,[Ft]:En,[ln]:ln},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ii),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==Un&&this.type===Un,Y=p===Un&&this.type!==Un;for(let W=0,V=E.length;W<V;W++){const X=E[W],F=X.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ie=F.getFrameExtents();if(s.multiply(ie),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,F.mapSize.y=r.y)),F.map===null||H===!0||Y===!0){const ue=this.type!==Un?{minFilter:Rt,magFilter:Rt}:{};F.map!==null&&F.map.dispose(),F.map=new Ei(s.x,s.y,ue),F.map.texture.name=X.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const he=F.getViewportCount();for(let ue=0;ue<he;ue++){const xe=F.getViewport(ue);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),U.viewport(o),F.updateMatrices(X,ue),n=F.getFrustum(),y(T,R,F.camera,X,this.type)}F.isPointLightShadow!==!0&&this.type===Un&&v(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,D)};function v(E,T){const R=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ei(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,R,d,_,null)}function x(E,T,R,M){let S=null;const D=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=R.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=S.uuid,H=T.uuid;let Y=l[U];Y===void 0&&(Y={},l[U]=Y);let W=Y[H];W===void 0&&(W=S.clone(),Y[H]=W,T.addEventListener("dispose",b)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Un?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=R}return S}function y(E,T,R,M,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Un)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const H=e.update(E),Y=E.material;if(Array.isArray(Y)){const W=H.groups;for(let V=0,X=W.length;V<X;V++){const F=W[V],ie=Y[F.materialIndex];if(ie&&ie.visible){const he=x(E,ie,M,S);E.onBeforeShadow(i,E,T,R,H,he,F),i.renderBufferDirect(R,null,H,he,E,F),E.onAfterShadow(i,E,T,R,H,he,F)}}}else if(Y.visible){const W=x(E,Y,M,S);E.onBeforeShadow(i,E,T,R,H,W,null),i.renderBufferDirect(R,null,H,W,E,null),E.onAfterShadow(i,E,T,R,H,W,null)}}const U=E.children;for(let H=0,Y=U.length;H<Y;H++)y(U[H],T,R,M,S)}function b(E){E.target.removeEventListener("dispose",b);for(const R in l){const M=l[R],S=E.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Ix={[oa]:aa,[ca]:ua,[la]:fa,[Qi]:ha,[aa]:oa,[ua]:ca,[fa]:la,[ha]:Qi};function Lx(i,e){function t(){let K=!1;const Se=new Qe;let Te=null;const Ne=new Qe(0,0,0,0);return{setMask:function(ve){Te!==ve&&!K&&(i.colorMask(ve,ve,ve,ve),Te=ve)},setLocked:function(ve){K=ve},setClear:function(ve,me,Oe,qe,ut){ut===!0&&(ve*=qe,me*=qe,Oe*=qe),Se.set(ve,me,Oe,qe),Ne.equals(Se)===!1&&(i.clearColor(ve,me,Oe,qe),Ne.copy(Se))},reset:function(){K=!1,Te=null,Ne.set(-1,0,0,0)}}}function n(){let K=!1,Se=!1,Te=null,Ne=null,ve=null;return{setReversed:function(me){if(Se!==me){const Oe=e.get("EXT_clip_control");me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Se=me;const qe=ve;ve=null,this.setClear(qe)}},getReversed:function(){return Se},setTest:function(me){me?A(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(me){Te!==me&&!K&&(i.depthMask(me),Te=me)},setFunc:function(me){if(Se&&(me=Ix[me]),Ne!==me){switch(me){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=me}},setLocked:function(me){K=me},setClear:function(me){ve!==me&&(Se&&(me=1-me),i.clearDepth(me),ve=me)},reset:function(){K=!1,Te=null,Ne=null,ve=null,Se=!1}}}function s(){let K=!1,Se=null,Te=null,Ne=null,ve=null,me=null,Oe=null,qe=null,ut=null;return{setTest:function(it){K||(it?A(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(it){Se!==it&&!K&&(i.stencilMask(it),Se=it)},setFunc:function(it,Rn,_n){(Te!==it||Ne!==Rn||ve!==_n)&&(i.stencilFunc(it,Rn,_n),Te=it,Ne=Rn,ve=_n)},setOp:function(it,Rn,_n){(me!==it||Oe!==Rn||qe!==_n)&&(i.stencilOp(it,Rn,_n),me=it,Oe=Rn,qe=_n)},setLocked:function(it){K=it},setClear:function(it){ut!==it&&(i.clearStencil(it),ut=it)},reset:function(){K=!1,Se=null,Te=null,Ne=null,ve=null,me=null,Oe=null,qe=null,ut=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,b=null,E=null,T=new ze(0,0,0),R=0,M=!1,S=null,D=null,U=null,H=null,Y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(F)[1]),V=X>=1):F.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),V=X>=2);let ie=null,he={};const ue=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),be=new Qe().fromArray(ue),$=new Qe().fromArray(xe);function O(K,Se,Te,Ne){const ve=new Uint8Array(4),me=i.createTexture();i.bindTexture(K,me),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Te;Oe++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return me}const C={};C[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(i.DEPTH_TEST),o.setFunc(Qi),Q(!1),J($c),A(i.CULL_FACE),G(ii);function A(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function j(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function ne(K,Se){return h[K]!==Se?(i.bindFramebuffer(K,Se),h[K]=Se,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function k(K,Se){let Te=d,Ne=!1;if(K){Te=f.get(Se),Te===void 0&&(Te=[],f.set(Se,Te));const ve=K.textures;if(Te.length!==ve.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Oe=ve.length;me<Oe;me++)Te[me]=i.COLOR_ATTACHMENT0+me;Te.length=ve.length,Ne=!0}}else Te[0]!==i.BACK&&(Te[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Te)}function re(K){return g!==K?(i.useProgram(K),g=K,!0):!1}const de={[vi]:i.FUNC_ADD,[uf]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};de[df]=i.MIN,de[pf]=i.MAX;const L={[mf]:i.ZERO,[gf]:i.ONE,[xf]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[bf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[wf]:i.CONSTANT_ALPHA,[Af]:i.ONE_MINUS_CONSTANT_ALPHA};function G(K,Se,Te,Ne,ve,me,Oe,qe,ut,it){if(K===ii){_===!0&&(j(i.BLEND),_=!1);return}if(_===!1&&(A(i.BLEND),_=!0),K!==hf){if(K!==m||it!==M){if((p!==vi||y!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,y=vi),it)switch(K){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFunc(i.ONE,i.ONE);break;case Zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,x=null,b=null,E=null,T.set(0,0,0),R=0,m=K,M=it}return}ve=ve||Se,me=me||Te,Oe=Oe||Ne,(Se!==p||ve!==y)&&(i.blendEquationSeparate(de[Se],de[ve]),p=Se,y=ve),(Te!==v||Ne!==x||me!==b||Oe!==E)&&(i.blendFuncSeparate(L[Te],L[Ne],L[me],L[Oe]),v=Te,x=Ne,b=me,E=Oe),(qe.equals(T)===!1||ut!==R)&&(i.blendColor(qe.r,qe.g,qe.b,ut),T.copy(qe),R=ut),m=K,M=!1}function q(K,Se){K.side===ln?j(i.CULL_FACE):A(i.CULL_FACE);let Te=K.side===Ft;Se&&(Te=!Te),Q(Te),K.blending===Ki&&K.transparent===!1?G(ii):G(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);const Ne=K.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),I(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?A(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(K){S!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),S=K)}function J(K){K!==af?(A(i.CULL_FACE),K!==D&&(K===$c?i.cullFace(i.BACK):K===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),D=K}function B(K){K!==U&&(V&&i.lineWidth(K),U=K)}function I(K,Se,Te){K?(A(i.POLYGON_OFFSET_FILL),(H!==Se||Y!==Te)&&(i.polygonOffset(Se,Te),H=Se,Y=Te)):j(i.POLYGON_OFFSET_FILL)}function oe(K){K?A(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Ee(K){K===void 0&&(K=i.TEXTURE0+W-1),ie!==K&&(i.activeTexture(K),ie=K)}function Ue(K,Se,Te){Te===void 0&&(ie===null?Te=i.TEXTURE0+W-1:Te=ie);let Ne=he[Te];Ne===void 0&&(Ne={type:void 0,texture:void 0},he[Te]=Ne),(Ne.type!==K||Ne.texture!==Se)&&(ie!==Te&&(i.activeTexture(Te),ie=Te),i.bindTexture(K,Se||C[K]),Ne.type=K,Ne.texture=Se)}function N(){const K=he[ie];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function se(){try{i.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pe(){try{i.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _e(){try{i.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ie(){try{i.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function De(){try{i.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{i.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(K){be.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),be.copy(K))}function Ge(K){$.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),$.copy(K))}function Be(K,Se){let Te=l.get(Se);Te===void 0&&(Te=new WeakMap,l.set(Se,Te));let Ne=Te.get(K);Ne===void 0&&(Ne=i.getUniformBlockIndex(Se,K.name),Te.set(K,Ne))}function Re(K,Se){const Ne=l.get(Se).get(K);c.get(Se)!==Ne&&(i.uniformBlockBinding(Se,Ne,K.__bindingPointIndex),c.set(Se,Ne))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,he={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,b=null,E=null,T=new ze(0,0,0),R=0,M=!1,S=null,D=null,U=null,H=null,Y=null,be.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:A,disable:j,bindFramebuffer:ne,drawBuffers:k,useProgram:re,setBlending:G,setMaterial:q,setFlipSided:Q,setCullFace:J,setLineWidth:B,setPolygonOffset:I,setScissorTest:oe,activeTexture:Ee,bindTexture:Ue,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:De,texImage3D:ye,updateUBOMapping:Be,uniformBlockBinding:Re,texStorage2D:_e,texStorage3D:Ie,texSubImage2D:se,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:Pe,scissor:Ae,viewport:Ge,reset:je}}function Dx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,w){return d?new OffscreenCanvas(N,w):qs("canvas")}function _(N,w,Z){let se=1;const pe=Ue(N);if((pe.width>Z||pe.height>Z)&&(se=Z/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(se*pe.width),Pe=Math.floor(se*pe.height);h===void 0&&(h=g(le,Pe));const _e=w?g(le,Pe):h;return _e.width=le,_e.height=Pe,_e.getContext("2d").drawImage(N,0,0,le,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+Pe+")."),_e}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,w,Z,se,pe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=w;if(w===i.RED&&(Z===i.FLOAT&&(le=i.R32F),Z===i.HALF_FLOAT&&(le=i.R16F),Z===i.UNSIGNED_BYTE&&(le=i.R8)),w===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.R8UI),Z===i.UNSIGNED_SHORT&&(le=i.R16UI),Z===i.UNSIGNED_INT&&(le=i.R32UI),Z===i.BYTE&&(le=i.R8I),Z===i.SHORT&&(le=i.R16I),Z===i.INT&&(le=i.R32I)),w===i.RG&&(Z===i.FLOAT&&(le=i.RG32F),Z===i.HALF_FLOAT&&(le=i.RG16F),Z===i.UNSIGNED_BYTE&&(le=i.RG8)),w===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RG8UI),Z===i.UNSIGNED_SHORT&&(le=i.RG16UI),Z===i.UNSIGNED_INT&&(le=i.RG32UI),Z===i.BYTE&&(le=i.RG8I),Z===i.SHORT&&(le=i.RG16I),Z===i.INT&&(le=i.RG32I)),w===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Z===i.UNSIGNED_INT&&(le=i.RGB32UI),Z===i.BYTE&&(le=i.RGB8I),Z===i.SHORT&&(le=i.RGB16I),Z===i.INT&&(le=i.RGB32I)),w===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Z===i.UNSIGNED_INT&&(le=i.RGBA32UI),Z===i.BYTE&&(le=i.RGBA8I),Z===i.SHORT&&(le=i.RGBA16I),Z===i.INT&&(le=i.RGBA32I)),w===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),w===i.RGBA){const Pe=pe?Jr:et.getTransfer(se);Z===i.FLOAT&&(le=i.RGBA32F),Z===i.HALF_FLOAT&&(le=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(le=Pe===ct?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function y(N,w){let Z;return N?w===null||w===bi||w===ks?Z=i.DEPTH24_STENCIL8:w===un?Z=i.DEPTH32F_STENCIL8:w===zs&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===bi||w===ks?Z=i.DEPTH_COMPONENT24:w===un?Z=i.DEPTH_COMPONENT32F:w===zs&&(Z=i.DEPTH_COMPONENT16),Z}function b(N,w){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rt&&N.minFilter!==Vt?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function E(N){const w=N.target;w.removeEventListener("dispose",E),R(w),w.isVideoTexture&&u.delete(w)}function T(N){const w=N.target;w.removeEventListener("dispose",T),S(w)}function R(N){const w=n.get(N);if(w.__webglInit===void 0)return;const Z=N.source,se=f.get(Z);if(se){const pe=se[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&M(N),Object.keys(se).length===0&&f.delete(Z)}n.remove(N)}function M(N){const w=n.get(N);i.deleteTexture(w.__webglTexture);const Z=N.source,se=f.get(Z);delete se[w.__cacheKey],o.memory.textures--}function S(N){const w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let pe=0;pe<w.__webglFramebuffer[se].length;pe++)i.deleteFramebuffer(w.__webglFramebuffer[se][pe]);else i.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)i.deleteFramebuffer(w.__webglFramebuffer[se]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=N.textures;for(let se=0,pe=Z.length;se<pe;se++){const le=n.get(Z[se]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Z[se])}n.remove(N)}let D=0;function U(){D=0}function H(){const N=D;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),D+=1,N}function Y(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function W(N,w){const Z=n.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const se=N.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(Z,N,w);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+w)}function V(N,w){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){C(Z,N,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+w)}function X(N,w){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){C(Z,N,w);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+w)}function F(N,w){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){A(Z,N,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+w)}const ie={[ns]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[$r]:i.MIRRORED_REPEAT},he={[Rt]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},ue={[Vf]:i.NEVER,[jf]:i.ALWAYS,[Gf]:i.LESS,[Zh]:i.LEQUAL,[Wf]:i.EQUAL,[Yf]:i.GEQUAL,[Xf]:i.GREATER,[qf]:i.NOTEQUAL};function xe(N,w){if(w.type===un&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Vt||w.magFilter===kr||w.magFilter===As||w.magFilter===Sn||w.minFilter===Vt||w.minFilter===kr||w.minFilter===As||w.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ie[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ie[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ie[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,he[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,he[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ue[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rt||w.minFilter!==As&&w.minFilter!==Sn||w.type===un&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function be(N,w){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",E));const se=w.source;let pe=f.get(se);pe===void 0&&(pe={},f.set(se,pe));const le=Y(w);if(le!==N.__cacheKey){pe[le]===void 0&&(pe[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[le].usedTimes++;const Pe=pe[N.__cacheKey];Pe!==void 0&&(pe[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(w)),N.__cacheKey=le,N.__webglTexture=pe[le].texture}return Z}function $(N,w,Z){return Math.floor(Math.floor(N/Z)/w)}function O(N,w,Z,se){const le=N.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Z,se,w.data);else{le.sort((ye,Ae)=>ye.start-Ae.start);let Pe=0;for(let ye=1;ye<le.length;ye++){const Ae=le[Pe],Ge=le[ye],Be=Ae.start+Ae.count,Re=$(Ge.start,w.width,4),je=$(Ae.start,w.width,4);Ge.start<=Be+1&&Re===je&&$(Ge.start+Ge.count-1,w.width,4)===Re?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Pe,le[Pe]=Ge)}le.length=Pe+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ye=0,Ae=le.length;ye<Ae;ye++){const Ge=le[ye],Be=Math.floor(Ge.start/4),Re=Math.ceil(Ge.count/4),je=Be%w.width,K=Math.floor(Be/w.width),Se=Re,Te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),t.texSubImage2D(i.TEXTURE_2D,0,je,K,Se,Te,Z,se,w.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function C(N,w,Z){let se=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=i.TEXTURE_3D);const pe=be(N,w),le=w.source;t.bindTexture(se,N.__webglTexture,i.TEXTURE0+Z);const Pe=n.get(le);if(le.version!==Pe.__version||pe===!0){t.activeTexture(i.TEXTURE0+Z);const _e=et.getPrimaries(et.workingColorSpace),Ie=w.colorSpace===Zn?null:et.getPrimaries(w.colorSpace),De=w.colorSpace===Zn||_e===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ye=_(w.image,!1,s.maxTextureSize);ye=Ee(w,ye);const Ae=r.convert(w.format,w.colorSpace),Ge=r.convert(w.type);let Be=x(w.internalFormat,Ae,Ge,w.colorSpace,w.isVideoTexture);xe(se,w);let Re;const je=w.mipmaps,K=w.isVideoTexture!==!0,Se=Pe.__version===void 0||pe===!0,Te=le.dataReady,Ne=b(w,ye);if(w.isDepthTexture)Be=y(w.format===Vs,w.type),Se&&(K?t.texStorage2D(i.TEXTURE_2D,1,Be,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Be,ye.width,ye.height,0,Ae,Ge,null));else if(w.isDataTexture)if(je.length>0){K&&Se&&t.texStorage2D(i.TEXTURE_2D,Ne,Be,je[0].width,je[0].height);for(let ve=0,me=je.length;ve<me;ve++)Re=je[ve],K?Te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Re.width,Re.height,Ae,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,ve,Be,Re.width,Re.height,0,Ae,Ge,Re.data);w.generateMipmaps=!1}else K?(Se&&t.texStorage2D(i.TEXTURE_2D,Ne,Be,ye.width,ye.height),Te&&O(w,ye,Ae,Ge)):t.texImage2D(i.TEXTURE_2D,0,Be,ye.width,ye.height,0,Ae,Ge,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){K&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Be,je[0].width,je[0].height,ye.depth);for(let ve=0,me=je.length;ve<me;ve++)if(Re=je[ve],w.format!==en)if(Ae!==null)if(K){if(Te)if(w.layerUpdates.size>0){const Oe=Kl(Re.width,Re.height,w.format,w.type);for(const qe of w.layerUpdates){const ut=Re.data.subarray(qe*Oe/Re.data.BYTES_PER_ELEMENT,(qe+1)*Oe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,qe,Re.width,Re.height,1,Ae,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,ye.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Be,Re.width,Re.height,ye.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,ye.depth,Ae,Ge,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Be,Re.width,Re.height,ye.depth,0,Ae,Ge,Re.data)}else{K&&Se&&t.texStorage2D(i.TEXTURE_2D,Ne,Be,je[0].width,je[0].height);for(let ve=0,me=je.length;ve<me;ve++)Re=je[ve],w.format!==en?Ae!==null?K?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Re.width,Re.height,Ae,Ge,Re.data):t.texImage2D(i.TEXTURE_2D,ve,Be,Re.width,Re.height,0,Ae,Ge,Re.data)}else if(w.isDataArrayTexture)if(K){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Be,ye.width,ye.height,ye.depth),Te)if(w.layerUpdates.size>0){const ve=Kl(ye.width,ye.height,w.format,w.type);for(const me of w.layerUpdates){const Oe=ye.data.subarray(me*ve/ye.data.BYTES_PER_ELEMENT,(me+1)*ve/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,Ae,Ge,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ae,Ge,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ye.width,ye.height,ye.depth,0,Ae,Ge,ye.data);else if(w.isData3DTexture)K?(Se&&t.texStorage3D(i.TEXTURE_3D,Ne,Be,ye.width,ye.height,ye.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ae,Ge,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ye.width,ye.height,ye.depth,0,Ae,Ge,ye.data);else if(w.isFramebufferTexture){if(Se)if(K)t.texStorage2D(i.TEXTURE_2D,Ne,Be,ye.width,ye.height);else{let ve=ye.width,me=ye.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Be,ve,me,0,Ae,Ge,null),ve>>=1,me>>=1}}else if(je.length>0){if(K&&Se){const ve=Ue(je[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Be,ve.width,ve.height)}for(let ve=0,me=je.length;ve<me;ve++)Re=je[ve],K?Te&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ae,Ge,Re):t.texImage2D(i.TEXTURE_2D,ve,Be,Ae,Ge,Re);w.generateMipmaps=!1}else if(K){if(Se){const ve=Ue(ye);t.texStorage2D(i.TEXTURE_2D,Ne,Be,ve.width,ve.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ge,ye)}else t.texImage2D(i.TEXTURE_2D,0,Be,Ae,Ge,ye);m(w)&&p(se),Pe.__version=le.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function A(N,w,Z){if(w.image.length!==6)return;const se=be(N,w),pe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Z);const le=n.get(pe);if(pe.version!==le.__version||se===!0){t.activeTexture(i.TEXTURE0+Z);const Pe=et.getPrimaries(et.workingColorSpace),_e=w.colorSpace===Zn?null:et.getPrimaries(w.colorSpace),Ie=w.colorSpace===Zn||Pe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!De&&!ye?Ae[me]=_(w.image[me],!0,s.maxCubemapSize):Ae[me]=ye?w.image[me].image:w.image[me],Ae[me]=Ee(w,Ae[me]);const Ge=Ae[0],Be=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),je=x(w.internalFormat,Be,Re,w.colorSpace),K=w.isVideoTexture!==!0,Se=le.__version===void 0||se===!0,Te=pe.dataReady;let Ne=b(w,Ge);xe(i.TEXTURE_CUBE_MAP,w);let ve;if(De){K&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,je,Ge.width,Ge.height);for(let me=0;me<6;me++){ve=Ae[me].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){const qe=ve[Oe];w.format!==en?Be!==null?K?Te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,je,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,0,0,qe.width,qe.height,Be,Re,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe,je,qe.width,qe.height,0,Be,Re,qe.data)}}}else{if(ve=w.mipmaps,K&&Se){ve.length>0&&Ne++;const me=Ue(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,je,me.width,me.height)}for(let me=0;me<6;me++)if(ye){K?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,Be,Re,Ae[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,je,Ae[me].width,Ae[me].height,0,Be,Re,Ae[me].data);for(let Oe=0;Oe<ve.length;Oe++){const ut=ve[Oe].image[me].image;K?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,0,0,ut.width,ut.height,Be,Re,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,je,ut.width,ut.height,0,Be,Re,ut.data)}}else{K?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Be,Re,Ae[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,je,Be,Re,Ae[me]);for(let Oe=0;Oe<ve.length;Oe++){const qe=ve[Oe];K?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,0,0,Be,Re,qe.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Oe+1,je,Be,Re,qe.image[me])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),le.__version=pe.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function j(N,w,Z,se,pe,le){const Pe=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),Ie=x(Z.internalFormat,Pe,_e,Z.colorSpace),De=n.get(w),ye=n.get(Z);if(ye.__renderTarget=w,!De.__hasExternalTextures){const Ae=Math.max(1,w.width>>le),Ge=Math.max(1,w.height>>le);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,le,Ie,Ae,Ge,w.depth,0,Pe,_e,null):t.texImage2D(pe,le,Ie,Ae,Ge,0,Pe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),I(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,pe,ye.__webglTexture,0,B(w)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,pe,ye.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(N,w,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){const se=w.depthTexture,pe=se&&se.isDepthTexture?se.type:null,le=y(w.stencilBuffer,pe),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=B(w);I(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,le,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,le,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,N)}else{const se=w.textures;for(let pe=0;pe<se.length;pe++){const le=se[pe],Pe=r.convert(le.format,le.colorSpace),_e=r.convert(le.type),Ie=x(le.internalFormat,Pe,_e,le.colorSpace),De=B(w);Z&&I(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ie,w.width,w.height):I(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Ie,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(w.depthTexture);se.__renderTarget=w,(!se.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const pe=se.__webglTexture,le=B(w);if(w.depthTexture.format===Hs)I(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Vs)I(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function re(N){const w=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",pe)};se.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=se}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const se=N.texture.mipmaps;se&&se.length>0?k(w.__webglFramebuffer[0],N):k(w.__webglFramebuffer,N)}else if(Z){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=i.createRenderbuffer(),ne(w.__webglDepthbuffer[se],N,!1);else{const pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,le)}}else{const se=N.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ne(w.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(N,w,Z){const se=n.get(N);w!==void 0&&j(se.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&re(N)}function L(N){const w=N.texture,Z=n.get(N),se=n.get(w);N.addEventListener("dispose",T);const pe=N.textures,le=N.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=w.version,o.memory.textures++),le){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)Z.__webglFramebuffer[_e][Ie]=i.createFramebuffer()}else Z.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let _e=0,Ie=pe.length;_e<Ie;_e++){const De=n.get(pe[_e]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&I(N)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const Ie=pe[_e];Z.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[_e]);const De=r.convert(Ie.format,Ie.colorSpace),ye=r.convert(Ie.type),Ae=x(Ie.internalFormat,De,ye,Ie.colorSpace,N.isXRRenderTarget===!0),Ge=B(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Ae,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Z.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),xe(i.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)j(Z.__webglFramebuffer[_e][Ie],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ie);else j(Z.__webglFramebuffer[_e],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let _e=0,Ie=pe.length;_e<Ie;_e++){const De=pe[_e],ye=n.get(De);let Ae=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ye.__webglTexture),xe(Ae,De),j(Z.__webglFramebuffer,N,De,i.COLOR_ATTACHMENT0+_e,Ae,0),m(De)&&p(Ae)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_e=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),xe(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)j(Z.__webglFramebuffer[Ie],N,w,i.COLOR_ATTACHMENT0,_e,Ie);else j(Z.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,_e,0);m(w)&&p(_e),t.unbindTexture()}N.depthBuffer&&re(N)}function G(N){const w=N.textures;for(let Z=0,se=w.length;Z<se;Z++){const pe=w[Z];if(m(pe)){const le=v(N),Pe=n.get(pe).__webglTexture;t.bindTexture(le,Pe),p(le),t.unbindTexture()}}}const q=[],Q=[];function J(N){if(N.samples>0){if(I(N)===!1){const w=N.textures,Z=N.width,se=N.height;let pe=i.COLOR_BUFFER_BIT;const le=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(N),_e=w.length>1;if(_e)for(let De=0;De<w.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ie=N.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<w.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const ye=n.get(w[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,Z,se,0,0,Z,se,pe,i.NEAREST),c===!0&&(q.length=0,Q.length=0,q.push(i.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.resolveDepthBuffer===!1&&(q.push(le),Q.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let De=0;De<w.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const ye=n.get(w[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function B(N){return Math.min(s.maxSamples,N.samples)}function I(N){const w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function oe(N){const w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function Ee(N,w){const Z=N.colorSpace,se=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Ot&&Z!==Zn&&(et.getTransfer(Z)===ct?(se!==en||pe!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function Ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=F,this.rebindTextures=de,this.setupRenderTarget=L,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=j,this.useMultisampledRTT=I}function Nx(i,e){function t(n,s=Zn){let r;const o=et.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===Kh)return i.RGB;if(n===en)return i.RGBA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===$h)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===xc)return i.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===xa||n===_a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===va||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===va)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Ha||n===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:Ux,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends hs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ox,p={},v=t.getContextAttributes();let x=null,y=null;const b=[],E=[],T=new fe;let R=null;const M=new Ht;M.viewport=new Qe;const S=new Ht;S.viewport=new Qe;const D=[M,S],U=new Kp;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let A=b[C];return A===void 0&&(A=new Uo,b[C]=A),A.getTargetRaySpace()},this.getControllerGrip=function(C){let A=b[C];return A===void 0&&(A=new Uo,b[C]=A),A.getGripSpace()},this.getHand=function(C){let A=b[C];return A===void 0&&(A=new Uo,b[C]=A),A.getHandSpace()};function W(C){const A=E.indexOf(C.inputSource);if(A===-1)return;const j=b[A];j!==void 0&&(j.update(C.inputSource,C.frame,l||o),j.dispatchEvent({type:C.type,data:C.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let C=0;C<b.length;C++){const A=E[C];A!==null&&(E[C]=null,b[C].disconnect(A))}H=null,Y=null,m.reset();for(const C in p)delete p[C];e.setRenderTarget(x),d=null,f=null,h=null,s=null,y=null,O.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ne=null,k=null;v.depth&&(k=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?Vs:Hs,ne=v.stencil?ks:bi);const re={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ei(f.textureWidth,f.textureHeight,{format:en,type:Tn,depthTexture:new fu(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ei(d.framebufferWidth,d.framebufferHeight,{format:en,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),O.setContext(s),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(C){for(let A=0;A<C.removed.length;A++){const j=C.removed[A],ne=E.indexOf(j);ne>=0&&(E[ne]=null,b[ne].disconnect(j))}for(let A=0;A<C.added.length;A++){const j=C.added[A];let ne=E.indexOf(j);if(ne===-1){for(let re=0;re<b.length;re++)if(re>=E.length){E.push(j),ne=re;break}else if(E[re]===null){E[re]=j,ne=re;break}if(ne===-1)break}const k=b[ne];k&&k.connect(j)}}const F=new z,ie=new z;function he(C,A,j){F.setFromMatrixPosition(A.matrixWorld),ie.setFromMatrixPosition(j.matrixWorld);const ne=F.distanceTo(ie),k=A.projectionMatrix.elements,re=j.projectionMatrix.elements,de=k[14]/(k[10]-1),L=k[14]/(k[10]+1),G=(k[9]+1)/k[5],q=(k[9]-1)/k[5],Q=(k[8]-1)/k[0],J=(re[8]+1)/re[0],B=de*Q,I=de*J,oe=ne/(-Q+J),Ee=oe*-Q;if(A.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Ee),C.translateZ(oe),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),k[10]===-1)C.projectionMatrix.copy(A.projectionMatrix),C.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{const Ue=de+oe,N=L+oe,w=B-Ee,Z=I+(ne-Ee),se=G*L/N*Ue,pe=q*L/N*Ue;C.projectionMatrix.makePerspective(w,Z,se,pe,Ue,N),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function ue(C,A){A===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(A.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let A=C.near,j=C.far;m.texture!==null&&(m.depthNear>0&&(A=m.depthNear),m.depthFar>0&&(j=m.depthFar)),U.near=S.near=M.near=A,U.far=S.far=M.far=j,(H!==U.near||Y!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,Y=U.far),U.layers.mask=C.layers.mask|6,M.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const ne=C.parent,k=U.cameras;ue(U,ne);for(let re=0;re<k.length;re++)ue(k[re],ne);k.length===2?he(U,M,S):U.projectionMatrix.copy(M.projectionMatrix),xe(C,U,ne)};function xe(C,A,j){j===null?C.matrix.copy(A.matrixWorld):(C.matrix.copy(j.matrixWorld),C.matrix.invert(),C.matrix.multiply(A.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(A.projectionMatrix),C.projectionMatrixInverse.copy(A.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=is*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(C){c=C,f!==null&&(f.fixedFoveation=C),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=C)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(C){return p[C]};let be=null;function $(C,A){if(u=A.getViewerPose(l||o),g=A,u!==null){const j=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ne=!1;j.length!==U.cameras.length&&(U.cameras.length=0,ne=!0);for(let L=0;L<j.length;L++){const G=j[L];let q=null;if(d!==null)q=d.getViewport(G);else{const J=h.getViewSubImage(f,G);q=J.viewport,L===0&&(e.setRenderTargetTextures(y,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(y))}let Q=D[L];Q===void 0&&(Q=new Ht,Q.layers.enable(L),Q.viewport=new Qe,D[L]=Q),Q.matrix.fromArray(G.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(G.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(q.x,q.y,q.width,q.height),L===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ne===!0&&U.cameras.push(Q)}const k=s.enabledFeatures;if(k&&k.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(j[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(k&&k.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<j.length;L++){const G=j[L].camera;if(G){let q=p[G];q||(q=new du,p[G]=q);const Q=h.getCameraImage(G);q.sourceTexture=Q}}}}for(let j=0;j<b.length;j++){const ne=E[j],k=b[j];ne!==null&&k!==void 0&&k.update(ne,A,l||o)}be&&be(C,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),g=null}const O=new Ru;O.setAnimationLoop($),this.setAnimationLoop=function(C){be=C},this.dispose=function(){}}}const gi=new sn,zx=new Ye;function kx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,su(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,gi.copy(y),gi.x*=-1,gi.y*=-1,gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(gi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=s[v.id];y===void 0&&(g(v),y=u(v),s[v.id]=y,v.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(v,b);const E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function u(v){const x=h();v.__bindingPointIndex=x;const y=i.createBuffer(),b=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=s[v.id],y=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=y.length;E<T;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,S=R.length;M<S;M++){const D=R[M];if(d(D,E,M,b)===!0){const U=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let W=0;W<H.length;W++){const V=H[W],X=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+Y,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,x,y,b){const E=v.value,T=x+"_"+y;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{const R=b[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return b[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(v){const x=v.uniforms;let y=0;const b=16;for(let T=0,R=x.length;T<R;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,D=M.length;S<D;S++){const U=M[S],H=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,W=H.length;Y<W;Y++){const V=H[Y],X=_(V),F=y%b,ie=F%X.boundary,he=F+ie;y+=ie,he!==0&&b-he<X.storage&&(y+=b-he),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=X.storage}}}const E=y%b;return E>0&&(y+=b-E),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Du{constructor(e={}){const{canvas:t=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=St;let E=0,T=0,R=null,M=-1,S=null;const D=new Qe,U=new Qe;let H=null;const Y=new ze(0);let W=0,V=t.width,X=t.height,F=1,ie=null,he=null;const ue=new Qe(0,0,V,X),xe=new Qe(0,0,V,X);let be=!1;const $=new Tc;let O=!1,C=!1;const A=new Ye,j=new z,ne=new Qe,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function de(){return R===null?F:1}let L=n;function G(P,ee){return t.getContext(P,ee)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ve,!1),L===null){const ee="webgl2";if(L=G(ee,P),L===null)throw G(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let q,Q,J,B,I,oe,Ee,Ue,N,w,Z,se,pe,le,Pe,_e,Ie,De,ye,Ae,Ge,Be,Re,je;function K(){q=new Z0(L),q.init(),Be=new Nx(L,q),Q=new X0(L,q,e,Be),J=new Lx(L,q),Q.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),B=new t1(L),I=new yx,oe=new Dx(L,q,J,I,Q,Be,B),Ee=new Y0(y),Ue=new J0(y),N=new am(L),Re=new G0(L,N),w=new Q0(L,N,B,Re),Z=new i1(L,w,N,B),ye=new n1(L,Q,oe),_e=new q0(I),se=new _x(y,Ee,Ue,q,Q,Re,_e),pe=new kx(y,I),le=new Mx,Pe=new Ax(q),De=new V0(y,Ee,Ue,J,Z,d,c),Ie=new Px(y,Z,Q),je=new Hx(L,B,Q,J),Ae=new W0(L,q,B),Ge=new e1(L,q,B),B.programs=se.programs,y.capabilities=Q,y.extensions=q,y.properties=I,y.renderLists=le,y.shadowMap=Ie,y.state=J,y.info=B}K();const Se=new Bx(y,L);this.xr=Se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(V,X,!1))},this.getSize=function(P){return P.set(V,X)},this.setSize=function(P,ee,ae=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,X=ee,t.width=Math.floor(P*F),t.height=Math.floor(ee*F),ae===!0&&(t.style.width=P+"px",t.style.height=ee+"px"),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(V*F,X*F).floor()},this.setDrawingBufferSize=function(P,ee,ae){V=P,X=ee,F=ae,t.width=Math.floor(P*ae),t.height=Math.floor(ee*ae),this.setViewport(0,0,P,ee)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(ue)},this.setViewport=function(P,ee,ae,ce){P.isVector4?ue.set(P.x,P.y,P.z,P.w):ue.set(P,ee,ae,ce),J.viewport(D.copy(ue).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(xe)},this.setScissor=function(P,ee,ae,ce){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,ee,ae,ce),J.scissor(U.copy(xe).multiplyScalar(F).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(P){J.setScissorTest(be=P)},this.setOpaqueSort=function(P){ie=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(P=!0,ee=!0,ae=!0){let ce=0;if(P){let te=!1;if(R!==null){const Me=R.texture.format;te=Me===xc||Me===gc||Me===mc}if(te){const Me=R.texture.type,Ce=Me===Tn||Me===bi||Me===zs||Me===ks||Me===fc||Me===dc,Fe=De.getClearColor(),Le=De.getClearAlpha(),Ve=Fe.r,We=Fe.g,ke=Fe.b;Ce?(g[0]=Ve,g[1]=We,g[2]=ke,g[3]=Le,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ve,_[1]=We,_[2]=ke,_[3]=Le,L.clearBufferiv(L.COLOR,0,_))}else ce|=L.COLOR_BUFFER_BIT}ee&&(ce|=L.DEPTH_BUFFER_BIT),ae&&(ce|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),De.dispose(),le.dispose(),Pe.dispose(),I.dispose(),Ee.dispose(),Ue.dispose(),Z.dispose(),Re.dispose(),je.dispose(),se.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",_n),Se.removeEventListener("sessionend",Gc),ci.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=B.autoReset,ee=Ie.enabled,ae=Ie.autoUpdate,ce=Ie.needsUpdate,te=Ie.type;K(),B.autoReset=P,Ie.enabled=ee,Ie.autoUpdate=ae,Ie.needsUpdate=ce,Ie.type=te}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function me(P){const ee=P.target;ee.removeEventListener("dispose",me),Oe(ee)}function Oe(P){qe(P),I.remove(P)}function qe(P){const ee=I.get(P).programs;ee!==void 0&&(ee.forEach(function(ae){se.releaseProgram(ae)}),P.isShaderMaterial&&se.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,ae,ce,te,Me){ee===null&&(ee=k);const Ce=te.isMesh&&te.matrixWorld.determinant()<0,Fe=qu(P,ee,ae,ce,te);J.setMaterial(ce,Ce);let Le=ae.index,Ve=1;if(ce.wireframe===!0){if(Le=w.getWireframeAttribute(ae),Le===void 0)return;Ve=2}const We=ae.drawRange,ke=ae.attributes.position;let Ze=We.start*Ve,at=(We.start+We.count)*Ve;Me!==null&&(Ze=Math.max(Ze,Me.start*Ve),at=Math.min(at,(Me.start+Me.count)*Ve)),Le!==null?(Ze=Math.max(Ze,0),at=Math.min(at,Le.count)):ke!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,ke.count));const _t=at-Ze;if(_t<0||_t===1/0)return;Re.setup(te,ce,Fe,ae,Le);let ft,ht=Ae;if(Le!==null&&(ft=N.get(Le),ht=Ge,ht.setIndex(ft)),te.isMesh)ce.wireframe===!0?(J.setLineWidth(ce.wireframeLinewidth*de()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(te.isLine){let He=ce.linewidth;He===void 0&&(He=1),J.setLineWidth(He*de()),te.isLineSegments?ht.setMode(L.LINES):te.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else te.isPoints?ht.setMode(L.POINTS):te.isSprite&&ht.setMode(L.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))ht.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const He=te._multiDrawStarts,pt=te._multiDrawCounts,nt=te._multiDrawCount,Gt=Le?N.get(Le).bytesPerElement:1,Ci=I.get(ce).currentProgram.getUniforms();for(let Wt=0;Wt<nt;Wt++)Ci.setValue(L,"_gl_DrawID",Wt),ht.render(He[Wt]/Gt,pt[Wt])}else if(te.isInstancedMesh)ht.renderInstances(Ze,_t,te.count);else if(ae.isInstancedBufferGeometry){const He=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,pt=Math.min(ae.instanceCount,He);ht.renderInstances(Ze,_t,pt)}else ht.render(Ze,_t)};function ut(P,ee,ae){P.transparent===!0&&P.side===ln&&P.forceSinglePass===!1?(P.side=Ft,P.needsUpdate=!0,rr(P,ee,ae),P.side=En,P.needsUpdate=!0,rr(P,ee,ae),P.side=ln):rr(P,ee,ae)}this.compile=function(P,ee,ae=null){ae===null&&(ae=P),p=Pe.get(ae),p.init(ee),x.push(p),ae.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),P!==ae&&P.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();const ce=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Me=te.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Fe=Me[Ce];ut(Fe,ae,te),ce.add(Fe)}else ut(Me,ae,te),ce.add(Me)}),p=x.pop(),ce},this.compileAsync=function(P,ee,ae=null){const ce=this.compile(P,ee,ae);return new Promise(te=>{function Me(){if(ce.forEach(function(Ce){I.get(Ce).currentProgram.isReady()&&ce.delete(Ce)}),ce.size===0){te(P);return}setTimeout(Me,10)}q.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let it=null;function Rn(P){it&&it(P)}function _n(){ci.stop()}function Gc(){ci.start()}const ci=new Ru;ci.setAnimationLoop(Rn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(P){it=P,Se.setAnimationLoop(P),P===null?ci.stop():ci.start()},Se.addEventListener("sessionstart",_n),Se.addEventListener("sessionend",Gc),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(ee),ee=Se.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,ee,R),p=Pe.get(P,x.length),p.init(ee),x.push(p),A.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),$.setFromProjectionMatrix(A,bn,ee.reversedDepth),C=this.localClippingEnabled,O=_e.init(this.clippingPlanes,C),m=le.get(P,v.length),m.init(),v.push(m),Se.enabled===!0&&Se.isPresenting===!0){const Me=y.xr.getDepthSensingMesh();Me!==null&&uo(Me,ee,-1/0,y.sortObjects)}uo(P,ee,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,he),re=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,re&&De.addToRenderList(m,P),this.info.render.frame++,O===!0&&_e.beginShadows();const ae=p.state.shadowsArray;Ie.render(ae,P,ee),O===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=m.opaque,te=m.transmissive;if(p.setupLights(),ee.isArrayCamera){const Me=ee.cameras;if(te.length>0)for(let Ce=0,Fe=Me.length;Ce<Fe;Ce++){const Le=Me[Ce];Xc(ce,te,P,Le)}re&&De.render(P);for(let Ce=0,Fe=Me.length;Ce<Fe;Ce++){const Le=Me[Ce];Wc(m,P,Le,Le.viewport)}}else te.length>0&&Xc(ce,te,P,ee),re&&De.render(P),Wc(m,P,ee);R!==null&&T===0&&(oe.updateMultisampleRenderTarget(R),oe.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(y,P,ee),Re.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],O===!0&&_e.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function uo(P,ee,ae,ce){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)ae=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$.intersectsSprite(P)){ce&&ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(A);const Ce=Z.update(P),Fe=P.material;Fe.visible&&m.push(P,Ce,Fe,ae,ne.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||$.intersectsObject(P))){const Ce=Z.update(P),Fe=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ne.copy(P.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ne.copy(Ce.boundingSphere.center)),ne.applyMatrix4(P.matrixWorld).applyMatrix4(A)),Array.isArray(Fe)){const Le=Ce.groups;for(let Ve=0,We=Le.length;Ve<We;Ve++){const ke=Le[Ve],Ze=Fe[ke.materialIndex];Ze&&Ze.visible&&m.push(P,Ce,Ze,ae,ne.z,ke)}}else Fe.visible&&m.push(P,Ce,Fe,ae,ne.z,null)}}const Me=P.children;for(let Ce=0,Fe=Me.length;Ce<Fe;Ce++)uo(Me[Ce],ee,ae,ce)}function Wc(P,ee,ae,ce){const te=P.opaque,Me=P.transmissive,Ce=P.transparent;p.setupLightsView(ae),O===!0&&_e.setGlobalState(y.clippingPlanes,ae),ce&&J.viewport(D.copy(ce)),te.length>0&&sr(te,ee,ae),Me.length>0&&sr(Me,ee,ae),Ce.length>0&&sr(Ce,ee,ae),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Xc(P,ee,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new Ei(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Qs:Tn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Me=p.state.transmissionRenderTarget[ce.id],Ce=ce.viewport||D;Me.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);const Fe=y.getRenderTarget(),Le=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(Me),y.getClearColor(Y),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),re&&De.render(ae);const We=y.toneMapping;y.toneMapping=si;const ke=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),O===!0&&_e.setGlobalState(y.clippingPlanes,ce),sr(P,ae,ce),oe.updateMultisampleRenderTarget(Me),oe.updateRenderTargetMipmap(Me),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let at=0,_t=ee.length;at<_t;at++){const ft=ee[at],ht=ft.object,He=ft.geometry,pt=ft.material,nt=ft.group;if(pt.side===ln&&ht.layers.test(ce.layers)){const Gt=pt.side;pt.side=Ft,pt.needsUpdate=!0,qc(ht,ae,ce,He,pt,nt),pt.side=Gt,pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(oe.updateMultisampleRenderTarget(Me),oe.updateRenderTargetMipmap(Me))}y.setRenderTarget(Fe,Le,Ve),y.setClearColor(Y,W),ke!==void 0&&(ce.viewport=ke),y.toneMapping=We}function sr(P,ee,ae){const ce=ee.isScene===!0?ee.overrideMaterial:null;for(let te=0,Me=P.length;te<Me;te++){const Ce=P[te],Fe=Ce.object,Le=Ce.geometry,Ve=Ce.group;let We=Ce.material;We.allowOverride===!0&&ce!==null&&(We=ce),Fe.layers.test(ae.layers)&&qc(Fe,ee,ae,Le,We,Ve)}}function qc(P,ee,ae,ce,te,Me){P.onBeforeRender(y,ee,ae,ce,te,Me),P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(y,ee,ae,ce,P,Me),te.transparent===!0&&te.side===ln&&te.forceSinglePass===!1?(te.side=Ft,te.needsUpdate=!0,y.renderBufferDirect(ae,ee,ce,te,P,Me),te.side=En,te.needsUpdate=!0,y.renderBufferDirect(ae,ee,ce,te,P,Me),te.side=ln):y.renderBufferDirect(ae,ee,ce,te,P,Me),P.onAfterRender(y,ee,ae,ce,te,Me)}function rr(P,ee,ae){ee.isScene!==!0&&(ee=k);const ce=I.get(P),te=p.state.lights,Me=p.state.shadowsArray,Ce=te.state.version,Fe=se.getParameters(P,te.state,Me,ee,ae),Le=se.getProgramCacheKey(Fe);let Ve=ce.programs;ce.environment=P.isMeshStandardMaterial?ee.environment:null,ce.fog=ee.fog,ce.envMap=(P.isMeshStandardMaterial?Ue:Ee).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?ee.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",me),Ve=new Map,ce.programs=Ve);let We=Ve.get(Le);if(We!==void 0){if(ce.currentProgram===We&&ce.lightsStateVersion===Ce)return jc(P,Fe),We}else Fe.uniforms=se.getUniforms(P),P.onBeforeCompile(Fe,y),We=se.acquireProgram(Fe,Le),Ve.set(Le,We),ce.uniforms=Fe.uniforms;const ke=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ke.clippingPlanes=_e.uniform),jc(P,Fe),ce.needsLights=ju(P),ce.lightsStateVersion=Ce,ce.needsLights&&(ke.ambientLightColor.value=te.state.ambient,ke.lightProbe.value=te.state.probe,ke.directionalLights.value=te.state.directional,ke.directionalLightShadows.value=te.state.directionalShadow,ke.spotLights.value=te.state.spot,ke.spotLightShadows.value=te.state.spotShadow,ke.rectAreaLights.value=te.state.rectArea,ke.ltc_1.value=te.state.rectAreaLTC1,ke.ltc_2.value=te.state.rectAreaLTC2,ke.pointLights.value=te.state.point,ke.pointLightShadows.value=te.state.pointShadow,ke.hemisphereLights.value=te.state.hemi,ke.directionalShadowMap.value=te.state.directionalShadowMap,ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ke.spotShadowMap.value=te.state.spotShadowMap,ke.spotLightMatrix.value=te.state.spotLightMatrix,ke.spotLightMap.value=te.state.spotLightMap,ke.pointShadowMap.value=te.state.pointShadowMap,ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ce.currentProgram=We,ce.uniformsList=null,We}function Yc(P){if(P.uniformsList===null){const ee=P.currentProgram.getUniforms();P.uniformsList=Xr.seqWithValue(ee.seq,P.uniforms)}return P.uniformsList}function jc(P,ee){const ae=I.get(P);ae.outputColorSpace=ee.outputColorSpace,ae.batching=ee.batching,ae.batchingColor=ee.batchingColor,ae.instancing=ee.instancing,ae.instancingColor=ee.instancingColor,ae.instancingMorph=ee.instancingMorph,ae.skinning=ee.skinning,ae.morphTargets=ee.morphTargets,ae.morphNormals=ee.morphNormals,ae.morphColors=ee.morphColors,ae.morphTargetsCount=ee.morphTargetsCount,ae.numClippingPlanes=ee.numClippingPlanes,ae.numIntersection=ee.numClipIntersection,ae.vertexAlphas=ee.vertexAlphas,ae.vertexTangents=ee.vertexTangents,ae.toneMapping=ee.toneMapping}function qu(P,ee,ae,ce,te){ee.isScene!==!0&&(ee=k),oe.resetTextureUnits();const Me=ee.fog,Ce=ce.isMeshStandardMaterial?ee.environment:null,Fe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ot,Le=(ce.isMeshStandardMaterial?Ue:Ee).get(ce.envMap||Ce),Ve=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,We=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),ke=!!ae.morphAttributes.position,Ze=!!ae.morphAttributes.normal,at=!!ae.morphAttributes.color;let _t=si;ce.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=y.toneMapping);const ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ht=ft!==void 0?ft.length:0,He=I.get(ce),pt=p.state.lights;if(O===!0&&(C===!0||P!==S)){const It=P===S&&ce.id===M;_e.setState(ce,P,It)}let nt=!1;ce.version===He.__version?(He.needsLights&&He.lightsStateVersion!==pt.state.version||He.outputColorSpace!==Fe||te.isBatchedMesh&&He.batching===!1||!te.isBatchedMesh&&He.batching===!0||te.isBatchedMesh&&He.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&He.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&He.instancing===!1||!te.isInstancedMesh&&He.instancing===!0||te.isSkinnedMesh&&He.skinning===!1||!te.isSkinnedMesh&&He.skinning===!0||te.isInstancedMesh&&He.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&He.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&He.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&He.instancingMorph===!1&&te.morphTexture!==null||He.envMap!==Le||ce.fog===!0&&He.fog!==Me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_e.numPlanes||He.numIntersection!==_e.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==We||He.morphTargets!==ke||He.morphNormals!==Ze||He.morphColors!==at||He.toneMapping!==_t||He.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,He.__version=ce.version);let Gt=He.currentProgram;nt===!0&&(Gt=rr(ce,ee,te));let Ci=!1,Wt=!1,xs=!1;const mt=Gt.getUniforms(),Kt=He.uniforms;if(J.useProgram(Gt.program)&&(Ci=!0,Wt=!0,xs=!0),ce.id!==M&&(M=ce.id,Wt=!0),Ci||S!==P){J.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",P.projectionMatrix),mt.setValue(L,"viewMatrix",P.matrixWorldInverse);const Bt=mt.map.cameraPosition;Bt!==void 0&&Bt.setValue(L,j.setFromMatrixPosition(P.matrixWorld)),Q.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&mt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Wt=!0,xs=!0)}if(te.isSkinnedMesh){mt.setOptional(L,te,"bindMatrix"),mt.setOptional(L,te,"bindMatrixInverse");const It=te.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue(L,"boneTexture",It.boneTexture,oe))}te.isBatchedMesh&&(mt.setOptional(L,te,"batchingTexture"),mt.setValue(L,"batchingTexture",te._matricesTexture,oe),mt.setOptional(L,te,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",te._indirectTexture,oe),mt.setOptional(L,te,"batchingColorTexture"),te._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",te._colorsTexture,oe));const $t=ae.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ye.update(te,ae,Gt),(Wt||He.receiveShadow!==te.receiveShadow)&&(He.receiveShadow=te.receiveShadow,mt.setValue(L,"receiveShadow",te.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Kt.envMap.value=Le,Kt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&ee.environment!==null&&(Kt.envMapIntensity.value=ee.environmentIntensity),Wt&&(mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&Yu(Kt,xs),Me&&ce.fog===!0&&pe.refreshFogUniforms(Kt,Me),pe.refreshMaterialUniforms(Kt,ce,F,X,p.state.transmissionRenderTarget[P.id]),Xr.upload(L,Yc(He),Kt,oe)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Xr.upload(L,Yc(He),Kt,oe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&mt.setValue(L,"center",te.center),mt.setValue(L,"modelViewMatrix",te.modelViewMatrix),mt.setValue(L,"normalMatrix",te.normalMatrix),mt.setValue(L,"modelMatrix",te.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const It=ce.uniformsGroups;for(let Bt=0,fo=It.length;Bt<fo;Bt++){const li=It[Bt];je.update(li,Gt),je.bind(li,Gt)}}return Gt}function Yu(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function ju(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,ee,ae){const ce=I.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),I.get(P.texture).__webglTexture=ee,I.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ee){const ae=I.get(P);ae.__webglFramebuffer=ee,ae.__useDefaultFramebuffer=ee===void 0};const Ku=L.createFramebuffer();this.setRenderTarget=function(P,ee=0,ae=0){R=P,E=ee,T=ae;let ce=!0,te=null,Me=!1,Ce=!1;if(P){const Le=I.get(P);if(Le.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(L.FRAMEBUFFER,null),ce=!1;else if(Le.__webglFramebuffer===void 0)oe.setupRenderTarget(P);else if(Le.__hasExternalTextures)oe.rebindTextures(P,I.get(P.texture).__webglTexture,I.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ke=P.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&I.has(ke)&&(P.width!==ke.image.width||P.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(P)}}const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const We=I.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(We[ee])?te=We[ee][ae]:te=We[ee],Me=!0):P.samples>0&&oe.useMultisampledRTT(P)===!1?te=I.get(P).__webglMultisampledFramebuffer:Array.isArray(We)?te=We[ae]:te=We,D.copy(P.viewport),U.copy(P.scissor),H=P.scissorTest}else D.copy(ue).multiplyScalar(F).floor(),U.copy(xe).multiplyScalar(F).floor(),H=be;if(ae!==0&&(te=Ku),J.bindFramebuffer(L.FRAMEBUFFER,te)&&ce&&J.drawBuffers(P,te),J.viewport(D),J.scissor(U),J.setScissorTest(H),Me){const Le=I.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le.__webglTexture,ae)}else if(Ce){const Le=ee;for(let Ve=0;Ve<P.textures.length;Ve++){const We=I.get(P.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,We.__webglTexture,ae,Le)}}else if(P!==null&&ae!==0){const Le=I.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,ae)}M=-1},this.readRenderTargetPixels=function(P,ee,ae,ce,te,Me,Ce,Fe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){J.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Ve=P.textures[Fe],We=Ve.format,ke=Ve.type;if(!Q.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-ce&&ae>=0&&ae<=P.height-te&&(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(ee,ae,ce,te,Be.convert(We),Be.convert(ke),Me))}finally{const Ve=R!==null?I.get(R).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,ee,ae,ce,te,Me,Ce,Fe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(ee>=0&&ee<=P.width-ce&&ae>=0&&ae<=P.height-te){J.bindFramebuffer(L.FRAMEBUFFER,Le);const Ve=P.textures[Fe],We=Ve.format,ke=Ve.type;if(!Q.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(ee,ae,ce,te,Be.convert(We),Be.convert(ke),0);const at=R!==null?I.get(R).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,at);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fd(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(Ze),L.deleteSync(_t),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ee=null,ae=0){const ce=Math.pow(2,-ae),te=Math.floor(P.image.width*ce),Me=Math.floor(P.image.height*ce),Ce=ee!==null?ee.x:0,Fe=ee!==null?ee.y:0;oe.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,ae,0,0,Ce,Fe,te,Me),J.unbindTexture()};const $u=L.createFramebuffer(),Ju=L.createFramebuffer();this.copyTextureToTexture=function(P,ee,ae=null,ce=null,te=0,Me=null){Me===null&&(te!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=te,te=0):Me=0);let Ce,Fe,Le,Ve,We,ke,Ze,at,_t;const ft=P.isCompressedTexture?P.mipmaps[Me]:P.image;if(ae!==null)Ce=ae.max.x-ae.min.x,Fe=ae.max.y-ae.min.y,Le=ae.isBox3?ae.max.z-ae.min.z:1,Ve=ae.min.x,We=ae.min.y,ke=ae.isBox3?ae.min.z:0;else{const $t=Math.pow(2,-te);Ce=Math.floor(ft.width*$t),Fe=Math.floor(ft.height*$t),P.isDataArrayTexture?Le=ft.depth:P.isData3DTexture?Le=Math.floor(ft.depth*$t):Le=1,Ve=0,We=0,ke=0}ce!==null?(Ze=ce.x,at=ce.y,_t=ce.z):(Ze=0,at=0,_t=0);const ht=Be.convert(ee.format),He=Be.convert(ee.type);let pt;ee.isData3DTexture?(oe.setTexture3D(ee,0),pt=L.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(oe.setTexture2DArray(ee,0),pt=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(ee,0),pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ee.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ee.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),Gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ci=L.getParameter(L.UNPACK_SKIP_PIXELS),Wt=L.getParameter(L.UNPACK_SKIP_ROWS),xs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const mt=P.isDataArrayTexture||P.isData3DTexture,Kt=ee.isDataArrayTexture||ee.isData3DTexture;if(P.isDepthTexture){const $t=I.get(P),It=I.get(ee),Bt=I.get($t.__renderTarget),fo=I.get(It.__renderTarget);J.bindFramebuffer(L.READ_FRAMEBUFFER,Bt.__webglFramebuffer),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let li=0;li<Le;li++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,I.get(P).__webglTexture,te,ke+li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,I.get(ee).__webglTexture,Me,_t+li)),L.blitFramebuffer(Ve,We,Ce,Fe,Ze,at,Ce,Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);J.bindFramebuffer(L.READ_FRAMEBUFFER,null),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(te!==0||P.isRenderTargetTexture||I.has(P)){const $t=I.get(P),It=I.get(ee);J.bindFramebuffer(L.READ_FRAMEBUFFER,$u),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ju);for(let Bt=0;Bt<Le;Bt++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$t.__webglTexture,te,ke+Bt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$t.__webglTexture,te),Kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,Me,_t+Bt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,Me),te!==0?L.blitFramebuffer(Ve,We,Ce,Fe,Ze,at,Ce,Fe,L.COLOR_BUFFER_BIT,L.NEAREST):Kt?L.copyTexSubImage3D(pt,Me,Ze,at,_t+Bt,Ve,We,Ce,Fe):L.copyTexSubImage2D(pt,Me,Ze,at,Ve,We,Ce,Fe);J.bindFramebuffer(L.READ_FRAMEBUFFER,null),J.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kt?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(pt,Me,Ze,at,_t,Ce,Fe,Le,ht,He,ft.data):ee.isCompressedArrayTexture?L.compressedTexSubImage3D(pt,Me,Ze,at,_t,Ce,Fe,Le,ht,ft.data):L.texSubImage3D(pt,Me,Ze,at,_t,Ce,Fe,Le,ht,He,ft):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,Ze,at,Ce,Fe,ht,He,ft.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,Ze,at,ft.width,ft.height,ht,ft.data):L.texSubImage2D(L.TEXTURE_2D,Me,Ze,at,Ce,Fe,ht,He,ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xs),Me===0&&ee.generateMipmaps&&L.generateMipmap(pt),J.unbindTexture()},this.initRenderTarget=function(P){I.get(P).__webglFramebuffer===void 0&&oe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?oe.setTextureCube(P,0):P.isData3DTexture?oe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?oe.setTexture2DArray(P,0):oe.setTexture2D(P,0),J.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,J.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Vx(i){const e={frostMap:{value:null},frostRect:{value:new Qe},frostRadius:{value:12},frostLod:{value:0}};i.material.userData.frost=e;const t=new fe,n=new fe,s=new z;let r;i.onBeforeRender=(o,a,c)=>{o.getDrawingBufferSize(t),i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const l=i.userData.actor,h=i.geometry.boundingSphere.radius*(l?.baseSize||1)*1.55*2*t.x/(c.right-c.left),f=Math.min(t.x,Math.ceil((h+64)/64)*64),d=Math.min(t.y,Math.ceil((h+64)/64)*64);(!r||r.image.width!==f||r.image.height!==d)&&(r?.dispose(),r=new jd(f,d),r.magFilter=Vt,r.minFilter=Sn,e.frostMap.value=r),s.copy(i.geometry.boundingSphere.center).applyMatrix4(i.matrixWorld).project(c),n.set(Math.max(0,Math.min(t.x-f,Math.floor((s.x*.5+.5)*t.x-f/2))),Math.max(0,Math.min(t.y-d,Math.floor((s.y*.5+.5)*t.y-d/2)))),e.frostRect.value.set(n.x,n.y,f,d),e.frostRadius.value=Math.max(10,Math.min(28,h*.055)),o.copyFramebufferToTexture(r,n);const g=o.getContext();o.state.bindTexture(g.TEXTURE_2D,o.properties.get(r).__webglTexture),g.generateMipmap(g.TEXTURE_2D),o.state.unbindTexture(),e.frostLod.value=Math.max(0,Math.log2(e.frostRadius.value*1.2))},i.material.addEventListener("dispose",()=>r?.dispose())}function Gx(i){if(i.noSeam)return i;const e=i.positions.slice(),t=i.rim.length,n=new Set(i.rim),s=i.rim.map(f=>({x:e[f*3],y:e[f*3+1]})),r=s.map((f,d)=>{const g=s[(d+t-2)%t],_=s[(d+2)%t],m=_.x-g.x,p=_.y-g.y,v=Math.hypot(m,p)||1,x=d/t*Math.PI*2;return{p:f,nx:p/v,ny:-m/v,width:.015+.001*Math.sin(x*3+.8),curl:.005*Math.sin(x*18)+.003*Math.sin(x*33+.4)}}),o=i.rim.map(f=>f-t),a=i.rim.map(f=>f+t);function c(f,d,g){for(let _=0;_<t;_++){const{p:m,nx:p,ny:v,width:x,curl:y}=r[_],b=f[_]*3;e[b]=m.x+p*x*d,e[b+1]=m.y+v*x*d,e[b+2]=.4+y*d*d+g*.0016*(1-d*d)}}c(o,0,1),c(a,0,-1),c(i.rim,1,0);const l=(f,d)=>{const g=Array.from({length:t},()=>{const _=e.length/3;return e.push(0,0,0),_});return c(g,f,d),g},u=[o,l(.25,1),l(.55,1),l(.8,1),i.rim,l(.8,-1),l(.55,-1),l(.25,-1),a],h=[];for(let f=0;f<i.triangles.length;f+=3){const d=i.triangles.slice(f,f+3);d.some(g=>n.has(g))||h.push(...d)}for(let f=0;f<u.length-1;f++)for(let d=0;d<t;d++){const g=(d+1)%t,_=u[f][d],m=u[f][g],p=u[f+1][d],v=u[f+1][g];h.push(_,p,m,m,p,v)}return{...i,positions:e,triangles:h}}const Wx=St;class io extends Ri{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){const r=this,o=new Lc(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){const t=this;function n($,O){if($.nodeType!==1)return;const C=y($);let A=!1,j=null;switch($.nodeName){case"svg":O=g($,O);break;case"style":r($);break;case"g":O=g($,O);break;case"path":O=g($,O),$.hasAttribute("d")&&(j=s($));break;case"rect":O=g($,O),j=c($);break;case"polygon":O=g($,O),j=l($);break;case"polyline":O=g($,O),j=u($);break;case"circle":O=g($,O),j=h($);break;case"ellipse":O=g($,O),j=f($);break;case"line":O=g($,O),j=d($);break;case"defs":A=!0;break;case"use":O=g($,O);const re=($.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),de=$.viewportElement.getElementById(re);de?n(de,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+re);break}j&&(O.fill!==void 0&&O.fill!=="none"&&j.color.setStyle(O.fill,Wx),E(j,ue),U.push(j),j.userData={node:$,style:O});const ne=$.childNodes;for(let k=0;k<ne.length;k++){const re=ne[k];A&&re.nodeName!=="style"&&re.nodeName!=="defs"||n(re,O)}C&&(Y.pop(),Y.length>0?ue.copy(Y[Y.length-1]):ue.identity())}function s($){const O=new pi,C=new fe,A=new fe,j=new fe;let ne=!0,k=!1;const re=$.getAttribute("d");if(re===""||re==="none")return null;const de=re.match(/[a-df-z][^a-df-z]*/ig);for(let L=0,G=de.length;L<G;L++){const q=de[L],Q=q.charAt(0),J=q.slice(1).trim();ne===!0&&(k=!0,ne=!1);let B;switch(Q){case"M":B=m(J);for(let I=0,oe=B.length;I<oe;I+=2)C.x=B[I+0],C.y=B[I+1],A.x=C.x,A.y=C.y,I===0?O.moveTo(C.x,C.y):O.lineTo(C.x,C.y),I===0&&j.copy(C);break;case"H":B=m(J);for(let I=0,oe=B.length;I<oe;I++)C.x=B[I],A.x=C.x,A.y=C.y,O.lineTo(C.x,C.y),I===0&&k===!0&&j.copy(C);break;case"V":B=m(J);for(let I=0,oe=B.length;I<oe;I++)C.y=B[I],A.x=C.x,A.y=C.y,O.lineTo(C.x,C.y),I===0&&k===!0&&j.copy(C);break;case"L":B=m(J);for(let I=0,oe=B.length;I<oe;I+=2)C.x=B[I+0],C.y=B[I+1],A.x=C.x,A.y=C.y,O.lineTo(C.x,C.y),I===0&&k===!0&&j.copy(C);break;case"C":B=m(J);for(let I=0,oe=B.length;I<oe;I+=6)O.bezierCurveTo(B[I+0],B[I+1],B[I+2],B[I+3],B[I+4],B[I+5]),A.x=B[I+2],A.y=B[I+3],C.x=B[I+4],C.y=B[I+5],I===0&&k===!0&&j.copy(C);break;case"S":B=m(J);for(let I=0,oe=B.length;I<oe;I+=4)O.bezierCurveTo(_(C.x,A.x),_(C.y,A.y),B[I+0],B[I+1],B[I+2],B[I+3]),A.x=B[I+0],A.y=B[I+1],C.x=B[I+2],C.y=B[I+3],I===0&&k===!0&&j.copy(C);break;case"Q":B=m(J);for(let I=0,oe=B.length;I<oe;I+=4)O.quadraticCurveTo(B[I+0],B[I+1],B[I+2],B[I+3]),A.x=B[I+0],A.y=B[I+1],C.x=B[I+2],C.y=B[I+3],I===0&&k===!0&&j.copy(C);break;case"T":B=m(J);for(let I=0,oe=B.length;I<oe;I+=2){const Ee=_(C.x,A.x),Ue=_(C.y,A.y);O.quadraticCurveTo(Ee,Ue,B[I+0],B[I+1]),A.x=Ee,A.y=Ue,C.x=B[I+0],C.y=B[I+1],I===0&&k===!0&&j.copy(C)}break;case"A":B=m(J,[3,4],7);for(let I=0,oe=B.length;I<oe;I+=7){if(B[I+5]==C.x&&B[I+6]==C.y)continue;const Ee=C.clone();C.x=B[I+5],C.y=B[I+6],A.x=C.x,A.y=C.y,o(O,B[I],B[I+1],B[I+2],B[I+3],B[I+4],Ee,C),I===0&&k===!0&&j.copy(C)}break;case"m":B=m(J);for(let I=0,oe=B.length;I<oe;I+=2)C.x+=B[I+0],C.y+=B[I+1],A.x=C.x,A.y=C.y,I===0?O.moveTo(C.x,C.y):O.lineTo(C.x,C.y),I===0&&j.copy(C);break;case"h":B=m(J);for(let I=0,oe=B.length;I<oe;I++)C.x+=B[I],A.x=C.x,A.y=C.y,O.lineTo(C.x,C.y),I===0&&k===!0&&j.copy(C);break;case"v":B=m(J);for(let I=0,oe=B.length;I<oe;I++)C.y+=B[I],A.x=C.x,A.y=C.y,O.lineTo(C.x,C.y),I===0&&k===!0&&j.copy(C);break;case"l":B=m(J);for(let I=0,oe=B.length;I<oe;I+=2)C.x+=B[I+0],C.y+=B[I+1],A.x=C.x,A.y=C.y,O.lineTo(C.x,C.y),I===0&&k===!0&&j.copy(C);break;case"c":B=m(J);for(let I=0,oe=B.length;I<oe;I+=6)O.bezierCurveTo(C.x+B[I+0],C.y+B[I+1],C.x+B[I+2],C.y+B[I+3],C.x+B[I+4],C.y+B[I+5]),A.x=C.x+B[I+2],A.y=C.y+B[I+3],C.x+=B[I+4],C.y+=B[I+5],I===0&&k===!0&&j.copy(C);break;case"s":B=m(J);for(let I=0,oe=B.length;I<oe;I+=4)O.bezierCurveTo(_(C.x,A.x),_(C.y,A.y),C.x+B[I+0],C.y+B[I+1],C.x+B[I+2],C.y+B[I+3]),A.x=C.x+B[I+0],A.y=C.y+B[I+1],C.x+=B[I+2],C.y+=B[I+3],I===0&&k===!0&&j.copy(C);break;case"q":B=m(J);for(let I=0,oe=B.length;I<oe;I+=4)O.quadraticCurveTo(C.x+B[I+0],C.y+B[I+1],C.x+B[I+2],C.y+B[I+3]),A.x=C.x+B[I+0],A.y=C.y+B[I+1],C.x+=B[I+2],C.y+=B[I+3],I===0&&k===!0&&j.copy(C);break;case"t":B=m(J);for(let I=0,oe=B.length;I<oe;I+=2){const Ee=_(C.x,A.x),Ue=_(C.y,A.y);O.quadraticCurveTo(Ee,Ue,C.x+B[I+0],C.y+B[I+1]),A.x=Ee,A.y=Ue,C.x=C.x+B[I+0],C.y=C.y+B[I+1],I===0&&k===!0&&j.copy(C)}break;case"a":B=m(J,[3,4],7);for(let I=0,oe=B.length;I<oe;I+=7){if(B[I+5]==0&&B[I+6]==0)continue;const Ee=C.clone();C.x+=B[I+5],C.y+=B[I+6],A.x=C.x,A.y=C.y,o(O,B[I],B[I+1],B[I+2],B[I+3],B[I+4],Ee,C),I===0&&k===!0&&j.copy(C)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(C.copy(j),O.currentPath.currentPoint.copy(C),ne=!0);break;default:console.warn(q)}k=!1}return O}function r($){if(!(!$.sheet||!$.sheet.cssRules||!$.sheet.cssRules.length))for(let O=0;O<$.sheet.cssRules.length;O++){const C=$.sheet.cssRules[O];if(C.type!==1)continue;const A=C.selectorText.split(/,/gm).filter(Boolean).map(j=>j.trim());for(let j=0;j<A.length;j++){const ne=Object.fromEntries(Object.entries(C.style).filter(([,k])=>k!==""));H[A[j]]=Object.assign(H[A[j]]||{},ne)}}}function o($,O,C,A,j,ne,k,re){if(O==0||C==0){$.lineTo(re.x,re.y);return}A=A*Math.PI/180,O=Math.abs(O),C=Math.abs(C);const de=(k.x-re.x)/2,L=(k.y-re.y)/2,G=Math.cos(A)*de+Math.sin(A)*L,q=-Math.sin(A)*de+Math.cos(A)*L;let Q=O*O,J=C*C;const B=G*G,I=q*q,oe=B/Q+I/J;if(oe>1){const _e=Math.sqrt(oe);O=_e*O,C=_e*C,Q=O*O,J=C*C}const Ee=Q*I+J*B,Ue=(Q*J-Ee)/Ee;let N=Math.sqrt(Math.max(0,Ue));j===ne&&(N=-N);const w=N*O*q/C,Z=-N*C*G/O,se=Math.cos(A)*w-Math.sin(A)*Z+(k.x+re.x)/2,pe=Math.sin(A)*w+Math.cos(A)*Z+(k.y+re.y)/2,le=a(1,0,(G-w)/O,(q-Z)/C),Pe=a((G-w)/O,(q-Z)/C,(-G-w)/O,(-q-Z)/C)%(Math.PI*2);$.currentPath.absellipse(se,pe,O,C,le,le+Pe,ne===0,A)}function a($,O,C,A){const j=$*C+O*A,ne=Math.sqrt($*$+O*O)*Math.sqrt(C*C+A*A);let k=Math.acos(Math.max(-1,Math.min(1,j/ne)));return $*A-O*C<0&&(k=-k),k}function c($){const O=x($.getAttribute("x")||0),C=x($.getAttribute("y")||0),A=x($.getAttribute("rx")||$.getAttribute("ry")||0),j=x($.getAttribute("ry")||$.getAttribute("rx")||0),ne=x($.getAttribute("width")),k=x($.getAttribute("height")),re=1-.551915024494,de=new pi;return de.moveTo(O+A,C),de.lineTo(O+ne-A,C),(A!==0||j!==0)&&de.bezierCurveTo(O+ne-A*re,C,O+ne,C+j*re,O+ne,C+j),de.lineTo(O+ne,C+k-j),(A!==0||j!==0)&&de.bezierCurveTo(O+ne,C+k-j*re,O+ne-A*re,C+k,O+ne-A,C+k),de.lineTo(O+A,C+k),(A!==0||j!==0)&&de.bezierCurveTo(O+A*re,C+k,O,C+k-j*re,O,C+k-j),de.lineTo(O,C+j),(A!==0||j!==0)&&de.bezierCurveTo(O,C+j*re,O+A*re,C,O+A,C),de}function l($){function O(ne,k,re){const de=x(k),L=x(re);j===0?A.moveTo(de,L):A.lineTo(de,L),j++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new pi;let j=0;return $.getAttribute("points").replace(C,O),A.currentPath.autoClose=!0,A}function u($){function O(ne,k,re){const de=x(k),L=x(re);j===0?A.moveTo(de,L):A.lineTo(de,L),j++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new pi;let j=0;return $.getAttribute("points").replace(C,O),A.currentPath.autoClose=!1,A}function h($){const O=x($.getAttribute("cx")||0),C=x($.getAttribute("cy")||0),A=x($.getAttribute("r")||0),j=new Ji;j.absarc(O,C,A,0,Math.PI*2);const ne=new pi;return ne.subPaths.push(j),ne}function f($){const O=x($.getAttribute("cx")||0),C=x($.getAttribute("cy")||0),A=x($.getAttribute("rx")||0),j=x($.getAttribute("ry")||0),ne=new Ji;ne.absellipse(O,C,A,j,0,Math.PI*2);const k=new pi;return k.subPaths.push(ne),k}function d($){const O=x($.getAttribute("x1")||0),C=x($.getAttribute("y1")||0),A=x($.getAttribute("x2")||0),j=x($.getAttribute("y2")||0),ne=new pi;return ne.moveTo(O,C),ne.lineTo(A,j),ne.currentPath.autoClose=!1,ne}function g($,O){O=Object.assign({},O);let C={};if($.hasAttribute("class")){const k=$.getAttribute("class").split(/\s/).filter(Boolean).map(re=>re.trim());for(let re=0;re<k.length;re++)C=Object.assign(C,H["."+k[re]])}$.hasAttribute("id")&&(C=Object.assign(C,H["#"+$.getAttribute("id")]));function A(k,re,de){de===void 0&&(de=function(G){return G.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),G}),$.hasAttribute(k)&&(O[re]=de($.getAttribute(k))),C[k]&&(O[re]=de(C[k])),$.style&&$.style[k]!==""&&(O[re]=de($.style[k]))}function j(k){return Math.max(0,Math.min(1,x(k)))}function ne(k){return Math.max(0,x(k))}return A("fill","fill"),A("fill-opacity","fillOpacity",j),A("fill-rule","fillRule"),A("opacity","opacity",j),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",j),A("stroke-width","strokeWidth",ne),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",ne),A("visibility","visibility"),O}function _($,O){return $-(O-$)}function m($,O,C){if(typeof $!="string")throw new TypeError("Invalid input: "+typeof $);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},j=0,ne=1,k=2,re=3;let de=j,L=!0,G="",q="";const Q=[];function J(Ee,Ue,N){const w=new SyntaxError('Unexpected character "'+Ee+'" at index '+Ue+".");throw w.partial=N,w}function B(){G!==""&&(q===""?Q.push(Number(G)):Q.push(Number(G)*Math.pow(10,Number(q)))),G="",q=""}let I;const oe=$.length;for(let Ee=0;Ee<oe;Ee++){if(I=$[Ee],Array.isArray(O)&&O.includes(Q.length%C)&&A.FLAGS.test(I)){de=ne,G=I,B();continue}if(de===j){if(A.WHITESPACE.test(I))continue;if(A.DIGIT.test(I)||A.SIGN.test(I)){de=ne,G=I;continue}if(A.POINT.test(I)){de=k,G=I;continue}A.COMMA.test(I)&&(L&&J(I,Ee,Q),L=!0)}if(de===ne){if(A.DIGIT.test(I)){G+=I;continue}if(A.POINT.test(I)){G+=I,de=k;continue}if(A.EXP.test(I)){de=re;continue}A.SIGN.test(I)&&G.length===1&&A.SIGN.test(G[0])&&J(I,Ee,Q)}if(de===k){if(A.DIGIT.test(I)){G+=I;continue}if(A.EXP.test(I)){de=re;continue}A.POINT.test(I)&&G[G.length-1]==="."&&J(I,Ee,Q)}if(de===re){if(A.DIGIT.test(I)){q+=I;continue}if(A.SIGN.test(I)){if(q===""){q+=I;continue}q.length===1&&A.SIGN.test(q)&&J(I,Ee,Q)}}A.WHITESPACE.test(I)?(B(),de=j,L=!1):A.COMMA.test(I)?(B(),de=j,L=!0):A.SIGN.test(I)?(B(),de=ne,G=I):A.POINT.test(I)?(B(),de=k,G=I):J(I,Ee,Q)}return B(),Q}const p=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x($){let O="px";if(typeof $=="string"||$ instanceof String)for(let A=0,j=p.length;A<j;A++){const ne=p[A];if($.endsWith(ne)){O=ne,$=$.substring(0,$.length-ne.length);break}}let C;return O==="px"&&t.defaultUnit!=="px"?C=v.in[t.defaultUnit]/t.defaultDPI:(C=v[O][t.defaultUnit],C<0&&(C=v[O].in*t.defaultDPI)),C*parseFloat($)}function y($){if(!($.hasAttribute("transform")||$.nodeName==="use"&&($.hasAttribute("x")||$.hasAttribute("y"))))return null;const O=b($);return Y.length>0&&O.premultiply(Y[Y.length-1]),ue.copy(O),Y.push(O),O}function b($){const O=new Xe,C=W;if($.nodeName==="use"&&($.hasAttribute("x")||$.hasAttribute("y"))){const A=x($.getAttribute("x")),j=x($.getAttribute("y"));O.translate(A,j)}if($.hasAttribute("transform")){const A=$.getAttribute("transform").split(")");for(let j=A.length-1;j>=0;j--){const ne=A[j].trim();if(ne==="")continue;const k=ne.indexOf("("),re=ne.length;if(k>0&&k<re){const de=ne.slice(0,k),L=m(ne.slice(k+1));switch(C.identity(),de){case"translate":if(L.length>=1){const G=L[0];let q=0;L.length>=2&&(q=L[1]),C.translate(G,q)}break;case"rotate":if(L.length>=1){let G=0,q=0,Q=0;G=L[0]*Math.PI/180,L.length>=3&&(q=L[1],Q=L[2]),V.makeTranslation(-q,-Q),X.makeRotation(G),F.multiplyMatrices(X,V),V.makeTranslation(q,Q),C.multiplyMatrices(V,F)}break;case"scale":if(L.length>=1){const G=L[0];let q=G;L.length>=2&&(q=L[1]),C.scale(G,q)}break;case"skewX":L.length===1&&C.set(1,Math.tan(L[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":L.length===1&&C.set(1,0,0,Math.tan(L[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":L.length===6&&C.set(L[0],L[2],L[4],L[1],L[3],L[5],0,0,1);break}}O.premultiply(C)}}return O}function E($,O){function C(k){he.set(k.x,k.y,1).applyMatrix3(O),k.set(he.x,he.y)}function A(k){const re=k.xRadius,de=k.yRadius,L=Math.cos(k.aRotation),G=Math.sin(k.aRotation),q=new z(re*L,re*G,0),Q=new z(-de*G,de*L,0),J=q.applyMatrix3(O),B=Q.applyMatrix3(O),I=W.set(J.x,B.x,0,J.y,B.y,0,0,0,1),oe=V.copy(I).invert(),N=X.copy(oe).transpose().multiply(oe).elements,w=D(N[0],N[1],N[4]),Z=Math.sqrt(w.rt1),se=Math.sqrt(w.rt2);if(k.xRadius=1/Z,k.yRadius=1/se,k.aRotation=Math.atan2(w.sn,w.cs),!((k.aEndAngle-k.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const le=V.set(Z,0,0,0,se,0,0,0,1),Pe=X.set(w.cs,w.sn,0,-w.sn,w.cs,0,0,0,1),_e=le.multiply(Pe).multiply(I),Ie=De=>{const{x:ye,y:Ae}=new z(Math.cos(De),Math.sin(De),0).applyMatrix3(_e);return Math.atan2(Ae,ye)};k.aStartAngle=Ie(k.aStartAngle),k.aEndAngle=Ie(k.aEndAngle),T(O)&&(k.aClockwise=!k.aClockwise)}}function j(k){const re=M(O),de=S(O);k.xRadius*=re,k.yRadius*=de;const L=re>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);k.aRotation+=L,T(O)&&(k.aStartAngle*=-1,k.aEndAngle*=-1,k.aClockwise=!k.aClockwise)}const ne=$.subPaths;for(let k=0,re=ne.length;k<re;k++){const L=ne[k].curves;for(let G=0;G<L.length;G++){const q=L[G];q.isLineCurve?(C(q.v1),C(q.v2)):q.isCubicBezierCurve?(C(q.v0),C(q.v1),C(q.v2),C(q.v3)):q.isQuadraticBezierCurve?(C(q.v0),C(q.v1),C(q.v2)):q.isEllipseCurve&&(ie.set(q.aX,q.aY),C(ie),q.aX=ie.x,q.aY=ie.y,R(O)?A(q):j(q))}}}function T($){const O=$.elements;return O[0]*O[4]-O[1]*O[3]<0}function R($){const O=$.elements,C=O[0]*O[3]+O[1]*O[4];if(C===0)return!1;const A=M($),j=S($);return Math.abs(C/(A*j))>Number.EPSILON}function M($){const O=$.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function S($){const O=$.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function D($,O,C){let A,j,ne,k,re;const de=$+C,L=$-C,G=Math.sqrt(L*L+4*O*O);return de>0?(A=.5*(de+G),re=1/A,j=$*re*C-O*re*O):de<0?j=.5*(de-G):(A=.5*G,j=-.5*G),L>0?ne=L+G:ne=L-G,Math.abs(ne)>2*Math.abs(O)?(re=-2*O/ne,k=1/Math.sqrt(1+re*re),ne=re*k):Math.abs(O)===0?(ne=1,k=0):(re=-.5*ne/O,ne=1/Math.sqrt(1+re*re),k=re*ne),L>0&&(re=ne,ne=-k,k=re),{rt1:A,rt2:j,cs:ne,sn:k}}const U=[],H={},Y=[],W=new Xe,V=new Xe,X=new Xe,F=new Xe,ie=new fe,he=new z,ue=new Xe,xe=new DOMParser().parseFromString(e,"image/svg+xml");return n(xe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:xe.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,m,p,v){const x=_.x,y=m.x,b=p.x,E=v.x,T=_.y,R=m.y,M=p.y,S=v.y,D=(E-b)*(T-M)-(S-M)*(x-b),U=(y-x)*(T-M)-(R-T)*(x-b),H=(S-M)*(y-x)-(E-b)*(R-T),Y=D/H,W=U/H;if(H===0&&D!==0||Y<=0||Y>=1||W<0||W>1)return null;if(D===0&&H===0){for(let V=0;V<2;V++)if(o(V===0?p:v,_,m),s.loc==n.ORIGIN){const X=V===0?p:v;return{x:X.x,y:X.y,t:s.t}}else if(s.loc==n.BETWEEN){const X=+(x+s.t*(y-x)).toPrecision(10),F=+(T+s.t*(R-T)).toPrecision(10);return{x:X,y:F,t:s.t}}return null}else{for(let F=0;F<2;F++)if(o(F===0?p:v,_,m),s.loc==n.ORIGIN){const ie=F===0?p:v;return{x:ie.x,y:ie.y,t:s.t}}const V=+(x+Y*(y-x)).toPrecision(10),X=+(T+Y*(R-T)).toPrecision(10);return{x:V,y:X,t:Y}}}function o(_,m,p){const v=p.x-m.x,x=p.y-m.y,y=_.x-m.x,b=_.y-m.y,E=v*b-y*x;if(_.x===m.x&&_.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===p.x&&_.y===p.y){s.loc=n.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=n.LEFT;return}if(E>Number.EPSILON){s.loc=n.RIGHT;return}if(v*y<0||x*b<0){s.loc=n.BEHIND;return}if(Math.sqrt(v*v+x*x)<Math.sqrt(y*y+b*b)){s.loc=n.BEYOND;return}let T;v!==0?T=y/v:T=b/x,s.loc=n.BETWEEN,s.t=T}function a(_,m){const p=[],v=[];for(let x=1;x<_.length;x++){const y=_[x-1],b=_[x];for(let E=1;E<m.length;E++){const T=m[E-1],R=m[E],M=r(y,b,T,R);M!==null&&p.find(S=>S.t<=M.t+Number.EPSILON&&S.t>=M.t-Number.EPSILON)===void 0&&(p.push(M),v.push(new fe(M.x,M.y)))}}return v}function c(_,m,p){const v=new fe;m.getCenter(v);const x=[];return p.forEach(y=>{y.boundingBox.containsPoint(v)&&a(_,y.points).forEach(E=>{x.push({identifier:y.identifier,isCW:y.isCW,point:E})})}),x.sort((y,b)=>y.point.x-b.point.x),x}function l(_,m,p,v,x){(x==null||x==="")&&(x="nonzero");const y=new fe;_.boundingBox.getCenter(y);const b=[new fe(p,y.y),new fe(v,y.y)],E=c(b,_.boundingBox,m);E.sort((U,H)=>U.point.x-H.point.x);const T=[],R=[];E.forEach(U=>{U.identifier===_.identifier?T.push(U):R.push(U)});const M=T[0].point.x,S=[];let D=0;for(;D<R.length&&R[D].point.x<M;)S.length>0&&S[S.length-1]===R[D].identifier?S.pop():S.push(R[D].identifier),D++;if(S.push(_.identifier),x==="evenodd"){const U=S.length%2===0,H=S[S.length-2];return{identifier:_.identifier,isHole:U,for:H}}else if(x==="nonzero"){let U=!0,H=null,Y=null;for(let W=0;W<S.length;W++){const V=S[W];U?(Y=m[V].isCW,U=!1,H=V):Y!==m[V].isCW&&(Y=m[V].isCW,U=!0)}return{identifier:_.identifier,isHole:U,for:H}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(_=>{const m=_.getPoints();let p=-999999999,v=999999999,x=-999999999,y=999999999;for(let b=0;b<m.length;b++){const E=m[b];E.y>p&&(p=E.y),E.y<v&&(v=E.y),E.x>x&&(x=E.x),E.x<y&&(y=E.x)}return h<=x&&(h=x+1),u>=y&&(u=y-1),{curves:_.curves,points:m,isCW:tn.isClockWise(m),identifier:-1,boundingBox:new rm(new fe(y,v),new fe(x,p))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const d=f.map(_=>l(_,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!d[_.identifier].isHole){const p=new ri;p.curves=_.curves,d.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{const y=f[x.identifier],b=new Ji;b.curves=y.curves,p.holes.push(b)}),g.push(p)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){const r=[],o=[],a=[];if(io.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;const c=new Mt;return c.setAttribute("position",new lt(r,3)),c.setAttribute("normal",new lt(o,3)),c.setAttribute("uv",new lt(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,c){const l=new fe,u=new fe,h=new fe,f=new fe,d=new fe,g=new fe,_=new fe,m=new fe,p=new fe,v=new fe,x=new fe,y=new fe,b=new fe,E=new fe,T=new fe,R=new fe,M=new fe;n=n!==void 0?n:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=L(e);const S=e.length;if(S<2)return 0;const D=e[0].equals(e[S-1]);let U,H=e[0],Y;const W=t.strokeWidth/2,V=1/(S-1);let X=0,F,ie,he,ue,xe=!1,be=0,$=c*3,O=c*2;C(e[0],e[1],l).multiplyScalar(W),m.copy(e[0]).sub(l),p.copy(e[0]).add(l),v.copy(m),x.copy(p);for(let G=1;G<S;G++){U=e[G],G===S-1?D?Y=e[1]:Y=void 0:Y=e[G+1];const q=l;if(C(H,U,q),h.copy(q).multiplyScalar(W),y.copy(U).sub(h),b.copy(U).add(h),F=X+V,ie=!1,Y!==void 0){C(U,Y,u),h.copy(u).multiplyScalar(W),E.copy(U).sub(h),T.copy(U).add(h),he=!0,h.subVectors(Y,H),q.dot(h)<0&&(he=!1),G===1&&(xe=he),h.subVectors(Y,U),h.normalize();const Q=Math.abs(q.dot(h));if(Q>Number.EPSILON){const J=W/Q;h.multiplyScalar(-J),f.subVectors(U,H),d.copy(f).setLength(J).add(h),R.copy(d).negate();const B=d.length(),I=f.length();f.divideScalar(I),g.subVectors(Y,U);const oe=g.length();switch(g.divideScalar(oe),f.dot(R)<I&&g.dot(R)<oe&&(ie=!0),M.copy(d).add(U),R.add(U),ue=!1,ie?he?(T.copy(R),b.copy(R)):(E.copy(R),y.copy(R)):ne(),t.strokeLineJoin){case"bevel":k(he,ie,F);break;case"round":re(he,ie),he?j(U,y,E,F,0):j(U,T,b,F,1);break;default:const Ee=W*t.strokeMiterLimit/B;if(Ee<1)if(t.strokeLineJoin!=="miter-clip"){k(he,ie,F);break}else re(he,ie),he?(g.subVectors(M,y).multiplyScalar(Ee).add(y),_.subVectors(M,E).multiplyScalar(Ee).add(E),A(y,F,0),A(g,F,0),A(U,F,.5),A(U,F,.5),A(g,F,0),A(_,F,0),A(U,F,.5),A(_,F,0),A(E,F,0)):(g.subVectors(M,b).multiplyScalar(Ee).add(b),_.subVectors(M,T).multiplyScalar(Ee).add(T),A(b,F,1),A(g,F,1),A(U,F,.5),A(U,F,.5),A(g,F,1),A(_,F,1),A(U,F,.5),A(_,F,1),A(T,F,1));else ie?(he?(A(p,X,1),A(m,X,0),A(M,F,0),A(p,X,1),A(M,F,0),A(R,F,1)):(A(p,X,1),A(m,X,0),A(M,F,1),A(m,X,0),A(R,F,0),A(M,F,1)),he?E.copy(M):T.copy(M)):he?(A(y,F,0),A(M,F,0),A(U,F,.5),A(U,F,.5),A(M,F,0),A(E,F,0)):(A(b,F,1),A(M,F,1),A(U,F,.5),A(U,F,.5),A(M,F,1),A(T,F,1)),ue=!0;break}}else ne()}else ne();!D&&G===S-1&&de(e[0],v,x,he,!0,X),X=F,H=U,m.copy(E),p.copy(T)}if(!D)de(U,y,b,he,!1,F);else if(ie&&r){let G=M,q=R;xe!==he&&(G=R,q=M),he?(ue||xe)&&(q.toArray(r,0),q.toArray(r,9),ue&&G.toArray(r,3)):(ue||!xe)&&(q.toArray(r,3),q.toArray(r,9),ue&&G.toArray(r,0))}return be;function C(G,q,Q){return Q.subVectors(q,G),Q.set(-Q.y,Q.x).normalize()}function A(G,q,Q){r&&(r[$]=G.x,r[$+1]=G.y,r[$+2]=0,o&&(o[$]=0,o[$+1]=0,o[$+2]=1),$+=3,a&&(a[O]=q,a[O+1]=Q,O+=2)),be+=3}function j(G,q,Q,J,B){l.copy(q).sub(G).normalize(),u.copy(Q).sub(G).normalize();let I=Math.PI;const oe=l.dot(u);Math.abs(oe)<1&&(I=Math.abs(Math.acos(oe))),I/=n,h.copy(q);for(let Ee=0,Ue=n-1;Ee<Ue;Ee++)f.copy(h).rotateAround(G,I),A(h,J,B),A(f,J,B),A(G,J,.5),h.copy(f);A(f,J,B),A(Q,J,B),A(G,J,.5)}function ne(){A(p,X,1),A(m,X,0),A(y,F,0),A(p,X,1),A(y,F,0),A(b,F,1)}function k(G,q,Q){q?G?(A(p,X,1),A(m,X,0),A(y,F,0),A(p,X,1),A(y,F,0),A(R,F,1),A(y,Q,0),A(E,Q,0),A(R,Q,.5)):(A(p,X,1),A(m,X,0),A(b,F,1),A(m,X,0),A(R,F,0),A(b,F,1),A(b,Q,1),A(R,Q,0),A(T,Q,1)):G?(A(y,Q,0),A(E,Q,0),A(U,Q,.5)):(A(b,Q,1),A(T,Q,0),A(U,Q,.5))}function re(G,q){q&&(G?(A(p,X,1),A(m,X,0),A(y,F,0),A(p,X,1),A(y,F,0),A(R,F,1),A(y,X,0),A(U,F,.5),A(R,F,1),A(U,F,.5),A(E,X,0),A(R,F,1)):(A(p,X,1),A(m,X,0),A(b,F,1),A(m,X,0),A(R,F,0),A(b,F,1),A(b,X,1),A(R,F,0),A(U,F,.5),A(U,F,.5),A(R,F,0),A(T,X,1)))}function de(G,q,Q,J,B,I){switch(t.strokeLineCap){case"round":B?j(G,Q,q,I,.5):j(G,q,Q,I,.5);break;case"square":if(B)l.subVectors(q,G),u.set(l.y,-l.x),h.addVectors(l,u).add(G),f.subVectors(u,l).add(G),J?(h.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(h.toArray(r,3),a[7]===1?f.toArray(r,9):h.toArray(r,9),f.toArray(r,0));else{l.subVectors(Q,G),u.set(l.y,-l.x),h.addVectors(l,u).add(G),f.subVectors(u,l).add(G);const oe=r.length;J?(h.toArray(r,oe-3),f.toArray(r,oe-6),f.toArray(r,oe-12)):(f.toArray(r,oe-6),h.toArray(r,oe-3),f.toArray(r,oe-12))}break}}function L(G){let q=!1;for(let J=1,B=G.length-1;J<B;J++)if(G[J].distanceTo(G[J+1])<s){q=!0;break}if(!q)return G;const Q=[];Q.push(G[0]);for(let J=1,B=G.length-1;J<B;J++)G[J].distanceTo(G[J+1])>=s&&Q.push(G[J]);return Q.push(G[G.length-1]),Q}}}function Xx(i,e){const t=new io().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${e}"/></svg>`),n=io.createShapes(t.paths[0])[0].getPoints(16),s=Math.max(...n.map(h=>Math.hypot(h.x-500,h.y-500))),r=n.map(h=>({x:(h.x-500)/s*1.2,y:(500-h.y)/s*1.2})),o=(h,f,d,g)=>h*g-f*d;function a(h){const f=Math.cos(h),d=Math.sin(h);let g=1/0;for(let _=0;_<r.length;_++){const m=r[_],p=r[(_+1)%r.length],v=p.x-m.x,x=p.y-m.y,y=o(f,d,v,x);if(Math.abs(y)<1e-8)continue;const b=o(m.x,m.y,v,x)/y,E=o(m.x,m.y,f,d)/y;b>0&&E>=0&&E<=1&&(g=Math.min(g,b))}return Number.isFinite(g)?g:.75}const c=i.positions.slice(),l=e.length%17,u=.74+l%5*.055;for(let h=0;h<c.length;h+=3){const f=i.positions[h],d=i.positions[h+1],g=i.positions[h+2],_=Math.min(1,Math.hypot(f,d)/.95),m=Math.atan2(d,f),p=a(m),v=_*(.56+(p-.56)*_),x=Math.cos(m)*v,y=Math.sin(m)*v;let b=1/0;for(let M=0;M<r.length;M++){const S=r[M],D=r[(M+1)%r.length],U=D.x-S.x,H=D.y-S.y,Y=Math.max(0,Math.min(1,((x-S.x)*U+(y-S.y)*H)/(U*U+H*H||1)));b=Math.min(b,Math.hypot(x-S.x-Y*U,y-S.y-Y*H))}let E=0;for(let M=0;M<3;M++){const S=M*2.094+l*.37,D=Math.atan2(Math.sin(m-S),Math.cos(m-S)),U=.2+M%2*.07;E+=(.006+M%3*.003)*Math.exp(-((D/U)**2))*Math.exp(-(((b-.15)/.15)**2))}const T=Math.sign(g-.4),R=.35*u*Math.sqrt(1-Math.exp(-b/.15));c[h]=x,c[h+1]=y,c[h+2]=.4+T*Math.max(0,R-E*Math.min(1,b/.08))}return{...i,positions:c}}function qx(){const i=Array.from({length:10},(s,r)=>{const o=-Math.PI/2+r*Math.PI/5,a=r%2?195:330;return{x:500+Math.cos(o)*a,y:500+Math.sin(o)*a}}),e=(s,r,o)=>({x:s.x+(r.x-s.x)*o,y:s.y+(r.y-s.y)*o}),t=e(i[0],i[9],.34);let n=`M ${t.x} ${t.y}`;for(let s=0;s<10;s++){const r=i[s],o=i[(s+1)%10],a=e(r,o,.34),c=e(o,r,.34);n+=` Q ${r.x} ${r.y} ${a.x} ${a.y} L ${c.x} ${c.y}`}return n+" Z"}const yh={triangle:"M 474 205 Q 500 160 526 205 L 774 635 Q 800 680 748 680 L 252 680 Q 200 680 226 635 Z",square:"M 295 180 L 705 180 Q 820 180 820 295 L 820 705 Q 820 820 705 820 L 295 820 Q 180 820 180 705 L 180 295 Q 180 180 295 180 Z",heart:"M 500 340 C 415 185 180 220 180 390 C 180 535 350 665 480 765 Q 500 781 520 765 C 650 665 820 535 820 390 C 820 220 585 185 500 340 Z",star:qx(),spark:Yx()};function Yx(){const i=Array.from({length:16},(s,r)=>{const o=r*Math.PI/8-Math.PI/2,a=r%2?222:360;return{x:500+Math.cos(o)*a,y:500+Math.sin(o)*a}}),e=(s,r,o)=>({x:s.x+(r.x-s.x)*o,y:s.y+(r.y-s.y)*o}),t=e(i[0],i[15],.12);let n=`M ${t.x} ${t.y}`;for(let s=0;s<16;s++){const r=i[s],o=i[(s+1)%16],a=s%2?.22:.12,c=e(r,o,a),l=e(o,r,(s+1)%2?.22:.12);n+=` Q ${r.x} ${r.y} ${c.x} ${c.y} L ${l.x} ${l.y}`}return n+" Z"}function jx(i,e,t=()=>{}){const n=new WeakMap,s=new WeakMap,r=[...document.querySelectorAll("[data-color-mode]")],a=["#e85a18","#ed4935","#e9b51b","#a4bd22","#14b785","#12a9c4","#337fe5","#9252df","#e33c90","#ef8420","#df2852","#f06479","#edcd20","#6ebc27","#19aa52","#08b3a4","#16b5e3","#405de0","#bc43dc","#ed45b9"].map(f=>({background:"#242522",accent:f,tones:["#494640","#837767","#b8aa92","#353633","#625b52"]}));let c="pop",l=-1,u=new Set;try{c=localStorage.getItem("crowd-color-mode")==="chic"?"chic":"pop"}catch{}function h(f){c!==f&&(l=-1),c=f,document.body.dataset.colorMode=f;let d;f==="chic"&&(l=(l+1)%a.length,d=a[l]),document.body.dataset.chicVariant="warm",document.body.dataset.chicAccent=d?.accent||"",document.body.dataset.chicAccentIndex=d?String(l):"";try{localStorage.setItem("crowd-color-mode",f)}catch{}const g=new Set;if(d){const p=[];i.traverse(x=>{const y=x.userData.actor;y?.face&&y.body===x&&p.push(y)});for(let x=p.length-1;x>0;x--){const y=Math.floor(Math.random()*(x+1));[p[x],p[y]]=[p[y],p[x]]}const v=Math.ceil(p.length*.3);for(const x of p.slice(0,v))g.add(x);v<p.length&&g.size===u.size&&[...g].every(x=>u.has(x))&&(g.delete(p[v-1]),g.add(p[v])),u=g}document.body.dataset.chicAccentCount=String(g.size);const _=new Set;i.traverse(p=>{p.isLight&&(s.has(p)||s.set(p,p.color.clone()),p.color.copy(f==="pop"?s.get(p):new ze("#ffffff")));for(const v of p.material?Array.isArray(p.material)?p.material:[p.material]:[]){if(_.has(v)||!v.color)continue;_.add(v),n.has(v)||n.set(v,{color:v.color.clone(),attenuation:v.attenuationColor?.clone()});const x=n.get(v);if(f==="pop"){v.color.copy(x.color),x.attenuation&&v.attenuationColor.copy(x.attenuation);continue}const y=Math.sqrt(.2126*x.color.r+.7152*x.color.g+.0722*x.color.b),b=x.color.getHSL({h:0,s:0,l:0}),E=p.userData.actor,T=E?.body===p||E&&!E.face;let R;T?g.has(E)?R=d.accent:R=d.tones[Math.min(4,Math.floor(b.h*5))]:R=y<.2?"#242320":y>.8?"#f3eddf":"#a18a78",v.color.set(R),v.attenuationColor&&v.attenuationColor.copy(v.color)}});const m=d?.background||"#dcd8d0";e.setClearColor(m),document.body.style.background=m,document.body.style.setProperty("--portfolio-link-color",new ze(m).getHSL({h:0,s:0,l:0}).l<.3?"#eee6d8":"#454039");for(const p of r)p.setAttribute("aria-pressed",String(p.dataset.colorMode===f));t()}for(const f of r)f.addEventListener("click",()=>h(f.dataset.colorMode));return h(c),{apply:h}}function Kx(i=192,e=20){const t=[0,0,.798],n=[],s=[];for(let o=1;o<e;o++){const a=o/e*Math.PI;for(let c=0;c<i;c++){const l=c/i*Math.PI*2;t.push(.95*Math.sin(a)*Math.cos(l),.95*Math.sin(a)*Math.sin(l),.4+.398*Math.cos(a)),o===e/2&&s.push(1+(o-1)*i+c)}}const r=t.length/3;t.push(0,0,.002);for(let o=0;o<i;o++){const a=(o+1)%i;n.push(0,1+o,1+a);for(let l=0;l<e-2;l++){const u=1+l*i+o,h=1+l*i+a,f=u+i,d=h+i;n.push(u,f,h,h,f,d)}const c=1+(e-2)*i;n.push(r,c+a,c+o)}return{positions:t,triangles:n,rim:s}}function $x(i){if(i.noSeam)return i;const e=i.positions.slice();for(let s=0;s<e.length;s+=3){const r=e[s],o=e[s+1],a=e[s+2]-.4,c=Math.exp(-(((r+.26)/.48)**2+((o-.28)/.42)**2)),l=Math.exp(-(((r-.24)/.52)**2+((o+.3)/.4)**2));e[s+2]=.4+a*(1.02-.115*c-.088*l),e[s]*=1+.016*Math.exp(-(((o+.38)/.45)**2))}const t=Array.from({length:e.length/3},()=>new Set),n=new Set(i.rim);for(let s=0;s<i.triangles.length;s+=3)for(let r=0;r<3;r++){const o=i.triangles[s+r],a=i.triangles[s+(r+1)%3];t[o].add(a),t[a].add(o)}for(let s=0;s<20;s++){const r=e.slice();for(let o=0;o<t.length;o++)if(!n.has(o)&&t[o].size){let a=0;for(const c of t[o])a+=r[c*3+2];a/=t[o].size,e[o*3+2]=r[o*3+2]*.55+a*.45}}return{...i,positions:e}}function Jx(i){const e=i.attributes.position,t=i.attributes.normal;if(e.count<1800)return i;i.computeBoundingBox();const n=i.boundingBox.getSize(new z),s=Math.max(n.x,n.y,n.z)/32,r=new Map,o=[],a=new Uint32Array(e.count);for(let f=0;f<e.count;f++){const d=[e.getX(f),e.getY(f),e.getZ(f)].map(m=>Math.round(m/s)).join(",");let g=r.get(d);g===void 0&&(g=o.length,r.set(d,g),o.push({p:new z,n:new z,count:0}));const _=o[g];_.p.add(new z().fromBufferAttribute(e,f)),t&&_.n.add(new z().fromBufferAttribute(t,f)),_.count++,a[f]=g}const c=[],l=new Set,u=i.index?.count||e.count;for(let f=0;f<u;f+=3){const d=[0,1,2].map(_=>a[i.index?i.index.getX(f+_):f+_]);if(new Set(d).size<3)continue;const g=d.slice().sort((_,m)=>_-m).join(",");l.has(g)||(l.add(g),c.push(...d))}const h=new Mt;return h.setAttribute("position",new lt(o.flatMap(f=>f.p.divideScalar(f.count).toArray()),3)),h.setAttribute("normal",new lt(o.flatMap(f=>f.n.normalize().toArray()),3)),h.setIndex(c),h.computeBoundingBox(),h.computeBoundingSphere(),h}class Zx extends Sc{constructor(){super();const e=new us;e.deleteAttribute("uv");const t=new Hn({side:Ft}),n=new Hn,s=new wu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new tt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new lu(e,n,6),a=new dt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new tt(e,qi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new tt(e,qi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new tt(e,qi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new tt(e,qi(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new tt(e,qi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new tt(e,qi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function qi(i){return new Ap({color:0,emissive:16777215,emissiveIntensity:i})}function vh(i,e){if(e===Bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ga||e===Jh){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ga)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Qx extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new __(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ns.extractUrlBase(e);o=Ns.resolveURL(l,this.path)}else o=Ns.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Lc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Nu){try{o[Je.KHR_BINARY_GLTF]=new y_(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new L_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new n_;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new v_(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new M_;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new S_;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function e_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t_{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ot);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new no(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wu(u),l.distance=h;break;case"spot":l=new Xp(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class n_{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return ti}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class s_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}}class r_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class o_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class a_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class c_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class l_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ot),Promise.all(r)}}class h_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class u_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ot),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}}class f_{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class d_{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class p_{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class m_{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class g_{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class x_{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class __{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Zt.TRIANGLES&&l.mode!==Zt.TRIANGLE_STRIP&&l.mode!==Zt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const _=new Ye,m=new z,p=new ai,v=new z(1,1,1),x=new lu(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in c)if(y==="_COLOR_0"){const b=c[y];x.instanceColor=new Xa(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Nu="glTF",ws=12,Mh={JSON:1313821514,BIN:5130562};class y_{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ws,r=new DataView(e,ws);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Mh.JSON){const l=new Uint8Array(e,ws+o,a);this.content=n.decode(l)}else if(c===Mh.BIN){const l=ws+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class v_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Za[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Za[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Zi[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(d)},a,l,Ot,f)})})}}class M_{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class S_{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Uu extends tr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+h;for(let y=0;y!==a;y++){const b=o[_+y+a],E=o[_+y+c]*u,T=o[g+y+a],R=o[g+y]*u;r[y]=v*b+x*E+m*T+p*R}return r}}const b_=new ai;class E_ extends Uu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return b_.fromArray(r).normalize().toArray(r),r}}const Zt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sh={9728:Rt,9729:Vt,9984:Gh,9985:kr,9986:As,9987:Sn},bh={33071:ei,33648:$r,10497:ns},Zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},T_={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},Qo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function w_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),i.DefaultMaterial}function xi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function A_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function R_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C_(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ea(t.attributes):e=i.indices+":"+ea(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ea(i.targets[n]);return e}function ea(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Qa(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const I_=new Ye;class L_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Gp(this.options.manager):this.textureLoader=new jp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xi(r,a,s),vn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ns.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Zo[s.type],a=Zi[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new yt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Zo[s.type],l=Zi[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(v);x||(_=new l(a,p*d,s.count*d/u),x=new Od(_,d/u),t.cache.add(v,x)),m=new bc(x,c,f%d/u,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new yt(_,c,g);if(s.sparse!==void 0){const p=Zo.SCALAR,v=Zi[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,b=new v(o[1],x,s.sparse.count*p),E=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=b.length;T<R;T++){const M=b[T];if(m.setX(M,E[T*c]),c>=2&&m.setY(M,E[T*c+1]),c>=3&&m.setZ(M,E[T*c+2]),c>=4&&m.setW(M,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Sh[f.magFilter]||Vt,u.minFilter=Sh[f.minFilter]||Sn,u.wrapS=bh[f.wrapS]||ns,u.wrapT=bh[f.wrapT]||ns,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Rt&&u.minFilter!==Vt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new bt(_);m.needsUpdate=!0,f(m)}),t.load(Ns.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),vn(h,o),h.userData.mimeType=o.mimeType||P_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new uu,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new hu,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ot),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,St)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ln);const u=r.alphaMode||Qo.OPAQUE;if(u===Qo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ti&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ti&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ti){const h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],Ot)}return r.emissiveTexture!==void 0&&o!==ti&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),vn(h,r),t.associations.set(h,{materials:e}),r.extensions&&xi(s,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Eh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=C_(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Eh(new Mt,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?w_(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const v=l[d];if(m.mode===Zt.TRIANGLES||m.mode===Zt.TRIANGLE_STRIP||m.mode===Zt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new zd(_,v):new tt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Zt.TRIANGLE_STRIP?p.geometry=vh(p.geometry,Jh):m.mode===Zt.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,Ga));else if(m.mode===Zt.LINES)p=new Xd(_,v);else if(m.mode===Zt.LINE_STRIP)p=new wc(_,v);else if(m.mode===Zt.LINE_LOOP)p=new qd(_,v);else if(m.mode===Zt.POINTS)p=new Yd(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&R_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),vn(p,r),m.extensions&&xi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&xi(s,h[0],r),h[0];const f=new Ut;r.extensions&&xi(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Xs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new nr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ec(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,y=f.length;x<y;x++){const b=f[x],E=d[x],T=g[x],R=_[x],M=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const S=n._createAnimationTracks(b,E,T,R,M);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const v=new Fp(r,void 0,p);return vn(v,s),v})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,I_)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new au:l.length>1?u=new Ut:l.length===1?u=l[0]:u=new dt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),vn(u,r),r.extensions&&xi(n,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Ut;n.name&&(r.name=s.createUniqueName(n.name)),vn(r,n),n.extensions&&xi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof fn||f instanceof bt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];Kn[r.path]===Kn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Kn[r.path]){case Kn.weights:l=os;break;case Kn.rotation:l=as;break;case Kn.translation:case Kn.scale:l=cs;break;default:n.itemSize===1?l=os:l=cs;break}const u=s.interpolation!==void 0?T_[s.interpolation]:Ws,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+Kn[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qa(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof as?E_:Uu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function D_(i,e,t){const n=e.attributes,s=new wn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const u=Qa(Zi[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,c=new z;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Qa(Zi[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Eh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Za[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),vn(i,e),D_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?A_(i,e.targets,t):i})}const Th={cat:[[.9,.19,.31],[2.23,.19,.31]],rabbit:[[1.1,.16,.65],[1.98,.17,.53]],bear:[[.82,.3,.24],[2.31,.3,.24]],devil:[[1,.13,.46],[2.14,.13,.46]],sprout:[[1.32,.28,.37],[1.98,.21,.25]],bat:[[.1,.19,.28],[.54,.13,.18],[2.6,.13,.18],[3.04,.19,.28]],seal:[[3.85,.22,.2],[5.38,.22,.28]],ghost:[[4.05,.17,.22],[4.72,.18,.29],[5.4,.17,.22]],axolotl:[[.3,.13,.23],[.62,.13,.27],[.92,.13,.23],[2.22,.13,.23],[2.54,.13,.27],[2.84,.13,.23]],droop:[[1.04,.29,.47],[2.23,.36,.19]],fin:[[.18,.25,.23],[1.63,.16,.27],[4.9,.32,.27]],crown:[[1.05,.14,.23],[1.57,.15,.36],[2.09,.14,.23]]};function N_(i){const e=i.positions.length/3,t=Array.from({length:e},(u,h)=>[h,h]),n=Array.from({length:e},()=>new Set),s=new Map,r=[];for(let u=0;u<i.triangles.length;u+=3){const h=i.triangles.slice(u,u+3);for(let f=0;f<3;f++){const d=h[f],g=h[(f+1)%3],_=h[(f+2)%3],m=[d,g].sort((p,v)=>p-v).join(",");n[d].add(g),n[g].add(d),s.has(m)||s.set(m,{a:d,b:g,op:[]}),s.get(m).op.push(_)}}const o=n.map((u,h)=>{const f=u.size,d=f===3?3/16:3/(8*f);return[[h,1-f*d],...[...u].map(g=>[g,d])]});for(const u of s.values())u.id=t.length,t.push([u.a,u.b]),o.push([[u.a,.375],[u.b,.375],...u.op.map(h=>[h,.125])]);const a=(u,h)=>s.get([u,h].sort((f,d)=>f-d).join(",")).id;for(let u=0;u<i.triangles.length;u+=3){const[h,f,d]=i.triangles.slice(u,u+3),g=a(h,f),_=a(f,d),m=a(d,h);r.push(h,g,m,g,f,_,m,_,d,g,_,m)}const c=[];for(let u=0;u<i.rim.length;u++){const h=i.rim[u],f=i.rim[(u+1)%i.rim.length];if(c.push(h),!n[h].has(f)){const d=[...n[h]].filter(g=>n[f].has(g));if(!d.length)throw Error("Disconnected seam boundary");d.sort((g,_)=>Math.abs(i.positions[g*3+2]-.45)-Math.abs(i.positions[_*3+2]-.45)),c.push(d[0])}}const l=c.flatMap((u,h)=>[u,a(u,c[(h+1)%c.length])]);return{links:t,stencils:o,triangles:r,rim:l}}function Fu(i,e){const t=[0,0,0];for(const[n,s]of e)for(let r=0;r<3;r++)t[r]+=i[n*3+r]*s;return t}function U_(i,e="round"){const t=i.positions.slice();for(let n=0;n<t.length;n+=3){const s=i.positions[n],r=i.positions[n+1],o=Math.atan2(r,s);let a=1,c=1,l=1;if(Th[e]){const u=Math.hypot(s,r)/.95;let h=.82;for(const[f,d,g]of Th[e]){const _=Math.atan2(Math.sin(o-f),Math.cos(o-f));h+=g*Math.exp(-((_/d)**2))*Math.min(1,u*u)}a=h,c=h,l=.91}if(e==="horn"){const u=(d,g)=>Math.exp(-((Math.atan2(Math.sin(o-d),Math.cos(o-d))/g)**2)),h=Math.hypot(s,r)/.95,f=.84+(.49*u(1.48,.145)+.19*u(.72,.22)+.15*u(2.4,.25))*Math.min(1,h*h);a=f,c=f,l=.92}if(e==="bolster"&&(a=.6*(.92+.12*Math.exp(-(((r-.48)/.3)**2))),c=1.22,l=.88),e==="buddy"){const u=.74+.055*Math.cos(8*o+.2);a=u,c=u,l=.88}if(e==="pal"){const u=(d,g)=>Math.exp(-((Math.atan2(Math.sin(o-d),Math.cos(o-d))/g)**2)),h=Math.hypot(s,r)/.95,f=.84+(.4*u(1.02,.27)+.15*u(4.12,.29)+.16*u(5.23,.29)-.09*u(4.68,.22))*Math.min(1,h*h);a=f,c=f,l=.9}if(e==="oval"&&(a=.77,c=1.14),e==="bean"&&(a=.92,c=.88),e==="twin"&&(a=1-.3*Math.exp(-((r/.23)**2)),c=1.1,l=1-.12*Math.exp(-((r/.23)**2))),e==="cloud"){const u=.9+.1*Math.cos(3*o+.4);a=1.06*u,c=.85*u}if(e==="flower"){const u=.82+.18*Math.cos(5*o);a=u,c=u,l=.93}t[n]=s*a+(e==="bolster"?.18*((r/.95)**2-.4):0),t[n+1]=r*c+(e==="bean"?.16*(s/.95)**2:0),t[n+2]=.008+(i.positions[n+2]-.008)*l}return{...i,positions:t}}function F_(i,e,t=.76){const n=U_(i,e),s=t>=.9,r=t<.6;for(let o=0;o<n.positions.length;o+=3){const a=n.positions[o],c=n.positions[o+1],l=n.positions[o+2];if(s)n.positions[o]=a*(.86-.12*Math.tanh(c*2)),n.positions[o+1]=c*1.27,n.positions[o+2]=.008+(l-.008)*(1.02-.1*Math.tanh(c*2));else if(n.positions[o]=a*(1+.065*Math.exp(-(((c-.15)/.5)**2))),n.positions[o+1]=c*(r?.77:.88),n.positions[o+2]=.008+(l-.008)*(r?1.04:.98),e==="pal"){const u=Math.max(0,(c-.58)/.6);n.positions[o]-=u*.09,n.positions[o+1]+=u*.18,n.positions[o+2]-=u*.055}}return n}function O_(i,e){if(e==="coil")return B_();if(e!=="burst"&&e!=="petal")return F_(i,e,.72);const t={...i,positions:i.positions.slice()},n=e==="burst"?7:6,s=Array.from({length:256},(r,o)=>{const a=o/256*Math.PI*2,c=Math.pow((1+Math.cos(n*(a-Math.PI/2)))/2,e==="burst"?.7:.48),l=.44+(e==="burst"?.77:.68)*c;return[Math.cos(a)*l*.95,Math.sin(a)*l*.95]});for(let r=0;r<t.positions.length;r+=3){const o=i.positions[r],a=i.positions[r+1],c=i.positions[r+2],l=Math.atan2(a,o),u=Math.hypot(o,a)/.95,h=Math.pow((1+Math.cos(n*(l-Math.PI/2)))/2,e==="burst"?.7:.48),d=.74+(.44+(e==="burst"?.77:.68)*h-.74)*Math.min(1,u*u),g=o*d,_=a*d;let m=1/0;for(let v=0;v<s.length;v++){const x=s[v],y=s[(v+1)%s.length],b=y[0]-x[0],E=y[1]-x[1],T=Math.max(0,Math.min(1,((g-x[0])*b+(_-x[1])*E)/(b*b+E*E)));m=Math.min(m,Math.hypot(g-x[0]-T*b,_-x[1]-T*E))}const p=.34*Math.sqrt(1-Math.exp(-m/.14));t.positions[r]=g,t.positions[r+1]=_,t.positions[r+2]=.4+Math.sign(c-.4)*p}return t}function B_(){const i=[];for(let c=0;c<=120;c++){const l=c/120,u=Math.PI+l*Math.PI*4.5;i.push(new z(.7*Math.cos(u),.93-l*1.86,.69+.43*Math.sin(u)))}const e=new Cc(i),t=new ao(e,144,.205,12,!1),n=t.attributes.position,s=[],r=[],o=145,a=12;for(let c=0;c<o;c++)for(let l=0;l<a;l++){const u=c*13+l;s.push(n.getX(u),n.getY(u),n.getZ(u))}for(let c=0;c<o-1;c++)for(let l=0;l<a;l++){const u=c*a+l,h=(c+1)*a+l,f=c*a+(l+1)%a,d=(c+1)*a+(l+1)%a;r.push(u,f,h,h,f,d)}for(const c of[0,o-1]){const l=e.getPointAt(c===0?0:1),u=e.getTangentAt(c===0?0:1).multiplyScalar(c===0?-.16:.16),h=s.length/3;l.add(u),s.push(l.x,l.y,l.z);for(let f=0;f<a;f++){const d=c*a+f,g=c*a+(f+1)%a;c===0?r.push(h,g,d):r.push(h,d,g)}}for(let c=0;c<r.length;c+=3)[r[c+1],r[c+2]]=[r[c+2],r[c+1]];return t.dispose(),{positions:s,triangles:r,rim:Array.from({length:a},(c,l)=>l),noSeam:!0,faceAnchor:{x:-.68,y:.91}}}class z_ extends tt{constructor(e,t,n=!1,s=!1,r=1e4){const o=new Mt;super(o,t),this.isMarchingCubes=!0;const a=this,c=new Float32Array(36),l=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=r*3;this.positionArray=new Float32Array(x*3);const y=new yt(this.positionArray,3);y.setUsage(cr),o.setAttribute("position",y),this.normalArray=new Float32Array(x*3);const b=new yt(this.normalArray,3);if(b.setUsage(cr),o.setAttribute("normal",b),this.enableUvs){this.uvArray=new Float32Array(x*2);const E=new yt(this.uvArray,2);E.setUsage(cr),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const E=new yt(this.colorArray,3);E.setUsage(cr),o.setAttribute("color",E)}o.boundingSphere=new gn(new z,1)};function h(v,x,y){return v+(x-v)*y}function f(v,x,y,b,E,T,R,M,S,D){const U=(y-R)/(M-R),H=a.normal_cache;c[x+0]=b+U*a.delta,c[x+1]=E,c[x+2]=T,l[x+0]=h(H[v+0],H[v+3],U),l[x+1]=h(H[v+1],H[v+4],U),l[x+2]=h(H[v+2],H[v+5],U),u[x+0]=h(a.palette[S*3+0],a.palette[D*3+0],U),u[x+1]=h(a.palette[S*3+1],a.palette[D*3+1],U),u[x+2]=h(a.palette[S*3+2],a.palette[D*3+2],U)}function d(v,x,y,b,E,T,R,M,S,D){const U=(y-R)/(M-R),H=a.normal_cache;c[x+0]=b,c[x+1]=E+U*a.delta,c[x+2]=T;const Y=v+a.yd*3;l[x+0]=h(H[v+0],H[Y+0],U),l[x+1]=h(H[v+1],H[Y+1],U),l[x+2]=h(H[v+2],H[Y+2],U),u[x+0]=h(a.palette[S*3+0],a.palette[D*3+0],U),u[x+1]=h(a.palette[S*3+1],a.palette[D*3+1],U),u[x+2]=h(a.palette[S*3+2],a.palette[D*3+2],U)}function g(v,x,y,b,E,T,R,M,S,D){const U=(y-R)/(M-R),H=a.normal_cache;c[x+0]=b,c[x+1]=E,c[x+2]=T+U*a.delta;const Y=v+a.zd*3;l[x+0]=h(H[v+0],H[Y+0],U),l[x+1]=h(H[v+1],H[Y+1],U),l[x+2]=h(H[v+2],H[Y+2],U),u[x+0]=h(a.palette[S*3+0],a.palette[D*3+0],U),u[x+1]=h(a.palette[S*3+1],a.palette[D*3+1],U),u[x+2]=h(a.palette[S*3+2],a.palette[D*3+2],U)}function _(v){const x=v*3;a.normal_cache[x]===0&&(a.normal_cache[x+0]=a.field[v-1]-a.field[v+1],a.normal_cache[x+1]=a.field[v-a.yd]-a.field[v+a.yd],a.normal_cache[x+2]=a.field[v-a.zd]-a.field[v+a.zd])}function m(v,x,y,b,E){const T=b+1,R=b+a.yd,M=b+a.zd,S=T+a.yd,D=T+a.zd,U=b+a.yd+a.zd,H=T+a.yd+a.zd;let Y=0;const W=a.field[b],V=a.field[T],X=a.field[R],F=a.field[S],ie=a.field[M],he=a.field[D],ue=a.field[U],xe=a.field[H];W<E&&(Y|=1),V<E&&(Y|=2),X<E&&(Y|=8),F<E&&(Y|=4),ie<E&&(Y|=16),he<E&&(Y|=32),ue<E&&(Y|=128),xe<E&&(Y|=64);const be=k_[Y];if(be===0)return 0;const $=a.delta,O=v+$,C=x+$,A=y+$;be&1&&(_(b),_(T),f(b*3,0,E,v,x,y,W,V,b,T)),be&2&&(_(T),_(S),d(T*3,3,E,O,x,y,V,F,T,S)),be&4&&(_(R),_(S),f(R*3,6,E,v,C,y,X,F,R,S)),be&8&&(_(b),_(R),d(b*3,9,E,v,x,y,W,X,b,R)),be&16&&(_(M),_(D),f(M*3,12,E,v,x,A,ie,he,M,D)),be&32&&(_(D),_(H),d(D*3,15,E,O,x,A,he,xe,D,H)),be&64&&(_(U),_(H),f(U*3,18,E,v,C,A,ue,xe,U,H)),be&128&&(_(M),_(U),d(M*3,21,E,v,x,A,ie,ue,M,U)),be&256&&(_(b),_(M),g(b*3,24,E,v,x,y,W,ie,b,M)),be&512&&(_(T),_(D),g(T*3,27,E,O,x,y,V,he,T,D)),be&1024&&(_(S),_(H),g(S*3,30,E,O,C,y,F,xe,S,H)),be&2048&&(_(R),_(U),g(R*3,33,E,v,C,y,X,ue,R,U)),Y<<=4;let j,ne,k,re=0,de=0;for(;zr[Y+de]!=-1;)j=Y+de,ne=j+1,k=j+2,p(c,l,u,3*zr[j],3*zr[ne],3*zr[k]),de+=3,re++;return re}function p(v,x,y,b,E,T){const R=a.count*3;if(a.positionArray[R+0]=v[b],a.positionArray[R+1]=v[b+1],a.positionArray[R+2]=v[b+2],a.positionArray[R+3]=v[E],a.positionArray[R+4]=v[E+1],a.positionArray[R+5]=v[E+2],a.positionArray[R+6]=v[T],a.positionArray[R+7]=v[T+1],a.positionArray[R+8]=v[T+2],a.material.flatShading===!0){const M=(x[b+0]+x[E+0]+x[T+0])/3,S=(x[b+1]+x[E+1]+x[T+1])/3,D=(x[b+2]+x[E+2]+x[T+2])/3;a.normalArray[R+0]=M,a.normalArray[R+1]=S,a.normalArray[R+2]=D,a.normalArray[R+3]=M,a.normalArray[R+4]=S,a.normalArray[R+5]=D,a.normalArray[R+6]=M,a.normalArray[R+7]=S,a.normalArray[R+8]=D}else a.normalArray[R+0]=x[b+0],a.normalArray[R+1]=x[b+1],a.normalArray[R+2]=x[b+2],a.normalArray[R+3]=x[E+0],a.normalArray[R+4]=x[E+1],a.normalArray[R+5]=x[E+2],a.normalArray[R+6]=x[T+0],a.normalArray[R+7]=x[T+1],a.normalArray[R+8]=x[T+2];if(a.enableUvs){const M=a.count*2;a.uvArray[M+0]=v[b+0],a.uvArray[M+1]=v[b+2],a.uvArray[M+2]=v[E+0],a.uvArray[M+3]=v[E+2],a.uvArray[M+4]=v[T+0],a.uvArray[M+5]=v[T+2]}a.enableColors&&(a.colorArray[R+0]=y[b+0],a.colorArray[R+1]=y[b+1],a.colorArray[R+2]=y[b+2],a.colorArray[R+3]=y[E+0],a.colorArray[R+4]=y[E+1],a.colorArray[R+5]=y[E+2],a.colorArray[R+6]=y[T+0],a.colorArray[R+7]=y[T+1],a.colorArray[R+8]=y[T+2]),a.count+=3}this.addBall=function(v,x,y,b,E,T){const R=Math.sign(b);b=Math.abs(b);const M=T!=null;let S=new ze(v,x,y);if(M)try{S=T instanceof ze?T:Array.isArray(T)?new ze(Math.min(Math.abs(T[0]),1),Math.min(Math.abs(T[1]),1),Math.min(Math.abs(T[2]),1)):new ze(T)}catch{S=new ze(v,x,y)}const D=this.size*Math.sqrt(b/E),U=y*this.size,H=x*this.size,Y=v*this.size;let W=Math.floor(U-D);W<1&&(W=1);let V=Math.floor(U+D);V>this.size-1&&(V=this.size-1);let X=Math.floor(H-D);X<1&&(X=1);let F=Math.floor(H+D);F>this.size-1&&(F=this.size-1);let ie=Math.floor(Y-D);ie<1&&(ie=1);let he=Math.floor(Y+D);he>this.size-1&&(he=this.size-1);let ue,xe,be,$,O,C,A,j,ne,k,re;for(be=W;be<V;be++)for(O=this.size2*be,j=be/this.size-y,ne=j*j,xe=X;xe<F;xe++)for($=O+this.size*xe,A=xe/this.size-x,k=A*A,ue=ie;ue<he;ue++)if(C=ue/this.size-v,re=b/(1e-6+C*C+k+ne)-E,re>0){this.field[$+ue]+=re*R;const de=Math.sqrt((ue-Y)*(ue-Y)+(xe-H)*(xe-H)+(be-U)*(be-U))/D,L=1-de*de*de*(de*(de*6-15)+10);this.palette[($+ue)*3+0]+=S.r*L,this.palette[($+ue)*3+1]+=S.g*L,this.palette[($+ue)*3+2]+=S.b*L}},this.addPlaneX=function(v,x){const y=this.size,b=this.yd,E=this.zd,T=this.field;let R,M,S,D,U,H,Y,W=y*Math.sqrt(v/x);for(W>y&&(W=y),R=0;R<W;R++)if(H=R/y,D=H*H,U=v/(1e-4+D)-x,U>0)for(M=0;M<y;M++)for(Y=R+M*b,S=0;S<y;S++)T[E*S+Y]+=U},this.addPlaneY=function(v,x){const y=this.size,b=this.yd,E=this.zd,T=this.field;let R,M,S,D,U,H,Y,W,V=y*Math.sqrt(v/x);for(V>y&&(V=y),M=0;M<V;M++)if(H=M/y,D=H*H,U=v/(1e-4+D)-x,U>0)for(Y=M*b,R=0;R<y;R++)for(W=Y+R,S=0;S<y;S++)T[E*S+W]+=U},this.addPlaneZ=function(v,x){const y=this.size,b=this.yd,E=this.zd,T=this.field;let R,M,S,D,U,H,Y,W,V=y*Math.sqrt(v/x);for(V>y&&(V=y),S=0;S<V;S++)if(H=S/y,D=H*H,U=v/(1e-4+D)-x,U>0)for(Y=E*S,M=0;M<y;M++)for(W=Y+M*b,R=0;R<y;R++)T[W+R]+=U},this.setCell=function(v,x,y,b){const E=this.size2*y+this.size*x+v;this.field[E]=b},this.getCell=function(v,x,y){const b=this.size2*y+this.size*x+v;return this.field[b]},this.blur=function(v=1){const x=this.field,y=x.slice(),b=this.size,E=this.size2;for(let T=0;T<b;T++)for(let R=0;R<b;R++)for(let M=0;M<b;M++){const S=E*M+b*R+T;let D=y[S],U=1;for(let H=-1;H<=1;H+=2){const Y=H+T;if(!(Y<0||Y>=b))for(let W=-1;W<=1;W+=2){const V=W+R;if(!(V<0||V>=b))for(let X=-1;X<=1;X+=2){const F=X+M;if(F<0||F>=b)continue;const ie=E*F+b*V+Y,he=y[ie];U++,D+=v*(he-D)/U}}}x[S]=D}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let x=1;x<v;x++){const y=this.size2*x,b=(x-this.halfsize)/this.halfsize;for(let E=1;E<v;E++){const T=y+this.size*E,R=(E-this.halfsize)/this.halfsize;for(let M=1;M<v;M++){const S=(M-this.halfsize)/this.halfsize,D=T+M;m(S,R,b,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const k_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),zr=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),wh=["psst… over here!","a tiny tap? pretty please.","I have something to show you.","pick me! I brought a project.","hellooo, curious human.","tap for a little peek.","my pockets are full of work.","look what I helped make!","a little work, a lot of heart.","got a second? got a project.","come closer. tiny surprise.","your next little peek is here."];function H_(i,e=()=>{},t=()=>{}){const n=new Ut;n.visible=!1,i.add(n);const s=new ti({color:"#fffdf8",toneMapped:!1});s.onBeforeCompile=V=>{V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
varying vec3 balloonNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
balloonNormal=normalize(normalMatrix*normal);`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 balloonNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(vec3(.76,.75,.72),vec3(1.0),smoothstep(-.8,.65,balloonNormal.y));`)};const r=document.createElement("div");r.id="speech-caption",r.hidden=!0,r.setAttribute("role","status"),document.body.append(r);const o=new Map;let a=null,c=null;function l(V,X,F=1,ie=.48){const he=[V,X,F.toFixed(2),ie.toFixed(2)].join(":");if(o.has(he))return o.get(he);const ue=38,xe=1.4,be=new z_(ue,s,!1,!1,18e3);be.isolation=0;const $=ie*.68,O=$/F,C=Array.from({length:V||6},(k,re)=>{const de=(re+(X===2?.35:0))/(V||6)*Math.PI*2;return{x:Math.cos(de)*(1-O*.7),y:Math.sin(de)*.55,r:1+.09*Math.sin(re*2.1+X)}}),A=(k,re)=>{const de=Math.max(.24-Math.abs(k-re),0)/.24;return Math.max(k,re)+de*de*.06};for(let k=0;k<ue;k++)for(let re=0;re<ue;re++)for(let de=0;de<ue;de++){const L=(de/ue*2-1)*xe,G=(re/ue*2-1)*xe,q=(k/ue*2-1)*xe;let Q=1-(L/.88)**2-(G/.69)**2-(q/.82)**2;for(const J of C)Q=A(Q,1-((L-J.x)/(O*J.r))**2-((G-J.y)/(.68*J.r))**2-(q/(.84*J.r))**2);be.field[k*ue*ue+re*ue+de]=Q}be.update();const j=new Mt,ne=be.geometry.drawRange.count;for(const k of["position","normal"])j.setAttribute(k,new lt(be.geometry.attributes[k].array.slice(0,ne*3),3));if(j.scale(xe,xe,xe),j.computeBoundingSphere(),j.computeBoundingBox(),be.geometry.dispose(),o.size>=16){const k=o.keys().next().value;o.get(k).dispose(),o.delete(k)}return o.set(he,j),j}const u=new tt(l(0,0),s);u.scale.set(1,.48,.21),n.add(u);const h=new fs(1,24,16),f=new tt(h,s);f.scale.set(.11,.21,.1),f.rotation.z=-.42,f.position.set(-.36,-.45,-.02),n.add(f);const d=new Ut;for(const[V,X,F]of[[-.36,-.53,.095],[-.48,-.74,.055]]){const ie=new tt(h,s);ie.position.set(V,X,-.02),ie.scale.setScalar(F),d.add(ie)}n.add(d);const g=document.createElement("canvas").getContext("2d");let m=new URLSearchParams(location.search).get("qa")==="speech"?4:6+Math.random()*3,p=null,v=0,x=-1,y=-1,b=0,E=0,T=0,R=!1,M=!1,S=1,D=.48,U=null,H=1;function Y(){t(),p?.face.speak(0),p&&(p.speaking=!1),p=null,n.visible=!1,a=null,r.hidden=!0,document.body.dataset.speech="",R=!1,M=!1}function W(V,X,F,ie=null,he=!1){if(!V?.face)return;p?.face.speak(0),p&&(p.speaking=!1),p=V,p.speaking=!0,v=X,T=Math.sin(V.phase*2.7)*.12,M=he,a=null,H=V.face.mouthPosition().x>0?-1:1;let ue;do ue=Math.floor(Math.random()*wh.length);while(ue===x);x=ue;const xe=1+(y===1?1:0);y=xe,f.visible=xe===0,d.visible=xe!==0,s.color.set("#fffdf8");const be=ie||wh[ue];g.font="400 76px fatfrank, sans-serif";const $=g.measureText(be).width,O=Math.max(400,Math.min(800,Math.sqrt($*470))),C=be.split(" "),A=[""];for(const re of C){const de=A.length-1,L=A[de]?A[de]+" "+re:re;g.measureText(L).width>O&&A[de]?A.push(re):A[de]=L}r.textContent=A.join(`
`),r.hidden=!1;const j=Math.max(...A.map(re=>g.measureText(re).width)),ne=.0022;S=Math.max(.66,(j+260)*ne/2),D=Math.max(.38,(A.length*90+200)*ne/2);const k=xe?Math.max(5,Math.min(9,3+Math.ceil(j/260)+A.length-1)):0;u.geometry=l(k,xe,S,D),u.scale.set(S,D,.34),document.body.dataset.bubbleShape=xe===0?"oval":xe===1?"thought-cloud":"speech-cloud",document.body.dataset.bubbleLobes=String(k),document.body.dataset.bubbleLines=String(A.length),c=zh(be),e(V,be,c),b=F?1:0,E=0,n.visible=!0,document.body.dataset.speech=be,m=X+14+Math.random()*10}return{clear:Y,say:W,bounds(){return a},invitedActor(V){return!M&&p&&n.visible&&V.intersectObjects(n.children,!0).length?p:null},hit(V){return n.visible&&V.intersectObjects(n.children,!0).length>0},update(V,X,F,ie,he,ue){if(!p&&V>m&&!ue){const Pe=F.filter(_e=>_e.face&&_e!==U&&Math.abs(_e.px)<ie.right*.72&&Math.abs(_e.py)<ie.top*.65);Pe.length?(U=Pe[Math.floor(Math.random()*Pe.length)],W(U,V,he)):m=V+5}if(!p)return;R&&(v+=X);const xe=V-v,be=M||xe<4.2?1:0;he?b=be:(E+=((be-b)*110-E*13)*X,b+=E*X);const $=he?0:nf(c,xe);p.face.speak($);const O=Math.min(M?.82:.76,(ie.right-ie.left)/(S*2.4+.7)),C=S*1.14*O,A=p.face.mouthPosition(),j=H;n.position.set(Xs.clamp(A.x+j*((S*1.14+.6)*O),-ie.right+C,ie.right-C),Xs.clamp(A.y+(.1+Math.sin(V*.85+p.phase)*.045)*O,-ie.top+D*1.2*O,ie.top-D*1.2*O),Math.min(ie.position.z-1,Math.max(7,A.z+1))),n.scale.setScalar(Math.max(.001,b)*O),n.rotation.z=T;const ne=n.position.clone().project(ie),k=innerWidth/(ie.right-ie.left)*O;r.style.left=(ne.x*.5+.5)*innerWidth+"px",r.style.top=(-ne.y*.5+.5)*innerHeight+"px",r.style.fontSize=70*.0022*k+"px",r.style.transform="translate(-50%,-50%) rotate("+-T+"rad) scale("+Math.max(.001,b)+")";const re=(ne.x*.5+.5)*innerWidth,de=(-ne.y*.5+.5)*innerHeight,L=u.geometry.boundingBox,G=Math.max(Math.abs(L.min.x),Math.abs(L.max.x))*S,q=Math.max(Math.abs(L.min.y),Math.abs(L.max.y))*D,Q=(G*Math.abs(Math.cos(T))+q*Math.abs(Math.sin(T)))*k*1.06,J=(q*Math.abs(Math.cos(T))+G*Math.abs(Math.sin(T)))*k*1.06;a={left:re-Q,right:re+Q,top:de-J,bottom:de+J};const B=Math.cos(-T),I=Math.sin(-T),oe=(A.x-n.position.x)/O,Ee=(A.y-n.position.y)/O,Ue=oe*B-Ee*I,N=oe*I+Ee*B,w=Math.hypot(Ue,N)||1,Z=Ue/w,se=N/w,pe=1/Math.sqrt(Z*Z/(S*S)+se*se/(D*D)),le=Math.max(.08,Math.min(.22,w-pe+.07));f.position.set(Z*(pe+le*.35),se*(pe+le*.35),-.02),f.scale.set(.1,le*.65,.1),f.rotation.z=Math.atan2(se,Z)-Math.PI/2,d.children.forEach((Pe,_e)=>{const Ie=pe+.13+_e*.17;Pe.position.set(Z*Ie,se*Ie,-.02)}),!M&&xe>4.9&&(Y(),m=V+14+Math.random()*10)}}}function V_(i,e,t,n,s){return{x:i.includes("left")?14:Math.max(14,n-e-14),y:i.includes("top")?n<=620?64:14:Math.max(14,s-t-94)}}function G_(i){let e="bottom-right",t=null;const n=()=>innerWidth<=620;function s(){if(n()){const a=t?.id;t=null,i.dataset.dragging="false",a!==void 0&&i.hasPointerCapture(a)&&i.releasePointerCapture(a);for(const c of["left","top","right","bottom"])i.style.removeProperty(c);i.dataset.corner="center",i.tabIndex=-1,i.setAttribute("aria-label","Camera preview");return}i.tabIndex=0,i.setAttribute("aria-label","Camera preview. Drag to a corner. Arrow keys move between corners.");const o=V_(e,i.offsetWidth||180,i.offsetHeight||135,innerWidth,innerHeight);i.style.left=o.x+"px",i.style.top=o.y+"px",i.style.right=i.style.bottom="auto",i.dataset.corner=e}i.addEventListener("pointerdown",o=>{if(n()||o.button!==0)return;o.preventDefault();const a=i.getBoundingClientRect();t={id:o.pointerId,x:o.clientX-a.left,y:o.clientY-a.top},i.dataset.dragging="true",i.setPointerCapture(o.pointerId)}),i.addEventListener("pointermove",o=>{!t||t.id!==o.pointerId||(i.style.left=Math.max(0,Math.min(innerWidth-i.offsetWidth,o.clientX-t.x))+"px",i.style.top=Math.max(0,Math.min(innerHeight-i.offsetHeight,o.clientY-t.y))+"px")});function r(){if(!t)return;const o=i.getBoundingClientRect();e=(o.top+o.height/2<innerHeight/2?"top":"bottom")+"-"+(o.left+o.width/2<innerWidth/2?"left":"right"),t=null,i.dataset.dragging="false",s()}for(const o of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(o,r);i.addEventListener("keydown",o=>{if(n()||!o.key.startsWith("Arrow"))return;o.preventDefault();let[a,c]=e.split("-");o.key==="ArrowUp"&&(a="top"),o.key==="ArrowDown"&&(a="bottom"),o.key==="ArrowLeft"&&(c="left"),o.key==="ArrowRight"&&(c="right"),e=a+"-"+c,s()}),window.addEventListener("resize",s),s()}const W_="modulepreload",X_=function(i){return"/special/balloon-portfolio/"+i},Ah={},q_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=l;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=l(t.map(u=>{if(u=X_(u),u in Ah)return;Ah[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":W_,h||(d.as="script"),d.crossOrigin="",d.href=u,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};async function Y_(i,e){const{FaceDetector:t,FilesetResolver:n}=await q_(async()=>{const{FaceDetector:m,FilesetResolver:p}=await import("./vision_bundle-qHAtWFBm.js");return{FaceDetector:m,FilesetResolver:p}},[]),s=await n.forVisionTasks(new URL("./vision/",location.href).href),r=await t.createFromOptions(s,{baseOptions:{modelAssetPath:new URL("./vision/face.tflite",location.href).href,delegate:"CPU"},runningMode:"VIDEO",minDetectionConfidence:.6}),o=document.querySelector("#camera-friends"),a=o.getContext("2d");o.width=360,o.height=270,o.hidden=!1;const c=Array.from({length:9},(m,p)=>({x:25+p%5*70,y:25+Math.floor(p/5)*200,vx:(p%2?1:-1)*(16+p%3*3),vy:(p%3-1)*12+4,angle:p*.4,spin:(p%2?1:-1)*.1,r:20+p%3*3,color:["#f1c444","#ee779c","#43b5b3","#648fda","#ed9260"][p%5],squish:0}));let l=null,u=0,h=0,f=performance.now(),d=0,g=!0;function _(m){if(!g)return;const p=Math.min(.04,(m-f)/1e3);if(f=m,i.readyState>=2&&m-h>150){h=m;try{const v=r.detectForVideo(i,m).detections[0]?.boundingBox;if(v){const x={x:360*(1-(v.originX+v.width/2)/i.videoWidth),y:270*(v.originY+v.height/2)/i.videoHeight,rx:v.width/i.videoWidth*180,ry:v.height/i.videoHeight*135};if(!l)l=x;else for(const y of["x","y","rx","ry"])l[y]+=(x[y]-l[y])*.5;u=m}else m-u>450&&(l=null);document.body.dataset.faceDetected=String(!!l)}catch{l=null}}a.clearRect(0,0,360,270);for(const[v,x]of c.entries()){if(x.vy+=Math.sin(m*.0011+v)*p*6,l&&(x.vx+=(l.x-x.x)*p*.12,x.vy+=(l.y-x.y)*p*.1),x.x+=x.vx*p,x.y+=x.vy*p,x.squish*=Math.exp(-7*p),x.angle+=x.spin*p,x.spin*=Math.exp(-.3*p),l){const E=x.x-l.x,T=x.y-l.y,R=l.rx+x.r,M=l.ry+x.r,S=Math.hypot(E/R,T/M);if(S<1){const D=E/(R*R),U=T/(M*M),H=Math.hypot(D,U)||1,Y=D/H,W=U/H;x.x=l.x+E/Math.max(.01,S)*1.015,x.y=l.y+T/Math.max(.01,S)*1.015;const V=x.vx*Y+x.vy*W;V<0&&(x.vx-=Y*(V*1.2-5),x.vy-=W*(V*1.2-5),x.squish=.08,x.spin=(v%2?1:-1)*.15,document.body.dataset.faceBumps=String(+(document.body.dataset.faceBumps||0)+1))}}x.x<x.r&&(x.x=x.r,x.vx=Math.abs(x.vx)),x.x>360-x.r&&(x.x=360-x.r,x.vx=-Math.abs(x.vx)),x.y<x.r&&(x.y=x.r,x.vy=Math.abs(x.vy)),x.y>270-x.r&&(x.y=270-x.r,x.vy=-Math.abs(x.vy));const y=Math.hypot(x.vx,x.vy);y>45&&(x.vx*=45/y,x.vy*=45/y),a.save(),a.translate(x.x,x.y),a.rotate(x.angle),a.scale(1+x.squish,1-x.squish);const b=a.createRadialGradient(-x.r*.35,-x.r*.4,1,0,0,x.r*1.25);b.addColorStop(0,"#fff4dc"),b.addColorStop(.3,x.color),b.addColorStop(1,x.color+"bb"),a.fillStyle=b,a.beginPath();for(let E=0;E<=64;E++){const T=E/64*Math.PI*2,R=x.r*(v%2?1:.86+.14*Math.cos(T*5));a.lineTo(Math.cos(T)*R,Math.sin(T)*R)}a.closePath(),a.fill();for(const E of[-4,4])a.fillStyle="#fff7e7",a.beginPath(),a.ellipse(E,-2,3.2,4,0,0,7),a.fill(),a.fillStyle="#24242a",a.beginPath(),a.arc(E+.5,-1.4,1.6,0,7),a.fill();a.strokeStyle="#ac5069",a.lineWidth=2.4,a.lineCap="round",a.beginPath(),a.ellipse(0,5,3.5,1.8,0,0,Math.PI),a.stroke(),a.restore()}d=requestAnimationFrame(_)}return e("Wave your hand to send the balloons flying."),d=requestAnimationFrame(_),()=>{g=!1,cancelAnimationFrame(d),r.close(),o.hidden=!0,a.clearRect(0,0,360,270),document.body.dataset.faceDetected="false"}}function j_(i,e,t,n){let s=0,r=0,o=0;for(let a=8;a<n-8;a+=8)for(let c=8;c<t-8;c+=8){let l=0,u=1/0,h=0,f=0,d=0;for(let _=-2;_<=2;_++)for(let m=-2;m<=2;m++){const p=(a+_)*t+c+m;l+=Math.abs(e[p]-i[p]),d+=Math.abs(i[p]-i[p+1])}if(l<130||d<80)continue;for(let _=-5;_<=5;_++)for(let m=-5;m<=5;m++){let p=0;for(let v=-2;v<=2;v++)for(let x=-2;x<=2;x++)p+=Math.abs(e[(a+v+_)*t+c+x+m]-i[(a+v)*t+c+x]);p<u&&(u=p,h=m,f=_)}const g=1-u/l;g<.45||Math.hypot(h,f)<1||(s+=h*g,r+=f*g,o+=g)}return o<3?{x:0,y:0,strength:0}:{x:-s/o,y:-r/o,strength:Math.min(1,o/18)}}function K_(i){const e=Math.hypot(i.x,i.y);return i.strength<=.15||e<=.8?{x:0,y:0,strength:0}:{x:i.x/e,y:i.y/e,strength:Math.min(1.7,i.strength*Math.min(1,(e-.8)/3)*1.7)}}function $_(i,e,t){const n=Math.sqrt(i.reduce((o,a)=>o+a*a,0)/i.length);let s=0,r=0;for(let o=1;o<e.length;o++){const a=10**(e[o]/10);s+=a,o*t/(e.length*2)>1600&&(r+=a)}return n>.025&&r/(s||1)>.16?Math.min(1,(n-.025)*9):0}function J_(i){G_(document.querySelector("#camera-window"));const e=document.querySelector("#sensor-status"),t=document.querySelector("#camera-preview"),n=document.querySelector("#camera-toggle"),s=document.querySelector("#mic-toggle"),r=document.createElement("canvas");r.width=80,r.height=60;const o=r.getContext("2d",{willReadFrequently:!0});let a=null,c=null,l=null,u=null,h=null,f=null,d=0,g=0,_=0;const m=E=>e.textContent=/^(Camera off|Microphone off|Camera and microphone off)$/.test(E)?"":E;function p(){g++,a?.(),a=null,document.querySelector("#camera-friends")?.setAttribute("hidden",""),c?.getTracks().forEach(E=>E.stop()),c=null,t.srcObject=null,t.hidden=!0,f=null,n.disabled=!1,n.setAttribute("aria-pressed","false"),n.textContent="Camera"}function v(){_++,l?.getTracks().forEach(E=>E.stop()),l=null,u?.close(),u=null,h=null,s.disabled=!1,s.setAttribute("aria-pressed","false"),s.textContent="Blow"}n.addEventListener("click",async()=>{if(c){p(),m("Camera off");return}const E=++g;n.disabled=!0;try{const T=await navigator.mediaDevices.getUserMedia({video:{width:160,height:120,facingMode:"user"},audio:!1});if(E!==g||document.hidden){T.getTracks().forEach(R=>R.stop());return}c=T,t.srcObject=T,await t.play(),t.hidden=!1,n.setAttribute("aria-pressed","true"),n.textContent="Camera on",m("Wave a hand or fan. Make a little wind."),Y_(t,m).then(R=>{E!==g?R():a=R}).catch(()=>{E===g&&m("Face tracking unavailable. Wave to make wind.")})}catch(T){p(),m(T.name==="NotAllowedError"?"Camera access was declined. You can still drag the balloons.":"Camera unavailable. You can still drag the balloons.")}finally{n.disabled=!1}}),s.addEventListener("click",async()=>{if(l){v(),m("Microphone off");return}const E=++_;s.disabled=!0;try{u=new AudioContext,await u.resume();const T=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1});if(E!==_||document.hidden){T.getTracks().forEach(R=>R.stop());return}l=T,h=u.createAnalyser(),h.fftSize=1024,u.createMediaStreamSource(T).connect(h),s.setAttribute("aria-pressed","true"),s.textContent="Blow on",m("A gentle puff near your microphone.")}catch(T){v(),m(T.name==="NotAllowedError"?"Microphone access was declined. You can still drag the balloons.":"Microphone unavailable. You can still drag the balloons.")}finally{s.disabled=!1}});const x=new Float32Array(1024),y=new Float32Array(512);d=setInterval(()=>{if(!document.hidden){if(c&&t.readyState>=2){o.drawImage(t,0,0,80,60);const E=o.getImageData(0,0,80,60).data,T=new Uint8Array(4800);for(let R=0;R<T.length;R++)T[R]=(E[R*4]+E[R*4+1]+E[R*4+2])/3;if(f){const R=K_(j_(f,T,80,60));R.strength>0&&i(R.x,R.y,R.strength)}f=T}if(h){h.getFloatTimeDomainData(x),h.getFloatFrequencyData(y);const E=$_(x,y,u.sampleRate);E>.03&&i(.3,1,E*.75)}}},80);function b(){p(),v(),m("Camera and microphone off")}return document.addEventListener("visibilitychange",()=>{document.hidden&&b()}),window.addEventListener("pagehide",()=>{b(),clearInterval(d)}),{stop:b}}let _i;const Yi=new Map;function Z_(i,e,t){const n=[i,e,t].join(":");if(Yi.has(n))return Yi.get(n);_i??=new Du({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});const s=i+64,r=e+64;_i.setPixelRatio(2),_i.setSize(s,r,!1),_i.setClearColor(0,0),_i.outputColorSpace=St;const o=new Sc,a=new nr(-s/2,s/2,r/2,-r/2,.1,1e3);a.position.z=400,o.add(new Tu("#ffffff","#e5e2d9",2.5));const c=new no("#ffffff",.65);c.position.set(-100,180,250),o.add(c);const l=new ri,u=s/2-13,h=r/2-13,f=22,d=[],g=t==="pearls"?16:t==="cloud"?44:t==="burst"?35:25,_=[[u-f,h-f,0],[-u+f,h-f,Math.PI/2],[-u+f,-h+f,Math.PI],[u-f,-h+f,Math.PI*1.5]];for(let x=0;x<4;x++){const[y,b,E]=_[x],T=_[(x+1)%4],R=Math.max(1,Math.round(f*Math.PI/2/g)),M=64;for(let X=0;X<=M;X++){const F=X/M,ie=E+F*Math.PI/2,he=F*R*Math.PI*2,ue=(1-Math.cos(he))*.5,xe=t==="pillow"?0:t==="ticket"?-4*ue:t==="steps"?-5*ue*ue:-6*ue;d.push(new fe(y+(f+xe)*Math.cos(ie),b+(f+xe)*Math.sin(ie)))}const S=d.at(-1),D=new fe(T[0]+f*Math.cos(T[2]),T[1]+f*Math.sin(T[2])),U=S.distanceTo(D),H=Math.max(1,Math.round(U/g)),Y=Math.max(2,Math.ceil(U)),W=D.clone().sub(S).normalize(),V=new fe(W.y,-W.x);for(let X=1;X<Y;X++){const F=X/Y,ie=F*H*Math.PI*2,he=(1-Math.cos(ie))*.5,ue=Math.acos(Math.cos(ie))/Math.PI,xe=Math.min(1,F*H*2,(1-F)*H*2),be=xe*xe*(3-2*xe),$=t==="pillow"?0:t==="ticket"?-4*he:t==="zigzag"||t==="burst"?7*ue*be:t==="steps"?5*he*he:6*he;d.push(S.clone().lerp(D,F).addScaledVector(V,$))}}l.moveTo(d[0].x,d[0].y);for(const x of d.slice(1))l.lineTo(x.x,x.y);l.closePath();const m=new Pc(l,{depth:2,bevelEnabled:!0,bevelSize:3.5,bevelThickness:3,bevelSegments:8,curveSegments:24,steps:1}),p=new Hn({color:"#fffdf7",roughness:.72,metalness:0});o.add(new tt(m,p)),_i.render(o,a);const v=`url("${_i.domElement.toDataURL("image/png")}")`;return m.dispose(),p.dispose(),Yi.size>24&&Yi.delete(Yi.keys().next().value),Yi.set(n,v),v}const qr=["scallop","pearls","cloud","pillow","zigzag","burst","ticket","steps"],Rh=(i,e,t)=>Math.max(e,Math.min(t,i));function Q_(i,e,t,n=208,s=130,r=null){for(const o of[1,.85,.7,.55,.4]){const a=n*o,c=s*o;if(r&&a>r.width+.01)continue;const l=((a+64)*.993+(c+64)*.122)/2+3,u=((c+64)*.993+(a+64)*.122)/2+3,h=t.width<=620?62:12,f=t.width<=620?78:64;if(l*2+24>t.width||u*2+h+f>t.height)continue;const d=(y,b)=>({x:Rh(y.x,l+12,t.width-l-12),y:Rh(y.y,u+h,t.height-u-f),width:a,side:b});if(!e)return d(i,"free");const g=10,_=(e.left+e.right)/2,m=(e.top+e.bottom)/2,v=[d({x:e.right+g+l,y:m},"right"),d({x:e.left-g-l,y:m},"left"),d({x:_,y:e.top-g-u},"above"),d({x:_,y:e.bottom+g+u},"below")].filter(y=>y.x+l+g<=e.left+.01||y.x-l-g>=e.right-.01||y.y+u+g<=e.top+.01||y.y-u-g>=e.bottom-.01),x=r&&v.find(y=>y.side===r.side);if(x)return x;if(v.length)return v.sort((y,b)=>Math.hypot(y.x-i.x,y.y-i.y)-Math.hypot(b.x-i.x,b.y-i.y))[0]}return r}const ey=[{year:"2025",type:"Design",title:"Studio Design Award 2025",url:"https://designaward2025.studio.design/",image:"/works/studio-design-award.webp",color:"#2a1a0e"},{year:"2025",type:"Design",title:"Studio",url:"https://studio.design/ja",image:"/works/studio.webp",color:"#f0f0f0"},{year:"2025",type:"Design",title:"互色-互縁 goshiki-goen",titleEn:"goshiki-goen",url:"https://goshiki-goen.jp/",image:"/works/goshiki-goen.webp",color:"#1a1a18"},{year:"2025",type:"Design",title:"豊田自動織機技能専修学園",titleEn:"Toyota Industries Corporation",url:"https://gakuen.toyota-shokki.co.jp/",image:"/works/toyota-shokki.png",color:"#015EB8"},{year:"2024",type:"Design",title:"UNIPOTA",url:"https://unipota.jp/",image:"/works/unipota.webp",color:"#EA76A9"},{year:"2023",type:"Design",title:"écrit architects",url:"https://ecrit.jp/",image:"/works/ecrit.webp",color:"#DBD5CA"},{year:"2023",type:"Design",title:"MIKATA",url:"https://mi-kata.jp/",image:"/works/mikata.webp",color:"#1a29cc"},{year:"2022",type:"Design",title:"萬珍軒",titleEn:"manchinken",url:"https://manchinken.com/",image:"/works/manchinken.webp",color:"#FFC200"},{year:"2020",type:"Design",title:"L'as International",url:"https://lasinternational.co.jp/",image:"/works/las-international.webp",color:"#0086CE"}],Ch=[["and the cutest envelope goes to…","tiny drumroll, please.","I dressed up for this one.","red carpet. round body.","my acceptance speech is squeaky.","a little sparkle for the shortlist.","I brought my award-show face.","hold my air. this is fancy.","standing ovation? I can only float.","ta-da! cue the confetti."],["welcome to my happy little Studio.","big ideas. no elbows.","I put my thinking air on.","a little space for big imagination.","my desk is mostly clouds.","made with a very round brain.","studio time is my favorite time.","I clock in by floating in.","ideas live here. I visit often.","this one has my whole balloon heart."],["a little color. a little connection.","five colors? I brought my best one.","nice to meet hue.","we make a lovely little pair.","color me delighted.","a small hello goes a long way.","I think we’re color-compatible.","a knot? no, a connection.","let’s stick together, softly.","my favorite shade is together."],["tiny student. enormous curiosity.","I brought my learning face.","first lesson: stay curious.","my backpack is full of air.","little steps. big possibilities.","I’m here for the hands-on bit.","learning new tricks, no hands.","today’s homework: make something.","a very round classmate says hello.","future me is taking notes."],["uni, pota, ta-da!","this name makes me bounce.","one little peek won’t hurt.","I brought a pocketful of wonder.","unreasonably excited about this one.","pota-tally worth a look.","my curiosity has escaped again.","a little detour into delightful.","I found a thing! come see.","consider this a very soft invitation."],["a little room to dream.","I’m open-plan on the inside.","architecture, but make room for me.","my dream house has round corners.","I brought my tiny hard hat.","good spaces make me float.","a small window into this one.","measuring twice. wobbling once.","I would live in a sunbeam.","a blueprint for a little daydream."],["hello from your round little ally.","I’m on your side. literally.","a different angle? I can roll.","meet my supportive side. all of them.","a little backup, balloon edition.","looking at things a little differently.","this way to a fresh perspective.","tiny teammate reporting for duty.","I see what you did there. cute.","your friendly neighborhood point of view."],["I came for a peek. stayed hungry.","my tummy is technically all tummy.","please don’t mistake me for a dumpling.","a little feast for the eyes.","I saved room. mostly air.","five-star daydream. zero table manners.","this one made my stomach squeak.","menu, please. I can’t hold it.","my plus-one is my appetite.","warning: may cause a tiny craving."],["I brought my fancy little accent.","bonjour from a round little friend.","a tiny taste of something lovely.","my passport photo is very round.","dressed for dinner. still a balloon.","a little elegance, a little air.","let’s make this a tiny occasion.","I practiced my sophisticated nod.","small guest. excellent enthusiasm.","a lovely little place to linger."],["is this seat taken by a balloon?","I brought nothing to the table. air.","pull up a tiny chair.","open table. open mind. round guest.","my meeting notes say “hello”.","agenda item one: a little peek.","I’m available for soft discussions.","can we circle back? I am a circle.","let’s put our little heads together.","I promise not to float off mid-meeting."],["a little wiggle, written down.","dear diary: today I moved.","taking notes between bounces.","my handwriting has follow-through.","one frame at a time, little buddy.","I bookmarked the bouncy bit.","a tiny notebook full of movement.","motion sickness? motion happiness.","note to self: less wobble.","I learn best in little loops."],["forecast: scattered little ideas.","a chance of happy accidents.","I’m a very local cloud.","bring an umbrella for the brainstorm.","today feels partly playful.","creative pressure is rising. softly.","a little sunshine for your screen.","wind advisory: that might be me.","my mood is mostly curious.","a tiny forecast with big feelings."],["time flies. I float.","just a second. a cute one.","I’m running on balloon time.","a little layer of now.","tick, tock, tiny thought.","my watch is mostly wristless.","right on time for a little peek.","I have a minute. several layers.","let’s spend a second together.","fashionably late, structurally round."],["dear you: look at this.","I put a little wiggle in the mail.","a love letter to letters.","alphabet soup, extra squishy.","this one is my type.","letters having a little identity crisis.","signed, your roundest pen pal.","P.S. the letters are moving.","I dot my i’s with tiny balloons.","words, with a little wardrobe change."],["a little piece of a big hello.","peekaboo, one tile at a time.","I like my surprises bite-sized.","some assembly, much delight.","tiny pieces. grand entrance.","wait for it… there it is.","I’m very good at revealing nothing.","a puzzle with stage presence.","every little square gets a moment.","the suspense is pixel-sized."],["letters in their party outfits.","my favorite pattern is “again!”","type, but a little more playful.","a tiny alphabet sleepover.","I’m seeing letters everywhere.","repeat after me: ooh.","a well-dressed little glyph.","pattern recognition? cute recognition.","letters getting along in rows.","a little rhythm for your eyes."],["follow the little letter trail.","my words took the scenic route.","hover here, little explorer.","a sentence out for a stroll.","the alphabet has places to be.","I left a trail of tiny hellos.","words with wanderlust.","just following my type around.","a little path less typed.","let’s take these letters for a walk."],["oh. hi. yes, I see you.","my friend is a little nosy.","eye contact, extra cute edition.","look who’s looking.","two eyes. zero subtlety.","you have our full tiny attention.","I blinked. did I miss anything?","a little card with a big stare.","the eyes have it. literally.","not judging. just very curious."],["a little story under your fingertip.","keep rolling. I’ll read along.","words that like to hang around.","I’m pinned to the plot.","one little scroll at a time.","the next bit is just down there.","my attention span brought a pin.","a sentence with perfect timing.","scroll softly. words ahead.","I like a story with a little movement."],["tiny artist. very big canvas.","I brought my imaginary paintbrush.","a blank canvas is a big hello.","easel does it, little buddy.","my best work is a perfect circle.","let’s make a happy little something.","paint on my cheeks? probably.","professional daydreamer, reporting in.","a little room to make a mess.","I call this piece “mostly air”."],["this expedition is my type.","a little safari through the alphabet.","I packed extra glyphs.","bold of you to visit.","serif you around, little buddy.","my compass points to a good font.","just a curious little character.","the letters have secrets. cute ones.","let’s get lost in a nice typeface.","tiny explorer. excellent kerning."],["there’s more to me than this side.","a little depth to our friendship.","please admire my other round side.","the third dimension says hello.","I brought my spatial awareness. barely.","around the corner? more corners.","a tiny trip beyond flat.","depth perception, balloon edition.","turns out there’s a back, too.","let’s take a little look around."]];function ty(i,e,t=Math.random){const s=Ch[i%Ch.length].filter(r=>r!==e);return s[Math.floor(t()*s.length)]}const ta=ey,Yt=document.querySelector("#work-bubble"),Qn=document.querySelector("#work-image"),ec=document.querySelector("#work-link"),tc=document.querySelector("#work-hello"),Ph=new Map;let On=null,Oc=null,Js=null,Us=-1,nc="",Yr=null,Ih="",ic=!1;function Ou(i,e,t,n){const s=ta[i.projectIndex%ta.length];On?.face.speak(0),On=i,performance.now(),i.face.mouthPosition().x>0,ic=!1;const r=ty(i.projectIndex%ta.length,Ph.get(i.projectIndex));Ph.set(i.projectIndex,r),tc.textContent=r,Js=e,Js.say(i,t,n,r,!0),ec.href=new URL(s.url||s.file,"https://www.masaruinaba.com/").href,Qn.hidden=!s.image,s.image&&(Qn.src="./portfolio"+s.image,Qn.alt=s.titleEn||s.title),ec.setAttribute("aria-label","View "+(s.titleEn||s.title)),Us=(Us+1+Math.floor(Math.random()*(qr.length-1)))%qr.length,nc="",Yr=null,Yt.dataset.frame=qr[Us],Yt.hidden=!1,tc.hidden=!0,Yt.style.visibility="hidden",Oc?.cancel(),document.body.dataset.work=s.titleEn||s.title}function ny(i){if(!On||Yt.hidden)return;const e=On.face.mouthPosition();e.y+=On.baseSize*.12+(matchMedia("(prefers-reduced-motion: reduce)").matches?0:Math.sin(performance.now()*85e-5+On.phase+.7)*.05),e.project(i);const t=(e.x*.5+.5)*innerWidth,n=(-e.y*.5+.5)*innerHeight,s=Qn.naturalWidth?208*Qn.naturalHeight/Qn.naturalWidth:130,r=innerWidth+":"+innerHeight;if(r!==Ih&&(Ih=r,Yr=null),!Qn.complete||!Qn.naturalWidth)return;const o=Js?.bounds();if(!o)return;const a=o,c=Q_({x:t,y:n-s/2},a,{width:innerWidth,height:innerHeight},208,s,Yr);if(!c)return;Yr=c;const l=[c.width,s,Us].join(":");l!==nc&&(nc=l,Yt.style.setProperty("--frame-surface",Z_(c.width,s*c.width/208,qr[Us]))),Yt.style.width=c.width+"px",Yt.style.left=c.x+"px",Yt.style.top=c.y+"px",Yt.style.transform="translate(-50%,-50%)",Yt.style.visibility="visible",Yt.style.rotate=(On.projectIndex%2?7:-7)+"deg",ic||(ic=!0,Oc=Yt.animate([{opacity:0,transform:"translate(-50%, -50%) scale(.18) rotate(-9deg)"},{opacity:1,transform:"translate(-50%, -50%) scale(1) rotate(0deg)",offset:.7},{opacity:1,transform:"translate(-50%, -50%) scale(1) rotate(0deg)"}],{duration:matchMedia("(prefers-reduced-motion: reduce)").matches?0:480,easing:"cubic-bezier(.18,.8,.3,1)"}))}function ir(){On?.face.speak(0),Js?.clear(),Js=null,On=null,Oc?.cancel(),Yt.hidden=!0,tc.hidden=!0,document.body.dataset.work=""}ec.addEventListener("click",ir);window.addEventListener("keydown",i=>{i.key==="Escape"&&ir()});document.querySelector("#work-close").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),ir(),document.querySelector("#world").focus({preventScroll:!0})});function iy(i,e){const t=i.attributes.position,n=e.length,s=new Float32Array(t.count),r=e.map(c=>new fe(t.getX(c),t.getY(c))),o=r.map((c,l)=>{const u=r[(l+n-3)%n],h=r[(l+3)%n];return Math.atan2((c.x-u.x)*(h.y-c.y)-(c.y-u.y)*(h.x-c.x),(c.x-u.x)*(h.x-c.x)+(c.y-u.y)*(h.y-c.y))}),a=[];for(const c of Array.from({length:n},(l,u)=>u).sort((l,u)=>o[l]-o[u])){if(o[c]>-.12||a.length>=6)break;a.every(l=>Math.min(Math.abs(l-c),n-Math.abs(l-c))>n/12)&&a.push(c)}a.length||a.push(Math.floor(n*.13),Math.floor(n*.58)),i.userData.filmAnchors=a.map(c=>{const l=r[(c+2)%n].clone().sub(r[(c+n-2)%n]).normalize();return{frame:new Qe(r[c].x,r[c].y,-l.y,l.x),weight:o[c]<-.12?1:.3}});for(let c=0;c<t.count;c++){let l=1/0;for(let u=0;u<n;u++){const h=r[u],f=r[(u+1)%n],d=f.x-h.x,g=f.y-h.y,_=Math.max(0,Math.min(1,((t.getX(c)-h.x)*d+(t.getY(c)-h.y)*g)/(d*d+g*g||1)));l=Math.min(l,Math.hypot(t.getX(c)-h.x-d*_,t.getY(c)-h.y-g*_))}s[c]=Math.min(1,l)}i.setAttribute("filmEdge",new yt(s,1))}function sy(i,e,t){i.transparent=!0,i.opacity=1,i.depthWrite=!0,i.transmission=0,i.thickness=.14,i.ior=1.36,i.attenuationDistance=1.5,i.roughness=.34,i.clearcoat=.07,i.clearcoatRoughness=.34,i.envMapIntensity=1.45,i.onBeforeCompile=n=>{Object.assign(n.uniforms,i.userData.frost),n.uniforms.filmPhase={value:e*2.399963};const s=t.userData.filmAnchors||[],r=o=>{const a=Math.sin(e*91.7+o*117.3)*43758.5453;return a-Math.floor(a)};n.uniforms.filmProfile={value:new Qe(.8+r(1)*.5,.65+r(2)*.5,(r(3)-.5)*.14,r(4)*.4)},n.uniforms.filmAnchors={value:Array.from({length:6},(o,a)=>{const c=s[a]?.frame.clone()||new Qe,l=(r(a+40)-.5)*1.1,u=c.z,h=c.w;return c.x+=h*(r(a+50)-.5)*.09,c.y-=u*(r(a+50)-.5)*.09,c.z=u*Math.cos(l)-h*Math.sin(l),c.w=u*Math.sin(l)+h*Math.cos(l),c})},n.uniforms.foldShape={value:Array.from({length:6},(o,a)=>new Qe(.027+r(a+60)*.035,.12+r(a+70)*.16,(r(a+80)-.5)*1.2,.075+r(a+90)*.11))},n.uniforms.filmWeights={value:Array.from({length:6},(o,a)=>s[a]?s[a].weight*(r(a+12)>.32?.5+r(a+22)*.5:0):0)},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float filmEdge; varying float vFilmEdge; varying vec3 vFilmPoint;`),n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFilmEdge=filmEdge; vFilmPoint=position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      varying float vFilmEdge; varying vec3 vFilmPoint;
      uniform float filmPhase;
      uniform vec4 filmAnchors[6];
      uniform float filmWeights[6];
      uniform vec4 filmProfile;
      uniform vec4 foldShape[6];
      uniform sampler2D frostMap;
      uniform vec4 frostRect;
      uniform float frostRadius;
      uniform float frostLod;
      float filmFold(vec3 p,float edge){
        float fold=0.0;
        for(int i=0;i<6;i++){
          vec2 delta=p.xy-filmAnchors[i].xy,n=filmAnchors[i].zw;
          float inward=dot(delta,n),across=dot(delta,vec2(n.y,-n.x));
          vec4 shape=foldShape[i];
          float curved=inward-shape.w-shape.z*across*across-.024*sin(across*8.0+filmPhase+float(i));
          float span=exp(-pow(across/shape.y,4.0));
          float valley=exp(-pow(curved/shape.x,2.0));
          float shoulder=exp(-pow((curved-shape.x*1.4)/(shape.x*1.8),2.0));
          fold+=(-valley*.014+shoulder*.005)*span*filmWeights[i];
        }
        return fold*(.90+.10*sin(filmPhase))*smoothstep(.025,.05,edge);

      }
    `),n.fragmentShader=n.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
      float foldHeight=filmFold(vFilmPoint,vFilmEdge);
      vec3 filmDx=dFdx(-vViewPosition),filmDy=dFdy(-vViewPosition);
      vec3 filmR1=cross(filmDy,normal),filmR2=cross(normal,filmDx);
      float filmDet=dot(filmDx,filmR1);
      normal=normalize(abs(filmDet)*normal-sign(filmDet)*(dFdx(foldHeight)*filmR1+dFdy(foldHeight)*filmR2));
    `),n.fragmentShader=n.fragmentShader.replace("#include <colorspace_fragment>",`#include <colorspace_fragment>
      vec2 uv=(gl_FragCoord.xy-frostRect.xy)/frostRect.zw;
      vec3 mist=vec3(0.0);float total=0.0;
      // A dense disk has no repeating horizontal/vertical sampling bands.
      for(int i=0;i<16;i++){
        float radius=sqrt((float(i)+.5)/16.0)*2.4;
        float angle=float(i)*2.39996323;
        vec2 offset=vec2(cos(angle),sin(angle))*radius;
        float weight=exp(-radius*radius*.65);
        vec2 sampleUV=clamp(uv+offset*frostRadius/frostRect.zw,vec2(.002),vec2(.998));
        mist+=textureLod(frostMap,sampleUV,frostLod).rgb*weight;total+=weight;
      }
      mist/=total;
      // Transmission travels through pigment: a bright background must not
      // wash a saturated membrane towards white.
      mist*=mix(vec3(1.0),gl_FragColor.rgb,.72);
      float amount=mix(.28,.21,smoothstep(.02,.24,vFilmEdge));
      gl_FragColor.rgb=mix(gl_FragColor.rgb,mist,amount);
      gl_FragColor.a=1.0;
    `)},i.customProgramCacheKey=()=>"contour-weld-film-v20"}function ry(i,e,t){const n=[...new Set(e)],s=i.map(()=>new Set);for(let u=0;u<i.length;u++)for(let h=u+1;h<i.length;h++)Math.hypot(i[u].px-i[h].px,i[u].py-i[h].py)<(i[u].radius+i[h].radius)*1.18&&(s[u].add(h),s[h].add(u));const r=i.map(()=>-1),o=n.map(()=>0),a=i.map(u=>u.radius*u.radius),c=a.reduce((u,h)=>u+h,0)/n.length,l=i.map((u,h)=>h).sort((u,h)=>a[h]-a[u]);for(const u of l){let h=0,f=1/0;for(let d=0;d<n.length;d++){let g=0;for(const m of s[u])r[m]===d&&(g+=Math.min(a[u],a[m]));const _=g/c*12+(o[d]+a[u])/c+t()*.08;_<f&&(f=_,h=d)}r[u]=h,o[h]+=a[u]}return i.forEach((u,h)=>{u.color=n[r[h]],u.body.material.color.set(u.color),u.body.material.attenuationColor.copy(u.body.material.color)}),document.body.dataset.colorAreas=JSON.stringify(o.map(u=>+(u/(c*n.length)).toFixed(3))),i.reduce((u,h,f)=>u+[...s[f]].filter(d=>d>f&&r[d]===r[f]).length,0)}function oy(i){const e=new Mt,t=[];e.setAttribute("position",new lt(i*4*3,3));for(let n=0;n<i;n++)for(let s=0;s<4;s++){const r=n*4+s,o=(n+1)%i*4+s,a=n*4+(s+1)%4,c=(n+1)%i*4+(s+1)%4;t.push(r,o,a,o,c,a)}return e.setIndex(t),e}function Bu(i,e,t){const n=i.attributes.position,s=t.length;for(let r=0;r<s;r++){const o=t[r]*3,a=t[(r+s-1)%s]*3,c=t[(r+1)%s]*3,l=e[c]-e[a],u=e[c+1]-e[a+1],h=Math.hypot(l,u)||1;for(let f=0;f<4;f++){const d=f/4*Math.PI*2,g=Math.cos(d)*.005;n.setXYZ(r*4+f,e[o]+u/h*g,e[o+1]-l/h*g,e[o+2]+Math.sin(d)*.002)}}n.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingSphere()}const ay=new fs(1,32,24),cy=new fs(1,24,18),ly=new Hn({color:"#f3e8ce",roughness:.42}),hy=new Hn({color:"#202329",roughness:.28}),uy=new rn({color:"#d77f82",roughness:.33,clearcoat:.18,clearcoatRoughness:.28}),fy=new Hn({color:"#68464c",roughness:.7}),zu=Array.from({length:49},(i,e)=>{const t=e/48*Math.PI*2,n=.114*Math.cos(t);return new z(n,.028*Math.sin(t)+.016*(n/.114)**2,.013)}),dy=new ao(new Cc(zu.slice(0,-1),!0),72,.024,12,!0),py=new Ic(new ri(zu.map(i=>new fe(i.x,i.y))),16);function my(i,e,t,n){const s=W=>{const V=Math.sin(t*127.1+W*311.7)*43758.5453;return V-Math.floor(V)},r=.91+s(1)*.18,o=.062+s(2)*.022,a=.285+s(3)*.027,c=.107+s(4)*.035,l=.79+s(5)*.17,u=new Ut;i.add(u);const h=[],f=[];let d=0,g=0,_=18+t*17.31%55,m=-10,p=0,v=0,x=0,y=0,b=-100;function E(W,V){const X=new Ut;return X.userData.anchor={x:W,y:V},h.push(X),u.add(X),X}for(const W of[-1,1]){const V=E((n?.x||0)+W*(n?.052:o),n?n.y+.025:a),X=new tt(ay,ly),F=new tt(cy,hy);X.scale.set(.078,.088,.055),F.scale.set(.032,.035,.014),F.position.set(-W*.005,-.004,.053),V.add(X,F),f.push(V)}const T=E(n?.x||0,n?n.y-.045:c);T.add(new tt(dy,uy));const R=new tt(py,fy);R.position.z=.002,T.add(R);const M=new Au,S=new z(0,0,1),D=new z,U=new z,H=new z;function Y(){i.updateWorldMatrix(!0,!0);for(const W of h){const V=W.userData.anchor;M.set(i.localToWorld(new z(V.x,V.y,2)),new z(0,0,-1).applyQuaternion(i.quaternion));const X=M.intersectObject(e)[0];if(!X)continue;const F=e.geometry.attributes.position,ie=[X.face.a,X.face.b,X.face.c],he=ie.map(xe=>new z().fromBufferAttribute(F,xe)),ue=new z;Qt.getBarycoord(e.worldToLocal(X.point.clone()),...he,ue),W.userData.binding={ids:ie,weights:ue.toArray()}}}return{face:u,mouthPosition(){return i.updateWorldMatrix(!0,!0),T.getWorldPosition(new z)},look(W,V){x=Math.max(-1,Math.min(1,(W-(n?.x||0))*1.4)),y=Math.max(-1,Math.min(1,(V-(n?n.y+.025:a))*1.4)),b=performance.now()},speak(W){g=W},touch(){d=1},update(W,V,X,F,ie,he){h[0].userData.binding||Y();const ue=e.geometry.attributes.position,xe=e.geometry.attributes.normal;for(const ne of h){const k=ne.userData.binding;if(k){D.set(0,0,0),U.set(0,0,0);for(let re=0;re<3;re++)D.addScaledVector(H.fromBufferAttribute(ue,k.ids[re]),k.weights[re]),U.addScaledVector(H.fromBufferAttribute(xe,k.ids[re]),k.weights[re]);U.normalize(),ne.position.copy(D).addScaledVector(U,n?.035:.012),ne.quaternion.setFromUnitVectors(S,U)}}const be=D.copy(S).applyQuaternion(f[0].quaternion),$=U.copy(S).applyQuaternion(f[1].quaternion);be.angleTo($)>.15&&(be.add($).normalize(),f[0].quaternion.setFromUnitVectors(S,be),f[1].quaternion.copy(f[0].quaternion)),d=Math.max(0,d-V*2),W>_&&(m=W,_=W+35+(t*13.7+W*1.7)%65);const O=W-m,C=he?0:O>=0&&O<.2?Math.sin(O/.2*Math.PI):0;performance.now()-b>1800&&(x=Math.sin(Math.floor(W/(11+t%5))+t*2.1)*.6,y=Math.cos(Math.floor(W/17)+t)*.3);const A=1-Math.exp(-18*V);p+=(x-p)*A,v+=(y-v)*A;for(const ne of f){const k=ne.children[1];k.position.x=p*.031,k.position.y=-.002+v*.027,k.position.z=.055*Math.sqrt(Math.max(.1,1-(k.position.x/.078)**2-(k.position.y/.088)**2))+.006}const j=Math.max(C,F*.48);for(const ne of f)ne.scale.set(n?.6:r,(n?.6:r)*(1-j*.85),n?.6:r);T.scale.setScalar(n?.48:l),T.scale.y*=1+g*.7+d*.08},dispose(){i.remove(u)}}}class gy{constructor(e){this.rest=new Float64Array(e.positions),this.p=this.rest.slice(),this.prev=this.p.slice(),this.v=new Float64Array(this.p.length),this.grad=new Float64Array(this.p.length),this.tri=e.triangles,this.rim=e.rim,this.edges=[],this.bends=[];const t=new Map;for(let n=0;n<this.tri.length;n+=3){const s=this.tri.slice(n,n+3);for(let r=0;r<3;r++){const o=s[r],a=s[(r+1)%3],c=s[(r+2)%3],l=o<a?o+","+a:a+","+o;if(t.has(l)){const u=t.get(l);this.bends.push(this.edge(u,c))}else t.set(l,c),this.edges.push(this.edge(o,a))}}this.restVolume=this.volume(),this.time=0,this.reset()}edge(e,t){const n=this.rest;return[e*3,t*3,Math.hypot(n[e*3]-n[t*3],n[e*3+1]-n[t*3+1],n[e*3+2]-n[t*3+2]),0]}reset(){this.p.set(this.rest),this.prev.set(this.rest),this.v.fill(0),this.time=0}volume(e=!1){const t=this.p,n=this.grad;e&&n.fill(0);let s=0;for(let r=0;r<this.tri.length;r+=3){const o=this.tri[r]*3,a=this.tri[r+1]*3,c=this.tri[r+2]*3,l=t[a+1]*t[c+2]-t[a+2]*t[c+1],u=t[a+2]*t[c]-t[a]*t[c+2],h=t[a]*t[c+1]-t[a+1]*t[c];s+=(t[o]*l+t[o+1]*u+t[o+2]*h)/6,e&&(n[o]+=l/6,n[o+1]+=u/6,n[o+2]+=h/6,n[a]+=(t[c+1]*t[o+2]-t[c+2]*t[o+1])/6,n[a+1]+=(t[c+2]*t[o]-t[c]*t[o+2])/6,n[a+2]+=(t[c]*t[o+1]-t[c+1]*t[o])/6,n[c]+=(t[o+1]*t[a+2]-t[o+2]*t[a+1])/6,n[c+1]+=(t[o+2]*t[a]-t[o]*t[a+2])/6,n[c+2]+=(t[o]*t[a+1]-t[o+1]*t[a])/6)}return s}distances(e,t,n){const s=this.p;for(const r of e){const[o,a,c]=r,l=t/(n*n)*Math.min(1,(c/.1)**2);let u=s[o]-s[a],h=s[o+1]-s[a+1],f=s[o+2]-s[a+2],d=Math.hypot(u,h,f);if(d<1e-9)continue;const g=(-(d-c)-l*r[3])/(2+l);r[3]+=g;const _=g/d;u*=_,h*=_,f*=_,s[o]+=u,s[o+1]+=h,s[o+2]+=f,s[a]-=u,s[a+1]-=h,s[a+2]-=f}}collide(e){const t=this.p;for(let n=0;n<t.length;n+=3){t[n+2]=Math.max(.008,t[n+2]);for(const s of e){let r=t[n]-s.x,o=t[n+1]-s.y,a=t[n+2]-s.z;const c=Math.hypot(r,o,a);if(c<s.r&&c>1e-8){const l=s.r/c;t[n]=s.x+r*l,t[n+1]=s.y+o*l,t[n+2]=Math.max(.008,s.z+a*l)}}}}step(e,{tension:t=.5,wind:n=0,colliders:s=[]}={}){this.time+=e;const r=this.p,o=this.v;this.prev.set(r);const a=Math.exp(-4.5*e);for(let h=0;h<o.length;h+=3)o[h]*=a,o[h+1]*=a,o[h+2]=o[h+2]*a-.45*e;if(n){const h=n*(.75+.25*Math.sin(this.time*1.3));for(let f=0;f<this.tri.length;f+=3){const d=this.tri[f]*3,g=this.tri[f+1]*3,_=this.tri[f+2]*3,m=r[g]-r[d],p=r[g+1]-r[d+1],v=r[g+2]-r[d+2],x=r[_]-r[d],y=r[_+1]-r[d+1],b=r[_+2]-r[d+2],E=p*b-v*y,T=v*x-m*b,R=m*y-p*x,M=Math.hypot(E,T,R);if(M<1e-8)continue;const S=(h-o[d])*E/M-o[d+1]*T/M-o[d+2]*R/M,D=S*Math.abs(S)*e*18;for(const U of[d,g,_])o[U]+=E*D,o[U+1]+=T*D,o[U+2]+=R*D}}for(let h=0;h<r.length;h++)r[h]+=e*o[h];for(const h of this.edges)h[3]=0;for(const h of this.bends)h[3]=0;let c=0;const l=this.restVolume*(.985+.04*t),u=2e-6/(.2+t)/(e*e);for(let h=0;h<10;h++){this.distances(this.edges,3e-6/(.3+t),e),this.distances(this.bends,25e-6,e);const f=this.volume(!0);let d=u;for(const _ of this.grad)d+=_*_;const g=(-(f-l)-u*c)/d;c+=g;for(let _=0;_<r.length;_++)r[_]+=this.grad[_]*g;this.collide(s)}for(let h=0;h<r.length;h++)o[h]=(r[h]-this.prev[h])/e,h%3!==2&&r[h-h%3+2]<=.0081&&(o[h]*=.65)}recover(e){const t=1-Math.exp(-4*e);let n=0;for(let s=0;s<this.p.length;s++)this.p[s]+=(this.rest[s]-this.p[s])*t,this.v[s]*=Math.exp(-10*e),n=Math.max(n,Math.abs(this.p[s]-this.rest[s]));return n<.001?(this.p.set(this.rest),this.prev.set(this.rest),this.v.fill(0),!0):!1}metrics(){let e=0;for(const[t,n,s]of this.edges)e=Math.max(e,Math.abs(Math.hypot(this.p[t]-this.p[n],this.p[t+1]-this.p[n+1],this.p[t+2]-this.p[n+2])/s-1));return{volumeRatio:this.volume()/this.restVolume,maxEdgeStrain:e,finite:this.p.every(Number.isFinite)}}}const Lh=(i,e,t)=>(e.x-i.x)*(t.y-i.y)-(e.y-i.y)*(t.x-i.x);function ho(i){const e=[...new Map(i.map(s=>[`${s.x},${s.y}`,s])).values()].sort((s,r)=>s.x-r.x||s.y-r.y);if(e.length<3)return e;const t=[],n=[];for(const s of e){for(;t.length>1&&Lh(t.at(-2),t.at(-1),s)<=0;)t.pop();t.push(s)}for(const s of e.toReversed()){for(;n.length>1&&Lh(n.at(-2),n.at(-1),s)<=0;)n.pop();n.push(s)}return t.slice(0,-1).concat(n.slice(0,-1))}const na=i=>Math.abs(i.reduce((e,t,n)=>{const s=i[(n+1)%i.length];return e+t.x*s.y-s.x*t.y},0)/2);function xy(i,e=0,t=.8){const n=i.filter((o,a)=>a%Math.max(1,Math.floor(i.length/40))===0).map(o=>new fe(o.x,o.y)),s=tn.triangulateShape(n,[]).map(o=>o.map(a=>n[a]));let r=!0;for(;r;){r=!1;e:for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++){if(s[o].filter(u=>s[a].includes(u)).length<2)continue;const l=ho([...s[o],...s[a]]);if(Math.abs(na(l)-na(s[o])-na(s[a]))<1e-7){s[o]=l,s.splice(a,1),r=!0;break e}}}return s.map(o=>({points:o,zMin:e,zMax:t}))}function _y(i,e,t){return{points:ho(i),zMin:e,zMax:t}}function yy(i){i.updateMatrixWorld(!0);const e=[];let t=1/0,n=-1/0;return i.traverse(s=>{if(!s.isMesh)return;const r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=Math.max(1,Math.floor(r.count/160))){const a=new z().fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld);i.worldToLocal(a),e.push(a),t=Math.min(t,a.z),n=Math.max(n,a.z)}}),[{points:ho(e),zMin:t,zMax:n}]}function Fs(i){const e=i.baseSize*(i.entry??1),t=e*i.squeeze*(1+i.kick*.1),n=e/i.squeeze*(1-i.kick*.09),s=i.angle+i.turn+i.kick*.06+(i.floatAngle||0),r=Math.cos(s),o=Math.sin(s);if(i.tiltX||i.tiltY){const a=new Ye().makeRotationFromEuler(new sn(i.tiltX||0,i.tiltY||0,s));return i.collision.map(c=>{const l=[];for(const d of c.points)for(const g of[c.zMin,c.zMax])l.push(new z(d.x*t,d.y*n,g*e*.85).applyMatrix4(a));const u=ho(l.map(d=>({x:i.px+(i.floatX||0)+d.x,y:i.py+(i.floatY||0)+d.y}))),h=u.map((d,g)=>{const _=u[(g+1)%u.length],m=Math.hypot(_.x-d.x,_.y-d.y);return m>1e-8?{x:-(_.y-d.y)/m,y:(_.x-d.x)/m}:null}).filter(Boolean),f=i.z+i.depth+(i.focusLift||0);return{points:u,axes:h,minX:Math.min(...u.map(d=>d.x)),maxX:Math.max(...u.map(d=>d.x)),minY:Math.min(...u.map(d=>d.y)),maxY:Math.max(...u.map(d=>d.y)),zMin:f+Math.min(...l.map(d=>d.z)),zMax:f+Math.max(...l.map(d=>d.z))}})}return i.collision.map(a=>{const c=a.points.map(u=>({x:i.px+(i.floatX||0)+u.x*t*r-u.y*n*o,y:i.py+(i.floatY||0)+u.x*t*o+u.y*n*r})),l=c.map((u,h)=>{const f=c[(h+1)%c.length],d=Math.hypot(f.x-u.x,f.y-u.y);return d>1e-8?{x:-(f.y-u.y)/d,y:(f.x-u.x)/d}:null}).filter(Boolean);return{points:c,axes:l,minX:Math.min(...c.map(u=>u.x)),maxX:Math.max(...c.map(u=>u.x)),minY:Math.min(...c.map(u=>u.y)),maxY:Math.max(...c.map(u=>u.y)),zMin:i.z+i.depth+(i.focusLift||0)+a.zMin*e*.85,zMax:i.z+i.depth+(i.focusLift||0)+a.zMax*e*.85}})}function vy(i,e){if(i.maxX<=e.minX||e.maxX<=i.minX||i.maxY<=e.minY||e.maxY<=i.minY||i.zMax<=e.zMin||e.zMax<=i.zMin)return null;const t=i.zMax-e.zMin,n=e.zMax-i.zMin;let s=Math.min(t,n),r=0,o=0,a=t<n?1:-1;for(const c of[i.axes,e.axes])for(const{x:l,y:u}of c){let h=1/0,f=-1/0,d=1/0,g=-1/0;for(const v of i.points){const x=v.x*l+v.y*u;h=Math.min(h,x),f=Math.max(f,x)}for(const v of e.points){const x=v.x*l+v.y*u;d=Math.min(d,x),g=Math.max(g,x)}if(f<=d||g<=h)return null;const _=f-d,m=g-h,p=Math.min(_,m);p<s&&(s=p,r=_<m?l:-l,o=_<m?u:-u,a=0)}return{depth:s,nx:r,ny:o,nz:a}}function My(i,e){let t=null;for(const n of i.worldCollision)for(const s of e.worldCollision){const r=vy(n,s);r&&(!t||r.depth>t.depth)&&(t=r)}return t}function Dh(i,e){i.layerOrder=i.z,i.radius=e,i.mass=Math.max(.15,e*e),i.px=i.x,i.py=i.y,i.vx=0,i.vy=0,i.omega=0,i.turn=0,i.depth=0,i.vz=0}function Sy(i,e,t,n,s,r,o){if(!e)return 0;const a=Math.min(2,Math.ceil(e/(1/60))),c=e/a;let l=0;for(let u=0;u<a;u++){for(const h of i){if(t>3.5){const g=1-Math.exp(-c*.9);h.x+=(h.px-h.x)*g,h.y+=(h.py-h.y)*g}const d=0;h.fx=((h.x-h.px)*d+Math.sin(t*.7+h.phase)*0)*h.mass,h.fy=((h.y-h.py)*d+Math.cos(t*.53+h.phase)*0)*h.mass}for(const h of i)h.worldCollision=Fs(h);for(let h=0;h<i.length;h++)for(let f=h+1;f<i.length;f++){const d=i[h],g=i[f];if(Math.hypot(d.px-g.px,d.py-g.py)>(d.radius+g.radius)*1.65||!n&&Math.hypot(d.vx-g.vx,d.vy-g.vy)<.12)continue;const _=My(d,g);if(!_||_.depth<.006)continue;l++;const{nx:m,ny:p,nz:v}=_,x=Math.min(.1,_.depth-.004),y=(g.vx-d.vx)*m+(g.vy-d.vy)*p,b=1/d.mass,E=1/g.mass,T=b+E;if(!(v||!n&&Math.abs(y)<.12)){if(d.px-=m*x*.42*b/T,d.py-=p*x*.42*b/T,g.px+=m*x*.42*E/T,g.py+=p*x*.42*E/T,y<-.12){const R=-y*(y<-2?1.06:1)/T;d.vx-=m*R*b,d.vy-=p*R*b,g.vx+=m*R*E,g.vy+=p*R*E}d.worldCollision=Fs(d),g.worldCollision=Fs(g)}}if(n){const h=n.actor,f=n.strength??1;h.fx+=(n.target.x-n.offset.x-h.px)*28*h.mass*(.25+.75*f),h.fy+=(n.target.y-n.offset.y-h.py)*28*h.mass*(.25+.75*f),h.omega+=(n.local.x*.25-h.turn)*c*3}for(const h of i){const f=r/2+h.radius*.3,d=o/2+h.radius*.3;Math.abs(h.px)>f&&(h.fx-=Math.sign(h.px)*(Math.abs(h.px)-f)*60*h.mass),Math.abs(h.py)>d&&(h.fy-=Math.sign(h.py)*(Math.abs(h.py)-d)*60*h.mass);const g=Math.exp(-3.8*c);h.vx=(h.vx+h.fx/h.mass*c)*g,h.vy=(h.vy+h.fy/h.mass*c)*g;const _=Math.hypot(h.vx,h.vy);_>24&&(h.vx*=24/_,h.vy*=24/_),Math.abs(h.vx)<.025&&(h.vx=0),Math.abs(h.vy)<.025&&(h.vy=0),h.px+=h.vx*c,h.py+=h.vy*c,h.omega+=(-h.turn*6+(h.vx-h.vy)*.1)*c,h.omega*=Math.exp(-5*c),h.turn+=h.omega*c,h.vz+=((n?.actor===h?-.14*(n.strength??1):0)-h.depth)*30*c,h.vz*=Math.exp(-11*c),h.depth+=h.vz*c}}return by(i),l/a}function by(i){const e=i.slice().sort((t,n)=>(n.speaking?100:n.layerOrder)-(t.speaking?100:t.layerOrder));for(let t=0;t<e.length;t++){const n=e[t];n.z=n.layerOrder;const s=Fs({...n,floatX:0,floatY:0,floatAngle:0}),r=.2+.04*n.baseSize;n.depthEnvelope={minX:Math.min(...s.map(a=>a.minX))-r,maxX:Math.max(...s.map(a=>a.maxX))+r,minY:Math.min(...s.map(a=>a.minY))-r,maxY:Math.max(...s.map(a=>a.maxY))+r,minZ:Math.min(...s.map(a=>a.zMin))-n.z-.02*n.baseSize,maxZ:Math.max(...s.map(a=>a.zMax))-n.z+.02*n.baseSize};const o=n.depthEnvelope;for(let a=0;a<t;a++){const c=e[a],l=c.depthEnvelope;o.maxX<=l.minX||l.maxX<=o.minX||o.maxY<=l.minY||l.maxY<=o.minY||(n.z=Math.min(n.z,c.z+l.minZ-o.maxZ-.035))}n.worldCollision=Fs(n)}}const jt=document.querySelector("#world"),Os=document.querySelector("#status"),Nh=tf();let Bc=!1;const Vn=rf(),dn=matchMedia("(prefers-reduced-motion: reduce)"),Zs=Number(new URLSearchParams(location.search).get("seed"))||crypto.getRandomValues(new Uint32Array(1))[0],Uh=[["#008beC","#ff5e44","#ffda19","#10c89e","#fc4a9b","#9a5ae9"],["#ff7c30","#0f86f9","#ffda1e","#fa4fa0","#12ceae","#975dea"],["#0987f7","#ffd51d","#fc54a3","#9d5ae9","#10c9a0","#ff664a"],["#ff6043","#ffdd19","#069fea","#fc50a2","#1bcb95","#9a5feb"],["#1788f9","#ff7d35","#ffd71c","#fb4b9e","#0ec7b5","#9463ea"]],ls=Uh[Zs%Uh.length],zc=["round","heart","triangle","square","star","spark","petal","coil"],Fh=["petal","spark","star","coil","heart","petal","triangle","spark","coil","star","round","petal","heart","spark","square","coil"],st=[],pn=[],wi=[];let Jn=[],sc,zt,kt,At,kc,ku,rc=0,oc=0,yn=12,Fn=8,kn=0,jr=0,Nt=0,ge=null,Ey,Si,ia=!1,gs=3,Bs=Zs;function gt(){return Bs=Bs*1664525+1013904223>>>0,Bs/4294967296}const ac=i=>new rn({color:i,roughness:.3,clearcoat:.22,clearcoatRoughness:.26,ior:1.46,transmission:0});function Ty(i){const e=Fh[i%Fh.length],t=zc.indexOf(e),n=new Ut,s=ac(ls[Math.floor(gt()*ls.length)]);s.roughness=.44+i%3*.025,s.clearcoat=.04,s.transmission=[.1,.18,.06,.24][i%4],s.thickness=.16,s.ior=1.38,s.attenuationDistance=1.6,s.attenuationColor.copy(s.color);const r=ku[t];r.data.noSeam||sy(s,i,r.body);const o=new tt(r.body,s),a=new tt(r.rim,s);r.data.noSeam||Vx(o),n.add(o),kt.add(n);const c=my(n,o,i,r.data.faceAnchor);a.visible=!r.data.noSeam,c.update(i*.63,0,"awake",0,!0,!0);const l={root:n,body:o,face:c,phase:gt()*Math.PI*2,angle:(gt()-.5)*2.5,size:.48+gt()**2*1.9,squeeze:.94+gt()*.12,z:gt()*.75,kick:0,velocity:0,x:0,y:0};["round","square","triangle"].includes(e)&&(l.size*=.72),l.projectIndex=i%22,l.collision=r.collision,l.shape=r,l.rim=a,l.press=0,o.userData.actor=l,wi.push(o),c.face.traverse(u=>{u.isMesh&&(u.userData.actor=l,wi.push(u))}),st.push(l)}function wy(i){const e=new Ut,t=kc[Jn[i%Jn.length]].clone(!0),n=new Map,s=["flower","daisy","spark","star"].includes(t.userData.itemId);t.traverse(h=>{if(h.isMesh){const f=t.userData.itemId==="bubbles"?"bubble-"+(h.name.match(/(\d+)$/)?.[1]||"0"):h.material.name;n.has(f)||n.set(f,ls[(i*3+n.size*2)%ls.length]),h.material=h.material.clone(),h.material.color.set(s?/^Center/i.test(h.name)?"#f2bf2e":"#fffaf1":n.get(f)),h.material.roughness=.42}}),e.add(t),kt.add(e);const r=new wn().setFromObject(t),o=r.getSize(new z),a=r.getCenter(new z);t.position.sub(a);const c=(.55+gt()*.4)/Math.max(o.x,o.y);t.scale.setScalar(c),t.position.multiplyScalar(c);const l=new Ut;l.add(t),e.add(l),l.rotation.set((gt()<.5?-1:1)*(.2+gt()*.55),(gt()<.5?-1:1)*(.18+gt()*.62),0);const u={root:e,phase:gt()*6.28,angle:gt()*6.28,size:1,squeeze:1,z:.8+gt()*.25,kick:0,velocity:0,x:0,y:0};u.collision=yy(e),e.traverse(h=>{h.isMesh&&(h.userData.actor=u,wi.push(h))}),pn.push(u)}function Ay(){ge=null,Si?.clear(),ir();for(const i of st)i.face.dispose(),kt.remove(i.root),i.body.material.dispose(),i.isGlyph&&i.body.geometry.dispose(),i.sim&&(i.body.geometry.dispose(),i.rim.geometry.dispose());for(const i of pn)kt.remove(i.root),i.root.traverse(e=>{e.isMesh&&(e.material.dispose(),i.letter&&e.geometry.dispose())});st.length=pn.length=wi.length=0,Bs=Zs;for(let i=0;i<Math.ceil(rc*oc*1.15);i++)Ty(i);Jn=kc.map((i,e)=>e);for(let i=Jn.length-1;i>0;i--){const e=Math.floor(gt()*(i+1));[Jn[i],Jn[e]]=[Jn[e],Jn[i]]}for(let i=0;i<Math.max(5,Math.ceil(rc*oc*.26));i++)wy(i);document.body.dataset.letters="",document.body.dataset.seed=String(Zs),document.body.dataset.palette=ls.join(","),document.body.dataset.shapes=zc.join(","),document.body.dataset.monsters=st.length,document.body.dataset.items=pn.length}function Oh(){const i=innerWidth,e=innerHeight;zt.setSize(i,e,!1),zt.setPixelRatio(Math.min(devicePixelRatio,1.25));const t=Math.max(3,Math.round(i/230)),n=Math.max(i<600?5:3,Math.round(e/220));yn=t*1.9,Fn=yn*e/i,At.left=-yn/2,At.right=yn/2,At.top=Fn/2,At.bottom=-Fn/2,At.updateProjectionMatrix(),st.length||(rc=t,oc=n,Ay()),Bs=(Zs^9678359)>>>0;const s=Math.sqrt(yn*Fn/st.length);st.forEach(a=>{a.baseSize=a.size*s/1.9,a.radius=a.baseSize*.89,a.x=(gt()-.5)*(yn+.7),a.y=(gt()-.5)*(Fn+.7)});const r=st.reduce((a,c)=>a+Math.PI*c.radius*c.radius,0),o=Math.sqrt(yn*Fn*1.35/r);for(const a of st)a.baseSize*=o,a.radius*=o;for(let a=0;a<180;a++){for(let c=0;c<st.length;c++)for(let l=c+1;l<st.length;l++){const u=st[c],h=st[l],f=h.x-u.x,d=h.y-u.y,g=Math.hypot(f,d)||.001,_=(u.radius+h.radius)*.93-g;if(_>0){const m=_*.23;u.x-=f/g*m,u.y-=d/g*m,h.x+=f/g*m,h.y+=d/g*m}}for(const c of st)c.x=Xs.clamp(c.x,-yn/2+c.radius*.36,yn/2-c.radius*.36),c.y=Xs.clamp(c.y,-Fn/2+c.radius*.36,Fn/2-c.radius*.36)}pn.forEach((a,c)=>{const l=st[c%st.length],u=st.filter(f=>f!==l).sort((f,d)=>Math.hypot(f.x-l.x,f.y-l.y)-Math.hypot(d.x-l.x,d.y-l.y)),h=u[c%Math.min(3,u.length)];a.x=(l.x+h.x)/2+(gt()-.5)*.3,a.y=(l.y+h.y)/2+(gt()-.5)*.3,a.baseSize=s/1.9});for(const a of st){const c=a.userScale||1;a.userScale=1,Dh(a,a.radius),Kr(a,c)}for(const a of pn){const c=a.userScale||1;a.userScale=1,Dh(a,(a.letter?.6:.29)*a.baseSize),Kr(a,c)}if(ia||(document.body.dataset.colorConflicts=String(ry(st,ls,gt))),(!ia||!Bc)&&!dn.matches)for(const a of[...st,...pn])a.px=a.x*.06,a.py=a.y*.06,a.vx=a.x*3.9,a.vy=a.y*3.9,a.turn=(gt()-.5)*2.7,a.omega=(gt()-.5)*5,a.entry=.07,a.entryVelocity=0,a.delay=gt()*.13;ia=!0,Ai(0),mn()}function Bh(i,e,t){Qu(i,e,ge?.actor===i),i.delay>0?i.delay-=e:i.entry!==void 0&&(i.entryVelocity+=((1-i.entry)*90-i.entryVelocity*10)*e,i.entry+=i.entryVelocity*e),i.velocity+=(-i.kick*55-i.velocity*15)*e,i.kick+=i.velocity*e;const n=i.phase,s=Nt,r=dn.matches||ge?.actor===i?0:1;i.floatBlend=(i.floatBlend??r)+(r-(i.floatBlend??r))*(1-Math.exp(-4*e)),i.floatX=Math.sin(s*(.25+n%1*.18)+n)*(.045+n%1*.07)*i.floatBlend,i.floatY=Math.sin(s*(.32+n%1.3*.13)+n*1.7)*(.075+n%1*.095)*i.floatBlend,i.floatAngle=Math.sin(s*(.22+n%1*.13)+n*2.3)*.018*i.floatBlend;const o=i.speaking?Math.max(0,4.1-i.layerOrder):0;i.focusLift=(i.focusLift||0)+(o-(i.focusLift||0))*(1-Math.exp(-10*e)),i.root.position.set(i.px+i.floatX,i.py+i.floatY,i.z+i.depth+i.focusLift),i.root.rotation.set(i.tiltX||0,i.tiltY||0,i.angle+i.turn+i.kick*.06+i.floatAngle);const a=1+Math.sin(s*(.48+n%1*.17)+n)*(dn.matches?0:.006),c=i.baseSize*a*(i.entry??1);i.root.scale.set(c*i.squeeze*(1+i.kick*.1),c/i.squeeze*(1-i.kick*.09),c*.85),t&&(Ry(i,e),i.face.update(s+n,e,"awake",Math.max(0,i.kick)*.3+i.press*.7,!1,dn.matches))}function Ry(i,e){if(!i.sim||!i.deforming||!e)return;const t=ge?.actor===i;if(i.press+=((t?ge.strength:0)-i.press)*(1-Math.exp(-14*e)),t&&i.press>.65&&!ge.feltCompression&&(ge.feltCompression=!0,Vn.pulse("grip",i.press)),t){const s=ge.local,r=Math.ceil(e*120);for(let o=0;o<r;o++)i.sim.step(e/r,{tension:.65,colliders:[{x:s.x,y:s.y,z:s.z+.29-.24*i.press,r:.32}]})}else i.sim.recover(e)&&(i.deforming=!1,i.press=0);const n=i.body.geometry.attributes.position.array;i.shape.skin.stencils.forEach((s,r)=>n.set(Fu(i.sim.p,s),r*3)),i.body.geometry.attributes.position.needsUpdate=!0,i.body.geometry.computeVertexNormals(),i.body.geometry.computeBoundingSphere(),i.shape.data.noSeam||Bu(i.rim.geometry,n,i.shape.skin.rim)}function Ai(i){const e=[...st,...pn];ge&&(ge.elapsed+=i,ge.strength=.08+.92*Math.min(1,ge.elapsed/2));const t=!!ge||Nt<gs,n=t?Sy(e,i,Nt,ge,dn.matches,yn,Fn):0;if(!t)for(const s of e)s.angle+=s.turn,s.turn=0,s.entry=1,s.entryVelocity=0,s.vx=s.vy=s.omega=s.velocity=s.vz=0,s.kick=0,s.x=s.px,s.y=s.py;for(const s of st)Bh(s,i,!0);for(const s of pn)Bh(s,i,!1);Py(),Si?.update(Nt,i,st,At,dn.matches,ge),ny(At),sc?.begin(),zt.render(kt,At),sc?.end(),Nt-(Ai.metricsAt||-1)>.25&&(Ai.metricsAt=Nt,document.body.dataset.triangles=String(zt.info.render.triangles),document.body.dataset.drawCalls=String(zt.info.render.calls),document.body.dataset.time=Nt.toFixed(2),document.body.dataset.sleeping=String(!t),document.body.dataset.entry=String(Math.min(...e.map(s=>s.entry??1)).toFixed(3)),document.body.dataset.motion=JSON.stringify({contacts:Math.round(n),speed:+e.reduce((s,r)=>s+Math.hypot(r.vx,r.vy),0).toFixed(3),press:+(ge?.actor.press||0).toFixed(3),deforming:st.filter(s=>s.deforming).length}))}function cc(i){if(kn=0,document.hidden)return;if(Nt>=gs&&!ge&&i-jr<32){kn=requestAnimationFrame(cc);return}const e=Math.min((i-jr)/1e3||0,.035);jr=i,Nt+=e,Ai(e),(!dn.matches||ge||[...st,...pn].some(t=>t.deforming||Math.abs(t.kick)+Math.abs(t.velocity)+Math.hypot(t.vx,t.vy)>.002))&&(kn=requestAnimationFrame(cc))}function mn(){Bc&&!kn&&!document.hidden&&(jr=performance.now(),kn=requestAnimationFrame(cc))}function Cy(i,e,t){if(st.length){gs=Nt+5;for(const n of[...st,...pn]){const s=t*6/Math.sqrt(Math.max(.5,n.mass));n.vx+=i*s,n.vy+=e*s,n.omega+=(n.phase/Math.PI-1)*s*.09,n.face?.touch(i*.1,e*.1)}document.body.dataset.wind=String(t.toFixed(3)),mn()}}function Hu(i,e=1){gs=Nt+2.3,i.velocity=5*e,i.vx+=Math.cos(i.phase)*.7*e,i.vy+=Math.sin(i.phase)*.7*e,i.omega+=.35*e,i.face?.touch(0,.4),document.body.dataset.touches=String(+(document.body.dataset.touches||0)+1),mn()}const ni=new Au,so=new fe;let Hc=!1;jt.addEventListener("pointerleave",()=>{Hc=!1});function Py(){if(!Hc)return;const i=so.x*At.right,e=so.y*At.top;for(const t of st){if(Math.hypot(i-t.root.position.x,e-t.root.position.y)>t.radius+1.8)continue;t.root.updateWorldMatrix(!0,!1);const n=t.root.worldToLocal(new z(i,e,t.root.position.z));t.face.look(n.x,n.y)}}const Iy=new $n(new z(0,0,1),0);function Vc(i){return so.set(i.clientX/innerWidth*2-1,1-i.clientY/innerHeight*2),ni.setFromCamera(so,At),ni.ray.intersectPlane(Iy,new z)}function Vu(){const i=ge.actor;i.root.rotation.set(i.tiltX||0,i.tiltY||0,i.angle+i.turn),i.root.updateMatrixWorld(!0);const e=i.root.localToWorld(ge.local.clone());ge.offset.set(e.x-i.px,e.y-i.py,0)}function Gu(){const i=[...ge.points.values()];ge.previous=i.length===2?i[0].clone().add(i[1]).multiplyScalar(.5):i[0].clone(),ge.distance=i.length===2?i[0].distanceTo(i[1]):0,ge.twist=i.length===2?Math.atan2(i[1].y-i[0].y,i[1].x-i[0].x):0,ge.lastMove=performance.now(),ge.target=ge.previous.clone(),ge.offset.set(ge.target.x-ge.actor.px,ge.target.y-ge.actor.py,0),ge.local=ge.actor.root.worldToLocal(new z(ge.target.x,ge.target.y,ge.actor.root.position.z))}jt.addEventListener("pointerdown",i=>{if(!At||i.button!==0)return;const e=Vc(i);if(ge){i.pointerType==="touch"&&!ge.points.has(i.pointerId)&&ge.points.size<2&&(ge.points.set(i.pointerId,e),ge.moved=!0,Gu(),jt.setPointerCapture(i.pointerId));return}const t=Si?.invitedActor(ni);if(t){Ou(t,Si,Nt,dn.matches);return}if(Si?.hit(ni))return;ir();const n=ni.intersectObjects(wi,!1)[0];if(!n)return;const s=n.object.userData.actor,r=s.body?ni.intersectObject(s.body)[0]:null,o=s.root.worldToLocal((r?.point||n.point).clone());ge={id:i.pointerId,actor:s,startX:i.clientX,startY:i.clientY,startAt:performance.now(),elapsed:0,strength:.08,moved:!1,points:new Map([[i.pointerId,e]]),local:o,target:e,offset:new z(e.x-s.px,e.y-s.py,0)},ge.previous=e.clone(),ge.lastMove=performance.now(),s.body&&!s.isGlyph&&(s.sim||(s.sim=new gy(s.shape.data),s.body.geometry=s.body.geometry.clone(),s.rim.geometry=s.rim.geometry.clone()),s.deforming=!0),Vn.pulse("press",.25+Math.min(.4,Math.hypot(o.x,o.y)*.2),{size:s.userScale||1}),jt.setPointerCapture(i.pointerId),Hu(s,.08),document.body.dataset.held="true",mn()});jt.addEventListener("pointermove",i=>{if(!At)return;const e=Vc(i);if(Hc=!0,ge||(jt.style.cursor=ni.intersectObjects(wi,!1).length?"grab":"default"),mn(),!ge||!ge.points.has(i.pointerId))return;ge.points.set(i.pointerId,e),Math.hypot(i.clientX-ge.startX,i.clientY-ge.startY)>9&&(ge.moved=!0);const t=[...ge.points.values()],n=t.length===2?t[0].clone().add(t[1]).multiplyScalar(.5):e,s=performance.now(),r=Math.max(.008,Math.min(.1,(s-ge.lastMove)/1e3));if(Zu(ge.actor,ge.offset,n.x-ge.previous.x,n.y-ge.previous.y,r),t.length===2){const a=t[0].distanceTo(t[1]),c=Math.atan2(t[1].y-t[0].y,t[1].x-t[0].x);ge.distance>.05&&Kr(ge.actor,(ge.actor.userScale||1)*a/ge.distance),ge.actor.angle+=Math.atan2(Math.sin(c-ge.twist),Math.cos(c-ge.twist)),ge.distance=a,ge.twist=c}const o=n.distanceTo(ge.previous)/r;o>.12&&Vn.pulse("rub",Math.min(1,o/6),{size:ge.actor.userScale||1}),t.length===2&&Math.abs((ge.actor.userScale||1)-(ge.soundScale||1))>.035&&(Vn.pulse("scale",.5,{size:ge.actor.userScale||1,direction:(ge.actor.userScale||1)-(ge.soundScale||1)}),ge.soundScale=ge.actor.userScale||1),ge.previous=n.clone(),ge.lastMove=s,ge.target=n,Vu(),document.body.dataset.rotation3d=JSON.stringify({x:ge.actor.tiltX,y:ge.actor.tiltY}),document.body.dataset.balloonScale=String(ge.actor.userScale||1),mn()});jt.addEventListener("wheel",i=>{if(!At)return;Vc(i);const e=ge?.actor||ni.intersectObjects(wi,!1)[0]?.object.userData.actor;if(!e)return;i.preventDefault();const t=i.deltaY*(i.deltaMode===1?16:i.deltaMode===2?innerHeight:1),n=e.userScale||1;Kr(e,(e.userScale||1)*Math.exp(-Math.max(-100,Math.min(100,t))*.002)),e.userScale!==n&&(Vn.unlock(),Vn.pulse("scale",Math.min(1,Math.abs(t)/80),{size:e.userScale,direction:e.userScale-n})),ge&&Vu(),gs=Nt+2.3,document.body.dataset.balloonScale=String(e.userScale),mn()},{passive:!1});function Wu(i=!1){ge&&(i&&(ge.moved||ge.actor.press>.15)&&Vn.pulse("release",Math.min(1,.25+Math.hypot(ge.actor.vx,ge.actor.vy)/8),{size:ge.actor.userScale||1}),gs=Nt+2.3,i&&!ge.moved&&performance.now()-ge.startAt<650&&ge.actor.face&&Ou(ge.actor,Si,Nt,dn.matches)),ge=null,document.body.dataset.held="false",mn()}function Xu(i,e){if(ge?.points.has(i.pointerId)){if(ge.points.delete(i.pointerId),ge.points.size){ge.id=ge.points.keys().next().value,Gu();return}Wu(e)}}jt.addEventListener("pointerup",i=>Xu(i,!0));for(const i of["pointercancel","lostpointercapture"])jt.addEventListener(i,e=>Xu(e,!1));window.addEventListener("blur",()=>Wu(!1));jt.addEventListener("keydown",i=>{i.code==="Space"&&(i.preventDefault(),st.forEach(e=>Hu(e)))});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(kn),kn=0):mn()});dn.addEventListener("change",()=>{Ai(0),mn()});jt.addEventListener("webglcontextlost",i=>{i.preventDefault(),cancelAnimationFrame(kn),kn=0,Os.textContent="Restoring the playground…",Os.hidden=!1});jt.addEventListener("webglcontextrestored",()=>location.reload());function Ly(i){const e=new Ut,t=i==="daisy"?7:5,n=new fs(1,24,16),s=ac("#fffaf1"),r=ac("#f2bf2e");s.name="Petals",r.name="Center";for(let a=0;a<t;a++){const c=a/t*Math.PI*2,l=new tt(n,s);l.name="Petal",l.position.set(Math.cos(c)*.29,Math.sin(c)*.29,0),l.scale.set(.32,.145,.14),l.rotation.z=c,e.add(l)}const o=new tt(n,r);return o.name="Center",o.position.z=.14,o.scale.set(.19,.19,.15),e.add(o),e.userData.itemId=i,e}async function Dy(){try{zt=new Du({canvas:jt,antialias:!0}),sc=of(zt),zt.transmissionResolutionScale=.5,zt.setClearColor("#dcd8d0"),zt.toneMapping=Hh,zt.toneMappingExposure=.98,kt=new Sc,At=new nr(-6,6,4,-4,.1,200),At.position.set(0,0,15);const i=new $a(zt),e=new Zx,t=i.fromScene(e,.04);kt.environment=t.texture,kt.environmentIntensity=.32,e.dispose(),i.dispose(),kt.add(new Tu("#fffaf0","#c9bfac",.78));const n=new no("#fff7ee",1.9);n.position.set(-5,7,9),kt.add(n);const s=new no("#e2ecff",.4);s.position.set(5,-2,6),kt.add(s);const r=await fetch("./membrane.json");if(!r.ok)throw Error("Membrane load failed");await r.json();const o=Kx();Ey=N_(o),document.body.dataset.shapeSource="Authored classic balloon outlines",ku=zc.map(u=>{const h=Gx($x(yh[u]?Xx(o,yh[u]):O_(o,u))),f={stencils:Array.from({length:h.positions.length/3},(p,v)=>[[v,1]]),triangles:h.triangles,rim:h.rim},d=f.stencils.flatMap(p=>Fu(h.positions,p)),g=new Mt;g.setAttribute("position",new lt(d,3)),g.setIndex(f.triangles),g.computeVertexNormals(),h.noSeam||iy(g,f.rim);const _=oy(f.rim.length);Bu(_,d,f.rim),_.setAttribute("filmEdge",new yt(new Float32Array(_.attributes.position.count),1));let m;if(h.noSeam){m=[];for(let p=0;p<140;p+=5){const v=[];let x=1/0,y=-1/0;for(let b=p;b<=Math.min(144,p+5);b++)for(let E=0;E<12;E++){const T=b*12+E,R=h.positions[T*3+2];v.push({x:h.positions[T*3],y:h.positions[T*3+1]}),x=Math.min(x,R),y=Math.max(y,R)}m.push(_y(v,x,y))}}else{const p=f.rim.map(v=>({x:d[v*3],y:d[v*3+1]}));g.computeBoundingBox(),m=xy(p,g.boundingBox.min.z-.012,g.boundingBox.max.z+.1)}return{body:g,rim:_,data:h,skin:f,collision:m}});const a=await fetch("./items/manifest.json");if(!a.ok)throw Error("Items load failed");const c=(await a.json()).filter(u=>!["bean","pillow","cloud","leaf"].includes(u.id)),l=new Qx;kc=await Promise.all(c.map(async u=>{if(["flower","daisy","spark","star"].includes(u.id))return Ly(u.id);const h=await l.loadAsync("./items/"+u.id+".glb");return h.scene.traverse(f=>{if(f.isMesh){for(const d of[f.geometry.attributes.position,f.geometry.attributes.normal])if(d){for(let g=0;g<d.count;g++){const _=d.getY(g),m=d.getZ(g);d.setY(g,-m),d.setZ(g,_)}d.needsUpdate=!0}if(f.geometry.computeBoundingBox(),f.geometry.computeBoundingSphere(),f.material.side=u.id==="heart"?ln:En,u.id!=="heart"&&!f.material.map){const d=f.geometry;f.geometry=Jx(d),f.geometry!==d&&d.dispose()}}}),h.scene.userData.itemId=u.id,h.scene})),await document.fonts.load("400 80px fatfrank"),document.body.dataset.typeface=document.fonts.check("400 80px fatfrank")?"FatFrank":"fallback",Si=H_(kt,(u,h,f)=>Vn.babble({size:u.userScale||1,message:h,phrase:f}),()=>Vn.stopVoice()),J_(Cy),Oh(),jx(kt,zt,()=>Ai(0)),window.addEventListener("resize",Oh),await zt.compileAsync(kt,At),Ai(0),Os.hidden=!0,document.body.dataset.ready="true",await Nh.finish(()=>{Bc=!0,mn()})}catch(i){Nh.cancel(),console.error(i),Os.hidden=!1,Os.textContent="Could not load the playground. Please refresh.",document.body.dataset.error=i.message}}document.querySelector("#reload-crowd").addEventListener("click",i=>{const e=i.currentTarget;e.disabled=!0,e.dataset.reloading="true",setTimeout(()=>location.reload(),dn.matches?0:180)});Dy();
