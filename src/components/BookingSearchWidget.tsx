import React, { useState } from 'react';
import {
  Plane,
  Building,
  Luggage,
  Compass,
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowRightLeft,
  ChevronDown,
  Sparkles,
  Check
} from 'lucide-react';
import { BookingTabType, SearchFilterState } from '../types';
import { POPULAR_ORIGIN_CITIES, POPULAR_DESTINATION_CITIES } from '../data/travelData';
import { getTranslation, TranslationKey } from '../data/translations';

interface BookingSearchWidgetProps {
  selectedLanguage: string;
  onSearchSubmit: (params: SearchFilterState) => void;
}

export const BookingSearchWidget: React.FC<BookingSearchWidgetProps> = ({
  selectedLanguage,
  onSearchSubmit
}) => {
  const [activeTab, setActiveTab] = useState<BookingTabType>('flights');
  
  // Search parameters state
  const [fromLocation, setFromLocation] = useState('New York (JFK)');
  const [toLocation, setToLocation] = useState('Paris, France');
  const [checkInDate, setCheckInDate] = useState('2026-09-15');
  const [checkOutDate, setCheckOutDate] = useState('2026-09-22');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [cabinClass, setCabinClass] = useState<'Economy' | 'Premium Economy' | 'Business' | 'First'>('Economy');

  // UI toggle states for popups/dropdowns
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const t = (key: TranslationKey) => getTranslation(selectedLanguage, key);

  const tabs: { id: BookingTabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'flights', label: t('tabFlights'), icon: Plane },
    { id: 'hotels', label: t('tabHotels'), icon: Building },
    { id: 'packages', label: t('tabPackages'), icon: Luggage },
    { id: 'experiences', label: t('tabExperiences'), icon: Compass }
  ];

  const handleSwapLocations = (e: React.MouseEvent) => {
    e.stopPropagation();
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      tab: activeTab,
      fromLocation,
      toLocation,
      checkInDate,
      checkOutDate,
      adults,
      children,
      rooms,
      cabinClass
    });
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-24 lg:-mt-28 mb-12">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-900/10 border border-[#E7EEF7] p-4 sm:p-6 lg:p-7 backdrop-blur-sm">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 pb-4 mb-4 border-b border-[#EAF2FB] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`search-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/25'
                    : 'text-[#5E6B82] hover:text-[#0969E8] hover:bg-[#F3F8FF]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#0969E8]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}

          {activeTab === 'flights' ? (
            <a
              href="https://www.aviasales.com/search?marker=737968"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-[#0969E8] font-bold bg-[#EAF2FB] hover:bg-[#d8e9fc] px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Live Aviasales Search (737968)</span>
            </a>
          ) : (
            <div className="ml-auto hidden md:flex items-center gap-1 text-xs text-[#21B96F] font-semibold bg-[#21B96F]/10 px-3 py-1 rounded-full whitespace-nowrap">
              <Sparkles className="w-3 h-3" />
              <span>Price Match Guaranteed</span>
            </div>
          )}
        </div>

        {/* Search Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Origin Location (4 cols on lg) */}
            <div className="relative lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
                {activeTab === 'hotels' ? t('toWhere') : t('fromWhere')}
              </label>
              <div
                onClick={() => {
                  setShowOriginDropdown(!showOriginDropdown);
                  setShowDestDropdown(false);
                  setShowTravelerDropdown(false);
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC] cursor-pointer transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#0969E8] shrink-0" />
                <div className="flex-1 truncate">
                  <span className="text-sm font-semibold text-[#101C36] block truncate">
                    {fromLocation}
                  </span>
                </div>
                {activeTab === 'flights' && (
                  <button
                    type="button"
                    onClick={handleSwapLocations}
                    className="p-1 text-[#5E6B82] hover:text-[#0969E8] hover:bg-white rounded-md transition-colors"
                    title="Swap locations"
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Origin Autocomplete Suggestions Dropdown */}
              {showOriginDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 max-h-56 overflow-y-auto custom-scrollbar">
                  <div className="text-[11px] font-bold text-gray-400 uppercase px-2 py-1">
                    Popular Departure Airports
                  </div>
                  {POPULAR_ORIGIN_CITIES.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setFromLocation(city);
                        setShowOriginDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#101C36] hover:bg-[#F3F8FF] hover:text-[#0969E8] rounded-lg flex items-center justify-between"
                    >
                      <span>{city}</span>
                      {fromLocation === city && <Check className="w-3.5 h-3.5 text-[#0969E8]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Destination Location (3 cols on lg) */}
            <div className="relative lg:col-span-3">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
                {t('toWhere')}
              </label>
              <div
                onClick={() => {
                  setShowDestDropdown(!showDestDropdown);
                  setShowOriginDropdown(false);
                  setShowTravelerDropdown(false);
                }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC] cursor-pointer transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#FF5A5F] shrink-0" />
                <div className="flex-1 truncate">
                  <span className="text-sm font-semibold text-[#101C36] block truncate">
                    {toLocation}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[#5E6B82]" />
              </div>

              {/* Destination Suggestions Dropdown */}
              {showDestDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 max-h-56 overflow-y-auto custom-scrollbar">
                  <div className="text-[11px] font-bold text-gray-400 uppercase px-2 py-1">
                    Top Trending Destinations
                  </div>
                  {POPULAR_DESTINATION_CITIES.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setToLocation(city);
                        setShowDestDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#101C36] hover:bg-[#F3F8FF] hover:text-[#0969E8] rounded-lg flex items-center justify-between"
                    >
                      <span>{city}</span>
                      {toLocation === city && <Check className="w-3.5 h-3.5 text-[#0969E8]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dates (Check-in & Check-out) (3 cols on lg) */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
                  {activeTab === 'flights' ? t('departure') : t('checkIn')}
                </label>
                <div className="flex items-center gap-1.5 p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC]">
                  <Calendar className="w-4 h-4 text-[#0969E8] shrink-0" />
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#101C36] focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
                  {activeTab === 'flights' ? t('returnDate') : t('checkOut')}
                </label>
                <div className="flex items-center gap-1.5 p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC]">
                  <Calendar className="w-4 h-4 text-[#0969E8] shrink-0" />
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#101C36] focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Travelers & Search Button (3 cols on lg) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
              {/* Guests/Travelers selector (7 cols on sm) */}
              <div className="sm:col-span-6 relative">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
                  {t('travelers')}
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setShowTravelerDropdown(!showTravelerDropdown);
                    setShowOriginDropdown(false);
                    setShowDestDropdown(false);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC] text-left transition-colors"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <Users className="w-4 h-4 text-[#0969E8] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#101C36] truncate">
                      {adults + children} {t('guests')}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-[#5E6B82]" />
                </button>

                {/* Travelers Dropdown Modal */}
                {showTravelerDropdown && (
                  <div className="absolute top-full right-0 w-64 mt-1.5 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 space-y-3">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                      <div>
                        <span className="font-bold text-[#101C36] block">Adults</span>
                        <span className="text-[10px] text-gray-500">Age 18+</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-[#0969E8] font-bold flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                      <div>
                        <span className="font-bold text-[#101C36] block">Children</span>
                        <span className="text-[10px] text-gray-500">Age 0–17</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-[#0969E8] font-bold flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-2">
                      <div>
                        <span className="font-bold text-[#101C36] block">Rooms</span>
                        <span className="text-[10px] text-gray-500">Accommodation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setRooms(Math.max(1, rooms - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{rooms}</span>
                        <button
                          type="button"
                          onClick={() => setRooms(rooms + 1)}
                          className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-[#0969E8] font-bold flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowTravelerDropdown(false)}
                      className="w-full bg-[#0969E8] text-white text-xs font-bold py-2 rounded-xl"
                    >
                      Apply Selection
                    </button>
                  </div>
                )}
              </div>

              {/* Search Button (5 cols on sm) */}
              <div className="sm:col-span-6">
                <button
                  type="submit"
                  id="search-widget-submit-btn"
                  className="w-full h-[46px] bg-[#0969E8] hover:bg-[#0759c5] active:scale-[0.98] text-white font-bold text-sm px-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-150"
                >
                  <Search className="w-4 h-4" />
                  <span>{t('search')}</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
