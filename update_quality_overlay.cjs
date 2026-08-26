const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Govind', 'components', 'QualitySection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newArray = `  const principles = [
    {
      id: 'process',
      icon: Sliders,
      title: 'Controlled manufacturing processes',
      overlayText: 'Standard Operating Procedure Enforced',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-blue',
      bgHover: 'hover:bg-brand-blue/5',
      borderActive: 'border-brand-blue',
    },
    {
      id: 'consistency',
      icon: CheckCircle2,
      title: 'Consistent formulation standards',
      overlayText: 'Precision Batch Uniformity',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-emerald',
      bgHover: 'hover:bg-brand-emerald/5',
      borderActive: 'border-brand-emerald',
    },
    {
      id: 'assurance',
      icon: ShieldCheck,
      title: 'Quality-focused production',
      overlayText: 'Analytical Quality Assurance',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-golden',
      bgHover: 'hover:bg-brand-golden/5',
      borderActive: 'border-brand-golden',
    },
    {
      id: 'control',
      icon: ClipboardCheck,
      title: 'Careful filling and packaging',
      overlayText: 'Secure Secondary Packaging',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-navy',
      bgHover: 'hover:bg-slate-100',
      borderActive: 'border-brand-navy',
    },
    {
      id: 'product',
      icon: Sparkles,
      title: 'Product-focused manufacturing approach',
      overlayText: 'Patient-Centric Formulations',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-blue',
      bgHover: 'hover:bg-brand-blue/5',
      borderActive: 'border-brand-blue',
    }
  ];`;

content = content.replace(/const principles = \[[\s\S]*?\];/m, newArray);
content = content.replace(/<div className="text-white text-base font-bold capitalize">\{activeItem\.title\}<\/div>/g, '<div className="text-white text-base font-bold capitalize">{activeItem.overlayText}</div>');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated QualitySection with overlayText");
