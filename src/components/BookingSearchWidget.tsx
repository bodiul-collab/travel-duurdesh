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
  Sparkles,
  Plus,
  Trash2
} from 'lucide-react';
import { BookingTabType, SearchFilterState, FlightLeg } from '../types';
import { getTranslation, TranslationKey } from '../data/translations';
import { LocationAutocompleteInput } from './LocationAutocompleteInput';
import { DatePickerPopover } from './DatePickerPopover';
import { buildAviasalesRouteUrl, buildAviasalesMultiCityUrl } from '../utils/aviasales';

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
  
  // Flight trip type: round, oneWay, or multiCity
  const [flightTripType, setFlightTripType] = useState<'round' | 'oneWay' | 'multiCity'>('round');

  // Search parameters state with dynamic upcoming dates
  const [fromLocation, setFromLocation] = useState('New York (JFK)');
  const [toLocation, setToLocation] = useState('Jeddah (JED)');
  const [checkInDate, setCheckInDate] = useState(() => getFutureDateStr(7));
  const [checkOutDate, setCheckOutDate] = useState(() => getFutureDateStr(14));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [cabinClass, setCabinClass] = useState<'Economy' | 'Premium Economy' | 'Business' | 'First'>('Economy');

  // Multi-city legs state
  const [multiCityLegs, setMultiCityLegs] = useState<FlightLeg[]>([
    { id: 'b-leg-1', origin: 'New York (JFK)', destination: 'Jeddah (JED)', date: getFutureDateStr(7) },
    { id: 'b-leg-2', origin: 'Madinah (MED)', destination: 'New York (JFK)', date: getFutureDateStr(17) }
  ]);

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

  const handleAddMultiLeg = () => {
    if (multiCityLegs.length >= 5) return;
    const lastLeg = multiCityLegs[multiCityLegs.length - 1];
    let nextDate: string;
    try {
      const d = new Date(lastLeg.date);
      d.setDate(d.getDate() + 5);
      nextDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    } catch {
      nextDate = getFutureDateStr(21);
    }

    setMultiCityLegs([
      ...multiCityLegs,
      {
        id: `b-leg-${Date.now()}-${multiCityLegs.length + 1}`,
        origin: lastLeg.destination || 'Jeddah (JED)',
        destination: 'New York (JFK)',
        date: nextDate
      }
    ]);
  };

  const handleRemoveMultiLeg = (id: string) => {
    if (multiCityLegs.length <= 2) return;
    setMultiCityLegs(multiCityLegs.filter((leg) => leg.id !== id));
  };

  const handleUpdateMultiLeg = (id: string, field: 'origin' | 'destination' | 'date', value: string) => {
    setMultiCityLegs((prev) =>
      prev.map((leg) => (leg.id === id ? { ...leg, [field]: value } : leg))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      tab: activeTab,
      fromLocation: fromLocation || 'Houston (IAH)',
      toLocation: toLocation || 'Madinah (MED)',
      checkInDate,
      checkOutDate: flightTripType === 'oneWay' ? undefined : checkOutDate,
      adults,
      children,
      rooms,
      cabinClass,
      tripType: activeTab === 'flights' ? flightTripType : undefined,
      multiLegs: activeTab === 'flights' && flightTripType === 'multiCity' ? multiCityLegs : undefined
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
              href={
                flightTripType === 'multiCity'
                  ? buildAviasalesMultiCityUrl(multiCityLegs, { passengers: adults + children })
                  : buildAviasalesRouteUrl(
                      fromLocation || 'Houston (IAH)',
                      toLocation || 'Madinah (MED)',
                      {
                        departDate: checkInDate,
                        returnDate: flightTripType === 'round' ? checkOutDate : undefined,
                        isOneWay: flightTripType === 'oneWay',
                        passengers: adults + children
                      }
                    )
              }
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

        {/* Flight Sub-header with Trip Type Radio Buttons (Round Trip, One Way, Multiple City) */}
        {activeTab === 'flights' && (
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#5E6B82] pb-3 mb-2 border-b border-[#F0F5FA]">
            <span className="font-bold text-[#071B49] text-xs">Trip Type:</span>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="bookingFlightTripType"
                checked={flightTripType === 'round'}
                onChange={() => setFlightTripType('round')}
                className="text-[#0969E8] focus:ring-[#0969E8]"
              />
              <span className={flightTripType === 'round' ? 'text-[#071B49] font-bold' : ''}>Round Trip</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="bookingFlightTripType"
                checked={flightTripType === 'oneWay'}
                onChange={() => setFlightTripType('oneWay')}
                className="text-[#0969E8] focus:ring-[#0969E8]"
              />
              <span className={flightTripType === 'oneWay' ? 'text-[#071B49] font-bold' : ''}>One Way</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="bookingFlightTripType"
                checked={flightTripType === 'multiCity'}
                onChange={() => setFlightTripType('multiCity')}
                className="text-[#0969E8] focus:ring-[#0969E8]"
              />
              <span className={flightTripType === 'multiCity' ? 'text-[#071B49] font-bold' : ''}>Multiple City</span>
            </label>
          </div>
        )}

        {/* Search Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'flights' && flightTripType === 'multiCity' ? (
            /* Multi-City flight segments builder */
            <div className="space-y-3">
              {multiCityLegs.map((leg, index) => (
                <div
                  key={leg.id}
                  className="p-3 sm:p-4 rounded-2xl bg-[#F8FAFC] border border-gray-200/90 space-y-2 transition-all hover:border-blue-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0969E8] text-white text-[11px] font-bold flex items-center gap-1">
                        <Plane className="w-3 h-3" />
                        <span>Flight {index + 1}</span>
                      </span>
                      {index === 0 && (
                        <span className="text-[11px] text-[#5E6B82] hidden sm:inline">
                          Departure Leg
                        </span>
                      )}
                    </div>
                    {multiCityLegs.length > 2 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveMultiLeg(leg.id)}
                        className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 font-semibold px-2 py-1 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                        title={`Remove Flight ${index + 1}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Remove Leg</span>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
                    {/* Origin */}
                    <div className="lg:col-span-5">
                      <LocationAutocompleteInput
                        label="From"
                        value={leg.origin}
                        onChange={(val) => handleUpdateMultiLeg(leg.id, 'origin', val)}
                        placeholder="Airport code or city (e.g. LHR, JFK)"
                        isDestination={false}
                        type="flights"
                      />
                    </div>

                    {/* Destination */}
                    <div className="lg:col-span-4">
                      <LocationAutocompleteInput
                        label="To Destination"
                        value={leg.destination}
                        onChange={(val) => handleUpdateMultiLeg(leg.id, 'destination', val)}
                        placeholder="Airport code or city (e.g. JED, MED)"
                        isDestination={true}
                        type="flights"
                      />
                    </div>

                    {/* Flight Date */}
                    <div className="lg:col-span-3">
                      <DatePickerPopover
                        label="Flight Date"
                        value={leg.date}
                        minDate={index > 0 ? multiCityLegs[index - 1].date : undefined}
                        onChange={(val) => handleUpdateMultiLeg(leg.id, 'date', val)}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Multi-City Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                {multiCityLegs.length < 5 ? (
                  <button
                    type="button"
                    onClick={handleAddMultiLeg}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-dashed border-[#0969E8] text-[#0969E8] hover:bg-[#EAF2FB] text-xs font-bold transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Another Flight Leg (up to 5)</span>
                  </button>
                ) : (
                  <span className="text-xs text-[#5E6B82] italic">
                    Maximum 5 flight segments reached
                  </span>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  {/* Travelers */}
                  <div className="flex items-center gap-2 bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2">
                    <Users className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="text-xs text-[#5E6B82] font-semibold">Travelers:</span>
                    <select
                      value={adults + children}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="bg-transparent text-xs font-bold text-[#071B49] border-none p-0 focus:ring-0 cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Adult' : 'Adults'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Multi-City Submit */}
                  <button
                    type="submit"
                    className="h-11 px-6 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Multi-City Flights</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Standard Grid for Round Trip / One Way Flights, Hotels, Packages, Experiences */
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

                {activeTab === 'flights' && flightTripType === 'oneWay' ? (
                  <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl p-2.5 focus-within:border-[#0969E8] focus-within:bg-white transition-all">
                    <label className="block text-[10px] uppercase font-bold text-[#5E6B82] mb-0.5">Trip Style</label>
                    <span className="text-xs font-semibold text-[#071B49] block pt-1">One-Way Direct</span>
                  </div>
                ) : (
                  <DatePickerPopover
                    label={activeTab === 'flights' ? t('returnDate') : t('checkOut')}
                    value={checkOutDate}
                    minDate={checkInDate}
                    onChange={(newDate) => setCheckOutDate(newDate)}
                  />
                )}
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
        )}

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
