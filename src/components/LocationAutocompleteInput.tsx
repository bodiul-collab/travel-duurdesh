import React, { useState, useRef, useEffect, useMemo } from 'react';
import { MapPin, X, Check, Globe, ChevronDown, Loader2 } from 'lucide-react';
import {
  searchAirports,
  AirportOption,
  formatAirportSelection,
  TOP_POPULAR_CODES,
  AIRPORT_REGIONS,
  GLOBAL_AIRPORTS
} from '../data/airportsData';
import {
  fetchAviasalesPlaces,
  AviasalesPlace,
  getCountryFlagEmoji,
  mapPlaceToAirportOption
} from '../utils/aviasalesAutocomplete';
import { registerPlaceIata } from '../utils/iataRegistry';

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
  placeholder = 'City or 3-letter IATA code (e.g. SDF, LHR, DXB, DAC)',
  isDestination = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(value);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [remotePlaces, setRemotePlaces] = useState<AviasalesPlace[]>([]);
  const [isLoadingRemote, setIsLoadingRemote] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sync internal input state when parent value changes
  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  // Clean typed query
  const cleanQuery = searchQuery.trim();

  // Query Aviasales live IATA database whenever user types
  useEffect(() => {
    if (cleanQuery.length < 2 || cleanQuery.toLowerCase() === value.toLowerCase()) {
      setRemotePlaces([]);
      setIsLoadingRemote(false);
      return;
    }

    const controller = new AbortController();
    setIsLoadingRemote(true);

    const timer = setTimeout(async () => {
      try {
        const places = await fetchAviasalesPlaces(cleanQuery, controller.signal);
        setRemotePlaces(places);
      } catch {
        setRemotePlaces([]);
      } finally {
        setIsLoadingRemote(false);
      }
    }, 180);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [cleanQuery, value]);

  // Search filtered local airports (instant 0ms response)
  const localSuggestions = useMemo(() => {
    return searchAirports(searchQuery, selectedRegion, value);
  }, [searchQuery, selectedRegion, value]);

  // Combine live Aviasales IATA places with local airports with priority ranking
  const suggestions: (AirportOption & { countryCode?: string; isLiveIata?: boolean })[] = useMemo(() => {
    if (!cleanQuery || cleanQuery.toLowerCase() === value.toLowerCase()) {
      return localSuggestions;
    }

    const seenCodes = new Set<string>();
    const exactMatches: (AirportOption & { countryCode?: string; isLiveIata?: boolean })[] = [];
    const otherMatches: (AirportOption & { countryCode?: string; isLiveIata?: boolean })[] = [];
    const queryLower = cleanQuery.toLowerCase();

    // 1. First add matching local suggestions
    for (const local of localSuggestions) {
      const codeUpper = local.code.toUpperCase();
      if (!seenCodes.has(codeUpper)) {
        seenCodes.add(codeUpper);
        if (codeUpper.toLowerCase() === queryLower) {
          exactMatches.push(local);
        } else {
          otherMatches.push(local);
        }
      }
    }

    // 2. Add remote places from Aviasales IATA database
    if (remotePlaces.length > 0) {
      for (const place of remotePlaces) {
        const codeUpper = place.code.toUpperCase();
        if (!seenCodes.has(codeUpper)) {
          seenCodes.add(codeUpper);
          const opt = mapPlaceToAirportOption(place);
          const combinedOpt = {
            ...opt,
            countryCode: place.country_code,
            isLiveIata: true
          };

          if (codeUpper.toLowerCase() === queryLower) {
            exactMatches.unshift(combinedOpt);
          } else {
            otherMatches.push(combinedOpt);
          }
        }
      }
    }

    let combined = [...exactMatches, ...otherMatches];

    // Filter by region if user clicked a specific region tab
    if (selectedRegion !== 'all') {
      combined = combined.filter((item) => item.region === selectedRegion);
    }

    return combined;
  }, [localSuggestions, remotePlaces, cleanQuery, value, selectedRegion]);

  // Reset or adjust highlighted index when suggestions change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [cleanQuery, selectedRegion]);

  // Scroll highlighted item into view if navigating with keyboard
  useEffect(() => {
    if (listRef.current && highlightedIndex >= 0) {
      const highlightedEl = listRef.current.querySelector(
        `[data-item-index="${highlightedIndex}"]`
      ) as HTMLElement | null;
      if (highlightedEl) {
        highlightedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex]);

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
    onChange(text);
    if (!isOpen) setIsOpen(true);
  };

  const handleSelectAirport = (airport: AirportOption) => {
    registerPlaceIata(airport.city, airport.name, airport.code);
    const formatted = formatAirportSelection(airport);
    setSearchQuery(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleSelectQuickCode = (code: string, city: string) => {
    registerPlaceIata(city, undefined, code);
    const formatted = `${city} (${code.toUpperCase()})`;
    setSearchQuery(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleSelectCustomCode = () => {
    const upper = cleanQuery.toUpperCase();
    registerPlaceIata(undefined, undefined, upper);
    const known = GLOBAL_AIRPORTS.find((a) => a.code.toUpperCase() === upper);
    if (known) {
      handleSelectAirport(known);
    } else {
      setSearchQuery(cleanQuery);
      onChange(cleanQuery);
      setIsOpen(false);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchQuery('');
    onChange('');
    setRemotePlaces([]);
    inputRef.current?.focus();
    setIsOpen(true);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsOpen(true);
    e.target.select();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        suggestions.length > 0 ? (prev + 1) % suggestions.length : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        suggestions.length > 0
          ? (prev - 1 + suggestions.length) % suggestions.length
          : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0 && highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        handleSelectAirport(suggestions[highlightedIndex]);
      } else if (suggestions.length > 0) {
        handleSelectAirport(suggestions[0]);
      } else if (cleanQuery.length > 0) {
        handleSelectCustomCode();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
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
            IATA Code or City
          </span>
        </div>
      )}

      {/* Input container */}
      <div
        className={`flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border transition-all bg-[#F8FAFC] min-h-[44px] ${
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
            e.g. SDF, LHR
          </span>
        )}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) inputRef.current?.focus();
          }}
          className="p-1 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer shrink-0"
          title="Toggle airport list"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Autocomplete Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2.5 z-50 max-h-[420px] overflow-hidden flex flex-col animate-fadeIn">
          {/* Header Banner */}
          <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#F0F7FF] rounded-xl border border-[#D0E6FF] mb-2 shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-[#0969E8] font-bold">
              <Globe className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Worldwide Airport Directory</span>
            </div>
            {isLoadingRemote ? (
              <span className="flex items-center gap-1 text-[10px] text-[#0969E8] font-bold">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Searching Live Database...</span>
              </span>
            ) : (
              <span className="text-[10px] bg-[#0969E8] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Instant IATA Lookup
              </span>
            )}
          </div>

          {/* Quick Select Popular Codes Pills Bar */}
          <div className="mb-2 shrink-0">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 mb-1 flex items-center justify-between">
              <span>Popular Airport Hubs:</span>
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
                    className={`px-2 py-1 rounded-lg text-[11px] font-bold font-mono whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer border min-h-[30px] ${
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
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-gray-100 pb-1.5 mb-1.5 px-1 shrink-0">
            {AIRPORT_REGIONS.map((reg) => (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegion(reg.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-colors cursor-pointer min-h-[28px] ${
                  selectedRegion === reg.id
                    ? 'bg-[#071B49] text-white shadow-xs'
                    : 'bg-gray-100 text-[#5E6B82] hover:bg-gray-200'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Scrollable Results List */}
          <div
            ref={listRef}
            className="flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-0.5"
          >
            {suggestions.length > 0 ? (
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1 flex items-center justify-between">
                  <span>Matching Locations ({suggestions.length})</span>
                  {cleanQuery && <span>Query: "{cleanQuery}"</span>}
                </div>

                {suggestions.map((airport, index) => {
                  const isCurrentSelection =
                    value.toLowerCase().includes(airport.code.toLowerCase()) ||
                    value.toLowerCase() === airport.city.toLowerCase();

                  const isHighlighted = index === highlightedIndex;
                  const isExactMatch =
                    cleanQuery.length >= 2 &&
                    airport.code.toLowerCase() === cleanQuery.toLowerCase();

                  const flagEmoji = airport.countryCode
                    ? getCountryFlagEmoji(airport.countryCode)
                    : '';

                  return (
                    <button
                      key={`${airport.code}-${airport.city}-${airport.name}-${index}`}
                      type="button"
                      data-item-index={index}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      onClick={() => handleSelectAirport(airport)}
                      className={`w-full text-left px-3 py-2 sm:py-2.5 rounded-xl text-xs flex items-center justify-between gap-2.5 transition-all cursor-pointer min-h-[44px] ${
                        isHighlighted
                          ? 'bg-[#EAF2FB] text-[#0969E8] ring-1 ring-[#0969E8]/30 shadow-xs'
                          : isExactMatch
                          ? 'bg-blue-50/60 border border-blue-200 text-[#101C36]'
                          : 'hover:bg-[#F8FAFC] text-[#1E293B]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* 3-Letter IATA Badge */}
                        <span
                          className={`px-2 py-1 rounded-lg font-mono font-bold text-xs tracking-wider shrink-0 transition-colors border ${
                            isHighlighted || isExactMatch
                              ? 'bg-[#0969E8] text-white border-[#0969E8] shadow-xs'
                              : 'bg-white text-[#0969E8] border-blue-200 shadow-2xs'
                          }`}
                        >
                          {airport.code}
                        </span>

                        {/* Location Details */}
                        <div className="truncate min-w-0">
                          <div className="font-bold text-[#101C36] truncate flex items-center gap-1.5">
                            {flagEmoji && <span className="text-sm shrink-0">{flagEmoji}</span>}
                            <span className="truncate">{airport.city}</span>
                            <span className="font-normal text-gray-500 shrink-0">
                              ({airport.country})
                            </span>
                            {isExactMatch && (
                              <span className="text-[9px] bg-[#0969E8] text-white font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0">
                                Exact Match
                              </span>
                            )}
                            {airport.isLiveIata && !isExactMatch && (
                              <span className="text-[9px] bg-blue-50 text-[#0969E8] border border-blue-200/60 font-semibold px-1.5 py-0.2 rounded-md shrink-0">
                                Live IATA
                              </span>
                            )}
                            {airport.code === 'MED' && (
                              <span className="text-[9px] bg-blue-50 text-[#0969E8] border border-blue-200 font-bold px-1.5 py-0.2 rounded-md shrink-0">
                                Madinah Gateway
                              </span>
                            )}
                            {airport.code === 'JED' && (
                              <span className="text-[9px] bg-blue-50 text-[#0969E8] border border-blue-200 font-bold px-1.5 py-0.2 rounded-md shrink-0">
                                Jeddah / Umrah
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-gray-500 truncate">
                            {airport.name}
                          </div>
                        </div>
                      </div>

                      {/* Right Tag / Status */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-gray-400 hidden sm:inline font-medium">
                          {airport.region}
                        </span>
                        {isCurrentSelection && (
                          <Check className="w-4 h-4 text-[#0969E8] shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}

                {/* Optional secondary freeform fallback at bottom of results */}
                {cleanQuery.length >= 2 && (
                  <button
                    type="button"
                    onClick={handleSelectCustomCode}
                    className="w-full text-left mt-2 px-3 py-2 rounded-xl text-xs flex items-center justify-between gap-2 bg-[#F8FAFC] hover:bg-[#EAF2FB] border border-dashed border-gray-300 hover:border-[#0969E8] transition-all cursor-pointer text-gray-600 hover:text-[#0969E8]"
                  >
                    <div className="truncate">
                      <span className="font-semibold">Can't find your location?</span>{' '}
                      <span className="text-gray-500">Search with custom text "{cleanQuery}"</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#0969E8] uppercase tracking-wider shrink-0">
                      Apply
                    </span>
                  </button>
                )}
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-[#5E6B82] space-y-2">
                <p className="font-semibold text-[#101C36]">
                  No airport matched "{searchQuery}"
                </p>
                <p className="text-[11px] text-gray-400">
                  You can search by 3-letter IATA code (e.g. SDF, LHR, DXB), city name, or full airport name.
                </p>
                {cleanQuery.length > 0 && (
                  <button
                    type="button"
                    onClick={handleSelectCustomCode}
                    className="mt-2 px-3.5 py-2 bg-[#0969E8] text-white rounded-xl font-bold text-xs cursor-pointer hover:bg-[#0759c5] transition-colors shadow-xs"
                  >
                    Use "{searchQuery}" as custom location
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
