import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import herbalCosmeticsMainImg from '../assets/images/category-cosmetics.png';
import aloeveraGelImg from '../assets/images/aloevera_gel.jpeg';
import conditionerImg from '../assets/images/conditioners_1.jpeg';
import essentialOilsImg from '../assets/images/essential_oils.jpeg';
import faceCreamImg from '../assets/images/face_cream.jpeg';
import faceWashImg from '../assets/images/face_wash.jpeg';
import hairOilImg from '../assets/images/hair_oil.jpeg';
import herbalShampooImg from '../assets/images/herbal_shampoo.jpeg';
import neemFaceWashImg from '../assets/images/neem_face_wash.jpeg';
import roseWaterImg from '../assets/images/rose_water.jpeg';
import shampooImg from '../assets/images/shampoo.jpeg';
import imgHerbalFacePack from '../assets/images/herbal_face_pack_1785758334205.jpg';
import imgScrubs from '../assets/images/scrubs_1785758347691.jpg';
import imgLipBalm from '../assets/images/lip_balm_1785758280597.jpg';
import imgBodyLotion from '../assets/images/body_lotion_1785758298702.jpg';
import imgSunscreen from '../assets/images/sunscreen_1785758267808.jpg';

import imgHerbalSoaps from '../assets/images/herbal_soaps_product_1786092692549.jpg';

const cosmeticsHeaderImg = herbalCosmeticsMainImg;

