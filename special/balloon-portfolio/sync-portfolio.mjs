import {cp,mkdir,readdir,unlink} from 'node:fs/promises';
const source=new URL('./dist/',import.meta.url),target=new URL('../../public/special/balloon-portfolio/',import.meta.url);
await mkdir(target,{recursive:true});
await cp(source,target,{recursive:true});
// Remove only stale Vite bundles belonging to this standalone experience.
const live=new Set(await readdir(new URL('assets/',source)));
for(const name of await readdir(new URL('assets/',target))){
  if(!live.has(name)&&/^[a-zA-Z0-9_-]+\.(js|css)$/.test(name))await unlink(new URL('assets/'+name,target));
}
