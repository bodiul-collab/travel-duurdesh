import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  Search,
  Star,
  ShieldCheck,
  Heart,
  ChevronRight,
  Compass,
  DollarSign,
  Coffee,
  Users,
  Utensils,
  Award,
  Sparkles,
  Plane,
  Clock,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  SlidersHorizontal,
  ArrowRight,
  Footprints,
  Luggage,
  BedDouble,
  Wifi,
  Bus,
  Sparkle
} from 'lucide-react';
import { CurrencyConfig } from '../types';

interface HotelsPageProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const HotelsPage: React.FC<HotelsPageProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  // Interactive mock filter state for the Hotel Search Widget
  const [searchCity, setSearchCity] = useState('Makkah');
  const [hotelTypeFilter, setHotelTypeFilter] = useState<'all' | 'luxury' | 'budget' | 'family' | 'food'>('all');
  const [selectedDestinationTab, setSelectedDestinationTab] = useState<string>('makkah');

  // Convert USD price to current selected currency
  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const popularHotelDestinations = [
    {
      id: 'makkah',
      title: 'Hotels Near Masjid al-Haram',
      city: 'Makkah',
      country: 'Saudi Arabia',
      distanceInfo: '0m – 800m from King Abdulaziz & King Fahd Gates',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$45 - $95 / night',
        midRange: '$110 - $240 / night',
        luxury: '$280 - $750+ / night'
      },
      bestNeighborhoods: ['Abraj Al Bait (Clock Towers)', 'Ajyad Street', 'Ibrahim Al Khalil Road', 'Aziziyah (with shuttle)'],
      travelTips: 'For elderly pilgrims or families with young children, choose hotels in the Abraj Al Bait or Jabal Omar complexes for direct courtyard access and private prayer audio links. Pilgrims on a budget can find exceptional value in Aziziyah or Kudai with 24/7 dedicated shuttle buses running straight to the Haram terminals.',
      highlights: ['Direct Kaaba & Haram courtyard views available', 'In-room audio broadcast of Haram Salah', 'Dedicated prayer halls connected to Haram', 'Walking distance to King Abdulaziz Gate'],
      placeholderLink: '[See Hotels in Makkah]'
    },
    {
      id: 'madinah',
      title: 'Hotels Near Masjid al-Nabawi',
      city: 'Madinah',
      country: 'Saudi Arabia',
      distanceInfo: '50m – 500m from the Prophet’s Mosque Courtyard',
      image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$40 - $85 / night',
        midRange: '$95 - $200 / night',
        luxury: '$220 - $600+ / night'
      },
      bestNeighborhoods: ['Northern Central Area (Markaziyah Shamaliyah)', 'Southern Central Area (Markaziyah Janubiyah)', 'Quba Road'],
      travelTips: 'The Northern Central Area is the most coveted for its direct access to the women’s prayer gates (Gates 16–25) and proximity to the Rawdah entrance. Madinah is pedestrian-friendly; ensure your hotel is within the immediate ring road (King Faisal Road) to eliminate taxi waits during Fardh prayers.',
      highlights: ['Direct access to women and men prayer gates', 'Steps to Rawdah ash-Sharifah', 'Sumptuous Arabic & international halal breakfast buffets', 'Quiet, serene courtyard settings'],
      placeholderLink: '[See Hotels in Madinah]'
    },
    {
      id: 'dubai',
      title: 'Hotels in Dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      distanceInfo: 'Close to Metro, Dubai Mall & Jumeirah Beach',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$50 - $100 / night',
        midRange: '$120 - $260 / night',
        luxury: '$320 - $1,200+ / night'
      },
      bestNeighborhoods: ['Downtown Dubai', 'Dubai Marina & JBR', 'Deira & Bur Dubai (Budget & Heritage)', 'Business Bay'],
      travelTips: 'Stay near a Dubai Metro Red Line station for fast, affordable, traffic-free access across the entire city. For authentic halal dining and traditional souks on a budget, historic Deira and Al Fahidi offer outstanding clean boutique hotels at half the cost of Marina beachfront properties.',
      highlights: ['World-renowned luxury and family resort facilities', '100% halal culinary environment across all hotels', 'Infinity pools with Burj Khalifa and Marina views', 'Seamless access to air-conditioned transit'],
      placeholderLink: '[See Hotels in Dubai]'
    },
    {
      id: 'istanbul',
      title: 'Hotels in Istanbul',
      city: 'Istanbul',
      country: 'Turkey',
      distanceInfo: 'Steps from Blue Mosque, Hagia Sophia & Bosphorus',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$35 - $80 / night',
        midRange: '$90 - $190 / night',
        luxury: '$220 - $700+ / night'
      },
      bestNeighborhoods: ['Sultanahmet (Historic Heart)', 'Karaköy & Galata (Bohemian & Scenic)', 'Taksim & Beyoğlu', 'Beşiktaş & Bosphorus Strait'],
      travelTips: 'First-time visitors and cultural travelers should stay in Sultanahmet to walk to Hagia Sophia, the Blue Mosque, and the Grand Bazaar in under 10 minutes. For modern nightlife, contemporary art, and boutique cafés, choose Karaköy near the T1 tramway line.',
      highlights: ['Traditional Turkish breakfast (Kahvaltı) included at most stays', 'Stunning rooftop terraces overlooking the Bosphorus Strait', 'Centuries-old restored Ottoman mansion hotels', 'All dining establishments serve certified halal meat'],
      placeholderLink: '[See Hotels in Istanbul]'
    },
    {
      id: 'kuala-lumpur',
      title: 'Hotels in Kuala Lumpur',
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      distanceInfo: 'Steps from KLCC Petronas Towers & Bukit Bintang',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$25 - $60 / night',
        midRange: '$65 - $130 / night',
        luxury: '$150 - $400+ / night'
      },
      bestNeighborhoods: ['KLCC (Kuala Lumpur City Centre)', 'Bukit Bintang (Shopping & Halal Street Food)', 'Chinatown / Petaling Street', 'KL Sentral (Transit Hub)'],
      travelTips: 'Kuala Lumpur is universally acclaimed for offering the best 5-star hotel value in the world. You can routinely book luxury suites with skyline infinity pools for under $130 per night. If convenience for airport transit is your priority, pick KL Sentral for the 28-minute non-stop KLIA Ekspres train.',
      highlights: ['Unmatched value for 5-star international luxury brands', 'Rooftop infinity pools facing the illuminated Petronas Towers', 'Surrounded by verified halal Malaysian and Asian cuisine', 'Integrated covered pedestrian walkways throughout downtown'],
      placeholderLink: '[See Hotels in Kuala Lumpur]'
    },
    {
      id: 'dhaka',
      title: 'Hotels in Dhaka',
      city: 'Dhaka',
      country: 'Bangladesh',
      distanceInfo: 'Gulshan Diplomatic Zone, Banani & Hazrat Shahjalal Airport',
      image: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$25 - $50 / night',
        midRange: '$60 - $140 / night',
        luxury: '$160 - $350+ / night'
      },
      bestNeighborhoods: ['Gulshan 1 & 2 (Diplomatic & Expat Hub)', 'Banani (Trendy Dining & Boutiques)', 'Uttara (Closest to Airport)', 'Dhanmondi (Cultural Quarter)'],
      travelTips: 'Traffic in Dhaka can be dense; always book a hotel in the specific zone where your meetings or sightseeing will take place. For international visitors, business travelers, and diaspora families, Gulshan and Banani provide the highest security, backup power generators, high-speed Wi-Fi, and hundreds of authentic halal restaurants.',
      highlights: ['High-security diplomatic residential zones', 'Warm Bangladeshi hospitality with lavish breakfast buffets', 'Immediate proximity to traditional biryani houses & artisan shops', 'Full airport transfer and business concierge services'],
      placeholderLink: '[See Hotels in Dhaka]'
    },
    {
      id: 'london',
      title: 'Hotels in London',
      city: 'London',
      country: 'United Kingdom',
      distanceInfo: 'Near Central London Tube Stations & Major Landmarks',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$80 - $150 / night',
        midRange: '$170 - $320 / night',
        luxury: '$380 - $1,100+ / night'
      },
      bestNeighborhoods: ['Paddington & Marylebone (Near Edgware Rd Halal Dining)', 'South Kensington (Museum Quarter)', 'Bloomsbury & King’s Cross', 'Westminster & Covent Garden'],
      travelTips: 'Look for hotels within a 5-minute walk of an Underground (Tube) station in Zone 1 or 2. Muslim travelers frequently favor Paddington, Bayswater, and Marylebone due to the abundant concentration of halal Lebanese, Persian, and Indian dining along nearby Edgware Road and Queensway.',
      highlights: ['Historic Victorian and Georgian architecture', 'Unrivaled public transit connectivity via London Underground', 'Abundant halal dining options in central boroughs', 'Walking distance to Hyde Park, British Museum & Oxford Street'],
      placeholderLink: '[See Hotels in London]'
    },
    {
      id: 'new-york',
      title: 'Hotels in New York',
      city: 'New York',
      country: 'United States',
      distanceInfo: 'Manhattan Subway Corridors, Midtown & Central Park',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80',
      priceRange: {
        budget: '$110 - $200 / night',
        midRange: '$220 - $420 / night',
        luxury: '$480 - $1,400+ / night'
      },
      bestNeighborhoods: ['Midtown Manhattan (Times Square, Grand Central)', 'Upper West Side (Peaceful, Family-Friendly, Near Central Park)', 'Lower East Side & SoHo', 'Long Island City, Queens (Budget & 1 Subway Stop to Manhattan)'],
      travelTips: 'Hotel rooms in Manhattan are notoriously compact. If traveling with family, verify square footage or consider Long Island City across the East River for larger rooms at 30–40% lower rates with only a 10-minute subway commute into Grand Central or Times Square. Always account for mandatory New York resort/facility fees.',
      highlights: ['Iconic Manhattan skyline and Central Park views', '24/7 Subway access just steps from your lobby', 'World-famous halal street food carts (Halal Guys, King of Falafel)', 'Direct access to Broadway theaters, Fifth Avenue & MoMA'],
      placeholderLink: '[See Hotels in New York]'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#101C36] min-h-screen">
      {/* ============================================================ */}
      {/* SECTION 1: Page Title & Introduction */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#071B49] via-[#0B2567] to-[#0E2E7D] text-white pt-16 pb-20 overflow-hidden">
        {/* Subtle background ornamentation */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0969E8]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FFB800]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-6" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-medium">Hotels</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#4DA3FF]">
              <Building2 className="w-4 h-4 text-[#FFB800]" />
              <span>Worldwide Accommodation Directory & Umrah Stays</span>
            </div>

            {/* Exact Headline as requested */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Find the Best Hotels Worldwide with Travel DuurDesh
            </h1>

            {/* Intro Paragraph explaining global hotel search, Umrah, budget, luxury */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
              Welcome to the comprehensive hotel directory by Travel DuurDesh. Whether you are searching for serene accommodations steps from Masjid al-Haram in Makkah and Masjid al-Nabawi in Madinah, booking a high-rise luxury sanctuary overlooking the Dubai skyline, or scouting clean, budget-friendly boutique rooms in Istanbul, Kuala Lumpur, London, or Dhaka, we are here to assist. Travel DuurDesh empowers mindful travelers to compare authentic locations, transparent price ranges, halal dining availability, and family amenities—ensuring every stay is comfortable, secure, and memorable.
            </p>

            {/* Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Footprints className="w-5 h-5 text-[#FFB800] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Haram Proximity</div>
                  <div className="text-white/70 text-[11px]">0–500m verified stays</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#21B96F] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">No Hidden Fees</div>
                  <div className="text-white/70 text-[11px]">Zero markups</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Utensils className="w-5 h-5 text-[#FF8A2A] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Halal Dining</div>
                  <div className="text-white/70 text-[11px]">Verified breakfast & cafes</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Users className="w-5 h-5 text-[#4DA3FF] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Family Suites</div>
                  <div className="text-white/70 text-[11px]">Connecting rooms & cribs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Hotel Search Section */}
      {/* ============================================================ */}
      <section className="relative -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-blue-950/10 border border-[#E7EEF7] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider">
                <Search className="w-4 h-4" />
                <span>Smart Accommodation Search</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight mt-1">
                How to Find the Best Hotel Deals Worldwide
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#F3F8FF] text-[#0969E8] px-4 py-2 rounded-xl text-xs font-bold border border-blue-100">
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              <span>Independent Price Comparison</span>
            </div>
          </div>

          {/* Editorial Guidance on Comparison & Booking */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 text-xs text-[#5E6B82] leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#101C36] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                1. Location & Proximity First
              </h3>
              <p>
                In pilgrimage cities like Makkah and Madinah, walking distance directly dictates your daily stamina during five daily prayers. For global metropolises like London, New York, and Dubai, evaluate proximity to rapid transit stations (Tube, Subway, Metro) to bypass expensive taxi fares and peak-hour traffic jams.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#101C36] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                2. Comparing Real Amenities
              </h3>
              <p>
                Never judge a hotel solely by its star rating. Examine whether complimentary breakfast is certified halal, if prayer mats and Qibla direction indicators are provided, whether soundproofing isolates street bustle, and if complimentary shuttle buses run 24 hours a day during Ramadan and Hajj seasons.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#101C36] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                3. Booking Window Strategies
              </h3>
              <p>
                Hotels in Saudi Arabia during the last ten nights of Ramadan or school holiday breaks surge up to 300%. Secure non-refundable or free-cancellation rates 60 to 90 days in advance. For non-pilgrimage cities like Kuala Lumpur and Istanbul, mid-week bookings frequently drop rates by 25%.
              </p>
            </div>
          </div>

          {/* Explicit Placeholder as instructed by User: "[Insert Hotel Search Widget Here]" */}
          <div className="bg-[#F8FAFC] border-2 border-dashed border-[#BCD3F7] rounded-2xl p-6 sm:p-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0969E8]/10 text-[#0969E8] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Affiliate-Ready Search Engine Placement</span>
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <p className="text-lg sm:text-xl font-bold text-[#071B49] font-mono">
                [Insert Hotel Search Widget Here]
              </p>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Connect your preferred hotel metasearch engine (such as Booking.com, Agoda, or Expedia partner widgets) directly into this module. Travelers can filter by city, check-in dates, guest counts, budget tiers, and distance to Holy Harams.
              </p>
            </div>

            {/* Interactive Functional Preview of the Hotel Filter Controls */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-200 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-[#5E6B82] uppercase mb-1">Destination</label>
                  <div className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2.5">
                    <MapPin className="w-4 h-4 text-[#0969E8] shrink-0" />
                    <select
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                      className="bg-transparent font-semibold text-[#101C36] focus:outline-none w-full"
                    >
                      <option value="Makkah">Makkah, Saudi Arabia</option>
                      <option value="Madinah">Madinah, Saudi Arabia</option>
                      <option value="Dubai">Dubai, UAE</option>
                      <option value="Istanbul">Istanbul, Turkey</option>
                      <option value="Kuala Lumpur">Kuala Lumpur, Malaysia</option>
                      <option value="Dhaka">Dhaka, Bangladesh</option>
                      <option value="London">London, UK</option>
                      <option value="New York">New York, USA</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#5E6B82] uppercase mb-1">Check-in / Check-out</label>
                  <div className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2.5">
                    <Calendar className="w-4 h-4 text-[#0969E8] shrink-0" />
                    <span className="font-medium text-[#101C36]">Next 7 Days (Flexible)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#5E6B82] uppercase mb-1">Guests & Rooms</label>
                  <div className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2.5">
                    <Users className="w-4 h-4 text-[#0969E8] shrink-0" />
                    <span className="font-medium text-[#101C36]">2 Adults • 1 Room</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#5E6B82] uppercase mb-1">Search Action</label>
                  <button
                    onClick={() => {
                      const found = popularHotelDestinations.find(
                        (d) => d.city.toLowerCase() === searchCity.toLowerCase()
                      );
                      if (found) {
                        setSelectedDestinationTab(found.id);
                        const el = document.getElementById('popular-destinations-section');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>View Stays</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Popular Hotel Destinations */}
      {/* ============================================================ */}
      <section id="popular-destinations-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Curated Accommodation Hubs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Popular Hotel Destinations
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Detailed accommodation profiles for the world’s most frequented pilgrimage sanctuaries and vibrant metropolitan hubs. Explore typical price tiers, recommended neighborhood quarters, and expert insider booking advice.
          </p>
        </div>

        {/* Destination Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {popularHotelDestinations.map((dest) => {
            const isSelected = selectedDestinationTab === dest.id;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedDestinationTab(dest.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#071B49] text-white shadow-md shadow-blue-900/20 scale-[1.02]'
                    : 'bg-white text-[#5E6B82] hover:bg-[#F3F8FF] hover:text-[#071B49] border border-gray-200'
                }`}
              >
                {dest.city}
              </button>
            );
          })}
        </div>

        {/* Active Destination Spotlight Card */}
        {popularHotelDestinations
          .filter((d) => d.id === selectedDestinationTab)
          .map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-3xl border border-[#E7EEF7] shadow-lg overflow-hidden transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Column (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                  <img
                    src={dest.image}
                    alt={`${dest.title} - Travel DuurDesh hotel guide`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/90 via-[#071B49]/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block bg-[#0969E8] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {dest.country}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-syncopate">{dest.title}</h3>
                    <p className="text-xs text-white/80 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                      <span>{dest.distanceInfo}</span>
                    </p>
                  </div>
                </div>

                {/* Information Column (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                  {/* Price Tiers Grid */}
                  <div>
                    <h4 className="text-xs font-bold text-[#5E6B82] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-[#21B96F]" />
                      <span>Typical Nightly Price Ranges</span>
                    </h4>
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-3 text-center">
                        <div className="text-[10px] font-semibold text-gray-500 uppercase">Budget Tier</div>
                        <div className="text-xs sm:text-sm font-bold text-[#071B49] mt-0.5">{dest.priceRange.budget}</div>
                      </div>
                      <div className="bg-[#F3F8FF] border border-blue-200 rounded-xl p-3 text-center">
                        <div className="text-[10px] font-semibold text-[#0969E8] uppercase">Mid-Range</div>
                        <div className="text-xs sm:text-sm font-bold text-[#0969E8] mt-0.5">{dest.priceRange.midRange}</div>
                      </div>
                      <div className="bg-[#FFF9EE] border border-amber-200 rounded-xl p-3 text-center">
                        <div className="text-[10px] font-semibold text-amber-600 uppercase">5-Star Luxury</div>
                        <div className="text-xs sm:text-sm font-bold text-amber-700 mt-0.5">{dest.priceRange.luxury}</div>
                      </div>
                    </div>
                  </div>

                  {/* Best Neighborhoods */}
                  <div>
                    <h4 className="text-xs font-bold text-[#5E6B82] uppercase tracking-wider mb-2">
                      Top Recommended Neighborhoods
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {dest.bestNeighborhoods.map((neighborhood, i) => (
                        <span
                          key={i}
                          className="bg-[#F1F5F9] text-[#1E293B] text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3 text-[#0969E8]" />
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div>
                    <h4 className="text-xs font-bold text-[#5E6B82] uppercase tracking-wider mb-2">
                      Key Highlights & Amenities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1E293B]">
                      {dest.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Travel Tips */}
                  <div className="bg-[#F8FAFC] border-l-4 border-[#0969E8] p-4 rounded-r-xl text-xs text-[#5E6B82] leading-relaxed">
                    <span className="font-bold text-[#071B49] block mb-1">Travel DuurDesh Insider Advice:</span>
                    {dest.travelTips}
                  </div>

                  {/* Internal Link Placeholder */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100">
                    <span className="text-xs font-mono text-[#0969E8] font-bold bg-[#EAF2FB] px-3 py-1.5 rounded-lg">
                      {dest.placeholderLink}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate?.('flights')}
                        className="text-xs font-semibold text-[#5E6B82] hover:text-[#0969E8] transition-colors"
                      >
                        [See Flights Page]
                      </button>
                      <span className="text-gray-300">•</span>
                      <button
                        onClick={() => onNavigate?.('umrah')}
                        className="text-xs font-semibold text-[#5E6B82] hover:text-[#0969E8] transition-colors"
                      >
                        [Visit Umrah Guide]
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Overview Grid for all 8 destinations */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularHotelDestinations.map((d) => (
            <div
              key={d.id}
              onClick={() => setSelectedDestinationTab(d.id)}
              className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-4 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                  <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-[#071B49]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {d.city}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#071B49] leading-tight">{d.title}</h4>
                <p className="text-[11px] text-gray-500 line-clamp-2">{d.distanceInfo}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">From {d.priceRange.budget.split(' ')[0]}</span>
                <span className="text-[#0969E8] font-bold flex items-center gap-0.5">
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Umrah Pilgrims Hotel Guide */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#071B49] to-[#0A225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB800] bg-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/15">
              <Footprints className="w-3.5 h-3.5" />
              <span>Sacred Hospitality & Pilgrim Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
              Umrah Pilgrims Hotel Guide
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Selecting the ideal hotel for your sacred Umrah journey requires balancing proximity to the Holy Courtyards, physical stamina, family requirements, and budget realities. Travel DuurDesh provides transparent, respectful recommendations designed to preserve your spiritual concentration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Guide Card 1: Walking Distance Stays */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0969E8] flex items-center justify-center text-white">
                <Footprints className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Best Hotels Within Walking Distance</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                For immediate entry to the Haram piazza, prioritize the Abraj Al Bait (Clock Towers), Jabal Omar Development, and northern Markaziyah in Madinah. Walking takes between 2 to 5 minutes, eliminating the physical exhaustion of road crossings or shuttle queues between Salah.
              </p>
              <div className="pt-2 text-[11px] text-[#4DA3FF] font-semibold">
                Key Picks: Makkah Clock Royal Tower, Swissôtel Al Maqam, Dar Al Taqwa Madinah.
              </div>
            </div>

            {/* Guide Card 2: Budget-Friendly for Pilgrims */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21B96F] flex items-center justify-center text-white">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Budget-Friendly Pilgrim Lodging</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Hotels located along Aziziyah, Mahbas Al Jin, and Kudai provide modern 3-star and 4-star rooms at 50% to 70% lower rates. The Saudi Transport Authority operates uninterrupted 24-hour express shuttle buses connecting dedicated Kudai and Ajyad bus terminals right beneath the Haram.
              </p>
              <div className="pt-2 text-[11px] text-[#21B96F] font-semibold">
                Cost saving: $40 - $75 / night with high cleanliness standards.
              </div>
            </div>

            {/* Guide Card 3: Family-Friendly Suites */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800] flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Family-Friendly & Elderly Care</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Traveling with elderly parents or infants requires step-free, wheelchair-accessible corridors, multiple elevators to mitigate peak prayer congestion, and spacious quad or quintuple suites. Look for hotels with wheelchair rental desks and direct golf-cart shuttle access across the plaza.
              </p>
              <div className="pt-2 text-[11px] text-[#FFB800] font-semibold">
                Features: Connected family rooms, medical assistance desks, baby cribs.
              </div>
            </div>

            {/* Guide Card 4: Essential Pilgrim Amenities */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF8A2A] flex items-center justify-center text-white">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Essential Amenities to Verify</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Ensure your chosen hotel provides an in-room live audio feed directly synchronizing with the Haram Imams, internal prayer halls for times when plaza gates close due to crowd capacity, round-the-clock Zamzam water dispensers, and reliable laundry services for Ihram garments.
              </p>
              <div className="pt-2 text-[11px] text-[#FF8A2A] font-semibold">
                In-room audio broadcast allows infirm travelers to pray in unison with the Haram.
              </div>
            </div>

            {/* Guide Card 5: Safety & Comfort Tips */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#9333EA] flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Safety, Heat & Comfort Tips</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                During warmer months, plaza marble tiles can reach high temperatures. Always carry drawstring footwear pouches into the mosque instead of leaving shoes in open racks. Keep your hotel room keycard and emergency address card with Arabic text inside your neck pouch at all times.
              </p>
              <div className="pt-2 text-[11px] text-purple-300 font-semibold">
                Stay hydrated with room-temperature Zamzam and rest during midday Dhuhr heat.
              </div>
            </div>

            {/* Guide Card 6: Booking Flights + Hotels Together */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#4DA3FF] flex items-center justify-center text-white">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Booking Hotels + Flights Together</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                When structuring your pilgrimage itinerary, coordinate flight arrivals with your Nusuk Umrah permit slot. If landing at King Abdulaziz International Airport (JED) in Jeddah, the Haramain High-Speed Rail takes only 35 minutes to reach Makkah Station, where taxis or hotel shuttles take you directly to your lobby.
              </p>
              <div className="pt-2 text-[11px] text-[#4DA3FF] font-semibold">
                Travel DuurDesh Tip: Book Medina-first flights to enter Ihram smoothly after resting.
              </div>
            </div>
          </div>

          {/* Internal Pilgrim Navigation Placeholders */}
          <div className="mt-12 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              <span className="text-white/80">Explore dedicated pilgrimage resources across Travel DuurDesh:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate?.('umrah')}
                className="bg-[#0969E8] hover:bg-[#0759c5] text-white px-4 py-2 rounded-xl font-bold transition-all"
              >
                [Visit Umrah Guide]
              </button>
              <button
                onClick={() => onNavigate?.('flights')}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl font-bold transition-all"
              >
                [See Flights Page]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: Hotel Types & Recommendations */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <BedDouble className="w-3.5 h-3.5" />
            <span>Accommodation Categories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Hotel Types & Recommendations
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Every travel style requires tailored hospitality features. Discover our detailed evaluation of luxury retreats, value-focused budget stays, spacious family residences, and boutique properties designed specifically for food lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Category 1: Luxury Hotels */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-blue-200 transition-all">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </span>
              <span className="text-[11px] font-bold text-[#D97706] bg-[#FFF9EE] px-3 py-1 rounded-full uppercase">
                5-Star Sophistication
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#071B49] font-syncopate">Luxury Hotels</h3>
            <p className="text-xs sm:text-sm text-[#5E6B82] leading-relaxed">
              <strong>What makes them special:</strong> Luxury hotels offer bespoke 24-hour butler concierges, Michelin-starred and fine-dining halal restaurants, private Haram courtyard exits, and lavish marble wellness sanctuaries with Turkish hammams.
            </p>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Best Cities for Luxury Stays:</div>
              <p className="text-gray-600">Dubai (Burj Al Arab & Palm Jumeirah), Makkah (Raffles & Clock Royal Tower), London (The Dorchester & Bulgari), Istanbul (Ciragan Palace Kempinski).</p>
            </div>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Ideal For:</div>
              <p className="text-gray-600">Couples on romantic city breaks, multi-generation family celebrations, and pilgrims seeking seamless spiritual comfort.</p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-mono">[See Luxury Hotels]</span>
              <span className="text-[#0969E8] font-bold">Explore Premium Stays</span>
            </div>
          </div>

          {/* Category 2: Budget Hotels */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-blue-200 transition-all">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center font-bold">
                <DollarSign className="w-6 h-6" />
              </span>
              <span className="text-[11px] font-bold text-[#0969E8] bg-[#EAF2FB] px-3 py-1 rounded-full uppercase">
                Value & Cleanliness
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#071B49] font-syncopate">Budget Hotels</h3>
            <p className="text-xs sm:text-sm text-[#5E6B82] leading-relaxed">
              <strong>Affordable options without compromise:</strong> Modern budget stays prioritize pristine hygiene, high-speed Wi-Fi, compact ergonomic work desks, and safe keycard access—stripping away overpriced mini-bars to keep nightly rates accessible.
            </p>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Clean and Safe Guarantee:</div>
              <p className="text-gray-600">All Travel DuurDesh budget picks adhere to stringent sanitation protocols with 24-hour reception desks and secure luggage storage rooms.</p>
            </div>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Ideal For:</div>
              <p className="text-gray-600">Solo backpackers, students, remote digital nomads, and budget-conscious pilgrims prioritizing prayer time over room downtime.</p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-mono">[See Budget Hotels]</span>
              <span className="text-[#0969E8] font-bold">Explore Affordable Stays</span>
            </div>
          </div>

          {/* Category 3: Family Hotels */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-blue-200 transition-all">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#21B96F] flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </span>
              <span className="text-[11px] font-bold text-[#21B96F] bg-[#ECFDF5] px-3 py-1 rounded-full uppercase">
                Spacious & Child-Friendly
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#071B49] font-syncopate">Family Hotels</h3>
            <p className="text-xs sm:text-sm text-[#5E6B82] leading-relaxed">
              <strong>Larger rooms & interconnected suites:</strong> Family hotels solve the headache of cramped quarters with two-bedroom suites, kitchenettes for warming milk or baby food, and multiple bathrooms for stress-free morning routines.
            </p>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Kid-Friendly Amenities:</div>
              <p className="text-gray-600">Shallow children’s pools, babysitting services, complimentary baby cribs, and child-safe window locks with quiet evening hours.</p>
            </div>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Best Locations for Families:</div>
              <p className="text-gray-600">Walking distance from major public parks, pedestrian plazas, and direct transit terminals (e.g., Kensington in London, Bukit Bintang in KL).</p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-mono">[See Family Hotels]</span>
              <span className="text-[#0969E8] font-bold">Explore Family Suites</span>
            </div>
          </div>

          {/* Category 4: Hotels for Food Lovers */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4 hover:border-blue-200 transition-all">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold">
                <Utensils className="w-6 h-6" />
              </span>
              <span className="text-[11px] font-bold text-[#E11D48] bg-[#FFF1F2] px-3 py-1 rounded-full uppercase">
                Culinary Focus
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#071B49] font-syncopate">Hotels for Food Lovers</h3>
            <p className="text-xs sm:text-sm text-[#5E6B82] leading-relaxed">
              <strong>Direct access to legendary street food & halal feasts:</strong> Why take a 30-minute taxi just to eat? These accommodations are strategically positioned steps away from world-famous night markets, heritage bakeries, and halal culinary avenues.
            </p>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Great Breakfast Buffets:</div>
              <p className="text-gray-600">Lavish Turkish breakfast spreads in Istanbul, authentic Nasi Lemak and Roti Canai in KL, and fresh Shakshuka & date pastries in Makkah.</p>
            </div>
            <div className="space-y-1.5 text-xs text-[#1E293B]">
              <div className="font-semibold text-[#071B49]">Hotels Near Famous Food Streets:</div>
              <p className="text-gray-600">Karaköy and Eminönü in Istanbul, Jalan Alor in Kuala Lumpur, Edgware Road in London, and Nazira Bazaar in Old Dhaka.</p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-mono">[See Foodie Hotels]</span>
              <button
                onClick={() => onNavigate?.('food')}
                className="text-[#0969E8] font-bold hover:underline"
              >
                [Explore Food & Travel Guides]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: Travel Tips Section */}
      {/* ============================================================ */}
      <section className="bg-[#F1F5F9] py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-gray-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Smart Booking Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Essential Hotel Travel Tips
            </h2>
            <p className="text-sm text-[#5E6B82] leading-relaxed">
              Avoid overpriced tourist traps, ensure peaceful sleep, and secure the greatest value with our field-tested booking guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#5E6B82] leading-relaxed">
            {/* Tip 1 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-sm font-bold text-[#071B49]">How to Choose the Best Location</h3>
              <p>
                Prioritize transit access over sheer distance to downtown. A hotel situated 4 miles away with a direct 10-minute subway or train line is far more convenient and significantly cheaper than a property located 1 mile away that requires navigating congested urban traffic.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-sm font-bold text-[#071B49]">How to Avoid Overpriced Hotels</h3>
              <p>
                Watch out for hidden resort fees, compulsory cleaning charges, and inflated weekend surge pricing. Always toggle price displays to include all applicable local municipal taxes and service charges before confirming reservations.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-sm font-bold text-[#071B49]">How to Check Reviews Properly</h3>
              <p>
                Filter reviews strictly by the last 90 days. Management, cleanliness standards, and construction noise shift rapidly. Search user reviews for specific keywords such as &ldquo;elevator wait time,&rdquo; &ldquo;AC noise,&rdquo; and &ldquo;halal breakfast quality.&rdquo;
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-sm font-bold text-[#071B49]">Booking During Peak Seasons</h3>
              <p>
                For Ramadan, Hajj, New Year&apos;s Eve, and school holidays, book at least 60 to 120 days in advance. Many top hotels implement strict minimum-stay rules (e.g., 5-night minimum during the last ten days of Ramadan); adjust your dates to match these blocks.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                5
              </div>
              <h3 className="text-sm font-bold text-[#071B49]">Staying Near Food, Transport & Sights</h3>
              <p>
                Before finalizing your stay, use satellite map views to check what exists within a 5-minute walking radius. Look for open grocery stores, pharmacies, local eateries, and pedestrian crossings to ensure daily convenience.
              </p>
            </div>

            {/* Tip 6 */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                6
              </div>
              <h3 className="text-sm font-bold text-[#071B49]">Leverage Multi-Currency & Budget Tools</h3>
              <p>
                Fluctuating currency exchange rates can quietly inflate your accommodation budget. Utilize Travel DuurDesh&apos;s interactive currency tools to view room rates accurately in your home currency with zero conversion surprises.
              </p>
              <button
                onClick={() => onNavigate?.('tools')}
                className="text-[#0969E8] font-bold text-xs hover:underline flex items-center gap-1"
              >
                [Use Travel Tools] <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: Internal Link Suggestions */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#EAF2FB] rounded-3xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">
                Connected Travel DuurDesh Resources
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] font-syncopate">
                Explore More Guides to Plan Your Complete Journey
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6B82] leading-relaxed">
                Take advantage of our complete ecosystem of travel guides, pilgrimage resources, and budget planning tools. Use these internal link placeholders to navigate smoothly:
              </p>
            </div>

            {/* Prominent Internal Link Placeholders */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <button
                onClick={() => onNavigate?.('flights')}
                className="bg-white hover:bg-blue-50 text-[#071B49] font-bold text-xs py-3 px-4 rounded-xl border border-blue-200 shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plane className="w-4 h-4 text-[#0969E8]" />
                <span>See Flights Page</span>
              </button>

              <button
                onClick={() => onNavigate?.('umrah')}
                className="bg-white hover:bg-blue-50 text-[#071B49] font-bold text-xs py-3 px-4 rounded-xl border border-blue-200 shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Footprints className="w-4 h-4 text-[#FFB800]" />
                <span>Visit Umrah Guide</span>
              </button>

              <button
                onClick={() => onNavigate?.('food')}
                className="bg-white hover:bg-blue-50 text-[#071B49] font-bold text-xs py-3 px-4 rounded-xl border border-blue-200 shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#FF8A2A]" />
                <span>Explore Food & Travel Guides</span>
              </button>

              <button
                onClick={() => onNavigate?.('tools')}
                className="bg-white hover:bg-blue-50 text-[#071B49] font-bold text-xs py-3 px-4 rounded-xl border border-blue-200 shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <DollarSign className="w-4 h-4 text-[#21B96F]" />
                <span>Use Travel Tools</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: Call-to-Action Section */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-r from-[#071B49] via-[#0969E8] to-[#071B49] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/20 uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-[#FFB800]" />
            <span>Ready for Your Next Stay?</span>
          </div>

          {/* Exact CTA Headlines as requested */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
            Find Your Perfect Stay with Travel DuurDesh
          </h2>
          <p className="text-base sm:text-lg text-white/85 font-medium max-w-2xl mx-auto">
            Explore Hotels for Every Budget and Destination
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('popular-destinations-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-[#FF8A2A] hover:bg-[#e6751c] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore Hotel Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate?.('umrah')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-4 rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <span>Umrah Pilgrim Hotels</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
