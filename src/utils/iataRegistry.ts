/**
 * Comprehensive IATA Airport & City Code Registry
 * Provides bulletproof mapping from worldwide cities, regions, and search strings
 * to the exact 3-letter uppercase IATA code required by Aviasales affiliate URL generator.
 */

import { GLOBAL_AIRPORTS } from '../data/airportsData';

// Dynamic cache updated whenever the user searches via Aviasales Autocomplete
const DYNAMIC_IATA_CACHE = new Map<string, string>();

/**
 * Words of 3 letters that frequently appear in city, state, or country names
 * but are NOT the intended IATA airport code for that location.
 * (e.g. "Abu Dhabi" should NOT resolve to "ABU", "Los Angeles" should NOT resolve to "LOS",
 * "San Francisco" should NOT resolve to "SAN", "New York" should NOT resolve to "NEW",
 * "Tel Aviv" should NOT resolve to "TEL").
 */
export const STOP_WORDS_3_LETTERS = new Set([
  'ABU',
  'LOS',
  'SAN',
  'NEW',
  'TEL',
  'RIO',
  'LAS',
  'THE',
  'AND',
  'FOR',
  'ALL',
  'AIR',
  'SEA',
  'BAY',
  'MAY',
  'NOT',
  'ONE',
  'TWO',
  'OFF',
  'OUT',
  'VIA',
  'USA',
  'UAE',
  'INT',
  'CIT',
  'HUB',
  'DOM',
  'MET',
  'AIR'
]);

/**
 * Comprehensive static dictionary of global cities and their primary IATA codes
 */
