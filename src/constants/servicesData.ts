import { ServiceItem } from '../types';
import redChilliPowderImg from '../assets/images/black-pepper.jpeg';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';
import aloeveraGelImg from '../assets/images/aloevera_gel.jpeg';

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-import',
    slug: 'import-services',
    type: 'import',
    title: 'Global Sourcing & Import Management',
    subtitle: 'Streamlined Inbound Logistics into India',
    iconName: 'DownloadCloud',
    image: bambooImg,
    description: 'Mihika Ayra assists Indian enterprises and institutional importers in sourcing raw materials, machinery, specialty food ingredients, and consumer goods from verified global manufacturers.',
    keyFeatures: [
      'Comprehensive supplier background verification and factory audit',
      'Customs duty classification under Indian ITC (HS) standards',
      'Port clearance handling at Nhava Sheva, Chennai, Vizag, and Hyderabad ICD',
      'Assistance with FSSAI, BIS, and CDSCO regulatory import permits'
    ],
    processSteps: [
      { title: '1. Sourcing & Audit', desc: 'Identify verified overseas producers and sample quality audit.' },
      { title: '2. Contract & L/C', desc: 'Structure secure trade terms (FOB/CIF) and banking Letter of Credit.' },
      { title: '3. Freight & Customs', desc: 'Overseas pickup, sea container transit, and swift port customs clearance.' },
      { title: '4. Inland Delivery', desc: 'Bonded transport to your factory floor or distribution warehouse.' }
    ],
    benefits: [
      'Reduced landed import costs through tariff optimization',
      'Minimized demurrage and port detention penalties',
      '100% legal compliance with DGFT & Indian Customs'
    ]
  },
  {
    id: 'srv-export',
    slug: 'export-services',
    type: 'export',
    title: 'Outbound Export & International Trade',
    subtitle: 'Connecting Premium Indian Goods to 45+ Nations',
    iconName: 'UploadCloud',
    image: redChilliPowderImg,
    description: 'We manage full-scope export operations for Indian agricultural commodities, spices, sweets, seafood, jute textiles, and cosmetics to international buyers in America, Europe, Middle East, and Asia-Pacific.',
    keyFeatures: [
      'Export documentation (Invoices, Packing List, Certificate of Origin, Bill of Lading)',
      'Phytosanitary, FSSAI export health, and fumigation certificates',
      'Custom vacuum-sealing and reefer container cold chain packaging',
      'Direct container bookings with leading ocean carriers (Maersk, MSC, CMA CGM)'
    ],
    processSteps: [
      { title: '1. Requirement Analysis', desc: 'Understand destination country import regulations & quality specs.' },
      { title: '2. Procurement & QC', desc: 'Source from verified farms/factories and perform batch lab testing.' },
      { title: '3. Export Packaging', desc: 'Vacuum-pack, palletize, and seal in sea-worthy export containers.' },
      { title: '4. Ocean Shipping', desc: 'Complete port clearance and dispatch with live GPS vessel tracking.' }
    ],
    benefits: [
      'Guaranteed adherence to USFDA, EU, and GCC food safety laws',
      'Fresh arrival condition with specialized export preservation tech',
      'Competitive freight rates via long-term carrier alliances'
    ]
  },
  {
    id: 'srv-merchant',
    slug: 'merchant-export',
    type: 'export',
    title: 'Merchant Export & B2B Facilitation',
    subtitle: 'White-Label Sourcing & Brand Customization',
    iconName: 'PackageCheck',
    image: bambooImg,
    description: 'For overseas buyers seeking reliable Indian manufacturing partners, Mihika Ayra acts as your dedicated Merchant Exporter — managing supplier selection, private label packaging, and quality assurance.',
    keyFeatures: [
      'Custom logo printing and retail box design',
      'Consolidated multi-SKU container loading',
      'Escrow payment security and third-party pre-shipment inspection (SGS/Intertek)',
      'Complete confidentiality and supplier protection'
    ],
    processSteps: [
      { title: '1. Specs & Samples', desc: 'Define product specifications and dispatch approval samples.' },
      { title: '2. Private Labeling', desc: 'Design and print custom packaging with your brand artwork.' },
      { title: '3. Inspection', desc: 'Pre-shipment batch testing by SGS or Intertek inspectors.' },
      { title: '4. Consolidated Cargo', desc: 'Load multiple items into one 20ft/40ft container.' }
    ],
    benefits: [
      'Single point of contact for multi-category Indian products',
      'Lower minimum order quantities (MOQ) through consolidated shipping',
      'Complete peace of mind on product specifications'
    ]
  },
  {
    id: 'srv-packaging',
    slug: 'packaging-documentation',
    type: 'both',
    title: 'Export Packaging & Trade Documentation',
    subtitle: 'Zero-Defect Preservation & Legal Compliance',
    iconName: 'FileText',
    image: aloeveraGelImg,
    description: 'Robust packaging and error-free export documentation are the backbones of international trade. Our packaging division employs nitrogen flushing, moisture-barrier foils, and ISPM-15 wooden palletization.',
    keyFeatures: [
      'ISPM-15 heat treated wooden pallets and crates',
      'Vacuum nitrogen-flushed pouch packing for perishables',
      'Single-window documentation (Certificate of Origin, Form A, COO, GSP)',
      'Customs EDI filing and shipping bill generation'
    ],
    processSteps: [
      { title: '1. Barrier Selection', desc: 'Choose optimal foil, nitrogen, or reefer packing.' },
      { title: '2. Labeling Compliance', desc: 'Incorporate destination language, nutritional info, and barcodes.' },
      { title: '3. Document Drafting', desc: 'Prepare error-free commercial documents for customs.' },
      { title: '4. Legal Endorsements', desc: 'Chamber of Commerce & Embassy attestation.' }
    ],
    benefits: [
      'Zero cargo damage during rough oceanic transit',
      'Rapid customs clearance without document holds',
      'Compliance with international environmental and safety standards'
    ]
  },
  {
    id: 'srv-customs-logistics',
    slug: 'customs-logistics',
    type: 'both',
    title: 'Customs Clearance & Global Forwarding',
    subtitle: 'Door-to-Door Multimodal Freight Delivery',
    iconName: 'Truck',
    image: bambooImg,
    description: 'Integrated freight forwarding covering air freight express, full container load (FCL), less than container load (LCL), and port customs brokerage.',
    keyFeatures: [
      'Licensed Custom House Agent (CHA) clearance services',
      'Air cargo charter for urgent perishable shipments',
      'Real-time vessel and container telemetry tracking',
      'Port warehousing and last-mile trailer transportation'
    ],
    processSteps: [
      { title: '1. Space Booking', desc: 'Reserve optimal vessel schedule and container slot.' },
      { title: '2. Port Filing', desc: 'Submit Shipping Bill / Bill of Entry to Customs EDI.' },
      { title: '3. Gate-In & Inspection', desc: 'Container gate-in, physical examination, and let-export order.' },
      { title: '4. Oceanic Transit', desc: 'Monitor vessel progress until destination port unloading.' }
    ],
    benefits: [
      'Transparent freight pricing with zero hidden surcharges',
      'End-to-end cargo safety with transit insurance options',
      'Fast turnaround time at major Indian ports and ICDs'
    ]
  }
];
