import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../constants/productsData';
import { ProductCard } from '../components/cards/ProductCard';
import { Search, Filter, RefreshCw, Package } from 'lucide-react';

export const Products: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam === 'pickles') { navigate('/pickles'); return; }
    if (categoryParam === 'sweets') { navigate('/sweets'); return; }
    if (categoryParam === 'millets') { navigate('/millets'); return; }
    if (categoryParam === 'snacks') { navigate('/snacks'); return; }
    if (categoryParam === 'podies') { navigate('/podies'); return; }
    if (categoryParam === 'jute-bags' || categoryParam === 'jug-bags') { navigate('/jute-bags'); return; }
    if (categoryParam === 'honey') { navigate('/honey'); return; }
    if (categoryParam === 'fishes') { navigate('/fishes'); return; }
    if (categoryParam === 'dry-fruits') { navigate('/dry-fruits'); return; }
    if (categoryParam === 'cosmetics') { navigate('/cosmetics'); return; }
    if (categoryParam === 'handcraft' || categoryParam === 'handcrafts') { navigate('/handcraft'); return; }
    if (categoryParam === 'textiles' || categoryParam === 'fabrics') { navigate('/fabrics'); return; }
    if (categoryParam === 'gaming-products' || categoryParam === 'gaming') { navigate('/gaming'); return; }
    if (categoryParam === 'interiors' || categoryParam === 'home-interiors') { navigate('/interiors'); return; }
    setSelectedCategory(categoryParam);
  }, [categoryParam, navigate]);

  const handleCategoryChange = (catId: string) => {
    if (catId === 'pickles') { navigate('/pickles'); return; }
    if (catId === 'sweets') { navigate('/sweets'); return; }
    if (catId === 'millets') { navigate('/millets'); return; }
    if (catId === 'snacks') { navigate('/snacks'); return; }
    if (catId === 'podies') { navigate('/podies'); return; }
    if (catId === 'jute-bags' || catId === 'jug-bags') { navigate('/jute-bags'); return; }
    if (catId === 'honey') { navigate('/honey'); return; }
    if (catId === 'fishes') { navigate('/fishes'); return; }
    if (catId === 'dry-fruits') { navigate('/dry-fruits'); return; }
    if (catId === 'cosmetics') { navigate('/cosmetics'); return; }
    if (catId === 'handcraft' || catId === 'handcrafts') { navigate('/handcraft'); return; }
    if (catId === 'textiles' || catId === 'fabrics') { navigate('/fabrics'); return; }
    if (catId === 'gaming-products' || catId === 'gaming') { navigate('/gaming'); return; }
    if (catId === 'interiors' || catId === 'home-interiors') { navigate('/interiors'); return; }
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      const matchHS = product.hsCode.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchHS) return false;
    }
    return true;
  });

  return (
    <div>
      <PageHeader
        title="Export Product Catalog"
        subtitle="Explore certified Indian spices, authentic sweets, IQF seafood, jute textiles, coffee, tea, and cosmetics."
        breadcrumbText="Products"
      />

      <section className="py-12 bg-[#F8F9FA] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* SEARCH & CATEGORIES BAR */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md space-y-6">
            
            {/* SEARCH INPUT */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search products by name, category, or HS Code (e.g. 1704 90 90, Turmeric, Sweets)..."
                  className="w-full pl-10 pr-4 py-3 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            {/* CATEGORY BUTTON PILLS */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Filter by Sector ({PRODUCT_CATEGORIES.length} Categories):
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    selectedCategory === 'all'
                      ? 'bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All Products ({ALL_PRODUCTS.length})
                </button>

                {PRODUCT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all border ${
                      selectedCategory === cat.id
                        ? 'bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* PRODUCTS GRID */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-4">
              <Package className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800 font-serif">No Matching Export Products</h3>
              <p className="text-xs text-slate-500">
                No items match your search term "{searchQuery}". Try selecting a different category or resetting filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="bg-[#0D3B66] text-white font-bold text-xs px-6 py-2.5 rounded-xl"
              >
                Show All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
