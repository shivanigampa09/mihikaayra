import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import logoImg from '../../assets/images/mihika-ayra-logo.jpeg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = false, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const logoDimensions = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-18 h-18 sm:w-22 sm:h-22',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className={`relative flex items-center justify-center overflow-hidden shrink-0 ${logoDimensions[size]}`}>
        {!imgError ? (
          <img 
            src={logoImg} 
            alt="MIHIKA AYRA Logo" 
            className="w-full h-full object-contain rounded-lg drop-shadow-md brightness-105 contrast-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0D3B66] to-[#031322] flex items-center justify-center text-[#D4AF37] rounded-lg">
            <Globe className="w-6 h-6 animate-pulse" />
          </div>
        )}
      </div>
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold font-serif tracking-wider text-white leading-tight text-sm sm:text-base">
            MIHIKA AYRA
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#38BDF8] tracking-wider uppercase whitespace-nowrap">
            TRADERS & IMPORTS & EXPORTS
          </span>
        </div>
      )}
    </div>
  );
};
