import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, User, ArrowUpRight, Package, ShieldCheck, Calendar, Truck, FileText, CheckCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../constants/productsData';
import { useQuote } from '../../context/QuoteContext';
import { Logo } from '../common/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  const [activeQuickModal, setActiveQuickModal] = useState<'schedule' | 'tracking' | 'documentation' | null>(null);
  const [trackingNumber, setTrackingNumber] = useState('');

  const location = useLocation();
  const { openQuoteModal, openAuthModal } = useQuote();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsQuickMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Imports', path: '/import-services' },
    { name: 'Exports', path: '/export-services' },
    { name: 'Products', path: '/#imports-exports-sectors', hasMegaMenu: true },
    { name: 'Benefits', path: '/benefits' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (link: typeof navLinks[0], e: React.MouseEvent) => {
    if (link.name === 'Home') {
      handleHomeClick(e);
      return;
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navbarClasses = isScrolled || !isHomePage
    ? 'bg-[#031322]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3 text-white'
    : 'bg-gradient-to-b from-[#031322]/90 via-[#031322]/60 to-transparent py-4 text-white';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MOBILE NAVBAR LAYOUT (lg:hidden) */}
          <div className="relative flex lg:hidden items-center justify-between min-h-12">
            {/* LEFT: MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-100 hover:bg-white/10 focus:outline-none shrink-0 cursor-pointer z-10"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* MIDDLE: BRAND LOGO + COMPACT TEXT */}
            <Link to="/" onClick={handleHomeClick} className="absolute left-1/2 -translate-x-1/2 flex items-center group">
              <Logo size="sm" showText={true} className="gap-1.5 sm:gap-2" />
            </Link>

            {/* RIGHT: LOGIN ICON ONLY */}
            <button
              onClick={() => openAuthModal('register')}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-[#00B4D8] cursor-pointer shrink-0 z-10"
              title="Login / Register"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* DESKTOP NAVBAR LAYOUT (hidden lg:flex) */}
          <div className="hidden lg:flex items-center justify-between">
            
            {/* Brand Logo With Quick Links Dropdown Below */}
            <div className="flex flex-col items-start gap-1">
              <Link to="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
                <Logo size="md" showText={true} />
              </Link>

              {/* Quick Links Menu Toggle Below Logo In Desktop */}
              <div className="relative group/quick pl-0.5">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsQuickMenuOpen(!isQuickMenuOpen); }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-100 hover:text-[#D4AF37] transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-md border border-white/15"
                  title="Quick Links Menu"
                >
                  <Menu className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-semibold text-slate-200">Menu</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover/quick:rotate-180 text-slate-300" />
                </button>

                {/* Quick Links Hover Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-56 bg-[#071927] border border-white/15 rounded-xl shadow-2xl p-2 z-50 hidden group-hover/quick:block animate-in fade-in duration-150">
                  <button
                    onClick={() => setActiveQuickModal('schedule')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-white/10 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#00B4D8]" /> Schedule
                  </button>
                  <button
                    onClick={() => setActiveQuickModal('tracking')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-white/10 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <Truck className="w-4 h-4 text-[#00B4D8]" /> Tracking
                  </button>
                  <button
                    onClick={() => setActiveQuickModal('documentation')}
                    className="w-full text-left px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-white/10 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-[#00B4D8]" /> Documentation
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                if (link.hasMegaMenu) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative group"
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 rounded-lg hover:bg-white/10 ${
                          isActive ? 'text-[#D4AF37] font-semibold bg-white/10' : 'text-slate-100 hover:text-[#00B4D8]'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                      </Link>

                      {/* Mega Menu Dropdown */}
                      {isMegaMenuOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-[#071927] text-white rounded-2xl shadow-2xl border border-white/15 p-6 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                          {/* Categories List */}
                          <div>
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5">
                                <Package className="w-4 h-4" /> Product Categories
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-3 max-h-[360px] overflow-y-auto overscroll-contain pr-1">
                              {PRODUCT_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.id}
                                  onClick={() => setIsMegaMenuOpen(false)}
                                  to={
                                    cat.id === 'pickles' ? '/pickles' :
                                    cat.id === 'sweets' ? '/sweets-and-snacks' :
                                    cat.id === 'millets' ? '/millets' :
                                    cat.id === 'snacks' ? '/sweets-and-snacks' :
                                    cat.id === 'podies' ? '/podies' :
                                    cat.id === 'jute-bags' ? '/jute-bags' :
                                    cat.id === 'honey' ? '/honey' :
                                    cat.id === 'fishes' ? '/fishes' :
                                    cat.id === 'dry-fruits' ? '/dry-fruits' :
                                    cat.id === 'cosmetics' ? '/cosmetics' :
                                    cat.id === 'handcraft' ? '/handcraft' :
                                    cat.id === 'textiles' ? '/fabrics' :
                                    cat.id === 'gaming-products' ? '/gaming' :
                                    cat.id === 'interiors' ? '/interiors' :
                                    cat.id === 'automobiles' ? '/automobiles' :
                                    cat.id === 'industrial' ? '/industrial' :
                                    cat.id === 'medical-materials' ? '/medical-materials' :
                                    cat.id === 'engineering-materials' ? '/engineering-materials' :
                                    `/products?category=${cat.id}`
                                  }
                                  className="group/item p-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2.5"
                                >
                                  <img 
                                    src={cat.image} 
                                    alt={cat.title} 
                                    className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-white/20 group-hover/item:scale-105 transition-transform" 
                                  />
                                  <div className="overflow-hidden">
                                    <h4 className="text-xs font-bold text-slate-100 group-hover/item:text-[#D4AF37] transition-colors truncate">
                                      {cat.title}
                                    </h4>
                                    <p className="text-[10px] text-slate-300 truncate">
                                      {cat.subtitle}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.name === 'Home') {
                  return (
                    <Link
                      key={link.name}
                      to="/"
                      onClick={handleHomeClick}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/10 ${
                        isActive ? 'text-[#D4AF37] font-semibold bg-white/10' : 'text-slate-100 hover:text-[#00B4D8]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(link, e)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-white/10 ${
                      isActive ? 'text-[#D4AF37] font-semibold bg-white/10' : 'text-slate-100 hover:text-[#00B4D8]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT ACTION CONTROLS (DESKTOP) */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => openAuthModal('register')}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/10 cursor-pointer"
              >
                <User className="w-4 h-4 text-[#00B4D8]" />
                <span>Login / Register</span>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#031322] border-b border-white/10 px-4 pt-4 pb-6 space-y-2 mt-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleNavClick(link, e);
                }}
                className="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
            ))}

            {/* SCHEDULE, TRACKING, DOCUMENTATION LINKS IN MOBILE MENU */}
            <button
              onClick={() => { setIsMobileMenuOpen(false); setActiveQuickModal('schedule'); }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-[#D4AF37] flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#00B4D8]" /> Schedule
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); setActiveQuickModal('tracking'); }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-[#D4AF37] flex items-center gap-2 cursor-pointer"
            >
              <Truck className="w-4 h-4 text-[#00B4D8]" /> Tracking
            </button>
            <button
              onClick={() => { setIsMobileMenuOpen(false); setActiveQuickModal('documentation'); }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-white/10 hover:text-[#D4AF37] flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#00B4D8]" /> Documentation
            </button>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAuthModal('register');
                }}
                className="w-full text-slate-200 hover:text-white bg-white/10 font-semibold py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                <User className="w-4 h-4 text-[#00B4D8]" /> Login / Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* QUICK ACTION MODALS (Schedule, Tracking, Documentation) */}
      {activeQuickModal && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#071927] text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-700/80 shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveQuickModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Schedule Modal */}
            {activeQuickModal === 'schedule' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">Global Trade & Vessel Schedule</h3>
                    <p className="text-xs text-slate-300">Live shipping dispatches & freight cut-offs</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="font-bold text-[#D4AF37]">Mundra → Jebel Ali (Dubai)</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px]">Departs Every Tue & Fri</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="font-bold text-[#D4AF37]">Nhava Sheva → Hamburg (Germany)</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px]">Departs Every Mon</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="font-bold text-[#D4AF37]">Chennai → Singapore / SE Asia</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px]">Daily Express Feeders</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#D4AF37]">Kakinada / Vizag → USA East Coast</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono text-[10px]">Bi-Weekly Charters</span>
                  </div>
                </div>

                <button
                  onClick={() => { setActiveQuickModal(null); openQuoteModal('Shipping Schedule Booking'); }}
                  className="w-full bg-[#00B4D8] hover:bg-[#0096b4] text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Schedule Custom Container Booking
                </button>
              </div>
            )}

            {/* Tracking Modal */}
            {activeQuickModal === 'tracking' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">Live Container & B/L Tracking</h3>
                    <p className="text-xs text-slate-300">Track container location & telemetry status</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-300 block">Enter Bill of Lading (B/L) or Container No:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. MA-2026-90821"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00B4D8]"
                    />
                    <button
                      onClick={() => {}}
                      className="bg-[#00B4D8] text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shrink-0 hover:bg-[#0096b4] transition-colors cursor-pointer"
                    >
                      Track
                    </button>
                  </div>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle className="w-4 h-4" /> Live Sample Shipment Track (MA-882103):
                  </div>
                  <div className="space-y-2 text-slate-300 text-[11px] pl-6 border-l-2 border-[#00B4D8]">
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Stuffing & Factory Dispatch</span>
                      <span className="text-slate-400">Completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-white">Port Customs Cleared (Nhava Sheva)</span>
                      <span className="text-slate-400">Completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#D4AF37]">Vessel Loaded & In Transit</span>
                      <span className="text-emerald-400 font-bold">Live (Ocean Line)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-400">ETA Port of Destination</span>
                      <span className="text-slate-400">3 Days</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Documentation Modal */}
            {activeQuickModal === 'documentation' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">Export & Import Documentation</h3>
                    <p className="text-xs text-slate-300">100% compliant trade certifications provided</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Import Export Code (IEC)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Certificate of Origin (COO)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Phytosanitary Certificate</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>APEDA & FSSAI Licenses</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Bill of Lading (B/L) & Invoice</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>SGS Lab Analysis (COA)</span>
                  </div>
                </div>

                <button
                  onClick={() => { setActiveQuickModal(null); openQuoteModal('Export Documentation Request'); }}
                  className="w-full bg-[#00B4D8] hover:bg-[#0096b4] text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" /> Request Documentation Support
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
