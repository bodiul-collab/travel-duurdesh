import React, { useState } from 'react';
import {
  Plane,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Luggage,
  Calendar,
  ExternalLink,
  ChevronRight,
  Info,
  TrendingDown,
  AlertCircle,
  HelpCircle,
  Award,
  Globe2,
  DollarSign
} from 'lucide-react';
import { CurrencyConfig } from '../types';
import { AviasalesWidget } from './AviasalesWidget';
import { buildAviasalesRouteUrl } from '../utils/aviasales';

interface FlightsPageProps {
  currency: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
  onBookAffiliate?: (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
  }) => void;
}

interface FlightDeal {
  id: string;
  originCity: string;
  originCode: string;
  destinationCity: string;
  destinationCode: string;
  country: string;
  airline: string;
  flightType: 'Direct' | '1 Stop' | '2 Stops';
  duration: string;
  priceUSD: number;
  category: 'umrah' | 'europe' | 'middle-east' | 'asia' | 'americas';
  badge?: string;
  features: string[];
}

const FLIGHT_DEALS: FlightDeal[] = [
  // Umrah Pilgrims Flights
  {
    id: 'fl-jeddah-lhr',
    originCity: 'London Heathrow',
    originCode: 'LHR',
    destinationCity: 'Jeddah (King Abdulaziz)',
    destinationCode: 'JED',
    country: 'Saudi Arabia',
    airline: 'Saudia / British Airways',
    flightType: 'Direct',
    duration: '6h 15m',
    priceUSD: 440,
    category: 'umrah',
    badge: 'Complimentary Zamzam Allowed',
    features: ['Includes 2x 23kg checked bags', 'Complimentary 5L Zamzam', 'Halal meal service']
  },
  {
    id: 'fl-jeddah-jfk',
    originCity: 'New York JFK',
    originCode: 'JFK',
    destinationCity: 'Jeddah (King Abdulaziz)',
    destinationCode: 'JED',
    country: 'Saudi Arabia',
    airline: 'Saudia',
    flightType: 'Direct',
    duration: '11h 45m',
    priceUSD: 590,
    category: 'umrah',
    badge: 'Direct Pilgrim Flight',
    features: ['Non-stop flight', 'In-flight prayer area & announcement', '2x 23kg luggage']
  },
  {
    id: 'fl-medina-iah',
    originCity: 'Houston George Bush',
    originCode: 'IAH',
    destinationCity: 'Madinah (Prince Mohammad)',
    destinationCode: 'MED',
    country: 'Saudi Arabia',
    airline: 'Qatar Airways / Turkish Airlines / Saudia',
    flightType: '1 Stop',
    duration: '16h 40m',
    priceUSD: 740,
    category: 'umrah',
    badge: 'Top US Pilgrim Route',
    features: [
      '1-stop smooth connection to Madinah',
      'Complimentary 5L Zamzam container',
      'Includes 2x 23kg checked baggage',
      'In-flight Halal dining & prayer alerts'
    ]
  },
  {
    id: 'fl-medina-dxb',
    originCity: 'Dubai Intl',
    originCode: 'DXB',
    destinationCity: 'Madinah (Prince Mohammad)',
    destinationCode: 'MED',
    country: 'Saudi Arabia',
    airline: 'flynas / Emirates',
    flightType: 'Direct',
    duration: '2h 50m',
    priceUSD: 185,
    category: 'umrah',
    badge: 'Fast Spiritual Transit',
    features: ['Direct landing in Madinah', 'Flexible rebooking', 'Close to Prophet’s Mosque']
  },
  {
    id: 'fl-jeddah-dac',
    originCity: 'Dhaka',
    originCode: 'DAC',
    destinationCity: 'Jeddah (King Abdulaziz)',
    destinationCode: 'JED',
    country: 'Saudi Arabia',
    airline: 'Biman Bangladesh / Saudia',
    flightType: 'Direct',
    duration: '6h 40m',
    priceUSD: 480,
    category: 'umrah',
    badge: 'High Demand Pilgrimage',
    features: ['Generous 2x 23kg allowance', 'Dedicated Hajj & Umrah staff', 'Hot Halal dining']
  },

  // Middle East & Gulf
  {
    id: 'fl-dxb-lhr',
    originCity: 'London Heathrow',
    originCode: 'LHR',
    destinationCity: 'Dubai Intl',
    destinationCode: 'DXB',
    country: 'United Arab Emirates',
    airline: 'Emirates',
    flightType: 'Direct',
    duration: '7h 10m',
    priceUSD: 390,
    category: 'middle-east',
    badge: 'Best In-Flight Service',
    features: ['Award-winning ICE entertainment', 'Multi-course gourmet meals', 'Free Wi-Fi for members']
  },
  {
    id: 'fl-doha-jfk',
    originCity: 'New York JFK',
    originCode: 'JFK',
    destinationCity: 'Doha Hamad',
    destinationCode: 'DOH',
    country: 'Qatar',
    airline: 'Qatar Airways',
    flightType: 'Direct',
    duration: '12h 25m',
    priceUSD: 620,
    category: 'middle-east',
    badge: 'Skytrax 5-Star',
    features: ['Qsuite options', 'Hamad airport transit lounge', 'Free stopover packages']
  },
  {
    id: 'fl-istanbul-lhr',
    originCity: 'London Gatwick',
    originCode: 'LGW',
    destinationCity: 'Istanbul Airport',
    destinationCode: 'IST',
    country: 'Turkey',
    airline: 'Turkish Airlines',
    flightType: 'Direct',
    duration: '3h 50m',
    priceUSD: 165,
    category: 'middle-east',
    badge: 'Affordable Euro-Asia Hub',
    features: ['Complimentary hot meals', 'Over 300 global connections', 'Touristanbul free city tour']
  },

  // Europe & Americas
  {
    id: 'fl-london-jfk',
    originCity: 'New York JFK',
    originCode: 'JFK',
    destinationCity: 'London Heathrow',
    destinationCode: 'LHR',
    country: 'United Kingdom',
    airline: 'Virgin Atlantic / BA',
    flightType: 'Direct',
    duration: '6h 55m',
    priceUSD: 360,
    category: 'europe',
    badge: 'Transatlantic Daily',
    features: ['Frequent hourly departures', 'Modern Boeing 787 / A350', 'Complimentary drinks & meals']
  },
  {
    id: 'fl-paris-jfk',
    originCity: 'New York JFK',
    originCode: 'JFK',
    destinationCity: 'Paris Charles de Gaulle',
    destinationCode: 'CDG',
    country: 'France',
    airline: 'Air France / Delta',
    flightType: 'Direct',
    duration: '7h 20m',
    priceUSD: 395,
    category: 'europe',
    badge: 'Cultural Gateway',
    features: ['French gastronomy on board', 'High-speed rail connections from CDG', 'Spacious cabin']
  },

  // Asia & Subcontinent
  {
    id: 'fl-kl-lhr',
    originCity: 'London Heathrow',
    originCode: 'LHR',
    destinationCity: 'Kuala Lumpur',
    destinationCode: 'KUL',
    country: 'Malaysia',
    airline: 'Malaysia Airlines',
    flightType: 'Direct',
    duration: '12h 45m',
    priceUSD: 520,
    category: 'asia',
    badge: 'Halal Tourism Hub',
    features: ['Direct Southeast Asia route', '100% Halal certified dining', 'Warm Malaysian hospitality']
  },
  {
    id: 'fl-singapore-lhr',
    originCity: 'London Heathrow',
    originCode: 'LHR',
    destinationCity: 'Singapore Changi',
    destinationCode: 'SIN',
    country: 'Singapore',
    airline: 'Singapore Airlines',
    flightType: 'Direct',
    duration: '13h 05m',
    priceUSD: 575,
    category: 'asia',
    badge: 'World’s Best Airport',
    features: ['A380 luxury experience', 'Changi Jewel transit hub', 'Ergonomic seating']
  }
];

