// XPBD distance + closed-volume constraints. Normalized units, uncalibrated polymer.
export class Membrane {
 constructor(data){this.rest=new Float64Array(data.positions);this.p=this.rest.slice();this.prev=this.p.slice();this.v=new Float64Array(this.p.length);this.grad=new Float64Array(this.p.length);this.tri=data.triangles;this.rim=data.rim;this.edges=[];this.bends=[];const map=new Map();
 for(let t=0;t<this.tri.length;t+=3){const ids=this.tri.slice(t,t+3);for(let k=0;k<3;k++){const a=ids[k],b=ids[(k+1)%3],opp=ids[(k+2)%3],key=a<b?a+','+b:b+','+a;if(map.has(key)){const old=map.get(key);this.bends.push(this.edge(old,opp));}else{map.set(key,opp);this.edges.push(this.edge(a,b));}}}
 this.restVolume=this.volume();this.time=0;this.reset();}
 edge(a,b){const p=this.rest;return [a*3,b*3,Math.hypot(p[a*3]-p[b*3],p[a*3+1]-p[b*3+1],p[a*3+2]-p[b*3+2]),0];}
 reset(){this.p.set(this.rest);this.prev.set(this.rest);this.v.fill(0);this.time=0;}
 volume(gradient=false){const p=this.p,g=this.grad;if(gradient)g.fill(0);let volume=0;
 for(let t=0;t<this.tri.length;t+=3){const a=this.tri[t]*3,b=this.tri[t+1]*3,c=this.tri[t+2]*3;const cx=p[b+1]*p[c+2]-p[b+2]*p[c+1],cy=p[b+2]*p[c]-p[b]*p[c+2],cz=p[b]*p[c+1]-p[b+1]*p[c];volume+=(p[a]*cx+p[a+1]*cy+p[a+2]*cz)/6;
 if(gradient){g[a]+=cx/6;g[a+1]+=cy/6;g[a+2]+=cz/6;g[b]+=(p[c+1]*p[a+2]-p[c+2]*p[a+1])/6;g[b+1]+=(p[c+2]*p[a]-p[c]*p[a+2])/6;g[b+2]+=(p[c]*p[a+1]-p[c+1]*p[a])/6;g[c]+=(p[a+1]*p[b+2]-p[a+2]*p[b+1])/6;g[c+1]+=(p[a+2]*p[b]-p[a]*p[b+2])/6;g[c+2]+=(p[a]*p[b+1]-p[a+1]*p[b])/6;}}
 return volume;}
 distances(list,compliance,h){const p=this.p;for(const e of list){const [a,b,l]=e;const alpha=compliance/(h*h)*Math.min(1,(l/.1)**2);let x=p[a]-p[b],y=p[a+1]-p[b+1],z=p[a+2]-p[b+2],d=Math.hypot(x,y,z);if(d<1e-9)continue;const dl=(-(d-l)-alpha*e[3])/(2+alpha);e[3]+=dl;const s=dl/d;x*=s;y*=s;z*=s;p[a]+=x;p[a+1]+=y;p[a+2]+=z;p[b]-=x;p[b+1]-=y;p[b+2]-=z;}}
 collide(colliders){const p=this.p;for(let i=0;i<p.length;i+=3){p[i+2]=Math.max(.008,p[i+2]);for(const c of colliders){let x=p[i]-c.x,y=p[i+1]-c.y,z=p[i+2]-c.z;const d=Math.hypot(x,y,z);if(d<c.r&&d>1e-8){const s=c.r/d;p[i]=c.x+x*s;p[i+1]=c.y+y*s;p[i+2]=Math.max(.008,c.z+z*s);}}}}
 step(h,{tension=.5,wind=0,colliders=[]}={}){this.time+=h;const p=this.p,v=this.v;this.prev.set(p);const damping=Math.exp(-4.5*h);
 // Aerodynamic force uses triangle area, orientation and relative air velocity.
 for(let i=0;i<v.length;i+=3){v[i]*=damping;v[i+1]*=damping;v[i+2]=v[i+2]*damping-.45*h;}
 if(wind){const wx=wind*(.75+.25*Math.sin(this.time*1.3));for(let t=0;t<this.tri.length;t+=3){const a=this.tri[t]*3,b=this.tri[t+1]*3,c=this.tri[t+2]*3;const ux=p[b]-p[a],uy=p[b+1]-p[a+1],uz=p[b+2]-p[a+2],vx=p[c]-p[a],vy=p[c+1]-p[a+1],vz=p[c+2]-p[a+2];const nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx,len=Math.hypot(nx,ny,nz);if(len<1e-8)continue;const rel=(wx-v[a])*nx/len-v[a+1]*ny/len-v[a+2]*nz/len;const force=rel*Math.abs(rel)*h*18;for(const j of [a,b,c]){v[j]+=nx*force;v[j+1]+=ny*force;v[j+2]+=nz*force;}}}
 for(let i=0;i<p.length;i++)p[i]+=h*v[i];for(const e of this.edges)e[3]=0;for(const e of this.bends)e[3]=0;let lambda=0;
 const desired=this.restVolume*(.985+.04*tension),alpha=(.000002/(.2+tension))/(h*h);
 for(let iteration=0;iteration<10;iteration++){this.distances(this.edges,.000003/(.3+tension),h);this.distances(this.bends,.000025,h);const volume=this.volume(true);let den=alpha;for(const n of this.grad)den+=n*n;const dl=(-(volume-desired)-alpha*lambda)/den;lambda+=dl;for(let i=0;i<p.length;i++)p[i]+=this.grad[i]*dl;this.collide(colliders);}
 for(let i=0;i<p.length;i++){v[i]=(p[i]-this.prev[i])/h;if(i%3!==2&&p[i-i%3+2]<=.0081)v[i]*=.65;}
 }
 // Art-directed recovery: membrane constraints alone can remain in a buckled equilibrium.
 recover(h){const blend=1-Math.exp(-4*h);let error=0;for(let i=0;i<this.p.length;i++){this.p[i]+=(this.rest[i]-this.p[i])*blend;this.v[i]*=Math.exp(-10*h);error=Math.max(error,Math.abs(this.p[i]-this.rest[i]));}if(error<.001){this.p.set(this.rest);this.prev.set(this.rest);this.v.fill(0);return true;}return false;}
 metrics(){let strain=0;for(const [a,b,l] of this.edges)strain=Math.max(strain,Math.abs(Math.hypot(this.p[a]-this.p[b],this.p[a+1]-this.p[b+1],this.p[a+2]-this.p[b+2])/l-1));return {volumeRatio:this.volume()/this.restVolume,maxEdgeStrain:strain,finite:this.p.every(Number.isFinite)};}
}
