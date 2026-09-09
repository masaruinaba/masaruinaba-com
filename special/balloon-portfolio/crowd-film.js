import * as THREE from 'three';
// Distance to the welded edge controls a thin, softly folded vinyl film.
// Shading folds preserve the silhouette and never cut holes into the mesh.
export function prepareFilm(geometry,rim){
  const p=geometry.attributes.position,n=rim.length,edge=new Float32Array(p.count);
  const points=rim.map(i=>new THREE.Vector2(p.getX(i),p.getY(i)));
  const turns=points.map((b,j)=>{const a=points[(j+n-3)%n],c=points[(j+3)%n];return Math.atan2((b.x-a.x)*(c.y-b.y)-(b.y-a.y)*(c.x-b.x),(b.x-a.x)*(c.x-b.x)+(b.y-a.y)*(c.y-b.y));});
  const selected=[];
  for(const j of Array.from({length:n},(_,j)=>j).sort((a,b)=>turns[a]-turns[b])){
    if(turns[j]>-.12||selected.length>=6)break;
    if(selected.every(k=>Math.min(Math.abs(k-j),n-Math.abs(k-j))>n/12))selected.push(j);
  }
  if(!selected.length)selected.push(Math.floor(n*.13),Math.floor(n*.58));
  geometry.userData.filmAnchors=selected.map(j=>{
    const tangent=points[(j+2)%n].clone().sub(points[(j+n-2)%n]).normalize();
    return {frame:new THREE.Vector4(points[j].x,points[j].y,-tangent.y,tangent.x),weight:turns[j]<-.12?1:.30};
  });
  for(let i=0;i<p.count;i++){
    let distance=Infinity;
    for(let j=0;j<n;j++){
      const a=points[j],b=points[(j+1)%n],dx=b.x-a.x,dy=b.y-a.y;
      const t=Math.max(0,Math.min(1,((p.getX(i)-a.x)*dx+(p.getY(i)-a.y)*dy)/(dx*dx+dy*dy||1)));
      distance=Math.min(distance,Math.hypot(p.getX(i)-a.x-dx*t,p.getY(i)-a.y-dy*t));
    }
    edge[i]=Math.min(1,distance);
  }
  geometry.setAttribute('filmEdge',new THREE.BufferAttribute(edge,1));
}
export function softenFilm(material,index,geometry){
  material.transparent=true;material.opacity=1;material.depthWrite=true;
  material.transmission=0;material.thickness=.14;material.ior=1.36;material.attenuationDistance=1.5;material.roughness=.34;material.clearcoat=.07;material.clearcoatRoughness=.34;material.envMapIntensity=1.45;
  material.onBeforeCompile=shader=>{
    Object.assign(shader.uniforms,material.userData.frost);
    shader.uniforms.filmPhase={value:index*2.399963};
    const anchors=geometry.userData.filmAnchors||[];
    const random=k=>{const x=Math.sin(index*91.7+k*117.3)*43758.5453;return x-Math.floor(x);};
    shader.uniforms.filmProfile={value:new THREE.Vector4(.8+random(1)*.5,.65+random(2)*.5,(random(3)-.5)*.14,random(4)*.4)};
    shader.uniforms.filmAnchors={value:Array.from({length:6},(_,i)=>{
      const frame=anchors[i]?.frame.clone()||new THREE.Vector4(),angle=(random(i+40)-.5)*1.1;
      const nx=frame.z,ny=frame.w;
      frame.x+=ny*(random(i+50)-.5)*.09;frame.y-=nx*(random(i+50)-.5)*.09;
      frame.z=nx*Math.cos(angle)-ny*Math.sin(angle);frame.w=nx*Math.sin(angle)+ny*Math.cos(angle);
      return frame;
    })};
    shader.uniforms.foldShape={value:Array.from({length:6},(_,i)=>new THREE.Vector4(.027+random(i+60)*.035,.12+random(i+70)*.16,(random(i+80)-.5)*1.2,.075+random(i+90)*.11))};
    shader.uniforms.filmWeights={value:Array.from({length:6},(_,i)=>anchors[i]?anchors[i].weight*(random(i+12)>.32?.5+random(i+22)*.5:0):0)};
    shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nattribute float filmEdge; varying float vFilmEdge; varying vec3 vFilmPoint;');
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvFilmEdge=filmEdge; vFilmPoint=position;');
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
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
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>',`#include <normal_fragment_begin>
      float foldHeight=filmFold(vFilmPoint,vFilmEdge);
      vec3 filmDx=dFdx(-vViewPosition),filmDy=dFdy(-vViewPosition);
      vec3 filmR1=cross(filmDy,normal),filmR2=cross(normal,filmDx);
      float filmDet=dot(filmDx,filmR1);
      normal=normalize(abs(filmDet)*normal-sign(filmDet)*(dFdx(foldHeight)*filmR1+dFdy(foldHeight)*filmR2));
    `);
    shader.fragmentShader=shader.fragmentShader.replace('#include <colorspace_fragment>',`#include <colorspace_fragment>
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
    `);
  };
  material.customProgramCacheKey=()=> 'contour-weld-film-v20';
}