const AIRLINE_PARTNERS = [
  { name: 'Saudia Airlines', routes: 'Direct Jeddah, Madinah & Riyadh', rating: '4.7/5', highlight: 'Pilgrim-friendly' },
  { name: 'Emirates', routes: 'Global Dubai transit hub', rating: '4.9/5', highlight: 'World-class comfort' },
  { name: 'Qatar Airways', routes: 'Global Doha Hamad hub', rating: '4.9/5', highlight: 'Skytrax Airline of the Year' },
  { name: 'Turkish Airlines', routes: 'Over 300 destinations via Istanbul', rating: '4.8/5', highlight: 'Free transit tour' },
  { name: 'flynas', routes: 'Low-cost domestic & regional Saudi flights', rating: '4.5/5', highlight: 'Budget Umrah flights' },
  { name: 'Singapore Airlines', routes: 'Asia-Pacific luxury transit', rating: '4.9/5', highlight: 'Top safety & service' }
];

const FLIGHT_FAQS = [
  {
    question: 'How do I get the cheapest flight fares with Aviasales?',
    answer:
      'Aviasales scans hundreds of airlines, low-cost carriers, and verified online travel agents in real time. For the best prices, book 4–8 weeks in advance for international routes, stay flexible by ±3 days on departure dates, and avoid flying on Friday or Sunday peak travel windows.'
  },
  {
    question: 'What are the baggage rules for Zamzam water on Umrah flights?',
    answer:
      'Most international carriers flying out of Jeddah (JED) or Madinah (MED)—including Saudia, flynas, Emirates, Turkish Airlines, and Qatar Airways—permit one 5-liter factory-sealed bottle of Zamzam water free of charge in addition to your standard checked baggage allowance. The Zamzam box must be purchased at the airport’s official packaging center.'
  },
  {
    question: 'Can I perform Umrah on a tourist eVisa or transit visa?',
    answer:
      'Yes! Citizens of over 60 countries and holders of valid US, UK, or Schengen visas can enter Saudi Arabia on a 1-year multiple-entry tourist eVisa and perform Umrah throughout the entire year outside the strict Hajj season. Additionally, Saudia offers a 96-hour Stopover Visa with free hotel stays on selected itineraries.'
  },
  {
    question: 'Are flight prices on Aviasales all-inclusive?',
    answer:
      'Yes. Aviasales shows total final prices including all mandatory airport taxes and government security surcharges. When you click through to book with the airline or ticket agency, you pay the exact advertised price with zero markup.'
  }
];

