import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import {
  MapPin,
  ExternalLink,
  Layers,
  Maximize2,
  Star,
  Compass,
  Building,
  Navigation,
  Globe2
} from 'lucide-react';
import { Destination, TravelDeal, TravelExperience, CurrencyConfig } from '../types';

interface InteractiveDestinationMapProps {
  destinations: Destination[];
  deals?: TravelDeal[];
  experiences?: TravelExperience[];
  currency: CurrencyConfig;
  onBookAffiliate: (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  }) => void;
  onCloseModal?: () => void;
}

type TileProvider = 'voyager' | 'streets' | 'toner';

const TILE_LAYERS: Record<TileProvider, { url: string; attribution: string; name: string }> = {
  voyager: {
    name: 'Clean Travel',
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
  },
  streets: {
    name: 'Streets & Roads',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  toner: {
    name: 'High Contrast',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
  }
};

export const InteractiveDestinationMap: React.FC<InteractiveDestinationMapProps> = ({
  destinations,
  deals = [],
  experiences = [],
  currency,
  onBookAffiliate,
  onCloseModal
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.FeatureGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [activeTile, setActiveTile] = useState<TileProvider>('voyager');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [showLayerMenu, setShowLayerMenu] = useState(false);

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  // Regions list from available destinations
  const regions = ['all', ...Array.from(new Set(destinations.map((d) => d.region)))];

  const filteredDestinations = destinations.filter(
    (d) => selectedRegion === 'all' || d.region === selectedRegion
  );

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Clean existing map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Default center on global perspective (Europe/Mediterranean view)
    const map = L.map(mapContainerRef.current, {
      center: [28.0, 30.0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false // custom position
    });

    // Add Zoom Control at bottom right for clean layout
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Add Tile Layer
    const tileConfig = TILE_LAYERS[activeTile];
    const tileLayer = L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);
    tileLayerRef.current = tileLayer;

    // Feature group for auto-fitting markers
    const markersGroup = L.featureGroup().addTo(map);
    markersGroupRef.current = markersGroup;
    mapInstanceRef.current = map;

    // Ensure proper size calculation
    setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Tile Layer when user switches style
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    const tileConfig = TILE_LAYERS[activeTile];
    tileLayerRef.current.setUrl(tileConfig.url);
  }, [activeTile]);

  // Render Interactive Markers whenever destinations or filtered destinations change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersGroupRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    const bounds: L.LatLngExpression[] = [];

    filteredDestinations.forEach((dest) => {
      if (!dest.coordinates) return;

      const { lat, lng } = dest.coordinates;
      bounds.push([lat, lng]);

      const isSelected = selectedDestination?.id === dest.id;
      const priceFormatted = formatPrice(dest.startingPrice);

      // Create Custom HTML Pin
      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div class="group relative cursor-pointer transform transition-all duration-300 hover:scale-110 -translate-x-1/2 -translate-y-full ${
            isSelected ? 'scale-110 z-50' : 'z-20'
          }">
            <div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full shadow-xl border ${
              isSelected
                ? 'bg-[#071B49] text-white border-[#4DA3FF] ring-4 ring-[#0969E8]/30'
                : 'bg-white text-[#101C36] border-gray-200 hover:border-[#0969E8]'
            } transition-all">
              <span class="w-2 h-2 rounded-full ${
                isSelected ? 'bg-[#21B96F] animate-ping' : 'bg-[#0969E8]'
              }"></span>
              <span class="text-[11px] font-extrabold whitespace-nowrap">${dest.name}</span>
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                isSelected ? 'bg-[#21B96F] text-white' : 'bg-[#EAF2FB] text-[#0969E8]'
              }">${priceFormatted}</span>
            </div>
            <div class="w-2.5 h-2.5 bg-inherit border-r border-b ${
              isSelected ? 'bg-[#071B49] border-[#4DA3FF]' : 'bg-white border-gray-200'
            } transform rotate-45 mx-auto -mt-1 shadow-sm"></div>
          </div>
        `,
        iconSize: [120, 42],
        iconAnchor: [60, 42],
        popupAnchor: [0, -42]
      });

      // Rich HTML Popup
      const popupHtml = `
        <div class="w-64 sm:w-72 bg-white rounded-2xl overflow-hidden font-sans text-[#101C36]">
          <div class="relative h-32 w-full overflow-hidden bg-gray-100">
            <img 
              src="${dest.image}" 
              alt="${dest.name}" 
              class="w-full h-full object-cover" 
              crossorigin="anonymous"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            ${
              dest.tag
                ? `<span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#0969E8] text-white text-[10px] font-extrabold uppercase tracking-wider">${dest.tag}</span>`
                : ''
            }
            <div class="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
              <div>
                <h4 class="font-bold text-sm leading-tight text-white drop-shadow-sm">${dest.name}</h4>
                <p class="text-[11px] text-white/90 drop-shadow-sm">${dest.country} • ${dest.region}</p>
              </div>
              <div class="flex items-center gap-1 bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold">
                ★ <span>${dest.rating}</span>
              </div>
            </div>
          </div>

          <div class="p-3.5 space-y-3">
            <p class="text-xs text-[#5E6B82] line-clamp-2 leading-relaxed">${dest.description}</p>
            
            <div class="flex items-center justify-between pt-1 border-t border-gray-100">
              <div>
                <span class="text-[10px] text-[#5E6B82] block font-medium">Starting from</span>
                <span class="text-sm font-extrabold text-[#21B96F]">${priceFormatted}</span>
              </div>

              <button
                id="popup-book-btn-${dest.id}"
                class="px-3.5 py-1.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span>Book Now</span>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;

      const marker = L.marker([lat, lng], { icon: customIcon });
      marker.bindPopup(popupHtml, { maxWidth: 300, closeButton: true });

      // Handle marker click
      marker.on('click', () => {
        setSelectedDestination(dest);
      });

      // Attach click event to the popup's book button once opened
      marker.on('popupopen', () => {
        const btn = document.getElementById(`popup-book-btn-${dest.id}`);
        if (btn) {
          btn.onclick = () => {
            onCloseModal?.();
            onBookAffiliate({
              title: `${dest.name}, ${dest.country}`,
              partnerName: dest.partnerName,
              affiliateUrl: dest.affiliateUrl,
              price: priceFormatted,
              image: dest.image
            });
          };
        }
      });

      marker.addTo(markersGroup);
    });

    // Auto-fit all coordinates in viewport with padding
    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
    }
  }, [filteredDestinations, currency, selectedDestination]);

  // Fly to destination
  const handleFlyTo = (dest: Destination) => {
    setSelectedDestination(dest);
    if (!mapInstanceRef.current || !dest.coordinates) return;
    mapInstanceRef.current.flyTo([dest.coordinates.lat, dest.coordinates.lng], 9, {
      duration: 1.2
    });
  };

  const handleFitAll = () => {
    if (!mapInstanceRef.current || !markersGroupRef.current) return;
    const bounds = markersGroupRef.current.getBounds();
    if (bounds.isValid()) {
      mapInstanceRef.current.fitBounds(bounds, { padding: [40, 40] });
    }
  };

  return (
    <div className="relative w-full h-[520px] sm:h-[580px] rounded-2xl overflow-hidden bg-slate-100 flex flex-col border border-gray-200">
      {/* Top Map Action Bar */}
      <div className="absolute top-3 left-3 right-3 z-30 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Region Filter Pills */}
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-gray-200/80 pointer-events-auto overflow-x-auto no-scrollbar max-w-[calc(100%-60px)] sm:max-w-none">
          <Globe2 className="w-3.5 h-3.5 text-[#0969E8] ml-1.5 mr-0.5 shrink-0 hidden sm:block" />
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-2.5 py-1 text-[11px] font-bold rounded-xl capitalize transition-all whitespace-nowrap ${
                selectedRegion === reg
                  ? 'bg-[#0969E8] text-white shadow-sm'
                  : 'text-[#5E6B82] hover:text-[#101C36] hover:bg-gray-100'
              }`}
            >
              {reg === 'all' ? `All (${destinations.length})` : reg}
            </button>
          ))}
        </div>

        {/* Map Utility Controls */}
        <div className="flex items-center gap-1.5 pointer-events-auto ml-auto">
          {/* Tile Layer Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLayerMenu(!showLayerMenu)}
              className="p-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/80 text-[#101C36] hover:text-[#0969E8] hover:bg-white transition-all flex items-center gap-1 text-xs font-bold"
              title="Change Map Style"
            >
              <Layers className="w-4 h-4" />
              <span className="hidden md:inline text-[11px]">{TILE_LAYERS[activeTile].name}</span>
            </button>

            {showLayerMenu && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 p-1 z-40 text-xs animate-fadeIn">
                {(Object.keys(TILE_LAYERS) as TileProvider[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveTile(key);
                      setShowLayerMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg font-semibold transition-colors flex items-center justify-between ${
                      activeTile === key
                        ? 'bg-[#EAF2FB] text-[#0969E8]'
                        : 'text-[#101C36] hover:bg-gray-50'
                    }`}
                  >
                    <span>{TILE_LAYERS[key].name}</span>
                    {activeTile === key && <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reset / Fit View Button */}
          <button
            onClick={handleFitAll}
            className="p-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/80 text-[#101C36] hover:text-[#0969E8] hover:bg-white transition-all"
            title="Fit All Locations in View"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Actual Leaflet Container */}
      <div
        ref={mapContainerRef}
        className="w-full h-full z-10 focus:outline-none"
      />

      {/* Floating Bottom Destination Carousel */}
      <div className="absolute bottom-3 left-3 right-3 sm:right-16 z-30 pointer-events-none">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 pointer-events-auto">
          {filteredDestinations.map((dest) => {
            const isSelected = selectedDestination?.id === dest.id;
            return (
              <div
                key={dest.id}
                onClick={() => handleFlyTo(dest)}
                className={`shrink-0 w-56 sm:w-64 p-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border cursor-pointer transition-all duration-200 hover:-translate-y-1 flex items-center gap-2.5 ${
                  isSelected
                    ? 'border-[#0969E8] ring-2 ring-[#0969E8]/30 shadow-2xl bg-blue-50/90'
                    : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1 text-[10px] text-[#5E6B82]">
                    <MapPin className="w-2.5 h-2.5 text-[#0969E8] shrink-0" />
                    <span className="truncate">{dest.country}</span>
                  </div>
                  <h4 className="text-xs font-extrabold text-[#101C36] truncate">
                    {dest.name}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] mt-0.5">
                    <span className="font-extrabold text-[#21B96F]">
                      {formatPrice(dest.startingPrice)}
                    </span>
                    <span className="text-[10px] text-[#0969E8] font-bold flex items-center gap-0.5">
                      <Navigation className="w-2.5 h-2.5" />
                      <span>Locate</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
