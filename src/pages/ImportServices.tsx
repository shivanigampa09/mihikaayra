import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Building2, CheckCircle2, ShieldCheck, Handshake, ArrowRight, PackageSearch } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import headerBg from '../assets/images/bamboo_products_1785757801080.jpg';
import importGraphicImg from '../assets/images/from_the_world_to_india_import.jpg';

export const ImportServices: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const whatWeDoList = [
    'International Product Sourcing',
    'Importing Products into India',
    'Exporting Indian Products to Global Markets',
    'Supplier and Manufacturer Coordination',
    'Bulk Purchasing and Wholesale Trade',
    'International Trade Partnerships'
  ];

  const whyChooseUsList = [
    'Focus on quality and competitive pricing',
    'Commitment to transparent business communication',
    'Interest in reliable, long-term supplier relationships',
    'Opportunities for global sourcing and trade collaboration'
  ];

  return (
    <div>
      <PageHeader
        title="Imports"
        subtitle="Connecting Global Suppliers with Indian Markets"
        breadcrumbText="Imports"
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
              Connecting Global Suppliers with Indian Markets
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Mihika Ayra Traders and Imports &amp; Exports is an India-based trading business focused on international sourcing, imports, and exports. We aim to connect reliable global suppliers with Indian businesses by sourcing quality products at competitive prices.
            </p>
          </div>

          {/* From the World to India Showcase Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group hover:shadow-2xl transition-all duration-300">
            <img
              src={importGraphicImg}
              alt="From the World to India - Importing Quality, Sourcing Globally, Delivering to India"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>

          {/* Our Business Overview Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold font-serif text-[#031322]">
                Our Business
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              We are interested in importing quality products from international markets into India and building long-term business relationships with manufacturers, suppliers, wholesalers, and trading companies worldwide.
            </p>
          </div>

          {/* Two-Column Grid: What We Do & Why Choose Us? */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* What We Do */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0077B6] flex items-center justify-center">
                    <PackageSearch className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#031322]">
                    What We Do
                  </h3>
                </div>
                <ul className="space-y-3">
                  {whatWeDoList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Choose Us? */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#031322]">
                    Why Choose Us?
                  </h3>
                </div>
                <ul className="space-y-3">
                  {whyChooseUsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Partner With Us Card */}
          <div className="bg-[#031322] text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <Handshake className="w-8 h-8 text-[#00B4D8]" />
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Partner With Us
                </h3>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Are you a manufacturer, supplier, or wholesaler looking to supply products to India? We welcome inquiries from international businesses interested in working with us.
              </p>
              <div className="bg-white/10 rounded-2xl p-5 border border-white/10 text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                Contact us to discuss your products, wholesale prices, minimum order quantities (MOQ), product specifications, and shipping options to India.
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openQuoteModal('Supply to India Consultation')}
                  className="bg-[#0077B6] hover:bg-[#0096C7] text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect With Our Import Desk</span>
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