export const FlightsPage: React.FC<FlightsPageProps> = ({
  currency,
  onNavigate,
  onBookAffiliate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const filteredDeals = FLIGHT_DEALS.filter((deal) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'europe' && (deal.category === 'europe' || deal.category === 'americas' || deal.originCode === 'IAH' || deal.originCode === 'JFK')) {
      return true;
    }
    return deal.category === selectedCategory;
  });

  const handleBookFlight = (deal: FlightDeal) => {
    const affiliateUrl = buildAviasalesRouteUrl(deal.originCode, deal.destinationCode);
    if (onBookAffiliate) {
      onBookAffiliate({
        title: `${deal.originCity} (${deal.originCode}) to ${deal.destinationCity} (${deal.destinationCode})`,
        partnerName: 'Aviasales Verified Flights',
        affiliateUrl,
        price: formatPrice(deal.priceUSD)
      });
    } else {
      window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Page Header / Hero Banner */}
      <div className="bg-gradient-to-br from-[#071B49] via-[#09357A] to-[#0969E8] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-white/70 mb-4">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span className="text-white font-medium">Flights & Airfare</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8A2A] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-[#FF8A2A]" />
              <span>Official Aviasales Flight Search</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-syncopate uppercase">
              Global Flights & Airfares
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              Search and compare real-time airfares across 1,000+ airlines, low-cost carriers, and specialized
              Umrah pilgrimage flights landing directly in Jeddah and Madinah.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/90">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F]" />
                Zero Booking Surcharges
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F]" />
                1,200+ Airlines Compared
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F]" />
                Pilgrim Zamzam Allowances
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20 space-y-12">
        {/* Interactive Aviasales Widget Embed */}
        <AviasalesWidget
          title="Search Live Airfares with Aviasales"
          subtitle="Instant route comparison with flexible dates, baggage details, and guaranteed partner fares."
        />

        {/* Category Navigation Pills */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#071B49] font-syncopate uppercase">
                Featured Routes & Starting Fares
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6B82]">
                Curated low-fare flights verified across major airlines and partner agencies.
              </p>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {[
                { id: 'all', label: 'All Routes' },
                { id: 'umrah', label: 'Umrah Flights (JED & MED)' },
                { id: 'middle-east', label: 'Middle East' },
                { id: 'europe', label: 'Europe & Americas' },
                { id: 'asia', label: 'Asia & Subcontinent' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-[#0969E8] text-white shadow-sm'
                      : 'bg-white text-[#5E6B82] hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deals Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#0969E8] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        deal.category === 'umrah'
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-[#EAF2FB] text-[#0969E8]'
                      }`}
                    >
                      {deal.badge || deal.country}
                    </span>
                    <span className="text-xs text-[#5E6B82] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {deal.duration} ({deal.flightType})
                    </span>
                  </div>

                  {/* Origin to Destination Visualizer */}
                  <div
                    onClick={() => handleBookFlight(deal)}
                    title={`Click to check ${deal.originCode} to ${deal.destinationCode} fares on Aviasales`}
                    className="flex items-center justify-between gap-2 mb-4 bg-[#F8FAFC] hover:bg-[#F1F5F9] p-3 rounded-xl border border-gray-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xl font-black text-[#071B49]">{deal.originCode}</div>
                      <div className="text-xs text-[#5E6B82] truncate max-w-[100px]">{deal.originCity}</div>
                    </div>

                    <div className="flex-1 flex flex-col items-center px-2">
                      <div className="w-full flex items-center justify-center gap-1 text-[10px] text-gray-400">
                        <span className="h-[1px] bg-gray-300 flex-1" />
                        <Plane className="w-3.5 h-3.5 text-[#0969E8] -rotate-45" />
                        <span className="h-[1px] bg-gray-300 flex-1" />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500 mt-1 truncate max-w-[120px]">
                        {deal.airline}
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-black text-[#0969E8]">{deal.destinationCode}</div>
                      <div className="text-xs text-[#5E6B82] truncate max-w-[100px]">{deal.destinationCity}</div>
                    </div>
                  </div>

                  {/* Route Highlights List */}
                  <ul className="space-y-1.5 mb-4">
                    {deal.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#5E6B82]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-[#5E6B82] block tracking-wider">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-[#21B96F]">
                        {formatPrice(deal.priceUSD)}
                      </span>
                      <span className="text-[10px] text-gray-400">/ person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookFlight(deal)}
                    title={`Check ${deal.originCode} to ${deal.destinationCode} live fares on Aviasales`}
                    className="px-4 py-2.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Check Fares</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Umrah Pilgrims Flight Guide Banner */}
        <div className="bg-gradient-to-r from-[#071B49] via-[#09357A] to-[#071B49] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB800] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              Spiritual Journey Essentials
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-syncopate uppercase">
              Flying for Umrah: Key Traveler Advice
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              When booking your flight to Jeddah (JED) or Madinah (MED), consider whether you plan to start your
              rituals in Makkah first or visit the Prophet’s Mosque in Madinah first.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <Luggage className="w-4 h-4 text-[#4DA3FF] mb-1.5" />
                <h4 className="text-xs font-bold text-white mb-0.5">Zamzam Water</h4>
                <p className="text-[11px] text-white/70">
                  Most airlines allow one 5L sealed Zamzam box complimentary outside standard baggage quotas.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <Plane className="w-4 h-4 text-[#FFB800] mb-1.5" />
                <h4 className="text-xs font-bold text-white mb-0.5">Miqat Announcement</h4>
                <p className="text-[11px] text-white/70">
                  Airlines like Saudia, flynas, Emirates, and Qatar announce the Miqat boundary 30 minutes before arrival.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#21B96F] mb-1.5" />
                <h4 className="text-xs font-bold text-white mb-0.5">Saudi Tourist eVisa</h4>
                <p className="text-[11px] text-white/70">
                  Over 60 nationalities and US/UK/Schengen visa holders can fly for Umrah on a 1-year tourist eVisa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Airline Partners Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#071B49] font-syncopate uppercase">
              Compared Global Airline Partners
            </h3>
            <span className="text-xs text-[#0969E8] font-bold">1,200+ Global Carriers</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AIRLINE_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#071B49]">{partner.name}</h4>
                    <span className="text-[10px] font-bold text-[#21B96F] bg-[#21B96F]/10 px-2 py-0.5 rounded-full">
                      {partner.rating}
                    </span>
                  </div>
                  <p className="text-xs text-[#5E6B82] mt-0.5">{partner.routes}</p>
                  <span className="text-[10px] font-semibold text-[#0969E8]">{partner.highlight}</span>
                </div>

                <a
                  href="https://www.aviasales.com/search?marker=737968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#F8FAFC] hover:bg-[#EAF2FB] text-[#0969E8] rounded-xl transition-colors shrink-0"
                  title={`Search ${partner.name} on Aviasales`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Flight Booking FAQ Accordion */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#0969E8]" />
            <h3 className="text-base sm:text-lg font-bold text-[#071B49] font-syncopate uppercase">
              Frequently Asked Questions About Flight Booking
            </h3>
          </div>

          <div className="space-y-2.5">
            {FLIGHT_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 font-bold text-sm text-[#071B49] hover:text-[#0969E8] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
                      activeFaq === idx ? 'rotate-90 text-[#0969E8]' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#5E6B82] border-t border-gray-100 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Official Affiliate Disclosure Notice */}
        <div className="p-4 sm:p-5 bg-white rounded-2xl border border-gray-200 text-xs text-[#5E6B82] space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#071B49]">
            <Info className="w-4 h-4 text-[#0969E8]" />
            <span>Affiliate Disclosure & Transparency</span>
          </div>
          <p className="leading-relaxed">
            Travel DuurDesh partners with <strong>Aviasales / Travelpayouts</strong> (Affiliate Partner ID: <code className="text-[#071B49] font-mono">737968</code>) to deliver live, transparent airfare search and price comparisons. When you click through our partner links or use the search widget to book tickets, Travel DuurDesh may receive a referral commission at zero extra cost to you. We do not sell airline tickets directly; all reservations, baggage rules, seat assignments, and refunds are managed directly by the issuing airlines and accredited travel agencies.
          </p>
        </div>
      </div>
    </div>
  );
};
