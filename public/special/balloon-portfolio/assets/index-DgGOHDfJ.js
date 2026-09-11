(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ml="180",sf=0,sc=1,rf=2,jh=1,of=2,kn=3,Cn=0,kt=1,mn=2,oi=0,Zi=1,rc=2,oc=3,ac=4,af=5,Ei=100,lf=101,cf=102,hf=103,uf=104,ff=200,df=201,pf=202,mf=203,ca=204,ha=205,gf=206,xf=207,yf=208,_f=209,vf=210,Mf=211,Sf=212,bf=213,Ef=214,ua=0,fa=1,da=2,ns=3,pa=4,ma=5,ga=6,xa=7,gl=0,Tf=1,wf=2,ai=0,Af=1,Rf=2,Cf=3,xl=4,Pf=5,If=6,Lf=7,lc="attached",Df="detached",Kh=300,is=301,ss=302,ya=303,_a=304,ao=306,rs=1e3,ri=1001,Zr=1002,Pt=1003,$h=1004,Ls=1005,qt=1006,Gr=1007,Tn=1008,Pn=1009,Jh=1010,Zh=1011,Ws=1012,yl=1013,wi=1014,xn=1015,sr=1016,_l=1017,vl=1018,Xs=1020,Qh=35902,eu=35899,tu=1021,nu=1022,an=1023,qs=1026,Ys=1027,Ml=1028,Sl=1029,iu=1030,bl=1031,El=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,va=35840,Ma=35841,Sa=35842,ba=35843,Ea=36196,Ta=37492,wa=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,Ia=37812,La=37813,Da=37814,Na=37815,Ua=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Ha=36492,Va=36494,Ga=36495,Wa=36283,Xa=36284,qa=36285,Ya=36286,js=2300,Ks=2301,_o=2302,cc=2400,hc=2401,uc=2402,Nf=2500,Uf=0,su=1,ja=2,Ff=3200,Of=3201,Tl=0,Bf=1,ii="",Et="srgb",Ht="srgb-linear",Qr="linear",lt="srgb",Di=7680,fc=519,zf=512,kf=513,Hf=514,ru=515,Vf=516,Gf=517,Wf=518,Xf=519,Ka=35044,cr=35048,dc="300 es",wn=2e3,eo=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Us=Math.PI/180,os=180/Math.PI;function cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function wl(i,e){return(i%e+e)%e}function qf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yf(i,e,t){return i!==e?(t-i)/(e-i):0}function Fs(i,e,t){return(1-t)*i+t*e}function jf(i,e,t,n){return Fs(i,e,1-Math.exp(-t*n))}function Kf(i,e=1){return e-Math.abs(wl(i,e*2)-e)}function $f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qf(i,e){return i+Math.random()*(e-i)}function ed(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(i){return i*Us}function id(i){return i*os}function sd(i){return(i&i-1)===0&&i!==0}function rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function od(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ad(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $s={DEG2RAD:Us,RAD2DEG:os,generateUUID:cn,clamp:$e,euclideanModulo:wl,mapLinear:qf,inverseLerp:Yf,lerp:Fs,damp:jf,pingpong:Kf,smoothstep:$f,smootherstep:Jf,randInt:Zf,randFloat:Qf,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:od,setQuaternionFromProperEuler:ad,normalize:rt,denormalize:gn};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*y,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,p*v);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}const _=a*v;if(l=l*m+f*_,c=c*m+d*_,u=u*m+g*_,h=h*m+y*_,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new B,mc=new ui;class Xe{constructor(e,t,n,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],x=s[4],_=s[7],b=s[2],E=s[5],R=s[8];return r[0]=o*y+a*v+l*b,r[3]=o*m+a*x+l*E,r[6]=o*p+a*_+l*R,r[1]=c*y+u*v+h*b,r[4]=c*m+u*x+h*E,r[7]=c*p+u*_+h*R,r[2]=f*y+d*v+g*b,r[5]=f*m+d*x+g*E,r[8]=f*p+d*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(a*n-s*o)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=d*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Xe;function ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){const i=Js("canvas");return i.style.display="block",i}const gc={};function Zs(i){i in gc||(gc[i]=!0,console.warn(i))}function cd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const xc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){const i={enabled:!0,workingColorSpace:Ht,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ht]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}const et=hd();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ni;class ud{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ni===void 0&&(Ni=Js("canvas")),Ni.width=e.width,Ni.height=e.height;const s=Ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fd=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(So(s[o].image)):r.push(So(s[o]))}else r=So(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ud.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;const bo=new B;class Tt extends ms{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=ri,s=ri,r=qt,o=Tn,a=an,l=Pn,c=Tt.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=cn(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Kh;Tt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(d+1)/2,b=(p+1)/2,E=(u+f)/4,R=(h+y)/4,C=(g+m)/4;return x>_&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=R/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=C/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=C/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends ms{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Tt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Al(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends pd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class au extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),ur.subVectors(this.max,bs),Ui.subVectors(e.a,bs),Fi.subVectors(e.b,bs),Oi.subVectors(e.c,bs),jn.subVectors(Fi,Ui),Kn.subVectors(Oi,Fi),pi.subVectors(Ui,Oi);let t=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-pi.y,pi.x,0];return!Eo(t,Ui,Fi,Oi,ur)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,Ui,Fi,Oi,ur))?!1:(fr.crossVectors(jn,Kn),t=[fr.x,fr.y,fr.z],Eo(t,Ui,Fi,Oi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new B,new B,new B,new B,new B,new B,new B,new B],fn=new B,hr=new In,Ui=new B,Fi=new B,Oi=new B,jn=new B,Kn=new B,pi=new B,bs=new B,ur=new B,fr=new B,mi=new B;function Eo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gd=new In,Es=new B,To=new B;class _n{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(To)),this.expandByPoint(Es.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new B,wo=new B,dr=new B,$n=new B,Ao=new B,pr=new B,Ro=new B;class rr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wo.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(wo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(dr),a=$n.dot(this.direction),l=-$n.dot(dr),c=$n.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(wo).addScaledVector(dr,f),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){Ao.subVectors(t,e),pr.subVectors(n,e),Ro.crossVectors(Ao,pr);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(pr.crossVectors($n,pr));if(l<0)return null;const c=a*this.direction.dot(Ao.cross($n));if(c<0||l+c>o)return null;const u=-a*$n.dot(Ro);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,g,y,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,y,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,y=c*h;t[0]=f+y*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,yd)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Jn.crossVectors(n,$t),Jn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Jn.crossVectors(n,$t)),Jn.normalize(),mr.crossVectors($t,Jn),s[0]=Jn.x,s[4]=mr.x,s[8]=$t.x,s[1]=Jn.y,s[5]=mr.y,s[9]=$t.y,s[2]=Jn.z,s[6]=mr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],x=n[7],_=n[11],b=n[15],E=s[0],R=s[4],C=s[8],S=s[12],M=s[1],D=s[5],F=s[9],W=s[13],K=s[2],j=s[6],H=s[10],O=s[14],U=s[3],Z=s[7],G=s[11],ce=s[15];return r[0]=o*E+a*M+l*K+c*U,r[4]=o*R+a*D+l*j+c*Z,r[8]=o*C+a*F+l*H+c*G,r[12]=o*S+a*W+l*O+c*ce,r[1]=u*E+h*M+f*K+d*U,r[5]=u*R+h*D+f*j+d*Z,r[9]=u*C+h*F+f*H+d*G,r[13]=u*S+h*W+f*O+d*ce,r[2]=g*E+y*M+m*K+p*U,r[6]=g*R+y*D+m*j+p*Z,r[10]=g*C+y*F+m*H+p*G,r[14]=g*S+y*W+m*O+p*ce,r[3]=v*E+x*M+_*K+b*U,r[7]=v*R+x*D+_*j+b*Z,r[11]=v*C+x*F+_*H+b*G,r[15]=v*S+x*W+_*O+b*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+y*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],y=e[13],m=e[14],p=e[15],v=h*m*c-y*f*c+y*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,_=u*y*c-g*h*c+g*a*d-o*y*d-u*a*p+o*h*p,b=g*h*l-u*y*l-g*a*f+o*y*f+u*a*m-o*h*m,E=t*v+n*x+s*_+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(y*f*r-h*m*r-y*s*d+n*m*d+h*s*p-n*f*p)*R,e[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*R,e[4]=x*R,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*R,e[8]=_*R,e[9]=(g*h*r-u*y*r-g*n*d+t*y*d+u*n*p-t*h*p)*R,e[10]=(o*y*r-g*a*r+g*n*c-t*y*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*R,e[12]=b*R,e[13]=(u*y*s-g*h*s+g*n*f-t*y*f-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*y*s-g*n*l+t*y*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,y=o*u,m=o*h,p=a*h,v=l*c,x=l*u,_=l*h,b=n.x,E=n.y,R=n.z;return s[0]=(1-(y+p))*b,s[1]=(d+_)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+x)*R,s[9]=(m-v)*R,s[10]=(1-(f+y))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,u=1/o,h=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,t.setFromRotationMatrix(dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=wn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===wn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===eo)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=wn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===wn)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===eo)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new B,dn=new Ye,xd=new B(0,0,0),yd=new B(1,1,1),Jn=new B,mr=new B,$t=new B,_c=new Ye,vc=new ui;class Qt{constructor(e=0,t=0,n=0,s=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _d=0;const Mc=new B,zi=new ui,Fn=new Ye,gr=new B,Ts=new B,vd=new B,Md=new ui,Sc=new B(1,0,0),bc=new B(0,1,0),Ec=new B(0,0,1),Tc={type:"added"},Sd={type:"removed"},ki={type:"childadded",child:null},Co={type:"childremoved",child:null};class dt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new B,t=new Qt,n=new ui,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Xe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ts,gr,this.up):Fn.lookAt(gr,Ts,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Fn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sd),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new B(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new B,On=new B,Po=new B,Bn=new B,Hi=new B,Vi=new B,wc=new B,Io=new B,Lo=new B,Do=new B,No=new Qe,Uo=new Qe,Fo=new Qe;class on{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),On.subVectors(n,t),Po.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(On),l=pn.dot(Po),c=On.dot(On),u=On.dot(Po),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return No.setScalar(0),Uo.setScalar(0),Fo.setScalar(0),No.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(No,r.x),o.addScaledVector(Uo,r.y),o.addScaledVector(Fo,r.z),o}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),On.subVectors(e,t),pn.cross(On).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),pn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Vi.subVectors(r,n),Io.subVectors(e,n);const l=Hi.dot(Io),c=Vi.dot(Io);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,s);const u=Hi.dot(Lo),h=Vi.dot(Lo);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Hi,o);Do.subVectors(e,r);const d=Hi.dot(Do),g=Vi.dot(Do);if(g>=0&&d<=g)return t.copy(r);const y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Vi,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return wc.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(wc,a);const p=1/(m+y+f);return o=y*p,a=f*p,t.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Oo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=wl(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Oo(o,r,e+1/3),this.g=Oo(o,r,e),this.b=Oo(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=lu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return et.workingToColorSpace(Lt.copy(this),e),Math.round($e(Lt.r*255,0,255))*65536+Math.round($e(Lt.g*255,0,255))*256+Math.round($e(Lt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Et){et.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(xr);const n=Fs(Zn.h,xr.h,t),s=Fs(Zn.s,xr.s,t),r=Fs(Zn.l,xr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ze;ze.NAMES=lu;let bd=0;class yn extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Zi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gn extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,yr=new de;let Ed=0;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class cu extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hu extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Td=0;const nn=new Ye,Bo=new dt,Gi=new B,Jt=new In,ws=new In,Rt=new B;class bt extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?hu:cu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Jt.min,ws.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,ws.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(ws.min),Jt.expandByPoint(ws.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),Rt.add(Gi)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,f=new de,d=new de,g=new de,y=new B,m=new B;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[C].add(y),a[S].add(y),a[M].add(y),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],D=M.start,F=M.count;for(let W=D,K=D+F;W<K;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new B,_=new B,b=new B,E=new B;function R(C){b.fromBufferAttribute(s,C),E.copy(b);const S=a[C];x.copy(S),x.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(E,S);const D=_.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,D)}for(let C=0,S=v.length;C<S;++C){const M=v[C],D=M.start,F=M.count;for(let W=D,K=D+F;W<K;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new Ye,gi=new rr,_r=new _n,Rc=new B,vr=new B,Mr=new B,Sr=new B,zo=new B,br=new B,Cc=new B,Er=new B;class tt extends dt{constructor(e=new bt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(zo.fromBufferAttribute(h,e),o?br.addScaledVector(zo,u):br.addScaledVector(zo.sub(t),u))}t.add(br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(_r.containsPoint(gi.origin)===!1&&(gi.intersectSphere(_r,Rc)===null||gi.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,b=x;_<b;_+=3){const E=a.getX(_),R=a.getX(_+1),C=a.getX(_+2);s=Tr(this,p,e,n,c,u,h,E,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Tr(this,o,e,n,c,u,h,v,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,b=x;_<b;_+=3){const E=_,R=_+1,C=_+2;s=Tr(this,p,e,n,c,u,h,E,R,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const v=m,x=m+1,_=m+2;s=Tr(this,o,e,n,c,u,h,v,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wd(i,e,t,n,s,r,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Cn,a),l===null)return null;Er.copy(a),Er.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:i}}function Tr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,Sr);const u=wd(i,e,t,n,vr,Mr,Sr,Cc);if(u){const h=new B;on.getBarycoord(Cc,vr,Mr,Sr,h),s&&(u.uv=on.getInterpolatedAttribute(s,a,l,c,h,new de)),r&&(u.uv1=on.getInterpolatedAttribute(r,a,l,c,h,new de)),o&&(u.normal=on.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};on.getNormal(vr,Mr,Sr,f.normal),u.face=f,u.barycoord=h}return u}class gs extends bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(y,m,p,v,x,_,b,E,R,C,S){const M=_/R,D=b/C,F=_/2,W=b/2,K=E/2,j=R+1,H=C+1;let O=0,U=0;const Z=new B;for(let G=0;G<H;G++){const ce=G*D-W;for(let me=0;me<j;me++){const xe=me*M-F;Z[y]=xe*v,Z[m]=ce*x,Z[p]=K,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[m]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(me/R),h.push(1-G/C),O+=1}}for(let G=0;G<C;G++)for(let ce=0;ce<R;ce++){const me=f+ce+j*G,xe=f+ce+j*(G+1),Y=f+(ce+1)+j*(G+1),k=f+(ce+1)+j*G;l.push(me,xe,k),l.push(xe,Y,k),U+=6}a.addGroup(d,U,S),d+=U,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=as(i[t]);for(const s in n)e[s]=n[s]}return e}function Ad(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Rd={clone:as,merge:Ft};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=Ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fu extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new B,Pc=new de,Ic=new de;class Wt extends fu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Ic),t.subVectors(Ic,Pc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class Id extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const r=new Wt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const o=new Wt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new Wt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const l=new Wt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class du extends Tt{constructor(e=[],t=is,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ld extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new du(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gs(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:oi});r.uniforms.tEquirect.value=t;const o=new tt(s,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=qt),new Id(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Dt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dd={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lo extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new B;class Cl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Lc=new B,Dc=new Qe,Nc=new Qe,Ud=new B,Uc=new Ye,wr=new B,Ho=new _n,Fc=new Ye,Vo=new rr;class Fd extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lc,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(s),e.ray.intersectsSphere(Ho)!==!1&&(Fc.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Fc),!(this.boundingBox!==null&&Vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Df?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Dc.fromBufferAttribute(s.attributes.skinIndex,e),Nc.fromBufferAttribute(s.attributes.skinWeight,e),Lc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nc.getComponent(r);if(o!==0){const a=Dc.getComponent(r);Uc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ud.copy(Lc).applyMatrix4(Uc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mu extends Tt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Pt,u=Pt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=new Ye,Od=new Ye;class Pl{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Od;Oc.multiplyMatrices(a,t[r]),Oc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mu(t,e,e,an,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new pu),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class $a extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new Ye,Bc=new Ye,Ar=[],zc=new In,Bd=new Ye,As=new tt,Rs=new _n;class gu extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),zc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(zc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Rs.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Bc.multiplyMatrices(n,qi),As.matrixWorld=Bc,As.raycast(e,Ar);for(let o=0,a=Ar.length;o<a;o++){const l=Ar[o];l.instanceId=r,l.object=this,t.push(l)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mu(new Float32Array(s*this.count),s,this.count,Ml,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Go=new B,zd=new B,kd=new Xe;class ti{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Go.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kd.getNormalMatrix(e),s=this.coplanarPoint(Go).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new _n,Hd=new de(.5,.5),Rr=new B;class Il{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],v=r[12],x=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-o,d-u,p-g,b-v).normalize(),s[1].setComponents(c+o,d+u,p+g,b+v).normalize(),s[2].setComponents(c+a,d+h,p+y,b+x).normalize(),s[3].setComponents(c-a,d-h,p-y,b-x).normalize(),n)s[4].setComponents(l,f,m,_).normalize(),s[5].setComponents(c-l,d-f,p-m,b-_).normalize();else if(s[4].setComponents(c-l,d-f,p-m,b-_).normalize(),t===wn)s[5].setComponents(c+l,d+f,p+m,b+_).normalize();else if(t===eo)s[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=Hd.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xu extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const to=new B,no=new B,kc=new Ye,Cs=new rr,Cr=new _n,Wo=new B,Hc=new B;class Ll extends dt{constructor(e=new bt,t=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)to.fromBufferAttribute(t,s-1),no.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=to.distanceTo(no);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;kc.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(kc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){const p=u.getX(y),v=u.getX(y+1),x=Pr(this,e,Cs,l,p,v,y);x&&t.push(x)}if(this.isLineLoop){const y=u.getX(g-1),m=u.getX(d),p=Pr(this,e,Cs,l,y,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){const p=Pr(this,e,Cs,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Pr(this,e,Cs,l,g-1,d,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(to.fromBufferAttribute(a,s),no.fromBufferAttribute(a,r),t.distanceSqToSegment(to,no,Wo,Hc)>n)return;Wo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wo);if(!(c<e.near||c>e.far))return{distance:c,point:Hc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Vc=new B,Gc=new B;class Vd extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Vc.fromBufferAttribute(t,s),Gc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vc.distanceTo(Gc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gd extends Ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yu extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wc=new Ye,Ja=new rr,Ir=new _n,Lr=new B;class Wd extends dt{constructor(e=new bt,t=new yu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Wc.copy(s).invert(),Ja.copy(e.ray).applyMatrix4(Wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,y=d;g<y;g++){const m=c.getX(g);Lr.fromBufferAttribute(h,m),Xc(Lr,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Lr.fromBufferAttribute(h,g),Xc(Lr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xc(i,e,t,n,s,r,o){const a=Ja.distanceSqToPoint(i);if(a<t){const l=new B;Ja.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xd extends Tt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class _u extends Tt{constructor(e,t,n=wi,s,r,o,a=Pt,l=Pt,c,u=qs,h=1){if(u!==qs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vu extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new de:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,s=[],r=[],o=[],a=new B,l=new Ye;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dl extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qd extends Dl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Dr=new B,Xo=new Nl,qo=new Nl,Yo=new Nl;class Ul extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new B){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),c=Dr);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Xo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,y,m),qo.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,y,m),Yo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),qo.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Yo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Xo.calc(l),qo.calc(l),Yo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Yd(i,e){const t=1-i;return t*t*e}function jd(i,e){return 2*(1-i)*i*e}function Kd(i,e){return i*i*e}function Os(i,e,t,n){return Yd(i,e)+jd(i,t)+Kd(i,n)}function $d(i,e){const t=1-i;return t*t*t*e}function Jd(i,e){const t=1-i;return 3*t*t*i*e}function Zd(i,e){return 3*(1-i)*i*i*e}function Qd(i,e){return i*i*i*e}function Bs(i,e,t,n,s){return $d(i,e)+Jd(i,t)+Zd(i,n)+Qd(i,s)}class Mu extends Ln{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bs(e,s.x,r.x,o.x,a.x),Bs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ep extends Ln{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bs(e,s.x,r.x,o.x,a.x),Bs(e,s.y,r.y,o.y,a.y),Bs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Su extends Ln{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tp extends Ln{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bu extends Ln{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Os(e,s.x,r.x,o.x),Os(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eu extends Ln{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Os(e,s.x,r.x,o.x),Os(e,s.y,r.y,o.y),Os(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tu extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(qc(a,l.x,c.x,u.x,h.x),qc(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:qd,CatmullRomCurve3:Ul,CubicBezierCurve:Mu,CubicBezierCurve3:ep,EllipseCurve:Dl,LineCurve:Su,LineCurve3:tp,QuadraticBezierCurve:bu,QuadraticBezierCurve3:Eu,SplineCurve:Tu});class np extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new io[s.type]().fromJSON(s))}return this}}class es extends np{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Su(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new bu(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Mu(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Tu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Dl(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class li extends es{constructor(e){super(e),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new es().fromJSON(s))}return this}}function ip(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=wu(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=lp(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Qs(r,o,t,a,l,c,0),o}function wu(i,e,t,n,s){let r;if(s===_p(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Yc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Yc(o/n|0,i[o],i[o+1],r);return r&&ls(r,r.next)&&(tr(r),r=r.next),r}function Ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ls(t,t.next)||xt(t.prev,t,t.next)===0)){if(tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&dp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?rp(i,n,s,r):sp(i)){e.push(l.i,i.i,c.i),tr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=op(Ri(i),e),Qs(i,e,t,n,s,r,2)):o===2&&ap(i,e,t,n,s,r):Qs(Ri(i),e,t,n,s,r,1);break}}}function sp(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Ds(s,a,r,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(xt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),y=Math.max(a,l,c),m=Math.max(u,h,f),p=Za(d,g,e,t,n),v=Za(y,m,e,t,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=v;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ds(a,u,l,h,c,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ds(a,u,l,h,c,f,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ds(a,u,l,h,c,f,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ds(a,u,l,h,c,f,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function op(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ls(n,s)&&Ru(n,t,t.next,s)&&er(n,s)&&er(s,n)&&(e.push(n.i,t.i,s.i),tr(t),tr(t.next),t=i=s),t=t.next}while(t!==i);return Ri(t)}function ap(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gp(o,a)){let l=Cu(o,a);o=Ri(o,o.next),l=Ri(l,l.next),Qs(o,e,t,n,s,r,0),Qs(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=wu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(mp(c))}s.sort(cp);for(let r=0;r<s.length;r++)t=hp(s[r],t);return t}function cp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function hp(i,e){const t=up(i,e);if(!t)return e;const n=Cu(t,i);return Ri(n,n.next),Ri(t,t.next)}function up(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(ls(i,t))return t;do{if(ls(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Au(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);er(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&fp(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function fp(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function dp(i,e,t,n){let s=i;do s.z===0&&(s.z=Za(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pp(s)}function pp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Za(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function mp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Au(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ds(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Au(i,e,t,n,s,r,o,a)}function gp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xp(i,e)&&(er(i,e)&&er(e,i)&&yp(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||ls(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ls(i,e){return i.x===e.x&&i.y===e.y}function Ru(i,e,t,n){const s=Ur(xt(i,e,t)),r=Ur(xt(i,e,n)),o=Ur(xt(t,n,i)),a=Ur(xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||o===0&&Nr(t,i,n)||a===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ur(i){return i>0?1:i<0?-1:0}function xp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ru(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function er(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function yp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cu(i,e){const t=Qa(i.i,i.x,i.y),n=Qa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yc(i,e,t,n){const s=Qa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _p(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class vp{static triangulate(e,t,n=2){return ip(e,t,n)}}class ln{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ln.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];jc(e),Kc(n,e);let o=e.length;t.forEach(jc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Kc(n,t[l]);const a=vp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Fl extends bt{constructor(e=new li([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Mp;let x,_=!1,b,E,R,C;p&&(x=p.getSpacedPoints(u),_=!0,f=!1,b=p.computeFrenetFrames(u,!1),E=new B,R=new B,C=new B),f||(m=0,d=0,g=0,y=0);const S=a.extractPoints(c);let M=S.shape;const D=S.holes;if(!ln.isClockWise(M)){M=M.reverse();for(let X=0,$=D.length;X<$;X++){const ee=D[X];ln.isClockWise(ee)&&(D[X]=ee.reverse())}}function W(X){const ee=10000000000000001e-36;let Q=X[0];for(let z=1;z<=X.length;z++){const L=z%X.length,ae=X[L],Ee=ae.x-Q.x,Ue=ae.y-Q.y,N=Ee*Ee+Ue*Ue,w=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(Q.x),Math.abs(Q.y)),te=ee*w*w;if(N<=te){X.splice(L,1),z--;continue}Q=ae}}W(M),D.forEach(W);const K=D.length,j=M;for(let X=0;X<K;X++){const $=D[X];M=M.concat($)}function H(X,$,ee){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector($,ee)}const O=M.length;function U(X,$,ee){let Q,z,L;const ae=X.x-$.x,Ee=X.y-$.y,Ue=ee.x-X.x,N=ee.y-X.y,w=ae*ae+Ee*Ee,te=ae*N-Ee*Ue;if(Math.abs(te)>Number.EPSILON){const oe=Math.sqrt(w),pe=Math.sqrt(Ue*Ue+N*N),ue=$.x-Ee/oe,Le=$.y+ae/oe,_e=ee.x-N/pe,Re=ee.y+Ue/pe,Ie=((_e-ue)*N-(Re-Le)*Ue)/(ae*N-Ee*Ue);Q=ue+ae*Ie-X.x,z=Le+Ee*Ie-X.y;const ve=Q*Q+z*z;if(ve<=2)return new de(Q,z);L=Math.sqrt(ve/2)}else{let oe=!1;ae>Number.EPSILON?Ue>Number.EPSILON&&(oe=!0):ae<-Number.EPSILON?Ue<-Number.EPSILON&&(oe=!0):Math.sign(Ee)===Math.sign(N)&&(oe=!0),oe?(Q=-Ee,z=ae,L=Math.sqrt(w)):(Q=ae,z=Ee,L=Math.sqrt(w/2))}return new de(Q/L,z/L)}const Z=[];for(let X=0,$=j.length,ee=$-1,Q=X+1;X<$;X++,ee++,Q++)ee===$&&(ee=0),Q===$&&(Q=0),Z[X]=U(j[X],j[ee],j[Q]);const G=[];let ce,me=Z.concat();for(let X=0,$=K;X<$;X++){const ee=D[X];ce=[];for(let Q=0,z=ee.length,L=z-1,ae=Q+1;Q<z;Q++,L++,ae++)L===z&&(L=0),ae===z&&(ae=0),ce[Q]=U(ee[Q],ee[L],ee[ae]);G.push(ce),me=me.concat(ce)}let xe;if(m===0)xe=ln.triangulateShape(j,D);else{const X=[],$=[];for(let ee=0;ee<m;ee++){const Q=ee/m,z=d*Math.cos(Q*Math.PI/2),L=g*Math.sin(Q*Math.PI/2)+y;for(let ae=0,Ee=j.length;ae<Ee;ae++){const Ue=H(j[ae],Z[ae],L);ie(Ue.x,Ue.y,-z),Q===0&&X.push(Ue)}for(let ae=0,Ee=K;ae<Ee;ae++){const Ue=D[ae];ce=G[ae];const N=[];for(let w=0,te=Ue.length;w<te;w++){const oe=H(Ue[w],ce[w],L);ie(oe.x,oe.y,-z),Q===0&&N.push(oe)}Q===0&&$.push(N)}}xe=ln.triangulateShape(X,$)}const Y=xe.length,k=g+y;for(let X=0;X<O;X++){const $=f?H(M[X],me[X],k):M[X];_?(R.copy(b.normals[0]).multiplyScalar($.x),E.copy(b.binormals[0]).multiplyScalar($.y),C.copy(x[0]).add(R).add(E),ie(C.x,C.y,C.z)):ie($.x,$.y,0)}for(let X=1;X<=u;X++)for(let $=0;$<O;$++){const ee=f?H(M[$],me[$],k):M[$];_?(R.copy(b.normals[X]).multiplyScalar(ee.x),E.copy(b.binormals[X]).multiplyScalar(ee.y),C.copy(x[X]).add(R).add(E),ie(C.x,C.y,C.z)):ie(ee.x,ee.y,h/u*X)}for(let X=m-1;X>=0;X--){const $=X/m,ee=d*Math.cos($*Math.PI/2),Q=g*Math.sin($*Math.PI/2)+y;for(let z=0,L=j.length;z<L;z++){const ae=H(j[z],Z[z],Q);ie(ae.x,ae.y,h+ee)}for(let z=0,L=D.length;z<L;z++){const ae=D[z];ce=G[z];for(let Ee=0,Ue=ae.length;Ee<Ue;Ee++){const N=H(ae[Ee],ce[Ee],Q);_?ie(N.x,N.y+x[u-1].y,x[u-1].x+ee):ie(N.x,N.y,h+ee)}}}T(),A();function T(){const X=s.length/3;if(f){let $=0,ee=O*$;for(let Q=0;Q<Y;Q++){const z=xe[Q];V(z[2]+ee,z[1]+ee,z[0]+ee)}$=u+m*2,ee=O*$;for(let Q=0;Q<Y;Q++){const z=xe[Q];V(z[0]+ee,z[1]+ee,z[2]+ee)}}else{for(let $=0;$<Y;$++){const ee=xe[$];V(ee[2],ee[1],ee[0])}for(let $=0;$<Y;$++){const ee=xe[$];V(ee[0]+O*u,ee[1]+O*u,ee[2]+O*u)}}n.addGroup(X,s.length/3-X,0)}function A(){const X=s.length/3;let $=0;q(j,$),$+=j.length;for(let ee=0,Q=D.length;ee<Q;ee++){const z=D[ee];q(z,$),$+=z.length}n.addGroup(X,s.length/3-X,1)}function q(X,$){let ee=X.length;for(;--ee>=0;){const Q=ee;let z=ee-1;z<0&&(z=X.length-1);for(let L=0,ae=u+m*2;L<ae;L++){const Ee=O*L,Ue=O*(L+1),N=$+Q+Ee,w=$+z+Ee,te=$+z+Ue,oe=$+Q+Ue;re(N,w,te,oe)}}}function ie(X,$,ee){l.push(X),l.push($),l.push(ee)}function V(X,$,ee){fe(X),fe($),fe(ee);const Q=s.length/3,z=v.generateTopUV(n,s,Q-3,Q-2,Q-1);I(z[0]),I(z[1]),I(z[2])}function re(X,$,ee,Q){fe(X),fe($),fe(Q),fe($),fe(ee),fe(Q);const z=s.length/3,L=v.generateSideWallUV(n,s,z-6,z-3,z-2,z-1);I(L[0]),I(L[1]),I(L[3]),I(L[1]),I(L[2]),I(L[3])}function fe(X){s.push(l[X*3+0]),s.push(l[X*3+1]),s.push(l[X*3+2])}function I(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new io[s.type]().fromJSON(s)),new Fl(n,e.options)}}const Mp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new de(r,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(f,1-g),new de(y,1-p)]:[new de(a,1-l),new de(u,1-h),new de(d,1-g),new de(m,1-p)]}};function Sp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class co extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let x=0;x<c;x++){const _=x*h-r;g.push(_,-v,0),y.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,_=v+c*(p+1),b=v+1+c*(p+1),E=v+1+c*p;d.push(x,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ol extends bt{constructor(e=new li([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function c(u){const h=s.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;ln.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ln.isClockWise(v)===!0&&(g[m]=v.reverse())}const y=ln.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=y.length;m<p;m++){const v=y[m],x=v[0]+h,_=v[1]+h,b=v[2]+h;n.push(x,_,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return bp(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Ol(n,e.curveSegments)}}function bp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ci extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,f=new B,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){const E=b/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(E+_,1-x),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=u[p][v+1],_=u[p][v],b=u[p+1][v],E=u[p+1][v+1];(p!==0||o>0)&&d.push(x,_,E),(p!==n-1||l<Math.PI)&&d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ho extends bt{constructor(e=new Eu(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new de;let u=new B;const h=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function y(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),v(),p()}function m(x){u=e.getPointAt(x/t,u);const _=o.normals[x],b=o.binormals[x];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,C=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+C*b.x,l.y=S*_.y+C*b.y,l.z=S*_.z+C*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=s;_++){const b=(s+1)*(x-1)+(_-1),E=(s+1)*x+(_-1),R=(s+1)*x+_,C=(s+1)*(x-1)+_;g.push(b,E,C),g.push(E,R,C)}}function v(){for(let x=0;x<=t;x++)for(let _=0;_<=s;_++)c.x=x/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ho(new io[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yn extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class un extends Yn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ep extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tp extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wp extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $c(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Pu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class or{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cp extends or{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=e,a=2*t-n;break;case uc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=e,l=2*n-t;break;case uc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,v=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*y+.5*g,_=d*m-d*y;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+v*o[c+b]+x*o[l+b]+_*o[h+b];return r}}class Pp extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Ip extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ap(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_o,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const y=t[h+g];if(y!==t[f+g]||y!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ks;class xs extends vn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Iu extends vn{constructor(e,t,n,s){super(e,t,n,s)}}Iu.prototype.ValueTypeName="color";class cs extends vn{constructor(e,t,n,s){super(e,t,n,s)}}cs.prototype.ValueTypeName="number";class Lp extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}}class hs extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lp(this.times,this.values,this.getValueSize(),e)}}hs.prototype.ValueTypeName="quaternion";hs.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends vn{constructor(e,t,n){super(e,t,n)}}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=js;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends vn{constructor(e,t,n,s){super(e,t,n,s)}}us.prototype.ValueTypeName="vector";class Dp{constructor(e="",t=-1,n=[],s=Nf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=cn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Up(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Rp(l);l=$c(l,1,u),c=$c(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,y){if(d.length!==0){const m=[],p=[];Pu(d,m,p,g),m.length!==0&&y.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)d[f[g].morphTargets[y]]=-1;for(const y in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),p.push(x.morphTarget===y?1:0)}s.push(new cs(".morphTargetInfluence["+y+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(us,d+".position",f,"pos",s),n(hs,d+".quaternion",f,"rot",s),n(us,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Np(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cs;case"vector":case"vector2":case"vector3":case"vector4":return us;case"color":return Iu;case"quaternion":return hs;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Up(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Np(i.type);if(i.times===void 0){const t=[],n=[];Pu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Fp{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Op=new Fp;class Pi{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class Bp extends Error{constructor(e,t){super(e),this.response=t}}class Bl extends Pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let y=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:_})=>{if(x)p.close();else{y+=_.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let E=0,R=u.length;E<R;E++){const C=u[E];C.onProgress&&C.onProgress(b)}p.enqueue(_),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Bp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Wn.add(`file:${e}`,c);const u=zn[e];delete zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Yi=new WeakMap;class zp extends Pi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Yi.get(o);h===void 0&&(h=[],Yi.set(o,h)),h.push({onLoad:t,onError:s})}return o}const a=Js("img");function l(){u(),t&&t(this);const h=Yi.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Yi.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Wn.remove(`image:${e}`);const f=Yi.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Yi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class kp extends Pi{constructor(e){super(e)}load(e,t,n,s){const r=new Tt,o=new zp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class uo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zl extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jo=new Ye,Jc=new B,Zc=new B;class kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hp extends kl{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vp extends uo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qc=new Ye,Ps=new B,Ko=new B;class Gp extends kl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),Ko.copy(n.position),Ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ko),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc,n.coordinateSystem,n.reversedDepth)}}class Lu extends uo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _s extends fu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wp extends kl{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nr extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $o=new WeakMap;class Xp extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if($o.has(o)===!0)s&&s($o.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),$o.set(l,c),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qp extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hl="\\[\\]\\.:\\/",Yp=new RegExp("["+Hl+"]","g"),Vl="[^"+Hl+"]",jp="[^"+Hl.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",Vl),$p=/(WCOD+)?/.source.replace("WCOD",jp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),Qp=new RegExp("^"+Kp+$p+Jp+Zp+"$"),em=["material","materials","bones","map"];class tm{constructor(e,t,n){const s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yp,"")}static parseTrackName(e){const t=Qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=tm;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const eh=new Ye;class Du{constructor(e,t,n=0,s=1/0){this.ray=new rr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(th),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)el(e[s],this,n,t);return n.sort(th),n}}function th(i,e){return i.distance-e.distance}function el(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)el(r[o],e,t,!0)}}const nh=new de;class nm{constructor(e=new de(1/0,1/0),t=new de(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class yi{constructor(){this.type="ShapePath",this.color=new ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new es,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const v=[];for(let x=0,_=p.length;x<_;x++){const b=p[x],E=new li;E.curves=b.curves,v.push(E)}return v}function n(p,v){const x=v.length;let _=!1;for(let b=x-1,E=0;E<x;b=E++){let R=v[b],C=v[E],S=C.x-R.x,M=C.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=v[E],S=-S,C=v[b],M=-M),p.y<R.y||p.y>C.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const D=M*(p.x-R.x)-S*(p.y-R.y);if(D===0)return!0;if(D<0)continue;_=!_}}else{if(p.y!==R.y)continue;if(C.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=C.x)return!0}}return _}const s=ln.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new li,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let d=[],g=0,y;f[g]=void 0,d[g]=[];for(let p=0,v=r.length;p<v;p++)a=r[p],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new li,p:y},f[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:y[0]});if(!f[0])return t(r);if(f.length>1){let p=!1,v=0;for(let x=0,_=f.length;x<_;x++)h[x]=[];for(let x=0,_=f.length;x<_;x++){const b=d[x];for(let E=0;E<b.length;E++){const R=b[E];let C=!0;for(let S=0;S<f.length;S++)n(R.p,f[S].p)&&(x!==S&&v++,C?(C=!1,h[S].push(R)):p=!0);C&&h[x].push(R)}}v>0&&p===!1&&(d=h)}let m;for(let p=0,v=f.length;p<v;p++){l=f[p].s,c.push(l),m=d[p];for(let x=0,_=m.length;x<_;x++)l.holes.push(m[x].h)}return c}}function ih(i,e,t,n){const s=im(n);switch(t){case tu:return i*e;case Ml:return i*e/s.components*s.byteLength;case Sl:return i*e/s.components*s.byteLength;case iu:return i*e*2/s.components*s.byteLength;case bl:return i*e*2/s.components*s.byteLength;case nu:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case El:return i*e*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(i,16)*Math.max(e,8)/4;case va:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function im(i){switch(i){case Pn:case Jh:return{byteLength:1,components:1};case Ws:case Zh:case sr:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case wi:case yl:case xn:return{byteLength:4,components:1};case Qh:case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);function Nu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function sm(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const y=h[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,ig=`struct PhysicalMaterial {
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
}`,sg=`
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,A0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,P0=`#define TOON
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
}`,I0=`#define TOON
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
}`,L0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,U0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:fm,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:_m,clipping_planes_fragment:vm,clipping_planes_pars_fragment:Mm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:bm,color_fragment:Em,color_pars_fragment:Tm,color_pars_vertex:wm,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Lm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Nm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Om,envmap_common_pars_fragment:Bm,envmap_pars_fragment:zm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Jm,envmap_vertex:Hm,fog_vertex:Vm,fog_pars_vertex:Gm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Km,lights_pars_begin:$m,lights_toon_fragment:Zm,lights_toon_pars_fragment:Qm,lights_phong_fragment:eg,lights_phong_pars_fragment:tg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:sg,lights_fragment_maps:rg,lights_fragment_end:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:fg,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:yg,morphnormal_vertex:_g,morphtarget_pars_vertex:vg,morphtarget_vertex:Mg,normal_fragment_begin:Sg,normal_fragment_maps:bg,normal_pars_fragment:Eg,normal_pars_vertex:Tg,normal_vertex:wg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Pg,iridescence_pars_fragment:Ig,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ng,project_vertex:Ug,dithering_fragment:Fg,dithering_pars_fragment:Og,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:zg,shadowmap_pars_fragment:kg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Vg,shadowmask_pars_fragment:Gg,skinbase_vertex:Wg,skinning_pars_vertex:Xg,skinning_vertex:qg,skinnormal_vertex:Yg,specularmap_fragment:jg,specularmap_pars_fragment:Kg,tonemapping_fragment:$g,tonemapping_pars_fragment:Jg,transmission_fragment:Zg,transmission_pars_fragment:Qg,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:h0,depth_frag:u0,distanceRGBA_vert:f0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:x0,meshbasic_vert:y0,meshbasic_frag:_0,meshlambert_vert:v0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:b0,meshnormal_vert:E0,meshnormal_frag:T0,meshphong_vert:w0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:I0,points_vert:L0,points_frag:D0,shadow_vert:N0,shadow_frag:U0,sprite_vert:F0,sprite_frag:O0},Ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},En={basic:{uniforms:Ft([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Ft([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Ft([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Ft([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Ft([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Ft([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Ft([Ae.points,Ae.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Ft([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Ft([Ae.common,Ae.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Ft([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Ft([Ae.sprite,Ae.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Ft([Ae.common,Ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Ft([Ae.lights,Ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};En.physical={uniforms:Ft([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Or={r:0,b:0,g:0},_i=new Qt,B0=new Ye;function z0(i,e,t,n,s,r,o){const a=new ze(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function y(x){let _=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===ao)?(u===void 0&&(u=new tt(new gs(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:as(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(_.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(_i)),u.material.toneMapped=et.getTransfer(b.colorSpace)!==lt,(h!==b||f!==b.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new tt(new co(2,2),new ci({name:"BackgroundMaterial",uniforms:as(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=et.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Or,uu(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,_,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:y,addToRenderList:m,dispose:v}}function k0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,D,F,W,K){let j=!1;const H=h(W,F,D);r!==H&&(r=H,c(r.object)),j=d(M,W,F,K),j&&g(M,W,F,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(M,D,F,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,F){const W=F.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let j=K[D.id];j===void 0&&(j={},K[D.id]=j);let H=j[W];return H===void 0&&(H=f(l()),j[W]=H),H}function f(M){const D=[],F=[],W=[];for(let K=0;K<t;K++)D[K]=0,F[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:W,object:M,attributes:{},index:null}}function d(M,D,F,W){const K=r.attributes,j=D.attributes;let H=0;const O=F.getAttributes();for(const U in O)if(O[U].location>=0){const G=K[U];let ce=j[U];if(ce===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),G===void 0||G.attribute!==ce||ce&&G.data!==ce.data)return!0;H++}return r.attributesNum!==H||r.index!==W}function g(M,D,F,W){const K={},j=D.attributes;let H=0;const O=F.getAttributes();for(const U in O)if(O[U].location>=0){let G=j[U];G===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(G=M.instanceColor));const ce={};ce.attribute=G,G&&G.data&&(ce.data=G.data),K[U]=ce,H++}r.attributes=K,r.attributesNum=H,r.index=W}function y(){const M=r.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const F=r.newAttributes,W=r.enabledAttributes,K=r.attributeDivisors;F[M]=1,W[M]===0&&(i.enableVertexAttribArray(M),W[M]=1),K[M]!==D&&(i.vertexAttribDivisor(M,D),K[M]=D)}function v(){const M=r.newAttributes,D=r.enabledAttributes;for(let F=0,W=D.length;F<W;F++)D[F]!==M[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function x(M,D,F,W,K,j,H){H===!0?i.vertexAttribIPointer(M,D,F,K,j):i.vertexAttribPointer(M,D,F,W,K,j)}function _(M,D,F,W){y();const K=W.attributes,j=F.getAttributes(),H=D.defaultAttributeValues;for(const O in j){const U=j[O];if(U.location>=0){let Z=K[O];if(Z===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const G=Z.normalized,ce=Z.itemSize,me=e.get(Z);if(me===void 0)continue;const xe=me.buffer,Y=me.type,k=me.bytesPerElement,T=Y===i.INT||Y===i.UNSIGNED_INT||Z.gpuType===yl;if(Z.isInterleavedBufferAttribute){const A=Z.data,q=A.stride,ie=Z.offset;if(A.isInstancedInterleavedBuffer){for(let V=0;V<U.locationSize;V++)p(U.location+V,A.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let V=0;V<U.locationSize;V++)m(U.location+V);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let V=0;V<U.locationSize;V++)x(U.location+V,ce/U.locationSize,Y,G,q*k,(ie+ce/U.locationSize*V)*k,T)}else{if(Z.isInstancedBufferAttribute){for(let A=0;A<U.locationSize;A++)p(U.location+A,Z.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let A=0;A<U.locationSize;A++)m(U.location+A);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let A=0;A<U.locationSize;A++)x(U.location+A,ce/U.locationSize,Y,G,ce*k,ce/U.locationSize*A*k,T)}}else if(H!==void 0){const G=H[O];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(U.location,G);break;case 3:i.vertexAttrib3fv(U.location,G);break;case 4:i.vertexAttrib4fv(U.location,G);break;default:i.vertexAttrib1fv(U.location,G)}}}}v()}function b(){C();for(const M in n){const D=n[M];for(const F in D){const W=D[F];for(const K in W)u(W[K].object),delete W[K];delete D[F]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const F in D){const W=D[F];for(const K in W)u(W[K].object),delete W[K];delete D[F]}delete n[M.id]}function R(M){for(const D in n){const F=n[D];if(F[M.id]===void 0)continue;const W=F[M.id];for(const K in W)u(W[K].object),delete W[K];delete F[M.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function H0(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==an&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!C)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:b,maxSamples:E}}function G0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ti,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,x=v*4;let _=p.clippingState||null;l.value=_,_=u(g,f,x,d);for(let b=0;b!==x;++b)_[b]=t[b];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=d+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=d;x!==y;++x,_+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function W0(i){let e=new WeakMap;function t(o,a){return a===ya?o.mapping=is:a===_a&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ya||a===_a)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ld(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ji=4,sh=[.125,.215,.35,.446,.526,.582],Ti=20,Jo=new _s,rh=new ze;let Zo=null,Qo=0,ea=0,ta=!1;const bi=(1+Math.sqrt(5))/2,ji=1/bi,oh=[new B(-bi,ji,0),new B(bi,ji,0),new B(-ji,0,bi),new B(ji,0,bi),new B(0,bi,-ji),new B(0,bi,ji),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],X0=new B;class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=X0}=r;Zo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Qo,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:sr,format:an,colorSpace:Ht,depthBuffer:!1},s=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q0(r)),this._blurMaterial=Y0(r,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,s,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(rh),h.toneMapping=ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const y=new Gn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new tt(new gs,y);let p=!1;const v=e.background;v?v.isColor&&(y.color.copy(v),e.background=null,p=!0):(y.color.copy(rh),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const b=this._cubeSize;Br(s,_*b,x>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===is||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(s-r-1)%oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let v=0;for(let R=0;R<Ti;++R){const C=R/y,S=Math.exp(-C*C/2);p.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[s],b=3*_*(s>x-Ji?s-x+Ji:0),E=4*(this._cubeSize-_);Br(t,b,E,3*_,2*_),l.setRenderTarget(t),l.render(h,Jo)}}function q0(i){const e=[],t=[],n=[];let s=i;const r=i-Ji+1+sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ji?l=sh[o-i+Ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*d),x=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,C=E>2?0:-1,S=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(S,y*g*E),x.set(f,m*g*E);const M=[E,E,E,E,E,E];_.set(M,p*g*E)}const b=new bt;b.setAttribute("position",new Mt(v,y)),b.setAttribute("uv",new Mt(x,m)),b.setAttribute("faceIndex",new Mt(_,p)),e.push(b),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ah(i,e,t){const n=new Ai(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Y0(i,e,t){const n=new Float32Array(Ti),s=new B(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lh(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ch(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function j0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ya||l===_a,u=l===is||l===ss;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new tl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new tl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function K0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $0(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let y=0;if(d!==null){const v=d.array;y=d.version;for(let x=0,_=v.length;x<_;x+=3){const b=v[x+0],E=v[x+1],R=v[x+2];f.push(b,E,E,R,R,b)}}else if(g!==void 0){const v=g.array;y=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const b=x+0,E=x+1,R=x+2;f.push(b,E,E,R,R,b)}}else return;const m=new(ou(f)?hu:cu)(f,1);m.version=y;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function J0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*y[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Q0(i,e,t){const n=new WeakMap,s=new Qe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),y===!0&&(_=2),m===!0&&(_=3);let b=a.attributes.position.count*_,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*E*4*h),C=new au(R,b,E,h);C.type=xn,C.needsUpdate=!0;const S=_*4;for(let D=0;D<h;D++){const F=p[D],W=v[D],K=x[D],j=b*E*4*D;for(let H=0;H<F.count;H++){const O=H*S;g===!0&&(s.fromBufferAttribute(F,H),R[j+O+0]=s.x,R[j+O+1]=s.y,R[j+O+2]=s.z,R[j+O+3]=0),y===!0&&(s.fromBufferAttribute(W,H),R[j+O+4]=s.x,R[j+O+5]=s.y,R[j+O+6]=s.z,R[j+O+7]=0),m===!0&&(s.fromBufferAttribute(K,H),R[j+O+8]=s.x,R[j+O+9]=s.y,R[j+O+10]=s.z,R[j+O+11]=K.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new de(b,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function e1(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Uu=new Tt,hh=new _u(1,1),Fu=new au,Ou=new md,Bu=new du,uh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=uh[s];if(r===void 0&&(r=new Float32Array(s),uh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function t1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function n1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function s1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function r1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),At(t,n)}}function o1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),At(t,n)}}function a1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),At(t,n)}}function l1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function c1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function h1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function u1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function f1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function g1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hh.compareFunction=ru,r=hh):r=Uu,t.setTexture2D(e||r,s)}function x1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ou,s)}function y1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bu,s)}function _1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fu,s)}function v1(i){switch(i){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return d1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return _1}}function M1(i,e){i.uniform1fv(this.addr,e)}function S1(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function b1(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function E1(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function T1(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function w1(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function A1(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function R1(i,e){i.uniform1iv(this.addr,e)}function C1(i,e){i.uniform2iv(this.addr,e)}function P1(i,e){i.uniform3iv(this.addr,e)}function I1(i,e){i.uniform4iv(this.addr,e)}function L1(i,e){i.uniform1uiv(this.addr,e)}function D1(i,e){i.uniform2uiv(this.addr,e)}function N1(i,e){i.uniform3uiv(this.addr,e)}function U1(i,e){i.uniform4uiv(this.addr,e)}function F1(i,e,t){const n=this.cache,s=e.length,r=fo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Uu,r[o])}function O1(i,e,t){const n=this.cache,s=e.length,r=fo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ou,r[o])}function B1(i,e,t){const n=this.cache,s=e.length,r=fo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Bu,r[o])}function z1(i,e,t){const n=this.cache,s=e.length,r=fo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fu,r[o])}function k1(i){switch(i){case 5126:return M1;case 35664:return S1;case 35665:return b1;case 35666:return E1;case 35674:return T1;case 35675:return w1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return P1;case 35669:case 35673:return I1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}class H1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}}class V1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k1(t.type)}}class G1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function gh(i,e){i.seq.push(e),i.map[e.id]=e}function W1(i,e,t){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),o=na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gh(t,c===void 0?new H1(a,i,e):new V1(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new G1(a),gh(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);W1(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function xh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const X1=37297;let q1=0;function Y1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yh=new Xe;function j1(i){et._getMatrix(yh,et.workingColorSpace,i);const e=`mat3( ${yh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Qr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _h(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Y1(i.getShaderSource(e),a)}else return r}function K1(i,e){const t=j1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $1(i,e){let t;switch(e){case Af:t="Linear";break;case Rf:t="Reinhard";break;case Cf:t="Cineon";break;case xl:t="ACESFilmic";break;case If:t="AgX";break;case Lf:t="Neutral";break;case Pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new B;function J1(){et.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Q1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ex(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ns(i){return i!==""}function vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(tx,ix)}const nx=new Map;function ix(i,e){let t=Ke[e];if(t===void 0){const n=nx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(sx,rx)}function rx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ox(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===of?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ss&&(e="ENVMAP_MODE_REFRACTION"),e}function cx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case wf:e="ENVMAP_BLENDING_ADD";break}return e}function hx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ux(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ox(t),c=ax(t),u=lx(t),h=cx(t),f=hx(t),d=Z1(t),g=Q1(r),y=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ai?$1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,K1("linearToOutputTexel",t.outputColorSpace),J1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=nl(o),o=vh(o,t),o=Mh(o,t),a=nl(a),a=vh(a,t),a=Mh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,_=v+p+a,b=xh(s,s.VERTEX_SHADER,x),E=xh(s,s.FRAGMENT_SHADER,_);s.attachShader(y,b),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y)||"",W=s.getShaderInfoLog(b)||"",K=s.getShaderInfoLog(E)||"",j=F.trim(),H=W.trim(),O=K.trim();let U=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,b,E);else{const G=_h(s,b,"vertex"),ce=_h(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+G+`
`+ce)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||O==="")&&(Z=!1);Z&&(D.diagnostics={runnable:U,programLog:j,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(b),s.deleteShader(E),C=new jr(s,y),S=ex(s,y)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,X1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=q1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}let fx=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new px(e),t.set(e,n)),n}}class px{constructor(e){this.id=fx++,this.code=e,this.usedTimes=0}}function mx(i,e,t,n,s,r,o){const a=new Rl,l=new dx,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,F,W){const K=F.fog,j=W.geometry,H=S.isMeshStandardMaterial?F.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),U=O&&O.mapping===ao?O.image.height:null,Z=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const G=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ce=G!==void 0?G.length:0;let me=0;j.morphAttributes.position!==void 0&&(me=1),j.morphAttributes.normal!==void 0&&(me=2),j.morphAttributes.color!==void 0&&(me=3);let xe,Y,k,T;if(Z){const it=En[Z];xe=it.vertexShader,Y=it.fragmentShader}else xe=S.vertexShader,Y=S.fragmentShader,l.update(S),k=l.getVertexShaderID(S),T=l.getFragmentShaderID(S);const A=i.getRenderTarget(),q=i.state.buffers.depth.getReversed(),ie=W.isInstancedMesh===!0,V=W.isBatchedMesh===!0,re=!!S.map,fe=!!S.matcap,I=!!O,X=!!S.aoMap,$=!!S.lightMap,ee=!!S.bumpMap,Q=!!S.normalMap,z=!!S.displacementMap,L=!!S.emissiveMap,ae=!!S.metalnessMap,Ee=!!S.roughnessMap,Ue=S.anisotropy>0,N=S.clearcoat>0,w=S.dispersion>0,te=S.iridescence>0,oe=S.sheen>0,pe=S.transmission>0,ue=Ue&&!!S.anisotropyMap,Le=N&&!!S.clearcoatMap,_e=N&&!!S.clearcoatNormalMap,Re=N&&!!S.clearcoatRoughnessMap,Ie=te&&!!S.iridescenceMap,ve=te&&!!S.iridescenceThicknessMap,we=oe&&!!S.sheenColorMap,Ve=oe&&!!S.sheenRoughnessMap,Be=!!S.specularMap,Ce=!!S.specularColorMap,je=!!S.specularIntensityMap,J=pe&&!!S.transmissionMap,be=pe&&!!S.thicknessMap,Te=!!S.gradientMap,Ne=!!S.alphaMap,Me=S.alphaTest>0,ge=!!S.alphaHash,Oe=!!S.extensions;let qe=ai;S.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(qe=i.toneMapping);const ut={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:Y,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:T,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:V,batchingColor:V&&W._colorsTexture!==null,instancing:ie,instancingColor:ie&&W.instanceColor!==null,instancingMorph:ie&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ht,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:fe,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:U,aoMap:X,lightMap:$,bumpMap:ee,normalMap:Q,displacementMap:f&&z,emissiveMap:L,normalMapObjectSpace:Q&&S.normalMapType===Bf,normalMapTangentSpace:Q&&S.normalMapType===Tl,metalnessMap:ae,roughnessMap:Ee,anisotropy:Ue,anisotropyMap:ue,clearcoat:N,clearcoatMap:Le,clearcoatNormalMap:_e,clearcoatRoughnessMap:Re,dispersion:w,iridescence:te,iridescenceMap:Ie,iridescenceThicknessMap:ve,sheen:oe,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:Be,specularColorMap:Ce,specularIntensityMap:je,transmission:pe,transmissionMap:J,thicknessMap:be,gradientMap:Te,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Me,alphaHash:ge,combine:S.combine,mapUv:re&&y(S.map.channel),aoMapUv:X&&y(S.aoMap.channel),lightMapUv:$&&y(S.lightMap.channel),bumpMapUv:ee&&y(S.bumpMap.channel),normalMapUv:Q&&y(S.normalMap.channel),displacementMapUv:z&&y(S.displacementMap.channel),emissiveMapUv:L&&y(S.emissiveMap.channel),metalnessMapUv:ae&&y(S.metalnessMap.channel),roughnessMapUv:Ee&&y(S.roughnessMap.channel),anisotropyMapUv:ue&&y(S.anisotropyMap.channel),clearcoatMapUv:Le&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&y(S.sheenRoughnessMap.channel),specularMapUv:Be&&y(S.specularMap.channel),specularColorMapUv:Ce&&y(S.specularColorMap.channel),specularIntensityMapUv:je&&y(S.specularIntensityMap.channel),transmissionMapUv:J&&y(S.transmissionMap.channel),thicknessMapUv:be&&y(S.thicknessMap.channel),alphaMapUv:Ne&&y(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Q||Ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&(re||Ne),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:q,skinning:W.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:L&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let D;if(M){const F=En[M];D=Rd.clone(F.uniforms)}else D=S.uniforms;return D}function b(S,M){let D;for(let F=0,W=u.length;F<W;F++){const K=u[F];if(K.cacheKey===M){D=K,++D.usedTimes;break}}return D===void 0&&(D=new ux(i,M,S,r),u.push(D)),D}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:C}}function gx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Th(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,y,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function a(h,f,d,g,y,m){const p=o(h,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,y,m){const p=o(h,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||xx),n.length>1&&n.sort(f||Eh),s.length>1&&s.sort(f||Eh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function yx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Th,i.set(n,[o])):s>=r.length?(o=new Th,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _x(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ze};break;case"SpotLight":t={position:new B,direction:new B,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function vx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Mx=0;function Sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bx(i){const e=new _x,t=vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new Ye,o=new Ye;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,v=0,x=0,_=0,b=0,E=0,R=0;c.sort(Sx);for(let S=0,M=c.length;S<M;S++){const D=c[S],F=D.color,W=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*W,h+=F.g*W,f+=F.b*W;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],W);R++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,U=t.get(D);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[d]=U,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(W),H.distance=K,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[y]=H;const O=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,O.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=O.matrix,D.castShadow){const U=t.get(D);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[y]=U,n.spotShadowMap[y]=j,_++}y++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(F).multiplyScalar(W),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const O=D.shadow,U=t.get(D);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=H,g++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(W),H.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==b||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=b,C.numLightProbes=R,n.version=Mx++)}function l(c,u){let h=0,f=0,d=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[y];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function wh(i){const e=new bx(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ex(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new wh(i),e.set(s,[a])):r>=o.length?(a=new wh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function Ax(i,e,t){let n=new Il;const s=new de,r=new de,o=new Qe,a=new Tp({depthPacking:Of}),l=new wp,c={},u=t.maxTextureSize,h={[Cn]:kt,[kt]:Cn,[mn]:mn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Tx,fragmentShader:wx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(oi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=p!==kn&&this.type===kn,K=p===kn&&this.type!==kn;for(let j=0,H=E.length;j<H;j++){const O=E[j],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Z=U.getFrameExtents();if(s.multiply(Z),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,U.mapSize.y=r.y)),U.map===null||W===!0||K===!0){const ce=this.type!==kn?{minFilter:Pt,magFilter:Pt}:{};U.map!==null&&U.map.dispose(),U.map=new Ai(s.x,s.y,ce),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const G=U.getViewportCount();for(let ce=0;ce<G;ce++){const me=U.getViewport(ce);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),F.viewport(o),U.updateMatrices(O,ce),n=U.getFrustum(),_(R,C,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===kn&&v(U,C),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,D)};function v(E,R){const C=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ai(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,C,d,y,null)}function x(E,R,C,S){let M=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=M.uuid,W=R.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let j=K[W];j===void 0&&(j=M.clone(),K[W]=j,R.addEventListener("dispose",b)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,S===kn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=C}return M}function _(E,R,C,S,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const W=e.update(E),K=E.material;if(Array.isArray(K)){const j=W.groups;for(let H=0,O=j.length;H<O;H++){const U=j[H],Z=K[U.materialIndex];if(Z&&Z.visible){const G=x(E,Z,S,M);E.onBeforeShadow(i,E,R,C,W,G,U),i.renderBufferDirect(C,null,W,G,E,U),E.onAfterShadow(i,E,R,C,W,G,U)}}}else if(K.visible){const j=x(E,K,S,M);E.onBeforeShadow(i,E,R,C,W,j,null),i.renderBufferDirect(C,null,W,j,E,null),E.onAfterShadow(i,E,R,C,W,j,null)}}const F=E.children;for(let W=0,K=F.length;W<K;W++)_(F[W],R,C,S,M)}function b(E){E.target.removeEventListener("dispose",b);for(const C in c){const S=c[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Rx={[ua]:fa,[da]:ga,[pa]:xa,[ns]:ma,[fa]:ua,[ga]:da,[xa]:pa,[ma]:ns};function Cx(i,e){function t(){let J=!1;const be=new Qe;let Te=null;const Ne=new Qe(0,0,0,0);return{setMask:function(Me){Te!==Me&&!J&&(i.colorMask(Me,Me,Me,Me),Te=Me)},setLocked:function(Me){J=Me},setClear:function(Me,ge,Oe,qe,ut){ut===!0&&(Me*=qe,ge*=qe,Oe*=qe),be.set(Me,ge,Oe,qe),Ne.equals(be)===!1&&(i.clearColor(Me,ge,Oe,qe),Ne.copy(be))},reset:function(){J=!1,Te=null,Ne.set(-1,0,0,0)}}}function n(){let J=!1,be=!1,Te=null,Ne=null,Me=null;return{setReversed:function(ge){if(be!==ge){const Oe=e.get("EXT_clip_control");ge?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),be=ge;const qe=Me;Me=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(ge){ge?A(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(ge){Te!==ge&&!J&&(i.depthMask(ge),Te=ge)},setFunc:function(ge){if(be&&(ge=Rx[ge]),Ne!==ge){switch(ge){case ua:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=ge}},setLocked:function(ge){J=ge},setClear:function(ge){Me!==ge&&(be&&(ge=1-ge),i.clearDepth(ge),Me=ge)},reset:function(){J=!1,Te=null,Ne=null,Me=null,be=!1}}}function s(){let J=!1,be=null,Te=null,Ne=null,Me=null,ge=null,Oe=null,qe=null,ut=null;return{setTest:function(it){J||(it?A(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(it){be!==it&&!J&&(i.stencilMask(it),be=it)},setFunc:function(it,Dn,Mn){(Te!==it||Ne!==Dn||Me!==Mn)&&(i.stencilFunc(it,Dn,Mn),Te=it,Ne=Dn,Me=Mn)},setOp:function(it,Dn,Mn){(ge!==it||Oe!==Dn||qe!==Mn)&&(i.stencilOp(it,Dn,Mn),ge=it,Oe=Dn,qe=Mn)},setLocked:function(it){J=it},setClear:function(it){ut!==it&&(i.clearStencil(it),ut=it)},reset:function(){J=!1,be=null,Te=null,Ne=null,Me=null,ge=null,Oe=null,qe=null,ut=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,v=null,x=null,_=null,b=null,E=null,R=new ze(0,0,0),C=0,S=!1,M=null,D=null,F=null,W=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),H=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),H=O>=2);let Z=null,G={};const ce=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),xe=new Qe().fromArray(ce),Y=new Qe().fromArray(me);function k(J,be,Te,Ne){const Me=new Uint8Array(4),ge=i.createTexture();i.bindTexture(J,ge),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Te;Oe++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(be+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ge}const T={};T[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),T[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),T[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(i.DEPTH_TEST),o.setFunc(ns),ee(!1),Q(sc),A(i.CULL_FACE),X(oi);function A(J){u[J]!==!0&&(i.enable(J),u[J]=!0)}function q(J){u[J]!==!1&&(i.disable(J),u[J]=!1)}function ie(J,be){return h[J]!==be?(i.bindFramebuffer(J,be),h[J]=be,J===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),J===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function V(J,be){let Te=d,Ne=!1;if(J){Te=f.get(be),Te===void 0&&(Te=[],f.set(be,Te));const Me=J.textures;if(Te.length!==Me.length||Te[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Oe=Me.length;ge<Oe;ge++)Te[ge]=i.COLOR_ATTACHMENT0+ge;Te.length=Me.length,Ne=!0}}else Te[0]!==i.BACK&&(Te[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Te)}function re(J){return g!==J?(i.useProgram(J),g=J,!0):!1}const fe={[Ei]:i.FUNC_ADD,[lf]:i.FUNC_SUBTRACT,[cf]:i.FUNC_REVERSE_SUBTRACT};fe[hf]=i.MIN,fe[uf]=i.MAX;const I={[ff]:i.ZERO,[df]:i.ONE,[pf]:i.SRC_COLOR,[ca]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[yf]:i.DST_COLOR,[gf]:i.DST_ALPHA,[mf]:i.ONE_MINUS_SRC_COLOR,[ha]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[Ef]:i.ONE_MINUS_CONSTANT_ALPHA};function X(J,be,Te,Ne,Me,ge,Oe,qe,ut,it){if(J===oi){y===!0&&(q(i.BLEND),y=!1);return}if(y===!1&&(A(i.BLEND),y=!0),J!==af){if(J!==m||it!==S){if((p!==Ei||_!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,_=Ei),it)switch(J){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}v=null,x=null,b=null,E=null,R.set(0,0,0),C=0,m=J,S=it}return}Me=Me||be,ge=ge||Te,Oe=Oe||Ne,(be!==p||Me!==_)&&(i.blendEquationSeparate(fe[be],fe[Me]),p=be,_=Me),(Te!==v||Ne!==x||ge!==b||Oe!==E)&&(i.blendFuncSeparate(I[Te],I[Ne],I[ge],I[Oe]),v=Te,x=Ne,b=ge,E=Oe),(qe.equals(R)===!1||ut!==C)&&(i.blendColor(qe.r,qe.g,qe.b,ut),R.copy(qe),C=ut),m=J,S=!1}function $(J,be){J.side===mn?q(i.CULL_FACE):A(i.CULL_FACE);let Te=J.side===kt;be&&(Te=!Te),ee(Te),J.blending===Zi&&J.transparent===!1?X(oi):X(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),r.setMask(J.colorWrite);const Ne=J.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),L(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?A(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(J){M!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),M=J)}function Q(J){J!==sf?(A(i.CULL_FACE),J!==D&&(J===sc?i.cullFace(i.BACK):J===rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),D=J}function z(J){J!==F&&(H&&i.lineWidth(J),F=J)}function L(J,be,Te){J?(A(i.POLYGON_OFFSET_FILL),(W!==be||K!==Te)&&(i.polygonOffset(be,Te),W=be,K=Te)):q(i.POLYGON_OFFSET_FILL)}function ae(J){J?A(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function Ee(J){J===void 0&&(J=i.TEXTURE0+j-1),Z!==J&&(i.activeTexture(J),Z=J)}function Ue(J,be,Te){Te===void 0&&(Z===null?Te=i.TEXTURE0+j-1:Te=Z);let Ne=G[Te];Ne===void 0&&(Ne={type:void 0,texture:void 0},G[Te]=Ne),(Ne.type!==J||Ne.texture!==be)&&(Z!==Te&&(i.activeTexture(Te),Z=Te),i.bindTexture(J,be||T[J]),Ne.type=J,Ne.texture=be)}function N(){const J=G[Z];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function te(){try{i.compressedTexImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function oe(){try{i.texSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function pe(){try{i.texSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function _e(){try{i.texStorage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Re(){try{i.texStorage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ie(){try{i.texImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ve(){try{i.texImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function we(J){xe.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),xe.copy(J))}function Ve(J){Y.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Y.copy(J))}function Be(J,be){let Te=c.get(be);Te===void 0&&(Te=new WeakMap,c.set(be,Te));let Ne=Te.get(J);Ne===void 0&&(Ne=i.getUniformBlockIndex(be,J.name),Te.set(J,Ne))}function Ce(J,be){const Ne=c.get(be).get(J);l.get(be)!==Ne&&(i.uniformBlockBinding(be,Ne,J.__bindingPointIndex),l.set(be,Ne))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,G={},h={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,v=null,x=null,_=null,b=null,E=null,R=new ze(0,0,0),C=0,S=!1,M=null,D=null,F=null,W=null,K=null,xe.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:A,disable:q,bindFramebuffer:ie,drawBuffers:V,useProgram:re,setBlending:X,setMaterial:$,setFlipSided:ee,setCullFace:Q,setLineWidth:z,setPolygonOffset:L,setScissorTest:ae,activeTexture:Ee,bindTexture:Ue,unbindTexture:N,compressedTexImage2D:w,compressedTexImage3D:te,texImage2D:Ie,texImage3D:ve,updateUBOMapping:Be,uniformBlockBinding:Ce,texStorage2D:_e,texStorage3D:Re,texSubImage2D:oe,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Le,scissor:we,viewport:Ve,reset:je}}function Px(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,w){return d?new OffscreenCanvas(N,w):Js("canvas")}function y(N,w,te){let oe=1;const pe=Ue(N);if((pe.width>te||pe.height>te)&&(oe=te/Math.max(pe.width,pe.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(oe*pe.width),Le=Math.floor(oe*pe.height);h===void 0&&(h=g(ue,Le));const _e=w?g(ue,Le):h;return _e.width=ue,_e.height=Le,_e.getContext("2d").drawImage(N,0,0,ue,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Le+")."),_e}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,w,te,oe,pe=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=w;if(w===i.RED&&(te===i.FLOAT&&(ue=i.R32F),te===i.HALF_FLOAT&&(ue=i.R16F),te===i.UNSIGNED_BYTE&&(ue=i.R8)),w===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.R8UI),te===i.UNSIGNED_SHORT&&(ue=i.R16UI),te===i.UNSIGNED_INT&&(ue=i.R32UI),te===i.BYTE&&(ue=i.R8I),te===i.SHORT&&(ue=i.R16I),te===i.INT&&(ue=i.R32I)),w===i.RG&&(te===i.FLOAT&&(ue=i.RG32F),te===i.HALF_FLOAT&&(ue=i.RG16F),te===i.UNSIGNED_BYTE&&(ue=i.RG8)),w===i.RG_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RG8UI),te===i.UNSIGNED_SHORT&&(ue=i.RG16UI),te===i.UNSIGNED_INT&&(ue=i.RG32UI),te===i.BYTE&&(ue=i.RG8I),te===i.SHORT&&(ue=i.RG16I),te===i.INT&&(ue=i.RG32I)),w===i.RGB_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RGB8UI),te===i.UNSIGNED_SHORT&&(ue=i.RGB16UI),te===i.UNSIGNED_INT&&(ue=i.RGB32UI),te===i.BYTE&&(ue=i.RGB8I),te===i.SHORT&&(ue=i.RGB16I),te===i.INT&&(ue=i.RGB32I)),w===i.RGBA_INTEGER&&(te===i.UNSIGNED_BYTE&&(ue=i.RGBA8UI),te===i.UNSIGNED_SHORT&&(ue=i.RGBA16UI),te===i.UNSIGNED_INT&&(ue=i.RGBA32UI),te===i.BYTE&&(ue=i.RGBA8I),te===i.SHORT&&(ue=i.RGBA16I),te===i.INT&&(ue=i.RGBA32I)),w===i.RGB&&(te===i.UNSIGNED_INT_5_9_9_9_REV&&(ue=i.RGB9_E5),te===i.UNSIGNED_INT_10F_11F_11F_REV&&(ue=i.R11F_G11F_B10F)),w===i.RGBA){const Le=pe?Qr:et.getTransfer(oe);te===i.FLOAT&&(ue=i.RGBA32F),te===i.HALF_FLOAT&&(ue=i.RGBA16F),te===i.UNSIGNED_BYTE&&(ue=Le===lt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function _(N,w){let te;return N?w===null||w===wi||w===Xs?te=i.DEPTH24_STENCIL8:w===xn?te=i.DEPTH32F_STENCIL8:w===Ws&&(te=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===wi||w===Xs?te=i.DEPTH_COMPONENT24:w===xn?te=i.DEPTH_COMPONENT32F:w===Ws&&(te=i.DEPTH_COMPONENT16),te}function b(N,w){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==Pt&&N.minFilter!==qt?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function E(N){const w=N.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&u.delete(w)}function R(N){const w=N.target;w.removeEventListener("dispose",R),M(w)}function C(N){const w=n.get(N);if(w.__webglInit===void 0)return;const te=N.source,oe=f.get(te);if(oe){const pe=oe[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&S(N),Object.keys(oe).length===0&&f.delete(te)}n.remove(N)}function S(N){const w=n.get(N);i.deleteTexture(w.__webglTexture);const te=N.source,oe=f.get(te);delete oe[w.__cacheKey],o.memory.textures--}function M(N){const w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let pe=0;pe<w.__webglFramebuffer[oe].length;pe++)i.deleteFramebuffer(w.__webglFramebuffer[oe][pe]);else i.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[oe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=N.textures;for(let oe=0,pe=te.length;oe<pe;oe++){const ue=n.get(te[oe]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(te[oe])}n.remove(N)}let D=0;function F(){D=0}function W(){const N=D;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),D+=1,N}function K(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function j(N,w){const te=n.get(N);if(N.isVideoTexture&&ae(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&te.__version!==N.version){const oe=N.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T(te,N,w);return}}else N.isExternalTexture&&(te.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+w)}function H(N,w){const te=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){T(te,N,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+w)}function O(N,w){const te=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){T(te,N,w);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+w)}function U(N,w){const te=n.get(N);if(N.version>0&&te.__version!==N.version){A(te,N,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+w)}const Z={[rs]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},G={[Pt]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},ce={[zf]:i.NEVER,[Xf]:i.ALWAYS,[kf]:i.LESS,[ru]:i.LEQUAL,[Hf]:i.EQUAL,[Wf]:i.GEQUAL,[Vf]:i.GREATER,[Gf]:i.NOTEQUAL};function me(N,w){if(w.type===xn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qt||w.magFilter===Gr||w.magFilter===Ls||w.magFilter===Tn||w.minFilter===qt||w.minFilter===Gr||w.minFilter===Ls||w.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,Z[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,Z[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,Z[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,G[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,G[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Pt||w.minFilter!==Ls&&w.minFilter!==Tn||w.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function xe(N,w){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",E));const oe=w.source;let pe=f.get(oe);pe===void 0&&(pe={},f.set(oe,pe));const ue=K(w);if(ue!==N.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,te=!0),pe[ue].usedTimes++;const Le=pe[N.__cacheKey];Le!==void 0&&(pe[N.__cacheKey].usedTimes--,Le.usedTimes===0&&S(w)),N.__cacheKey=ue,N.__webglTexture=pe[ue].texture}return te}function Y(N,w,te){return Math.floor(Math.floor(N/te)/w)}function k(N,w,te,oe){const ue=N.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,te,oe,w.data);else{ue.sort((ve,we)=>ve.start-we.start);let Le=0;for(let ve=1;ve<ue.length;ve++){const we=ue[Le],Ve=ue[ve],Be=we.start+we.count,Ce=Y(Ve.start,w.width,4),je=Y(we.start,w.width,4);Ve.start<=Be+1&&Ce===je&&Y(Ve.start+Ve.count-1,w.width,4)===Ce?we.count=Math.max(we.count,Ve.start+Ve.count-we.start):(++Le,ue[Le]=Ve)}ue.length=Le+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ve=0,we=ue.length;ve<we;ve++){const Ve=ue[ve],Be=Math.floor(Ve.start/4),Ce=Math.ceil(Ve.count/4),je=Be%w.width,J=Math.floor(Be/w.width),be=Ce,Te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,je,J,be,Te,te,oe,w.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function T(N,w,te){let oe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=i.TEXTURE_3D);const pe=xe(N,w),ue=w.source;t.bindTexture(oe,N.__webglTexture,i.TEXTURE0+te);const Le=n.get(ue);if(ue.version!==Le.__version||pe===!0){t.activeTexture(i.TEXTURE0+te);const _e=et.getPrimaries(et.workingColorSpace),Re=w.colorSpace===ii?null:et.getPrimaries(w.colorSpace),Ie=w.colorSpace===ii||_e===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ve=y(w.image,!1,s.maxTextureSize);ve=Ee(w,ve);const we=r.convert(w.format,w.colorSpace),Ve=r.convert(w.type);let Be=x(w.internalFormat,we,Ve,w.colorSpace,w.isVideoTexture);me(oe,w);let Ce;const je=w.mipmaps,J=w.isVideoTexture!==!0,be=Le.__version===void 0||pe===!0,Te=ue.dataReady,Ne=b(w,ve);if(w.isDepthTexture)Be=_(w.format===Ys,w.type),be&&(J?t.texStorage2D(i.TEXTURE_2D,1,Be,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Be,ve.width,ve.height,0,we,Ve,null));else if(w.isDataTexture)if(je.length>0){J&&be&&t.texStorage2D(i.TEXTURE_2D,Ne,Be,je[0].width,je[0].height);for(let Me=0,ge=je.length;Me<ge;Me++)Ce=je[Me],J?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,we,Ve,Ce.data):t.texImage2D(i.TEXTURE_2D,Me,Be,Ce.width,Ce.height,0,we,Ve,Ce.data);w.generateMipmaps=!1}else J?(be&&t.texStorage2D(i.TEXTURE_2D,Ne,Be,ve.width,ve.height),Te&&k(w,ve,we,Ve)):t.texImage2D(i.TEXTURE_2D,0,Be,ve.width,ve.height,0,we,Ve,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){J&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Be,je[0].width,je[0].height,ve.depth);for(let Me=0,ge=je.length;Me<ge;Me++)if(Ce=je[Me],w.format!==an)if(we!==null)if(J){if(Te)if(w.layerUpdates.size>0){const Oe=ih(Ce.width,Ce.height,w.format,w.type);for(const qe of w.layerUpdates){const ut=Ce.data.subarray(qe*Oe/Ce.data.BYTES_PER_ELEMENT,(qe+1)*Oe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,qe,Ce.width,Ce.height,1,we,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,ve.depth,we,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,Be,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,ve.depth,we,Ve,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,Be,Ce.width,Ce.height,ve.depth,0,we,Ve,Ce.data)}else{J&&be&&t.texStorage2D(i.TEXTURE_2D,Ne,Be,je[0].width,je[0].height);for(let Me=0,ge=je.length;Me<ge;Me++)Ce=je[Me],w.format!==an?we!==null?J?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,we,Ve,Ce.data):t.texImage2D(i.TEXTURE_2D,Me,Be,Ce.width,Ce.height,0,we,Ve,Ce.data)}else if(w.isDataArrayTexture)if(J){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Be,ve.width,ve.height,ve.depth),Te)if(w.layerUpdates.size>0){const Me=ih(ve.width,ve.height,w.format,w.type);for(const ge of w.layerUpdates){const Oe=ve.data.subarray(ge*Me/ve.data.BYTES_PER_ELEMENT,(ge+1)*Me/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ge,ve.width,ve.height,1,we,Ve,Oe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,we,Ve,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,we,Ve,ve.data);else if(w.isData3DTexture)J?(be&&t.texStorage3D(i.TEXTURE_3D,Ne,Be,ve.width,ve.height,ve.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,we,Ve,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,we,Ve,ve.data);else if(w.isFramebufferTexture){if(be)if(J)t.texStorage2D(i.TEXTURE_2D,Ne,Be,ve.width,ve.height);else{let Me=ve.width,ge=ve.height;for(let Oe=0;Oe<Ne;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Be,Me,ge,0,we,Ve,null),Me>>=1,ge>>=1}}else if(je.length>0){if(J&&be){const Me=Ue(je[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Be,Me.width,Me.height)}for(let Me=0,ge=je.length;Me<ge;Me++)Ce=je[Me],J?Te&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,we,Ve,Ce):t.texImage2D(i.TEXTURE_2D,Me,Be,we,Ve,Ce);w.generateMipmaps=!1}else if(J){if(be){const Me=Ue(ve);t.texStorage2D(i.TEXTURE_2D,Ne,Be,Me.width,Me.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ve,ve)}else t.texImage2D(i.TEXTURE_2D,0,Be,we,Ve,ve);m(w)&&p(oe),Le.__version=ue.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function A(N,w,te){if(w.image.length!==6)return;const oe=xe(N,w),pe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+te);const ue=n.get(pe);if(pe.version!==ue.__version||oe===!0){t.activeTexture(i.TEXTURE0+te);const Le=et.getPrimaries(et.workingColorSpace),_e=w.colorSpace===ii?null:et.getPrimaries(w.colorSpace),Re=w.colorSpace===ii||Le===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,we=[];for(let ge=0;ge<6;ge++)!Ie&&!ve?we[ge]=y(w.image[ge],!0,s.maxCubemapSize):we[ge]=ve?w.image[ge].image:w.image[ge],we[ge]=Ee(w,we[ge]);const Ve=we[0],Be=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),je=x(w.internalFormat,Be,Ce,w.colorSpace),J=w.isVideoTexture!==!0,be=ue.__version===void 0||oe===!0,Te=pe.dataReady;let Ne=b(w,Ve);me(i.TEXTURE_CUBE_MAP,w);let Me;if(Ie){J&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,je,Ve.width,Ve.height);for(let ge=0;ge<6;ge++){Me=we[ge].mipmaps;for(let Oe=0;Oe<Me.length;Oe++){const qe=Me[Oe];w.format!==an?Be!==null?J?Te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,je,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,0,0,qe.width,qe.height,Be,Ce,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe,je,qe.width,qe.height,0,Be,Ce,qe.data)}}}else{if(Me=w.mipmaps,J&&be){Me.length>0&&Ne++;const ge=Ue(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,je,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ve){J?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we[ge].width,we[ge].height,Be,Ce,we[ge].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,je,we[ge].width,we[ge].height,0,Be,Ce,we[ge].data);for(let Oe=0;Oe<Me.length;Oe++){const ut=Me[Oe].image[ge].image;J?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,0,0,ut.width,ut.height,Be,Ce,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,je,ut.width,ut.height,0,Be,Ce,ut.data)}}else{J?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Be,Ce,we[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,je,Be,Ce,we[ge]);for(let Oe=0;Oe<Me.length;Oe++){const qe=Me[Oe];J?Te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,0,0,Be,Ce,qe.image[ge]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Oe+1,je,Be,Ce,qe.image[ge])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),ue.__version=pe.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function q(N,w,te,oe,pe,ue){const Le=r.convert(te.format,te.colorSpace),_e=r.convert(te.type),Re=x(te.internalFormat,Le,_e,te.colorSpace),Ie=n.get(w),ve=n.get(te);if(ve.__renderTarget=w,!Ie.__hasExternalTextures){const we=Math.max(1,w.width>>ue),Ve=Math.max(1,w.height>>ue);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,ue,Re,we,Ve,w.depth,0,Le,_e,null):t.texImage2D(pe,ue,Re,we,Ve,0,Le,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),L(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,pe,ve.__webglTexture,0,z(w)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,pe,ve.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(N,w,te){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){const oe=w.depthTexture,pe=oe&&oe.isDepthTexture?oe.type:null,ue=_(w.stencilBuffer,pe),Le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=z(w);L(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ue,w.width,w.height):te?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ue,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,N)}else{const oe=w.textures;for(let pe=0;pe<oe.length;pe++){const ue=oe[pe],Le=r.convert(ue.format,ue.colorSpace),_e=r.convert(ue.type),Re=x(ue.internalFormat,Le,_e,ue.colorSpace),Ie=z(w);te&&L(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Re,w.width,w.height):L(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Re,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(w.depthTexture);oe.__renderTarget=w,(!oe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);const pe=oe.__webglTexture,ue=z(w);if(w.depthTexture.format===qs)L(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Ys)L(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function re(N){const w=n.get(N),te=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const oe=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",pe)};oe.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=oe}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const oe=N.texture.mipmaps;oe&&oe.length>0?V(w.__webglFramebuffer[0],N):V(w.__webglFramebuffer,N)}else if(te){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=i.createRenderbuffer(),ie(w.__webglDepthbuffer[oe],N,!1);else{const pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ue)}}else{const oe=N.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),ie(w.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(N,w,te){const oe=n.get(N);w!==void 0&&q(oe.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&re(N)}function I(N){const w=N.texture,te=n.get(N),oe=n.get(w);N.addEventListener("dispose",R);const pe=N.textures,ue=N.isWebGLCubeRenderTarget===!0,Le=pe.length>1;if(Le||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=w.version,o.memory.textures++),ue){te.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[_e]=[];for(let Re=0;Re<w.mipmaps.length;Re++)te.__webglFramebuffer[_e][Re]=i.createFramebuffer()}else te.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)te.__webglFramebuffer[_e]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Le)for(let _e=0,Re=pe.length;_e<Re;_e++){const Ie=n.get(pe[_e]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&L(N)===!1){te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let _e=0;_e<pe.length;_e++){const Re=pe[_e];te.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[_e]);const Ie=r.convert(Re.format,Re.colorSpace),ve=r.convert(Re.type),we=x(Re.internalFormat,Ie,ve,Re.colorSpace,N.isXRRenderTarget===!0),Ve=z(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,we,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,te.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(te.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),me(i.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let Re=0;Re<w.mipmaps.length;Re++)q(te.__webglFramebuffer[_e][Re],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else q(te.__webglFramebuffer[_e],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let _e=0,Re=pe.length;_e<Re;_e++){const Ie=pe[_e],ve=n.get(Ie);let we=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,ve.__webglTexture),me(we,Ie),q(te.__webglFramebuffer,N,Ie,i.COLOR_ATTACHMENT0+_e,we,0),m(Ie)&&p(we)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_e=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,oe.__webglTexture),me(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let Re=0;Re<w.mipmaps.length;Re++)q(te.__webglFramebuffer[Re],N,w,i.COLOR_ATTACHMENT0,_e,Re);else q(te.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,_e,0);m(w)&&p(_e),t.unbindTexture()}N.depthBuffer&&re(N)}function X(N){const w=N.textures;for(let te=0,oe=w.length;te<oe;te++){const pe=w[te];if(m(pe)){const ue=v(N),Le=n.get(pe).__webglTexture;t.bindTexture(ue,Le),p(ue),t.unbindTexture()}}}const $=[],ee=[];function Q(N){if(N.samples>0){if(L(N)===!1){const w=N.textures,te=N.width,oe=N.height;let pe=i.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(N),_e=w.length>1;if(_e)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Re=N.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ve=n.get(w[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,te,oe,0,0,te,oe,pe,i.NEAREST),l===!0&&($.length=0,ee.length=0,$.push(i.COLOR_ATTACHMENT0+Ie),N.depthBuffer&&N.resolveDepthBuffer===!1&&($.push(ue),ee.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ve=n.get(w[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function z(N){return Math.min(s.maxSamples,N.samples)}function L(N){const w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ae(N){const w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function Ee(N,w){const te=N.colorSpace,oe=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==Ht&&te!==ii&&(et.getTransfer(te)===lt?(oe!==an||pe!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function Ue(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=fe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=q,this.useMultisampledRTT=L}function Ix(i,e){function t(n,s=ii){let r;const o=et.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jh)return i.BYTE;if(n===Zh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===tu)return i.ALPHA;if(n===nu)return i.RGB;if(n===an)return i.RGBA;if(n===qs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===iu)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===El)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===Ma||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Va||n===Ga)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ci({vertexShader:Lx,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new co(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends ms{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const y=typeof XRWebGLBinding<"u",m=new Nx,p={},v=t.getContextAttributes();let x=null,_=null;const b=[],E=[],R=new de;let C=null;const S=new Wt;S.viewport=new Qe;const M=new Wt;M.viewport=new Qe;const D=[S,M],F=new qp;let W=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let A=b[T];return A===void 0&&(A=new ko,b[T]=A),A.getTargetRaySpace()},this.getControllerGrip=function(T){let A=b[T];return A===void 0&&(A=new ko,b[T]=A),A.getGripSpace()},this.getHand=function(T){let A=b[T];return A===void 0&&(A=new ko,b[T]=A),A.getHandSpace()};function j(T){const A=E.indexOf(T.inputSource);if(A===-1)return;const q=b[A];q!==void 0&&(q.update(T.inputSource,T.frame,c||o),q.dispatchEvent({type:T.type,data:T.inputSource}))}function H(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",O);for(let T=0;T<b.length;T++){const A=E[T];A!==null&&(E[T]=null,b[T].disconnect(A))}W=null,K=null,m.reset();for(const T in p)delete p[T];e.setRenderTarget(x),d=null,f=null,h=null,s=null,_=null,k.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(T){c=T},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(T){if(s=T,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",H),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ie=null,V=null;v.depth&&(V=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?Ys:qs,ie=v.stencil?Xs:wi);const re={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ai(f.textureWidth,f.textureHeight,{format:an,type:Pn,depthTexture:new _u(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ai(d.framebufferWidth,d.framebufferHeight,{format:an,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(T){for(let A=0;A<T.removed.length;A++){const q=T.removed[A],ie=E.indexOf(q);ie>=0&&(E[ie]=null,b[ie].disconnect(q))}for(let A=0;A<T.added.length;A++){const q=T.added[A];let ie=E.indexOf(q);if(ie===-1){for(let re=0;re<b.length;re++)if(re>=E.length){E.push(q),ie=re;break}else if(E[re]===null){E[re]=q,ie=re;break}if(ie===-1)break}const V=b[ie];V&&V.connect(q)}}const U=new B,Z=new B;function G(T,A,q){U.setFromMatrixPosition(A.matrixWorld),Z.setFromMatrixPosition(q.matrixWorld);const ie=U.distanceTo(Z),V=A.projectionMatrix.elements,re=q.projectionMatrix.elements,fe=V[14]/(V[10]-1),I=V[14]/(V[10]+1),X=(V[9]+1)/V[5],$=(V[9]-1)/V[5],ee=(V[8]-1)/V[0],Q=(re[8]+1)/re[0],z=fe*ee,L=fe*Q,ae=ie/(-ee+Q),Ee=ae*-ee;if(A.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ee),T.translateZ(ae),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),V[10]===-1)T.projectionMatrix.copy(A.projectionMatrix),T.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{const Ue=fe+ae,N=I+ae,w=z-Ee,te=L+(ie-Ee),oe=X*I/N*Ue,pe=$*I/N*Ue;T.projectionMatrix.makePerspective(w,te,oe,pe,Ue,N),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function ce(T,A){A===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(A.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(s===null)return;let A=T.near,q=T.far;m.texture!==null&&(m.depthNear>0&&(A=m.depthNear),m.depthFar>0&&(q=m.depthFar)),F.near=M.near=S.near=A,F.far=M.far=S.far=q,(W!==F.near||K!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,K=F.far),F.layers.mask=T.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const ie=T.parent,V=F.cameras;ce(F,ie);for(let re=0;re<V.length;re++)ce(V[re],ie);V.length===2?G(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),me(T,F,ie)};function me(T,A,q){q===null?T.matrix.copy(A.matrixWorld):(T.matrix.copy(q.matrixWorld),T.matrix.invert(),T.matrix.multiply(A.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(A.projectionMatrix),T.projectionMatrixInverse.copy(A.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=os*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(T){l=T,f!==null&&(f.fixedFoveation=T),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=T)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(T){return p[T]};let xe=null;function Y(T,A){if(u=A.getViewerPose(c||o),g=A,u!==null){const q=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ie=!1;q.length!==F.cameras.length&&(F.cameras.length=0,ie=!0);for(let I=0;I<q.length;I++){const X=q[I];let $=null;if(d!==null)$=d.getViewport(X);else{const Q=h.getViewSubImage(f,X);$=Q.viewport,I===0&&(e.setRenderTargetTextures(_,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(_))}let ee=D[I];ee===void 0&&(ee=new Wt,ee.layers.enable(I),ee.viewport=new Qe,D[I]=ee),ee.matrix.fromArray(X.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(X.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set($.x,$.y,$.width,$.height),I===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ie===!0&&F.cameras.push(ee)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const I=h.getDepthInformation(q[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(V&&V.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let I=0;I<q.length;I++){const X=q[I].camera;if(X){let $=p[X];$||($=new vu,p[X]=$);const ee=h.getCameraImage(X);$.sourceTexture=ee}}}}for(let q=0;q<b.length;q++){const ie=E[q],V=b[q];ie!==null&&V!==void 0&&V.update(ie,A,c||o)}xe&&xe(T,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),g=null}const k=new Nu;k.setAnimationLoop(Y),this.setAnimationLoop=function(T){xe=T},this.dispose=function(){}}}const vi=new Qt,Fx=new Ye;function Ox(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,_=v.envMapRotation;x&&(m.envMap.value=x,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(vi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function c(v,x){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(v,b);const E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function u(v){const x=h();v.__bindingPointIndex=x;const _=i.createBuffer(),b=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=s[v.id],_=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,R=_.length;E<R;E++){const C=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,M=C.length;S<M;S++){const D=C[S];if(d(D,E,S,b)===!0){const F=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let j=0;j<W.length;j++){const H=W[j],O=y(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+K,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,K),K+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,x,_,b){const E=v.value,R=x+"_"+_;if(b[R]===void 0)return typeof E=="number"||typeof E=="boolean"?b[R]=E:b[R]=E.clone(),!0;{const C=b[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return b[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const x=v.uniforms;let _=0;const b=16;for(let R=0,C=x.length;R<C;R++){const S=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,D=S.length;M<D;M++){const F=S[M],W=Array.isArray(F.value)?F.value:[F.value];for(let K=0,j=W.length;K<j;K++){const H=W[K],O=y(H),U=_%b,Z=U%O.boundary,G=U+Z;_+=Z,G!==0&&b-G<O.storage&&(_+=b-G),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=O.storage}}}const E=_%b;return E>0&&(_+=b-E),v.__size=_,v.__cache={},this}function y(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Wl{constructor(e={}){const{canvas:t=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let b=!1;this._outputColorSpace=Et;let E=0,R=0,C=null,S=-1,M=null;const D=new Qe,F=new Qe;let W=null;const K=new ze(0);let j=0,H=t.width,O=t.height,U=1,Z=null,G=null;const ce=new Qe(0,0,H,O),me=new Qe(0,0,H,O);let xe=!1;const Y=new Il;let k=!1,T=!1;const A=new Ye,q=new B,ie=new Qe,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function fe(){return C===null?U:1}let I=n;function X(P,ne){return t.getContext(P,ne)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){const ne="webgl2";if(I=X(ne,P),I===null)throw X(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let $,ee,Q,z,L,ae,Ee,Ue,N,w,te,oe,pe,ue,Le,_e,Re,Ie,ve,we,Ve,Be,Ce,je;function J(){$=new K0(I),$.init(),Be=new Ix(I,$),ee=new V0(I,$,e,Be),Q=new Cx(I,$),ee.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),z=new Z0(I),L=new gx,ae=new Px(I,$,Q,L,ee,Be,z),Ee=new W0(_),Ue=new j0(_),N=new sm(I),Ce=new k0(I,N),w=new $0(I,N,z,Ce),te=new e1(I,w,N,z),ve=new Q0(I,ee,ae),_e=new G0(L),oe=new mx(_,Ee,Ue,$,ee,Ce,_e),pe=new Ox(_,L),ue=new yx,Le=new Ex($),Ie=new z0(_,Ee,Ue,Q,te,d,l),Re=new Ax(_,te,ee),je=new Bx(I,z,ee,Q),we=new H0(I,$,z),Ve=new J0(I,$,z),z.programs=oe.programs,_.capabilities=ee,_.extensions=$,_.properties=L,_.renderLists=ue,_.shadowMap=Re,_.state=Q,_.info=z}J();const be=new Ux(_,I);this.xr=be,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=$.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=$.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(H,O,!1))},this.getSize=function(P){return P.set(H,O)},this.setSize=function(P,ne,le=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,O=ne,t.width=Math.floor(P*U),t.height=Math.floor(ne*U),le===!0&&(t.style.width=P+"px",t.style.height=ne+"px"),this.setViewport(0,0,P,ne)},this.getDrawingBufferSize=function(P){return P.set(H*U,O*U).floor()},this.setDrawingBufferSize=function(P,ne,le){H=P,O=ne,U=le,t.width=Math.floor(P*le),t.height=Math.floor(ne*le),this.setViewport(0,0,P,ne)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(ce)},this.setViewport=function(P,ne,le,he){P.isVector4?ce.set(P.x,P.y,P.z,P.w):ce.set(P,ne,le,he),Q.viewport(D.copy(ce).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(me)},this.setScissor=function(P,ne,le,he){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,ne,le,he),Q.scissor(F.copy(me).multiplyScalar(U).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(P){Q.setScissorTest(xe=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){G=P},this.getClearColor=function(P){return P.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(P=!0,ne=!0,le=!0){let he=0;if(P){let se=!1;if(C!==null){const Se=C.texture.format;se=Se===El||Se===bl||Se===Sl}if(se){const Se=C.texture.type,Pe=Se===Pn||Se===wi||Se===Ws||Se===Xs||Se===_l||Se===vl,Fe=Ie.getClearColor(),De=Ie.getClearAlpha(),Ge=Fe.r,We=Fe.g,ke=Fe.b;Pe?(g[0]=Ge,g[1]=We,g[2]=ke,g[3]=De,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=Ge,y[1]=We,y[2]=ke,y[3]=De,I.clearBufferiv(I.COLOR,0,y))}else he|=I.COLOR_BUFFER_BIT}ne&&(he|=I.DEPTH_BUFFER_BIT),le&&(he|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ie.dispose(),ue.dispose(),Le.dispose(),L.dispose(),Ee.dispose(),Ue.dispose(),te.dispose(),Ce.dispose(),je.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Mn),be.removeEventListener("sessionend",Zl),fi.stop()};function Te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const P=z.autoReset,ne=Re.enabled,le=Re.autoUpdate,he=Re.needsUpdate,se=Re.type;J(),z.autoReset=P,Re.enabled=ne,Re.autoUpdate=le,Re.needsUpdate=he,Re.type=se}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ge(P){const ne=P.target;ne.removeEventListener("dispose",ge),Oe(ne)}function Oe(P){qe(P),L.remove(P)}function qe(P){const ne=L.get(P).programs;ne!==void 0&&(ne.forEach(function(le){oe.releaseProgram(le)}),P.isShaderMaterial&&oe.releaseShaderCache(P))}this.renderBufferDirect=function(P,ne,le,he,se,Se){ne===null&&(ne=V);const Pe=se.isMesh&&se.matrixWorld.determinant()<0,Fe=Ju(P,ne,le,he,se);Q.setMaterial(he,Pe);let De=le.index,Ge=1;if(he.wireframe===!0){if(De=w.getWireframeAttribute(le),De===void 0)return;Ge=2}const We=le.drawRange,ke=le.attributes.position;let Ze=We.start*Ge,at=(We.start+We.count)*Ge;Se!==null&&(Ze=Math.max(Ze,Se.start*Ge),at=Math.min(at,(Se.start+Se.count)*Ge)),De!==null?(Ze=Math.max(Ze,0),at=Math.min(at,De.count)):ke!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,ke.count));const yt=at-Ze;if(yt<0||yt===1/0)return;Ce.setup(se,he,Fe,le,De);let ft,ht=we;if(De!==null&&(ft=N.get(De),ht=Ve,ht.setIndex(ft)),se.isMesh)he.wireframe===!0?(Q.setLineWidth(he.wireframeLinewidth*fe()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(se.isLine){let He=he.linewidth;He===void 0&&(He=1),Q.setLineWidth(He*fe()),se.isLineSegments?ht.setMode(I.LINES):se.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else se.isPoints?ht.setMode(I.POINTS):se.isSprite&&ht.setMode(I.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const He=se._multiDrawStarts,pt=se._multiDrawCounts,nt=se._multiDrawCount,jt=De?N.get(De).bytesPerElement:1,Li=L.get(he).currentProgram.getUniforms();for(let Kt=0;Kt<nt;Kt++)Li.setValue(I,"_gl_DrawID",Kt),ht.render(He[Kt]/jt,pt[Kt])}else if(se.isInstancedMesh)ht.renderInstances(Ze,yt,se.count);else if(le.isInstancedBufferGeometry){const He=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,pt=Math.min(le.instanceCount,He);ht.renderInstances(Ze,yt,pt)}else ht.render(Ze,yt)};function ut(P,ne,le){P.transparent===!0&&P.side===mn&&P.forceSinglePass===!1?(P.side=kt,P.needsUpdate=!0,lr(P,ne,le),P.side=Cn,P.needsUpdate=!0,lr(P,ne,le),P.side=mn):lr(P,ne,le)}this.compile=function(P,ne,le=null){le===null&&(le=P),p=Le.get(le),p.init(ne),x.push(p),le.traverseVisible(function(se){se.isLight&&se.layers.test(ne.layers)&&(p.pushLight(se),se.castShadow&&p.pushShadow(se))}),P!==le&&P.traverseVisible(function(se){se.isLight&&se.layers.test(ne.layers)&&(p.pushLight(se),se.castShadow&&p.pushShadow(se))}),p.setupLights();const he=new Set;return P.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Se=se.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Fe=Se[Pe];ut(Fe,le,se),he.add(Fe)}else ut(Se,le,se),he.add(Se)}),p=x.pop(),he},this.compileAsync=function(P,ne,le=null){const he=this.compile(P,ne,le);return new Promise(se=>{function Se(){if(he.forEach(function(Pe){L.get(Pe).currentProgram.isReady()&&he.delete(Pe)}),he.size===0){se(P);return}setTimeout(Se,10)}$.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let it=null;function Dn(P){it&&it(P)}function Mn(){fi.stop()}function Zl(){fi.start()}const fi=new Nu;fi.setAnimationLoop(Dn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(P){it=P,be.setAnimationLoop(P),P===null?fi.stop():fi.start()},be.addEventListener("sessionstart",Mn),be.addEventListener("sessionend",Zl),this.render=function(P,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(ne),ne=be.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,ne,C),p=Le.get(P,x.length),p.init(ne),x.push(p),A.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Y.setFromProjectionMatrix(A,wn,ne.reversedDepth),T=this.localClippingEnabled,k=_e.init(this.clippingPlanes,T),m=ue.get(P,v.length),m.init(),v.push(m),be.enabled===!0&&be.isPresenting===!0){const Se=_.xr.getDepthSensingMesh();Se!==null&&xo(Se,ne,-1/0,_.sortObjects)}xo(P,ne,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Z,G),re=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,re&&Ie.addToRenderList(m,P),this.info.render.frame++,k===!0&&_e.beginShadows();const le=p.state.shadowsArray;Re.render(le,P,ne),k===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=m.opaque,se=m.transmissive;if(p.setupLights(),ne.isArrayCamera){const Se=ne.cameras;if(se.length>0)for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++){const De=Se[Pe];ec(he,se,P,De)}re&&Ie.render(P);for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++){const De=Se[Pe];Ql(m,P,De,De.viewport)}}else se.length>0&&ec(he,se,P,ne),re&&Ie.render(P),Ql(m,P,ne);C!==null&&R===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(_,P,ne),Ce.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],k===!0&&_e.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function xo(P,ne,le,he){if(P.visible===!1)return;if(P.layers.test(ne.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ne);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){he&&ie.setFromMatrixPosition(P.matrixWorld).applyMatrix4(A);const Pe=te.update(P),Fe=P.material;Fe.visible&&m.push(P,Pe,Fe,le,ie.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const Pe=te.update(P),Fe=P.material;if(he&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ie.copy(P.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ie.copy(Pe.boundingSphere.center)),ie.applyMatrix4(P.matrixWorld).applyMatrix4(A)),Array.isArray(Fe)){const De=Pe.groups;for(let Ge=0,We=De.length;Ge<We;Ge++){const ke=De[Ge],Ze=Fe[ke.materialIndex];Ze&&Ze.visible&&m.push(P,Pe,Ze,le,ie.z,ke)}}else Fe.visible&&m.push(P,Pe,Fe,le,ie.z,null)}}const Se=P.children;for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++)xo(Se[Pe],ne,le,he)}function Ql(P,ne,le,he){const se=P.opaque,Se=P.transmissive,Pe=P.transparent;p.setupLightsView(le),k===!0&&_e.setGlobalState(_.clippingPlanes,le),he&&Q.viewport(D.copy(he)),se.length>0&&ar(se,ne,le),Se.length>0&&ar(Se,ne,le),Pe.length>0&&ar(Pe,ne,le),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ec(P,ne,le,he){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[he.id]===void 0&&(p.state.transmissionRenderTarget[he.id]=new Ai(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?sr:Pn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Se=p.state.transmissionRenderTarget[he.id],Pe=he.viewport||D;Se.setSize(Pe.z*_.transmissionResolutionScale,Pe.w*_.transmissionResolutionScale);const Fe=_.getRenderTarget(),De=_.getActiveCubeFace(),Ge=_.getActiveMipmapLevel();_.setRenderTarget(Se),_.getClearColor(K),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),re&&Ie.render(le);const We=_.toneMapping;_.toneMapping=ai;const ke=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),p.setupLightsView(he),k===!0&&_e.setGlobalState(_.clippingPlanes,he),ar(P,le,he),ae.updateMultisampleRenderTarget(Se),ae.updateRenderTargetMipmap(Se),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let at=0,yt=ne.length;at<yt;at++){const ft=ne[at],ht=ft.object,He=ft.geometry,pt=ft.material,nt=ft.group;if(pt.side===mn&&ht.layers.test(he.layers)){const jt=pt.side;pt.side=kt,pt.needsUpdate=!0,tc(ht,le,he,He,pt,nt),pt.side=jt,pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(ae.updateMultisampleRenderTarget(Se),ae.updateRenderTargetMipmap(Se))}_.setRenderTarget(Fe,De,Ge),_.setClearColor(K,j),ke!==void 0&&(he.viewport=ke),_.toneMapping=We}function ar(P,ne,le){const he=ne.isScene===!0?ne.overrideMaterial:null;for(let se=0,Se=P.length;se<Se;se++){const Pe=P[se],Fe=Pe.object,De=Pe.geometry,Ge=Pe.group;let We=Pe.material;We.allowOverride===!0&&he!==null&&(We=he),Fe.layers.test(le.layers)&&tc(Fe,ne,le,De,We,Ge)}}function tc(P,ne,le,he,se,Se){P.onBeforeRender(_,ne,le,he,se,Se),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),se.onBeforeRender(_,ne,le,he,P,Se),se.transparent===!0&&se.side===mn&&se.forceSinglePass===!1?(se.side=kt,se.needsUpdate=!0,_.renderBufferDirect(le,ne,he,se,P,Se),se.side=Cn,se.needsUpdate=!0,_.renderBufferDirect(le,ne,he,se,P,Se),se.side=mn):_.renderBufferDirect(le,ne,he,se,P,Se),P.onAfterRender(_,ne,le,he,se,Se)}function lr(P,ne,le){ne.isScene!==!0&&(ne=V);const he=L.get(P),se=p.state.lights,Se=p.state.shadowsArray,Pe=se.state.version,Fe=oe.getParameters(P,se.state,Se,ne,le),De=oe.getProgramCacheKey(Fe);let Ge=he.programs;he.environment=P.isMeshStandardMaterial?ne.environment:null,he.fog=ne.fog,he.envMap=(P.isMeshStandardMaterial?Ue:Ee).get(P.envMap||he.environment),he.envMapRotation=he.environment!==null&&P.envMap===null?ne.environmentRotation:P.envMapRotation,Ge===void 0&&(P.addEventListener("dispose",ge),Ge=new Map,he.programs=Ge);let We=Ge.get(De);if(We!==void 0){if(he.currentProgram===We&&he.lightsStateVersion===Pe)return ic(P,Fe),We}else Fe.uniforms=oe.getUniforms(P),P.onBeforeCompile(Fe,_),We=oe.acquireProgram(Fe,De),Ge.set(De,We),he.uniforms=Fe.uniforms;const ke=he.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ke.clippingPlanes=_e.uniform),ic(P,Fe),he.needsLights=Qu(P),he.lightsStateVersion=Pe,he.needsLights&&(ke.ambientLightColor.value=se.state.ambient,ke.lightProbe.value=se.state.probe,ke.directionalLights.value=se.state.directional,ke.directionalLightShadows.value=se.state.directionalShadow,ke.spotLights.value=se.state.spot,ke.spotLightShadows.value=se.state.spotShadow,ke.rectAreaLights.value=se.state.rectArea,ke.ltc_1.value=se.state.rectAreaLTC1,ke.ltc_2.value=se.state.rectAreaLTC2,ke.pointLights.value=se.state.point,ke.pointLightShadows.value=se.state.pointShadow,ke.hemisphereLights.value=se.state.hemi,ke.directionalShadowMap.value=se.state.directionalShadowMap,ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,ke.spotShadowMap.value=se.state.spotShadowMap,ke.spotLightMatrix.value=se.state.spotLightMatrix,ke.spotLightMap.value=se.state.spotLightMap,ke.pointShadowMap.value=se.state.pointShadowMap,ke.pointShadowMatrix.value=se.state.pointShadowMatrix),he.currentProgram=We,he.uniformsList=null,We}function nc(P){if(P.uniformsList===null){const ne=P.currentProgram.getUniforms();P.uniformsList=jr.seqWithValue(ne.seq,P.uniforms)}return P.uniformsList}function ic(P,ne){const le=L.get(P);le.outputColorSpace=ne.outputColorSpace,le.batching=ne.batching,le.batchingColor=ne.batchingColor,le.instancing=ne.instancing,le.instancingColor=ne.instancingColor,le.instancingMorph=ne.instancingMorph,le.skinning=ne.skinning,le.morphTargets=ne.morphTargets,le.morphNormals=ne.morphNormals,le.morphColors=ne.morphColors,le.morphTargetsCount=ne.morphTargetsCount,le.numClippingPlanes=ne.numClippingPlanes,le.numIntersection=ne.numClipIntersection,le.vertexAlphas=ne.vertexAlphas,le.vertexTangents=ne.vertexTangents,le.toneMapping=ne.toneMapping}function Ju(P,ne,le,he,se){ne.isScene!==!0&&(ne=V),ae.resetTextureUnits();const Se=ne.fog,Pe=he.isMeshStandardMaterial?ne.environment:null,Fe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ht,De=(he.isMeshStandardMaterial?Ue:Ee).get(he.envMap||Pe),Ge=he.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,We=!!le.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),ke=!!le.morphAttributes.position,Ze=!!le.morphAttributes.normal,at=!!le.morphAttributes.color;let yt=ai;he.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=_.toneMapping);const ft=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ht=ft!==void 0?ft.length:0,He=L.get(he),pt=p.state.lights;if(k===!0&&(T===!0||P!==M)){const Nt=P===M&&he.id===S;_e.setState(he,P,Nt)}let nt=!1;he.version===He.__version?(He.needsLights&&He.lightsStateVersion!==pt.state.version||He.outputColorSpace!==Fe||se.isBatchedMesh&&He.batching===!1||!se.isBatchedMesh&&He.batching===!0||se.isBatchedMesh&&He.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&He.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&He.instancing===!1||!se.isInstancedMesh&&He.instancing===!0||se.isSkinnedMesh&&He.skinning===!1||!se.isSkinnedMesh&&He.skinning===!0||se.isInstancedMesh&&He.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&He.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&He.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&He.instancingMorph===!1&&se.morphTexture!==null||He.envMap!==De||he.fog===!0&&He.fog!==Se||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==_e.numPlanes||He.numIntersection!==_e.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==We||He.morphTargets!==ke||He.morphNormals!==Ze||He.morphColors!==at||He.toneMapping!==yt||He.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,He.__version=he.version);let jt=He.currentProgram;nt===!0&&(jt=lr(he,ne,se));let Li=!1,Kt=!1,Ss=!1;const mt=jt.getUniforms(),en=He.uniforms;if(Q.useProgram(jt.program)&&(Li=!0,Kt=!0,Ss=!0),he.id!==S&&(S=he.id,Kt=!0),Li||M!==P){Q.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),mt.setValue(I,"projectionMatrix",P.projectionMatrix),mt.setValue(I,"viewMatrix",P.matrixWorldInverse);const Vt=mt.map.cameraPosition;Vt!==void 0&&Vt.setValue(I,q.setFromMatrixPosition(P.matrixWorld)),ee.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&mt.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Kt=!0,Ss=!0)}if(se.isSkinnedMesh){mt.setOptional(I,se,"bindMatrix"),mt.setOptional(I,se,"bindMatrixInverse");const Nt=se.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),mt.setValue(I,"boneTexture",Nt.boneTexture,ae))}se.isBatchedMesh&&(mt.setOptional(I,se,"batchingTexture"),mt.setValue(I,"batchingTexture",se._matricesTexture,ae),mt.setOptional(I,se,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",se._indirectTexture,ae),mt.setOptional(I,se,"batchingColorTexture"),se._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",se._colorsTexture,ae));const tn=le.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ve.update(se,le,jt),(Kt||He.receiveShadow!==se.receiveShadow)&&(He.receiveShadow=se.receiveShadow,mt.setValue(I,"receiveShadow",se.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(en.envMap.value=De,en.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&ne.environment!==null&&(en.envMapIntensity.value=ne.environmentIntensity),Kt&&(mt.setValue(I,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&Zu(en,Ss),Se&&he.fog===!0&&pe.refreshFogUniforms(en,Se),pe.refreshMaterialUniforms(en,he,U,O,p.state.transmissionRenderTarget[P.id]),jr.upload(I,nc(He),en,ae)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(jr.upload(I,nc(He),en,ae),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&mt.setValue(I,"center",se.center),mt.setValue(I,"modelViewMatrix",se.modelViewMatrix),mt.setValue(I,"normalMatrix",se.normalMatrix),mt.setValue(I,"modelMatrix",se.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Nt=he.uniformsGroups;for(let Vt=0,yo=Nt.length;Vt<yo;Vt++){const di=Nt[Vt];je.update(di,jt),je.bind(di,jt)}}return jt}function Zu(P,ne){P.ambientLightColor.needsUpdate=ne,P.lightProbe.needsUpdate=ne,P.directionalLights.needsUpdate=ne,P.directionalLightShadows.needsUpdate=ne,P.pointLights.needsUpdate=ne,P.pointLightShadows.needsUpdate=ne,P.spotLights.needsUpdate=ne,P.spotLightShadows.needsUpdate=ne,P.rectAreaLights.needsUpdate=ne,P.hemisphereLights.needsUpdate=ne}function Qu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,ne,le){const he=L.get(P);he.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),L.get(P.texture).__webglTexture=ne,L.get(P.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:le,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ne){const le=L.get(P);le.__webglFramebuffer=ne,le.__useDefaultFramebuffer=ne===void 0};const ef=I.createFramebuffer();this.setRenderTarget=function(P,ne=0,le=0){C=P,E=ne,R=le;let he=!0,se=null,Se=!1,Pe=!1;if(P){const De=L.get(P);if(De.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(I.FRAMEBUFFER,null),he=!1;else if(De.__webglFramebuffer===void 0)ae.setupRenderTarget(P);else if(De.__hasExternalTextures)ae.rebindTextures(P,L.get(P.texture).__webglTexture,L.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ke=P.depthTexture;if(De.__boundDepthTexture!==ke){if(ke!==null&&L.has(ke)&&(P.width!==ke.image.width||P.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Pe=!0);const We=L.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(We[ne])?se=We[ne][le]:se=We[ne],Se=!0):P.samples>0&&ae.useMultisampledRTT(P)===!1?se=L.get(P).__webglMultisampledFramebuffer:Array.isArray(We)?se=We[le]:se=We,D.copy(P.viewport),F.copy(P.scissor),W=P.scissorTest}else D.copy(ce).multiplyScalar(U).floor(),F.copy(me).multiplyScalar(U).floor(),W=xe;if(le!==0&&(se=ef),Q.bindFramebuffer(I.FRAMEBUFFER,se)&&he&&Q.drawBuffers(P,se),Q.viewport(D),Q.scissor(F),Q.setScissorTest(W),Se){const De=L.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De.__webglTexture,le)}else if(Pe){const De=ne;for(let Ge=0;Ge<P.textures.length;Ge++){const We=L.get(P.textures[Ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ge,We.__webglTexture,le,De)}}else if(P!==null&&le!==0){const De=L.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,le)}S=-1},this.readRenderTargetPixels=function(P,ne,le,he,se,Se,Pe,Fe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=L.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){Q.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ge=P.textures[Fe],We=Ge.format,ke=Ge.type;if(!ee.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=P.width-he&&le>=0&&le<=P.height-se&&(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(ne,le,he,se,Be.convert(We),Be.convert(ke),Se))}finally{const Ge=C!==null?L.get(C).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(P,ne,le,he,se,Se,Pe,Fe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=L.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(ne>=0&&ne<=P.width-he&&le>=0&&le<=P.height-se){Q.bindFramebuffer(I.FRAMEBUFFER,De);const Ge=P.textures[Fe],We=Ge.format,ke=Ge.type;if(!ee.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(ne,le,he,se,Be.convert(We),Be.convert(ke),0);const at=C!==null?L.get(C).__webglFramebuffer:null;Q.bindFramebuffer(I.FRAMEBUFFER,at);const yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await cd(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ze),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.deleteBuffer(Ze),I.deleteSync(yt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ne=null,le=0){const he=Math.pow(2,-le),se=Math.floor(P.image.width*he),Se=Math.floor(P.image.height*he),Pe=ne!==null?ne.x:0,Fe=ne!==null?ne.y:0;ae.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,le,0,0,Pe,Fe,se,Se),Q.unbindTexture()};const tf=I.createFramebuffer(),nf=I.createFramebuffer();this.copyTextureToTexture=function(P,ne,le=null,he=null,se=0,Se=null){Se===null&&(se!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=se,se=0):Se=0);let Pe,Fe,De,Ge,We,ke,Ze,at,yt;const ft=P.isCompressedTexture?P.mipmaps[Se]:P.image;if(le!==null)Pe=le.max.x-le.min.x,Fe=le.max.y-le.min.y,De=le.isBox3?le.max.z-le.min.z:1,Ge=le.min.x,We=le.min.y,ke=le.isBox3?le.min.z:0;else{const tn=Math.pow(2,-se);Pe=Math.floor(ft.width*tn),Fe=Math.floor(ft.height*tn),P.isDataArrayTexture?De=ft.depth:P.isData3DTexture?De=Math.floor(ft.depth*tn):De=1,Ge=0,We=0,ke=0}he!==null?(Ze=he.x,at=he.y,yt=he.z):(Ze=0,at=0,yt=0);const ht=Be.convert(ne.format),He=Be.convert(ne.type);let pt;ne.isData3DTexture?(ae.setTexture3D(ne,0),pt=I.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(ae.setTexture2DArray(ne,0),pt=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(ne,0),pt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ne.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ne.unpackAlignment);const nt=I.getParameter(I.UNPACK_ROW_LENGTH),jt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Li=I.getParameter(I.UNPACK_SKIP_PIXELS),Kt=I.getParameter(I.UNPACK_SKIP_ROWS),Ss=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const mt=P.isDataArrayTexture||P.isData3DTexture,en=ne.isDataArrayTexture||ne.isData3DTexture;if(P.isDepthTexture){const tn=L.get(P),Nt=L.get(ne),Vt=L.get(tn.__renderTarget),yo=L.get(Nt.__renderTarget);Q.bindFramebuffer(I.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let di=0;di<De;di++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(P).__webglTexture,se,ke+di),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(ne).__webglTexture,Se,yt+di)),I.blitFramebuffer(Ge,We,Pe,Fe,Ze,at,Pe,Fe,I.DEPTH_BUFFER_BIT,I.NEAREST);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(se!==0||P.isRenderTargetTexture||L.has(P)){const tn=L.get(P),Nt=L.get(ne);Q.bindFramebuffer(I.READ_FRAMEBUFFER,tf),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,nf);for(let Vt=0;Vt<De;Vt++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,se,ke+Vt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,se),en?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,Se,yt+Vt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,Se),se!==0?I.blitFramebuffer(Ge,We,Pe,Fe,Ze,at,Pe,Fe,I.COLOR_BUFFER_BIT,I.NEAREST):en?I.copyTexSubImage3D(pt,Se,Ze,at,yt+Vt,Ge,We,Pe,Fe):I.copyTexSubImage2D(pt,Se,Ze,at,Ge,We,Pe,Fe);Q.bindFramebuffer(I.READ_FRAMEBUFFER,null),Q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else en?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(pt,Se,Ze,at,yt,Pe,Fe,De,ht,He,ft.data):ne.isCompressedArrayTexture?I.compressedTexSubImage3D(pt,Se,Ze,at,yt,Pe,Fe,De,ht,ft.data):I.texSubImage3D(pt,Se,Ze,at,yt,Pe,Fe,De,ht,He,ft):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,Ze,at,Pe,Fe,ht,He,ft.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,Ze,at,ft.width,ft.height,ht,ft.data):I.texSubImage2D(I.TEXTURE_2D,Se,Ze,at,Pe,Fe,ht,He,ft);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Li),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ss),Se===0&&ne.generateMipmaps&&I.generateMipmap(pt),Q.unbindTexture()},this.initRenderTarget=function(P){L.get(P).__webglFramebuffer===void 0&&ae.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ae.setTextureCube(P,0):P.isData3DTexture?ae.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ae.setTexture2DArray(P,0):ae.setTexture2D(P,0),Q.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,Q.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const zx=new Ci(1,32,24),kx=new Ci(1,24,18),Hx=new Yn({color:"#f3e8ce",roughness:.42}),Vx=new Yn({color:"#202329",roughness:.28}),Gx=new un({color:"#d77f82",roughness:.33,clearcoat:.18,clearcoatRoughness:.28}),Wx=new Yn({color:"#68464c",roughness:.7}),zu=Array.from({length:49},(i,e)=>{const t=e/48*Math.PI*2,n=.114*Math.cos(t);return new B(n,.028*Math.sin(t)+.016*(n/.114)**2,.013)}),Xx=new ho(new Ul(zu.slice(0,-1),!0),72,.024,12,!0),qx=new Ol(new li(zu.map(i=>new de(i.x,i.y))),16);function ku(i,e,t,n){const s=j=>{const H=Math.sin(t*127.1+j*311.7)*43758.5453;return H-Math.floor(H)},r=.91+s(1)*.18,o=.062+s(2)*.022,a=.285+s(3)*.027,l=.107+s(4)*.035,c=.79+s(5)*.17,u=new Dt;i.add(u);const h=[],f=[];let d=0,g=0,y=18+t*17.31%55,m=-10,p=0,v=0,x=0,_=0,b=-100;function E(j,H){const O=new Dt;return O.userData.anchor={x:j,y:H},h.push(O),u.add(O),O}for(const j of[-1,1]){const H=E((n?.x||0)+j*(n?.052:o),n?n.y+.025:a),O=new tt(zx,Hx),U=new tt(kx,Vx);O.scale.set(.078,.088,.055),U.scale.set(.032,.035,.014),U.position.set(-j*.005,-.004,.053),H.add(O,U),f.push(H)}const R=E(n?.x||0,n?n.y-.045:l);R.add(new tt(Xx,Gx));const C=new tt(qx,Wx);C.position.z=.002,R.add(C);const S=new Du,M=new B(0,0,1),D=new B,F=new B,W=new B;function K(){i.updateWorldMatrix(!0,!0);for(const j of h){const H=j.userData.anchor;S.set(i.localToWorld(new B(H.x,H.y,2)),new B(0,0,-1).applyQuaternion(i.quaternion));const O=S.intersectObject(e)[0];if(!O)continue;const U=e.geometry.attributes.position,Z=[O.face.a,O.face.b,O.face.c],G=Z.map(me=>new B().fromBufferAttribute(U,me)),ce=new B;on.getBarycoord(e.worldToLocal(O.point.clone()),...G,ce),j.userData.binding={ids:Z,weights:ce.toArray()}}}return{face:u,mouthPosition(){return i.updateWorldMatrix(!0,!0),R.getWorldPosition(new B)},look(j,H){x=Math.max(-1,Math.min(1,(j-(n?.x||0))*1.4)),_=Math.max(-1,Math.min(1,(H-(n?n.y+.025:a))*1.4)),b=performance.now()},speak(j){g=j},touch(){d=1},update(j,H,O,U,Z,G){h[0].userData.binding||K();const ce=e.geometry.attributes.position,me=e.geometry.attributes.normal;for(const ie of h){const V=ie.userData.binding;if(V){D.set(0,0,0),F.set(0,0,0);for(let re=0;re<3;re++)D.addScaledVector(W.fromBufferAttribute(ce,V.ids[re]),V.weights[re]),F.addScaledVector(W.fromBufferAttribute(me,V.ids[re]),V.weights[re]);F.normalize(),ie.position.copy(D).addScaledVector(F,n?.035:.012),ie.quaternion.setFromUnitVectors(M,F)}}const xe=D.copy(M).applyQuaternion(f[0].quaternion),Y=F.copy(M).applyQuaternion(f[1].quaternion);xe.angleTo(Y)>.15&&(xe.add(Y).normalize(),f[0].quaternion.setFromUnitVectors(M,xe),f[1].quaternion.copy(f[0].quaternion)),d=Math.max(0,d-H*2),j>y&&(m=j,y=j+35+(t*13.7+j*1.7)%65);const k=j-m,T=G?0:k>=0&&k<.2?Math.sin(k/.2*Math.PI):0;performance.now()-b>1800&&(x=Math.sin(Math.floor(j/(11+t%5))+t*2.1)*.6,_=Math.cos(Math.floor(j/17)+t)*.3);const A=1-Math.exp(-18*H);p+=(x-p)*A,v+=(_-v)*A;for(const ie of f){const V=ie.children[1];V.position.x=p*.031,V.position.y=-.002+v*.027,V.position.z=.055*Math.sqrt(Math.max(.1,1-(V.position.x/.078)**2-(V.position.y/.088)**2))+.006}const q=Math.max(T,U*.48);for(const ie of f)ie.scale.set(n?.6:r,(n?.6:r)*(1-q*.85),n?.6:r);R.scale.setScalar(n?.48:c),R.scale.y*=1+g*.7+d*.08},dispose(){i.remove(u)}}}function Yx(i){const e=document.createElement("canvas");i.append(e);const t=new Wl({canvas:e,antialias:!0,alpha:!0,powerPreference:"low-power"});t.setPixelRatio(Math.min(devicePixelRatio,2.5)),t.setSize(32,32,!1),t.setClearColor(0,0),t.toneMapping=xl,t.toneMappingExposure=1.3;const n=new lo;n.add(new zl("#fffaf1","#61546e",2.6));const s=new nr("#ffffff",3.2);s.position.set(-2,3,5),n.add(s);const r=new _s(-.21,.21,.21,-.21,.01,10);r.position.set(0,.215,3),r.lookAt(0,.215,0);const o=new Dt;n.add(o);const a=new Ci(1,40,32);a.scale(.55,.55,.21),a.translate(0,.215,0);const l=new tt(a,new Gn({colorWrite:!1,depthWrite:!1}));o.add(l);const c=ku(o,l,0);c.face.children.forEach((p,v)=>{p.userData.anchor.y+=v===2?.035:-.01});let u=-1,h=-1/0,f=!1,d=!1,g=!1;const y=i.closest("button"),m=()=>{h=performance.now(),f=!1};return y.addEventListener("pointerenter",()=>{d=!0,m()}),y.addEventListener("pointerleave",()=>{d=!1,f=!1}),y.addEventListener("focus",()=>{g=y.matches(":focus-visible"),m()}),y.addEventListener("blur",()=>{g=!1,f=!1}),(p,v,x)=>{const _=(performance.now()-h)/1e3%1.8,b=!x&&(d||g);if(f&&!b||p-u<1/30)return;u=p;const E=b?Math.sin(Math.min(1,_/.9)*Math.PI*2)*.42:0;if(c.look(E,.3),c.update(0,.08,"awake",0,!1,!0),b){const R=Math.max(0,1-Math.abs(_-.67)/.09);for(const C of c.face.children.slice(0,2))C.scale.y*=1-R*.92}t.render(n,r),b||(c.look(0,.3),c.update(0,1,"awake",0,!1,!0),t.render(n,r),f=!0)}}const jx=[{year:"2026",type:"Design",title:"Studio.Drop",url:"https://drop.studio.design/",image:"/works/studio-drop.png",color:"#a5deda"},{year:"2026",type:"Design",title:"Studio.Design",url:"https://studio.design/ja",displayFile:"studio.design",image:"/works/studio-design-2026.png",color:"#f0f0f0"},{year:"2025",type:"Design",title:"互色-互縁 goshiki-goen",titleEn:"goshiki-goen",url:"https://goshiki-goen.jp/",image:"/works/goshiki-goen.webp",color:"#1a1a18"},{year:"2025",type:"Design",title:"Studio Design Award 2025",url:"https://designaward2025.studio.design/",image:"/works/studio-design-award.webp",color:"#2a1a0e"},{year:"2025",type:"Design",title:"Studio",url:"https://studio.design/ja",displayFile:"studio.design",image:"/works/studio.webp",color:"#f0f0f0"},{year:"2025",type:"Design",title:"豊田自動織機技能専修学園",titleEn:"Toyota Industries Corporation",url:"https://gakuen.toyota-shokki.co.jp/",image:"/works/toyota-shokki.png",color:"#015EB8"},{year:"2024",type:"Design",title:"UNIPOTA",url:"https://unipota.jp/",image:"/works/unipota.webp",color:"#EA76A9"},{year:"2023",type:"Design",title:"écrit architects",url:"https://ecrit.jp/",image:"/works/ecrit.webp",color:"#DBD5CA"},{year:"2023",type:"Design",title:"MIKATA",url:"https://mi-kata.jp/",image:"/works/mikata.webp",color:"#1a29cc"},{year:"2022",type:"Design",title:"萬珍軒",titleEn:"manchinken",url:"https://manchinken.com/",image:"/works/manchinken.webp",color:"#FFC200"},{year:"2020",type:"Design",title:"L'as International",url:"https://lasinternational.co.jp/",image:"/works/las-international.webp",color:"#0086CE"}],Kx=[{year:"2026",type:"Visual",title:"Balloon Portfolio",displayFile:"special/balloon-portfolio",file:"https://www.masaruinaba.com/special/balloon-portfolio/",thumbnail:"/thumbnails/balloon-playground.png",color:"#1685E5"},{year:"2026",type:"App",title:"Origin Shapes",displayFile:"apps/origin",file:"https://tiny-apps-phi.vercel.app/apps/origin/",thumbnail:"/thumbnails/origin.png",color:"#FF5299"},{year:"2026",type:"App",title:"Little Numbers",displayFile:"apps/little-numbers",file:"https://kids-math-iwua.vercel.app/index.html",thumbnail:"/thumbnails/kids-123.png",color:"#ff7900"},{year:"2026",type:"App",title:"Open Table",thumbnail:"/thumbnails/open-table.png",file:"https://meeting-board-v1.vercel.app/",displayFile:"apps/open-table",color:"#8672E2"},{year:"2026",type:"Animation",title:"Animation Notes",thumbnail:"/thumbnails/animation-notes.png",file:"https://fable-notes.vercel.app/",displayFile:"apps/fable-notes",color:"#CAC2A3"},{year:"2025",type:"App",title:"Creative Weather",thumbnail:"/thumbnails/creative-weather.png",file:"apps/creative-weather/",color:"#57295F"},{year:"2025",type:"App",title:"Layered Clock",thumbnail:"/thumbnails/layered-clock.png",file:"apps/layered-clock/",color:"#CAFF00"},{year:"2025",type:"Animation",title:"A Letter of Letters",thumbnail:"/thumbnails/letter-morphing.png",file:"playground/letter-morphing/",color:"#0b0b0c"},{year:"2025",type:"Animation",title:"Mosaic Reveal Animation",thumbnail:"/thumbnails/mosaic-reveal.png",file:"playground/mosaic-reveal/",color:"#F7F7F7"},{year:"2025",type:"Visual",title:"Font Patterns",thumbnail:"/thumbnails/font-patterns.png",file:"playground/font-patterns/",color:"#0b0b0c"},{year:"2025",type:"Animation",title:"Hover Text Path",thumbnail:"/thumbnails/hover-text-path.png",file:"playground/hover-text-path/",color:"#20453B"},{year:"2025",type:"Animation",title:"Interactive Eye-Following Card",thumbnail:"/thumbnails/eye-following.png",file:"playground/eye-following/",color:"#0062AD"},{year:"2025",type:"Animation",title:"Scroll-driven Pinned Text Sequence",thumbnail:"/thumbnails/scroll-text.png",file:"playground/scroll-text/",color:"#FF4800"},{year:"2025",type:"App",title:"Easel Pro",thumbnail:"/thumbnails/easel-pro.png",file:"apps/design-board/",color:"#fcfcfc"}],rn=[...jx,...Kx];function $x(i,e,t,n=1){let s=n>>>0;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),o=e<620,a=0,l=o?64:0,c=e-a*2,u=o?3:Math.max(3,Math.round(c/240)),h=c/u,f=h*(o?1.45:1),d=o?Math.min(h,f)*.64:Math.min(100,h*.56),g=Array.from({length:i},(y,m)=>m);for(let y=i-1;y>0;y--){const m=Math.floor(r()*(y+1));[g[y],g[m]]=[g[m],g[y]]}return g.map((y,m)=>{const p=Math.floor(m/u),v=m%u;return{projectIndex:y,x:a+(v+.5)*h,y:o?l+d/2+p*f:(p+.5)*f,size:d,angle:0,cellWidth:h,cellHeight:f}})}function Xl(i,e,t,n,s=8){const r=Math.cos(e),o=Math.sin(e),l=Math.min(t/2/Math.max(.001,Math.abs(r)),n/2/Math.max(.001,Math.abs(o)))+i.size*.34+s;return{x:i.x+r*l,y:i.y+o*l}}let Mi;const Ki=new Map;function Jx(i,e,t){const n=[i,e,t].join(":");if(Ki.has(n))return Ki.get(n);Mi??=new Wl({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});const s=i+64,r=e+64;Mi.setPixelRatio(2),Mi.setSize(s,r,!1),Mi.setClearColor(0,0),Mi.outputColorSpace=Et;const o=new lo,a=new _s(-s/2,s/2,r/2,-r/2,.1,1e3);a.position.z=400,o.add(new zl("#ffffff","#e5e2d9",2.5));const l=new nr("#ffffff",.65);l.position.set(-100,180,250),o.add(l);const c=new li,u=s/2-13,h=r/2-13,f=22,d=[],g=t==="pearls"?16:t==="cloud"?44:t==="burst"?35:25,y=[[u-f,h-f,0],[-u+f,h-f,Math.PI/2],[-u+f,-h+f,Math.PI],[u-f,-h+f,Math.PI*1.5]];for(let x=0;x<4;x++){const[_,b,E]=y[x],R=y[(x+1)%4],C=Math.max(1,Math.round(f*Math.PI/2/g)),S=64;for(let O=0;O<=S;O++){const U=O/S,Z=E+U*Math.PI/2,G=U*C*Math.PI*2,ce=(1-Math.cos(G))*.5,me=t==="pillow"?0:t==="ticket"?-4*ce:t==="steps"?-5*ce*ce:-6*ce;d.push(new de(_+(f+me)*Math.cos(Z),b+(f+me)*Math.sin(Z)))}const M=d.at(-1),D=new de(R[0]+f*Math.cos(R[2]),R[1]+f*Math.sin(R[2])),F=M.distanceTo(D),W=Math.max(1,Math.round(F/g)),K=Math.max(2,Math.ceil(F)),j=D.clone().sub(M).normalize(),H=new de(j.y,-j.x);for(let O=1;O<K;O++){const U=O/K,Z=U*W*Math.PI*2,G=(1-Math.cos(Z))*.5,ce=Math.acos(Math.cos(Z))/Math.PI,me=Math.min(1,U*W*2,(1-U)*W*2),xe=me*me*(3-2*me),Y=t==="pillow"?0:t==="ticket"?-4*G:t==="zigzag"||t==="burst"?7*ce*xe:t==="steps"?5*G*G:6*G;d.push(M.clone().lerp(D,U).addScaledVector(H,Y))}}c.moveTo(d[0].x,d[0].y);for(const x of d.slice(1))c.lineTo(x.x,x.y);c.closePath();const m=new Fl(c,{depth:2,bevelEnabled:!0,bevelSize:3.5,bevelThickness:3,bevelSegments:8,curveSegments:24,steps:1}),p=new Yn({color:"#fffdf7",roughness:.72,metalness:0});o.add(new tt(m,p)),Mi.render(o,a);const v=`url("${Mi.domElement.toDataURL("image/png")}")`;return m.dispose(),p.dispose(),Ki.size>24&&Ki.delete(Ki.keys().next().value),Ki.set(n,v),v}const Kr=["scallop","pearls","cloud","pillow","zigzag","burst","ticket","steps"],Ah=(i,e,t)=>Math.max(e,Math.min(t,i));function Zx(i,e,t,n=208,s=130,r=null){for(const o of[1,.85,.7,.55,.4]){const a=n*o,l=s*o;if(r&&a>r.width+.01)continue;const c=((a+64)*.993+(l+64)*.122)/2+3,u=((l+64)*.993+(a+64)*.122)/2+3,h=t.width<=620?62:12,f=t.width<=620?78:64;if(c*2+24>t.width||u*2+h+f>t.height)continue;const d=(_,b)=>({x:Ah(_.x,c+12,t.width-c-12),y:Ah(_.y,u+h,t.height-u-f),width:a,side:b});if(!e)return d(i,"free");const g=10,y=(e.left+e.right)/2,m=(e.top+e.bottom)/2,v=[d({x:e.right+g+c,y:m},"right"),d({x:e.left-g-c,y:m},"left"),d({x:y,y:e.top-g-u},"above"),d({x:y,y:e.bottom+g+u},"below")].filter(_=>_.x+c+g<=e.left+.01||_.x-c-g>=e.right-.01||_.y+u+g<=e.top+.01||_.y-u-g>=e.bottom-.01),x=r&&v.find(_=>_.side===r.side);if(x)return x;if(v.length)return v.sort((_,b)=>Math.hypot(_.x-i.x,_.y-i.y)-Math.hypot(b.x-i.x,b.y-i.y))[0]}return r}const Qx={"studio-design-award":["and the cutest envelope goes to…","tiny drumroll, please.","I dressed up for this one.","red carpet. round body.","my acceptance speech is squeaky.","a little sparkle for the shortlist.","I brought my award-show face.","hold my air. this is fancy.","standing ovation? I can only float.","ta-da! cue the confetti."],studio:["welcome to my happy little Studio.","big ideas. no elbows.","I put my thinking air on.","a little space for big imagination.","my desk is mostly clouds.","made with a very round brain.","studio time is my favorite time.","I clock in by floating in.","ideas live here. I visit often.","this one has my whole balloon heart."],"goshiki-goen":["a little color. a little connection.","five colors? I brought my best one.","nice to meet hue.","we make a lovely little pair.","color me delighted.","a small hello goes a long way.","I think we’re color-compatible.","a knot? no, a connection.","let’s stick together, softly.","my favorite shade is together."],"toyota-shokki":["tiny student. enormous curiosity.","I brought my learning face.","first lesson: stay curious.","my backpack is full of air.","little steps. big possibilities.","I’m here for the hands-on bit.","learning new tricks, no hands.","today’s homework: make something.","a very round classmate says hello.","future me is taking notes."],unipota:["uni, pota, ta-da!","this name makes me bounce.","one little peek won’t hurt.","I brought a pocketful of wonder.","unreasonably excited about this one.","pota-tally worth a look.","my curiosity has escaped again.","a little detour into delightful.","I found a thing! come see.","consider this a very soft invitation."],ecrit:["a little room to dream.","I’m open-plan on the inside.","architecture, but make room for me.","my dream house has round corners.","I brought my tiny hard hat.","good spaces make me float.","a small window into this one.","measuring twice. wobbling once.","I would live in a sunbeam.","a blueprint for a little daydream."],mikata:["hello from your round little ally.","I’m on your side. literally.","a different angle? I can roll.","meet my supportive side. all of them.","a little backup, balloon edition.","looking at things a little differently.","this way to a fresh perspective.","tiny teammate reporting for duty.","I see what you did there. cute.","your friendly neighborhood point of view."],manchinken:["I came for a peek. stayed hungry.","my tummy is technically all tummy.","please don’t mistake me for a dumpling.","a little feast for the eyes.","I saved room. mostly air.","five-star daydream. zero table manners.","this one made my stomach squeak.","menu, please. I can’t hold it.","my plus-one is my appetite.","warning: may cause a tiny craving."],"las-international":["I brought my fancy little accent.","bonjour from a round little friend.","a tiny taste of something lovely.","my passport photo is very round.","dressed for dinner. still a balloon.","a little elegance, a little air.","let’s make this a tiny occasion.","I practiced my sophisticated nod.","small guest. excellent enthusiasm.","a lovely little place to linger."],"open-table":["is this seat taken by a balloon?","I brought nothing to the table. air.","pull up a tiny chair.","open table. open mind. round guest.","my meeting notes say “hello”.","agenda item one: a little peek.","I’m available for soft discussions.","can we circle back? I am a circle.","let’s put our little heads together.","I promise not to float off mid-meeting."],"animation-notes":["a little wiggle, written down.","dear diary: today I moved.","taking notes between bounces.","my handwriting has follow-through.","one frame at a time, little buddy.","I bookmarked the bouncy bit.","a tiny notebook full of movement.","motion sickness? motion happiness.","note to self: less wobble.","I learn best in little loops."],"creative-weather":["forecast: scattered little ideas.","a chance of happy accidents.","I’m a very local cloud.","bring an umbrella for the brainstorm.","today feels partly playful.","creative pressure is rising. softly.","a little sunshine for your screen.","wind advisory: that might be me.","my mood is mostly curious.","a tiny forecast with big feelings."],"layered-clock":["time flies. I float.","just a second. a cute one.","I’m running on balloon time.","a little layer of now.","tick, tock, tiny thought.","my watch is mostly wristless.","right on time for a little peek.","I have a minute. several layers.","let’s spend a second together.","fashionably late, structurally round."],"letter-morphing":["dear you: look at this.","I put a little wiggle in the mail.","a love letter to letters.","alphabet soup, extra squishy.","this one is my type.","letters having a little identity crisis.","signed, your roundest pen pal.","P.S. the letters are moving.","I dot my i’s with tiny balloons.","words, with a little wardrobe change."],"mosaic-reveal":["a little piece of a big hello.","peekaboo, one tile at a time.","I like my surprises bite-sized.","some assembly, much delight.","tiny pieces. grand entrance.","wait for it… there it is.","I’m very good at revealing nothing.","a puzzle with stage presence.","every little square gets a moment.","the suspense is pixel-sized."],"font-patterns":["letters in their party outfits.","my favorite pattern is “again!”","type, but a little more playful.","a tiny alphabet sleepover.","I’m seeing letters everywhere.","repeat after me: ooh.","a well-dressed little glyph.","pattern recognition? cute recognition.","letters getting along in rows.","a little rhythm for your eyes."],"hover-text-path":["follow the little letter trail.","my words took the scenic route.","hover here, little explorer.","a sentence out for a stroll.","the alphabet has places to be.","I left a trail of tiny hellos.","words with wanderlust.","just following my type around.","a little path less typed.","let’s take these letters for a walk."],"eye-following":["oh. hi. yes, I see you.","my friend is a little nosy.","eye contact, extra cute edition.","look who’s looking.","two eyes. zero subtlety.","you have our full tiny attention.","I blinked. did I miss anything?","a little card with a big stare.","the eyes have it. literally.","not judging. just very curious."],"scroll-text":["a little story under your fingertip.","keep rolling. I’ll read along.","words that like to hang around.","I’m pinned to the plot.","one little scroll at a time.","the next bit is just down there.","my attention span brought a pin.","a sentence with perfect timing.","scroll softly. words ahead.","I like a story with a little movement."],"easel-pro":["tiny artist. very big canvas.","I brought my imaginary paintbrush.","a blank canvas is a big hello.","easel does it, little buddy.","my best work is a perfect circle.","let’s make a happy little something.","paint on my cheeks? probably.","professional daydreamer, reporting in.","a little room to make a mess.","I call this piece “mostly air”."],"studio-drop":["a tiny drop. a big splash.","cloudy with a chance of clever.","I brought my thinking bubble.","one drop of something new.","my ideas are floating into place.","a little ripple of possibility.","this drop has my attention.","soft landing. bright idea.","I am mostly air. this feels familiar.","a little future drifting closer."],"studio-design-2026":["a fresh little welcome to Studio.","your next idea needs a home.","I brought my website face.","a little page with big plans.","imagination, please come in.","my homepage is wherever I float.","a fresh coat of possibility.","make a little space for your idea.","I would click that with both hands.","building something? I can supervise."],"balloon-playground":["welcome to my very round portfolio.","this one looks suspiciously like me.","a little portfolio. a lot of air.","meet the team. we all float.","my friends brought their best work.","a portfolio with a soft side.","I am both the tour guide and the tour.","work hard. wobble gently.","a little self-portrait, inflated.","please enjoy our floating collection."],origin:["every shape starts somewhere.","one little point. endless possibilities.","pull a point. find a surprise.","I started as a very small idea.","a shape with room to grow.","bend it a little. see what happens.","my origin story is mostly curves.","a few points make a lovely beginning.","this is where my corners went.","let us make something unnamed."],"kids-123":["one, two, whee!","little numbers. big discoveries.","I count my friends by the bounce.","a tiny sum of happy things.","one more reason to play.","my favorite number is together.","small steps count too.","I brought my counting eyes.","three little cheers for trying.","learning adds a little joy."]};function il(i){return(i.image||i.thumbnail).split("/").pop().replace(/\.[^.]+$/,"")}function ey(i,e,t=Math.random){const n=Qx[il(i)];if(!n?.length)throw new Error(`Missing comments for ${i.title}`);const s=n.filter(r=>r!==e);return s[Math.floor(t()*s.length)]}const Gt=document.querySelector("#work-bubble"),si=document.querySelector("#work-image"),sl=document.querySelector("#work-link"),rl=document.querySelector("#work-hello"),Rh=new Map;let Ot=null,ql=null,ir=null,ks=-1,ol="",$r=null,Ch="",al=!1;function Yl(i,e,t,n){const s=rn[i.projectIndex%rn.length];Ot?.face.speak(0),Ot=i,performance.now(),i.face.mouthPosition().x>0,al=!1;const r=ey(s,Rh.get(il(s)));Rh.set(il(s),r),rl.textContent=r,ir=e,ir.say(i,t,n,r,!0),sl.href=new URL(s.url||s.file,"https://www.masaruinaba.com/").href;const o=s.image||s.thumbnail;si.hidden=!o,o&&(si.src="./portfolio"+o,si.alt=s.titleEn||s.title),sl.setAttribute("aria-label","View "+(s.titleEn||s.title)),ks=(ks+1+Math.floor(Math.random()*(Kr.length-1)))%Kr.length,ol="",$r=null,Gt.dataset.frame=Kr[ks],Gt.hidden=!1,rl.hidden=!0,Gt.style.visibility="hidden",ql?.cancel(),document.body.dataset.work=s.titleEn||s.title}function Ph(i){if(!Ot||Gt.hidden)return;const e=Ot.face.mouthPosition();e.y+=Ot.baseSize*.12+(matchMedia("(prefers-reduced-motion: reduce)").matches?0:Math.sin(performance.now()*85e-5+Ot.phase+.7)*.05),e.project(i);const t=(e.x*.5+.5)*innerWidth,n=(-e.y*.5+.5)*innerHeight,s=si.naturalWidth?208*si.naturalHeight/si.naturalWidth:130,r=innerWidth+":"+innerHeight;if(r!==Ch&&(Ch=r,$r=null),!si.complete||!si.naturalWidth)return;const o=ir?.bounds();if(!o)return;const a=o;let l={x:t,y:n-s/2},c=208,u=s;if(Ot.collectionSlot){const d=Ot.collectionSlot,g=Ot.collectionArrangement;c=Math.min(168,innerWidth*.39),u=s*c/208,l=Xl(d,g.workAngle,c,u,g.gap)}const h=Ot.collectionSlot?{...l,width:c}:Zx(l,a,{width:innerWidth,height:innerHeight},c,u,$r);if(!h){Gt.style.visibility="hidden";return}$r=h;const f=[h.width,s,ks].join(":");!Ot.collectionSlot&&f!==ol&&(ol=f,Gt.style.setProperty("--frame-surface",Jx(h.width,s*h.width/208,Kr[ks]))),Gt.style.width=h.width+"px",Gt.style.left=h.x+"px",Gt.style.top=h.y+"px",Gt.style.transform="translate(-50%,-50%)",Gt.style.visibility="visible",Gt.style.rotate=Ot.collectionSlot?"0deg":(Ot.projectIndex%2?7:-7)+"deg",al||(al=!0,ql=Gt.animate([{opacity:0,transform:"translate(-50%, -50%) scale(.18) rotate(-9deg)"},{opacity:1,transform:"translate(-50%, -50%) scale(1) rotate(0deg)",offset:.7},{opacity:1,transform:"translate(-50%, -50%) scale(1) rotate(0deg)"}],{duration:matchMedia("(prefers-reduced-motion: reduce)").matches?0:480,easing:"cubic-bezier(.18,.8,.3,1)"}))}function Ii(){Ot?.face.speak(0),ir?.clear(),ir=null,Ot=null,ql?.cancel(),Gt.hidden=!0,rl.hidden=!0,document.body.dataset.work=""}sl.addEventListener("click",Ii);window.addEventListener("keydown",i=>{i.key==="Escape"&&Ii()});document.querySelector("#work-close").addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),Ii(),document.querySelector("#world").focus({preventScroll:!0})});function ty({actors:i,ornaments:e,scene:t,camera:n,renderer:s,feedback:r,seed:o,wake:a,onChange:l,speech:c,getTime:u}){let h=!1,f=null,d=[],g,y,m=null;const p=new Map,v=document.createElement("nav");v.className="collection-switch",v.setAttribute("aria-label","Display mode");const x=document.createElement("button"),_=document.createElement("button");for(const[H,O]of[[x,"Crowd"],[_,"Collection"]]){H.setAttribute("aria-label",O),H.dataset.mode=O.toLowerCase();const U=document.createElement("span");if(U.className="mode-symbol",U.setAttribute("aria-hidden","true"),O==="Collection"){U.classList.add("mode-balloon-grid");for(let Z=0;Z<4;Z++){const G=document.createElement("i");U.append(G)}}H.append(U)}for(const H of[x,_])H.type="button";v.append(x,_),document.querySelector(".play-controls").insertBefore(v,document.querySelector("#reload-crowd")),document.body.append(document.querySelector("#reload-crowd"));const b=Yx(x.querySelector(".mode-symbol")),E=document.createElement("div");E.className="collection-labels",E.hidden=!0,document.body.append(E);const R=document.createElement("div");R.className="collection-numbers",R.hidden=!0,document.body.append(R);function C(){Ii(),c.clear(),f=null,E.querySelectorAll("button").forEach(H=>H.setAttribute("aria-pressed","false"))}function S(H){if(!h||H.projectIndex>=rn.length)return;if(f===H){C();return}C(),r.unlock(),f=H;const O=H.collectionSlot,U=[],Z=innerWidth<620?142:210,G=Math.min(168,innerWidth*.39);for(let xe=0;xe<24;xe++){const Y=(Math.floor(Math.random()*4)*90+25+Math.random()*40)*Math.PI/180,k=Y+(135+Math.random()*90)*Math.PI/180,T=5+Math.random()*9,A=[{angle:Y,width:G,height:G*.8},{angle:k,width:Z,height:90}];let q=0;for(const ie of A){const{x:V,y:re}=Xl(O,ie.angle,ie.width,ie.height,T);q+=Math.max(0,12-(V-ie.width/2))+Math.max(0,V+ie.width/2-innerWidth+12)+Math.max(0,66-(re-ie.height/2))+Math.max(0,re+ie.height/2-innerHeight+20)}U.push({workAngle:Y,speechAngle:k,gap:T,overflow:q})}const ce=Math.min(...U.map(xe=>xe.overflow)),me=U.filter(xe=>xe.overflow<=ce+1);H.collectionArrangement=me[Math.floor(Math.random()*me.length)],H.collectionPop=u(),Yl(H,c,u(),matchMedia("(prefers-reduced-motion: reduce)").matches),E.querySelector(`[data-project="${H.projectIndex}"]`)?.setAttribute("aria-pressed","true"),a()}function M(H){const O=H.collectionSlot;O.y=O.layoutY-E.scrollTop;const U=(n.right-n.left)/innerWidth,Z=H.body.geometry.boundingBox.getCenter(new B).multiplyScalar(H.root.scale.x).applyEuler(H.root.rotation);H.root.position.set(n.left+O.x*U-Z.x,n.top-O.y*U-Z.y,-Z.z)}function D(){if(!h)return;s.setPixelRatio(Math.min(devicePixelRatio,2.5)),d=$x(rn.length,E.clientWidth,innerHeight,o);const H=E.scrollTop;E.replaceChildren(),R.replaceChildren();const O=document.createElement("div");O.className="collection-extent",O.style.height=Math.max(innerHeight,...d.map(U=>U.y+U.cellHeight/2+110))+"px",E.append(O),i.forEach((U,Z)=>{U.root.visible=Z<rn.length}),e.forEach(U=>U.root.visible=!1);for(const[U,Z]of d.entries()){const G=i[Z.projectIndex];G.collectionFaces=()=>i.slice(0,rn.length).filter(V=>V.root.visible).map(V=>{const re=V.face.mouthPosition().project(n),fe=(re.x*.5+.5)*innerWidth,I=(-re.y*.5+.5)*innerHeight,X=Math.max(18,V.collectionSlot.size*.16);return{left:fe-X,right:fe+X,top:I-X*1.6,bottom:I+X}}),G.body.geometry.computeBoundingBox();const ce=G.body.geometry.boundingBox,me=ce.getSize(new B);ce.getCenter(new B);const xe=(n.right-n.left)/innerWidth,Y=Z.size*xe/Math.max(me.x,me.y)/1.17,k=Z.angle;G.collectionSlot={...Z,layoutY:Z.y},G.root.scale.setScalar(Y),G.collectionRotation||(G.collectionRotation=new Qt(0,0,k)),G.root.rotation.copy(G.collectionRotation),M(G);const T=document.createElement("button");T.type="button",T.dataset.project=Z.projectIndex,T.setAttribute("aria-label",`${U+1}. ${rn[Z.projectIndex].title}`),T.setAttribute("aria-pressed",String(f===G)),T.style.cssText=`left:${Z.x}px;top:${Z.y}px;width:${Z.size+14}px;height:${Z.size+20}px`;const A=document.createElement("span");A.textContent=String(U+1),A.dataset.project=Z.projectIndex,R.append(A);let q=null,ie=!1;T.addEventListener("pointerdown",V=>{V.button===0&&(delete G.collectionPop,G.root.rotation.copy(G.collectionRotation),q={x:V.clientX,y:V.clientY,moved:!1},ie=!1,T.setPointerCapture(V.pointerId))}),T.addEventListener("pointermove",V=>{if(!q)return;const re=V.clientX-q.x,fe=V.clientY-q.y;!q.moved&&Math.hypot(re,fe)<5||(q.moved=!0,ie=!0,G.root.rotateOnWorldAxis(new B(0,1,0),re*.012),G.root.rotateOnWorldAxis(new B(1,0,0),fe*.012),G.collectionRotation.copy(G.root.rotation),M(G),q.x=V.clientX,q.y=V.clientY,a())});for(const V of["pointerup","pointercancel","lostpointercapture"])T.addEventListener(V,()=>{q=null});T.addEventListener("click",()=>{if(ie){ie=!1;return}S(G)}),E.append(T)}E.scrollTop=H,i.slice(0,rn.length).forEach(M)}E.addEventListener("scroll",()=>{if(h){for(const H of i.slice(0,rn.length))M(H);f&&(f.collectionSlot.y<50||f.collectionSlot.y>innerHeight-20)&&C(),a()}},{passive:!0}),E.addEventListener("click",H=>{(H.target===E||H.target.classList.contains("collection-extent"))&&C()});function F(H){if(h===H)return;const O=new Map([...i,...e].map(G=>[G,{position:G.root.position.clone(),quaternion:G.root.quaternion.clone(),scale:G.root.visible?G.root.scale.clone():new B(.001,.001,.001)}])),U=t.background?.isColor?t.background.clone():s.getClearColor(new ze);if(m=null,C(),h=H,document.body.style.setProperty("--collection-footer-opacity","0"),document.body.dataset.collection=String(h),document.querySelector("#camera-toggle").inert=h,E.hidden=!h,R.hidden=!h,x.setAttribute("aria-pressed",String(!h)),_.setAttribute("aria-pressed",String(h)),l(h),h){g=t.background,y=s.getClearColor(new ze),t.background=new ze("#ffffff");for(const G of i)p.set(G,G.body.geometry),G.body.geometry=G.shape.body;D()}else{t.background=g,s.setClearColor(y);for(const G of i)G.body.geometry=p.get(G)||G.body.geometry,G.root.visible=!0,delete G.collectionSlot,delete G.collectionRotation;e.forEach(G=>G.root.visible=!0),p.clear()}if(!matchMedia("(prefers-reduced-motion: reduce)").matches){const G=t.background?.isColor?t.background.clone():s.getClearColor(new ze);m={from:O,fromColor:U,toColor:G,start:u()},W(u())}m||document.body.style.setProperty("--collection-footer-opacity",h?"1":"0");const Z=new URL(location.href);h?Z.searchParams.set("mode","collection"):Z.searchParams.delete("mode"),history.replaceState(null,"",Z),a()}function W(H){if(!m)return;const O=Math.min(1,Math.max(0,(H-m.start)/.95)),U=O*O*O*(O*(O*6-15)+10);for(const G of[...i,...e]){const ce=m.from.get(G);if(!ce)continue;const me=h&&!G.collectionSlot;h&&G.collectionSlot&&M(G);const xe=me?new B(.001,.001,.001):G.root.scale.clone();h&&(ce.target||(ce.target={position:G.root.position.clone(),quaternion:G.root.quaternion.clone(),scale:xe}),G.root.position.copy(ce.target.position),G.root.quaternion.copy(ce.target.quaternion),xe.copy(ce.target.scale)),G.root.position.lerpVectors(ce.position,G.root.position,U);const Y=G.root.quaternion.clone();G.root.quaternion.slerpQuaternions(ce.quaternion,Y,U),G.root.scale.lerpVectors(ce.scale,xe,U),G.root.visible=O<1||!me}t.background=new ze().lerpColors(m.fromColor,m.toColor,U);const Z=Math.max(0,Math.min(1,(O-.8)/.2));E.style.opacity=String(h?Z*Z*(3-2*Z):0),R.style.opacity=E.style.opacity,E.style.pointerEvents=O<1?"none":"",O===1&&(m=null,E.style.opacity="",R.style.opacity="",E.style.pointerEvents="",document.body.style.setProperty("--collection-footer-opacity",h?"1":"0"))}function K(H,O,U){if(h)for(const Z of i.slice(0,rn.length)){if(M(Z),Z.collectionPop!==void 0){const G=H-Z.collectionPop;if(Z.root.rotation.copy(Z.collectionRotation),!U&&G<.7){const ce=Math.sin(G/.7*Math.PI)*Math.exp(-G*2);Z.root.rotation.y+=ce*.65,Z.root.rotation.z+=ce*.13,M(Z),Z.root.position.y+=ce*.18}else delete Z.collectionPop,M(Z)}Z.face.update(H+Z.phase,O,"awake",0,!1,U)}}function j(){if(!h)return;const H=c.bounds(),O=document.querySelector("#work-bubble"),U=[H,O&&!O.hidden&&O.style.visibility==="visible"?O.getBoundingClientRect():null].filter(Boolean),Z=[...R.querySelectorAll("span")].map(G=>{const ce=i[Number(G.dataset.project)],me=ce.collectionSlot;G.style.left=me.x-me.size/2-7+"px",G.style.top=me.y+me.size/2-8+"px";const xe=G.getBoundingClientRect();return[G,U.some(Y=>xe.right>Y.left-8&&xe.left<Y.right+8&&xe.bottom>Y.top-8&&xe.top<Y.bottom+8)]});for(const[G,ce]of Z)G.style.visibility=ce?"hidden":""}return x.addEventListener("click",()=>F(!1)),_.addEventListener("click",()=>F(!0)),document.addEventListener("keydown",H=>{H.key==="Escape"&&C()}),x.setAttribute("aria-pressed","true"),_.setAttribute("aria-pressed","false"),{get active(){return h},setActive:F,resize:D,select:S,clear:C,update:K,blend:W,updateLabels:j,updateIcon:b}}function ny(i,e,t,n,s){const r=Math.max(.2,i.radius),o=Math.hypot(e.x,e.y),a=Math.min(1,o/r),l=(.22+.58*a)/r,c=-n*l,u=t*l,h=(e.x*n-e.y*t)*.35/(r*r);i.tiltX=(i.tiltX||0)+c,i.tiltY=(i.tiltY||0)+u,i.angle+=h;const f=1-Math.exp(-18*s);i.rollX=(i.rollX||0)*(1-f)+c/Math.max(.008,s)*f,i.rollY=(i.rollY||0)*(1-f)+u/Math.max(.008,s)*f}function iy(i,e,t){const n=Math.exp(-(t?14:5)*e);t||(i.tiltX=(i.tiltX||0)+(i.rollX||0)*e,i.tiltY=(i.tiltY||0)+(i.rollY||0)*e),i.rollX=(i.rollX||0)*n,i.rollY=(i.rollY||0)*n}function so(i,e){const t=Math.max(.65,Math.min(1.5,e)),n=t/(i.userScale||1);return i.baseSize*=n,i.radius*=n,i.root?.scale.multiplyScalar(n),i.mass=Math.max(.15,i.radius*i.radius),i.userScale=t,t}const kr=["blue","triangle","star","flower","coil","round"];function sy(i="blue",e="/special/balloon-portfolio/"){const t=document.querySelector("#character-favicon");if(!t)return;let n=Math.max(0,kr.indexOf(i)),s;const r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>{t.href=`${e}favicons/${kr[n]}.png`,t.dataset.character=kr[n]},a=()=>{clearInterval(s),s=void 0},l=()=>{a(),!(document.hidden||r.matches)&&(s=setInterval(()=>{n=(n+1)%kr.length,o()},3e3))};o(),l(),document.addEventListener("visibilitychange",l),r.addEventListener("change",l),window.addEventListener("pagehide",a),window.addEventListener("pageshow",l)}const Ih=[{id:"blue",background:"#dcd8d0",ink:"#ed5811",size:95,x:53.35,y:51.1,angle:29.18},{id:"triangle",background:"#121ddd",ink:"#87b0dc",size:117.19,x:59.64,y:50.4,angle:0,flip:-1},{id:"star",background:"#222222",ink:"#f3d583",size:112.86,x:46.22,y:50,angle:-40.49},{id:"flower",background:"#ffdc50",ink:"#1c11ed",size:105.1,x:50,y:75.9,angle:0},{id:"coil",background:"#dcb0ff",ink:"#ecf1f3",size:103.02,x:55.47,y:50,angle:0},{id:"round",background:"#efefef",ink:"#ed4f4f",size:138.71,x:49.77,y:72.5,angle:12.18}];function Hr(i,e){i.setAttribute("aria-label",e.join(" ")),e.forEach((t,n)=>{n&&i.append(document.createElement("br")),t.split(" ").forEach((s,r)=>{r&&i.append(" ");const o=document.createElement("span"),a=document.createElement("span");o.className="opening-word",o.setAttribute("aria-hidden","true"),a.textContent=s,o.append(a),i.append(o)})})}function ry(){const i=new URLSearchParams(location.search),t=Ih.find(m=>m.id===i.get("opening"))||Ih[crypto.getRandomValues(new Uint32Array(1))[0]%6];sy(t.id);const n=matchMedia("(prefers-reduced-motion: reduce)"),s=document.createElement("section");s.className="opening",s.setAttribute("aria-label","Playground — Made for Fun."),s.innerHTML=`<div class="opening-paper"></div>
    <div class="opening-character"><img alt="" draggable="false" fetchpriority="high"></div>
    <div class="opening-logo" role="img" aria-label="Playground"><i class="opening-logo-base"></i><i class="opening-logo-o"></i><i class="opening-logo-u"></i></div>
    <p class="opening-description"></p><p class="opening-copy"></p>
    <div class="opening-footer"><h1 class="opening-title"></h1><p class="opening-edition"></p></div>`;const r=s.querySelector(".opening-character"),o=r.querySelector("img");s.style.setProperty("--opening-bg",t.background),s.style.setProperty("--opening-ink",t.ink),r.style.cssText=`--character-size:${t.size}vw;--character-x:${t.x}%;--character-y:${t.y}%;--character-angle:${t.angle}deg;--character-flip:${t.flip||1}`,o.src=`./opening/${t.id}.png`,Hr(s.querySelector(".opening-description"),["A collection of little","experiments, made for","the fun of it."]),Hr(s.querySelector(".opening-copy"),["Pull, bend, and rearrange","them until something","unnamed begins to take","form."]),Hr(s.querySelector(".opening-title"),["Made for Fun."]),Hr(s.querySelector(".opening-edition"),["Tiny Apps / N° 001"]),document.body.dataset.opening="loading",document.body.dataset.openingPattern=t.id,document.body.append(s);const a=[...document.querySelectorAll(".play-controls,.portfolio-home,#reload-crowd,#world")],l=a.map(m=>m.inert);a.forEach(m=>m.inert=!0);const c=[],u=(m,p,v)=>{const x=m.animate(p,{fill:"both",...v});return c.push(x),x};let h=!1,f=0;const d=m=>new Promise(p=>setTimeout(p,m)),g=(async()=>{if(await Promise.race([o.decode().catch(()=>{o.hidden=!0}),d(5e3)]),!h){if(f=performance.now(),document.body.dataset.opening="entering",setTimeout(()=>{!h&&document.body.dataset.opening==="entering"&&(document.body.dataset.opening="holding")},1800),n.matches){s.classList.add("opening-static");return}u(o,[{opacity:0,transform:`translateY(24%) rotate(${t.angle-65}deg) scale(.76) scaleY(${t.flip||1})`},{opacity:1,offset:.25},{opacity:1,transform:`translateY(0) rotate(${t.angle}deg) scale(1) scaleY(${t.flip||1})`}],{duration:1600,easing:"cubic-bezier(.16,1,.3,1)"}),u(s.querySelector(".opening-logo"),[{opacity:0,transform:"translateY(24px)",clipPath:"inset(0 0 100% 0)"},{opacity:1,transform:"translateY(0)",clipPath:"inset(-40% -5% -40% -5%)"}],{delay:180,duration:950,easing:"cubic-bezier(.22,1,.36,1)"});for(const[m,p]of[[".opening-description",320],[".opening-copy",450],[".opening-title",680],[".opening-edition",850]])s.querySelectorAll(`${m} .opening-word > span`).forEach((v,x)=>u(v,[{transform:"translateY(115%) rotate(3deg)",opacity:0},{transform:"translateY(0) rotate(0)",opacity:1}],{delay:p+x*24,duration:850,easing:"cubic-bezier(.22,1,.36,1)"}))}})();function y(){h=!0,c.forEach(m=>m.cancel()),s.remove(),a.forEach((m,p)=>m.inert=l[p]),document.body.dataset.opening="done"}return{async finish(m){if(await g,!h&&(await d(Math.max(0,(n.matches?250:2800)-(performance.now()-f))),!h)){if(document.body.dataset.opening="exiting",n.matches){y(),m();return}u(s.querySelector(".opening-paper"),[{opacity:1},{opacity:0}],{duration:450,easing:"ease-in"}),u(r,[{opacity:1,transform:"translate(-50%,-50%) scale(1) rotate(0)"},{opacity:0,transform:"translate(-50%,-65%) scale(1.3) rotate(28deg)"}],{duration:850,easing:"cubic-bezier(.55,0,.2,1)"}),s.querySelectorAll(".opening-word > span").forEach((p,v)=>u(p,[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-110%)"}],{delay:v*6,duration:350,easing:"cubic-bezier(.55,0,.8,.4)"})),u(s.querySelector(".opening-logo"),[{opacity:1},{opacity:0,transform:"translateY(-18px)"}],{duration:300}),m(),await d(900),y()}},cancel:y}}function Hu(i="hello"){let e=2166136261;for(const o of i)e=Math.imul(e^o.codePointAt(0),16777619)>>>0;const t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=5+Math.floor(t()*5),s=[];let r=0;for(let o=0;o<n;o++){const a=.12+t()*.13,l=o===Math.floor(n/2)?.13:.025;s.push({start:r,length:a,pitch:.76+t()*.65,vowel:2+Math.floor(t()*4),bend:(t()-.5)*.6}),r+=a+l}return{syllables:s,duration:r}}function oy(i,e){const t=i?.syllables.find(n=>e>=n.start&&e<n.start+n.length);return t?Math.pow(Math.sin(Math.PI*(e-t.start)/t.length),.7):0}function ay({soundEnabled:i,hapticsEnabled:e,volume:t}){let n=null,s=-1/0,r=-1/0,o=null,a=null,l=null;const c=new Set;function u(){if(!i())return;const p=window.AudioContext||window.webkitAudioContext;p&&(n??=new p,n.state==="suspended"&&n.resume().catch(()=>{}))}function h(){if(l){try{l.stop()}catch{}c.delete(l),l=null}}function f(){h();for(const p of c)try{p.stop()}catch{}c.clear(),typeof navigator.vibrate=="function"&&navigator.vibrate(0)}function d(p,v){if(!e()||typeof document<"u"&&document.hidden)return;const x=performance.now();if(x-r<80)return;let _="unsupported";try{if(typeof navigator.vibrate=="function"){const b=Math.round(8+v*16);_=navigator.vibrate(p==="grip"?[b,20,10]:b)?"vibration-requested":"vibration-rejected"}else o??=document.createElement("input"),"switch"in o&&navigator.userActivation?.isActive&&(o.isConnected||(o.type="checkbox",o.setAttribute("switch",""),o.tabIndex=-1,o.setAttribute("aria-hidden","true"),o.style.cssText="position:fixed;left:-100px;top:-100px;width:1px;height:1px;opacity:0;pointer-events:none",a=document.createElement("label"),a.style.cssText=o.style.cssText,a.append(o),document.body.append(a)),a.click(),_="switch-requested")}catch{_="unavailable"}r=x,typeof document<"u"&&(document.documentElement.dataset.hapticState=_)}function g(p,v=.5,x={}){const _=Math.min(1,Math.max(0,v)),b=p==="rub"||p==="scale";if(!(b&&performance.now()-s<160)&&(b&&(s=performance.now()),p!=="voice"&&d(p,_),!(!i()||!n))){if(n.state==="suspended"){n.resume().then(()=>{i()&&y(p,_,b,x)}).catch(()=>{});return}y(p,_,b,x)}}function y(p,v,x,_){if(n.state!=="running")return;const b=.9+Math.random()*.2,E=Math.max(.65,Math.min(1.5,_.size||1)),R=b/Math.sqrt(E)*(.86+v*.32),C=n.currentTime,S=p==="voice"?_.phrase.duration:(p==="grip"?.16:p==="release"?.13:x?.075:.1)*b,M=Math.ceil(n.sampleRate*S),D=n.createBuffer(1,M,n.sampleRate),F=D.getChannelData(0);let W=0,K=0;for(let Z=0;Z<M;Z++){const G=Z/M;if(p==="voice"){const Y=Z/n.sampleRate,k=_.phrase.syllables.find(ie=>Y>=ie.start&&Y<ie.start+ie.length);if(!k)continue;const T=(Y-k.start)/k.length,A=(440+v*100)*b/Math.pow(E,.18)*Math.max(.92,k.pitch)*(1+k.bend*(T-.5));K+=Math.PI*2*A/n.sampleRate;const q=k.vowel;F[Z]=(Math.sin(K)*.56+Math.sin(K*q)*.13+Math.sin(K*(q+1))*.055)*Math.pow(Math.sin(Math.PI*T),.7);continue}const ce=(p==="on"?680:p==="off"?480:p==="button"?760:p==="scale"?_.direction>0?300:620:p==="rub"?380:p==="grip"?310:p==="release"?560:460)*R,me=(p==="on"?920:p==="off"?260:p==="button"?450:p==="scale"?_.direction>0?640:290:p==="rub"?250:p==="grip"?145:p==="release"?280:205)*R,xe=me+(ce-me)*Math.exp(-G*5)+Math.sin(G*Math.PI*3)*22*(1-G);K+=Math.PI*2*xe/n.sampleRate,W=.68*W+.32*(Math.random()*2-1),F[Z]=Math.sin(K)*.78+Math.sin(K*2)*.1*(1-G)+W*.1}const j=n.createBufferSource();j.buffer=D,p==="voice"&&(h(),l=j);const H=n.createBiquadFilter();H.type="lowpass",H.Q.value=.5,H.frequency.setValueAtTime(p==="voice"?3400:1800,C),H.frequency.exponentialRampToValueAtTime(p==="voice"?2600:900,C+S);const O=n.createGain(),U=Math.min(.18,Math.max(0,t()))*(.22+.5*v)*(p==="voice"?1.35:x?.4:1);if(O.gain.setValueAtTime(0,C),O.gain.linearRampToValueAtTime(U,C+.012),p==="voice"&&O.gain.setValueAtTime(U*.65,C+S*.8),O.gain.exponentialRampToValueAtTime(1e-4,C+S),j.connect(H).connect(O).connect(n.destination),c.size>=4){const Z=[...c].find(G=>G!==l);try{Z.stop()}catch{}c.delete(Z)}c.add(j),j.onended=()=>{l===j&&(l=null),c.delete(j),j.disconnect(),H.disconnect(),O.disconnect()},j.start(C),j.stop(C+S+.01),typeof document<"u"&&(document.documentElement.dataset.audioState=n.state,document.documentElement.dataset.feedback=p)}function m(p={}){!n||!i()||document.hidden||(h(),g("voice",.55,{...p,phrase:p.phrase||Hu(p.message)}))}return{unlock:u,pulse:g,stop:f,babble:m,stopVoice:h}}function ly(){const i=ay({soundEnabled:()=>document.body.dataset.opening==="done"&&document.querySelector("#mic-toggle")?.getAttribute("aria-pressed")!=="true",hapticsEnabled:()=>!0,volume:()=>.17});document.addEventListener("pointerdown",t=>{t.target.closest("#world,.play-controls,[data-color-mode],#work-close")&&i.unlock()},{capture:!0}),document.addEventListener("click",t=>{const n=t.target.closest(".play-controls button,[data-color-mode],#work-close");if(!n||n.disabled)return;i.unlock();const s=n.matches("#camera-toggle,#mic-toggle");i.pulse(s?n.getAttribute("aria-pressed")==="true"?"off":"on":"button",.4)},{capture:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&i.stop()});const e=document.querySelector("#mic-toggle");return e&&new MutationObserver(()=>{e.getAttribute("aria-pressed")==="true"&&i.stop()}).observe(e,{attributes:!0,attributeFilter:["aria-pressed"]}),window.addEventListener("pagehide",()=>i.stop()),i}function cy(i){if(!new URLSearchParams(location.search).has("profile"))return null;const e=i.getContext(),t=e.getExtension("EXT_disjoint_timer_query_webgl2");let n=null,s=!1,r=0;const o=[],a=[],l=()=>{const c=u=>u.length?u.reduce((h,f)=>h+f,0)/u.length:null;document.body.dataset.profile=JSON.stringify({cpuMs:c(o),gpuMs:c(a),samples:o.length,gpuSamples:a.length})};return{begin(){n&&e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE)&&(e.getParameter(t.GPU_DISJOINT_EXT)||(a.push(e.getQueryParameter(n,e.QUERY_RESULT)/1e6),a.length>120&&a.shift()),e.deleteQuery(n),n=null),t&&!n&&(n=e.createQuery(),e.beginQuery(t.TIME_ELAPSED_EXT,n),s=!0),r=performance.now()},end(){s&&(e.endQuery(t.TIME_ELAPSED_EXT),s=!1),o.push(performance.now()-r),o.length>120&&o.shift(),l()}}}function hy(i){const e={frostMap:{value:null},frostRect:{value:new Qe},frostRadius:{value:12},frostLod:{value:0}};i.material.userData.frost=e;const t=new de,n=new de,s=new B;let r;i.onBeforeRender=(o,a,l)=>{o.getDrawingBufferSize(t),i.geometry.boundingSphere||i.geometry.computeBoundingSphere();const c=i.userData.actor,h=i.geometry.boundingSphere.radius*(c?.baseSize||1)*1.55*2*t.x/(l.right-l.left),f=Math.min(t.x,Math.ceil((h+64)/64)*64),d=Math.min(t.y,Math.ceil((h+64)/64)*64);(!r||r.image.width!==f||r.image.height!==d)&&(r?.dispose(),r=new Xd(f,d),r.magFilter=qt,r.minFilter=Tn,e.frostMap.value=r),s.copy(i.geometry.boundingSphere.center).applyMatrix4(i.matrixWorld).project(l),n.set(Math.max(0,Math.min(t.x-f,Math.floor((s.x*.5+.5)*t.x-f/2))),Math.max(0,Math.min(t.y-d,Math.floor((s.y*.5+.5)*t.y-d/2)))),e.frostRect.value.set(n.x,n.y,f,d),e.frostRadius.value=Math.max(10,Math.min(28,h*.055)),o.copyFramebufferToTexture(r,n);const g=o.getContext();o.state.bindTexture(g.TEXTURE_2D,o.properties.get(r).__webglTexture),g.generateMipmap(g.TEXTURE_2D),o.state.unbindTexture(),e.frostLod.value=Math.max(0,Math.log2(e.frostRadius.value*1.2))},i.material.addEventListener("dispose",()=>r?.dispose())}function uy(i){if(i.noSeam)return i;const e=i.positions.slice(),t=i.rim.length,n=new Set(i.rim),s=i.rim.map(f=>({x:e[f*3],y:e[f*3+1]})),r=s.map((f,d)=>{const g=s[(d+t-2)%t],y=s[(d+2)%t],m=y.x-g.x,p=y.y-g.y,v=Math.hypot(m,p)||1,x=d/t*Math.PI*2;return{p:f,nx:p/v,ny:-m/v,width:.015+.001*Math.sin(x*3+.8),curl:.005*Math.sin(x*18)+.003*Math.sin(x*33+.4)}}),o=i.rim.map(f=>f-t),a=i.rim.map(f=>f+t);function l(f,d,g){for(let y=0;y<t;y++){const{p:m,nx:p,ny:v,width:x,curl:_}=r[y],b=f[y]*3;e[b]=m.x+p*x*d,e[b+1]=m.y+v*x*d,e[b+2]=.4+_*d*d+g*.0016*(1-d*d)}}l(o,0,1),l(a,0,-1),l(i.rim,1,0);const c=(f,d)=>{const g=Array.from({length:t},()=>{const y=e.length/3;return e.push(0,0,0),y});return l(g,f,d),g},u=[o,c(.25,1),c(.55,1),c(.8,1),i.rim,c(.8,-1),c(.55,-1),c(.25,-1),a],h=[];for(let f=0;f<i.triangles.length;f+=3){const d=i.triangles.slice(f,f+3);d.some(g=>n.has(g))||h.push(...d)}for(let f=0;f<u.length-1;f++)for(let d=0;d<t;d++){const g=(d+1)%t,y=u[f][d],m=u[f][g],p=u[f+1][d],v=u[f+1][g];h.push(y,p,m,m,p,v)}return{...i,positions:e,triangles:h}}const fy=Et;class ro extends Pi{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){const r=this,o=new Bl(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this;function n(Y,k){if(Y.nodeType!==1)return;const T=_(Y);let A=!1,q=null;switch(Y.nodeName){case"svg":k=g(Y,k);break;case"style":r(Y);break;case"g":k=g(Y,k);break;case"path":k=g(Y,k),Y.hasAttribute("d")&&(q=s(Y));break;case"rect":k=g(Y,k),q=l(Y);break;case"polygon":k=g(Y,k),q=c(Y);break;case"polyline":k=g(Y,k),q=u(Y);break;case"circle":k=g(Y,k),q=h(Y);break;case"ellipse":k=g(Y,k),q=f(Y);break;case"line":k=g(Y,k),q=d(Y);break;case"defs":A=!0;break;case"use":k=g(Y,k);const re=(Y.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),fe=Y.viewportElement.getElementById(re);fe?n(fe,k):console.warn("SVGLoader: 'use node' references non-existent node id: "+re);break}q&&(k.fill!==void 0&&k.fill!=="none"&&q.color.setStyle(k.fill,fy),E(q,ce),F.push(q),q.userData={node:Y,style:k});const ie=Y.childNodes;for(let V=0;V<ie.length;V++){const re=ie[V];A&&re.nodeName!=="style"&&re.nodeName!=="defs"||n(re,k)}T&&(K.pop(),K.length>0?ce.copy(K[K.length-1]):ce.identity())}function s(Y){const k=new yi,T=new de,A=new de,q=new de;let ie=!0,V=!1;const re=Y.getAttribute("d");if(re===""||re==="none")return null;const fe=re.match(/[a-df-z][^a-df-z]*/ig);for(let I=0,X=fe.length;I<X;I++){const $=fe[I],ee=$.charAt(0),Q=$.slice(1).trim();ie===!0&&(V=!0,ie=!1);let z;switch(ee){case"M":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=2)T.x=z[L+0],T.y=z[L+1],A.x=T.x,A.y=T.y,L===0?k.moveTo(T.x,T.y):k.lineTo(T.x,T.y),L===0&&q.copy(T);break;case"H":z=m(Q);for(let L=0,ae=z.length;L<ae;L++)T.x=z[L],A.x=T.x,A.y=T.y,k.lineTo(T.x,T.y),L===0&&V===!0&&q.copy(T);break;case"V":z=m(Q);for(let L=0,ae=z.length;L<ae;L++)T.y=z[L],A.x=T.x,A.y=T.y,k.lineTo(T.x,T.y),L===0&&V===!0&&q.copy(T);break;case"L":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=2)T.x=z[L+0],T.y=z[L+1],A.x=T.x,A.y=T.y,k.lineTo(T.x,T.y),L===0&&V===!0&&q.copy(T);break;case"C":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=6)k.bezierCurveTo(z[L+0],z[L+1],z[L+2],z[L+3],z[L+4],z[L+5]),A.x=z[L+2],A.y=z[L+3],T.x=z[L+4],T.y=z[L+5],L===0&&V===!0&&q.copy(T);break;case"S":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=4)k.bezierCurveTo(y(T.x,A.x),y(T.y,A.y),z[L+0],z[L+1],z[L+2],z[L+3]),A.x=z[L+0],A.y=z[L+1],T.x=z[L+2],T.y=z[L+3],L===0&&V===!0&&q.copy(T);break;case"Q":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=4)k.quadraticCurveTo(z[L+0],z[L+1],z[L+2],z[L+3]),A.x=z[L+0],A.y=z[L+1],T.x=z[L+2],T.y=z[L+3],L===0&&V===!0&&q.copy(T);break;case"T":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=2){const Ee=y(T.x,A.x),Ue=y(T.y,A.y);k.quadraticCurveTo(Ee,Ue,z[L+0],z[L+1]),A.x=Ee,A.y=Ue,T.x=z[L+0],T.y=z[L+1],L===0&&V===!0&&q.copy(T)}break;case"A":z=m(Q,[3,4],7);for(let L=0,ae=z.length;L<ae;L+=7){if(z[L+5]==T.x&&z[L+6]==T.y)continue;const Ee=T.clone();T.x=z[L+5],T.y=z[L+6],A.x=T.x,A.y=T.y,o(k,z[L],z[L+1],z[L+2],z[L+3],z[L+4],Ee,T),L===0&&V===!0&&q.copy(T)}break;case"m":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=2)T.x+=z[L+0],T.y+=z[L+1],A.x=T.x,A.y=T.y,L===0?k.moveTo(T.x,T.y):k.lineTo(T.x,T.y),L===0&&q.copy(T);break;case"h":z=m(Q);for(let L=0,ae=z.length;L<ae;L++)T.x+=z[L],A.x=T.x,A.y=T.y,k.lineTo(T.x,T.y),L===0&&V===!0&&q.copy(T);break;case"v":z=m(Q);for(let L=0,ae=z.length;L<ae;L++)T.y+=z[L],A.x=T.x,A.y=T.y,k.lineTo(T.x,T.y),L===0&&V===!0&&q.copy(T);break;case"l":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=2)T.x+=z[L+0],T.y+=z[L+1],A.x=T.x,A.y=T.y,k.lineTo(T.x,T.y),L===0&&V===!0&&q.copy(T);break;case"c":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=6)k.bezierCurveTo(T.x+z[L+0],T.y+z[L+1],T.x+z[L+2],T.y+z[L+3],T.x+z[L+4],T.y+z[L+5]),A.x=T.x+z[L+2],A.y=T.y+z[L+3],T.x+=z[L+4],T.y+=z[L+5],L===0&&V===!0&&q.copy(T);break;case"s":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=4)k.bezierCurveTo(y(T.x,A.x),y(T.y,A.y),T.x+z[L+0],T.y+z[L+1],T.x+z[L+2],T.y+z[L+3]),A.x=T.x+z[L+0],A.y=T.y+z[L+1],T.x+=z[L+2],T.y+=z[L+3],L===0&&V===!0&&q.copy(T);break;case"q":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=4)k.quadraticCurveTo(T.x+z[L+0],T.y+z[L+1],T.x+z[L+2],T.y+z[L+3]),A.x=T.x+z[L+0],A.y=T.y+z[L+1],T.x+=z[L+2],T.y+=z[L+3],L===0&&V===!0&&q.copy(T);break;case"t":z=m(Q);for(let L=0,ae=z.length;L<ae;L+=2){const Ee=y(T.x,A.x),Ue=y(T.y,A.y);k.quadraticCurveTo(Ee,Ue,T.x+z[L+0],T.y+z[L+1]),A.x=Ee,A.y=Ue,T.x=T.x+z[L+0],T.y=T.y+z[L+1],L===0&&V===!0&&q.copy(T)}break;case"a":z=m(Q,[3,4],7);for(let L=0,ae=z.length;L<ae;L+=7){if(z[L+5]==0&&z[L+6]==0)continue;const Ee=T.clone();T.x+=z[L+5],T.y+=z[L+6],A.x=T.x,A.y=T.y,o(k,z[L],z[L+1],z[L+2],z[L+3],z[L+4],Ee,T),L===0&&V===!0&&q.copy(T)}break;case"Z":case"z":k.currentPath.autoClose=!0,k.currentPath.curves.length>0&&(T.copy(q),k.currentPath.currentPoint.copy(T),ie=!0);break;default:console.warn($)}V=!1}return k}function r(Y){if(!(!Y.sheet||!Y.sheet.cssRules||!Y.sheet.cssRules.length))for(let k=0;k<Y.sheet.cssRules.length;k++){const T=Y.sheet.cssRules[k];if(T.type!==1)continue;const A=T.selectorText.split(/,/gm).filter(Boolean).map(q=>q.trim());for(let q=0;q<A.length;q++){const ie=Object.fromEntries(Object.entries(T.style).filter(([,V])=>V!==""));W[A[q]]=Object.assign(W[A[q]]||{},ie)}}}function o(Y,k,T,A,q,ie,V,re){if(k==0||T==0){Y.lineTo(re.x,re.y);return}A=A*Math.PI/180,k=Math.abs(k),T=Math.abs(T);const fe=(V.x-re.x)/2,I=(V.y-re.y)/2,X=Math.cos(A)*fe+Math.sin(A)*I,$=-Math.sin(A)*fe+Math.cos(A)*I;let ee=k*k,Q=T*T;const z=X*X,L=$*$,ae=z/ee+L/Q;if(ae>1){const _e=Math.sqrt(ae);k=_e*k,T=_e*T,ee=k*k,Q=T*T}const Ee=ee*L+Q*z,Ue=(ee*Q-Ee)/Ee;let N=Math.sqrt(Math.max(0,Ue));q===ie&&(N=-N);const w=N*k*$/T,te=-N*T*X/k,oe=Math.cos(A)*w-Math.sin(A)*te+(V.x+re.x)/2,pe=Math.sin(A)*w+Math.cos(A)*te+(V.y+re.y)/2,ue=a(1,0,(X-w)/k,($-te)/T),Le=a((X-w)/k,($-te)/T,(-X-w)/k,(-$-te)/T)%(Math.PI*2);Y.currentPath.absellipse(oe,pe,k,T,ue,ue+Le,ie===0,A)}function a(Y,k,T,A){const q=Y*T+k*A,ie=Math.sqrt(Y*Y+k*k)*Math.sqrt(T*T+A*A);let V=Math.acos(Math.max(-1,Math.min(1,q/ie)));return Y*A-k*T<0&&(V=-V),V}function l(Y){const k=x(Y.getAttribute("x")||0),T=x(Y.getAttribute("y")||0),A=x(Y.getAttribute("rx")||Y.getAttribute("ry")||0),q=x(Y.getAttribute("ry")||Y.getAttribute("rx")||0),ie=x(Y.getAttribute("width")),V=x(Y.getAttribute("height")),re=1-.551915024494,fe=new yi;return fe.moveTo(k+A,T),fe.lineTo(k+ie-A,T),(A!==0||q!==0)&&fe.bezierCurveTo(k+ie-A*re,T,k+ie,T+q*re,k+ie,T+q),fe.lineTo(k+ie,T+V-q),(A!==0||q!==0)&&fe.bezierCurveTo(k+ie,T+V-q*re,k+ie-A*re,T+V,k+ie-A,T+V),fe.lineTo(k+A,T+V),(A!==0||q!==0)&&fe.bezierCurveTo(k+A*re,T+V,k,T+V-q*re,k,T+V-q),fe.lineTo(k,T+q),(A!==0||q!==0)&&fe.bezierCurveTo(k,T+q*re,k+A*re,T,k+A,T),fe}function c(Y){function k(ie,V,re){const fe=x(V),I=x(re);q===0?A.moveTo(fe,I):A.lineTo(fe,I),q++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new yi;let q=0;return Y.getAttribute("points").replace(T,k),A.currentPath.autoClose=!0,A}function u(Y){function k(ie,V,re){const fe=x(V),I=x(re);q===0?A.moveTo(fe,I):A.lineTo(fe,I),q++}const T=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new yi;let q=0;return Y.getAttribute("points").replace(T,k),A.currentPath.autoClose=!1,A}function h(Y){const k=x(Y.getAttribute("cx")||0),T=x(Y.getAttribute("cy")||0),A=x(Y.getAttribute("r")||0),q=new es;q.absarc(k,T,A,0,Math.PI*2);const ie=new yi;return ie.subPaths.push(q),ie}function f(Y){const k=x(Y.getAttribute("cx")||0),T=x(Y.getAttribute("cy")||0),A=x(Y.getAttribute("rx")||0),q=x(Y.getAttribute("ry")||0),ie=new es;ie.absellipse(k,T,A,q,0,Math.PI*2);const V=new yi;return V.subPaths.push(ie),V}function d(Y){const k=x(Y.getAttribute("x1")||0),T=x(Y.getAttribute("y1")||0),A=x(Y.getAttribute("x2")||0),q=x(Y.getAttribute("y2")||0),ie=new yi;return ie.moveTo(k,T),ie.lineTo(A,q),ie.currentPath.autoClose=!1,ie}function g(Y,k){k=Object.assign({},k);let T={};if(Y.hasAttribute("class")){const V=Y.getAttribute("class").split(/\s/).filter(Boolean).map(re=>re.trim());for(let re=0;re<V.length;re++)T=Object.assign(T,W["."+V[re]])}Y.hasAttribute("id")&&(T=Object.assign(T,W["#"+Y.getAttribute("id")]));function A(V,re,fe){fe===void 0&&(fe=function(X){return X.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),X}),Y.hasAttribute(V)&&(k[re]=fe(Y.getAttribute(V))),T[V]&&(k[re]=fe(T[V])),Y.style&&Y.style[V]!==""&&(k[re]=fe(Y.style[V]))}function q(V){return Math.max(0,Math.min(1,x(V)))}function ie(V){return Math.max(0,x(V))}return A("fill","fill"),A("fill-opacity","fillOpacity",q),A("fill-rule","fillRule"),A("opacity","opacity",q),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",q),A("stroke-width","strokeWidth",ie),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",ie),A("visibility","visibility"),k}function y(Y,k){return Y-(k-Y)}function m(Y,k,T){if(typeof Y!="string")throw new TypeError("Invalid input: "+typeof Y);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},q=0,ie=1,V=2,re=3;let fe=q,I=!0,X="",$="";const ee=[];function Q(Ee,Ue,N){const w=new SyntaxError('Unexpected character "'+Ee+'" at index '+Ue+".");throw w.partial=N,w}function z(){X!==""&&($===""?ee.push(Number(X)):ee.push(Number(X)*Math.pow(10,Number($)))),X="",$=""}let L;const ae=Y.length;for(let Ee=0;Ee<ae;Ee++){if(L=Y[Ee],Array.isArray(k)&&k.includes(ee.length%T)&&A.FLAGS.test(L)){fe=ie,X=L,z();continue}if(fe===q){if(A.WHITESPACE.test(L))continue;if(A.DIGIT.test(L)||A.SIGN.test(L)){fe=ie,X=L;continue}if(A.POINT.test(L)){fe=V,X=L;continue}A.COMMA.test(L)&&(I&&Q(L,Ee,ee),I=!0)}if(fe===ie){if(A.DIGIT.test(L)){X+=L;continue}if(A.POINT.test(L)){X+=L,fe=V;continue}if(A.EXP.test(L)){fe=re;continue}A.SIGN.test(L)&&X.length===1&&A.SIGN.test(X[0])&&Q(L,Ee,ee)}if(fe===V){if(A.DIGIT.test(L)){X+=L;continue}if(A.EXP.test(L)){fe=re;continue}A.POINT.test(L)&&X[X.length-1]==="."&&Q(L,Ee,ee)}if(fe===re){if(A.DIGIT.test(L)){$+=L;continue}if(A.SIGN.test(L)){if($===""){$+=L;continue}$.length===1&&A.SIGN.test($)&&Q(L,Ee,ee)}}A.WHITESPACE.test(L)?(z(),fe=q,I=!1):A.COMMA.test(L)?(z(),fe=q,I=!0):A.SIGN.test(L)?(z(),fe=ie,X=L):A.POINT.test(L)?(z(),fe=V,X=L):Q(L,Ee,ee)}return z(),ee}const p=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(Y){let k="px";if(typeof Y=="string"||Y instanceof String)for(let A=0,q=p.length;A<q;A++){const ie=p[A];if(Y.endsWith(ie)){k=ie,Y=Y.substring(0,Y.length-ie.length);break}}let T;return k==="px"&&t.defaultUnit!=="px"?T=v.in[t.defaultUnit]/t.defaultDPI:(T=v[k][t.defaultUnit],T<0&&(T=v[k].in*t.defaultDPI)),T*parseFloat(Y)}function _(Y){if(!(Y.hasAttribute("transform")||Y.nodeName==="use"&&(Y.hasAttribute("x")||Y.hasAttribute("y"))))return null;const k=b(Y);return K.length>0&&k.premultiply(K[K.length-1]),ce.copy(k),K.push(k),k}function b(Y){const k=new Xe,T=j;if(Y.nodeName==="use"&&(Y.hasAttribute("x")||Y.hasAttribute("y"))){const A=x(Y.getAttribute("x")),q=x(Y.getAttribute("y"));k.translate(A,q)}if(Y.hasAttribute("transform")){const A=Y.getAttribute("transform").split(")");for(let q=A.length-1;q>=0;q--){const ie=A[q].trim();if(ie==="")continue;const V=ie.indexOf("("),re=ie.length;if(V>0&&V<re){const fe=ie.slice(0,V),I=m(ie.slice(V+1));switch(T.identity(),fe){case"translate":if(I.length>=1){const X=I[0];let $=0;I.length>=2&&($=I[1]),T.translate(X,$)}break;case"rotate":if(I.length>=1){let X=0,$=0,ee=0;X=I[0]*Math.PI/180,I.length>=3&&($=I[1],ee=I[2]),H.makeTranslation(-$,-ee),O.makeRotation(X),U.multiplyMatrices(O,H),H.makeTranslation($,ee),T.multiplyMatrices(H,U)}break;case"scale":if(I.length>=1){const X=I[0];let $=X;I.length>=2&&($=I[1]),T.scale(X,$)}break;case"skewX":I.length===1&&T.set(1,Math.tan(I[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":I.length===1&&T.set(1,0,0,Math.tan(I[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":I.length===6&&T.set(I[0],I[2],I[4],I[1],I[3],I[5],0,0,1);break}}k.premultiply(T)}}return k}function E(Y,k){function T(V){G.set(V.x,V.y,1).applyMatrix3(k),V.set(G.x,G.y)}function A(V){const re=V.xRadius,fe=V.yRadius,I=Math.cos(V.aRotation),X=Math.sin(V.aRotation),$=new B(re*I,re*X,0),ee=new B(-fe*X,fe*I,0),Q=$.applyMatrix3(k),z=ee.applyMatrix3(k),L=j.set(Q.x,z.x,0,Q.y,z.y,0,0,0,1),ae=H.copy(L).invert(),N=O.copy(ae).transpose().multiply(ae).elements,w=D(N[0],N[1],N[4]),te=Math.sqrt(w.rt1),oe=Math.sqrt(w.rt2);if(V.xRadius=1/te,V.yRadius=1/oe,V.aRotation=Math.atan2(w.sn,w.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ue=H.set(te,0,0,0,oe,0,0,0,1),Le=O.set(w.cs,w.sn,0,-w.sn,w.cs,0,0,0,1),_e=ue.multiply(Le).multiply(L),Re=Ie=>{const{x:ve,y:we}=new B(Math.cos(Ie),Math.sin(Ie),0).applyMatrix3(_e);return Math.atan2(we,ve)};V.aStartAngle=Re(V.aStartAngle),V.aEndAngle=Re(V.aEndAngle),R(k)&&(V.aClockwise=!V.aClockwise)}}function q(V){const re=S(k),fe=M(k);V.xRadius*=re,V.yRadius*=fe;const I=re>Number.EPSILON?Math.atan2(k.elements[1],k.elements[0]):Math.atan2(-k.elements[3],k.elements[4]);V.aRotation+=I,R(k)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const ie=Y.subPaths;for(let V=0,re=ie.length;V<re;V++){const I=ie[V].curves;for(let X=0;X<I.length;X++){const $=I[X];$.isLineCurve?(T($.v1),T($.v2)):$.isCubicBezierCurve?(T($.v0),T($.v1),T($.v2),T($.v3)):$.isQuadraticBezierCurve?(T($.v0),T($.v1),T($.v2)):$.isEllipseCurve&&(Z.set($.aX,$.aY),T(Z),$.aX=Z.x,$.aY=Z.y,C(k)?A($):q($))}}}function R(Y){const k=Y.elements;return k[0]*k[4]-k[1]*k[3]<0}function C(Y){const k=Y.elements,T=k[0]*k[3]+k[1]*k[4];if(T===0)return!1;const A=S(Y),q=M(Y);return Math.abs(T/(A*q))>Number.EPSILON}function S(Y){const k=Y.elements;return Math.sqrt(k[0]*k[0]+k[1]*k[1])}function M(Y){const k=Y.elements;return Math.sqrt(k[3]*k[3]+k[4]*k[4])}function D(Y,k,T){let A,q,ie,V,re;const fe=Y+T,I=Y-T,X=Math.sqrt(I*I+4*k*k);return fe>0?(A=.5*(fe+X),re=1/A,q=Y*re*T-k*re*k):fe<0?q=.5*(fe-X):(A=.5*X,q=-.5*X),I>0?ie=I+X:ie=I-X,Math.abs(ie)>2*Math.abs(k)?(re=-2*k/ie,V=1/Math.sqrt(1+re*re),ie=re*V):Math.abs(k)===0?(ie=1,V=0):(re=-.5*ie/k,ie=1/Math.sqrt(1+re*re),V=re*ie),I>0&&(re=ie,ie=-V,V=re),{rt1:A,rt2:q,cs:ie,sn:V}}const F=[],W={},K=[],j=new Xe,H=new Xe,O=new Xe,U=new Xe,Z=new de,G=new B,ce=new Xe,me=new DOMParser().parseFromString(e,"image/svg+xml");return n(me.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:F,xml:me.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(y,m,p,v){const x=y.x,_=m.x,b=p.x,E=v.x,R=y.y,C=m.y,S=p.y,M=v.y,D=(E-b)*(R-S)-(M-S)*(x-b),F=(_-x)*(R-S)-(C-R)*(x-b),W=(M-S)*(_-x)-(E-b)*(C-R),K=D/W,j=F/W;if(W===0&&D!==0||K<=0||K>=1||j<0||j>1)return null;if(D===0&&W===0){for(let H=0;H<2;H++)if(o(H===0?p:v,y,m),s.loc==n.ORIGIN){const O=H===0?p:v;return{x:O.x,y:O.y,t:s.t}}else if(s.loc==n.BETWEEN){const O=+(x+s.t*(_-x)).toPrecision(10),U=+(R+s.t*(C-R)).toPrecision(10);return{x:O,y:U,t:s.t}}return null}else{for(let U=0;U<2;U++)if(o(U===0?p:v,y,m),s.loc==n.ORIGIN){const Z=U===0?p:v;return{x:Z.x,y:Z.y,t:s.t}}const H=+(x+K*(_-x)).toPrecision(10),O=+(R+K*(C-R)).toPrecision(10);return{x:H,y:O,t:K}}}function o(y,m,p){const v=p.x-m.x,x=p.y-m.y,_=y.x-m.x,b=y.y-m.y,E=v*b-_*x;if(y.x===m.x&&y.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(y.x===p.x&&y.y===p.y){s.loc=n.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=n.LEFT;return}if(E>Number.EPSILON){s.loc=n.RIGHT;return}if(v*_<0||x*b<0){s.loc=n.BEHIND;return}if(Math.sqrt(v*v+x*x)<Math.sqrt(_*_+b*b)){s.loc=n.BEYOND;return}let R;v!==0?R=_/v:R=b/x,s.loc=n.BETWEEN,s.t=R}function a(y,m){const p=[],v=[];for(let x=1;x<y.length;x++){const _=y[x-1],b=y[x];for(let E=1;E<m.length;E++){const R=m[E-1],C=m[E],S=r(_,b,R,C);S!==null&&p.find(M=>M.t<=S.t+Number.EPSILON&&M.t>=S.t-Number.EPSILON)===void 0&&(p.push(S),v.push(new de(S.x,S.y)))}}return v}function l(y,m,p){const v=new de;m.getCenter(v);const x=[];return p.forEach(_=>{_.boundingBox.containsPoint(v)&&a(y,_.points).forEach(E=>{x.push({identifier:_.identifier,isCW:_.isCW,point:E})})}),x.sort((_,b)=>_.point.x-b.point.x),x}function c(y,m,p,v,x){(x==null||x==="")&&(x="nonzero");const _=new de;y.boundingBox.getCenter(_);const b=[new de(p,_.y),new de(v,_.y)],E=l(b,y.boundingBox,m);E.sort((F,W)=>F.point.x-W.point.x);const R=[],C=[];E.forEach(F=>{F.identifier===y.identifier?R.push(F):C.push(F)});const S=R[0].point.x,M=[];let D=0;for(;D<C.length&&C[D].point.x<S;)M.length>0&&M[M.length-1]===C[D].identifier?M.pop():M.push(C[D].identifier),D++;if(M.push(y.identifier),x==="evenodd"){const F=M.length%2===0,W=M[M.length-2];return{identifier:y.identifier,isHole:F,for:W}}else if(x==="nonzero"){let F=!0,W=null,K=null;for(let j=0;j<M.length;j++){const H=M[j];F?(K=m[H].isCW,F=!1,W=H):K!==m[H].isCW&&(K=m[H].isCW,F=!0)}return{identifier:y.identifier,isHole:F,for:W}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(y=>{const m=y.getPoints();let p=-999999999,v=999999999,x=-999999999,_=999999999;for(let b=0;b<m.length;b++){const E=m[b];E.y>p&&(p=E.y),E.y<v&&(v=E.y),E.x>x&&(x=E.x),E.x<_&&(_=E.x)}return h<=x&&(h=x+1),u>=_&&(u=_-1),{curves:y.curves,points:m,isCW:ln.isClockWise(m),identifier:-1,boundingBox:new nm(new de(_,v),new de(x,p))}});f=f.filter(y=>y.points.length>1);for(let y=0;y<f.length;y++)f[y].identifier=y;const d=f.map(y=>c(y,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(y=>{if(!d[y.identifier].isHole){const p=new li;p.curves=y.curves,d.filter(x=>x.isHole&&x.for===y.identifier).forEach(x=>{const _=f[x.identifier],b=new es;b.curves=_.curves,p.holes.push(b)}),g.push(p)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){const r=[],o=[],a=[];if(ro.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;const l=new bt;return l.setAttribute("position",new ct(r,3)),l.setAttribute("normal",new ct(o,3)),l.setAttribute("uv",new ct(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,l){const c=new de,u=new de,h=new de,f=new de,d=new de,g=new de,y=new de,m=new de,p=new de,v=new de,x=new de,_=new de,b=new de,E=new de,R=new de,C=new de,S=new de;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=I(e);const M=e.length;if(M<2)return 0;const D=e[0].equals(e[M-1]);let F,W=e[0],K;const j=t.strokeWidth/2,H=1/(M-1);let O=0,U,Z,G,ce,me=!1,xe=0,Y=l*3,k=l*2;T(e[0],e[1],c).multiplyScalar(j),m.copy(e[0]).sub(c),p.copy(e[0]).add(c),v.copy(m),x.copy(p);for(let X=1;X<M;X++){F=e[X],X===M-1?D?K=e[1]:K=void 0:K=e[X+1];const $=c;if(T(W,F,$),h.copy($).multiplyScalar(j),_.copy(F).sub(h),b.copy(F).add(h),U=O+H,Z=!1,K!==void 0){T(F,K,u),h.copy(u).multiplyScalar(j),E.copy(F).sub(h),R.copy(F).add(h),G=!0,h.subVectors(K,W),$.dot(h)<0&&(G=!1),X===1&&(me=G),h.subVectors(K,F),h.normalize();const ee=Math.abs($.dot(h));if(ee>Number.EPSILON){const Q=j/ee;h.multiplyScalar(-Q),f.subVectors(F,W),d.copy(f).setLength(Q).add(h),C.copy(d).negate();const z=d.length(),L=f.length();f.divideScalar(L),g.subVectors(K,F);const ae=g.length();switch(g.divideScalar(ae),f.dot(C)<L&&g.dot(C)<ae&&(Z=!0),S.copy(d).add(F),C.add(F),ce=!1,Z?G?(R.copy(C),b.copy(C)):(E.copy(C),_.copy(C)):ie(),t.strokeLineJoin){case"bevel":V(G,Z,U);break;case"round":re(G,Z),G?q(F,_,E,U,0):q(F,R,b,U,1);break;default:const Ee=j*t.strokeMiterLimit/z;if(Ee<1)if(t.strokeLineJoin!=="miter-clip"){V(G,Z,U);break}else re(G,Z),G?(g.subVectors(S,_).multiplyScalar(Ee).add(_),y.subVectors(S,E).multiplyScalar(Ee).add(E),A(_,U,0),A(g,U,0),A(F,U,.5),A(F,U,.5),A(g,U,0),A(y,U,0),A(F,U,.5),A(y,U,0),A(E,U,0)):(g.subVectors(S,b).multiplyScalar(Ee).add(b),y.subVectors(S,R).multiplyScalar(Ee).add(R),A(b,U,1),A(g,U,1),A(F,U,.5),A(F,U,.5),A(g,U,1),A(y,U,1),A(F,U,.5),A(y,U,1),A(R,U,1));else Z?(G?(A(p,O,1),A(m,O,0),A(S,U,0),A(p,O,1),A(S,U,0),A(C,U,1)):(A(p,O,1),A(m,O,0),A(S,U,1),A(m,O,0),A(C,U,0),A(S,U,1)),G?E.copy(S):R.copy(S)):G?(A(_,U,0),A(S,U,0),A(F,U,.5),A(F,U,.5),A(S,U,0),A(E,U,0)):(A(b,U,1),A(S,U,1),A(F,U,.5),A(F,U,.5),A(S,U,1),A(R,U,1)),ce=!0;break}}else ie()}else ie();!D&&X===M-1&&fe(e[0],v,x,G,!0,O),O=U,W=F,m.copy(E),p.copy(R)}if(!D)fe(F,_,b,G,!1,U);else if(Z&&r){let X=S,$=C;me!==G&&(X=C,$=S),G?(ce||me)&&($.toArray(r,0),$.toArray(r,9),ce&&X.toArray(r,3)):(ce||!me)&&($.toArray(r,3),$.toArray(r,9),ce&&X.toArray(r,0))}return xe;function T(X,$,ee){return ee.subVectors($,X),ee.set(-ee.y,ee.x).normalize()}function A(X,$,ee){r&&(r[Y]=X.x,r[Y+1]=X.y,r[Y+2]=0,o&&(o[Y]=0,o[Y+1]=0,o[Y+2]=1),Y+=3,a&&(a[k]=$,a[k+1]=ee,k+=2)),xe+=3}function q(X,$,ee,Q,z){c.copy($).sub(X).normalize(),u.copy(ee).sub(X).normalize();let L=Math.PI;const ae=c.dot(u);Math.abs(ae)<1&&(L=Math.abs(Math.acos(ae))),L/=n,h.copy($);for(let Ee=0,Ue=n-1;Ee<Ue;Ee++)f.copy(h).rotateAround(X,L),A(h,Q,z),A(f,Q,z),A(X,Q,.5),h.copy(f);A(f,Q,z),A(ee,Q,z),A(X,Q,.5)}function ie(){A(p,O,1),A(m,O,0),A(_,U,0),A(p,O,1),A(_,U,0),A(b,U,1)}function V(X,$,ee){$?X?(A(p,O,1),A(m,O,0),A(_,U,0),A(p,O,1),A(_,U,0),A(C,U,1),A(_,ee,0),A(E,ee,0),A(C,ee,.5)):(A(p,O,1),A(m,O,0),A(b,U,1),A(m,O,0),A(C,U,0),A(b,U,1),A(b,ee,1),A(C,ee,0),A(R,ee,1)):X?(A(_,ee,0),A(E,ee,0),A(F,ee,.5)):(A(b,ee,1),A(R,ee,0),A(F,ee,.5))}function re(X,$){$&&(X?(A(p,O,1),A(m,O,0),A(_,U,0),A(p,O,1),A(_,U,0),A(C,U,1),A(_,O,0),A(F,U,.5),A(C,U,1),A(F,U,.5),A(E,O,0),A(C,U,1)):(A(p,O,1),A(m,O,0),A(b,U,1),A(m,O,0),A(C,U,0),A(b,U,1),A(b,O,1),A(C,U,0),A(F,U,.5),A(F,U,.5),A(C,U,0),A(R,O,1)))}function fe(X,$,ee,Q,z,L){switch(t.strokeLineCap){case"round":z?q(X,ee,$,L,.5):q(X,$,ee,L,.5);break;case"square":if(z)c.subVectors($,X),u.set(c.y,-c.x),h.addVectors(c,u).add(X),f.subVectors(u,c).add(X),Q?(h.toArray(r,3),f.toArray(r,0),f.toArray(r,9)):(h.toArray(r,3),a[7]===1?f.toArray(r,9):h.toArray(r,9),f.toArray(r,0));else{c.subVectors(ee,X),u.set(c.y,-c.x),h.addVectors(c,u).add(X),f.subVectors(u,c).add(X);const ae=r.length;Q?(h.toArray(r,ae-3),f.toArray(r,ae-6),f.toArray(r,ae-12)):(f.toArray(r,ae-6),h.toArray(r,ae-3),f.toArray(r,ae-12))}break}}function I(X){let $=!1;for(let Q=1,z=X.length-1;Q<z;Q++)if(X[Q].distanceTo(X[Q+1])<s){$=!0;break}if(!$)return X;const ee=[];ee.push(X[0]);for(let Q=1,z=X.length-1;Q<z;Q++)X[Q].distanceTo(X[Q+1])>=s&&ee.push(X[Q]);return ee.push(X[X.length-1]),ee}}}function dy(i,e){const t=new ro().parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${e}"/></svg>`),n=ro.createShapes(t.paths[0])[0].getPoints(16),s=Math.max(...n.map(h=>Math.hypot(h.x-500,h.y-500))),r=n.map(h=>({x:(h.x-500)/s*1.2,y:(500-h.y)/s*1.2})),o=(h,f,d,g)=>h*g-f*d;function a(h){const f=Math.cos(h),d=Math.sin(h);let g=1/0;for(let y=0;y<r.length;y++){const m=r[y],p=r[(y+1)%r.length],v=p.x-m.x,x=p.y-m.y,_=o(f,d,v,x);if(Math.abs(_)<1e-8)continue;const b=o(m.x,m.y,v,x)/_,E=o(m.x,m.y,f,d)/_;b>0&&E>=0&&E<=1&&(g=Math.min(g,b))}return Number.isFinite(g)?g:.75}const l=i.positions.slice(),c=e.length%17,u=.74+c%5*.055;for(let h=0;h<l.length;h+=3){const f=i.positions[h],d=i.positions[h+1],g=i.positions[h+2],y=Math.min(1,Math.hypot(f,d)/.95),m=Math.atan2(d,f),p=a(m),v=y*(.56+(p-.56)*y),x=Math.cos(m)*v,_=Math.sin(m)*v;let b=1/0;for(let S=0;S<r.length;S++){const M=r[S],D=r[(S+1)%r.length],F=D.x-M.x,W=D.y-M.y,K=Math.max(0,Math.min(1,((x-M.x)*F+(_-M.y)*W)/(F*F+W*W||1)));b=Math.min(b,Math.hypot(x-M.x-K*F,_-M.y-K*W))}let E=0;for(let S=0;S<3;S++){const M=S*2.094+c*.37,D=Math.atan2(Math.sin(m-M),Math.cos(m-M)),F=.2+S%2*.07;E+=(.006+S%3*.003)*Math.exp(-((D/F)**2))*Math.exp(-(((b-.15)/.15)**2))}const R=Math.sign(g-.4),C=.35*u*Math.sqrt(1-Math.exp(-b/.15));l[h]=x,l[h+1]=_,l[h+2]=.4+R*Math.max(0,C-E*Math.min(1,b/.08))}return{...i,positions:l}}function py(){const i=Array.from({length:10},(s,r)=>{const o=-Math.PI/2+r*Math.PI/5,a=r%2?195:330;return{x:500+Math.cos(o)*a,y:500+Math.sin(o)*a}}),e=(s,r,o)=>({x:s.x+(r.x-s.x)*o,y:s.y+(r.y-s.y)*o}),t=e(i[0],i[9],.34);let n=`M ${t.x} ${t.y}`;for(let s=0;s<10;s++){const r=i[s],o=i[(s+1)%10],a=e(r,o,.34),l=e(o,r,.34);n+=` Q ${r.x} ${r.y} ${a.x} ${a.y} L ${l.x} ${l.y}`}return n+" Z"}const Lh={triangle:"M 474 205 Q 500 160 526 205 L 774 635 Q 800 680 748 680 L 252 680 Q 200 680 226 635 Z",square:"M 295 180 L 705 180 Q 820 180 820 295 L 820 705 Q 820 820 705 820 L 295 820 Q 180 820 180 705 L 180 295 Q 180 180 295 180 Z",heart:"M 500 340 C 415 185 180 220 180 390 C 180 535 350 665 480 765 Q 500 781 520 765 C 650 665 820 535 820 390 C 820 220 585 185 500 340 Z",star:py(),spark:my()};function my(){const i=Array.from({length:16},(s,r)=>{const o=r*Math.PI/8-Math.PI/2,a=r%2?222:360;return{x:500+Math.cos(o)*a,y:500+Math.sin(o)*a}}),e=(s,r,o)=>({x:s.x+(r.x-s.x)*o,y:s.y+(r.y-s.y)*o}),t=e(i[0],i[15],.12);let n=`M ${t.x} ${t.y}`;for(let s=0;s<16;s++){const r=i[s],o=i[(s+1)%16],a=s%2?.22:.12,l=e(r,o,a),c=e(o,r,(s+1)%2?.22:.12);n+=` Q ${r.x} ${r.y} ${l.x} ${l.y} L ${c.x} ${c.y}`}return n+" Z"}function gy(i=192,e=20){const t=[0,0,.798],n=[],s=[];for(let o=1;o<e;o++){const a=o/e*Math.PI;for(let l=0;l<i;l++){const c=l/i*Math.PI*2;t.push(.95*Math.sin(a)*Math.cos(c),.95*Math.sin(a)*Math.sin(c),.4+.398*Math.cos(a)),o===e/2&&s.push(1+(o-1)*i+l)}}const r=t.length/3;t.push(0,0,.002);for(let o=0;o<i;o++){const a=(o+1)%i;n.push(0,1+o,1+a);for(let c=0;c<e-2;c++){const u=1+c*i+o,h=1+c*i+a,f=u+i,d=h+i;n.push(u,f,h,h,f,d)}const l=1+(e-2)*i;n.push(r,l+a,l+o)}return{positions:t,triangles:n,rim:s}}function xy(i){if(i.noSeam)return i;const e=i.positions.slice();for(let s=0;s<e.length;s+=3){const r=e[s],o=e[s+1],a=e[s+2]-.4,l=Math.exp(-(((r+.26)/.48)**2+((o-.28)/.42)**2)),c=Math.exp(-(((r-.24)/.52)**2+((o+.3)/.4)**2));e[s+2]=.4+a*(1.02-.115*l-.088*c),e[s]*=1+.016*Math.exp(-(((o+.38)/.45)**2))}const t=Array.from({length:e.length/3},()=>new Set),n=new Set(i.rim);for(let s=0;s<i.triangles.length;s+=3)for(let r=0;r<3;r++){const o=i.triangles[s+r],a=i.triangles[s+(r+1)%3];t[o].add(a),t[a].add(o)}for(let s=0;s<20;s++){const r=e.slice();for(let o=0;o<t.length;o++)if(!n.has(o)&&t[o].size){let a=0;for(const l of t[o])a+=r[l*3+2];a/=t[o].size,e[o*3+2]=r[o*3+2]*.55+a*.45}}return{...i,positions:e}}function yy(i){const e=i.attributes.position,t=i.attributes.normal;if(e.count<1800)return i;i.computeBoundingBox();const n=i.boundingBox.getSize(new B),s=Math.max(n.x,n.y,n.z)/32,r=new Map,o=[],a=new Uint32Array(e.count);for(let f=0;f<e.count;f++){const d=[e.getX(f),e.getY(f),e.getZ(f)].map(m=>Math.round(m/s)).join(",");let g=r.get(d);g===void 0&&(g=o.length,r.set(d,g),o.push({p:new B,n:new B,count:0}));const y=o[g];y.p.add(new B().fromBufferAttribute(e,f)),t&&y.n.add(new B().fromBufferAttribute(t,f)),y.count++,a[f]=g}const l=[],c=new Set,u=i.index?.count||e.count;for(let f=0;f<u;f+=3){const d=[0,1,2].map(y=>a[i.index?i.index.getX(f+y):f+y]);if(new Set(d).size<3)continue;const g=d.slice().sort((y,m)=>y-m).join(",");c.has(g)||(c.add(g),l.push(...d))}const h=new bt;return h.setAttribute("position",new ct(o.flatMap(f=>f.p.divideScalar(f.count).toArray()),3)),h.setAttribute("normal",new ct(o.flatMap(f=>f.n.normalize().toArray()),3)),h.setIndex(l),h.computeBoundingBox(),h.computeBoundingSphere(),h}class _y extends lo{constructor(){super();const e=new gs;e.deleteAttribute("uv");const t=new Yn({side:kt}),n=new Yn,s=new Lu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new tt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new gu(e,n,6),a=new dt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new tt(e,$i(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new tt(e,$i(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new tt(e,$i(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new tt(e,$i(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new tt(e,$i(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new tt(e,$i(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function $i(i){return new Ep({color:0,emissive:16777215,emissiveIntensity:i})}function Dh(i,e){if(e===Uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ja||e===su){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ja)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class vy extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ty(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new zy(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=zs.extractUrlBase(e);o=zs.resolveURL(c,this.path)}else o=zs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Bl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vu){try{o[Je.KHR_BINARY_GLTF]=new ky(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Qy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new by;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new Hy(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new Vy;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new Gy;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function My(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Sy{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new nr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Lu(u),c.distance=h;break;case"spot":c=new Vp(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),bn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class by{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Gn}extendParams(e,t,n){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class Ey{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ty{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(a,a)}return Promise.all(r)}}class wy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ay{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Ry{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Cy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Py{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ht),Promise.all(r)}}class Iy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ly{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class Dy{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ny{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Uy{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Fy{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Oy{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class By{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class zy{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==sn.TRIANGLES&&c.mode!==sn.TRIANGLE_STRIP&&c.mode!==sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const y=new Ye,m=new B,p=new ui,v=new B(1,1,1),x=new gu(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,y.compose(m,p,v));for(const _ in l)if(_==="_COLOR_0"){const b=l[_];x.instanceColor=new $a(b.array,b.itemSize,b.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Vu="glTF",Is=12,Nh={JSON:1313821514,BIN:5130562};class ky{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Is,r=new DataView(e,Is);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Nh.JSON){const c=new Uint8Array(e,Is+o,a);this.content=n.decode(c)}else if(l===Nh.BIN){const c=Is+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Hy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ll[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ll[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ts[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const y=d.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(d)},a,c,Ht,f)})})}}class Vy{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Gy{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Gu extends or{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,y=g-c,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+h;for(let _=0;_!==a;_++){const b=o[y+_+a],E=o[y+_+l]*u,R=o[g+_+a],C=o[g+_]*u;r[_]=v*b+x*E+m*R+p*C}return r}}const Wy=new ui;class Xy extends Gu{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Wy.fromArray(r).normalize().toArray(r),r}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uh={9728:Pt,9729:qt,9984:$h,9985:Gr,9986:Ls,9987:Tn},Fh={33071:ri,33648:Zr,10497:rs},ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:Ks,STEP:js},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Yn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),i.DefaultMaterial}function Si(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Ky(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $y(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ra(t.attributes):e=i.indices+":"+ra(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ra(i.targets[n]);return e}function ra(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Zy=new Ye;class Qy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new My,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new kp(this.options.manager):this.textureLoader=new Xp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Si(r,a,s),bn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(zs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=ia[s.type],a=ts[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Mt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ia[s.type],c=ts[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let y,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(v);x||(y=new c(a,p*d,s.count*d/u),x=new Nd(y,d/u),t.cache.add(v,x)),m=new Cl(x,l,f%d/u,g)}else a===null?y=new c(s.count*l):y=new c(a,f,s.count*l),m=new Mt(y,l,g);if(s.sparse!==void 0){const p=ia.SCALAR,v=ts[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,b=new v(o[1],x,s.sparse.count*p),E=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=b.length;R<C;R++){const S=b[R];if(m.setX(S,E[R*l]),l>=2&&m.setY(S,E[R*l+1]),l>=3&&m.setZ(S,E[R*l+2]),l>=4&&m.setW(S,E[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Uh[f.magFilter]||qt,u.minFilter=Uh[f.minFilter]||Tn,u.wrapS=Fh[f.wrapS]||rs,u.wrapT=Fh[f.wrapT]||rs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Pt&&u.minFilter!==qt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){const m=new Tt(y);m.needsUpdate=!0,f(m)}),t.load(zs.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),bn(h,o),h.userData.mimeType=o.mimeType||Jy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yu,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new xu,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Yn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ht),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);const u=r.alphaMode||sa.OPAQUE;if(u===sa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Gn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Gn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Gn){const h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],Ht)}return r.emissiveTexture!==void 0&&o!==Gn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),bn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Si(s,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Oh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=$y(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Oh(new bt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Yy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const y=u[d],m=o[d];let p;const v=c[d];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Fd(y,v):new tt(y,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===sn.TRIANGLE_STRIP?p.geometry=Dh(p.geometry,su):m.mode===sn.TRIANGLE_FAN&&(p.geometry=Dh(p.geometry,ja));else if(m.mode===sn.LINES)p=new Vd(y,v);else if(m.mode===sn.LINE_STRIP)p=new Ll(y,v);else if(m.mode===sn.LINE_LOOP)p=new Gd(y,v);else if(m.mode===sn.POINTS)p=new Wd(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ky(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bn(p,r),m.extensions&&Si(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Si(s,h[0],r),h[0];const f=new Dt;r.extensions&&Si(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt($s.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new _s(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ye;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pl(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],y=d.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let x=0,_=f.length;x<_;x++){const b=f[x],E=d[x],R=g[x],C=y[x],S=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,E,R,C,S);if(M)for(let D=0;D<M.length;D++)p.push(M[D])}const v=new Dp(r,void 0,p);return bn(v,s),v})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Zy)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new pu:c.length>1?u=new Dt:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),bn(u,r),r.extensions&&Si(n,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Dt;n.name&&(r.name=s.createUniqueName(n.name)),bn(r,n),n.extensions&&Si(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof yn||f instanceof Tt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ei[r.path]===ei.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ei[r.path]){case ei.weights:c=cs;break;case ei.rotation:c=hs;break;case ei.translation:case ei.scale:c=us;break;default:n.itemSize===1?c=cs:c=us;break}const u=s.interpolation!==void 0?qy[s.interpolation]:Ks,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ei[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=cl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof hs?Xy:Gu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function e_(i,e,t){const n=e.attributes,s=new In;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=cl(ts[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const y=cl(ts[f.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new _n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Oh(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ll[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==Ht&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),bn(i,e),e_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jy(i,e.targets,t):i})}const Bh={cat:[[.9,.19,.31],[2.23,.19,.31]],rabbit:[[1.1,.16,.65],[1.98,.17,.53]],bear:[[.82,.3,.24],[2.31,.3,.24]],devil:[[1,.13,.46],[2.14,.13,.46]],sprout:[[1.32,.28,.37],[1.98,.21,.25]],bat:[[.1,.19,.28],[.54,.13,.18],[2.6,.13,.18],[3.04,.19,.28]],seal:[[3.85,.22,.2],[5.38,.22,.28]],ghost:[[4.05,.17,.22],[4.72,.18,.29],[5.4,.17,.22]],axolotl:[[.3,.13,.23],[.62,.13,.27],[.92,.13,.23],[2.22,.13,.23],[2.54,.13,.27],[2.84,.13,.23]],droop:[[1.04,.29,.47],[2.23,.36,.19]],fin:[[.18,.25,.23],[1.63,.16,.27],[4.9,.32,.27]],crown:[[1.05,.14,.23],[1.57,.15,.36],[2.09,.14,.23]]};function t_(i){const e=i.positions.length/3,t=Array.from({length:e},(u,h)=>[h,h]),n=Array.from({length:e},()=>new Set),s=new Map,r=[];for(let u=0;u<i.triangles.length;u+=3){const h=i.triangles.slice(u,u+3);for(let f=0;f<3;f++){const d=h[f],g=h[(f+1)%3],y=h[(f+2)%3],m=[d,g].sort((p,v)=>p-v).join(",");n[d].add(g),n[g].add(d),s.has(m)||s.set(m,{a:d,b:g,op:[]}),s.get(m).op.push(y)}}const o=n.map((u,h)=>{const f=u.size,d=f===3?3/16:3/(8*f);return[[h,1-f*d],...[...u].map(g=>[g,d])]});for(const u of s.values())u.id=t.length,t.push([u.a,u.b]),o.push([[u.a,.375],[u.b,.375],...u.op.map(h=>[h,.125])]);const a=(u,h)=>s.get([u,h].sort((f,d)=>f-d).join(",")).id;for(let u=0;u<i.triangles.length;u+=3){const[h,f,d]=i.triangles.slice(u,u+3),g=a(h,f),y=a(f,d),m=a(d,h);r.push(h,g,m,g,f,y,m,y,d,g,y,m)}const l=[];for(let u=0;u<i.rim.length;u++){const h=i.rim[u],f=i.rim[(u+1)%i.rim.length];if(l.push(h),!n[h].has(f)){const d=[...n[h]].filter(g=>n[f].has(g));if(!d.length)throw Error("Disconnected seam boundary");d.sort((g,y)=>Math.abs(i.positions[g*3+2]-.45)-Math.abs(i.positions[y*3+2]-.45)),l.push(d[0])}}const c=l.flatMap((u,h)=>[u,a(u,l[(h+1)%l.length])]);return{links:t,stencils:o,triangles:r,rim:c}}function Wu(i,e){const t=[0,0,0];for(const[n,s]of e)for(let r=0;r<3;r++)t[r]+=i[n*3+r]*s;return t}function n_(i,e="round"){const t=i.positions.slice();for(let n=0;n<t.length;n+=3){const s=i.positions[n],r=i.positions[n+1],o=Math.atan2(r,s);let a=1,l=1,c=1;if(Bh[e]){const u=Math.hypot(s,r)/.95;let h=.82;for(const[f,d,g]of Bh[e]){const y=Math.atan2(Math.sin(o-f),Math.cos(o-f));h+=g*Math.exp(-((y/d)**2))*Math.min(1,u*u)}a=h,l=h,c=.91}if(e==="horn"){const u=(d,g)=>Math.exp(-((Math.atan2(Math.sin(o-d),Math.cos(o-d))/g)**2)),h=Math.hypot(s,r)/.95,f=.84+(.49*u(1.48,.145)+.19*u(.72,.22)+.15*u(2.4,.25))*Math.min(1,h*h);a=f,l=f,c=.92}if(e==="bolster"&&(a=.6*(.92+.12*Math.exp(-(((r-.48)/.3)**2))),l=1.22,c=.88),e==="buddy"){const u=.74+.055*Math.cos(8*o+.2);a=u,l=u,c=.88}if(e==="pal"){const u=(d,g)=>Math.exp(-((Math.atan2(Math.sin(o-d),Math.cos(o-d))/g)**2)),h=Math.hypot(s,r)/.95,f=.84+(.4*u(1.02,.27)+.15*u(4.12,.29)+.16*u(5.23,.29)-.09*u(4.68,.22))*Math.min(1,h*h);a=f,l=f,c=.9}if(e==="oval"&&(a=.77,l=1.14),e==="bean"&&(a=.92,l=.88),e==="twin"&&(a=1-.3*Math.exp(-((r/.23)**2)),l=1.1,c=1-.12*Math.exp(-((r/.23)**2))),e==="cloud"){const u=.9+.1*Math.cos(3*o+.4);a=1.06*u,l=.85*u}if(e==="flower"){const u=.82+.18*Math.cos(5*o);a=u,l=u,c=.93}t[n]=s*a+(e==="bolster"?.18*((r/.95)**2-.4):0),t[n+1]=r*l+(e==="bean"?.16*(s/.95)**2:0),t[n+2]=.008+(i.positions[n+2]-.008)*c}return{...i,positions:t}}function i_(i,e,t=.76){const n=n_(i,e),s=t>=.9,r=t<.6;for(let o=0;o<n.positions.length;o+=3){const a=n.positions[o],l=n.positions[o+1],c=n.positions[o+2];if(s)n.positions[o]=a*(.86-.12*Math.tanh(l*2)),n.positions[o+1]=l*1.27,n.positions[o+2]=.008+(c-.008)*(1.02-.1*Math.tanh(l*2));else if(n.positions[o]=a*(1+.065*Math.exp(-(((l-.15)/.5)**2))),n.positions[o+1]=l*(r?.77:.88),n.positions[o+2]=.008+(c-.008)*(r?1.04:.98),e==="pal"){const u=Math.max(0,(l-.58)/.6);n.positions[o]-=u*.09,n.positions[o+1]+=u*.18,n.positions[o+2]-=u*.055}}return n}function s_(i,e){if(e==="coil")return r_();if(e!=="burst"&&e!=="petal")return i_(i,e,.72);const t={...i,positions:i.positions.slice()},n=e==="burst"?7:6,s=Array.from({length:256},(r,o)=>{const a=o/256*Math.PI*2,l=Math.pow((1+Math.cos(n*(a-Math.PI/2)))/2,e==="burst"?.7:.48),c=.44+(e==="burst"?.77:.68)*l;return[Math.cos(a)*c*.95,Math.sin(a)*c*.95]});for(let r=0;r<t.positions.length;r+=3){const o=i.positions[r],a=i.positions[r+1],l=i.positions[r+2],c=Math.atan2(a,o),u=Math.hypot(o,a)/.95,h=Math.pow((1+Math.cos(n*(c-Math.PI/2)))/2,e==="burst"?.7:.48),d=.74+(.44+(e==="burst"?.77:.68)*h-.74)*Math.min(1,u*u),g=o*d,y=a*d;let m=1/0;for(let v=0;v<s.length;v++){const x=s[v],_=s[(v+1)%s.length],b=_[0]-x[0],E=_[1]-x[1],R=Math.max(0,Math.min(1,((g-x[0])*b+(y-x[1])*E)/(b*b+E*E)));m=Math.min(m,Math.hypot(g-x[0]-R*b,y-x[1]-R*E))}const p=.34*Math.sqrt(1-Math.exp(-m/.14));t.positions[r]=g,t.positions[r+1]=y,t.positions[r+2]=.4+Math.sign(l-.4)*p}return t}function r_(){const i=[];for(let l=0;l<=120;l++){const c=l/120,u=Math.PI+c*Math.PI*4.5;i.push(new B(.7*Math.cos(u),.93-c*1.86,.69+.43*Math.sin(u)))}const e=new Ul(i),t=new ho(e,144,.205,12,!1),n=t.attributes.position,s=[],r=[],o=145,a=12;for(let l=0;l<o;l++)for(let c=0;c<a;c++){const u=l*13+c;s.push(n.getX(u),n.getY(u),n.getZ(u))}for(let l=0;l<o-1;l++)for(let c=0;c<a;c++){const u=l*a+c,h=(l+1)*a+c,f=l*a+(c+1)%a,d=(l+1)*a+(c+1)%a;r.push(u,f,h,h,f,d)}for(const l of[0,o-1]){const c=e.getPointAt(l===0?0:1),u=e.getTangentAt(l===0?0:1).multiplyScalar(l===0?-.16:.16),h=s.length/3;c.add(u),s.push(c.x,c.y,c.z);for(let f=0;f<a;f++){const d=l*a+f,g=l*a+(f+1)%a;l===0?r.push(h,g,d):r.push(h,d,g)}}for(let l=0;l<r.length;l+=3)[r[l+1],r[l+2]]=[r[l+2],r[l+1]];return t.dispose(),{positions:s,triangles:r,rim:Array.from({length:a},(l,c)=>c),noSeam:!0,faceAnchor:{x:-.68,y:.91}}}class o_ extends tt{constructor(e,t,n=!1,s=!1,r=1e4){const o=new bt;super(o,t),this.isMarchingCubes=!0;const a=this,l=new Float32Array(36),c=new Float32Array(36),u=new Float32Array(36);this.enableUvs=n,this.enableColors=s,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const x=r*3;this.positionArray=new Float32Array(x*3);const _=new Mt(this.positionArray,3);_.setUsage(cr),o.setAttribute("position",_),this.normalArray=new Float32Array(x*3);const b=new Mt(this.normalArray,3);if(b.setUsage(cr),o.setAttribute("normal",b),this.enableUvs){this.uvArray=new Float32Array(x*2);const E=new Mt(this.uvArray,2);E.setUsage(cr),o.setAttribute("uv",E)}if(this.enableColors){this.colorArray=new Float32Array(x*3);const E=new Mt(this.colorArray,3);E.setUsage(cr),o.setAttribute("color",E)}o.boundingSphere=new _n(new B,1)};function h(v,x,_){return v+(x-v)*_}function f(v,x,_,b,E,R,C,S,M,D){const F=(_-C)/(S-C),W=a.normal_cache;l[x+0]=b+F*a.delta,l[x+1]=E,l[x+2]=R,c[x+0]=h(W[v+0],W[v+3],F),c[x+1]=h(W[v+1],W[v+4],F),c[x+2]=h(W[v+2],W[v+5],F),u[x+0]=h(a.palette[M*3+0],a.palette[D*3+0],F),u[x+1]=h(a.palette[M*3+1],a.palette[D*3+1],F),u[x+2]=h(a.palette[M*3+2],a.palette[D*3+2],F)}function d(v,x,_,b,E,R,C,S,M,D){const F=(_-C)/(S-C),W=a.normal_cache;l[x+0]=b,l[x+1]=E+F*a.delta,l[x+2]=R;const K=v+a.yd*3;c[x+0]=h(W[v+0],W[K+0],F),c[x+1]=h(W[v+1],W[K+1],F),c[x+2]=h(W[v+2],W[K+2],F),u[x+0]=h(a.palette[M*3+0],a.palette[D*3+0],F),u[x+1]=h(a.palette[M*3+1],a.palette[D*3+1],F),u[x+2]=h(a.palette[M*3+2],a.palette[D*3+2],F)}function g(v,x,_,b,E,R,C,S,M,D){const F=(_-C)/(S-C),W=a.normal_cache;l[x+0]=b,l[x+1]=E,l[x+2]=R+F*a.delta;const K=v+a.zd*3;c[x+0]=h(W[v+0],W[K+0],F),c[x+1]=h(W[v+1],W[K+1],F),c[x+2]=h(W[v+2],W[K+2],F),u[x+0]=h(a.palette[M*3+0],a.palette[D*3+0],F),u[x+1]=h(a.palette[M*3+1],a.palette[D*3+1],F),u[x+2]=h(a.palette[M*3+2],a.palette[D*3+2],F)}function y(v){const x=v*3;a.normal_cache[x]===0&&(a.normal_cache[x+0]=a.field[v-1]-a.field[v+1],a.normal_cache[x+1]=a.field[v-a.yd]-a.field[v+a.yd],a.normal_cache[x+2]=a.field[v-a.zd]-a.field[v+a.zd])}function m(v,x,_,b,E){const R=b+1,C=b+a.yd,S=b+a.zd,M=R+a.yd,D=R+a.zd,F=b+a.yd+a.zd,W=R+a.yd+a.zd;let K=0;const j=a.field[b],H=a.field[R],O=a.field[C],U=a.field[M],Z=a.field[S],G=a.field[D],ce=a.field[F],me=a.field[W];j<E&&(K|=1),H<E&&(K|=2),O<E&&(K|=8),U<E&&(K|=4),Z<E&&(K|=16),G<E&&(K|=32),ce<E&&(K|=128),me<E&&(K|=64);const xe=a_[K];if(xe===0)return 0;const Y=a.delta,k=v+Y,T=x+Y,A=_+Y;xe&1&&(y(b),y(R),f(b*3,0,E,v,x,_,j,H,b,R)),xe&2&&(y(R),y(M),d(R*3,3,E,k,x,_,H,U,R,M)),xe&4&&(y(C),y(M),f(C*3,6,E,v,T,_,O,U,C,M)),xe&8&&(y(b),y(C),d(b*3,9,E,v,x,_,j,O,b,C)),xe&16&&(y(S),y(D),f(S*3,12,E,v,x,A,Z,G,S,D)),xe&32&&(y(D),y(W),d(D*3,15,E,k,x,A,G,me,D,W)),xe&64&&(y(F),y(W),f(F*3,18,E,v,T,A,ce,me,F,W)),xe&128&&(y(S),y(F),d(S*3,21,E,v,x,A,Z,ce,S,F)),xe&256&&(y(b),y(S),g(b*3,24,E,v,x,_,j,Z,b,S)),xe&512&&(y(R),y(D),g(R*3,27,E,k,x,_,H,G,R,D)),xe&1024&&(y(M),y(W),g(M*3,30,E,k,T,_,U,me,M,W)),xe&2048&&(y(C),y(F),g(C*3,33,E,v,T,_,O,ce,C,F)),K<<=4;let q,ie,V,re=0,fe=0;for(;Vr[K+fe]!=-1;)q=K+fe,ie=q+1,V=q+2,p(l,c,u,3*Vr[q],3*Vr[ie],3*Vr[V]),fe+=3,re++;return re}function p(v,x,_,b,E,R){const C=a.count*3;if(a.positionArray[C+0]=v[b],a.positionArray[C+1]=v[b+1],a.positionArray[C+2]=v[b+2],a.positionArray[C+3]=v[E],a.positionArray[C+4]=v[E+1],a.positionArray[C+5]=v[E+2],a.positionArray[C+6]=v[R],a.positionArray[C+7]=v[R+1],a.positionArray[C+8]=v[R+2],a.material.flatShading===!0){const S=(x[b+0]+x[E+0]+x[R+0])/3,M=(x[b+1]+x[E+1]+x[R+1])/3,D=(x[b+2]+x[E+2]+x[R+2])/3;a.normalArray[C+0]=S,a.normalArray[C+1]=M,a.normalArray[C+2]=D,a.normalArray[C+3]=S,a.normalArray[C+4]=M,a.normalArray[C+5]=D,a.normalArray[C+6]=S,a.normalArray[C+7]=M,a.normalArray[C+8]=D}else a.normalArray[C+0]=x[b+0],a.normalArray[C+1]=x[b+1],a.normalArray[C+2]=x[b+2],a.normalArray[C+3]=x[E+0],a.normalArray[C+4]=x[E+1],a.normalArray[C+5]=x[E+2],a.normalArray[C+6]=x[R+0],a.normalArray[C+7]=x[R+1],a.normalArray[C+8]=x[R+2];if(a.enableUvs){const S=a.count*2;a.uvArray[S+0]=v[b+0],a.uvArray[S+1]=v[b+2],a.uvArray[S+2]=v[E+0],a.uvArray[S+3]=v[E+2],a.uvArray[S+4]=v[R+0],a.uvArray[S+5]=v[R+2]}a.enableColors&&(a.colorArray[C+0]=_[b+0],a.colorArray[C+1]=_[b+1],a.colorArray[C+2]=_[b+2],a.colorArray[C+3]=_[E+0],a.colorArray[C+4]=_[E+1],a.colorArray[C+5]=_[E+2],a.colorArray[C+6]=_[R+0],a.colorArray[C+7]=_[R+1],a.colorArray[C+8]=_[R+2]),a.count+=3}this.addBall=function(v,x,_,b,E,R){const C=Math.sign(b);b=Math.abs(b);const S=R!=null;let M=new ze(v,x,_);if(S)try{M=R instanceof ze?R:Array.isArray(R)?new ze(Math.min(Math.abs(R[0]),1),Math.min(Math.abs(R[1]),1),Math.min(Math.abs(R[2]),1)):new ze(R)}catch{M=new ze(v,x,_)}const D=this.size*Math.sqrt(b/E),F=_*this.size,W=x*this.size,K=v*this.size;let j=Math.floor(F-D);j<1&&(j=1);let H=Math.floor(F+D);H>this.size-1&&(H=this.size-1);let O=Math.floor(W-D);O<1&&(O=1);let U=Math.floor(W+D);U>this.size-1&&(U=this.size-1);let Z=Math.floor(K-D);Z<1&&(Z=1);let G=Math.floor(K+D);G>this.size-1&&(G=this.size-1);let ce,me,xe,Y,k,T,A,q,ie,V,re;for(xe=j;xe<H;xe++)for(k=this.size2*xe,q=xe/this.size-_,ie=q*q,me=O;me<U;me++)for(Y=k+this.size*me,A=me/this.size-x,V=A*A,ce=Z;ce<G;ce++)if(T=ce/this.size-v,re=b/(1e-6+T*T+V+ie)-E,re>0){this.field[Y+ce]+=re*C;const fe=Math.sqrt((ce-K)*(ce-K)+(me-W)*(me-W)+(xe-F)*(xe-F))/D,I=1-fe*fe*fe*(fe*(fe*6-15)+10);this.palette[(Y+ce)*3+0]+=M.r*I,this.palette[(Y+ce)*3+1]+=M.g*I,this.palette[(Y+ce)*3+2]+=M.b*I}},this.addPlaneX=function(v,x){const _=this.size,b=this.yd,E=this.zd,R=this.field;let C,S,M,D,F,W,K,j=_*Math.sqrt(v/x);for(j>_&&(j=_),C=0;C<j;C++)if(W=C/_,D=W*W,F=v/(1e-4+D)-x,F>0)for(S=0;S<_;S++)for(K=C+S*b,M=0;M<_;M++)R[E*M+K]+=F},this.addPlaneY=function(v,x){const _=this.size,b=this.yd,E=this.zd,R=this.field;let C,S,M,D,F,W,K,j,H=_*Math.sqrt(v/x);for(H>_&&(H=_),S=0;S<H;S++)if(W=S/_,D=W*W,F=v/(1e-4+D)-x,F>0)for(K=S*b,C=0;C<_;C++)for(j=K+C,M=0;M<_;M++)R[E*M+j]+=F},this.addPlaneZ=function(v,x){const _=this.size,b=this.yd,E=this.zd,R=this.field;let C,S,M,D,F,W,K,j,H=_*Math.sqrt(v/x);for(H>_&&(H=_),M=0;M<H;M++)if(W=M/_,D=W*W,F=v/(1e-4+D)-x,F>0)for(K=E*M,S=0;S<_;S++)for(j=K+S*b,C=0;C<_;C++)R[j+C]+=F},this.setCell=function(v,x,_,b){const E=this.size2*_+this.size*x+v;this.field[E]=b},this.getCell=function(v,x,_){const b=this.size2*_+this.size*x+v;return this.field[b]},this.blur=function(v=1){const x=this.field,_=x.slice(),b=this.size,E=this.size2;for(let R=0;R<b;R++)for(let C=0;C<b;C++)for(let S=0;S<b;S++){const M=E*S+b*C+R;let D=_[M],F=1;for(let W=-1;W<=1;W+=2){const K=W+R;if(!(K<0||K>=b))for(let j=-1;j<=1;j+=2){const H=j+C;if(!(H<0||H>=b))for(let O=-1;O<=1;O+=2){const U=O+S;if(U<0||U>=b)continue;const Z=E*U+b*H+K,G=_[Z];F++,D+=v*(G-D)/F}}}x[M]=D}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let x=1;x<v;x++){const _=this.size2*x,b=(x-this.halfsize)/this.halfsize;for(let E=1;E<v;E++){const R=_+this.size*E,C=(E-this.halfsize)/this.halfsize;for(let S=1;S<v;S++){const M=(S-this.halfsize)/this.halfsize,D=R+S;m(M,C,b,D,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const a_=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Vr=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),zh=["psst… over here!","a tiny tap? pretty please.","I have something to show you.","pick me! I brought a project.","hellooo, curious human.","tap for a little peek.","my pockets are full of work.","look what I helped make!","a little work, a lot of heart.","got a second? got a project.","come closer. tiny surprise.","your next little peek is here."];function l_(i,e=()=>{},t=()=>{}){const n=new Dt;n.visible=!1,i.add(n);const s=new Gn({color:"#fffdf8",toneMapped:!1}),r={value:0};s.onBeforeCompile=O=>{O.uniforms.cloudLightness=r,O.vertexShader=O.vertexShader.replace("#include <common>",`#include <common>
varying vec3 balloonNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
balloonNormal=normalize(normalMatrix*normal);`),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 balloonNormal;
uniform float cloudLightness;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(mix(vec3(.76,.75,.72),vec3(.86,.855,.845),cloudLightness),vec3(1.0),smoothstep(-.8,.65,balloonNormal.y));`)};const o=document.createElement("div");o.id="speech-caption",o.hidden=!0,o.setAttribute("role","status"),document.body.append(o);const a=new Map;let l=null,c=null;function u(O,U,Z=1,G=.48){const ce=[O,U,Z.toFixed(2),G.toFixed(2)].join(":");if(a.has(ce))return a.get(ce);const me=38,xe=1.4,Y=new o_(me,s,!1,!1,18e3);Y.isolation=0;const k=G*.68,T=k/Z,A=Array.from({length:O||6},(re,fe)=>{const I=(fe+(U===2?.35:0))/(O||6)*Math.PI*2;return{x:Math.cos(I)*(1-T*.7),y:Math.sin(I)*.55,r:1+.09*Math.sin(fe*2.1+U)}}),q=(re,fe)=>{const I=Math.max(.24-Math.abs(re-fe),0)/.24;return Math.max(re,fe)+I*I*.06};for(let re=0;re<me;re++)for(let fe=0;fe<me;fe++)for(let I=0;I<me;I++){const X=(I/me*2-1)*xe,$=(fe/me*2-1)*xe,ee=(re/me*2-1)*xe;let Q=1-(X/.88)**2-($/.69)**2-(ee/.82)**2;for(const z of A)Q=q(Q,1-((X-z.x)/(T*z.r))**2-(($-z.y)/(.68*z.r))**2-(ee/(.84*z.r))**2);Y.field[re*me*me+fe*me+I]=Q}Y.update();const ie=new bt,V=Y.geometry.drawRange.count;for(const re of["position","normal"])ie.setAttribute(re,new ct(Y.geometry.attributes[re].array.slice(0,V*3),3));if(ie.scale(xe,xe,xe),ie.computeBoundingSphere(),ie.computeBoundingBox(),Y.geometry.dispose(),a.size>=16){const re=a.keys().next().value;a.get(re).dispose(),a.delete(re)}return a.set(ce,ie),ie}const h=new tt(u(0,0),s);h.scale.set(1,.48,.21),n.add(h);const f=new Ci(1,24,16),d=new tt(f,s);d.scale.set(.11,.21,.1),d.rotation.z=-.42,d.position.set(-.36,-.45,-.02),n.add(d);const g=new Dt;for(const[O,U,Z]of[[-.36,-.53,.095],[-.48,-.74,.055]]){const G=new tt(f,s);G.position.set(O,U,-.02),G.scale.setScalar(Z),g.add(G)}n.add(g);const y=document.createElement("canvas").getContext("2d");let p=new URLSearchParams(location.search).get("qa")==="speech"?4:6+Math.random()*3,v=null,x=0,_=-1,b=-1,E=0,R=0,C=0,S=!1,M=!1,D=1,F=.48,W=null,K=1;function j(){t(),v?.face.speak(0),v&&(v.speaking=!1),v=null,n.visible=!1,l=null,o.hidden=!0,document.body.dataset.speech="",S=!1,M=!1}function H(O,U,Z,G=null,ce=!1){if(!O?.face)return;v?.face.speak(0),v&&(v.speaking=!1),v=O,v.speaking=!0,x=U,C=Math.sin(O.phase*2.7)*.12,M=ce,l=null,K=O.face.mouthPosition().x>0?-1:1;let me;do me=Math.floor(Math.random()*zh.length);while(me===_);_=me;const xe=1+(b===1?1:0);b=xe,d.visible=xe===0,g.visible=xe!==0,s.color.set(v.collectionSlot?"#ffffff":"#fffdf8"),r.value=v.collectionSlot?1:0;const Y=G||zh[me];y.font="400 76px fatfrank, sans-serif";const k=y.measureText(Y).width,T=Math.max(400,Math.min(800,Math.sqrt(k*470))),A=Y.split(" "),q=[""];for(const fe of A){const I=q.length-1,X=q[I]?q[I]+" "+fe:fe;y.measureText(X).width>T&&q[I]?q.push(fe):q[I]=X}o.textContent=q.join(`
`),o.hidden=!1;const ie=Math.max(...q.map(fe=>y.measureText(fe).width)),V=.0022;D=Math.max(.66,(ie+260)*V/2),F=Math.max(.38,(q.length*90+200)*V/2);const re=xe?Math.max(5,Math.min(9,3+Math.ceil(ie/260)+q.length-1)):0;h.geometry=u(re,xe,D,F),h.scale.set(D,F,.34),document.body.dataset.bubbleShape=xe===0?"oval":xe===1?"thought-cloud":"speech-cloud",document.body.dataset.bubbleLobes=String(re),document.body.dataset.bubbleLines=String(q.length),c=Hu(Y),e(O,Y,c),E=Z?1:0,R=0,n.visible=!0,document.body.dataset.speech=Y,p=U+14+Math.random()*10}return{clear:j,say:H,bounds(){return l},invitedActor(O){return!M&&v&&n.visible&&O.intersectObjects(n.children,!0).length?v:null},hit(O){return n.visible&&O.intersectObjects(n.children,!0).length>0},update(O,U,Z,G,ce,me){if(!v&&O>p&&!me){const _e=Z.filter(Re=>Re.face&&Re!==W&&Math.abs(Re.px)<G.right*.72&&Math.abs(Re.py)<G.top*.65);_e.length?(W=_e[Math.floor(Math.random()*_e.length)],H(W,O,ce)):p=O+5}if(!v)return;S&&(x+=U);const xe=O-x,Y=M||xe<4.2?1:0;ce?E=Y:(R+=((Y-E)*110-R*13)*U,E+=R*U);const k=ce?0:oy(c,xe);v.face.speak(k);const T=Math.min(M?.82:.76,(G.right-G.left)/(D*2.4+.7),v.collectionSlot?(innerWidth<620?142:210)*(G.right-G.left)/innerWidth/(D*2.6):1/0),A=D*1.14*T,q=v.face.mouthPosition(),ie=K;if(n.position.set($s.clamp(q.x+ie*((D*1.14+.6)*T),-G.right+A,G.right-A),$s.clamp(q.y+(.1+Math.sin(O*.85+v.phase)*.045)*T,-G.top+F*1.2*T,G.top-F*1.2*T),Math.min(G.position.z-1,Math.max(7,q.z+1))),v.collectionSlot){const _e=v.collectionSlot,Re=v.collectionArrangement,Ie=(G.right-G.left)/innerWidth,ve=A/Ie,we=F*1.4*T/Ie,{x:Ve,y:Be}=Xl(_e,Re.speechAngle,ve*2,we*2,Re.gap);n.position.set(G.left+Ve*Ie,G.top-Be*Ie,10)}n.scale.setScalar(Math.max(.001,E)*T),n.rotation.z=C;const V=n.position.clone().project(G),re=innerWidth/(G.right-G.left)*T;o.style.left=(V.x*.5+.5)*innerWidth+"px",o.style.top=(-V.y*.5+.5)*innerHeight+"px",o.style.fontSize=70*.0022*re+"px",o.style.transform="translate(-50%,-50%) rotate("+-C+"rad) scale("+Math.max(.001,E)+")";const fe=(V.x*.5+.5)*innerWidth,I=(-V.y*.5+.5)*innerHeight,X=h.geometry.boundingBox,$=Math.max(Math.abs(X.min.x),Math.abs(X.max.x))*D,ee=Math.max(Math.abs(X.min.y),Math.abs(X.max.y))*F,Q=($*Math.abs(Math.cos(C))+ee*Math.abs(Math.sin(C)))*re*1.06,z=(ee*Math.abs(Math.cos(C))+$*Math.abs(Math.sin(C)))*re*1.06;l={left:fe-Q,right:fe+Q,top:I-z,bottom:I+z};const L=Math.cos(-C),ae=Math.sin(-C),Ee=(q.x-n.position.x)/T,Ue=(q.y-n.position.y)/T,N=Ee*L-Ue*ae,w=Ee*ae+Ue*L,te=Math.hypot(N,w)||1,oe=N/te,pe=w/te,ue=1/Math.sqrt(oe*oe/(D*D)+pe*pe/(F*F)),Le=Math.max(.08,Math.min(.22,te-ue+.07));d.position.set(oe*(ue+Le*.35),pe*(ue+Le*.35),-.02),d.scale.set(.1,Le*.65,.1),d.rotation.z=Math.atan2(pe,oe)-Math.PI/2,g.children.forEach((_e,Re)=>{const Ie=ue+.13+Re*.17;_e.position.set(oe*Ie,pe*Ie,-.02)}),!M&&xe>4.9&&(j(),p=O+14+Math.random()*10)}}}function c_(i,e,t,n,s){return{x:i.includes("left")?14:Math.max(14,n-e-14),y:i.includes("top")?n<=620?64:14:Math.max(14,s-t-94)}}function h_(i){let e="bottom-right",t=null;const n=()=>innerWidth<=620;function s(){if(n()){const a=t?.id;t=null,i.dataset.dragging="false",a!==void 0&&i.hasPointerCapture(a)&&i.releasePointerCapture(a);for(const l of["left","top","right","bottom"])i.style.removeProperty(l);i.dataset.corner="center",i.tabIndex=-1,i.setAttribute("aria-label","Camera preview");return}i.tabIndex=0,i.setAttribute("aria-label","Camera preview. Drag to a corner. Arrow keys move between corners.");const o=c_(e,i.offsetWidth||180,i.offsetHeight||135,innerWidth,innerHeight);i.style.left=o.x+"px",i.style.top=o.y+"px",i.style.right=i.style.bottom="auto",i.dataset.corner=e}i.addEventListener("pointerdown",o=>{if(n()||o.button!==0)return;o.preventDefault();const a=i.getBoundingClientRect();t={id:o.pointerId,x:o.clientX-a.left,y:o.clientY-a.top},i.dataset.dragging="true",i.setPointerCapture(o.pointerId)}),i.addEventListener("pointermove",o=>{!t||t.id!==o.pointerId||(i.style.left=Math.max(0,Math.min(innerWidth-i.offsetWidth,o.clientX-t.x))+"px",i.style.top=Math.max(0,Math.min(innerHeight-i.offsetHeight,o.clientY-t.y))+"px")});function r(){if(!t)return;const o=i.getBoundingClientRect();e=(o.top+o.height/2<innerHeight/2?"top":"bottom")+"-"+(o.left+o.width/2<innerWidth/2?"left":"right"),t=null,i.dataset.dragging="false",s()}for(const o of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(o,r);i.addEventListener("keydown",o=>{if(n()||!o.key.startsWith("Arrow"))return;o.preventDefault();let[a,l]=e.split("-");o.key==="ArrowUp"&&(a="top"),o.key==="ArrowDown"&&(a="bottom"),o.key==="ArrowLeft"&&(l="left"),o.key==="ArrowRight"&&(l="right"),e=a+"-"+l,s()}),window.addEventListener("resize",s),s()}const u_="modulepreload",f_=function(i){return"/special/balloon-portfolio/"+i},kh={},d_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var o=c;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=c(t.map(u=>{if(u=f_(u),u in kh)return;kh[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":u_,h||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,y)=>{d.addEventListener("load",g),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};async function p_(i,e){const{FaceDetector:t,FilesetResolver:n}=await d_(async()=>{const{FaceDetector:m,FilesetResolver:p}=await import("./vision_bundle-qHAtWFBm.js");return{FaceDetector:m,FilesetResolver:p}},[]),s=await n.forVisionTasks(new URL("./vision/",location.href).href),r=await t.createFromOptions(s,{baseOptions:{modelAssetPath:new URL("./vision/face.tflite",location.href).href,delegate:"CPU"},runningMode:"VIDEO",minDetectionConfidence:.6}),o=document.querySelector("#camera-friends"),a=o.getContext("2d");o.width=360,o.height=270,o.hidden=!1;const l=Array.from({length:9},(m,p)=>({x:25+p%5*70,y:25+Math.floor(p/5)*200,vx:(p%2?1:-1)*(16+p%3*3),vy:(p%3-1)*12+4,angle:p*.4,spin:(p%2?1:-1)*.1,r:20+p%3*3,color:["#f1c444","#ee779c","#43b5b3","#648fda","#ed9260"][p%5],squish:0}));let c=null,u=0,h=0,f=performance.now(),d=0,g=!0;function y(m){if(!g)return;const p=Math.min(.04,(m-f)/1e3);if(f=m,i.readyState>=2&&m-h>150){h=m;try{const v=r.detectForVideo(i,m).detections[0]?.boundingBox;if(v){const x={x:360*(1-(v.originX+v.width/2)/i.videoWidth),y:270*(v.originY+v.height/2)/i.videoHeight,rx:v.width/i.videoWidth*180,ry:v.height/i.videoHeight*135};if(!c)c=x;else for(const _ of["x","y","rx","ry"])c[_]+=(x[_]-c[_])*.5;u=m}else m-u>450&&(c=null);document.body.dataset.faceDetected=String(!!c)}catch{c=null}}a.clearRect(0,0,360,270);for(const[v,x]of l.entries()){if(x.vy+=Math.sin(m*.0011+v)*p*6,c&&(x.vx+=(c.x-x.x)*p*.12,x.vy+=(c.y-x.y)*p*.1),x.x+=x.vx*p,x.y+=x.vy*p,x.squish*=Math.exp(-7*p),x.angle+=x.spin*p,x.spin*=Math.exp(-.3*p),c){const E=x.x-c.x,R=x.y-c.y,C=c.rx+x.r,S=c.ry+x.r,M=Math.hypot(E/C,R/S);if(M<1){const D=E/(C*C),F=R/(S*S),W=Math.hypot(D,F)||1,K=D/W,j=F/W;x.x=c.x+E/Math.max(.01,M)*1.015,x.y=c.y+R/Math.max(.01,M)*1.015;const H=x.vx*K+x.vy*j;H<0&&(x.vx-=K*(H*1.2-5),x.vy-=j*(H*1.2-5),x.squish=.08,x.spin=(v%2?1:-1)*.15,document.body.dataset.faceBumps=String(+(document.body.dataset.faceBumps||0)+1))}}x.x<x.r&&(x.x=x.r,x.vx=Math.abs(x.vx)),x.x>360-x.r&&(x.x=360-x.r,x.vx=-Math.abs(x.vx)),x.y<x.r&&(x.y=x.r,x.vy=Math.abs(x.vy)),x.y>270-x.r&&(x.y=270-x.r,x.vy=-Math.abs(x.vy));const _=Math.hypot(x.vx,x.vy);_>45&&(x.vx*=45/_,x.vy*=45/_),a.save(),a.translate(x.x,x.y),a.rotate(x.angle),a.scale(1+x.squish,1-x.squish);const b=a.createRadialGradient(-x.r*.35,-x.r*.4,1,0,0,x.r*1.25);b.addColorStop(0,"#fff4dc"),b.addColorStop(.3,x.color),b.addColorStop(1,x.color+"bb"),a.fillStyle=b,a.beginPath();for(let E=0;E<=64;E++){const R=E/64*Math.PI*2,C=x.r*(v%2?1:.86+.14*Math.cos(R*5));a.lineTo(Math.cos(R)*C,Math.sin(R)*C)}a.closePath(),a.fill();for(const E of[-4,4])a.fillStyle="#fff7e7",a.beginPath(),a.ellipse(E,-2,3.2,4,0,0,7),a.fill(),a.fillStyle="#24242a",a.beginPath(),a.arc(E+.5,-1.4,1.6,0,7),a.fill();a.strokeStyle="#ac5069",a.lineWidth=2.4,a.lineCap="round",a.beginPath(),a.ellipse(0,5,3.5,1.8,0,0,Math.PI),a.stroke(),a.restore()}d=requestAnimationFrame(y)}return e("Wave your hand to send the balloons flying."),d=requestAnimationFrame(y),()=>{g=!1,cancelAnimationFrame(d),r.close(),o.hidden=!0,a.clearRect(0,0,360,270),document.body.dataset.faceDetected="false"}}function m_(i,e,t,n){let s=0,r=0,o=0;for(let a=8;a<n-8;a+=8)for(let l=8;l<t-8;l+=8){let c=0,u=1/0,h=0,f=0,d=0;for(let y=-2;y<=2;y++)for(let m=-2;m<=2;m++){const p=(a+y)*t+l+m;c+=Math.abs(e[p]-i[p]),d+=Math.abs(i[p]-i[p+1])}if(c<130||d<80)continue;for(let y=-5;y<=5;y++)for(let m=-5;m<=5;m++){let p=0;for(let v=-2;v<=2;v++)for(let x=-2;x<=2;x++)p+=Math.abs(e[(a+v+y)*t+l+x+m]-i[(a+v)*t+l+x]);p<u&&(u=p,h=m,f=y)}const g=1-u/c;g<.45||Math.hypot(h,f)<1||(s+=h*g,r+=f*g,o+=g)}return o<3?{x:0,y:0,strength:0}:{x:-s/o,y:-r/o,strength:Math.min(1,o/18)}}function g_(i){const e=Math.hypot(i.x,i.y);return i.strength<=.15||e<=.8?{x:0,y:0,strength:0}:{x:i.x/e,y:i.y/e,strength:Math.min(1.7,i.strength*Math.min(1,(e-.8)/3)*1.7)}}function x_(i){h_(document.querySelector("#camera-window"));const e=document.querySelector("#sensor-status"),t=document.querySelector("#camera-preview"),n=document.querySelector("#camera-toggle"),s=document.createElement("canvas");s.width=80,s.height=60;const r=s.getContext("2d",{willReadFrequently:!0});let o=null,a=null,l=null,c=0,u=0;const h=g=>e.textContent=/^Camera off$/.test(g)?"":g;function f(){u++,o?.(),o=null,document.querySelector("#camera-friends")?.setAttribute("hidden",""),a?.getTracks().forEach(g=>g.stop()),a=null,t.srcObject=null,t.hidden=!0,l=null,n.disabled=!1,n.setAttribute("aria-pressed","false"),n.setAttribute("aria-label","Camera")}n.addEventListener("click",async()=>{if(a){f(),h("Camera off");return}const g=++u;n.disabled=!0;try{const y=await navigator.mediaDevices.getUserMedia({video:{width:160,height:120,facingMode:"user"},audio:!1});if(g!==u||document.hidden){y.getTracks().forEach(m=>m.stop());return}a=y,t.srcObject=y,await t.play(),t.hidden=!1,n.setAttribute("aria-pressed","true"),n.setAttribute("aria-label","Camera on"),h("Wave a hand or fan. Make a little wind."),p_(t,h).then(m=>{g!==u?m():o=m}).catch(()=>{g===u&&h("Face tracking unavailable. Wave to make wind.")})}catch(y){f(),h(y.name==="NotAllowedError"?"Camera access was declined. You can still drag the balloons.":"Camera unavailable. You can still drag the balloons.")}finally{n.disabled=!1}}),c=setInterval(()=>{if(!document.hidden&&a&&t.readyState>=2){r.drawImage(t,0,0,80,60);const g=r.getImageData(0,0,80,60).data,y=new Uint8Array(4800);for(let m=0;m<y.length;m++)y[m]=(g[m*4]+g[m*4+1]+g[m*4+2])/3;if(l){const m=g_(m_(l,y,80,60));m.strength>0&&i(m.x,m.y,m.strength)}l=y}},80);function d(){f(),h("Camera off")}return document.addEventListener("visibilitychange",()=>{document.hidden&&d()}),window.addEventListener("pagehide",()=>{d(),clearInterval(c)}),{stop:d}}function y_(i,e){const t=i.attributes.position,n=e.length,s=new Float32Array(t.count),r=e.map(l=>new de(t.getX(l),t.getY(l))),o=r.map((l,c)=>{const u=r[(c+n-3)%n],h=r[(c+3)%n];return Math.atan2((l.x-u.x)*(h.y-l.y)-(l.y-u.y)*(h.x-l.x),(l.x-u.x)*(h.x-l.x)+(l.y-u.y)*(h.y-l.y))}),a=[];for(const l of Array.from({length:n},(c,u)=>u).sort((c,u)=>o[c]-o[u])){if(o[l]>-.12||a.length>=6)break;a.every(c=>Math.min(Math.abs(c-l),n-Math.abs(c-l))>n/12)&&a.push(l)}a.length||a.push(Math.floor(n*.13),Math.floor(n*.58)),i.userData.filmAnchors=a.map(l=>{const c=r[(l+2)%n].clone().sub(r[(l+n-2)%n]).normalize();return{frame:new Qe(r[l].x,r[l].y,-c.y,c.x),weight:o[l]<-.12?1:.3}});for(let l=0;l<t.count;l++){let c=1/0;for(let u=0;u<n;u++){const h=r[u],f=r[(u+1)%n],d=f.x-h.x,g=f.y-h.y,y=Math.max(0,Math.min(1,((t.getX(l)-h.x)*d+(t.getY(l)-h.y)*g)/(d*d+g*g||1)));c=Math.min(c,Math.hypot(t.getX(l)-h.x-d*y,t.getY(l)-h.y-g*y))}s[l]=Math.min(1,c)}i.setAttribute("filmEdge",new Mt(s,1))}function __(i,e,t){i.transparent=!0,i.opacity=1,i.depthWrite=!0,i.transmission=0,i.thickness=.14,i.ior=1.36,i.attenuationDistance=1.5,i.roughness=.34,i.clearcoat=.07,i.clearcoatRoughness=.34,i.envMapIntensity=1.45,i.onBeforeCompile=n=>{Object.assign(n.uniforms,i.userData.frost),n.uniforms.filmPhase={value:e*2.399963};const s=t.userData.filmAnchors||[],r=o=>{const a=Math.sin(e*91.7+o*117.3)*43758.5453;return a-Math.floor(a)};n.uniforms.filmProfile={value:new Qe(.8+r(1)*.5,.65+r(2)*.5,(r(3)-.5)*.14,r(4)*.4)},n.uniforms.filmAnchors={value:Array.from({length:6},(o,a)=>{const l=s[a]?.frame.clone()||new Qe,c=(r(a+40)-.5)*1.1,u=l.z,h=l.w;return l.x+=h*(r(a+50)-.5)*.09,l.y-=u*(r(a+50)-.5)*.09,l.z=u*Math.cos(c)-h*Math.sin(c),l.w=u*Math.sin(c)+h*Math.cos(c),l})},n.uniforms.foldShape={value:Array.from({length:6},(o,a)=>new Qe(.027+r(a+60)*.035,.12+r(a+70)*.16,(r(a+80)-.5)*1.2,.075+r(a+90)*.11))},n.uniforms.filmWeights={value:Array.from({length:6},(o,a)=>s[a]?s[a].weight*(r(a+12)>.32?.5+r(a+22)*.5:0):0)},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
    `)},i.customProgramCacheKey=()=>"contour-weld-film-v20"}function v_(i,e,t){const n=[...new Set(e)],s=i.map(()=>new Set);for(let u=0;u<i.length;u++)for(let h=u+1;h<i.length;h++)Math.hypot(i[u].px-i[h].px,i[u].py-i[h].py)<(i[u].radius+i[h].radius)*1.18&&(s[u].add(h),s[h].add(u));const r=i.map(()=>-1),o=n.map(()=>0),a=i.map(u=>u.radius*u.radius),l=a.reduce((u,h)=>u+h,0)/n.length,c=i.map((u,h)=>h).sort((u,h)=>a[h]-a[u]);for(const u of c){let h=0,f=1/0;for(let d=0;d<n.length;d++){let g=0;for(const m of s[u])r[m]===d&&(g+=Math.min(a[u],a[m]));const y=g/l*12+(o[d]+a[u])/l+t()*.08;y<f&&(f=y,h=d)}r[u]=h,o[h]+=a[u]}return i.forEach((u,h)=>{u.color=n[r[h]],u.body.material.color.set(u.color),u.body.material.attenuationColor.copy(u.body.material.color)}),document.body.dataset.colorAreas=JSON.stringify(o.map(u=>+(u/(l*n.length)).toFixed(3))),i.reduce((u,h,f)=>u+[...s[f]].filter(d=>d>f&&r[d]===r[f]).length,0)}function M_(i){const e=new bt,t=[];e.setAttribute("position",new ct(i*4*3,3));for(let n=0;n<i;n++)for(let s=0;s<4;s++){const r=n*4+s,o=(n+1)%i*4+s,a=n*4+(s+1)%4,l=(n+1)%i*4+(s+1)%4;t.push(r,o,a,o,l,a)}return e.setIndex(t),e}function Xu(i,e,t){const n=i.attributes.position,s=t.length;for(let r=0;r<s;r++){const o=t[r]*3,a=t[(r+s-1)%s]*3,l=t[(r+1)%s]*3,c=e[l]-e[a],u=e[l+1]-e[a+1],h=Math.hypot(c,u)||1;for(let f=0;f<4;f++){const d=f/4*Math.PI*2,g=Math.cos(d)*.005;n.setXYZ(r*4+f,e[o]+u/h*g,e[o+1]-c/h*g,e[o+2]+Math.sin(d)*.002)}}n.needsUpdate=!0,i.computeVertexNormals(),i.computeBoundingSphere()}class S_{constructor(e){this.rest=new Float64Array(e.positions),this.p=this.rest.slice(),this.prev=this.p.slice(),this.v=new Float64Array(this.p.length),this.grad=new Float64Array(this.p.length),this.tri=e.triangles,this.rim=e.rim,this.edges=[],this.bends=[];const t=new Map;for(let n=0;n<this.tri.length;n+=3){const s=this.tri.slice(n,n+3);for(let r=0;r<3;r++){const o=s[r],a=s[(r+1)%3],l=s[(r+2)%3],c=o<a?o+","+a:a+","+o;if(t.has(c)){const u=t.get(c);this.bends.push(this.edge(u,l))}else t.set(c,l),this.edges.push(this.edge(o,a))}}this.restVolume=this.volume(),this.time=0,this.reset()}edge(e,t){const n=this.rest;return[e*3,t*3,Math.hypot(n[e*3]-n[t*3],n[e*3+1]-n[t*3+1],n[e*3+2]-n[t*3+2]),0]}reset(){this.p.set(this.rest),this.prev.set(this.rest),this.v.fill(0),this.time=0}volume(e=!1){const t=this.p,n=this.grad;e&&n.fill(0);let s=0;for(let r=0;r<this.tri.length;r+=3){const o=this.tri[r]*3,a=this.tri[r+1]*3,l=this.tri[r+2]*3,c=t[a+1]*t[l+2]-t[a+2]*t[l+1],u=t[a+2]*t[l]-t[a]*t[l+2],h=t[a]*t[l+1]-t[a+1]*t[l];s+=(t[o]*c+t[o+1]*u+t[o+2]*h)/6,e&&(n[o]+=c/6,n[o+1]+=u/6,n[o+2]+=h/6,n[a]+=(t[l+1]*t[o+2]-t[l+2]*t[o+1])/6,n[a+1]+=(t[l+2]*t[o]-t[l]*t[o+2])/6,n[a+2]+=(t[l]*t[o+1]-t[l+1]*t[o])/6,n[l]+=(t[o+1]*t[a+2]-t[o+2]*t[a+1])/6,n[l+1]+=(t[o+2]*t[a]-t[o]*t[a+2])/6,n[l+2]+=(t[o]*t[a+1]-t[o+1]*t[a])/6)}return s}distances(e,t,n){const s=this.p;for(const r of e){const[o,a,l]=r,c=t/(n*n)*Math.min(1,(l/.1)**2);let u=s[o]-s[a],h=s[o+1]-s[a+1],f=s[o+2]-s[a+2],d=Math.hypot(u,h,f);if(d<1e-9)continue;const g=(-(d-l)-c*r[3])/(2+c);r[3]+=g;const y=g/d;u*=y,h*=y,f*=y,s[o]+=u,s[o+1]+=h,s[o+2]+=f,s[a]-=u,s[a+1]-=h,s[a+2]-=f}}collide(e){const t=this.p;for(let n=0;n<t.length;n+=3){t[n+2]=Math.max(.008,t[n+2]);for(const s of e){let r=t[n]-s.x,o=t[n+1]-s.y,a=t[n+2]-s.z;const l=Math.hypot(r,o,a);if(l<s.r&&l>1e-8){const c=s.r/l;t[n]=s.x+r*c,t[n+1]=s.y+o*c,t[n+2]=Math.max(.008,s.z+a*c)}}}}step(e,{tension:t=.5,wind:n=0,colliders:s=[]}={}){this.time+=e;const r=this.p,o=this.v;this.prev.set(r);const a=Math.exp(-4.5*e);for(let h=0;h<o.length;h+=3)o[h]*=a,o[h+1]*=a,o[h+2]=o[h+2]*a-.45*e;if(n){const h=n*(.75+.25*Math.sin(this.time*1.3));for(let f=0;f<this.tri.length;f+=3){const d=this.tri[f]*3,g=this.tri[f+1]*3,y=this.tri[f+2]*3,m=r[g]-r[d],p=r[g+1]-r[d+1],v=r[g+2]-r[d+2],x=r[y]-r[d],_=r[y+1]-r[d+1],b=r[y+2]-r[d+2],E=p*b-v*_,R=v*x-m*b,C=m*_-p*x,S=Math.hypot(E,R,C);if(S<1e-8)continue;const M=(h-o[d])*E/S-o[d+1]*R/S-o[d+2]*C/S,D=M*Math.abs(M)*e*18;for(const F of[d,g,y])o[F]+=E*D,o[F+1]+=R*D,o[F+2]+=C*D}}for(let h=0;h<r.length;h++)r[h]+=e*o[h];for(const h of this.edges)h[3]=0;for(const h of this.bends)h[3]=0;let l=0;const c=this.restVolume*(.985+.04*t),u=2e-6/(.2+t)/(e*e);for(let h=0;h<10;h++){this.distances(this.edges,3e-6/(.3+t),e),this.distances(this.bends,25e-6,e);const f=this.volume(!0);let d=u;for(const y of this.grad)d+=y*y;const g=(-(f-c)-u*l)/d;l+=g;for(let y=0;y<r.length;y++)r[y]+=this.grad[y]*g;this.collide(s)}for(let h=0;h<r.length;h++)o[h]=(r[h]-this.prev[h])/e,h%3!==2&&r[h-h%3+2]<=.0081&&(o[h]*=.65)}recover(e){const t=1-Math.exp(-4*e);let n=0;for(let s=0;s<this.p.length;s++)this.p[s]+=(this.rest[s]-this.p[s])*t,this.v[s]*=Math.exp(-10*e),n=Math.max(n,Math.abs(this.p[s]-this.rest[s]));return n<.001?(this.p.set(this.rest),this.prev.set(this.rest),this.v.fill(0),!0):!1}metrics(){let e=0;for(const[t,n,s]of this.edges)e=Math.max(e,Math.abs(Math.hypot(this.p[t]-this.p[n],this.p[t+1]-this.p[n+1],this.p[t+2]-this.p[n+2])/s-1));return{volumeRatio:this.volume()/this.restVolume,maxEdgeStrain:e,finite:this.p.every(Number.isFinite)}}}const Hh=(i,e,t)=>(e.x-i.x)*(t.y-i.y)-(e.y-i.y)*(t.x-i.x);function po(i){const e=[...new Map(i.map(s=>[`${s.x},${s.y}`,s])).values()].sort((s,r)=>s.x-r.x||s.y-r.y);if(e.length<3)return e;const t=[],n=[];for(const s of e){for(;t.length>1&&Hh(t.at(-2),t.at(-1),s)<=0;)t.pop();t.push(s)}for(const s of e.toReversed()){for(;n.length>1&&Hh(n.at(-2),n.at(-1),s)<=0;)n.pop();n.push(s)}return t.slice(0,-1).concat(n.slice(0,-1))}const oa=i=>Math.abs(i.reduce((e,t,n)=>{const s=i[(n+1)%i.length];return e+t.x*s.y-s.x*t.y},0)/2);function b_(i,e=0,t=.8){const n=i.filter((o,a)=>a%Math.max(1,Math.floor(i.length/40))===0).map(o=>new de(o.x,o.y)),s=ln.triangulateShape(n,[]).map(o=>o.map(a=>n[a]));let r=!0;for(;r;){r=!1;e:for(let o=0;o<s.length;o++)for(let a=o+1;a<s.length;a++){if(s[o].filter(u=>s[a].includes(u)).length<2)continue;const c=po([...s[o],...s[a]]);if(Math.abs(oa(c)-oa(s[o])-oa(s[a]))<1e-7){s[o]=c,s.splice(a,1),r=!0;break e}}}return s.map(o=>({points:o,zMin:e,zMax:t}))}function E_(i,e,t){return{points:po(i),zMin:e,zMax:t}}function T_(i){i.updateMatrixWorld(!0);const e=[];let t=1/0,n=-1/0;return i.traverse(s=>{if(!s.isMesh)return;const r=s.geometry.attributes.position;for(let o=0;o<r.count;o+=Math.max(1,Math.floor(r.count/160))){const a=new B().fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld);i.worldToLocal(a),e.push(a),t=Math.min(t,a.z),n=Math.max(n,a.z)}}),[{points:po(e),zMin:t,zMax:n}]}function Hs(i){const e=i.baseSize*(i.entry??1),t=e*i.squeeze*(1+i.kick*.1),n=e/i.squeeze*(1-i.kick*.09),s=i.angle+i.turn+i.kick*.06+(i.floatAngle||0),r=Math.cos(s),o=Math.sin(s);if(i.tiltX||i.tiltY){const a=new Ye().makeRotationFromEuler(new Qt(i.tiltX||0,i.tiltY||0,s));return i.collision.map(l=>{const c=[];for(const d of l.points)for(const g of[l.zMin,l.zMax])c.push(new B(d.x*t,d.y*n,g*e*.85).applyMatrix4(a));const u=po(c.map(d=>({x:i.px+(i.floatX||0)+d.x,y:i.py+(i.floatY||0)+d.y}))),h=u.map((d,g)=>{const y=u[(g+1)%u.length],m=Math.hypot(y.x-d.x,y.y-d.y);return m>1e-8?{x:-(y.y-d.y)/m,y:(y.x-d.x)/m}:null}).filter(Boolean),f=i.z+i.depth+(i.focusLift||0);return{points:u,axes:h,minX:Math.min(...u.map(d=>d.x)),maxX:Math.max(...u.map(d=>d.x)),minY:Math.min(...u.map(d=>d.y)),maxY:Math.max(...u.map(d=>d.y)),zMin:f+Math.min(...c.map(d=>d.z)),zMax:f+Math.max(...c.map(d=>d.z))}})}return i.collision.map(a=>{const l=a.points.map(u=>({x:i.px+(i.floatX||0)+u.x*t*r-u.y*n*o,y:i.py+(i.floatY||0)+u.x*t*o+u.y*n*r})),c=l.map((u,h)=>{const f=l[(h+1)%l.length],d=Math.hypot(f.x-u.x,f.y-u.y);return d>1e-8?{x:-(f.y-u.y)/d,y:(f.x-u.x)/d}:null}).filter(Boolean);return{points:l,axes:c,minX:Math.min(...l.map(u=>u.x)),maxX:Math.max(...l.map(u=>u.x)),minY:Math.min(...l.map(u=>u.y)),maxY:Math.max(...l.map(u=>u.y)),zMin:i.z+i.depth+(i.focusLift||0)+a.zMin*e*.85,zMax:i.z+i.depth+(i.focusLift||0)+a.zMax*e*.85}})}function w_(i,e){if(i.maxX<=e.minX||e.maxX<=i.minX||i.maxY<=e.minY||e.maxY<=i.minY||i.zMax<=e.zMin||e.zMax<=i.zMin)return null;const t=i.zMax-e.zMin,n=e.zMax-i.zMin;let s=Math.min(t,n),r=0,o=0,a=t<n?1:-1;for(const l of[i.axes,e.axes])for(const{x:c,y:u}of l){let h=1/0,f=-1/0,d=1/0,g=-1/0;for(const v of i.points){const x=v.x*c+v.y*u;h=Math.min(h,x),f=Math.max(f,x)}for(const v of e.points){const x=v.x*c+v.y*u;d=Math.min(d,x),g=Math.max(g,x)}if(f<=d||g<=h)return null;const y=f-d,m=g-h,p=Math.min(y,m);p<s&&(s=p,r=y<m?c:-c,o=y<m?u:-u,a=0)}return{depth:s,nx:r,ny:o,nz:a}}function A_(i,e){let t=null;for(const n of i.worldCollision)for(const s of e.worldCollision){const r=w_(n,s);r&&(!t||r.depth>t.depth)&&(t=r)}return t}function Vh(i,e){i.layerOrder=i.z,i.radius=e,i.mass=Math.max(.15,e*e),i.px=i.x,i.py=i.y,i.vx=0,i.vy=0,i.omega=0,i.turn=0,i.depth=0,i.vz=0}function R_(i,e,t,n,s,r,o){if(!e)return 0;const a=Math.min(2,Math.ceil(e/(1/60))),l=e/a;let c=0;for(let u=0;u<a;u++){for(const h of i){if(t>3.5){const g=1-Math.exp(-l*.9);h.x+=(h.px-h.x)*g,h.y+=(h.py-h.y)*g}const d=0;h.fx=((h.x-h.px)*d+Math.sin(t*.7+h.phase)*0)*h.mass,h.fy=((h.y-h.py)*d+Math.cos(t*.53+h.phase)*0)*h.mass}for(const h of i)h.worldCollision=Hs(h);for(let h=0;h<i.length;h++)for(let f=h+1;f<i.length;f++){const d=i[h],g=i[f];if(Math.hypot(d.px-g.px,d.py-g.py)>(d.radius+g.radius)*1.65||!n&&Math.hypot(d.vx-g.vx,d.vy-g.vy)<.12)continue;const y=A_(d,g);if(!y||y.depth<.006)continue;c++;const{nx:m,ny:p,nz:v}=y,x=Math.min(.1,y.depth-.004),_=(g.vx-d.vx)*m+(g.vy-d.vy)*p,b=1/d.mass,E=1/g.mass,R=b+E;if(!(v||!n&&Math.abs(_)<.12)){if(d.px-=m*x*.42*b/R,d.py-=p*x*.42*b/R,g.px+=m*x*.42*E/R,g.py+=p*x*.42*E/R,_<-.12){const C=-_*(_<-2?1.06:1)/R;d.vx-=m*C*b,d.vy-=p*C*b,g.vx+=m*C*E,g.vy+=p*C*E}d.worldCollision=Hs(d),g.worldCollision=Hs(g)}}if(n){const h=n.actor,f=n.strength??1;h.fx+=(n.target.x-n.offset.x-h.px)*28*h.mass*(.25+.75*f),h.fy+=(n.target.y-n.offset.y-h.py)*28*h.mass*(.25+.75*f),h.omega+=(n.local.x*.25-h.turn)*l*3}for(const h of i){const f=r/2+h.radius*.3,d=o/2+h.radius*.3;Math.abs(h.px)>f&&(h.fx-=Math.sign(h.px)*(Math.abs(h.px)-f)*60*h.mass),Math.abs(h.py)>d&&(h.fy-=Math.sign(h.py)*(Math.abs(h.py)-d)*60*h.mass);const g=Math.exp(-3.8*l);h.vx=(h.vx+h.fx/h.mass*l)*g,h.vy=(h.vy+h.fy/h.mass*l)*g;const y=Math.hypot(h.vx,h.vy);y>24&&(h.vx*=24/y,h.vy*=24/y),Math.abs(h.vx)<.025&&(h.vx=0),Math.abs(h.vy)<.025&&(h.vy=0),h.px+=h.vx*l,h.py+=h.vy*l,h.omega+=(-h.turn*6+(h.vx-h.vy)*.1)*l,h.omega*=Math.exp(-5*l),h.turn+=h.omega*l,h.vz+=((n?.actor===h?-.14*(n.strength??1):0)-h.depth)*30*l,h.vz*=Math.exp(-11*l),h.depth+=h.vz*l}}return C_(i),c/a}function C_(i){const e=i.slice().sort((t,n)=>(n.speaking?100:n.layerOrder)-(t.speaking?100:t.layerOrder));for(let t=0;t<e.length;t++){const n=e[t];n.z=n.layerOrder;const s=Hs({...n,floatX:0,floatY:0,floatAngle:0}),r=.2+.04*n.baseSize;n.depthEnvelope={minX:Math.min(...s.map(a=>a.minX))-r,maxX:Math.max(...s.map(a=>a.maxX))+r,minY:Math.min(...s.map(a=>a.minY))-r,maxY:Math.max(...s.map(a=>a.maxY))+r,minZ:Math.min(...s.map(a=>a.zMin))-n.z-.02*n.baseSize,maxZ:Math.max(...s.map(a=>a.zMax))-n.z+.02*n.baseSize};const o=n.depthEnvelope;for(let a=0;a<t;a++){const l=e[a],c=l.depthEnvelope;o.maxX<=c.minX||c.maxX<=o.minX||o.maxY<=c.minY||c.maxY<=o.minY||(n.z=Math.min(n.z,l.z+c.minZ-o.maxZ-.035))}n.worldCollision=Hs(n)}}const Zt=document.querySelector("#world"),Vs=document.querySelector("#status"),Gh=ry();let jl=!1;const An=ly(),Xt=matchMedia("(prefers-reduced-motion: reduce)"),fs=Number(new URLSearchParams(location.search).get("seed"))||crypto.getRandomValues(new Uint32Array(1))[0],Wh=[["#008beC","#ff5e44","#ffda19","#10c89e","#fc4a9b","#9a5ae9"],["#ff7c30","#0f86f9","#ffda1e","#fa4fa0","#12ceae","#975dea"],["#0987f7","#ffd51d","#fc54a3","#9d5ae9","#10c9a0","#ff664a"],["#ff6043","#ffdd19","#069fea","#fc50a2","#1bcb95","#9a5feb"],["#1788f9","#ff7d35","#ffd71c","#fb4b9e","#0ec7b5","#9463ea"]],ds=Wh[fs%Wh.length],Kl=["round","heart","triangle","square","star","spark","petal","coil"],Xh=["petal","spark","star","coil","heart","petal","triangle","spark","coil","star","round","petal","heart","spark","square","coil"],st=[],hn=[],hi=[];let ni=[],hl,Ct,Bt,zt,vt,$l,qu,ul=0,fl=0,Sn=12,Hn=8,qn=0,Jr=0,_t=0,ye=null,P_,Rn,aa=!1,Ms=3,Gs=fs;function gt(){return Gs=Gs*1664525+1013904223>>>0,Gs/4294967296}const dl=i=>new un({color:i,roughness:.3,clearcoat:.22,clearcoatRoughness:.26,ior:1.46,transmission:0});function I_(i){const e=Xh[i%Xh.length],t=Kl.indexOf(e),n=new Dt,s=dl(ds[Math.floor(gt()*ds.length)]);s.roughness=.44+i%3*.025,s.clearcoat=.04,s.transmission=[.1,.18,.06,.24][i%4],s.thickness=.16,s.ior=1.38,s.attenuationDistance=1.6,s.attenuationColor.copy(s.color);const r=qu[t];r.data.noSeam||__(s,i,r.body);const o=new tt(r.body,s),a=new tt(r.rim,s);r.data.noSeam||hy(o),n.add(o),zt.add(n);const l=ku(n,o,i,r.data.faceAnchor);a.visible=!r.data.noSeam,l.update(i*.63,0,"awake",0,!0,!0);const c={root:n,body:o,face:l,phase:gt()*Math.PI*2,angle:(gt()-.5)*2.5,size:.48+gt()**2*1.9,squeeze:.94+gt()*.12,z:gt()*.75,kick:0,velocity:0,x:0,y:0};["round","square","triangle"].includes(e)&&(c.size*=.72),c.projectIndex=i%rn.length,c.collision=r.collision,c.shape=r,c.rim=a,c.press=0,o.userData.actor=c,hi.push(o),l.face.traverse(u=>{u.isMesh&&(u.userData.actor=c,hi.push(u))}),st.push(c)}function L_(i){const e=new Dt,t=$l[ni[i%ni.length]].clone(!0),n=new Map,s=["flower","daisy","spark","star"].includes(t.userData.itemId);t.traverse(h=>{if(h.isMesh){const f=t.userData.itemId==="bubbles"?"bubble-"+(h.name.match(/(\d+)$/)?.[1]||"0"):h.material.name;n.has(f)||n.set(f,ds[(i*3+n.size*2)%ds.length]),h.material=h.material.clone(),h.material.color.set(s?/^Center/i.test(h.name)?"#f2bf2e":"#fffaf1":n.get(f)),h.material.roughness=.42}}),e.add(t),zt.add(e);const r=new In().setFromObject(t),o=r.getSize(new B),a=r.getCenter(new B);t.position.sub(a);const l=(.55+gt()*.4)/Math.max(o.x,o.y);t.scale.setScalar(l),t.position.multiplyScalar(l);const c=new Dt;c.add(t),e.add(c),c.rotation.set((gt()<.5?-1:1)*(.2+gt()*.55),(gt()<.5?-1:1)*(.18+gt()*.62),0);const u={root:e,phase:gt()*6.28,angle:gt()*6.28,size:1,squeeze:1,z:.8+gt()*.25,kick:0,velocity:0,x:0,y:0};u.collision=T_(e),e.traverse(h=>{h.isMesh&&(h.userData.actor=u,hi.push(h))}),hn.push(u)}function D_(){ye=null,Rn?.clear(),Ii();for(const i of st)i.face.dispose(),zt.remove(i.root),i.body.material.dispose(),i.isGlyph&&i.body.geometry.dispose(),i.sim&&(i.body.geometry.dispose(),i.rim.geometry.dispose());for(const i of hn)zt.remove(i.root),i.root.traverse(e=>{e.isMesh&&(e.material.dispose(),i.letter&&e.geometry.dispose())});st.length=hn.length=hi.length=0,Gs=fs;for(let i=0;i<Math.max(rn.length,Math.ceil(ul*fl*1.15));i++)I_(i);ni=$l.map((i,e)=>e);for(let i=ni.length-1;i>0;i--){const e=Math.floor(gt()*(i+1));[ni[i],ni[e]]=[ni[e],ni[i]]}for(let i=0;i<Math.max(5,Math.ceil(ul*fl*.26));i++)L_(i);document.body.dataset.letters="",document.body.dataset.seed=String(fs),document.body.dataset.palette=ds.join(","),document.body.dataset.shapes=Kl.join(","),document.body.dataset.monsters=st.length,document.body.dataset.items=hn.length}function la(){const i=innerWidth,e=innerHeight;Bt.setSize(i,e,!1),Bt.setPixelRatio(Math.min(devicePixelRatio,1.25));const t=Math.max(3,Math.round(i/230)),n=Math.max(i<600?5:3,Math.round(e/220));if(Sn=t*1.9,Hn=Sn*e/i,vt.left=-Sn/2,vt.right=Sn/2,vt.top=Hn/2,vt.bottom=-Hn/2,vt.updateProjectionMatrix(),st.length||(ul=t,fl=n,D_()),Ct?.active){Ct.resize();return}Gs=(fs^9678359)>>>0;const s=Math.sqrt(Sn*Hn/st.length);st.forEach(a=>{a.baseSize=a.size*s/1.9,a.radius=a.baseSize*.89,a.x=(gt()-.5)*(Sn+.7),a.y=(gt()-.5)*(Hn+.7)});const r=st.reduce((a,l)=>a+Math.PI*l.radius*l.radius,0),o=Math.sqrt(Sn*Hn*1.35/r);for(const a of st)a.baseSize*=o,a.radius*=o;for(let a=0;a<180;a++){for(let l=0;l<st.length;l++)for(let c=l+1;c<st.length;c++){const u=st[l],h=st[c],f=h.x-u.x,d=h.y-u.y,g=Math.hypot(f,d)||.001,y=(u.radius+h.radius)*.93-g;if(y>0){const m=y*.23;u.x-=f/g*m,u.y-=d/g*m,h.x+=f/g*m,h.y+=d/g*m}}for(const l of st)l.x=$s.clamp(l.x,-Sn/2+l.radius*.36,Sn/2-l.radius*.36),l.y=$s.clamp(l.y,-Hn/2+l.radius*.36,Hn/2-l.radius*.36)}hn.forEach((a,l)=>{const c=st[l%st.length],u=st.filter(f=>f!==c).sort((f,d)=>Math.hypot(f.x-c.x,f.y-c.y)-Math.hypot(d.x-c.x,d.y-c.y)),h=u[l%Math.min(3,u.length)];a.x=(c.x+h.x)/2+(gt()-.5)*.3,a.y=(c.y+h.y)/2+(gt()-.5)*.3,a.baseSize=s/1.9});for(const a of st){const l=a.userScale||1;a.userScale=1,Vh(a,a.radius),so(a,l)}for(const a of hn){const l=a.userScale||1;a.userScale=1,Vh(a,(a.letter?.6:.29)*a.baseSize),so(a,l)}if(aa||(document.body.dataset.colorConflicts=String(v_(st,ds,gt))),(!aa||!jl)&&!Xt.matches)for(const a of[...st,...hn])a.px=a.x*.06,a.py=a.y*.06,a.vx=a.x*3.9,a.vy=a.y*3.9,a.turn=(gt()-.5)*2.7,a.omega=(gt()-.5)*5,a.entry=.07,a.entryVelocity=0,a.delay=gt()*.13;aa=!0,ps(0),Yt()}function qh(i,e,t){iy(i,e,ye?.actor===i),i.delay>0?i.delay-=e:i.entry!==void 0&&(i.entryVelocity+=((1-i.entry)*90-i.entryVelocity*10)*e,i.entry+=i.entryVelocity*e),i.velocity+=(-i.kick*55-i.velocity*15)*e,i.kick+=i.velocity*e;const n=i.phase,s=_t,r=Xt.matches||ye?.actor===i?0:1;i.floatBlend=(i.floatBlend??r)+(r-(i.floatBlend??r))*(1-Math.exp(-4*e)),i.floatX=Math.sin(s*(.25+n%1*.18)+n)*(.045+n%1*.07)*i.floatBlend,i.floatY=Math.sin(s*(.32+n%1.3*.13)+n*1.7)*(.075+n%1*.095)*i.floatBlend,i.floatAngle=Math.sin(s*(.22+n%1*.13)+n*2.3)*.018*i.floatBlend;const o=i.speaking?Math.max(0,4.1-i.layerOrder):0;i.focusLift=(i.focusLift||0)+(o-(i.focusLift||0))*(1-Math.exp(-10*e)),i.root.position.set(i.px+i.floatX,i.py+i.floatY,i.z+i.depth+i.focusLift),i.root.rotation.set(i.tiltX||0,i.tiltY||0,i.angle+i.turn+i.kick*.06+i.floatAngle);const a=1+Math.sin(s*(.48+n%1*.17)+n)*(Xt.matches?0:.006),l=i.baseSize*a*(i.entry??1);i.root.scale.set(l*i.squeeze*(1+i.kick*.1),l/i.squeeze*(1-i.kick*.09),l*.85),t&&(N_(i,e),i.face.update(s+n,e,"awake",Math.max(0,i.kick)*.3+i.press*.7,!1,Xt.matches))}function N_(i,e){if(!i.sim||!i.deforming||!e)return;const t=ye?.actor===i;if(i.press+=((t?ye.strength:0)-i.press)*(1-Math.exp(-14*e)),t&&i.press>.65&&!ye.feltCompression&&(ye.feltCompression=!0,An.pulse("grip",i.press)),t){const s=ye.local,r=Math.ceil(e*120);for(let o=0;o<r;o++)i.sim.step(e/r,{tension:.65,colliders:[{x:s.x,y:s.y,z:s.z+.29-.24*i.press,r:.32}]})}else i.sim.recover(e)&&(i.deforming=!1,i.press=0);const n=i.body.geometry.attributes.position.array;i.shape.skin.stencils.forEach((s,r)=>n.set(Wu(i.sim.p,s),r*3)),i.body.geometry.attributes.position.needsUpdate=!0,i.body.geometry.computeVertexNormals(),i.body.geometry.computeBoundingSphere(),i.shape.data.noSeam||Xu(i.rim.geometry,n,i.shape.skin.rim)}function ps(i){if(Ct?.updateIcon(_t,i,Xt.matches),Ct?.active){Ct.update(_t,i,Xt.matches),Ct.blend(_t),Yh(),Rn?.update(_t,i,[],vt,Xt.matches,null),Ph(vt),Ct.updateLabels(),Bt.render(zt,vt);return}const e=[...st,...hn];ye&&(ye.elapsed+=i,ye.strength=.08+.92*Math.min(1,ye.elapsed/2));const t=!!ye||_t<Ms,n=t?R_(e,i,_t,ye,Xt.matches,Sn,Hn):0;if(!t)for(const s of e)s.angle+=s.turn,s.turn=0,s.entry=1,s.entryVelocity=0,s.vx=s.vy=s.omega=s.velocity=s.vz=0,s.kick=0,s.x=s.px,s.y=s.py;for(const s of st)qh(s,i,!0);for(const s of hn)qh(s,i,!1);Ct?.blend(_t),Yh(),Rn?.update(_t,i,st,vt,Xt.matches,ye),Ph(vt),hl?.begin(),Bt.render(zt,vt),hl?.end(),_t-(ps.metricsAt||-1)>.25&&(ps.metricsAt=_t,document.body.dataset.triangles=String(Bt.info.render.triangles),document.body.dataset.drawCalls=String(Bt.info.render.calls),document.body.dataset.time=_t.toFixed(2),document.body.dataset.sleeping=String(!t),document.body.dataset.entry=String(Math.min(...e.map(s=>s.entry??1)).toFixed(3)),document.body.dataset.motion=JSON.stringify({contacts:Math.round(n),speed:+e.reduce((s,r)=>s+Math.hypot(r.vx,r.vy),0).toFixed(3),press:+(ye?.actor.press||0).toFixed(3),deforming:st.filter(s=>s.deforming).length}))}function pl(i){if(qn=0,document.hidden)return;if(!Ct?.active&&_t>=Ms&&!ye&&i-Jr<32){qn=requestAnimationFrame(pl);return}const e=Math.min((i-Jr)/1e3||0,.035);Jr=i,_t+=e,ps(e),(!Xt.matches||ye||[...st,...hn].some(t=>t.deforming||Math.abs(t.kick)+Math.abs(t.velocity)+Math.hypot(t.vx,t.vy)>.002))&&(qn=requestAnimationFrame(pl))}function Yt(){jl&&!qn&&!document.hidden&&(Jr=performance.now(),qn=requestAnimationFrame(pl))}function U_(i,e,t){if(!(!st.length||Ct?.active)){Ms=_t+5;for(const n of[...st,...hn]){const s=t*6/Math.sqrt(Math.max(.5,n.mass));n.vx+=i*s,n.vy+=e*s,n.omega+=(n.phase/Math.PI-1)*s*.09,n.face?.touch(i*.1,e*.1)}document.body.dataset.wind=String(t.toFixed(3)),Yt()}}function Yu(i,e=1){Ms=_t+2.3,i.velocity=5*e,i.vx+=Math.cos(i.phase)*.7*e,i.vy+=Math.sin(i.phase)*.7*e,i.omega+=.35*e,i.face?.touch(0,.4),document.body.dataset.touches=String(+(document.body.dataset.touches||0)+1),Yt()}const Vn=new Du,oo=new de;let mo=!1;Zt.addEventListener("pointerleave",()=>{mo=!1});function Yh(){if(!mo)return;const i=oo.x*vt.right,e=oo.y*vt.top;for(const t of st){if(Math.hypot(i-t.root.position.x,e-t.root.position.y)>t.radius+1.8)continue;t.root.updateWorldMatrix(!0,!1);const n=t.root.worldToLocal(new B(i,e,t.root.position.z));t.face.look(n.x,n.y)}}const F_=new ti(new B(0,0,1),0);function go(i){return oo.set(i.clientX/innerWidth*2-1,1-i.clientY/innerHeight*2),Vn.setFromCamera(oo,vt),Vn.ray.intersectPlane(F_,new B)}function ju(){const i=ye.actor;i.root.rotation.set(i.tiltX||0,i.tiltY||0,i.angle+i.turn),i.root.updateMatrixWorld(!0);const e=i.root.localToWorld(ye.local.clone());ye.offset.set(e.x-i.px,e.y-i.py,0)}function Ku(){const i=[...ye.points.values()];ye.previous=i.length===2?i[0].clone().add(i[1]).multiplyScalar(.5):i[0].clone(),ye.distance=i.length===2?i[0].distanceTo(i[1]):0,ye.twist=i.length===2?Math.atan2(i[1].y-i[0].y,i[1].x-i[0].x):0,ye.lastMove=performance.now(),ye.target=ye.previous.clone(),ye.offset.set(ye.target.x-ye.actor.px,ye.target.y-ye.actor.py,0),ye.local=ye.actor.root.worldToLocal(new B(ye.target.x,ye.target.y,ye.actor.root.position.z))}Zt.addEventListener("pointerdown",i=>{if(!vt||i.button!==0)return;const e=go(i);if(Ct?.active){const a=Vn.intersectObjects(hi,!1).find(l=>l.object.userData.actor?.root.visible);a?Ct.select(a.object.userData.actor):Ct.clear(),Yt();return}if(ye){i.pointerType==="touch"&&!ye.points.has(i.pointerId)&&ye.points.size<2&&(ye.points.set(i.pointerId,e),ye.moved=!0,Ku(),Zt.setPointerCapture(i.pointerId));return}const t=Rn?.invitedActor(Vn);if(t){Yl(t,Rn,_t,Xt.matches);return}if(Rn?.hit(Vn))return;Ii();const n=Vn.intersectObjects(hi,!1)[0];if(!n)return;const s=n.object.userData.actor,r=s.body?Vn.intersectObject(s.body)[0]:null,o=s.root.worldToLocal((r?.point||n.point).clone());ye={id:i.pointerId,actor:s,startX:i.clientX,startY:i.clientY,startAt:performance.now(),elapsed:0,strength:.08,moved:!1,points:new Map([[i.pointerId,e]]),local:o,target:e,offset:new B(e.x-s.px,e.y-s.py,0)},ye.previous=e.clone(),ye.lastMove=performance.now(),s.body&&!s.isGlyph&&(s.sim||(s.sim=new S_(s.shape.data),s.body.geometry=s.body.geometry.clone(),s.rim.geometry=s.rim.geometry.clone()),s.deforming=!0),An.pulse("press",.25+Math.min(.4,Math.hypot(o.x,o.y)*.2),{size:s.userScale||1}),Zt.setPointerCapture(i.pointerId),Yu(s,.08),document.body.dataset.held="true",Yt()});Zt.addEventListener("pointermove",i=>{if(!vt)return;const e=go(i);if(mo=!0,ye||(Zt.style.cursor=Vn.intersectObjects(hi,!1).length?"grab":"default"),Yt(),!ye||!ye.points.has(i.pointerId))return;ye.points.set(i.pointerId,e),Math.hypot(i.clientX-ye.startX,i.clientY-ye.startY)>9&&(ye.moved=!0);const t=[...ye.points.values()],n=t.length===2?t[0].clone().add(t[1]).multiplyScalar(.5):e,s=performance.now(),r=Math.max(.008,Math.min(.1,(s-ye.lastMove)/1e3));if(ny(ye.actor,ye.offset,n.x-ye.previous.x,n.y-ye.previous.y,r),t.length===2){const a=t[0].distanceTo(t[1]),l=Math.atan2(t[1].y-t[0].y,t[1].x-t[0].x);ye.distance>.05&&so(ye.actor,(ye.actor.userScale||1)*a/ye.distance),ye.actor.angle+=Math.atan2(Math.sin(l-ye.twist),Math.cos(l-ye.twist)),ye.distance=a,ye.twist=l}const o=n.distanceTo(ye.previous)/r;o>.12&&An.pulse("rub",Math.min(1,o/6),{size:ye.actor.userScale||1}),t.length===2&&Math.abs((ye.actor.userScale||1)-(ye.soundScale||1))>.035&&(An.pulse("scale",.5,{size:ye.actor.userScale||1,direction:(ye.actor.userScale||1)-(ye.soundScale||1)}),ye.soundScale=ye.actor.userScale||1),ye.previous=n.clone(),ye.lastMove=s,ye.target=n,ju(),document.body.dataset.rotation3d=JSON.stringify({x:ye.actor.tiltX,y:ye.actor.tiltY}),document.body.dataset.balloonScale=String(ye.actor.userScale||1),Yt()});Zt.addEventListener("wheel",i=>{if(!vt||Ct?.active)return;go(i);const e=ye?.actor||Vn.intersectObjects(hi,!1)[0]?.object.userData.actor;if(!e)return;i.preventDefault();const t=i.deltaY*(i.deltaMode===1?16:i.deltaMode===2?innerHeight:1),n=e.userScale||1;so(e,(e.userScale||1)*Math.exp(-Math.max(-100,Math.min(100,t))*.002)),e.userScale!==n&&(An.unlock(),An.pulse("scale",Math.min(1,Math.abs(t)/80),{size:e.userScale,direction:e.userScale-n})),ye&&ju(),Ms=_t+2.3,document.body.dataset.balloonScale=String(e.userScale),Yt()},{passive:!1});function Jl(i=!1){ye&&(i&&(ye.moved||ye.actor.press>.15)&&An.pulse("release",Math.min(1,.25+Math.hypot(ye.actor.vx,ye.actor.vy)/8),{size:ye.actor.userScale||1}),Ms=_t+2.3,i&&!ye.moved&&performance.now()-ye.startAt<650&&ye.actor.face&&Yl(ye.actor,Rn,_t,Xt.matches)),ye=null,document.body.dataset.held="false",Yt()}function $u(i,e){if(ye?.points.has(i.pointerId)){if(ye.points.delete(i.pointerId),ye.points.size){ye.id=ye.points.keys().next().value,Ku();return}Jl(e)}}Zt.addEventListener("pointerup",i=>$u(i,!0));for(const i of["pointercancel","lostpointercapture"])Zt.addEventListener(i,e=>$u(e,!1));window.addEventListener("blur",()=>Jl(!1));window.addEventListener("pointermove",i=>{Ct?.active&&(go(i),mo=!0,Yt())});Zt.addEventListener("keydown",i=>{i.code==="Space"&&!Ct?.active&&(i.preventDefault(),st.forEach(e=>Yu(e)))});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(qn),qn=0):Yt()});Xt.addEventListener("change",()=>{ps(0),Yt()});Zt.addEventListener("webglcontextlost",i=>{i.preventDefault(),cancelAnimationFrame(qn),qn=0,Vs.textContent="Restoring the playground…",Vs.hidden=!1});Zt.addEventListener("webglcontextrestored",()=>location.reload());function O_(i){const e=new Dt,t=i==="daisy"?7:5,n=new Ci(1,24,16),s=dl("#fffaf1"),r=dl("#f2bf2e");s.name="Petals",r.name="Center";for(let a=0;a<t;a++){const l=a/t*Math.PI*2,c=new tt(n,s);c.name="Petal",c.position.set(Math.cos(l)*.29,Math.sin(l)*.29,0),c.scale.set(.32,.145,.14),c.rotation.z=l,e.add(c)}const o=new tt(n,r);return o.name="Center",o.position.z=.14,o.scale.set(.19,.19,.15),e.add(o),e.userData.itemId=i,e}async function B_(){try{Bt=new Wl({canvas:Zt,antialias:!0}),hl=cy(Bt),Bt.transmissionResolutionScale=.5,Bt.setClearColor("#dcd8d0"),Bt.toneMapping=xl,Bt.toneMappingExposure=.98,zt=new lo,vt=new _s(-6,6,4,-4,.1,200),vt.position.set(0,0,15);const i=new tl(Bt),e=new _y,t=i.fromScene(e,.04);zt.environment=t.texture,zt.environmentIntensity=.32,e.dispose(),i.dispose(),zt.add(new zl("#fffaf0","#c9bfac",.78));const n=new nr("#fff7ee",1.9);n.position.set(-5,7,9),zt.add(n);const s=new nr("#e2ecff",.4);s.position.set(5,-2,6),zt.add(s);const r=await fetch("./membrane.json");if(!r.ok)throw Error("Membrane load failed");await r.json();const o=gy();P_=t_(o),document.body.dataset.shapeSource="Authored classic balloon outlines",qu=Kl.map(u=>{const h=uy(xy(Lh[u]?dy(o,Lh[u]):s_(o,u))),f={stencils:Array.from({length:h.positions.length/3},(p,v)=>[[v,1]]),triangles:h.triangles,rim:h.rim},d=f.stencils.flatMap(p=>Wu(h.positions,p)),g=new bt;g.setAttribute("position",new ct(d,3)),g.setIndex(f.triangles),g.computeVertexNormals(),h.noSeam||y_(g,f.rim);const y=M_(f.rim.length);Xu(y,d,f.rim),y.setAttribute("filmEdge",new Mt(new Float32Array(y.attributes.position.count),1));let m;if(h.noSeam){m=[];for(let p=0;p<140;p+=5){const v=[];let x=1/0,_=-1/0;for(let b=p;b<=Math.min(144,p+5);b++)for(let E=0;E<12;E++){const R=b*12+E,C=h.positions[R*3+2];v.push({x:h.positions[R*3],y:h.positions[R*3+1]}),x=Math.min(x,C),_=Math.max(_,C)}m.push(E_(v,x,_))}}else{const p=f.rim.map(v=>({x:d[v*3],y:d[v*3+1]}));g.computeBoundingBox(),m=b_(p,g.boundingBox.min.z-.012,g.boundingBox.max.z+.1)}return{body:g,rim:y,data:h,skin:f,collision:m}});const a=await fetch("./items/manifest.json");if(!a.ok)throw Error("Items load failed");const l=(await a.json()).filter(u=>!["bean","pillow","cloud","leaf"].includes(u.id)),c=new vy;$l=await Promise.all(l.map(async u=>{if(["flower","daisy","spark","star"].includes(u.id))return O_(u.id);const h=await c.loadAsync("./items/"+u.id+".glb");return h.scene.traverse(f=>{if(f.isMesh){for(const d of[f.geometry.attributes.position,f.geometry.attributes.normal])if(d){for(let g=0;g<d.count;g++){const y=d.getY(g),m=d.getZ(g);d.setY(g,-m),d.setZ(g,y)}d.needsUpdate=!0}if(f.geometry.computeBoundingBox(),f.geometry.computeBoundingSphere(),f.material.side=u.id==="heart"?mn:Cn,u.id!=="heart"&&!f.material.map){const d=f.geometry;f.geometry=yy(d),f.geometry!==d&&d.dispose()}}}),h.scene.userData.itemId=u.id,h.scene})),await document.fonts.load("400 80px fatfrank"),document.body.dataset.typeface=document.fonts.check("400 80px fatfrank")?"FatFrank":"fallback",Rn=l_(zt,(u,h,f)=>An.babble({size:u.userScale||1,message:h,phrase:f}),()=>An.stopVoice()),x_(U_),la(),window.addEventListener("resize",la),Ct=ty({actors:st,ornaments:hn,scene:zt,camera:vt,renderer:Bt,feedback:An,seed:fs,wake:Yt,speech:Rn,getTime:()=>_t,onChange:u=>{Jl(!1),Rn.clear(),Ii(),u||la()}}),new URLSearchParams(location.search).get("mode")==="collection"&&Ct.setActive(!0),await Bt.compileAsync(zt,vt),ps(0),Vs.hidden=!0,document.body.dataset.ready="true",await Gh.finish(()=>{jl=!0,Yt()})}catch(i){Gh.cancel(),console.error(i),Vs.hidden=!1,Vs.textContent="Could not load the playground. Please refresh.",document.body.dataset.error=i.message}}document.querySelector("#reload-crowd").addEventListener("click",i=>{const e=i.currentTarget;e.disabled=!0,e.dataset.reloading="true",setTimeout(()=>location.reload(),Xt.matches?0:180)});B_();
