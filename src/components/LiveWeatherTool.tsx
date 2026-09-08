import React, { useState, useEffect, useRef } from 'react';
import {
  CloudSun,
  Sun,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Cloud,
  Compass,
  Thermometer,
  ThermometerSun,
  Droplets,
  Wind,
  Search,
  MapPin,
  RefreshCw,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  Umbrella,
  Calendar,
  ChevronDown,
  X,
  Sparkles
} from 'lucide-react';

export interface WeatherLocation {
  city: string;
  country: string;
  countryCode?: string;
  region?: string;
  lat: number;
  lng: number;
  isCustom?: boolean;
  defaultTempDayC?: number;
  defaultTempNightC?: number;
  defaultCondition?: string;
  defaultHumidity?: number;
  defaultRainfall?: string;
  bestSeason?: string;
  caution?: string;
  travelAdvice?: string;
}

// Preset database of popular worldwide destinations & regional hubs
export const PRESET_WEATHER_LOCATIONS: Record<string, WeatherLocation[]> = {
  'Saudi Arabia': [
    {
      city: 'Makkah',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      region: 'Makkah Region',
      lat: 21.4266,
      lng: 39.8256,
      defaultTempDayC: 38,
      defaultTempNightC: 25,
      defaultCondition: 'Sunny & Arid Desert',
      defaultHumidity: 28,
      defaultRainfall: '< 5 mm/mo',
      bestSeason: 'November to February (Mildest months)',
      caution: 'Extreme midday heat. Marble courtyard tiles can exceed 45°C under direct sun.',
      travelAdvice: 'Perform Tawaf and Sa’i between 1:00 AM and 4:00 AM or after Isha prayer for cooler temperatures and lower crowd density.'
    },
    {
      city: 'Madinah',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      region: 'Al Madinah Region',
      lat: 24.5247,
      lng: 39.5692,
      defaultTempDayC: 34,
      defaultTempNightC: 20,
      defaultCondition: 'Clear Sky & Dry Breeze',
      defaultHumidity: 22,
      defaultRainfall: 'Extremely Low',
      bestSeason: 'November to March (Pleasant evenings)',
      caution: 'Winter desert evenings can drop to 12°C—pack a lightweight shawl or sweater.',
      travelAdvice: 'The giant automated umbrellas in the Prophet’s Mosque courtyard offer expansive cool shade during Dhuhr prayers.'
    },
    {
      city: 'AlUla',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      region: 'Medina Region',
      lat: 26.6167,
      lng: 37.9167,
      defaultTempDayC: 31,
      defaultTempNightC: 17,
      defaultCondition: 'Sunny Desert Oasis',
      defaultHumidity: 20,
      defaultRainfall: 'Very Low',
      bestSeason: 'October to April (Stargazing & outdoor exploration)',
      caution: 'Substantial day-to-night temperature swings in canyon areas.',
      travelAdvice: 'Schedule Hegra tombs and Maraya visits early morning; experience Elephant Rock fire pits during crisp starlit evenings.'
    },
    {
      city: 'Jeddah',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      region: 'Red Sea Coast',
      lat: 21.4858,
      lng: 39.1925,
      defaultTempDayC: 34,
      defaultTempNightC: 26,
      defaultCondition: 'Warm Coastal Breeze',
      defaultHumidity: 65,
      defaultRainfall: 'Minimal',
      bestSeason: 'December to March (Ideal Red Sea corniche weather)',
      caution: 'High coastal humidity year-round compared to inland Makkah.',
      travelAdvice: 'Stroll the historic Al-Balad district in late afternoon when sea breezes cool the coral stone architecture.'
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      region: 'Riyadh Province',
      lat: 24.7136,
      lng: 46.6753,
      defaultTempDayC: 36,
      defaultTempNightC: 22,
      defaultCondition: 'Sunny & Desert Dry',
      defaultHumidity: 16,
      defaultRainfall: '< 10 mm/mo',
      bestSeason: 'November to March (Cool winters and lively outdoor dining)',
      caution: 'Winter nights can dip to 8°C with brisk desert winds.',
      travelAdvice: 'Stay hydrated with electrolyte water when visiting the Edge of the World and historic Diriyah.'
    },
    {
      city: 'Taif',
      country: 'Saudi Arabia',
      countryCode: 'SA',
      region: 'Sarawat Mountains',
      lat: 21.2854,
      lng: 40.4244,
      defaultTempDayC: 28,
      defaultTempNightC: 16,
      defaultCondition: 'Cool Mountain Air & Rose Breezes',
      defaultHumidity: 35,
      defaultRainfall: 'Moderate mountain showers',
      bestSeason: 'May to September (Saudi Arabia’s cool summer escape)',
      caution: 'Winding mountain roads can encounter sudden afternoon fog.',
      travelAdvice: 'Visit rose water distilleries and enjoy fresh mountain pomegranates and figs.'
    }
  ],
  'United Arab Emirates': [
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      countryCode: 'AE',
      region: 'Dubai Emirate',
      lat: 25.2048,
      lng: 55.2708,
      defaultTempDayC: 33,
      defaultTempNightC: 24,
      defaultCondition: 'Bright Sunshine',
      defaultHumidity: 55,
      defaultRainfall: 'Rare',
      bestSeason: 'November to April (Peak outdoor and beach season)',
      caution: 'Mid-summer (July–August) frequently exceeds 42°C with intense coastal humidity.',
      travelAdvice: 'Use air-conditioned sky bridges and the Dubai Metro to navigate between indoor attractions.'
    },
    {
      city: 'Abu Dhabi',
      country: 'United Arab Emirates',
      countryCode: 'AE',
      region: 'Abu Dhabi Emirate',
      lat: 24.4539,
      lng: 54.3773,
      defaultTempDayC: 33,
      defaultTempNightC: 23,
      defaultCondition: 'Sunny Coastal',
      defaultHumidity: 58,
      defaultRainfall: 'Rare',
      bestSeason: 'November to April',
      caution: 'High ultraviolet (UV) index during mid-day hours.',
      travelAdvice: 'Visit the Sheikh Zayed Grand Mosque in the late afternoon for sunset reflections on the marble pools.'
    },
    {
      city: 'Sharjah',
      country: 'United Arab Emirates',
      countryCode: 'AE',
      region: 'Sharjah Emirate',
      lat: 25.3463,
      lng: 55.4209,
      defaultTempDayC: 32,
      defaultTempNightC: 23,
      defaultCondition: 'Sunny & Warm',
      defaultHumidity: 56,
      defaultRainfall: 'Rare',
      bestSeason: 'November to April',
      caution: 'Warm sunny days; dress modestly when exploring cultural heritage museums.',
      travelAdvice: 'Explore Heart of Sharjah and Islamic civilization museums during midday heat.'
    }
  ],
  'Turkey': [
    {
      city: 'Istanbul',
      country: 'Turkey',
      countryCode: 'TR',
      region: 'Marmara Region',
      lat: 41.0082,
      lng: 28.9784,
      defaultTempDayC: 22,
      defaultTempNightC: 15,
      defaultCondition: 'Mild Breeze & Partial Sun',
      defaultHumidity: 66,
      defaultRainfall: 'Moderate (60 mm/mo)',
      bestSeason: 'April to May & September to November',
      caution: 'Bosphorus winds can feel brisk; carry a scarf and windbreaker.',
      travelAdvice: 'Wear comfortable slip-on shoes with socks when visiting the Sultanahmet Mosque and Hagia Sophia.'
    },
    {
      city: 'Antalya',
      country: 'Turkey',
      countryCode: 'TR',
      region: 'Mediterranean Coast',
      lat: 36.8969,
      lng: 30.7133,
      defaultTempDayC: 28,
      defaultTempNightC: 19,
      defaultCondition: 'Mediterranean Sunshine',
      defaultHumidity: 52,
      defaultRainfall: 'Low in summer',
      bestSeason: 'April to June & September to October',
      caution: 'Warm sunshine; apply sun protection along the Turquoise Coast.',
      travelAdvice: 'Stroll the historic Kaleiçi cobblestone streets in the cool morning hours.'
    },
    {
      city: 'Cappadocia',
      country: 'Turkey',
      countryCode: 'TR',
      region: 'Central Anatolia',
      lat: 38.6431,
      lng: 34.8289,
      defaultTempDayC: 21,
      defaultTempNightC: 10,
      defaultCondition: 'Clear & Crisp Plateau Air',
      defaultHumidity: 45,
      defaultRainfall: 'Low',
      bestSeason: 'April to June & September to October',
      caution: 'Pre-dawn hot air balloon flights are chilly—dress in warm layers.',
      travelAdvice: 'Book balloon rides on your first morning to allow rescheduling if high winds occur.'
    },
    {
      city: 'Trabzon',
      country: 'Turkey',
      countryCode: 'TR',
      region: 'Black Sea Region',
      lat: 41.0027,
      lng: 39.7168,
      defaultTempDayC: 21,
      defaultTempNightC: 14,
      defaultCondition: 'Lush Emerald & Occasional Rain',
      defaultHumidity: 75,
      defaultRainfall: 'Frequent mist & rain',
      bestSeason: 'June to September',
      caution: 'Mountainous routes to Uzungöl can experience quick fog formation.',
      travelAdvice: 'Bring a waterproof jacket and enjoy hot Black Sea tea in mountain villages.'
    }
  ],
  'Malaysia': [
    {
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      countryCode: 'MY',
      region: 'Federal Territory',
      lat: 3.1390,
      lng: 101.6869,
      defaultTempDayC: 32,
      defaultTempNightC: 24,
      defaultCondition: 'Tropical & Humid',
      defaultHumidity: 80,
      defaultRainfall: 'Afternoon rain showers (~200 mm/mo)',
      bestSeason: 'June to August & December to February',
      caution: 'Sudden tropical downpours usually occur between 3 PM and 6 PM.',
      travelAdvice: 'Carry a compact folding umbrella and plan air-conditioned mall or mosque visits during afternoon rains.'
    },
    {
      city: 'Penang',
      country: 'Malaysia',
      countryCode: 'MY',
      region: 'Penang Island',
      lat: 5.4164,
      lng: 100.3327,
      defaultTempDayC: 32,
      defaultTempNightC: 25,
      defaultCondition: 'Warm Tropical Coastal',
      defaultHumidity: 78,
      defaultRainfall: 'Moderate',
      bestSeason: 'November to February (Drier & sunny)',
      caution: 'High UV index along George Town street murals.',
      travelAdvice: 'Explore historic George Town early morning before the midday tropical heat peaks.'
    },
    {
      city: 'Langkawi',
      country: 'Malaysia',
      countryCode: 'MY',
      region: 'Kedah',
      lat: 6.3500,
      lng: 99.8000,
      defaultTempDayC: 31,
      defaultTempNightC: 24,
      defaultCondition: 'Island Breeze & Tropical Sun',
      defaultHumidity: 76,
      defaultRainfall: 'Low Dec-Apr',
      bestSeason: 'December to April (Clear turquoise waters)',
      caution: 'Afternoon sun reflection off sandy beaches is intense.',
      travelAdvice: 'Take the SkyCab cable car in the morning for crisp visibility over the Andaman Sea.'
    }
  ],
  'Bangladesh': [
    {
      city: 'Dhaka',
      country: 'Bangladesh',
      countryCode: 'BD',
      region: 'Dhaka Division',
      lat: 23.8103,
      lng: 90.4125,
      defaultTempDayC: 31,
      defaultTempNightC: 24,
      defaultCondition: 'Subtropical Warmth',
      defaultHumidity: 72,
      defaultRainfall: 'Heavy in monsoon (Jun-Sep), dry in winter',
      bestSeason: 'November to February (Crisp, pleasant winter months)',
      caution: 'Monsoon season brings road waterlogging and high humidity.',
      travelAdvice: 'Winter (Nov-Feb) offers ideal 18°C–25°C weather for heritage walks in Old Dhaka and Sonargaon.'
    },
    {
      city: 'Cox’s Bazar',
      country: 'Bangladesh',
      countryCode: 'BD',
      region: 'Chittagong Division',
      lat: 21.4272,
      lng: 92.0058,
      defaultTempDayC: 30,
      defaultTempNightC: 23,
      defaultCondition: 'Sea Breeze & Coastal Waves',
      defaultHumidity: 74,
      defaultRainfall: 'Monsoon peaks Jun-Aug',
      bestSeason: 'November to March (World’s longest sea beach in mild sunshine)',
      caution: 'Strong undertow currents; swim only in designated lifeguard zones.',
      travelAdvice: 'Take the scenic Marine Drive to Inani Beach during sunset for cooler breezes.'
    },
    {
      city: 'Sylhet',
      country: 'Bangladesh',
      countryCode: 'BD',
      region: 'Sylhet Division',
      lat: 24.8949,
      lng: 91.8687,
      defaultTempDayC: 29,
      defaultTempNightC: 21,
      defaultCondition: 'Green Tea Hills & Mist',
      defaultHumidity: 78,
      defaultRainfall: 'High annual rainfall',
      bestSeason: 'October to March (Lush green tea gardens and serene boat rides)',
      caution: 'Slippery stone paths around Jaflong and Ratargul swamp forest.',
      travelAdvice: 'Visit the shrine of Hazrat Shah Jalal in the tranquil evening breeze.'
    },
    {
      city: 'Chittagong',
      country: 'Bangladesh',
      countryCode: 'BD',
      region: 'Chittagong Division',
      lat: 22.3569,
      lng: 91.7832,
      defaultTempDayC: 31,
      defaultTempNightC: 24,
      defaultCondition: 'Port Coastal Warmth',
      defaultHumidity: 75,
      defaultRainfall: 'High in monsoon',
      bestSeason: 'November to March',
      caution: 'Heavy coastal squalls possible during seasonal transitions.',
      travelAdvice: 'Enjoy the panoramic view from Batali Hill and Patenga beach sunsets.'
    }
  ],
  'United Kingdom': [
    {
      city: 'London',
      country: 'United Kingdom',
      countryCode: 'GB',
      region: 'Greater London',
      lat: 51.5074,
      lng: -0.1278,
      defaultTempDayC: 18,
      defaultTempNightC: 11,
      defaultCondition: 'Temperate & Variable Cloud',
      defaultHumidity: 70,
      defaultRainfall: 'Frequent light drizzle (~50 mm/mo)',
      bestSeason: 'May to September (Long daylight hours and pleasant parks)',
      caution: 'British weather changes quickly; keep a pocket umbrella handy.',
      travelAdvice: 'Layer with a breathable trench coat and enjoy halal dining across Edgware Road and Whitechapel.'
    },
    {
      city: 'Manchester',
      country: 'United Kingdom',
      countryCode: 'GB',
      region: 'Greater Manchester',
      lat: 53.4808,
      lng: -2.2426,
      defaultTempDayC: 17,
      defaultTempNightC: 10,
      defaultCondition: 'Overcast & Occasional Showers',
      defaultHumidity: 76,
      defaultRainfall: 'Regular showers',
      bestSeason: 'June to August',
      caution: 'Brisk damp winds during autumn and winter months.',
      travelAdvice: 'The famous Curry Mile in Rusholme offers lively late-night halal dining in any weather.'
    },
    {
      city: 'Edinburgh',
      country: 'United Kingdom',
      countryCode: 'GB',
      region: 'Scotland',
      lat: 55.9533,
      lng: -3.1883,
      defaultTempDayC: 15,
      defaultTempNightC: 8,
      defaultCondition: 'Brisk Nordic Breeze & Clouds',
      defaultHumidity: 74,
      defaultRainfall: 'Frequent drizzle',
      bestSeason: 'May to August (Festival season & long twilight)',
      caution: 'Cobblestone streets of the Royal Mile get slick when wet; wear sturdy footwear.',
      travelAdvice: 'Climb Arthur’s Seat on clear mornings for breathtaking panoramic views.'
    }
  ],
  'United States': [
    {
      city: 'New York City',
      country: 'United States',
      countryCode: 'US',
      region: 'New York',
      lat: 40.7128,
      lng: -74.0060,
      defaultTempDayC: 22,
      defaultTempNightC: 14,
      defaultCondition: 'Four Distinct Seasons',
      defaultHumidity: 60,
      defaultRainfall: 'Moderate (~90 mm/mo)',
      bestSeason: 'April to June & September to November',
      caution: 'Summers are hot and humid; winters drop below freezing with occasional snow.',
      travelAdvice: 'Central Park and Brooklyn Bridge are best explored in mild spring and crisp autumn air.'
    },
    {
      city: 'Los Angeles',
      country: 'United States',
      countryCode: 'US',
      region: 'California',
      lat: 34.0522,
      lng: -118.2437,
      defaultTempDayC: 26,
      defaultTempNightC: 16,
      defaultCondition: 'Sunny Mediterranean Climate',
      defaultHumidity: 50,
      defaultRainfall: 'Dry almost year-round',
      bestSeason: 'Year-round (Warm sunny days and cool evenings)',
      caution: 'Morning marine layer ("June Gloom") clears to bright sun by midday.',
      travelAdvice: 'Bring sunglasses and a light evening jacket for coastal pier breezes.'
    },
    {
      city: 'Miami',
      country: 'United States',
      countryCode: 'US',
      region: 'Florida',
      lat: 25.7617,
      lng: -80.1918,
      defaultTempDayC: 30,
      defaultTempNightC: 24,
      defaultCondition: 'Subtropical Sunshine',
      defaultHumidity: 74,
      defaultRainfall: 'Quick tropical afternoon showers',
      bestSeason: 'November to April (Warm dry winter)',
      caution: 'Intense sunshine and high humidity in summer months.',
      travelAdvice: 'Bayside breezes make boat tours and evening seaside walks enjoyable.'
    }
  ],
  'Egypt': [
    {
      city: 'Cairo',
      country: 'Egypt',
      countryCode: 'EG',
      region: 'Greater Cairo',
      lat: 30.0444,
      lng: 31.2357,
      defaultTempDayC: 30,
      defaultTempNightC: 18,
      defaultCondition: 'Sunny & Desert Breeze',
      defaultHumidity: 40,
      defaultRainfall: 'Extremely dry',
      bestSeason: 'October to April (Cool winter sightseeing)',
      caution: 'Midday sun at the Giza Pyramids offers zero shade; bring a wide-brim hat.',
      travelAdvice: 'Take an evening felucca sailboat ride along the Nile for cool breezes and city skyline views.'
    },
    {
      city: 'Alexandria',
      country: 'Egypt',
      countryCode: 'EG',
      region: 'Mediterranean Coast',
      lat: 31.2001,
      lng: 29.9187,
      defaultTempDayC: 26,
      defaultTempNightC: 19,
      defaultCondition: 'Mediterranean Coastal Air',
      defaultHumidity: 65,
      defaultRainfall: 'Winter showers',
      bestSeason: 'April to October',
      caution: 'Winter can be windy with brisk sea gusts.',
      travelAdvice: 'Walk the Corniche from Qaitbay Citadel to the Library of Alexandria in late afternoon.'
    }
  ],
  'Qatar': [
    {
      city: 'Doha',
      country: 'Qatar',
      countryCode: 'QA',
      region: 'Ad Dawhah',
      lat: 25.2854,
      lng: 51.5310,
      defaultTempDayC: 33,
      defaultTempNightC: 24,
      defaultCondition: 'Bright Sunshine & Gulf Breeze',
      defaultHumidity: 50,
      defaultRainfall: 'Very rare',
      bestSeason: 'November to March (Pleasant 22°C–28°C outdoor climate)',
      caution: 'Summer peaks exceed 42°C with high humidity.',
      travelAdvice: 'Stroll Souq Waqif and the Museum of Islamic Art park after sunset when illuminated.'
    }
  ],
  'Oman': [
    {
      city: 'Muscat',
      country: 'Oman',
      countryCode: 'OM',
      region: 'Muscat Governorate',
      lat: 23.5880,
      lng: 58.3829,
      defaultTempDayC: 32,
      defaultTempNightC: 24,
      defaultCondition: 'Sunny Gulf Mountain Coastal',
      defaultHumidity: 55,
      defaultRainfall: 'Minimal',
      bestSeason: 'October to April',
      caution: 'Desert heat in interior wadis during summer months.',
      travelAdvice: 'Sultan Qaboos Grand Mosque is serene in the early morning; dress modestly with head covering.'
    },
    {
      city: 'Salalah',
      country: 'Oman',
      countryCode: 'OM',
      region: 'Dhofar Governorate',
      lat: 17.0151,
      lng: 54.0924,
      defaultTempDayC: 27,
      defaultTempNightC: 22,
      defaultCondition: 'Khareef Monsoon Greenery & Mist',
      defaultHumidity: 82,
      defaultRainfall: 'Summer monsoon drizzle (Jul-Aug)',
      bestSeason: 'July to September (Khareef monsoon transforms desert into lush green hills)',
      caution: 'Mountain mist reduces driving visibility in the Dhofar hills.',
      travelAdvice: 'Taste fresh coconut water and local bananas from roadside plantation fruit stalls.'
    }
  ]
};

