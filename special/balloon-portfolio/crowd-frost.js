import * as THREE from 'three';

// Capture the already drawn, farther layers just before this membrane is drawn.
// The membrane stays opaque; only this blurred sample supplies transmitted light.
export function attachFrost(mesh){
  const uniforms={frostMap:{value:null},frostRect:{value:new THREE.Vector4()},frostRadius:{value:12},frostLod:{value:0}};
  mesh.material.userData.frost=uniforms;
  const size=new THREE.Vector2(),origin=new THREE.Vector2(),center=new THREE.Vector3();
  let texture;
  mesh.onBeforeRender=(renderer,scene,camera)=>{
    renderer.getDrawingBufferSize(size);
    if(!mesh.geometry.boundingSphere)mesh.geometry.computeBoundingSphere();
    const actor=mesh.userData.actor;
    const extent=mesh.geometry.boundingSphere.radius*(actor?.baseSize||1)*1.55;
    const pixels=extent*2*size.x/(camera.right-camera.left);
    const w=Math.min(size.x,Math.ceil((pixels+64)/64)*64),h=Math.min(size.y,Math.ceil((pixels+64)/64)*64);
    if(!texture||texture.image.width!==w||texture.image.height!==h){
      texture?.dispose();texture=new THREE.FramebufferTexture(w,h);
      texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;
      uniforms.frostMap.value=texture;
    }
    center.copy(mesh.geometry.boundingSphere.center).applyMatrix4(mesh.matrixWorld).project(camera);
    origin.set(Math.max(0,Math.min(size.x-w,Math.floor((center.x*.5+.5)*size.x-w/2))),Math.max(0,Math.min(size.y-h,Math.floor((center.y*.5+.5)*size.y-h/2))));
    uniforms.frostRect.value.set(origin.x,origin.y,w,h);
    uniforms.frostRadius.value=Math.max(10,Math.min(28,pixels*.055));
    renderer.copyFramebufferToTexture(texture,origin);
    // Build the small filtered levels once per capture, rather than taking
    // dozens of full-resolution samples for every visible membrane pixel.
    const gl=renderer.getContext();
    renderer.state.bindTexture(gl.TEXTURE_2D,renderer.properties.get(texture).__webglTexture);
    gl.generateMipmap(gl.TEXTURE_2D);
    renderer.state.unbindTexture();
    uniforms.frostLod.value=Math.max(0,Math.log2(uniforms.frostRadius.value*1.2));
  };
  mesh.material.addEventListener('dispose',()=>texture?.dispose());
}