interface CosmeticItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const CosmeticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const cosmeticsList: CosmeticItem[] = [
    {
      id: 'herbal-soaps',
      name: 'Herbal Soaps',
      image: imgHerbalSoaps,
      manufacturingProcess: 'Cold-process saponification blending pure coconut oil, neem extract, turmeric, and essential oils. Cured naturally for 30 days to retain glycerin and skin-nourishing botanical enzymes.',
      ingredients: ['Pure Virgin Coconut Oil', 'Neem Leaf Extract', 'Raw Turmeric', 'Tulsi Extract', 'Glycerin', 'Sandalwood Essential Oil'],
      purposeOfIngredients: 'Neem and turmeric provide natural antibacterial protection, coconut oil deeply moisturizes, and sandalwood calms skin irritation and blemishes.'
    },
    {
      id: 'herbal-shampoo',
      name: 'Organic Herbal Shampoo',
      image: herbalShampooImg,
      manufacturingProcess: 'Traditional aqueous decoction of organic Reetha (soapnut), Shikakai, Amla, and Bhringraj boiled at low temperatures, filtered, and preserved with natural plant-derived surfactants.',
      ingredients: ['Reetha (Soapnut)', 'Shikakai', 'Amla (Indian Gooseberry)', 'Bhringraj', 'Aloe Vera Extract', 'Purified Water'],
      purposeOfIngredients: 'Reetha creates rich gentle lather without stripping scalp oils, Shikakai detangles, Amla promotes dark hair shine, and Bhringraj strengthens hair roots.'
    },
    {
      id: 'hair-oil',
      name: 'Hair Oil & Pure Virgin Coconut Oil',
      image: hairOilImg,
      manufacturingProcess: 'Cold-pressed virgin coconut oil extracted from fresh coconut milk and slow-infused with 18 active herbs over low heat for 72 hours.',
      ingredients: ['100% Pure Cold-Pressed Virgin Coconut Oil', 'Bhringraj', 'Brahmi', 'Curry Leaves', 'Fenugreek Seeds', 'Hibiscus Petals'],
      purposeOfIngredients: 'Deeply nourishes hair follicles, prevents premature greying, controls scalp dryness, and promotes thick healthy hair growth.'
    },
    {
      id: 'hair-conditioner',
      name: 'Herbal Hair Conditioner',
      image: conditionerImg,
      manufacturingProcess: 'Lightweight botanical oil emulsion blending cold-pressed Argan oil, Jojoba oil, and Vitamin E with steam-distilled lavender oil and aloe juice.',
      ingredients: ['Moroccan Argan Oil', 'Jojoba Seed Oil', 'Vitamin E (Tocopherol)', 'Aloe Vera Base', 'Lavender Essential Oil'],
      purposeOfIngredients: 'Tames frizz, seals split ends, detangles hair effortlessly, and adds non-greasy weightless shine while shielding hair from heat damage.'
    },
    {
      id: 'face-wash',
      name: 'Herbal Deep Cleansing Face Wash',
      image: faceWashImg,
      manufacturingProcess: 'Soap-free gel formulation incorporating cold-pressed Tea Tree oil, fresh Neem gel, and Salicylic acid derived from Willow bark.',
      ingredients: ['Organic Neem Extract', 'Australian Tea Tree Essential Oil', 'Willow Bark (Natural Salicylic Acid)', 'Aloe Vera Juice'],
      purposeOfIngredients: 'Cleanses deep pores, combats acne-causing bacteria, balances sebum oil production, and leaves skin refreshed without tightness.'
    },
    {
      id: 'neem-face-wash',
      name: 'Pure Neem Purifying Face Wash',
      image: neemFaceWashImg,
      manufacturingProcess: 'Concentrated organic neem leaf distillate combined with raw aloe vera and tulsi extract to combat deep skin impurities and breakout acne.',
      ingredients: ['100% Organic Neem Extract', 'Tulsi Extract', 'Aloe Vera Leaf Juice', 'Tea Tree Essential Oil'],
      purposeOfIngredients: 'Purifies clogged skin pores, controls excess sebum oiliness, soothes active acne redness, and gives clear skin texture.'
    },
    {
      id: 'face-cream',
      name: 'Herbal Radiant Face Cream',
      image: faceCreamImg,
      manufacturingProcess: 'Emulsified whip of pure Kashmiri Kumkumadi Saffron, Sandalwood butter, and Shea butter emulsified with floral hydrosols.',
      ingredients: ['Kashmiri Saffron (Kumkumadi)', 'Pure Sandalwood Extract', 'Shea Butter', 'Almond Oil', 'Rose Water'],
      purposeOfIngredients: 'Brightens hyperpigmentation, smooths fine lines, evens out skin tone, and restores natural glowing complexions.'
    },
    {
      id: 'aloe-vera-gel',
      name: 'Pure Organic Aloe Vera Gel',
      image: aloeveraGelImg,
      manufacturingProcess: 'Cold-pressed extraction from the inner fillets of mature Aloe Barbadensis plants, triple-filtered for purity and set with natural seaweed thickeners.',
      ingredients: ['99% Pure Organic Aloe Vera Inner Leaf Gel', 'Seaweed Agar Extract', 'Vitamin C (Natural Preservative)'],
      purposeOfIngredients: 'Instantly cools and soothes irritated skin, reduces redness, treats minor burns, and acts as a lightweight primer for makeup.'
    },
    {
      id: 'essential-oils',
      name: 'Pure Steam-Distilled Essential Oils',
      image: essentialOilsImg,
      manufacturingProcess: 'Steam distillation of fresh aromatic plant parts (leaves, flowers, roots) to extract highly concentrated volatile oils, aged for olfactory maturity.',
      ingredients: ['Pure Steam-Distilled Essential Oils (Lavender, Peppermint, Eucalyptus, Tea Tree)'],
      purposeOfIngredients: 'Used in aromatherapy for stress relief, added to carrier oils for massage, or incorporated into DIY natural skincare remedies.'
    },
    {
      id: 'shampoo-pure',
      name: 'Herbal Nourishing Shampoo',
      image: shampooImg,
      manufacturingProcess: 'Enriched with wild amla and shikakai to thoroughly cleanse scalp impurities while maintaining natural moisture levels.',
      ingredients: ['Wild Amla Extract', 'Shikakai', 'Bhringraj', 'Coconut Cleansing Agent', 'Rosemary Oil'],
      purposeOfIngredients: 'Strengthens hair shafts, reduces hair fall, promotes glossy scalp hair volume, and prevents scalp itchiness.'
    },
    {
      id: 'rose-water',
      name: 'Pure Steam-Distilled Rose Water',
      image: roseWaterImg,
      manufacturingProcess: 'Hydro-distillation of fresh Damask rose petals, capturing both the aromatic essential oil and the water-soluble botanical compounds in a pure hydrosol.',
      ingredients: ['100% Pure Steam-Distilled Damask Rose Hydrosol'],
      purposeOfIngredients: 'Acts as a natural astringent to tone skin, balance pH levels, hydrate, and refresh the face throughout the day.'
    },
    {
      id: 'herbal-face-pack',
      name: 'Multani Mitti Herbal Face Pack',
      image: imgHerbalFacePack,
      manufacturingProcess: 'Sun-dried organic Multani Mitti (Fuller’s Earth) and herbs are micro-pulverized and sifted through fine mesh to create a smooth detoxifying powder base.',
      ingredients: ['100% Natural Multani Mitti (Fuller’s Earth)', 'Sandalwood Powder', 'Turmeric', 'Neem Powder', 'Orange Peel Powder'],
      purposeOfIngredients: 'Draws out deep impurities, absorbs excess skin oils, tightens pores, exfoliates dead skin cells, and leaves the face with a radiant clear glow.'
    },
    {
      id: 'scrubs',
      name: 'Natural Herbal Exfoliating Scrub',
      image: imgScrubs,
      manufacturingProcess: 'A blend of natural exfoliants like fine sugar or walnut shell powder suspended in rich, nourishing oils and botanical extracts.',
      ingredients: ['Finely Milled Walnut Shells', 'Brown Sugar', 'Cold-Pressed Olive Oil', 'Honey', 'Essential Oils'],
      purposeOfIngredients: 'Gently sloughs away dead, flaky skin, stimulates micro-circulation, and reveals a smoother, softer skin texture.'
    },
    {
      id: 'sunscreen',
      name: 'Herbal Mineral Sunscreen',
      image: imgSunscreen,
      manufacturingProcess: 'Non-nano Zinc Oxide physical mineral barrier blended with Raspberry seed oil and Aloe Vera for invisible white-cast-free protection.',
      ingredients: ['Non-Nano Zinc Oxide', 'Red Raspberry Seed Oil', 'Aloe Vera Leaf Gel', 'Carrot Seed Essential Oil'],
      purposeOfIngredients: 'Provides broad-spectrum UVA/UVB protection, blocks blue light, prevents premature photo-aging, and soothes UV redness.'
    },
    {
      id: 'lip-balm',
      name: 'Herbal Honey Lip Balm',
      image: imgLipBalm,
      manufacturingProcess: 'Hand-poured mix of unrefined Beeswax, organic Cocoa butter, Wild Honey, and natural Beetroot tint.',
      ingredients: ['Pure Unrefined Beeswax', 'Organic Cocoa Butter', 'Raw Wild Honey', 'Beetroot Extract Tint', 'Sweet Almond Oil'],
      purposeOfIngredients: 'Heals chapped dark lips, locks in soft moisture, and delivers a natural rosy tint without synthetic dyes.'
    },
    {
      id: 'body-lotion',
      name: 'Herbal Botanical Body Lotion',
      image: imgBodyLotion,
      manufacturingProcess: 'Whipped triple-butter formula combining Raw Cocoa, Shea, and Mango butter infused with cold-pressed Sweet Almond oil.',
      ingredients: ['Raw Cocoa Butter', 'Shea Butter', 'Sweet Almond Oil', 'Glycerin', 'Vanilla Bean Extract'],
      purposeOfIngredients: 'Restores skin barrier dryness, smooths rough elbows and knees, and infuses long-lasting sweet vanilla cocoa aroma.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? cosmeticsList
    : cosmeticsList.filter(c => c.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Herbal Cosmetics"
        breadcrumbText="Herbal Cosmetics"
        bgImage={cosmeticsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Cosmetic Product ({cosmeticsList.length} Categories):
            </span>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-[#0D3B66] text-[#D4AF37] shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                All Cosmetics ({cosmeticsList.length})
              </button>
              {cosmeticsList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

          {/* COSMETICS CARDS LIST (SAME MATCHING DESIGN AS SWEETS & SNACKS PAGE) */}
          <div className="space-y-8">
            {filteredList.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* PRODUCT IMAGE CONTAINER - CLEAN & MATCHING SWEETS PAGE */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right Content Column */}
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
                        Formulation & Preparation Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Key Botanical Ingredients:
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
                        Skin & Hair Benefits / Purpose:
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
