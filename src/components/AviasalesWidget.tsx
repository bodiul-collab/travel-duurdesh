import React, { useState } from 'react';
import {
  Plane,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Users,
  Search,
  ArrowRightLeft
} from 'lucide-react';
import { buildAviasalesRouteUrl } from '../utils/aviasales';
import { LocationAutocompleteInput } from './LocationAutocompleteInput';
import { DatePickerPopover } from './DatePickerPopover';

interface AviasalesWidgetProps {
  className?: string;
  variant?: 'full' | 'compact';
  title?: string;
  subtitle?: string;
}

export const AviasalesWidget: React.FC<AviasalesWidgetProps> = ({
  className = '',
  title = 'Search Global Airfares with Aviasales',
  subtitle = 'Compares 1,000+ airlines, low-cost carriers, and travel agencies with zero hidden booking fees.'
}) => {
  const [activeMode, setActiveMode] = useState<'interactive' | 'embed'>('interactive');
  const [tripType, setTripType] = useState<'round' | 'oneWay'>('round');
  const [origin, setOrigin] = useState('London (LHR)');
  const [destination, setDestination] = useState('Jeddah (JED)');
  const [departDate, setDepartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  });
  const [returnDate, setReturnDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  });
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('Economy');

  // Travelpayouts script HTML inside an isolated iframe
  const iframeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      margin: 0;
      padding: 8px;
      background: transparent;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div id="aviasales-widget-wrapper">
    <script charset="utf-8" src="https://tpwdg.com/content?currency=usd&trs=570661&shmarker=737968&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%230969E8&color_button=%230969E8&color_icons=%230969E8&dark=%23071B49&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%230969E8&border_radius=12&no_labels=&plain=true&promo_id=7879&campaign_id=100" async></script>
  </div>
