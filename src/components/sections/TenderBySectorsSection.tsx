import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

import spicesPowdersImg from '../../assets/images/category-spices-powders.jpeg';
import mangoPickleJarImg from '../../assets/images/category-pickles.jpeg';
import mysorePakImg from '../../assets/images/category-snacks.png';
import milletProsoPackImg from '../../assets/images/category-millets.png';
import juteBagsImg from '../../assets/images/category-jute-bags.png';
import honeyImg from '../../assets/images/honey.png';
import seafoodEggsMeatImg from '../../assets/images/sector-seafood-eggs-meat.png';
import dryFruitsImg from '../../assets/images/category-dry-fruits.png';
import cosmeticsImg from '../../assets/images/category-cosmetics.png';
import handcraftsImg from '../../assets/images/category-handcrafts.png';
import fabricsImg from '../../assets/images/category-fabrics.png';
import gamingImg from '../../assets/images/category-gaming.png';
import interiorsImg from '../../assets/images/category-interiors.png';
import automobilesImg from '../../assets/images/sector-automobiles.png';
import industrialImg from '../../assets/images/industrial_ev_batteries_1786176288833.jpg';
import medicalImg from '../../assets/images/sector-medical-materials.png';
import engineeringImg from '../../assets/images/auto_spare_parts_1786176260166.jpg';

const podiesSectorImg = spicesPowdersImg;
const pickleSectorImg = mangoPickleJarImg;
const sweetsCollectionImg = mysorePakImg;
const milletsSectorImg = milletProsoPackImg;
const juteBagsSectorImg = juteBagsImg;
const honeySectorImg = honeyImg;
const dryFruitsSectorImg = dryFruitsImg;
const cosmeticsSectorImg = cosmeticsImg;
const handcraftSectorImg = handcraftsImg;
const gamingSectorImg = gamingImg;
const fabricsSectorImg = fabricsImg;
const interiorsSectorImg = interiorsImg;

interface SectorItem {
  id: string;
  title: string;
  bgImg: string;
}

