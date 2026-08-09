import { SectorItem } from '../types';
import redChilliPowderImg from '../assets/images/black-pepper.jpeg';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';
import prawnsImg from '../assets/images/prawns.jpeg';
import automobilesImg from '../assets/images/heavy_cargo_trucks_1786176219238.jpg';
import industrialImg from '../assets/images/industrial_ev_batteries_1786176288833.jpg';
import medicalImg from '../assets/images/scrubs_1785758347691.jpg';
import engineeringImg from '../assets/images/auto_spare_parts_1786176260166.jpg';

export const MIHIKA_AYRA_SECTORS: SectorItem[] = [
  {
    id: 'sec-import',
    category: 'import',
    title: 'Import Operations',
    subtitle: 'Global Sourcing & Inbound Logistics',
    description: 'Direct procurement of raw materials, consumer goods, machinery, and specialty food ingredients from certified international producers into Indian ports with seamless custom clearance.',
    icon: 'Download',
    badgeText: 'Inbound Trade',
    features: ['Customs Clearance at major Indian ports', 'Duty Tariff Optimization & HS Code Advisory', 'Bonded Warehousing & Port Logistics', 'End-to-End Import Regulatory Approvals'],
    gradient: 'from-[#0D3B66] to-[#0077B6]',
    bgImage: bambooImg
  },
  {
    id: 'sec-export',
    category: 'export',
    title: 'Export Operations',
    subtitle: 'Outbound Freight & Global Distribution',
    description: 'Exporting premium Indian commodities, artisanal confections, spices, seafood, and textiles across 45+ countries with APEDA, FSSAI, and international phytosanitary compliance.',
    icon: 'Upload',
    badgeText: 'Outbound Freight',
    features: ['USFDA, EU & GCC Import Compliance', 'Phytosanitary & Fumigation Certifications', 'Container LCL & FCL Ocean Freight', 'Export Documentation & Invoice Monetization'],
    gradient: 'from-[#0077B6] to-[#00B4D8]',
    bgImage: bambooImg
  },
  {
    id: 'sec-merchant',
    category: 'merchant',
    title: 'Merchant Export',
    subtitle: 'Third-Party Sourcing & Trade Facilitation',
    description: 'Facilitating international buyers by procuring goods directly from top Indian MSME manufacturers under Mihika Ayra’s rigorous export quality assurance system.',
    icon: 'Repeat',
    badgeText: 'B2B Trade Facilitation',
    features: ['Factory Quality Audit & Batch Sampling', 'White-Label Private Brand Packaging', 'Escrow & Letter of Credit (L/C) Management', 'Consolidated Multi-Product Cargo Containers'],
    gradient: 'from-[#004E89] to-[#0077B6]',
    bgImage: bambooImg
  },
  {
    id: 'sec-agricultural',
    category: 'agricultural',
    title: 'Agricultural Commodities',
    subtitle: 'Farm-Fresh Staples & Grains',
    description: 'Bulk supply of non-basmati rice, organic millets, pulses, oilseeds, turmeric, and dried chilies sourced directly from verified farming clusters.',
    icon: 'Wheat',
    badgeText: 'Agri Export',
    features: ['100% Traceable Farming Cooperatives', 'Moisture & Pest Control Testing', 'Jute & HDPE Bulk Export Packaging', 'Seasonal Forward Supply Contracts'],
    gradient: 'from-[#0D3B66] to-[#00B4D8]',
    bgImage: bambooImg
  },
  {
    id: 'sec-food',
    category: 'food',
    title: 'Food Products & Sweets',
    subtitle: 'Processed Foods & Ethnic Delicacies',
    description: 'Gourmet Indian confections (Ippa Puvvu sweets, Pootharekulu), pickles, tea, coffee, and ready-to-eat authentic culinary delicacies vacuum sealed for extended shelf-life.',
    icon: 'UtensilsCrossed',
    badgeText: 'Culinary Export',
    features: ['Nitrogen Flushed Preservative-Free Packaging', 'Allergens & Nutritional Labelling Compliance', 'Temperature Controlled Storage', 'USFDA & FSSAI Food Hygiene Protocols'],
    gradient: 'from-[#0077B6] to-[#D4AF37]',
    bgImage: redChilliPowderImg
  },
  {
    id: 'sec-marine',
    category: 'marine',
    title: 'Marine & Seafood Products',
    subtitle: 'Cold-Chain Marine Harvest',
    description: 'Flash-frozen Vannamei shrimp, Black Tiger prawns, Kingfish, and crab meat processed in HACCP marine processing hubs for cold-chain shipping.',
    icon: 'Fish',
    badgeText: 'Marine Cold-Chain',
    features: ['Sub-Zero (-18°C) Reefer Container Shipping', 'MPEDA & EIA Export Certification', 'Antibiotic & Heavy Metal Residue Testing', 'Glazing & Count Specification Precision'],
    gradient: 'from-[#00B4D8] to-[#004E89]',
    bgImage: prawnsImg
  },
  {
    id: 'sec-global-trade',
    category: 'global_trade',
    title: 'Global Trade Advisory',
    subtitle: 'International Trade Agreements & Tariffs',
    description: 'Expert advisory on Bilateral Trade Tariffs, Duty Drawback Benefits, Foreign Trade Policy (FTP), and Cross-Border Regulatory Clearances.',
    icon: 'Globe',
    badgeText: 'Trade Advisory',
    features: ['FTA / CEPA Tariff Exemption Audits', 'Customs Duty Drawback Optimization', 'Certificate of Origin (COO) Issuance', 'International Trade Dispute Resolution'],
    gradient: 'from-[#0D3B66] to-[#0077B6]',
    bgImage: bambooImg
  },
  {
    id: 'sec-logistics',
    category: 'logistics',
    title: 'International Logistics',
    subtitle: 'Multi-Modal Cargo Handling',
    description: 'Sea container freight (FCL/LCL), Express Air Freight charters, Port-to-Door customs transport, and GPS cargo tracking for international shipments.',
    icon: 'Truck',
    badgeText: 'Freight Forwarding',
    features: ['Major Shipping Line Alliances (Maersk, MSC, CMA CGM)', 'Real-Time IoT Container Temperature Tracking', 'Door-To-Door DDP/DDU Delivery Solutions', 'Comprehensive Transit Cargo Insurance'],
    gradient: 'from-[#0077B6] to-[#00B4D8]',
    bgImage: bambooImg
  },
  {
    id: 'sec-supply-chain',
    category: 'supply_chain',
    title: 'Supply Chain Management',
    subtitle: 'Vendor Audit & Inventory Control',
    description: 'End-to-end supply chain integration connecting farmers, processors, packaging houses, and sea freight operators for seamless order execution.',
    icon: 'Network',
    badgeText: 'End-to-End SCM',
    features: ['Just-In-Time (JIT) Order Fulfillment', 'Multi-Location Bonded Warehousing', 'Batch Tracking & SKU Inventory Management', 'Quality Inspection at Point of Harvest'],
    gradient: 'from-[#004E89] to-[#D4AF37]',
    bgImage: bambooImg
  },
  {
    id: 'sec-consulting',
    category: 'consulting',
    title: 'Cross-Border Consulting',
    subtitle: 'Market Entry & Compliance Strategy',
    description: 'Strategic market research, buyer matching, product labeling compliance, and contract negotiation for companies looking to enter Indian or international markets.',
    icon: 'Briefcase',
    badgeText: 'Corporate Advisory',
    features: ['Global Market Demand Forecasting', 'Regulatory Compliance Matrix', 'Partner Vetting & Due Diligence', 'Cross-Border Contract & Escrow Setup'],
    gradient: 'from-[#0D3B66] to-[#004E89]',
    bgImage: bambooImg
  },
  {
    id: 'sec-automobiles',
    category: 'automobiles',
    title: 'Auto Mobile',
    subtitle: 'Commercial & Passenger Mobility Export',
    description: 'Exporting commercial trucks, electric vehicles, agricultural tractors, and certified OEM spare parts across international markets with full regulatory clearance.',
    icon: 'Truck',
    badgeText: 'Mobility Sector',
    features: ['AIS & ISO 9001 Compliance Certification', 'Custom CKD & SKD Container Logistics', 'OEM Parts Warranty & Technical Support', 'Global RHD & LHD Vehicle Variant Supply'],
    gradient: 'from-[#0077B6] to-[#0D3B66]',
    bgImage: automobilesImg
  },
  {
    id: 'sec-industrial',
    category: 'industrial',
    title: 'Industrial Equipment',
    subtitle: 'Heavy Machinery, Electrical Gear & Infrastructure',
    description: 'Procurement and export of precision CNC machinery, electrical transformers, industrial pumps, solar panels, and heavy engineering components.',
    icon: 'Repeat',
    badgeText: 'Engineering Sector',
    features: ['CE, IEEE & IEC Standard Quality Tests', 'Seaworthy Heavy Timber Crate Export Packaging', 'Turnkey On-Site Technical Commissioning', 'Comprehensive CAD Technical Manuals'],
    gradient: 'from-[#004E89] to-[#00B4D8]',
    bgImage: industrialImg
  },
  {
    id: 'sec-medical-materials',
    category: 'products',
    title: 'Medical Materials',
    subtitle: 'Surgical Instruments & Healthcare Supplies',
    description: 'Surgical-grade stainless steel tools, powder-free nitrile examination gloves, titanium implants, and advanced sterile wound care dressings.',
    icon: 'Briefcase',
    badgeText: 'Healthcare Sector',
    features: ['ISO 13485 Medical Cleanroom Manufacturing', 'Gamma-Ray & EtO Sterilized Barrier Packs', 'USFDA & CE Regulatory Certification', 'Full Traceability & Batch Quality Audit'],
    gradient: 'from-[#0D3B66] to-[#0077B6]',
    bgImage: medicalImg
  },
  {
    id: 'sec-engineering-materials',
    category: 'products',
    title: 'Engineering Materials',
    subtitle: 'Aerospace Alloys & Carbon Fiber Composites',
    description: 'High-strength structural alloy steels, aerospace grade carbon fiber prepreg sheets, beryllium copper rods, PEEK polymers, and ceramics.',
    icon: 'Repeat',
    badgeText: 'Metallurgy Sector',
    features: ['ASTM, DIN & ISO 9001 Compliance', 'Mill Test Certificate (MTC) & Batch Analysis', 'Seaworthy Protective Export Palletizing', 'Custom CNC Dimension Cutting'],
    gradient: 'from-[#004E89] to-[#00B4D8]',
    bgImage: engineeringImg
  }
];
