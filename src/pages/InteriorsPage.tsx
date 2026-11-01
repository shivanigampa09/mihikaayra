import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Factory, Sparkles } from 'lucide-react';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

import designerCurtainsImg from '../assets/images/designer_curtains_1786177444367.jpg';
import sofaFabricsImg from '../assets/images/sofa_fabrics_1786177456216.jpg';
import cushionCoversImg from '../assets/images/cushion_covers_1786177471013.jpg';
import woolSilkCarpetsImg from '../assets/images/wool_silk_carpets_1786177484586.jpg';
import metallicWallpapersImg from '../assets/images/metallic_wallpapers_1786177502087.jpg';
import brassWallDecorImg from '../assets/images/brass_wall_decor_1786177659965.jpg';
import pendantLightsImg from '../assets/images/pendant_lights_1786177676027.jpg';
import teakMarbleFurnitureImg from '../assets/images/teak_marble_furniture_1786177688274.jpg';
import goldAccentMirrorsImg from '../assets/images/gold_accent_mirrors_1786177700405.jpg';
import ceramicBrassVasesImg from '../assets/images/ceramic_brass_vases_1786177714793.jpg';
import interiorsHeaderImg from '../assets/images/category-interiors.png';


interface InteriorItem {
  id: string;
  name: string;
  image: string;
  manufacturingProcess: string;
  specifications: string[];
  designHighlights: string;
}

