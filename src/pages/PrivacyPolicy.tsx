import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ShieldCheck, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';

const contactBgImg = bambooImg;

export const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding your data, global export communications, and corporate privacy."
        breadcrumbText="Privacy Policy"
        bgImage={contactBgImg}
        showCloseButton={true}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 space-y-10">
          
          {/* Header Summary Badge */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-[#0D3B66] text-[#D4AF37] rounded-xl shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D3B66] font-serif">Mihika Ayra Global Data Protection Commitment</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Effective Date: August 2026. This Privacy Policy governs all international trade transactions, bulk order inquiries, RFQ submissions, and digital communications conducted through Mihika Ayra Imports & Exports.
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-8">
            
            {/* SECTION 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <FileText className="w-5 h-5 text-[#0077B6]" />
                1. Information We Collect
              </h2>
              <p>
                When you engage with Mihika Ayra for export contracts, bulk inquiries, or custom private label manufacturing, we collect essential corporate and personal business data necessary for fulfilling international trade compliance:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Corporate & Contact Identification:</strong> Company legal name, trade license numbers, import/export codes (IEC), contact person name, designation, business email, physical office, and warehouse shipping addresses.</li>
                <li><strong>Financial & Transactional Data:</strong> Letter of Credit (LC) details, wire transfer references, billing addresses, purchase orders, and customs documentation parameters.</li>
                <li><strong>Technical & Website Usage Data:</strong> IP address, browser type, device identifiers, referral URLs, and interactions with our online catalog and quote request forms.</li>
                <li><strong>Communication Logs:</strong> Email correspondences, WhatsApp business messages, RFQ specifications, packaging customization details, and trade agreement terms.</li>
              </ul>
            </section>

            {/* SECTION 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <Lock className="w-5 h-5 text-[#0077B6]" />
                2. How We Use Your Information
              </h2>
              <p>
                Your data is exclusively utilized to conduct legitimate cross-border commerce and ensure seamless trade execution:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Processing bulk RFQ quotes, issuing official Proforma Invoices (PI), and executing export contracts.</li>
                <li>Managing freight logistics, customs clearance documentation, bill of lading (B/L) generation, and phytosanitary certification.</li>
                <li>Verifying creditworthiness and conducting mandatory Know Your Customer (KYC) / Anti-Money Laundering (AML) checks required by international banking protocols.</li>
                <li>Sending crucial order updates, shipment tracking numbers, vessel departure schedules, and port arrival notifications.</li>
              </ul>
            </section>

            {/* SECTION 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <Globe className="w-5 h-5 text-[#0077B6]" />
                3. Data Sharing & Third-Party Disclosure
              </h2>
              <p>
                Mihika Ayra strict policy mandates that we <strong>NEVER</strong> sell, rent, or lease customer data to third-party marketing companies. Data is disclosed strictly on a need-to-know basis to trusted trade partners:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Customs & Regulatory Authorities:</strong> Export-import regulatory authorities, port officials, and agricultural inspection agencies (e.g., FSSAI, APEDA, US FDA, EU authorities).</li>
                <li><strong>Logistics Partners:</strong> International shipping lines, freight forwarders, container haulage services, and customs brokers.</li>
                <li><strong>Financial Institutions:</strong> Partner commercial banks handling international letters of credit, trade financing, and escrow settlements.</li>
              </ul>
            </section>

            {/* SECTION 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <Eye className="w-5 h-5 text-[#0077B6]" />
                4. Data Security & Retention Standards
              </h2>
              <p>
                We employ bank-grade 256-bit SSL encryption across all digital transaction channels and maintain strict administrative, physical, and technical safeguards. All trade documents and financial records are retained in compliance with statutory Indian and international export audit regulations for a standard period of 7 years.
              </p>
            </section>

            {/* SECTION 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0D3B66] font-serif flex items-center gap-2 border-b border-slate-200 pb-2">
                <Bell className="w-5 h-5 text-[#0077B6]" />
                5. Your Legal Privacy Rights & Contact
              </h2>
              <p>
                As a valued international client, you reserve the right to request access to, correction of, or deletion of your corporate contact records from our active marketing lists at any time.
              </p>
              <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 space-y-2 mt-4">
                <h4 className="font-bold text-[#0D3B66]">Privacy Helpdesk & Data Controller:</h4>
                <p className="text-xs text-slate-600">
                  <strong>Company:</strong> Mihika Ayra Imports & Exports<br />
                  <strong>Corporate Email:</strong> info@mihikaayra.com<br />
                  <strong>Headquarters:</strong> Plot No. 42, Export Processing Zone, Hyderabad, Telangana, India.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
