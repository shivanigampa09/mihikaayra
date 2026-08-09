import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import bambooImg from '../assets/images/bamboo_products_1785757801080.jpg';

const contactBgImg = bambooImg;

export const Disclaimer: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Disclaimer"
        subtitle="Legal limitations of liability and website terms of use."
        breadcrumbText="Disclaimer"
        bgImage={contactBgImg}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-6">
          <p>
            The information contained on the Mihika Ayra website (the "Service") is for general information purposes only. Mihika Ayra assumes no responsibility for errors or omissions in the contents of the Service.
          </p>
          
          <h2 className="text-xl font-bold text-[#0D3B66] font-serif mt-8 mb-4">1. General Disclaimer</h2>
          <p>
            In no event shall Mihika Ayra be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Mihika Ayra reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
          </p>
          
          <h2 className="text-xl font-bold text-[#0D3B66] font-serif mt-8 mb-4">2. Product Specifications & Imagery</h2>
          <p>
            While we make every effort to accurately display our products (including Honey, Spices, Jute Bags, and Seafood), the actual colors, packaging, and visual appearance may vary. The images used on this website are for representational purposes and may not precisely reflect the final bulk product shipped. Product specifications, technical data sheets, and certificates of analysis provided during the quotation phase supersede any general information listed on this website.
          </p>

          <h2 className="text-xl font-bold text-[#0D3B66] font-serif mt-8 mb-4">3. Health and Nutritional Information</h2>
          <p>
            Any health, nutritional, or wellness information provided regarding our agricultural commodities (such as Millets, Dry Fruits, and Honey) is for general educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Buyers are responsible for ensuring that the products meet the regulatory and health standards of their respective import countries.
          </p>

          <h2 className="text-xl font-bold text-[#0D3B66] font-serif mt-8 mb-4">4. External Links Disclaimer</h2>
          <p>
            The Mihika Ayra website may contain links to external websites that are not provided or maintained by or in any way affiliated with Mihika Ayra. Please note that Mihika Ayra does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
        </div>
      </div>
    </div>
  );
};
