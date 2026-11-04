import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productCategory: 'Sweets',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to Cloud Firestore database if Firebase is configured
    if (db) {
      try {
        await addDoc(collection(db, 'contact_inquiries'), {
          ...formData,
          createdAt: serverTimestamp(),
        });
      } catch (err) {
        console.error('Error saving inquiry to database:', err);
      }
    }

    const emailSubject = `Query from ${formData.fullName}`;
    const messageBody = `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct Category: ${formData.productCategory}\n\nQuery / Message:\n${formData.message}`;
    
    // Trigger mailto link
    window.location.href = `mailto:${COMPANY_INFO.contacts.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(messageBody)}`;
    
    // Trigger WhatsApp in new tab
    if (COMPANY_INFO.contacts.whatsapp && COMPANY_INFO.contacts.whatsapp.length > 0) {
      const whatsappNum = COMPANY_INFO.contacts.whatsapp[0].replace(/[^0-9]/g, '');
      window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(emailSubject + '\n\n' + messageBody)}`, '_blank');
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-serif text-emerald-900">
          Message Sent Successfully!
        </h3>
        <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
          Thank you, <strong>{formData.fullName}</strong>. Your email client and WhatsApp have been opened to send your message directly to us. We will get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              productCategory: 'Sweets',
              message: ''
            });
          }}
          className="bg-[#0D3B66] text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#0077B6] transition-colors cursor-pointer"
        >
          Send Another Query
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
      <div className="border-b border-slate-100 pb-3 mb-2">
        <h3 className="text-xl font-bold font-serif text-[#0D3B66]">
          Send Your Queries
        </h3>
        <p className="text-xs text-slate-500">
          Have a question or request? Fill out the details below to reach us directly via Email and WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g., Alexander Wright"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D3B66] focus:ring-1 focus:ring-[#0D3B66] transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., alex@globaltrade.com"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D3B66] focus:ring-1 focus:ring-[#0D3B66] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Phone / WhatsApp Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g., +1 (555) 019-2834"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D3B66] focus:ring-1 focus:ring-[#0D3B66] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Product Category of Interest
        </label>
        <select
          name="productCategory"
          value={formData.productCategory}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D3B66] focus:ring-1 focus:ring-[#0D3B66] bg-white transition-colors"
        >
          <option value="Sweets">Sweets & Ippa Puvvu Prasad</option>
          <option value="Spices">Spices & Curcumin Powders</option>
          <option value="Sea Food">IQF Frozen Prawns & Seafood</option>
          <option value="Pickles">Andhra Pickles & Podis</option>
          <option value="Jute Bags">Eco Laminated Jute Bags</option>
          <option value="Gaming Products">Handcrafted Wooden Chess & Board Games</option>
          <option value="Millets">Millets & Unpolished Grains</option>
          <option value="Tea">Darjeeling & Assam Teas</option>
          <option value="Coffee">Arabica & Robusta Coffee Beans</option>
          <option value="Cosmetics">Herbal Hair Care & Oils</option>
          <option value="Other">Other Custom Commodities</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">
          Inquiry Message & Specifications <span className="text-rose-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe required quantities, port of delivery, packaging specifications, or target delivery timeline..."
          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#0D3B66] focus:ring-1 focus:ring-[#0D3B66] transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Processing Submission...</span>
        ) : (
          <>
            <Send className="w-4 h-4 text-[#D4AF37]" />
            <span>Submit</span>
          </>
        )}
      </button>
    </form>
  );
};
