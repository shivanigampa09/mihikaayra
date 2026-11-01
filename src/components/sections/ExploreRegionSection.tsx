import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import asiaImg from '../../assets/images/asia.png';
import africaImg from '../../assets/images/africa.png';
import northAmericaImg from '../../assets/images/north-america.png';
import southAmericaImg from '../../assets/images/south-america.png';
import antarcticaImg from '../../assets/images/antarctica.png';
import europeImg from '../../assets/images/europe.png';
import australiaOceaniaImg from '../../assets/images/australia-oceania.png';

interface RegionItem {
  id: string;
  name: string;
  gradientId: string;
  gradientFrom: string;
  gradientTo: string;
  paths: string[];
  imageUrl?: string;
}

export const ExploreRegionSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

    const regions: RegionItem[] = [
    {
      id: 'asia',
      name: 'Asia',
      gradientId: 'grad-asia',
      gradientFrom: '#FF4B4B',
      gradientTo: '#FF2E63',
      imageUrl: asiaImg,
      paths: [
        'M 12 22 C 35 15, 75 12, 95 28 C 102 38, 88 52, 78 58 C 65 52, 58 65, 52 78 C 42 90, 38 72, 28 58 C 20 52, 8 38, 12 22 Z'
      ]
    },
    {
      id: 'africa',
      name: 'Africa',
      gradientId: 'grad-africa',
      gradientFrom: '#FFAA00',
      gradientTo: '#E67E22',
      imageUrl: africaImg,
      paths: [
        'M 35 15 C 50 12, 70 18, 80 28 C 88 38, 78 48, 72 55 C 65 65, 58 78, 48 92 C 40 100, 32 92, 30 80 C 26 65, 18 52, 12 38 C 10 28, 18 18, 28 15 Z'
      ]
    },
    {
      id: 'north-america',
      name: 'North America',
      gradientId: 'grad-north-america',
      gradientFrom: '#2ECC71',
      gradientTo: '#27AE60',
      imageUrl: northAmericaImg,
      paths: [
        'M 20 12 C 35 8, 70 12, 85 24 C 92 32, 75 42, 60 40 C 48 38, 45 45, 42 50 C 38 42, 22 35, 12 25 C 8 18, 12 14, 20 12 Z'
      ]
    },
    {
      id: 'south-america',
      name: 'South America',
      gradientId: 'grad-south-america',
      gradientFrom: '#3498DB',
      gradientTo: '#2980B9',
      imageUrl: southAmericaImg,
      paths: [
        'M 52 62 C 68 60, 88 72, 82 88 C 74 102, 58 118, 48 115 C 42 105, 46 88, 45 78 C 44 70, 48 64, 52 62 Z'
      ]
    },
    {
      id: 'antarctica',
      name: 'Antarctica',
      gradientId: 'grad-antarctica',
      gradientFrom: '#00C4D4',
      gradientTo: '#0097A7',
      imageUrl: antarcticaImg,
      paths: [
        'M 18 35 C 30 20, 70 20, 82 35 C 90 50, 78 70, 65 75 C 50 80, 30 75, 18 60 C 12 50, 10 40, 18 35 Z'
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      gradientId: 'grad-europe',
      gradientFrom: '#9B59B6',
      gradientTo: '#8E44AD',
      imageUrl: europeImg,
      paths: [
        'M 18 22 C 38 12, 70 14, 88 24 C 94 36, 74 48, 64 56 C 48 62, 32 70, 18 54 C 10 42, 10 30, 18 22 Z'
      ]
    },
    {
      id: 'australia',
      name: 'Australia',
      gradientId: 'grad-australia',
      gradientFrom: '#F39C12',
      gradientTo: '#D35400',
      imageUrl: australiaOceaniaImg,
      paths: [
        'M 22 30 C 35 18, 68 16, 88 28 C 96 40, 88 68, 75 78 C 58 85, 38 88, 22 76 C 12 62, 10 44, 22 30 Z'
      ]
    }
  ];

  return (
    <section id="tenders" className="py-12 bg-white text-slate-900 border-t border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#031322] tracking-wide">
            Explore Regional Trade Hubs
          </h2>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Previous regions"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Next regions"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        
        <div
          ref={scrollRef}
          className="flex items-start gap-8 sm:gap-12 overflow-x-auto scrollbar-none py-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {regions.map((reg) => (
            <div
              key={reg.id}
              className="flex-none w-64 sm:w-72 flex flex-col items-center justify-center group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Map Image Container */}
              <div className="w-60 h-44 sm:w-68 sm:h-52 flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100/70 rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-[#0077B6]/40 group-hover:bg-white transition-all duration-300">
                {reg.imageUrl && !failedImages[reg.id] ? (
                  <img
                    src={reg.imageUrl}
                    alt={reg.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    onError={() => handleImageError(reg.id)}
                  />
                ) : (
                  <svg viewBox="0 0 100 120" className="w-full h-full filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <defs>
                      <linearGradient id={reg.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={reg.gradientFrom} />
                        <stop offset="100%" stopColor={reg.gradientTo} />
                      </linearGradient>
                    </defs>
                    {reg.paths.map((p, i) => (
                      <path
                        key={i}
                        d={p}
                        fill={`url(#${reg.gradientId})`}
                        className="opacity-95 group-hover:opacity-100 transition-opacity"
                      />
                    ))}
                  </svg>
                )}
              </div>

              {/* Title Below Map */}
              <p className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#0077B6] transition-colors text-center mt-3 leading-snug">
                {reg.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
