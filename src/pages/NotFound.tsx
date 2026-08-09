import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D3B66] text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 bg-[#D4AF37] text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold font-mono text-[#D4AF37]">404</span>
          <h1 className="text-2xl font-bold font-serif text-white">Trade Route Not Found</h1>
          <p className="text-xs text-slate-300 leading-relaxed">
            The page or product route you are searching for does not exist or may have been relocated in our export directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="w-full bg-[#00B4D8] hover:bg-[#0077B6] text-slate-950 hover:text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors border border-white/20 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Products Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
