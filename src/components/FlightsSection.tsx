import React, { useState } from 'react';
import {
  Plane,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Luggage,
  Calendar,
  ExternalLink,
  ChevronRight,
  TrendingDown,
  Info
} from 'lucide-react';
import { CurrencyConfig } from '../types';
import { AviasalesWidget } from './AviasalesWidget';
import { buildAviasalesRouteUrl } from '../utils/aviasales';

interface FlightsSectionProps {
  currency: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
  onBookAffiliate?: (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
  }) => void;
}

interface FlightRouteDeal {
  id: string;
  fromCity: string;
  fromCode: string;
  toCity: string;
  toCode: string;
  country: string;
  airline: string;
  flightType: 'Direct' | '1 Stop';
  duration: string;
  startingPriceUSD: number;
  badge?: string;
  isPilgrimRoute?: boolean;
}

const POPULAR_FLIGHT_ROUTES: FlightRouteDeal[] = [
  {
    id: 'route-jeddah',
    fromCity: 'New York / London',
    fromCode: 'JFK / LHR',
    toCity: 'Jeddah (King Abdulaziz)',
    toCode: 'JED',
    country: 'Saudi Arabia',
    airline: 'Saudia / Emirates',
    flightType: 'Direct',
    duration: '11h 20m',
    startingPriceUSD: 460,
    badge: 'Umrah Gateway',
    isPilgrimRoute: true
  },
  {
    id: 'route-madinah',
    fromCity: 'Dubai / Cairo',
    fromCode: 'DXB / CAI',
    toCity: 'Madinah (Prince Mohammad)',
    toCode: 'MED',
    country: 'Saudi Arabia',
    airline: 'Saudia / flynas',
    flightType: 'Direct',
    duration: '2h 45m',
    startingPriceUSD: 290,
    badge: 'Spiritual City',
    isPilgrimRoute: true
  },
  {
    id: 'route-iah-medina',
    fromCity: 'Houston',
    fromCode: 'IAH',
    toCity: 'Madinah (Prince Mohammad)',
    toCode: 'MED',
    country: 'Saudi Arabia',
    airline: 'Qatar Airways / Turkish Airlines / Saudia',
    flightType: '1 Stop',
    duration: '16h 40m',
    startingPriceUSD: 740,
    badge: 'US Pilgrim Route',
    isPilgrimRoute: true
  },
  {
    id: 'route-dubai',
    fromCity: 'London',
    fromCode: 'LHR',
    toCity: 'Dubai Intl',
    toCode: 'DXB',
    country: 'UAE',
    airline: 'Emirates / British Airways',
    flightType: 'Direct',
    duration: '7h 10m',
    startingPriceUSD: 380,
    badge: 'Popular Hub'
  },
  {
    id: 'route-istanbul',
    fromCity: 'New York',
    fromCode: 'JFK',
    toCity: 'Istanbul Airport',
    toCode: 'IST',
    country: 'Turkey',
    airline: 'Turkish Airlines',
    flightType: 'Direct',
    duration: '9h 40m',
    startingPriceUSD: 395,
    badge: 'Best Value'
  },
  {
    id: 'route-london',
    fromCity: 'New York',
    fromCode: 'JFK',
    toCity: 'London Heathrow',
    toCode: 'LHR',
    country: 'United Kingdom',
    airline: 'Virgin Atlantic / BA',
    flightType: 'Direct',
    duration: '6h 55m',
    startingPriceUSD: 360,
    badge: 'Top Transit'
  },
  {
    id: 'route-kuala-lumpur',
    fromCity: 'London / Dubai',
    fromCode: 'LHR / DXB',
    toCity: 'Kuala Lumpur',
    toCode: 'KUL',
    country: 'Malaysia',
    airline: 'Malaysia Airlines / Qatar',
    flightType: '1 Stop',
    duration: '12h 30m',
    startingPriceUSD: 490,
    badge: 'Halal Tourism'
  }
];