</body>
</html>
`;

  const handleSwapAirports = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearchAviasales = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const cabinMap: Record<string, 'y' | 'w' | 'c' | 'f'> = {
      Economy: 'y',
      'Premium Economy': 'w',
      Business: 'c',
      First: 'f'
    };

    const url = buildAviasalesRouteUrl(origin, destination, {
      departDate,
      returnDate: tripType === 'oneWay' ? undefined : returnDate,
      isOneWay: tripType === 'oneWay',
      passengers,
      cabinClass: cabinMap[cabinClass] || 'y'
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E7EEF7] shadow-xl shadow-blue-900/5 p-4 sm:p-6 transition-all ${className}`}
    >
      {/* Header Info & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#EAF2FB]">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#EAF2FB] flex items-center justify-center text-[#0969E8] shrink-0">
            <Plane className="w-5 h-5 text-[#0969E8]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-[#071B49]">{title}</h3>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#21B96F] bg-[#21B96F]/10 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Live Partner Rates
              </span>
            </div>
            <p className="text-xs text-[#5E6B82] line-clamp-1">{subtitle}</p>
          </div>
        </div>

        {/* View Toggle & Direct Link */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <div className="flex items-center bg-[#F3F8FF] p-1 rounded-xl border border-[#E7EEF7] text-xs font-semibold">
            <button
              onClick={() => setActiveMode('interactive')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeMode === 'interactive'
                  ? 'bg-white text-[#0969E8] shadow-sm font-bold'
                  : 'text-[#5E6B82] hover:text-[#071B49]'
              }`}
            >
              Direct Search
            </button>
            <button
              onClick={() => setActiveMode('embed')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeMode === 'embed'
                  ? 'bg-white text-[#0969E8] shadow-sm font-bold'
                  : 'text-[#5E6B82] hover:text-[#071B49]'
              }`}
            >
              Partner Embed
            </button>
          </div>

          <a
            href="https://www.aviasales.com/search?marker=737968"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#0759c5] bg-[#F3F8FF] hover:bg-[#EAF2FB] px-3 py-2 rounded-xl transition-colors shrink-0"
          >
            <span>Open Aviasales</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Content: Interactive Form vs Safe Isolated Iframe */}
      {activeMode === 'interactive' ? (
        <form onSubmit={handleSearchAviasales} className="space-y-4">
          {/* Trip Type Selector */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#5E6B82]">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'round'}
                onChange={() => setTripType('round')}
                className="text-[#0969E8] focus:ring-[#0969E8]"
              />
              <span className={tripType === 'round' ? 'text-[#071B49] font-bold' : ''}>Round Trip</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                checked={tripType === 'oneWay'}
                onChange={() => setTripType('oneWay')}
                className="text-[#0969E8] focus:ring-[#0969E8]"
              />
              <span className={tripType === 'oneWay' ? 'text-[#071B49] font-bold' : ''}>One Way</span>
            </label>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-[#5E6B82] font-semibold">
              <Users className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span>Travelers:</span>
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="bg-transparent border-none p-0 text-xs font-bold text-[#071B49] focus:ring-0 cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Adult' : 'Adults'}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <div className="flex items-center gap-1 text-[#0969E8] font-bold">
              <span>Class:</span>
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                className="bg-transparent border-none p-0 text-xs font-bold text-[#0969E8] focus:ring-0 cursor-pointer"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First">First Class</option>
              </select>
            </div>
          </div>

          {/* Search Inputs Grid (Round Trip & One Way) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
            {/* Origin */}
            <div className="lg:col-span-3">
              <LocationAutocompleteInput
                label="From"
                value={origin}
                onChange={(val) => setOrigin(val)}
                placeholder="Airport code or city (e.g. LHR, JFK)"
                isDestination={false}
              />
            </div>

            {/* Swap Button */}
            <div className="hidden lg:flex lg:col-span-1 justify-center -mx-2 z-10 pb-2">
              <button
                type="button"
                onClick={handleSwapAirports}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#5E6B82] hover:text-[#0969E8] hover:border-[#0969E8] transition-colors cursor-pointer"
                title="Swap origin and destination"
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Destination */}
            <div className="lg:col-span-3">
              <LocationAutocompleteInput
                label="To Destination"
                value={destination}
                onChange={(val) => setDestination(val)}
                placeholder="Airport code or city (e.g. JED, MED)"
                isDestination={true}
              />
            </div>

            {/* Dates */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-2">
              <DatePickerPopover
                label="Depart"
                value={departDate}
                onChange={(val) => {
                  setDepartDate(val);
                  if (returnDate && returnDate < val) {
                    const next = new Date(val);
                    next.setDate(next.getDate() + 7);
                    const nextStr = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}-${String(next.getDate()).padStart(2, '0')}`;
                    setReturnDate(nextStr);
                  }
                }}
              />

              {tripType === 'round' ? (
                <DatePickerPopover
                  label="Return"
                  value={returnDate}
                  minDate={departDate}
                  onChange={(val) => setReturnDate(val)}
                />
              ) : (
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 opacity-60 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-bold text-[#5E6B82] mb-0.5">Return</span>
                  <span className="text-xs font-medium text-gray-400">One-way only</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full h-11 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Find Fares</span>
              </button>
            </div>
          </div>

          {/* Quick Route Shortcuts */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#5E6B82] pt-1">
            <span className="font-semibold text-[#071B49]">Popular Quick Searches:</span>
            {[
              { origin: 'Houston (IAH)', dest: 'Madinah (MED)', label: '✈️ Houston (IAH) → Madinah' },
              { origin: 'London (LHR)', dest: 'Jeddah (JED)', label: 'London → Jeddah' },
              { origin: 'New York (JFK)', dest: 'Madinah (MED)', label: 'NYC → Madinah' },
              { origin: 'Dubai (DXB)', dest: 'Istanbul (IST)', label: 'Dubai → Istanbul' },
              { origin: 'Dhaka (DAC)', dest: 'Jeddah (JED)', label: 'Dhaka → Jeddah' }
            ].map((shortcut, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setOrigin(shortcut.origin);
                  setDestination(shortcut.dest);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF2FB] hover:text-[#0969E8] border border-gray-200 transition-colors text-[11px] cursor-pointer"
              >
                {shortcut.label}
              </button>
            ))}
          </div>
        </form>
      ) : (
        /* Safe Isolated Iframe View */
        <div className="w-full min-h-[200px] rounded-xl overflow-hidden border border-gray-100 bg-[#F8FAFC]">
          <iframe
            srcDoc={iframeHtml}
            title="Aviasales Live Partner Airfare Search"
            className="w-full min-h-[220px] border-0"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      )}

      {/* Direct Fallback Action Bar & Transparency */}
      <div className="mt-4 pt-3 border-t border-[#EAF2FB] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#5E6B82]">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs">
          <ShieldCheck className="w-4 h-4 text-[#21B96F] shrink-0" />
          <span>
            Affiliate Partner ID: <strong className="text-[#071B49] font-mono">737968</strong> (Aviasales / Travelpayouts)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.aviasales.com/search?marker=737968"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs font-semibold text-[#0969E8] hover:underline flex items-center gap-1"
          >
            <span>Search Directly on Aviasales.com</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
