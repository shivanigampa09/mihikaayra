import React from 'react';

export const WhySubscribeSection: React.FC = () => {
  const highlights = [
    {
      emoji: '🔎',
      title: 'Product Sourcing',
      description: 'Identifying and vetting verified global manufacturers to procure top-grade commodities and industrial goods at competitive rates.',
    },
    {
      emoji: '🧪',
      title: 'Sample Confirmation',
      description: 'Rigorous pre-production sampling, laboratory testing, and prototype approvals ensuring full compliance before mass production.',
    },
    {
      emoji: '⏱️',
      title: 'Order & Production Follow-up',
      description: 'Real-time on-site milestone monitoring, factory scheduling, and transparent production progress updates from start to finish.',
    },
    {
      emoji: '🔍',
      title: 'Quality Inspection',
      description: 'Comprehensive multi-point quality control (IQC, IPQC, FQC) and lab certifications meeting international compliance benchmarks.',
    },
    {
      emoji: '🏬',
      title: 'Consolidation & Warehousing',
      description: 'Secure bonded storage and multi-supplier cargo consolidation to optimize shipping costs and streamline container loading.',
    },
    {
      emoji: '🚢',
      title: 'Shipping & Customs Clearance',
      description: 'End-to-end maritime and air transit documentation, duty clearance, and port handling with zero border delays.',
    },
    {
      emoji: '🏭',
      title: 'China Factory Visit',
      description: 'Dedicated physical factory audits, assembly line verifications, and supplier background checks across major manufacturing hubs.',
    },
    {
      emoji: '📥',
      title: 'Mixed Container Service',
      description: 'Flexible Less-than-Container Load (LCL) and mixed-item container grouping allowing diverse product procurement in a single shipment.',
    },
    {
      emoji: '✈️',
      title: 'Mixed Air Service',
      description: 'Expedited air cargo consolidation for multi-category and time-sensitive merchandise with competitive express airfreight tariffs.',
    },
    {
      emoji: '🏢',
      title: 'Supplier/Factory Finding',
      description: 'In-depth supplier discovery and due diligence matching your exact technical specifications with accredited manufacturing partners.',
    },
    {
      emoji: '💰',
      title: 'Price Negotiation',
      description: 'Strategic contract negotiations and direct factory-gate bargaining to secure the most advantageous commercial terms and volume discounts.',
    },
    {
      emoji: '🛍️',
      title: 'Product Procurement',
      description: 'Structured purchase order management, escrow safety, and seamless raw material or finished product acquisition worldwide.',
    },
    {
      emoji: '⚙️',
      title: 'OEM / ODM',
      description: 'Tailored original equipment and design manufacturing, bringing custom branded concepts to mass production with full IP protection.',
    },
    {
      emoji: '✏️',
      title: 'Product Design & Development',
      description: 'Creative product engineering, 3D prototyping, CAD modeling, and packaging conceptualization aligned with target market trends.',
    },
    {
      emoji: '🔗',
      title: 'Supply Chain Management',
      description: 'Resilient end-to-end supply chain architecture, demand planning, risk mitigation, and inventory flow optimization.',
    },
    {
      emoji: '🌐',
      title: 'International Logistics',
      description: 'Global multimodal freight forwarding by ocean, air, rail, and road connecting primary international trade lanes and ports.',
    },
    {
      emoji: '📑',
      title: 'Customs Declaration & Clearance',
      description: 'Accurate HS code classification, import/export declarations, tariff compliance, and regulatory liaison across destination borders.',
    },
    {
      emoji: '🛡️',
      title: 'Cargo Insurance',
      description: 'Comprehensive marine and transit insurance coverage protecting your shipments against damage, loss, and transit hazards.',
    },
    {
      emoji: '🎁',
      title: 'Retail Packaging',
      description: 'High-impact shelf-ready retail packaging, barcoding, custom labeling, and sustainable protective materials for retail readiness.',
    },
    {
      emoji: '🗣️',
      title: 'Translation',
      description: 'Bilingual contract interpretation, technical specification translation, and fluent cross-cultural negotiations without language barriers.',
    },
    {
      emoji: '🔑',
      title: 'Turnkey Project',
      description: 'Complete end-to-end trade execution from initial ideation and setup to final delivery, handing you a fully realized commercial operation.',
    },
  ];

  return (
    <section id="why-choose-us" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-slate-900 relative border-t border-b border-slate-200 overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#0077B6_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#031322] tracking-tight">
            Why Choose Mihika Ayra Traders
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Delivering trusted international import and export services with uncompromised quality, documentation support, and end-to-end global trade solutions.
          </p>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#0077B6] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4 relative z-10">
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-sky-50 text-3xl sm:text-4xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110 group-hover:bg-[#0077B6]/10">
                    <span>{item.emoji}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#031322] group-hover:text-[#0077B6] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
