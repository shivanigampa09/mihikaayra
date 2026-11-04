import React from 'react';
import { ContactForm } from '../forms/ContactForm';
import { COMPANY_INFO } from '../../constants/companyInfo';
import { MapPin, Mail, MessageSquare, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0D3B66]">
            Contact Mihika Ayra Global Trade Desk
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Reach out directly for commercial inquiries, export sample requests, or custom import consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: STORE ADDRESS & DETAILS (5 COLS) */}
          <div className="lg:col-span-5 bg-[#0D3B66] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Globe className="w-64 h-64 text-[#00B4D8] -mr-16 -mt-16" />
            </div>

            <div className="relative z-10 border-b border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {COMPANY_INFO.storeName}
              </h3>
            </div>

            <div className="space-y-4 text-xs relative z-10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-[#00B4D8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold mb-0.5">Official Address</strong>
                  <span className="text-slate-200 leading-relaxed block">
                    {COMPANY_INFO.address.fullAddress}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold mb-0.5">WhatsApp Export Lines</strong>
                  <div className="space-y-1 font-mono">
                    {COMPANY_INFO.contacts.whatsapp.map((num) => (
                      <a
                        key={num}
                        href={`https://wa.me/${num.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-slate-200 hover:text-[#25D366]"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-[#00B4D8] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold mb-0.5">Official Email</strong>
                  <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="text-slate-200 hover:text-[#D4AF37]">
                    {COMPANY_INFO.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold mb-0.5">Working Hours</strong>
                  <span className="text-slate-200 block">
                    {COMPANY_INFO.workingHours.weekdays}
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="pt-4 relative z-10">
              <span className="text-[11px] font-bold text-slate-300 block mb-2">Location Map (Aziz Nagar):</span>
              <div className="rounded-xl overflow-hidden border border-white/20 h-44 shadow-md">
                <iframe
                  title="Mihika Ayra Store Location Map"
                  src={COMPANY_INFO.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};
