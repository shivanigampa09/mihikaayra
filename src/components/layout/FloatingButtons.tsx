import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/917013258972";

  return (
    <>
      {/* Floating Whatsapp Button On The Left Side */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-2 sm:p-2.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 relative border-2 border-white"
          title="Chat with Mihika Ayra Traders on WhatsApp"
          aria-label="Contact us on WhatsApp"
        >
          {/* Whatsapp Svg Icon */}
          <svg
            className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.874 9.877-9.874 2.636 0 5.116 1.028 6.98 2.892a9.8 9.8 0 012.887 6.982c-.001 5.447-4.431 9.875-9.862 9.875m0-18.002C6.157 3.783 1.22 8.72 1.22 14.805c0 2.133.558 4.214 1.62 6.053L1 27l6.326-1.66a11.002 11.002 0 005.281 1.344h.005c6.082 0 11.02-4.937 11.021-11.023.001-2.941-1.144-5.706-3.228-7.79a10.938 10.938 0 00-7.785-3.229" />
          </svg>

          {/* Online Green Badge */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white" />
          </span>
        </a>

        {/* Tooltip Label On Hover */}
        <div className="ml-3 hidden group-hover:block bg-[#031322] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-white/20 whitespace-nowrap animate-fade-in">
          Chat on WhatsApp (70132 58972)
        </div>
      </div>

      {/* Floating Scroll To Top On The Right Side */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="bg-[#0A2540] hover:bg-[#0077B6] text-white p-2 sm:p-3 rounded-full shadow-2xl border border-white/20 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}
    </>
  );
};
