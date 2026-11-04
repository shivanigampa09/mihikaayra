import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { CTASection } from '../components/sections/CTASection';

import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';
import redChilliPowderImg from '../assets/images/black-pepper.jpeg';

const aboutMihikaImg = redChilliPowderImg;
const aboutBgImg = bambooImg;

export const About: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="About Mihika Ayra"
        subtitle="Bridging Indian Agriculture, Marine Harvest & Heritage Confectionery with Global Markets."
        breadcrumbText="About Us"
        bgImage={aboutBgImg}
      />

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66]">
                Premier International Trade & Export House Headquartered in Hyderabad
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>MIHIKA AYRA</strong> is a integrated merchant exporter and international trade enterprise. We are dedicated to procuring, quality-testing, packaging, and shipping India's finest agricultural, culinary, and artisanal commodities across the globe.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our product portfolio encompasses authentic heritage confections like Mahua blossom Ippa Puvvu sweets, ASTA-grade Lakadong turmeric and Guntur red chillies, IQF Vannamei frozen shrimp, eco-friendly golden jute bags, single-origin Darjeeling tea, Araku plantation coffee, and organic botanical hair care cosmetics.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold font-serif text-[#0D3B66] block">100% Legal</span>
                  <span className="text-xs text-slate-500 font-medium">USFDA, FSSAI, APEDA & MPEDA Certified</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold font-serif text-[#D4AF37] block">45+ Nations</span>
                  <span className="text-xs text-slate-500 font-medium">Global Ocean Freight & Reefer Reach</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={aboutMihikaImg} alt="Mihika Ayra Store Infrastructure" className="w-full h-[450px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-[#0D3B66]/90 backdrop-blur-md rounded-2xl border border-[#D4AF37]/30">
                  <span className="text-xs font-bold text-[#D4AF37] block">Mihika Ayra Store & Trade Hub</span>
                  <p className="text-xs text-slate-200 mt-1">
                    Chilkur Road, Beside HP Petrol Bunk, Aziz Nagar, Hyderabad, Telangana, India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="py-20 bg-[#0D3B66] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] bg-white/10 px-3 py-1 rounded-full inline-block">
              Core Corporate Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Mission, Vision & Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37] text-slate-950 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white">Our Mission</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                To deliver uncompromised, laboratory-tested Indian agricultural, marine, and culinary commodities to global buyers with total transparency, error-free export documentation, and on-time ocean container delivery.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8] text-slate-950 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white">Our Vision</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                To become the premier globally recognized Indian import-export benchmark, celebrated for empowering local farming cooperatives and delivering pure, heritage products to international shores.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400 text-slate-950 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white">Our Core Values</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                Zero-tolerance for food adulteration, strict regulatory compliance, sustainable eco-friendly packaging, fair trade pricing for primary producers, and lasting B2B buyer relationships.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Infrastructure & Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
                Infrastructure & Quality Control
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66]">
                Modern Processing, Vacuum Barrier Packaging & Sub-Zero Cold Storage
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our export operations center in Telangana works in synchronization with accredited processing units in Guntur (spices), Vizag (seafood), and Kolkata (jute).
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Nitrogen-flushed vacuum barrier pouches extending sweet & spice shelf life',
                  'HACCP & BRC certified marine seafood cold-chain at -18°C',
                  'ISPM-15 heat-treated wooden palletization for container stability',
                  'FSSAI, USFDA, and Phytosanitary certification for every batch'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F8F9FA] rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6">
              <h3 className="text-xl font-bold font-serif text-[#0D3B66] border-b border-slate-200 pb-3">
                Key Export Accreditations
              </h3>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="text-[#0D3B66] block font-bold mb-1">FSSAI License</strong>
                  <span className="text-slate-500 block text-[11px]">Central Food Safety Authority Certification</span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="text-[#0D3B66] block font-bold mb-1">APEDA Member</strong>
                  <span className="text-slate-500 block text-[11px]">Agri & Processed Food Export Authority</span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="text-[#0D3B66] block font-bold mb-1">MPEDA Registered</strong>
                  <span className="text-slate-500 block text-[11px]">Marine Products Export Development</span>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <strong className="text-[#0D3B66] block font-bold mb-1">USFDA Registered</strong>
                  <span className="text-slate-500 block text-[11px]">US Food & Drug Import Prior Notice</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Reusable Section */}
      <WhyChooseUsSection />

      {/* Cta Banner */}
      <CTASection />
    </div>
  );
};
