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
      {/* 1. HERO GATEWAY SECTION */}
      <HeroSection />

      {/* 2. EXPLORE REGION (MAP SILHOUETTES) */}
      <ExploreRegionSection />

      {/* 3. IMPORTS AND EXPORTS SECTORS */}
      <TenderBySectorsSection />

      {/* 4. WHY CHOOSE MIHIKA AYRA TRADERS HIGHLIGHTS */}
      <WhySubscribeSection />

      {/* 5. WHO CAN BENEFIT */}
      <WhoCanBenefitSection />

      {/* 6. GLOBAL TESTIMONIALS */}
      <TestimonialsSection />
    </div>
  );
};


