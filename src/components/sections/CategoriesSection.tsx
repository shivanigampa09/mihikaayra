import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../../constants/productsData';
import { ArrowRight, Package, CheckCircle2 } from 'lucide-react';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block mb-2">
              Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66]">
              Explore Premium Indian Export Commodities
            </h2>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D3B66] hover:text-[#0077B6] group"
          >
            <span>View Complete Export Catalog ({PRODUCT_CATEGORIES.length} Categories)</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group bg-[#F8F9FA] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* LARGE CATEGORY IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* CARD OVERLAY */}

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold text-[#00B4D8] tracking-widest block">
                    {category.subtitle}
                  </span>
                  <h3 className="text-lg font-bold font-serif group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>

                {/* HIGHLIGHT BULLETS */}
                <div className="space-y-1 pt-2 border-t border-slate-200/80">
                  {category.exportHighlights.slice(0, 2).map((h, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* READ MORE BUTTON */}
                <div className="pt-3 border-t border-slate-200/80">
                  <Link
                    to={
                      category.id === 'pickles' ? '/pickles' :
                      category.id === 'sweets' ? '/sweets' :
                      category.id === 'millets' ? '/millets' :
                      category.id === 'snacks' ? '/snacks' :
                      category.id === 'podies' ? '/podies' :
                      category.id === 'jute-bags' ? '/jute-bags' :
                      category.id === 'honey' ? '/honey' :
                      category.id === 'fishes' ? '/fishes' :
                      category.id === 'dry-fruits' ? '/dry-fruits' :
                      category.id === 'cosmetics' ? '/cosmetics' :
                      category.id === 'handcraft' ? '/handcraft' :
                      category.id === 'textiles' ? '/fabrics' :
                      category.id === 'gaming-products' ? '/gaming' :
                      category.id === 'interiors' ? '/interiors' :
                      category.id === 'automobiles' ? '/automobiles' :

                      `/products?category=${category.id}`
                    }
                    className="w-full bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold text-xs py-2.5 rounded-xl transition-colors duration-300 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Read More & View Items</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
