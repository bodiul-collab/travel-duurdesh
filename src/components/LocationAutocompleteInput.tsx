import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MapPin, X, Plane, Check, Search, Globe, ChevronDown } from 'lucide-react';
import {
  searchAirports,
  AirportOption,
  formatAirportSelection,
  TOP_POPULAR_CODES,
  AIRPORT_REGIONS,
  GLOBAL_AIRPORTS
} from '../data/airportsData';

interface LocationAutocompleteInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isDestination?: boolean;
  type?: 'flights' | 'hotels' | 'packages' | 'experiences';
}

export const LocationAutocompleteInput: React.FC<LocationAutocompleteInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'City or airport code (e.g. IAH, MED, JED, JFK)',
  isDestination = false,
  type = 'flights'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(value);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync internal input state when parent value changes
  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  // Clean typed query
  const cleanQuery = searchQuery.trim();

  // Search filtered airports (takes region & current value into account so it doesn't narrow down to 1 airport when just opened)
  const suggestions = useMemo(() => {
    return searchAirports(searchQuery, selectedRegion, value);
  }, [searchQuery, selectedRegion, value]);

  // Check if typed text could be a custom 3-letter airport code
  const isCustomCode = cleanQuery.length >= 2 && cleanQuery.length <= 4;
  const uppercaseCustomCode = cleanQuery.toUpperCase();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchQuery(text);
    // FREEFORM INPUT: user's typed string is immediately saved to parent state!
    onChange(text);
    if (!isOpen) setIsOpen(true);
  };

  const handleSelectAirport = (airport: AirportOption) => {
    const formatted = formatAirportSelection(airport);
    setSearchQuery(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleSelectQuickCode = (code: string, city: string) => {
    const formatted = `${city} (${code})`;
    setSearchQuery(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleSelectCustomCode = () => {
    const code = uppercaseCustomCode;
    // Check if we know this code in GLOBAL_AIRPORTS
    const known = GLOBAL_AIRPORTS.find((a) => a.code.toUpperCase() === code);
    if (known) {
      handleSelectAirport(known);
    } else {
      setSearchQuery(code);
      onChange(code);
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchQuery('');
    onChange('');
    inputRef.current?.focus();
    setIsOpen(true);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsOpen(true);
    // Auto-select text on focus so user can immediately type "IAH" to overwrite
    e.target.select();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // If there's an exact code match, select it, otherwise keep freeform text
      if (suggestions.length > 0 && cleanQuery.length > 0) {
        const exact = suggestions.find(
          (s) => s.code.toLowerCase() === cleanQuery.toLowerCase()
        );
        if (exact) {
          handleSelectAirport(exact);
          return;
        }
      }
      setIsOpen(false);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {label && (
        <div className="flex items-center justify-between mb-1">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5E6B82]">
            {label}
          </label>
          <span className="text-[10px] text-[#0969E8] font-semibold">
            Freeform Type
          </span>
        </div>
      )}

      {/* Input container */}
      <div
        className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border transition-all bg-[#F8FAFC] ${
          isOpen
            ? 'border-[#0969E8] ring-2 ring-[#0969E8]/10 bg-white shadow-xs'
            : 'border-[#E2E8F0] hover:border-[#0969E8]'
        }`}
      >
        <MapPin
          className={`w-4 h-4 shrink-0 transition-colors ${
            isDestination ? 'text-[#FF5A5F]' : 'text-[#0969E8]'
          }`}
        />

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
          className="flex-1 min-w-0 bg-transparent text-xs sm:text-sm font-semibold text-[#101C36] placeholder:text-gray-400 focus:outline-none"
        />

        {searchQuery ? (
          <button
            type="button"
            onClick={handleClear}
            className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-200/60 transition-colors cursor-pointer shrink-0"
            aria-label="Clear location input"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider hidden sm:inline shrink-0">
            Type Code
          </span>
        )}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) inputRef.current?.focus();
          }}
          className="p-1 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer shrink-0"
          title="Toggle airport code list"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Autocomplete Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2.5 z-50 max-h-[380px] overflow-y-auto custom-scrollbar animate-fadeIn">
          {/* Header Banner with Freeform indicator */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#F0F7FF] rounded-xl border border-[#D0E6FF] mb-2">
            <div className="flex items-center gap-1.5 text-xs text-[#0969E8] font-bold">
              <Plane className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Airport Search & Codes</span>
            </div>
            <span className="text-[10px] bg-[#0969E8] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Freeform Typing Enabled
            </span>
          </div>

          {/* Quick Select Popular Codes Pills Bar */}
          <div className="mb-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 mb-1 flex items-center justify-between">
              <span>Quick Codes:</span>
              <span className="text-[9px] text-gray-400 font-normal">Click code to apply</span>
            </div>
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 px-1">
              {TOP_POPULAR_CODES.map((item) => {
                const isSelected =
                  value.toLowerCase().includes(item.code.toLowerCase()) ||
                  value.toLowerCase().includes(item.city.toLowerCase());

                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => handleSelectQuickCode(item.code, item.city)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-bold font-mono whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#0969E8] text-white border-[#0969E8] shadow-xs'
                        : 'bg-white hover:bg-[#EAF2FB] hover:border-[#0969E8] text-[#101C36] border-gray-200'
                    }`}
                    title={`${item.city} (${item.code}), ${item.country}`}
                  >
                    <span>{item.code}</span>
                    <span className="text-[9px] font-normal opacity-80">{item.city}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-gray-100 pb-1.5 mb-1.5 px-1">
            {AIRPORT_REGIONS.map((reg) => (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedRegion === reg.id
                    ? 'bg-[#071B49] text-white'
                    : 'bg-gray-100 text-[#5E6B82] hover:bg-gray-200'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Direct Freeform Option (if user typed custom code or text) */}
          {cleanQuery.length > 0 && (
            <button
              type="button"
              onClick={handleSelectCustomCode}
              className="w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between gap-2 bg-[#F8FAFC] hover:bg-[#EAF2FB] border border-dashed border-[#0969E8]/40 hover:border-[#0969E8] transition-all cursor-pointer mb-1.5 group"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#0969E8] text-white flex items-center justify-center font-mono font-bold text-xs">
                  ↵
                </span>
                <div>
                  <div className="font-bold text-[#0969E8]">
                    Use "{searchQuery}" as freeform location
                  </div>
                  <div className="text-[10px] text-gray-500">
                    Search flights directly with this airport code or city name
                  </div>
                </div>
              </div>
              <span className="text-[10px] bg-[#0969E8]/10 text-[#0969E8] px-2 py-0.5 rounded-md font-bold group-hover:bg-[#0969E8] group-hover:text-white transition-colors">
                Apply
              </span>
            </button>
          )}

          {/* Matching Suggestions List */}
          {suggestions.length > 0 ? (
            <div className="space-y-0.5">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 flex items-center justify-between">
                <span>Available Airports ({suggestions.length})</span>
                {cleanQuery && <span>Matching "{cleanQuery}"</span>}
              </div>

              {suggestions.map((airport) => {
                const isCurrentSelection =
                  value.toLowerCase().includes(airport.code.toLowerCase()) ||
                  value.toLowerCase() === airport.city.toLowerCase();

                const isIah = airport.code === 'IAH';

                return (
                  <button
                    key={`${airport.code}-${airport.city}`}
                    type="button"
                    onClick={() => handleSelectAirport(airport)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all cursor-pointer ${
                      isCurrentSelection
                        ? 'bg-[#EAF2FB] text-[#0969E8] ring-1 ring-[#0969E8]/20'
                        : isIah
                        ? 'bg-amber-50/50 hover:bg-amber-100/70 text-[#1E293B] border border-amber-200/50'
                        : 'hover:bg-[#F3F8FF] text-[#1E293B]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`px-2 py-0.5 rounded-md font-mono font-bold text-[11px] shrink-0 border ${
                          isIah
                            ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                            : isCurrentSelection
                            ? 'bg-[#0969E8] text-white border-[#0969E8]'
                            : 'bg-white border-gray-200 text-[#0969E8] shadow-2xs'
                        }`}
                      >
                        {airport.code}
                      </span>
                      <div className="truncate">
                        <div className="font-bold text-[#101C36] truncate flex items-center gap-1.5">
                          <span>{airport.city}</span>
                          <span className="font-normal text-gray-500">
                            ({airport.country})
                          </span>
                          {isIah && (
                            <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded-md">
                              Houston Intercontinental
                            </span>
                          )}
                          {airport.code === 'MED' && (
                            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-md">
                              Madinah Gateway
                            </span>
                          )}
                          {airport.code === 'JED' && (
                            <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded-md">
                              Jeddah / Umrah
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-gray-400 truncate">
                          {airport.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] text-gray-400 hidden sm:inline">
                        {airport.region}
                      </span>
                      {isCurrentSelection && (
                        <Check className="w-3.5 h-3.5 text-[#0969E8]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-4 text-center text-xs text-[#5E6B82] space-y-2">
              <p className="font-semibold text-[#101C36]">
                No predefined airport matched "{searchQuery}"
              </p>
              <p className="text-[11px] text-gray-400">
                Freeform input is active. You can keep "{searchQuery}" as your custom departure or arrival location.
              </p>
              <button
                type="button"
                onClick={handleSelectCustomCode}
                className="mt-2 px-3 py-1.5 bg-[#0969E8] text-white rounded-lg font-bold text-xs cursor-pointer hover:bg-[#0756C2] transition-colors"
              >
                Use "{searchQuery}" anyway
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
