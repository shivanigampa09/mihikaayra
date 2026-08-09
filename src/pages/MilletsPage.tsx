import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { CheckCircle2, Leaf, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';
import { useQuote } from '../context/QuoteContext';

import milletProsoImg from '../assets/images/proso_millet.png';
import milletSorghumImg from '../assets/images/sorghum_millet.png';
import milletFoxtailImg from '../assets/images/foxtail-millet.png';
import milletFingerImg from '../assets/images/finger-millet.png';
import milletPearlImg from '../assets/images/pearl-millet.png';
import milletKodoImg from '../assets/images/kodo-millet.png';
import milletLittleImg from '../assets/images/little-millet.png';
import milletBarnyardImg from '../assets/images/barnyard-millet.png';
import milletsHeaderImg from '../assets/images/category-millets.png';


interface MilletItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  nutritionalBenefits: string[];
  keyHighlights: string[];
}

export const MilletsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { openQuoteModal } = useQuote();

  const milletsList: MilletItem[] = [
    {
      id: 'foxtail-millet',
      name: 'Foxtail Millet (Korra)',
      image: milletFoxtailImg,
      manufacturingProcess: `Harvested from certified premium rainfed farms, the Foxtail millet undergoes a meticulous cleaning process. It is first sun-dried to remove excess moisture. Then, it passes through advanced destoners and gravity separators to ensure 99.5% purity. The millet is strictly unpolished, retaining its nutrient-dense bran layer. It is finally packed in nitrogen-flushed, vacuum-sealed pouches to preserve freshness, prevent oxidation, and ensure a long export shelf life.`,
      nutritionalBenefits: [
        'Rich in Vitamin B12 and essential amino acids',
        'Smart carbohydrate source with a low glycemic index',
        'High in dietary fiber for prolonged energy'
      ],
      keyHighlights: ['100% Unpolished & Premium', 'Heart friendly grain', 'Zero artificial treatments', 'Export-grade packaging']
    },
    {
      id: 'finger-millet',
      name: 'Finger Millet (Ragi)',
      image: milletFingerImg,
      manufacturingProcess: `Ragi is sourced directly from cooperative farming clusters known for ancient grain cultivation. The grains are triple-cleaned using pneumatic aspirators to remove dust, chaff, and impurities. Kept 100% unpolished to protect its high calcium content, the grain is then hygienically packed into moisture-barrier pouches. Every batch undergoes strict quality control for moisture and purity before being sealed for distribution.`,
      nutritionalBenefits: [
        'Highest calcium content among all cereals',
        'Excellent source of natural iron',
        'Rich in antioxidants and amino acids'
      ],
      keyHighlights: ['Bone health superfood', 'Ideal for infant foods and porridge', 'Naturally gluten-free', 'Certified premium']
    },
    {
      id: 'pearl-millet',
      name: 'Pearl Millet (Bajra)',
      image: milletPearlImg,
      manufacturingProcess: `Pearl Millet (Bajra) is carefully selected for its plump grain size. The processing involves rigorous mechanical cleaning to ensure no stones or husks remain. It is stored under controlled temperatures to maintain its high protein and energy content without spoilage. The unpolished grain is then packaged in high-grade export pouches ensuring protection from humidity and pests during transit.`,
      nutritionalBenefits: [
        'High protein and energy density',
        'Rich in magnesium, iron, and zinc',
        'Contains insoluble fiber for better digestion'
      ],
      keyHighlights: ['Perfect winter grain', 'Heart health support', 'Sustainably farmed', 'Vacuum-sealed freshness']
    },
    {
      id: 'kodo-millet',
      name: 'Kodo Millet (Arikelu)',
      image: milletKodoImg,
      manufacturingProcess: `Procured from arid regions where it thrives naturally, Kodo millet is cleaned using state-of-the-art grading machines. We ensure that the outer bran remains completely intact, avoiding any chemical polishing. The natural reddish-brown hue of the grain is preserved. It is then packed in specialized nitrogen-flushed packaging to guarantee that its potent antioxidants and dietary fiber remain fresh for global consumers.`,
      nutritionalBenefits: [
        'Exceptionally low glycemic index (diabetic friendly)',
        'Rich in powerful antioxidants and polyphenols',
        'High dietary fiber content for weight management'
      ],
      keyHighlights: ['Ideal rice substitute', 'Supports blood sugar management', 'Unpolished whole grain', 'Premium export quality']
    },
    {
      id: 'little-millet',
      name: 'Little Millet (Samalu)',
      image: milletLittleImg,
      manufacturingProcess: `Little Millet is meticulously sorted to separate the tiny grains from any foreign matter. Utilizing gentle air-blowing and gravity separation, the grains are cleaned without losing their delicate bran layer. After passing quality checks for moisture and purity, the unpolished Little Millet is packed into stand-up pouches and bulk export cartons, ensuring the grain retains its high mineral content and easy digestibility.`,
      nutritionalBenefits: [
        'Easily digestible and gentle on the stomach',
        'Rich in iron, magnesium, and essential fats',
        'Contains complex carbohydrates for sustained energy'
      ],
      keyHighlights: ['Perfect for Upma and Pongal', 'Quick cooking whole grain', 'Highly nutritious', '100% Gluten-free']
    },
    {
      id: 'barnyard-millet',
      name: 'Barnyard Millet (Oodalu)',
      image: milletBarnyardImg,
      manufacturingProcess: `Harvested fast-growing Barnyard millet is cleaned using a multi-step mechanical process to remove the tough outer husk while keeping the nutritious bran intact. The grains are visually and mechanically inspected to ensure uniform size and color. Finally, the millet is packaged in airtight, moisture-proof export bags that protect its delicate flavor and low-calorie nutritional profile during international shipping.`,
      nutritionalBenefits: [
        'Very low in calories and high in dietary fiber',
        'Excellent source of iron and calcium',
        'Highly beneficial for fasting and weight loss diets'
      ],
      keyHighlights: ['Fasting (Vrat) friendly', 'Low carbohydrate density', 'Unpolished purity', 'Export standard packing']
    },
    {
      id: 'proso-millet',
      name: 'Proso Millet (Varigalu)',
      image: milletProsoImg,
      manufacturingProcess: `Proso Millet is sourced and processed to maintain its distinct golden-yellow color. The cleaning process removes impurities while preserving its soft texture. Since it is completely unpolished, it retains its vital B-complex vitamins. The grain is then carefully packed into premium sealed bags that prevent oxidation, ensuring that the nutty flavor and health benefits reach our global customers intact.`,
      nutritionalBenefits: [
        'Rich source of Niacin (Vitamin B3)',
        'Contains essential amino acids for tissue repair',
        'Supports nervous system health'
      ],
      keyHighlights: ['Golden nutty flavor', 'High quality complex carbs', 'Unpolished premium grain', 'Vacuum sealed']
    },
    {
      id: 'sorghum-millet',
      name: 'Sorghum (Jowar)',
      image: milletSorghumImg,
      manufacturingProcess: `Sorghum (Jowar) grains are carefully harvested and sun-dried. The processing involves heavy-duty destoners and graders to select only the most premium, uniform grains. To protect its high antioxidant profile, the grain undergoes zero chemical polishing. It is then securely packed in moisture-resistant, nitrogen-flushed export packaging, ensuring that this versatile superfood maintains its nutritional integrity.`,
      nutritionalBenefits: [
        'High in antioxidants and phytochemicals',
        'Excellent source of magnesium for bone health',
        'Rich in dietary fiber that aids in digestion'
      ],
      keyHighlights: ['Versatile gluten-free superfood', 'Great for flatbreads (Rotis)', 'Supports digestive health', 'Export grade quality']
    }
  ];

  const filteredMillets = activeTab === 'all' 
    ? milletsList 
    : milletsList.filter(m => m.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Ancient Superfood Millets"
        breadcrumbText="Millets"
        bgImage={milletsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* CATEGORY SELECTOR TABS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Millet Variety ({milletsList.length} Items):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                All Millets ({milletsList.length})
              </button>
              {milletsList.map(millet => (
                <button
                  key={millet.id}
                  onClick={() => setActiveTab(millet.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                    activeTab === millet.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {millet.name.replace(' Unpolished', '')}
                </button>
              ))}
            </div>
          </div>

          {/* MILLETS GRID (1 COL ON MOBILE, 2 COLS ON LAPTOP: 1, 2 DOWN 3, 4) */}
          <div className="space-y-8">
            {filteredMillets.map(millet => (
              <div 
                key={millet.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img 
                    src={millet.image} 
                    alt={millet.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain transition-transform duration-500 hover:scale-105 drop-shadow-md"
                  />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {millet.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-[#0077B6]" />
                        Harvesting & Processing:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {millet.manufacturingProcess}
                      </p>
                    </div>

                    {/* NUTRITIONAL BENEFITS */}
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Nutritional Benefits:
                      </h4>
                      <ul className="text-xs text-slate-700 leading-relaxed font-sans list-disc list-inside space-y-1">
                        {millet.nutritionalBenefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    {/* KEY HIGHLIGHTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {millet.keyHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={millet.name} />
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
