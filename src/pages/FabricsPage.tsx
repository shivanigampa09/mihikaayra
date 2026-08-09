import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import cottonFabricImg from '../assets/images/cotton_fabric.jpeg';
import banarasiSilkImg from '../assets/images/banarasi_silk.jpeg';
import chanderiFabricImg from '../assets/images/chanderi_fabric.jpeg';
import silkFabricImg from '../assets/images/silk_fabric.jpeg';
import linenFabricImg from '../assets/images/linen_fabric.jpeg';
import rayonFabricImg from '../assets/images/rayon_fabric.jpeg';
import khadiFabricImg from '../assets/images/khadi_fabric.jpeg';
import kalamkariFabricImg from '../assets/images/kalamkari_fabric.jpeg';
import polyesterFabricImg from '../assets/images/polyester_fabric.jpeg';
import denimFabricImg from '../assets/images/denim_fabric.jpeg';
import velvetFabricImg from '../assets/images/velvet_fabric.jpeg';
import woolFabricImg from '../assets/images/wool_fabric.jpeg';
import viscoseFabricImg from '../assets/images/viscose_fabric.jpeg';
import fabricsHeaderImg from '../assets/images/category-fabrics.png';


interface FabricItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const FabricsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const fabricsList: FabricItem[] = [
    {
      id: 'cotton-fabric',
      name: 'Cotton Fabric',
      image: cottonFabricImg,
      manufacturingProcess: 'Harvested raw long-staple cotton fibers gin-processed, carded, combed, and spun into fine counts (60s, 80s, 100s). Loom-woven in plain, twill, or satin weaves, mercerized for silky strength, and dyed with color-fast reactive dyes.',
      ingredients: ['100% Pure Organic Cotton Fiber', 'Eco Mercerizing Agents', 'Reactive Non-Toxic Dyes'],
      purposeOfIngredients: '100% natural breathable fiber allows maximal airflow, skin-friendly moisture absorption, and all-season daily wearing comfort.'
    },
    {
      id: 'banarasi-silk',
      name: 'Banarasi Silk Fabric',
      image: banarasiSilkImg,
      manufacturingProcess: 'Traditional handloom weaving in Varanasi using pure mulberry silk yarn intertwined with real silver or gold Zari threads. Intricate floral and paisley kadwa weaves crafted over weeks by master weavers.',
      ingredients: ['100% Mulberry Raw Silk', 'Gold & Silver Metallic Zari Threads', 'Natural Botanical Dyes'],
      purposeOfIngredients: 'Renowned globally for opulent royal bridal sarees, ethnic celebration couture, rich heavy drape, and timeless regal elegance.'
    },
    {
      id: 'chanderi-fabric',
      name: 'Chanderi Fabric',
      image: chanderiFabricImg,
      manufacturingProcess: 'Traditional handloom weaving from Chanderi, Madhya Pradesh, producing a lightweight sheer fabric by interweaving fine silk yarn with extra-fine cotton yarn and zari accents.',
      ingredients: ['Fine Mulberry Silk Yarn', 'Extra-Fine Cotton Count', 'Zari Brocade Accents'],
      purposeOfIngredients: 'Delivers a sheer glossy texture, featherlight airy comfort, elegant gold motifs, and sophisticated formal ethnic grace.'
    },
    {
      id: 'silk-fabric',
      name: 'Silk Fabric',
      image: silkFabricImg,
      manufacturingProcess: 'Cultivated Mulberry silkworm cocoons gently softened in hot spring water to unravel long continuous silk filaments. Spun into raw yarn, handloom or power-loom woven into Kanjeevaram and raw silk weaves, and degummed for royal sheen.',
      ingredients: ['100% Mulberry Raw Silk Filament', 'Natural Plant Dyes', 'Degumming Protein Washes'],
      purposeOfIngredients: 'Pure silk delivers luxurious natural luster, smooth hypoallergenic drape, and thermoregulating warmth for festive bridal couture.'
    },
    {
      id: 'linen-fabric',
      name: 'Linen Fabric',
      image: linenFabricImg,
      manufacturingProcess: 'Extracted from natural Flax plant stalks through field retting, scutching, and hackling processes. The strong flax fibers are wet-spun into thick yarns and woven into crisp slub-textured linen fabrics.',
      ingredients: ['100% European Flax Plant Fiber', 'Organic Natural Enzymes'],
      purposeOfIngredients: 'Flax linen is two to three times stronger than cotton, highly absorbent, bacterial-resistant, and becomes softer with every wash.'
    },
    {
      id: 'rayon-fabric',
      name: 'Rayon Fabric',
      image: rayonFabricImg,
      manufacturingProcess: 'Purified wood pulp cellulose regenerated into smooth continuous bio-fibers. Extruded through spinnerets, spun into fine counts, and woven into soft fluid drapes with vibrant color depth.',
      ingredients: ['Regenerated Wood Pulp Cellulose', 'Eco Viscose Fibers'],
      purposeOfIngredients: 'Provides silk-like luxurious drape, soft cooling touch on skin, and superior fluid motion ideal for modern summer dresses.'
    },
    {
      id: 'khadi-fabric',
      name: 'Khadi Fabric',
      image: khadiFabricImg,
      manufacturingProcess: 'Hand-spun on traditional wooden charkhas and hand-woven on handlooms without power or chemicals, producing an organic breathable textile with natural thick and thin slub character.',
      ingredients: ['100% Hand-Spun Organic Cotton / Silk Fiber', 'Natural Vegetable Dyes'],
      purposeOfIngredients: 'Eco-friendly, keeps warm in winter and cool in summer, hypoallergenic, supports artisan livelihoods, and offers authentic textured charm.'
    },
    {
      id: 'kalamkari-fabric',
      name: 'Kalamkari Fabric',
      image: kalamkariFabricImg,
      manufacturingProcess: 'Traditional ancient hand-block printing or hand-drawing using bamboo pens (kalam) with natural vegetable dyes like madder root, indigo, and myrobalan on unbleached cotton or silk fabric through 23 meticulous natural washing steps.',
      ingredients: ['100% Organic Cotton / Silk Base', 'Indigo & Madder Root Dyes', 'Myrobalan Milk Mordants'],
      purposeOfIngredients: 'Features rich mythological and floral motif artwork, 100% organic vegetable colors safe on sensitive skin, and iconic cultural heritage appeal.'
    },
    {
      id: 'polyester-fabric',
      name: 'Polyester Fabric',
      image: polyesterFabricImg,
      manufacturingProcess: 'Polyethylene terephthalate (PET) polymers melt-spun into high-tenacity filament threads. Woven with textured interlock or plain weaves, heat-set for zero shrinkage, and treated with moisture-wicking coatings.',
      ingredients: ['High-Tenacity PET Polymer Filament', 'Quick-Dry Finish'],
      purposeOfIngredients: 'Delivers exceptional wrinkle resistance, quick-dry performance, shape retention, and heavy-duty structural durability.'
    },
    {
      id: 'denim-fabric',
      name: 'Denim Fabric',
      image: denimFabricImg,
      manufacturingProcess: 'Ring-spun heavy cotton warp yarns dyed in indigo dye baths, keeping the core white. Shuttle loom-woven in a 3/1 right-hand twill weave structure with white filling weft yarns, stone-washed or laser-distressed.',
      ingredients: ['Heavyweight Cotton Ring-Spun Yarn', 'Natural Indigo Dye', 'Trace Elastane for Stretch'],
      purposeOfIngredients: 'Sturdy twill construction withstands rugged daily wear and develops personalized aged fading whiskers over time.'
    },
    {
      id: 'velvet-fabric',
      name: 'Velvet Fabric',
      image: velvetFabricImg,
      manufacturingProcess: 'Woven on specialized double-cloth looms where two layers are woven simultaneously and cut apart by a traveling blade, creating short dense upright pile threads that catch ambient light.',
      ingredients: ['Silk / Cotton Microfiber Blend', 'Dense Cut-Pile Warp Yarns'],
      purposeOfIngredients: 'Ultra-soft lush pile offers opulent visual depth, rich tactile warmth, and regal aesthetic for jackets, upholstery, and evening gowns.'
    },
    {
      id: 'wool-fabric',
      name: 'Wool Fabric',
      image: woolFabricImg,
      manufacturingProcess: 'Pure Merino sheep fleece shorn, scoured, carded, and worsted-spun into resilient crimped yarns. Woven into twill or herringbone suitings, fulled, and steam-pressed for thermal insulation.',
      ingredients: ['100% Pure Australian Merino Fleece Wool'],
      purposeOfIngredients: 'Natural crimped keratin fibers trap micro air pockets providing unmatched thermal insulation, flame resistance, and moisture repellency.'
    },
    {
      id: 'viscose-fabric',
      name: 'Viscose Fabric',
      image: viscoseFabricImg,
      manufacturingProcess: 'Wood pulp cellulose derived from sustainable beech or eucalyptus trees dissolved, extruded into fine rayon filaments, and woven into silky smooth, breathable textiles.',
      ingredients: ['Sustainable Beechwood Cellulose', 'Eco Viscose Filament'],
      purposeOfIngredients: 'Exceptional silk-like softness, high moisture absorption, elegant fluid drape, and lightweight skin comfort.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? fabricsList
    : fabricsList.filter(f => f.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Fabrics & Textiles"
        breadcrumbText="Fabrics"
        bgImage={fabricsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Fabric Type ({fabricsList.length} Varieties):
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
                All Fabrics ({fabricsList.length})
              </button>
              {fabricsList.map(item => (
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

          {/* FABRICS CARDS LIST (MATCHING PICKLES & MILLETS PAGE LAYOUT) */}
          <div className="space-y-8">
            {filteredList.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* PRODUCT IMAGE CONTAINER */}
                <div className="w-full md:w-[380px] lg:w-[440px] shrink-0 relative h-72 md:h-auto min-h-[300px] md:min-h-[360px] overflow-hidden bg-slate-50/80 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* RIGHT CONTENT COLUMN */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* TITLE */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING / WEAVING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Weaving & Textile Processing Method:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS / FIBER COMPOSITION */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Fiber Composition & Raw Yarns:
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
                        Fabric Characteristics & Ideal Uses:
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
