import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Globe, Ship, CheckCircle2, ArrowRight, PackageCheck } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import headerBg from '../assets/images/bamboo_products_1785757801080.jpg';

export const ExportServices: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const exportServicesList = [
    'Exporting Indian Products Worldwide',
    'Bulk Supply and Wholesale Trading',
    'Agricultural Products, Food Commodities, and Other Goods',
    'International Buyer and Supplier Coordination',
    'Product Sourcing and Competitive Quotations',
    'Global Trade and Long-Term Business Partnerships'
  ];

  return (
    <div>
      <PageHeader
        title="Exports"
        subtitle="Exporting Indian Products to Global Markets"
        breadcrumbText="Exports"
        bgImage={headerBg}
        compact={true}
      />

      <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Title & Lead Intro */}
          <div className="text-center space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-4 py-1.5 rounded-full inline-block">
              Mihika Ayra Traders and Imports &amp; Exports
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#031322] leading-tight">
              Exporting Indian Products to Global Markets
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Mihika Ayra Traders and Imports &amp; Exports is committed to connecting Indian products with international markets. We aim to supply quality products sourced from India to buyers, wholesalers, distributors, and businesses across the globe.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We welcome inquiries from international buyers seeking reliable Indian suppliers and competitive pricing across a wide range of product categories.
            </p>
          </div>

          {/* Two-Column Grid: Our Export Services & Our Global Reach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Our Export Services */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077B6] flex items-center justify-center">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322]">
                    Our Export Services
                  </h2>
                </div>
                <ul className="space-y-3">
                  {exportServicesList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Our Global Reach */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#031322]">
                    Our Global Reach
                  </h2>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  We aim to serve customers across Asia, Europe, Africa, the Middle East, North America, South America, and other international markets, subject to product availability and applicable export regulations.
                </p>
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                  {['Asia', 'Europe', 'Africa', 'Middle East', 'North America', 'South America'].map((region, i) => (
                    <span key={i} className="bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/80">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Looking to Source Products from India? Card */}
          <div className="bg-[#031322] text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <Ship className="w-8 h-8 text-[#00B4D8]" />
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Looking to Source Products from India?
                </h3>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Contact Mihika Ayra Traders and Imports &amp; Exports for product details, quotations, minimum order quantities (MOQ), packaging specifications, and international shipping options.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openQuoteModal('Export Quotation')}
                  className="bg-[#0077B6] hover:bg-[#0096C7] text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Export Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
                <strong className="text-white block text-sm font-semibold">Mihika Ayra Traders and Imports &amp; Exports</strong>
                <span>India | Import &amp; Export | Global Trade</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
