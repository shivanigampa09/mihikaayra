import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import mysorePakImg from '../assets/images/mysore_pak.png';
import ribbonPakodaImg from '../assets/images/ribbon-pakoda.png';
import ippaPuvvuImg from '../assets/images/ippa-puvvu-laddu.png';
import motichoorImg from '../assets/images/motichoor-laddu.png';
import kajuKatliImg from '../assets/images/kaju-katli.png';
import badushaImg from '../assets/images/badusha.png';
import mixtureImg from '../assets/images/mixture.png';
import karamBoondhiImg from '../assets/images/karam-boondi.png';
import murukuluImg from '../assets/images/murukulu.png';
import mahuaCookiesImg from '../assets/images/mahua-cookies.png';
import sweetsHeaderImg from '../assets/images/category-snacks.png';


interface FoodItem {
  id: string;
  name: string;
  category: 'sweet' | 'snack';
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const SweetsAndSnacksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const foodList: FoodItem[] = [
    // SWEETS
    {
      id: 'ippa-puvvu-laddu',
      name: 'Ippa Puvvu Laddu (Mahua Flower Laddu)',
      category: 'sweet',
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
      category: 'sweet',
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
      purposeOfIngredients: `Gram flour forms the boondi and provides the base. Sugar gives sweetness and binds the boondi together. Ghee enhances flavor and richness. Cardamom powder adds aroma. Saffron (optional) provides premium flavor and color. Cashew nuts, almonds, and raisins improve taste and nutritional value.`
    },
    {
      id: 'kaju-katli',
      name: 'Kaju Katli',
      category: 'sweet',
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
      purposeOfIngredients: `Premium cashew nuts provide the rich taste and smooth texture. Sugar adds sweetness and binds the mixture together. Water is used to prepare the sugar syrup. Ghee (optional) enhances softness and flavor. Cardamom powder (optional) adds a pleasant aroma.`
    },
    {
      id: 'badusha',
      name: 'Badusha',
      category: 'sweet',
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
      purposeOfIngredients: `Refined flour forms the base and gives structure. Sugar provides sweetness and forms the syrup coating. Ghee adds richness, softness, and flavor. Curd helps create a soft and flaky texture. Baking soda makes the Badusha light and fluffy.`
    },
    {
      id: 'mysore-pak',
      name: 'Mysore Pak',
      category: 'sweet',
      image: mysorePakImg,
      manufacturingProcess: `Premium-quality gram flour (besan) is roasted in pure ghee until aromatic. Sugar is dissolved in water and cooked to prepare a sugar syrup of the required consistency. The roasted gram flour is gradually added to the syrup while hot ghee is continuously mixed until the mixture becomes light and porous. The mixture is poured into greased trays, allowed to cool, and cut into uniform pieces under hygienic conditions. After quality inspection, the Mysore Pak is packed in food-grade boxes, sealed, labeled, and prepared for distribution.`,
      ingredients: [
        'Gram Flour (Besan)',
        'Sugar',
        'Pure Ghee',
        'Water',
        'Cardamom Powder (Optional)'
      ],
      purposeOfIngredients: `Gram flour provides the base and characteristic texture. Sugar adds sweetness and helps form the structure. Pure ghee gives the rich flavor, aroma, and soft, melt-in-the-mouth texture.`
    },

    // SNACKS
    {
      id: 'mixture',
      name: 'Mixture',
      category: 'snack',
      image: mixtureImg,
      manufacturingProcess: `Premium-quality gram flour (besan), rice flour, peanuts, roasted gram, curry leaves, cashew nuts, roasted chana dal, and spices are carefully selected. Sev is prepared using a gram flour dough and deep-fried until crispy. Boondi, fried peanuts, roasted gram, curry leaves, and other ingredients are separately fried and mixed with red chilli powder, salt, turmeric powder, asafoetida (hing), and edible oil. The mixture is blended uniformly under hygienic conditions, cooled, and packed in food-grade pouches or containers.`,
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
      purposeOfIngredients: `Gram flour and rice flour provide the crispy base. Peanuts, roasted gram, chana dal, and cashew nuts add crunch and richness. Curry leaves enhance aroma and flavor. Red chilli powder adds spiciness. Salt improves taste. Turmeric powder provides natural color.`
    },
    {
      id: 'karam-boondi',
      name: 'Karam Boondi',
      category: 'snack',
      image: karamBoondhiImg,
      manufacturingProcess: `Premium-quality gram flour (besan) is mixed with water, salt, turmeric, and red chilli powder to prepare a smooth batter. The batter is passed through a perforated ladle to form small boondi, which is deep-fried in edible oil until crispy and golden. The fried boondi is mixed with curry leaves, roasted peanuts, roasted gram, cashew nuts (optional), red chilli powder, black pepper powder, cumin powder, asafoetida (hing), and salt. The mixture is blended uniformly under hygienic conditions, cooled, and packed in food-grade pouches or containers.`,
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
      purposeOfIngredients: `Gram flour forms the crispy boondi. Red chilli powder adds spiciness and color. Salt enhances taste. Turmeric powder provides natural color. Curry leaves add aroma and flavor. Peanuts, roasted gram, and cashew nuts add crunch and richness.`
    },
    {
      id: 'murukulu',
      name: 'Murukulu',
      category: 'snack',
      image: murukuluImg,
      manufacturingProcess: `Premium-quality rice flour and gram flour are carefully selected and mixed with sesame seeds, cumin seeds, salt, butter (or hot oil), and water to prepare a soft dough. The dough is shaped into spiral Murukulu using a traditional murukku press and deep-fried in edible oil until golden and crispy. The fried Murukulu are cooled under hygienic conditions to maintain their crispness.`,
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
      purposeOfIngredients: `Rice flour provides the crispy texture. Gram flour adds flavor and improves texture. Sesame seeds enhance taste and aroma. Cumin seeds add a traditional flavor and aid digestion.`
    },
    {
      id: 'ribbon-pakoda',
      name: 'Ribbon Pakoda',
      category: 'snack',
      image: ribbonPakodaImg,
      manufacturingProcess: `Premium-quality gram flour (besan) and rice flour are carefully selected and mixed with red chilli powder, cumin seeds, sesame seeds, asafoetida (hing), salt, butter (or hot oil), and water to prepare a soft dough. The dough is passed through a ribbon pakoda press with a ribbon-shaped nozzle and deep-fried in edible oil until golden and crispy.`,
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
      purposeOfIngredients: `Gram flour provides the base and flavor. Rice flour gives a crispy texture. Red chilli powder adds spiciness and color. Cumin seeds enhance flavor and aid digestion.`
    },
    {
      id: 'mahua-cookies',
      name: 'Mahua Cookies',
      category: 'snack',
      image: mahuaCookiesImg,
      manufacturingProcess: `Premium-quality wheat flour, refined flour, butter, and Mahua (Ippa Puvvu) powder are carefully selected. The dough is prepared by mixing these ingredients along with a hint of cardamom and baking powder. The dough is rolled and cut into round cookie shapes. These are baked at precise temperatures in industrial ovens until golden and crisp.`,
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

  const filteredItems = activeTab === 'all'
    ? foodList
    : activeTab === 'sweets'
    ? foodList.filter(item => item.category === 'sweet')
    : activeTab === 'snacks'
    ? foodList.filter(item => item.category === 'snack')
    : foodList.filter(item => item.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Sweets & Snacks"
        breadcrumbText="Sweets & Snacks"
        bgImage={sweetsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Sweets & Snacks Variety ({foodList.length} Items):
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
                All Sweets & Snacks ({foodList.length})
              </button>
              <button
                onClick={() => setActiveTab('sweets')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'sweets'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Traditional Sweets (5)
              </button>
              <button
                onClick={() => setActiveTab('snacks')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'snacks'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Traditional Snacks (5)
              </button>
              {foodList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

          {/* Food Items Grid */}
          <div className="space-y-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Product Image Container */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
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
                        {item.name}
                      </h2>
                    </div>

                    {/* Manufacturing Process Text Box */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Ingredients:
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
                        Purpose of Ingredients:
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
