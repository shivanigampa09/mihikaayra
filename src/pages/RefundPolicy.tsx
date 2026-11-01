import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { RotateCcw, AlertTriangle, ShieldCheck, CheckCircle2, FileText, HelpCircle } from 'lucide-react';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';

const contactBgImg = bambooImg;

export const RefundPolicy: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Refund & Cancellation Policy"
        subtitle="Transparent guidelines regarding bulk order cancellations, replacements, quality disputes, and shipping claims."
        breadcrumbText="Refund Policy"
        bgImage={contactBgImg}
        showCloseButton={true}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-10">
          
          {/* Header Summary Badge */}
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-[#0D3B66] text-[#D4AF37] rounded-xl shrink-0">
              <RotateCcw className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D3B66] font-serif">Mihika Ayra Global Quality Guarantee & Refund Policy</h3>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                As a premier international exporter of agro-commodities, traditional food products, IQF seafood, and artisanal goods, Mihika Ayra adheres strictly to internationally recognized trade dispute standards, Incoterms 2020, and quality control protocols.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-8">
            
            {/* SECTION 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <FileText className="w-5 h-5 text-[#0077B6]" />
                1. Order Cancellations & Modification Rules
              </h2>
              <p>
                Because bulk export orders involve custom agricultural procurement, nitrogen flash-freezing, custom private labeling, and port container booking, order cancellation policies are structured strictly according to production milestones:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Pre-Production Stage (Within 48 Hours):</strong> Orders may be cancelled with a 100% refund of advance deposit minus standard bank processing charges.</li>
                <li><strong>In-Production / Packaging Stage:</strong> Cancellations made after procurement or custom packaging has commenced are subject to a 25% restocking and raw material fee.</li>
                <li><strong>Post-Dispatch / Port Loading:</strong> Once a vessel Bill of Lading (B/L) is issued or goods are sealed inside shipping containers at port, cancellations cannot be processed under any circumstances.</li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <CheckCircle2 className="w-5 h-5 text-[#0077B6]" />
                2. Eligible Claims, Replacements & Credit Notes
              </h2>
              <p>
                Due to food safety and phytosanitary regulations, physical return of exported food commodities is generally prohibited. However, Mihika Ayra will issue full or partial credit notes, refund wire transfers, or dispatch replacement containers in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Discrepancy in Agreed Specifications:</strong> If delivered moisture levels, particle size, grain length, or grading fail to match the signed pre-shipment Quality Certificate (COA) / SGS inspection report.</li>
                <li><strong>Packaging Defect Caused by Exporter:</strong> Structural failure of nitrogen flush seals, defective vacuum pouches, or broken master cartons verified prior to port discharge.</li>
                <li><strong>Quantity Shortage:</strong> Verified physical container weight deficit exceeding agreed trade tolerance levels (+/- 1%).</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                3. Non-Refundable Scenarios & Freight Claims
              </h2>
              <p>
                Mihika Ayra shall not be liable for losses or quality degradation resulting from external transportation or buyer-end factors:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Customs rejection or demurrage delays at the destination port caused by missing buyer import permits or regulatory changes in the destination country.</li>
                <li>Temperature fluctuations inside reefer containers during marine voyage due to shipping line equipment failure (must be claimed against marine cargo insurance).</li>
                <li>Improper storage or pest infestation occurring after container unsealing at buyer's destination warehouse.</li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <ShieldCheck className="w-5 h-5 text-[#0077B6]" />
                4. Claim Filing Procedure & Required Evidence
              </h2>
              <p>
                To file an official trade claim, the buyer must notify our export support team within <strong>7 calendar days</strong> of container de-stuffing at destination port:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-slate-600">
                <li>Submit written notice to <strong>claims@mihikaayra.com</strong> quoting Purchase Order (PO) and Invoice number.</li>
                <li>Attach high-resolution photos/videos showing container seal number, outer carton labels, and defect details.</li>
                <li>Provide an independent third-party inspection report (e.g., SGS, Bureau Veritas) if claiming quality non-conformity.</li>
              </ol>
            </section>

            {/* SECTION 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <HelpCircle className="w-5 h-5 text-[#0077B6]" />
                5. Dispute Resolution & Settlement Timeline
              </h2>
              <p>
                Approved refunds are processed within <strong>14 to 21 business days</strong> via direct telegraphic transfer (TT) or Letter of Credit adjustment. All trade disputes are governed under international trade arbitration guidelines.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