// Weather condition codes mapping
function getWeatherDescription(code: number): { text: string; icon: React.ReactNode; type: 'clear' | 'cloud' | 'rain' | 'thunder' | 'snow' | 'fog' } {
  if (code === 0) {
    return { text: 'Clear Sky & Sunshine', icon: <Sun className="w-6 h-6 text-amber-500 animate-spin-slow" />, type: 'clear' };
  }
  if (code === 1 || code === 2) {
    return { text: 'Mainly Clear & Mild Sun', icon: <CloudSun className="w-6 h-6 text-amber-400" />, type: 'clear' };
  }
  if (code === 3) {
    return { text: 'Overcast & Cloudy', icon: <Cloud className="w-6 h-6 text-slate-400" />, type: 'cloud' };
  }
  if (code >= 45 && code <= 48) {
    return { text: 'Foggy & Hazy Mist', icon: <Cloud className="w-6 h-6 text-slate-300" />, type: 'fog' };
  }
  if (code >= 51 && code <= 57) {
    return { text: 'Light Drizzle', icon: <CloudRain className="w-6 h-6 text-blue-400" />, type: 'rain' };
  }
  if (code >= 61 && code <= 67) {
    return { text: 'Rain Showers', icon: <CloudRain className="w-6 h-6 text-blue-500" />, type: 'rain' };
  }
  if (code >= 71 && code <= 77) {
    return { text: 'Snow Fall', icon: <CloudSnow className="w-6 h-6 text-cyan-300" />, type: 'snow' };
  }
  if (code >= 80 && code <= 82) {
    return { text: 'Heavy Rain Squalls', icon: <CloudRain className="w-6 h-6 text-blue-600" />, type: 'rain' };
  }
  if (code >= 95 && code <= 99) {
    return { text: 'Thunderstorm', icon: <CloudLightning className="w-6 h-6 text-purple-500" />, type: 'thunder' };
  }
  return { text: 'Partly Cloudy', icon: <CloudSun className="w-6 h-6 text-blue-400" />, type: 'cloud' };
}

