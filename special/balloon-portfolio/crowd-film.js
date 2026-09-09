import * as THREE from 'three';
// Distance to the welded edge controls a thin, folded latex film.
// Shading folds preserve the silhouette and never cut holes into the mesh.
export function prepareFilm(geometry,rim){
  const p=geometry.attributes.position,edge=new Float32Array(p.count);
  for(let i=0;i<p.count;i++){
    let distance=Infinity;
    for(let j=0;j<rim.length;j+=2){const k=rim[j];distance=Math.min(distance,Math.hypot(p.getX(i)-p.getX(k),p.getY(i)-p.getY(k)));}
    edge[i]=Math.min(1,distance);
  }
  geometry.setAttribute('filmEdge',new THREE.BufferAttribute(edge,1));
}
export function softenFilm(material,index){
  material.transmission=[.12,.18,.10,.22][index%4];material.thickness=.15;material.ior=1.34;material.attenuationDistance=.32;material.roughness=.44;material.clearcoat=.015;
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nattribute float filmEdge; varying float vFilmEdge; varying vec3 vFilmPoint;');
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvFilmEdge=filmEdge; vFilmPoint=position;');
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying float vFilmEdge; varying vec3 vFilmPoint;
      float filmFold(vec3 p,float edge){
        float angle=atan(p.y,p.x);
        float ribs=sin(angle*5.0+sin(angle*2.0)*.7+edge*5.0);
        float band=smoothstep(.025,.10,edge)*(1.0-smoothstep(.20,.45,edge));
        return pow(max(0.0,ribs),3.0)*.0012*band;

      }
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>',`#include <normal_fragment_begin>
      float foldHeight=filmFold(vFilmPoint,vFilmEdge);
      vec3 filmDx=dFdx(-vViewPosition),filmDy=dFdy(-vViewPosition);
      vec3 filmR1=cross(filmDy,normal),filmR2=cross(normal,filmDx);
      float filmDet=dot(filmDx,filmR1);
      normal=normalize(abs(filmDet)*normal-sign(filmDet)*(dFdx(foldHeight)*filmR1+dFdy(foldHeight)*filmR2));
    `);
    const transmissionChunk=THREE.ShaderChunk.transmission_fragment
      .replace('material.transmission = transmission;', 'material.transmission = transmission * smoothstep(.035,.20,vFilmEdge);')
      .replace('material.thickness = thickness;', 'material.thickness = thickness * mix(.12,1.0,smoothstep(.02,.35,vFilmEdge));');
    shader.fragmentShader=shader.fragmentShader.replace('#include <transmission_fragment>',transmissionChunk);
  };
  material.customProgramCacheKey=()=> 'soft-latex-film-v2';
}