export const GLOBAL_CITY_IATA_MAP: Record<string, string> = {
  // Middle East & Umrah Hubs
  'makkah': 'JED', // Jeddah King Abdulaziz International is the gateway for Makkah
  'mecca': 'JED',
  'jeddah': 'JED',
  'madinah': 'MED',
  'medina': 'MED',
  'alula': 'ULH',
  'al ula': 'ULH',
  'riyadh': 'RUH',
  'dammam': 'DMM',
  'taif': 'TIF',
  'yanbu': 'YNB',
  'abha': 'AHB',
  'tabuk': 'TUU',
  'gassim': 'ELQ',
  'dubai': 'DXB',
  'abu dhabi': 'AUH',
  'abudhabi': 'AUH',
  'sharjah': 'SHJ',
  'doha': 'DOH',
  'qatar': 'DOH',
  'kuwait': 'KWI',
  'kuwait city': 'KWI',
  'bahrain': 'BAH',
  'manama': 'BAH',
  'muscat': 'MCT',
  'oman': 'MCT',
  'salalah': 'SLL',
  'amman': 'AMM',
  'jordan': 'AMM',
  'beirut': 'BEY',
  'lebanon': 'BEY',
  'cairo': 'CAI',
  'egypt': 'CAI',
  'alexandria': 'HBE',
  'sharm el sheikh': 'SSH',
  'hurghada': 'HRG',
  'luxor': 'LXR',
  'tel aviv': 'TLV',

  // South Asia
  'dhaka': 'DAC',
  'bangladesh': 'DAC',
  'chittagong': 'CGP',
  'chattogram': 'CGP',
  'sylhet': 'ZYL',
  'coxs bazar': 'CXB',
  'cox bazar': 'CXB',
  'rajshahi': 'RJH',
  'jessore': 'JSR',
  'barisal': 'BZL',
  'saidpur': 'SPD',
  'delhi': 'DEL',
  'new delhi': 'DEL',
  'mumbai': 'BOM',
  'bombay': 'BOM',
  'bangalore': 'BLR',
  'bengaluru': 'BLR',
  'chennai': 'MAA',
  'madras': 'MAA',
  'kolkata': 'CCU',
  'calcutta': 'CCU',
  'hyderabad': 'HYD',
  'ahmedabad': 'AMD',
  'kochi': 'COK',
  'cochin': 'COK',
  'goa': 'GOI',
  'thiruvananthapuram': 'TRV',
  'karachi': 'KHI',
  'lahore': 'LHE',
  'islamabad': 'ISB',
  'peshawar': 'PEW',
  'sialkot': 'SKT',
  'multan': 'MUX',
  'faisalabad': 'LYP',
  'quetta': 'UET',
  'colombo': 'CMB',
  'sri lanka': 'CMB',
  'male': 'MLE',
  'maldives': 'MLE',
  'kathmandu': 'KTM',
  'nepal': 'KTM',

  // Southeast & East Asia
  'kuala lumpur': 'KUL',
  'kl': 'KUL',
  'malaysia': 'KUL',
  'penang': 'PEN',
  'langkawi': 'LGK',
  'singapore': 'SIN',
  'changi': 'SIN',
  'bangkok': 'BKK',
  'thailand': 'BKK',
  'phuket': 'HKT',
  'chiang mai': 'CNX',
  'koh samui': 'USM',
  'krabi': 'KBV',
  'jakarta': 'CGK',
  'indonesia': 'CGK',
  'bali': 'DPS',
  'denpasar': 'DPS',
  'surabaya': 'SUB',
  'manila': 'MNL',
  'philippines': 'MNL',
  'cebu': 'CEB',
  'hanoi': 'HAN',
  'vietnam': 'HAN',
  'ho chi minh': 'SGN',
  'ho chi minh city': 'SGN',
  'saigon': 'SGN',
  'da nang': 'DAD',
  'tokyo': 'HND',
  'japan': 'HND',
  'haneda': 'HND',
  'narita': 'NRT',
  'osaka': 'KIX',
  'kansai': 'KIX',
  'kyoto': 'KIX',
  'nagoya': 'NGO',
  'fukuoka': 'FUK',
  'sapporo': 'CTS',
  'seoul': 'ICN',
  'korea': 'ICN',
  'incheon': 'ICN',
  'gimpo': 'GMP',
  'busan': 'PUS',
  'beijing': 'PEK',
  'china': 'PEK',
  'daxing': 'PKX',
  'shanghai': 'PVG',
  'pudong': 'PVG',
  'hong kong': 'HKG',
  'taipei': 'TPE',
  'taiwan': 'TPE',
  'guangzhou': 'CAN',
  'shenzhen': 'SZX',

  // Europe & Eurasia
  'istanbul': 'IST',
  'turkey': 'IST',
  'türkiye': 'IST',
  'sabiha': 'SAW',
  'antalya': 'AYT',
  'ankara': 'ESB',
  'izmir': 'ADB',
  'bodrum': 'BJV',
  'dalaman': 'DLM',
  'london': 'LHR',
  'uk': 'LHR',
  'united kingdom': 'LHR',
  'heathrow': 'LHR',
  'gatwick': 'LGW',
  'stansted': 'STN',
  'luton': 'LTN',
  'manchester': 'MAN',
  'birmingham': 'BHX',
  'edinburgh': 'EDI',
  'glasgow': 'GLA',
  'paris': 'CDG',
  'france': 'CDG',
  'charles de gaulle': 'CDG',
  'orly': 'ORY',
  'nice': 'NCE',
  'lyon': 'LYS',
  'marseille': 'MRS',
  'amsterdam': 'AMS',
  'netherlands': 'AMS',
  'schiphol': 'AMS',
  'frankfurt': 'FRA',
  'germany': 'FRA',
  'munich': 'MUC',
  'berlin': 'BER',
  'hamburg': 'HAM',
  'dusseldorf': 'DUS',
  'cologne': 'CGN',
  'rome': 'FCO',
  'italy': 'FCO',
  'fiumicino': 'FCO',
  'milan': 'MXP',
  'malpensa': 'MXP',
  'venice': 'VCE',
  'florence': 'FLR',
  'madrid': 'MAD',
  'spain': 'MAD',
  'barajas': 'MAD',
  'barcelona': 'BCN',
  'el prat': 'BCN',
  'malaga': 'AGP',
  'valencia': 'VLC',
  'seville': 'SVQ',
  'lisbon': 'LIS',
  'portugal': 'LIS',
  'porto': 'OPO',
  'zurich': 'ZRH',
  'switzerland': 'ZRH',
  'geneva': 'GVA',
  'vienna': 'VIE',
  'austria': 'VIE',
  'brussels': 'BRU',
  'belgium': 'BRU',
  'dublin': 'DUB',
  'ireland': 'DUB',
  'prague': 'PRG',
  'czech republic': 'PRG',
  'budapest': 'BUD',
  'hungary': 'BUD',
  'warsaw': 'WAW',
  'poland': 'WAW',
  'athens': 'ATH',
  'greece': 'ATH',
  'copenhagen': 'CPH',
  'denmark': 'CPH',
  'stockholm': 'ARN',
  'sweden': 'ARN',
  'oslo': 'OSL',
  'norway': 'OSL',
  'helsinki': 'HEL',
  'finland': 'HEL',

  // North America
  'houston': 'IAH',
  'intercontinental': 'IAH',
  'hobby': 'HOU',
  'new york': 'JFK',
  'new york city': 'JFK',
  'nyc': 'JFK',
  'jfk': 'JFK',
  'newark': 'EWR',
  'laguardia': 'LGA',
  'los angeles': 'LAX',
  'san francisco': 'SFO',
  'chicago': 'ORD',
  'ohare': 'ORD',
  'midway': 'MDW',
  'dallas': 'DFW',
  'fort worth': 'DFW',
  'miami': 'MIA',
  'orlando': 'MCO',
  'atlanta': 'ATL',
  'boston': 'BOS',
  'washington': 'IAD',
  'dulles': 'IAD',
  'reagan': 'DCA',
  'seattle': 'SEA',
  'las vegas': 'LAS',
  'denver': 'DEN',
  'phoenix': 'PHX',
  'san diego': 'SAN',
  'san jose': 'SJC',
  'austin': 'AUS',
  'philadelphia': 'PHL',
  'detroit': 'DTW',
  'minneapolis': 'MSP',
  'charlotte': 'CLT',
  'tampa': 'TPA',
  'honolulu': 'HNL',
  'hawaii': 'HNL',
  'toronto': 'YYZ',
  'canada': 'YYZ',
  'pearson': 'YYZ',
  'vancouver': 'YVR',
  'montreal': 'YUL',
  'calgary': 'YYC',
  'edmonton': 'YEG',
  'ottawa': 'YOW',
  'mexico city': 'MEX',
  'mexico': 'MEX',
  'cancun': 'CUN',
  'guadalajara': 'GDL',

  // South America & Oceania
  'sao paulo': 'GRU',
  'brazil': 'GRU',
  'rio de janeiro': 'GIG',
  'buenos aires': 'EZE',
  'argentina': 'EZE',
  'bogota': 'BOG',
  'colombia': 'BOG',
  'lima': 'LIM',
  'peru': 'LIM',
  'santiago': 'SCL',
  'chile': 'SCL',
  'sydney': 'SYD',
  'australia': 'SYD',
  'melbourne': 'MEL',
  'brisbane': 'BNE',
  'perth': 'PER',
  'adelaide': 'ADL',
  'auckland': 'AKL',
  'new zealand': 'AKL',
  'christchurch': 'CHC',

  // Africa
  'johannesburg': 'JNB',
  'south africa': 'JNB',
  'cape town': 'CPT',
  'nairobi': 'NBO',
  'kenya': 'NBO',
  'addis ababa': 'ADD',
  'ethiopia': 'ADD',
  'casablanca': 'CMN',
  'morocco': 'CMN',
  'marrakesh': 'RAK',
  'lagos': 'LOS',
  'nigeria': 'LOS',
  'accra': 'ACC',
  'ghana': 'ACC',
  'tunis': 'TUN',
  'algiers': 'ALG'
};

