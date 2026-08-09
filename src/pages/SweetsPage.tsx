import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { CheckCircle2, Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';
import { useQuote } from '../context/QuoteContext';

import mysorePakImg from '../assets/images/mysore_pak.png';
import ippaPuvvuImg from '../assets/images/ippa-puvvu-laddu.png';
import motichoorImg from '../assets/images/motichoor-laddu.png';
import kajuKatliImg from '../assets/images/kaju-katli.png';
import badushaImg from '../assets/images/badusha.png';

const sweetsCollectionImg = mysorePakImg;

interface SweetItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const SweetsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { openQuoteModal } = useQuote();

  const sweetsList: SweetItem[] = [
    {
      id: 'ippa-puvvu-laddu',
      name: 'Ippa Puvvu Laddu (Mahua Flower Laddu)',
      image: ippaPuvvuImg,
      manufacturingProcess: `Fresh Ippa (Mahua) flowers are collected from trusted farmers and carefully cleaned to remove impurities. The flowers are naturally dried and lightly roasted to enhance their aroma and flavor. Roasted gram flour (or millet flour), grated jaggery, ghee, dry fruits, cardamom powder, and nuts are added to the roasted Mahua flowers and mixed thoroughly. The mixture is shaped into round laddus under hygienic conditions. After quality inspection, the laddus are packed in food-grade boxes, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Dried Ippa (Mahua) Flowers',
        'Jaggery',
        'Gram Flour (or Millet Flour)',
        'Ghee',
        'Cardamom Powder',
        'Cashew Nuts',
        'Almonds',
        'Raisins'
      ],
      purposeOfIngredients: `Dried Ippa (Mahua) flowers provide a natural sweet taste and unique aroma. Jaggery adds sweetness and minerals. Gram flour (or millet flour) gives structure and texture. Ghee binds the ingredients and enhances flavor. Cardamom powder adds a pleasant aroma. Cashew nuts, almonds, and raisins improve taste, texture, and nutritional value.`
    },
    {
      id: 'motichoor-laddu',
      name: 'Motichoor Laddu',
      image: motichoorImg,
      manufacturingProcess: `Fresh gram flour (besan) is mixed with water to prepare a smooth batter. The batter is passed through a perforated ladle to form tiny boondi, which is deep-fried in edible oil or ghee until golden. The fried boondi is soaked in sugar syrup flavored with cardamom and saffron. Cashew nuts, almonds, raisins, and edible camphor (optional) are added and mixed thoroughly. The mixture is shaped into round laddus under hygienic conditions. After quality inspection, the laddus are packed in food-grade boxes, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Gram Flour (Besan)',
        'Sugar',
        'Ghee (or Edible Oil)',
        'Cardamom Powder',
        'Saffron (Optional)',
        'Cashew Nuts',
        'Almonds',
        'Raisins',
        'Edible Camphor (Optional)',
        'Food-Grade Orange Color (Optional)'
      ],
      purposeOfIngredients: `Gram flour forms the boondi and provides the base. Sugar gives sweetness and binds the boondi together. Ghee enhances flavor and richness. Cardamom powder adds aroma. Saffron (optional) provides premium flavor and color. Cashew nuts, almonds, and raisins improve taste and nutritional value. Edible camphor (optional) gives a traditional aroma. Food-grade orange color (optional) provides the classic Motichoor Laddu appearance.`
    },
    {
      id: 'kaju-katli',
      name: 'Kaju Katli',
      image: kajuKatliImg,
      manufacturingProcess: `Premium-quality cashew nuts are carefully selected, cleaned, and finely ground into a smooth powder. Sugar is dissolved in water and cooked to prepare a sugar syrup of the required consistency. The cashew powder is gradually added to the syrup and cooked until a smooth dough is formed. A small quantity of ghee and cardamom powder (optional) is added to enhance the flavor. The dough is rolled into a thin sheet, decorated with edible silver leaf (optional), and cut into diamond-shaped pieces under hygienic conditions. After quality inspection, the Kaju Katli is packed in food-grade boxes, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Premium Cashew Nuts',
        'Sugar',
        'Water',
        'Ghee (Optional)',
        'Cardamom Powder (Optional)',
        'Edible Silver Leaf (Optional)'
      ],
      purposeOfIngredients: `Premium cashew nuts provide the rich taste and smooth texture. Sugar adds sweetness and binds the mixture together. Water is used to prepare the sugar syrup. Ghee (optional) enhances softness and flavor. Cardamom powder (optional) adds a pleasant aroma. Edible silver leaf (optional) gives a premium traditional appearance.`
    },
    {
      id: 'badusha',
      name: 'Badusha',
      image: badushaImg,
      manufacturingProcess: `Premium-quality refined flour (maida) is mixed with ghee, baking soda, curd, and water to prepare a soft dough. The dough is rested, shaped into round Badushas, and deep-fried in edible oil or ghee over a low flame until golden and flaky. The fried Badushas are dipped in warm sugar syrup flavored with cardamom and saffron (optional). After the syrup is absorbed, they are cooled under hygienic conditions. Following quality inspection, the Badushas are packed in food-grade boxes, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Refined Flour (Maida)',
        'Sugar',
        'Ghee',
        'Curd',
        'Baking Soda',
        'Water',
        'Cardamom Powder (Optional)',
        'Saffron (Optional)',
        'Edible Oil or Ghee for Frying'
      ],
      purposeOfIngredients: `Refined flour forms the base and gives structure. Sugar provides sweetness and forms the syrup coating. Ghee adds richness, softness, and flavor. Curd helps create a soft and flaky texture. Baking soda makes the Badusha light and fluffy. Water is used to prepare the dough and sugar syrup. Cardamom powder (optional) adds aroma. Saffron (optional) enhances flavor and appearance. Edible oil or ghee is used for frying to achieve the traditional crispy and flaky texture.`
    },
    {
      id: 'mysore-pak',
      name: 'Mysore Pak',
      image: mysorePakImg,
      manufacturingProcess: `Premium-quality gram flour (besan) is roasted in pure ghee until aromatic. Sugar is dissolved in water and cooked to prepare a sugar syrup of the required consistency. The roasted gram flour is gradually added to the syrup while hot ghee is continuously mixed until the mixture becomes light and porous. The mixture is poured into greased trays, allowed to cool, and cut into uniform pieces under hygienic conditions. After quality inspection, the Mysore Pak is packed in food-grade boxes, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Gram Flour (Besan)',
        'Sugar',
        'Pure Ghee',
        'Water',
        'Cardamom Powder (Optional)'
      ],
      purposeOfIngredients: `Gram flour provides the base and characteristic texture. Sugar adds sweetness and helps form the structure. Pure ghee gives the rich flavor, aroma, and soft, melt-in-the-mouth texture. Water is used to prepare the sugar syrup. Cardamom powder (optional) adds a pleasant aroma and enhances the flavor.`
    }
  ];

  const filteredSweets = activeTab === 'all' 
    ? sweetsList 
    : sweetsList.filter(s => s.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Traditional Sweets"
        breadcrumbText="Sweets"
        bgImage={sweetsCollectionImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Sweet Variety ({sweetsList.length} Items):
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
                All Sweets ({sweetsList.length})
              </button>
              {sweetsList.map(sweet => (
                <button
                  key={sweet.id}
                  onClick={() => setActiveTab(sweet.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === sweet.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {sweet.name}
                </button>
              ))}
            </div>
          </div>

          {/* SWEETS GRID (1 COL ON MOBILE, 2 COLS ON LAPTOP: 1, 2 DOWN 3, 4) */}
          <div className="space-y-8">
            {filteredSweets.map(sweet => (
              <div 
                key={sweet.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img 
                    src={sweet.image} 
                    alt={sweet.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {sweet.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {sweet.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS LIST */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {sweet.ingredients.map((ing, i) => (
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
                        Purpose of Ingredients:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {sweet.purposeOfIngredients}
                      </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={sweet.name} />
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
