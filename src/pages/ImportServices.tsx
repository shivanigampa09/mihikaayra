import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { DownloadCloud, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { CTASection } from '../components/sections/CTASection';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';

export const ImportServices: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div>
      <PageHeader
        title="Inbound Import Solutions"
        subtitle="Global raw material sourcing, customs tariff advisory, port clearances at Indian ports, and bonded logistics."
        breadcrumbText="Import Services"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
                Inbound Trade Infrastructure
              </span>
              <h2 className="text-3xl font-bold font-serif text-[#0D3B66]">
                Seamless Procurement & Port Clearance into India
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mihika Ayra assists Indian manufacturers, food processors, and institutional buyers in importing raw materials, machinery, specialty ingredients, and consumer goods from certified overseas producers.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  'Supplier background verification and pre-shipment factory audit',
                  'Indian Customs ITC (HS) classification & duty optimization',
                  'Port clearance at Nhava Sheva (JNPT), Chennai, Vizag, and ICD Hyderabad',
                  'FSSAI, BIS, and CDSCO import permit clearance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#0077B6] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openQuoteModal('Import Consultation')}
                  className="bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Request Import Consultation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl">
                <img
                  src={bambooImg}
                  alt="Import Operations Port Cargo"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
};