// Seed dynamic cache: first with airport facilities, then ensure curated primary hubs take precedence
for (const ap of GLOBAL_AIRPORTS) {
  if (ap.code && ap.code.length === 3) {
    const uppercaseCode = ap.code.toUpperCase();
    if (!DYNAMIC_IATA_CACHE.has(ap.city.toLowerCase())) {
      DYNAMIC_IATA_CACHE.set(ap.city.toLowerCase(), uppercaseCode);
    }
    if (!DYNAMIC_IATA_CACHE.has(ap.name.toLowerCase())) {
      DYNAMIC_IATA_CACHE.set(ap.name.toLowerCase(), uppercaseCode);
    }
    if (ap.aliases) {
      for (const alias of ap.aliases) {
        if (!DYNAMIC_IATA_CACHE.has(alias.toLowerCase())) {
          DYNAMIC_IATA_CACHE.set(alias.toLowerCase(), uppercaseCode);
        }
      }
    }
  }
}

// Curated primary global hubs (JFK for New York, HND for Tokyo, LHR for London, IAH for Houston)
for (const [key, code] of Object.entries(GLOBAL_CITY_IATA_MAP)) {
  DYNAMIC_IATA_CACHE.set(key.toLowerCase(), code.toUpperCase());
}

/**
 * Dynamically registers a place returned from the Aviasales Autocomplete API
 * Ensures any city clicked by a user is immediately mapped for subsequent URL builds.
 */
