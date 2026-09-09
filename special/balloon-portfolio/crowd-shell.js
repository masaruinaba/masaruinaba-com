// One closed surface with a shared equator: no doubled, flat welded flange.
export function crowdShell(segments=192,rings=20){
  const positions=[0,0,.798],triangles=[],rim=[];
  for(let row=1;row<rings;row++){
    const theta=row/rings*Math.PI;
    for(let j=0;j<segments;j++){const a=j/segments*Math.PI*2;positions.push(.95*Math.sin(theta)*Math.cos(a),.95*Math.sin(theta)*Math.sin(a),.4+.398*Math.cos(theta));if(row===rings/2)rim.push(1+(row-1)*segments+j);}
  }
  const back=positions.length/3;positions.push(0,0,.002);
  for(let j=0;j<segments;j++){
    const next=(j+1)%segments;triangles.push(0,1+j,1+next);
    for(let row=0;row<rings-2;row++){const a=1+row*segments+j,b=1+row*segments+next,c=a+segments,d=b+segments;triangles.push(a,c,b,b,c,d);}
    const last=1+(rings-2)*segments;triangles.push(back,last+next,last+j);
  }
  return {positions,triangles,rim};
}

// Broad, shallow slack in the membrane; keep the shared edge closed and smooth.
export function relaxCrowdShell(data){
  if(data.noSeam)return data;
  const positions=data.positions.slice();
  for(let i=0;i<positions.length;i+=3){
    const x=positions[i],y=positions[i+1],depth=positions[i+2]-.4;
    const shoulder=Math.exp(-(((x+.26)/.48)**2+((y-.28)/.42)**2));
    const lower=Math.exp(-(((x-.24)/.52)**2+((y+.30)/.40)**2));
    positions[i+2]=.4+depth*(1.02-.115*shoulder-.088*lower);
    positions[i]*=1+.016*Math.exp(-(((y+.38)/.45)**2));
  }
  // Relax distance-field ridges where petal/point regions meet. Keep the welded
  // boundary fixed so this softens the membrane without changing its silhouette.
  const neighbors=Array.from({length:positions.length/3},()=>new Set()),fixed=new Set(data.rim);
  for(let t=0;t<data.triangles.length;t+=3)for(let k=0;k<3;k++){
    const a=data.triangles[t+k],b=data.triangles[t+(k+1)%3];neighbors[a].add(b);neighbors[b].add(a);
  }
  for(let pass=0;pass<20;pass++){
    const previous=positions.slice();
    for(let i=0;i<neighbors.length;i++)if(!fixed.has(i)&&neighbors[i].size){
      let mean=0;for(const j of neighbors[i])mean+=previous[j*3+2];mean/=neighbors[i].size;
      positions[i*3+2]=previous[i*3+2]*.55+mean*.45;
    }
  }
  return {...data,positions};
}
