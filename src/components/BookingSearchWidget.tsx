import React, { useState } from 'react';
import {
  Plane,
  Building,
  Luggage,
  Compass,
  Users,
  Search,
  ArrowRightLeft,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { BookingTabType, SearchFilterState } from '../types';
import { getTranslation, TranslationKey } from '../data/translations';
import { LocationAutocompleteInput } from './LocationAutocompleteInput';
import { DatePickerPopover } from './DatePickerPopover';
import { buildAviasalesRouteUrl } from '../utils/aviasales';

interface BookingSearchWidgetProps {
  selectedLanguage: string;
  onSearchSubmit: (params: SearchFilterState) => void;
}

// Generate future default dates
const getFutureDateStr = (daysAhead: number): string => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const BookingSearchWidget: React.FC<BookingSearchWidgetProps> = ({
  selectedLanguage,
  onSearchSubmit
}) => {
  const [activeTab, setActiveTab] = useState<BookingTabType>('flights');
  
  // Search parameters state with dynamic upcoming dates
  const [fromLocation, setFromLocation] = useState('New York (JFK)');
  const [toLocation, setToLocation] = useState('Jeddah (JED)');
  const [checkInDate, setCheckInDate] = useState(() => getFutureDateStr(7));
  const [checkOutDate, setCheckOutDate] = useState(() => getFutureDateStr(14));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [cabinClass, setCabinClass] = useState<'Economy' | 'Premium Economy' | 'Business' | 'First'>('Economy');

  // UI toggle states for popups/dropdowns
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);

  const t = (key: TranslationKey) => getTranslation(selectedLanguage, key);

  const tabs: { id: BookingTabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'flights', label: t('tabFlights'), icon: Plane },
    { id: 'hotels', label: t('tabHotels'), icon: Building },
    { id: 'packages', label: t('tabPackages'), icon: Luggage },
    { id: 'experiences', label: t('tabExperiences'), icon: Compass }
  ];

  const handleSwapLocations = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      tab: activeTab,
      fromLocation: fromLocation || 'Houston (IAH)',
      toLocation: toLocation || 'Madinah (MED)',
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
              href={buildAviasalesRouteUrl(
                fromLocation || 'Houston (IAH)',
                toLocation || 'Madinah (MED)',
                { departDate: checkInDate, returnDate: checkOutDate, passengers: adults + children }
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-[#0969E8] font-bold bg-[#EAF2FB] hover:bg-[#d8e9fc] px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Direct Flight Deals (737968)</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
            {/* Origin Location with Direct Editable Input & Code Search */}
            <div className="relative lg:col-span-3">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82]">
                  {activeTab === 'hotels' ? t('toWhere') : t('fromWhere')}
                </label>
                {activeTab === 'flights' && (
                  <button
                    type="button"
                    onClick={handleSwapLocations}
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0969E8] hover:text-[#0759c5] transition-colors cursor-pointer"
                    title="Swap departure and arrival"
                  >
                    <ArrowRightLeft className="w-3 h-3" />
                    <span>Swap</span>
                  </button>
                )}
              </div>
              <LocationAutocompleteInput
                label=""
                value={fromLocation}
                onChange={(val) => setFromLocation(val)}
                placeholder="Airport code or city (e.g. DAC, JFK, LHR)"
                isDestination={false}
                type={activeTab}
              />
            </div>

            {/* Destination Location with Direct Editable Input & Code Search */}
            <div className="relative lg:col-span-3">
              <LocationAutocompleteInput
                label={t('toWhere')}
                value={toLocation}
                onChange={(val) => setToLocation(val)}
                placeholder="Going to (e.g. JED, MED, DXB, Paris)"
                isDestination={true}
                type={activeTab}
              />
            </div>

            {/* Dates (Departure/Check-in & Return/Check-out) with Interactive Calendar Popovers */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <DatePickerPopover
                label={activeTab === 'flights' ? t('departure') : t('checkIn')}
                value={checkInDate}
                onChange={(newDate) => {
                  setCheckInDate(newDate);
                  if (checkOutDate && checkOutDate < newDate) {
                    const next = new Date(newDate);
                    next.setDate(next.getDate() + 7);
                    const nextStr = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}-${String(next.getDate()).padStart(2, '0')}`;
                    setCheckOutDate(nextStr);
                  }
                }}
              />

              <DatePickerPopover
                label={activeTab === 'flights' ? t('returnDate') : t('checkOut')}
                value={checkOutDate}
                minDate={checkInDate}
                onChange={(newDate) => setCheckOutDate(newDate)}
              />
            </div>

            {/* Travelers & Search Button (3 cols on lg) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
              {/* Guests/Travelers selector (6 cols on sm) */}
              <div className="sm:col-span-6 relative">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82] mb-1">
                  {t('travelers')}
                </label>
                <button
                  type="button"
                  onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] bg-[#F8FAFC] text-left transition-colors cursor-pointer"
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
                  <div className="absolute top-full right-0 w-64 mt-1.5 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                      <div>
                        <span className="font-bold text-[#101C36] block">Adults</span>
                        <span className="text-[10px] text-gray-500">Age 18+</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-[#0969E8] font-bold flex items-center justify-center text-sm cursor-pointer"
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
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-[#0969E8] font-bold flex items-center justify-center text-sm cursor-pointer"
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
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-bold text-xs">{rooms}</span>
                        <button
                          type="button"
                          onClick={() => setRooms(rooms + 1)}
                          className="w-7 h-7 rounded-full bg-blue-100 hover:bg-blue-200 text-[#0969E8] font-bold flex items-center justify-center text-sm cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowTravelerDropdown(false)}
                      className="w-full bg-[#0969E8] text-white text-xs font-bold py-2 rounded-xl cursor-pointer"
                    >
                      Apply Selection
                    </button>
                  </div>
                )}
              </div>

              {/* Search Button (6 cols on sm) */}
              <div className="sm:col-span-6">
                <button
                  type="submit"
                  id="search-widget-submit-btn"
                  className="w-full h-[46px] bg-[#0969E8] hover:bg-[#0759c5] active:scale-[0.98] text-white font-bold text-sm px-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer"
                >
                  {activeTab === 'flights' ? (
                    <>
                      <Plane className="w-4 h-4" />
                      <span>View Flights</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>{t('search')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Route Shortcuts for Flights */}
          {activeTab === 'flights' && (
            <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 flex-wrap text-xs">
              <span className="font-bold text-[#101C36] flex items-center gap-1 text-[11px] mr-1">
                <Sparkles className="w-3.5 h-3.5 text-[#0969E8]" />
                <span>Popular Routes:</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  setFromLocation('Houston (IAH)');
                  setToLocation('Madinah (MED)');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  fromLocation.includes('IAH') && toLocation.includes('MED')
                    ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200'
                }`}
              >
                ✈️ IAH → MED (Houston to Madinah)
              </button>
              <button
                type="button"
                onClick={() => {
                  setFromLocation('New York (JFK)');
                  setToLocation('Jeddah (JED)');
                }}
                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#101C36] text-xs font-medium cursor-pointer transition-colors"
              >
                JFK → JED
              </button>
              <button
                type="button"
                onClick={() => {
                  setFromLocation('London (LHR)');
                  setToLocation('Jeddah (JED)');
                }}
                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#101C36] text-xs font-medium cursor-pointer transition-colors"
              >
                LHR → JED
              </button>
              <button
                type="button"
                onClick={() => {
                  setFromLocation('Dubai (DXB)');
                  setToLocation('Madinah (MED)');
                }}
                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#101C36] text-xs font-medium cursor-pointer transition-colors"
              >
                DXB → MED
              </button>
              <button
                type="button"
                onClick={() => {
                  setFromLocation('Dhaka (DAC)');
                  setToLocation('Jeddah (JED)');
                }}
                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#101C36] text-xs font-medium cursor-pointer transition-colors"
              >
                DAC → JED
              </button>
              <button
                type="button"
                onClick={() => {
                  setFromLocation('Chicago (ORD)');
                  setToLocation('Madinah (MED)');
                }}
                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#101C36] text-xs font-medium cursor-pointer transition-colors"
              >
                ORD → MED
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