export const TenderBySectorsSection: React.FC = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sectors: SectorItem[] = [
    {
      id: 'automobiles',
      title: 'Auto Mobile',
      bgImg: automobilesImg,
    },
    {
      id: 'industrial',
      title: 'Industrial Equipment',
      bgImg: industrialImg,
    },
    {
      id: 'medical-materials',
      title: 'Medical Materials',
      bgImg: medicalImg,
    },
    {
      id: 'engineering-materials',
      title: 'Engineering Materials',
      bgImg: engineeringImg,
    },
    {
      id: 'gaming-products',
      title: 'Gaming',
      bgImg: gamingSectorImg,
    },
    {
      id: 'interiors',
      title: 'Home & Commercial Interiors',
      bgImg: interiorsSectorImg,
    },
    {
      id: 'textiles',
      title: 'Fabrics',
      bgImg: fabricsSectorImg,
    },
    {
      id: 'handcraft',
      title: 'Hand Crafts',
      bgImg: handcraftSectorImg,
    },
    {
      id: 'cosmetics',
      title: 'Herbal Cosmetics',
      bgImg: cosmeticsSectorImg,
    },
    {
      id: 'dry-fruits',
      title: 'Dry Fruits',
      bgImg: dryFruitsSectorImg,
    },
    {
      id: 'fishes',
      title: 'Seafood',
      bgImg: seafoodEggsMeatImg,
    },
    {
      id: 'honey',
      title: 'Honey',
      bgImg: honeySectorImg,
    },
    {
      id: 'millets',
      title: 'Millets',
      bgImg: milletsSectorImg,
    },
    {
      id: 'sweets',
      title: 'Sweets & Snacks',
      bgImg: sweetsCollectionImg,
    },
    {
      id: 'pickles',
      title: 'Pickles',
      bgImg: pickleSectorImg,
    },
    {
      id: 'podies',
      title: 'Powders & Spices',
      bgImg: podiesSectorImg,
    },
    {
      id: 'jute-bags',
      title: 'Jute Bags',
      bgImg: juteBagsSectorImg,
    },
  ];

  const itemsVisible = isMobile ? 2 : 2;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : sectors.length - itemsVisible));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 <= sectors.length - itemsVisible ? prev + 1 : 0));
  };

  const handleSectorClick = (sectorId: string) => {
    if (sectorId === 'pickles') {
      navigate('/pickles');
    } else if (sectorId === 'sweets') {
      navigate('/sweets');
    } else if (sectorId === 'millets') {
      navigate('/millets');
    } else if (sectorId === 'snacks') {
      navigate('/snacks');
    } else if (sectorId === 'podies') {
      navigate('/podies');
    } else if (sectorId === 'jute-bags' || sectorId === 'jug-bags') {
      navigate('/jute-bags');
    } else if (sectorId === 'honey') {
      navigate('/honey');
    } else if (sectorId === 'fishes') {
      navigate('/fishes');
    } else if (sectorId === 'dry-fruits') {
      navigate('/dry-fruits');
    } else if (sectorId === 'cosmetics') {
      navigate('/cosmetics');
    } else if (sectorId === 'handcraft' || sectorId === 'handcrafts') {
      navigate('/handcraft');
    } else if (sectorId === 'textiles' || sectorId === 'fabrics') {
      navigate('/fabrics');
    } else if (sectorId === 'gaming-products' || sectorId === 'gaming') {
      navigate('/gaming');
    } else if (sectorId === 'interiors' || sectorId === 'home-interiors') {
      navigate('/interiors');
    } else if (sectorId === 'automobiles') {
      navigate('/automobiles');
    } else if (sectorId === 'industrial') {
      navigate('/industrial');
    } else if (sectorId === 'medical-materials' || sectorId === 'medical') {
      navigate('/medical-materials');
    } else if (sectorId === 'engineering-materials' || sectorId === 'engineering') {
      navigate('/engineering-materials');
    } else {
      navigate(`/products?category=${sectorId}`);
    }
  };

  const visibleSectors = sectors.slice(startIndex, startIndex + itemsVisible);

  return (
    <section id="imports-exports-sectors" className="py-12 sm:py-16 bg-[#E3F2FD] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title Header */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold font-serif text-[#031322] tracking-normal">
            Exports and Imports Sectors
          </h2>
        </div>

        {/* MOBILE & TABLET CAROUSEL SLIDER (lg:hidden) */}
        <div className="relative lg:hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-slate-50 transition-transform active:scale-95 cursor-pointer"
            aria-label="Previous sectors"
          >
            <ChevronLeft className="w-5 h-5 text-[#031322]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-xl border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-slate-50 transition-transform active:scale-95 cursor-pointer"
            aria-label="Next sectors"
          >
            <ChevronRight className="w-5 h-5 text-[#031322]" />
          </button>

          {/* 2-COLUMN CAROUSEL ON MOBILE */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {visibleSectors.map((sector) => (
              <div
                key={sector.id}
                onClick={() => handleSectorClick(sector.id)}
                className="group relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl active:shadow-2xl transition-all duration-300 flex flex-col justify-between p-4 active:scale-[0.98]"
              >
                                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 group-active:scale-110 brightness-105 contrast-105 saturate-110"
                  style={{ backgroundImage: `url(${sector.bgImg})` }}
                />

                {/* Gradient Overlay For Crisp Readability Without Dulling The Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/10 group-hover:from-slate-950/75 transition-colors" />

                {/* TITLE AT TOP-LEFT */}
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight drop-shadow-md group-hover:text-[#D4AF37] group-active:text-[#D4AF37] transition-colors">
                    {sector.title}
                  </h3>
                </div>

                {/* SEE DETAILS AT BOTTOM-LEFT */}
                <div className="relative z-10 flex items-center gap-1 text-[11px] font-semibold text-white/90 drop-shadow group-hover:text-[#D4AF37] group-active:text-[#D4AF37] transition-colors">
                  <span>Explore Sector</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LAPTOP & DESKTOP VIEW: FULL 3-COLUMN GRID DISPLAYING ALL SECTORS */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              onClick={() => handleSectorClick(sector.id)}
              className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between p-6"
            >
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105 saturate-110"
                style={{ backgroundImage: `url(${sector.bgImg})` }}
              />

                            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/25 to-slate-950/85 group-hover:from-slate-950/90 transition-colors" />

              {/* TITLE AT TOP-LEFT WITH HIGH VISIBILITY BACKDROP */}
              <div className="relative z-10">
                <div className="bg-slate-950/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 inline-block shadow-xl">
                  <h3 className="text-lg lg:text-xl font-bold text-white leading-tight drop-shadow-lg group-hover:text-[#D4AF37] transition-colors">
                    {sector.title}
                  </h3>
                </div>
              </div>

              {/* SEE DETAILS AT BOTTOM-LEFT */}
              <div className="relative z-10 flex items-center gap-1.5 text-xs font-semibold text-white drop-shadow group-hover:text-[#D4AF37] transition-colors">
                <span>Explore Sector</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
