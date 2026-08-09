import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const ExploreContractsCTASection: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <section className="py-20 bg-[#D8ECF3] text-slate-900 relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-slate-900 tracking-tight">
          Be the First to Explore Global Contracts
        </h2>

        {/* PARAGRAPH */}
        <p className="text-sm sm:text-base md:text-lg text-slate-700 font-normal leading-relaxed max-w-3xl mx-auto">
          Join now and gain access to hundreds of new verified opportunities every week. Let Mihika Ayra be your strategic partner in international trade and business expansion.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openQuoteModal('CTA Subscribe Now')}
            className="w-full sm:w-auto bg-[#0077B6] hover:bg-[#005f92] text-white font-bold px-8 py-4 rounded-full text-sm shadow-xl transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Subscribe Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => openQuoteModal('Request Portal Demo')}
            className="w-full sm:w-auto bg-[#031322] hover:bg-[#072138] text-white font-bold px-8 py-4 rounded-full text-sm shadow-xl transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-[#D4AF37]" />
            <span>Request a Demo</span>
          </button>
        </div>

      </div>
    </section>
  );
};
