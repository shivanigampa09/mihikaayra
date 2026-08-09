import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Search, Package, ArrowRight, Tag } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../../constants/productsData';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearchModal } = useQuote();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
        p.hsCode.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredCategories = query.trim()
    ? PRODUCT_CATEGORIES.filter(c =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative">
        
        {/* SEARCH INPUT BAR */}
        <div className="p-4 bg-[#0D3B66] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D4AF37]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search export products, HS codes (e.g. 1704 90 90, Turmeric, Sweets)..."
            className="flex-1 bg-transparent text-white text-sm font-medium focus:outline-none placeholder:text-slate-300"
          />
          <button
            onClick={closeSearchModal}
            className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SEARCH RESULTS BODY */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {!query.trim() ? (
            <div className="text-center py-8 text-slate-400 space-y-3">
              <Search className="w-10 h-10 mx-auto opacity-40 text-[#0077B6]" />
              <p className="text-xs">Type a keyword or HS code above to search Mihika Ayra export catalog.</p>
              <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                {['Ippa Puvvu', 'Lakadong Turmeric', 'Vannamei Shrimp', 'Jute Bags', 'Guntur Pickle', 'Coffee Beans'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-[11px] bg-slate-100 hover:bg-[#0077B6] hover:text-white text-slate-700 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3 text-[#D4AF37]" /> {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 && filteredCategories.length === 0 ? (
            <div className="text-center py-8 text-slate-500">
              <p className="text-sm font-semibold">No direct matches found for "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for broader terms like "Spices", "Sweets", "Seafood", or "Jute".</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3B66] pb-2 border-b border-slate-100">
                    Matching Export Products ({filteredProducts.length})
                  </h4>
                  <div className="divide-y divide-slate-100 mt-2">
                    {filteredProducts.map(p => (
                      <Link
                        key={p.id}
                        to={`/products/${p.id}`}
                        onClick={closeSearchModal}
                        className="py-3 px-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover border border-slate-200" />
                          <div>
                            <h5 className="text-xs font-bold text-slate-900 group-hover:text-[#0077B6] transition-colors">
                              {p.name}
                            </h5>
                            <span className="text-[10px] text-slate-500 font-mono">
                              Category: {p.categoryName} | HS: {p.hsCode}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredCategories.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D3B66] pb-2 border-b border-slate-100">
                    Matching Trade Categories ({filteredCategories.length})
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {filteredCategories.map(c => (
                      <Link
                        key={c.id}
                        to={`/products?category=${c.id}`}
                        onClick={closeSearchModal}
                        className="p-2.5 rounded-xl border border-slate-200 hover:border-[#0077B6] hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                      >
                        <img src={c.image} alt={c.title} className="w-8 h-8 rounded-lg object-cover" />
                        <div>
                          <h5 className="text-xs font-bold text-slate-900">{c.title}</h5>
                          <span className="text-[10px] text-slate-500">{c.itemCount} Products</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
