import React from 'react';
import { Globe } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0D3B66] flex flex-col items-center justify-center text-white">
      <div className="relative flex items-center justify-center">
        {/* Pulsing ring */}
        <div className="w-24 h-24 rounded-full border-2 border-[#00B4D8] border-t-[#D4AF37] animate-spin" />
        <div className="absolute">
          <Logo size="md" />
        </div>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold font-serif text-white tracking-widest">
          MIHIKA AYRA
        </h3>
        <p className="text-xs uppercase tracking-[0.25em] text-[#00B4D8] mt-1 font-semibold flex items-center justify-center gap-1.5">
          <Globe className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" /> Global Import & Export Solutions
        </p>
      </div>
    </div>
  );
};
