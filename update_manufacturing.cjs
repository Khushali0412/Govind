const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Govind', 'components', 'ManufacturingCapabilities.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newArray = `  const steps = [
    {
      number: '01',
      title: 'Material Selection',
      icon: TestTube,
      description: 'Careful sourcing and evaluation of materials used in pharmaceutical manufacturing.',
    },
    {
      number: '02',
      title: 'Formulation & Processing',
      icon: Factory,
      description: 'Controlled manufacturing processes focused on consistency and product integrity.',
    },
    {
      number: '03',
      title: 'Quality Control',
      icon: CheckCircle,
      description: 'Testing and quality checks to maintain defined product standards.',
    },
    {
      number: '04',
      title: 'Filling & Packaging',
      icon: PackageCheck,
      description: 'Careful filling, presentation and packaging of finished pharmaceutical products.',
    },
    {
      number: '05',
      title: 'Final Release',
      icon: Truck,
      description: 'Products move through defined quality procedures before release for supply.',
    }
  ];

  const leftSteps = steps.slice(0, 3);
  const rightSteps = steps.slice(3, 5);`;

content = content.replace(/const steps = \[[\s\S]*?\];\s*const leftSteps = steps\.slice\(0, 3\);\s*const rightSteps = steps\.slice\(3, 6\);/m, newArray);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated ManufacturingCapabilities");
