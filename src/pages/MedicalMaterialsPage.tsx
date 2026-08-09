import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles, Stethoscope, ShieldCheck, Activity } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import surgicalInstrumentsImg from '../assets/images/medical-surgical-instruments.jpg';
import nitrileGlovesImg from '../assets/images/medical-nitrile-gloves.avif';
import woundDressingsImg from '../assets/images/medical-wound-dressings.jpg';
import orthopedicImplantsImg from '../assets/images/medical-orthopedic-implants.jpg';
import medicalTubingImg from '../assets/images/medical-tubing.jpg';
import ppeCoverallsImg from '../assets/images/medical-ppe-coveralls.jpg';

const medicalMainImg = surgicalInstrumentsImg;

interface MedicalItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const MedicalMaterialsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const medicalItems: MedicalItem[] = [
    {
      id: 'surgical-instruments',
      name: 'Precision Surgical Instruments & Stainless Steel Tools',
      image: medicalMainImg,
      manufacturingProcess: 'Forged from surgical-grade AISI 316L stainless steel, precision CNC machined, vacuum heat-treated for extreme hardness, passivated to resist corrosion, and 100% laser-inspected for microscopic dimensional accuracy.',
      ingredients: ['AISI 316L Surgical Stainless Steel', 'Titanium Alloy Coating', 'Passivation Layer'],
      purposeOfIngredients: 'Ensures bio-compatibility, zero rust or oxidation under autoclave sterilization, ultra-sharp cutting edges, and lifetime durability in operating theaters.'
    },
    {
      id: 'nitrile-gloves',
      name: 'Medical Grade Powder-Free Nitrile Examination Gloves',
      image: nitrileGlovesImg,
      manufacturingProcess: 'Formulated using synthetic acrylonitrile butadiene latex dipped on ergonomic ceramic hand molds, double-chlorinated for powder-free smooth donning, and 100% water-leak tested to ISO 13485 standards.',
      ingredients: ['100% Synthetic Nitrile Rubber', 'Polymer Coating', 'Zinc Oxide Accelerator', 'Titanium Dioxide'],
      purposeOfIngredients: 'Eliminates Type I latex allergy risks while delivering high tactile sensitivity, superior puncture resistance, and chemical protection against pathogens.'
    },
    {
      id: 'wound-care-dressings',
      name: 'Advanced Hydrocolloid & Alginate Wound Dressings',
      image: woundDressingsImg,
      manufacturingProcess: 'Sodium carboxymethylcellulose particles incorporated into a cohesive elastic polymer matrix or woven from natural sea-kelp alginate fibers, gamma-ray sterilized, and foil blister packed.',
      ingredients: ['Sodium Carboxymethylcellulose', 'Calcium Alginate Fibers', 'Polyurethane Breathable Backing Film', 'Ionic Silver (Ag+)'],
      purposeOfIngredients: 'Maintains an optimal moist healing environment, absorbs high exuding fluid, and ionic silver provides continuous antimicrobial barrier against infection.'
    },
    {
      id: 'orthopedic-implants',
      name: 'Biocompatible Titanium Orthopedic Implants & Bone Plates',
      image: orthopedicImplantsImg,
      manufacturingProcess: 'Precision 5-axis CNC machined from Ti-6Al-4V ELI titanium alloy, surface anodized or hydroxyapatite-coated for osseointegration, and cleanroom packed under ISO Class 7 conditions.',
      ingredients: ['Ti-6Al-4V ELI Titanium Alloy', 'Hydroxyapatite Bio-active Coating', 'Pure Cobalt-Chromium Alloy'],
      purposeOfIngredients: 'Matches bone mechanical elasticity to prevent stress shielding, accelerates bone cell adhesion, and guarantees human body biocompatibility.'
    },
    {
      id: 'medical-tubing',
      name: 'High-Purity Silicon & PVC Medical Grade Tubing',
      image: medicalTubingImg,
      manufacturingProcess: 'Extruded in certified ISO Class 8 cleanrooms using platinum-cured liquid silicone rubber, radio-opaque stripe co-extruded for X-ray visibility, and ethylene oxide (EtO) sterilized.',
      ingredients: ['100% Platinum-Cured Silicone', 'Phthalate-Free Medical Grade PVC', 'Barium Sulfate (Radio-opaque)'],
      purposeOfIngredients: 'Prevents chemical leaching into fluids, resists kinking during catheterization, and allows clear X-ray tracking inside patient bodies.'
    },
    {
      id: 'ppe-coveralls',
      name: 'Impermeable Isolation Gowns & Medical PPE Coveralls',
      image: ppeCoverallsImg,
      manufacturingProcess: 'Ultrasonically welded non-woven SMS (Spunbond-Meltblown-Spunbond) polypropylene bonded with a micro-porous breathable PE film, meeting AAMI Level 4 fluid barrier requirements.',
      ingredients: ['SMS Polypropylene Non-Woven Fabric', 'PE Micro-porous Membrane', 'Anti-Static Coating'],
      purposeOfIngredients: 'Provides 100% fluid and blood-borne pathogen barrier while allowing body heat moisture vapor to escape for surgeon comfort.'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? medicalItems
    : medicalItems.filter(item => item.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Medical Materials & Healthcare Supplies"
        breadcrumbText="Medical Materials"
        bgImage={medicalMainImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY SELECTOR BAR */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-[#0077B6]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Medical & Healthcare Materials Catalog ({medicalItems.length} Products):
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Medical Materials ({medicalItems.length})
              </button>
              {medicalItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.name.split(' ')[0]} {item.name.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* MEDICAL ITEMS GRID */}
          <div className="space-y-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-cover rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                      <span className="shrink-0 bg-sky-50 text-[#0077B6] border border-sky-200 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> ISO 13485
                      </span>
                    </div>

                    {/* MANUFACTURING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing & Processing Protocol:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS / MATERIAL COMPOSITION */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Material Composition & Standards:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.ingredients.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PURPOSE OF MATERIALS */}
                    <div className="bg-[#E0F2FE] rounded-2xl p-4 border border-sky-200 space-y-1.5">
                      <h4 className="text-xs font-bold text-[#0369A1] uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#0284C7]" />
                        Clinical Purpose & Efficacy:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.purposeOfIngredients}
                      </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={item.name} />
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
