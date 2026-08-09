import React, { useState, useRef, useEffect } from 'react';
import { Mail, MessageSquare, Send, X } from 'lucide-react';

interface QuoteNowButtonProps {
  itemName: string;
  className?: string;
}

export const QuoteNowButton: React.FC<QuoteNowButtonProps> = ({ itemName, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const companyEmail = 'info@mihikaayra.com';
  const whatsappNumber = '917013258972';

  const emailSubject = `Quote Request: ${itemName}`;
  const emailBody = `Hello Mihika Ayra Traders,\n\nI would like to request a price quote for: ${itemName}\n\nPlease share pricing & export details.\n\nThank you!`;
  const emailLink = `mailto:${companyEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const whatsappMessage = `Hello Mihika Ayra Traders, I want to request a Quote for: ${itemName}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Close popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer ${className}`}
      >
        <Send className="w-3.5 h-3.5" />
        <span>Quote Now</span>
      </button>

      {/* COMPACT POPOVER WITH 2 SMALL OPTIONS (MAIL & WHATSAPP) */}
      {isOpen && (
        <div className="absolute right-0 bottom-full mb-2 z-[9999] w-48 sm:w-52 bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 text-slate-800">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 px-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Choose Quote Option</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {/* MAIL OPTION */}
            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/80 hover:bg-blue-600 text-blue-950 hover:text-white transition-colors text-xs font-semibold group cursor-pointer shadow-2xs"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 shrink-0 transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="leading-tight font-bold">Mail</span>
                <span className="text-[9px] opacity-75 font-mono">info@mihikaayra.com</span>
              </div>
            </a>

            {/* WHATSAPP OPTION */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/80 hover:bg-emerald-600 text-emerald-950 hover:text-white transition-colors text-xs font-semibold group cursor-pointer shadow-2xs"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 shrink-0 transition-colors">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="leading-tight font-bold">WhatsApp</span>
                <span className="text-[9px] opacity-75 font-mono">+91 7013258972</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
