import React from 'react';
import {
  ShieldCheck,
  Headphones,
  Lock,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TRUST_BENEFITS } from '../data/travelData';

export const TrustBenefits: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0969E8]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#21B96F]" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#7B61FF]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#0969E8]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#FF8A2A]" />;
    }
  };

  return (
    <section className="py-10 bg-[#F3F8FF] border-b border-[#EAF2FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-5 border border-[#E7EEF7] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F3F8FF] flex items-center justify-center">
                  {getIcon(benefit.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#071B49] tracking-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-[#5E6B82] mt-1 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-100">
                <span className="text-[11px] font-bold text-[#0969E8] bg-[#EAF2FB] px-2 py-0.5 rounded-md">
                  {benefit.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
