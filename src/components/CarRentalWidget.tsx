import React, { useState } from 'react';
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MapPin,
  Clock,
  Fuel,
  KeyRound,
  ChevronRight
} from 'lucide-react';

interface CarRentalWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const CarRentalWidget: React.FC<CarRentalWidgetProps> = ({
  className = '',
  title = 'Worldwide Car Rental & Airport Transfers (EconomyBookings)',
  subtitle = 'Compare rental car deals across 800+ car hire suppliers (Enterprise, Hertz, Europcar, Avis, Sixt, Budget, Alamo) at 20,000+ airport locations.',
  compact = false
}) => {
  const [selectedAirport, setSelectedAirport] = useState<string>('JED');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Exact Travelpayouts / EconomyBookings script HTML inside an isolated responsive iframe
  const iframeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 6px;
      background: #FFFFFF;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow-x: hidden;
      min-height: 200px;
    }
    #economy-widget-wrapper {
      width: 100%;
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iframe {
      width: 100% !important;
      border: 0 !important;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <div id="economy-widget-wrapper">
    <script async src="https://tpwdg.com/content?trs=570661&shmarker=737968&locale=en&powered_by=true&border_radius=6&plain=true&show_logo=true&color_background=%23ffca28&color_button=%2355a539&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10" charset="utf-8"></script>
  </div>
</body>
</html>
`;

  const POPULAR_AIRPORTS = [
    { code: 'JED', name: 'Jeddah King Abdulaziz (JED)', city: 'Jeddah', country: 'Saudi Arabia', note: 'Ideal for Makkah Umrah road transfers' },
    { code: 'MED', name: 'Madinah Prince Mohammad (MED)', city: 'Madinah', country: 'Saudi Arabia', note: 'Prophet’s Mosque & Ziyarat sites' },
    { code: 'DXB', name: 'Dubai International (DXB)', city: 'Dubai', country: 'UAE', note: 'Sheikh Zayed Rd & Abu Dhabi highway' },
    { code: 'IST', name: 'Istanbul New Airport (IST)', city: 'Istanbul', country: 'Turkey', note: 'Bosphorus drive & Old Town access' },
    { code: 'KUL', name: 'Kuala Lumpur International (KUL)', city: 'Kuala Lumpur', country: 'Malaysia', note: 'Expressway to KLCC, Genting & Penang' },
    { code: 'LHR', name: 'London Heathrow (LHR)', city: 'London', country: 'United Kingdom', note: 'M4 / M25 highway connections' },
    { code: 'JFK', name: 'New York JFK Airport', city: 'New York', country: 'USA', note: 'Tri-state area, Long Island & Manhattan' }
  ];

  const directSearchUrl = 'https://c10.travelpayouts.com/click?shmarker=737968&promo_id=2020&source_type=link&type=click';

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E7EEF7] shadow-sm p-4 sm:p-7 transition-all ${className}`}
    >
      {/* Header Info & Attribution */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EAF2FB]">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FF8A2A]/15 to-[#0969E8]/15 flex items-center justify-center text-[#FF8A2A] shrink-0">
            <Car className="w-5 h-5 text-[#0969E8]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] tracking-tight">
                {title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0969E8] bg-[#0969E8]/10 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-[#FF8A2A]" />
                EconomyBookings
              </span>
            </div>
            <p className="text-xs text-[#5E6B82] mt-0.5 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        <a
          href={directSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-[#EAF2FB] hover:bg-[#d8e9fc] px-4 py-2 rounded-xl transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          <span>Open Full Search</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Official Partner Script Widget Container */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-[#CBD5E1]/60 bg-[#F8FAFC] p-2 sm:p-3 relative overflow-hidden shadow-inner">
          <div className="text-[11px] font-semibold text-[#64748B] mb-2 px-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-[#0969E8]" />
              Official EconomyBookings Live Search Banner
            </span>
            <span className="text-[10px] text-[#0969E8] font-bold bg-[#EAF2FB] px-2 py-0.5 rounded">
              800+ Suppliers
            </span>
          </div>

          <div className="w-full relative min-h-[220px] bg-white rounded-xl border border-gray-200 overflow-hidden">
            <iframe
              title="EconomyBookings Car Rental Search Widget"
              srcDoc={iframeHtml}
              className="w-full min-h-[220px] sm:min-h-[240px] h-[240px] border-0"
              scrolling="auto"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </div>

        {/* Quick Airport Transport Destinations */}
        {!compact && (
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#071B49]">
                <MapPin className="w-3.5 h-3.5 text-[#0969E8]" />
                <span>Popular Airport Rental Locations:</span>
              </div>
              <span className="text-[11px] text-[#64748B]">Click to preview rates</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {POPULAR_AIRPORTS.map((airport) => (
                <a
                  key={airport.code}
                  href={directSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedAirport(airport.code)}
                  className={`p-2.5 rounded-xl border text-left transition-all group flex flex-col justify-between ${
                    selectedAirport === airport.code
                      ? 'border-[#0969E8] bg-[#EAF2FB]/50'
                      : 'border-gray-100 bg-[#F8FAFC] hover:border-[#0969E8]/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#071B49] group-hover:text-[#0969E8]">
                      {airport.city}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-white text-[#0969E8] px-1.5 py-0.5 rounded border border-blue-100">
                      {airport.code}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#64748B] mt-1 line-clamp-1">
                    {airport.note}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Value Highlights */}
        {!compact && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            <div className="bg-[#F8FAFC] rounded-xl p-3 border border-gray-100 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-[#071B49]">Free Cancellation</div>
                <div className="text-[#64748B] text-[11px] mt-0.5">
                  Cancel or modify without penalty on most cars up to 48 hours prior.
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3 border border-gray-100 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-[#071B49]">No Hidden Surcharges</div>
                <div className="text-[#64748B] text-[11px] mt-0.5">
                  Transparent collision damage waivers, airport taxes, and mileage terms.
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl p-3 border border-gray-100 flex items-start gap-2.5">
              <Fuel className="w-4 h-4 text-[#FF8A2A] shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-[#071B49]">Fair Fuel Policies</div>
                <div className="text-[#64748B] text-[11px] mt-0.5">
                  Full-to-full fuel guarantees prevent inflated gas refill fees at return.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Affiliate Partner Disclosure Footer */}
      <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#21B96F]" />
          <span>
            Official Partner: <strong className="text-[#071B49]">EconomyBookings</strong> via Travelpayouts (Marker: <code className="text-[#0969E8] font-mono">737968</code>)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Campaign ID: 10 | Promo ID: 2082</span>
          <a
            href={directSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0969E8] font-semibold hover:underline flex items-center gap-0.5"
          >
            <span>Compare Rates</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
