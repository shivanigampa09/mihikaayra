import React from 'react';
import { FileText, SearchCheck, Package, Ship, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TradeTimelineSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'RFQ & Specification Analysis',
      desc: 'Buyer submits product requirement, quantity, HS code, and target port of destination.',
      icon: <FileText className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      step: '02',
      title: 'Sample Audit & Commercial Proforma',
      desc: 'Mihika Ayra dispatches approval samples and issues formal FOB/CIF proforma invoice with L/C terms.',
      icon: <SearchCheck className="w-5 h-5 text-[#00B4D8]" />
    },
    {
      step: '03',
      title: 'Quality Sourcing & Vacuum Packing',
      desc: 'Batch procurement from verified farms/factories, lab testing (COA), and nitrogen-flushed export packaging.',
      icon: <Package className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      step: '04',
      title: 'Customs Clearance & Container Loading',
      desc: 'EDI filing at Indian port (Chennai/Vizag/Nhava Sheva), phytosanitary/health certs, and container seal.',
      icon: <ShieldCheck className="w-5 h-5 text-[#00B4D8]" />
    },
    {
      step: '05',
      title: 'Oceanic Shipping & Live Tracking',
      desc: 'Dispatch via premier ocean lines with vessel telemetry tracking and bill of lading (B/L) release.',
      icon: <Ship className="w-5 h-5 text-[#D4AF37]" />
    },
    {
      step: '06',
      title: 'Destination Port Unloading & Delivery',
      desc: 'Smooth customs clearance at destination port and final delivery to buyer warehouse.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section className="py-20 bg-[#0A2540] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3 py-1 rounded-full inline-block border border-[#D4AF37]/30">
            Export Process Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
            6-Step Transparent Trade Process Timeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            How Mihika Ayra executes zero-defect international trade orders from inquiry to port destination.
          </p>
        </div>

        {/* TIMELINE STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 relative backdrop-blur-md hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-[#D4AF37]">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#0077B6] transition-colors">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-base font-bold font-serif text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
