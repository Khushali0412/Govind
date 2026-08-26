const fs = require('fs');
const path = require('path');

const componentsDir = path.join('d:', 'Govind', 'components');

const replacements = {
    // 1. Hero Section
    "Hero.tsx": [
        [/Welcome to Govind/, "Trusted Healthcare Manufacturing"],
        [/Best <span className="text-brand-blue">Pharmaceutical<br \/>Manufacturing<\/span><br \/> In India/, 'Advancing Healthcare Through Precision <span className="text-brand-blue">Pharmaceutical Manufacturing</span>'],
        [/Pharmaceutical manufacturing is essential for global healthcare\. It involves rigorous formulation, precise quality control, and advanced packaging to ensure safe, effective medications for patients worldwide\./, "Govind Remedies is committed to delivering reliable pharmaceutical formulations through disciplined manufacturing, stringent quality standards and a patient-focused approach."],
        [/GET IN TOUCH/, "Explore Our Products"],
        [/href="\/contact"/, 'href="/products"'],
        [/<span className="text-xs text-slate-500 font-medium tracking-wide">Call Anytime<\/span>\s*<span className="text-brand-navy font-bold text-lg">\+91 \( 8800 \) - 6780<\/span>/, '<span className="text-brand-navy font-bold text-lg">Partner With Us</span>'],
        [/FORMULATIONS READY/, "Quality-Driven Manufacturing"],
        [/FIND THE BEST<br \/>FORMULATIONS/, "Pharmaceutical<br />Formulations"],
        [/We can do all things/, "Reliable Supply & Support"],
    ],
    // 2 & 9. TrustStrip
    "TrustStrip.tsx": [
        [/Why Govind\?/, "Manufacturing You Can Trust"],
        [/Partner With <span className="text-brand-blue">Precision<\/span>/, 'Built Around Quality. <span className="text-brand-blue">Driven by Precision.</span>'],
        [/Built on pharmaceutical precision, transparent process discipline, and a strong commitment to healthcare partners globally\. We ensure the highest quality formulations\./, "From formulation development to finished pharmaceutical products, Govind Remedies focuses on consistency, quality and operational precision at every stage of manufacturing."],
        [/Process Control/, "Quality First"],
        [/We maintain 100% adherence to defined batch processing parameters/, "Every manufacturing activity is guided by defined quality standards and controlled processes"],
        [/Global Standards/, "Reliable Manufacturing"],
        [/Our facilities meet rigorous international compliance guidelines/, "Structured processes designed to support consistent product quality and dependable supply"],
        [/Reliable Delivery/, "Healthcare Focused"],
        [/Secure supply chain management for on-time global distribution/, "Our work is centered around pharmaceutical products that support healthcare professionals and patients"],
        [/Expert Team/, "Long-Term Partnership"],
        [/Guided by specialists with decades of pharmaceutical experience/, "We aim to build lasting relationships with healthcare, pharmaceutical and business partners"],
    ],
    // 3. ServiceHighlights
    "ServiceHighlights.tsx": [
        [/Core Strengths/, "What We Do"],
        [/Precision-Driven Capabilities/, "Pharmaceutical Manufacturing Built for Healthcare"],
        [/Delivering advanced formulations through controlled, sterile environments and specialized delivery systems designed for modern healthcare needs\./, "Our capabilities bring together formulation expertise, manufacturing discipline and quality-focused processes to support pharmaceutical product development and supply."],
        [/Pharmaceutical Manufacturing/, "Pharmaceutical Formulations"],
        [/It is important to maintain a strictly sterile & controlled environment for safe production\./, "Development and manufacturing of a diverse range of pharmaceutical formulations."],
        [/Quality Focused/, "Injectable Products"],
        [/It is important to follow disciplined quality assurance and avoid compromises in the formulation process\./, "A growing portfolio of injectable pharmaceutical products across multiple therapeutic applications."],
        [/Precision Driven/, "Prefilled Syringes"],
        [/It is important to utilize specialized PFS & specialty packaging for advanced precision delivery\./, "Specialized product presentations designed for convenience, consistency and controlled administration."],
        [/Healthcare Solutions/, "Liquid & Parenteral Products"],
        [/It is important to ensure a robust essential formulations portfolio for reliable patient care worldwide\./, "Manufacturing solutions for selected liquid pharmaceutical and parenteral formulations."],
    ],
    // 5. WhyGovind
    "WhyGovind.tsx": [
        [/Why Choose Us/, "Why Govind Remedies"],
        [/Why Partner With Govind\?/, "A Manufacturing Partner Focused on What Matters"],
        [/Our core principles ensure we deliver reliable, safe, and effective formulations for our global healthcare partners\./, "Choosing the right pharmaceutical manufacturing partner means choosing consistency, quality, responsiveness and a shared commitment to healthcare."],
        [/Quality Focus/, "Quality Commitment"],
        [/Strict adherence to standardized quality management procedures, ensuring batch integrity and accuracy\./, "A quality-focused approach across manufacturing and product handling."],
        [/Reliable Production/, "Product Expertise"],
        [/Disciplined liquid injectable production capabilities in Pre-Filled Syringes \(PFS\) and specialty systems\./, "Experience across a diverse portfolio of pharmaceutical formulations and presentations."],
        [/Diverse Portfolio/, "Manufacturing Discipline"],
        [/Comprehensive formulations across anticoagulants, vitamins, emergency drugs, NSAIDs, and injectables\./, "Structured processes designed to support consistency and dependable production."],
        [/Patient First/, "Partnership Approach"],
        [/Every formulation is developed with the ultimate goal of improving clinical outcomes and safety\./, "We work closely with our partners to understand requirements and build sustainable relationships."],
    ],
    // 6. QualitySection
    "QualitySection.tsx": [
        [/Uncompromising Standards/, "Inside Our Manufacturing"],
        [/Engineered For Reliability/, "Precision in Every Formulation. Confidence in Every Product."],
        [/Quality is not an afterthought; it is built into the architecture of every Govind formulation through process discipline and environmental control\./, "Every pharmaceutical product represents a combination of formulation knowledge, manufacturing discipline and quality control. At Govind Remedies, these principles guide our approach from development through finished product."],
    ],
    // 7. ProductShowcase
    "ProductShowcase.tsx": [
        [/Complete Portfolio/, "Our Product Portfolio"],
        [/Explore Our <span className="text-brand-blue">Pharmaceutical Formulations<\/span>/, 'Explore Our <span className="text-brand-blue">Pharmaceutical Formulations</span>'],
        [/Browse through our specialized therapeutic categories encompassing liquid injectables, pre-filled syringes, and essential medications\./, "Explore our portfolio of pharmaceutical products developed and manufactured across multiple therapeutic and clinical applications."],
        [/Search Formulations\.\.\./, "Search products by name..."],
        [/Anticoagulant/, "Injectable"],
        [/Vitamins & Minerals/, "Prefilled Syringe"],
        [/Electrolytes & Infusions/, "Liquid Products"],
        [/Emergency & Cardiac/, "Pen Presentation"],
        [/Download Complete Portfolio/, "View Complete Product Portfolio"],
    ],
    // 8. CTASection
    "CTASection.tsx": [
        [/Partnership & Enquiries/, "Let's Build Better Healthcare Together"],
        [/Let's Build Better Healthcare Solutions Together\./, "Looking for a Reliable Pharmaceutical Manufacturing Partner?"],
        [/Connect with Govind Remedies to explore our pharmaceutical product portfolio and manufacturing capabilities\./, "Connect with Govind Remedies to discuss your product requirements, manufacturing opportunities and potential partnership."],
        [/Explore Products/, "Start a Conversation"],
        [/Contact Us/, "View Our Products"],
    ],
    // 10. BlogSection
    "BlogSection.tsx": [
        [/Insights & News/, "Knowledge & Updates"],
        [/Latest From Our Blog/, "Insights From Pharmaceutical Manufacturing"],
        [/Stay informed on the latest trends, manufacturing updates, and pharmaceutical breakthroughs\./, "Explore updates, industry perspectives and useful information from the world of pharmaceutical manufacturing and healthcare."],
        [/See All Blogs/, "Explore All Insights"],
        [/The Future of Liquid Injectable Formulations/, "Understanding Pharmaceutical Manufacturing Standards"],
        [/How specialized sterile environments and pre-filled syringes are revolutionizing patient care\./, "Key considerations that influence quality and consistency in pharmaceutical production."],
        [/Why Process Discipline Matters in Pharma/, "The Importance of Quality in Injectable Manufacturing"],
        [/Consistency in manufacturing isn't just about compliance; it's about life-saving reliability\./, "Why controlled processes matter when manufacturing injectable pharmaceutical products."],
        [/Navigating Global Supply Chain Challenges/, "From Formulation to Finished Product"],
        [/How Govind Remedies maintains 100% on-time delivery despite global logistical complexities\./, "Understanding the journey of a pharmaceutical product through the manufacturing process."],
    ],
    // 11. FAQSection
    "FAQSection.tsx": [
        [/Answering Your Enquiries/, "Frequently Asked Questions"],
        [/Find answers to the most common questions about our manufacturing processes, partnerships, and product catalog\./, ""],
        [/What types of pharmaceutical products do you manufacture\?/, "What pharmaceutical products does Govind Remedies manufacture?"],
        [/Do you have capabilities for Pre-Filled Syringes \(PFS\)\?/, "What types of pharmaceutical formulations are available?"],
        [/Are your manufacturing facilities globally certified\?/, "Does Govind Remedies offer prefilled syringe products?"],
        [/How can we partner with Govind for distribution\?/, "How can I enquire about a specific product?"],
        [/What is your typical lead time for large orders\?/, "How can I discuss a manufacturing or business partnership?"],
        [/Do you support contract manufacturing\?/, "What information should I provide for a product enquiry?"],
    ],
    // 12. ContactSection
    "ContactSection.tsx": [
        [/Start a Conversation with Govind/, "Let's Discuss Your Pharmaceutical Requirements"],
        [/Whether you are interested in distribution, contract manufacturing, or general enquiries, our team is here to assist\./, "Whether you are looking for product information, business collaboration or pharmaceutical manufacturing opportunities, our team is ready to connect with you."],
        [/Full Name/, "Name"],
        [/Subject/, "Product / Requirement"],
        [/By submitting this form, you agree to our privacy policy and terms of service\./, "Our team will review your enquiry and get back to you with the relevant information."],
    ],
    // 13. Footer
    "Footer.tsx": [
        [/Building better healthcare through uncompromising quality and continuous innovation\./, "Advancing healthcare through quality-focused pharmaceutical manufacturing."],
        [/Quality is our legacy\./, "Quality in Every Formulation. Trust in Every Partnership."],
        [/Let's Discuss Partnership Options/, "Have a requirement? Let's talk."]
    ]
};

Object.entries(replacements).forEach(([filename, reps]) => {
    const filepath = path.join(componentsDir, filename);
    if (!fs.existsSync(filepath)) return;
    
    let content = fs.readFileSync(filepath, 'utf8');
    reps.forEach(([oldReg, newText]) => {
        content = content.replace(oldReg, newText);
    });
    
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated ${filename}`);
});
