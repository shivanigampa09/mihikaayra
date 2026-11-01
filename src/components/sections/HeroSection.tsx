import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
import tenderVid from '../../assets/videos/home-tender-vid.mp4';

export const HeroSection: React.FC = () => {
  const { openSearchModal } = useQuote();
  const [searchQuery, setSearchQuery] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Video autoplay prevented:', err);
        });
      }
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openSearchModal();
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#031322] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
                <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src={tenderVid} type="video/mp4" />
        </video>

                <div className="absolute inset-0 bg-gradient-to-b from-[#031322]/50 via-[#031322]/20 to-[#031322]/80 pointer-events-none" />
      </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.25)_0%,rgba(3,19,34,0)_70%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 my-auto">
        
        {/* Main Headline */}
        <h1 className="font-bold font-serif tracking-tight text-white leading-tight drop-shadow-2xl flex flex-col items-center justify-center gap-1.5 uppercase">
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-wider">
            MIHIKA AYRA
          </span>
          <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-serif text-white font-extrabold tracking-widest whitespace-nowrap drop-shadow-lg mt-1">
            TRADERS AND IMPORTS AND EXPORTS
          </span>
        </h1>

        {/* Detailed Company Introduction */}
        <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed max-w-4xl mx-auto drop-shadow-md">
          <strong className="font-semibold text-white">Mihika Ayra Traders &amp; Imports &amp; Exports</strong> is a global trade partner connecting businesses across international markets. We specialize in sourcing, importing, and exporting quality products while providing reliable trade solutions, trusted supplier networks, and seamless logistics to help businesses grow worldwide.
        </p>

        {/* Search Bar Container */}
        <div className="pt-2 max-w-3xl mx-auto w-full">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-2xl border border-white/30">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Products..."
              className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base px-5 py-3 focus:outline-none font-medium"
            />
            <button
              type="submit"
              className="bg-[#E63946] hover:bg-[#d62828] text-white p-3.5 sm:px-6 sm:py-3.5 rounded-xl transition-colors flex items-center justify-center shrink-0 shadow-md cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};
