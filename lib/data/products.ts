export interface ProductVariant {
  srNo: number;
  strength: string;
  pfsSize: string;
  moc: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Anticoagulant' | 'Vitamins & Minerals' | 'Electrolytes & Infusions' | 'Emergency & Cardiac' | 'Analgesic & NSAID' | 'Contrast Media' | 'Specialty & Peptides' | 'Anesthetic & Others';
  featured?: boolean;
  strengthsSummary: string;
  pfsSizeSummary: string;
  mocSummary: string;
  variants: ProductVariant[];
  description: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'enoxaparin',
    name: 'Enoxaparin',
    category: 'Anticoagulant',
    featured: true,
    strengthsSummary: '20 mg/ml, 40 mg/ml, 60 mg/ml, 80 mg/ml, 100 mg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Low molecular weight heparin formulation manufactured in pre-filled syringe (PFS) delivery systems.',
    variants: [
      { srNo: 1, strength: '100 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 2, strength: '20 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 3, strength: '40 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 4, strength: '60 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 5, strength: '80 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' },
    ]
  },
  {
    id: 'vitamin-b1',
    name: 'Vitamin B1 (Thiamine)',
    category: 'Vitamins & Minerals',
    featured: false,
    strengthsSummary: '100 mg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'High-purity Thiamine formulation in sterile glass PFS for specialized parenteral administration.',
    variants: [
      { srNo: 6, strength: '100 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'vitamin-b-complex',
    name: 'Vitamin B1 + B6 + B12 + Nicotinamide',
    category: 'Vitamins & Minerals',
    featured: false,
    strengthsSummary: 'Mix Formulation',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Multi-B vitamin complex combination in sterile pre-filled syringe format.',
    variants: [
      { srNo: 7, strength: 'Mix Formulation', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'vitamin-b12-methylcobalamin',
    name: 'Vitamin B12 (Methylcobalamin)',
    category: 'Vitamins & Minerals',
    featured: false,
    strengthsSummary: '1500 mcg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Methylcobalamin injectable solution in precision pre-filled glass syringe.',
    variants: [
      { srNo: 8, strength: '1500 mcg/ml', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'vitamin-b12-combination',
    name: 'Vitamin B12 + Nicotinamide + Folic Acid',
    category: 'Vitamins & Minerals',
    featured: false,
    strengthsSummary: 'Mix Formulation',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Balanced vitamin B12, nicotinamide, and folic acid injectable formulation.',
    variants: [
      { srNo: 9, strength: 'Mix Formulation', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3 (Cholecalciferol)',
    category: 'Vitamins & Minerals',
    featured: true,
    strengthsSummary: '600,000 IU',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'High-potency Vitamin D3 aqueous injectable formulation in pre-filled glass syringe.',
    variants: [
      { srNo: 10, strength: '600000 IU', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'vitamin-k1',
    name: 'Vitamin K1 (Phytomenadione)',
    category: 'Vitamins & Minerals',
    featured: false,
    strengthsSummary: '10 mg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Phytomenadione sterile solution packaged in protective glass PFS packaging.',
    variants: [
      { srNo: 11, strength: '10 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'dextrose',
    name: 'Dextrose',
    category: 'Electrolytes & Infusions',
    featured: false,
    strengthsSummary: '50 %',
    pfsSizeSummary: '50 ml LT',
    mocSummary: 'COC',
    description: 'Hypertonic Dextrose 50% solution in Cyclic Olefin Copolymer (COC) polymer container.',
    variants: [
      { srNo: 12, strength: '50 %', pfsSize: '50 ml LT', moc: 'COC' }
    ]
  },
  {
    id: 'sodium-bicarbonate',
    name: 'Sodium Bicarbonate',
    category: 'Electrolytes & Infusions',
    featured: false,
    strengthsSummary: '8.40%',
    pfsSizeSummary: '50 ml LT',
    mocSummary: 'COC',
    description: 'Concentrated Sodium Bicarbonate solution in advanced polymer COC container.',
    variants: [
      { srNo: 13, strength: '8.40%', pfsSize: '50 ml LT', moc: 'COC' }
    ]
  },
  {
    id: 'sodium-chloride',
    name: 'Sodium Chloride',
    category: 'Electrolytes & Infusions',
    featured: false,
    strengthsSummary: '0.9%',
    pfsSizeSummary: '50 ml LT',
    mocSummary: 'COC',
    description: 'Isotonic 0.9% Sodium Chloride solution in sterile COC polymer container.',
    variants: [
      { srNo: 14, strength: '0.9%', pfsSize: '50 ml LT', moc: 'COC' }
    ]
  },
  {
    id: 'adrenaline',
    name: 'Adrenaline (Epinephrine)',
    category: 'Emergency & Cardiac',
    featured: false,
    strengthsSummary: '0.1 mg/mL, 1 mg/mL',
    pfsSizeSummary: '1 ml SN, 5 ml LT, 10 ml LT',
    mocSummary: 'Glass / COC',
    description: 'Sterile Adrenaline injectable solution available in pre-filled syringes and polymer containers.',
    variants: [
      { srNo: 15, strength: '1 mg/mL', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 16, strength: '0.1 mg/mL', pfsSize: '10 mL LT', moc: 'COC' },
      { srNo: 17, strength: '0.1 mg/mL', pfsSize: '5 ml LT', moc: 'COC' },
    ]
  },
  {
    id: 'heparin',
    name: 'Heparin',
    category: 'Anticoagulant',
    featured: true,
    strengthsSummary: '5,000 IU, 25,000 IU',
    pfsSizeSummary: '5 ml LT',
    mocSummary: 'Glass',
    description: 'Unfractionated Heparin sodium injectable solution in precision glass packaging.',
    variants: [
      { srNo: 18, strength: '25000 IU', pfsSize: '5 ml LT', moc: 'Glass' },
      { srNo: 19, strength: '5000 IU', pfsSize: '5 ml LT', moc: 'Glass' },
    ]
  },
  {
    id: 'nadroparin',
    name: 'Nadroparin',
    category: 'Anticoagulant',
    featured: false,
    strengthsSummary: '2850 IU / 0.3ml, 3800 IU / 0.4ml, 5700 IU / 0.6ml, 7600 IU / 0.8ml, 9500 IU / 1ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Comprehensive range of Nadroparin low molecular weight heparin in glass PFS.',
    variants: [
      { srNo: 20, strength: '3800 IU AXA/ 0.4mL', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 21, strength: '2850 IU AXA/ 0.3mL', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 22, strength: '5700 IU AXA/ 0.6ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 23, strength: '7600 IU AXA/ 0.8ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 24, strength: '9500 IU AXA/ 1mL', pfsSize: '1 ml SN', moc: 'Glass' },
    ]
  },
  {
    id: 'tinzaparin',
    name: 'Tinzaparin',
    category: 'Anticoagulant',
    featured: false,
    strengthsSummary: '3,500 - 4,500 IU',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Tinzaparin sodium low molecular weight heparin formulation in pre-filled syringe.',
    variants: [
      { srNo: 25, strength: '3500 - 4500 IU', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'sodium-hyaluronate',
    name: 'Sodium Hyaluronate',
    category: 'Specialty & Peptides',
    featured: true,
    strengthsSummary: '2 ml filled, 3 ml filled, 6 ml filled',
    pfsSizeSummary: '2.25 ml LT, 5 ml LT, 10 ml LT',
    mocSummary: 'COC',
    description: 'Viscoelastic Sodium Hyaluronate solutions filled in Cyclic Olefin Copolymer containers.',
    variants: [
      { srNo: 26, strength: '2 ml filled', pfsSize: '2.25 ml LT', moc: 'COC' },
      { srNo: 27, strength: '3 ml filled', pfsSize: '5 ml LT', moc: 'COC' },
      { srNo: 28, strength: '6 ml filled', pfsSize: '10 ml LT', moc: 'COC' },
    ]
  },
  {
    id: 'dalteparin',
    name: 'Dalteparin',
    category: 'Anticoagulant',
    featured: false,
    strengthsSummary: '2500 IU/0.2ml, 5000 IU/0.3ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Dalteparin sodium low molecular weight heparin in graduated pre-filled glass syringe.',
    variants: [
      { srNo: 29, strength: '2500 IU/0.2ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 30, strength: '5000 IU/0.3ml', pfsSize: '1 ml SN', moc: 'Glass' },
    ]
  },
  {
    id: 'aceclofenac-sodium',
    name: 'Aceclofenac Sodium',
    category: 'Analgesic & NSAID',
    featured: false,
    strengthsSummary: '150 mg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Sterile Aceclofenac Sodium analgesic formulation in single-dose glass PFS.',
    variants: [
      { srNo: 31, strength: '150 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'adenosine',
    name: 'Adenosine',
    category: 'Emergency & Cardiac',
    featured: false,
    strengthsSummary: '3 mg/ml',
    pfsSizeSummary: '2.25 ml LT',
    mocSummary: 'Glass',
    description: 'Adenosine antiarrhythmic solution manufactured for immediate parenteral administration.',
    variants: [
      { srNo: 32, strength: '3 mg/ml', pfsSize: '2.25 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'alprostadil',
    name: 'Alprostadil',
    category: 'Emergency & Cardiac',
    featured: false,
    strengthsSummary: '0.5 mg/mL',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Prostaglandin E1 (Alprostadil) sterile formulation in glass PFS container.',
    variants: [
      { srNo: 33, strength: '0.5 mg/mL', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'amikacin',
    name: 'Amikacin',
    category: 'Specialty & Peptides',
    featured: false,
    strengthsSummary: '250 mg/mL',
    pfsSizeSummary: '2.25 ml LT',
    mocSummary: 'Glass',
    description: 'Amikacin aminoglycoside formulation packaged in high-grade glass container.',
    variants: [
      { srNo: 34, strength: '250mg/mL', pfsSize: '2.25 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'atropine-sulphate',
    name: 'Atropine Sulphate',
    category: 'Emergency & Cardiac',
    featured: false,
    strengthsSummary: '0.1 mg/ml',
    pfsSizeSummary: '1 ml SN, 5 ml LT, 10 ml LT',
    mocSummary: 'Glass / COC',
    description: 'Atropine Sulphate anticholinergic solution in PFS and polymer LT containers.',
    variants: [
      { srNo: 35, strength: '0.1 mg /ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 36, strength: '0.1 mg /ml', pfsSize: '10 ml LT', moc: 'COC' },
      { srNo: 37, strength: '0.1 mg /ml', pfsSize: '5 ml LT', moc: 'COC' },
    ]
  },
  {
    id: 'caffeine',
    name: 'Caffeine Citrate',
    category: 'Specialty & Peptides',
    featured: false,
    strengthsSummary: '20 mg/ml',
    pfsSizeSummary: '2.25 ml LT',
    mocSummary: 'Glass',
    description: 'Caffeine solution manufactured in precision glass container system.',
    variants: [
      { srNo: 38, strength: '20 mg/ml', pfsSize: '2.25 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'calcium-chloride',
    name: 'Calcium Chloride',
    category: 'Electrolytes & Infusions',
    featured: false,
    strengthsSummary: '10%',
    pfsSizeSummary: '10 ml LT',
    mocSummary: 'COC',
    description: 'Calcium Chloride 10% electrolyte solution in polymer COC container.',
    variants: [
      { srNo: 39, strength: '10%', pfsSize: '10 ml LT', moc: 'COC' }
    ]
  },
  {
    id: 'citroralix',
    name: 'Cetrorelix (Citroralix)',
    category: 'Specialty & Peptides',
    featured: false,
    strengthsSummary: '0.25 mg',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Peptide analogue Cetrorelix formulation in sterile single-dose glass PFS.',
    variants: [
      { srNo: 40, strength: '0.25 mg', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'diclofenac-sodium',
    name: 'Diclofenac Sodium',
    category: 'Analgesic & NSAID',
    featured: false,
    strengthsSummary: '75 mg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Diclofenac Sodium parenteral formulation in pre-filled glass syringe.',
    variants: [
      { srNo: 41, strength: '75 mg/ml', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'dopamine',
    name: 'Dopamine',
    category: 'Emergency & Cardiac',
    featured: false,
    strengthsSummary: '200 mg/mL',
    pfsSizeSummary: '5 ml LT',
    mocSummary: 'Glass',
    description: 'Dopamine hydrochloride inotropic solution in glass container packaging.',
    variants: [
      { srNo: 42, strength: '200 mg/ML', pfsSize: '5 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'fondaparinux',
    name: 'Fondaparinux',
    category: 'Anticoagulant',
    featured: false,
    strengthsSummary: '5 mg/mL',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Synthetic pentasaccharide Fondaparinux sodium formulation in glass PFS.',
    variants: [
      { srNo: 43, strength: '5 mg/mL', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'fulvestrant',
    name: 'Fulvestrant',
    category: 'Specialty & Peptides',
    featured: false,
    strengthsSummary: '250 mg/5 ml',
    pfsSizeSummary: '5 ml LT',
    mocSummary: 'Glass',
    description: 'Specialty Fulvestrant oil-based solution packaged in glass container.',
    variants: [
      { srNo: 44, strength: '250 mg/5 ml', pfsSize: '5 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'gadoterate-meglumine',
    name: 'Gadoterate Meglumine',
    category: 'Contrast Media',
    featured: false,
    strengthsSummary: '300-370 mg iodine/ mL',
    pfsSizeSummary: '20 ml LT, 50 ml LT, 100 ml LT',
    mocSummary: 'COC',
    description: 'Macrocyclic contrast media solution in 20 ml, 50 ml, and 100 ml polymer COC containers.',
    variants: [
      { srNo: 45, strength: '300-370 mg iodine/ mL', pfsSize: '20 ML LT', moc: 'COC' },
      { srNo: 46, strength: '300-370 mg iodine/ mL', pfsSize: '50 ml LT', moc: 'COC' },
      { srNo: 47, strength: '300-370 mg iodine/ mL', pfsSize: '100 ml LT', moc: 'COC' },
    ]
  },
  {
    id: 'iron-sucrose',
    name: 'Iron Sucrose',
    category: 'Specialty & Peptides',
    featured: true,
    strengthsSummary: '20 mg/mL',
    pfsSizeSummary: '5 ml LT',
    mocSummary: 'Glass',
    description: 'Sterile Iron Sucrose complex solution for intravenous iron administration.',
    variants: [
      { srNo: 48, strength: '20mg/mL', pfsSize: '5 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'lidocaine',
    name: 'Lidocaine',
    category: 'Anesthetic & Others',
    featured: false,
    strengthsSummary: '2%',
    pfsSizeSummary: '5 ml LT, 10 ml LT',
    mocSummary: 'PP/COC',
    description: 'Lidocaine 2% anesthetic solution packaged in PP/COC polymer container systems.',
    variants: [
      { srNo: 49, strength: '2%', pfsSize: '10 ml LT', moc: 'PP/COC' },
      { srNo: 50, strength: '2%', pfsSize: '5 ml LT', moc: 'PP/COC' },
    ]
  },
  {
    id: 'methylene-blue',
    name: 'Methylthioninium Chloride (Methylene Blue)',
    category: 'Specialty & Peptides',
    featured: false,
    strengthsSummary: '10 mg/ml',
    pfsSizeSummary: '10 ml LT',
    mocSummary: 'PP/COC',
    description: 'Methylthioninium chloride 10 mg/ml solution in PP/COC container.',
    variants: [
      { srNo: 51, strength: '10 mg/ml', pfsSize: '10 ml LT', moc: 'PP/COC' }
    ]
  },
  {
    id: 'naloxone',
    name: 'Naloxone',
    category: 'Emergency & Cardiac',
    featured: false,
    strengthsSummary: '0.4 mg/mL',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Naloxone hydrochloride antagonist solution in single-dose pre-filled glass syringe.',
    variants: [
      { srNo: 52, strength: '0.4 mg/mL', pfsSize: '1 ml SN', moc: 'Glass' }
    ]
  },
  {
    id: 'octreotide',
    name: 'Octreotide',
    category: 'Specialty & Peptides',
    featured: true,
    strengthsSummary: '50 mcg/mL, 100 mcg/ml',
    pfsSizeSummary: '1 ml SN',
    mocSummary: 'Glass',
    description: 'Octreotide synthetic somatostatin peptide formulation in precision glass PFS.',
    variants: [
      { srNo: 53, strength: '100 mcg/ml', pfsSize: '1 ml SN', moc: 'Glass' },
      { srNo: 54, strength: '50 mcg/mL', pfsSize: '1 ml SN', moc: 'Glass' },
    ]
  },
  {
    id: 'semaglutide',
    name: 'Semaglutide',
    category: 'Specialty & Peptides',
    featured: true,
    strengthsSummary: '0.25 - 1 mg',
    pfsSizeSummary: '3 ml Pen',
    mocSummary: 'Glass',
    description: 'GLP-1 receptor agonist Semaglutide formulation in specialized 3 ml pen glass cartridge system.',
    variants: [
      { srNo: 55, strength: '0.25 - 1 mg', pfsSize: '3 ml Pen', moc: 'Glass' }
    ]
  },
  {
    id: 'thiocolchicoside',
    name: 'Thiocolchicoside',
    category: 'Analgesic & NSAID',
    featured: false,
    strengthsSummary: '4 mg/2 ml',
    pfsSizeSummary: '2.25 ml LT',
    mocSummary: 'Glass',
    description: 'Thiocolchicoside muscle relaxant formulation in 2.25 ml glass container.',
    variants: [
      { srNo: 56, strength: '4 mg/2 ml', pfsSize: '2.25 ml LT', moc: 'Glass' }
    ]
  },
  {
    id: 'tranexamic-acid',
    name: 'Tranexamic Acid',
    category: 'Specialty & Peptides',
    featured: true,
    strengthsSummary: '100 mg/mL',
    pfsSizeSummary: '5 ml LT',
    mocSummary: 'Glass',
    description: 'Tranexamic Acid antifibrinolytic solution packaged in high-clarity glass container.',
    variants: [
      { srNo: 57, strength: '100 mg/mL', pfsSize: '5 ml LT', moc: 'Glass' }
    ]
  }
];
