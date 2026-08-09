import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { CTASection } from '../components/sections/CTASection';

export const Gallery: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Export Operations Gallery"
        subtitle="Visual archive of Mihika Ayra export consignments, warehouse packing, marine processing, and trade exhibitions."
        breadcrumbText="Gallery"
      />

      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0077B6] bg-[#0077B6]/10 px-3 py-1 rounded-full inline-block">
              Visual Trade Archive
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#0D3B66]">
              Excellence in Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore live photographs of our nitrogen vacuum packaging, port container stuffings, seafood cold chain storage, and traditional sweet confection workshops.
            </p>
          </div>

          <GalleryGrid />

        </div>
      </section>

      <CTASection />
    </div>
  );
};
