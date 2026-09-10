import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  ExternalLink,
  Sparkles,
  MapPin,
  Eye,
  Plane
} from 'lucide-react';
import { Destination, CurrencyConfig } from '../types';
import { getTranslation, TranslationKey } from '../data/translations';

interface PopularDestinationsProps {
  destinations: Destination[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onDestinationClick: (dest: Destination) => void;
  onBookAffiliate: (dest: Destination) => void;
  currency: CurrencyConfig;
  selectedLanguage?: string;
  onNavigate?: (pageId: string) => void;
  onViewFlights?: (dest: Destination) => void;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  destinations,
  wishlistIds,
  onToggleWishlist,
  onDestinationClick,
  onBookAffiliate,
  currency,
  selectedLanguage = 'en',
  onNavigate,
  onViewFlights
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const t = (key: TranslationKey) => getTranslation(selectedLanguage, key);

  const regions = ['All', 'Europe', 'Asia', 'Middle East'];

  const filteredDestinations = selectedRegion === 'All'
    ? destinations
    : destinations.filter((d) => d.region === selectedRegion);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="destinations" className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Title, Filter Tabs & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Iconic Global & Holy Destinations</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
              Popular Destinations
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] mt-1 max-w-2xl leading-relaxed">
              Discover eight world-renowned cities curated for spirituality, heritage, vibrant street foods, and iconic landmarks. From the holy sanctuaries of Makkah and Madinah to global cultural hubs.
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Region Filter Pills */}
            <div className="flex items-center gap-1 bg-[#EAF2FB] p-1 rounded-xl">
              {['All', 'Middle East', 'Europe', 'Asia', 'Americas'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedRegion === region
                      ? 'bg-white text-[#0969E8] shadow-sm'
                      : 'text-[#5E6B82] hover:text-[#0969E8]'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Grid displaying the 8 destinations with short descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => {
            const isSaved = wishlistIds.includes(dest.id);
            return (
              <motion.article
                key={dest.id}
                id={`destination-card-${dest.id}`}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-[#071B49]">
                  <img
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country} - Travel DuurDesh guide`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <span className="bg-[#071B49]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20">
                      {dest.tag || dest.region}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(dest.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
                        isSaved
                          ? 'bg-[#FF5A5F] text-white'
                          : 'bg-black/40 hover:bg-black/60 text-white'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save destination'}
                      aria-label="Toggle favorite"
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* City and Country over bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                    <div className="flex items-center gap-1 text-xs text-[#4DA3FF] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Short Description */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#475569] line-clamp-3 leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {dest.highlights.slice(0, 2).map((hl, i) => (
                        <span
                          key={i}
                          className="inline-block text-[10px] font-medium bg-[#F1F5F9] text-[#334155] px-2 py-0.5 rounded-md"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom details and internal actions */}
                  <div className="pt-3 border-t border-[#F1F5F9] space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#64748B] block uppercase font-medium">
                          Starting From
                        </span>
                        <span className="text-base font-extrabold text-[#0969E8]">
                          {formatPrice(dest.startingPrice)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-1 rounded-md">
                        <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                        <span className="text-xs font-bold text-[#1E293B]">{dest.rating}</span>
                        <span className="text-[10px] text-[#64748B]">({dest.reviewCount})</span>
                      </div>
                    </div>

                    {/* Action buttons: Direct View Guide and Direct Landing Page for Destination Flights */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          const name = dest.name.toLowerCase();
                          if (onNavigate) {
                            if (name.includes('dubai')) window.location.hash = '#destinations-dubai';
                            else if (name.includes('makkah') || name.includes('mecca')) window.location.hash = '#destinations-makkah';
                            else if (name.includes('istanbul')) window.location.hash = '#destinations-istanbul';
                            else if (name.includes('london')) window.location.hash = '#destinations-london';
                            else if (name.includes('york')) window.location.hash = '#destinations-newyork';
                            else if (name.includes('kuala') || name.includes('lumpur')) window.location.hash = '#destinations-kualalumpur';
                            else if (name.includes('dhaka')) window.location.hash = '#destinations-dhaka';
                            else if (name.includes('bangladesh')) window.location.hash = '#destinations-bangladesh';
                            else if (name.includes('malaysia')) window.location.hash = '#destinations-malaysia';
                            else if (name.includes('turkey')) window.location.hash = '#destinations-turkey';
                            else window.location.hash = '#destinations';
                            onNavigate('destinations');
                          } else {
                            onDestinationClick(dest);
                          }
                        }}
                        className="w-full inline-flex items-center justify-center gap-1 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#1E293B] text-xs font-semibold py-2 rounded-xl transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#0969E8]" />
                        <span>View Guide</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onViewFlights) {
                            onViewFlights(dest);
                          } else if (onNavigate) {
                            onNavigate('flights');
                          } else {
                            onBookAffiliate(dest);
                          }
                        }}
                        className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold py-2 rounded-xl shadow-sm transition-colors cursor-pointer"
                        title={`Check live flights to ${dest.name}`}
                      >
                        <Plane className="w-3.5 h-3.5" />
                        <span>View Flights</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('destinations');
              } else {
                setSelectedRegion('All');
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0969E8] hover:text-[#071B49] transition-colors cursor-pointer"
          >
            <span>Explore All 13 Country & City Travel Guides (AlUla, Makkah, Bangladesh, Malaysia, Turkey, USA, UK, Dubai, NYC & More)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
