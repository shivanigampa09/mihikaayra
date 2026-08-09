import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';
import aboutBannerBg from '../../assets/images/bamboo_products_1785757801080.jpg';
import aboutMihikaImg from '../../assets/images/black-pepper.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT IMAGE COLLAGE (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={aboutMihikaImg}
                alt="Mihika Ayra Global Operations"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-[#0D3B66]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/30">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                  Established Excellence
                </span>
                <p className="text-xs font-semibold text-slate-100">
                  Headquartered in Hyderabad, Telangana, serving international buyers in North America, Europe, Middle East & Asia-Pacific.
                </p>
              </div>
            </div>

            {/* FLOATING YEARS BADGE */}
            <div className="absolute -top-6 -right-6 bg-[#0D3B66] text-white p-5 rounded-2xl shadow-2xl border-2 border-[#D4AF37] hidden sm:block">
              <span className="text-3xl font-extrabold font-serif text-[#D4AF37] block">
                100%
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-200">
                Certified Export Quality
              </span>
            </div>
          </div>

          {/* RIGHT TEXT CONTENT (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66] leading-tight">
                Pioneering Trusted Cross-Border Trade & Quality Commodities
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>MIHIKA AYRA</strong> is a leading premier import & export house based in Hyderabad, India. We act as a trusted bridge connecting smallholder agricultural clusters, marine processors, spice growers, and traditional confectioners with global wholesale buyers.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              From our famous heritage Ippa Puvvu sweets and Lakadong turmeric to IQF Vannamei shrimp and eco-friendly laminated jute textiles, every export consignment undergoes strict multi-stage quality control, vacuum packaging, and regulatory certification.
            </p>

            {/* KEY HIGHLIGHTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Direct Farm & Factory Sourcing',
                'USFDA & FSSAI Compliant Packaging',
                'APEDA & MPEDA Export Licenses',
                'Temperature Controlled Reefer Shipping',
                'Custom Private Label (White Label) B2B',
                'Single Window Port Customs Clearance'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTON LINK */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg"
              >
                <span>Read Our Mission & Values</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
