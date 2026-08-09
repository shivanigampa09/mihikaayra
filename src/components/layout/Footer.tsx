import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, PhoneCall, X } from 'lucide-react';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPhoneModal(true);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-14 pb-8 relative overflow-hidden font-sans">
      
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          
          {/* BRAND COLUMN (5 COLS) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3.5 group">
              <Logo size="lg" showText={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg font-normal pt-1">
              Mihika Ayra Traders is a trusted import and export company providing reliable global trade solutions. We deal in a wide range of products, ensuring quality, timely delivery, and competitive pricing. Our mission is to build long-term business relationships through trust, transparency, and excellent service while connecting businesses across international markets.
            </p>
          </div>

          {/* QUICK LINKS (2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/" onClick={handleHomeClick} className="hover:text-[#38BDF8] transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-[#38BDF8] transition-colors">Features</Link></li>
              <li><Link to="/benefits" className="hover:text-[#38BDF8] transition-colors">Benefits</Link></li>
              <li><Link to="/products" className="hover:text-[#38BDF8] transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-[#38BDF8] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* POLICIES (2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-slate-800 pb-2">
              Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/privacy" className="hover:text-[#38BDF8] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#38BDF8] transition-colors">Disclaimer</Link></li>
              <li><Link to="/refund" className="hover:text-[#38BDF8] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* CONTACT INFORMATION (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif border-b border-slate-800 pb-2">
              Contact Information
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-300">
              {/* GOOGLE MAPS LOCATION LINK */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kothur+jenda+kumarpally+market+Hanamkonda+506001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#38BDF8] transition-colors group/loc cursor-pointer"
                title="Click to view location on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#E63946] flex-shrink-0 mt-0.5 group-hover/loc:scale-110 transition-transform" />
                <span className="leading-relaxed underline-offset-4 group-hover/loc:underline">
                  Kothur jenda kumarpally market Hanamkonda, 506001
                </span>
              </a>

              {/* PHONE LINK WITH CALL / WHATSAPP MODAL SELECTION */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                <span>
                  Phone:{' '}
                  <button
                    onClick={handlePhoneClick}
                    className="hover:text-[#38BDF8] text-white font-mono font-medium underline underline-offset-4 decoration-slate-600 hover:decoration-[#38BDF8] transition-colors cursor-pointer"
                  >
                    70132 58972
                  </button>
                </span>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                <span>Email: <a href="mailto:info@mihikaayra.com" className="hover:text-white font-mono font-medium">info@mihikaayra.com</a></span>
              </div>
              
              {/* SOCIAL MEDIA LINKS */}
              <div className="pt-3 border-t border-slate-700/50 flex gap-3 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#38BDF8] hover:text-slate-900 transition-colors" title="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#38BDF8] hover:text-slate-900 transition-colors" title="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#38BDF8] hover:text-slate-900 transition-colors" title="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://wa.me/917013258972" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-slate-900 transition-colors" title="WhatsApp">
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-6 flex flex-col items-center justify-center text-xs text-slate-300 gap-1 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-300 tracking-wider">
            Mihika Ayra © 2026 All Rights Reserved
          </p>
          <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
            §1 N∆N!
          </p>
        </div>

      </div>

      {/* POPUP MODAL FOR PHONE OPTION CHOICE (CALL OR WHATSAPP) */}
      {showPhoneModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#1C2541] border border-slate-700 rounded-2xl p-6 max-w-sm w-full text-white shadow-2xl relative space-y-5">
            <button
              onClick={() => setShowPhoneModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <h3 className="text-lg font-bold font-serif text-white">Contact 70132 58972</h3>
              <p className="text-xs text-slate-300">How would you like to connect with Mihika Ayra Traders?</p>
            </div>

            <div className="space-y-3 pt-2">
              {/* CALL BUTTON */}
              <a
                href="tel:7013258972"
                onClick={() => setShowPhoneModal(false)}
                className="w-full bg-[#0077B6] hover:bg-[#0096C7] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors text-sm shadow-md"
              >
                <PhoneCall className="w-5 h-5 text-white" />
                <span>Call +91 70132 58972</span>
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917013258972"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPhoneModal(false)}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-colors text-sm shadow-md"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            <button
              onClick={() => setShowPhoneModal(false)}
              className="w-full text-center text-xs text-slate-400 hover:text-slate-200 transition-colors pt-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

