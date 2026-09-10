import React, { useState } from 'react';
import {
  X,
  Search,
  MapPin,
  Plane,
  Building,
  Luggage,
  Compass,
  Star,
  ExternalLink,
  ArrowRight,
  Filter,
  CheckCircle2,
  Map as MapIcon,
  LayoutGrid
} from 'lucide-react';
import {
  Destination,
  TravelDeal,
  TravelExperience,
  SearchFilterState,
  CurrencyConfig
} from '../types';
import { InteractiveDestinationMap } from './InteractiveDestinationMap';
import { buildAviasalesRouteUrl } from '../utils/aviasales';

interface SearchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchState: SearchFilterState;
  destinations: Destination[];
  deals: TravelDeal[];
  experiences: TravelExperience[];
  onBookAffiliate: (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  }) => void;
  currency: CurrencyConfig;
}

export const SearchResultsModal: React.FC<SearchResultsModalProps> = ({
  isOpen,
  onClose,
  searchState,
  destinations,
  deals,
  experiences,
  onBookAffiliate,
  currency
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  if (!isOpen) return null;

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const query = searchTerm.toLowerCase();

  const matchedDestinations = destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(query) ||
      d.country.toLowerCase().includes(query) ||
      d.region.toLowerCase().includes(query)
  );

  const matchedDeals = deals.filter(
    (d) =>
      d.title.toLowerCase().includes(query) ||
      d.destination.toLowerCase().includes(query) ||
      d.country.toLowerCase().includes(query)
  );

  const matchedExperiences = experiences.filter(
    (e) =>
      e.title.toLowerCase().includes(query) ||
      e.location.toLowerCase().includes(query) ||
      e.category.toLowerCase().includes(query)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl border border-gray-100 relative flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-100 bg-[#071B49] text-white rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4DA3FF]">
              Live Partner Search Results
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white font-syncopate uppercase tracking-tight">
              {searchState.toLocation ? `Results for "${searchState.toLocation}"` : 'Explore All Travel Options'}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
              <span className="bg-white/10 px-2.5 py-1 rounded-lg">
                Type: {searchState.tab.toUpperCase()}
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded-lg">
                Travelers: {searchState.adults + searchState.children}
              </span>
              {searchState.checkInDate && (
                <span className="bg-white/10 px-2.5 py-1 rounded-lg">
                  Dates: {searchState.checkInDate} to {searchState.checkOutDate}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-3 sm:p-4 bg-[#F8FAFC] border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-xs md:max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Refine search by city, country, or activity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#0969E8]"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {['all', 'destinations', 'deals', 'experiences'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                    filterType === type
                      ? 'bg-[#0969E8] text-white shadow-sm'
                      : 'bg-white text-[#5E6B82] hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* View Mode Toggle: List vs Map */}
            <div className="flex items-center bg-gray-200/70 p-1 rounded-xl shrink-0 border border-gray-200">
              <button
                id="search-view-list-btn"
                onClick={() => setViewMode('list')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#071B49] shadow-sm'
                    : 'text-[#5E6B82] hover:text-[#071B49]'
                }`}
                title="List & Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">List</span>
              </button>

              <button
                id="search-view-map-btn"
                onClick={() => setViewMode('map')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'map'
                    ? 'bg-[#0969E8] text-white shadow-sm'
                    : 'text-[#5E6B82] hover:text-[#071B49]'
                }`}
                title="Interactive Map View"
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Map View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-6 space-y-6 flex-1">
          {viewMode === 'map' ? (
            /* Interactive Map View */
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-[#071B49] uppercase tracking-wider flex items-center gap-2">
                    <MapIcon className="w-4 h-4 text-[#0969E8]" />
                    <span>Interactive Destination Map</span>
                  </h3>
                  <p className="text-xs text-[#5E6B82] mt-0.5">
                    Click any marker to inspect starting fares, ratings, and instant partner booking.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-2.5 py-1 rounded-lg">
                  {matchedDestinations.length} Locations
                </span>
              </div>

              <InteractiveDestinationMap
                destinations={matchedDestinations.length > 0 ? matchedDestinations : destinations}
                deals={matchedDeals}
                experiences={matchedExperiences}
                currency={currency}
                onBookAffiliate={onBookAffiliate}
                onCloseModal={onClose}
              />
            </div>
          ) : (
            /* List / Grid View */
            <>
              {searchState.tab === 'flights' && (
                <div className="p-4 bg-gradient-to-r from-[#071B49] to-[#0969E8] rounded-2xl text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                      <Plane className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold">
                          Search "{searchState.toLocation || 'Global Flights'}" on Aviasales
                        </h4>
                        <span className="text-[10px] bg-[#21B96F] text-white px-2 py-0.5 rounded-full font-bold">
                          Live Partner Rates
                        </span>
                      </div>
                      <p className="text-xs text-white/80">
                        Scan 1,000+ airlines, low-cost carriers, and agencies with no extra fees.
                      </p>
                    </div>
                  </div>
                  <a
                    href={buildAviasalesRouteUrl(
                      searchState.fromLocation,
                      searchState.toLocation,
                      {
                        departDate: searchState.checkInDate,
                        returnDate: searchState.checkOutDate,
                        passengers: searchState.adults + searchState.children
                      }
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#0969E8] hover:bg-[#F3F8FF] font-bold text-xs rounded-xl shadow transition-colors shrink-0"
                  >
                    <span>Check Live Aviasales Fares</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Destinations Category */}
              {(filterType === 'all' || filterType === 'destinations') && matchedDestinations.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-[#071B49] uppercase tracking-wider flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#0969E8]" />
                      <span>Destinations & Stays ({matchedDestinations.length})</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedDestinations.map((dest) => (
                      <div
                        key={dest.id}
                        className="p-3 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#0969E8] flex gap-3 items-center group transition-colors"
                      >
                        <img
                          src={dest.image}
                          alt={dest.name}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 text-[10px] text-[#5E6B82]">
                            <MapPin className="w-3 h-3 text-[#0969E8]" />
                            <span>{dest.country}</span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#101C36] truncate">
                            {dest.name}
                          </h4>
                          <span className="text-xs font-extrabold text-[#21B96F]">
                            From {formatPrice(dest.startingPrice)}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            onBookAffiliate({
                              title: `${dest.name}, ${dest.country}`,
                              partnerName: dest.partnerName,
                              affiliateUrl: dest.affiliateUrl,
                              price: formatPrice(dest.startingPrice),
                              image: dest.image
                            });
                          }}
                          className="px-3 py-2 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm shrink-0"
                        >
                          <span>Book</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deals Category */}
              {(filterType === 'all' || filterType === 'deals') && matchedDeals.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-extrabold text-[#071B49] uppercase tracking-wider flex items-center gap-2">
                    <Luggage className="w-4 h-4 text-[#FF8A2A]" />
                    <span>Featured Vacation Packages ({matchedDeals.length})</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedDeals.map((deal) => (
                      <div
                        key={deal.id}
                        className="p-3 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#FF8A2A] flex gap-3 items-center group transition-colors"
                      >
                        <img
                          src={deal.image}
                          alt={deal.title}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-[#FF8A2A] block">
                            {deal.duration}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#101C36] truncate">
                            {deal.title}
                          </h4>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-[#071B49]">
                              {formatPrice(deal.discountedPrice)}
                            </span>
                            <span className="text-[10px] text-gray-400 line-through">
                              {formatPrice(deal.originalPrice)}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            onBookAffiliate({
                              title: deal.title,
                              partnerName: deal.partnerName,
                              affiliateUrl: deal.affiliateUrl,
                              price: formatPrice(deal.discountedPrice),
                              image: deal.image
                            });
                          }}
                          className="px-3 py-2 bg-[#FF8A2A] hover:bg-[#e87a20] text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm shrink-0"
                        >
                          <span>Grab Deal</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experiences Category */}
              {(filterType === 'all' || filterType === 'experiences') && matchedExperiences.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-extrabold text-[#071B49] uppercase tracking-wider flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#7B61FF]" />
                    <span>Activities & Tours ({matchedExperiences.length})</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedExperiences.map((exp) => (
                      <div
                        key={exp.id}
                        className="p-3 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-[#7B61FF] flex gap-3 items-center group transition-colors"
                      >
                        <img
                          src={exp.image}
                          alt={exp.title}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold text-[#7B61FF] block">
                            {exp.category} • {exp.duration}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-[#101C36] truncate">
                            {exp.title}
                          </h4>
                          <span className="text-xs font-extrabold text-[#071B49]">
                            {formatPrice(exp.price)}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            onClose();
                            onBookAffiliate({
                              title: exp.title,
                              partnerName: exp.partnerName,
                              affiliateUrl: exp.affiliateUrl,
                              price: formatPrice(exp.price),
                              image: exp.image
                            });
                          }}
                          className="px-3 py-2 bg-[#7B61FF] hover:bg-[#684ce0] text-white text-xs font-bold rounded-xl flex items-center gap-1 shadow-sm shrink-0"
                        >
                          <span>Book</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedDestinations.length === 0 && matchedDeals.length === 0 && matchedExperiences.length === 0 && (
                <div className="text-center py-12 space-y-2">
                  <p className="text-sm font-bold text-[#071B49]">No results found for "{searchTerm}"</p>
                  <p className="text-xs text-[#5E6B82]">Try searching for Paris, Bali, Greece, or Switzerland.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
