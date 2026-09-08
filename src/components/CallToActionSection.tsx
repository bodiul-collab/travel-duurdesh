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
  onNavigate?: (pageId: string) => void;
  onExploreDestinations?: () => void;
  onSearchFlightsHotels?: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onNavigate,
  onExploreDestinations,
  onSearchFlightsHotels
}) => {
  const handleDestinations = () => {
    if (onNavigate) {
      onNavigate('destinations');
    } else if (onExploreDestinations) {
      onExploreDestinations();
    }
  };

  const handleFlights = () => {
    if (onNavigate) {
      onNavigate('flights');
    } else if (onSearchFlightsHotels) {
      onSearchFlightsHotels();
    }
  };

  const handleHotels = () => {
    if (onNavigate) {
      onNavigate('hotels');
    }
  };

  const handleUmrah = () => {
    if (onNavigate) {
      onNavigate('umrah');
    } else {
      window.location.hash = '#umrah';
    }
  };

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

        {/* Clean Action Buttons with exact page landing destinations */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <button
            id="cta-explore-destinations-btn"
            onClick={handleDestinations}
            className="inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl shadow-lg shadow-blue-700/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-search-flights-btn"
            onClick={handleFlights}
            className="inline-flex items-center justify-center gap-2 bg-[#21B96F] hover:bg-[#1ea763] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-700/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Plane className="w-4 h-4" />
            <span>Search Flights & Airfare</span>
          </button>

          <button
            id="cta-find-hotels-btn"
            onClick={handleHotels}
            className="inline-flex items-center justify-center gap-2 bg-[#FF8A2A] hover:bg-[#e67519] text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-xl shadow-lg shadow-orange-700/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Building2 className="w-4 h-4" />
            <span>Find Hotels & Stays</span>
          </button>

          <button
            id="cta-umrah-guide-btn"
            onClick={handleUmrah}
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all active:scale-[0.98] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#4DA3FF]" />
            <span>Read Umrah Guide</span>
          </button>
        </div>

        {/* Affiliate / Partner Disclaimer */}
        <div className="pt-6">
          <p className="text-[11px] text-white/50 max-w-lg mx-auto leading-relaxed">
            Travel DuurDesh provides independent editorial travel and pilgrimage advice with official booking partner integrations (Aviasales Partner ID: 737968).
          </p>
        </div>
      </div>
    </section>
  );
};
