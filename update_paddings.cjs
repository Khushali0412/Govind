const fs = require('fs');
const path = require('path');
const componentsDir = 'd:/Govind/components';

const updates = [
  { file: 'BlogSection.tsx', search: /className="py-8 /, replace: 'className="py-24 ' },
  { file: 'ContactSection.tsx', search: /className="py-20 /, replace: 'className="py-24 ' },
  { file: 'CTASection.tsx', search: /className="py-16 /, replace: 'className="py-24 ' },
  { file: 'FAQSection.tsx', search: /className="py-16 /, replace: 'className="py-24 ' },
  { file: 'ServiceHighlights.tsx', search: /className="pb-24 pt-0 /, replace: 'className="py-24 ' },
  { file: 'Hero.tsx', search: /className="relative min-h-screen flex items-center pt-24 pb-16 /, replace: 'className="relative min-h-screen flex items-center pt-32 pb-24 ' },
];

updates.forEach(update => {
  const filePath = path.join(componentsDir, update.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(update.search, update.replace);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated padding in ' + update.file);
  }
});
