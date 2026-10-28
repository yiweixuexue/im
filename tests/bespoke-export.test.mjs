import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
const root=path.resolve('out');
const html=route=>fs.readFileSync(path.join(root,route,'index.html'),'utf8').replace(/<script\b[\s\S]*?<\/script>/g,'');
test('every exported header has the same two staging business destinations',()=>{
 function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name==='index.html'){const s=fs.readFileSync(p,'utf8').replace(/<script\b[\s\S]*?<\/script>/g,'');if(!s.includes('business-paths'))continue;for(const nav of s.matchAll(/<nav class="business-paths"[\s\S]*?<\/nav>/g)){assert.match(nav[0],/href="\/dev\/cn\/custom\/"/);assert.match(nav[0],/href="\/dev\/en\/heritage\/"/);assert.doesNotMatch(nav[0],/en\/bespoke|中文 \/ EN/);}}}}walk(root);
});
test('bespoke exports 15 bilingual cards with shared anchors and native bilingual filters',()=>{
 const s=html('cn/custom');assert.equal((s.match(/class="bespoke-work-card"/g)||[]).length,15);
 for(const card of s.split('class="bespoke-work-card"').slice(1)){assert.ok((card.match(/lang="en"/g)||[]).length>=5)}
 for(const id of ['works','process','women','men','wedding','my-inspiration'])assert.ok(s.includes(`id="${id}"`));
 assert.match(s,/<link rel="canonical" href="\/dev\/cn\/custom\/"/);assert.match(s,/href="#process"/);assert.match(s,/href="#works"/);assert.ok(!s.includes('|||'));
 assert.match(s,/<option value="men">男士定制 \/ Menswear<\/option>/);
});
test('legacy English bridge is canonical and overseas ceremony stays independent',()=>{
 const s=html('en/bespoke');assert.match(s,/href="\/dev\/cn\/custom\/"/);assert.match(s,/noindex/);assert.ok(html('en/custom').includes('main-content'));
});


test('shared English labels and unfiltered totals render only once, jacket belongs to menswear',()=>{
 const s=html('cn/custom');
 for(const label of ['01 · LOOK','02 · THINK','03 · TALK','THE BESPOKE JOURNEY'])assert.equal(s.split(label).length-1,1,label);
 const result=s.match(/class="bespoke-results"[\s\S]*?<\/section>/)[0].split('<nav')[0];
 assert.equal((result.match(/>15</g)||[]).length,1);
 const women=s.split('id="women"')[1].split('id="men"')[0];
 const men=s.split('id="men"')[1].split('id="wedding"')[0];
 assert.equal((women.match(/class="bespoke-work-card"/g)||[]).length,8);
 assert.equal((men.match(/class="bespoke-work-card"/g)||[]).length,6);
 assert.ok(!women.includes('BW-09'));assert.ok(men.includes('BW-09'));assert.ok(men.includes('Menswear · Jacket'));
});
