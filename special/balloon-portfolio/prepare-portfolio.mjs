import {readFile,writeFile,mkdir,cp} from 'node:fs/promises';
const source=new URL('../../src/data/portfolio.ts',import.meta.url);
const data=(await readFile(source,'utf8')).replace(/ +as const\b/g,'');
await writeFile(new URL('./portfolio-data.js',import.meta.url),'// Generated from src/data/portfolio.ts by prepare-portfolio.mjs.\n'+data);
for(const folder of ['works','thumbnails']){
 const target=new URL('./public/portfolio/'+folder+'/',import.meta.url);
 await mkdir(target,{recursive:true});
 await cp(new URL('../../public/'+folder+'/',import.meta.url),target,{recursive:true});
}
