import React from 'react';

export const WhySubscribeSection: React.FC = () => {
  const highlights = [
    {
      emoji: '🌍',
      title: 'Global Import & Export Solutions',
      description: 'Comprehensive cross-border sourcing, procurement, and international commodity trading tailored for global markets.',
    },
    {
      emoji: '📦',
      title: 'All Products – Import & Export Services',
      description: 'End-to-end trade handling across agricultural produce, spices, seafood, jute textiles, energy, and manufactured goods.',
    },
    {
      emoji: '✅',
      title: 'Trusted Quality Assurance',
      description: 'Strict adherence to USFDA, FSSAI, APEDA, ISO, and international quality standards for guaranteed purity.',
    },
    {
      emoji: '🚢',
      title: 'Safe & On-Time Delivery',
      description: 'Streamlined ocean and air freight logistics with reliable vessel scheduling to ensure zero delivery delays.',
    },
    {
      emoji: '💼',
      title: 'Competitive Pricing',
      description: 'Direct farm-gate and manufacturer sourcing guaranteeing highly competitive CIF and FOB container pricing.',
    },
    {
      emoji: '🤝',
      title: 'Reliable Business Partnerships',
      description: 'Transparent contracts, long-term buyer relationships, and dedicated trade account managers for every client.',
    },
    {
      emoji: '📄',
      title: 'Complete Documentation Support',
      description: 'Seamless handling of Phytosanitary certificates, Certificate of Origin, Bill of Lading, and customs clearance.',
    },
    {
      emoji: '🌐',
      title: 'Worldwide Trade Network',
      description: 'Expansive buyer and supplier trade connections spanning across 150+ countries and major international ports.',
    },
    {
      emoji: '📞',
      title: 'Fast Customer Support',
      description: 'Responsive customer service and rapid turnarounds for custom RFQ inquiries and trade consultations.',
    },
  ];

  return (
    <section id="why-choose-us" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] text-slate-900 relative border-t border-b border-slate-200 overflow-hidden">
      
      {/* BACKGROUND DECORATIVE ACCENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(#0077B6_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#031322] tracking-tight">
            Why Choose Mihika Ayra Traders
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Delivering trusted international import and export services with uncompromised quality, documentation support, and global reach.
          </p>
        </div>

        {/* 9 HIGHLIGHT CARDS GRID WITH EMOJI ICONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#0077B6] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
              >
                {/* HOVER GLOW GRADIENT ACCENT */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4 relative z-10">
                  {/* EMOJI ICON BADGE */}
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

