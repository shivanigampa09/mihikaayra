import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import imgWooden from '../assets/images/wooden_handicrafts_1785757750067.jpg';
import imgBrass from '../assets/images/brass_metal_crafts_1785757769226.jpg';
import imgTerracotta from '../assets/images/terracotta_items_1785757784239.jpg';
import imgBamboo from '../assets/images/bamboo_products_1785757801080.jpg';
import imgLamps from '../assets/images/decorative_lamps_1785757828733.jpg';
import imgClay from '../assets/images/clay_pots_1785757898575.jpg';
import imgGift from '../assets/images/gift_items_1785757932694.jpg';
import imgJewelry from '../assets/images/handmade_jewelry_1786176061475.jpg';
import imgWall from '../assets/images/wall_hangings_1786176199615.jpg';
import handcraftHeaderImg from '../assets/images/category-handcrafts.png';


interface HandcraftItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  ingredients: string[];
  purposeOfIngredients: string;
}

export const HandcraftsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const handcraftsList: HandcraftItem[] = [
    {
      id: 'wooden-handicrafts',
      name: 'Wooden Handicrafts',
      image: imgWooden,
      manufacturingProcess: 'Seasoned regional hardwoods are hand-chiseled and lathe-turned by generational artisans. Intricate geometric and floral motifs are carved with precision tools, followed by extensive hand-sanding, natural oil polishing, and lacquer sealing to preserve the wood grain.',
      ingredients: ['Seasoned Teak/Mango Wood', 'Natural Resin Lacquer', 'Organic Oils'],
      purposeOfIngredients: 'Hardwoods offer lasting durability and rich textures, while natural resins protect the carvings and enhance the timeless aesthetic of the artifacts.'
    },
    {
      id: 'brass-metal-crafts',
      name: 'Brass & Metal Crafts',
      image: imgBrass,
      manufacturingProcess: 'Traditional sand-casting and lost-wax metal casting techniques are employed to mold molten brass and copper alloys. The raw cast is then hand-engraved, polished, and finished with an antique patina or clear varnish to prevent oxidation.',
      ingredients: ['Solid Brass', 'Copper Alloys', 'Protective Varnish'],
      purposeOfIngredients: 'Brass provides weight, structural integrity, and a classic golden hue that signifies cultural heritage and longevity.'
    },
    {
      id: 'terracotta-items',
      name: 'Terracotta Items',
      image: imgTerracotta,
      manufacturingProcess: 'Locally sourced riverbed clay is purified, wedged, and wheel-thrown or hand-sculpted. The clay bodies are sun-dried and pit-fired at high temperatures to achieve the signature earthen reddish-brown color, sometimes finished with natural mineral slips.',
      ingredients: ['Natural River Clay', 'Mineral Slips'],
      purposeOfIngredients: 'Terracotta is porous and eco-friendly, offering a rustic aesthetic and breathability that honors traditional pottery.'
    },
    {
      id: 'bamboo-products',
      name: 'Bamboo Products',
      image: imgBamboo,
      manufacturingProcess: 'Mature bamboo stalks are harvested, treated to prevent pests, and split into fine slivers. These are then hand-woven into complex structural patterns to form baskets, mats, and decorative items.',
      ingredients: ['Treated Bamboo Splints', 'Natural Cane'],
      purposeOfIngredients: 'Bamboo is a highly sustainable, lightweight, and resilient material that allows for complex weaving and sturdy functional designs.'
    },
    {
      id: 'handmade-jewelry',
      name: 'Handmade Jewelry',
      image: imgJewelry,
      manufacturingProcess: 'Artisans hand-string and wire-wrap semi-precious stones, glass beads, and ethnic metallic charms. Each piece is meticulously assembled to ensure balance, durability, and a unique bohemian aesthetic.',
      ingredients: ['Semi-Precious Stones', 'Glass Beads', 'Hypoallergenic Metals'],
      purposeOfIngredients: 'Selected stones and metals provide unique textures and colors, creating statement pieces that reflect personal style and traditional craftsmanship.'
    },
    {
      id: 'decorative-lamps',
      name: 'Decorative Lamps',
      image: imgLamps,
      manufacturingProcess: 'Metal, wood, or hardened terracotta bases are combined with hand-painted or intricately cut lampshades. Electrical fittings are safely integrated to emit warm, ambient lighting through the crafted patterns.',
      ingredients: ['Metal/Wood Base', 'Textured Lamp Shades', 'Electrical Fittings'],
      purposeOfIngredients: 'Designed to cast beautiful shadows and warm light, enhancing the mood and decor of any interior space.'
    },
    {
      id: 'wall-hangings',
      name: 'Wall Hangings',
      image: imgWall,
      manufacturingProcess: 'A combination of macramé knotting, block printing, and embroidery on natural textiles, often adorned with mirrors, beads, and tassels to create rich, textured tapestries.',
      ingredients: ['Cotton Cords', 'Printed Fabrics', 'Mirrors & Beads'],
      purposeOfIngredients: 'These materials add vibrant colors, texture, and cultural storytelling to plain walls, creating an inviting atmosphere.'
    },
    {
      id: 'clay-pots',
      name: 'Clay Pots',
      image: imgClay,
      manufacturingProcess: 'Hand-thrown on a traditional potter\'s wheel, shaped with precision, and fired in a kiln. Often left unglazed to maintain natural cooling properties or decorated with simple geometric motifs.',
      ingredients: ['Natural Potters Clay'],
      purposeOfIngredients: 'Unglazed clay retains water naturally and provides an earthy, organic touch to gardens and kitchens.'
    },
    {
      id: 'gift-items',
      name: 'Gift Items',
      image: imgGift,
      manufacturingProcess: 'Curated sets of miniature crafts, hand-painted boxes, and artisanal novelties packaged in eco-friendly, aesthetically pleasing handcrafted boxes.',
      ingredients: ['Mixed Artisanal Materials', 'Eco-Friendly Packaging'],
      purposeOfIngredients: 'Thoughtfully assembled to provide a complete, premium gifting experience that supports local artisans.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? handcraftsList
    : handcraftsList.filter(h => h.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Hand Crafts"
        breadcrumbText="Hand Crafts"
        bgImage={handcraftHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* CATEGORY FILTER PILLS */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Handcraft Category ({handcraftsList.length} Items):
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
                All Handcrafts ({handcraftsList.length})
              </button>
              {handcraftsList.map(item => (
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

          {/* HANDCRAFTS CARDS LIST */}
          <div className="space-y-8">
            {filteredList.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* COMPACT LEFT IMAGE COLUMN */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
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

                    {/* MANUFACTURING / CRAFTING PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Crafting & Creation Technique:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* INGREDIENTS / MATERIALS LIST */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Materials & Raw Components:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.ingredients.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PURPOSE OF MATERIALS */}
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Purpose of Materials & Heritage Value:
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
