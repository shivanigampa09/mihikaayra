import React from 'react';
import { SectorItem } from '../../types';
import { Download, Upload, Repeat, Wheat, UtensilsCrossed, Fish, Globe, Truck, Network, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

interface SectorCardProps {
  sector: SectorItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Download: <Download className="w-6 h-6" />,
  Upload: <Upload className="w-6 h-6" />,
  Repeat: <Repeat className="w-6 h-6" />,
  Wheat: <Wheat className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  Fish: <Fish className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
      {/* CARD TOP DECORATIVE HEADER */}
      <div className={`h-2 w-full bg-gradient-to-r ${sector.gradient}`} />

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* BADGE & ICON ROW */}
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#0D3B66]/10 text-[#0D3B66] flex items-center justify-center group-hover:bg-[#0D3B66] group-hover:text-[#D4AF37] transition-all duration-300 shadow-inner">
              {iconMap[sector.icon] || <Globe className="w-6 h-6" />}
            </div>

            <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-[#0077B6] group-hover:bg-[#0077B6] group-hover:text-white transition-colors">
              {sector.badgeText}
            </span>
          </div>

          <h3 className="text-xl font-bold font-serif text-[#0D3B66] group-hover:text-[#0077B6] transition-colors mb-1">
            {sector.title}
          </h3>
          <p className="text-xs font-semibold text-[#D4AF37] mb-3">
            {sector.subtitle}
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            {sector.description}
          </p>
        </div>

        {/* KEY HIGHLIGHTS LIST */}
        <div className="space-y-2 pt-3 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Capabilities:
          </span>
          <ul className="space-y-1.5">
            {sector.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM ACTION */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => openQuoteModal(`${sector.title} Query`)}
            className="w-full bg-slate-50 hover:bg-[#0D3B66] text-[#0D3B66] hover:text-[#D4AF37] font-bold text-xs py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-slate-200 hover:border-[#0D3B66]"
          >
            <span>Inquire Sector Trade</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