export function registerPlaceIata(
  cityName?: string | null,
  airportName?: string | null,
  iataCode?: string | null
): void {
  if (!iataCode || typeof iataCode !== 'string') return;
  const cleanCode = iataCode.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(cleanCode)) return;

  if (cityName && typeof cityName === 'string') {
    const cleanCity = cityName.trim().toLowerCase();
    if (cleanCity.length >= 2) {
      DYNAMIC_IATA_CACHE.set(cleanCity, cleanCode);
    }
  }

  if (airportName && typeof airportName === 'string') {
    const cleanName = airportName.trim().toLowerCase();
    if (cleanName.length >= 2) {
      DYNAMIC_IATA_CACHE.set(cleanName, cleanCode);
    }
  }
}

/**
 * Cleanly extracts or resolves a 3-letter uppercase IATA code from user input or city names
 * Guaranteed to return a valid 3-letter IATA code matching /^[A-Z]{3}$/
 */
export function safeExtractIata(input: string, fallbackDefault = 'LHR'): string {
  if (!input || typeof input !== 'string') {
    return fallbackDefault.toUpperCase();
  }

  const trimmed = input.trim();

  // 1. Check if the string itself is strictly a 3-letter code (e.g. "IAH", "cdg", "JFK", "med")
  if (/^[A-Za-z]{3}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }

  // 2. Check for parentheses format: "Houston (IAH)", "Paris (CDG)", "Abu Dhabi (AUH)"
  const parenMatch = trimmed.match(/\(([A-Za-z]{3})\)/);
  if (parenMatch && parenMatch[1]) {
    const code = parenMatch[1].toUpperCase();
    if (!STOP_WORDS_3_LETTERS.has(code)) {
      return code;
    }
  }

  // 3. Check for bracket or separator format: "[CDG]", "- CDG", "/ CDG"
  const bracketMatch = trimmed.match(/[[/:\-]\s*([A-Za-z]{3})\b/);
  if (bracketMatch && bracketMatch[1]) {
    const code = bracketMatch[1].toUpperCase();
    if (!STOP_WORDS_3_LETTERS.has(code)) {
      return code;
    }
  }

  // 4. Exact dictionary lookup on clean lowercase string
  const clean = trimmed
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // 4a. Direct match in dynamic cache (which includes Aviasales live autocomplete results)
  const cached = DYNAMIC_IATA_CACHE.get(clean);
  if (cached && /^[A-Z]{3}$/.test(cached)) {
    return cached;
  }

  // 4b. Multi-word or single-word city lookup in known city map
  for (const [cityName, iata] of Object.entries(GLOBAL_CITY_IATA_MAP)) {
    if (clean === cityName || clean.startsWith(`${cityName} `) || clean.includes(` ${cityName}`)) {
      return iata;
    }
  }

  // 5. Look in GLOBAL_AIRPORTS for matching city or alias
  for (const ap of GLOBAL_AIRPORTS) {
    const apCity = ap.city.toLowerCase();
    if (clean === apCity || clean.includes(apCity) || apCity.includes(clean)) {
      return ap.code.toUpperCase();
    }
    if (ap.aliases) {
      for (const alias of ap.aliases) {
        if (clean === alias || clean.includes(alias)) {
          return ap.code.toUpperCase();
        }
      }
    }
  }

  // 6. Check if any standalone word is an uppercase 3-letter IATA code (excluding stop words)
  const tokens = trimmed.split(/[\s,()\-/\\]+/);
  for (const token of tokens) {
    if (/^[A-Za-z]{3}$/.test(token)) {
      const upper = token.toUpperCase();
      // If it's a known airport code or not a stop word
      if (!STOP_WORDS_3_LETTERS.has(upper)) {
        const isRegistered = GLOBAL_AIRPORTS.some((a) => a.code === upper);
        if (isRegistered || token === token.toUpperCase()) {
          return upper;
        }
      }
    }
  }

  // 7. Fallback to default if no valid mapping found
  const verifiedDefault = fallbackDefault && /^[A-Za-z]{3}$/.test(fallbackDefault)
    ? fallbackDefault.toUpperCase()
    : 'LHR';

  return verifiedDefault;
}
