import React from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from '../../types';
import { Globe, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import { QuoteNowButton } from '../common/QuoteNowButton';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      {/* CARD IMAGE & BADGES */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* HS CODE BADGE */}
        <div className="absolute top-3 left-3 bg-[#0D3B66]/90 backdrop-blur-md text-[#D4AF37] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-[#D4AF37]/30 shadow">
          HS: {product.hsCode}
        </div>

        {/* TOP EXPORT BADGE */}
        {product.isTopExport && (
          <div className="absolute top-3 right-3 bg-[#D4AF37] text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
            Top Export
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[10px] uppercase tracking-widest text-[#00B4D8] font-bold block mb-0.5">
            {product.categoryName}
          </span>
          <h3 className="text-base font-bold font-serif line-clamp-1 group-hover:text-[#D4AF37] transition-colors">
            {product.name}
          </h3>
        </div>
      </div>

      {/* CARD BODY CONTENT */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        {product.nativeOrGradeName && (
          <p className="text-xs text-slate-500 font-medium italic line-clamp-1">
            {product.nativeOrGradeName}
          </p>
        )}

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* EXPORT MARKETS TAGS */}
        <div className="pt-2 border-t border-slate-100 space-y-1.5">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
            <Globe className="w-3.5 h-3.5 text-[#0077B6]" />
            <span>Export Markets:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {product.exportMarkets.slice(0, 3).map((m, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded-full font-medium">
                {m}
              </span>
            ))}
            {product.exportMarkets.length > 3 && (
              <span className="text-[10px] text-slate-400 self-center">
                +{product.exportMarkets.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CARD ACTIONS */}
        <div className="pt-3 flex items-center justify-between gap-2 border-t border-slate-100">
          <Link
            to={`/products/${product.id}`}
            className="text-xs font-bold text-[#0D3B66] hover:text-[#0077B6] flex items-center gap-1 transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <QuoteNowButton itemName={product.name} />
        </div>
      </div>
    </div>
  );
};
