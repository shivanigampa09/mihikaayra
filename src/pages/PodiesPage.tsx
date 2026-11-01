import React, { useState } from "react";
import { PageHeader } from "../components/layout/PageHeader";
import { CheckCircle2, Factory, Sparkles } from "lucide-react";
import { QuoteNowButton } from "../components/common/QuoteNowButton";

import blackPepperImg from '../assets/images/black-pepper.jpeg';
import cinnamonImg from '../assets/images/cinnamon.jpeg';
import clovesImg from '../assets/images/cloves.jpeg';
import corianderSeedsImg from '../assets/images/coriander-seeds.jpeg';
import cuminSeedsImg from '../assets/images/cumin-seeds.jpeg';
import greenCardamomImg from '../assets/images/green-cardamom.jpeg';
import kuraKaramImg from '../assets/images/kura-karam.png';
import nallaKaramImg from '../assets/images/nalla-karam.png';
import rasamPowderImg from '../assets/images/rasam-powder.png';
import redChilliPowderImg from '../assets/images/red-chilli-powder.jpeg';
import redChillisImg from '../assets/images/red-chillies.jpeg';
import sambarPowderImg from '../assets/images/sambar-powder.png';
import teaPowderImg from '../assets/images/tea-powder.png';
import toorDalImg from '../assets/images/toor-dal-karam.png';
import turmericImg from '../assets/images/turmeric.jpeg';
import turmericPowderImg from '../assets/images/turmeric-powder.png';
import podiesHeaderImg from '../assets/images/category-spices-powders.jpeg';


interface PodiItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
  keyHighlights: string[];
}

