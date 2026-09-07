import React from 'react';
import {
  ArrowRight,
  Plane,
  Building2,
  BookOpen,
  Sparkles,
  Compass
} from 'lucide-react';

interface CallToActionSectionProps {
  onExploreDestinations: () => void;
  onSearchFlightsHotels: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onExploreDestinations,
  onSearchFlightsHotels
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#071B49] text-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0969E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#21B96F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#4DA3FF] tracking-wider uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
          <span>Your Gateway to Meaningful Travel</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-syncopate uppercase">
          Start Planning Your Journey Today
        </h2>

        <p className="text-lg sm:text-xl font-semibold text-[#93C5FD]">
          Explore Flights, Hotels, and Travel Guides
        </p>

        <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto leading-relaxed">
          Whether you are embarking on a once-in-a-lifetime Umrah pilgrimage, craving world-class halal street food in historic alleyways, or searching for affordable flights and hotels worldwide, Travel DuurDesh is here to guide every step.
        </p>

        {/* Clean Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onExploreDestinations}
            className="inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-700/30 transition-all active:scale-[0.98]"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#umrah"
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-[#4DA3FF]" />
            <span>Read Umrah Guide</span>
          </a>

          <button
            onClick={onSearchFlightsHotels}
            className="inline-flex items-center justify-center gap-2 bg-[#21B96F] hover:bg-[#1ea763] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-700/20 transition-all active:scale-[0.98]"
          >
            <Plane className="w-4 h-4" />
            <span>Compare Flights & Hotels</span>
          </button>
        </div>

        {/* Affiliate / Partner Disclaimer Placeholder */}
        <div className="pt-6">
          <p className="text-[11px] text-white/50 max-w-lg mx-auto leading-relaxed">
            Travel DuurDesh provides independent editorial travel and pilgrimage advice. All booking actions use internal link placeholders: [Partner Booking Placeholder].
          </p>
        </div>
      </div>
    </section>
  );
};