interface LiveWeatherToolProps {
  compact?: boolean;
  initialCity?: string;
  onCitySelected?: (loc: WeatherLocation) => void;
}

export const LiveWeatherTool: React.FC<LiveWeatherToolProps> = ({
  compact = false,
  initialCity = 'Makkah',
  onCitySelected
}) => {
  // Selected Country & City
  const countries = Object.keys(PRESET_WEATHER_LOCATIONS);
  const [selectedCountry, setSelectedCountry] = useState<string>('Saudi Arabia');
  const [selectedCityName, setSelectedCityName] = useState<string>(initialCity);

  // Active Location Object
  const [activeLocation, setActiveLocation] = useState<WeatherLocation>(() => {
    const list = PRESET_WEATHER_LOCATIONS['Saudi Arabia'] || [];
    const found = list.find((c) => c.city.toLowerCase() === initialCity.toLowerCase());
    return found || list[0];
  });

  // Temperature Unit Toggle: 'C' or 'F'
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  // Live API States
  const [isLoadingLive, setIsLoadingLive] = useState<boolean>(false);
  const [lastUpdatedTime, setLastUpdatedTime] = useState<string | null>(null);
  const [liveData, setLiveData] = useState<{
    tempC: number;
    apparentTempC: number;
    humidity: number;
    windSpeedKmH: number;
    precipitationMm: number;
    weatherCode: number;
    isDay: number;
    dailyForecast: Array<{
      date: string;
      tempMaxC: number;
      tempMinC: number;
      weatherCode: number;
    }>;
  } | null>(null);

  // Local Area Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<WeatherLocation[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Geolocation state
  const [isDetectingLocation, setIsDetectingLocation] = useState<boolean>(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  // Helper conversions
  const toF = (c: number) => Math.round((c * 9) / 5 + 32);
  const formatTemp = (c: number) => (unit === 'C' ? `${Math.round(c)}°C` : `${toF(c)}°F`);

  // Fetch Live Weather when active location coordinates change
  const fetchLiveWeather = async (loc: WeatherLocation) => {
    setIsLoadingLive(true);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch weather');
      const data = await res.json();

      if (data.current) {
        const dailyList = [];
        if (data.daily && data.daily.time) {
          for (let i = 0; i < Math.min(data.daily.time.length, 5); i++) {
            dailyList.push({
              date: data.daily.time[i],
              tempMaxC: data.daily.temperature_2m_max[i],
              tempMinC: data.daily.temperature_2m_min[i],
              weatherCode: data.daily.weather_code[i]
            });
          }
        }

        setLiveData({
          tempC: data.current.temperature_2m,
          apparentTempC: data.current.apparent_temperature,
          humidity: data.current.relative_humidity_2m,
          windSpeedKmH: data.current.wind_speed_10m,
          precipitationMm: data.current.precipitation,
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day,
          dailyForecast: dailyList
        });

        const now = new Date();
        setLastUpdatedTime(
          now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        );
      }
    } catch {
      // Fallback seamlessly to preset values without crashing
      console.warn('Using default climate profile for', loc.city);
    } finally {
      setIsLoadingLive(false);
    }
  };

  // Run initial fetch on mount and whenever activeLocation changes
  useEffect(() => {
    fetchLiveWeather(activeLocation);
    onCitySelected?.(activeLocation);
  }, [activeLocation.lat, activeLocation.lng]);

  // Handle Country Dropdown Change
  const handleCountryChange = (newCountry: string) => {
    setSelectedCountry(newCountry);
    const citiesInCountry = PRESET_WEATHER_LOCATIONS[newCountry] || [];
    if (citiesInCountry.length > 0) {
      const firstCity = citiesInCountry[0];
      setSelectedCityName(firstCity.city);
      setActiveLocation(firstCity);
    }
  };

  // Handle City Dropdown Change
  const handleCityChange = (newCityName: string) => {
    setSelectedCityName(newCityName);
    const citiesInCountry = PRESET_WEATHER_LOCATIONS[selectedCountry] || [];
    const found = citiesInCountry.find((c) => c.city === newCityName);
    if (found) {
      setActiveLocation(found);
    }
  };

  // Real-time Local Area Search Handler
  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        // 1. Search local preset database first
        const queryLower = searchQuery.toLowerCase().trim();
        const localMatches: WeatherLocation[] = [];
        Object.values(PRESET_WEATHER_LOCATIONS).forEach((cities) => {
          cities.forEach((c) => {
            if (
              c.city.toLowerCase().includes(queryLower) ||
              c.country.toLowerCase().includes(queryLower) ||
              (c.region && c.region.toLowerCase().includes(queryLower))
            ) {
              localMatches.push(c);
            }
          });
        });

        // 2. Query Open-Meteo Geocoding API for worldwide local areas & towns
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          searchQuery
        )}&count=7&language=en&format=json`;
        const res = await fetch(geoUrl);
        const data = await res.json();

        const remoteResults: WeatherLocation[] = [];
        if (data && data.results && Array.isArray(data.results)) {
          data.results.forEach((item: {
            id: number;
            name: string;
            country: string;
            country_code?: string;
            admin1?: string;
            latitude: number;
            longitude: number;
          }) => {
            // Avoid duplicate with local matches
            const exists = localMatches.some(
              (lm) =>
                lm.city.toLowerCase() === item.name.toLowerCase() &&
                lm.country.toLowerCase() === (item.country || '').toLowerCase()
            );
            if (!exists) {
              remoteResults.push({
                city: item.name,
                country: item.country || 'Global',
                countryCode: item.country_code,
                region: item.admin1 || '',
                lat: item.latitude,
                lng: item.longitude,
                isCustom: true,
                defaultTempDayC: 25,
                defaultTempNightC: 18,
                defaultCondition: 'Local Area Climate',
                defaultHumidity: 50,
                defaultRainfall: 'Local Seasonal Range',
                bestSeason: 'Spring & Autumn',
                caution: 'Check local weather alerts before outdoor excursions.',
                travelAdvice: `Enjoy exploring ${item.name}. Verify local transport and opening hours.`
              });
            }
          });
        }

        const combined = [...localMatches, ...remoteResults].slice(0, 8);
        setSearchResults(combined);
        setShowSearchResults(true);
      } catch (err) {
        console.error('Error searching local areas:', err);
      } finally {
        setIsSearching(false);
      }
    }, 320);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Selection of a Search Result
  const handleSelectSearchResult = (loc: WeatherLocation) => {
    setActiveLocation(loc);
    setSelectedCityName(loc.city);
    // If the country exists in our preset list, set it
    if (PRESET_WEATHER_LOCATIONS[loc.country]) {
      setSelectedCountry(loc.country);
    }
    setSearchQuery('');
    setShowSearchResults(false);
  };

  // Browser Geolocation: Detect User's Local Area
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }
    setIsDetectingLocation(true);
    setGeoError(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          // Reverse geocode with Open-Meteo or BigDataCloud client-free reverse lookup
          const revUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
          const res = await fetch(revUrl);
          const data = await res.json();

          const detectedCity = data.city || data.locality || data.principalSubdivision || 'My Current Area';
          const detectedCountry = data.countryName || 'Local Region';

          const detectedLoc: WeatherLocation = {
            city: detectedCity,
            country: detectedCountry,
            countryCode: data.countryCode,
            region: data.principalSubdivision,
            lat: latitude,
            lng: longitude,
            isCustom: true,
            defaultTempDayC: 22,
            defaultTempNightC: 15,
            defaultCondition: 'Local Atmospheric Conditions',
            defaultHumidity: 55,
            defaultRainfall: 'Local average',
            bestSeason: 'Current Season',
            caution: 'Live local weather automatically calibrated.',
            travelAdvice: `Live conditions for your exact detected location in ${detectedCity}.`
          };

          setActiveLocation(detectedLoc);
          setSelectedCityName(detectedCity);
          if (PRESET_WEATHER_LOCATIONS[detectedCountry]) {
            setSelectedCountry(detectedCountry);
          }
        } catch {
          // If reverse geocoding fails, still load weather with coordinates
          const fallbackLoc: WeatherLocation = {
            city: 'My Local Area',
            country: 'Detected Location',
            lat: latitude,
            lng: longitude,
            isCustom: true
          };
          setActiveLocation(fallbackLoc);
        } finally {
          setIsDetectingLocation(false);
        }
      },
      (err) => {
        setIsDetectingLocation(false);
        setGeoError(
          err.code === 1
            ? 'Location access was declined. You can select your city from the dropdown or search box.'
            : 'Unable to detect location. Please use the dropdown or search.'
        );
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  // Quick Pick Badges for Top Worldwide Destinations
  const quickPillCities: Array<{ name: string; country: string; badge: string }> = [
    { name: 'Makkah', country: 'Saudi Arabia', badge: '🕋' },
    { name: 'Madinah', country: 'Saudi Arabia', badge: '🕌' },
    { name: 'AlUla', country: 'Saudi Arabia', badge: '🏜️' },
    { name: 'Dubai', country: 'United Arab Emirates', badge: '🏙️' },
    { name: 'Istanbul', country: 'Turkey', badge: '🕌' },
    { name: 'Kuala Lumpur', country: 'Malaysia', badge: '🌴' },
    { name: 'Dhaka', country: 'Bangladesh', badge: '🌊' },
    { name: 'London', country: 'United Kingdom', badge: '🎡' },
    { name: 'New York City', country: 'United States', badge: '🗽' }
  ];

  const handleQuickPillClick = (item: { name: string; country: string }) => {
    setSelectedCountry(item.country);
    setSelectedCityName(item.name);
    const cities = PRESET_WEATHER_LOCATIONS[item.country] || [];
    const found = cities.find((c) => c.city === item.name);
    if (found) {
      setActiveLocation(found);
    }
  };

  // Compute Active Weather Metrics (using Live API if available, else Default fallback)
  const currentTempC = liveData?.tempC ?? activeLocation.defaultTempDayC ?? 28;
  const currentApparentC = liveData?.apparentTempC ?? currentTempC;
  const currentHumidity = liveData?.humidity ?? activeLocation.defaultHumidity ?? 45;
  const currentWind = liveData?.windSpeedKmH ?? 12;
  const currentPrecipitation = liveData?.precipitationMm ?? 0;
  const weatherMeta = liveData
    ? getWeatherDescription(liveData.weatherCode)
    : {
        text: activeLocation.defaultCondition || 'Sunny & Clear',
        icon: <Sun className="w-6 h-6 text-amber-500" />,
        type: 'clear' as const
      };

  const citiesInCurrentCountry = PRESET_WEATHER_LOCATIONS[selectedCountry] || [];

  return (
    <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-5 sm:p-8 space-y-6">
      {/* 1. Header & Controls: Dropdowns, Local Search & Detect Location */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3 py-1 rounded-full w-fit mb-1">
              <CloudSun className="w-3.5 h-3.5" />
              <span>Live Weather & Climate Radar</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight">
              {activeLocation.city}, {activeLocation.country}
            </h3>
            {activeLocation.region && (
              <p className="text-xs text-[#64748B] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#0969E8]" />
                <span>{activeLocation.region}</span>
              </p>
            )}
          </div>

          {/* Action Tools: Celsius / Fahrenheit Toggle & Refresh */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-wrap">
            {/* °C / °F Switch */}
            <div className="inline-flex items-center bg-[#F1F5F9] rounded-xl p-1 border border-gray-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setUnit('C')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  unit === 'C'
                    ? 'bg-white text-[#071B49] shadow-xs'
                    : 'text-[#64748B] hover:text-[#071B49]'
                }`}
              >
                °C
              </button>
              <button
                type="button"
                onClick={() => setUnit('F')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  unit === 'F'
                    ? 'bg-white text-[#071B49] shadow-xs'
                    : 'text-[#64748B] hover:text-[#071B49]'
                }`}
              >
                °F
              </button>
            </div>

            {/* Refresh Live Button */}
            <button
              type="button"
              onClick={() => fetchLiveWeather(activeLocation)}
              disabled={isLoadingLive}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#F8FAFC] border border-gray-200 text-[#475569] hover:text-[#0969E8] hover:border-blue-300 transition-all cursor-pointer disabled:opacity-50"
              title="Refresh live weather reading"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isLoadingLive ? 'animate-spin text-[#0969E8]' : ''}`}
              />
              <span className="hidden sm:inline">
                {isLoadingLive ? 'Updating...' : 'Live Now'}
              </span>
            </button>

            {/* Detect Location Button */}
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={isDetectingLocation}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#EAF2FB] text-[#0969E8] hover:bg-[#d6e7fa] transition-all cursor-pointer disabled:opacity-50"
              title="Use current device location"
            >
              <Navigation
                className={`w-3.5 h-3.5 ${isDetectingLocation ? 'animate-pulse' : ''}`}
              />
              <span>{isDetectingLocation ? 'Locating...' : 'My Area'}</span>
            </button>
          </div>
        </div>

        {/* Geolocation Notice / Error banner if any */}
        {geoError && (
          <div className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-3.5 py-2 rounded-xl flex items-center justify-between gap-2">
            <span>{geoError}</span>
            <button
              onClick={() => setGeoError(null)}
              className="text-amber-600 hover:text-amber-900 font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {/* 2. Interactive Selection Controls: Country Dropdown + City Dropdown + Local Area Search */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
          {/* Country Dropdown */}
          <div className="md:col-span-4 space-y-1">
            <label className="text-xs font-bold text-[#071B49] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Choose Country</span>
            </label>
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#071B49] appearance-none focus:outline-none focus:border-[#0969E8] focus:ring-1 focus:ring-[#0969E8] transition-all cursor-pointer"
              >
                {countries.map((cntry) => (
                  <option key={cntry} value={cntry}>
                    {cntry}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* City Dropdown */}
          <div className="md:col-span-4 space-y-1">
            <label className="text-xs font-bold text-[#071B49] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Choose City</span>
            </label>
            <div className="relative">
              <select
                value={selectedCityName}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl px-3.5 py-2.5 text-xs font-medium text-[#071B49] appearance-none focus:outline-none focus:border-[#0969E8] focus:ring-1 focus:ring-[#0969E8] transition-all cursor-pointer"
              >
                {citiesInCurrentCountry.map((loc) => (
                  <option key={loc.city} value={loc.city}>
                    {loc.city} {loc.region ? `(${loc.region})` : ''}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Local Area Search Input */}
          <div className="md:col-span-4 space-y-1 relative" ref={searchContainerRef}>
            <label className="text-xs font-bold text-[#071B49] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Search Any Local Area</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchResults.length > 0) setShowSearchResults(true);
                }}
                placeholder="Search town, neighborhood, city..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl pl-9 pr-8 py-2.5 text-xs font-medium text-[#071B49] placeholder-gray-400 focus:outline-none focus:border-[#0969E8] focus:ring-1 focus:ring-[#0969E8] transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Autocomplete Search Dropdown */}
            {showSearchResults && (
              <div className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-xl border border-gray-200 max-h-64 overflow-y-auto divide-y divide-gray-100">
                {isSearching ? (
                  <div className="p-4 text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#0969E8]" />
                    <span>Searching worldwide local areas...</span>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="p-4 text-xs text-gray-500 text-center">
                    No matching cities or local areas found.
                  </div>
                ) : (
                  searchResults.map((item, idx) => (
                    <button
                      key={`${item.city}-${item.lat}-${idx}`}
                      type="button"
                      onClick={() => handleSelectSearchResult(item)}
                      className="w-full text-left p-3 hover:bg-[#F8FAFC] transition-colors flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#071B49] truncate">
                          {item.city}
                        </div>
                        <div className="text-[11px] text-[#64748B] truncate">
                          {item.region ? `${item.region}, ` : ''}
                          {item.country}
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-[#0969E8] bg-blue-50 px-2 py-0.5 rounded-full shrink-0">
                        {item.countryCode || 'Select'}
                      </span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Quick-Pick Popular Destination Pills */}
        <div className="pt-2 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">
            Popular:
          </span>
          {quickPillCities.map((pill) => {
            const isSelected =
              activeLocation.city.toLowerCase() === pill.name.toLowerCase();
            return (
              <button
                key={pill.name}
                type="button"
                onClick={() => handleQuickPillClick(pill)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#071B49] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#5E6B82] border border-gray-200 hover:border-blue-300'
                }`}
              >
                <span>{pill.badge}</span>
                <span>{pill.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Live Climate Display Card */}
      <div className="bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#EAF2FB] rounded-2xl p-6 sm:p-8 border border-blue-100/60 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Main Temp & Weather Status */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-gray-200 text-xs font-semibold text-[#0969E8]">
              {weatherMeta.icon}
              <span className="font-bold">{weatherMeta.text}</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-5xl sm:text-6xl font-black text-[#071B49] tracking-tight font-syncopate">
                {formatTemp(currentTempC)}
              </span>
              <div className="text-xs text-[#64748B]">
                <div>Feels like: <strong className="text-[#071B49]">{formatTemp(currentApparentC)}</strong></div>
                {lastUpdatedTime && (
                  <div className="text-[10px] text-emerald-600 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live satellite sync at {lastUpdatedTime}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] max-w-lg leading-relaxed">
              {activeLocation.travelAdvice ||
                `Typical climate for ${activeLocation.city} during travel season. Plan excursions according to thermal comfort.`}
            </p>
          </div>

          {/* Quick Atmospheric Metrics */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-gray-200/80 space-y-0.5 min-w-[120px]">
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                <span>Humidity</span>
              </div>
              <div className="text-lg font-extrabold text-[#071B49]">{currentHumidity}%</div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-gray-200/80 space-y-0.5 min-w-[120px]">
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase">
                <Wind className="w-3.5 h-3.5 text-teal-500" />
                <span>Wind Speed</span>
              </div>
              <div className="text-lg font-extrabold text-[#071B49]">{currentWind} km/h</div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-gray-200/80 space-y-0.5 min-w-[120px]">
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase">
                <Umbrella className="w-3.5 h-3.5 text-indigo-500" />
                <span>Precipitation</span>
              </div>
              <div className="text-lg font-extrabold text-[#071B49]">{currentPrecipitation} mm</div>
            </div>

            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-gray-200/80 space-y-0.5 min-w-[120px]">
              <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400 uppercase">
                <ThermometerSun className="w-3.5 h-3.5 text-amber-500" />
                <span>Climate Zone</span>
              </div>
              <div className="text-xs font-extrabold text-[#071B49] truncate">
                {activeLocation.defaultCondition || 'Subtropical'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 5-Day Live Weather Forecast (if available) */}
      {liveData?.dailyForecast && liveData.dailyForecast.length > 0 && (
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between text-xs font-bold text-[#071B49]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0969E8]" />
              <span>5-Day Live Forecast for {activeLocation.city}</span>
            </span>
            <span className="text-gray-400 text-[11px] font-normal">Updated daily</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {liveData.dailyForecast.map((day, idx) => {
              const dateObj = new Date(day.date + 'T00:00:00');
              const dayName =
                idx === 0
                  ? 'Today'
                  : dateObj.toLocaleDateString([], { weekday: 'short' });
              const dateFormatted = dateObj.toLocaleDateString([], {
                month: 'short',
                day: 'numeric'
              });
              const dayMeta = getWeatherDescription(day.weatherCode);

              return (
                <div
                  key={day.date}
                  className={`rounded-2xl p-3 border text-center space-y-1.5 transition-all ${
                    idx === 0
                      ? 'bg-blue-50/50 border-blue-200 shadow-2xs'
                      : 'bg-[#F8FAFC] border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <div className="text-xs font-extrabold text-[#071B49]">{dayName}</div>
                  <div className="text-[10px] text-gray-400">{dateFormatted}</div>
                  <div className="flex justify-center my-1">{dayMeta.icon}</div>
                  <div className="text-xs font-bold text-[#071B49]">
                    {formatTemp(day.tempMaxC)}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Low: {formatTemp(day.tempMinC)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Best Season, Heat & Travel Caution Advisories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="bg-[#F0FDF4] rounded-2xl p-4 border border-emerald-200 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Best Season & Peak Traveling Window:</span>
          </div>
          <p className="text-xs text-emerald-700 leading-relaxed">
            {activeLocation.bestSeason || 'October to April offers pleasant temperatures for city tours and pilgrimages.'}
          </p>
        </div>

        <div className="bg-[#FFFBEB] rounded-2xl p-4 border border-amber-200 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Heat & Climate Alert:</span>
          </div>
          <p className="text-xs text-amber-700 leading-relaxed">
            {activeLocation.caution ||
              (currentTempC >= 34
                ? 'High ambient temperatures. Avoid strenuous outdoor rituals during peak afternoon sun.'
                : 'Mild thermal conditions. Pack layers for evening breezes.')}
          </p>
        </div>
      </div>
    </div>
  );
};
