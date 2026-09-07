import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  Star,
  Plane,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { TravelDeal, CurrencyConfig } from '../types';

interface FeaturedDealsProps {
  deals: TravelDeal[];
  onDealClick: (deal: TravelDeal) => void;
  onBookDealAffiliate: (deal: TravelDeal) => void;
  currency: CurrencyConfig;
}

export const FeaturedDeals: React.FC<FeaturedDealsProps> = ({
  deals,
  onDealClick,
  onBookDealAffiliate,
  currency
}) => {
  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="deals" className="py-12 sm:py-16 bg-white border-t border-b border-[#EAF2FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8A2A] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A2A]" />
              <span>Exclusive Partner Rates</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
              Featured Travel Deals
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] mt-1">
              Curated limited-time vacation packages with bundle flight and accommodation savings.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#0969E8]">
            <span>Updated hourly across 45+ airline & hotel partners</span>
          </div>
        </div>

        {/* Desktop Split Layout (35% Left Heroic Promo Card + 65% 3 Deal Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Promotional Feature Card (Left Column) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#071B49] via-[#09357A] to-[#0969E8] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-950/20">
            {/* Background Travel Artwork Vector */}
            <div className="absolute -right-8 -bottom-8 w-60 h-60 bg-blue-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-6 right-6 opacity-15">
              <Plane className="w-28 h-28 transform rotate-12" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-[#4DA3FF]">
                <Tag className="w-3 h-3" />
                <span>Limited Time Offers</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight font-syncopate uppercase">
                Top Travel Deals This Week
              </h3>

              <p className="text-sm text-white/85 leading-relaxed">
                Save up to $450 per booking on verified international itineraries, boutique caldera suites, and all-inclusive tropical island getaways.
              </p>

              <div className="space-y-2 pt-2 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                  <span>No hidden booking or broker surcharges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                  <span>Free date amendments on selected packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                  <span>Direct checkout via verified affiliate partners</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-auto">
              <a
                href="#destinations"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3F8FF] text-[#071B49] font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all duration-200 group"
              >
                <span>View All 150+ Deals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 3 Featured Deal Cards (Right Column Grid) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {deals.map((deal) => {
              const badgeBg =
                deal.badgeColor === 'coral'
                  ? 'bg-[#FF5A5F]'
                  : deal.badgeColor === 'purple'
                  ? 'bg-[#7B61FF]'
                  : 'bg-[#0969E8]';

              return (
                <div
                  key={deal.id}
                  id={`deal-card-${deal.id}`}
                  onClick={() => onDealClick(deal)}
                  className="group bg-white rounded-2xl border border-[#E7EEF7] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer"
                >
                  {/* Deal Image Container */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`${badgeBg} text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm`}>
                        {deal.badge}
                      </span>
                    </div>

                    {/* Duration Pill */}
                    <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-[#4DA3FF]" />
                      <span>{deal.duration}</span>
                    </div>
                  </div>

                  {/* Deal Content Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5E6B82] mb-1">
                        <span className="font-semibold text-[#0969E8]">{deal.destination}</span>
                        <div className="flex items-center gap-1 text-[#FF8A2A] font-bold text-xs">
                          <Star className="w-3.5 h-3.5 fill-[#FF8A2A]" />
                          <span>{deal.rating}</span>
                        </div>
                      </div>

                      <h4 className="text-base font-bold text-[#101C36] leading-snug group-hover:text-[#0969E8] transition-colors line-clamp-1">
                        {deal.title}
                      </h4>

                      <p className="text-xs text-[#5E6B82] mt-1 line-clamp-1">
                        {deal.accommodationType}
                      </p>
                    </div>

                    {/* Inclusions snippet */}
                    <ul className="space-y-1 text-[11px] text-[#5E6B82] bg-[#F8FAFC] p-2.5 rounded-xl border border-gray-100">
                      {deal.inclusions.slice(0, 2).map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-[#21B96F] shrink-0" />
                          <span className="truncate">{inc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing & CTA */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-gray-400 line-through">
                            {formatPrice(deal.originalPrice)}
                          </span>
                          <span className="text-[10px] font-bold text-[#21B96F] bg-[#21B96F]/10 px-1.5 py-0.5 rounded">
                            Save {formatPrice(deal.savings)}
                          </span>
                        </div>
                        <div className="text-lg font-extrabold text-[#071B49]">
                          {formatPrice(deal.discountedPrice)}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookDealAffiliate(deal);
                        }}
                        className="flex items-center gap-1 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm transition-colors"
                      >
                        <span>View Deal</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
