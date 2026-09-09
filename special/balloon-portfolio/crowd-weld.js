// A sealed, multi-row film flange continuous with the front and rear membranes.
// Curvature and tiny curls vary smoothly; no coincident overlay or tubular piping.
export function weldContour(data){
  if(data.noSeam)return data;
  const positions=data.positions.slice(),n=data.rim.length,oldRim=new Set(data.rim);
  const contour=data.rim.map(i=>({x:positions[i*3],y:positions[i*3+1]}));
  const frames=contour.map((p,j)=>{
    const a=contour[(j+n-2)%n],b=contour[(j+2)%n],dx=b.x-a.x,dy=b.y-a.y,l=Math.hypot(dx,dy)||1;
    const angle=j/n*Math.PI*2;
    return {p,nx:dy/l,ny:-dx/l,width:.015+.001*Math.sin(angle*3+.8),curl:.005*Math.sin(angle*18)+.003*Math.sin(angle*33+.4)};
  });
  const front=data.rim.map(i=>i-n),back=data.rim.map(i=>i+n);
  function write(loop,t,side){
    for(let j=0;j<n;j++){
      const {p,nx,ny,width,curl}=frames[j],i=loop[j]*3;
      positions[i]=p.x+nx*width*t;positions[i+1]=p.y+ny*width*t;
      positions[i+2]=.4+curl*t*t+side*.0016*(1-t*t);
    }
  }
  write(front,0,1);write(back,0,-1);write(data.rim,1,0);
  const make=(t,side)=>{const loop=Array.from({length:n},()=>{const i=positions.length/3;positions.push(0,0,0);return i;});write(loop,t,side);return loop;};
  const loops=[front,make(.25,1),make(.55,1),make(.8,1),data.rim,make(.8,-1),make(.55,-1),make(.25,-1),back];
  const triangles=[];
  for(let i=0;i<data.triangles.length;i+=3){const tri=data.triangles.slice(i,i+3);if(!tri.some(v=>oldRim.has(v)))triangles.push(...tri);}
  for(let row=0;row<loops.length-1;row++)for(let j=0;j<n;j++){
    const next=(j+1)%n,a=loops[row][j],b=loops[row][next],c=loops[row+1][j],d=loops[row+1][next];
    triangles.push(a,c,b,b,c,d);
  }
  return {...data,positions,triangles};
}
