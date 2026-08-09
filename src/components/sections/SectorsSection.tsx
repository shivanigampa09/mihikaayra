import React, { useState } from 'react';
import { MIHIKA_AYRA_SECTORS } from '../../constants/sectorsData';
import { SectorCard } from '../cards/SectorCard';
import { Globe, Layers } from 'lucide-react';

export const SectorsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'trade' | 'products' | 'logistics'>('all');

  const filteredSectors = MIHIKA_AYRA_SECTORS.filter(sector => {
    if (activeTab === 'trade') return ['import', 'export', 'merchant', 'consulting'].includes(sector.category);
    if (activeTab === 'products') return ['agricultural', 'food', 'marine'].includes(sector.category);
    if (activeTab === 'logistics') return ['global_trade', 'logistics', 'supply_chain'].includes(sector.category);
    return true;
  });

  return (
    <section className="py-20 bg-[#0D3B66] text-white relative overflow-hidden">
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-4 py-1.5 rounded-full text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>Comprehensive Cross-Border Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-wide">
            MIHIKA AYRA SECTORS
          </h2>
          <p className="text-xl font-semibold text-[#00B4D8] uppercase tracking-widest font-sans">
            IMPORTS & EXPORTS
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light pt-1">
            Bridging international markets with specialized trade infrastructure across inbound imports, outbound exports, agricultural commodities, marine harvests, and global supply chain consulting.
          </p>
        </div>

        {/* TABS FILTER */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All 10 Sectors' },
            { id: 'trade', label: 'Import & Export Operations' },
            { id: 'products', label: 'Agri, Food & Marine' },
            { id: 'logistics', label: 'Logistics & Supply Chain' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'bg-[#D4AF37] text-slate-950 border-[#D4AF37] shadow-lg scale-105'
                  : 'bg-white/10 text-slate-200 border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SECTOR CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSectors.map(sector => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </div>

      </div>

    </section>
  );
};
