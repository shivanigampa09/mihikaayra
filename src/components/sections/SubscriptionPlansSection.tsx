import React, { useState } from 'react';
import { Check, ArrowUpRight, Crown, Shield } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

export const SubscriptionPlansSection: React.FC = () => {
  const { openQuoteModal } = useQuote();
  const [userCategory, setUserCategory] = useState<'member' | 'non-member'>('member');

  const plans = [
    {
      id: 'quarterly',
      title: 'Quarterly',
      subtitle: '3 Months Access',
      memberPrice: '₹9,999',
      nonMemberPrice: '₹11,999',
      downloadsPerDay: '50 Downloads Per Day',
      isPopular: false,
      badgeText: 'Quarterly Trial',
    },
    {
      id: 'half-yearly',
      title: 'Half Yearly',
      subtitle: '6 Months Access',
      memberPrice: '₹14,999',
      nonMemberPrice: '₹19,999',
      downloadsPerDay: '75 Downloads Per Day',
      isPopular: true,
      badgeText: 'Most Popular',
    },
    {
      id: 'yearly',
      title: 'Yearly',
      subtitle: '12 Months Full Access',
      memberPrice: '₹24,999',
      nonMemberPrice: '₹29,999',
      downloadsPerDay: '100 Downloads Per Day',
      isPopular: true,
      badgeText: 'Best Value',
    },
  ];

  const commonFeatures = [
    '1 User Allocation per Account',
    '10+ Serviced Global Regions',
    'Unlimited Tender Search Service',
    '25+ Business Sectors Covered',
    'Unlimited Advance Filtration',
  ];

  return (
    <section id="plans" className="py-20 bg-[#EBF4F8] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
            Subscription Plans
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Flexible plans to suit businesses of all sizes with early-bird discounts available.
          </p>

          {/* TOGGLE FOR MEMBER / NON-MEMBER PRICING */}
          <div className="pt-4 inline-flex items-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setUserCategory('member')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                userCategory === 'member'
                  ? 'bg-[#0077B6] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              FSSAI / APEDA / Member Rate
            </button>
            <button
              onClick={() => setUserCategory('non-member')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                userCategory === 'non-member'
                  ? 'bg-[#0077B6] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Non-Member Rate
            </button>
          </div>
        </div>

        {/* 3 PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const currentPrice = userCategory === 'member' ? plan.memberPrice : plan.nonMemberPrice;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative shadow-lg ${
                  plan.isPopular
                    ? 'border-[#E63946] ring-2 ring-[#E63946]/20 scale-102'
                    : 'border-slate-200 hover:border-[#0077B6]'
                }`}
              >
                {/* POPULAR BADGE */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5" />
                    <span>{plan.badgeText}</span>
                  </div>
                )}

                <div>
                  {/* PLAN TITLE */}
                  <div className="text-center pb-6 border-b border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900">{plan.title}</h3>
                    <span className="text-xs text-slate-500 font-medium block mt-1">{plan.subtitle}</span>

                    <div className="mt-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {currentPrice}
                      </span>
                      <span className="text-xs text-slate-500 font-medium block mt-1">
                        + 18% GST / Billed {plan.title}
                      </span>
                    </div>
                  </div>

                  {/* FEATURES LIST */}
                  <div className="py-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0D3B66] bg-amber-500/10 p-2.5 rounded-xl border border-[#D4AF37]/30">
                      <Check className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                      <span>{plan.downloadsPerDay}</span>
                    </div>

                    {commonFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SUBSCRIBE BUTTON */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => openQuoteModal(`Subscription Plan: ${plan.title} (${userCategory})`)}
                    className="w-full bg-[#0077B6] hover:bg-[#005f92] text-white font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* DISCLAIMER TEXT */}
        <p className="text-center text-xs text-slate-500 mt-8 font-medium">
          Note: All prices listed above are exclusive of applicable GST. Members receive institutional subsidization upon verification.
        </p>

      </div>
    </section>
  );
};
