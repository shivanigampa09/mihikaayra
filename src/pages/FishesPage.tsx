import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import catlaImg from '../assets/images/catla.jpeg';
import crabsImg from '../assets/images/crabs.jpeg';
import hilsaImg from '../assets/images/hilsa.jpeg';
import lobsterImg from '../assets/images/lobster.jpeg';
import mackerelImg from '../assets/images/mackerel.jpeg';
import pomfretImg from '../assets/images/pomfret.jpeg';
import prawnsImg from '../assets/images/prawns.jpeg';
import rohuImg from '../assets/images/rohu.jpeg';
import salmonImg from '../assets/images/salmon.jpeg';
import sardineImg from '../assets/images/sardine.jpeg';
import tunaImg from '../assets/images/tuna.jpeg';
import eggsImg from '../assets/images/farm_fresh_eggs_1786091590788.jpg';

interface FishItem {
  id: string;
  name: string;
  category?: 'seafood' | 'eggs' | 'meat';
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const FishesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const fishesList: FishItem[] = [
    {
      id: 'prawns',
      name: 'prawns',
      image: prawnsImg,
      manufacturingProcess: 'Harvested from pristine ocean coastal waters, peeled, deveined, washed in ozonated water, and individually quick-frozen (IQF) at -40°C to retain succulent crunch and fresh ocean flavor.',
      ingredients: ['100% Wild-Caught Cleaned Fresh Prawns'],
      purposeOfIngredients: 'Rich in astaxanthin antioxidants, zinc, selenium, and lean muscle-building protein.'
    },
    {
      id: 'crabs',
      name: 'crabs',
      image: crabsImg,
      manufacturingProcess: 'Fresh sea crabs selected for high meat density, cleaned, hand-processed into whole dressed or cut halves/quarters, and blast-frozen in protective export barrier casing.',
      ingredients: ['100% Wild Sea Crabs'],
      purposeOfIngredients: 'Abundant in Vitamin B12, phosphorus, and zinc; low in fat with authentic sweet marine flavor.'
    },
    {
      id: 'lobster',
      name: 'lobster',
      image: lobsterImg,
      manufacturingProcess: 'Sourced from deep reef beds, graded by size and weight, nitrogen blast-frozen whole or tail-only to lock in sweet tender lobster meat.',
      ingredients: ['100% Fresh Wild Rock Lobster'],
      purposeOfIngredients: 'Delivers essential Omega-3 fatty acids, copper, selenium, and high-grade protein for gourmet dining.'
    },
    {
      id: 'tuna',
      name: 'tuna',
      image: tunaImg,
      manufacturingProcess: 'Deep-sea yellowfin & skipjack tuna caught via sustainable hook-and-line, bled immediately, precision-filleted or loined, and frozen at sub-zero temperatures.',
      ingredients: ['100% Fresh Wild Yellowfin Tuna'],
      purposeOfIngredients: 'Exceptional source of lean protein, Vitamin B6, B12, and heart-healthy Omega-3 fatty acids.'
    },
    {
      id: 'salmon',
      name: 'salmon',
      image: salmonImg,
      manufacturingProcess: 'Sourced from cold pristine ocean waters, filleted under sterile cold-room conditions, skin-on or skinless potion-cut, and nitrogen-frozen to preserve deep pink color and omega oils.',
      ingredients: ['100% Premium Salmon Fillet'],
      purposeOfIngredients: 'Abundant in DHA and EPA Omega-3 fats; promotes brain function, cardiovascular health, and reduces inflammation.'
    },
    {
      id: 'mackerel',
      name: 'mackerel',
      image: mackerelImg,
      manufacturingProcess: 'Sustainably netted Indian ocean mackerel, weight-graded, flash-frozen in IQF blocks or loose pieces without any chemical glazing or preservatives.',
      ingredients: ['100% Fresh Wild Mackerel'],
      purposeOfIngredients: 'Rich in Coenzyme Q10, Vitamin D, and essential fatty acids for stamina and cellular energy.'
    },
    {
      id: 'sardine',
      name: 'sardine',
      image: sardineImg,
      manufacturingProcess: 'Ocean fresh oil-rich sardines, chilled immediately on flake ice, cleaned, and blast-frozen at sea to maintain delicate texture and high nutrient retention.',
      ingredients: ['100% Wild Fresh Sardines'],
      purposeOfIngredients: 'High density of calcium, Vitamin D, B12, and Omega-3 lipids supporting strong bone structure.'
    },
    {
      id: 'pomfret',
      name: 'pomfret',
      image: pomfretImg,
      manufacturingProcess: 'Direct dock harvest white pomfret, descaled, gutted, washed, and packed into insulated food-grade temperature-controlled containers for export.',
      ingredients: ['100% Fresh White Pomfret'],
      purposeOfIngredients: 'Butter-soft delicate meat high in iodine, niacin, and low-cholesterol easily digestible proteins.'
    },
    {
      id: 'rohu',
      name: 'rohu',
      image: rohuImg,
      manufacturingProcess: 'Freshwater Rohu harvested from clean aquaculture farms, scaled, gutted, cut into uniform steaks or kept whole, and blast-frozen.',
      ingredients: ['100% Fresh Farmed Rohu Fish'],
      purposeOfIngredients: 'Provides essential amino acids, Vitamin C, iron, and zinc with a traditional mild sweet taste.'
    },
    {
      id: 'catla',
      name: 'catla',
      image: catlaImg,
      manufacturingProcess: 'Freshwater Catla harvested at full maturity, expertly cleaned and dressed, chilled under sub-zero cold chain logistics, and vacuum-sealed.',
      ingredients: ['100% Fresh Catla Fish'],
      purposeOfIngredients: 'Low-fat, protein-dense fish rich in sulfur, potassium, and phosphorus for daily dietary wellness.'
    },
    {
      id: 'hilsa',
      name: 'hilsa',
      image: hilsaImg,
      manufacturingProcess: 'Pristine riverine Hilsa caught during season, chilled with flake ice, graded by weight, and blast-frozen to preserve its signature rich oily flavor and aroma.',
      ingredients: ['100% Wild Fresh Hilsa Fish'],
      purposeOfIngredients: 'Renowned for high natural oil content rich in Omega-3 fatty acids and distinct buttery flavor.'
    },
    {
      id: 'eggs',
      name: 'Farm Fresh Poultry Eggs',
      category: 'eggs',
      image: eggsImg,
      manufacturingProcess: 'Farm-fresh poultry eggs UV-sanitized, weight-graded, and shock-absorbent pulp tray packed for safe export delivery.',
      ingredients: ['100% Farm Fresh Poultry Eggs'],
      purposeOfIngredients: 'Complete protein source with all essential amino acids, choline for brain development, and lutein for vision.'
    }
  ];

