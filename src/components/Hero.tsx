import React, { useState } from 'react';
import {
  ArrowRight,
  Compass,
  Star,
  Sparkles,
  MapPin,
  Plane,
  ShieldCheck,
  Percent
} from 'lucide-react';
import { getTranslation, TranslationKey } from '../data/translations';
import tropicalBeachHeroImg from '../assets/images/tropical_beach_villa_1787601458361.jpg';

interface HeroProps {
  selectedLanguage: string;
  onExploreClick: () => void;
  onFindTripClick: () => void;
  onSpecialOfferClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedLanguage,
  onExploreClick,
  onFindTripClick,
  onSpecialOfferClick
}) => {
  const t = (key: TranslationKey) => getTranslation(selectedLanguage, key);
  const [heroImageSrc, setHeroImageSrc] = useState<string>(tropicalBeachHeroImg);

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#071B49] text-white">
      {/* Background Hero Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageSrc}
          alt="Tropical beach paradise with coconut palm trees, overwater villas, crystal turquoise water and wooden boats"
          referrerPolicy="no-referrer"
          onError={() => {
            // Fallback to high-res Unsplash tropical island if local asset ever fails
            setHeroImageSrc('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85');
          }}
          className="w-full h-full object-cover object-center lg:object-right opacity-90 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft Multi-Directional Gradient Overlays for High Contrast & Text Legibility without obscuring the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B49]/95 via-[#071B49]/75 to-[#071B49]/30 lg:via-[#071B49]/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-transparent to-black/30" />
      </div>

      {/* Decorative Vector Travel Flight Route Accent */}
      <svg
        className="absolute top-12 left-1/3 w-80 h-32 text-white/15 pointer-events-none hidden md:block"
        viewBox="0 0 300 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,80 Q 90,10 180,60 T 290,20"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <circle cx="10" cy="80" r="3" fill="#4DA3FF" />
        <circle cx="290" cy="20" r="4" fill="#FF8A2A" />
      </svg>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 sm:pt-16 sm:pb-36 lg:pt-20 lg:pb-44 min-h-[540px] lg:min-h-[590px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Core Brand Messaging */}
          <div className="lg:col-span-8 space-y-6 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#4DA3FF] tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>Global Travel • Umrah Pilgrims • Halal Food • Flights & Hotels</span>
            </div>

            {/* Main Headline: Strong headline welcoming users to Travel DuurDesh */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18] font-syncopate uppercase">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DA3FF] via-[#7BB6FF] to-[#21B96F]">
                Travel DuurDesh
              </span>
            </h1>

            {/* Sub-headline explaining the mission: global travel + Umrah guidance + food + flights + hotels */}
            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
              Your trusted companion for global travel, specialized Umrah pilgrimage guidance, authentic halal food discoveries, and comprehensive flight and hotel price comparisons worldwide.
            </p>

            {/* Action Buttons: Clean Call-to-Action button 'Explore Destinations' (No random links) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-explore-destinations-btn"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0969E8] hover:bg-[#0759c5] active:scale-[0.98] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-700/30 transition-all duration-200"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#umrah"
                id="hero-umrah-guide-btn"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 active:scale-[0.98] text-white backdrop-blur-md border border-white/25 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-[#4DA3FF]" />
                <span>Umrah Pilgrims Guide</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {/* Traveler Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#071B49] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Traveler Sophia"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#071B49] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Traveler James"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#071B49] object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                  alt="Traveler Olivia"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#071B49] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                  alt="Traveler Liam"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">4.9 / 5.0</span>
                </div>
                <span className="text-xs text-white/80">
                  {t('verifiedTravelers')} • 40,000+ Journeys
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Promotional Card */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div
              onClick={onSpecialOfferClick}
              className="cursor-pointer group bg-white/95 backdrop-blur-md text-[#101C36] p-5 rounded-2xl shadow-2xl border border-white/40 max-w-xs hover:translate-y-[-4px] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0969E8]/20 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 bg-[#FF8A2A]/15 text-[#D96B00] text-xs font-bold px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3 text-[#D96B00]" />
                  {t('specialOffer')}
                </span>
                <span className="text-[11px] font-semibold text-[#5E6B82]">Limited Season</span>
              </div>

              <div className="space-y-1 mb-3">
                <h3 className="text-2xl font-black text-[#071B49] tracking-tight group-hover:text-[#0969E8] transition-colors">
                  Up to 30% OFF
                </h3>
                <p className="text-xs text-[#5E6B82]">
                  On selected boutique stays, flight bundles & island packages
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0969E8]">
                <span>{t('findDeals')}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
