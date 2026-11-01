import React from 'react';
import { Award, Boxes, Target } from 'lucide-react';

export const WhoCanBenefitSection: React.FC = () => {
  const targetAudience = [
    {
      icon: Award,
      title: 'MSMEs Seeking Global Contracts',
      description: 'Indian exporters looking to diversify markets and increase global visibility in emerging and developed international economies.',
      accentColor: 'from-amber-500 to-orange-500',
    },
    {
      icon: Boxes,
      title: 'Indian Manufacturers',
      description: 'Small and medium manufacturing enterprises targeting public procurement contracts abroad to secure high-volume, reliable revenue streams.',
      accentColor: 'from-sky-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Dynamic Service & Trade Firms',
      description: 'Export houses and trade intermediaries exploring new verticals, bulk commodity buyer RFQs, and strategic international partnerships.',
      accentColor: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="benefits" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#E3F2FD] text-slate-900 relative border-t border-b border-sky-100/60 overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#0077B6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#031322] tracking-tight">
            Who Can Benefit?
          </h2>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetAudience.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 sm:p-9 border border-sky-100 shadow-md hover:shadow-2xl hover:border-[#0077B6] transition-all duration-300 space-y-6 text-center flex flex-col items-center hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Accent Bar On Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Larger Icon Container */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-sky-50 text-[#0077B6] group-hover:bg-[#0077B6] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-10 h-10 sm:w-11 sm:h-11" />
                </div>

                <h3 className="text-xl font-bold text-[#031322] group-hover:text-[#0077B6] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

