import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  Building2,
  Plane,
  Heart,
  Calendar,
  ChevronRight,
  Globe2,
  Landmark,
  Crown,
  Search,
  X,
  Globe,
  Loader2
} from 'lucide-react';
import { CurrencyConfig } from '../types';

// Country Guides
import { BangladeshCountryGuide } from './destinations/BangladeshCountryGuide';
import { MalaysiaCountryGuide } from './destinations/MalaysiaCountryGuide';
import { TurkeyCountryGuide } from './destinations/TurkeyCountryGuide';
import { UsaCountryGuide } from './destinations/UsaCountryGuide';
import { UkCountryGuide } from './destinations/UkCountryGuide';

// City Guides
import { DubaiTravelGuide } from './destinations/DubaiTravelGuide';
import { MakkahTravelGuide } from './destinations/MakkahTravelGuide';
import { AlUlaTravelGuide } from './destinations/AlUlaTravelGuide';
import { IstanbulTravelGuide } from './destinations/IstanbulTravelGuide';
import { NewYorkCityGuide } from './destinations/NewYorkCityGuide';
import { LondonCityGuide } from './destinations/LondonCityGuide';
import { KualaLumpurCityGuide } from './destinations/KualaLumpurCityGuide';
import { DhakaCityGuide } from './destinations/DhakaCityGuide';

// Global Destination Hub for any city in the world
import { GlobalDestinationHub } from './destinations/GlobalDestinationHub';
import {
  fetchAviasalesPlaces,
  AviasalesPlace,
  getCountryFlagEmoji
} from '../utils/aviasalesAutocomplete';
import { registerPlaceIata } from '../utils/iataRegistry';

import { Breadcrumbs } from './Breadcrumbs';
import { DESTINATION_SEO, SEO_PAGES, applySEO } from '../utils/seo';

export type DestinationKey =
  | 'bangladesh'
  | 'malaysia'
  | 'turkey'
  | 'usa'
  | 'uk'
  | 'dubai'
  | 'makkah'
  | 'alula'
  | 'istanbul'
  | 'newyork'
  | 'london'
  | 'kualalumpur'
  | 'dhaka';

