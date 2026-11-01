import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ExploreRegionSection } from '../components/sections/ExploreRegionSection';
import { TenderBySectorsSection } from '../components/sections/TenderBySectorsSection';
import { WhySubscribeSection } from '../components/sections/WhySubscribeSection';
import { WhoCanBenefitSection } from '../components/sections/WhoCanBenefitSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#031322]">
      {/* 1. Hero Gateway Section */}
      <HeroSection />

      {/* 2. EXPLORE REGION (MAP SILHOUETTES) */}
      <ExploreRegionSection />

      {/* 3. Imports And Exports Sectors */}
      <TenderBySectorsSection />

      {/* 4. Why Choose Mihika Ayra Traders Highlights */}
      <WhySubscribeSection />

      {/* 5. Who Can Benefit */}
      <WhoCanBenefitSection />

      {/* 6. Global Testimonials */}
      <TestimonialsSection />
    </div>
  );
};


