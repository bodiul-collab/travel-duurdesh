/**
 * Aviasales & Travelpayouts Affiliate Deep-Link & URL Generator
 * Affiliate Partner ID / Marker: 737968
 * Campaign / Promo ID: 7879 | TRS: 570661
 */

export const AVIASALES_AFFILIATE_MARKER = '737968';
export const TRAVELPAYOUTS_PROMO_ID = '7879';
export const TRAVELPAYOUTS_TRS = '570661';

const KNOWN_IATA_MAP: Record<string, string> = {
  london: 'LHR',
  heathrow: 'LHR',
  gatwick: 'LGW',
  'new york': 'JFK',
  jfk: 'JFK',
  newark: 'EWR',
  jeddah: 'JED',
  madinah: 'MED',
  medina: 'MED',
  dubai: 'DXB',
  dhaka: 'DAC',
  doha: 'DOH',
  istanbul: 'IST',
  paris: 'CDG',
  'kuala lumpur': 'KUL',
  singapore: 'SIN',
  cairo: 'CAI',
  riyadh: 'RUH',
  manchester: 'MAN',
  birmingham: 'BHX',
  toronto: 'YYZ',
  chicago: 'ORD',
  losangeles: 'LAX',
  houston: 'IAH',
  iah: 'IAH',
  bangkok: 'BKK',
  delhi: 'DEL',
  mumbai: 'BOM',
  karachi: 'KHI',
  islamabad: 'ISB',
  lahore: 'LHE',
  colombo: 'CMB',
  jakarta: 'CGK'
};

/**
 * Extracts or resolves a 3-letter IATA code from user input or deal titles
 */
export function resolveIataCode(input: string, defaultCode = 'LHR'): string {
  if (!input) return defaultCode;

  // 1. If multiple codes like "JFK / LHR", take the first segment
  const firstPart = input.split('/')[0].trim();

  // 2. Check for parenthesized code, e.g. "Jeddah (JED)" or "Houston (iah)"
  const parenMatch = firstPart.match(/\(([A-Za-z]{3})\)/);
  if (parenMatch) return parenMatch[1].toUpperCase();

  // 3. Check for standalone 3-letter code (case-insensitive, e.g. "iah", "IAH", "med")
  const codeMatch = firstPart.match(/\b([A-Za-z]{3})\b/);
  if (codeMatch && codeMatch[1].length === 3) {
    return codeMatch[1].toUpperCase();
  }

  // 4. Fuzzy map against known cities
  const clean = firstPart.toLowerCase().replace(/[^a-z\s]/g, '');
  for (const [cityName, iata] of Object.entries(KNOWN_IATA_MAP)) {
    if (clean.includes(cityName)) {
      return iata;
    }
  }

  // 5. Fallback clean 3 chars
  const fallback = firstPart.replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase();
  return fallback.length === 3 ? fallback : defaultCode;
}

/**
 * Formats a date into Aviasales DDMM format (2 digits day, 2 digits month)
 * Directly parses YYYY-MM-DD strings to prevent JavaScript timezone boundary drift
 */
export function formatAviasalesDDMM(dateInput?: string | Date, daysOffset = 21): string {
  // 1. Direct YYYY-MM-DD string parsing - avoids all local timezone shifts
  if (typeof dateInput === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    const parts = dateInput.split('-');
    const month = parts[1];
    const day = parts[2];
    return `${day}${month}`;
  }

  let targetDate: Date;

  if (dateInput) {
    targetDate = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    if (isNaN(targetDate.getTime())) {
      targetDate = new Date(Date.now() + daysOffset * 24 * 60 * 60 * 1000);
    }
  } else {
    targetDate = new Date(Date.now() + daysOffset * 24 * 60 * 60 * 1000);
  }

  const day = String(targetDate.getUTCDate()).padStart(2, '0');
  const month = String(targetDate.getUTCMonth() + 1).padStart(2, '0');
  return `${day}${month}`;
}

export interface AviasalesRouteOptions {
  departDate?: string | Date;
  returnDate?: string | Date;
  isOneWay?: boolean;
  passengers?: number;
  cabinClass?: 'y' | 'c' | 'w' | 'f'; // y = economy (default), c = business, w = comfort, f = first
  useTravelpayoutsRedirect?: boolean;
}

/**
 * Builds the official Aviasales search results page URL with affiliate attribution
 * Template Round Trip: https://www.aviasales.com/search/{ORIGIN}{DEPART_DDMM}{DEST}{RETURN_DDMM}{PASSENGERS}?marker=737968
 * Template One Way:    https://www.aviasales.com/search/{ORIGIN}{DEPART_DDMM}{DEST}{PASSENGERS}?marker=737968
 */
