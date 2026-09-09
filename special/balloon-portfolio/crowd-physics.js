import {worldParts,shapeContact} from './crowd-collision.js';
// Mass, linear/angular momentum and soft contacts for every object in the pile.
export function initializeMotion(a,radius){
  a.layerOrder=a.z;a.radius=radius;a.mass=Math.max(.15,radius*radius);a.px=a.x;a.py=a.y;
  a.vx=0;a.vy=0;a.omega=0;a.turn=0;a.depth=0;a.vz=0;
}
export function advancePile(objects,dt,time,held,reduced,width,height){
  if(!dt)return 0;
  const steps=Math.min(2,Math.ceil(dt/(1/60))),h=dt/steps;let contacts=0;
  for(let step=0;step<steps;step++){
    for(const a of objects){
      const breeze=0;
      if(time>3.5){const relax=1-Math.exp(-h*.9);a.x+=(a.px-a.x)*relax;a.y+=(a.py-a.y)*relax;}
      const tether=0;
      a.fx=((a.x-a.px)*tether+Math.sin(time*.7+a.phase)*breeze)*a.mass;
      a.fy=((a.y-a.py)*tether+Math.cos(time*.53+a.phase)*breeze)*a.mass;
    }
    for(const a of objects)a.worldCollision=worldParts(a);
    for(let i=0;i<objects.length;i++)for(let j=i+1;j<objects.length;j++){
      const a=objects[i],b=objects[j];
      if(Math.hypot(a.px-b.px,a.py-b.py)>(a.radius+b.radius)*1.65)continue;
      if(!held&&Math.hypot(a.vx-b.vx,a.vy-b.vy)<.12)continue;
      const hit=shapeContact(a,b);if(!hit||hit.depth<.006)continue;contacts++;
      const {nx,ny,nz}=hit,depth=Math.min(.10,hit.depth-.004),relative=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;
      const invA=1/a.mass,invB=1/b.mass,total=invA+invB;
      // Resting overlaps are resolved in depth with a fixed ordering below.
      // Only a moving contact transfers a planar impulse.
      if(nz||(!held&&Math.abs(relative)<.12))continue;
      // Positional contact correction prevents sustained penetration, while the
      // impulse transfers momentum to the neighboring body.
      a.px-=nx*depth*.42*invA/total;a.py-=ny*depth*.42*invA/total;
      b.px+=nx*depth*.42*invB/total;b.py+=ny*depth*.42*invB/total;
      if(relative<-.12){const impulse=-relative*(relative<-2?1.06:1)/total;a.vx-=nx*impulse*invA;a.vy-=ny*impulse*invA;b.vx+=nx*impulse*invB;b.vy+=ny*impulse*invB;}
      a.worldCollision=worldParts(a);b.worldCollision=worldParts(b);
      
    }
    if(held){
      const a=held.actor,pressure=held.strength??1;
      a.fx+=(held.target.x-held.offset.x-a.px)*28*a.mass*(.25+.75*pressure);
      a.fy+=(held.target.y-held.offset.y-a.py)*28*a.mass*(.25+.75*pressure);
      a.omega+=(held.local.x*.25-a.turn)*h*3;
    }
    for(const a of objects){
      const limitX=width/2+a.radius*.3,limitY=height/2+a.radius*.3;
      if(Math.abs(a.px)>limitX)a.fx-=Math.sign(a.px)*(Math.abs(a.px)-limitX)*60*a.mass;
      if(Math.abs(a.py)>limitY)a.fy-=Math.sign(a.py)*(Math.abs(a.py)-limitY)*60*a.mass;
      const damping=Math.exp(-3.8*h);
      a.vx=(a.vx+a.fx/a.mass*h)*damping;a.vy=(a.vy+a.fy/a.mass*h)*damping;
      const speed=Math.hypot(a.vx,a.vy);if(speed>24){a.vx*=24/speed;a.vy*=24/speed;}
      if(Math.abs(a.vx)<.025)a.vx=0;if(Math.abs(a.vy)<.025)a.vy=0;
      a.px+=a.vx*h;a.py+=a.vy*h;
      a.omega+=(-a.turn*6+(a.vx-a.vy)*.10)*h;a.omega*=Math.exp(-5*h);a.turn+=a.omega*h;
      a.vz+=((held?.actor===a?-.14*(held.strength??1):0)-a.depth)*30*h;a.vz*=Math.exp(-11*h);a.depth+=a.vz*h;
    }
  }
  resolveDepth(objects);
  return contacts/steps;
}

export function resolveDepth(objects){
  const ordered=objects.slice().sort((a,b)=>(b.speaking?100:b.layerOrder)-(a.speaking?100:a.layerOrder));
  for(let i=0;i<ordered.length;i++){
    const a=ordered[i];a.z=a.layerOrder;
    // Reserve the entire slow floating path once; idle motion never changes layers.
    const parts=worldParts({...a,floatX:0,floatY:0,floatAngle:0});
    const margin=.20+.04*a.baseSize;
    a.depthEnvelope={minX:Math.min(...parts.map(p=>p.minX))-margin,maxX:Math.max(...parts.map(p=>p.maxX))+margin,minY:Math.min(...parts.map(p=>p.minY))-margin,maxY:Math.max(...parts.map(p=>p.maxY))+margin,minZ:Math.min(...parts.map(p=>p.zMin))-a.z-.02*a.baseSize,maxZ:Math.max(...parts.map(p=>p.zMax))-a.z+.02*a.baseSize};
    const e=a.depthEnvelope;
    for(let j=0;j<i;j++){
      const b=ordered[j],f=b.depthEnvelope;
      if(e.maxX<=f.minX||f.maxX<=e.minX||e.maxY<=f.minY||f.maxY<=e.minY)continue;
      a.z=Math.min(a.z,b.z+f.minZ-e.maxZ-.035);
    }
    a.worldCollision=worldParts(a);
  }
}
