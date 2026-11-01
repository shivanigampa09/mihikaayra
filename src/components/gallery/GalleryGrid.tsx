import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../constants/galleryData';
import { GalleryItem } from '../../types';
import { Eye, MapPin } from 'lucide-react';
import { GalleryPopup } from './GalleryPopup';

export const GalleryGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Exports' | 'Marine & Food' | 'Spices & Agri' | 'Warehousing' | 'Packaging'>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filters: Array<'All' | 'Exports' | 'Marine & Food' | 'Spices & Agri' | 'Warehousing' | 'Packaging'> = [
    'All', 'Exports', 'Marine & Food', 'Spices & Agri', 'Warehousing', 'Packaging'
  ];

  const filteredItems = selectedFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex(activeItemIndex === 0 ? filteredItems.length - 1 : activeItemIndex - 1);
  };

  const handleNext = () => {
    if (activeItemIndex === null) return;
    setActiveItemIndex(activeItemIndex === filteredItems.length - 1 ? 0 : activeItemIndex + 1);
  };

  return (
    <div className="space-y-8">
      
      {/* Filter Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
              selectedFilter === filter
                ? 'bg-[#0D3B66] text-[#D4AF37] border-[#0D3B66] shadow-md scale-105'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-[#0D3B66]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveItemIndex(index)}
            className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />

            {/* Overlay On Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/90 via-[#0D3B66]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-5 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <span className="bg-[#D4AF37] text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold font-serif line-clamp-1 mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-[#00B4D8]">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Popup Modal */}
      <GalleryPopup
        item={activeItem}
        onClose={() => setActiveItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

    </div>
  );
};