export function buildAviasalesRouteUrl(
  origin: string,
  destination: string,
  options?: AviasalesRouteOptions
): string {
  const originIata = resolveIataCode(origin, 'LHR');
  const destIata = resolveIataCode(destination, 'JED');

  const departDDMM = formatAviasalesDDMM(options?.departDate, 21);
  let routeParams = `${originIata}${departDDMM}${destIata}`;

  // If not explicitly marked as oneWay, ensure a return date is added so users get Round Trip options
  if (!options?.isOneWay) {
    if (options?.returnDate) {
      const returnDDMM = formatAviasalesDDMM(options.returnDate, 28);
      routeParams += `${returnDDMM}`;
    } else {
      // Default return date (7 days after departure offset) for round-trip deals & cards
      const returnDDMM = formatAviasalesDDMM(undefined, 28);
      routeParams += `${returnDDMM}`;
    }
  }

  // Passengers & cabin class
  const adults = Math.max(1, options?.passengers || 1);
  const cabinClassPrefix = options?.cabinClass && options.cabinClass !== 'y' ? options.cabinClass : '';
  routeParams += `${cabinClassPrefix}${adults}`;

  const aviasalesUrl = `https://www.aviasales.com/search/${routeParams}?marker=${AVIASALES_AFFILIATE_MARKER}`;

  if (options?.useTravelpayoutsRedirect) {
    return `https://tp.media/r?p=${TRAVELPAYOUTS_PROMO_ID}&marker=${AVIASALES_AFFILIATE_MARKER}&trs=${TRAVELPAYOUTS_TRS}&u=${encodeURIComponent(
      aviasalesUrl
    )}`;
  }

  return aviasalesUrl;
}

export interface AviasalesMultiCityLeg {
  origin: string;
  destination: string;
  date?: string | Date;
}

export interface AviasalesMultiCityOptions {
  passengers?: number;
  cabinClass?: 'y' | 'c' | 'w' | 'f';
  useTravelpayoutsRedirect?: boolean;
}

/**
 * Builds the official Aviasales multi-city or round-trip search results page URL with affiliate attribution
 * Automatically detects round trips (e.g. A->B and B->A) and generates standard Aviasales round-trip format
 * Supports multi-segment open-jaw routes (e.g. JFK1909JEDMED2909JFK1)
 */
export function buildAviasalesMultiCityUrl(
  legs: AviasalesMultiCityLeg[],
  options?: AviasalesMultiCityOptions
): string {
  if (!legs || legs.length === 0) {
    return `https://www.aviasales.com/search/?marker=${AVIASALES_AFFILIATE_MARKER}`;
  }

  const adults = Math.max(1, options?.passengers || 1);
  const cabinClassPrefix = options?.cabinClass && options.cabinClass !== 'y' ? options.cabinClass : '';
  const passengerSuffix = `${cabinClassPrefix}${adults}`;

  const resolvedLegs = legs.map((leg, idx) => ({
    originIata: resolveIataCode(leg.origin, idx === 0 ? 'JFK' : 'JED'),
    destIata: resolveIataCode(leg.destination, idx === 0 ? 'JED' : 'JFK'),
    departDDMM: formatAviasalesDDMM(leg.date, 14 + idx * 7)
  }));

  // Direct Round-Trip Detection:
  // If there are exactly 2 legs and the second leg returns to the first leg's origin:
  // Leg 1: A -> B (departDDMM1)
  // Leg 2: B -> A (departDDMM2)
  // Standard Aviasales Round-Trip: {ORIGIN}{DEPART_DDMM}{DEST}{RETURN_DDMM}{PASSENGERS}
  // This guarantees the landing page offers round-trip ticket options to buy instead of dropping leg 2!
  if (
    resolvedLegs.length === 2 &&
    resolvedLegs[0].originIata === resolvedLegs[1].destIata &&
    resolvedLegs[0].destIata === resolvedLegs[1].originIata
  ) {
    const routeParams = `${resolvedLegs[0].originIata}${resolvedLegs[0].departDDMM}${resolvedLegs[0].destIata}${resolvedLegs[1].departDDMM}${passengerSuffix}`;
    const aviasalesUrl = `https://www.aviasales.com/search/${routeParams}?marker=${AVIASALES_AFFILIATE_MARKER}`;
    if (options?.useTravelpayoutsRedirect) {
      return `https://tp.media/r?p=${TRAVELPAYOUTS_PROMO_ID}&marker=${AVIASALES_AFFILIATE_MARKER}&trs=${TRAVELPAYOUTS_TRS}&u=${encodeURIComponent(
        aviasalesUrl
      )}`;
    }
    return aviasalesUrl;
  }

  // Multi-segment routing:
  let routeParams = '';
  let previousDest = '';

  resolvedLegs.forEach((leg, index) => {
    if (index === 0) {
      routeParams += `${leg.originIata}${leg.departDDMM}${leg.destIata}`;
    } else {
      if (leg.originIata === previousDest) {
        routeParams += `${leg.departDDMM}${leg.destIata}`;
      } else {
        routeParams += `${leg.originIata}${leg.departDDMM}${leg.destIata}`;
      }
    }
    previousDest = leg.destIata;
  });

  routeParams += `${passengerSuffix}`;

  const aviasalesUrl = `https://www.aviasales.com/search/${routeParams}?marker=${AVIASALES_AFFILIATE_MARKER}`;

  if (options?.useTravelpayoutsRedirect) {
    return `https://tp.media/r?p=${TRAVELPAYOUTS_PROMO_ID}&marker=${AVIASALES_AFFILIATE_MARKER}&trs=${TRAVELPAYOUTS_TRS}&u=${encodeURIComponent(
      aviasalesUrl
    )}`;
  }

  return aviasalesUrl;
}

