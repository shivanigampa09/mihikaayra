import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import juteShoppingBagsImg from '../assets/images/jute-shopping-bags.png';
import juteJugBagsImg from '../assets/images/jute-jug-bags.png';
import juteFoodCarrierImg from '../assets/images/jute-food-carrier.png';
import juteBagsHeaderImg from '../assets/images/category-jute-bags.png';


interface JuteBagItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const JuteBagsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const juteBagsList: JuteBagItem[] = [
    {
      id: 'jute-tote-shopping',
      name: 'Eco Jute Tote & Shopping Bags',
      image: juteShoppingBagsImg,
      manufacturingProcess: `Sourced from premium 100% natural golden raw jute fibers. Retting and carding processes yield high-tensile weave jute yarn. The jute fabric is woven on heavy-duty looms and laminated with a thin moisture-proof barrier lining. Cut fabric panels are screen-printed with eco-friendly water-based pigments, then double-stitched with heavy thread and reinforced padded handles capable of sustaining loads up to 15 kg. Each bag undergoes quality inspection, thread trimming, and bundling.`,
      ingredients: [
        '100% Natural Golden Jute Fabric',
        'Laminated LDPE Inner Lining',
        'Padded Cotton Handles',
        'Eco-Friendly Non-Toxic Inks',
        'Reinforced Nylon Stitching Thread'
      ],
      purposeOfIngredients: `Golden Jute Yarn gives immense tensile strength and zero synthetic environmental impact. Laminated LDPE lining prevents liquid leaks and moisture accumulation. Padded cotton handles ensure comfort while carrying heavy items. Eco-friendly inks guarantee clear printing without chemical odors.`
    },
    {
      id: 'jute-water-bottle-jug',
      name: 'Jute Water Bottle & Jug Bags',
      image: juteJugBagsImg,
      manufacturingProcess: `Crafted specifically for carrying water bottles, thermos flasks, oil jugs, and liquid containers. High-density woven burlap jute fabric is cut into tall cylindrical and compartmented patterns. Internal padded foam dividers and waterproof lining are integrated to cushion glass or metal containers. Handles are triple-stitched around the base perimeter to distribute weight evenly and prevent handle tearing.`,
      ingredients: [
        'Natural Burlap Jute Canvas',
        'Internal Thermal PE Foil Lamination',
        'Cushioning EPE Foam Dividers',
        'Heavy-Duty Cotton Webbing Straps',
        'Reinforced Base Plate Board'
      ],
      purposeOfIngredients: `High-density jute outer canvas prevents abrasion and tearing. Internal PE foil and EPE foam protect jugs from impact damage. Reinforced base plate supports heavy liquid weights. Triple-stitched cotton handles ensure secure daily carrying.`
    },
    {
      id: 'jute-lunch-food-carrier',
      name: 'Insulated Jute Lunch & Food Carrier Bags',
      image: juteFoodCarrierImg,
      manufacturingProcess: `Specially engineered for office, school, and picnic meal transportation. High-grade natural jute fabric is combined with a 3mm thermal aluminum foil insulation inner liner to maintain hot or cold food temperatures for up to 4 hours. Fitted with smooth rust-resistant zippers, internal mesh pockets for cutlery, and padded soft handles. Precision edge-binding stitching prevents seam fraying.`,
      ingredients: [
        '100% Laminated Natural Jute Shell',
        '3mm Thermal Aluminum Foil Insulation',
        'Internal Cutlery Netting Mesh',
        'Heavy-Duty Metal Zipper Closure',
        'Soft Cotton Padded Handles'
      ],
      purposeOfIngredients: `Thermal aluminum lining keeps packed meals warm and fresh while providing leakproof protection. High-density jute shell presents a stylish eco-friendly aesthetic. Internal cutlery mesh keeps utensils organized. Rust-proof zipper secures contents safely.`
    }
  ];

  const filteredJuteBags = activeTab === 'all'
    ? juteBagsList
    : juteBagsList.filter(b => b.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Jute Bags"
        breadcrumbText="Jute Bags"
        bgImage={juteBagsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Jute Bag Variety ({juteBagsList.length} Items):
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
                All Jute Bags ({juteBagsList.length})
              </button>
              {juteBagsList.map(bag => (
                <button
                  key={bag.id}
                  onClick={() => setActiveTab(bag.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === bag.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {bag.name}
                </button>
              ))}
            </div>
          </div>

          {/* JUTE BAG CARDS LIST */}
          <div className="space-y-8">
            {filteredJuteBags.map(bag => (
              <div
                key={bag.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* COMPACT LEFT IMAGE COLUMN */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img
                    src={bag.image}
                    alt={bag.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover md:object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* RIGHT CONTENT COLUMN */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {bag.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {bag.manufacturingProcess}
                      </p>
                    </div>

                    {/* RAW MATERIALS LIST */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Raw Materials:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {bag.ingredients.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PURPOSE OF MATERIALS */}
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Purpose of Materials:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {bag.purposeOfIngredients}
                      </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={bag.name} />
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
