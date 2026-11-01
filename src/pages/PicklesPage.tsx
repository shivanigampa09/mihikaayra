import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { CheckCircle2, Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';
import { useQuote } from '../context/QuoteContext';

import mangoPickleImg from '../assets/images/mango_pickle_jar_1785663299589.jpg';
import tomatoPickleImg from '../assets/images/tomato_pickle_jar_1785664055943.jpg';
import gonguraPickleImg from '../assets/images/gongura_pickle_jar_1785664071317.jpg';
import amlaPickleImg from '../assets/images/amla_pickle_jar_1785664087103.jpg';
import lemonPickleImg from '../assets/images/lemon_pickle_jar_1785664100116.jpg';
import redChilliPickleImg from '../assets/images/red_chilli_pickle_jar_1785664116974.jpg';
import redChilliGonguraPickleImg from '../assets/images/red_chilli_gongura_pickle_jar_1785664132250.jpg';
import picklesHeaderImg from '../assets/images/category-pickles.jpeg';


interface PickleItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
  keyHighlights: string[];
}

export const PicklesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { openQuoteModal } = useQuote();

  const picklesList: PickleItem[] = [
    {
      id: 'mango-pickle',
      name: 'Mango Pickle',
      image: mangoPickleImg,
      manufacturingProcess: `Fresh raw mangoes are sourced from trusted farmers and carefully selected for quality. The mangoes are thoroughly washed with clean water, completely dried to remove moisture, and cut into uniform pieces. A blend of red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, and optional garlic is mixed with the mango pieces. The mixture is allowed to mature naturally for a few days to develop its authentic taste and aroma. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and made ready for distribution.`,
      ingredients: ['Raw Mango', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic (Optional)'],
      purposeOfIngredients: `Raw mango provides a crisp bite and distinct tartness. Red chilli powder delivers authentic spicy heat and vibrant red color. Mustard powder adds a sharp pungent kick and body to the spice mix. Fenugreek powder provides a warm, nutty aroma and digestion benefits. Turmeric powder acts as a natural antioxidant and colorant. Sesame oil binds the spices, acts as a natural preservative, and seals in freshness. Salt enhances overall flavor and cures the raw fruit. Garlic (optional) adds savory complexity.`,
      keyHighlights: ['Made with selected raw mangoes', '100% pure sesame oil base', 'Natural preservation process', 'Hygienically packed for export']
    },
    {
      id: 'tomato-pickle',
      name: 'Tomato Pickle',
      image: tomatoPickleImg,
      manufacturingProcess: `Fresh, ripe tomatoes are sourced from trusted farmers and carefully selected for quality. The tomatoes are thoroughly washed with clean water, dried to remove excess moisture, and cut into pieces. They are then cooked until the moisture reduces and mixed with red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, garlic, and tamarind (optional). The mixture is cooked until it reaches the desired consistency and allowed to cool naturally. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and prepared for distribution.`,
      ingredients: ['Fresh Tomatoes', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic', 'Tamarind (Optional)'],
      purposeOfIngredients: `Fresh ripe tomatoes provide a rich, tangy base and sweet-savory body. Red chilli powder brings a fiery spice profile and deep red hue. Mustard powder adds pungency and thickens the gravy. Fenugreek powder introduces a subtle bitter-aromatic note. Turmeric powder offers antimicrobial properties and natural color. Sesame oil preserves the slow-cooked reduction and imparts a smooth mouthfeel. Garlic and tamarind enhance the savory depth and mouth-watering tartness.`,
      keyHighlights: ['Rich farm fresh tomatoes', 'Slow-cooked natural reduction', 'Authentic traditional recipe', 'Zero added artificial colors']
    },
    {
      id: 'gongura-pickle',
      name: 'Gongura Pickle',
      image: gonguraPickleImg,
      manufacturingProcess: `Fresh gongura (sorrel) leaves are sourced from trusted farmers and carefully selected for quality. The leaves are thoroughly washed with clean water, dried to remove excess moisture, and lightly cooked or sautéed until soft. A blend of red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, garlic, and cumin seeds is prepared and mixed with the cooked gongura. The mixture is allowed to cool naturally and mature for a short period to develop its authentic flavor. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and prepared for distribution.`,
      ingredients: ['Fresh Gongura Leaves', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic', 'Cumin Seeds'],
      purposeOfIngredients: `Fresh gongura (sorrel) leaves provide a signature natural sourness and rich iron content. Red chilli powder balances the tart sorrel with bold spiciness. Mustard and cumin seeds add warm roasted notes and digestive aroma. Fenugreek powder gives a gentle aromatic undertone. Turmeric powder acts as a natural stabilizer and health booster. Sesame oil coats the leaves, preserving freshness and bringing out authentic South Indian flavor. Garlic adds a robust savory punch.`,
      keyHighlights: ['Handpicked sorrel leaves', 'Traditional South Indian recipe', 'Rich natural tangy flavor', 'Export quality airtight packaging']
    },
    {
      id: 'amla-pickle',
      name: 'Amla Pickle',
      image: amlaPickleImg,
      manufacturingProcess: `Fresh amla (Indian gooseberries) are sourced from trusted farmers and carefully selected for quality. The amla fruits are thoroughly washed with clean water, steamed or boiled until slightly soft, and allowed to cool. The seeds are removed, and the amla pieces are mixed with red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, and garlic (optional). The mixture is allowed to mature naturally to develop its rich flavor. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and prepared for distribution.`,
      ingredients: ['Fresh Amla (Indian Gooseberry)', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic (Optional)'],
      purposeOfIngredients: `Fresh amla (Indian gooseberry) provides a unique astringent-sour bite and dense Vitamin C immunity benefits. Red chilli powder adds robust spice to contrast the sour gooseberries. Mustard powder and fenugreek powder impart a traditional aromatic kick and thick gravy texture. Turmeric powder and salt act as natural curing agents and flavor enhancers. Sesame oil penetrates the steamed amla pieces, ensuring long shelf life and rich taste. Garlic (optional) offers depth.`,
      keyHighlights: ['Fresh organic Indian gooseberries', 'Naturally rich in Vitamin C', 'Tangy and spicy flavor blend', 'Strict hygienic processing']
    },
    {
      id: 'lemon-pickle',
      name: 'Lemon Pickle',
      image: lemonPickleImg,
      manufacturingProcess: `Fresh lemons are sourced from trusted farmers and carefully selected for quality. The lemons are thoroughly washed with clean water, dried completely to remove moisture, and cut into uniform pieces. The lemon pieces are mixed with red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, and garlic (optional). The mixture is allowed to mature naturally for several days to develop its rich flavor and aroma. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and prepared for distribution.`,
      ingredients: ['Fresh Lemons', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic (Optional)'],
      purposeOfIngredients: `Fresh lemons provide a zesty citrus crunch and intense tangy flavor. Red chilli powder counters the natural acidity with fiery heat. Mustard powder and fenugreek powder enhance the spice blend and aid in softening the citrus rind during curing. Turmeric powder and salt draw out excess moisture to cure the rind naturally. Sesame oil preserves the sun-matured lemon pieces and softens spiciness into a well-rounded gourmet taste.`,
      keyHighlights: ['Juicy thin-skinned lemons', 'Traditional sun-matured curing', 'Zesty tangy & spicy taste', 'Long shelf life export pack']
    },
    {
      id: 'red-chilli-pickle',
      name: 'Red Chilli Pickle',
      image: redChilliPickleImg,
      manufacturingProcess: `Fresh red chillies are sourced from trusted farmers and carefully selected for quality. The chillies are thoroughly washed with clean water, completely dried to remove moisture, and slit or cut into pieces. The chillies are mixed with red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, garlic, and lemon juice (optional). The mixture is allowed to mature naturally for several days to develop its rich flavor and aroma. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and prepared for distribution.`,
      ingredients: ['Fresh Red Chillies', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic', 'Lemon Juice (Optional)'],
      purposeOfIngredients: `Fresh red chillies supply a bold, vibrant pepper crunch and intense authentic heat. Red chilli powder intensifies the fiery flavor profile. Mustard powder provides a pungent bite and thick spice coating. Fenugreek powder adds aromatic balance to the intense spice. Turmeric powder contributes natural color and preservation. Sesame oil cools and mellows the chilli oil matrix while naturally curing the peppers. Lemon juice (optional) adds a delightful splash of acidity.`,
      keyHighlights: ['Fresh ripe farm red chillies', 'Fiery authentic spice flavor', 'Natural oil curing', 'Standardized export packing']
    },
    {
      id: 'red-chilli-gongura-pickle',
      name: 'Red Chilli Gongura Pickle',
      image: redChilliGonguraPickleImg,
      manufacturingProcess: `Fresh red chillies and gongura (sorrel) leaves are sourced from trusted farmers and carefully selected for quality. The ingredients are thoroughly washed with clean water and completely dried to remove moisture. The gongura leaves are lightly cooked until soft, while the red chillies are cut into pieces. They are then mixed with red chilli powder, mustard powder, salt, fenugreek powder, turmeric powder, sesame oil, garlic, and cumin seeds. The mixture is allowed to mature naturally for a few days to develop its rich flavor and aroma. After quality inspection, the pickle is hygienically packed in food-grade jars, sealed, labeled, and prepared for distribution.`,
      ingredients: ['Fresh Red Chillies', 'Fresh Gongura Leaves', 'Red Chilli Powder', 'Mustard Powder', 'Salt', 'Fenugreek Powder', 'Turmeric Powder', 'Sesame Oil', 'Garlic', 'Cumin Seeds'],
      purposeOfIngredients: `Fresh red chillies and gongura leaves combine fiery heat with sour sorrel tartness for a unique dual flavor profile. Mustard powder and cumin seeds add warm roasted spice notes. Fenugreek powder and turmeric powder balance the acidity and provide natural health benefits. Sesame oil unites the leafy sorrel and sliced chillies, creating a rich oil cure that preserves the vibrant flavors. Garlic adds a savory bite that ties the sour-spicy blend together.`,
      keyHighlights: ['Unique fusion of sorrel and red chillies', 'Tangy and spicy combination', 'Pure sesame oil formulation', 'Export certified for global markets']
    }
  ];

  const filteredPickles = activeTab === 'all' 
    ? picklesList 
    : picklesList.filter(p => p.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Traditional Pickles"
        breadcrumbText="Pickles"
        bgImage={picklesHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Selector Tabs */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Pickle Variety ({picklesList.length} Items):
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
                All Pickles ({picklesList.length})
              </button>

              {picklesList.map(pickle => (
                <button
                  key={pickle.id}
                  onClick={() => setActiveTab(pickle.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                    activeTab === pickle.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {pickle.name}
                </button>
              ))}
            </div>
          </div>

          {/* PICKLES GRID (1 COL ON MOBILE, 2 COLS ON LAPTOP: 1, 2 DOWN 3, 4) */}
          <div className="space-y-8">
            {filteredPickles.map(pickle => (
              <div 
                key={pickle.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Product Image Container */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img 
                    src={pickle.image} 
                    alt={pickle.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {pickle.name}
                      </h2>
                    </div>

                    {/* Manufacturing Process Text Box */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {pickle.manufacturingProcess}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {pickle.ingredients.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Purpose of Ingredients:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {pickle.purposeOfIngredients}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {pickle.keyHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={pickle.name} />
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