interface DestinationsPageProps {
  currency: CurrencyConfig;
  onNavigate: (pageId: string) => void;
  initialDestination?: DestinationKey;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  currency,
  onNavigate,
  initialDestination = 'bangladesh'
}) => {
  const [activeDestination, setActiveDestination] = useState<DestinationKey>(initialDestination);
  const [activeTab, setActiveTab] = useState<'all' | 'countries' | 'cities'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [globalPlaces, setGlobalPlaces] = useState<AviasalesPlace[]>([]);
  const [isLoadingGlobal, setIsLoadingGlobal] = useState(false);
  const [selectedGlobalPlace, setSelectedGlobalPlace] = useState<AviasalesPlace | null>(null);

  useEffect(() => {
    // Check if hash has a specific destination parameter
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('bangladesh')) {
      setActiveDestination('bangladesh');
    } else if (hash.includes('malaysia')) {
      setActiveDestination('malaysia');
    } else if (hash.includes('turkey') || hash.includes('turkiye')) {
      setActiveDestination('turkey');
    } else if (hash.includes('usa') || hash.includes('america') || hash.includes('united-states')) {
      setActiveDestination('usa');
    } else if (hash.includes('uk') || hash.includes('britain') || hash.includes('united-kingdom')) {
      setActiveDestination('uk');
    } else if (hash.includes('dubai')) {
      setActiveDestination('dubai');
    } else if (hash.includes('makkah') || hash.includes('mecca')) {
      setActiveDestination('makkah');
    } else if (hash.includes('alula')) {
      setActiveDestination('alula');
    } else if (hash.includes('istanbul')) {
      setActiveDestination('istanbul');
    } else if (hash.includes('newyork') || hash.includes('nyc')) {
      setActiveDestination('newyork');
    } else if (hash.includes('london')) {
      setActiveDestination('london');
    } else if (hash.includes('kualalumpur') || hash.includes('kl')) {
      setActiveDestination('kualalumpur');
    } else if (hash.includes('dhaka')) {
      setActiveDestination('dhaka');
    }
  }, []);

  const handleSelectDestination = (dest: DestinationKey) => {
    setActiveDestination(dest);
    setSelectedGlobalPlace(null);
    window.location.hash = `#destinations-${dest}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGlobalPlace = (place: AviasalesPlace) => {
    registerPlaceIata(place.city_name, place.name, place.code);
    setSelectedGlobalPlace(place);
    setIsSearchFocused(false);
    setSearchQuery(`${place.city_name || place.name} (${place.code.toUpperCase()})`);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const countryGuides: { id: DestinationKey; name: string; tag: string; icon: string; keywords: string[] }[] = [
    { id: 'bangladesh', name: 'Bangladesh', tag: 'South Asia', icon: '🇧🇩', keywords: ['bangladesh', 'dhaka', 'coxs bazar', 'sylhet', 'chittagong', 'asia'] },
    { id: 'malaysia', name: 'Malaysia', tag: 'Southeast Asia', icon: '🇲🇾', keywords: ['malaysia', 'kuala lumpur', 'penang', 'langkawi', 'asia'] },
    { id: 'turkey', name: 'Turkey (Türkiye)', tag: 'Eurasia', icon: '🇹🇷', keywords: ['turkey', 'türkiye', 'istanbul', 'antalya', 'cappadocia', 'europe', 'asia'] },
    { id: 'usa', name: 'USA', tag: 'North America', icon: '🇺🇸', keywords: ['usa', 'united states', 'america', 'new york', 'california', 'florida'] },
    { id: 'uk', name: 'United Kingdom', tag: 'Western Europe', icon: '🇬🇧', keywords: ['uk', 'united kingdom', 'britain', 'england', 'london', 'scotland'] },
  ];

  const cityGuides: { id: DestinationKey; name: string; tag: string; icon: string; keywords: string[] }[] = [
    { id: 'dubai', name: 'Dubai', tag: 'UAE', icon: '🏙️', keywords: ['dubai', 'uae', 'united arab emirates', 'burj khalifa', 'middle east'] },
    { id: 'makkah', name: 'Makkah', tag: 'Saudi Arabia', icon: '🕋', keywords: ['makkah', 'mecca', 'saudi arabia', 'haram', 'kaaba', 'umrah', 'hajj'] },
    { id: 'alula', name: 'AlUla', tag: 'Saudi Arabia', icon: '🏜️', keywords: ['alula', 'al ula', 'saudi arabia', 'hegra', 'desert', 'heritage'] },
    { id: 'istanbul', name: 'Istanbul', tag: 'Turkey', icon: '🕌', keywords: ['istanbul', 'turkey', 'türkiye', 'bosphorus', 'hagha sophia', 'blue mosque'] },
    { id: 'newyork', name: 'New York City', tag: 'USA', icon: '🗽', keywords: ['new york', 'nyc', 'new york city', 'manhattan', 'usa', 'brooklyn'] },
    { id: 'london', name: 'London', tag: 'UK', icon: '🎡', keywords: ['london', 'uk', 'united kingdom', 'england', 'big ben', 'thames'] },
    { id: 'kualalumpur', name: 'Kuala Lumpur', tag: 'Malaysia', icon: '🗼', keywords: ['kuala lumpur', 'kl', 'malaysia', 'petronas', 'batu caves'] },
    { id: 'dhaka', name: 'Dhaka', tag: 'Bangladesh', icon: '🏛️', keywords: ['dhaka', 'bangladesh', 'lalbagh', 'gulshan', 'old dhaka'] },
  ];

  const allGuides = [...countryGuides, ...cityGuides];
  const activeGuideObj = allGuides.find((g) => g.id === activeDestination);
  const activeGuideName = selectedGlobalPlace
    ? `${selectedGlobalPlace.city_name || selectedGlobalPlace.name} (${selectedGlobalPlace.code})`
    : activeGuideObj?.name || 'Guide';

  // Filter editorial guides live based on search query
  const cleanQuery = searchQuery.trim().toLowerCase();
  const searchResults = cleanQuery
    ? allGuides.filter((g) => {
        const matchesName = g.name.toLowerCase().includes(cleanQuery);
        const matchesTag = g.tag.toLowerCase().includes(cleanQuery);
        const matchesKeywords = g.keywords.some((kw) => kw.includes(cleanQuery));
        return matchesName || matchesTag || matchesKeywords;
      })
    : [];

  // Query Aviasales live IATA database for all cities worldwide
  useEffect(() => {
    if (cleanQuery.length < 2) {
      setGlobalPlaces([]);
      setIsLoadingGlobal(false);
      return;
    }

    const controller = new AbortController();
    setIsLoadingGlobal(true);

    const timer = setTimeout(async () => {
      try {
        const places = await fetchAviasalesPlaces(cleanQuery, controller.signal);
        setGlobalPlaces(places);
      } catch {
        setGlobalPlaces([]);
      } finally {
        setIsLoadingGlobal(false);
      }
    }, 180);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [cleanQuery]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchResults.length > 0) {
      handleSelectDestination(searchResults[0].id);
      setIsSearchFocused(false);
      return;
    }
    if (globalPlaces.length > 0) {
      handleSelectGlobalPlace(globalPlaces[0]);
      setIsSearchFocused(false);
      return;
    }
  };

  useEffect(() => {
    if (DESTINATION_SEO[activeDestination]) {
      applySEO(DESTINATION_SEO[activeDestination]);
    } else {
      applySEO(SEO_PAGES.destinations);
    }
  }, [activeDestination]);

  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate('home') },
            { label: 'Destinations', onClick: () => handleSelectDestination('bangladesh') },
            { label: activeGuideName }
          ]}
        />

        {/* Navigation / Switcher Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" />
                <span>Travel DuurDesh Complete Guides</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                Country & City Travel Guides
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white text-[#0969E8] shadow-xs'
                    : 'text-[#5E6B82] hover:text-[#0969E8]'
                }`}
              >
                All (13)
              </button>
              <button
                onClick={() => setActiveTab('countries')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'countries'
                    ? 'bg-white text-[#0969E8] shadow-xs'
                    : 'text-[#5E6B82] hover:text-[#0969E8]'
                }`}
              >
                🌍 Country Guides (5)
              </button>
              <button
                onClick={() => setActiveTab('cities')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'cities'
                    ? 'bg-white text-[#0969E8] shadow-xs'
                    : 'text-[#5E6B82] hover:text-[#0969E8]'
                }`}
              >
                🏙️ City Guides (8)
              </button>
            </div>
          </div>

          {/* Live Search Section */}
          <div className="relative">
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search countries or cities (e.g., Makkah, Dubai, Turkey, London, USA...)"
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-[#F8FAFC] border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0969E8]/20 focus:border-[#0969E8] transition-all text-[#071B49] placeholder:text-[#94A3B8]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0969E8] hover:bg-[#0756be] active:bg-[#0648a0] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </form>

            {/* Live Search Results Dropdown */}
            {cleanQuery && isSearchFocused && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl z-30 overflow-hidden max-h-96 overflow-y-auto">
                <div className="p-2.5 bg-[#F8FAFC] border-b border-gray-100 flex items-center justify-between text-[11px] text-[#64748B] font-semibold">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#0969E8]" />
                    <span>
                      Worldwide Search ({searchResults.length + globalPlaces.length} results)
                    </span>
                  </div>
                  {isLoadingGlobal ? (
                    <span className="flex items-center gap-1 text-[10px] text-[#0969E8] font-bold">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Checking Aviasales IATA...</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsSearchFocused(false)}
                      className="text-xs text-[#0969E8] hover:underline cursor-pointer"
                    >
                      Close
                    </button>
                  )}
                </div>

                <div className="divide-y divide-gray-100 p-1">
                  {/* Curated Deep-Dive Guides */}
                  {searchResults.length > 0 && (
                    <div className="p-1 space-y-1">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 flex items-center gap-1.5">
                        <Crown className="w-3 h-3 text-amber-500" />
                        <span>Curated Editorial Guides ({searchResults.length})</span>
                      </div>
                      {searchResults.map((guide) => (
                        <button
                          key={guide.id}
                          type="button"
                          onClick={() => {
                            handleSelectDestination(guide.id);
                            setIsSearchFocused(false);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 text-left hover:bg-[#F1F5F9] rounded-xl transition-colors cursor-pointer ${
                            activeDestination === guide.id && !selectedGlobalPlace ? 'bg-[#EFF6FF]' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl leading-none">{guide.icon}</span>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-[#071B49] flex items-center gap-2">
                                <span>{guide.name}</span>
                                {activeDestination === guide.id && !selectedGlobalPlace && (
                                  <span className="text-[10px] font-semibold text-[#0969E8] bg-[#EAF2FB] px-2 py-0.5 rounded-md">
                                    Currently Viewing
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-[#64748B]">
                                {guide.tag} • Comprehensive Travel Guide
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Aviasales Global Worldwide Cities & Airports */}
                  {globalPlaces.length > 0 && (
                    <div className="p-1 space-y-1">
                      <div className="text-[10px] font-bold text-[#0969E8] uppercase tracking-wider px-2 py-1 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Plane className="w-3 h-3 text-[#0969E8]" />
                          <span>Aviasales Worldwide IATA Hubs ({globalPlaces.length})</span>
                        </span>
                        <span className="text-[9px] text-gray-400 font-normal">
                          Live Flight Booking Ready
                        </span>
                      </div>

                      {globalPlaces.map((place) => {
                        const flag = getCountryFlagEmoji(place.country_code);
                        const cityName = place.city_name || place.name;
                        const iata = place.code.toUpperCase();
                        const isCurrentGlobal =
                          selectedGlobalPlace?.code.toLowerCase() === place.code.toLowerCase();

                        return (
                          <button
                            key={`${place.code}-${place.name}`}
                            type="button"
                            onClick={() => handleSelectGlobalPlace(place)}
                            className={`w-full flex items-center justify-between p-2.5 text-left hover:bg-[#F0F7FF] rounded-xl transition-colors cursor-pointer ${
                              isCurrentGlobal ? 'bg-[#EAF2FB] ring-1 ring-[#0969E8]/30' : ''
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="px-2 py-0.5 rounded-md font-mono font-bold text-[11px] bg-white border border-gray-200 text-[#0969E8] shadow-2xs shrink-0">
                                {iata}
                              </span>
                              <div className="truncate">
                                <div className="text-xs sm:text-sm font-bold text-[#071B49] flex items-center gap-1.5 truncate">
                                  {flag && <span className="text-sm">{flag}</span>}
                                  <span>{cityName}</span>
                                  <span className="font-normal text-gray-500">
                                    ({place.country_name})
                                  </span>
                                  <span className="text-[9px] bg-blue-50 text-[#0969E8] border border-blue-200/60 font-semibold px-1.5 py-0.2 rounded-md">
                                    {place.type === 'airport' ? 'Airport' : 'City'}
                                  </span>
                                </div>
                                <div className="text-[10px] text-gray-400 truncate">
                                  {place.name}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[10px] text-[#0969E8] font-bold bg-[#EAF2FB] px-2 py-0.5 rounded-lg hidden sm:inline">
                                View Hub & Flights
                              </span>
                              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {searchResults.length === 0 && globalPlaces.length === 0 && !isLoadingGlobal && (
                    <div className="p-6 text-center text-xs text-[#64748B] space-y-1">
                      <p className="font-semibold text-[#071B49]">
                        No airport or city found matching &ldquo;{searchQuery}&rdquo;.
                      </p>
                      <p className="text-[11px] text-gray-400">
                        Try searching any 3-letter IATA code (e.g. CDG, DXB, JFK, SIN) or any global city name.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Select Buttons */}
          <div className="space-y-4">
            {(activeTab === 'all' || activeTab === 'countries') && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#0969E8]" />
                  <span>Country Guides:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {countryGuides
                    .filter((guide) => {
                      if (!cleanQuery) return true;
                      return (
                        guide.name.toLowerCase().includes(cleanQuery) ||
                        guide.tag.toLowerCase().includes(cleanQuery) ||
                        guide.keywords.some((kw) => kw.includes(cleanQuery))
                      );
                    })
                    .map((guide) => (
                      <button
                        key={guide.id}
                        onClick={() => {
                          handleSelectDestination(guide.id);
                          setIsSearchFocused(false);
                        }}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activeDestination === guide.id
                            ? 'bg-[#0969E8] text-white shadow-sm ring-2 ring-[#0969E8]/20'
                            : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#EDF2F7] border border-gray-200'
                        }`}
                      >
                        <span className="text-base leading-none">{guide.icon}</span>
                        <span>{guide.name}</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'cities') && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0969E8]" />
                  <span>City & Holy Sanctuary Guides:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cityGuides
                    .filter((guide) => {
                      if (!cleanQuery) return true;
                      return (
                        guide.name.toLowerCase().includes(cleanQuery) ||
                        guide.tag.toLowerCase().includes(cleanQuery) ||
                        guide.keywords.some((kw) => kw.includes(cleanQuery))
                      );
                    })
                    .map((guide) => (
                      <button
                        key={guide.id}
                        onClick={() => {
                          handleSelectDestination(guide.id);
                          setIsSearchFocused(false);
                        }}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activeDestination === guide.id
                            ? 'bg-[#0969E8] text-white shadow-sm ring-2 ring-[#0969E8]/20'
                            : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#EDF2F7] border border-gray-200'
                        }`}
                      >
                        <span className="text-base leading-none">{guide.icon}</span>
                        <span>{guide.name}</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {cleanQuery && searchResults.length === 0 && (
              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-200 text-center space-y-2">
                <p className="text-xs text-[#64748B]">
                  No country or city guides match <span className="font-bold text-[#071B49]">&ldquo;{searchQuery}&rdquo;</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setIsSearchFocused(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-[#0969E8] hover:bg-gray-50 cursor-pointer shadow-2xs"
                >
                  <X className="w-3 h-3" />
                  <span>Clear Search & View All Guides</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Render Global Destination Hub (if a worldwide city/airport was selected) */}
        {selectedGlobalPlace ? (
          <GlobalDestinationHub
            place={selectedGlobalPlace}
            currency={currency}
            onNavigate={onNavigate}
            onClose={() => setSelectedGlobalPlace(null)}
          />
        ) : (
          <>
            {/* Render Curated Active Guide */}
            {/* Country Guides */}
            {activeDestination === 'bangladesh' && (
              <BangladeshCountryGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'malaysia' && (
              <MalaysiaCountryGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'turkey' && (
              <TurkeyCountryGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'usa' && (
              <UsaCountryGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'uk' && (
              <UkCountryGuide currency={currency} onNavigate={onNavigate} />
            )}

            {/* City Guides */}
            {activeDestination === 'dubai' && (
              <DubaiTravelGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'makkah' && (
              <MakkahTravelGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'alula' && (
              <AlUlaTravelGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'istanbul' && (
              <IstanbulTravelGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'newyork' && (
              <NewYorkCityGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'london' && (
              <LondonCityGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'kualalumpur' && (
              <KualaLumpurCityGuide currency={currency} onNavigate={onNavigate} />
            )}
            {activeDestination === 'dhaka' && (
              <DhakaCityGuide currency={currency} onNavigate={onNavigate} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
