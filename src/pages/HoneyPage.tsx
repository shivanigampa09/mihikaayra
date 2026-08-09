import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';
import { useQuote } from '../context/QuoteContext';

import honeyMainImg from '../assets/images/honey.png';

const organicHoneyImg = honeyMainImg;
const honeyHeaderImg = honeyMainImg;
const honeyJarImg = honeyMainImg;

interface HoneyItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const HoneyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { openQuoteModal } = useQuote();

  const honeyList: HoneyItem[] = [
    {
      id: 'organic-honey',
      name: 'Organic Honey',
      image: honeyJarImg,
      manufacturingProcess: `Harvested from diverse floral sources across organic farmlands and wild forest bee hives. Minimally processed and unheated to preserve the diverse blend of enzymes, vitamins, and minerals. Filtered using natural methods to ensure purity without losing beneficial pollen.`,
      ingredients: [
        '100% Pure Organic Nectar',
        'Natural Floral Pollen'
      ],
      purposeOfIngredients: `Provides a rich, complex flavor profile. Acts as an excellent natural energy booster, immunity builder, and antioxidant due to the diverse active compounds it contains. Zero added sugar or preservatives.`
    }
  ];

  const filteredHoney = activeTab === 'all'
    ? honeyList
    : honeyList.filter(h => h.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Pure Organic Honey"
        breadcrumbText="Organic Honey"
        bgImage={honeyHeaderImg}
        compact={true}
      />
      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Honey Variety ({honeyList.length} Item):
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
                All Honey ({honeyList.length})
              </button>
              {honeyList.map(item => (
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

          {/* HONEY CARDS LIST */}
          <div className="space-y-8">
            {filteredHoney.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* COMPACT LEFT IMAGE COLUMN */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* RIGHT CONTENT COLUMN */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Extraction & Filtration Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS LIST */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Natural Ingredients & Active Compounds:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.ingredients.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PURPOSE OF INGREDIENTS */}
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Purpose of Ingredients & Health Benefits:
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
