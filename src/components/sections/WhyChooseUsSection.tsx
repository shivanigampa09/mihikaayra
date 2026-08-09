import React from 'react';
import { FeatureCard } from '../cards/FeatureCard';
import { ShieldCheck, Award, Zap, Users, Globe2, DollarSign, Headphones, Truck } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      iconName: 'ShieldCheck',
      title: 'Quality Assurance',
      description: 'Every consignment undergoes multi-stage laboratory testing, moisture checks, and pre-shipment inspections by SGS or Intertek.',
      badge: 'Certified'
    },
    {
      iconName: 'Award',
      title: 'International Standards',
      description: 'Full adherence to USFDA, EU Phytosanitary, FSSAI, APEDA, MPEDA, and ISO 22000 global food and safety regulations.',
      badge: 'Compliance'
    },
    {
      iconName: 'Zap',
      title: 'Fast Delivery & Reefer Shipping',
      description: 'Direct vessel carrier alliances (Maersk, MSC) ensuring prompt port clearance and sub-zero cold chain logistics.',
      badge: 'On-Time'
    },
    {
      iconName: 'Users',
      title: 'Trusted Local Suppliers',
      description: 'Direct procurement from verified farming cooperatives, spice yards, coastal marine hubs, and traditional confectioners.',
      badge: 'Direct Sourcing'
    },
    {
      iconName: 'Globe2',
      title: 'Global Trade Network',
      description: 'Established trade channels connecting Indian goods with B2B buyers across 45+ nations in America, Europe, Middle East & Asia.',
      badge: '45+ Countries'
    },
    {
      iconName: 'DollarSign',
      title: 'Best Competitive Pricing',
      description: 'Transparent FOB / CIF quotes with zero hidden fees, duty optimization, and bulk container cost advantages.',
      badge: 'Cost Savings'
    },
    {
      iconName: 'Headphones',
      title: 'Dedicated Trade Support',
      description: 'Personalized trade account managers guiding you through HS codes, L/C banking terms, and real-time container tracking.',
      badge: '24/7 Desk'
    },
    {
      iconName: 'Truck',
      title: 'Door-to-Door Logistics',
      description: 'Seamless multimodal transit from farm/factory floor to your destination warehouse under DDP / DDU terms.',
      badge: 'End-to-End'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66] tracking-tight">
            Why Choose Mihika Ayra
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <FeatureCard
              key={idx}
              iconName={feat.iconName}
              title={feat.title}
              description={feat.description}
              badge={feat.badge}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
