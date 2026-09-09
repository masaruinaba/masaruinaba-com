// Balance visible area as well as neighbor contrast, once before the entrance.
export function colorNeighbors(actors,palette,random){
  const colors=[...new Set(palette)],neighbors=actors.map(()=>new Set());
  for(let i=0;i<actors.length;i++)for(let j=i+1;j<actors.length;j++)if(Math.hypot(actors[i].px-actors[j].px,actors[i].py-actors[j].py)<(actors[i].radius+actors[j].radius)*1.18){neighbors[i].add(j);neighbors[j].add(i);}
  const assignments=actors.map(()=>-1),areas=colors.map(()=>0),weights=actors.map(a=>a.radius*a.radius),target=weights.reduce((a,b)=>a+b,0)/colors.length;
  // Largest balloons receive different colors before small gap fillers are colored.
  const order=actors.map((_,i)=>i).sort((a,b)=>weights[b]-weights[a]);
  for(const i of order){
    let chosen=0,best=Infinity;
    for(let c=0;c<colors.length;c++){
      let conflict=0;for(const j of neighbors[i])if(assignments[j]===c)conflict+=Math.min(weights[i],weights[j]);
      const score=conflict/target*12+(areas[c]+weights[i])/target+random()*.08;
      if(score<best){best=score;chosen=c;}
    }
    assignments[i]=chosen;areas[chosen]+=weights[i];
  }
  actors.forEach((a,i)=>{a.color=colors[assignments[i]];a.body.material.color.set(a.color);a.body.material.attenuationColor.copy(a.body.material.color);});
  document.body.dataset.colorAreas=JSON.stringify(areas.map(a=>+(a/(target*colors.length)).toFixed(3)));
  return actors.reduce((sum,_,i)=>sum+[...neighbors[i]].filter(j=>j>i&&assignments[j]===assignments[i]).length,0);
}
