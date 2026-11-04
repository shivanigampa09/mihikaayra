import React from 'react';
import { X, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryPopupProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryPopup: React.FC<GalleryPopupProps> = ({ item, onClose, onPrev, onNext }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black text-white p-2 rounded-full border border-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Area With Navigation Arrows */}
        <div className="relative md:w-2/3 bg-black flex items-center justify-center min-h-[300px] md:min-h-[450px]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-full object-contain"
          />

          {/* PREV / NEXT BUTTONS */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#0077B6] text-white p-2.5 rounded-full backdrop-blur-sm transition-colors"
            title="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#0077B6] text-white p-2.5 rounded-full backdrop-blur-sm transition-colors"
            title="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Image Details Sidebar */}
        <div className="md:w-1/3 p-6 flex flex-col justify-between space-y-4 bg-[#0D3B66]">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37] text-slate-950 mb-3">
              {item.category}
            </span>

            <h3 className="text-xl font-bold font-serif text-white mb-2">
              {item.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-[#00B4D8] mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 text-[10px] text-slate-400">
            Mihika Ayra Global Import & Export Gallery Archive
          </div>
        </div>

      </div>
    </div>
  );
};
