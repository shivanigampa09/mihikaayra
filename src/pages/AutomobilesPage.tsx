import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import imgCargoTrucks from '../assets/images/heavy_cargo_trucks_1786176219238.jpg';
import imgScooters from '../assets/images/electric_scooters_1786176233705.jpg';
import imgRickshaws from '../assets/images/e_rickshaws_1786176247131.jpg';
import imgSpareParts from '../assets/images/auto_spare_parts_1786176260166.jpg';
import imgTractors from '../assets/images/agricultural_tractors_1786176274892.jpg';
import imgBatteries from '../assets/images/industrial_ev_batteries_1786176288833.jpg';

const automobilesMainImg = imgCargoTrucks;

interface AutoItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  specifications: string[];
  application: string;
}

export const AutomobilesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const autoList: AutoItem[] = [
    {
      id: 'commercial-trucks',
      name: 'Heavy Commercial Cargo Trucks & Tippers',
      image: imgCargoTrucks,
      manufacturingProcess: 'High-tensile steel chassis frame welding, turbocharged common-rail diesel engine integration, ABS pneumatic braking systems, and ergonomic sleeper cabs compliant with Euro VI / BS6 emission norms.',
      specifications: ['High-Strength Structural Steel Chassis', 'Common Rail Diesel Engine Assembly', 'Pneumatic Air Brakes & ABS'],
      application: 'Engineered for long-haul freight distribution, mining operations, heavy logistics, and reliable multi-terrain cargo transport.'
    },
    {
      id: 'electric-two-wheelers',
      name: 'High-Speed Electric Scooters & E-Motorcycles',
      image: imgScooters,
      manufacturingProcess: 'Lightweight aluminum alloy frame construction, IP67 waterproof lithium-ion battery pack assembly, BLDC hub motor integration, and smart IoT digital telematics dashboards.',
      specifications: ['IP67 Removable Li-ion Battery Pack', 'High-Torque BLDC Hub Motor', 'Regenerative Braking ECU Controller'],
      application: 'Delivers zero-emission eco-friendly urban commuting, low operational costs, rapid charging capabilities, and quiet smooth acceleration.'
    },
    {
      id: 'e-rickshaws',
      name: 'Passenger & Freight Cargo E-Rickshaws',
      image: imgRickshaws,
      manufacturingProcess: 'Heavy-duty tubular steel frame chassis, high-torque geared axle motors, deep-cycle lead-acid/LFP battery packs, and weather-proof fiber reinforced plastic (FRP) body roofs.',
      specifications: ['Heavy Tubular Steel Framework', 'High-Torque Differential Gear Axle', 'LFP Battery Pack with Smart BMS'],
      application: 'Provides cost-effective last-mile urban passenger transit, commercial market delivery, and low-maintenance green transport.'
    },
    {
      id: 'auto-spare-parts',
      name: 'OEM Auto Spare Parts & Engine Components',
      image: imgSpareParts,
      manufacturingProcess: 'Precision CNC machining, induction hardening, and drop-forging of alloy steel pistons, crankshafts, brake rotors, clutch plates, and oil filters.',
      specifications: ['Forged Alloy Steel Components', 'Asbestos-Free Ceramic Friction Pads', 'Synthetic Rubber Gaskets & Seals'],
      application: 'Ensures exact OEM fitment, high thermal endurance, reduced vehicle wear and tear, and maximum operational safety.'
    },
    {
      id: 'tractors',
      name: 'Agricultural Tractors & Farm Implements',
      image: imgTractors,
      manufacturingProcess: 'Heavy diesel engine assembly paired with dual-clutch synchromesh gearboxes, 3-point hydraulic hitch linkage systems, and heavy-duty treaded tractor tires.',
      specifications: ['High-Torque Fuel Efficient Diesel Engine', 'Cat-II 3-Point Hydraulic Linkage', 'Heavy Steel Wheel Rims & Treaded Tires'],
      application: 'Powers agricultural tillage, ploughing, seed drilling, crop hauling, and heavy-duty farm implement towing.'
    },
    {
      id: 'batteries',
      name: 'Industrial & EV Automotive Batteries',
      image: imgBatteries,
      manufacturingProcess: 'High-purity lead calcium alloy grids or lithium iron phosphate (LiFePO4) cell stacking enclosed in shock-resistant polypropylene heat-sealed casings with integrated BMS.',
      specifications: ['High-Density LiFePO4 / Lead Calcium Cells', 'Smart Battery Management System (BMS)', 'Heat-Sealed Polypropylene Case'],
      application: 'Provides reliable high-cranking cold amps, deep discharge cycle resistance, and long service life for commercial vehicles and ESS.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? autoList
    : autoList.filter(i => i.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Auto Mobile"
        breadcrumbText="Auto Mobile"
        bgImage={automobilesMainImg}
        compact={true}
        showCloseButton={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Auto Mobile Category ({autoList.length} Categories):
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
                All Auto Mobile Products ({autoList.length})
              </button>
              {autoList.map(item => (
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
                        Manufacturing & Engineering Standard:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Core Materials & Technical Components:
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
                        {item.application}
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
