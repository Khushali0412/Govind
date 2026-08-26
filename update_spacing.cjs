const fs = require('fs');
const path = require('path');
const componentsDir = 'd:/Govind/components';

const files = [
  'WhyGovind.tsx',
  'ServiceHighlights.tsx',
  'ManufacturingCapabilities.tsx',
  'QualitySection.tsx',
  'ProductShowcase.tsx',
  'TestimonialsSection.tsx',
  'BlogSection.tsx',
  'FAQSection.tsx',
  'ContactSection.tsx',
  'CTASection.tsx',
  'Hero.tsx',
  'TrustStrip.tsx'
];

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Standardize Pill Margin to mb-6
    content = content.replace(/uppercase mb-4 shadow-sm/g, 'uppercase mb-6 shadow-sm');
    content = content.replace(/uppercase shadow-sm"/g, 'uppercase mb-6 shadow-sm"'); // Catch Testimonials edge case

    // 2. Fix specific container margins
    if (file === 'ManufacturingCapabilities.tsx') {
      content = content.replace(/text-center max-w-3xl mx-auto mb-20/g, 'text-center max-w-3xl mx-auto mb-16');
    }
    
    if (file === 'BlogSection.tsx') {
      content = content.replace(/items-center mb-10 gap-6/g, 'items-center mb-16 gap-6');
    }

    if (file === 'QualitySection.tsx') {
      content = content.replace(/text-lg text-slate-600 mb-8 max-w-2xl mx-auto/g, 'text-lg text-slate-600 max-w-2xl mx-auto');
    }

    if (file === 'CTASection.tsx') {
      content = content.replace(/uppercase mb-6 shadow-sm"/g, 'uppercase mb-6 shadow-sm"');
      // If CTA section has any specific margins
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Standardized spacing in ${file}`);
  }
});
