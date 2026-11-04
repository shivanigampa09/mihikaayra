import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles, Cpu } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import aluminum7075Img from '../assets/images/engineering-aluminum-7075.jpg';
import carbonFiberImg from '../assets/images/engineering-carbon-fiber.jpg';
import berylliumCopperImg from '../assets/images/engineering-beryllium-copper.jpg';
import alloySteelsImg from '../assets/images/engineering-alloy-steels.jpg';
import zirconiaCeramicsImg from '../assets/images/engineering-zirconia-ceramics.jpg';
import peekPtfeImg from '../assets/images/engineering-peek-ptfe.jpg';

const engineeringMainImg = alloySteelsImg;

interface EngineeringItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  specifications: string[];
  technicalProperties: string;
}

export const EngineeringMaterialsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const engineeringItems: EngineeringItem[] = [
    {
      id: 'structural-alloy-steels',
      name: 'High-Strength Structural Alloy Steels & Billets',
      image: alloySteelsImg,
      manufacturingProcess: 'Electric arc furnace (EAF) melted, argon oxygen decarburized (AOD), continuous cast into precision billets, hot rolled at 1,200°C, and quenched/tempered to achieve ultra-high yield strength.',
      specifications: ['AISI 4340 Alloy Steel', 'Chromium (1.1%)', 'Molybdenum (0.25%)', 'Nickel (1.8%)', 'Vanadium Trace'],
      technicalProperties: 'Delivers high fatigue resistance, exceptional tensile strength, and impact toughness required for heavy machinery crankshafts, landing gears, and structural frames.'
    },
    {
      id: 'carbon-fiber-composites',
      name: 'Aerospace Grade Carbon Fiber Prepreg Sheets',
      image: carbonFiberImg,
      manufacturingProcess: 'PAN-based 3K/12K continuous carbon fiber filaments impregnated with toughened epoxy resin matrix under vacuum hot-melt calibration, stored at -18°C cold chain prior to autoclave curing.',
      specifications: ['100% High Modulus PAN Carbon Fiber', 'Toughened Epoxy Matrix', 'Curing Agent Catalyst'],
      technicalProperties: 'Offers exceptional strength-to-weight ratio, near-zero thermal expansion coefficient, and high vibration damping for drone frames, sports gear, and aircraft panels.'
    },
    {
      id: 'copper-alloys',
      name: 'High-Conductivity Beryllium Copper Rods & Strip',
      image: berylliumCopperImg,
      manufacturingProcess: 'Vacuum induction melted C17200 alloy, cold-drawn, precipitation age-hardened at 315°C for maximum mechanical spring tension, and pickling-cleaned for oxide-free surfaces.',
      specifications: ['Copper (98%)', 'Beryllium (1.9%)', 'Cobalt (0.2%)', 'Trace Nickel'],
      technicalProperties: 'Combines electrical conductivity of copper with tensile strength of hardened steel, non-sparking properties for hazardous oil/gas environments, and long cycle fatigue resistance.'
    },
    {
      id: 'engineering-polymers',
      name: 'Specialty PEEK & PTFE Engineering Polymer Stock Shapes',
      image: peekPtfeImg,
      manufacturingProcess: 'Compression molded or high-pressure extruded Polyether Ether Ketone (PEEK) resin reinforced with 30% glass fiber, stress-relieved via programmed thermal annealing.',
      specifications: ['Virgin PEEK Resin', '30% Milled Glass Fiber Reinforcement', 'PTFE Dry Lubricant Filler'],
      technicalProperties: 'Maintains dimensional stability up to 260°C continuous service, resists aggressive chemical solvents, and provides extremely low sliding friction for industrial bushings.'
    },
    {
      id: 'precision-ceramics',
      name: 'Industrial Zirconia (ZrO2) & Alumina Oxide Ceramics',
      image: zirconiaCeramicsImg,
      manufacturingProcess: 'Yttria-stabilized zirconia (YSZ) sub-micron powder cold isostatically pressed (CIP) at 200 MPa, sintered at 1,500°C, and diamond wheel ground to sub-micron surface tolerances.',
      specifications: ['Yttria-Stabilized Zirconia (95% ZrO2 + 5% Y2O3)', 'High Purity Alumina (99.7% Al2O3)'],
      technicalProperties: 'Extreme hardness (Mohs 9), extreme wear and thermal shock resistance, ideal for pump seal rings, cutting blades, and high-voltage electrical insulators.'
    },
    {
      id: 'aluminum-alloys',
      name: '7075-T6 Aerospace Aluminum Plates & Extrusions',
      image: aluminum7075Img,
      manufacturingProcess: 'Direct chill cast aluminum ingots hot-rolled into heavy plates, solution heat-treated, stress-relieved by stretching (T651 temper), and artificial aged to peak mechanical strength.',
      specifications: ['Zinc (5.6%)', 'Magnesium (2.5%)', 'Copper (1.6%)', 'Chromium (0.23%)', 'Balance Aluminum'],
      technicalProperties: 'One of the highest strength aluminum alloys available, comparable to many steels while maintaining low density for aerospace airframes and high-stress robotics.'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? engineeringItems
    : engineeringItems.filter(item => item.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Engineering Materials & Industrial Metallurgy"
        breadcrumbText="Engineering Materials"
        bgImage={engineeringMainImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Selector Bar */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#0077B6]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Engineering & Industrial Materials Catalog ({engineeringItems.length} Products):
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
                All Engineering Materials ({engineeringItems.length})
              </button>
              {engineeringItems.map(item => (
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

          {/* Engineering Items Grid */}
          <div className="space-y-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Product Image Container */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-cover rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                      <span className="shrink-0 bg-slate-100 text-slate-800 border border-slate-300 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5 text-[#0077B6]" /> ASTM / DIN
                      </span>
                    </div>

                    {/* Manufacturing Process Text Box */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Metallurgical Processing & Treatment:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS / ALLOY COMPOSITION */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Alloy & Chemical Composition:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.specifications.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Purpose Of Materials */}
                    <div className="bg-[#F0FDF4] rounded-2xl p-4 border border-emerald-200 space-y-1.5">
                      <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        Engineering Application & Benefits:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.technicalProperties}
                      </p>
                    </div>

                    {/* Action Buttons */}
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
