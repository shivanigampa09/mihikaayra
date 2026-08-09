import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';
import { DownloadCloud, UploadCloud, PackageCheck, FileText, Truck, ArrowRight, Check } from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';

interface ServiceCardProps {
  service: ServiceItem;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  DownloadCloud: <DownloadCloud className="w-6 h-6" />,
  UploadCloud: <UploadCloud className="w-6 h-6" />,
  PackageCheck: <PackageCheck className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B66] via-[#0D3B66]/40 to-transparent" />
        
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#D4AF37] text-slate-950 flex items-center justify-center font-bold shadow-lg">
          {serviceIconMap[service.iconName] || <Truck className="w-6 h-6" />}
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#00B4D8] block">
            {service.type === 'import' ? 'Inbound Import' : service.type === 'export' ? 'Outbound Export' : 'Global Trade'}
          </span>
          <h3 className="text-lg font-bold font-serif line-clamp-1">
            {service.title}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            {service.description}
          </p>

          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            {service.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#0077B6] flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            to={`/services?slug=${service.slug}`}
            className="text-xs font-bold text-[#0D3B66] hover:text-[#0077B6] flex items-center gap-1 transition-colors"
          >
            <span>Learn Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => openQuoteModal(service.title)}
            className="bg-[#0D3B66] hover:bg-[#0077B6] text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors shadow"
          >
            Inquire Service
          </button>
        </div>
      </div>
    </div>
  );
};
