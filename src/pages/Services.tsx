import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ALL_SERVICES } from '../constants/servicesData';
import { ServiceCard } from '../components/cards/ServiceCard';
import { TradeTimelineSection } from '../components/sections/TradeTimelineSection';
import { CTASection } from '../components/sections/CTASection';

export const Services: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Import & Export Trade Services"
        subtitle="Global sourcing, customs clearance, vacuum packaging, merchant export, and ocean freight logistics."
        breadcrumbText="Services"
      />

      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
              Full Spectrum Trade Capabilities
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#0D3B66]">
              End-to-End Overseas Trade Management
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mihika Ayra manages complex import-export regulations, phytosanitary certifications, custom packaging, and port logistics with zero compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* Process Timeline */}
      <TradeTimelineSection />

      {/* Cta */}
      <CTASection />
    </div>
  );
};