export const InteriorsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const interiorsList: InteriorItem[] = [
    {
      id: 'curtains',
      name: 'Designer Blackout & Sheer Curtains',
      image: designerCurtainsImg,
      manufacturingProcess: 'Precision triple-weave polyester black yarn interlayer technology providing 99% light blockage and thermal insulation. Combined with delicate linen-blend sheer drapery, stainless steel grommet rings, and tailored pinch-pleat tailoring.',
      specifications: ['Triple-Weave Blackout Polyester', 'Organic Linen Blend Sheer', 'Rust-Proof Stainless Steel Eyelets'],
      designHighlights: 'Provides complete room darkening, thermal temperature regulation, UV solar protection, and elegant window framing for homes and luxury hotels.'
    },
    {
      id: 'sofa-fabrics',
      name: 'Premium Velvet & Chenille Sofa Upholstery Fabrics',
      image: sofaFabricsImg,
      manufacturingProcess: 'High-rub count (50,000+ Martindale) dense cut-pile velvet and textured chenille Jacquard weaving. Treated with nano stain-resistant coatings and fire-retardant backing suitable for heavy commercial lounge seating.',
      specifications: ['High-Density Cotton Velvet Blend', 'Stain-Resistant Nano Finish', 'Fire-Retardant Commercial Backing'],
      designHighlights: 'Offers opulent tactile softness, long-lasting spill resistance, and luxurious color retention for residential living rooms and commercial lobbies.'
    },
    {
      id: 'cushions-pillow-covers',
      name: 'Hand-Embroidered Velvet & Silk Cushion Covers',
      image: cushionCoversImg,
      manufacturingProcess: 'Crafted from silk organza, linen, and plush velvet adorned with intricate Zardozi metallic threadwork, tassel trim, and hidden brass zipper closures. Stuffed with hypoallergenic micro-fiber fill inserts.',
      specifications: ['Raw Silk & Velvet Base', 'Zardozi Metallic Threading', 'Hypoallergenic Virgin Microfiber Fill', 'Concealed Zipper'],
      designHighlights: 'Adds instant pop of color, plush physical comfort, and rich cultural artisanal texture to sofas, armchairs, and beddings.'
    },
    {
      id: 'carpets-rugs',
      name: 'Hand-Tufted Wool & Silk Area Carpets & Rugs',
      image: woolSilkCarpetsImg,
      manufacturingProcess: 'Hand-tufted by skilled weavers using 100% New Zealand wool and viscose silk highlights on a heavy cotton canvas backing. Carved multi-level pile creates 3D dimensional floral and geometric motifs.',
      specifications: ['100% New Zealand Fleece Wool', 'Bamboo Viscose Silk Accent Yarns', 'Natural Latex & Cotton Canvas Backing'],
      designHighlights: 'Insulates hard flooring against cold, absorbs acoustic reverberation, and anchors living room and board room seating zones.'
    },
    {
      id: 'wallpapers',
      name: 'Luxury Textured Non-Woven & Metallic Wallpapers',
      image: metallicWallpapersImg,
      manufacturingProcess: 'Printed on breathable eco-friendly non-woven fiber substrates using water-based non-toxic inks. Embossed with subtle fabric textures, metallic gold foil accents, and scrubbable vinyl protective topcoats.',
      specifications: ['Breathable Non-Woven Wood Pulp Base', 'Water-Based Eco Ink Pigments', 'Metallic Gold Leaf Detailing'],
      designHighlights: 'Creates dramatic accent feature walls, conceals minor wall imperfections, and brings tactile warmth to master suites and reception areas.'
    },
    {
      id: 'wall-decor',
      name: 'Artisanal Brass & Carved Wooden Wall Decor',
      image: brassWallDecorImg,
      manufacturingProcess: 'Hand-chiseled reclaimed Sheesham wood panels combined with antique hand-hammered brass leaf motifs and geometric metal art frames finished in weather-sealed electroplated coats.',
      specifications: ['Seasoned Teak / Sheesham Wood', 'Electroplated Brass Metalwork', 'Protective Clear Lacquer'],
      designHighlights: 'Elevates plain wall spaces with dimensional sculpture, artistic storytelling, and timeless handcrafted elegance.'
    },
    {
      id: 'lighting-fixtures',
      name: 'Hand-Blown Glass & Brass Pendant Lighting Fixtures',
      image: pendantLightsImg,
      manufacturingProcess: 'Artisan hand-blown amber glass globes mounted on solid brushed brass stems. Fitted with dimmable warm LED filament bulbs and heat-resistant ceramic E27 socket hardware.',
      specifications: ['Artisanal Hand-Blown Amber Glass', 'Solid Brushed Brass Fittings', 'Dimmable Warm LED Filament Light'],
      designHighlights: 'Disperses warm, glare-free ambient illumination, serving as a captivating architectural centerpiece above dining tables and kitchen islands.'
    },
    {
      id: 'furniture',
      name: 'Bespoke Teak & Marble Living Room Furniture',
      image: teakMarbleFurnitureImg,
      manufacturingProcess: 'Kiln-dried solid Teak wood frame joinery paired with polished Italian Carrara marble tops. Precision CNC cut, hand-sanded, and sealed with anti-scratch matte polyurethane lacquer.',
      specifications: ['Kiln-Dried Solid Teak Wood', 'Natural Italian Carrara Marble', 'Polyurethane Protective Coat'],
      designHighlights: 'Delivers structural heirloom durability, ergonomic dining/lounge utility, and sophisticated organic beauty to residential and commercial spaces.'
    },
    {
      id: 'decorative-mirrors',
      name: 'Hand-Carved Gold Leaf Accent Decorative Mirrors',
      image: goldAccentMirrorsImg,
      manufacturingProcess: '5mm HD copper-free silver mirror glass housed in intricately carved wooden frames overlaid with antiqued gold leaf foil and shatter-resistant safety backing film.',
      specifications: ['5mm HD Copper-Free Silver Mirror Glass', 'Carved Solid Wood Frame', 'Antique Gold Leaf Foiling'],
      designHighlights: 'Reflects natural room light, visually expands small rooms, and functions as a stunning focal wall art piece in foyers and vanity dressing areas.'
    },
    {
      id: 'home-decor-accessories',
      name: 'Luxury Ceramic Vases, Brass Artifacts & Home Décor Accessories',
      image: ceramicBrassVasesImg,
      manufacturingProcess: 'High-fired stoneware ceramic vases dipped in reactive glazes, paired with hand-cast solid brass bowls, marble coaster sets, and scented soy wax candles.',
      specifications: ['High-Fired Stoneware Clay', 'Cast Solid Brass Alloys', 'Natural White Italian Marble'],
      designHighlights: 'Provides subtle finishing touches, tabletop styling, and curated sophisticated ambiance across coffee tables, consoles, and shelves.'
    }
  ];

  const filteredList = activeTab === 'all'
    ? interiorsList
    : interiorsList.filter(i => i.id === activeTab);

  return (
    <div>
      <PageHeader
        title="Home & Commercial Interiors"
        breadcrumbText="Interiors"
        bgImage={interiorsHeaderImg}
        compact={true}
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Interior Decor Element ({interiorsList.length} Categories):
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
                All Interior Items ({interiorsList.length})
              </button>
              {interiorsList.map(item => (
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

          {/* Interiors Cards List */}
          <div className="space-y-8">
            {filteredList.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-stretch"
              >
                {/* Compact Left Image Column */}
                <div className="w-full md:w-64 lg:w-72 shrink-0 relative h-52 md:h-auto overflow-hidden bg-slate-100 flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Right Content Column */}
                <div className="flex-1 p-6 sm:p-7 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div>
                      <h2 className="text-2xl font-bold font-serif text-[#031322] leading-tight">
                        {item.name}
                      </h2>
                    </div>

                    {/* MANUFACTURING / WEAVING / FABRICATION PROCESS TEXT BOX */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider flex items-center gap-2">
                        <Factory className="w-4 h-4 text-[#0077B6]" />
                        Crafting & Fabrication Technique:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.manufacturingProcess}
                      </p>
                    </div>

                    {/* Materials & Components */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Materials & Raw Components:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.specifications.map((ing, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium border border-slate-200">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Purpose & Aesthetic Function */}
                    <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200/80 space-y-1.5">
                      <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Interior Function & Aesthetic Value:
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">
                        {item.designHighlights}
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
