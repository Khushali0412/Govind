const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Govind', 'components', 'TestimonialsSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace headings
content = content.replace(/Testimonials/, "Built on Trust");
content = content.replace(/Partner stories of reliability and quality/, "Partnerships Built on Reliability and Quality");
content = content.replace(/Discover inspiring stories of trust and excellence from healthcare organizations we've had the privilege to serve\./, "We believe strong pharmaceutical partnerships are built through transparency, consistency and a shared commitment to delivering quality healthcare products.");

// Replace array
const newArray = `  const testimonials = [
    {
      id: 1,
      name: "Reliable",
      role: "Manufacturing",
      text: "Focused on dependable manufacturing and supply.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Quality Driven",
      role: "Standards",
      text: "Committed to maintaining high standards throughout our processes.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Responsive",
      role: "Partnership",
      text: "Working closely with partners to understand and address their requirements.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    }
  ];`;
  
content = content.replace(/const testimonials = \[[\s\S]*?\];/m, newArray);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated TestimonialsSection");
