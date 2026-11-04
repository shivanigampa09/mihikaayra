import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ALL_PRODUCTS } from '../constants/productsData';
import { PageHeader } from '../components/layout/PageHeader';
import { ProductCard } from '../components/cards/ProductCard';
import { Globe, CheckCircle2 } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { QuoteNowButton } from '../components/common/QuoteNowButton';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { openQuoteModal } = useQuote();

  const product = ALL_PRODUCTS.find(p => p.id === id) || ALL_PRODUCTS[0];
  const [selectedImg, setSelectedImg] = useState(product.image);

  const relatedProducts = ALL_PRODUCTS.filter(
    p => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div>
      <PageHeader
        title={product.name}
        subtitle={`${product.categoryName} | HS Code: ${product.hsCode}`}
        breadcrumbText={product.name}
      />

      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Detailed View Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT: IMAGE GALLERY (5 COLS) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-lg overflow-hidden">
                <img
                  src={selectedImg || product.image}
                  alt={product.name}
                  className="w-full h-[380px] object-cover rounded-xl"
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImg(img)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        selectedImg === img ? 'border-[#D4AF37] scale-105 shadow' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Badges */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Minimum Order Quantity (MOQ):</span>
                  <span className="font-bold text-[#0D3B66]">{product.minimumOrderQuantity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-semibold">Export Shelf-Life:</span>
                  <span className="font-bold text-emerald-700">{product.shelfLifeOrDurability}</span>
                </div>
              </div>
            </div>

            {/* RIGHT: OVERVIEW & SPECS (7 COLS) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-[#0D3B66] text-[#D4AF37]">
                    HS: {product.hsCode}
                  </span>
                  <span className="text-xs font-semibold text-[#0077B6]">
                    Category: {product.categoryName}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#0D3B66]">
                  {product.name}
                </h1>

                {product.nativeOrGradeName && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {product.nativeOrGradeName}
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {product.fullDescription}
              </p>

              {/* Specifications Table */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D3B66] font-serif border-b border-slate-100 pb-2">
                  Export Commercial Specifications
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b border-slate-200/60 last:border-none">
                      <span className="font-semibold text-slate-700">{spec.label}:</span>
                      <span className="font-medium text-[#0D3B66]">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits & Applications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">Key Quality Benefits</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {product.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#0D3B66] uppercase tracking-wider mb-2">Target Applications</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {product.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0077B6] flex-shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Export Markets & Packaging Options */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D3B66]">
                  <Globe className="w-4 h-4 text-[#0077B6]" />
                  <span>Verified Export Destination Countries:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.exportMarkets.map((market, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-800 text-[11px] font-medium px-2.5 py-1 rounded-full border border-slate-200">
                      {market}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Cta Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <QuoteNowButton itemName={product.name} />
              </div>

            </div>

          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <h2 className="text-2xl font-bold font-serif text-[#0D3B66]">
                Related Products in {product.categoryName}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {relatedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
