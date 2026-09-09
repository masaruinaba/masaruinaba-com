(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Vu({soundEnabled:s,hapticsEnabled:e,volume:t}){let n=null,i=0;const r=new Set;function o(){if(!s())return;const u=window.AudioContext||window.webkitAudioContext;u&&(n??=new u,n.state==="suspended"&&n.resume().catch(()=>{}))}function a(){for(const u of r)try{u.stop()}catch{}r.clear(),typeof navigator.vibrate=="function"&&navigator.vibrate(0)}function c(u,h=.5){const f=Math.min(1,Math.max(0,h)),d=u==="rub";if(!(d&&performance.now()-i<100)&&(d&&(i=performance.now()),e()&&typeof navigator.vibrate=="function"&&navigator.vibrate(u==="release"?8:u==="grip"?[12,18,9]:d?5:12),!(!s()||!n))){if(n.state==="suspended"){n.resume().then(()=>{s()&&l(u,f,d)}).catch(()=>{});return}l(u,f,d)}}function l(u,h,f){if(n.state!=="running")return;const d=n.currentTime,m=u==="grip"?.16:u==="release"?.13:f?.06:.1,_=Math.ceil(n.sampleRate*m),g=n.createBuffer(1,_,n.sampleRate),p=g.getChannelData(0);let v=0,x=0;for(let R=0;R<_;R++){const M=R/_,b=u==="grip"?310:u==="release"?520:460,D=u==="grip"?145:u==="release"?280:205,U=D+(b-D)*Math.exp(-M*5)+Math.sin(M*Math.PI*3)*22*(1-M);x+=Math.PI*2*U/n.sampleRate,v=.68*v+.32*(Math.random()*2-1),p[R]=Math.sin(x)*.78+Math.sin(x*2)*.1*(1-M)+v*.1}const y=n.createBufferSource();y.buffer=g;const E=n.createBiquadFilter();E.type="lowpass",E.Q.value=.5,E.frequency.setValueAtTime(1800,d),E.frequency.exponentialRampToValueAtTime(900,d+m);const S=n.createGain(),A=Math.min(.18,Math.max(0,t()))*(.22+.5*h)*(f?.4:1);if(S.gain.setValueAtTime(0,d),S.gain.linearRampToValueAtTime(A,d+.012),S.gain.exponentialRampToValueAtTime(1e-4,d+m),y.connect(E).connect(S).connect(n.destination),r.size>=4){const R=r.values().next().value;try{R.stop()}catch{}r.delete(R)}r.add(y),y.onended=()=>{r.delete(y),y.disconnect(),E.disconnect(),S.disconnect()},y.start(d),y.stop(d+m+.01),typeof document<"u"&&(document.documentElement.dataset.audioState=n.state,document.documentElement.dataset.feedback=u)}return{unlock:o,pulse:c,stop:a}}function Gu(){const s=Vu({soundEnabled:()=>document.querySelector("#mic-toggle")?.getAttribute("aria-pressed")!=="true",hapticsEnabled:()=>!0,volume:()=>.12});return document.addEventListener("pointerdown",e=>{e.target.closest("#world,.play-controls")&&s.unlock()},{capture:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&s.stop()}),window.addEventListener("pagehide",()=>s.stop()),s}function Wu(s){if(!new URLSearchParams(location.search).has("profile"))return null;const e=s.getContext(),t=e.getExtension("EXT_disjoint_timer_query_webgl2");let n=null,i=!1,r=0;const o=[],a=[],c=()=>{const l=u=>u.length?u.reduce((h,f)=>h+f,0)/u.length:null;document.body.dataset.profile=JSON.stringify({cpuMs:l(o),gpuMs:l(a),samples:o.length,gpuSamples:a.length})};return{begin(){n&&e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)&&(e.getParameter(t.GPU_DISJOINT_EXT)||(a.push(e.getQueryParameter(n,e.QUERY_RESULT)/1e6),a.length>120&&a.shift()),e.deleteQuery(n),n=null),t&&!n&&(n=e.createQuery(),e.beginQuery(t.TIME_ELAPSED_EXT,n),i=!0),r=performance.now()},end(){i&&(e.endQuery(t.TIME_ELAPSED_EXT),i=!1),o.push(performance.now()-r),o.length>120&&o.shift(),c()}}}const rc="180",Xu=0,Xc=1,qu=2,Dh=1,Yu=2,Un=3,En=0,Ft=1,ln=2,ni=0,Yi=1,qc=2,Yc=3,jc=4,ju=5,yi=100,Ku=101,Ju=102,Zu=103,$u=104,Qu=200,ef=201,tf=202,nf=203,ea=204,ta=205,sf=206,rf=207,of=208,af=209,cf=210,lf=211,hf=212,uf=213,ff=214,na=0,ia=1,sa=2,Zi=3,ra=4,oa=5,aa=6,ca=7,oc=0,df=1,pf=2,ii=0,mf=1,gf=2,xf=3,Nh=4,_f=5,yf=6,vf=7,Kc="attached",Mf="detached",Uh=300,$i=301,Qi=302,la=303,ha=304,eo=306,es=1e3,Qn=1001,Wr=1002,At=1003,Fh=1004,ws=1005,Vt=1006,Ur=1007,Sn=1008,Tn=1009,Oh=1010,Bh=1011,Os=1012,ac=1013,Si=1014,un=1015,Zs=1016,cc=1017,lc=1018,Bs=1020,zh=35902,kh=35899,Hh=1021,Vh=1022,Qt=1023,zs=1026,ks=1027,hc=1028,uc=1029,Gh=1030,fc=1031,dc=1033,Fr=33776,Or=33777,Br=33778,zr=33779,ua=35840,fa=35841,da=35842,pa=35843,ma=36196,ga=37492,xa=37496,_a=37808,ya=37809,va=37810,Ma=37811,Sa=37812,ba=37813,Ea=37814,Ta=37815,wa=37816,Aa=37817,Ra=37818,Ca=37819,Pa=37820,Ia=37821,La=36492,Da=36494,Na=36495,Ua=36283,Fa=36284,Oa=36285,Ba=36286,Hs=2300,Vs=2301,lo=2302,Jc=2400,Zc=2401,$c=2402,Sf=2500,bf=0,Wh=1,za=2,Ef=3200,Tf=3201,pc=0,wf=1,Zn="",St="srgb",Ot="srgb-linear",Xr="linear",ct="srgb",Ri=7680,Qc=519,Af=512,Rf=513,Cf=514,Xh=515,Pf=516,If=517,Lf=518,Df=519,ka=35044,ir=35048,el="300 es",bn=2e3,qr=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tl=1234567;const Cs=Math.PI/180,ts=180/Math.PI;function tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function mc(s,e){return(s%e+e)%e}function Nf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Uf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ps(s,e,t){return(1-t)*s+t*e}function Ff(s,e,t,n){return Ps(s,e,1-Math.exp(-t*n))}function Of(s,e=1){return e-Math.abs(mc(s,e*2)-e)}function Bf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hf(s,e){return s+Math.random()*(e-s)}function Vf(s){return s*(.5-Math.random())}function Gf(s){s!==void 0&&(tl=s);let e=tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wf(s){return s*Cs}function Xf(s){return s*ts}function qf(s){return(s&s-1)===0&&s!==0}function Yf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Gs={DEG2RAD:Cs,RAD2DEG:ts,generateUUID:tn,clamp:Je,euclideanModulo:mc,mapLinear:Nf,inverseLerp:Uf,lerp:Ps,damp:Ff,pingpong:Of,smoothstep:Bf,smootherstep:zf,randInt:kf,randFloat:Hf,randFloatSpread:Vf,seededRandom:Gf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:jf,setQuaternionFromProperEuler:Kf,normalize:rt,denormalize:hn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==m){let g=1-a;const p=c*f+l*d+u*m+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,p*v);g=Math.sin(g*S)/E,a=Math.sin(a*S)/E}const y=a*v;if(c=c*g+f*y,l=l*g+d*y,u=u*g+m*y,h=h*g+_*y,g===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*d-l*f,e[t+1]=c*m+u*f+l*h-a*d,e[t+2]=l*m+u*d+a*f-c*h,e[t+3]=u*m-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h+f*d*m;break;case"YZX":this._x=f*u*h+l*d*m,this._y=l*d*h+f*u*m,this._z=l*u*m-f*d*h,this._w=l*u*h-f*d*m;break;case"XZY":this._x=f*u*h-l*d*m,this._y=l*d*h-f*u*m,this._z=l*u*m+f*d*h,this._w=l*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new k,nl=new oi;class We{constructor(e,t,n,i,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],y=i[7],E=i[2],S=i[5],A=i[8];return r[0]=o*_+a*v+c*E,r[3]=o*g+a*x+c*S,r[6]=o*p+a*y+c*A,r[1]=l*_+u*v+h*E,r[4]=l*g+u*x+h*S,r[7]=l*p+u*y+h*A,r[2]=f*_+d*v+m*E,r[5]=f*g+d*x+m*S,r[8]=f*p+d*y+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new We;function qh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jf(){const s=Ws("canvas");return s.style.display="block",s}const il={};function Xs(s){s in il||(il[s]=!0,console.warn(s))}function Zf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const sl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $f(){const s={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?Xr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ot]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),s}const et=$f();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ci;class Qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Ws("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ed=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fo(i[o].image)):r.push(fo(i[o]))}else r=fo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;const po=new k;class bt extends ls{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Qn,i=Qn,r=Vt,o=Sn,a=Qt,c=Tn,l=bt.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=tn(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Uh;bt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(d+1)/2,E=(p+1)/2,S=(u+f)/4,A=(h+_)/4,R=(m+g)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=A/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=R/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yh extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class id extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),rr.subVectors(this.max,xs),Pi.subVectors(e.a,xs),Ii.subVectors(e.b,xs),Li.subVectors(e.c,xs),Vn.subVectors(Ii,Pi),Gn.subVectors(Li,Ii),li.subVectors(Pi,Li);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-li.z,li.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,li.z,0,-li.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-li.y,li.x,0];return!mo(t,Pi,Ii,Li,rr)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Pi,Ii,Li,rr))?!1:(or.crossVectors(Vn,Gn),t=[or.x,or.y,or.z],mo(t,Pi,Ii,Li,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new k,new k,new k,new k,new k,new k,new k,new k],on=new k,sr=new wn,Pi=new k,Ii=new k,Li=new k,Vn=new k,Gn=new k,li=new k,xs=new k,rr=new k,or=new k,hi=new k;function mo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hi.fromArray(s,r);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),u=n.dot(hi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const sd=new wn,_s=new k,go=new k;class gn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(go)),this.expandByPoint(_s.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new k,xo=new k,ar=new k,Wn=new k,_o=new k,cr=new k,yo=new k;class $s{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xo.copy(e).add(t).multiplyScalar(.5),ar.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ar),a=Wn.dot(this.direction),c=-Wn.dot(ar),l=Wn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(xo).addScaledVector(ar,f),d}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,i,r){_o.subVectors(t,e),cr.subVectors(n,e),yo.crossVectors(_o,cr);let o=this.direction.dot(yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const c=a*this.direction.dot(cr.crossVectors(Wn,cr));if(c<0)return null;const l=a*this.direction.dot(_o.cross(Wn));if(l<0||c+l>o)return null;const u=-a*Wn.dot(yo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,r,o,a,c,l,u,h,f,d,m,_,g){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,d,m,_,g)}set(e,t,n,i,r,o,a,c,l,u,h,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,m=l*u,_=l*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,m=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=c*u,t[4]=m*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rd,e,od)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Xn.crossVectors(n,Xt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Xn.crossVectors(n,Xt)),Xn.normalize(),lr.crossVectors(Xt,Xn),i[0]=Xn.x,i[4]=lr.x,i[8]=Xt.x,i[1]=Xn.y,i[5]=lr.y,i[9]=Xt.y,i[2]=Xn.z,i[6]=lr.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],y=n[11],E=n[15],S=i[0],A=i[4],R=i[8],M=i[12],b=i[1],D=i[5],U=i[9],z=i[13],q=i[2],W=i[6],G=i[10],j=i[14],F=i[3],oe=i[7],he=i[11],fe=i[15];return r[0]=o*S+a*b+c*q+l*F,r[4]=o*A+a*D+c*W+l*oe,r[8]=o*R+a*U+c*G+l*he,r[12]=o*M+a*z+c*j+l*fe,r[1]=u*S+h*b+f*q+d*F,r[5]=u*A+h*D+f*W+d*oe,r[9]=u*R+h*U+f*G+d*he,r[13]=u*M+h*z+f*j+d*fe,r[2]=m*S+_*b+g*q+p*F,r[6]=m*A+_*D+g*W+p*oe,r[10]=m*R+_*U+g*G+p*he,r[14]=m*M+_*z+g*j+p*fe,r[3]=v*S+x*b+y*q+E*F,r[7]=v*A+x*D+y*W+E*oe,r[11]=v*R+x*U+y*G+E*he,r[15]=v*M+x*z+y*j+E*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+g*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=h*g*l-_*f*l+_*c*d-a*g*d-h*c*p+a*f*p,x=m*f*l-u*g*l-m*c*d+o*g*d+u*c*p-o*f*p,y=u*_*l-m*h*l+m*a*d-o*_*d-u*a*p+o*h*p,E=m*h*c-u*_*c-m*a*f+o*_*f+u*a*g-o*h*g,S=t*v+n*x+i*y+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=v*A,e[1]=(_*f*r-h*g*r-_*i*d+n*g*d+h*i*p-n*f*p)*A,e[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*A,e[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*A,e[4]=x*A,e[5]=(u*g*r-m*f*r+m*i*d-t*g*d-u*i*p+t*f*p)*A,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*A,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*d+t*c*d)*A,e[8]=y*A,e[9]=(m*h*r-u*_*r-m*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*A,e[12]=E*A,e[13]=(u*_*i-m*h*i+m*n*f-t*_*f-u*n*g+t*h*g)*A,e[14]=(m*a*i-o*_*i-m*n*c+t*_*c+o*n*g-t*a*g)*A,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,m=r*h,_=o*u,g=o*h,p=a*h,v=c*l,x=c*u,y=c*h,E=n.x,S=n.y,A=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+y)*E,i[2]=(m-x)*E,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(g+v)*S,i[7]=0,i[8]=(m+x)*A,i[9]=(g-v)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Di.set(i[0],i[1],i[2]).length();const o=Di.set(i[4],i[5],i[6]).length(),a=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],an.copy(this);const l=1/r,u=1/o,h=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=bn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===bn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=bn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===bn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===qr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new k,an=new Ye,rd=new k(0,0,0),od=new k(1,1,1),Xn=new k,lr=new k,Xt=new k,ol=new Ye,al=new oi;class sn{constructor(e=0,t=0,n=0,i=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ad=0;const cl=new k,Ni=new oi,In=new Ye,hr=new k,ys=new k,cd=new k,ld=new oi,ll=new k(1,0,0),hl=new k(0,1,0),ul=new k(0,0,1),fl={type:"added"},hd={type:"removed"},Ui={type:"childadded",child:null},vo={type:"childremoved",child:null};class dt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new k,t=new sn,n=new oi,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new We}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ys,hr,this.up):In.lookAt(hr,ys,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(In),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hd),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new k(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new k,Ln=new k,Mo=new k,Dn=new k,Fi=new k,Oi=new k,dl=new k,So=new k,bo=new k,Eo=new k,To=new Qe,wo=new Qe,Ao=new Qe;class $t{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Ln.subVectors(n,t),Mo.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Ln),c=cn.dot(Mo),l=Ln.dot(Ln),u=Ln.dot(Mo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return To.setScalar(0),wo.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Ln.subVectors(e,t),cn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Fi.subVectors(i,n),Oi.subVectors(r,n),So.subVectors(e,n);const c=Fi.dot(So),l=Oi.dot(So);if(c<=0&&l<=0)return t.copy(n);bo.subVectors(e,i);const u=Fi.dot(bo),h=Oi.dot(bo);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Fi,o);Eo.subVectors(e,r);const d=Fi.dot(Eo),m=Oi.dot(Eo);if(m>=0&&d<=m)return t.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Oi,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return dl.subVectors(r,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(dl,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Ro(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=mc(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ro(o,r,e+1/3),this.g=Ro(o,r,e),this.b=Ro(o,r,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return et.workingToColorSpace(Ct.copy(this),e),Math.round(Je(Ct.r*255,0,255))*65536+Math.round(Je(Ct.g*255,0,255))*256+Math.round(Je(Ct.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=St){et.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(ur);const n=Ps(qn.h,ur.h,t),i=Ps(qn.s,ur.s,t),r=Ps(qn.l,ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new ze;ze.NAMES=jh;let ud=0;class fn extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Yi,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new k,fr=new ue;let fd=0;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ka,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ka&&(e.usage=this.usage),e}}class Kh extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dd=0;const Jt=new Ye,Co=new dt,Bi=new k,qt=new wn,vs=new wn,wt=new k;class Mt extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?Jh:Kh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(qt.min,vs.min),qt.expandByPoint(wt),wt.addVectors(qt.max,vs.max),qt.expandByPoint(wt)):(qt.expandByPoint(vs.min),qt.expandByPoint(vs.max))}qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(e,l),wt.add(Bi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new k,c[R]=new k;const l=new k,u=new k,h=new k,f=new ue,d=new ue,m=new ue,_=new k,g=new k;function p(R,M,b){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),u.sub(l),h.sub(l),d.sub(f),m.sub(f);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),a[R].add(_),a[M].add(_),a[b].add(_),c[R].add(g),c[M].add(g),c[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const b=v[R],D=b.start,U=b.count;for(let z=D,q=D+U;z<q;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new k,y=new k,E=new k,S=new k;function A(R){E.fromBufferAttribute(i,R),S.copy(E);const M=a[R];x.copy(M),x.sub(E.multiplyScalar(E.dot(M))).normalize(),y.crossVectors(S,M);const D=y.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,M=v.length;R<M;++R){const b=v[R],D=b.start,U=b.count;for(let z=D,q=D+U;z<q;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,c=new k,l=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[m++]=l[d++]}return new yt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new Ye,ui=new $s,dr=new gn,ml=new k,pr=new k,mr=new k,gr=new k,Po=new k,xr=new k,gl=new k,_r=new k;class tt extends dt{constructor(e=new Mt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Po.fromBufferAttribute(h,e),o?xr.addScaledVector(Po,u):xr.addScaledVector(Po.sub(t),u))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(dr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(dr,ml)===null||ui.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),ui.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,E=x;y<E;y+=3){const S=a.getX(y),A=a.getX(y+1),R=a.getX(y+2);i=yr(this,p,e,n,l,u,h,S,A,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),y=a.getX(g+2);i=yr(this,o,e,n,l,u,h,v,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,E=x;y<E;y+=3){const S=y,A=y+1,R=y+2;i=yr(this,p,e,n,l,u,h,S,A,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,y=g+2;i=yr(this,o,e,n,l,u,h,v,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function pd(s,e,t,n,i,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===En,a),c===null)return null;_r.copy(a),_r.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(_r);return l<t.near||l>t.far?null:{distance:l,point:_r.clone(),object:s}}function yr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,pr),s.getVertexPosition(c,mr),s.getVertexPosition(l,gr);const u=pd(s,e,t,n,pr,mr,gr,gl);if(u){const h=new k;$t.getBarycoord(gl,pr,mr,gr,h),i&&(u.uv=$t.getInterpolatedAttribute(i,a,c,l,h,new ue)),r&&(u.uv1=$t.getInterpolatedAttribute(r,a,c,l,h,new ue)),o&&(u.normal=$t.getInterpolatedAttribute(o,a,c,l,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new k,materialIndex:0};$t.getNormal(pr,mr,gr,f.normal),u.face=f,u.barycoord=h}return u}class hs extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function m(_,g,p,v,x,y,E,S,A,R,M){const b=y/A,D=E/R,U=y/2,z=E/2,q=S/2,W=A+1,G=R+1;let j=0,F=0;const oe=new k;for(let he=0;he<G;he++){const fe=he*D-z;for(let Me=0;Me<W;Me++){const Se=Me*b-U;oe[_]=Se*v,oe[g]=fe*x,oe[p]=q,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[p]=S>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Me/A),h.push(1-he/R),j+=1}}for(let he=0;he<R;he++)for(let fe=0;fe<A;fe++){const Me=f+fe+W*he,Se=f+fe+W*(he+1),Y=f+(fe+1)+W*(he+1),O=f+(fe+1)+W*he;c.push(Me,Se,O),c.push(Se,Y,O),F+=6}a.addGroup(d,F,M),d+=F,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=ns(s[t]);for(const i in n)e[i]=n[i]}return e}function md(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const gd={clone:ns,merge:Dt};var xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new k,xl=new ue,_l=new ue;class Ht extends $h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,xl,_l),t.subVectors(_l,xl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,ki=1;class yd extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(zi,ki,e,t);i.layers=this.layers,this.add(i);const r=new Ht(zi,ki,e,t);r.layers=this.layers,this.add(r);const o=new Ht(zi,ki,e,t);o.layers=this.layers,this.add(o);const a=new Ht(zi,ki,e,t);a.layers=this.layers,this.add(a);const c=new Ht(zi,ki,e,t);c.layers=this.layers,this.add(c);const l=new Ht(zi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qh extends bt{constructor(e=[],t=$i,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vd extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hs(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ni});r.uniforms.tEquirect.value=t;const o=new tt(i,r),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=Vt),new yd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ut extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class _c extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Sd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ka,this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new k;class yc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yl=new k,vl=new Qe,Ml=new Qe,bd=new k,Sl=new Ye,vr=new k,Lo=new gn,bl=new Ye,Do=new $s;class Ed extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kc,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingBox.expandByPoint(vr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vr),this.boundingSphere.expandByPoint(vr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(i),e.ray.intersectsSphere(Lo)!==!1&&(bl.copy(i).invert(),Do.copy(e.ray).applyMatrix4(bl),!(this.boundingBox!==null&&Do.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Do)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vl.fromBufferAttribute(i.attributes.skinIndex,e),Ml.fromBufferAttribute(i.attributes.skinWeight,e),yl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ml.getComponent(r);if(o!==0){const a=vl.getComponent(r);Sl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(bd.copy(yl).applyMatrix4(Sl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tu extends bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=At,u=At,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new Ye,Td=new Ye;class vc{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Td;El.multiplyMatrices(a,t[r]),El.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tu(t,e,e,Qt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new eu),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ha extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new Ye,Tl=new Ye,Mr=[],wl=new wn,wd=new Ye,Ms=new tt,Ss=new gn;class nu extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,wd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),wl.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(wl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Ss.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hi),Tl.multiplyMatrices(n,Hi),Ms.matrixWorld=Tl,Ms.raycast(e,Mr);for(let o=0,a=Mr.length;o<a;o++){const c=Mr[o];c.instanceId=r,c.object=this,t.push(c)}Mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tu(new Float32Array(i*this.count),i,this.count,hc,un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const No=new k,Ad=new k,Rd=new We;class Kn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=No.subVectors(n,t).cross(Ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(No),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rd.getNormalMatrix(e),i=this.coplanarPoint(No).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new gn,Cd=new ue(.5,.5),Sr=new k;class Mc{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],x=r[13],y=r[14],E=r[15];if(i[0].setComponents(l-o,d-u,p-m,E-v).normalize(),i[1].setComponents(l+o,d+u,p+m,E+v).normalize(),i[2].setComponents(l+a,d+h,p+_,E+x).normalize(),i[3].setComponents(l-a,d-h,p-_,E-x).normalize(),n)i[4].setComponents(c,f,g,y).normalize(),i[5].setComponents(l-c,d-f,p-g,E-y).normalize();else if(i[4].setComponents(l-c,d-f,p-g,E-y).normalize(),t===bn)i[5].setComponents(l+c,d+f,p+g,E+y).normalize();else if(t===qr)i[5].setComponents(c,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=Cd.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yr=new k,jr=new k,Al=new Ye,bs=new $s,br=new gn,Uo=new k,Rl=new k;class Sc extends dt{constructor(e=new Mt,t=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Yr.fromBufferAttribute(t,i-1),jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yr.distanceTo(jr);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=r,e.ray.intersectsSphere(br)===!1)return;Al.copy(i).invert(),bs.copy(e.ray).applyMatrix4(Al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){const p=u.getX(_),v=u.getX(_+1),x=Er(this,e,bs,c,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=Er(this,e,bs,c,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){const p=Er(this,e,bs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Er(this,e,bs,c,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Er(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Yr.fromBufferAttribute(a,i),jr.fromBufferAttribute(a,r),t.distanceSqToSegment(Yr,jr,Uo,Rl)>n)return;Uo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Uo);if(!(l<e.near||l>e.far))return{distance:l,point:Rl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Cl=new k,Pl=new k;class Pd extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cl.fromBufferAttribute(t,i),Pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cl.distanceTo(Pl);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Id extends Sc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class su extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new Ye,Va=new $s,Tr=new gn,wr=new k;class Ld extends dt{constructor(e=new Mt,t=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Il.copy(i).invert(),Va.copy(e.ray).applyMatrix4(Il);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=l.getX(m);wr.fromBufferAttribute(h,g),Ll(wr,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)wr.fromBufferAttribute(h,m),Ll(wr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ll(s,e,t,n,i,r,o){const a=Va.distanceSqToPoint(s);if(a<t){const c=new k;Va.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dd extends bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=At,this.minFilter=At,this.generateMipmaps=!1,this.needsUpdate=!0}}class ru extends bt{constructor(e,t,n=Si,i,r,o,a=At,c=At,l,u=zs,h=1){if(u!==zs&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ou extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ue:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new k,i=[],r=[],o=[],a=new k,c=new Ye;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Je(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Je(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends An{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nd extends bc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ec(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Ar=new k,Fo=new Ec,Oo=new Ec,Bo=new Ec;class Tc extends An{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new k){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Ar.subVectors(i[0],i[1]).add(i[0]),l=Ar);const h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Ar.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Fo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,_,g),Oo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,_,g),Bo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Oo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Bo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Fo.calc(c),Oo.calc(c),Bo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new k().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dl(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Ud(s,e){const t=1-s;return t*t*e}function Fd(s,e){return 2*(1-s)*s*e}function Od(s,e){return s*s*e}function Is(s,e,t,n){return Ud(s,e)+Fd(s,t)+Od(s,n)}function Bd(s,e){const t=1-s;return t*t*t*e}function zd(s,e){const t=1-s;return 3*t*t*s*e}function kd(s,e){return 3*(1-s)*s*s*e}function Hd(s,e){return s*s*s*e}function Ls(s,e,t,n,i){return Bd(s,e)+zd(s,t)+kd(s,n)+Hd(s,i)}class au extends An{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(e,i.x,r.x,o.x,a.x),Ls(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vd extends An{constructor(e=new k,t=new k,n=new k,i=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new k){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ls(e,i.x,r.x,o.x,a.x),Ls(e,i.y,r.y,o.y,a.y),Ls(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cu extends An{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends An{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lu extends An{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Is(e,i.x,r.x,o.x),Is(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hu extends An{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Is(e,i.x,r.x,o.x),Is(e,i.y,r.y,o.y),Is(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uu extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Dl(a,c.x,l.x,u.x,h.x),Dl(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ue().fromArray(i))}return this}}var Kr=Object.freeze({__proto__:null,ArcCurve:Nd,CatmullRomCurve3:Tc,CubicBezierCurve:au,CubicBezierCurve3:Vd,EllipseCurve:bc,LineCurve:cu,LineCurve3:Gd,QuadraticBezierCurve:lu,QuadraticBezierCurve3:hu,SplineCurve:uu});class Wd extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Kr[i.type]().fromJSON(i))}return this}}class Ki extends Wd{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new cu(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new lu(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new au(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new uu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new bc(e,t,n,i,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class si extends Ki{constructor(e){super(e),this.uuid=tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ki().fromJSON(i))}return this}}function Xd(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=fu(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Jd(s,e,r,t)),s.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let f=t;f<i;f+=t){const d=s[f],m=s[f+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return qs(r,o,t,a,c,l,0),o}function fu(s,e,t,n,i){let r;if(i===ap(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nl(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nl(o/n|0,s[o],s[o+1],r);return r&&is(r,r.next)&&(js(r),r=r.next),r}function Ei(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(is(t,t.next)||xt(t.prev,t,t.next)===0)){if(js(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&tp(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Yd(s,n,i,r):qd(s)){e.push(c.i,s.i,l.i),js(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=jd(Ei(s),e),qs(s,e,t,n,i,r,2)):o===2&&Kd(s,e,t,n,i,r):qs(Ei(s),e,t,n,i,r,1);break}}}function qd(s){const e=s.prev,t=s,n=s.next;if(xt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,r,o),h=Math.min(a,c,l),f=Math.max(i,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&As(i,a,r,c,o,l,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yd(s,e,t,n){const i=s.prev,r=s,o=s.next;if(xt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(u,h,f),_=Math.max(a,c,l),g=Math.max(u,h,f),p=Ga(d,m,e,t,n),v=Ga(_,g,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=p&&y&&y.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&As(a,u,c,h,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&As(a,u,c,h,l,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&As(a,u,c,h,l,f,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jd(s,e){let t=s;do{const n=t.prev,i=t.next.next;!is(n,i)&&pu(n,t,t.next,i)&&Ys(n,i)&&Ys(i,n)&&(e.push(n.i,t.i,i.i),js(t),js(t.next),t=s=i),t=t.next}while(t!==s);return Ei(t)}function Kd(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sp(o,a)){let c=mu(o,a);o=Ei(o,o.next),c=Ei(c,c.next),qs(o,e,t,n,i,r,0),qs(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Jd(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=fu(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(ip(l))}i.sort(Zd);for(let r=0;r<i.length;r++)t=$d(i[r],t);return t}function Zd(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function $d(s,e){const t=Qd(s,e);if(!t)return e;const n=mu(t,s);return Ei(n,n.next),Ei(t,t.next)}function Qd(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(is(s,t))return t;do{if(is(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&du(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);Ys(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&ep(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function ep(s,e){return xt(s.prev,s,e.prev)<0&&xt(e.next,s,s.next)<0}function tp(s,e,t,n){let i=s;do i.z===0&&(i.z=Ga(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,np(i)}function np(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Ga(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ip(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function du(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function As(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&du(s,e,t,n,i,r,o,a)}function sp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!rp(s,e)&&(Ys(s,e)&&Ys(e,s)&&op(s,e)&&(xt(s.prev,s,e.prev)||xt(s,e.prev,e))||is(s,e)&&xt(s.prev,s,s.next)>0&&xt(e.prev,e,e.next)>0)}function xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function is(s,e){return s.x===e.x&&s.y===e.y}function pu(s,e,t,n){const i=Cr(xt(s,e,t)),r=Cr(xt(s,e,n)),o=Cr(xt(t,n,s)),a=Cr(xt(t,n,e));return!!(i!==r&&o!==a||i===0&&Rr(s,t,e)||r===0&&Rr(s,n,e)||o===0&&Rr(t,s,n)||a===0&&Rr(t,e,n))}function Rr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Cr(s){return s>0?1:s<0?-1:0}function rp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ys(s,e){return xt(s.prev,s,s.next)<0?xt(s,e,s.next)>=0&&xt(s,s.prev,e)>=0:xt(s,e,s.prev)<0||xt(s,s.next,e)<0}function op(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mu(s,e){const t=Wa(s.i,s.x,s.y),n=Wa(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nl(s,e,t,n){const i=Wa(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Wa(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ap(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class cp{static triangulate(e,t,n=2){return Xd(e,t,n)}}class en{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return en.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Ul(e),Fl(n,e);let o=e.length;t.forEach(Ul);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Fl(n,t[c]);const a=cp.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ul(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Fl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class wc extends Mt{constructor(e=new si([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new lt(i,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:lp;let x,y=!1,E,S,A,R;p&&(x=p.getSpacedPoints(u),y=!0,f=!1,E=p.computeFrenetFrames(u,!1),S=new k,A=new k,R=new k),f||(g=0,d=0,m=0,_=0);const M=a.extractPoints(l);let b=M.shape;const D=M.holes;if(!en.isClockWise(b)){b=b.reverse();for(let H=0,K=D.length;H<K;H++){const $=D[H];en.isClockWise($)&&(D[H]=$.reverse())}}function z(H){const $=10000000000000001e-36;let Q=H[0];for(let B=1;B<=H.length;B++){const I=B%H.length,se=H[I],be=se.x-Q.x,Ue=se.y-Q.y,N=be*be+Ue*Ue,T=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(Q.x),Math.abs(Q.y)),Z=$*T*T;if(N<=Z){H.splice(I,1),B--;continue}Q=se}}z(b),D.forEach(z);const q=D.length,W=b;for(let H=0;H<q;H++){const K=D[H];b=b.concat(K)}function G(H,K,$){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(K,$)}const j=b.length;function F(H,K,$){let Q,B,I;const se=H.x-K.x,be=H.y-K.y,Ue=$.x-H.x,N=$.y-H.y,T=se*se+be*be,Z=se*N-be*Ue;if(Math.abs(Z)>Number.EPSILON){const ie=Math.sqrt(T),de=Math.sqrt(Ue*Ue+N*N),ae=K.x-be/ie,Pe=K.y+se/ie,ye=$.x-N/de,Le=$.y+Ue/de,De=((ye-ae)*N-(Le-Pe)*Ue)/(se*N-be*Ue);Q=ae+se*De-H.x,B=Pe+be*De-H.y;const ge=Q*Q+B*B;if(ge<=2)return new ue(Q,B);I=Math.sqrt(ge/2)}else{let ie=!1;se>Number.EPSILON?Ue>Number.EPSILON&&(ie=!0):se<-Number.EPSILON?Ue<-Number.EPSILON&&(ie=!0):Math.sign(be)===Math.sign(N)&&(ie=!0),ie?(Q=-be,B=se,I=Math.sqrt(T)):(Q=se,B=be,I=Math.sqrt(T/2))}return new ue(Q/I,B/I)}const oe=[];for(let H=0,K=W.length,$=K-1,Q=H+1;H<K;H++,$++,Q++)$===K&&($=0),Q===K&&(Q=0),oe[H]=F(W[H],W[$],W[Q]);const he=[];let fe,Me=oe.concat();for(let H=0,K=q;H<K;H++){const $=D[H];fe=[];for(let Q=0,B=$.length,I=B-1,se=Q+1;Q<B;Q++,I++,se++)I===B&&(I=0),se===B&&(se=0),fe[Q]=F($[Q],$[I],$[se]);he.push(fe),Me=Me.concat(fe)}let Se;if(g===0)Se=en.triangulateShape(W,D);else{const H=[],K=[];for(let $=0;$<g;$++){const Q=$/g,B=d*Math.cos(Q*Math.PI/2),I=m*Math.sin(Q*Math.PI/2)+_;for(let se=0,be=W.length;se<be;se++){const Ue=G(W[se],oe[se],I);ne(Ue.x,Ue.y,-B),Q===0&&H.push(Ue)}for(let se=0,be=q;se<be;se++){const Ue=D[se];fe=he[se];const N=[];for(let T=0,Z=Ue.length;T<Z;T++){const ie=G(Ue[T],fe[T],I);ne(ie.x,ie.y,-B),Q===0&&N.push(ie)}Q===0&&K.push(N)}}Se=en.triangulateShape(H,K)}const Y=Se.length,O=m+_;for(let H=0;H<j;H++){const K=f?G(b[H],Me[H],O):b[H];y?(A.copy(E.normals[0]).multiplyScalar(K.x),S.copy(E.binormals[0]).multiplyScalar(K.y),R.copy(x[0]).add(A).add(S),ne(R.x,R.y,R.z)):ne(K.x,K.y,0)}for(let H=1;H<=u;H++)for(let K=0;K<j;K++){const $=f?G(b[K],Me[K],O):b[K];y?(A.copy(E.normals[H]).multiplyScalar($.x),S.copy(E.binormals[H]).multiplyScalar($.y),R.copy(x[H]).add(A).add(S),ne(R.x,R.y,R.z)):ne($.x,$.y,h/u*H)}for(let H=g-1;H>=0;H--){const K=H/g,$=d*Math.cos(K*Math.PI/2),Q=m*Math.sin(K*Math.PI/2)+_;for(let B=0,I=W.length;B<I;B++){const se=G(W[B],oe[B],Q);ne(se.x,se.y,h+$)}for(let B=0,I=D.length;B<I;B++){const se=D[B];fe=he[B];for(let be=0,Ue=se.length;be<Ue;be++){const N=G(se[be],fe[be],Q);y?ne(N.x,N.y+x[u-1].y,x[u-1].x+$):ne(N.x,N.y,h+$)}}}C(),w();function C(){const H=i.length/3;if(f){let K=0,$=j*K;for(let Q=0;Q<Y;Q++){const B=Se[Q];V(B[2]+$,B[1]+$,B[0]+$)}K=u+g*2,$=j*K;for(let Q=0;Q<Y;Q++){const B=Se[Q];V(B[0]+$,B[1]+$,B[2]+$)}}else{for(let K=0;K<Y;K++){const $=Se[K];V($[2],$[1],$[0])}for(let K=0;K<Y;K++){const $=Se[K];V($[0]+j*u,$[1]+j*u,$[2]+j*u)}}n.addGroup(H,i.length/3-H,0)}function w(){const H=i.length/3;let K=0;X(W,K),K+=W.length;for(let $=0,Q=D.length;$<Q;$++){const B=D[$];X(B,K),K+=B.length}n.addGroup(H,i.length/3-H,1)}function X(H,K){let $=H.length;for(;--$>=0;){const Q=$;let B=$-1;B<0&&(B=H.length-1);for(let I=0,se=u+g*2;I<se;I++){const be=j*I,Ue=j*(I+1),N=K+Q+be,T=K+B+be,Z=K+B+Ue,ie=K+Q+Ue;le(N,T,Z,ie)}}}function ne(H,K,$){c.push(H),c.push(K),c.push($)}function V(H,K,$){me(H),me(K),me($);const Q=i.length/3,B=v.generateTopUV(n,i,Q-3,Q-2,Q-1);L(B[0]),L(B[1]),L(B[2])}function le(H,K,$,Q){me(H),me(K),me(Q),me(K),me($),me(Q);const B=i.length/3,I=v.generateSideWallUV(n,i,B-6,B-3,B-2,B-1);L(I[0]),L(I[1]),L(I[3]),L(I[1]),L(I[2]),L(I[3])}function me(H){i.push(c[H*3+0]),i.push(c[H*3+1]),i.push(c[H*3+2])}function L(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return hp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Kr[i.type]().fromJSON(i)),new wc(n,e.options)}}const lp={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ue(r,o),new ue(a,c),new ue(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-h),new ue(f,1-m),new ue(_,1-p)]:[new ue(a,1-c),new ue(u,1-h),new ue(d,1-m),new ue(g,1-p)]}};function hp(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class to extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const v=p*f-o;for(let x=0;x<l;x++){const y=x*h-r;m.push(y,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,y=v+l*(p+1),E=v+1+l*(p+1),S=v+1+l*p;d.push(x,y,S),d.push(y,E,S)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ac extends Mt{constructor(e=new si([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(o,2));function l(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;en.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const v=m[g];en.isClockWise(v)===!0&&(m[g]=v.reverse())}const _=en.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const v=m[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){const v=d[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=_.length;g<p;g++){const v=_[g],x=v[0]+h,y=v[1]+h,E=v[2]+h;n.push(x,y,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return up(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Ac(n,e.curveSegments)}}function up(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class us extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new k,f=new k,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const S=E/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(S+y,1-x),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=u[p][v+1],y=u[p][v],E=u[p+1][v],S=u[p+1][v+1];(p!==0||o>0)&&d.push(x,y,S),(p!==n-1||c<Math.PI)&&d.push(y,E,S)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class no extends Mt{constructor(e=new hu(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,c=new k,l=new ue;let u=new k;const h=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function _(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),v(),p()}function g(x){u=e.getPointAt(x/t,u);const y=o.normals[x],E=o.binormals[x];for(let S=0;S<=i;S++){const A=S/i*Math.PI*2,R=Math.sin(A),M=-Math.cos(A);c.x=M*y.x+R*E.x,c.y=M*y.y+R*E.y,c.z=M*y.z+R*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=i;y++){const E=(i+1)*(x-1)+(y-1),S=(i+1)*x+(y-1),A=(i+1)*x+y,R=(i+1)*(x-1)+y;m.push(E,S,R),m.push(S,A,R)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=i;y++)l.x=x/t,l.y=y/i,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new no(new Kr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Hn extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rn extends Hn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fp extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dp extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pp extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Pr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function gp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ol(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function gu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Qs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xp extends Qs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jc,endingEnd:Jc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:r=e,a=2*t-n;break;case $c:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zc:o=e,c=2*n-t;break;case $c:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let E=0;E!==a;++E)r[E]=p*o[u+E]+v*o[l+E]+x*o[c+E]+y*o[h+E];return r}}class _p extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class yp extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _p(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&mp(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Vs;class fs extends xn{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Hs;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class xu extends xn{constructor(e,t,n,i){super(e,t,n,i)}}xu.prototype.ValueTypeName="color";class ss extends xn{constructor(e,t,n,i){super(e,t,n,i)}}ss.prototype.ValueTypeName="number";class vp extends Qs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)oi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class rs extends xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vp(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends xn{constructor(e,t,n){super(e,t,n)}}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Hs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends xn{constructor(e,t,n,i){super(e,t,n,i)}}os.prototype.ValueTypeName="vector";class Mp{constructor(e="",t=-1,n=[],i=Sf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=tn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bp(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=gp(c);c=Ol(c,1,u),l=Ol(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ss(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,_){if(d.length!==0){const g=[],p=[];gu(d,g,p,m),g.length!==0&&_.push(new h(f,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let v=0;v!==f[m].morphTargets.length;++v){const x=f[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ss(".morphTargetInfluence["+_+"]",g,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(os,d+".position",f,"pos",i),n(rs,d+".quaternion",f,"rot",i),n(os,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Sp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return xu;case"quaternion":return rs;case"bool":case"boolean":return fs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sp(s.type);if(s.times===void 0){const t=[],n=[];gu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Bn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ep{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],m=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Tp=new Ep;class wi{constructor(e){this.manager=e!==void 0?e:Tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class wp extends Error{constructor(e,t){super(e),this.response=t}}class Rc extends wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Bn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:i});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Nn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let S=0,A=u.length;S<A;S++){const R=u[S];R.onProgress&&R.onProgress(E)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(g)}else throw new wp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Bn.add(`file:${e}`,l);const u=Nn[e];delete Nn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vi=new WeakMap;class Ap extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Vi.get(o);h===void 0&&(h=[],Vi.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Ws("img");function c(){u(),t&&t(this);const h=Vi.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Vi.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Bn.remove(`image:${e}`);const f=Vi.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}Vi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Bn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Rp extends wi{constructor(e){super(e)}load(e,t,n,i){const r=new bt,o=new Ap(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class io extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _u extends io{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const zo=new Ye,Bl=new k,zl=new k;class Cc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zl),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cp extends Cc{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pp extends io{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const kl=new Ye,Es=new k,ko=new k;class Ip extends Cc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(e.matrixWorld),n.position.copy(Es),ko.copy(n.position),ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ko),n.updateMatrixWorld(),i.makeTranslation(-Es.x,-Es.y,-Es.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl,n.coordinateSystem,n.reversedDepth)}}class yu extends io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ip}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class er extends $h{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lp extends Cc{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jr extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Lp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ds{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ho=new WeakMap;class Dp extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Bn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Ho.has(o)===!0)i&&i(Ho.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ho.set(c,l),Bn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Np extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Pc="\\[\\]\\.:\\/",Up=new RegExp("["+Pc+"]","g"),Ic="[^"+Pc+"]",Fp="[^"+Pc.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",Ic),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),Hp=new RegExp("^"+Op+Bp+zp+kp+"$"),Vp=["material","materials","bones","map"];class Gp{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(e){const t=Hp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Gp;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hl=new Ye;class vu{constructor(e,t,n=0,i=1/0){this.ray=new $s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hl),this}intersectObject(e,t=!0,n=[]){return Xa(e,this,n,t),n.sort(Vl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xa(e[i],this,n,t);return n.sort(Vl),n}}function Vl(s,e){return s.distance-e.distance}function Xa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Xa(r[o],e,t,!0)}}const Gl=new ue;class Wp{constructor(e=new ue(1/0,1/0),t=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class di{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ki,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let x=0,y=p.length;x<y;x++){const E=p[x],S=new si;S.curves=E.curves,v.push(S)}return v}function n(p,v){const x=v.length;let y=!1;for(let E=x-1,S=0;S<x;E=S++){let A=v[E],R=v[S],M=R.x-A.x,b=R.y-A.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(A=v[S],M=-M,R=v[E],b=-b),p.y<A.y||p.y>R.y)continue;if(p.y===A.y){if(p.x===A.x)return!0}else{const D=b*(p.x-A.x)-M*(p.y-A.y);if(D===0)return!0;if(D<0)continue;y=!y}}else{if(p.y!==A.y)continue;if(R.x<=p.x&&p.x<=A.x||A.x<=p.x&&p.x<=R.x)return!0}}return y}const i=en.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const l=[];if(r.length===1)return a=r[0],c=new si,c.curves=a.curves,l.push(c),l;let u=!i(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],m=0,_;f[m]=void 0,d[m]=[];for(let p=0,v=r.length;p<v;p++)a=r[p],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!u&&f[m]&&m++,f[m]={s:new si,p:_},f[m].s.curves=a.curves,u&&m++,d[m]=[]):d[m].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,v=0;for(let x=0,y=f.length;x<y;x++)h[x]=[];for(let x=0,y=f.length;x<y;x++){const E=d[x];for(let S=0;S<E.length;S++){const A=E[S];let R=!0;for(let M=0;M<f.length;M++)n(A.p,f[M].p)&&(x!==M&&v++,R?(R=!1,h[M].push(A)):p=!0);R&&h[x].push(A)}}v>0&&p===!1&&(d=h)}let g;for(let p=0,v=f.length;p<v;p++){c=f[p].s,l.push(c),g=d[p];for(let x=0,y=g.length;x<y;x++)c.holes.push(g[x].h)}return l}}function Wl(s,e,t,n){const i=Xp(n);switch(t){case Hh:return s*e;case hc:return s*e/i.components*i.byteLength;case uc:return s*e/i.components*i.byteLength;case Gh:return s*e*2/i.components*i.byteLength;case fc:return s*e*2/i.components*i.byteLength;case Vh:return s*e*3/i.components*i.byteLength;case Qt:return s*e*4/i.components*i.byteLength;case dc:return s*e*4/i.components*i.byteLength;case Fr:case Or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fa:case pa:return Math.max(s,16)*Math.max(e,8)/4;case ua:case da:return Math.max(s,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case La:case Da:case Na:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ua:case Fa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xp(s){switch(s){case Tn:case Oh:return{byteLength:1,components:1};case Os:case Bh:case Zs:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case Si:case ac:case un:return{byteLength:4,components:1};case zh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function Mu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qp(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,y0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,E0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Yp,alphahash_pars_fragment:jp,alphamap_fragment:Kp,alphamap_pars_fragment:Jp,alphatest_fragment:Zp,alphatest_pars_fragment:$p,aomap_fragment:Qp,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:om,bumpmap_pars_fragment:am,clipping_planes_fragment:cm,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:hm,clipping_planes_vertex:um,color_fragment:fm,color_pars_fragment:dm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Im,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:Hm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:$m,map_fragment:Qm,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:og,morphnormal_vertex:ag,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:hg,normal_fragment_maps:ug,normal_pars_fragment:fg,normal_pars_vertex:dg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:yg,opaque_fragment:vg,packing:Mg,premultiplied_alpha_fragment:Sg,project_vertex:bg,dithering_fragment:Eg,dithering_pars_fragment:Tg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Ig,skinbase_vertex:Lg,skinning_pars_vertex:Dg,skinning_vertex:Ng,skinnormal_vertex:Ug,specularmap_fragment:Fg,specularmap_pars_fragment:Og,tonemapping_fragment:Bg,tonemapping_pars_fragment:zg,transmission_fragment:kg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:qg,background_frag:Yg,backgroundCube_vert:jg,backgroundCube_frag:Kg,cube_vert:Jg,cube_frag:Zg,depth_vert:$g,depth_frag:Qg,distanceRGBA_vert:e0,distanceRGBA_frag:t0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:c0,meshlambert_frag:l0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:f0,meshnormal_frag:d0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:x0,meshtoon_vert:_0,meshtoon_frag:y0,points_vert:v0,points_frag:M0,shadow_vert:S0,shadow_frag:b0,sprite_vert:E0,sprite_frag:T0},we={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Mn={basic:{uniforms:Dt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dt([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dt([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dt([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Dt([we.common,we.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Dt([we.lights,we.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Mn.physical={uniforms:Dt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ir={r:0,b:0,g:0},pi=new sn,w0=new Ye;function A0(s,e,t,n,i,r,o){const a=new ze(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const E=m(x);E===null?p(a,c):E&&E.isColor&&(p(E,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(x,y){const E=m(y);E&&(E.isCubeTexture||E.mapping===eo)?(u===void 0&&(u=new tt(new hs(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ns(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(pi)),u.material.toneMapped=et.getTransfer(E.colorSpace)!==ct,(h!==E||f!==E.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new tt(new to(2,2),new ri({name:"BackgroundMaterial",uniforms:ns(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(Ir,Zh(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:g,dispose:v}}function R0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(b,D,U,z,q){let W=!1;const G=h(z,U,D);r!==G&&(r=G,l(r.object)),W=d(b,z,U,q),W&&m(b,z,U,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(b,D,U,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function h(b,D,U){const z=U.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let W=q[D.id];W===void 0&&(W={},q[D.id]=W);let G=W[z];return G===void 0&&(G=f(c()),W[z]=G),G}function f(b){const D=[],U=[],z=[];for(let q=0;q<t;q++)D[q]=0,U[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,D,U,z){const q=r.attributes,W=D.attributes;let G=0;const j=U.getAttributes();for(const F in j)if(j[F].location>=0){const he=q[F];let fe=W[F];if(fe===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),he===void 0||he.attribute!==fe||fe&&he.data!==fe.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(b,D,U,z){const q={},W=D.attributes;let G=0;const j=U.getAttributes();for(const F in j)if(j[F].location>=0){let he=W[F];he===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));const fe={};fe.attribute=he,he&&he.data&&(fe.data=he.data),q[F]=fe,G++}r.attributes=q,r.attributesNum=G,r.index=z}function _(){const b=r.newAttributes;for(let D=0,U=b.length;D<U;D++)b[D]=0}function g(b){p(b,0)}function p(b,D){const U=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;U[b]=1,z[b]===0&&(s.enableVertexAttribArray(b),z[b]=1),q[b]!==D&&(s.vertexAttribDivisor(b,D),q[b]=D)}function v(){const b=r.newAttributes,D=r.enabledAttributes;for(let U=0,z=D.length;U<z;U++)D[U]!==b[U]&&(s.disableVertexAttribArray(U),D[U]=0)}function x(b,D,U,z,q,W,G){G===!0?s.vertexAttribIPointer(b,D,U,q,W):s.vertexAttribPointer(b,D,U,z,q,W)}function y(b,D,U,z){_();const q=z.attributes,W=U.getAttributes(),G=D.defaultAttributeValues;for(const j in W){const F=W[j];if(F.location>=0){let oe=q[j];if(oe===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),oe!==void 0){const he=oe.normalized,fe=oe.itemSize,Me=e.get(oe);if(Me===void 0)continue;const Se=Me.buffer,Y=Me.type,O=Me.bytesPerElement,C=Y===s.INT||Y===s.UNSIGNED_INT||oe.gpuType===ac;if(oe.isInterleavedBufferAttribute){const w=oe.data,X=w.stride,ne=oe.offset;if(w.isInstancedInterleavedBuffer){for(let V=0;V<F.locationSize;V++)p(F.location+V,w.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let V=0;V<F.locationSize;V++)g(F.location+V);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let V=0;V<F.locationSize;V++)x(F.location+V,fe/F.locationSize,Y,he,X*O,(ne+fe/F.locationSize*V)*O,C)}else{if(oe.isInstancedBufferAttribute){for(let w=0;w<F.locationSize;w++)p(F.location+w,oe.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let w=0;w<F.locationSize;w++)g(F.location+w);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let w=0;w<F.locationSize;w++)x(F.location+w,fe/F.locationSize,Y,he,fe*O,fe/F.locationSize*w*O,C)}}else if(G!==void 0){const he=G[j];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(F.location,he);break;case 3:s.vertexAttrib3fv(F.location,he);break;case 4:s.vertexAttrib4fv(F.location,he);break;default:s.vertexAttrib1fv(F.location,he)}}}}v()}function E(){R();for(const b in n){const D=n[b];for(const U in D){const z=D[U];for(const q in z)u(z[q].object),delete z[q];delete D[U]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const U in D){const z=D[U];for(const q in z)u(z[q].object),delete z[q];delete D[U]}delete n[b.id]}function A(b){for(const D in n){const U=n[D];if(U[b.id]===void 0)continue;const z=U[b.id];for(const q in z)u(z[q].object),delete z[q];delete U[b.id]}}function R(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function C0(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function P0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Qt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Tn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==un&&!R)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:S}}function I0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Kn,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{const v=r?0:n,x=v*4;let y=p.clippingState||null;c.value=y,y=u(m,f,x,d);for(let E=0;E!==x;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function L0(s){let e=new WeakMap;function t(o,a){return a===la?o.mapping=$i:a===ha&&(o.mapping=Qi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===la||a===ha)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vd(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const qi=4,Xl=[.125,.215,.35,.446,.526,.582],vi=20,Vo=new er,ql=new ze;let Go=null,Wo=0,Xo=0,qo=!1;const _i=(1+Math.sqrt(5))/2,Gi=1/_i,Yl=[new k(-_i,Gi,0),new k(_i,Gi,0),new k(-Gi,0,_i),new k(Gi,0,_i),new k(0,_i,-Gi),new k(0,_i,Gi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],D0=new k;class qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=D0}=r;Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go,Wo,Xo),this._renderer.xr.enabled=qo,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Zs,format:Qt,colorSpace:Ot,depthBuffer:!1},i=jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N0(r)),this._blurMaterial=U0(r,e,t)}return i}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,n,i,r){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ql),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new ei({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new tt(new hs,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(ql),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[x],r.y,r.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[x]));const E=this._cubeSize;Lr(i,y*E,x>2?E:0,E,E),h.setRenderTarget(i),p&&h.render(g,c),h.render(e,c)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===Qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(i-r-1)%Yl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vi-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):vi;g>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vi}`);const p=[];let v=0;for(let A=0;A<vi;++A){const R=A/_,M=Math.exp(-R*R/2);p.push(M),A===0?v+=M:A<g&&(v+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const y=this._sizeLods[i],E=3*y*(i>x-qi?i-x+qi:0),S=4*(this._cubeSize-y);Lr(t,E,S,3*y,2*y),c.setRenderTarget(t),c.render(h,Vo)}}function N0(s){const e=[],t=[],n=[];let i=s;const r=s-qi+1+Xl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-qi?c=Xl[o-s+qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*d),x=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let S=0;S<d;S++){const A=S%3*2/3-1,R=S>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(M,_*m*S),x.set(f,g*m*S);const b=[S,S,S,S,S,S];y.set(b,p*m*S)}const E=new Mt;E.setAttribute("position",new yt(v,_)),E.setAttribute("uv",new yt(x,g)),E.setAttribute("faceIndex",new yt(y,p)),e.push(E),i>qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jl(s,e,t){const n=new bi(s,e,t);return n.texture.mapping=eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function U0(s,e,t){const n=new Float32Array(vi),i=new k(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kl(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function F0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===la||c===ha,u=c===$i||c===Qi;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qa(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new qa(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function O0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function B0(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],S=v[x+1],A=v[x+2];f.push(E,S,S,A,A,E)}}else if(m!==void 0){const v=m.array;_=m.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,S=x+1,A=x+2;f.push(E,S,S,A,A,E)}}else return;const g=new(qh(f)?Jh:Kh)(f,1);g.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function z0(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function k0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H0(s,e,t){const n=new WeakMap,i=new Qe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let E=a.attributes.position.count*y,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*S*4*h),R=new Yh(A,E,S,h);R.type=un,R.needsUpdate=!0;const M=y*4;for(let D=0;D<h;D++){const U=p[D],z=v[D],q=x[D],W=E*S*4*D;for(let G=0;G<U.count;G++){const j=G*M;m===!0&&(i.fromBufferAttribute(U,G),A[W+j+0]=i.x,A[W+j+1]=i.y,A[W+j+2]=i.z,A[W+j+3]=0),_===!0&&(i.fromBufferAttribute(z,G),A[W+j+4]=i.x,A[W+j+5]=i.y,A[W+j+6]=i.z,A[W+j+7]=0),g===!0&&(i.fromBufferAttribute(q,G),A[W+j+8]=i.x,A[W+j+9]=i.y,A[W+j+10]=i.z,A[W+j+11]=q.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new ue(E,S)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function V0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Su=new bt,Zl=new ru(1,1),bu=new Yh,Eu=new id,Tu=new Qh,$l=[],Ql=[],eh=new Float32Array(16),th=new Float32Array(9),nh=new Float32Array(4);function ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=$l[i];if(r===void 0&&(r=new Float32Array(i),$l[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function so(s,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function G0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function W0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function X0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function Y0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;nh.set(n),s.uniformMatrix2fv(this.addr,!1,nh),Tt(t,n)}}function j0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;th.set(n),s.uniformMatrix3fv(this.addr,!1,th),Tt(t,n)}}function K0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;eh.set(n),s.uniformMatrix4fv(this.addr,!1,eh),Tt(t,n)}}function J0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function $0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function e1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function n1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function i1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function s1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zl.compareFunction=Xh,r=Zl):r=Su,t.setTexture2D(e||r,i)}function r1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Eu,i)}function o1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tu,i)}function a1(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bu,i)}function c1(s){switch(s){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return j0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return Z0;case 35668:case 35672:return $0;case 35669:case 35673:return Q0;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function l1(s,e){s.uniform1fv(this.addr,e)}function h1(s,e){const t=ps(e,this.size,2);s.uniform2fv(this.addr,t)}function u1(s,e){const t=ps(e,this.size,3);s.uniform3fv(this.addr,t)}function f1(s,e){const t=ps(e,this.size,4);s.uniform4fv(this.addr,t)}function d1(s,e){const t=ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function p1(s,e){const t=ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function m1(s,e){const t=ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function g1(s,e){s.uniform1iv(this.addr,e)}function x1(s,e){s.uniform2iv(this.addr,e)}function _1(s,e){s.uniform3iv(this.addr,e)}function y1(s,e){s.uniform4iv(this.addr,e)}function v1(s,e){s.uniform1uiv(this.addr,e)}function M1(s,e){s.uniform2uiv(this.addr,e)}function S1(s,e){s.uniform3uiv(this.addr,e)}function b1(s,e){s.uniform4uiv(this.addr,e)}function E1(s,e,t){const n=this.cache,i=e.length,r=so(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Su,r[o])}function T1(s,e,t){const n=this.cache,i=e.length,r=so(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Eu,r[o])}function w1(s,e,t){const n=this.cache,i=e.length,r=so(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Tu,r[o])}function A1(s,e,t){const n=this.cache,i=e.length,r=so(t,i);Et(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bu,r[o])}function R1(s){switch(s){case 5126:return l1;case 35664:return h1;case 35665:return u1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return x1;case 35668:case 35672:return _1;case 35669:case 35673:return y1;case 5125:return v1;case 36294:return M1;case 36295:return S1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return A1}}class C1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class P1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R1(t.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function ih(s,e){s.seq.push(e),s.map[e.id]=e}function L1(s,e,t){const n=s.name,i=n.length;for(Yo.lastIndex=0;;){const r=Yo.exec(n),o=Yo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ih(t,l===void 0?new C1(a,s,e):new P1(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new I1(a),ih(t,h)),t=h}}}class kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);L1(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const D1=37297;let N1=0;function U1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const rh=new We;function F1(s){et._getMatrix(rh,et.workingColorSpace,s);const e=`mat3( ${rh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Xr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function oh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+U1(s.getShaderSource(e),a)}else return r}function O1(s,e){const t=F1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B1(s,e){let t;switch(e){case mf:t="Linear";break;case gf:t="Reinhard";break;case xf:t="Cineon";break;case Nh:t="ACESFilmic";break;case yf:t="AgX";break;case vf:t="Neutral";break;case _f:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new k;function z1(){et.getLuminanceCoefficients(Dr);const s=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function H1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Rs(s){return s!==""}function ah(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(G1,X1)}const W1=new Map;function X1(s,e){let t=Ke[e];if(t===void 0){const n=W1.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ya(t)}const q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(s){return s.replace(q1,Y1)}function Y1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function K1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Qi:e="ENVMAP_TYPE_CUBE";break;case eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J1(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Qi&&(e="ENVMAP_MODE_REFRACTION"),e}function Z1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case df:e="ENVMAP_BLENDING_MIX";break;case pf:e="ENVMAP_BLENDING_ADD";break}return e}function $1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q1(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=j1(t),l=K1(t),u=J1(t),h=Z1(t),f=$1(t),d=k1(t),m=H1(r),_=i.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(g=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ii?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,O1("linearToOutputTexel",t.outputColorSpace),z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Ya(o),o=ah(o,t),o=ch(o,t),a=Ya(a),a=ah(a,t),a=ch(a,t),o=lh(o),a=lh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+o,y=v+p+a,E=sh(i,i.VERTEX_SHADER,x),S=sh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(E)||"",q=i.getShaderInfoLog(S)||"",W=U.trim(),G=z.trim(),j=q.trim();let F=!0,oe=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,S);else{const he=oh(i,E,"vertex"),fe=oh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+he+`
`+fe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||j==="")&&(oe=!1);oe&&(D.diagnostics={runnable:F,programLog:W,vertexShader:{log:G,prefix:g},fragmentShader:{log:j,prefix:p}})}i.deleteShader(E),i.deleteShader(S),R=new kr(i,_),M=V1(i,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,D1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}let ex=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nx(e),t.set(e,n)),n}}class nx{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}}function ix(s,e,t,n,i,r,o){const a=new xc,c=new tx,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,b,D,U,z){const q=U.fog,W=z.geometry,G=M.isMeshStandardMaterial?U.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),F=j&&j.mapping===eo?j.image.height:null,oe=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=he!==void 0?he.length:0;let Me=0;W.morphAttributes.position!==void 0&&(Me=1),W.morphAttributes.normal!==void 0&&(Me=2),W.morphAttributes.color!==void 0&&(Me=3);let Se,Y,O,C;if(oe){const it=Mn[oe];Se=it.vertexShader,Y=it.fragmentShader}else Se=M.vertexShader,Y=M.fragmentShader,c.update(M),O=c.getVertexShaderID(M),C=c.getFragmentShaderID(M);const w=s.getRenderTarget(),X=s.state.buffers.depth.getReversed(),ne=z.isInstancedMesh===!0,V=z.isBatchedMesh===!0,le=!!M.map,me=!!M.matcap,L=!!j,H=!!M.aoMap,K=!!M.lightMap,$=!!M.bumpMap,Q=!!M.normalMap,B=!!M.displacementMap,I=!!M.emissiveMap,se=!!M.metalnessMap,be=!!M.roughnessMap,Ue=M.anisotropy>0,N=M.clearcoat>0,T=M.dispersion>0,Z=M.iridescence>0,ie=M.sheen>0,de=M.transmission>0,ae=Ue&&!!M.anisotropyMap,Pe=N&&!!M.clearcoatMap,ye=N&&!!M.clearcoatNormalMap,Le=N&&!!M.clearcoatRoughnessMap,De=Z&&!!M.iridescenceMap,ge=Z&&!!M.iridescenceThicknessMap,Ae=ie&&!!M.sheenColorMap,Ge=ie&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Re=!!M.specularColorMap,je=!!M.specularIntensityMap,J=de&&!!M.transmissionMap,ve=de&&!!M.thicknessMap,Te=!!M.gradientMap,Ne=!!M.alphaMap,xe=M.alphaTest>0,pe=!!M.alphaHash,Oe=!!M.extensions;let qe=ii;M.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(qe=s.toneMapping);const ut={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Se,fragmentShader:Y,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:C,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:V,batchingColor:V&&z._colorsTexture!==null,instancing:ne,instancingColor:ne&&z.instanceColor!==null,instancingMorph:ne&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:w===null?s.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ot,alphaToCoverage:!!M.alphaToCoverage,map:le,matcap:me,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:F,aoMap:H,lightMap:K,bumpMap:$,normalMap:Q,displacementMap:f&&B,emissiveMap:I,normalMapObjectSpace:Q&&M.normalMapType===wf,normalMapTangentSpace:Q&&M.normalMapType===pc,metalnessMap:se,roughnessMap:be,anisotropy:Ue,anisotropyMap:ae,clearcoat:N,clearcoatMap:Pe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Le,dispersion:T,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:ge,sheen:ie,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:Re,specularIntensityMap:je,transmission:de,transmissionMap:J,thicknessMap:ve,gradientMap:Te,opaque:M.transparent===!1&&M.blending===Yi&&M.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:pe,combine:M.combine,mapUv:le&&_(M.map.channel),aoMapUv:H&&_(M.aoMap.channel),lightMapUv:K&&_(M.lightMap.channel),bumpMapUv:$&&_(M.bumpMap.channel),normalMapUv:Q&&_(M.normalMap.channel),displacementMapUv:B&&_(M.displacementMap.channel),emissiveMapUv:I&&_(M.emissiveMap.channel),metalnessMapUv:se&&_(M.metalnessMap.channel),roughnessMapUv:be&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(M.sheenRoughnessMap.channel),specularMapUv:Be&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:je&&_(M.specularIntensityMap.channel),transmissionMapUv:J&&_(M.transmissionMap.channel),thicknessMapUv:ve&&_(M.thicknessMap.channel),alphaMapUv:Ne&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Q||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(le||Ne),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:X,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:le&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:I&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)b.push(D),b.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(b,M),x(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const b=m[M.type];let D;if(b){const U=Mn[b];D=gd.clone(U.uniforms)}else D=M.uniforms;return D}function E(M,b){let D;for(let U=0,z=u.length;U<z;U++){const q=u[U];if(q.cacheKey===b){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Q1(s,b,M,r),u.push(D)),D}function S(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:R}}function sx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function rx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function uh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,m,_,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||rx),n.length>1&&n.sort(f||uh),i.length>1&&i.sort(f||uh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function ox(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new fh,s.set(n,[o])):i>=r.length?(o=new fh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ax(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ze};break;case"SpotLight":t={position:new k,direction:new k,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function cx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lx=0;function hx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ux(s){const e=new ax,t=cx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const i=new k,r=new Ye,o=new Ye;function a(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,v=0,x=0,y=0,E=0,S=0,A=0;l.sort(hx);for(let M=0,b=l.length;M<b;M++){const D=l[M],U=D.color,z=D.intensity,q=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*z,h+=U.g*z,f+=U.b*z;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],z);A++}else if(D.isDirectionalLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,F=t.get(D);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=G,d++}else if(D.isSpotLight){const G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=q,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[_]=G;const j=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,j.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[_]=j.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=W,y++}_++}else if(D.isRectAreaLight){const G=e.get(D);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=G,g++}else if(D.isPointLight){const G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const j=D.shadow,F=t.get(D);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,n.pointShadow[m]=F,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=D.shadow.matrix,x++}n.point[m]=G,m++}else if(D.isHemisphereLight){const G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(z),G.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=A,n.version=lx++)}function c(l,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function dh(s){const e=new ux(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new dh(s),e.set(i,[a])):r>=o.length?(a=new dh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(s,e,t){let n=new Mc;const i=new ue,r=new ue,o=new Qe,a=new dp({depthPacking:Tf}),c=new pp,l={},u=t.maxTextureSize,h={[En]:Ft,[Ft]:En,[ln]:ln},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:dx,fragmentShader:px}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Mt;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new tt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(S,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ni),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Un&&this.type===Un,q=p===Un&&this.type!==Un;for(let W=0,G=S.length;W<G;W++){const j=S[W],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const oe=F.getFrameExtents();if(i.multiply(oe),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/oe.x),i.x=r.x*oe.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/oe.y),i.y=r.y*oe.y,F.mapSize.y=r.y)),F.map===null||z===!0||q===!0){const fe=this.type!==Un?{minFilter:At,magFilter:At}:{};F.map!==null&&F.map.dispose(),F.map=new bi(i.x,i.y,fe),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const he=F.getViewportCount();for(let fe=0;fe<he;fe++){const Me=F.getViewport(fe);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),U.viewport(o),F.updateMatrices(j,fe),n=F.getFrustum(),y(A,R,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===Un&&v(F,R),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,b,D)};function v(S,A){const R=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,R,d,_,null)}function x(S,A,R,M){let b=null;const D=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=b.uuid,z=A.uuid;let q=l[U];q===void 0&&(q={},l[U]=q);let W=q[z];W===void 0&&(W=b.clone(),q[z]=W,A.addEventListener("dispose",E)),b=W}if(b.visible=A.visible,b.wireframe=A.wireframe,M===Un?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=s.properties.get(b);U.light=R}return b}function y(S,A,R,M,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Un)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const z=e.update(S),q=S.material;if(Array.isArray(q)){const W=z.groups;for(let G=0,j=W.length;G<j;G++){const F=W[G],oe=q[F.materialIndex];if(oe&&oe.visible){const he=x(S,oe,M,b);S.onBeforeShadow(s,S,A,R,z,he,F),s.renderBufferDirect(R,null,z,he,S,F),S.onAfterShadow(s,S,A,R,z,he,F)}}}else if(q.visible){const W=x(S,q,M,b);S.onBeforeShadow(s,S,A,R,z,W,null),s.renderBufferDirect(R,null,z,W,S,null),S.onAfterShadow(s,S,A,R,z,W,null)}}const U=S.children;for(let z=0,q=U.length;z<q;z++)y(U[z],A,R,M,b)}function E(S){S.target.removeEventListener("dispose",E);for(const R in l){const M=l[R],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const gx={[na]:ia,[sa]:aa,[ra]:ca,[Zi]:oa,[ia]:na,[aa]:sa,[ca]:ra,[oa]:Zi};function xx(s,e){function t(){let J=!1;const ve=new Qe;let Te=null;const Ne=new Qe(0,0,0,0);return{setMask:function(xe){Te!==xe&&!J&&(s.colorMask(xe,xe,xe,xe),Te=xe)},setLocked:function(xe){J=xe},setClear:function(xe,pe,Oe,qe,ut){ut===!0&&(xe*=qe,pe*=qe,Oe*=qe),ve.set(xe,pe,Oe,qe),Ne.equals(ve)===!1&&(s.clearColor(xe,pe,Oe,qe),Ne.copy(ve))},reset:function(){J=!1,Te=null,Ne.set(-1,0,0,0)}}}function n(){let J=!1,ve=!1,Te=null,Ne=null,xe=null;return{setReversed:function(pe){if(ve!==pe){const Oe=e.get("EXT_clip_control");pe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ve=pe;const qe=xe;xe=null,this.setClear(qe)}},getReversed:function(){return ve},setTest:function(pe){pe?w(s.DEPTH_TEST):X(s.DEPTH_TEST)},setMask:function(pe){Te!==pe&&!J&&(s.depthMask(pe),Te=pe)},setFunc:function(pe){if(ve&&(pe=gx[pe]),Ne!==pe){switch(pe){case na:s.depthFunc(s.NEVER);break;case ia:s.depthFunc(s.ALWAYS);break;case sa:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case ra:s.depthFunc(s.EQUAL);break;case oa:s.depthFunc(s.GEQUAL);break;case aa:s.depthFunc(s.GREATER);break;case ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=pe}},setLocked:function(pe){J=pe},setClear:function(pe){xe!==pe&&(ve&&(pe=1-pe),s.clearDepth(pe),xe=pe)},reset:function(){J=!1,Te=null,Ne=null,xe=null,ve=!1}}}function i(){let J=!1,ve=null,Te=null,Ne=null,xe=null,pe=null,Oe=null,qe=null,ut=null;return{setTest:function(it){J||(it?w(s.STENCIL_TEST):X(s.STENCIL_TEST))},setMask:function(it){ve!==it&&!J&&(s.stencilMask(it),ve=it)},setFunc:function(it,Rn,_n){(Te!==it||Ne!==Rn||xe!==_n)&&(s.stencilFunc(it,Rn,_n),Te=it,Ne=Rn,xe=_n)},setOp:function(it,Rn,_n){(pe!==it||Oe!==Rn||qe!==_n)&&(s.stencilOp(it,Rn,_n),pe=it,Oe=Rn,qe=_n)},setLocked:function(it){J=it},setClear:function(it){ut!==it&&(s.clearStencil(it),ut=it)},reset:function(){J=!1,ve=null,Te=null,Ne=null,xe=null,pe=null,Oe=null,qe=null,ut=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,E=null,S=null,A=new ze(0,0,0),R=0,M=!1,b=null,D=null,U=null,z=null,q=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,j=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=j>=2);let oe=null,he={};const fe=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Se=new Qe().fromArray(fe),Y=new Qe().fromArray(Me);function O(J,ve,Te,Ne){const xe=new Uint8Array(4),pe=s.createTexture();s.bindTexture(J,pe),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<Te;Oe++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ve+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return pe}const C={};C[s.TEXTURE_2D]=O(s.TEXTURE_2D,s.TEXTURE_2D,1),C[s.TEXTURE_CUBE_MAP]=O(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[s.TEXTURE_2D_ARRAY]=O(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),C[s.TEXTURE_3D]=O(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),w(s.DEPTH_TEST),o.setFunc(Zi),$(!1),Q(Xc),w(s.CULL_FACE),H(ni);function w(J){u[J]!==!0&&(s.enable(J),u[J]=!0)}function X(J){u[J]!==!1&&(s.disable(J),u[J]=!1)}function ne(J,ve){return h[J]!==ve?(s.bindFramebuffer(J,ve),h[J]=ve,J===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ve),J===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function V(J,ve){let Te=d,Ne=!1;if(J){Te=f.get(ve),Te===void 0&&(Te=[],f.set(ve,Te));const xe=J.textures;if(Te.length!==xe.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Oe=xe.length;pe<Oe;pe++)Te[pe]=s.COLOR_ATTACHMENT0+pe;Te.length=xe.length,Ne=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(Te)}function le(J){return m!==J?(s.useProgram(J),m=J,!0):!1}const me={[yi]:s.FUNC_ADD,[Ku]:s.FUNC_SUBTRACT,[Ju]:s.FUNC_REVERSE_SUBTRACT};me[Zu]=s.MIN,me[$u]=s.MAX;const L={[Qu]:s.ZERO,[ef]:s.ONE,[tf]:s.SRC_COLOR,[ea]:s.SRC_ALPHA,[cf]:s.SRC_ALPHA_SATURATE,[of]:s.DST_COLOR,[sf]:s.DST_ALPHA,[nf]:s.ONE_MINUS_SRC_COLOR,[ta]:s.ONE_MINUS_SRC_ALPHA,[af]:s.ONE_MINUS_DST_COLOR,[rf]:s.ONE_MINUS_DST_ALPHA,[lf]:s.CONSTANT_COLOR,[hf]:s.ONE_MINUS_CONSTANT_COLOR,[uf]:s.CONSTANT_ALPHA,[ff]:s.ONE_MINUS_CONSTANT_ALPHA};function H(J,ve,Te,Ne,xe,pe,Oe,qe,ut,it){if(J===ni){_===!0&&(X(s.BLEND),_=!1);return}if(_===!1&&(w(s.BLEND),_=!0),J!==ju){if(J!==g||it!==M){if((p!==yi||y!==yi)&&(s.blendEquation(s.FUNC_ADD),p=yi,y=yi),it)switch(J){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.ONE,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}v=null,x=null,E=null,S=null,A.set(0,0,0),R=0,g=J,M=it}return}xe=xe||ve,pe=pe||Te,Oe=Oe||Ne,(ve!==p||xe!==y)&&(s.blendEquationSeparate(me[ve],me[xe]),p=ve,y=xe),(Te!==v||Ne!==x||pe!==E||Oe!==S)&&(s.blendFuncSeparate(L[Te],L[Ne],L[pe],L[Oe]),v=Te,x=Ne,E=pe,S=Oe),(qe.equals(A)===!1||ut!==R)&&(s.blendColor(qe.r,qe.g,qe.b,ut),A.copy(qe),R=ut),g=J,M=!1}function K(J,ve){J.side===ln?X(s.CULL_FACE):w(s.CULL_FACE);let Te=J.side===Ft;ve&&(Te=!Te),$(Te),J.blending===Yi&&J.transparent===!1?H(ni):H(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),r.setMask(J.colorWrite);const Ne=J.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),I(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?w(s.SAMPLE_ALPHA_TO_COVERAGE):X(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(J){b!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),b=J)}function Q(J){J!==Xu?(w(s.CULL_FACE),J!==D&&(J===Xc?s.cullFace(s.BACK):J===qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):X(s.CULL_FACE),D=J}function B(J){J!==U&&(G&&s.lineWidth(J),U=J)}function I(J,ve,Te){J?(w(s.POLYGON_OFFSET_FILL),(z!==ve||q!==Te)&&(s.polygonOffset(ve,Te),z=ve,q=Te)):X(s.POLYGON_OFFSET_FILL)}function se(J){J?w(s.SCISSOR_TEST):X(s.SCISSOR_TEST)}function be(J){J===void 0&&(J=s.TEXTURE0+W-1),oe!==J&&(s.activeTexture(J),oe=J)}function Ue(J,ve,Te){Te===void 0&&(oe===null?Te=s.TEXTURE0+W-1:Te=oe);let Ne=he[Te];Ne===void 0&&(Ne={type:void 0,texture:void 0},he[Te]=Ne),(Ne.type!==J||Ne.texture!==ve)&&(oe!==Te&&(s.activeTexture(Te),oe=Te),s.bindTexture(J,ve||C[J]),Ne.type=J,Ne.texture=ve)}function N(){const J=he[oe];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ie(){try{s.texSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function de(){try{s.texSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ye(){try{s.texStorage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Le(){try{s.texStorage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function De(){try{s.texImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ge(){try{s.texImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ae(J){Se.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),Se.copy(J))}function Ge(J){Y.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),Y.copy(J))}function Be(J,ve){let Te=l.get(ve);Te===void 0&&(Te=new WeakMap,l.set(ve,Te));let Ne=Te.get(J);Ne===void 0&&(Ne=s.getUniformBlockIndex(ve,J.name),Te.set(J,Ne))}function Re(J,ve){const Ne=l.get(ve).get(J);c.get(ve)!==Ne&&(s.uniformBlockBinding(ve,Ne,J.__bindingPointIndex),c.set(ve,Ne))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},oe=null,he={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,v=null,x=null,y=null,E=null,S=null,A=new ze(0,0,0),R=0,M=!1,b=null,D=null,U=null,z=null,q=null,Se.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:w,disable:X,bindFramebuffer:ne,drawBuffers:V,useProgram:le,setBlending:H,setMaterial:K,setFlipSided:$,setCullFace:Q,setLineWidth:B,setPolygonOffset:I,setScissorTest:se,activeTexture:be,bindTexture:Ue,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:De,texImage3D:ge,updateUBOMapping:Be,uniformBlockBinding:Re,texStorage2D:ye,texStorage3D:Le,texSubImage2D:ie,texSubImage3D:de,compressedTexSubImage2D:ae,compressedTexSubImage3D:Pe,scissor:Ae,viewport:Ge,reset:je}}function _x(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,T){return d?new OffscreenCanvas(N,T):Ws("canvas")}function _(N,T,Z){let ie=1;const de=Ue(N);if((de.width>Z||de.height>Z)&&(ie=Z/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ae=Math.floor(ie*de.width),Pe=Math.floor(ie*de.height);h===void 0&&(h=m(ae,Pe));const ye=T?m(ae,Pe):h;return ye.width=ae,ye.height=Pe,ye.getContext("2d").drawImage(N,0,0,ae,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ae+"x"+Pe+")."),ye}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){s.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(N,T,Z,ie,de=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ae=T;if(T===s.RED&&(Z===s.FLOAT&&(ae=s.R32F),Z===s.HALF_FLOAT&&(ae=s.R16F),Z===s.UNSIGNED_BYTE&&(ae=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ae=s.R8UI),Z===s.UNSIGNED_SHORT&&(ae=s.R16UI),Z===s.UNSIGNED_INT&&(ae=s.R32UI),Z===s.BYTE&&(ae=s.R8I),Z===s.SHORT&&(ae=s.R16I),Z===s.INT&&(ae=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(ae=s.RG32F),Z===s.HALF_FLOAT&&(ae=s.RG16F),Z===s.UNSIGNED_BYTE&&(ae=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ae=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ae=s.RG16UI),Z===s.UNSIGNED_INT&&(ae=s.RG32UI),Z===s.BYTE&&(ae=s.RG8I),Z===s.SHORT&&(ae=s.RG16I),Z===s.INT&&(ae=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),Z===s.UNSIGNED_INT&&(ae=s.RGB32UI),Z===s.BYTE&&(ae=s.RGB8I),Z===s.SHORT&&(ae=s.RGB16I),Z===s.INT&&(ae=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ae=s.RGBA32UI),Z===s.BYTE&&(ae=s.RGBA8I),Z===s.SHORT&&(ae=s.RGBA16I),Z===s.INT&&(ae=s.RGBA32I)),T===s.RGB&&(Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(ae=s.R11F_G11F_B10F)),T===s.RGBA){const Pe=de?Xr:et.getTransfer(ie);Z===s.FLOAT&&(ae=s.RGBA32F),Z===s.HALF_FLOAT&&(ae=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ae=Pe===ct?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(N,T){let Z;return N?T===null||T===Si||T===Bs?Z=s.DEPTH24_STENCIL8:T===un?Z=s.DEPTH32F_STENCIL8:T===Os&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Si||T===Bs?Z=s.DEPTH_COMPONENT24:T===un?Z=s.DEPTH_COMPONENT32F:T===Os&&(Z=s.DEPTH_COMPONENT16),Z}function E(N,T){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==At&&N.minFilter!==Vt?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function S(N){const T=N.target;T.removeEventListener("dispose",S),R(T),T.isVideoTexture&&u.delete(T)}function A(N){const T=N.target;T.removeEventListener("dispose",A),b(T)}function R(N){const T=n.get(N);if(T.__webglInit===void 0)return;const Z=N.source,ie=f.get(Z);if(ie){const de=ie[T.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(N),Object.keys(ie).length===0&&f.delete(Z)}n.remove(N)}function M(N){const T=n.get(N);s.deleteTexture(T.__webglTexture);const Z=N.source,ie=f.get(Z);delete ie[T.__cacheKey],o.memory.textures--}function b(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let de=0;de<T.__webglFramebuffer[ie].length;de++)s.deleteFramebuffer(T.__webglFramebuffer[ie][de]);else s.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[ie]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=N.textures;for(let ie=0,de=Z.length;ie<de;ie++){const ae=n.get(Z[ie]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(Z[ie])}n.remove(N)}let D=0;function U(){D=0}function z(){const N=D;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),D+=1,N}function q(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function W(N,T){const Z=n.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const ie=N.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(Z,N,T);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function G(N,T){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){C(Z,N,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function j(N,T){const Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){C(Z,N,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function F(N,T){const Z=n.get(N);if(N.version>0&&Z.__version!==N.version){w(Z,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const oe={[es]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},he={[At]:s.NEAREST,[Fh]:s.NEAREST_MIPMAP_NEAREST,[ws]:s.NEAREST_MIPMAP_LINEAR,[Vt]:s.LINEAR,[Ur]:s.LINEAR_MIPMAP_NEAREST,[Sn]:s.LINEAR_MIPMAP_LINEAR},fe={[Af]:s.NEVER,[Df]:s.ALWAYS,[Rf]:s.LESS,[Xh]:s.LEQUAL,[Cf]:s.EQUAL,[Lf]:s.GEQUAL,[Pf]:s.GREATER,[If]:s.NOTEQUAL};function Me(N,T){if(T.type===un&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Vt||T.magFilter===Ur||T.magFilter===ws||T.magFilter===Sn||T.minFilter===Vt||T.minFilter===Ur||T.minFilter===ws||T.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,oe[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,oe[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,oe[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,he[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,he[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===At||T.minFilter!==ws&&T.minFilter!==Sn||T.type===un&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Se(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",S));const ie=T.source;let de=f.get(ie);de===void 0&&(de={},f.set(ie,de));const ae=q(T);if(ae!==N.__cacheKey){de[ae]===void 0&&(de[ae]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),de[ae].usedTimes++;const Pe=de[N.__cacheKey];Pe!==void 0&&(de[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(T)),N.__cacheKey=ae,N.__webglTexture=de[ae].texture}return Z}function Y(N,T,Z){return Math.floor(Math.floor(N/Z)/T)}function O(N,T,Z,ie){const ae=N.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,Z,ie,T.data);else{ae.sort((ge,Ae)=>ge.start-Ae.start);let Pe=0;for(let ge=1;ge<ae.length;ge++){const Ae=ae[Pe],Ge=ae[ge],Be=Ae.start+Ae.count,Re=Y(Ge.start,T.width,4),je=Y(Ae.start,T.width,4);Ge.start<=Be+1&&Re===je&&Y(Ge.start+Ge.count-1,T.width,4)===Re?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Pe,ae[Pe]=Ge)}ae.length=Pe+1;const ye=s.getParameter(s.UNPACK_ROW_LENGTH),Le=s.getParameter(s.UNPACK_SKIP_PIXELS),De=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let ge=0,Ae=ae.length;ge<Ae;ge++){const Ge=ae[ge],Be=Math.floor(Ge.start/4),Re=Math.ceil(Ge.count/4),je=Be%T.width,J=Math.floor(Be/T.width),ve=Re,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,J),t.texSubImage2D(s.TEXTURE_2D,0,je,J,ve,Te,Z,ie,T.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ye),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function C(N,T,Z){let ie=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=s.TEXTURE_3D);const de=Se(N,T),ae=T.source;t.bindTexture(ie,N.__webglTexture,s.TEXTURE0+Z);const Pe=n.get(ae);if(ae.version!==Pe.__version||de===!0){t.activeTexture(s.TEXTURE0+Z);const ye=et.getPrimaries(et.workingColorSpace),Le=T.colorSpace===Zn?null:et.getPrimaries(T.colorSpace),De=T.colorSpace===Zn||ye===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ge=_(T.image,!1,i.maxTextureSize);ge=be(T,ge);const Ae=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type);let Be=x(T.internalFormat,Ae,Ge,T.colorSpace,T.isVideoTexture);Me(ie,T);let Re;const je=T.mipmaps,J=T.isVideoTexture!==!0,ve=Pe.__version===void 0||de===!0,Te=ae.dataReady,Ne=E(T,ge);if(T.isDepthTexture)Be=y(T.format===ks,T.type),ve&&(J?t.texStorage2D(s.TEXTURE_2D,1,Be,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Be,ge.width,ge.height,0,Ae,Ge,null));else if(T.isDataTexture)if(je.length>0){J&&ve&&t.texStorage2D(s.TEXTURE_2D,Ne,Be,je[0].width,je[0].height);for(let xe=0,pe=je.length;xe<pe;xe++)Re=je[xe],J?Te&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re.width,Re.height,Ae,Ge,Re.data):t.texImage2D(s.TEXTURE_2D,xe,Be,Re.width,Re.height,0,Ae,Ge,Re.data);T.generateMipmaps=!1}else J?(ve&&t.texStorage2D(s.TEXTURE_2D,Ne,Be,ge.width,ge.height),Te&&O(T,ge,Ae,Ge)):t.texImage2D(s.TEXTURE_2D,0,Be,ge.width,ge.height,0,Ae,Ge,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){J&&ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Be,je[0].width,je[0].height,ge.depth);for(let xe=0,pe=je.length;xe<pe;xe++)if(Re=je[xe],T.format!==Qt)if(Ae!==null)if(J){if(Te)if(T.layerUpdates.size>0){const Oe=Wl(Re.width,Re.height,T.format,T.type);for(const qe of T.layerUpdates){const ut=Re.data.subarray(qe*Oe/Re.data.BYTES_PER_ELEMENT,(qe+1)*Oe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,qe,Re.width,Re.height,1,Ae,ut)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,ge.depth,Ae,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Be,Re.width,Re.height,ge.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Re.width,Re.height,ge.depth,Ae,Ge,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Be,Re.width,Re.height,ge.depth,0,Ae,Ge,Re.data)}else{J&&ve&&t.texStorage2D(s.TEXTURE_2D,Ne,Be,je[0].width,je[0].height);for(let xe=0,pe=je.length;xe<pe;xe++)Re=je[xe],T.format!==Qt?Ae!==null?J?Te&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Te&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re.width,Re.height,Ae,Ge,Re.data):t.texImage2D(s.TEXTURE_2D,xe,Be,Re.width,Re.height,0,Ae,Ge,Re.data)}else if(T.isDataArrayTexture)if(J){if(ve&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,Be,ge.width,ge.height,ge.depth),Te)if(T.layerUpdates.size>0){const xe=Wl(ge.width,ge.height,T.format,T.type);for(const pe of T.layerUpdates){const Oe=ge.data.subarray(pe*xe/ge.data.BYTES_PER_ELEMENT,(pe+1)*xe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ge.width,ge.height,1,Ae,Ge,Oe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Ge,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,Ae,Ge,ge.data);else if(T.isData3DTexture)J?(ve&&t.texStorage3D(s.TEXTURE_3D,Ne,Be,ge.width,ge.height,ge.depth),Te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Ge,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,Ae,Ge,ge.data);else if(T.isFramebufferTexture){if(ve)if(J)t.texStorage2D(s.TEXTURE_2D,Ne,Be,ge.width,ge.height);else{let xe=ge.width,pe=ge.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Be,xe,pe,0,Ae,Ge,null),xe>>=1,pe>>=1}}else if(je.length>0){if(J&&ve){const xe=Ue(je[0]);t.texStorage2D(s.TEXTURE_2D,Ne,Be,xe.width,xe.height)}for(let xe=0,pe=je.length;xe<pe;xe++)Re=je[xe],J?Te&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ae,Ge,Re):t.texImage2D(s.TEXTURE_2D,xe,Be,Ae,Ge,Re);T.generateMipmaps=!1}else if(J){if(ve){const xe=Ue(ge);t.texStorage2D(s.TEXTURE_2D,Ne,Be,xe.width,xe.height)}Te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ge,ge)}else t.texImage2D(s.TEXTURE_2D,0,Be,Ae,Ge,ge);g(T)&&p(ie),Pe.__version=ae.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function w(N,T,Z){if(T.image.length!==6)return;const ie=Se(N,T),de=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Z);const ae=n.get(de);if(de.version!==ae.__version||ie===!0){t.activeTexture(s.TEXTURE0+Z);const Pe=et.getPrimaries(et.workingColorSpace),ye=T.colorSpace===Zn?null:et.getPrimaries(T.colorSpace),Le=T.colorSpace===Zn||Pe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let pe=0;pe<6;pe++)!De&&!ge?Ae[pe]=_(T.image[pe],!0,i.maxCubemapSize):Ae[pe]=ge?T.image[pe].image:T.image[pe],Ae[pe]=be(T,Ae[pe]);const Ge=Ae[0],Be=r.convert(T.format,T.colorSpace),Re=r.convert(T.type),je=x(T.internalFormat,Be,Re,T.colorSpace),J=T.isVideoTexture!==!0,ve=ae.__version===void 0||ie===!0,Te=de.dataReady;let Ne=E(T,Ge);Me(s.TEXTURE_CUBE_MAP,T);let xe;if(De){J&&ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,je,Ge.width,Ge.height);for(let pe=0;pe<6;pe++){xe=Ae[pe].mipmaps;for(let Oe=0;Oe<xe.length;Oe++){const qe=xe[Oe];T.format!==Qt?Be!==null?J?Te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,je,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,0,0,qe.width,qe.height,Be,Re,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe,je,qe.width,qe.height,0,Be,Re,qe.data)}}}else{if(xe=T.mipmaps,J&&ve){xe.length>0&&Ne++;const pe=Ue(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ge){J?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ae[pe].width,Ae[pe].height,Be,Re,Ae[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ae[pe].width,Ae[pe].height,0,Be,Re,Ae[pe].data);for(let Oe=0;Oe<xe.length;Oe++){const ut=xe[Oe].image[pe].image;J?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,0,0,ut.width,ut.height,Be,Re,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,je,ut.width,ut.height,0,Be,Re,ut.data)}}else{J?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be,Re,Ae[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Be,Re,Ae[pe]);for(let Oe=0;Oe<xe.length;Oe++){const qe=xe[Oe];J?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,0,0,Be,Re,qe.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe+1,je,Be,Re,qe.image[pe])}}}g(T)&&p(s.TEXTURE_CUBE_MAP),ae.__version=de.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function X(N,T,Z,ie,de,ae){const Pe=r.convert(Z.format,Z.colorSpace),ye=r.convert(Z.type),Le=x(Z.internalFormat,Pe,ye,Z.colorSpace),De=n.get(T),ge=n.get(Z);if(ge.__renderTarget=T,!De.__hasExternalTextures){const Ae=Math.max(1,T.width>>ae),Ge=Math.max(1,T.height>>ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ae,Le,Ae,Ge,T.depth,0,Pe,ye,null):t.texImage2D(de,ae,Le,Ae,Ge,0,Pe,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),I(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,de,ge.__webglTexture,0,B(T)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,de,ge.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(N,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const ie=T.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,ae=y(T.stencilBuffer,de),Pe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=B(T);I(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ae,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ae,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,N)}else{const ie=T.textures;for(let de=0;de<ie.length;de++){const ae=ie[de],Pe=r.convert(ae.format,ae.colorSpace),ye=r.convert(ae.type),Le=x(ae.internalFormat,Pe,ye,ae.colorSpace),De=B(T);Z&&I(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Le,T.width,T.height):I(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Le,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Le,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function V(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(T.depthTexture);ie.__renderTarget=T,(!ie.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const de=ie.__webglTexture,ae=B(T);if(T.depthTexture.format===zs)I(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(T.depthTexture.format===ks)I(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function le(N){const T=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ie=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const de=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),T.__depthDisposeCallback=de}T.__boundDepthTexture=ie}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const ie=N.texture.mipmaps;ie&&ie.length>0?V(T.__webglFramebuffer[0],N):V(T.__webglFramebuffer,N)}else if(Z){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=s.createRenderbuffer(),ne(T.__webglDepthbuffer[ie],N,!1);else{const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ae)}}else{const ie=N.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ne(T.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(N,T,Z){const ie=n.get(N);T!==void 0&&X(ie.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&le(N)}function L(N){const T=N.texture,Z=n.get(N),ie=n.get(T);N.addEventListener("dispose",A);const de=N.textures,ae=N.isWebGLCubeRenderTarget===!0,Pe=de.length>1;if(Pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,o.memory.textures++),ae){Z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[ye]=[];for(let Le=0;Le<T.mipmaps.length;Le++)Z.__webglFramebuffer[ye][Le]=s.createFramebuffer()}else Z.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)Z.__webglFramebuffer[ye]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let ye=0,Le=de.length;ye<Le;ye++){const De=n.get(de[ye]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&I(N)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ye=0;ye<de.length;ye++){const Le=de[ye];Z.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ye]);const De=r.convert(Le.format,Le.colorSpace),ge=r.convert(Le.type),Ae=x(Le.internalFormat,De,ge,Le.colorSpace,N.isXRRenderTarget===!0),Ge=B(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ae,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Me(s.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)X(Z.__webglFramebuffer[ye][Le],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Le);else X(Z.__webglFramebuffer[ye],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ye=0,Le=de.length;ye<Le;ye++){const De=de[ye],ge=n.get(De);let Ae=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ge.__webglTexture),Me(Ae,De),X(Z.__webglFramebuffer,N,De,s.COLOR_ATTACHMENT0+ye,Ae,0),g(De)&&p(Ae)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ye=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ie.__webglTexture),Me(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)X(Z.__webglFramebuffer[Le],N,T,s.COLOR_ATTACHMENT0,ye,Le);else X(Z.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,ye,0);g(T)&&p(ye),t.unbindTexture()}N.depthBuffer&&le(N)}function H(N){const T=N.textures;for(let Z=0,ie=T.length;Z<ie;Z++){const de=T[Z];if(g(de)){const ae=v(N),Pe=n.get(de).__webglTexture;t.bindTexture(ae,Pe),p(ae),t.unbindTexture()}}}const K=[],$=[];function Q(N){if(N.samples>0){if(I(N)===!1){const T=N.textures,Z=N.width,ie=N.height;let de=s.COLOR_BUFFER_BIT;const ae=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(N),ye=T.length>1;if(ye)for(let De=0;De<T.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Le=N.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let De=0;De<T.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const ge=n.get(T[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,de,s.NEAREST),c===!0&&(K.length=0,$.length=0,K.push(s.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.resolveDepthBuffer===!1&&(K.push(ae),$.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let De=0;De<T.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[De]);const ge=n.get(T[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function B(N){return Math.min(i.maxSamples,N.samples)}function I(N){const T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(N){const T=o.render.frame;u.get(N)!==T&&(u.set(N,T),N.update())}function be(N,T){const Z=N.colorSpace,ie=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Ot&&Z!==Zn&&(et.getTransfer(Z)===ct?(ie!==Qt||de!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=me,this.setupRenderTarget=L,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=X,this.useMultisampledRTT=I}function yx(s,e){function t(n,i=Zn){let r;const o=et.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===cc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return s.BYTE;if(n===Bh)return s.SHORT;if(n===Os)return s.UNSIGNED_SHORT;if(n===ac)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===Zs)return s.HALF_FLOAT;if(n===Hh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===Qt)return s.RGBA;if(n===zs)return s.DEPTH_COMPONENT;if(n===ks)return s.DEPTH_STENCIL;if(n===hc)return s.RED;if(n===uc)return s.RED_INTEGER;if(n===Gh)return s.RG;if(n===fc)return s.RG_INTEGER;if(n===dc)return s.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===zr)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===fa||n===da||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===ya||n===va||n===Ma||n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Da||n===Na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ou(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:vx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends ls{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Sx,p={},v=t.getContextAttributes();let x=null,y=null;const E=[],S=[],A=new ue;let R=null;const M=new Ht;M.viewport=new Qe;const b=new Ht;b.viewport=new Qe;const D=[M,b],U=new Np;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let w=E[C];return w===void 0&&(w=new Io,E[C]=w),w.getTargetRaySpace()},this.getControllerGrip=function(C){let w=E[C];return w===void 0&&(w=new Io,E[C]=w),w.getGripSpace()},this.getHand=function(C){let w=E[C];return w===void 0&&(w=new Io,E[C]=w),w.getHandSpace()};function W(C){const w=S.indexOf(C.inputSource);if(w===-1)return;const X=E[w];X!==void 0&&(X.update(C.inputSource,C.frame,l||o),X.dispatchEvent({type:C.type,data:C.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let C=0;C<E.length;C++){const w=S[C];w!==null&&(S[C]=null,E[C].disconnect(w))}z=null,q=null,g.reset();for(const C in p)delete p[C];e.setRenderTarget(x),d=null,f=null,h=null,i=null,y=null,O.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){r=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(C){if(i=C,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ne=null,V=null;v.depth&&(V=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?ks:zs,ne=v.stencil?Bs:Si);const le={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(le),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new bi(f.textureWidth,f.textureHeight,{format:Qt,type:Tn,depthTexture:new ru(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const X={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new bi(d.framebufferWidth,d.framebufferHeight,{format:Qt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),O.setContext(i),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(C){for(let w=0;w<C.removed.length;w++){const X=C.removed[w],ne=S.indexOf(X);ne>=0&&(S[ne]=null,E[ne].disconnect(X))}for(let w=0;w<C.added.length;w++){const X=C.added[w];let ne=S.indexOf(X);if(ne===-1){for(let le=0;le<E.length;le++)if(le>=S.length){S.push(X),ne=le;break}else if(S[le]===null){S[le]=X,ne=le;break}if(ne===-1)break}const V=E[ne];V&&V.connect(X)}}const F=new k,oe=new k;function he(C,w,X){F.setFromMatrixPosition(w.matrixWorld),oe.setFromMatrixPosition(X.matrixWorld);const ne=F.distanceTo(oe),V=w.projectionMatrix.elements,le=X.projectionMatrix.elements,me=V[14]/(V[10]-1),L=V[14]/(V[10]+1),H=(V[9]+1)/V[5],K=(V[9]-1)/V[5],$=(V[8]-1)/V[0],Q=(le[8]+1)/le[0],B=me*$,I=me*Q,se=ne/(-$+Q),be=se*-$;if(w.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(be),C.translateZ(se),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),V[10]===-1)C.projectionMatrix.copy(w.projectionMatrix),C.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{const Ue=me+se,N=L+se,T=B-be,Z=I+(ne-be),ie=H*L/N*Ue,de=K*L/N*Ue;C.projectionMatrix.makePerspective(T,Z,ie,de,Ue,N),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function fe(C,w){w===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(w.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(i===null)return;let w=C.near,X=C.far;g.texture!==null&&(g.depthNear>0&&(w=g.depthNear),g.depthFar>0&&(X=g.depthFar)),U.near=b.near=M.near=w,U.far=b.far=M.far=X,(z!==U.near||q!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,q=U.far),U.layers.mask=C.layers.mask|6,M.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const ne=C.parent,V=U.cameras;fe(U,ne);for(let le=0;le<V.length;le++)fe(V[le],ne);V.length===2?he(U,M,b):U.projectionMatrix.copy(M.projectionMatrix),Me(C,U,ne)};function Me(C,w,X){X===null?C.matrix.copy(w.matrixWorld):(C.matrix.copy(X.matrixWorld),C.matrix.invert(),C.matrix.multiply(w.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(w.projectionMatrix),C.projectionMatrixInverse.copy(w.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=ts*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(C){c=C,f!==null&&(f.fixedFoveation=C),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=C)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(C){return p[C]};let Se=null;function Y(C,w){if(u=w.getViewerPose(l||o),m=w,u!==null){const X=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ne=!1;X.length!==U.cameras.length&&(U.cameras.length=0,ne=!0);for(let L=0;L<X.length;L++){const H=X[L];let K=null;if(d!==null)K=d.getViewport(H);else{const Q=h.getViewSubImage(f,H);K=Q.viewport,L===0&&(e.setRenderTargetTextures(y,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(y))}let $=D[L];$===void 0&&($=new Ht,$.layers.enable(L),$.viewport=new Qe,D[L]=$),$.matrix.fromArray(H.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(H.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(K.x,K.y,K.width,K.height),L===0&&(U.matrix.copy($.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ne===!0&&U.cameras.push($)}const V=i.enabledFeatures;if(V&&V.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const L=h.getDepthInformation(X[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(V&&V.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let L=0;L<X.length;L++){const H=X[L].camera;if(H){let K=p[H];K||(K=new ou,p[H]=K);const $=h.getCameraImage(H);K.sourceTexture=$}}}}for(let X=0;X<E.length;X++){const ne=S[X],V=E[X];ne!==null&&V!==void 0&&V.update(ne,w,l||o)}Se&&Se(C,w),w.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:w}),m=null}const O=new Mu;O.setAnimationLoop(Y),this.setAnimationLoop=function(C){Se=C},this.dispose=function(){}}}const mi=new sn,Ex=new Ye;function Tx(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Zh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ft&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ft&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,mi.copy(y),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(mi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=i[v.id];y===void 0&&(m(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));const E=x.program;n.updateUBOMapping(v,E);const S=e.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function u(v){const x=h();v.__bindingPointIndex=x;const y=s.createBuffer(),E=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,A=y.length;S<A;S++){const R=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,b=R.length;M<b;M++){const D=R[M];if(d(D,S,M,E)===!0){const U=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let W=0;W<z.length;W++){const G=z[W],j=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+q,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,y,E){const S=v.value,A=x+"_"+y;if(E[A]===void 0)return typeof S=="number"||typeof S=="boolean"?E[A]=S:E[A]=S.clone(),!0;{const R=E[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return E[A]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function m(v){const x=v.uniforms;let y=0;const E=16;for(let A=0,R=x.length;A<R;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,D=M.length;b<D;b++){const U=M[b],z=Array.isArray(U.value)?U.value:[U.value];for(let q=0,W=z.length;q<W;q++){const G=z[q],j=_(G),F=y%E,oe=F%j.boundary,he=F+oe;y+=oe,he!==0&&E-he<j.storage&&(y+=E-he),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=j.storage}}}const S=y%E;return S>0&&(y+=E-S),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class wu{constructor(e={}){const{canvas:t=Jf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=St;let S=0,A=0,R=null,M=-1,b=null;const D=new Qe,U=new Qe;let z=null;const q=new ze(0);let W=0,G=t.width,j=t.height,F=1,oe=null,he=null;const fe=new Qe(0,0,G,j),Me=new Qe(0,0,G,j);let Se=!1;const Y=new Mc;let O=!1,C=!1;const w=new Ye,X=new k,ne=new Qe,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function me(){return R===null?F:1}let L=n;function H(P,ee){return t.getContext(P,ee)}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",xe,!1),L===null){const ee="webgl2";if(L=H(ee,P),L===null)throw H(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let K,$,Q,B,I,se,be,Ue,N,T,Z,ie,de,ae,Pe,ye,Le,De,ge,Ae,Ge,Be,Re,je;function J(){K=new O0(L),K.init(),Be=new yx(L,K),$=new P0(L,K,e,Be),Q=new xx(L,K),$.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),B=new k0(L),I=new sx,se=new _x(L,K,Q,I,$,Be,B),be=new L0(y),Ue=new F0(y),N=new qp(L),Re=new R0(L,N),T=new B0(L,N,B,Re),Z=new V0(L,T,N,B),ge=new H0(L,$,se),ye=new I0(I),ie=new ix(y,be,Ue,K,$,Re,ye),de=new Tx(y,I),ae=new ox,Pe=new fx(K),De=new A0(y,be,Ue,Q,Z,d,c),Le=new mx(y,Z,$),je=new wx(L,B,$,Q),Ae=new C0(L,K,B),Ge=new z0(L,K,B),B.programs=ie.programs,y.capabilities=$,y.extensions=K,y.properties=I,y.renderLists=ae,y.shadowMap=Le,y.state=Q,y.info=B}J();const ve=new bx(y,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const P=K.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=K.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(G,j,!1))},this.getSize=function(P){return P.set(G,j)},this.setSize=function(P,ee,re=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,j=ee,t.width=Math.floor(P*F),t.height=Math.floor(ee*F),re===!0&&(t.style.width=P+"px",t.style.height=ee+"px"),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(G*F,j*F).floor()},this.setDrawingBufferSize=function(P,ee,re){G=P,j=ee,F=re,t.width=Math.floor(P*re),t.height=Math.floor(ee*re),this.setViewport(0,0,P,ee)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,ee,re,ce){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,ee,re,ce),Q.viewport(D.copy(fe).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(Me)},this.setScissor=function(P,ee,re,ce){P.isVector4?Me.set(P.x,P.y,P.z,P.w):Me.set(P,ee,re,ce),Q.scissor(U.copy(Me).multiplyScalar(F).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){Q.setScissorTest(Se=P)},this.setOpaqueSort=function(P){oe=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(P=!0,ee=!0,re=!0){let ce=0;if(P){let te=!1;if(R!==null){const _e=R.texture.format;te=_e===dc||_e===fc||_e===uc}if(te){const _e=R.texture.type,Ce=_e===Tn||_e===Si||_e===Os||_e===Bs||_e===cc||_e===lc,Fe=De.getClearColor(),Ie=De.getClearAlpha(),Ve=Fe.r,Xe=Fe.g,ke=Fe.b;Ce?(m[0]=Ve,m[1]=Xe,m[2]=ke,m[3]=Ie,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ve,_[1]=Xe,_[2]=ke,_[3]=Ie,L.clearBufferiv(L.COLOR,0,_))}else ce|=L.COLOR_BUFFER_BIT}ee&&(ce|=L.DEPTH_BUFFER_BIT),re&&(ce|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),De.dispose(),ae.dispose(),Pe.dispose(),I.dispose(),be.dispose(),Ue.dispose(),Z.dispose(),Re.dispose(),je.dispose(),ie.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",_n),ve.removeEventListener("sessionend",zc),ai.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=B.autoReset,ee=Le.enabled,re=Le.autoUpdate,ce=Le.needsUpdate,te=Le.type;J(),B.autoReset=P,Le.enabled=ee,Le.autoUpdate=re,Le.needsUpdate=ce,Le.type=te}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function pe(P){const ee=P.target;ee.removeEventListener("dispose",pe),Oe(ee)}function Oe(P){qe(P),I.remove(P)}function qe(P){const ee=I.get(P).programs;ee!==void 0&&(ee.forEach(function(re){ie.releaseProgram(re)}),P.isShaderMaterial&&ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,re,ce,te,_e){ee===null&&(ee=V);const Ce=te.isMesh&&te.matrixWorld.determinant()<0,Fe=Fu(P,ee,re,ce,te);Q.setMaterial(ce,Ce);let Ie=re.index,Ve=1;if(ce.wireframe===!0){if(Ie=T.getWireframeAttribute(re),Ie===void 0)return;Ve=2}const Xe=re.drawRange,ke=re.attributes.position;let $e=Xe.start*Ve,at=(Xe.start+Xe.count)*Ve;_e!==null&&($e=Math.max($e,_e.start*Ve),at=Math.min(at,(_e.start+_e.count)*Ve)),Ie!==null?($e=Math.max($e,0),at=Math.min(at,Ie.count)):ke!=null&&($e=Math.max($e,0),at=Math.min(at,ke.count));const _t=at-$e;if(_t<0||_t===1/0)return;Re.setup(te,ce,Fe,re,Ie);let ft,ht=Ae;if(Ie!==null&&(ft=N.get(Ie),ht=Ge,ht.setIndex(ft)),te.isMesh)ce.wireframe===!0?(Q.setLineWidth(ce.wireframeLinewidth*me()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(te.isLine){let He=ce.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*me()),te.isLineSegments?ht.setMode(L.LINES):te.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else te.isPoints?ht.setMode(L.POINTS):te.isSprite&&ht.setMode(L.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ht.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const He=te._multiDrawStarts,pt=te._multiDrawCounts,nt=te._multiDrawCount,Gt=Ie?N.get(Ie).bytesPerElement:1,Ai=I.get(ce).currentProgram.getUniforms();for(let Wt=0;Wt<nt;Wt++)Ai.setValue(L,"_gl_DrawID",Wt),ht.render(He[Wt]/Gt,pt[Wt])}else if(te.isInstancedMesh)ht.renderInstances($e,_t,te.count);else if(re.isInstancedBufferGeometry){const He=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,pt=Math.min(re.instanceCount,He);ht.renderInstances($e,_t,pt)}else ht.render($e,_t)};function ut(P,ee,re){P.transparent===!0&&P.side===ln&&P.forceSinglePass===!1?(P.side=Ft,P.needsUpdate=!0,nr(P,ee,re),P.side=En,P.needsUpdate=!0,nr(P,ee,re),P.side=ln):nr(P,ee,re)}this.compile=function(P,ee,re=null){re===null&&(re=P),p=Pe.get(re),p.init(ee),x.push(p),re.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),P!==re&&P.traverseVisible(function(te){te.isLight&&te.layers.test(ee.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();const ce=new Set;return P.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const _e=te.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const Fe=_e[Ce];ut(Fe,re,te),ce.add(Fe)}else ut(_e,re,te),ce.add(_e)}),p=x.pop(),ce},this.compileAsync=function(P,ee,re=null){const ce=this.compile(P,ee,re);return new Promise(te=>{function _e(){if(ce.forEach(function(Ce){I.get(Ce).currentProgram.isReady()&&ce.delete(Ce)}),ce.size===0){te(P);return}setTimeout(_e,10)}K.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let it=null;function Rn(P){it&&it(P)}function _n(){ai.stop()}function zc(){ai.start()}const ai=new Mu;ai.setAnimationLoop(Rn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(P){it=P,ve.setAnimationLoop(P),P===null?ai.stop():ai.start()},ve.addEventListener("sessionstart",_n),ve.addEventListener("sessionend",zc),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(ee),ee=ve.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,ee,R),p=Pe.get(P,x.length),p.init(ee),x.push(p),w.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y.setFromProjectionMatrix(w,bn,ee.reversedDepth),C=this.localClippingEnabled,O=ye.init(this.clippingPlanes,C),g=ae.get(P,v.length),g.init(),v.push(g),ve.enabled===!0&&ve.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&ao(_e,ee,-1/0,y.sortObjects)}ao(P,ee,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(oe,he),le=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,le&&De.addToRenderList(g,P),this.info.render.frame++,O===!0&&ye.beginShadows();const re=p.state.shadowsArray;Le.render(re,P,ee),O===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=g.opaque,te=g.transmissive;if(p.setupLights(),ee.isArrayCamera){const _e=ee.cameras;if(te.length>0)for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const Ie=_e[Ce];Hc(ce,te,P,Ie)}le&&De.render(P);for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++){const Ie=_e[Ce];kc(g,P,Ie,Ie.viewport)}}else te.length>0&&Hc(ce,te,P,ee),le&&De.render(P),kc(g,P,ee);R!==null&&A===0&&(se.updateMultisampleRenderTarget(R),se.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(y,P,ee),Re.resetDefaultState(),M=-1,b=null,x.pop(),x.length>0?(p=x[x.length-1],O===!0&&ye.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function ao(P,ee,re,ce){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)re=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){ce&&ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(w);const Ce=Z.update(P),Fe=P.material;Fe.visible&&g.push(P,Ce,Fe,re,ne.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const Ce=Z.update(P),Fe=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ne.copy(P.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ne.copy(Ce.boundingSphere.center)),ne.applyMatrix4(P.matrixWorld).applyMatrix4(w)),Array.isArray(Fe)){const Ie=Ce.groups;for(let Ve=0,Xe=Ie.length;Ve<Xe;Ve++){const ke=Ie[Ve],$e=Fe[ke.materialIndex];$e&&$e.visible&&g.push(P,Ce,$e,re,ne.z,ke)}}else Fe.visible&&g.push(P,Ce,Fe,re,ne.z,null)}}const _e=P.children;for(let Ce=0,Fe=_e.length;Ce<Fe;Ce++)ao(_e[Ce],ee,re,ce)}function kc(P,ee,re,ce){const te=P.opaque,_e=P.transmissive,Ce=P.transparent;p.setupLightsView(re),O===!0&&ye.setGlobalState(y.clippingPlanes,re),ce&&Q.viewport(D.copy(ce)),te.length>0&&tr(te,ee,re),_e.length>0&&tr(_e,ee,re),Ce.length>0&&tr(Ce,ee,re),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Hc(P,ee,re,ce){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ce.id]===void 0&&(p.state.transmissionRenderTarget[ce.id]=new bi(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Zs:Tn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const _e=p.state.transmissionRenderTarget[ce.id],Ce=ce.viewport||D;_e.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);const Fe=y.getRenderTarget(),Ie=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(q),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),le&&De.render(re);const Xe=y.toneMapping;y.toneMapping=ii;const ke=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),p.setupLightsView(ce),O===!0&&ye.setGlobalState(y.clippingPlanes,ce),tr(P,re,ce),se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e),K.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,_t=ee.length;at<_t;at++){const ft=ee[at],ht=ft.object,He=ft.geometry,pt=ft.material,nt=ft.group;if(pt.side===ln&&ht.layers.test(ce.layers)){const Gt=pt.side;pt.side=Ft,pt.needsUpdate=!0,Vc(ht,re,ce,He,pt,nt),pt.side=Gt,pt.needsUpdate=!0,$e=!0}}$e===!0&&(se.updateMultisampleRenderTarget(_e),se.updateRenderTargetMipmap(_e))}y.setRenderTarget(Fe,Ie,Ve),y.setClearColor(q,W),ke!==void 0&&(ce.viewport=ke),y.toneMapping=Xe}function tr(P,ee,re){const ce=ee.isScene===!0?ee.overrideMaterial:null;for(let te=0,_e=P.length;te<_e;te++){const Ce=P[te],Fe=Ce.object,Ie=Ce.geometry,Ve=Ce.group;let Xe=Ce.material;Xe.allowOverride===!0&&ce!==null&&(Xe=ce),Fe.layers.test(re.layers)&&Vc(Fe,ee,re,Ie,Xe,Ve)}}function Vc(P,ee,re,ce,te,_e){P.onBeforeRender(y,ee,re,ce,te,_e),P.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),te.onBeforeRender(y,ee,re,ce,P,_e),te.transparent===!0&&te.side===ln&&te.forceSinglePass===!1?(te.side=Ft,te.needsUpdate=!0,y.renderBufferDirect(re,ee,ce,te,P,_e),te.side=En,te.needsUpdate=!0,y.renderBufferDirect(re,ee,ce,te,P,_e),te.side=ln):y.renderBufferDirect(re,ee,ce,te,P,_e),P.onAfterRender(y,ee,re,ce,te,_e)}function nr(P,ee,re){ee.isScene!==!0&&(ee=V);const ce=I.get(P),te=p.state.lights,_e=p.state.shadowsArray,Ce=te.state.version,Fe=ie.getParameters(P,te.state,_e,ee,re),Ie=ie.getProgramCacheKey(Fe);let Ve=ce.programs;ce.environment=P.isMeshStandardMaterial?ee.environment:null,ce.fog=ee.fog,ce.envMap=(P.isMeshStandardMaterial?Ue:be).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?ee.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",pe),Ve=new Map,ce.programs=Ve);let Xe=Ve.get(Ie);if(Xe!==void 0){if(ce.currentProgram===Xe&&ce.lightsStateVersion===Ce)return Wc(P,Fe),Xe}else Fe.uniforms=ie.getUniforms(P),P.onBeforeCompile(Fe,y),Xe=ie.acquireProgram(Fe,Ie),Ve.set(Ie,Xe),ce.uniforms=Fe.uniforms;const ke=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ke.clippingPlanes=ye.uniform),Wc(P,Fe),ce.needsLights=Bu(P),ce.lightsStateVersion=Ce,ce.needsLights&&(ke.ambientLightColor.value=te.state.ambient,ke.lightProbe.value=te.state.probe,ke.directionalLights.value=te.state.directional,ke.directionalLightShadows.value=te.state.directionalShadow,ke.spotLights.value=te.state.spot,ke.spotLightShadows.value=te.state.spotShadow,ke.rectAreaLights.value=te.state.rectArea,ke.ltc_1.value=te.state.rectAreaLTC1,ke.ltc_2.value=te.state.rectAreaLTC2,ke.pointLights.value=te.state.point,ke.pointLightShadows.value=te.state.pointShadow,ke.hemisphereLights.value=te.state.hemi,ke.directionalShadowMap.value=te.state.directionalShadowMap,ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ke.spotShadowMap.value=te.state.spotShadowMap,ke.spotLightMatrix.value=te.state.spotLightMatrix,ke.spotLightMap.value=te.state.spotLightMap,ke.pointShadowMap.value=te.state.pointShadowMap,ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ce.currentProgram=Xe,ce.uniformsList=null,Xe}function Gc(P){if(P.uniformsList===null){const ee=P.currentProgram.getUniforms();P.uniformsList=kr.seqWithValue(ee.seq,P.uniforms)}return P.uniformsList}function Wc(P,ee){const re=I.get(P);re.outputColorSpace=ee.outputColorSpace,re.batching=ee.batching,re.batchingColor=ee.batchingColor,re.instancing=ee.instancing,re.instancingColor=ee.instancingColor,re.instancingMorph=ee.instancingMorph,re.skinning=ee.skinning,re.morphTargets=ee.morphTargets,re.morphNormals=ee.morphNormals,re.morphColors=ee.morphColors,re.morphTargetsCount=ee.morphTargetsCount,re.numClippingPlanes=ee.numClippingPlanes,re.numIntersection=ee.numClipIntersection,re.vertexAlphas=ee.vertexAlphas,re.vertexTangents=ee.vertexTangents,re.toneMapping=ee.toneMapping}function Fu(P,ee,re,ce,te){ee.isScene!==!0&&(ee=V),se.resetTextureUnits();const _e=ee.fog,Ce=ce.isMeshStandardMaterial?ee.environment:null,Fe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ot,Ie=(ce.isMeshStandardMaterial?Ue:be).get(ce.envMap||Ce),Ve=ce.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Xe=!!re.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),ke=!!re.morphAttributes.position,$e=!!re.morphAttributes.normal,at=!!re.morphAttributes.color;let _t=ii;ce.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=y.toneMapping);const ft=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ht=ft!==void 0?ft.length:0,He=I.get(ce),pt=p.state.lights;if(O===!0&&(C===!0||P!==b)){const It=P===b&&ce.id===M;ye.setState(ce,P,It)}let nt=!1;ce.version===He.__version?(He.needsLights&&He.lightsStateVersion!==pt.state.version||He.outputColorSpace!==Fe||te.isBatchedMesh&&He.batching===!1||!te.isBatchedMesh&&He.batching===!0||te.isBatchedMesh&&He.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&He.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&He.instancing===!1||!te.isInstancedMesh&&He.instancing===!0||te.isSkinnedMesh&&He.skinning===!1||!te.isSkinnedMesh&&He.skinning===!0||te.isInstancedMesh&&He.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&He.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&He.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&He.instancingMorph===!1&&te.morphTexture!==null||He.envMap!==Ie||ce.fog===!0&&He.fog!==_e||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ye.numPlanes||He.numIntersection!==ye.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Xe||He.morphTargets!==ke||He.morphNormals!==$e||He.morphColors!==at||He.toneMapping!==_t||He.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,He.__version=ce.version);let Gt=He.currentProgram;nt===!0&&(Gt=nr(ce,ee,te));let Ai=!1,Wt=!1,gs=!1;const mt=Gt.getUniforms(),jt=He.uniforms;if(Q.useProgram(Gt.program)&&(Ai=!0,Wt=!0,gs=!0),ce.id!==M&&(M=ce.id,Wt=!0),Ai||b!==P){Q.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),mt.setValue(L,"projectionMatrix",P.projectionMatrix),mt.setValue(L,"viewMatrix",P.matrixWorldInverse);const Bt=mt.map.cameraPosition;Bt!==void 0&&Bt.setValue(L,X.setFromMatrixPosition(P.matrixWorld)),$.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&mt.setValue(L,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Wt=!0,gs=!0)}if(te.isSkinnedMesh){mt.setOptional(L,te,"bindMatrix"),mt.setOptional(L,te,"bindMatrixInverse");const It=te.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),mt.setValue(L,"boneTexture",It.boneTexture,se))}te.isBatchedMesh&&(mt.setOptional(L,te,"batchingTexture"),mt.setValue(L,"batchingTexture",te._matricesTexture,se),mt.setOptional(L,te,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",te._indirectTexture,se),mt.setOptional(L,te,"batchingColorTexture"),te._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",te._colorsTexture,se));const Kt=re.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&ge.update(te,re,Gt),(Wt||He.receiveShadow!==te.receiveShadow)&&(He.receiveShadow=te.receiveShadow,mt.setValue(L,"receiveShadow",te.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(jt.envMap.value=Ie,jt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&ee.environment!==null&&(jt.envMapIntensity.value=ee.environmentIntensity),Wt&&(mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&Ou(jt,gs),_e&&ce.fog===!0&&de.refreshFogUniforms(jt,_e),de.refreshMaterialUniforms(jt,ce,F,j,p.state.transmissionRenderTarget[P.id]),kr.upload(L,Gc(He),jt,se)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(kr.upload(L,Gc(He),jt,se),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&mt.setValue(L,"center",te.center),mt.setValue(L,"modelViewMatrix",te.modelViewMatrix),mt.setValue(L,"normalMatrix",te.normalMatrix),mt.setValue(L,"modelMatrix",te.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const It=ce.uniformsGroups;for(let Bt=0,co=It.length;Bt<co;Bt++){const ci=It[Bt];je.update(ci,Gt),je.bind(ci,Gt)}}return Gt}function Ou(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function Bu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,ee,re){const ce=I.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),I.get(P.texture).__webglTexture=ee,I.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:re,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ee){const re=I.get(P);re.__webglFramebuffer=ee,re.__useDefaultFramebuffer=ee===void 0};const zu=L.createFramebuffer();this.setRenderTarget=function(P,ee=0,re=0){R=P,S=ee,A=re;let ce=!0,te=null,_e=!1,Ce=!1;if(P){const Ie=I.get(P);if(Ie.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(L.FRAMEBUFFER,null),ce=!1;else if(Ie.__webglFramebuffer===void 0)se.setupRenderTarget(P);else if(Ie.__hasExternalTextures)se.rebindTextures(P,I.get(P.texture).__webglTexture,I.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ke=P.depthTexture;if(Ie.__boundDepthTexture!==ke){if(ke!==null&&I.has(ke)&&(P.width!==ke.image.width||P.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(P)}}const Ve=P.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Xe=I.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Xe[ee])?te=Xe[ee][re]:te=Xe[ee],_e=!0):P.samples>0&&se.useMultisampledRTT(P)===!1?te=I.get(P).__webglMultisampledFramebuffer:Array.isArray(Xe)?te=Xe[re]:te=Xe,D.copy(P.viewport),U.copy(P.scissor),z=P.scissorTest}else D.copy(fe).multiplyScalar(F).floor(),U.copy(Me).multiplyScalar(F).floor(),z=Se;if(re!==0&&(te=zu),Q.bindFramebuffer(L.FRAMEBUFFER,te)&&ce&&Q.drawBuffers(P,te),Q.viewport(D),Q.scissor(U),Q.setScissorTest(z),_e){const Ie=I.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie.__webglTexture,re)}else if(Ce){const Ie=ee;for(let Ve=0;Ve<P.textures.length;Ve++){const Xe=I.get(P.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,re,Ie)}}else if(P!==null&&re!==0){const Ie=I.get(P.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,re)}M=-1},this.readRenderTargetPixels=function(P,ee,re,ce,te,_e,Ce,Fe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Q.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Ve=P.textures[Fe],Xe=Ve.format,ke=Ve.type;if(!$.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-ce&&re>=0&&re<=P.height-te&&(P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(ee,re,ce,te,Be.convert(Xe),Be.convert(ke),_e))}finally{const Ve=R!==null?I.get(R).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,ee,re,ce,te,_e,Ce,Fe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(ee>=0&&ee<=P.width-ce&&re>=0&&re<=P.height-te){Q.bindFramebuffer(L.FRAMEBUFFER,Ie);const Ve=P.textures[Fe],Xe=Ve.format,ke=Ve.type;if(!$.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),P.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Fe),L.readPixels(ee,re,ce,te,Be.convert(Xe),Be.convert(ke),0);const at=R!==null?I.get(R).__webglFramebuffer:null;Q.bindFramebuffer(L.FRAMEBUFFER,at);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zf(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer($e),L.deleteSync(_t),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ee=null,re=0){const ce=Math.pow(2,-re),te=Math.floor(P.image.width*ce),_e=Math.floor(P.image.height*ce),Ce=ee!==null?ee.x:0,Fe=ee!==null?ee.y:0;se.setTexture2D(P,0),L.copyTexSubImage2D(L.TEXTURE_2D,re,0,0,Ce,Fe,te,_e),Q.unbindTexture()};const ku=L.createFramebuffer(),Hu=L.createFramebuffer();this.copyTextureToTexture=function(P,ee,re=null,ce=null,te=0,_e=null){_e===null&&(te!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=te,te=0):_e=0);let Ce,Fe,Ie,Ve,Xe,ke,$e,at,_t;const ft=P.isCompressedTexture?P.mipmaps[_e]:P.image;if(re!==null)Ce=re.max.x-re.min.x,Fe=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,Ve=re.min.x,Xe=re.min.y,ke=re.isBox3?re.min.z:0;else{const Kt=Math.pow(2,-te);Ce=Math.floor(ft.width*Kt),Fe=Math.floor(ft.height*Kt),P.isDataArrayTexture?Ie=ft.depth:P.isData3DTexture?Ie=Math.floor(ft.depth*Kt):Ie=1,Ve=0,Xe=0,ke=0}ce!==null?($e=ce.x,at=ce.y,_t=ce.z):($e=0,at=0,_t=0);const ht=Be.convert(ee.format),He=Be.convert(ee.type);let pt;ee.isData3DTexture?(se.setTexture3D(ee,0),pt=L.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(se.setTexture2DArray(ee,0),pt=L.TEXTURE_2D_ARRAY):(se.setTexture2D(ee,0),pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,ee.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,ee.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),Gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ai=L.getParameter(L.UNPACK_SKIP_PIXELS),Wt=L.getParameter(L.UNPACK_SKIP_ROWS),gs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const mt=P.isDataArrayTexture||P.isData3DTexture,jt=ee.isDataArrayTexture||ee.isData3DTexture;if(P.isDepthTexture){const Kt=I.get(P),It=I.get(ee),Bt=I.get(Kt.__renderTarget),co=I.get(It.__renderTarget);Q.bindFramebuffer(L.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let ci=0;ci<Ie;ci++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,I.get(P).__webglTexture,te,ke+ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,I.get(ee).__webglTexture,_e,_t+ci)),L.blitFramebuffer(Ve,Xe,Ce,Fe,$e,at,Ce,Fe,L.DEPTH_BUFFER_BIT,L.NEAREST);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(te!==0||P.isRenderTargetTexture||I.has(P)){const Kt=I.get(P),It=I.get(ee);Q.bindFramebuffer(L.READ_FRAMEBUFFER,ku),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hu);for(let Bt=0;Bt<Ie;Bt++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kt.__webglTexture,te,ke+Bt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kt.__webglTexture,te),jt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,_e,_t+Bt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,_e),te!==0?L.blitFramebuffer(Ve,Xe,Ce,Fe,$e,at,Ce,Fe,L.COLOR_BUFFER_BIT,L.NEAREST):jt?L.copyTexSubImage3D(pt,_e,$e,at,_t+Bt,Ve,Xe,Ce,Fe):L.copyTexSubImage2D(pt,_e,$e,at,Ve,Xe,Ce,Fe);Q.bindFramebuffer(L.READ_FRAMEBUFFER,null),Q.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else jt?P.isDataTexture||P.isData3DTexture?L.texSubImage3D(pt,_e,$e,at,_t,Ce,Fe,Ie,ht,He,ft.data):ee.isCompressedArrayTexture?L.compressedTexSubImage3D(pt,_e,$e,at,_t,Ce,Fe,Ie,ht,ft.data):L.texSubImage3D(pt,_e,$e,at,_t,Ce,Fe,Ie,ht,He,ft):P.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,$e,at,Ce,Fe,ht,He,ft.data):P.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,$e,at,ft.width,ft.height,ht,ft.data):L.texSubImage2D(L.TEXTURE_2D,_e,$e,at,Ce,Fe,ht,He,ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,gs),_e===0&&ee.generateMipmaps&&L.generateMipmap(pt),Q.unbindTexture()},this.initRenderTarget=function(P){I.get(P).__webglFramebuffer===void 0&&se.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?se.setTextureCube(P,0):P.isData3DTexture?se.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?se.setTexture2DArray(P,0):se.setTexture2D(P,0),Q.unbindTexture()},this.resetState=function(){S=0,A=0,R=null,Q.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Ax(s){const e={frostMap:{value:null},frostRect:{value:new Qe},frostRadius:{value:12},frostLod:{value:0}};s.material.userData.frost=e;const t=new ue,n=new ue,i=new k;let r;s.onBeforeRender=(o,a,c)=>{o.getDrawingBufferSize(t),s.geometry.boundingSphere||s.geometry.computeBoundingSphere();const l=s.userData.actor,h=s.geometry.boundingSphere.radius*(l?.baseSize||1)*1.55*2*t.x/(c.right-c.left),f=Math.min(t.x,Math.ceil((h+64)/64)*64),d=Math.min(t.y,Math.ceil((h+64)/64)*64);(!r||r.image.width!==f||r.image.height!==d)&&(r?.dispose(),r=new Dd(f,d),r.magFilter=Vt,r.minFilter=Sn,e.frostMap.value=r),i.copy(s.geometry.boundingSphere.center).applyMatrix4(s.matrixWorld).project(c),n.set(Math.max(0,Math.min(t.x-f,Math.floor((i.x*.5+.5)*t.x-f/2))),Math.max(0,Math.min(t.y-d,Math.floor((i.y*.5+.5)*t.y-d/2)))),e.frostRect.value.set(n.x,n.y,f,d),e.frostRadius.value=Math.max(10,Math.min(28,h*.055)),o.copyFramebufferToTexture(r,n);const m=o.getContext();o.state.bindTexture(m.TEXTURE_2D,o.properties.get(r).__webglTexture),m.generateMipmap(m.TEXTURE_2D),o.state.unbindTexture(),e.frostLod.value=Math.max(0,Math.log2(e.frostRadius.value*1.2))},s.material.addEventListener("dispose",()=>r?.dispose())}function Rx(s){if(s.noSeam)return s;const e=s.positions.slice(),t=s.rim.length,n=new Set(s.rim),i=s.rim.map(f=>({x:e[f*3],y:e[f*3+1]})),r=i.map((f,d)=>{const m=i[(d+t-2)%t],_=i[(d+2)%t],g=_.x-m.x,p=_.y-m.y,v=Math.hypot(g,p)||1,x=d/t*Math.PI*2;return{p:f,nx:p/v,ny:-g/v,width:.015+.001*Math.sin(x*3+.8),curl:.005*Math.sin(x*18)+.003*Math.sin(x*33+.4)}}),o=s.rim.map(f=>f-t),a=s.rim.map(f=>f+t);function c(f,d,m){for(let _=0;_<t;_++){const{p:g,nx:p,ny:v,width:x,curl:y}=r[_],E=f[_]*3;e[E]=g.x+p*x*d,e[E+1]=g.y+v*x*d,e[E+2]=.4+y*d*d+m*.0016*(1-d*d)}}c(o,0,1),c(a,0,-1),c(s.rim,1,0);const l=(f,d)=>{const m=Array.from({length:t},()=>{const _=e.length/3;return e.push(0,0,0),_});return c(m,f,d),m},u=[o,l(.25,1),l(.55,1),l(.8,1),s.rim,l(.8,-1),l(.55,-1),l(.25,-1),a],h=[];for(let f=0;f<s.triangles.length;f+=3){const d=s.triangles.slice(f,f+3);d.some(m=>n.has(m))||h.push(...d)}for(let f=0;f<u.length-1;f++)for(let d=0;d<t;d++){const m=(d+1)%t,_=u[f][d],g=u[f][m],p=u[f+1][d],v=u[f+1][m];h.push(_,p,g,g,p,v)}return{...s,positions:e,triangles:h}}const Cx=St;class Zr extends wi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){const r=this,o=new Rc(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this;function n(Y,O){if(Y.nodeType!==1)return;const C=y(Y);let w=!1,X=null;switch(Y.nodeName){case"svg":O=m(Y,O);break;case"style":r(Y);break;case"g":O=m(Y,O);break;case"path":O=m(Y,O),Y.hasAttribute("d")&&(X=i(Y));break;case"rect":O=m(Y,O),X=c(Y);break;case"polygon":O=m(Y,O),X=l(Y);break;case"polyline":O=m(Y,O),X=u(Y);break;case"circle":O=m(Y,O),X=h(Y);break;case"ellipse":O=m(Y,O),X=f(Y);break;case"line":O=m(Y,O),X=d(Y);break;case"defs":w=!0;break;case"use":O=m(Y,O);const le=(Y.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),me=Y.viewportElement.getElementById(le);me?n(me,O):console.warn("SVGLoader: 'use node' references non-existent node id: "+le);break}X&&(O.fill!==void 0&&O.fill!=="none"&&X.color.setStyle(O.fill,Cx),S(X,fe),U.push(X),X.userData={node:Y,style:O});const ne=Y.childNodes;for(let V=0;V<ne.length;V++){const le=ne[V];w&&le.nodeName!=="style"&&le.nodeName!=="defs"||n(le,O)}C&&(q.pop(),q.length>0?fe.copy(q[q.length-1]):fe.identity())}function i(Y){const O=new di,C=new ue,w=new ue,X=new ue;let ne=!0,V=!1;const le=Y.getAttribute("d");if(le===""||le==="none")return null;const me=le.match(/[a-df-z][^a-df-z]*/ig);for(let L=0,H=me.length;L<H;L++){const K=me[L],$=K.charAt(0),Q=K.slice(1).trim();ne===!0&&(V=!0,ne=!1);let B;switch($){case"M":B=g(Q);for(let I=0,se=B.length;I<se;I+=2)C.x=B[I+0],C.y=B[I+1],w.x=C.x,w.y=C.y,I===0?O.moveTo(C.x,C.y):O.lineTo(C.x,C.y),I===0&&X.copy(C);break;case"H":B=g(Q);for(let I=0,se=B.length;I<se;I++)C.x=B[I],w.x=C.x,w.y=C.y,O.lineTo(C.x,C.y),I===0&&V===!0&&X.copy(C);break;case"V":B=g(Q);for(let I=0,se=B.length;I<se;I++)C.y=B[I],w.x=C.x,w.y=C.y,O.lineTo(C.x,C.y),I===0&&V===!0&&X.copy(C);break;case"L":B=g(Q);for(let I=0,se=B.length;I<se;I+=2)C.x=B[I+0],C.y=B[I+1],w.x=C.x,w.y=C.y,O.lineTo(C.x,C.y),I===0&&V===!0&&X.copy(C);break;case"C":B=g(Q);for(let I=0,se=B.length;I<se;I+=6)O.bezierCurveTo(B[I+0],B[I+1],B[I+2],B[I+3],B[I+4],B[I+5]),w.x=B[I+2],w.y=B[I+3],C.x=B[I+4],C.y=B[I+5],I===0&&V===!0&&X.copy(C);break;case"S":B=g(Q);for(let I=0,se=B.length;I<se;I+=4)O.bezierCurveTo(_(C.x,w.x),_(C.y,w.y),B[I+0],B[I+1],B[I+2],B[I+3]),w.x=B[I+0],w.y=B[I+1],C.x=B[I+2],C.y=B[I+3],I===0&&V===!0&&X.copy(C);break;case"Q":B=g(Q);for(let I=0,se=B.length;I<se;I+=4)O.quadraticCurveTo(B[I+0],B[I+1],B[I+2],B[I+3]),w.x=B[I+0],w.y=B[I+1],C.x=B[I+2],C.y=B[I+3],I===0&&V===!0&&X.copy(C);break;case"T":B=g(Q);for(let I=0,se=B.length;I<se;I+=2){const be=_(C.x,w.x),Ue=_(C.y,w.y);O.quadraticCurveTo(be,Ue,B[I+0],B[I+1]),w.x=be,w.y=Ue,C.x=B[I+0],C.y=B[I+1],I===0&&V===!0&&X.copy(C)}break;case"A":B=g(Q,[3,4],7);for(let I=0,se=B.length;I<se;I+=7){if(B[I+5]==C.x&&B[I+6]==C.y)continue;const be=C.clone();C.x=B[I+5],C.y=B[I+6],w.x=C.x,w.y=C.y,o(O,B[I],B[I+1],B[I+2],B[I+3],B[I+4],be,C),I===0&&V===!0&&X.copy(C)}break;case"m":B=g(Q);for(let I=0,se=B.length;I<se;I+=2)C.x+=B[I+0],C.y+=B[I+1],w.x=C.x,w.y=C.y,I===0?O.moveTo(C.x,C.y):O.lineTo(C.x,C.y),I===0&&X.copy(C);break;case"h":B=g(Q);for(let I=0,se=B.length;I<se;I++)C.x+=B[I],w.x=C.x,w.y=C.y,O.lineTo(C.x,C.y),I===0&&V===!0&&X.copy(C);break;case"v":B=g(Q);for(let I=0,se=B.length;I<se;I++)C.y+=B[I],w.x=C.x,w.y=C.y,O.lineTo(C.x,C.y),I===0&&V===!0&&X.copy(C);break;case"l":B=g(Q);for(let I=0,se=B.length;I<se;I+=2)C.x+=B[I+0],C.y+=B[I+1],w.x=C.x,w.y=C.y,O.lineTo(C.x,C.y),I===0&&V===!0&&X.copy(C);break;case"c":B=g(Q);for(let I=0,se=B.length;I<se;I+=6)O.bezierCurveTo(C.x+B[I+0],C.y+B[I+1],C.x+B[I+2],C.y+B[I+3],C.x+B[I+4],C.y+B[I+5]),w.x=C.x+B[I+2],w.y=C.y+B[I+3],C.x+=B[I+4],C.y+=B[I+5],I===0&&V===!0&&X.copy(C);break;case"s":B=g(Q);for(let I=0,se=B.length;I<se;I+=4)O.bezierCurveTo(_(C.x,w.x),_(C.y,w.y),C.x+B[I+0],C.y+B[I+1],C.x+B[I+2],C.y+B[I+3]),w.x=C.x+B[I+0],w.y=C.y+B[I+1],C.x+=B[I+2],C.y+=B[I+3],I===0&&V===!0&&X.copy(C);break;case"q":B=g(Q);for(let I=0,se=B.length;I<se;I+=4)O.quadraticCurveTo(C.x+B[I+0],C.y+B[I+1],C.x+B[I+2],C.y+B[I+3]),w.x=C.x+B[I+0],w.y=C.y+B[I+1],C.x+=B[I+2],C.y+=B[I+3],I===0&&V===!0&&X.copy(C);break;case"t":B=g(Q);for(let I=0,se=B.length;I<se;I+=2){const be=_(C.x,w.x),Ue=_(C.y,w.y);O.quadraticCurveTo(be,Ue,C.x+B[I+0],C.y+B[I+1]),w.x=be,w.y=Ue,C.x=C.x+B[I+0],C.y=C.y+B[I+1],I===0&&V===!0&&X.copy(C)}break;case"a":B=g(Q,[3,4],7);for(let I=0,se=B.length;I<se;I+=7){if(B[I+5]==0&&B[I+6]==0)continue;const be=C.clone();C.x+=B[I+5],C.y+=B[I+6],w.x=C.x,w.y=C.y,o(O,B[I],B[I+1],B[I+2],B[I+3],B[I+4],be,C),I===0&&V===!0&&X.copy(C)}break;case"Z":case"z":O.currentPath.autoClose=!0,O.currentPath.curves.length>0&&(C.copy(X),O.currentPath.currentPoint.copy(C),ne=!0);break;default:console.warn(K)}V=!1}return O}function r(Y){if(!(!Y.sheet||!Y.sheet.cssRules||!Y.sheet.cssRules.length))for(let O=0;O<Y.sheet.cssRules.length;O++){const C=Y.sheet.cssRules[O];if(C.type!==1)continue;const w=C.selectorText.split(/,/gm).filter(Boolean).map(X=>X.trim());for(let X=0;X<w.length;X++){const ne=Object.fromEntries(Object.entries(C.style).filter(([,V])=>V!==""));z[w[X]]=Object.assign(z[w[X]]||{},ne)}}}function o(Y,O,C,w,X,ne,V,le){if(O==0||C==0){Y.lineTo(le.x,le.y);return}w=w*Math.PI/180,O=Math.abs(O),C=Math.abs(C);const me=(V.x-le.x)/2,L=(V.y-le.y)/2,H=Math.cos(w)*me+Math.sin(w)*L,K=-Math.sin(w)*me+Math.cos(w)*L;let $=O*O,Q=C*C;const B=H*H,I=K*K,se=B/$+I/Q;if(se>1){const ye=Math.sqrt(se);O=ye*O,C=ye*C,$=O*O,Q=C*C}const be=$*I+Q*B,Ue=($*Q-be)/be;let N=Math.sqrt(Math.max(0,Ue));X===ne&&(N=-N);const T=N*O*K/C,Z=-N*C*H/O,ie=Math.cos(w)*T-Math.sin(w)*Z+(V.x+le.x)/2,de=Math.sin(w)*T+Math.cos(w)*Z+(V.y+le.y)/2,ae=a(1,0,(H-T)/O,(K-Z)/C),Pe=a((H-T)/O,(K-Z)/C,(-H-T)/O,(-K-Z)/C)%(Math.PI*2);Y.currentPath.absellipse(ie,de,O,C,ae,ae+Pe,ne===0,w)}function a(Y,O,C,w){const X=Y*C+O*w,ne=Math.sqrt(Y*Y+O*O)*Math.sqrt(C*C+w*w);let V=Math.acos(Math.max(-1,Math.min(1,X/ne)));return Y*w-O*C<0&&(V=-V),V}function c(Y){const O=x(Y.getAttribute("x")||0),C=x(Y.getAttribute("y")||0),w=x(Y.getAttribute("rx")||Y.getAttribute("ry")||0),X=x(Y.getAttribute("ry")||Y.getAttribute("rx")||0),ne=x(Y.getAttribute("width")),V=x(Y.getAttribute("height")),le=1-.551915024494,me=new di;return me.moveTo(O+w,C),me.lineTo(O+ne-w,C),(w!==0||X!==0)&&me.bezierCurveTo(O+ne-w*le,C,O+ne,C+X*le,O+ne,C+X),me.lineTo(O+ne,C+V-X),(w!==0||X!==0)&&me.bezierCurveTo(O+ne,C+V-X*le,O+ne-w*le,C+V,O+ne-w,C+V),me.lineTo(O+w,C+V),(w!==0||X!==0)&&me.bezierCurveTo(O+w*le,C+V,O,C+V-X*le,O,C+V-X),me.lineTo(O,C+X),(w!==0||X!==0)&&me.bezierCurveTo(O,C+X*le,O+w*le,C,O+w,C),me}function l(Y){function O(ne,V,le){const me=x(V),L=x(le);X===0?w.moveTo(me,L):w.lineTo(me,L),X++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new di;let X=0;return Y.getAttribute("points").replace(C,O),w.currentPath.autoClose=!0,w}function u(Y){function O(ne,V,le){const me=x(V),L=x(le);X===0?w.moveTo(me,L):w.lineTo(me,L),X++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new di;let X=0;return Y.getAttribute("points").replace(C,O),w.currentPath.autoClose=!1,w}function h(Y){const O=x(Y.getAttribute("cx")||0),C=x(Y.getAttribute("cy")||0),w=x(Y.getAttribute("r")||0),X=new Ki;X.absarc(O,C,w,0,Math.PI*2);const ne=new di;return ne.subPaths.push(X),ne}function f(Y){const O=x(Y.getAttribute("cx")||0),C=x(Y.getAttribute("cy")||0),w=x(Y.getAttribute("rx")||0),X=x(Y.getAttribute("ry")||0),ne=new Ki;ne.absellipse(O,C,w,X,0,Math.PI*2);const V=new di;return V.subPaths.push(ne),V}function d(Y){const O=x(Y.getAttribute("x1")||0),C=x(Y.getAttribute("y1")||0),w=x(Y.getAttribute("x2")||0),X=x(Y.getAttribute("y2")||0),ne=new di;return ne.moveTo(O,C),ne.lineTo(w,X),ne.currentPath.autoClose=!1,ne}function m(Y,O){O=Object.assign({},O);let C={};if(Y.hasAttribute("class")){const V=Y.getAttribute("class").split(/\s/).filter(Boolean).map(le=>le.trim());for(let le=0;le<V.length;le++)C=Object.assign(C,z["."+V[le]])}Y.hasAttribute("id")&&(C=Object.assign(C,z["#"+Y.getAttribute("id")]));function w(V,le,me){me===void 0&&(me=function(H){return H.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),H}),Y.hasAttribute(V)&&(O[le]=me(Y.getAttribute(V))),C[V]&&(O[le]=me(C[V])),Y.style&&Y.style[V]!==""&&(O[le]=me(Y.style[V]))}function X(V){return Math.max(0,Math.min(1,x(V)))}function ne(V){return Math.max(0,x(V))}return w("fill","fill"),w("fill-opacity","fillOpacity",X),w("fill-rule","fillRule"),w("opacity","opacity",X),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",X),w("stroke-width","strokeWidth",ne),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ne),w("visibility","visibility"),O}function _(Y,O){return Y-(O-Y)}function g(Y,O,C){if(typeof Y!="string")throw new TypeError("Invalid input: "+typeof Y);const w={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},X=0,ne=1,V=2,le=3;let me=X,L=!0,H="",K="";const $=[];function Q(be,Ue,N){const T=new SyntaxError('Unexpected character "'+be+'" at index '+Ue+".");throw T.partial=N,T}function B(){H!==""&&(K===""?$.push(Number(H)):$.push(Number(H)*Math.pow(10,Number(K)))),H="",K=""}let I;const se=Y.length;for(let be=0;be<se;be++){if(I=Y[be],Array.isArray(O)&&O.includes($.length%C)&&w.FLAGS.test(I)){me=ne,H=I,B();continue}if(me===X){if(w.WHITESPACE.test(I))continue;if(w.DIGIT.test(I)||w.SIGN.test(I)){me=ne,H=I;continue}if(w.POINT.test(I)){me=V,H=I;continue}w.COMMA.test(I)&&(L&&Q(I,be,$),L=!0)}if(me===ne){if(w.DIGIT.test(I)){H+=I;continue}if(w.POINT.test(I)){H+=I,me=V;continue}if(w.EXP.test(I)){me=le;continue}w.SIGN.test(I)&&H.length===1&&w.SIGN.test(H[0])&&Q(I,be,$)}if(me===V){if(w.DIGIT.test(I)){H+=I;continue}if(w.EXP.test(I)){me=le;continue}w.POINT.test(I)&&H[H.length-1]==="."&&Q(I,be,$)}if(me===le){if(w.DIGIT.test(I)){K+=I;continue}if(w.SIGN.test(I)){if(K===""){K+=I;continue}K.length===1&&w.SIGN.test(K)&&Q(I,be,$)}}w.WHITESPACE.test(I)?(B(),me=X,L=!1):w.COMMA.test(I)?(B(),me=X,L=!0):w.SIGN.test(I)?(B(),me=ne,H=I):w.POINT.test(I)?(B(),me=V,H=I):Q(I,be,$)}return B(),$}const p=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(Y){let O="px";if(typeof Y=="string"||Y instanceof String)for(let w=0,X=p.length;w<X;w++){const ne=p[w];if(Y.endsWith(ne)){O=ne,Y=Y.substring(0,Y.length-ne.length);break}}let C;return O==="px"&&t.defaultUnit!=="px"?C=v.in[t.defaultUnit]/t.defaultDPI:(C=v[O][t.defaultUnit],C<0&&(C=v[O].in*t.defaultDPI)),C*parseFloat(Y)}function y(Y){if(!(Y.hasAttribute("transform")||Y.nodeName==="use"&&(Y.hasAttribute("x")||Y.hasAttribute("y"))))return null;const O=E(Y);return q.length>0&&O.premultiply(q[q.length-1]),fe.copy(O),q.push(O),O}function E(Y){const O=new We,C=W;if(Y.nodeName==="use"&&(Y.hasAttribute("x")||Y.hasAttribute("y"))){const w=x(Y.getAttribute("x")),X=x(Y.getAttribute("y"));O.translate(w,X)}if(Y.hasAttribute("transform")){const w=Y.getAttribute("transform").split(")");for(let X=w.length-1;X>=0;X--){const ne=w[X].trim();if(ne==="")continue;const V=ne.indexOf("("),le=ne.length;if(V>0&&V<le){const me=ne.slice(0,V),L=g(ne.slice(V+1));switch(C.identity(),me){case"translate":if(L.length>=1){const H=L[0];let K=0;L.length>=2&&(K=L[1]),C.translate(H,K)}break;case"rotate":if(L.length>=1){let H=0,K=0,$=0;H=L[0]*Math.PI/180,L.length>=3&&(K=L[1],$=L[2]),G.makeTranslation(-K,-$),j.makeRotation(H),F.multiplyMatrices(j,G),G.makeTranslation(K,$),C.multiplyMatrices(G,F)}break;case"scale":if(L.length>=1){const H=L[0];let K=H;L.length>=2&&(K=L[1]),C.scale(H,K)}break;case"skewX":L.length===1&&C.set(1,Math.tan(L[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":L.length===1&&C.set(1,0,0,Math.tan(L[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":L.length===6&&C.set(L[0],L[2],L[4],L[1],L[3],L[5],0,0,1);break}}O.premultiply(C)}}return O}function S(Y,O){function C(V){he.set(V.x,V.y,1).applyMatrix3(O),V.set(he.x,he.y)}function w(V){const le=V.xRadius,me=V.yRadius,L=Math.cos(V.aRotation),H=Math.sin(V.aRotation),K=new k(le*L,le*H,0),$=new k(-me*H,me*L,0),Q=K.applyMatrix3(O),B=$.applyMatrix3(O),I=W.set(Q.x,B.x,0,Q.y,B.y,0,0,0,1),se=G.copy(I).invert(),N=j.copy(se).transpose().multiply(se).elements,T=D(N[0],N[1],N[4]),Z=Math.sqrt(T.rt1),ie=Math.sqrt(T.rt2);if(V.xRadius=1/Z,V.yRadius=1/ie,V.aRotation=Math.atan2(T.sn,T.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ae=G.set(Z,0,0,0,ie,0,0,0,1),Pe=j.set(T.cs,T.sn,0,-T.sn,T.cs,0,0,0,1),ye=ae.multiply(Pe).multiply(I),Le=De=>{const{x:ge,y:Ae}=new k(Math.cos(De),Math.sin(De),0).applyMatrix3(ye);return Math.atan2(Ae,ge)};V.aStartAngle=Le(V.aStartAngle),V.aEndAngle=Le(V.aEndAngle),A(O)&&(V.aClockwise=!V.aClockwise)}}function X(V){const le=M(O),me=b(O);V.xRadius*=le,V.yRadius*=me;const L=le>Number.EPSILON?Math.atan2(O.elements[1],O.elements[0]):Math.atan2(-O.elements[3],O.elements[4]);V.aRotation+=L,A(O)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const ne=Y.subPaths;for(let V=0,le=ne.length;V<le;V++){const L=ne[V].curves;for(let H=0;H<L.length;H++){const K=L[H];K.isLineCurve?(C(K.v1),C(K.v2)):K.isCubicBezierCurve?(C(K.v0),C(K.v1),C(K.v2),C(K.v3)):K.isQuadraticBezierCurve?(C(K.v0),C(K.v1),C(K.v2)):K.isEllipseCurve&&(oe.set(K.aX,K.aY),C(oe),K.aX=oe.x,K.aY=oe.y,R(O)?w(K):X(K))}}}function A(Y){const O=Y.elements;return O[0]*O[4]-O[1]*O[3]<0}function R(Y){const O=Y.elements,C=O[0]*O[3]+O[1]*O[4];if(C===0)return!1;const w=M(Y),X=b(Y);return Math.abs(C/(w*X))>Number.EPSILON}function M(Y){const O=Y.elements;return Math.sqrt(O[0]*O[0]+O[1]*O[1])}function b(Y){const O=Y.elements;return Math.sqrt(O[3]*O[3]+O[4]*O[4])}function D(Y,O,C){let w,X,ne,V,le;const me=Y+C,L=Y-C,H=Math.sqrt(L*L+4*O*O);return me>0?(w=.5*(me+H),le=1/w,X=Y*le*C-O*le*O):me<0?X=.5*(me-H):(w=.5*H,X=-.5*H),L>0?ne=L+H:ne=L-H,Math.abs(ne)>2*Math.abs(O)?(le=-2*O/ne,V=1/Math.sqrt(1+le*le),ne=le*V):Math.abs(O)===0?(ne=1,V=0):(le=-.5*ne/O,ne=1/Math.sqrt(1+le*le),V=le*ne),L>0&&(le=ne,ne=-V,V=le),{rt1:w,rt2:X,cs:ne,sn:V}}const U=[],z={},q=[],W=new We,G=new We,j=new We,F=new We,oe=new ue,he=new k,fe=new We,Me=new DOMParser().parseFromString(e,"image/svg+xml");return n(Me.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:U,xml:Me.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},i={loc:n.ORIGIN,t:0};function r(_,g,p,v){const x=_.x,y=g.x,E=p.x,S=v.x,A=_.y,R=g.y,M=p.y,b=v.y,D=(S-E)*(A-M)-(b-M)*(x-E),U=(y-x)*(A-M)-(R-A)*(x-E),z=(b-M)*(y-x)-(S-E)*(R-A),q=D/z,W=U/z;if(z===0&&D!==0||q<=0||q>=1||W<0||W>1)return null;if(D===0&&z===0){for(let G=0;G<2;G++)if(o(G===0?p:v,_,g),i.loc==n.ORIGIN){const j=G===0?p:v;return{x:j.x,y:j.y,t:i.t}}else if(i.loc==n.BETWEEN){const j=+(x+i.t*(y-x)).toPrecision(10),F=+(A+i.t*(R-A)).toPrecision(10);return{x:j,y:F,t:i.t}}return null}else{for(let F=0;F<2;F++)if(o(F===0?p:v,_,g),i.loc==n.ORIGIN){const oe=F===0?p:v;return{x:oe.x,y:oe.y,t:i.t}}const G=+(x+q*(y-x)).toPrecision(10),j=+(A+q*(R-A)).toPrecision(10);return{x:G,y:j,t:q}}}function o(_,g,p){const v=p.x-g.x,x=p.y-g.y,y=_.x-g.x,E=_.y-g.y,S=v*E-y*x;if(_.x===g.x&&_.y===g.y){i.loc=n.ORIGIN,i.t=0;return}if(_.x===p.x&&_.y===p.y){i.loc=n.DESTINATION,i.t=1;return}if(S<-Number.EPSILON){i.loc=n.LEFT;return}if(S>Number.EPSILON){i.loc=n.RIGHT;return}if(v*y<0||x*E<0){i.loc=n.BEHIND;return}if(Math.sqrt(v*v+x*x)<Math.sqrt(y*y+E*E)){i.loc=n.BEYOND;return}let A;v!==0?A=y/v:A=E/x,i.loc=n.BETWEEN,i.t=A}function a(_,g){const p=[],v=[];for(let x=1;x<_.length;x++){const y=_[x-1],E=_[x];for(let S=1;S<g.length;S++){const A=g[S-1],R=g[S],M=r(y,E,A,R);M!==null&&p.find(b=>b.t<=M.t+Number.EPSILON&&b.t>=M.t-Number.EPSILON)===void 0&&(p.push(M),v.push(new ue(M.x,M.y)))}}return v}function c(_,g,p){const v=new ue;g.getCenter(v);const x=[];return p.forEach(y=>{y.boundingBox.containsPoint(v)&&a(_,y.points).forEach(S=>{x.push({identifier:y.identifier,isCW:y.isCW,point:S})})}),x.sort((y,E)=>y.point.x-E.point.x),x}function l(_,g,p,v,x){(x==null||x==="")&&(x="nonzero");const y=new ue;_.boundingBox.getCenter(y);const E=[new ue(p,y.y),new ue(v,y.y)],S=c(E,_.boundingBox,g);S.sort((U,z)=>U.point.x-z.point.x);const A=[],R=[];S.forEach(U=>{U.identifier===_.identifier?A.push(U):R.push(U)});const M=A[0].point.x,b=[];let D=0;for(;D<R.length&&R[D].point.x<M;)b.length>0&&b[b.length-1]===R[D].identifier?b.pop():b.push(R[D].identifier),D++;if(b.push(_.identifier),x==="evenodd"){const U=b.length%2===0,z=b[b.length-2];return{identifier:_.identifier,isHole:U,for:z}}else if(x==="nonzero"){let U=!0,z=null,q=null;for(let W=0;W<b.length;W++){const G=b[W];U?(q=g[G].isCW,U=!1,z=G):q!==g[G].isCW&&(q=g[G].isCW,U=!0)}return{identifier:_.identifier,isHole:U,for:z}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(_=>{const g=_.getPoints();let p=-999999999,v=999999999,x=-999999999,y=999999999;for(let E=0;E<g.length;E++){const S=g[E];S.y>p&&(p=S.y),S.y<v&&(v=S.y),S.x>x&&(x=S.x),S.x<y&&(y=S.x)}return h<=x&&(h=x+1),u>=y&&(u=y-1),{curves:_.curves,points:g,isCW:en.isClockWise(g),identifier:-1,boundingBox:new Wp(new ue(y,v),new ue(x,p))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const d=f.map(_=>l(_,f,u,h,e.userData?e.userData.style.fillRule:void 0)),m=[];return f.forEach(_=>{if(!d[_.identifier].isHole){const p=new si;p.curves=_.curves,d.filter(x=>x.isHole&&x.for===_.identifier).forEach(x=>{const y=f[x.identifier],E=new Ki;E.curves=y.curves,p.holes.push(E)}),m.push(p)}}),m}static getStrokeStyle(e,t,n,i,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(e,t,n,i){const r=[],o=[],a=[];if(Zr.pointsToStrokeWithBuffers(e,t,n,i,r,o,a)===0)return null;const c=new Mt;return c.setAttribute("position",new lt(r,3)),c.setAttribute("normal",new lt(o,3)),c.setAttribute("uv",new lt(a,2)),c}static pointsToStrokeWithBuffers(e,t,n,i,r,o,a,c){const l=new ue,u=new ue,h=new ue,f=new ue,d=new ue,m=new ue,_=new ue,g=new ue,p=new ue,v=new ue,x=new ue,y=new ue,E=new ue,S=new ue,A=new ue,R=new ue,M=new ue;n=n!==void 0?n:12,i=i!==void 0?i:.001,c=c!==void 0?c:0,e=L(e);const b=e.length;if(b<2)return 0;const D=e[0].equals(e[b-1]);let U,z=e[0],q;const W=t.strokeWidth/2,G=1/(b-1);let j=0,F,oe,he,fe,Me=!1,Se=0,Y=c*3,O=c*2;C(e[0],e[1],l).multiplyScalar(W),g.copy(e[0]).sub(l),p.copy(e[0]).add(l),v.copy(g),x.copy(p);for(let H=1;H<b;H++){U=e[H],H===b-1?D?q=e[1]:q=void 0:q=e[H+1];const K=l;if(C(z,U,K),h.copy(K).multiplyScalar(W),y.copy(U).sub(h),E.copy(U).add(h),F=j+G,oe=!1,q!==void 0){C(U,q,u),h.copy(u).multiplyScalar(W),S.copy(U).sub(h),A.copy(U).add(h),he=!0,h.subVectors(q,z),K.dot(h)<0&&(he=!1),H===1&&(Me=he),h.subVectors(q,U),h.normalize();const $=Math.abs(K.dot(h));if($>Number.EPSILON){const Q=W/$;h.multiplyScalar(-Q),f.subVectors(U,z),d.copy(f).setLength(Q).add(h),R.copy(d).negate();const B=d.length(),I=f.length();f.divideScalar(I),m.subVectors(q,U);const se=m.length();switch(m.divideScalar(se),f.dot(R)<I&&m.dot(R)<se&&(oe=!0),M.copy(d).add(U),R.add(U),fe=!1,oe?he?(A.copy(R),E.copy(R)):(S.copy(R),y.copy(R)):ne(),t.strokeLineJoin){case"bevel":V(he,oe,F);break;case"round":le(he,oe),he?X(U,y,S,F,0):X(U,A,E,F,1);break;default:const be=W*t.strokeMiterLimit/B;if(be<1)if(t.strokeLineJoin!=="miter-clip"){V(he,oe,F);break}else le(he,oe),he?(m.subVectors(M,y).multiplyScalar(be).add(y),_.subVectors(M,S).multiplyScalar(be).add(S),w(y,F,0),w(m,F,0),w(U,F,.5),w(U,F,.5),w(m,F,0),w(_,F,0),w(U,F,.5),w(_,F,0),w(S,F,0)):(m.subVectors(M,E).multiplyScalar(be).add(E),_.subVectors(M,A).multiplyScalar(be).add(A),w(E,F,1),w(m,F,1),w(U,F,.5),w(U,F,.5),w(m,F,1),w(_,F,1),w(U,F,.5),w(_,F,1),w(A,F,1));else oe?(he?(w(p,j,1),w(g,j,0),w(M,F,0),w(p,j,1),w(M,F,0),w(R,F,1)):(w(p,j,1),w(g,j,0),w(M,F,1),w(g,j,0),w(R,F,0),w(M,F,1)),he?S.copy(M):A.copy(M)):he?(w(y,F,0),w(M,F,0),w(U,F,.5),w(U,F,.5),w(M,F,0),w(S,F,0)):(w(E,F,1),w(M,F,1),w(U,F,.5),w(U,F,.5),w(M,F,1),w(A,F,1)),fe=!0;break}}else ne()}else ne();!D&&H===b-1&&me(e[0],v,x,he,!0,j),j=F,z=U,g.copy(S),p.copy(A)}if(!D)me(U,y,E,he,!1,F);else if(oe&&r){let H=M,K=R;Me!==he&&(H=R,K=M),he?(fe||Me)&&(K.toArray(r,0),K.toArray(r,9),fe&&H.toArray(r,3)):(fe||!Me)&&(K.toArray(r,3),K.toArray(r,9),fe&&H.toArray(r,0))}return Se;function C(H,K,$){return $.subVectors(K,H),$.set(-$.y,$.x).normalize()}function w(H,K,$){r&&(r[Y]=H.x,r[Y+1]=H.y,r[Y+2]=0,o&&(o[Y]=0,o[Y+1]=0,o[Y+2]=1),Y+=3,a&&(a[O]=K,a[O+1]=$,O+=2)),Se+=3}function X(H,K,$,Q,B){l.copy(K).sub(H).normalize(),u.copy($).sub(H).normalize();let I=Math.PI;const se=l.dot(u);Math.abs(se)<1&&(I=Math.abs(Math.acos(se))),I/=n,h.copy(K);for(let be=0,Ue=n-1;be<Ue;be++)f.copy(h).rotateAround(H,I),w(h,Q,B),w(f,Q,B),w(H,Q,.5),h.copy(f);w(f,Q,B),w($,Q,B),w(H,Q,.5)}function ne(){w(p,j,1),w(g,j,0),w(y,F,0),w(p,j,1),w(y,F,0),w(E,F,1)}function V(H,K,$){K?H?(w(p,j,1),w(g,j,0),w(y,F,0),w(p,j,1),w(y,F,0),w(R,F,1),w(y,$,0),w(S,$,0),w(R,$,.5)):(w(p,j,1),w(g,j,0),w(E,F,1),w(g,j,0),w(R,F,0),w(E,F,1),w(E,$,1),w(R,$,0),w(A,$,1)):H?(w(y,$,0),w(S,$,0),w(U,$,.5)):(w(E,$,1),w(A,$,0),w(U,$,.5))}function le(H,K){K&&(H?(w(p,j,1),w(g,j,0),w(y,F,0),w(p,j,1),w(y,F,0),w(R,F,1),w(y,j,0),w(U,F,.5),w(R,F,1),w(U,F,.5),w(S,j,0),w(R,F,1)):(w(p,j,1),w(g,j,0),w(E,F,1),w(g,j,0),w(R,F,0),w(E,F,1),w(E,j,1),w(R,F,0),w(U,F,.5),w(U,F,.5),w(R,F,0),w(A,j,1)))}function me(H,K,$,Q,B,I){switch(t.strokeLineCap){case"round":B?X(H,$,K,I,.5):X(H,K,$,I,.5);break;case"square":if(B)l.subVectors(K,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),f.subVectors(u,l).add(H),Q?(h.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(h.toArray(r,3),a[7]===1?f.toArray(r,9):h.toArray(r,9),f.toArray(r,0));else{l.subVectors($,H),u.set(l.y,-l.x),h.addVectors(l,u).add(H),f.subVectors(u,l).add(H);const se=r.length;Q?(h.toArray(r,se-3),f.toArray(r,se-6),f.toArray(r,se-12)):(f.toArray(r,se-6),h.toArray(r,se-3),f.toArray(r,se-12))}break}}function L(H){let K=!1;for(let Q=1,B=H.length-1;Q<B;Q++)if(H[Q].distanceTo(H[Q+1])<i){K=!0;break}if(!K)return H;const $=[];$.push(H[0]);for(let Q=1,B=H.length-1;Q<B;Q++)H[Q].distanceTo(H[Q+1])>=i&&$.push(H[Q]);return $.push(H[H.length-1]),$}}}function Px(s,e){const t=new Zr().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${e}"/></svg>`),n=Zr.createShapes(t.paths[0])[0].getPoints(16),i=Math.max(...n.map(h=>Math.hypot(h.x-500,h.y-500))),r=n.map(h=>({x:(h.x-500)/i*1.2,y:(500-h.y)/i*1.2})),o=(h,f,d,m)=>h*m-f*d;function a(h){const f=Math.cos(h),d=Math.sin(h);let m=1/0;for(let _=0;_<r.length;_++){const g=r[_],p=r[(_+1)%r.length],v=p.x-g.x,x=p.y-g.y,y=o(f,d,v,x);if(Math.abs(y)<1e-8)continue;const E=o(g.x,g.y,v,x)/y,S=o(g.x,g.y,f,d)/y;E>0&&S>=0&&S<=1&&(m=Math.min(m,E))}return Number.isFinite(m)?m:.75}const c=s.positions.slice(),l=e.length%17,u=.74+l%5*.055;for(let h=0;h<c.length;h+=3){const f=s.positions[h],d=s.positions[h+1],m=s.positions[h+2],_=Math.min(1,Math.hypot(f,d)/.95),g=Math.atan2(d,f),p=a(g),v=_*(.56+(p-.56)*_),x=Math.cos(g)*v,y=Math.sin(g)*v;let E=1/0;for(let M=0;M<r.length;M++){const b=r[M],D=r[(M+1)%r.length],U=D.x-b.x,z=D.y-b.y,q=Math.max(0,Math.min(1,((x-b.x)*U+(y-b.y)*z)/(U*U+z*z||1)));E=Math.min(E,Math.hypot(x-b.x-q*U,y-b.y-q*z))}let S=0;for(let M=0;M<3;M++){const b=M*2.094+l*.37,D=Math.atan2(Math.sin(g-b),Math.cos(g-b)),U=.2+M%2*.07;S+=(.006+M%3*.003)*Math.exp(-((D/U)**2))*Math.exp(-(((E-.15)/.15)**2))}const A=Math.sign(m-.4),R=.35*u*Math.sqrt(1-Math.exp(-E/.15));c[h]=x,c[h+1]=y,c[h+2]=.4+A*Math.max(0,R-S*Math.min(1,E/.08))}return{...s,positions:c}}function Ix(){const s=Array.from({length:10},(i,r)=>{const o=-Math.PI/2+r*Math.PI/5,a=r%2?195:330;return{x:500+Math.cos(o)*a,y:500+Math.sin(o)*a}}),e=(i,r,o)=>({x:i.x+(r.x-i.x)*o,y:i.y+(r.y-i.y)*o}),t=e(s[0],s[9],.34);let n=`M ${t.x} ${t.y}`;for(let i=0;i<10;i++){const r=s[i],o=s[(i+1)%10],a=e(r,o,.34),c=e(o,r,.34);n+=` Q ${r.x} ${r.y} ${a.x} ${a.y} L ${c.x} ${c.y}`}return n+" Z"}const ph={triangle:"M 474 205 Q 500 160 526 205 L 774 635 Q 800 680 748 680 L 252 680 Q 200 680 226 635 Z",square:"M 295 180 L 705 180 Q 820 180 820 295 L 820 705 Q 820 820 705 820 L 295 820 Q 180 820 180 705 L 180 295 Q 180 180 295 180 Z",heart:"M 500 340 C 415 185 180 220 180 390 C 180 535 350 665 480 765 Q 500 781 520 765 C 650 665 820 535 820 390 C 820 220 585 185 500 340 Z",star:Ix(),spark:Lx()};function Lx(){const s=Array.from({length:16},(i,r)=>{const o=r*Math.PI/8-Math.PI/2,a=r%2?222:360;return{x:500+Math.cos(o)*a,y:500+Math.sin(o)*a}}),e=(i,r,o)=>({x:i.x+(r.x-i.x)*o,y:i.y+(r.y-i.y)*o}),t=e(s[0],s[15],.12);let n=`M ${t.x} ${t.y}`;for(let i=0;i<16;i++){const r=s[i],o=s[(i+1)%16],a=i%2?.22:.12,c=e(r,o,a),l=e(o,r,(i+1)%2?.22:.12);n+=` Q ${r.x} ${r.y} ${c.x} ${c.y} L ${l.x} ${l.y}`}return n+" Z"}function Dx(s,e,t=()=>{}){const n=new WeakMap,i=new WeakMap,r=[...document.querySelectorAll("[data-color-mode]")],o=[{background:"#242522",accent:"#e85a18",tones:["#494640","#837767","#b8aa92","#353633","#625b52"]},{background:"#141414",accent:"#a6a6a6",tones:["#333333","#555555","#929292","#222222","#707070"],mono:!0}];let a="pop",c=-1;try{a=localStorage.getItem("crowd-color-mode")==="chic"?"chic":"pop"}catch{}function l(u){a!==u&&(c=-1),a=u,document.body.dataset.colorMode=u;let h;u==="chic"&&(c=(c+1)%o.length,h=o[c]),document.body.dataset.chicVariant=h?.mono?"mono":"warm";try{localStorage.setItem("crowd-color-mode",u)}catch{}const f=new Set;s.traverse(m=>{m.isLight&&(i.has(m)||i.set(m,m.color.clone()),m.color.copy(u==="pop"?i.get(m):new ze("#ffffff")));for(const _ of m.material?Array.isArray(m.material)?m.material:[m.material]:[]){if(f.has(_)||!_.color)continue;f.add(_),n.has(_)||n.set(_,{color:_.color.clone(),attenuation:_.attenuationColor?.clone()});const g=n.get(_);if(u==="pop"){_.color.copy(g.color),g.attenuation&&_.attenuationColor.copy(g.attenuation);continue}const p=Math.sqrt(.2126*g.color.r+.7152*g.color.g+.0722*g.color.b),v=g.color.getHSL({h:0,s:0,l:0}),x=m.userData.actor,y=x?.body===m||x&&!x.face;let E;y?v.s>.25&&v.h<.12?E=h.accent:E=h.tones[Math.min(4,Math.floor(v.h*5))]:E=p<.2?"#242320":p>.8?"#f3eddf":"#a18a78",_.color.set(E),_.attenuationColor&&_.attenuationColor.copy(_.color)}});const d=h?.background||"#dcd8d0";e.setClearColor(d),document.body.style.background=d,document.body.style.setProperty("--portfolio-link-color",new ze(d).getHSL({h:0,s:0,l:0}).l<.3?"#eee6d8":"#454039");for(const m of r)m.setAttribute("aria-pressed",String(m.dataset.colorMode===u));t()}for(const u of r)u.addEventListener("click",()=>l(u.dataset.colorMode));return l(a),{apply:l}}function Nx(s=192,e=20){const t=[0,0,.798],n=[],i=[];for(let o=1;o<e;o++){const a=o/e*Math.PI;for(let c=0;c<s;c++){const l=c/s*Math.PI*2;t.push(.95*Math.sin(a)*Math.cos(l),.95*Math.sin(a)*Math.sin(l),.4+.398*Math.cos(a)),o===e/2&&i.push(1+(o-1)*s+c)}}const r=t.length/3;t.push(0,0,.002);for(let o=0;o<s;o++){const a=(o+1)%s;n.push(0,1+o,1+a);for(let l=0;l<e-2;l++){const u=1+l*s+o,h=1+l*s+a,f=u+s,d=h+s;n.push(u,f,h,h,f,d)}const c=1+(e-2)*s;n.push(r,c+a,c+o)}return{positions:t,triangles:n,rim:i}}function Ux(s){if(s.noSeam)return s;const e=s.positions.slice();for(let i=0;i<e.length;i+=3){const r=e[i],o=e[i+1],a=e[i+2]-.4,c=Math.exp(-(((r+.26)/.48)**2+((o-.28)/.42)**2)),l=Math.exp(-(((r-.24)/.52)**2+((o+.3)/.4)**2));e[i+2]=.4+a*(1.02-.115*c-.088*l),e[i]*=1+.016*Math.exp(-(((o+.38)/.45)**2))}const t=Array.from({length:e.length/3},()=>new Set),n=new Set(s.rim);for(let i=0;i<s.triangles.length;i+=3)for(let r=0;r<3;r++){const o=s.triangles[i+r],a=s.triangles[i+(r+1)%3];t[o].add(a),t[a].add(o)}for(let i=0;i<20;i++){const r=e.slice();for(let o=0;o<t.length;o++)if(!n.has(o)&&t[o].size){let a=0;for(const c of t[o])a+=r[c*3+2];a/=t[o].size,e[o*3+2]=r[o*3+2]*.55+a*.45}}return{...s,positions:e}}function Fx(s){const e=s.attributes.position,t=s.attributes.normal;if(e.count<1800)return s;s.computeBoundingBox();const n=s.boundingBox.getSize(new k),i=Math.max(n.x,n.y,n.z)/32,r=new Map,o=[],a=new Uint32Array(e.count);for(let f=0;f<e.count;f++){const d=[e.getX(f),e.getY(f),e.getZ(f)].map(g=>Math.round(g/i)).join(",");let m=r.get(d);m===void 0&&(m=o.length,r.set(d,m),o.push({p:new k,n:new k,count:0}));const _=o[m];_.p.add(new k().fromBufferAttribute(e,f)),t&&_.n.add(new k().fromBufferAttribute(t,f)),_.count++,a[f]=m}const c=[],l=new Set,u=s.index?.count||e.count;for(let f=0;f<u;f+=3){const d=[0,1,2].map(_=>a[s.index?s.index.getX(f+_):f+_]);if(new Set(d).size<3)continue;const m=d.slice().sort((_,g)=>_-g).join(",");l.has(m)||(l.add(m),c.push(...d))}const h=new Mt;return h.setAttribute("position",new lt(o.flatMap(f=>f.p.divideScalar(f.count).toArray()),3)),h.setAttribute("normal",new lt(o.flatMap(f=>f.n.normalize().toArray()),3)),h.setIndex(c),h.computeBoundingBox(),h.computeBoundingSphere(),h}class Ox extends _c{constructor(){super();const e=new hs;e.deleteAttribute("uv");const t=new Hn({side:Ft}),n=new Hn,i=new yu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new tt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new nu(e,n,6),a=new dt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new tt(e,Wi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new tt(e,Wi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new tt(e,Wi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new tt(e,Wi(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new tt(e,Wi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new tt(e,Wi(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Wi(s){return new fp({color:0,emissive:16777215,emissiveIntensity:s})}function mh(s,e){if(e===bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===za||e===Wh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===za)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Bx extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new i_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Ds.extractUrlBase(e);o=Ds.resolveURL(l,this.path)}else o=Ds.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Rc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Au){try{o[Ze.KHR_BINARY_GLTF]=new s_(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new x_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:o[h]=new Hx;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[h]=new r_(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[h]=new o_;break;case Ze.KHR_MESH_QUANTIZATION:o[h]=new a_;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class kx{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ze(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ot);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new yu(u),l.distance=h;break;case"spot":l=new Pp(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Hx{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return ei}extendParams(e,t,n){const i=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(i)}}class Vx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Gx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}}class Wx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Xx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class qx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Yx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class jx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ot),Promise.all(r)}}class Kx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Jx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ot),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}}class Zx{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class $x{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:rn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Qx{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class e_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class t_{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class n_{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class i_{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Zt.TRIANGLES&&l.mode!==Zt.TRIANGLE_STRIP&&l.mode!==Zt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const m of h){const _=new Ye,g=new k,p=new oi,v=new k(1,1,1),x=new nu(m.geometry,m.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(g,p,v));for(const y in c)if(y==="_COLOR_0"){const E=c[y];x.instanceColor=new Ha(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);dt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Au="glTF",Ts=12,gh={JSON:1313821514,BIN:5130562};class s_{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ts),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Au)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ts,r=new DataView(e,Ts);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===gh.JSON){const l=new Uint8Array(e,Ts+o,a);this.content=n.decode(l)}else if(c===gh.BIN){const l=Ts+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class r_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=ja[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ja[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ji[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const _=d.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}h(d)},a,l,Ot,f)})})}}class o_{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class a_{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Ru extends Qs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*l,_=m-l,g=-2*d+3*f,p=d-f,v=1-g,x=p-f+h;for(let y=0;y!==a;y++){const E=o[_+y+a],S=o[_+y+c]*u,A=o[m+y+a],R=o[m+y]*u;r[y]=v*E+x*S+g*A+p*R}return r}}const c_=new oi;class l_ extends Ru{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return c_.fromArray(r).normalize().toArray(r),r}}const Zt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xh={9728:At,9729:Vt,9984:Fh,9985:Ur,9986:ws,9987:Sn},_h={33071:Qn,33648:Wr,10497:es},jo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ja={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},h_={CUBICSPLINE:void 0,LINEAR:Vs,STEP:Hs},Ko={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function u_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),s.DefaultMaterial}function gi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function f_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function d_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function p_(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jo(t.attributes):e=s.indices+":"+Jo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jo(s.targets[n]);return e}function Jo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ka(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function m_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const g_=new Ye;class x_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Rp(this.options.manager):this.textureLoader=new Dp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Rc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return gi(r,a,i),vn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Ds.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=jo[i.type],a=Ji[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new yt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=jo[i.type],l=Ji[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new l(a,p*d,i.count*d/u),x=new Sd(_,d/u),t.cache.add(v,x)),g=new yc(x,c,f%d/u,m)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),g=new yt(_,c,m);if(i.sparse!==void 0){const p=jo.SCALAR,v=Ji[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new v(o[1],x,i.sparse.count*p),S=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,R=E.length;A<R;A++){const M=E[A];if(g.setX(M,S[A*c]),c>=2&&g.setY(M,S[A*c+1]),c>=3&&g.setZ(M,S[A*c+2]),c>=4&&g.setW(M,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=xh[f.magFilter]||Vt,u.minFilter=xh[f.minFilter]||Sn,u.wrapS=_h[f.wrapS]||es,u.wrapT=_h[f.wrapT]||es,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==At&&u.minFilter!==Vt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const g=new bt(_);g.needsUpdate=!0,f(g)}),t.load(Ds.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),vn(h,o),h.userData.mimeType=o.mimeType||m_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new su,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new iu,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const h=i[Ze.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ot),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,St)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ln);const u=r.alphaMode||Ko.OPAQUE;if(u===Ko.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ko.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ei&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ei&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ei){const h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],Ot)}return r.emissiveTexture!==void 0&&o!==ei&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),vn(h,r),t.associations.set(h,{materials:e}),r.extensions&&gi(i,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return yh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=p_(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=yh(new Mt,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?u_(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const _=u[d],g=o[d];let p;const v=l[d];if(g.mode===Zt.TRIANGLES||g.mode===Zt.TRIANGLE_STRIP||g.mode===Zt.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ed(_,v):new tt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Zt.TRIANGLE_STRIP?p.geometry=mh(p.geometry,Wh):g.mode===Zt.TRIANGLE_FAN&&(p.geometry=mh(p.geometry,za));else if(g.mode===Zt.LINES)p=new Pd(_,v);else if(g.mode===Zt.LINE_STRIP)p=new Sc(_,v);else if(g.mode===Zt.LINE_LOOP)p=new Id(_,v);else if(g.mode===Zt.POINTS)p=new Ld(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&d_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),vn(p,r),g.extensions&&gi(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&gi(i,h[0],r),h[0];const f=new Ut;r.extensions&&gi(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Gs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new vc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let x=0,y=f.length;x<y;x++){const E=f[x],S=d[x],A=m[x],R=_[x],M=g[x];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=n._createAnimationTracks(E,S,A,R,M);if(b)for(let D=0;D<b.length;D++)p.push(b[D])}const v=new Mp(r,void 0,p);return vn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,g_)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new eu:l.length>1?u=new Ut:l.length===1?u=l[0]:u=new dt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),vn(u,r),r.extensions&&gi(n,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ut;n.name&&(r.name=i.createUniqueName(n.name)),vn(r,n),n.extensions&&gi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof fn||f instanceof bt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];jn[r.path]===jn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(jn[r.path]){case jn.weights:l=ss;break;case jn.rotation:l=rs;break;case jn.translation:case jn.scale:l=os;break;default:n.itemSize===1?l=ss:l=os;break}const u=i.interpolation!==void 0?h_[i.interpolation]:Vs,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+jn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ka(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof rs?l_:Ru;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function __(s,e,t){const n=e.attributes,i=new wn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new k(c[0],c[1],c[2]),new k(l[0],l[1],l[2])),a.normalized){const u=Ka(Ji[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,c=new k;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=Ka(Ji[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function yh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=ja[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),vn(s,e),__(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?f_(s,e.targets,t):s})}const vh={cat:[[.9,.19,.31],[2.23,.19,.31]],rabbit:[[1.1,.16,.65],[1.98,.17,.53]],bear:[[.82,.3,.24],[2.31,.3,.24]],devil:[[1,.13,.46],[2.14,.13,.46]],sprout:[[1.32,.28,.37],[1.98,.21,.25]],bat:[[.1,.19,.28],[.54,.13,.18],[2.6,.13,.18],[3.04,.19,.28]],seal:[[3.85,.22,.2],[5.38,.22,.28]],ghost:[[4.05,.17,.22],[4.72,.18,.29],[5.4,.17,.22]],axolotl:[[.3,.13,.23],[.62,.13,.27],[.92,.13,.23],[2.22,.13,.23],[2.54,.13,.27],[2.84,.13,.23]],droop:[[1.04,.29,.47],[2.23,.36,.19]],fin:[[.18,.25,.23],[1.63,.16,.27],[4.9,.32,.27]],crown:[[1.05,.14,.23],[1.57,.15,.36],[2.09,.14,.23]]};function y_(s){const e=s.positions.length/3,t=Array.from({length:e},(u,h)=>[h,h]),n=Array.from({length:e},()=>new Set),i=new Map,r=[];for(let u=0;u<s.triangles.length;u+=3){const h=s.triangles.slice(u,u+3);for(let f=0;f<3;f++){const d=h[f],m=h[(f+1)%3],_=h[(f+2)%3],g=[d,m].sort((p,v)=>p-v).join(",");n[d].add(m),n[m].add(d),i.has(g)||i.set(g,{a:d,b:m,op:[]}),i.get(g).op.push(_)}}const o=n.map((u,h)=>{const f=u.size,d=f===3?3/16:3/(8*f);return[[h,1-f*d],...[...u].map(m=>[m,d])]});for(const u of i.values())u.id=t.length,t.push([u.a,u.b]),o.push([[u.a,.375],[u.b,.375],...u.op.map(h=>[h,.125])]);const a=(u,h)=>i.get([u,h].sort((f,d)=>f-d).join(",")).id;for(let u=0;u<s.triangles.length;u+=3){const[h,f,d]=s.triangles.slice(u,u+3),m=a(h,f),_=a(f,d),g=a(d,h);r.push(h,m,g,m,f,_,g,_,d,m,_,g)}const c=[];for(let u=0;u<s.rim.length;u++){const h=s.rim[u],f=s.rim[(u+1)%s.rim.length];if(c.push(h),!n[h].has(f)){const d=[...n[h]].filter(m=>n[f].has(m));if(!d.length)throw Error("Disconnected seam boundary");d.sort((m,_)=>Math.abs(s.positions[m*3+2]-.45)-Math.abs(s.positions[_*3+2]-.45)),c.push(d[0])}}const l=c.flatMap((u,h)=>[u,a(u,c[(h+1)%c.length])]);return{links:t,stencils:o,triangles:r,rim:l}}function Cu(s,e){const t=[0,0,0];for(const[n,i]of e)for(let r=0;r<3;r++)t[r]+=s[n*3+r]*i;return t}function v_(s,e="round"){const t=s.positions.slice();for(let n=0;n<t.length;n+=3){const i=s.positions[n],r=s.positions[n+1],o=Math.atan2(r,i);let a=1,c=1,l=1;if(vh[e]){const u=Math.hypot(i,r)/.95;let h=.82;for(const[f,d,m]of vh[e]){const _=Math.atan2(Math.sin(o-f),Math.cos(o-f));h+=m*Math.exp(-((_/d)**2))*Math.min(1,u*u)}a=h,c=h,l=.91}if(e==="horn"){const u=(d,m)=>Math.exp(-((Math.atan2(Math.sin(o-d),Math.cos(o-d))/m)**2)),h=Math.hypot(i,r)/.95,f=.84+(.49*u(1.48,.145)+.19*u(.72,.22)+.15*u(2.4,.25))*Math.min(1,h*h);a=f,c=f,l=.92}if(e==="bolster"&&(a=.6*(.92+.12*Math.exp(-(((r-.48)/.3)**2))),c=1.22,l=.88),e==="buddy"){const u=.74+.055*Math.cos(8*o+.2);a=u,c=u,l=.88}if(e==="pal"){const u=(d,m)=>Math.exp(-((Math.atan2(Math.sin(o-d),Math.cos(o-d))/m)**2)),h=Math.hypot(i,r)/.95,f=.84+(.4*u(1.02,.27)+.15*u(4.12,.29)+.16*u(5.23,.29)-.09*u(4.68,.22))*Math.min(1,h*h);a=f,c=f,l=.9}if(e==="oval"&&(a=.77,c=1.14),e==="bean"&&(a=.92,c=.88),e==="twin"&&(a=1-.3*Math.exp(-((r/.23)**2)),c=1.1,l=1-.12*Math.exp(-((r/.23)**2))),e==="cloud"){const u=.9+.1*Math.cos(3*o+.4);a=1.06*u,c=.85*u}if(e==="flower"){const u=.82+.18*Math.cos(5*o);a=u,c=u,l=.93}t[n]=i*a+(e==="bolster"?.18*((r/.95)**2-.4):0),t[n+1]=r*c+(e==="bean"?.16*(i/.95)**2:0),t[n+2]=.008+(s.positions[n+2]-.008)*l}return{...s,positions:t}}function M_(s,e,t=.76){const n=v_(s,e),i=t>=.9,r=t<.6;for(let o=0;o<n.positions.length;o+=3){const a=n.positions[o],c=n.positions[o+1],l=n.positions[o+2];if(i)n.positions[o]=a*(.86-.12*Math.tanh(c*2)),n.positions[o+1]=c*1.27,n.positions[o+2]=.008+(l-.008)*(1.02-.1*Math.tanh(c*2));else if(n.positions[o]=a*(1+.065*Math.exp(-(((c-.15)/.5)**2))),n.positions[o+1]=c*(r?.77:.88),n.positions[o+2]=.008+(l-.008)*(r?1.04:.98),e==="pal"){const u=Math.max(0,(c-.58)/.6);n.positions[o]-=u*.09,n.positions[o+1]+=u*.18,n.positions[o+2]-=u*.055}}return n}function S_(s,e){if(e==="coil")return b_();if(e!=="burst"&&e!=="petal")return M_(s,e,.72);const t={...s,positions:s.positions.slice()},n=e==="burst"?7:6,i=Array.from({length:256},(r,o)=>{const a=o/256*Math.PI*2,c=Math.pow((1+Math.cos(n*(a-Math.PI/2)))/2,e==="burst"?.7:.48),l=.44+(e==="burst"?.77:.68)*c;return[Math.cos(a)*l*.95,Math.sin(a)*l*.95]});for(let r=0;r<t.positions.length;r+=3){const o=s.positions[r],a=s.positions[r+1],c=s.positions[r+2],l=Math.atan2(a,o),u=Math.hypot(o,a)/.95,h=Math.pow((1+Math.cos(n*(l-Math.PI/2)))/2,e==="burst"?.7:.48),d=.74+(.44+(e==="burst"?.77:.68)*h-.74)*Math.min(1,u*u),m=o*d,_=a*d;let g=1/0;for(let v=0;v<i.length;v++){const x=i[v],y=i[(v+1)%i.length],E=y[0]-x[0],S=y[1]-x[1],A=Math.max(0,Math.min(1,((m-x[0])*E+(_-x[1])*S)/(E*E+S*S)));g=Math.min(g,Math.hypot(m-x[0]-A*E,_-x[1]-A*S))}const p=.34*Math.sqrt(1-Math.exp(-g/.14));t.positions[r]=m,t.positions[r+1]=_,t.positions[r+2]=.4+Math.sign(c-.4)*p}return t}function b_(){const s=[];for(let c=0;c<=120;c++){const l=c/120,u=Math.PI+l*Math.PI*4.5;s.push(new k(.7*Math.cos(u),.93-l*1.86,.69+.43*Math.sin(u)))}const e=new Tc(s),t=new no(e,144,.205,12,!1),n=t.attributes.position,i=[],r=[],o=145,a=12;for(let c=0;c<o;c++)for(let l=0;l<a;l++){const u=c*13+l;i.push(n.getX(u),n.getY(u),n.getZ(u))}for(let c=0;c<o-1;c++)for(let l=0;l<a;l++){const u=c*a+l,h=(c+1)*a+l,f=c*a+(l+1)%a,d=(c+1)*a+(l+1)%a;r.push(u,f,h,h,f,d)}for(const c of[0,o-1]){const l=e.getPointAt(c===0?0:1),u=e.getTangentAt(c===0?0:1).multiplyScalar(c===0?-.16:.16),h=i.length/3;l.add(u),i.push(l.x,l.y,l.z);for(let f=0;f<a;f++){const d=c*a+f,m=c*a+(f+1)%a;c===0?r.push(h,m,d):r.push(h,d,m)}}for(let c=0;c<r.length;c+=3)[r[c+1],r[c+2]]=[r[c+2],r[c+1]];return t.dispose(),{positions:i,triangles:r,rim:Array.from({length:a},(c,l)=>l),noSeam:!0,faceAnchor:{x:-.68,y:.91}}}class E_ extends tt{constructor(e,t,n=!1,i=!1,r=1e4){const o=new Mt;super(o,t),this.isMarchingCubes=!0;const a=this,c=new Float32Array(36),l=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=i,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=r*3;this.positionArray=new Float32Array(x*3);const y=new yt(this.positionArray,3);y.setUsage(ir),o.setAttribute("position",y),this.normalArray=new Float32Array(x*3);const E=new yt(this.normalArray,3);if(E.setUsage(ir),o.setAttribute("normal",E),this.enableUvs){this.uvArray=new Float32Array(x*2);const S=new yt(this.uvArray,2);S.setUsage(ir),o.setAttribute("uv",S)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const S=new yt(this.colorArray,3);S.setUsage(ir),o.setAttribute("color",S)}o.boundingSphere=new gn(new k,1)};function h(v,x,y){return v+(x-v)*y}function f(v,x,y,E,S,A,R,M,b,D){const U=(y-R)/(M-R),z=a.normal_cache;c[x+0]=E+U*a.delta,c[x+1]=S,c[x+2]=A,l[x+0]=h(z[v+0],z[v+3],U),l[x+1]=h(z[v+1],z[v+4],U),l[x+2]=h(z[v+2],z[v+5],U),u[x+0]=h(a.palette[b*3+0],a.palette[D*3+0],U),u[x+1]=h(a.palette[b*3+1],a.palette[D*3+1],U),u[x+2]=h(a.palette[b*3+2],a.palette[D*3+2],U)}function d(v,x,y,E,S,A,R,M,b,D){const U=(y-R)/(M-R),z=a.normal_cache;c[x+0]=E,c[x+1]=S+U*a.delta,c[x+2]=A;const q=v+a.yd*3;l[x+0]=h(z[v+0],z[q+0],U),l[x+1]=h(z[v+1],z[q+1],U),l[x+2]=h(z[v+2],z[q+2],U),u[x+0]=h(a.palette[b*3+0],a.palette[D*3+0],U),u[x+1]=h(a.palette[b*3+1],a.palette[D*3+1],U),u[x+2]=h(a.palette[b*3+2],a.palette[D*3+2],U)}function m(v,x,y,E,S,A,R,M,b,D){const U=(y-R)/(M-R),z=a.normal_cache;c[x+0]=E,c[x+1]=S,c[x+2]=A+U*a.delta;const q=v+a.zd*3;l[x+0]=h(z[v+0],z[q+0],U),l[x+1]=h(z[v+1],z[q+1],U),l[x+2]=h(z[v+2],z[q+2],U),u[x+0]=h(a.palette[b*3+0],a.palette[D*3+0],U),u[x+1]=h(a.palette[b*3+1],a.palette[D*3+1],U),u[x+2]=h(a.palette[b*3+2],a.palette[D*3+2],U)}function _(v){const x=v*3;a.normal_cache[x]===0&&(a.normal_cache[x+0]=a.field[v-1]-a.field[v+1],a.normal_cache[x+1]=a.field[v-a.yd]-a.field[v+a.yd],a.normal_cache[x+2]=a.field[v-a.zd]-a.field[v+a.zd])}function g(v,x,y,E,S){const A=E+1,R=E+a.yd,M=E+a.zd,b=A+a.yd,D=A+a.zd,U=E+a.yd+a.zd,z=A+a.yd+a.zd;let q=0;const W=a.field[E],G=a.field[A],j=a.field[R],F=a.field[b],oe=a.field[M],he=a.field[D],fe=a.field[U],Me=a.field[z];W<S&&(q|=1),G<S&&(q|=2),j<S&&(q|=8),F<S&&(q|=4),oe<S&&(q|=16),he<S&&(q|=32),fe<S&&(q|=128),Me<S&&(q|=64);const Se=T_[q];if(Se===0)return 0;const Y=a.delta,O=v+Y,C=x+Y,w=y+Y;Se&1&&(_(E),_(A),f(E*3,0,S,v,x,y,W,G,E,A)),Se&2&&(_(A),_(b),d(A*3,3,S,O,x,y,G,F,A,b)),Se&4&&(_(R),_(b),f(R*3,6,S,v,C,y,j,F,R,b)),Se&8&&(_(E),_(R),d(E*3,9,S,v,x,y,W,j,E,R)),Se&16&&(_(M),_(D),f(M*3,12,S,v,x,w,oe,he,M,D)),Se&32&&(_(D),_(z),d(D*3,15,S,O,x,w,he,Me,D,z)),Se&64&&(_(U),_(z),f(U*3,18,S,v,C,w,fe,Me,U,z)),Se&128&&(_(M),_(U),d(M*3,21,S,v,x,w,oe,fe,M,U)),Se&256&&(_(E),_(M),m(E*3,24,S,v,x,y,W,oe,E,M)),Se&512&&(_(A),_(D),m(A*3,27,S,O,x,y,G,he,A,D)),Se&1024&&(_(b),_(z),m(b*3,30,S,O,C,y,F,Me,b,z)),Se&2048&&(_(R),_(U),m(R*3,33,S,v,C,y,j,fe,R,U)),q<<=4;let X,ne,V,le=0,me=0;for(;Nr[q+me]!=-1;)X=q+me,ne=X+1,V=X+2,p(c,l,u,3*Nr[X],3*Nr[ne],3*Nr[V]),me+=3,le++;return le}function p(v,x,y,E,S,A){const R=a.count*3;if(a.positionArray[R+0]=v[E],a.positionArray[R+1]=v[E+1],a.positionArray[R+2]=v[E+2],a.positionArray[R+3]=v[S],a.positionArray[R+4]=v[S+1],a.positionArray[R+5]=v[S+2],a.positionArray[R+6]=v[A],a.positionArray[R+7]=v[A+1],a.positionArray[R+8]=v[A+2],a.material.flatShading===!0){const M=(x[E+0]+x[S+0]+x[A+0])/3,b=(x[E+1]+x[S+1]+x[A+1])/3,D=(x[E+2]+x[S+2]+x[A+2])/3;a.normalArray[R+0]=M,a.normalArray[R+1]=b,a.normalArray[R+2]=D,a.normalArray[R+3]=M,a.normalArray[R+4]=b,a.normalArray[R+5]=D,a.normalArray[R+6]=M,a.normalArray[R+7]=b,a.normalArray[R+8]=D}else a.normalArray[R+0]=x[E+0],a.normalArray[R+1]=x[E+1],a.normalArray[R+2]=x[E+2],a.normalArray[R+3]=x[S+0],a.normalArray[R+4]=x[S+1],a.normalArray[R+5]=x[S+2],a.normalArray[R+6]=x[A+0],a.normalArray[R+7]=x[A+1],a.normalArray[R+8]=x[A+2];if(a.enableUvs){const M=a.count*2;a.uvArray[M+0]=v[E+0],a.uvArray[M+1]=v[E+2],a.uvArray[M+2]=v[S+0],a.uvArray[M+3]=v[S+2],a.uvArray[M+4]=v[A+0],a.uvArray[M+5]=v[A+2]}a.enableColors&&(a.colorArray[R+0]=y[E+0],a.colorArray[R+1]=y[E+1],a.colorArray[R+2]=y[E+2],a.colorArray[R+3]=y[S+0],a.colorArray[R+4]=y[S+1],a.colorArray[R+5]=y[S+2],a.colorArray[R+6]=y[A+0],a.colorArray[R+7]=y[A+1],a.colorArray[R+8]=y[A+2]),a.count+=3}this.addBall=function(v,x,y,E,S,A){const R=Math.sign(E);E=Math.abs(E);const M=A!=null;let b=new ze(v,x,y);if(M)try{b=A instanceof ze?A:Array.isArray(A)?new ze(Math.min(Math.abs(A[0]),1),Math.min(Math.abs(A[1]),1),Math.min(Math.abs(A[2]),1)):new ze(A)}catch{b=new ze(v,x,y)}const D=this.size*Math.sqrt(E/S),U=y*this.size,z=x*this.size,q=v*this.size;let W=Math.floor(U-D);W<1&&(W=1);let G=Math.floor(U+D);G>this.size-1&&(G=this.size-1);let j=Math.floor(z-D);j<1&&(j=1);let F=Math.floor(z+D);F>this.size-1&&(F=this.size-1);let oe=Math.floor(q-D);oe<1&&(oe=1);let he=Math.floor(q+D);he>this.size-1&&(he=this.size-1);let fe,Me,Se,Y,O,C,w,X,ne,V,le;for(Se=W;Se<G;Se++)for(O=this.size2*Se,X=Se/this.size-y,ne=X*X,Me=j;Me<F;Me++)for(Y=O+this.size*Me,w=Me/this.size-x,V=w*w,fe=oe;fe<he;fe++)if(C=fe/this.size-v,le=E/(1e-6+C*C+V+ne)-S,le>0){this.field[Y+fe]+=le*R;const me=Math.sqrt((fe-q)*(fe-q)+(Me-z)*(Me-z)+(Se-U)*(Se-U))/D,L=1-me*me*me*(me*(me*6-15)+10);this.palette[(Y+fe)*3+0]+=b.r*L,this.palette[(Y+fe)*3+1]+=b.g*L,this.palette[(Y+fe)*3+2]+=b.b*L}},this.addPlaneX=function(v,x){const y=this.size,E=this.yd,S=this.zd,A=this.field;let R,M,b,D,U,z,q,W=y*Math.sqrt(v/x);for(W>y&&(W=y),R=0;R<W;R++)if(z=R/y,D=z*z,U=v/(1e-4+D)-x,U>0)for(M=0;M<y;M++)for(q=R+M*E,b=0;b<y;b++)A[S*b+q]+=U},this.addPlaneY=function(v,x){const y=this.size,E=this.yd,S=this.zd,A=this.field;let R,M,b,D,U,z,q,W,G=y*Math.sqrt(v/x);for(G>y&&(G=y),M=0;M<G;M++)if(z=M/y,D=z*z,U=v/(1e-4+D)-x,U>0)for(q=M*E,R=0;R<y;R++)for(W=q+R,b=0;b<y;b++)A[S*b+W]+=U},this.addPlaneZ=function(v,x){const y=this.size,E=this.yd,S=this.zd,A=this.field;let R,M,b,D,U,z,q,W,G=y*Math.sqrt(v/x);for(G>y&&(G=y),b=0;b<G;b++)if(z=b/y,D=z*z,U=v/(1e-4+D)-x,U>0)for(q=S*b,M=0;M<y;M++)for(W=q+M*E,R=0;R<y;R++)A[W+R]+=U},this.setCell=function(v,x,y,E){const S=this.size2*y+this.size*x+v;this.field[S]=E},this.getCell=function(v,x,y){const E=this.size2*y+this.size*x+v;return this.field[E]},this.blur=function(v=1){const x=this.field,y=x.slice(),E=this.size,S=this.size2;for(let A=0;A<E;A++)for(let R=0;R<E;R++)for(let M=0;M<E;M++){const b=S*M+E*R+A;let D=y[b],U=1;for(let z=-1;z<=1;z+=2){const q=z+A;if(!(q<0||q>=E))for(let W=-1;W<=1;W+=2){const G=W+R;if(!(G<0||G>=E))for(let j=-1;j<=1;j+=2){const F=j+M;if(F<0||F>=E)continue;const oe=S*F+E*G+q,he=y[oe];U++,D+=v*(he-D)/U}}}x[b]=D}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let x=1;x<v;x++){const y=this.size2*x,E=(x-this.halfsize)/this.halfsize;for(let S=1;S<v;S++){const A=y+this.size*S,R=(S-this.halfsize)/this.halfsize;for(let M=1;M<v;M++){const b=(M-this.halfsize)/this.halfsize,D=A+M;g(b,R,E,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const T_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Nr=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),Mh=["psst… over here!","a tiny tap? pretty please.","I have something to show you.","pick me! I brought a project.","hellooo, curious human.","tap for a little peek.","my pockets are full of work.","look what I helped make!","a little work, a lot of heart.","got a second? got a project.","come closer. tiny surprise.","your next little peek is here."];function w_(s){const e=new Ut;e.visible=!1,s.add(e);const t=new ei({color:"#fffdf8",toneMapped:!1});t.onBeforeCompile=z=>{z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 balloonNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
balloonNormal=normalize(normalMatrix*normal);`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 balloonNormal;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(vec3(.76,.75,.72),vec3(1.0),smoothstep(-.8,.65,balloonNormal.y));`)};const n=document.createElement("div");n.id="speech-caption",n.hidden=!0,n.setAttribute("role","status"),document.body.append(n);const i=new Map;let r=null;function o(z,q,W=1,G=.48){const j=[z,q,W.toFixed(2),G.toFixed(2)].join(":");if(i.has(j))return i.get(j);const F=38,oe=1.4,he=new E_(F,t,!1,!1,18e3);he.isolation=0;const fe=G*.68,Me=fe/W,Se=Array.from({length:z||6},(w,X)=>{const ne=(X+(q===2?.35:0))/(z||6)*Math.PI*2;return{x:Math.cos(ne)*(1-Me*.7),y:Math.sin(ne)*.55,r:1+.09*Math.sin(X*2.1+q)}}),Y=(w,X)=>{const ne=Math.max(.24-Math.abs(w-X),0)/.24;return Math.max(w,X)+ne*ne*.06};for(let w=0;w<F;w++)for(let X=0;X<F;X++)for(let ne=0;ne<F;ne++){const V=(ne/F*2-1)*oe,le=(X/F*2-1)*oe,me=(w/F*2-1)*oe;let L=1-(V/.88)**2-(le/.69)**2-(me/.82)**2;for(const H of Se)L=Y(L,1-((V-H.x)/(Me*H.r))**2-((le-H.y)/(.68*H.r))**2-(me/(.84*H.r))**2);he.field[w*F*F+X*F+ne]=L}he.update();const O=new Mt,C=he.geometry.drawRange.count;for(const w of["position","normal"])O.setAttribute(w,new lt(he.geometry.attributes[w].array.slice(0,C*3),3));if(O.scale(oe,oe,oe),O.computeBoundingSphere(),O.computeBoundingBox(),he.geometry.dispose(),i.size>=16){const w=i.keys().next().value;i.get(w).dispose(),i.delete(w)}return i.set(j,O),O}const a=new tt(o(0,0),t);a.scale.set(1,.48,.21),e.add(a);const c=new us(1,24,16),l=new tt(c,t);l.scale.set(.11,.21,.1),l.rotation.z=-.42,l.position.set(-.36,-.45,-.02),e.add(l);const u=new Ut;for(const[z,q,W]of[[-.36,-.53,.095],[-.48,-.74,.055]]){const G=new tt(c,t);G.position.set(z,q,-.02),G.scale.setScalar(W),u.add(G)}e.add(u);const h=document.createElement("canvas").getContext("2d");let d=new URLSearchParams(location.search).get("qa")==="speech"?4:6+Math.random()*3,m=null,_=0,g=-1,p=-1,v=0,x=0,y=0,E=!1,S=!1,A=1,R=.48,M=null,b=1;function D(){m?.face.speak(0),m&&(m.speaking=!1),m=null,e.visible=!1,r=null,n.hidden=!0,document.body.dataset.speech="",E=!1,S=!1}function U(z,q,W,G=null,j=!1){if(!z?.face)return;m?.face.speak(0),m&&(m.speaking=!1),m=z,m.speaking=!0,_=q,y=Math.sin(z.phase*2.7)*.12,S=j,r=null,b=z.face.mouthPosition().x>0?-1:1;let F;do F=Math.floor(Math.random()*Mh.length);while(F===g);g=F;const oe=1+(p===1?1:0);p=oe,l.visible=oe===0,u.visible=oe!==0,t.color.set("#fffdf8");const he=G||Mh[F];h.font="400 76px fatfrank, sans-serif";const fe=h.measureText(he).width,Me=Math.max(400,Math.min(800,Math.sqrt(fe*470))),Se=he.split(" "),Y=[""];for(const X of Se){const ne=Y.length-1,V=Y[ne]?Y[ne]+" "+X:X;h.measureText(V).width>Me&&Y[ne]?Y.push(X):Y[ne]=V}n.textContent=Y.join(`
`),n.hidden=!1;const O=Math.max(...Y.map(X=>h.measureText(X).width)),C=.0022;A=Math.max(.66,(O+260)*C/2),R=Math.max(.38,(Y.length*90+200)*C/2);const w=oe?Math.max(5,Math.min(9,3+Math.ceil(O/260)+Y.length-1)):0;a.geometry=o(w,oe,A,R),a.scale.set(A,R,.34),document.body.dataset.bubbleShape=oe===0?"oval":oe===1?"thought-cloud":"speech-cloud",document.body.dataset.bubbleLobes=String(w),document.body.dataset.bubbleLines=String(Y.length),v=W?1:0,x=0,e.visible=!0,document.body.dataset.speech=he,d=q+14+Math.random()*10}return{clear:D,say:U,bounds(){return r},invitedActor(z){return!S&&m&&e.visible&&z.intersectObjects(e.children,!0).length?m:null},hit(z){return e.visible&&z.intersectObjects(e.children,!0).length>0},update(z,q,W,G,j,F){if(!m&&z>d&&!F){const de=W.filter(ae=>ae.face&&ae!==M&&Math.abs(ae.px)<G.right*.72&&Math.abs(ae.py)<G.top*.65);de.length?(M=de[Math.floor(Math.random()*de.length)],U(M,z,j)):d=z+5}if(!m)return;E&&(_+=q);const oe=z-_,he=S||oe<4.2?1:0;j?v=he:(x+=((he-v)*110-x*13)*q,v+=x*q);const fe=S?oe%7:oe,Me=j?0:Math.abs(Math.sin(fe*9))*Math.max(0,1-fe/4.3);m.face.speak(Me);const Se=Math.min(S?.82:.76,(G.right-G.left)/(A*2.4+.7)),Y=A*1.14*Se,O=m.face.mouthPosition(),C=b;e.position.set(Gs.clamp(O.x+C*((A*1.14+.6)*Se),-G.right+Y,G.right-Y),Gs.clamp(O.y+(.1+Math.sin(z*.85+m.phase)*.045)*Se,-G.top+R*1.2*Se,G.top-R*1.2*Se),Math.min(G.position.z-1,Math.max(7,O.z+1))),e.scale.setScalar(Math.max(.001,v)*Se),e.rotation.z=y;const w=e.position.clone().project(G),X=innerWidth/(G.right-G.left)*Se;n.style.left=(w.x*.5+.5)*innerWidth+"px",n.style.top=(-w.y*.5+.5)*innerHeight+"px",n.style.fontSize=70*.0022*X+"px",n.style.transform="translate(-50%,-50%) rotate("+-y+"rad) scale("+Math.max(.001,v)+")";const ne=(w.x*.5+.5)*innerWidth,V=(-w.y*.5+.5)*innerHeight,le=a.geometry.boundingBox,me=Math.max(Math.abs(le.min.x),Math.abs(le.max.x))*A,L=Math.max(Math.abs(le.min.y),Math.abs(le.max.y))*R,H=(me*Math.abs(Math.cos(y))+L*Math.abs(Math.sin(y)))*X*1.06,K=(L*Math.abs(Math.cos(y))+me*Math.abs(Math.sin(y)))*X*1.06;r={left:ne-H,right:ne+H,top:V-K,bottom:V+K};const $=Math.cos(-y),Q=Math.sin(-y),B=(O.x-e.position.x)/Se,I=(O.y-e.position.y)/Se,se=B*$-I*Q,be=B*Q+I*$,Ue=Math.hypot(se,be)||1,N=se/Ue,T=be/Ue,Z=1/Math.sqrt(N*N/(A*A)+T*T/(R*R)),ie=Math.max(.08,Math.min(.22,Ue-Z+.07));l.position.set(N*(Z+ie*.35),T*(Z+ie*.35),-.02),l.scale.set(.1,ie*.65,.1),l.rotation.z=Math.atan2(T,N)-Math.PI/2,u.children.forEach((de,ae)=>{const Pe=Z+.13+ae*.17;de.position.set(N*Pe,T*Pe,-.02)}),!S&&oe>4.9&&(D(),d=z+14+Math.random()*10)}}}function A_(s,e,t,n,i){return{x:s.includes("left")?14:Math.max(14,n-e-14),y:s.includes("top")?n<=620?64:14:Math.max(14,i-t-94)}}function R_(s){let e="bottom-right",t=null;function n(){const r=A_(e,s.offsetWidth||180,s.offsetHeight||135,innerWidth,innerHeight);s.style.left=r.x+"px",s.style.top=r.y+"px",s.style.right=s.style.bottom="auto",s.dataset.corner=e}s.addEventListener("pointerdown",r=>{if(r.button!==0)return;r.preventDefault();const o=s.getBoundingClientRect();t={id:r.pointerId,x:r.clientX-o.left,y:r.clientY-o.top},s.dataset.dragging="true",s.setPointerCapture(r.pointerId)}),s.addEventListener("pointermove",r=>{!t||t.id!==r.pointerId||(s.style.left=Math.max(0,Math.min(innerWidth-s.offsetWidth,r.clientX-t.x))+"px",s.style.top=Math.max(0,Math.min(innerHeight-s.offsetHeight,r.clientY-t.y))+"px")});function i(){if(!t)return;const r=s.getBoundingClientRect();e=(r.top+r.height/2<innerHeight/2?"top":"bottom")+"-"+(r.left+r.width/2<innerWidth/2?"left":"right"),t=null,s.dataset.dragging="false",n()}for(const r of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(r,i);s.addEventListener("keydown",r=>{if(!r.key.startsWith("Arrow"))return;r.preventDefault();let[o,a]=e.split("-");r.key==="ArrowUp"&&(o="top"),r.key==="ArrowDown"&&(o="bottom"),r.key==="ArrowLeft"&&(a="left"),r.key==="ArrowRight"&&(a="right"),e=o+"-"+a,n()}),window.addEventListener("resize",n),n()}const C_="modulepreload",P_=function(s){return"/special/balloon-portfolio/"+s},Sh={},I_=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=l;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=l(t.map(u=>{if(u=P_(u),u in Sh)return;Sh[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":C_,h||(d.as="script"),d.crossOrigin="",d.href=u,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};async function L_(s,e){const{FaceDetector:t,FilesetResolver:n}=await I_(async()=>{const{FaceDetector:g,FilesetResolver:p}=await import("./vision_bundle-qHAtWFBm.js");return{FaceDetector:g,FilesetResolver:p}},[]),i=await n.forVisionTasks(new URL("./vision/",location.href).href),r=await t.createFromOptions(i,{baseOptions:{modelAssetPath:new URL("./vision/face.tflite",location.href).href,delegate:"CPU"},runningMode:"VIDEO",minDetectionConfidence:.6}),o=document.querySelector("#camera-friends"),a=o.getContext("2d");o.width=360,o.height=270,o.hidden=!1;const c=Array.from({length:9},(g,p)=>({x:25+p%5*70,y:25+Math.floor(p/5)*200,vx:(p%2?1:-1)*(16+p%3*3),vy:(p%3-1)*12+4,angle:p*.4,spin:(p%2?1:-1)*.1,r:20+p%3*3,color:["#f1c444","#ee779c","#43b5b3","#648fda","#ed9260"][p%5],squish:0}));let l=null,u=0,h=0,f=performance.now(),d=0,m=!0;function _(g){if(!m)return;const p=Math.min(.04,(g-f)/1e3);if(f=g,s.readyState>=2&&g-h>150){h=g;try{const v=r.detectForVideo(s,g).detections[0]?.boundingBox;if(v){const x={x:360*(1-(v.originX+v.width/2)/s.videoWidth),y:270*(v.originY+v.height/2)/s.videoHeight,rx:v.width/s.videoWidth*180,ry:v.height/s.videoHeight*135};if(!l)l=x;else for(const y of["x","y","rx","ry"])l[y]+=(x[y]-l[y])*.5;u=g}else g-u>450&&(l=null);document.body.dataset.faceDetected=String(!!l)}catch{l=null}}a.clearRect(0,0,360,270);for(const[v,x]of c.entries()){if(x.vy+=Math.sin(g*.0011+v)*p*6,l&&(x.vx+=(l.x-x.x)*p*.12,x.vy+=(l.y-x.y)*p*.1),x.x+=x.vx*p,x.y+=x.vy*p,x.squish*=Math.exp(-7*p),x.angle+=x.spin*p,x.spin*=Math.exp(-.3*p),l){const S=x.x-l.x,A=x.y-l.y,R=l.rx+x.r,M=l.ry+x.r,b=Math.hypot(S/R,A/M);if(b<1){const D=S/(R*R),U=A/(M*M),z=Math.hypot(D,U)||1,q=D/z,W=U/z;x.x=l.x+S/Math.max(.01,b)*1.015,x.y=l.y+A/Math.max(.01,b)*1.015;const G=x.vx*q+x.vy*W;G<0&&(x.vx-=q*(G*1.2-5),x.vy-=W*(G*1.2-5),x.squish=.08,x.spin=(v%2?1:-1)*.15,document.body.dataset.faceBumps=String(+(document.body.dataset.faceBumps||0)+1))}}x.x<x.r&&(x.x=x.r,x.vx=Math.abs(x.vx)),x.x>360-x.r&&(x.x=360-x.r,x.vx=-Math.abs(x.vx)),x.y<x.r&&(x.y=x.r,x.vy=Math.abs(x.vy)),x.y>270-x.r&&(x.y=270-x.r,x.vy=-Math.abs(x.vy));const y=Math.hypot(x.vx,x.vy);y>45&&(x.vx*=45/y,x.vy*=45/y),a.save(),a.translate(x.x,x.y),a.rotate(x.angle),a.scale(1+x.squish,1-x.squish);const E=a.createRadialGradient(-x.r*.35,-x.r*.4,1,0,0,x.r*1.25);E.addColorStop(0,"#fff4dc"),E.addColorStop(.3,x.color),E.addColorStop(1,x.color+"bb"),a.fillStyle=E,a.beginPath();for(let S=0;S<=64;S++){const A=S/64*Math.PI*2,R=x.r*(v%2?1:.86+.14*Math.cos(A*5));a.lineTo(Math.cos(A)*R,Math.sin(A)*R)}a.closePath(),a.fill();for(const S of[-4,4])a.fillStyle="#fff7e7",a.beginPath(),a.ellipse(S,-2,3.2,4,0,0,7),a.fill(),a.fillStyle="#24242a",a.beginPath(),a.arc(S+.5,-1.4,1.6,0,7),a.fill();a.strokeStyle="#ac5069",a.lineWidth=2.4,a.lineCap="round",a.beginPath(),a.ellipse(0,5,3.5,1.8,0,0,Math.PI),a.stroke(),a.restore()}d=requestAnimationFrame(_)}return e("Wave your hand to send the balloons flying."),d=requestAnimationFrame(_),()=>{m=!1,cancelAnimationFrame(d),r.close(),o.hidden=!0,a.clearRect(0,0,360,270),document.body.dataset.faceDetected="false"}}function D_(s,e,t,n){let i=0,r=0,o=0;for(let a=8;a<n-8;a+=8)for(let c=8;c<t-8;c+=8){let l=0,u=1/0,h=0,f=0,d=0;for(let _=-2;_<=2;_++)for(let g=-2;g<=2;g++){const p=(a+_)*t+c+g;l+=Math.abs(e[p]-s[p]),d+=Math.abs(s[p]-s[p+1])}if(l<130||d<80)continue;for(let _=-5;_<=5;_++)for(let g=-5;g<=5;g++){let p=0;for(let v=-2;v<=2;v++)for(let x=-2;x<=2;x++)p+=Math.abs(e[(a+v+_)*t+c+x+g]-s[(a+v)*t+c+x]);p<u&&(u=p,h=g,f=_)}const m=1-u/l;m<.45||Math.hypot(h,f)<1||(i+=h*m,r+=f*m,o+=m)}return o<3?{x:0,y:0,strength:0}:{x:-i/o,y:-r/o,strength:Math.min(1,o/18)}}function N_(s){const e=Math.hypot(s.x,s.y);return s.strength<=.15||e<=.8?{x:0,y:0,strength:0}:{x:s.x/e,y:s.y/e,strength:Math.min(1.7,s.strength*Math.min(1,(e-.8)/3)*1.7)}}function U_(s,e,t){const n=Math.sqrt(s.reduce((o,a)=>o+a*a,0)/s.length);let i=0,r=0;for(let o=1;o<e.length;o++){const a=10**(e[o]/10);i+=a,o*t/(e.length*2)>1600&&(r+=a)}return n>.025&&r/(i||1)>.16?Math.min(1,(n-.025)*9):0}function F_(s){R_(document.querySelector("#camera-window"));const e=document.querySelector("#sensor-status"),t=document.querySelector("#camera-preview"),n=document.querySelector("#camera-toggle"),i=document.querySelector("#mic-toggle"),r=document.createElement("canvas");r.width=80,r.height=60;const o=r.getContext("2d",{willReadFrequently:!0});let a=null,c=null,l=null,u=null,h=null,f=null,d=0,m=0,_=0;const g=S=>e.textContent=/^(Camera off|Microphone off|Camera and microphone off)$/.test(S)?"":S;function p(){m++,a?.(),a=null,document.querySelector("#camera-friends")?.setAttribute("hidden",""),c?.getTracks().forEach(S=>S.stop()),c=null,t.srcObject=null,t.hidden=!0,f=null,n.disabled=!1,n.setAttribute("aria-pressed","false"),n.textContent="Camera"}function v(){_++,l?.getTracks().forEach(S=>S.stop()),l=null,u?.close(),u=null,h=null,i.disabled=!1,i.setAttribute("aria-pressed","false"),i.textContent="Blow"}n.addEventListener("click",async()=>{if(c){p(),g("Camera off");return}const S=++m;n.disabled=!0;try{const A=await navigator.mediaDevices.getUserMedia({video:{width:160,height:120,facingMode:"user"},audio:!1});if(S!==m||document.hidden){A.getTracks().forEach(R=>R.stop());return}c=A,t.srcObject=A,await t.play(),t.hidden=!1,n.setAttribute("aria-pressed","true"),n.textContent="Camera on",g("Wave a hand or fan. Make a little wind."),L_(t,g).then(R=>{S!==m?R():a=R}).catch(()=>{S===m&&g("Face tracking unavailable. Wave to make wind.")})}catch(A){p(),g(A.name==="NotAllowedError"?"Camera access was declined. You can still drag the balloons.":"Camera unavailable. You can still drag the balloons.")}finally{n.disabled=!1}}),i.addEventListener("click",async()=>{if(l){v(),g("Microphone off");return}const S=++_;i.disabled=!0;try{u=new AudioContext,await u.resume();const A=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1},video:!1});if(S!==_||document.hidden){A.getTracks().forEach(R=>R.stop());return}l=A,h=u.createAnalyser(),h.fftSize=1024,u.createMediaStreamSource(A).connect(h),i.setAttribute("aria-pressed","true"),i.textContent="Blow on",g("A gentle puff near your microphone.")}catch(A){v(),g(A.name==="NotAllowedError"?"Microphone access was declined. You can still drag the balloons.":"Microphone unavailable. You can still drag the balloons.")}finally{i.disabled=!1}});const x=new Float32Array(1024),y=new Float32Array(512);d=setInterval(()=>{if(!document.hidden){if(c&&t.readyState>=2){o.drawImage(t,0,0,80,60);const S=o.getImageData(0,0,80,60).data,A=new Uint8Array(4800);for(let R=0;R<A.length;R++)A[R]=(S[R*4]+S[R*4+1]+S[R*4+2])/3;if(f){const R=N_(D_(f,A,80,60));R.strength>0&&s(R.x,R.y,R.strength)}f=A}if(h){h.getFloatTimeDomainData(x),h.getFloatFrequencyData(y);const S=U_(x,y,u.sampleRate);S>.03&&s(.3,1,S*.75)}}},80);function E(){p(),v(),g("Camera and microphone off")}return document.addEventListener("visibilitychange",()=>{document.hidden&&E()}),window.addEventListener("pagehide",()=>{E(),clearInterval(d)}),{stop:E}}let xi;const Xi=new Map;function O_(s,e,t){const n=[s,e,t].join(":");if(Xi.has(n))return Xi.get(n);xi??=new wu({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});const i=s+64,r=e+64;xi.setPixelRatio(2),xi.setSize(i,r,!1),xi.setClearColor(0,0),xi.outputColorSpace=St;const o=new _c,a=new er(-i/2,i/2,r/2,-r/2,.1,1e3);a.position.z=400,o.add(new _u("#ffffff","#e5e2d9",2.5));const c=new Jr("#ffffff",.65);c.position.set(-100,180,250),o.add(c);const l=new si,u=i/2-13,h=r/2-13,f=22,d=[],m=t==="pearls"?16:t==="cloud"?44:t==="burst"?35:25,_=[[u-f,h-f,0],[-u+f,h-f,Math.PI/2],[-u+f,-h+f,Math.PI],[u-f,-h+f,Math.PI*1.5]];for(let x=0;x<4;x++){const[y,E,S]=_[x],A=_[(x+1)%4],R=Math.max(1,Math.round(f*Math.PI/2/m)),M=64;for(let j=0;j<=M;j++){const F=j/M,oe=S+F*Math.PI/2,he=F*R*Math.PI*2,fe=(1-Math.cos(he))*.5,Me=t==="pillow"?0:t==="ticket"?-4*fe:t==="steps"?-5*fe*fe:-6*fe;d.push(new ue(y+(f+Me)*Math.cos(oe),E+(f+Me)*Math.sin(oe)))}const b=d.at(-1),D=new ue(A[0]+f*Math.cos(A[2]),A[1]+f*Math.sin(A[2])),U=b.distanceTo(D),z=Math.max(1,Math.round(U/m)),q=Math.max(2,Math.ceil(U)),W=D.clone().sub(b).normalize(),G=new ue(W.y,-W.x);for(let j=1;j<q;j++){const F=j/q,oe=F*z*Math.PI*2,he=(1-Math.cos(oe))*.5,fe=Math.acos(Math.cos(oe))/Math.PI,Me=Math.min(1,F*z*2,(1-F)*z*2),Se=Me*Me*(3-2*Me),Y=t==="pillow"?0:t==="ticket"?-4*he:t==="zigzag"||t==="burst"?7*fe*Se:t==="steps"?5*he*he:6*he;d.push(b.clone().lerp(D,F).addScaledVector(G,Y))}}l.moveTo(d[0].x,d[0].y);for(const x of d.slice(1))l.lineTo(x.x,x.y);l.closePath();const g=new wc(l,{depth:2,bevelEnabled:!0,bevelSize:3.5,bevelThickness:3,bevelSegments:8,curveSegments:24,steps:1}),p=new Hn({color:"#fffdf7",roughness:.72,metalness:0});o.add(new tt(g,p)),xi.render(o,a);const v=`url("${xi.domElement.toDataURL("image/png")}")`;return g.dispose(),p.dispose(),Xi.size>24&&Xi.delete(Xi.keys().next().value),Xi.set(n,v),v}const Hr=["scallop","pearls","cloud","pillow","zigzag","burst","ticket","steps"],bh=(s,e,t)=>Math.max(e,Math.min(t,s));function B_(s,e,t,n=208,i=130,r=null){for(const o of[1,.85,.7,.55,.4]){const a=n*o,c=i*o;if(r&&a>r.width+.01)continue;const l=((a+64)*.993+(c+64)*.122)/2+3,u=((c+64)*.993+(a+64)*.122)/2+3,h=t.width<=620?62:12,f=t.width<=620?78:64;if(l*2+24>t.width||u*2+h+f>t.height)continue;const d=(y,E)=>({x:bh(y.x,l+12,t.width-l-12),y:bh(y.y,u+h,t.height-u-f),width:a,side:E});if(!e)return d(s,"free");const m=10,_=(e.left+e.right)/2,g=(e.top+e.bottom)/2,v=[d({x:e.right+m+l,y:g},"right"),d({x:e.left-m-l,y:g},"left"),d({x:_,y:e.top-m-u},"above"),d({x:_,y:e.bottom+m+u},"below")].filter(y=>y.x+l+m<=e.left+.01||y.x-l-m>=e.right-.01||y.y+u+m<=e.top+.01||y.y-u-m>=e.bottom-.01),x=r&&v.find(y=>y.side===r.side);if(x)return x;if(v.length)return v.sort((y,E)=>Math.hypot(y.x-s.x,y.y-s.y)-Math.hypot(E.x-s.x,E.y-s.y))[0]}return r}const z_=[{year:"2025",type:"Design",title:"Studio Design Award 2025",url:"https://designaward2025.studio.design/",image:"/works/studio-design-award.webp",color:"#2a1a0e"},{year:"2025",type:"Design",title:"Studio",url:"https://studio.design/ja",image:"/works/studio.webp",color:"#f0f0f0"},{year:"2025",type:"Design",title:"互色-互縁 goshiki-goen",titleEn:"goshiki-goen",url:"https://goshiki-goen.jp/",image:"/works/goshiki-goen.webp",color:"#1a1a18"},{year:"2025",type:"Design",title:"豊田自動織機技能専修学園",titleEn:"Toyota Industries Corporation",url:"https://gakuen.toyota-shokki.co.jp/",image:"/works/toyota-shokki.png",color:"#015EB8"},{year:"2024",type:"Design",title:"UNIPOTA",url:"https://unipota.jp/",image:"/works/unipota.webp",color:"#EA76A9"},{year:"2023",type:"Design",title:"écrit architects",url:"https://ecrit.jp/",image:"/works/ecrit.webp",color:"#DBD5CA"},{year:"2023",type:"Design",title:"MIKATA",url:"https://mi-kata.jp/",image:"/works/mikata.webp",color:"#1a29cc"},{year:"2022",type:"Design",title:"萬珍軒",titleEn:"manchinken",url:"https://manchinken.com/",image:"/works/manchinken.webp",color:"#FFC200"},{year:"2020",type:"Design",title:"L'as International",url:"https://lasinternational.co.jp/",image:"/works/las-international.webp",color:"#0086CE"}],Eh=[["and the cutest envelope goes to…","tiny drumroll, please.","I dressed up for this one.","red carpet. round body.","my acceptance speech is squeaky.","a little sparkle for the shortlist.","I brought my award-show face.","hold my air. this is fancy.","standing ovation? I can only float.","ta-da! cue the confetti."],["welcome to my happy little Studio.","big ideas. no elbows.","I put my thinking air on.","a little space for big imagination.","my desk is mostly clouds.","made with a very round brain.","studio time is my favorite time.","I clock in by floating in.","ideas live here. I visit often.","this one has my whole balloon heart."],["a little color. a little connection.","five colors? I brought my best one.","nice to meet hue.","we make a lovely little pair.","color me delighted.","a small hello goes a long way.","I think we’re color-compatible.","a knot? no, a connection.","let’s stick together, softly.","my favorite shade is together."],["tiny student. enormous curiosity.","I brought my learning face.","first lesson: stay curious.","my backpack is full of air.","little steps. big possibilities.","I’m here for the hands-on bit.","learning new tricks, no hands.","today’s homework: make something.","a very round classmate says hello.","future me is taking notes."],["uni, pota, ta-da!","this name makes me bounce.","one little peek won’t hurt.","I brought a pocketful of wonder.","unreasonably excited about this one.","pota-tally worth a look.","my curiosity has escaped again.","a little detour into delightful.","I found a thing! come see.","consider this a very soft invitation."],["a little room to dream.","I’m open-plan on the inside.","architecture, but make room for me.","my dream house has round corners.","I brought my tiny hard hat.","good spaces make me float.","a small window into this one.","measuring twice. wobbling once.","I would live in a sunbeam.","a blueprint for a little daydream."],["hello from your round little ally.","I’m on your side. literally.","a different angle? I can roll.","meet my supportive side. all of them.","a little backup, balloon edition.","looking at things a little differently.","this way to a fresh perspective.","tiny teammate reporting for duty.","I see what you did there. cute.","your friendly neighborhood point of view."],["I came for a peek. stayed hungry.","my tummy is technically all tummy.","please don’t mistake me for a dumpling.","a little feast for the eyes.","I saved room. mostly air.","five-star daydream. zero table manners.","this one made my stomach squeak.","menu, please. I can’t hold it.","my plus-one is my appetite.","warning: may cause a tiny craving."],["I brought my fancy little accent.","bonjour from a round little friend.","a tiny taste of something lovely.","my passport photo is very round.","dressed for dinner. still a balloon.","a little elegance, a little air.","let’s make this a tiny occasion.","I practiced my sophisticated nod.","small guest. excellent enthusiasm.","a lovely little place to linger."],["is this seat taken by a balloon?","I brought nothing to the table. air.","pull up a tiny chair.","open table. open mind. round guest.","my meeting notes say “hello”.","agenda item one: a little peek.","I’m available for soft discussions.","can we circle back? I am a circle.","let’s put our little heads together.","I promise not to float off mid-meeting."],["a little wiggle, written down.","dear diary: today I moved.","taking notes between bounces.","my handwriting has follow-through.","one frame at a time, little buddy.","I bookmarked the bouncy bit.","a tiny notebook full of movement.","motion sickness? motion happiness.","note to self: less wobble.","I learn best in little loops."],["forecast: scattered little ideas.","a chance of happy accidents.","I’m a very local cloud.","bring an umbrella for the brainstorm.","today feels partly playful.","creative pressure is rising. softly.","a little sunshine for your screen.","wind advisory: that might be me.","my mood is mostly curious.","a tiny forecast with big feelings."],["time flies. I float.","just a second. a cute one.","I’m running on balloon time.","a little layer of now.","tick, tock, tiny thought.","my watch is mostly wristless.","right on time for a little peek.","I have a minute. several layers.","let’s spend a second together.","fashionably late, structurally round."],["dear you: look at this.","I put a little wiggle in the mail.","a love letter to letters.","alphabet soup, extra squishy.","this one is my type.","letters having a little identity crisis.","signed, your roundest pen pal.","P.S. the letters are moving.","I dot my i’s with tiny balloons.","words, with a little wardrobe change."],["a little piece of a big hello.","peekaboo, one tile at a time.","I like my surprises bite-sized.","some assembly, much delight.","tiny pieces. grand entrance.","wait for it… there it is.","I’m very good at revealing nothing.","a puzzle with stage presence.","every little square gets a moment.","the suspense is pixel-sized."],["letters in their party outfits.","my favorite pattern is “again!”","type, but a little more playful.","a tiny alphabet sleepover.","I’m seeing letters everywhere.","repeat after me: ooh.","a well-dressed little glyph.","pattern recognition? cute recognition.","letters getting along in rows.","a little rhythm for your eyes."],["follow the little letter trail.","my words took the scenic route.","hover here, little explorer.","a sentence out for a stroll.","the alphabet has places to be.","I left a trail of tiny hellos.","words with wanderlust.","just following my type around.","a little path less typed.","let’s take these letters for a walk."],["oh. hi. yes, I see you.","my friend is a little nosy.","eye contact, extra cute edition.","look who’s looking.","two eyes. zero subtlety.","you have our full tiny attention.","I blinked. did I miss anything?","a little card with a big stare.","the eyes have it. literally.","not judging. just very curious."],["a little story under your fingertip.","keep rolling. I’ll read along.","words that like to hang around.","I’m pinned to the plot.","one little scroll at a time.","the next bit is just down there.","my attention span brought a pin.","a sentence with perfect timing.","scroll softly. words ahead.","I like a story with a little movement."],["tiny artist. very big canvas.","I brought my imaginary paintbrush.","a blank canvas is a big hello.","easel does it, little buddy.","my best work is a perfect circle.","let’s make a happy little something.","paint on my cheeks? probably.","professional daydreamer, reporting in.","a little room to make a mess.","I call this piece “mostly air”."],["this expedition is my type.","a little safari through the alphabet.","I packed extra glyphs.","bold of you to visit.","serif you around, little buddy.","my compass points to a good font.","just a curious little character.","the letters have secrets. cute ones.","let’s get lost in a nice typeface.","tiny explorer. excellent kerning."],["there’s more to me than this side.","a little depth to our friendship.","please admire my other round side.","the third dimension says hello.","I brought my spatial awareness. barely.","around the corner? more corners.","a tiny trip beyond flat.","depth perception, balloon edition.","turns out there’s a back, too.","let’s take a little look around."]];function k_(s,e,t=Math.random){const i=Eh[s%Eh.length].filter(r=>r!==e);return i[Math.floor(t()*i.length)]}const Zo=z_,Yt=document.querySelector("#work-bubble"),$n=document.querySelector("#work-image"),Ja=document.querySelector("#work-link"),Za=document.querySelector("#work-hello"),Th=new Map;let On=null,Dc=null,Ks=null,Ns=-1,$a="",Vr=null,wh="",Qa=!1;function Pu(s,e,t,n){const i=Zo[s.projectIndex%Zo.length];On?.face.speak(0),On=s,performance.now(),s.face.mouthPosition().x>0,Qa=!1;const r=k_(s.projectIndex%Zo.length,Th.get(s.projectIndex));Th.set(s.projectIndex,r),Za.textContent=r,Ks=e,Ks.say(s,t,n,r,!0),Ja.href=new URL(i.url||i.file,"https://www.masaruinaba.com/").href,$n.hidden=!i.image,i.image&&($n.src="./portfolio"+i.image,$n.alt=i.titleEn||i.title),Ja.setAttribute("aria-label","View "+(i.titleEn||i.title)),Ns=(Ns+1+Math.floor(Math.random()*(Hr.length-1)))%Hr.length,$a="",Vr=null,Yt.dataset.frame=Hr[Ns],Yt.hidden=!1,Za.hidden=!0,Yt.style.visibility="hidden",Dc?.cancel(),document.body.dataset.work=i.titleEn||i.title}function H_(s){if(!On||Yt.hidden)return;const e=On.face.mouthPosition();e.y+=On.baseSize*.12+(matchMedia("(prefers-reduced-motion: reduce)").matches?0:Math.sin(performance.now()*85e-5+On.phase+.7)*.05),e.project(s);const t=(e.x*.5+.5)*innerWidth,n=(-e.y*.5+.5)*innerHeight,i=$n.naturalWidth?208*$n.naturalHeight/$n.naturalWidth:130,r=innerWidth+":"+innerHeight;if(r!==wh&&(wh=r,Vr=null),!$n.complete||!$n.naturalWidth)return;const o=Ks?.bounds();if(!o)return;const a=o,c=B_({x:t,y:n-i/2},a,{width:innerWidth,height:innerHeight},208,i,Vr);if(!c)return;Vr=c;const l=[c.width,i,Ns].join(":");l!==$a&&($a=l,Yt.style.setProperty("--frame-surface",O_(c.width,i*c.width/208,Hr[Ns]))),Yt.style.width=c.width+"px",Yt.style.left=c.x+"px",Yt.style.top=c.y+"px",Yt.style.transform="translate(-50%,-50%)",Yt.style.visibility="visible",Yt.style.rotate=(On.projectIndex%2?7:-7)+"deg",Qa||(Qa=!0,Dc=Yt.animate([{opacity:0,transform:"translate(-50%, -50%) scale(.18) rotate(-9deg)"},{opacity:1,transform:"translate(-50%, -50%) scale(1) rotate(0deg)",offset:.7},{opacity:1,transform:"translate(-50%, -50%) scale(1) rotate(0deg)"}],{duration:matchMedia("(prefers-reduced-motion: reduce)").matches?0:480,easing:"cubic-bezier(.18,.8,.3,1)"}))}function ro(){On?.face.speak(0),Ks?.clear(),Ks=null,On=null,Dc?.cancel(),Yt.hidden=!0,Za.hidden=!0,document.body.dataset.work=""}Ja.addEventListener("click",ro);window.addEventListener("keydown",s=>{s.key==="Escape"&&ro()});function V_(s,e){const t=s.attributes.position,n=e.length,i=new Float32Array(t.count),r=e.map(c=>new ue(t.getX(c),t.getY(c))),o=r.map((c,l)=>{const u=r[(l+n-3)%n],h=r[(l+3)%n];return Math.atan2((c.x-u.x)*(h.y-c.y)-(c.y-u.y)*(h.x-c.x),(c.x-u.x)*(h.x-c.x)+(c.y-u.y)*(h.y-c.y))}),a=[];for(const c of Array.from({length:n},(l,u)=>u).sort((l,u)=>o[l]-o[u])){if(o[c]>-.12||a.length>=6)break;a.every(l=>Math.min(Math.abs(l-c),n-Math.abs(l-c))>n/12)&&a.push(c)}a.length||a.push(Math.floor(n*.13),Math.floor(n*.58)),s.userData.filmAnchors=a.map(c=>{const l=r[(c+2)%n].clone().sub(r[(c+n-2)%n]).normalize();return{frame:new Qe(r[c].x,r[c].y,-l.y,l.x),weight:o[c]<-.12?1:.3}});for(let c=0;c<t.count;c++){let l=1/0;for(let u=0;u<n;u++){const h=r[u],f=r[(u+1)%n],d=f.x-h.x,m=f.y-h.y,_=Math.max(0,Math.min(1,((t.getX(c)-h.x)*d+(t.getY(c)-h.y)*m)/(d*d+m*m||1)));l=Math.min(l,Math.hypot(t.getX(c)-h.x-d*_,t.getY(c)-h.y-m*_))}i[c]=Math.min(1,l)}s.setAttribute("filmEdge",new yt(i,1))}function G_(s,e,t){s.transparent=!0,s.opacity=1,s.depthWrite=!0,s.transmission=0,s.thickness=.14,s.ior=1.36,s.attenuationDistance=1.5,s.roughness=.34,s.clearcoat=.07,s.clearcoatRoughness=.34,s.envMapIntensity=1.45,s.onBeforeCompile=n=>{Object.assign(n.uniforms,s.userData.frost),n.uniforms.filmPhase={value:e*2.399963};const i=t.userData.filmAnchors||[],r=o=>{const a=Math.sin(e*91.7+o*117.3)*43758.5453;return a-Math.floor(a)};n.uniforms.filmProfile={value:new Qe(.8+r(1)*.5,.65+r(2)*.5,(r(3)-.5)*.14,r(4)*.4)},n.uniforms.filmAnchors={value:Array.from({length:6},(o,a)=>{const c=i[a]?.frame.clone()||new Qe,l=(r(a+40)-.5)*1.1,u=c.z,h=c.w;return c.x+=h*(r(a+50)-.5)*.09,c.y-=u*(r(a+50)-.5)*.09,c.z=u*Math.cos(l)-h*Math.sin(l),c.w=u*Math.sin(l)+h*Math.cos(l),c})},n.uniforms.foldShape={value:Array.from({length:6},(o,a)=>new Qe(.027+r(a+60)*.035,.12+r(a+70)*.16,(r(a+80)-.5)*1.2,.075+r(a+90)*.11))},n.uniforms.filmWeights={value:Array.from({length:6},(o,a)=>i[a]?i[a].weight*(r(a+12)>.32?.5+r(a+22)*.5:0):0)},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
    `)},s.customProgramCacheKey=()=>"contour-weld-film-v20"}function W_(s,e,t){const n=[...new Set(e)],i=s.map(()=>new Set);for(let u=0;u<s.length;u++)for(let h=u+1;h<s.length;h++)Math.hypot(s[u].px-s[h].px,s[u].py-s[h].py)<(s[u].radius+s[h].radius)*1.18&&(i[u].add(h),i[h].add(u));const r=s.map(()=>-1),o=n.map(()=>0),a=s.map(u=>u.radius*u.radius),c=a.reduce((u,h)=>u+h,0)/n.length,l=s.map((u,h)=>h).sort((u,h)=>a[h]-a[u]);for(const u of l){let h=0,f=1/0;for(let d=0;d<n.length;d++){let m=0;for(const g of i[u])r[g]===d&&(m+=Math.min(a[u],a[g]));const _=m/c*12+(o[d]+a[u])/c+t()*.08;_<f&&(f=_,h=d)}r[u]=h,o[h]+=a[u]}return s.forEach((u,h)=>{u.color=n[r[h]],u.body.material.color.set(u.color),u.body.material.attenuationColor.copy(u.body.material.color)}),document.body.dataset.colorAreas=JSON.stringify(o.map(u=>+(u/(c*n.length)).toFixed(3))),s.reduce((u,h,f)=>u+[...i[f]].filter(d=>d>f&&r[d]===r[f]).length,0)}function X_(s){const e=new Mt,t=[];e.setAttribute("position",new lt(s*4*3,3));for(let n=0;n<s;n++)for(let i=0;i<4;i++){const r=n*4+i,o=(n+1)%s*4+i,a=n*4+(i+1)%4,c=(n+1)%s*4+(i+1)%4;t.push(r,o,a,o,c,a)}return e.setIndex(t),e}function Iu(s,e,t){const n=s.attributes.position,i=t.length;for(let r=0;r<i;r++){const o=t[r]*3,a=t[(r+i-1)%i]*3,c=t[(r+1)%i]*3,l=e[c]-e[a],u=e[c+1]-e[a+1],h=Math.hypot(l,u)||1;for(let f=0;f<4;f++){const d=f/4*Math.PI*2,m=Math.cos(d)*.005;n.setXYZ(r*4+f,e[o]+u/h*m,e[o+1]-l/h*m,e[o+2]+Math.sin(d)*.002)}}n.needsUpdate=!0,s.computeVertexNormals(),s.computeBoundingSphere()}const q_=new us(1,32,24),Y_=new us(1,24,18),j_=new Hn({color:"#f3e8ce",roughness:.42}),K_=new Hn({color:"#202329",roughness:.28}),J_=new rn({color:"#d77f82",roughness:.33,clearcoat:.18,clearcoatRoughness:.28}),Z_=new Hn({color:"#68464c",roughness:.7}),Lu=Array.from({length:49},(s,e)=>{const t=e/48*Math.PI*2,n=.114*Math.cos(t);return new k(n,.028*Math.sin(t)+.016*(n/.114)**2,.013)}),$_=new no(new Tc(Lu.slice(0,-1),!0),72,.024,12,!0),Q_=new Ac(new si(Lu.map(s=>new ue(s.x,s.y))),16);function ey(s,e,t,n){const i=W=>{const G=Math.sin(t*127.1+W*311.7)*43758.5453;return G-Math.floor(G)},r=.91+i(1)*.18,o=.062+i(2)*.022,a=.285+i(3)*.027,c=.107+i(4)*.035,l=.79+i(5)*.17,u=new Ut;s.add(u);const h=[],f=[];let d=0,m=0,_=18+t*17.31%55,g=-10,p=0,v=0,x=0,y=0,E=-100;function S(W,G){const j=new Ut;return j.userData.anchor={x:W,y:G},h.push(j),u.add(j),j}for(const W of[-1,1]){const G=S((n?.x||0)+W*(n?.052:o),n?n.y+.025:a),j=new tt(q_,j_),F=new tt(Y_,K_);j.scale.set(.078,.088,.055),F.scale.set(.032,.035,.014),F.position.set(-W*.005,-.004,.053),G.add(j,F),f.push(G)}const A=S(n?.x||0,n?n.y-.045:c);A.add(new tt($_,J_));const R=new tt(Q_,Z_);R.position.z=.002,A.add(R);const M=new vu,b=new k(0,0,1),D=new k,U=new k,z=new k;function q(){s.updateWorldMatrix(!0,!0);for(const W of h){const G=W.userData.anchor;M.set(s.localToWorld(new k(G.x,G.y,2)),new k(0,0,-1).applyQuaternion(s.quaternion));const j=M.intersectObject(e)[0];if(!j)continue;const F=e.geometry.attributes.position,oe=[j.face.a,j.face.b,j.face.c],he=oe.map(Me=>new k().fromBufferAttribute(F,Me)),fe=new k;$t.getBarycoord(e.worldToLocal(j.point.clone()),...he,fe),W.userData.binding={ids:oe,weights:fe.toArray()}}}return{face:u,mouthPosition(){return s.updateWorldMatrix(!0,!0),A.getWorldPosition(new k)},look(W,G){x=Math.max(-1,Math.min(1,(W-(n?.x||0))*1.4)),y=Math.max(-1,Math.min(1,(G-(n?n.y+.025:a))*1.4)),E=performance.now()},speak(W){m=W},touch(){d=1},update(W,G,j,F,oe,he){h[0].userData.binding||q();const fe=e.geometry.attributes.position,Me=e.geometry.attributes.normal;for(const ne of h){const V=ne.userData.binding;if(V){D.set(0,0,0),U.set(0,0,0);for(let le=0;le<3;le++)D.addScaledVector(z.fromBufferAttribute(fe,V.ids[le]),V.weights[le]),U.addScaledVector(z.fromBufferAttribute(Me,V.ids[le]),V.weights[le]);U.normalize(),ne.position.copy(D).addScaledVector(U,n?.035:.012),ne.quaternion.setFromUnitVectors(b,U)}}const Se=D.copy(b).applyQuaternion(f[0].quaternion),Y=U.copy(b).applyQuaternion(f[1].quaternion);Se.angleTo(Y)>.15&&(Se.add(Y).normalize(),f[0].quaternion.setFromUnitVectors(b,Se),f[1].quaternion.copy(f[0].quaternion)),d=Math.max(0,d-G*2),W>_&&(g=W,_=W+35+(t*13.7+W*1.7)%65);const O=W-g,C=he?0:O>=0&&O<.2?Math.sin(O/.2*Math.PI):0;performance.now()-E>1800&&(x=Math.sin(Math.floor(W/(11+t%5))+t*2.1)*.6,y=Math.cos(Math.floor(W/17)+t)*.3);const w=1-Math.exp(-18*G);p+=(x-p)*w,v+=(y-v)*w;for(const ne of f){const V=ne.children[1];V.position.x=p*.031,V.position.y=-.002+v*.027,V.position.z=.055*Math.sqrt(Math.max(.1,1-(V.position.x/.078)**2-(V.position.y/.088)**2))+.006}const X=Math.max(C,F*.48);for(const ne of f)ne.scale.set(n?.6:r,(n?.6:r)*(1-X*.85),n?.6:r);A.scale.setScalar(n?.48:l),A.scale.y*=1+m*.7+d*.08},dispose(){s.remove(u)}}}class ty{constructor(e){this.rest=new Float64Array(e.positions),this.p=this.rest.slice(),this.prev=this.p.slice(),this.v=new Float64Array(this.p.length),this.grad=new Float64Array(this.p.length),this.tri=e.triangles,this.rim=e.rim,this.edges=[],this.bends=[];const t=new Map;for(let n=0;n<this.tri.length;n+=3){const i=this.tri.slice(n,n+3);for(let r=0;r<3;r++){const o=i[r],a=i[(r+1)%3],c=i[(r+2)%3],l=o<a?o+","+a:a+","+o;if(t.has(l)){const u=t.get(l);this.bends.push(this.edge(u,c))}else t.set(l,c),this.edges.push(this.edge(o,a))}}this.restVolume=this.volume(),this.time=0,this.reset()}edge(e,t){const n=this.rest;return[e*3,t*3,Math.hypot(n[e*3]-n[t*3],n[e*3+1]-n[t*3+1],n[e*3+2]-n[t*3+2]),0]}reset(){this.p.set(this.rest),this.prev.set(this.rest),this.v.fill(0),this.time=0}volume(e=!1){const t=this.p,n=this.grad;e&&n.fill(0);let i=0;for(let r=0;r<this.tri.length;r+=3){const o=this.tri[r]*3,a=this.tri[r+1]*3,c=this.tri[r+2]*3,l=t[a+1]*t[c+2]-t[a+2]*t[c+1],u=t[a+2]*t[c]-t[a]*t[c+2],h=t[a]*t[c+1]-t[a+1]*t[c];i+=(t[o]*l+t[o+1]*u+t[o+2]*h)/6,e&&(n[o]+=l/6,n[o+1]+=u/6,n[o+2]+=h/6,n[a]+=(t[c+1]*t[o+2]-t[c+2]*t[o+1])/6,n[a+1]+=(t[c+2]*t[o]-t[c]*t[o+2])/6,n[a+2]+=(t[c]*t[o+1]-t[c+1]*t[o])/6,n[c]+=(t[o+1]*t[a+2]-t[o+2]*t[a+1])/6,n[c+1]+=(t[o+2]*t[a]-t[o]*t[a+2])/6,n[c+2]+=(t[o]*t[a+1]-t[o+1]*t[a])/6)}return i}distances(e,t,n){const i=this.p;for(const r of e){const[o,a,c]=r,l=t/(n*n)*Math.min(1,(c/.1)**2);let u=i[o]-i[a],h=i[o+1]-i[a+1],f=i[o+2]-i[a+2],d=Math.hypot(u,h,f);if(d<1e-9)continue;const m=(-(d-c)-l*r[3])/(2+l);r[3]+=m;const _=m/d;u*=_,h*=_,f*=_,i[o]+=u,i[o+1]+=h,i[o+2]+=f,i[a]-=u,i[a+1]-=h,i[a+2]-=f}}collide(e){const t=this.p;for(let n=0;n<t.length;n+=3){t[n+2]=Math.max(.008,t[n+2]);for(const i of e){let r=t[n]-i.x,o=t[n+1]-i.y,a=t[n+2]-i.z;const c=Math.hypot(r,o,a);if(c<i.r&&c>1e-8){const l=i.r/c;t[n]=i.x+r*l,t[n+1]=i.y+o*l,t[n+2]=Math.max(.008,i.z+a*l)}}}}step(e,{tension:t=.5,wind:n=0,colliders:i=[]}={}){this.time+=e;const r=this.p,o=this.v;this.prev.set(r);const a=Math.exp(-4.5*e);for(let h=0;h<o.length;h+=3)o[h]*=a,o[h+1]*=a,o[h+2]=o[h+2]*a-.45*e;if(n){const h=n*(.75+.25*Math.sin(this.time*1.3));for(let f=0;f<this.tri.length;f+=3){const d=this.tri[f]*3,m=this.tri[f+1]*3,_=this.tri[f+2]*3,g=r[m]-r[d],p=r[m+1]-r[d+1],v=r[m+2]-r[d+2],x=r[_]-r[d],y=r[_+1]-r[d+1],E=r[_+2]-r[d+2],S=p*E-v*y,A=v*x-g*E,R=g*y-p*x,M=Math.hypot(S,A,R);if(M<1e-8)continue;const b=(h-o[d])*S/M-o[d+1]*A/M-o[d+2]*R/M,D=b*Math.abs(b)*e*18;for(const U of[d,m,_])o[U]+=S*D,o[U+1]+=A*D,o[U+2]+=R*D}}for(let h=0;h<r.length;h++)r[h]+=e*o[h];for(const h of this.edges)h[3]=0;for(const h of this.bends)h[3]=0;let c=0;const l=this.restVolume*(.985+.04*t),u=2e-6/(.2+t)/(e*e);for(let h=0;h<10;h++){this.distances(this.edges,3e-6/(.3+t),e),this.distances(this.bends,25e-6,e);const f=this.volume(!0);let d=u;for(const _ of this.grad)d+=_*_;const m=(-(f-l)-u*c)/d;c+=m;for(let _=0;_<r.length;_++)r[_]+=this.grad[_]*m;this.collide(i)}for(let h=0;h<r.length;h++)o[h]=(r[h]-this.prev[h])/e,h%3!==2&&r[h-h%3+2]<=.0081&&(o[h]*=.65)}recover(e){const t=1-Math.exp(-4*e);let n=0;for(let i=0;i<this.p.length;i++)this.p[i]+=(this.rest[i]-this.p[i])*t,this.v[i]*=Math.exp(-10*e),n=Math.max(n,Math.abs(this.p[i]-this.rest[i]));return n<.001?(this.p.set(this.rest),this.prev.set(this.rest),this.v.fill(0),!0):!1}metrics(){let e=0;for(const[t,n,i]of this.edges)e=Math.max(e,Math.abs(Math.hypot(this.p[t]-this.p[n],this.p[t+1]-this.p[n+1],this.p[t+2]-this.p[n+2])/i-1));return{volumeRatio:this.volume()/this.restVolume,maxEdgeStrain:e,finite:this.p.every(Number.isFinite)}}}const Ah=(s,e,t)=>(e.x-s.x)*(t.y-s.y)-(e.y-s.y)*(t.x-s.x);function oo(s){const e=[...new Map(s.map(i=>[`${i.x},${i.y}`,i])).values()].sort((i,r)=>i.x-r.x||i.y-r.y);if(e.length<3)return e;const t=[],n=[];for(const i of e){for(;t.length>1&&Ah(t.at(-2),t.at(-1),i)<=0;)t.pop();t.push(i)}for(const i of e.toReversed()){for(;n.length>1&&Ah(n.at(-2),n.at(-1),i)<=0;)n.pop();n.push(i)}return t.slice(0,-1).concat(n.slice(0,-1))}const $o=s=>Math.abs(s.reduce((e,t,n)=>{const i=s[(n+1)%s.length];return e+t.x*i.y-i.x*t.y},0)/2);function ny(s,e=0,t=.8){const n=s.filter((o,a)=>a%Math.max(1,Math.floor(s.length/40))===0).map(o=>new ue(o.x,o.y)),i=en.triangulateShape(n,[]).map(o=>o.map(a=>n[a]));let r=!0;for(;r;){r=!1;e:for(let o=0;o<i.length;o++)for(let a=o+1;a<i.length;a++){if(i[o].filter(u=>i[a].includes(u)).length<2)continue;const l=oo([...i[o],...i[a]]);if(Math.abs($o(l)-$o(i[o])-$o(i[a]))<1e-7){i[o]=l,i.splice(a,1),r=!0;break e}}}return i.map(o=>({points:o,zMin:e,zMax:t}))}function iy(s,e,t){return{points:oo(s),zMin:e,zMax:t}}function sy(s){s.updateMatrixWorld(!0);const e=[];let t=1/0,n=-1/0;return s.traverse(i=>{if(!i.isMesh)return;const r=i.geometry.attributes.position;for(let o=0;o<r.count;o+=Math.max(1,Math.floor(r.count/160))){const a=new k().fromBufferAttribute(r,o).applyMatrix4(i.matrixWorld);s.worldToLocal(a),e.push(a),t=Math.min(t,a.z),n=Math.max(n,a.z)}}),[{points:oo(e),zMin:t,zMax:n}]}function Us(s){const e=s.baseSize*(s.entry??1),t=e*s.squeeze*(1+s.kick*.1),n=e/s.squeeze*(1-s.kick*.09),i=s.angle+s.turn+s.kick*.06+(s.floatAngle||0),r=Math.cos(i),o=Math.sin(i);if(s.tiltX||s.tiltY){const a=new Ye().makeRotationFromEuler(new sn(s.tiltX||0,s.tiltY||0,i));return s.collision.map(c=>{const l=[];for(const d of c.points)for(const m of[c.zMin,c.zMax])l.push(new k(d.x*t,d.y*n,m*e*.85).applyMatrix4(a));const u=oo(l.map(d=>({x:s.px+(s.floatX||0)+d.x,y:s.py+(s.floatY||0)+d.y}))),h=u.map((d,m)=>{const _=u[(m+1)%u.length],g=Math.hypot(_.x-d.x,_.y-d.y);return g>1e-8?{x:-(_.y-d.y)/g,y:(_.x-d.x)/g}:null}).filter(Boolean),f=s.z+s.depth+(s.focusLift||0);return{points:u,axes:h,minX:Math.min(...u.map(d=>d.x)),maxX:Math.max(...u.map(d=>d.x)),minY:Math.min(...u.map(d=>d.y)),maxY:Math.max(...u.map(d=>d.y)),zMin:f+Math.min(...l.map(d=>d.z)),zMax:f+Math.max(...l.map(d=>d.z))}})}return s.collision.map(a=>{const c=a.points.map(u=>({x:s.px+(s.floatX||0)+u.x*t*r-u.y*n*o,y:s.py+(s.floatY||0)+u.x*t*o+u.y*n*r})),l=c.map((u,h)=>{const f=c[(h+1)%c.length],d=Math.hypot(f.x-u.x,f.y-u.y);return d>1e-8?{x:-(f.y-u.y)/d,y:(f.x-u.x)/d}:null}).filter(Boolean);return{points:c,axes:l,minX:Math.min(...c.map(u=>u.x)),maxX:Math.max(...c.map(u=>u.x)),minY:Math.min(...c.map(u=>u.y)),maxY:Math.max(...c.map(u=>u.y)),zMin:s.z+s.depth+(s.focusLift||0)+a.zMin*e*.85,zMax:s.z+s.depth+(s.focusLift||0)+a.zMax*e*.85}})}function ry(s,e){if(s.maxX<=e.minX||e.maxX<=s.minX||s.maxY<=e.minY||e.maxY<=s.minY||s.zMax<=e.zMin||e.zMax<=s.zMin)return null;const t=s.zMax-e.zMin,n=e.zMax-s.zMin;let i=Math.min(t,n),r=0,o=0,a=t<n?1:-1;for(const c of[s.axes,e.axes])for(const{x:l,y:u}of c){let h=1/0,f=-1/0,d=1/0,m=-1/0;for(const v of s.points){const x=v.x*l+v.y*u;h=Math.min(h,x),f=Math.max(f,x)}for(const v of e.points){const x=v.x*l+v.y*u;d=Math.min(d,x),m=Math.max(m,x)}if(f<=d||m<=h)return null;const _=f-d,g=m-h,p=Math.min(_,g);p<i&&(i=p,r=_<g?l:-l,o=_<g?u:-u,a=0)}return{depth:i,nx:r,ny:o,nz:a}}function oy(s,e){let t=null;for(const n of s.worldCollision)for(const i of e.worldCollision){const r=ry(n,i);r&&(!t||r.depth>t.depth)&&(t=r)}return t}function Rh(s,e){s.layerOrder=s.z,s.radius=e,s.mass=Math.max(.15,e*e),s.px=s.x,s.py=s.y,s.vx=0,s.vy=0,s.omega=0,s.turn=0,s.depth=0,s.vz=0}function ay(s,e,t,n,i,r,o){if(!e)return 0;const a=Math.min(2,Math.ceil(e/(1/60))),c=e/a;let l=0;for(let u=0;u<a;u++){for(const h of s){if(t>3.5){const m=1-Math.exp(-c*.9);h.x+=(h.px-h.x)*m,h.y+=(h.py-h.y)*m}const d=0;h.fx=((h.x-h.px)*d+Math.sin(t*.7+h.phase)*0)*h.mass,h.fy=((h.y-h.py)*d+Math.cos(t*.53+h.phase)*0)*h.mass}for(const h of s)h.worldCollision=Us(h);for(let h=0;h<s.length;h++)for(let f=h+1;f<s.length;f++){const d=s[h],m=s[f];if(Math.hypot(d.px-m.px,d.py-m.py)>(d.radius+m.radius)*1.65||!n&&Math.hypot(d.vx-m.vx,d.vy-m.vy)<.12)continue;const _=oy(d,m);if(!_||_.depth<.006)continue;l++;const{nx:g,ny:p,nz:v}=_,x=Math.min(.1,_.depth-.004),y=(m.vx-d.vx)*g+(m.vy-d.vy)*p,E=1/d.mass,S=1/m.mass,A=E+S;if(!(v||!n&&Math.abs(y)<.12)){if(d.px-=g*x*.42*E/A,d.py-=p*x*.42*E/A,m.px+=g*x*.42*S/A,m.py+=p*x*.42*S/A,y<-.12){const R=-y*(y<-2?1.06:1)/A;d.vx-=g*R*E,d.vy-=p*R*E,m.vx+=g*R*S,m.vy+=p*R*S}d.worldCollision=Us(d),m.worldCollision=Us(m)}}if(n){const h=n.actor,f=n.strength??1;h.fx+=(n.target.x-n.offset.x-h.px)*28*h.mass*(.25+.75*f),h.fy+=(n.target.y-n.offset.y-h.py)*28*h.mass*(.25+.75*f),h.omega+=(n.local.x*.25-h.turn)*c*3}for(const h of s){const f=r/2+h.radius*.3,d=o/2+h.radius*.3;Math.abs(h.px)>f&&(h.fx-=Math.sign(h.px)*(Math.abs(h.px)-f)*60*h.mass),Math.abs(h.py)>d&&(h.fy-=Math.sign(h.py)*(Math.abs(h.py)-d)*60*h.mass);const m=Math.exp(-3.8*c);h.vx=(h.vx+h.fx/h.mass*c)*m,h.vy=(h.vy+h.fy/h.mass*c)*m;const _=Math.hypot(h.vx,h.vy);_>24&&(h.vx*=24/_,h.vy*=24/_),Math.abs(h.vx)<.025&&(h.vx=0),Math.abs(h.vy)<.025&&(h.vy=0),h.px+=h.vx*c,h.py+=h.vy*c,h.omega+=(-h.turn*6+(h.vx-h.vy)*.1)*c,h.omega*=Math.exp(-5*c),h.turn+=h.omega*c,h.vz+=((n?.actor===h?-.14*(n.strength??1):0)-h.depth)*30*c,h.vz*=Math.exp(-11*c),h.depth+=h.vz*c}}return cy(s),l/a}function cy(s){const e=s.slice().sort((t,n)=>(n.speaking?100:n.layerOrder)-(t.speaking?100:t.layerOrder));for(let t=0;t<e.length;t++){const n=e[t];n.z=n.layerOrder;const i=Us({...n,floatX:0,floatY:0,floatAngle:0}),r=.2+.04*n.baseSize;n.depthEnvelope={minX:Math.min(...i.map(a=>a.minX))-r,maxX:Math.max(...i.map(a=>a.maxX))+r,minY:Math.min(...i.map(a=>a.minY))-r,maxY:Math.max(...i.map(a=>a.maxY))+r,minZ:Math.min(...i.map(a=>a.zMin))-n.z-.02*n.baseSize,maxZ:Math.max(...i.map(a=>a.zMax))-n.z+.02*n.baseSize};const o=n.depthEnvelope;for(let a=0;a<t;a++){const c=e[a],l=c.depthEnvelope;o.maxX<=l.minX||l.maxX<=o.minX||o.maxY<=l.minY||l.maxY<=o.minY||(n.z=Math.min(n.z,c.z+l.minZ-o.maxZ-.035))}n.worldCollision=Us(n)}}const nn=document.querySelector("#world"),$r=document.querySelector("#status"),Nc=Gu(),dn=matchMedia("(prefers-reduced-motion: reduce)"),Js=Number(new URLSearchParams(location.search).get("seed"))||crypto.getRandomValues(new Uint32Array(1))[0],Ch=[["#008beC","#ff5e44","#ffda19","#10c89e","#fc4a9b","#9a5ae9"],["#ff7c30","#0f86f9","#ffda1e","#fa4fa0","#12ceae","#975dea"],["#0987f7","#ffd51d","#fc54a3","#9d5ae9","#10c9a0","#ff664a"],["#ff6043","#ffdd19","#069fea","#fc50a2","#1bcb95","#9a5feb"],["#1788f9","#ff7d35","#ffd71c","#fb4b9e","#0ec7b5","#9463ea"]],as=Ch[Js%Ch.length],Uc=["round","heart","triangle","square","star","spark","petal","coil"],Ph=["petal","spark","star","coil","heart","petal","triangle","spark","coil","star","round","petal","heart","spark","square","coil"],st=[],pn=[],cs=[];let Jn=[],ec,zt,kt,Pt,Fc,Du,tc=0,nc=0,yn=12,Fn=8,kn=0,Gr=0,Nt=0,Ee=null,ly,Mi,Qo=!1,ms=3,Fs=Js;function gt(){return Fs=Fs*1664525+1013904223>>>0,Fs/4294967296}const ic=s=>new rn({color:s,roughness:.3,clearcoat:.22,clearcoatRoughness:.26,ior:1.46,transmission:0});function hy(s){const e=Ph[s%Ph.length],t=Uc.indexOf(e),n=new Ut,i=ic(as[Math.floor(gt()*as.length)]);i.roughness=.44+s%3*.025,i.clearcoat=.04,i.transmission=[.1,.18,.06,.24][s%4],i.thickness=.16,i.ior=1.38,i.attenuationDistance=1.6,i.attenuationColor.copy(i.color);const r=Du[t];r.data.noSeam||G_(i,s,r.body);const o=new tt(r.body,i),a=new tt(r.rim,i);r.data.noSeam||Ax(o),n.add(o),kt.add(n);const c=ey(n,o,s,r.data.faceAnchor);a.visible=!r.data.noSeam,c.update(s*.63,0,"awake",0,!0,!0);const l={root:n,body:o,face:c,phase:gt()*Math.PI*2,angle:(gt()-.5)*2.5,size:.48+gt()**2*1.9,squeeze:.94+gt()*.12,z:gt()*.75,kick:0,velocity:0,x:0,y:0};["round","square","triangle"].includes(e)&&(l.size*=.72),l.projectIndex=s%22,l.collision=r.collision,l.shape=r,l.rim=a,l.press=0,o.userData.actor=l,cs.push(o),c.face.traverse(u=>{u.isMesh&&(u.userData.actor=l,cs.push(u))}),st.push(l)}function uy(s){const e=new Ut,t=Fc[Jn[s%Jn.length]].clone(!0),n=new Map,i=["flower","daisy","spark","star"].includes(t.userData.itemId);t.traverse(h=>{if(h.isMesh){const f=t.userData.itemId==="bubbles"?"bubble-"+(h.name.match(/(\d+)$/)?.[1]||"0"):h.material.name;n.has(f)||n.set(f,as[(s*3+n.size*2)%as.length]),h.material=h.material.clone(),h.material.color.set(i?/^Center/i.test(h.name)?"#f2bf2e":"#fffaf1":n.get(f)),h.material.roughness=.42}}),e.add(t),kt.add(e);const r=new wn().setFromObject(t),o=r.getSize(new k),a=r.getCenter(new k);t.position.sub(a);const c=(.55+gt()*.4)/Math.max(o.x,o.y);t.scale.setScalar(c),t.position.multiplyScalar(c);const l=new Ut;l.add(t),e.add(l),l.rotation.set((gt()<.5?-1:1)*(.2+gt()*.55),(gt()<.5?-1:1)*(.18+gt()*.62),0);const u={root:e,phase:gt()*6.28,angle:gt()*6.28,size:1,squeeze:1,z:.8+gt()*.25,kick:0,velocity:0,x:0,y:0};u.collision=sy(e),e.traverse(h=>{h.isMesh&&(h.userData.actor=u,cs.push(h))}),pn.push(u)}function fy(){Ee=null,Mi?.clear(),ro();for(const s of st)s.face.dispose(),kt.remove(s.root),s.body.material.dispose(),s.isGlyph&&s.body.geometry.dispose(),s.sim&&(s.body.geometry.dispose(),s.rim.geometry.dispose());for(const s of pn)kt.remove(s.root),s.root.traverse(e=>{e.isMesh&&(e.material.dispose(),s.letter&&e.geometry.dispose())});st.length=pn.length=cs.length=0,Fs=Js;for(let s=0;s<Math.ceil(tc*nc*1.15);s++)hy(s);Jn=Fc.map((s,e)=>e);for(let s=Jn.length-1;s>0;s--){const e=Math.floor(gt()*(s+1));[Jn[s],Jn[e]]=[Jn[e],Jn[s]]}for(let s=0;s<Math.max(5,Math.ceil(tc*nc*.26));s++)uy(s);document.body.dataset.letters="",document.body.dataset.seed=String(Js),document.body.dataset.palette=as.join(","),document.body.dataset.shapes=Uc.join(","),document.body.dataset.monsters=st.length,document.body.dataset.items=pn.length}function Ih(){const s=innerWidth,e=innerHeight;zt.setSize(s,e,!1),zt.setPixelRatio(Math.min(devicePixelRatio,1.25));const t=Math.max(3,Math.round(s/230)),n=Math.max(s<600?5:3,Math.round(e/220));yn=t*1.9,Fn=yn*e/s,Pt.left=-yn/2,Pt.right=yn/2,Pt.top=Fn/2,Pt.bottom=-Fn/2,Pt.updateProjectionMatrix(),st.length||(tc=t,nc=n,fy()),Fs=(Js^9678359)>>>0;const i=Math.sqrt(yn*Fn/st.length);st.forEach(a=>{a.baseSize=a.size*i/1.9,a.radius=a.baseSize*.89,a.x=(gt()-.5)*(yn+.7),a.y=(gt()-.5)*(Fn+.7)});const r=st.reduce((a,c)=>a+Math.PI*c.radius*c.radius,0),o=Math.sqrt(yn*Fn*1.35/r);for(const a of st)a.baseSize*=o,a.radius*=o;for(let a=0;a<180;a++){for(let c=0;c<st.length;c++)for(let l=c+1;l<st.length;l++){const u=st[c],h=st[l],f=h.x-u.x,d=h.y-u.y,m=Math.hypot(f,d)||.001,_=(u.radius+h.radius)*.93-m;if(_>0){const g=_*.23;u.x-=f/m*g,u.y-=d/m*g,h.x+=f/m*g,h.y+=d/m*g}}for(const c of st)c.x=Gs.clamp(c.x,-yn/2+c.radius*.36,yn/2-c.radius*.36),c.y=Gs.clamp(c.y,-Fn/2+c.radius*.36,Fn/2-c.radius*.36)}pn.forEach((a,c)=>{const l=st[c%st.length],u=st.filter(f=>f!==l).sort((f,d)=>Math.hypot(f.x-l.x,f.y-l.y)-Math.hypot(d.x-l.x,d.y-l.y)),h=u[c%Math.min(3,u.length)];a.x=(l.x+h.x)/2+(gt()-.5)*.3,a.y=(l.y+h.y)/2+(gt()-.5)*.3,a.baseSize=i/1.9});for(const a of st)Rh(a,a.radius);for(const a of pn)Rh(a,(a.letter?.6:.29)*a.baseSize);if(Qo||(document.body.dataset.colorConflicts=String(W_(st,as,gt))),!Qo&&!dn.matches)for(const a of[...st,...pn])a.px=a.x*.06,a.py=a.y*.06,a.vx=a.x*3.9,a.vy=a.y*3.9,a.turn=(gt()-.5)*2.7,a.omega=(gt()-.5)*5,a.entry=.07,a.entryVelocity=0,a.delay=gt()*.13;Qo=!0,Ti(0),mn()}function Lh(s,e,t){s.delay>0?s.delay-=e:s.entry!==void 0&&(s.entryVelocity+=((1-s.entry)*90-s.entryVelocity*10)*e,s.entry+=s.entryVelocity*e),s.velocity+=(-s.kick*55-s.velocity*15)*e,s.kick+=s.velocity*e;const n=s.phase,i=Nt,r=dn.matches||Ee?.actor===s?0:1;s.floatBlend=(s.floatBlend??r)+(r-(s.floatBlend??r))*(1-Math.exp(-4*e)),s.floatX=Math.sin(i*(.25+n%1*.18)+n)*(.045+n%1*.07)*s.floatBlend,s.floatY=Math.sin(i*(.32+n%1.3*.13)+n*1.7)*(.075+n%1*.095)*s.floatBlend,s.floatAngle=Math.sin(i*(.22+n%1*.13)+n*2.3)*.018*s.floatBlend;const o=s.speaking?Math.max(0,4.1-s.layerOrder):0;s.focusLift=(s.focusLift||0)+(o-(s.focusLift||0))*(1-Math.exp(-10*e)),s.root.position.set(s.px+s.floatX,s.py+s.floatY,s.z+s.depth+s.focusLift),s.root.rotation.set(s.tiltX||0,s.tiltY||0,s.angle+s.turn+s.kick*.06+s.floatAngle);const a=1+Math.sin(i*(.48+n%1*.17)+n)*(dn.matches?0:.006),c=s.baseSize*a*(s.entry??1);s.root.scale.set(c*s.squeeze*(1+s.kick*.1),c/s.squeeze*(1-s.kick*.09),c*.85),t&&(dy(s,e),s.face.update(i+n,e,"awake",Math.max(0,s.kick)*.3+s.press*.7,!1,dn.matches))}function dy(s,e){if(!s.sim||!s.deforming||!e)return;const t=Ee?.actor===s&&!Ee.rotating;if(s.press+=((t?Ee.strength:0)-s.press)*(1-Math.exp(-14*e)),t&&s.press>.65&&!Ee.feltCompression&&(Ee.feltCompression=!0,Nc.pulse("grip",s.press)),t){const i=Ee.local,r=Math.ceil(e*120);for(let o=0;o<r;o++)s.sim.step(e/r,{tension:.65,colliders:[{x:i.x,y:i.y,z:i.z+.29-.24*s.press,r:.32}]})}else s.sim.recover(e)&&(s.deforming=!1,s.press=0);const n=s.body.geometry.attributes.position.array;s.shape.skin.stencils.forEach((i,r)=>n.set(Cu(s.sim.p,i),r*3)),s.body.geometry.attributes.position.needsUpdate=!0,s.body.geometry.computeVertexNormals(),s.body.geometry.computeBoundingSphere(),s.shape.data.noSeam||Iu(s.rim.geometry,n,s.shape.skin.rim)}function Ti(s){const e=[...st,...pn];Ee&&(Ee.elapsed+=s,Ee.strength=.08+.92*Math.min(1,Ee.elapsed/2));const t=!!Ee||Nt<ms,n=t?ay(e,s,Nt,Ee?.rotating?null:Ee,dn.matches,yn,Fn):0;if(!t)for(const i of e)i.angle+=i.turn,i.turn=0,i.entry=1,i.entryVelocity=0,i.vx=i.vy=i.omega=i.velocity=i.vz=0,i.kick=0,i.x=i.px,i.y=i.py;for(const i of st)Lh(i,s,!0);for(const i of pn)Lh(i,s,!1);my(),Mi?.update(Nt,s,st,Pt,dn.matches,Ee),H_(Pt),ec?.begin(),zt.render(kt,Pt),ec?.end(),Nt-(Ti.metricsAt||-1)>.25&&(Ti.metricsAt=Nt,document.body.dataset.triangles=String(zt.info.render.triangles),document.body.dataset.drawCalls=String(zt.info.render.calls),document.body.dataset.time=Nt.toFixed(2),document.body.dataset.sleeping=String(!t),document.body.dataset.entry=String(Math.min(...e.map(i=>i.entry??1)).toFixed(3)),document.body.dataset.motion=JSON.stringify({contacts:Math.round(n),speed:+e.reduce((i,r)=>i+Math.hypot(r.vx,r.vy),0).toFixed(3),press:+(Ee?.actor.press||0).toFixed(3),deforming:st.filter(i=>i.deforming).length}))}function sc(s){if(kn=0,document.hidden)return;if(Nt>=ms&&!Ee&&s-Gr<32){kn=requestAnimationFrame(sc);return}const e=Math.min((s-Gr)/1e3||0,.035);Gr=s,Nt+=e,Ti(e),(!dn.matches||Ee||[...st,...pn].some(t=>t.deforming||Math.abs(t.kick)+Math.abs(t.velocity)+Math.hypot(t.vx,t.vy)>.002))&&(kn=requestAnimationFrame(sc))}function mn(){!kn&&!document.hidden&&(Gr=performance.now(),kn=requestAnimationFrame(sc))}function py(s,e,t){if(st.length){ms=Nt+5;for(const n of[...st,...pn]){const i=t*6/Math.sqrt(Math.max(.5,n.mass));n.vx+=s*i,n.vy+=e*i,n.omega+=(n.phase/Math.PI-1)*i*.09,n.face?.touch(s*.1,e*.1)}document.body.dataset.wind=String(t.toFixed(3)),mn()}}function Nu(s,e=1){ms=Nt+2.3,s.velocity=5*e,s.vx+=Math.cos(s.phase)*.7*e,s.vy+=Math.sin(s.phase)*.7*e,s.omega+=.35*e,s.face?.touch(0,.4),document.body.dataset.touches=String(+(document.body.dataset.touches||0)+1),mn()}const ti=new vu,Qr=new ue;let Oc=!1;nn.addEventListener("pointerleave",()=>{Oc=!1});function my(){if(!Oc)return;const s=Qr.x*Pt.right,e=Qr.y*Pt.top;for(const t of st){if(Math.hypot(s-t.root.position.x,e-t.root.position.y)>t.radius+1.8)continue;t.root.updateWorldMatrix(!0,!1);const n=t.root.worldToLocal(new k(s,e,t.root.position.z));t.face.look(n.x,n.y)}}const gy=new Kn(new k(0,0,1),0);function Uu(s){return Qr.set(s.clientX/innerWidth*2-1,1-s.clientY/innerHeight*2),ti.setFromCamera(Qr,Pt),ti.ray.intersectPlane(gy,new k)}function xy(s){if(!s?.face)return!1;const e=s.face.normal.clone().applyNormalMatrix(new We().getNormalMatrix(s.object.matrixWorld));return Math.abs(e.z)<.68}nn.addEventListener("pointerdown",s=>{if(!Pt||s.button!==0)return;const e=Uu(s);if(Ee){if(s.pointerType==="touch"&&s.pointerId!==Ee.id){Ee.points.set(s.pointerId,e);const a=[...Ee.points.values()];Ee.twistStart=Math.atan2(a[1].y-a[0].y,a[1].x-a[0].x),Ee.rotationStart=Ee.actor.angle,Ee.tiltStartX=Ee.actor.tiltX||0,Ee.tiltStartY=Ee.actor.tiltY||0,Ee.centerStart=a[0].clone().add(a[1]).multiplyScalar(.5),Ee.rotating=Ee.moved=!0,nn.setPointerCapture(s.pointerId)}return}const t=Mi?.invitedActor(ti);if(t){Pu(t,Mi,Nt,dn.matches);return}if(Mi?.hit(ti))return;ro();const n=ti.intersectObjects(cs,!1)[0];if(!n)return;const i=n.object.userData.actor,r=i.body?ti.intersectObject(i.body)[0]:null,o=i.root.worldToLocal((r?.point||n.point).clone());Ee={id:s.pointerId,actor:i,startX:s.clientX,startY:s.clientY,startAt:performance.now(),elapsed:0,strength:.08,moved:!1,rotating:s.shiftKey||xy(r||n),rotationStart:i.angle,tiltStartX:i.tiltX||0,tiltStartY:i.tiltY||0,points:new Map([[s.pointerId,e]]),local:o,target:e,offset:new k(e.x-i.px,e.y-i.py,0)},i.body&&!i.isGlyph&&!Ee.rotating&&(i.sim||(i.sim=new ty(i.shape.data),i.body.geometry=i.body.geometry.clone(),i.rim.geometry=i.rim.geometry.clone()),i.deforming=!0),Nc.pulse("press",.35),nn.setPointerCapture(s.pointerId),Ee.rotating?ms=Nt+2.3:Nu(i,.08),document.body.dataset.held="true",mn()});nn.addEventListener("pointermove",s=>{if(!Pt)return;const e=Uu(s);if(Oc=!0,Ee||(nn.style.cursor=ti.intersectObjects(cs,!1).length?"grab":"default"),mn(),!Ee||!Ee.points.has(s.pointerId))return;if(Ee.points.set(s.pointerId,e),Math.hypot(s.clientX-Ee.startX,s.clientY-Ee.startY)>9&&(Ee.moved=!0),Ee.rotating){const n=[...Ee.points.values()];if(n.length>1){const i=n[0].clone().add(n[1]).multiplyScalar(.5);Ee.actor.tiltX=Ee.tiltStartX-(i.y-Ee.centerStart.y)*.7,Ee.actor.tiltY=Ee.tiltStartY+(i.x-Ee.centerStart.x)*.7,Ee.actor.angle=Ee.rotationStart+Math.atan2(n[1].y-n[0].y,n[1].x-n[0].x)-Ee.twistStart}else Ee.actor.tiltX=Ee.tiltStartX+(s.clientY-Ee.startY)*.008,Ee.actor.tiltY=Ee.tiltStartY+(s.clientX-Ee.startX)*.008;Ee.actor.turn=Ee.actor.omega=0,document.body.dataset.rotation3d=JSON.stringify({x:Ee.actor.tiltX,y:Ee.actor.tiltY}),document.body.dataset.rotation=Ee.actor.angle.toFixed(3),mn();return}Ee.target=e;const t=Ee.actor.body&&ti.intersectObject(Ee.actor.body)[0];if(t){const n=Ee.actor.root.worldToLocal(t.point.clone());Ee.local.x=n.x,Ee.local.y=n.y}mn()});function Bc(s=!1){Ee&&(s&&(Ee.moved||Ee.actor.press>.15)&&Nc.pulse("release",.5),ms=Nt+2.3,s&&!Ee.rotating&&!Ee.moved&&performance.now()-Ee.startAt<650&&Ee.actor.face&&Pu(Ee.actor,Mi,Nt,dn.matches)),Ee=null,document.body.dataset.held="false",mn()}nn.addEventListener("pointerup",()=>Bc(!0));for(const s of["pointercancel","lostpointercapture"])nn.addEventListener(s,()=>Bc(!1));window.addEventListener("blur",()=>Bc(!1));nn.addEventListener("keydown",s=>{s.code==="Space"&&(s.preventDefault(),st.forEach(e=>Nu(e)))});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(kn),kn=0):mn()});dn.addEventListener("change",()=>{Ti(0),mn()});nn.addEventListener("webglcontextlost",s=>{s.preventDefault(),cancelAnimationFrame(kn),kn=0,$r.textContent="Restoring the playground…",$r.hidden=!1});nn.addEventListener("webglcontextrestored",()=>location.reload());function _y(s){const e=new Ut,t=s==="daisy"?7:5,n=new us(1,24,16),i=ic("#fffaf1"),r=ic("#f2bf2e");i.name="Petals",r.name="Center";for(let a=0;a<t;a++){const c=a/t*Math.PI*2,l=new tt(n,i);l.name="Petal",l.position.set(Math.cos(c)*.29,Math.sin(c)*.29,0),l.scale.set(.32,.145,.14),l.rotation.z=c,e.add(l)}const o=new tt(n,r);return o.name="Center",o.position.z=.14,o.scale.set(.19,.19,.15),e.add(o),e.userData.itemId=s,e}async function yy(){try{zt=new wu({canvas:nn,antialias:!0}),ec=Wu(zt),zt.transmissionResolutionScale=.5,zt.setClearColor("#dcd8d0"),zt.toneMapping=Nh,zt.toneMappingExposure=.98,kt=new _c,Pt=new er(-6,6,4,-4,.1,200),Pt.position.set(0,0,15);const s=new qa(zt),e=new Ox,t=s.fromScene(e,.04);kt.environment=t.texture,kt.environmentIntensity=.32,e.dispose(),s.dispose(),kt.add(new _u("#fffaf0","#c9bfac",.78));const n=new Jr("#fff7ee",1.9);n.position.set(-5,7,9),kt.add(n);const i=new Jr("#e2ecff",.4);i.position.set(5,-2,6),kt.add(i);const r=await fetch("./membrane.json");if(!r.ok)throw Error("Membrane load failed");await r.json();const o=Nx();ly=y_(o),document.body.dataset.shapeSource="Authored classic balloon outlines",Du=Uc.map(u=>{const h=Rx(Ux(ph[u]?Px(o,ph[u]):S_(o,u))),f={stencils:Array.from({length:h.positions.length/3},(p,v)=>[[v,1]]),triangles:h.triangles,rim:h.rim},d=f.stencils.flatMap(p=>Cu(h.positions,p)),m=new Mt;m.setAttribute("position",new lt(d,3)),m.setIndex(f.triangles),m.computeVertexNormals(),h.noSeam||V_(m,f.rim);const _=X_(f.rim.length);Iu(_,d,f.rim),_.setAttribute("filmEdge",new yt(new Float32Array(_.attributes.position.count),1));let g;if(h.noSeam){g=[];for(let p=0;p<140;p+=5){const v=[];let x=1/0,y=-1/0;for(let E=p;E<=Math.min(144,p+5);E++)for(let S=0;S<12;S++){const A=E*12+S,R=h.positions[A*3+2];v.push({x:h.positions[A*3],y:h.positions[A*3+1]}),x=Math.min(x,R),y=Math.max(y,R)}g.push(iy(v,x,y))}}else{const p=f.rim.map(v=>({x:d[v*3],y:d[v*3+1]}));m.computeBoundingBox(),g=ny(p,m.boundingBox.min.z-.012,m.boundingBox.max.z+.1)}return{body:m,rim:_,data:h,skin:f,collision:g}});const a=await fetch("./items/manifest.json");if(!a.ok)throw Error("Items load failed");const c=(await a.json()).filter(u=>!["bean","pillow","cloud","leaf"].includes(u.id)),l=new Bx;Fc=await Promise.all(c.map(async u=>{if(["flower","daisy","spark","star"].includes(u.id))return _y(u.id);const h=await l.loadAsync("./items/"+u.id+".glb");return h.scene.traverse(f=>{if(f.isMesh){for(const d of[f.geometry.attributes.position,f.geometry.attributes.normal])if(d){for(let m=0;m<d.count;m++){const _=d.getY(m),g=d.getZ(m);d.setY(m,-g),d.setZ(m,_)}d.needsUpdate=!0}if(f.geometry.computeBoundingBox(),f.geometry.computeBoundingSphere(),f.material.side=u.id==="heart"?ln:En,u.id!=="heart"&&!f.material.map){const d=f.geometry;f.geometry=Fx(d),f.geometry!==d&&d.dispose()}}}),h.scene.userData.itemId=u.id,h.scene})),await document.fonts.load("400 80px fatfrank"),document.body.dataset.typeface=document.fonts.check("400 80px fatfrank")?"FatFrank":"fallback",Mi=w_(kt),F_(py),Ih(),Dx(kt,zt,()=>Ti(0)),window.addEventListener("resize",Ih),await zt.compileAsync(kt,Pt),Ti(0),$r.hidden=!0,document.body.dataset.ready="true",mn()}catch(s){console.error(s),$r.textContent="Could not load the playground. Please refresh.",document.body.dataset.error=s.message}}document.querySelector("#reload-crowd").addEventListener("click",s=>{const e=s.currentTarget;e.disabled=!0,e.dataset.reloading="true",setTimeout(()=>location.reload(),dn.matches?0:180)});yy();
