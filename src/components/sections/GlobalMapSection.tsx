import React from 'react';
import { Globe, MapPin, Anchor, CheckCircle2 } from 'lucide-react';

export const GlobalMapSection: React.FC = () => {
  const tradeHubs = [
    { country: 'United States & Canada', ports: 'New York, Los Angeles, Toronto', status: 'Active Reefer & Container Shipments' },
    { country: 'United Arab Emirates & GCC', ports: 'Jebel Ali (Dubai), Abu Dhabi, Dammam', status: 'Daily Ocean & Air Cargo' },
    { country: 'European Union', ports: 'Hamburg, Rotterdam, Antwerp, Valencia', status: 'EU Food Safety & ASTA Compliant' },
    { country: 'United Kingdom', ports: 'Felixstowe, Southampton, London Gateway', status: 'Ethnic Stores & Wholesale Networks' },
    { country: 'South East Asia', ports: 'Singapore, Port Klang, Bangkok, Ho Chi Minh', status: 'Marine Harvest & Grain Exports' },
    { country: 'Australia & New Zealand', ports: 'Sydney, Melbourne, Auckland', status: 'AQIS & Biosecurity Certified' }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
            Global Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66]">
            Connecting Indian Ports with Key International Trade Hubs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our strategic port alliances at Chennai, Vizag, Nhava Sheva, and Hyderabad ICD enable seamless sea container freight and express air cargo across 6 major global continents.
          </p>
        </div>

        {/* HUBS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradeHubs.map((hub, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D3B66] text-[#D4AF37] flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif text-[#0D3B66]">
                    {hub.country}
                  </h3>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Key Ports: {hub.ports}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{hub.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
