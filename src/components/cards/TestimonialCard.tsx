import React from 'react';
import { TestimonialItem } from '../../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-slate-800/90 rounded-3xl p-7 border border-slate-700/80 shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between relative h-full group text-slate-100">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700/60 group-hover:text-[#D4AF37]/20 transition-colors fill-current pointer-events-none" />

      <div className="relative z-10 space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-slate-600'}`}
            />
          ))}
        </div>

        {/* Comment Text */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-light">
          "{testimonial.comment}"
        </p>
      </div>

      {/* USER AUTHOR INFO (TEXT ONLY, NO PROFESSION, NO PERSON IMAGE) */}
      <div className="pt-4 border-t border-slate-700/80 mt-5">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm font-bold text-white truncate font-serif">
            {testimonial.name}
          </h4>
          <span className="text-base shrink-0" title={testimonial.country}>
            {testimonial.flag}
          </span>
        </div>
        <span className="text-[11px] text-slate-300 block mt-1 font-medium">
          {testimonial.country}
        </span>
      </div>
    </div>
  );
};
