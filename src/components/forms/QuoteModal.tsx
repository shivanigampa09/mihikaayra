import React, { useState, useEffect } from 'react';
import { X, Send, Globe, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, selectedProductName, closeQuoteModal } = useQuote();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    quantity: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedProductName) {
      setFormData(prev => ({
        ...prev,
        message: `I am interested in receiving a formal commercial quote for: ${selectedProductName}`
      }));
    }
  }, [selectedProductName]);

  useEffect(() => {
    if (isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isQuoteModalOpen]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0D3B66] text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
            <Globe className="w-4 h-4" /> Global Trade RFQ Portal
          </div>
          <h3 className="text-xl font-bold font-serif text-white">
            {selectedProductName ? `Quote Request: ${selectedProductName}` : 'Request Bulk Commercial Quote'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Mihika Ayra Global Import & Export Solutions
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-serif">
                RFQ Inquiry Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your inquiry. Our export commercial department will email you the official proforma invoice and specification sheet shortly.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#0D3B66] text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-[#0077B6] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Destination Country"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Estimated Container / Quantity Required
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g., 500 Kg / 1 x 20ft Container"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Specific Specifications / Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Add target port of delivery, packaging requirements, or questions..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#0D3B66]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting RFQ...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>Request Proforma Quote</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is strictly protected by Mihika Ayra privacy terms.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
