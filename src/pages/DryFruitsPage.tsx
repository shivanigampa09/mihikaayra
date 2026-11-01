import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import imgAlmond from '../assets/images/almond_badam_1785757421240.jpg';
import dryFruitsHeaderImg from '../assets/images/category-dry-fruits.png';
import imgCashew from '../assets/images/cashew_kaju_1785757488672.jpg';
import imgWalnut from '../assets/images/walnut_1785757500657.jpg';
import imgSaltedPista from '../assets/images/salted_pista_1785757512618.jpg';
import imgNormalPista from '../assets/images/normal_pista_1785757526199.jpg';
import imgKishmish from '../assets/images/kishmish_raisins_1785757537929.jpg';
import imgDates from '../assets/images/dates_khajur_1785757551389.jpg';
import imgFigs from '../assets/images/figs_anjeer_1785757598949.jpg';
import imgPumpkinSeeds from '../assets/images/pumpkin_seeds_1785757623611.jpg';


interface DryFruitItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const DryFruitsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const dryFruitsList: DryFruitItem[] = [
    {
      id: 'almond-badam',
      name: 'Almond (Badam)',
      image: imgAlmond,
      manufacturingProcess: 'Harvested from sunny almond orchards, the outer hulls and hard shells are mechanically removed using soft-shell cracking machinery. The kernels are air-sorted by size grade (20-22 count per oz) and passed through double-pass optical sorters to eliminate chipped or cracked nuts. The raw almonds are steam-pasteurized without chemicals, moisture-tested under 6%, and nitrogen-flushed in multi-layer barrier foil pouches to preserve natural crunch and nutty oils.',
      ingredients: ['100% Pure Raw California Almond Kernels'],
      purposeOfIngredients: 'Almonds are rich in Vitamin E, plant protein, dietary fiber, and healthy monounsaturated fats that support brain health, skin radiance, and cholesterol management.'
    },
    {
      id: 'cashew-kaju',
      name: 'Cashew (Kaju)',
      image: imgCashew,
      manufacturingProcess: 'Sun-dried raw cashew nuts undergo controlled steam conditioning to loosen the outer CNSL shell without scorching the white kernel. Manual de-shelling and hand-peeling remove the inner testa skin. Kernels are sorted into W240/W320 size grades, oven-dried at 70°C for moisture reduction, vacuum-packed in nitrogen-flushed tins or foil pouches for export.',
      ingredients: ['100% Whole Roasted White Cashew Kernels (Grade W240)'],
      purposeOfIngredients: 'Cashews provide a rich creamy texture packed with copper, magnesium, and healthy fats essential for bone density, cardiovascular health, and sustained daily energy.'
    },
    {
      id: 'walnut',
      name: 'Walnut',
      image: imgWalnut,
      manufacturingProcess: 'Fresh walnuts harvested from mountain orchards are hulled, washed, and naturally shade-dried. Precision shell-cracking yields intact half-butterfly kernels. Kernels are hand-sorted into Extra Light amber color grades, nitrogen-flushed to avoid oil rancidity, and sealed in airtight vacuum pouches.',
      ingredients: ['100% Raw Extra Light Walnut Half Kernels'],
      purposeOfIngredients: 'Walnuts contain the highest plant-based Omega-3 ALA fatty acids among nuts, promoting cognitive memory, reducing brain inflammation, and supporting heart wellness.'
    },
    {
      id: 'salted-pista',
      name: 'Salted Pista',
      image: imgSaltedPista,
      manufacturingProcess: 'Naturally open-shelled pistachios are cleaned and dry-roasted in small batches with rock salt and a touch of saffron/turmeric water. The roasting develops a crisp texture and rich aroma. Cool-air blowing removes shell dust before automated weigh-filling in moisture-lock pouches.',
      ingredients: ['Naturally Opened Whole Pistachios', 'Himalayan Rock Salt'],
      purposeOfIngredients: 'Pistachios offer a rich source of lutein antioxidants, potassium, and fiber, making them an ideal low-calorie, gut-friendly snack.'
    },
    {
      id: 'normal-pista',
      name: 'Normal Pista',
      image: imgNormalPista,
      manufacturingProcess: 'Harvested pistachios are quickly hulled and dried to preserve their green color and delicate flavor. Sorted for naturally open shells and large size before packaging.',
      ingredients: ['100% Raw Unsalted Pistachios'],
      purposeOfIngredients: 'A perfect heart-healthy snack free of sodium, loaded with protein and healthy fats.'
    },
    {
      id: 'kishmish',
      name: 'Kishmish (Raisins)',
      image: imgKishmish,
      manufacturingProcess: 'Selected seedless grapes are shade-cured in traditional ventilated drying sheds to preserve natural amber sweetness and soft texture. Washing in purified water removes dust, followed by stem removal and centrifugal drying before food-grade oil polishing and vacuum pouch sealing.',
      ingredients: ['100% Sun-Cured Seedless Golden Grapes', 'Trace Edible Vegetable Oil'],
      purposeOfIngredients: 'Golden raisins supply quick natural energy, bio-available iron, and potassium to combat fatigue and improve digestive gut motility.'
    },
    {
      id: 'dates-khajur',
      name: 'Dates (Khajur)',
      image: imgDates,
      manufacturingProcess: 'Hand-picked from organic date palms at peak ripeness. The dates are sorted by plumpness, cleaned with soft air jets and food-grade water mist, and packed in protective thermoformed trays to prevent crushing and maintain natural caramel sweetness.',
      ingredients: ['100% Organic Whole Dates'],
      purposeOfIngredients: 'Dates are nature’s energy candy, brimming with natural dietary fiber, potassium, and antioxidants that regulate blood sugar levels and stamina.'
    },
    {
      id: 'figs-anjeer',
      name: 'Figs (Anjeer)',
      image: imgFigs,
      manufacturingProcess: 'Mature figs are naturally sun-dried on wooden racks until soft and chewy. They are washed, sorted, hand-strung or disc-pressed, and packed in food-grade protective boxes.',
      ingredients: ['100% Sun-Dried Organic Whole Figs'],
      purposeOfIngredients: 'Dried figs are an exceptional source of dietary calcium, fiber, and iron that strengthen bones and support smooth digestion.'
    },
    {
      id: 'pumpkin-seeds',
      name: 'Pumpkin Seeds',
      image: imgPumpkinSeeds,
      manufacturingProcess: 'Extracted from mature pumpkins, the seeds are washed, hulled to remove the white outer shell, and gently air-dried to preserve their green color and nutritional profile. They are packed in vacuum-sealed bags to maintain freshness.',
      ingredients: ['100% Raw Hulled Pumpkin Seeds (Pepitas)'],
      purposeOfIngredients: 'A nutritional powerhouse packed with magnesium, zinc, and healthy fats, supporting immune function and heart health.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? dryFruitsList
    : dryFruitsList.filter(d => d.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Premium Dry Fruits & Nuts"
        breadcrumbText="Dry Fruits"
        bgImage={dryFruitsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Dry Fruit Variety ({dryFruitsList.length} Items):
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
                All Dry Fruits ({dryFruitsList.length})
              </button>
              {dryFruitsList.map(item => (
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

          {/* Dry Fruits Cards List */}
          <div className="space-y-8">
            {filteredList.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Compact Left Image Column */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right Content Column */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* Manufacturing Process Text Box */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Processing & Sorting Method:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Raw Variety & Grade:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.ingredients.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Nutritional Benefits & Purpose:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.purposeOfIngredients}
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
