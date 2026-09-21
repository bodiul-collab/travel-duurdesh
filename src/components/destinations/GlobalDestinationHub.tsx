import React, { useState } from 'react';
import {
  Plane,
  MapPin,
  ExternalLink,
  Calendar,
  ShieldCheck,
  Building2,
  Compass,
  ArrowRight,
  Sparkles,
  Luggage,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Tag
} from 'lucide-react';
import { AviasalesPlace, getCountryFlagEmoji } from '../../utils/aviasalesAutocomplete';
import { buildAviasalesRouteUrl } from '../../utils/aviasales';
import { registerPlaceIata, safeExtractIata } from '../../utils/iataRegistry';
import { CurrencyConfig } from '../../types';

interface GlobalDestinationHubProps {
  place: AviasalesPlace;
  currency: CurrencyConfig;
  onNavigate: (pageId: string) => void;
  onClose: () => void;
}

export const GlobalDestinationHub: React.FC<GlobalDestinationHubProps> = ({
  place,
  currency,
  onNavigate,
  onClose
}) => {
  const [selectedOrigin, setSelectedOrigin] = useState<'IAH' | 'LHR' | 'JFK' | 'DAC' | 'DXB'>('IAH');
  const cityName = place.city_name || place.name;
  const flagEmoji = getCountryFlagEmoji(place.country_code);

  // Guarantee valid 3-letter IATA code and register in global registry
  registerPlaceIata(place.city_name, place.name, place.code);
  const iataCode = safeExtractIata(place.code, 'JED');

  const originNames: Record<string, string> = {
    IAH: 'Houston (IAH)',
    LHR: 'London (LHR)',
    JFK: 'New York (JFK)',
    DAC: 'Dhaka (DAC)',
    DXB: 'Dubai (DXB)'
  };

  // Generate live Aviasales round-trip flight route
  const aviasalesFlightUrl = buildAviasalesRouteUrl(selectedOrigin, iataCode, {
    isOneWay: false,
    passengers: 1,
    cabinClass: 'y'
  });

  const handleBookFlights = () => {
    window.open(aviasalesFlightUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSearchHotels = () => {
    onNavigate('hotels');
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Back Button / Breadcrumb Header */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-bold text-[#071B49] hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#0969E8]" />
          <span>Back to Curated Guides</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-[#0969E8] font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
          <Globe className="w-3.5 h-3.5" />
          <span>Aviasales Worldwide IATA Directory</span>
        </div>
      </div>

      {/* Main Destination Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#071B49] via-[#0A2E7A] to-[#061536] text-white p-6 sm:p-10 shadow-2xl border border-blue-900/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          {/* Badges Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              <Plane className="w-3.5 h-3.5 text-blue-400" />
              <span>IATA: {iataCode}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Global Route</span>
            </span>

            <span className="text-xs text-blue-200 font-medium px-2 py-0.5">
              {place.type === 'airport' ? 'Commercial Airport Hub' : 'Major World City'}
            </span>
          </div>

          {/* Title & Flag */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="text-4xl sm:text-5xl drop-shadow-md">{flagEmoji}</span>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {cityName}
              </h1>
              <p className="text-sm sm:text-base text-blue-200 font-medium flex items-center gap-2 mt-0.5">
                <span>{place.country_name}</span>
                {place.type === 'airport' && place.name !== cityName && (
                  <span className="text-xs text-blue-300/80">({place.name})</span>
                )}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-2xl">
            Live worldwide flight bookings are active for {cityName} ({iataCode}). Compare scheduled airlines, transparent baggage fees, and real-time round-trip fares indexed by Aviasales.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleBookFlights}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0969E8] hover:bg-[#0756C2] active:bg-[#0648A0] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Plane className="w-4 h-4" />
              <span>Book Flights to {cityName} ({iataCode})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            <button
              type="button"
              onClick={handleSearchHotels}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-xs transition-all cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-blue-300" />
              <span>Search Hotels in {cityName}</span>
            </button>
          </div>
        </div>

        {/* Decorative Background Glows */}
        <div className="absolute right-0 top-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 bottom-0 w-60 h-60 bg-[#0969E8]/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Origin Selection & Live Flight Route Planner */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#0969E8]" />
              <span>Route Planner & Live Airfare Comparison</span>
            </h2>
            <p className="text-xs text-[#5E6B82] mt-0.5">
              Select your departure gateway to calculate flight routes and view live tickets for {cityName}.
            </p>
          </div>

          {/* Quick Origin Hub Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1 shrink-0">
              Depart from:
            </span>
            {(['IAH', 'JFK', 'LHR', 'DAC', 'DXB'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setSelectedOrigin(code)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer border shrink-0 ${
                  selectedOrigin === code
                    ? 'bg-[#0969E8] text-white border-[#0969E8] shadow-xs'
                    : 'bg-[#F8FAFC] text-[#334155] border-gray-200 hover:bg-gray-100'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Route Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            {/* Origin Box */}
            <div className="text-center md:text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Origin
              </div>
              <div className="text-lg font-mono font-black text-[#071B49]">
                {selectedOrigin}
              </div>
              <div className="text-xs text-[#5E6B82]">
                {originNames[selectedOrigin]}
              </div>
            </div>

            {/* Flight Path Graphic */}
            <div className="flex flex-col items-center px-4 shrink-0">
              <span className="text-[10px] font-bold text-[#0969E8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/50 mb-1">
                Round Trip
              </span>
              <div className="flex items-center gap-2">
                <div className="w-12 sm:w-20 border-t border-dashed border-[#0969E8]" />
                <Plane className="w-4 h-4 text-[#0969E8] rotate-90" />
                <div className="w-12 sm:w-20 border-t border-dashed border-[#0969E8]" />
              </div>
              <span className="text-[10px] text-gray-400 mt-1">Aviasales Network</span>
            </div>

            {/* Destination Box */}
            <div className="text-center md:text-right">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Destination
              </div>
              <div className="text-lg font-mono font-black text-[#0969E8]">
                {iataCode}
              </div>
              <div className="text-xs text-[#5E6B82] font-semibold">
                {cityName}
              </div>
            </div>
          </div>

          {/* Action on Strip */}
          <button
            type="button"
            onClick={handleBookFlights}
            className="w-full md:w-auto px-5 py-2.5 bg-[#0969E8] hover:bg-[#0756C2] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Search Tickets on Aviasales</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Airport & City Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {/* Card 1: Airport Specifications */}
          <div className="p-4 rounded-2xl border border-gray-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071B49]">
              <Plane className="w-4 h-4 text-[#0969E8]" />
              <span>Airport Information</span>
            </div>
            <div className="space-y-1.5 text-xs text-[#5E6B82]">
              <div className="flex justify-between">
                <span>IATA Code:</span>
                <span className="font-mono font-bold text-[#071B49]">{iataCode}</span>
              </div>
              <div className="flex justify-between">
                <span>Facility Name:</span>
                <span className="font-semibold text-[#071B49] truncate max-w-[150px]" title={place.name}>
                  {place.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Country:</span>
                <span className="font-semibold text-[#071B49] flex items-center gap-1">
                  <span>{flagEmoji}</span>
                  <span>{place.country_name}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Flight Booking Essentials */}
          <div className="p-4 rounded-2xl border border-gray-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071B49]">
              <Luggage className="w-4 h-4 text-[#0969E8]" />
              <span>Booking Tips</span>
            </div>
            <div className="space-y-1.5 text-xs text-[#5E6B82]">
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Book 21–45 days ahead for optimal international rates</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Compare economy, premium, and business fare classes</span>
              </div>
            </div>
          </div>

          {/* Card 3: Umrah & Global Connections */}
          <div className="p-4 rounded-2xl border border-gray-200 bg-white space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#071B49]">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Umrah & Transit Stopovers</span>
            </div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Combine {cityName} with stopovers in Jeddah (JED), Madinah (MED), Istanbul (IST), or Dubai (DXB).
            </p>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(
                    new CustomEvent('prefill-flight-destination', {
                      detail: {
                        to: `${cityName} (${iataCode})`,
                        tripType: 'round'
                      }
                    })
                  );
                }
                onNavigate('flights');
              }}
              className="text-xs text-[#0969E8] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Search Flights</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
