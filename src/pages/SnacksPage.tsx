import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import mixtureImg from '../assets/images/mixture.png';
import karamBoondhiImg from '../assets/images/karam-boondi.png';
import murukuluImg from '../assets/images/murukulu.png';
import ribbonPakodaImg from '../assets/images/ribbon-pakoda.png';
import mahuaCookiesImg from '../assets/images/mahua-cookies.png';

const snacksHeaderImg = mixtureImg;

interface SnackItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const SnacksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const snacksList: SnackItem[] = [
    {
      id: 'mixture',
      name: 'Mixture',
      image: mixtureImg,
      manufacturingProcess: `Premium-quality gram flour (besan), rice flour, peanuts, roasted gram, curry leaves, cashew nuts, roasted chana dal, and spices are carefully selected. Sev is prepared using a gram flour dough and deep-fried until crispy. Boondi, fried peanuts, roasted gram, curry leaves, and other ingredients are separately fried and mixed with red chilli powder, salt, turmeric powder, asafoetida (hing), and edible oil. The mixture is blended uniformly under hygienic conditions, cooled, and packed in food-grade pouches or containers. After quality inspection, the product is sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Gram Flour (Besan)',
        'Rice Flour',
        'Peanuts',
        'Roasted Gram',
        'Chana Dal',
        'Cashew Nuts',
        'Curry Leaves',
        'Red Chilli Powder',
        'Salt',
        'Turmeric Powder',
        'Asafoetida (Hing)',
        'Edible Oil'
      ],
      purposeOfIngredients: `Gram flour and rice flour provide the crispy base. Peanuts, roasted gram, chana dal, and cashew nuts add crunch and richness. Curry leaves enhance aroma and flavor. Red chilli powder adds spiciness. Salt improves taste. Turmeric powder provides natural color. Asafoetida (hing) enhances flavor and digestion. Edible oil is used for frying and improves the overall taste and texture.`
    },
    {
      id: 'karam-boondi',
      name: 'Karam Boondi',
      image: karamBoondhiImg,
      manufacturingProcess: `Premium-quality gram flour (besan) is mixed with water, salt, turmeric, and red chilli powder to prepare a smooth batter. The batter is passed through a perforated ladle to form small boondi, which is deep-fried in edible oil until crispy and golden. The fried boondi is mixed with curry leaves, roasted peanuts, roasted gram, cashew nuts (optional), red chilli powder, black pepper powder, cumin powder, asafoetida (hing), and salt. The mixture is blended uniformly under hygienic conditions, cooled, and packed in food-grade pouches or containers. After quality inspection, the product is sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Gram Flour (Besan)',
        'Water',
        'Salt',
        'Red Chilli Powder',
        'Turmeric Powder',
        'Curry Leaves',
        'Peanuts',
        'Roasted Gram',
        'Cashew Nuts (Optional)',
        'Black Pepper Powder',
        'Cumin Powder',
        'Asafoetida (Hing)',
        'Edible Oil'
      ],
      purposeOfIngredients: `Gram flour forms the crispy boondi. Red chilli powder adds spiciness and color. Salt enhances taste. Turmeric powder provides natural color. Curry leaves add aroma and flavor. Peanuts, roasted gram, and cashew nuts add crunch and richness. Black pepper powder and cumin powder enhance the spicy flavor. Asafoetida (hing) improves aroma and digestion. Edible oil is used for frying and gives the boondi its crisp texture.`
    },
    {
      id: 'murukulu',
      name: 'Murukulu',
      image: murukuluImg,
      manufacturingProcess: `Premium-quality rice flour and gram flour are carefully selected and mixed with sesame seeds, cumin seeds, salt, butter (or hot oil), and water to prepare a soft dough. The dough is shaped into spiral Murukulu using a traditional murukku press and deep-fried in edible oil until golden and crispy. The fried Murukulu are cooled under hygienic conditions to maintain their crispness. After quality inspection, they are packed in food-grade pouches or containers, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Rice Flour',
        'Gram Flour (Besan)',
        'Sesame Seeds',
        'Cumin Seeds',
        'Salt',
        'Butter (or Hot Oil)',
        'Water',
        'Edible Oil'
      ],
      purposeOfIngredients: `Rice flour provides the crispy texture. Gram flour adds flavor and improves texture. Sesame seeds enhance taste and aroma. Cumin seeds add a traditional flavor and aid digestion. Salt enhances the overall taste. Butter (or hot oil) makes the Murukulu crispy and crunchy. Water is used to prepare the dough. Edible oil is used for frying, giving the Murukulu their golden color and crisp texture.`
    },
    {
      id: 'ribbon-pakoda',
      name: 'Ribbon Pakoda',
      image: ribbonPakodaImg,
      manufacturingProcess: `Premium-quality gram flour (besan) and rice flour are carefully selected and mixed with red chilli powder, cumin seeds, sesame seeds, asafoetida (hing), salt, butter (or hot oil), and water to prepare a soft dough. The dough is passed through a ribbon pakoda press with a ribbon-shaped nozzle and deep-fried in edible oil until golden and crispy. The fried Ribbon Pakoda is cooled under hygienic conditions to maintain its crispness. After quality inspection, it is packed in food-grade pouches or containers, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Gram Flour (Besan)',
        'Rice Flour',
        'Red Chilli Powder',
        'Cumin Seeds',
        'Sesame Seeds',
        'Asafoetida (Hing)',
        'Salt',
        'Butter (or Hot Oil)',
        'Water',
        'Edible Oil'
      ],
      purposeOfIngredients: `Gram flour provides the base and flavor. Rice flour gives a crispy texture. Red chilli powder adds spiciness and color. Cumin seeds enhance flavor and aid digestion. Sesame seeds improve taste and aroma. Asafoetida (hing) adds aroma and improves digestion. Salt enhances the overall taste. Butter (or hot oil) makes the Ribbon Pakoda light and crunchy. Water is used to prepare the dough. Edible oil is used for frying, giving the Ribbon Pakoda its golden color and crisp texture.`
    },
    {
      id: 'mahua-cookies',
      name: 'Mahua Cookies',
      image: mahuaCookiesImg,
      manufacturingProcess: `Premium-quality wheat flour, refined flour, butter, and Mahua (Ippa Puvvu) powder are carefully selected. The dough is prepared by mixing these ingredients along with a hint of cardamom and baking powder. The dough is rolled and cut into round cookie shapes. These are baked at precise temperatures in industrial ovens until golden and crisp. After cooling under hygienic conditions, the cookies are packed in food-grade pouches, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Wheat Flour',
        'Refined Flour',
        'Butter',
        'Mahua (Ippa Puvvu) Powder',
        'Cardamom Powder',
        'Baking Powder',
        'Sugar (Optional)',
        'Milk'
      ],
      purposeOfIngredients: `Wheat flour and refined flour provide the base. Mahua powder provides natural sweetness and unique flavor. Butter makes the cookies crisp and rich. Cardamom powder adds aroma. Baking powder helps the cookies rise.`
    }
  ];

  const filteredSnacks = activeTab === 'all' 
    ? snacksList 
    : snacksList.filter(s => s.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Traditional Snacks"
        breadcrumbText="Snacks"
        bgImage={snacksHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Snack Variety ({snacksList.length} Items):
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
                All Snacks ({snacksList.length})
              </button>
              {snacksList.map(snack => (
                <button
                  key={snack.id}
                  onClick={() => setActiveTab(snack.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === snack.id
                      ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {snack.name}
                </button>
              ))}
            </div>
          </div>

          {/* SNACKS GRID (1 COL ON MOBILE, 2 COLS ON LAPTOP: 1, 2 DOWN 3, 4) */}
          <div className="space-y-8">
            {filteredSnacks.map(snack => (
              <div 
                key={snack.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img 
                    src={snack.image} 
                    alt={snack.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* CONTENT CONTAINER */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {snack.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {snack.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS LIST */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {snack.ingredients.map((ing, i) => (
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
                        {snack.purposeOfIngredients}
                      </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={snack.name} />
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
