import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingButtons } from './components/layout/FloatingButtons';
import { QuoteModal } from './components/forms/QuoteModal';
import { SearchModal } from './components/forms/SearchModal';
import { AuthModal } from './components/forms/AuthModal';

// PAGE IMPORTS
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Benefits } from './pages/Benefits';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { PicklesPage } from './pages/PicklesPage';
import { SweetsAndSnacksPage } from './pages/SweetsAndSnacksPage';
import { MilletsPage } from './pages/MilletsPage';
import { PodiesPage } from './pages/PodiesPage';
import { JuteBagsPage } from './pages/JuteBagsPage';
import { HoneyPage } from './pages/HoneyPage';
import { FishesPage } from './pages/FishesPage';
import { DryFruitsPage } from './pages/DryFruitsPage';
import { CosmeticsPage } from './pages/CosmeticsPage';
import { HandcraftsPage } from './pages/HandcraftsPage';
import { FabricsPage } from './pages/FabricsPage';
import { GamingPage } from './pages/GamingPage';
import { InteriorsPage } from './pages/InteriorsPage';
import { AutomobilesPage } from './pages/AutomobilesPage';
import { IndustrialPage } from './pages/IndustrialPage';
import { MedicalMaterialsPage } from './pages/MedicalMaterialsPage';
import { EngineeringMaterialsPage } from './pages/EngineeringMaterialsPage';
import { Services } from './pages/Services';
import { ImportServices } from './pages/ImportServices';
import { ExportServices } from './pages/ExportServices';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { RefundPolicy } from './pages/RefundPolicy';
import { Disclaimer } from './pages/Disclaimer';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <QuoteProvider>
        <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0077B6] selection:text-white">
          
          {/* Sticky Main Navbar */}
          <Navbar />

          {/* Routed Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/pickles" element={<PicklesPage />} />
              <Route path="/sweets" element={<SweetsAndSnacksPage />} />
              <Route path="/snacks" element={<SweetsAndSnacksPage />} />
              <Route path="/sweets-and-snacks" element={<SweetsAndSnacksPage />} />
              <Route path="/millets" element={<MilletsPage />} />
              <Route path="/podies" element={<PodiesPage />} />
              <Route path="/powders" element={<PodiesPage />} />
              <Route path="/jute-bags" element={<JuteBagsPage />} />
              <Route path="/jug-bags" element={<JuteBagsPage />} />
              <Route path="/honey" element={<HoneyPage />} />
              <Route path="/fishes" element={<FishesPage />} />
              <Route path="/sea-food" element={<FishesPage />} />
              <Route path="/dry-fruits" element={<DryFruitsPage />} />
              <Route path="/cosmetics" element={<CosmeticsPage />} />
              <Route path="/handcraft" element={<HandcraftsPage />} />
              <Route path="/handcrafts" element={<HandcraftsPage />} />
              <Route path="/fabrics" element={<FabricsPage />} />
              <Route path="/textiles" element={<FabricsPage />} />
              <Route path="/gaming" element={<GamingPage />} />
              <Route path="/gaming-products" element={<GamingPage />} />
              <Route path="/interiors" element={<InteriorsPage />} />
              <Route path="/home-interiors" element={<InteriorsPage />} />
              <Route path="/home-and-commercial-interiors" element={<InteriorsPage />} />
              <Route path="/automobiles" element={<AutomobilesPage />} />
              <Route path="/industrial" element={<IndustrialPage />} />
              <Route path="/medical-materials" element={<MedicalMaterialsPage />} />
              <Route path="/medical" element={<MedicalMaterialsPage />} />
              <Route path="/engineering-materials" element={<EngineeringMaterialsPage />} />
              <Route path="/engineering" element={<EngineeringMaterialsPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/import" element={<ImportServices />} />
              <Route path="/imports" element={<ImportServices />} />
              <Route path="/import-services" element={<ImportServices />} />
              <Route path="/export" element={<ExportServices />} />
              <Route path="/exports" element={<ExportServices />} />
              <Route path="/export-services" element={<ExportServices />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/refund" element={<RefundPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Action Buttons */}
          <FloatingButtons />

          {/* Modal Overlays */}
          <QuoteModal />
          <SearchModal />
          <AuthModal />

        </div>
      </Router>
    </QuoteProvider>
  </AuthProvider>
);
}
