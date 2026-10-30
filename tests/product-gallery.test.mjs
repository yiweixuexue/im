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
test('all products have unique existing images, useful alt text and canonical cover first',()=>{
 for(const item of [...bespokeWorks,...catalog]){
  assert.ok(item.images.length,item.id);assert.equal(item.images[0].src,item.image);
  assert.equal(new Set(item.images.map(p=>p.src)).size,item.images.length);
  for(const photo of item.images){assert.ok(photo.alt.length>10);assert.ok(fs.existsSync('public'+photo.src),photo.src)}
 }
});
test('all audited original photo groups are wired without unreviewed extra views',()=>{
 const audit=JSON.parse(fs.readFileSync('docs/heritage-gallery-media-20261029.json','utf8'));
 const expected=new Map([['BW-04',4],['BX-03',2],...Object.entries(audit.products).map(([id,p])=>[id,p.totalPhotos])]);
 for(const item of [...bespokeWorks,...catalog]){
  assert.equal(item.images.length,expected.get(item.id)??1,item.id);
  const reviewed=audit.products[item.id];
  if(reviewed){
   assert.deepEqual(item.images.map(p=>p.src),[...reviewed.existingPhotos,...reviewed.addedPhotos].map(p=>p.src),item.id);
   for(const photo of reviewed.addedPhotos)assert.match(photo.sourceSha256,/^[a-f0-9]{64}$/);
  }
 }
 assert.equal(catalog.filter(p=>p.craft==='ronghua'&&p.images.length>1).length,20);
 assert.equal(catalog.filter(p=>p.craft==='chanhua'&&p.images.length>1).length,2);
});

test('duplicate use records merge into one product, edited hairpin and colour variants are explicit',()=>{
 assert.equal(catalog.length,61);
 for(const id of ['RH-13','RH-12','CH-02'])assert.ok(!catalog.some(p=>p.id===id));
 const byId=Object.fromEntries(catalog.map(p=>[p.id,p]));
 assert.match(byId['RH-01'].form,/hair accessory.*brooch/i);
 assert.match(byId['RH-11'].form,/brooch.*arrangement/i);
 assert.ok(byId['RH-11'].uses.includes('wear')&&byId['RH-11'].uses.includes('home'));
 const audit=JSON.parse(fs.readFileSync('docs/heritage-gallery-media-20261029.json','utf8'));
 for(const p of audit.products['CH-01'].addedPhotos){assert.ok(p.edited);assert.match(p.source,/edited\//)}
 assert.equal(byId['CH-04'].images.length,1);
 assert.match(byId['CH-04'].image,/gallery-20261030\/chanhua\/pink-tulip-edited/);
 for(const id of ['RH-03','RH-23'])assert.match(byId[id].images[1].src,/textfree\.webp$/);
 const lion=byId['LE-01'];assert.equal(lion.images.length,10);
 for(const colour of ['Gold','Light blue','Coral orange'])assert.ok(lion.images.some(p=>p.caption?.startsWith(colour)));
});

test('export mounts only covers, single-photo cards have no controls, staging paths resolve',()=>{
 for(const route of ['cn/custom','en/heritage/library']){
  const html=fs.readFileSync('out/'+route+'/index.html','utf8').replace(/<script\b[\s\S]*?<\/script>/g,'');
  const figures=[...html.matchAll(/<figure[^>]*im-product-gallery[\s\S]*?<\/figure>/g)].map(m=>m[0]);
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
