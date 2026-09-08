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

  // 2. Check for parenthesized code, e.g. "Jeddah (JED)" or "London (LHR)"
  const parenMatch = firstPart.match(/\(([A-Z]{3})\)/);
  if (parenMatch) return parenMatch[1];

  // 3. Check for standalone uppercase 3-letter code
  const codeMatch = firstPart.match(/\b([A-Z]{3})\b/);
  if (codeMatch && codeMatch[1].length === 3) {
    return codeMatch[1];
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
 */
export function formatAviasalesDDMM(dateInput?: string | Date, daysOffset = 21): string {
  let targetDate: Date;

  if (dateInput) {
    targetDate = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    if (isNaN(targetDate.getTime())) {
      targetDate = new Date(Date.now() + daysOffset * 24 * 60 * 60 * 1000);
    }
  } else {
    targetDate = new Date(Date.now() + daysOffset * 24 * 60 * 60 * 1000);
  }

  const day = String(targetDate.getDate()).padStart(2, '0');
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  return `${day}${month}`;
}

export interface AviasalesRouteOptions {
  departDate?: string | Date;
  returnDate?: string | Date;
  passengers?: number;
  cabinClass?: 'y' | 'c' | 'w' | 'f'; // y = economy (default), c = business, w = comfort, f = first
  useTravelpayoutsRedirect?: boolean;
}

/**
 * Builds the official Aviasales search results page URL with affiliate attribution
 * Template: https://www.aviasales.com/search/{ORIGIN}{DDMM}{DEST}{RETURN_DDMM}{PASSENGERS}?marker=737968
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

  if (options?.returnDate) {
    const returnDDMM = formatAviasalesDDMM(options.returnDate, 28);
    routeParams += `${returnDDMM}`;
  }

  // Passengers & class
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
