import React, { useRef } from 'react';
import { TESTIMONIALS } from '../../constants/testimonialsData';
import { TestimonialCard } from '../cards/TestimonialCard';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <Heart className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>Client Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            Our Clients' Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-xl">
            Real feedback and trust shared by our trade partners and valued buyers.
          </p>
        </div>

        {/* Relative Slider Wrapper With Edge Arrows */}
        <div className="relative group/slider px-2 sm:px-8">
          
          {/* Left Edge Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-0 sm:-left-2 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-[#0077B6] text-white flex items-center justify-center transition-all border border-slate-700 hover:border-[#0077B6] shadow-2xl cursor-pointer backdrop-blur-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-[#D4AF37] group-hover/slider:text-white" />
          </button>

          {/* Right Edge Arrow Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-0 sm:-right-2 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/90 hover:bg-[#0077B6] text-white flex items-center justify-center transition-all border border-slate-700 hover:border-[#0077B6] shadow-2xl cursor-pointer backdrop-blur-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-[#D4AF37] group-hover/slider:text-white" />
          </button>

          {/* SIDE-SCROLLING HORIZONTAL CONTAINER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[85vw] sm:w-[380px] md:w-[420px] shrink-0 snap-start"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
