import os
import re

components_dir = r"d:\Govind\components"

replacements = {
    # 1. Hero Section
    "Hero.tsx": [
        (r"Welcome to Govind", r"Trusted Healthcare Manufacturing"),
        (r"Best <span className=\"text-brand-blue\">Pharmaceutical<br />Manufacturing</span><br /> In India", r"Advancing Healthcare Through Precision <span className=\"text-brand-blue\">Pharmaceutical Manufacturing</span>"),
        (r"Pharmaceutical manufacturing is essential for global healthcare\. It involves rigorous formulation, precise quality control, and advanced packaging to ensure safe, effective medications for patients worldwide\.", r"Govind Remedies is committed to delivering reliable pharmaceutical formulations through disciplined manufacturing, stringent quality standards and a patient-focused approach."),
        (r"GET IN TOUCH", r"Explore Our Products"),
        (r"href=\"/contact\"", r"href=\"/products\""),
        (r"<span className=\"text-xs text-slate-500 font-medium tracking-wide\">Call Anytime</span>\s*<span className=\"text-brand-navy font-bold text-lg\">\+91 \( 8800 \) - 6780</span>", r"<span className=\"text-brand-navy font-bold text-lg\">Partner With Us</span>"),
        (r"FORMULATIONS READY", r"Quality-Driven Manufacturing"),
        (r"FIND THE BEST<br />FORMULATIONS", r"Pharmaceutical<br />Formulations"),
        (r"We can do all things", r"Reliable Supply & Support"),
    ],
    # 2 & 9. TrustStrip (Partner With Precision)
    "TrustStrip.tsx": [
        (r"Why Govind\?", r"Manufacturing You Can Trust"),
        (r"Partner With <span className=\"text-brand-blue\">Precision</span>", r"Built Around Quality. <span className=\"text-brand-blue\">Driven by Precision.</span>"),
        (r"Built on pharmaceutical precision, transparent process discipline, and a strong commitment to healthcare partners globally\. We ensure the highest quality formulations\.", r"From formulation development to finished pharmaceutical products, Govind Remedies focuses on consistency, quality and operational precision at every stage of manufacturing."),
        
        # Highlights
        (r"Process Control", r"Quality First"),
        (r"We maintain 100% adherence to defined batch processing parameters", r"Every manufacturing activity is guided by defined quality standards and controlled processes"),
        
        (r"Global Standards", r"Reliable Manufacturing"),
        (r"Our facilities meet rigorous international compliance guidelines", r"Structured processes designed to support consistent product quality and dependable supply"),
        
        (r"Reliable Delivery", r"Healthcare Focused"),
        (r"Secure supply chain management for on-time global distribution", r"Our work is centered around pharmaceutical products that support healthcare professionals and patients"),
        
        (r"Expert Team", r"Long-Term Partnership"),
        (r"Guided by specialists with decades of pharmaceutical experience", r"We aim to build lasting relationships with healthcare, pharmaceutical and business partners"),
    ],
    # 3. ServiceHighlights (Core Capabilities)
    "ServiceHighlights.tsx": [
        (r"Core Strengths", r"What We Do"),
        (r"Precision-Driven Capabilities", r"Pharmaceutical Manufacturing Built for Healthcare"),
        (r"Delivering advanced formulations through controlled, sterile environments and specialized delivery systems designed for modern healthcare needs\.", r"Our capabilities bring together formulation expertise, manufacturing discipline and quality-focused processes to support pharmaceutical product development and supply."),
        
        (r"Pharmaceutical Manufacturing", r"Pharmaceutical Formulations"),
        (r"It is important to maintain a strictly sterile & controlled environment for safe production\.", r"Development and manufacturing of a diverse range of pharmaceutical formulations."),
        
        (r"Quality Focused", r"Injectable Products"),
        (r"It is important to follow disciplined quality assurance and avoid compromises in the formulation process\.", r"A growing portfolio of injectable pharmaceutical products across multiple therapeutic applications."),
        
        (r"Precision Driven", r"Prefilled Syringes"),
        (r"It is important to utilize specialized PFS & specialty packaging for advanced precision delivery\.", r"Specialized product presentations designed for convenience, consistency and controlled administration."),
        
        (r"Healthcare Solutions", r"Liquid & Parenteral Products"),
        (r"It is important to ensure a robust essential formulations portfolio for reliable patient care worldwide\.", r"Manufacturing solutions for selected liquid pharmaceutical and parenteral formulations."),
    ],
    # 4. ManufacturingCapabilities (Precision at Every Stage)
    "ManufacturingCapabilities.tsx": [
        (r"Infrastructure", r"Our Manufacturing Approach"),
        (r"Our Manufacturing Stages", r"Quality Is Built Into Every Stage"),
        (r"From raw materials to finished formulation, every step is rigorously controlled to ensure absolute purity and consistency\.", r"We believe pharmaceutical quality is not achieved at a single point in manufacturing. It is built through disciplined processes, careful controls and attention to detail from beginning to end."),
        
        # Adjusting the steps from 6 to 5 is a bit trickier via simple string replacement, we might need a small separate function
    ],
    # 5. WhyGovind (Why Partner With Govind Remedies?)
    "WhyGovind.tsx": [
        (r"Why Choose Us", r"Why Govind Remedies"),
        (r"Why Partner With Govind\?", r"A Manufacturing Partner Focused on What Matters"),
        (r"Our core principles ensure we deliver reliable, safe, and effective formulations for our global healthcare partners\.", r"Choosing the right pharmaceutical manufacturing partner means choosing consistency, quality, responsiveness and a shared commitment to healthcare."),
        
        (r"Quality Focus", r"Quality Commitment"),
        (r"Strict adherence to standardized quality management procedures, ensuring batch integrity and accuracy\.", r"A quality-focused approach across manufacturing and product handling."),
        
        (r"Reliable Production", r"Product Expertise"),
        (r"Disciplined liquid injectable production capabilities in Pre-Filled Syringes \(PFS\) and specialty systems\.", r"Experience across a diverse portfolio of pharmaceutical formulations and presentations."),
        
        (r"Diverse Portfolio", r"Manufacturing Discipline"),
        (r"Comprehensive formulations across anticoagulants, vitamins, emergency drugs, NSAIDs, and injectables\.", r"Structured processes designed to support consistency and dependable production."),
        
        (r"Patient First", r"Partnership Approach"),
        (r"Every formulation is developed with the ultimate goal of improving clinical outcomes and safety\.", r"We work closely with our partners to understand requirements and build sustainable relationships."),
    ],
    # 6. QualitySection (Engineered Into Every Product)
    "QualitySection.tsx": [
        (r"Uncompromising Standards", r"Inside Our Manufacturing"),
        (r"Engineered For Reliability", r"Precision in Every Formulation. Confidence in Every Product."),
        (r"Quality is not an afterthought; it is built into the architecture of every Govind formulation through process discipline and environmental control\.", r"Every pharmaceutical product represents a combination of formulation knowledge, manufacturing discipline and quality control. At Govind Remedies, these principles guide our approach from development through finished product."),
        
        (r"Process Discipline", r"Controlled manufacturing processes"),
        (r"Standardized operational procedures executed with rigorous adherence across every formulation run to eliminate variability\.", r"Consistent formulation standards"),
        (r"Product Uniformity", r"Quality-focused production"),
        (r"Batch-to-batch consistency ensured through precise volumetric filling, environmental control, and sterile validation\.", r"Careful filling and packaging"),
        (r"Sterile Integrity", r"Product-focused manufacturing approach"),
        (r"Closed-loop manufacturing systems and aseptic handling to guarantee zero contamination throughout production\.", r"We maintain stringent controls for product stability."), # We might just replace the list entirely. Let's do that manually later.
    ],
    # 7. ProductShowcase (Product Section)
    "ProductShowcase.tsx": [
        (r"Complete Portfolio", r"Our Product Portfolio"),
        (r"Explore Our <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald\">Formulations</span>", r"Explore Our <span className=\"text-brand-blue\">Pharmaceutical Formulations</span>"),
        (r"Browse through our specialized therapeutic categories encompassing liquid injectables, pre-filled syringes, and essential medications\.", r"Explore our portfolio of pharmaceutical products developed and manufactured across multiple therapeutic and clinical applications."),
        
        (r"Search Formulations...", r"Search products by name..."),
        
        # Filter Labels
        (r"Anticoagulant", r"Injectable"),
        (r"Vitamins & Minerals", r"Prefilled Syringe"),
        (r"Electrolytes & Infusions", r"Liquid Products"),
        (r"Emergency & Cardiac", r"Pen Presentation"),
        # We need to clean up the unused ones
        
        (r"Download Complete Portfolio", r"View Complete Product Portfolio"),
    ],
    # 8. CTASection (Strong CTA Section)
    "CTASection.tsx": [
        (r"Partnership & Enquiries", r"Let's Build Better Healthcare Together"),
        (r"Let's Build Better Healthcare Solutions Together\.", r"Looking for a Reliable Pharmaceutical Manufacturing Partner?"),
        (r"Connect with Govind Remedies to explore our pharmaceutical product portfolio and manufacturing capabilities\.", r"Connect with Govind Remedies to discuss your product requirements, manufacturing opportunities and potential partnership."),
        (r"Explore Products", r"View Our Products"), # Assuming we flip them or just use CTA 1
        (r"Contact Us", r"Start a Conversation"),
    ],
    # 10. BlogSection (Insights Section)
    "BlogSection.tsx": [
        (r"Insights & News", r"Knowledge & Updates"),
        (r"Latest From Our Blog", r"Insights From Pharmaceutical Manufacturing"),
        (r"Stay informed on the latest trends, manufacturing updates, and pharmaceutical breakthroughs\.", r"Explore updates, industry perspectives and useful information from the world of pharmaceutical manufacturing and healthcare."),
        (r"See All Blogs", r"Explore All Insights"),
        
        # Titles
        (r"The Future of Liquid Injectable Formulations", r"Understanding Pharmaceutical Manufacturing Standards"),
        (r"How specialized sterile environments and pre-filled syringes are revolutionizing patient care\.", r"Key considerations that influence quality and consistency in pharmaceutical production."),
        
        (r"Why Process Discipline Matters in Pharma", r"The Importance of Quality in Injectable Manufacturing"),
        (r"Consistency in manufacturing isn't just about compliance; it's about life-saving reliability\.", r"Why controlled processes matter when manufacturing injectable pharmaceutical products."),
        
        (r"Navigating Global Supply Chain Challenges", r"From Formulation to Finished Product"),
        (r"How Govind Remedies maintains 100% on-time delivery despite global logistical complexities\.", r"Understanding the journey of a pharmaceutical product through the manufacturing process."),
    ],
    # 11. FAQSection (Frequently Asked Questions)
    "FAQSection.tsx": [
        (r"Frequently Asked Questions", r"FAQs"),
        (r"Answering Your Enquiries", r"Frequently Asked Questions"),
        (r"Find answers to the most common questions about our manufacturing processes, partnerships, and product catalog\.", r""), # User didn't give description
        
        # Questions
        (r"What types of pharmaceutical products do you manufacture\?", r"What pharmaceutical products does Govind Remedies manufacture?"),
        (r"Do you have capabilities for Pre-Filled Syringes \(PFS\)\?", r"What types of pharmaceutical formulations are available?"),
        (r"Are your manufacturing facilities globally certified\?", r"Does Govind Remedies offer prefilled syringe products?"),
        (r"How can we partner with Govind for distribution\?", r"How can I enquire about a specific product?"),
        (r"What is your typical lead time for large orders\?", r"How can I discuss a manufacturing or business partnership?"),
        (r"Do you support contract manufacturing\?", r"What information should I provide for a product enquiry?"),
    ],
    # 12. ContactSection (Contact Section)
    "ContactSection.tsx": [
        (r"Get In Touch", r"Connect With Us"),
        (r"Start a Conversation with Govind", r"Let's Discuss Your Pharmaceutical Requirements"),
        (r"Whether you are interested in distribution, contract manufacturing, or general enquiries, our team is here to assist\.", r"Whether you are looking for product information, business collaboration or pharmaceutical manufacturing opportunities, our team is ready to connect with you."),
        
        (r"Full Name", r"Name"),
        # Company name is already there
        # Email address is there
        # Phone number is there
        (r"Subject", r"Product / Requirement"),
        
        (r"Submit", r"Send Enquiry"),
        (r"By submitting this form, you agree to our privacy policy and terms of service\.", r"Our team will review your enquiry and get back to you with the relevant information."),
    ]
}

for filename, reps in replacements.items():
    filepath = os.path.join(components_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} - not found.")
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for (old, new) in reps:
        content = re.sub(old, new, content, count=1)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filename}")
