import React from 'react';
import { ShieldCheck, Award, Zap, Users, Globe2, DollarSign, Headphones, Truck } from 'lucide-react';

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

const featureIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
  Award: <Award className="w-6 h-6 text-[#D4AF37]" />,
  Zap: <Zap className="w-6 h-6 text-[#D4AF37]" />,
  Users: <Users className="w-6 h-6 text-[#D4AF37]" />,
  Globe2: <Globe2 className="w-6 h-6 text-[#D4AF37]" />,
  DollarSign: <DollarSign className="w-6 h-6 text-[#D4AF37]" />,
  Headphones: <Headphones className="w-6 h-6 text-[#D4AF37]" />,
  Truck: <Truck className="w-6 h-6 text-[#D4AF37]" />,
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ iconName, title, description, badge }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#0D3B66] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            {featureIconMap[iconName] || <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />}
          </div>
          {badge && (
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#00B4D8]/10 text-[#0077B6]">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold font-serif text-[#0D3B66] mb-2 group-hover:text-[#0077B6] transition-colors">
          {title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
