// A continuous grip: every pull translates and rolls, with more leverage at the rim.
export function rollGrip(actor,grip,dx,dy,dt){
  const radius=Math.max(.2,actor.radius),length=Math.hypot(grip.x,grip.y);
  const leverage=Math.min(1,length/radius),gain=(.22+.58*leverage)/radius;
  const x=-dy*gain,y=dx*gain,z=(grip.x*dy-grip.y*dx)*.35/(radius*radius);
  actor.tiltX=(actor.tiltX||0)+x;actor.tiltY=(actor.tiltY||0)+y;actor.angle+=z;
  const blend=1-Math.exp(-18*dt);
  actor.rollX=(actor.rollX||0)*(1-blend)+x/Math.max(.008,dt)*blend;
  actor.rollY=(actor.rollY||0)*(1-blend)+y/Math.max(.008,dt)*blend;
}
export function coastGrip(actor,dt,held){
  const damping=Math.exp(-(held?14:5)*dt);
  if(!held){actor.tiltX=(actor.tiltX||0)+(actor.rollX||0)*dt;actor.tiltY=(actor.tiltY||0)+(actor.rollY||0)*dt;}
  actor.rollX=(actor.rollX||0)*damping;actor.rollY=(actor.rollY||0)*damping;
}
export function scaleGrip(actor,value){
  const next=Math.max(.65,Math.min(1.5,value)),ratio=next/(actor.userScale||1);
  actor.baseSize*=ratio;actor.radius*=ratio;actor.root?.scale.multiplyScalar(ratio);actor.mass=Math.max(.15,actor.radius*actor.radius);actor.userScale=next;
  return next;
}
