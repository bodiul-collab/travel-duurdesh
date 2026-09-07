import React from 'react';
import {
  Compass,
  Star,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Ticket
} from 'lucide-react';
import { TravelExperience, CurrencyConfig } from '../types';

interface ExperiencesSectionProps {
  experiences: TravelExperience[];
  onExperienceClick: (exp: TravelExperience) => void;
  onBookExperienceAffiliate: (exp: TravelExperience) => void;
  currency: CurrencyConfig;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  experiences,
  onExperienceClick,
  onBookExperienceAffiliate,
  currency
}) => {
  const featuredExp = experiences.find((e) => e.isFeatured) || experiences[0];
  const otherExps = experiences.filter((e) => e.id !== featuredExp.id);

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="experiences" className="py-12 sm:py-16 bg-white border-t border-b border-[#EAF2FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Unforgettable Activities & Tours</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
              Travel Beyond the Destination
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] mt-1">
              Immerse yourself in authentic local cuisine, outdoor adrenaline, and skip-the-line iconic landmarks.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#0969E8]">
            <Ticket className="w-4 h-4 text-[#0969E8]" />
            <span>Mobile vouchers with instant confirmation</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Large Experience Card (7 cols on lg) */}
          <div
            onClick={() => onExperienceClick(featuredExp)}
            className="lg:col-span-7 group bg-white rounded-3xl border border-[#E7EEF7] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={featuredExp.image}
                alt={featuredExp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/90 via-transparent to-black/30" />

              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-[#7B61FF] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                  Featured Experience
                </span>
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {featuredExp.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <div className="flex items-center gap-3 text-xs text-[#4DA3FF] font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {featuredExp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredExp.duration}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {featuredExp.title}
                </h3>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-[#5E6B82] leading-relaxed">
                {featuredExp.shortDesc}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#101C36]">
                {featuredExp.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F] shrink-0" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[#FF8A2A] font-bold text-sm">
                    <Star className="w-4 h-4 fill-[#FF8A2A]" />
                    <span>{featuredExp.rating}</span>
                  </div>
                  <span className="text-xs text-[#5E6B82]">({featuredExp.reviewCount} reviews)</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block uppercase">From</span>
                    <span className="text-xl font-extrabold text-[#071B49]">
                      {formatPrice(featuredExp.price)}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookExperienceAffiliate(featuredExp);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md transition-colors"
                  >
                    <span>Book Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Experience Cards (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {otherExps.map((exp) => (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                onClick={() => onExperienceClick(exp)}
                className="group bg-white rounded-2xl border border-[#E7EEF7] shadow-sm hover:shadow-md transition-all duration-200 p-3 sm:p-4 flex gap-4 cursor-pointer hover:border-[#0969E8]/40"
              >
                <div className="relative w-28 sm:w-32 h-28 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {exp.category}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#5E6B82] mb-1">
                      <span className="font-semibold text-[#0969E8] truncate max-w-[120px]">
                        {exp.location}
                      </span>
                      <div className="flex items-center gap-1 text-[#FF8A2A] font-bold">
                        <Star className="w-3 h-3 fill-[#FF8A2A]" />
                        <span>{exp.rating}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-[#101C36] leading-snug group-hover:text-[#0969E8] transition-colors line-clamp-2">
                      {exp.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-1 border-t border-gray-100">
                    <div>
                      <span className="text-[10px] text-gray-400 block">From</span>
                      <span className="text-sm font-extrabold text-[#071B49]">
                        {formatPrice(exp.price)}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookExperienceAffiliate(exp);
                      }}
                      className="text-xs font-bold text-[#0969E8] hover:text-[#071B49] flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