  const filteredFishes = activeTab === 'all'
    ? fishesList
    : activeTab === 'seafood'
    ? fishesList.filter(f => (f.category || 'seafood') === 'seafood')
    : activeTab === 'eggs'
    ? fishesList.filter(f => f.category === 'eggs' || f.id === 'eggs')
    : fishesList.filter(f => f.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Seafood and Eggs and Meat"
        breadcrumbText="Seafood and Eggs and Meat"
        compact={true}
        showCloseButton={true}
      />
      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter Category & Items ({fishesList.length} Items):
            </span>

            {/* Sector Level Buttons */}
            <div className="flex flex-wrap gap-2 pb-3 border-b border-slate-100">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All ({fishesList.length})
              </button>
              <button
                onClick={() => setActiveTab('seafood')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'seafood'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Seafood Products (11)
              </button>
              <button
                onClick={() => setActiveTab('eggs')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'eggs'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Eggs & Poultry (1)
              </button>
            </div>

            {/* Individual Item Buttons */}
            <div className="flex flex-wrap gap-2">
              {fishesList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    activeTab === item.id
                      ? 'bg-[#0077B6] text-white shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Fishes Cards List */}
          <div className="space-y-8">
            {filteredFishes.map(item => (
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
                    className="w-full h-full object-cover md:object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
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
                        Catching & Processing:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Natural Contents:
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
                        Nutritional Benefits:
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