export const PodiesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const podiesList: PodiItem[] = [
    {
      id: "nalla-karam",
      name: "Nalla Karam Powder",
      image: nallaKaramImg,
      manufacturingProcess: "Premium-quality dry red chillies, coriander seeds, cumin seeds, garlic cloves, tamarind, urad dal, chana dal, salt, asafoetida (hing), curry leaves, and edible oil are carefully selected. The dals, spices, and red chillies are individually slow-roasted on medium heat to release their authentic essential oils and aromatic profile. The roasted ingredients are allowed to cool before being coarse-ground in traditional stainless steel pulverizers along with garlic and tamarind. The resulting aromatic Nalla Karam Powder is uniformly blended under strict hygienic standards, tested for moisture and shelf-life quality, and vacuum-sealed in aroma-lock food-grade foil pouches.",
      ingredients: [
        "Dry Red Chillies",
        "Coriander Seeds",
        "Cumin Seeds",
        "Garlic Cloves",
        "Tamarind",
        "Urad Dal",
        "Chana Dal",
        "Salt",
        "Asafoetida (Hing)",
        "Curry Leaves",
        "Edible Oil"
      ],
      purposeOfIngredients: "Dry red chillies provide the dark, rich spice and heat. Urad dal and chana dal create a nuttiness and textured body. Garlic and tamarind lend a deep tangy-savory profile. Coriander and cumin seeds add warm digestive aromatics. Asafoetida (hing) and curry leaves enhance digestion and aroma. Edible oil aids roasting and preserves essential volatile oils.",
      keyHighlights: [
        "Traditional Andhra recipe",
        "Coarse stone-ground style texture",
        "Rich in digestion-boosting spices",
        "Vacuum nitrogen-packed export grade"
      ]
    },
    {
      id: "tea-powder",
      name: "Tea Powder",
      image: teaPowderImg,
      manufacturingProcess: "Fresh CTC and orthodox tea leaves from high-altitude Assam and Darjeeling estates are handpicked and processed through controlled withered, CTC (Crush, Tear, Curl), and fermentation stages. The tea grains are dried in hot-air ovens, sifted into uniform grades, and expertly blended to produce a robust liquor with a deep amber color and full-bodied malt flavor. Quality inspection checks moisture content, liquor strength, and pesticide residue standards before sealing in multi-layer barrier export aluminum pouches.",
      ingredients: ["100% Pure Black Tea Leaves (CTC & Orthodox Leaf Grades)"],
      purposeOfIngredients: "High-grade CTC tea leaves deliver a strong malt flavor, rich copper-gold liquor, and invigorating natural caffeine, while orthodox leaf cuts contribute floral aromatics and refined astringency.",
      keyHighlights: [
        "Single-origin Assam & Darjeeling blend",
        "Rich in natural antioxidants",
        "High-caffeine morning brew",
        "Extended export barrier foil packaging"
      ]
    },
    {
      id: "turmeric-powder",
      name: "Turmeric Powder",
      image: turmericPowderImg,
      manufacturingProcess: "Sun-dried organic Lakadong and Salem turmeric finger rhizomes with high natural curcumin content are hand-sorted and thoroughly cleaned of surface soil. The rhizomes are steam-sterilized and finely pulverized using cool-grinding technology to preserve volatile oils and vibrant yellow pigments. The powder undergoes stringent microbiological testing and heavy metal clearance before being packed in light-proof food-grade pouches.",
      ingredients: ["100% Pure Turmeric Finger Rhizomes (High Curcumin Grade)"],
      purposeOfIngredients: "Pure turmeric provides intense natural golden color, potent antioxidant and anti-inflammatory properties (curcumin), and an earthy aromatic warm flavor essential for culinary and wellness applications.",
      keyHighlights: [
        "High 5%+ natural curcumin content",
        "Steam sterilized & pesticide-free",
        "Vibrant natural golden color",
        "Certified USFDA & FSSAI export quality"
      ]
    },
    {
      id: "toordal-karam",
      name: "Toor Dal Karam (Kandi Podi)",
      image: toorDalImg,
      manufacturingProcess: "High-quality Toor Dal (split pigeon peas), Bengal gram (chana dal), dry red chillies, cumin seeds, garlic cloves, salt, asafoetida (hing), and ghee/edible oil are selected. The dals are dry-roasted until light golden and fragrant. Dry red chillies, cumin, and hing are lightly toasted. The ingredients are cooled and ground into a savory coarse powder, then blended with salt and roasted garlic for authentic South Indian flavor.",
      ingredients: [
        "Toor Dal (Split Pigeon Peas)",
        "Chana Dal",
        "Dry Red Chillies",
        "Cumin Seeds",
        "Garlic Cloves",
        "Salt",
        "Asafoetida (Hing)",
        "Edible Oil / Pure Ghee"
      ],
      purposeOfIngredients: "Toor dal and chana dal form a protein-rich, nutty legume base. Dry red chillies deliver moderate heat. Cumin and hing improve digestion and impart traditional gunpowder fragrance. Garlic and salt enhance flavor profile.",
      keyHighlights: [
        "High plant-protein content",
        "Traditional Gunpowder rice blend",
        "Low-fat roasted preparation",
        "Sealed in moisture-lock export pouches"
      ]
    },
    {
      id: "sambar-powder",
      name: "Sambar Powder",
      image: sambarPowderImg,
      manufacturingProcess: "A traditional blend of coriander seeds, cumin seeds, fenugreek seeds, mustard seeds, dry red chillies, chana dal, urad dal, black pepper, turmeric powder, and curry leaves are selectively sourced. Each spice and pulse is roasted individually at precise temperatures to develop aroma without charring. The blend is ground to a fine uniform powder, cooled, and packaged in airtight foil-laminated pouches.",
      ingredients: [
        "Coriander Seeds",
        "Cumin Seeds",
        "Dry Red Chillies",
        "Fenugreek Seeds",
        "Toor Dal",
        "Chana Dal",
        "Urad Dal",
        "Black Pepper",
        "Turmeric Powder",
        "Mustard Seeds",
        "Asafoetida (Hing)",
        "Curry Leaves"
      ],
      purposeOfIngredients: "Coriander seeds form the aromatic thickening body. Red chillies add warmth and color. Fenugreek seeds impart signature sambar bitterness and aroma. Pulses add thickness to the lentil broth. Black pepper and cumin boost digestion and flavor depth.",
      keyHighlights: [
        "Authentic South Indian hotel-style recipe",
        "Multi-spice digestive matrix",
        "100% natural without artificial colors",
        "Long-lasting aroma barrier packaging"
      ]
    },
    {
      id: "rasam-powder",
      name: "Rasam Powder",
      image: rasamPowderImg,
      manufacturingProcess: "Black peppercorns, cumin seeds, coriander seeds, dry red chillies, toor dal, turmeric powder, and curry leaves are harvested and sun-cured. The peppercorns and cumin seeds are toasted until fragrant. All ingredients are pulverized into a medium-coarse aromatic powder that yields a clear, spicy, comforting soup when boiled with tamarind and tomatoes.",
      ingredients: [
        "Black Peppercorns",
        "Cumin Seeds",
        "Coriander Seeds",
        "Dry Red Chillies",
        "Toor Dal",
        "Turmeric Powder",
        "Asafoetida (Hing)",
        "Curry Leaves"
      ],
      purposeOfIngredients: "Black pepper and cumin provide invigorating warmth and cold-relieving essential oils. Coriander adds citrusy notes. Toor dal gives subtle body. Turmeric and curry leaves provide natural immunity boosters.",
      keyHighlights: [
        "High black pepper digestive content",
        "Soothing herbal soup seasoning",
        "Zero MSG or flow agents",
        "Premium export grade nitrogen-flushed pouch"
      ]
    },
    {
      id: "kura-karam",
      name: "Kura Karam Powder",
      image: kuraKaramImg,
      manufacturingProcess: "Sun-dried Guntur & Byadgi red chillies, coriander seeds, cumin seeds, garlic cloves, fenugreek seeds, mustard seeds, turmeric powder, and salt are carefully measured. The spices are gently roasted to release volatile oils and pounded or ground into an all-purpose curry spice blend. The powder is tested for heat unit (SHU) consistency and sealed in heavy-duty food-grade pouches.",
      ingredients: [
        "Guntur Red Chillies",
        "Byadgi Red Chillies",
        "Coriander Seeds",
        "Cumin Seeds",
        "Garlic Cloves",
        "Fenugreek Seeds",
        "Mustard Seeds",
        "Turmeric Powder",
        "Salt"
      ],
      purposeOfIngredients: "Dual red chilli blend provides rich red color and balanced heat. Coriander and cumin create a versatile curry base. Garlic and fenugreek add depth and richness to vegetable and meat curries.",
      keyHighlights: [
        "All-purpose Andhra curry spice mix",
        "Rich red color from natural Byadgi chillies",
        "Perfect balance of heat and flavor",
        "Export certified for global kitchens"
      ]
    },
    {
      id: "red-chillies",
      name: "Red Chillies",
      image: redChillisImg,
      manufacturingProcess: "Sun-dried premium Guntur 334 & Sannam S4 dry red chillies harvested from fertile fields. Stems are manually removed or retained based on export specifications. The chillies undergo machine cleaning, sorting, capsaicin testing for pungency SHU levels, and moisture checking before being packed in press-packed compressed bales or air-tight barrier export bags.",
      ingredients: ["100% Whole Dry Red Chillies (Guntur Sannam / 334 Grade)"],
      purposeOfIngredients: "Provides authentic Indian fiery heat, vibrant red color, and characteristic pungent aroma to global curries, pastes, and spice extracts.",
      keyHighlights: [
        "High SHU pungency rating",
        "Sun-cured with intense natural color",
        "Steam-sterilized for international markets",
        "Export quality stem-cut & stemless grades"
      ]
    },
    {
      id: "turmeric-rhizomes",
      name: "Turmeric",
      image: turmericImg,
      manufacturingProcess: "Organic Salem & Nizamabad raw turmeric rhizomes are boiled, sun-dried, and machine polished to achieve a clean golden sheen. The rhizomes are graded by size and curcumin concentration before undergoing microbiological inspection and export packing.",
      ingredients: ["100% Natural Dried Turmeric Finger Rhizomes"],
      purposeOfIngredients: "Delivers essential curcumin anti-inflammatory antioxidants, vibrant yellow color, and warm earthy flavor profile to food processing, pharmaceuticals, and dyes.",
      keyHighlights: [
        "High natural Curcumin (3.5% - 5.5%)",
        "Double polished smooth fingers",
        "Aflatoxin-free export certified",
        "Long shelf-life vacuum bulk packaging"
      ]
    },
    {
      id: "black-pepper",
      name: "Black Pepper",
      image: blackPepperImg,
      manufacturingProcess: "High-altitude Malabar coast green pepper berries are handpicked at peak maturity, sun-cured until deeply wrinkled and dark black. Machine winnowed and spiral gravity separated to select bold 4mm+ TGSEB (Tellicherry Garbled Special Extra Bold) berries packed in multi-wall kraft paper export sacks.",
      ingredients: ["100% Whole Black Peppercorns"],
      purposeOfIngredients: "Offers sharp piperine heat, woody complex aroma, and strong preservative & digestive benefits for global culinary seasoning.",
      keyHighlights: [
        "Bold TGSEB grade peppercorns",
        "High essential oil & piperine content",
        "Zero artificial additives or washes",
        "USFDA & EU phytosanitary compliant"
      ]
    },
    {
      id: "cloves",
      name: "Cloves",
      image: clovesImg,
      manufacturingProcess: "Whole un-opened flower buds of Syzygium aromaticum trees are hand-harvested, sun-cured on clean mats, and manually sorted to eliminate headless or mother cloves. The handpicked bold cloves are sealed in moisture-proof barrier pouches.",
      ingredients: ["100% Pure Whole Cloves"],
      purposeOfIngredients: "Rich in eugenol essential oil delivering sweet warm pungent spice notes for spice blends, baking, beverages, and oral care.",
      keyHighlights: [
        "Handpicked bold head-intact cloves",
        "High natural eugenol essential oil content",
        "Intense spicy aroma & flavor profile",
        "Moisture-proof aroma-seal packaging"
      ]
    },
    {
      id: "green-cardamom",
      name: "Green Cardamom",
      image: greenCardamomImg,
      manufacturingProcess: "Hand-plucked 8mm+ extra bold green cardamom pods from the Western Ghats of Idukki. Processed in eco-friendly electric curing houses to lock in vivid emerald color and volatile essential oils, followed by color sorting and vacuum packing.",
      ingredients: ["100% Pure Whole Green Cardamom Pods"],
      purposeOfIngredients: "Known as the Queen of Spices, provides refreshing camphor-citrus sweet fragrance and intense floral notes to desserts, teas, and savory dishes.",
      keyHighlights: [
        "8mm+ Extra Bold green pods",
        "Electric-cured emerald color lock",
        "Rich cineole essential oil aroma",
        "Export grade nitrogen-sealed bags"
      ]
    },
    {
      id: "cinnamon",
      name: "Cinnamon",
      image: cinnamonImg,
      manufacturingProcess: "Inner bark of Ceylon cinnamon trees is peeled in delicate thin layers, naturally dried in shade where it curls into tight quills. Graded by thickness and length, inspected for low coumarin levels, and bundled for export.",
      ingredients: ["100% Natural Ceylon Cinnamon Quill Bark"],
      purposeOfIngredients: "Provides delicate sweet woody aroma with ultra-low coumarin, making it safe and prized for everyday wellness, teas, and gourmet cuisine.",
      keyHighlights: [
        "True Ceylon soft quill bark",
        "Ultra-low natural coumarin content",
        "Delicate sweet woody aroma",
        "Aroma-preserving foil casing"
      ]
    },
    {
      id: "cumin-seeds",
      name: "Cumin Seeds",
      image: cuminSeedsImg,
      manufacturingProcess: "Premium Cuminum cyminum seeds harvested from Gujarat & Rajasthan. Sortex cleaned through optical color sorters and seed cleaners to ensure 99.5% purity with zero dust or chaff before sealing.",
      ingredients: ["100% Whole Cumin Seeds (Sortex Cleaned)"],
      purposeOfIngredients: "Imparts nutty warm earthy aroma, thymol digestive properties, and essential flavor base to curry powders and tempering.",
      keyHighlights: [
        "99.5% Sortex machine cleaned purity",
        "High natural thymol aromatic oil",
        "Un-bleached natural brown seed",
        "Export standard moisture-proof bags"
      ]
    },
    {
      id: "coriander-seeds",
      name: "Coriander Seeds",
      image: corianderSeedsImg,
      manufacturingProcess: "Sun-cured golden yellow coriander seeds gathered from Madhya Pradesh. Machine sieved, destoned, and sortex cleaned to preserve essential linalool oils before export shipment.",
      ingredients: ["100% Whole Coriander Seeds"],
      purposeOfIngredients: "Delivers sweet citrusy nutty undertones, acts as thickener when ground, and supports healthy digestion.",
      keyHighlights: [
        "Golden yellow bold seeds",
        "High linalool citrus aromatic oil",
        "Sortex cleaned zero-dust grade",
        "Bulk export packaging available"
      ]
    },
    {
      id: "red-chilli-powder",
      name: "Red Chilli Powder",
      image: redChilliPowderImg,
      manufacturingProcess: "De-stemmed Guntur dry red chillies are slow cool-ground in stainless steel hammer mills to prevent heat degradation of color and pungency. Sifted through fine mesh and vacuum nitrogen packed.",
      ingredients: ["100% Pure Guntur Red Chillies"],
      purposeOfIngredients: "Gives rich natural red color and sharp fiery heat to curries, gravies, marinades, and seasonings without added oil or dyes.",
      keyHighlights: [
        "100% pure cool-ground chilli powder",
        "Zero artificial color or Sudan red dye",
        "Vibrant natural ASTA color & SHU heat",
        "Export barrier foil nitrogen pouch"
      ]
    }
  ];

  const filteredPodies = activeTab === "all"
    ? podiesList
    : podiesList.filter(p => p.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Powders & Spices"
        breadcrumbText="Powders & Spices"
        bgImage={podiesHeaderImg}
        compact={true}
      />
      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Selector Tabs */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Spice Variety ({podiesList.length} Items):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                All Spices & Powders ({podiesList.length})
              </button>
              {podiesList.map(podi => (
                <button
                  key={podi.id}
                  onClick={() => setActiveTab(podi.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                    activeTab === podi.id
                      ? "bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {podi.name}
                </button>
              ))}
            </div>
          </div>

          {/* Podies Cards List With Manufacturing Process */}
          <div className="space-y-8">
            {filteredPodies.map(podi => (
              <div
                key={podi.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Compact Left Image Column */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img
                    src={podi.image}
                    alt={podi.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain rounded-2xl drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right Content Column */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Title */}
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {podi.name}
                      </h2>
                    </div>

                    {/* Manufacturing Process Text Box */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Manufacturing Process:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {podi.manufacturingProcess}
                      </p>
                    </div>

                    {/* Ingredients List */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {podi.ingredients.map((ing, i) => (
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
                        {podi.purposeOfIngredients}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {podi.keyHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                      <QuoteNowButton itemName={podi.name} />
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
