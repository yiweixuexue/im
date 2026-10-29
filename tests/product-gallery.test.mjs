import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
async function load(file) {
 const source=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
 return import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
}
const {bespokeWorks}=await load('data/bespoke-works.ts');
const {catalog}=await load('data/heritage-catalog.ts');
test('all products have unique existing images, useful alt text and original cover first',()=>{
 for(const item of [...bespokeWorks,...catalog]){
  assert.ok(item.images.length,item.id);assert.equal(item.images[0].src,item.image);
  assert.equal(new Set(item.images.map(p=>p.src)).size,item.images.length);
  for(const photo of item.images){assert.ok(photo.alt.length>10);assert.ok(fs.existsSync('public'+photo.src),photo.src)}
 }
});
test('only audited exact-product photo groups have additional views',()=>{
 const multiple=[...bespokeWorks,...catalog].filter(p=>p.images.length>1);
 assert.deepEqual(multiple.map(p=>[p.id,p.images.length]),[['BW-04',4],['BX-01',2],['BX-02',2],['BX-03',2]]);
});
test('export mounts only covers, single-photo cards have no controls, staging paths resolve',()=>{
 for(const route of ['cn/custom','en/heritage/library']){
  const html=fs.readFileSync('out/'+route+'/index.html','utf8').replace(/<script\b[\s\S]*?<\/script>/g,'');
  const figures=[...html.matchAll(/<figure[^>]*product-gallery[\s\S]*?<\/figure>/g)].map(m=>m[0]);
  assert.ok(figures.length);
  for(const fig of figures){
   assert.equal((fig.match(/<img\b/g)||[]).length,1);
   assert.match(fig,/src="\/dev\/images\//);assert.match(fig,/loading="lazy"/);
   const multi=fig.includes('aria-roledescription="carousel"');
   assert.equal(fig.includes('gallery-controls'),multi);
   if(multi){assert.match(fig,/tabindex="0"/);assert.match(fig,/aria-live="polite"/)}
  }
 }
});
