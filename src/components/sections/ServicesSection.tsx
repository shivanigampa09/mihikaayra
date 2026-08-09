import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_SERVICES } from '../../constants/servicesData';
import { ServiceCard } from '../cards/ServiceCard';
import { ArrowRight, Globe } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
            Import & Export Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66]">
            End-to-End International Trade Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From global sourcing and port customs clearance to vacuum export packaging and ocean freight logistics, Mihika Ayra handles every step of your trade supply chain.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
          >
            <span>Explore All Trade Services</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
