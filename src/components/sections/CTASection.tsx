import React from 'react';
import { Globe, ShieldCheck, Mail } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const CTASection: React.FC = () => {
  const { openQuoteModal } = useQuote();

  return (
    <section className="py-16 bg-gradient-to-r from-[#0A2540] via-[#0D3B66] to-[#004E89] text-white relative overflow-hidden border-y-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
          <Globe className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            Expand Your International Product Supply Line
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-white max-w-3xl mx-auto leading-tight">
          Ready to Import Premium Indian Commodities or Food Products?
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
          Get in touch with Mihika Ayra export specialists for instant commercial price quotes, HS code customs advisory, and certified sample dispatches.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openQuoteModal('Bottom CTA Quote')}
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#c29e2f] text-slate-950 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Request Bulk Container RFQ</span>
          </button>

          <a
            href="mailto:info@mihikaayra.com"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-wider border border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#00B4D8]" />
            <span>Email Commercial Desk</span>
          </a>
        </div>

      </div>
    </section>
  );
};
