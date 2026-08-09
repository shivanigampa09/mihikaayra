import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Ship, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { CTASection } from '../components/sections/CTASection';

import bambooImg from "../assets/images/bamboo_products_1785757801080.jpg";
import redChilliPowderImg from "../assets/images/black-pepper.jpeg";
import woodenCraftsImg from "../assets/images/wooden_handicrafts_1785757750067.jpg";
import prawnsImg from "../assets/images/prawns.jpeg";
import aloeveraGelImg from "../assets/images/aloevera_gel.jpeg";
import giftItemsImg from "../assets/images/gift_items_1785757932694.jpg";

export const ExportServices: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <div>
      <PageHeader
        title="Outbound Export Operations"
        subtitle="Sourcing, vacuum barrier packaging, laboratory COA testing, phytosanitary certs, and ocean container freight."
        breadcrumbText="Export Services"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
                Global Export Infrastructure
              </span>
              <h2 className="text-3xl font-bold font-serif text-[#0D3B66]">
                Exporting Certified Indian Goods to 45+ Nations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We handle the complete export cycle for agricultural produce, marine seafood, authentic confections, and handcrafted artisan goods. Every shipment is backed by accredited lab test reports and full regulatory compliance.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  'USFDA prior notice, EU Phytosanitary & Health Certificates',
                  'FOB, CFR, CIF, DDP & DDU shipping terms with full insurance',
                  'Nitrogen-flushed vacuum barrier pouches & reefer container cold-chains',
                  'Custom Private Label branding (White Labeling) for international chains'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openQuoteModal('Export Quotation')}
                  className="bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Request Export Proforma Quote</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-4 border-slate-100 shadow-xl">
                <img
                  src={bambooImg}
                  alt="Export Shipping Containers"
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
