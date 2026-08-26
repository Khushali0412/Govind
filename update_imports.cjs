const fs = require('fs');
const path = require('path');
const componentsDir = path.join('d:', 'Govind', 'components');

fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx')).forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('ShieldCheck')) {
    if (content.match(/import \{([^}]+)\} from 'lucide-react';/)) {
        content = content.replace(/import \{([^}]+)\} from 'lucide-react';/, (match, p1) => {
            if (!p1.includes('ShieldCheck')) {
                return `import { ${p1.trim()}, ShieldCheck } from 'lucide-react';`;
            }
            return match;
        });
    } else {
        content = `import { ShieldCheck } from 'lucide-react';\n` + content;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  }
});
