const fs = require('fs');
const path = require('path');

const componentsDir = 'd:/Govind/components';

const standardBtnClass = "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-1";

// 1. Hero.tsx
let heroPath = path.join(componentsDir, 'Hero.tsx');
let hero = fs.readFileSync(heroPath, 'utf8');
hero = hero.replace(/className="inline-flex items-center gap-3 bg-brand-navy hover:bg-brand-navy-dark text-white px-8 py-3\.5 rounded-full font-semibold transition-all duration-300 shadow-\[0_8px_20px_rgba\(18,38,58,0\.2\)\] hover:shadow-\[0_12px_25px_rgba\(18,38,58,0\.3\)\] hover:-translate-y-0\.5"/, `className="${standardBtnClass}"`);
fs.writeFileSync(heroPath, hero);

// 2. CTASection.tsx
let ctaPath = path.join(componentsDir, 'CTASection.tsx');
let cta = fs.readFileSync(ctaPath, 'utf8');
cta = cta.replace(/className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-emerald hover:from-brand-blue-dark hover:to-brand-emerald text-white font-bold text-base shadow-lg shadow-brand-blue\/20 transition-all duration-300 flex items-center justify-center gap-2"/, `className="${standardBtnClass}"`);
cta = cta.replace(/className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white\/5 hover:bg-white\/10 text-white font-bold text-base border border-white\/10 hover:border-white\/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"/, `className="${standardBtnClass}"`);
fs.writeFileSync(ctaPath, cta);

// 3. BlogSection.tsx
let blogPath = path.join(componentsDir, 'BlogSection.tsx');
let blog = fs.readFileSync(blogPath, 'utf8');
blog = blog.replace(/className="inline-flex items-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white pl-6 pr-2 py-2 rounded-full font-bold transition-all shadow-md group"/, `className="${standardBtnClass}"`);
fs.writeFileSync(blogPath, blog);

// 4. ContactSection.tsx
let contactPath = path.join(componentsDir, 'ContactSection.tsx');
let contact = fs.readFileSync(contactPath, 'utf8');
contact = contact.replace(/className="inline-flex items-center gap-3 bg-white text-brand-navy pl-2 pr-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0\.5 group"/, `className="${standardBtnClass}"`);
fs.writeFileSync(contactPath, contact);

// 5. ProductShowcase.tsx (Empty State Button)
let prodPath = path.join(componentsDir, 'ProductShowcase.tsx');
let prod = fs.readFileSync(prodPath, 'utf8');
prod = prod.replace(/className="mt-4 px-8 py-4 rounded-2xl bg-brand-navy hover:bg-brand-blue text-white font-extrabold text-sm shadow-xl hover:shadow-glow-blue transition-all duration-300 transform active:scale-95"/, `className="${standardBtnClass}"`);
fs.writeFileSync(prodPath, prod);

console.log("Updated standard buttons");
