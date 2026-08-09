import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import africanImg from '../../assets/images/african.png';
import americasImg from '../../assets/images/americas.png';
import asianImg from '../../assets/images/asian.png';
import australiaImg from '../../assets/images/australia.png';
import anzImg from '../../assets/images/australia-and-new-zealand.png';
import centralAsiaImg from '../../assets/images/central-asia.png';
import eastAsiaImg from '../../assets/images/east-asia.png';
import europeImg from '../../assets/images/europe.png';
import middleEastImg from '../../assets/images/middle-east.png';
import oceaniaImg from '../../assets/images/oceania.png';

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

  // EXACT REGIONAL MAP SILHOUETTE GEOMETRIES & IMAGES MATCHING REGIONAL HUBS
  const regions: RegionItem[] = [
    {
      id: 'africa',
      name: 'African',
      gradientId: 'grad-africa-video',
      gradientFrom: '#FFAA00',
      gradientTo: '#FF2E63',
      imageUrl: africanImg,
      paths: [
        'M 35 15 C 50 12, 70 18, 80 28 C 88 38, 78 48, 72 55 C 65 65, 58 78, 48 92 C 40 100, 32 92, 30 80 C 26 65, 18 52, 12 38 C 10 28, 18 18, 28 15 Z'
      ]
    },
    {
      id: 'americas',
      name: 'American',
      gradientId: 'grad-americas-video',
      gradientFrom: '#FF007F',
      gradientTo: '#7928CA',
      imageUrl: americasImg,
      paths: [
        'M 20 12 C 35 8, 70 12, 85 24 C 92 32, 75 42, 60 40 C 48 38, 45 45, 42 50 C 38 42, 22 35, 12 25 C 8 18, 12 14, 20 12 Z',
        'M 42 50 C 44 54, 48 58, 52 62 C 48 64, 44 60, 42 50 Z',
        'M 52 62 C 68 60, 88 72, 82 88 C 74 102, 58 118, 48 115 C 42 105, 46 88, 45 78 C 44 70, 48 64, 52 62 Z'
      ]
    },
    {
      id: 'asia',
      name: 'Asian',
      gradientId: 'grad-asia-video',
      gradientFrom: '#1E3C72',
      gradientTo: '#2A5298',
      imageUrl: asianImg,
      paths: [
        'M 12 22 C 35 15, 75 12, 95 28 C 102 38, 88 52, 78 58 C 65 52, 58 65, 52 78 C 42 90, 38 72, 28 58 C 20 52, 8 38, 12 22 Z'
      ]
    },
    {
      id: 'australia',
      name: 'Australia',
      gradientId: 'grad-australia-video',
      gradientFrom: '#F7B731',
      gradientTo: '#A55EEA',
      imageUrl: australiaImg,
      paths: [
        'M 22 30 C 35 18, 68 16, 88 28 C 96 40, 88 68, 75 78 C 58 85, 38 88, 22 76 C 12 62, 10 44, 22 30 Z'
      ]
    },
    {
      id: 'anz',
      name: 'Australia & New Zealand',
      gradientId: 'grad-anz-video',
      gradientFrom: '#A8E063',
      gradientTo: '#56AB2F',
      imageUrl: anzImg,
      paths: [
        'M 15 28 C 28 18, 55 16, 70 26 C 78 38, 72 60, 60 70 C 48 76, 32 78, 20 68 C 10 54, 8 38, 15 28 Z'
      ]
    },
    {
      id: 'central-asia',
      name: 'Central Asia',
      gradientId: 'grad-central-asia-video',
      gradientFrom: '#D35400',
      gradientTo: '#2980B9',
      imageUrl: centralAsiaImg,
      paths: [
        'M 18 20 C 45 12, 82 18, 88 35 C 80 55, 62 68, 40 65 C 24 60, 12 40, 18 20 Z'
      ]
    },
    {
      id: 'east-asia',
      name: 'East Asia',
      gradientId: 'grad-east-asia-video',
      gradientFrom: '#76B852',
      gradientTo: '#8E2DE2',
      imageUrl: eastAsiaImg,
      paths: [
        'M 20 18 C 48 12, 82 22, 88 42 C 76 60, 52 70, 36 55 C 20 45, 14 30, 20 18 Z'
      ]
    },
    {
      id: 'europe',
      name: 'European',
      gradientId: 'grad-europe-video',
      gradientFrom: '#E100FF',
      gradientTo: '#7F00FF',
      imageUrl: europeImg,
      paths: [
        'M 18 22 C 38 12, 70 14, 88 24 C 94 36, 74 48, 64 56 C 48 62, 32 70, 18 54 C 10 42, 10 30, 18 22 Z'
      ]
    },
    {
      id: 'middle-east',
      name: 'Middle Eastern',
      gradientId: 'grad-middle-east-video',
      gradientFrom: '#00B4DB',
      gradientTo: '#8E2DE2',
      imageUrl: middleEastImg,
      paths: [
        'M 22 18 C 48 12, 84 20, 88 38 C 78 55, 68 82, 52 86 C 34 76, 28 52, 22 18 Z'
      ]
    },
    {
      id: 'oceania',
      name: 'Oceania',
      gradientId: 'grad-oceania-video',
      gradientFrom: '#11998E',
      gradientTo: '#38EF7D',
      imageUrl: oceaniaImg,
      paths: [
        'M 18 24 C 32 14, 52 18, 48 38 C 32 44, 18 34, 12 24 Z'
      ]
    }
  ];

  return (
    <section id="tenders" className="py-12 bg-white text-slate-900 border-t border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER TITLE MATCHING THE VIDEO */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#031322] tracking-wide">
            Explore Regional Trade Hubs
          </h2>

          {/* CAROUSEL ARROWS */}
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

        {/* BORDERLESS HORIZONTAL TRACK MATCHING EXACTLY THE REFERENCE VIDEO */}
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
              {/* MAP IMAGE CONTAINER */}
              <div className="w-60 h-44 sm:w-68 sm:h-52 flex items-center justify-center p-3 bg-gradient-to-br from-slate-50 to-slate-100/70 rounded-2xl border border-slate-200/80 shadow-sm group-hover:shadow-xl group-hover:border-[#0077B6]/40 group-hover:bg-white transition-all duration-300">
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

              {/* TITLE BELOW MAP */}
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
