/**
 * Aviasales & Travelpayouts Live IATA Global Airport & City Autocomplete Database Service
 * Provides access to thousands of cities and commercial airports worldwide.
 */

import { AirportOption, GLOBAL_AIRPORTS } from '../data/airportsData';

export interface AviasalesPlace {
  id: string;
  type: 'city' | 'airport';
  code: string; // 3-letter IATA code (e.g. CDG, FCO, HND, IAH, MED)
  name: string; // Airport or City Name
  city_name?: string | null;
  city_code?: string | null;
  country_code: string; // 2-letter ISO code (e.g. FR, IT, JP, US, BD, SA)
  country_name: string; // Full country name (e.g. France, Italy, Japan)
  coordinates?: { lon: number; lat: number };
  weight?: number;
  main_airport_name?: string | null;
}

// In-memory cache for fast, zero-latency repeated searches
const placesCache = new Map<string, { timestamp: number; data: AviasalesPlace[] }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

/**
 * Converts a 2-letter ISO country code into a standard Unicode Flag Emoji
 */
export function getCountryFlagEmoji(countryCode?: string): string {
  if (!countryCode || countryCode.length !== 2) return '✈️';
  const code = countryCode.toUpperCase();
  if (!/^[A-Z]{2}$/.test(code)) return '✈️';
  try {
    return String.fromCodePoint(...code.split('').map((char) => 127397 + char.charCodeAt(0)));
  } catch {
    return '✈️';
  }
}

/**
 * Queries the official Travelpayouts / Aviasales live IATA database for global cities & airports
 */
export async function fetchAviasalesPlaces(
  query: string,
  signal?: AbortSignal
): Promise<AviasalesPlace[]> {
  const clean = query.trim().toLowerCase();
  if (clean.length < 2) return [];

  // 1. Check cache first
  const cached = placesCache.get(clean);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  try {
    // Public Travelpayouts / Aviasales autocomplete endpoint
    const url = `https://autocomplete.travelpayouts.com/places2?term=${encodeURIComponent(
      clean
    )}&locale=en&types[]=airport&types[]=city`;

    const response = await fetch(url, {
      signal,
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Autocomplete query failed with status: ${response.status}`);
    }

    const rawData = (await response.json()) as AviasalesPlace[];

    // Ensure results have valid IATA codes (3 uppercase letters)
    const validPlaces = (Array.isArray(rawData) ? rawData : []).filter(
      (item) => item && typeof item.code === 'string' && item.code.length === 3
    );

    // Cache valid results
    placesCache.set(clean, {
      timestamp: Date.now(),
      data: validPlaces
    });

    return validPlaces;
  } catch (error) {
    // If request was aborted by user typing new character, gracefully rethrow or return empty
    if (error instanceof Error && error.name === 'AbortError') {
      return [];
    }

    // Fallback search into local database if offline or network failure
    const fallbackResults = GLOBAL_AIRPORTS.filter(
      (a) =>
        a.code.toLowerCase().includes(clean) ||
        a.city.toLowerCase().includes(clean) ||
        a.country.toLowerCase().includes(clean) ||
        a.name.toLowerCase().includes(clean)
    ).map((a): AviasalesPlace => ({
      id: `${a.code}-${a.city}`,
      type: 'airport',
      code: a.code,
      name: a.name,
      city_name: a.city,
      city_code: a.code,
      country_code: 'UN',
      country_name: a.country,
      weight: 1000
    }));

    return fallbackResults;
  }
}

/**
 * Maps an Aviasales place object to the application's internal AirportOption format
 */
export function mapPlaceToAirportOption(place: AviasalesPlace): AirportOption {
  const cityName = place.city_name || place.name;
  let region: AirportOption['region'] = 'Europe';
  const cc = (place.country_code || '').toUpperCase();

  if (['US', 'CA', 'MX', 'BR', 'AR', 'CO', 'CL', 'PE'].includes(cc)) {
    region = 'Americas';
  } else if (cc === 'SA') {
    region = 'Saudi Arabia';
  } else if (['AE', 'QA', 'OM', 'BH', 'KW', 'JO', 'TR', 'EG', 'LB'].includes(cc)) {
    region = 'Middle East';
  } else if (['BD', 'PK', 'IN', 'LK', 'NP'].includes(cc)) {
    region = 'South Asia';
  } else if (
    ['MY', 'SG', 'TH', 'ID', 'JP', 'KR', 'CN', 'VN', 'PH', 'AU', 'NZ', 'TW', 'HK'].includes(cc)
  ) {
    region = 'Asia-Pacific';
  } else if (['EG', 'MA', 'ZA', 'KE', 'NG', 'ET', 'TN', 'GH'].includes(cc)) {
    region = 'Africa';
  }

  return {
    code: place.code.toUpperCase(),
    city: cityName,
    country: place.country_name,
    name: place.name,
    region,
    isPopular: (place.weight ?? 0) > 40000,
    aliases: [
      cityName.toLowerCase(),
      place.code.toLowerCase(),
      place.country_name.toLowerCase(),
      place.name.toLowerCase()
    ]
  };
}

/**
 * Formats a selected place into a clean, human-readable input value, e.g. "Paris (CDG)" or "Tokyo (HND)"
 */
export function formatPlaceSelection(place: AviasalesPlace): string {
  const cityName = place.city_name || place.name;
  return `${cityName} (${place.code.toUpperCase()})`;
}
