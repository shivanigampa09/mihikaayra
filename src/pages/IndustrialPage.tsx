import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import solarPvImg from '../assets/images/industrial-solar-pv.jpg';
import pumpsImg from '../assets/images/industrial-pumps.jpg';
import valvesImg from '../assets/images/industrial-valves.jpg';
import transformersImg from '../assets/images/industrial-transformers.webp';
import safetyPpeImg from '../assets/images/industrial-safety-ppe.jpg';
import cncImg from '../assets/images/industrial-cnc.jpg';

const industrialMainImg = solarPvImg;

interface IndustrialItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  specifications: string[];
  applications: string;
}

export const IndustrialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const industrialList: IndustrialItem[] = [
    {
      id: 'transformers',
      name: 'High-Voltage Power & Distribution Transformers',
      image: transformersImg,
      manufacturingProcess: 'Cold-rolled grain-oriented (CRGO) silicon steel core lamination, electrolytic copper wire winding insulation, oil-immersed heat dissipation tanks, and IEC 60076 quality testing.',
      specifications: ['CRGO Silicon Steel Laminated Core', '99.9% Pure Electrolytic Copper Windings', 'Mineral / Synthetic Transformer Oil'],
      applications: 'Steps up or steps down grid voltage for electrical sub-stations, industrial factories, renewable solar farms, and urban power distribution grids.'
    },
    {
      id: 'cnc-machinery',
      name: 'Precision CNC Lathes & Milling Machinery',
      image: cncImg,
      manufacturingProcess: 'Meehanite cast iron vibration-damped bed casting, Siemens/Fanuc multi-axis CNC controllers, high-speed ceramic bearing spindles, and linear motion guideway precision assembly.',
      specifications: ['Heavy Meehanite Cast Iron Bed', 'Precision Ball Screws & Linear Guides', 'Fanuc / Siemens CNC Controller Unit'],
      applications: 'Enables high-precision metal cutting, turning, drilling, aerospace component machining, and complex automotive tool manufacturing.'
    },
    {
      id: 'industrial-pumps',
      name: 'Heavy-Duty Centrifugal & Submersible Pumps',
      image: pumpsImg,
      manufacturingProcess: 'Investment-cast duplex stainless steel / bronze impellers, dynamic balancing, mechanical silicon carbide seals, and IP68 heavy-duty electric motor integration.',
      specifications: ['Duplex Stainless Steel Impellers', 'Silicon Carbide Mechanical Seals', 'IE3 Premium Efficiency Copper Motor'],
      applications: 'Pumps industrial wastewater, agricultural irrigation water, chemical fluids, high-pressure boiler feed, and municipal water supply.'
    },
    {
      id: 'solar-pv-panels',
      name: 'Commercial Solar PV Modules & Inverters',
      image: solarPvImg,
      manufacturingProcess: 'N-type TOPCon / PERC monocrystalline silicon solar cells encased with low-iron anti-reflective tempered glass, EVA encapsulation, and anodized aluminum alloy frames.',
      specifications: ['Monocrystalline N-Type Solar Cells', 'Low-Iron Anti-Reflective Glass', 'Anodized Aluminum Metal Frame'],
      applications: 'Generates clean renewable solar electricity for commercial rooftop installations, utility-scale solar farms, and microgrids.'
    },
    {
      id: 'valves-fittings',
      name: 'High-Pressure Industrial Valves & Flanges',
      image: valvesImg,
      manufacturingProcess: 'Forged carbon steel and ASTM A351 CF8M stainless steel body casting, hard-faced Stellite seating, hydrostatic pressure testing up to 10,000 PSI.',
      specifications: ['ASTM A351 Stainless Steel Body', 'Stellite Hard-Faced Valve Seat', 'Graphite High-Temp Gasket Seals'],
      applications: 'Controls fluid flow, pressure, and isolation in oil & gas refineries, chemical plants, steam pipelines, and water treatment facilities.'
    },
    {
      id: 'safety-gear',
      name: 'Industrial Safety Equipment & PPE Gear',
      image: safetyPpeImg,
      manufacturingProcess: 'Impact-resistant Kevlar and HDPE safety helmets, steel-toe composite safety shoes, flame-retardant Nomex coveralls, and anti-fall safety harnesses.',
      specifications: ['High-Impact Polyethylene (HDPE)', 'Kevlar / Steel Toe Cap Composite', 'Flame-Retardant Nomex Fabric'],
      applications: 'Protects industrial workforce, construction workers, and engineers against electrical arc, physical impacts, thermal burns, and falls.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? industrialList
    : industrialList.filter(i => i.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Industrial Equipment & Heavy Machinery"
        breadcrumbText="Industrial"
        bgImage={industrialMainImg}
        compact={true}
        showCloseButton={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Industrial Category ({industrialList.length} Categories):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Industrial Machinery ({industrialList.length})
              </button>
              {industrialList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* ITEM DISPLAY GRID - SAME HAS SNACKS & SWEETS PAGES */}
          <div className="space-y-8">
            {filteredList.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Product Image Container */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING PROCESS / SPECIFICATIONS */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing & Testing Standard:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Core Materials & Engineering Grade:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.specifications.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Application & Global Utility:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.applications}
                      </p>
                    </div>

                    {/* Action Button */}
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
