import {cp,mkdir} from 'node:fs/promises';
const target=new URL('../../public/special/balloon-portfolio/',import.meta.url);
await mkdir(target,{recursive:true});
await cp(new URL('./dist/',import.meta.url),target,{recursive:true});