export const FlightsSection: React.FC<FlightsSectionProps> = ({
  currency,
  onNavigate,
  onBookAffiliate
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'umrah' | 'global'>('all');

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const filteredRoutes = POPULAR_FLIGHT_ROUTES.filter((route) => {
    if (activeFilter === 'umrah') return route.isPilgrimRoute;
    if (activeFilter === 'global') return !route.isPilgrimRoute;
    return true;
  });

  const handleRouteClick = (route: FlightRouteDeal) => {
    const affiliateUrl = buildAviasalesRouteUrl(route.fromCode, route.toCode);
    if (onBookAffiliate) {
      onBookAffiliate({
        title: `${route.fromCity} (${route.fromCode}) to ${route.toCity} (${route.toCode})`,
        partnerName: 'Aviasales Verified Flights',
        affiliateUrl,
        price: formatPrice(route.startingPriceUSD)
      });
    } else {
      window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="flights-section" className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-[#EAF2FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-2">
              <Plane className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Official Flight Search Partner</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
              Global Flights & Airfare Deals
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] mt-1 max-w-2xl">
              Compare fares across 1,000+ airlines, low-cost carriers, and specialized Umrah pilgrimage routes
              with live rates powered by Aviasales.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate && onNavigate('flights')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#0969E8]/30 hover:border-[#0969E8] text-[#0969E8] text-xs font-bold rounded-xl shadow-sm hover:shadow transition-all"
            >
              <span>Explore All Flight Routes</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Embedded Aviasales Affiliate Search Widget */}
        <div className="mb-10">
          <AviasalesWidget
            title="Search Lowest Airfares with Aviasales"
            subtitle="Real-time multi-airline flight comparison with transparent booking fees."
          />
        </div>

        {/* Popular Route Deals Grid */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#071B49]">Trending Airfare Routes</span>
              <span className="text-xs bg-[#EAF2FB] text-[#0969E8] font-bold px-2 py-0.5 rounded-full">
                Updated Hourly
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-gray-200">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[#0969E8] text-white shadow-sm'
                    : 'text-[#5E6B82] hover:text-[#071B49]'
                }`}
              >
                All Routes
              </button>
              <button
                onClick={() => setActiveFilter('umrah')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  activeFilter === 'umrah'
                    ? 'bg-[#071B49] text-white shadow-sm'
                    : 'text-[#5E6B82] hover:text-[#071B49]'
                }`}
              >
                Umrah Routes
              </button>
              <button
                onClick={() => setActiveFilter('global')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  activeFilter === 'global'
                    ? 'bg-[#0969E8] text-white shadow-sm'
                    : 'text-[#5E6B82] hover:text-[#071B49]'
                }`}
              >
                Global Cities
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-2xl border border-gray-100 p-4 hover:border-[#0969E8] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        route.isPilgrimRoute
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-[#EAF2FB] text-[#0969E8]'
                      }`}
                    >
                      {route.badge}
                    </span>
                    <span className="text-xs text-[#5E6B82] flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3" />
                      {route.duration} ({route.flightType})
                    </span>
                  </div>

                  {/* Route Visualizer */}
                  <div
                    onClick={() => handleRouteClick(route)}
                    title={`Check ${route.fromCode} to ${route.toCode} fares on Aviasales`}
                    className="flex items-center justify-between gap-3 mb-3 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-lg font-black text-[#071B49]">{route.fromCode}</div>
                      <div className="text-xs text-[#5E6B82] truncate max-w-[110px]">{route.fromCity}</div>
                    </div>

                    <div className="flex-1 flex flex-col items-center">
                      <div className="w-full flex items-center justify-center gap-1 text-[10px] text-gray-400">
                        <span className="h-[1px] bg-gray-300 flex-1" />
                        <Plane className="w-3.5 h-3.5 text-[#0969E8] -rotate-45" />
                        <span className="h-[1px] bg-gray-300 flex-1" />
                      </div>
                      <span className="text-[10px] text-gray-500 mt-0.5">{route.airline}</span>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-black text-[#0969E8]">{route.toCode}</div>
                      <div className="text-xs text-[#5E6B82] truncate max-w-[110px]">{route.toCity}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-[10px] text-[#5E6B82] uppercase tracking-wider block font-medium">
                      Starting Fares
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base sm:text-lg font-black text-[#21B96F]">
                        {formatPrice(route.startingPriceUSD)}
                      </span>
                      <span className="text-[10px] text-gray-400">/ traveler</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRouteClick(route)}
                    title={`Check ${route.fromCode} to ${route.toCode} fares on Aviasales`}
                    className="px-3.5 py-2 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold rounded-xl shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Check Fares</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Disclosure Footer Note */}
        <div className="mt-8 p-3.5 bg-white rounded-xl border border-gray-100 flex items-start gap-2.5 text-xs text-[#5E6B82]">
          <Info className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
          <p>
            <strong>Affiliate Transparency:</strong> When you search or book flights via Aviasales through our
            partner link (Marker: 737968), Travel DuurDesh may earn a small referral commission at no additional
            cost to you. All fares, baggage policies, and tickets are provided directly by airlines and authorized travel agencies.
          </p>
        </div>
      </div>
    </section>
  );
};
