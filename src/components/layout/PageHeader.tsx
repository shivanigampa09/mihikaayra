import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, X } from 'lucide-react';
import defaultHeaderBg from '../../assets/images/bamboo_products_1785757801080.jpg';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbText?: string;
  bgImage?: string;
  compact?: boolean;
  showCloseButton?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbText,
  bgImage = defaultHeaderBg,
  compact = false,
  showCloseButton = true
}) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    setTimeout(() => {
      const sectorsSection = document.getElementById('imports-exports-sectors') || document.getElementById('sectors');
      if (sectorsSection) {
        sectorsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div className={`relative bg-[#0D3B66] text-white overflow-hidden ${compact ? 'pt-20 pb-6 sm:pt-24 md:pt-28 lg:pt-32 lg:pb-8' : 'pt-22 pb-8 sm:pt-28 md:pt-32 lg:pt-36 lg:pb-12'}`}>
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Gradient Decorative Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0D3B66]/90 to-[#004E89]/80" />
      <div className="absolute bottom-0 inset-x-0 h-1 border-b-2 border-[#D4AF37]" />

      {/* TOP-RIGHT CLOSE ("WRONG" SYMBOL) BUTTON */}
      {showCloseButton && (
        <button
          onClick={handleClose}
          title="Close page and go back"
          aria-label="Close page and go back"
          className="absolute top-20 right-4 sm:top-22 sm:right-6 lg:top-28 lg:right-10 z-40 bg-[#0D3B66] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-slate-950 p-2 sm:p-2.5 rounded-full border-2 border-[#D4AF37]/80 hover:border-slate-950 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group flex items-center justify-center"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="sr-only">Close</span>
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-[#00B4D8] font-semibold mb-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#D4AF37]">{breadcrumbText || title}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white tracking-wide mb-2">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
