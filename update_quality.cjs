const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Govind', 'components', 'QualitySection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newArray = `  const principles = [
    {
      id: 'process',
      icon: Sliders,
      title: 'Controlled manufacturing processes',
      description: 'Controlled manufacturing processes',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-blue',
      bgHover: 'hover:bg-brand-blue/5',
      borderActive: 'border-brand-blue',
    },
    {
      id: 'consistency',
      icon: CheckCircle2,
      title: 'Consistent formulation standards',
      description: 'Consistent formulation standards',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-emerald',
      bgHover: 'hover:bg-brand-emerald/5',
      borderActive: 'border-brand-emerald',
    },
    {
      id: 'assurance',
      icon: ShieldCheck,
      title: 'Quality-focused production',
      description: 'Quality-focused production',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-golden',
      bgHover: 'hover:bg-brand-golden/5',
      borderActive: 'border-brand-golden',
    },
    {
      id: 'control',
      icon: ClipboardCheck,
      title: 'Careful filling and packaging',
      description: 'Careful filling and packaging',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-navy',
      bgHover: 'hover:bg-slate-100',
      borderActive: 'border-brand-navy',
    },
    {
      id: 'product',
      icon: Sparkles,
      title: 'Product-focused manufacturing approach',
      description: 'Product-focused manufacturing approach',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-blue',
      bgHover: 'hover:bg-brand-blue/5',
      borderActive: 'border-brand-blue',
    }
  ];`;

content = content.replace(/const principles = \[[\s\S]*?\];/m, newArray);
content = content.replace(/Engineered For Reliability/g, "Precision in Every Formulation. Confidence in Every Product.");
content = content.replace(/Quality is not an afterthought; it is built into the architecture of every Govind formulation through process discipline and environmental control\./g, "Every pharmaceutical product represents a combination of formulation knowledge, manufacturing discipline and quality control. At Govind Remedies, these principles guide our approach from development through finished product.");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated QualitySection");
