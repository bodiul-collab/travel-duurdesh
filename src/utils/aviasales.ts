import { safeExtractIata } from './iataRegistry';

/**
 * Aviasales & Travelpayouts Affiliate Deep-Link & URL Generator
 * Affiliate Partner ID / Marker: 737968
 * Campaign / Promo ID: 7879 | TRS: 570661
 */

export const AVIASALES_AFFILIATE_MARKER = '737968';
export const TRAVELPAYOUTS_PROMO_ID = '7879';
export const TRAVELPAYOUTS_TRS = '570661';

/**
 * Extracts or resolves a 3-letter IATA code from user input, city names, or deal titles
 * Uses the comprehensive global IATA registry to prevent booking errors.
 */
export function resolveIataCode(input: string, defaultCode = 'LHR'): string {
  return safeExtractIata(input, defaultCode);
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
  let originIata = resolveIataCode(origin, 'LHR');
  let destIata = resolveIataCode(destination, 'JED');

  // Strict format guard: MUST be exactly 3 uppercase ASCII letters
  if (!/^[A-Z]{3}$/.test(originIata)) originIata = 'LHR';
  if (!/^[A-Z]{3}$/.test(destIata)) destIata = 'JED';

  // Prevent same origin and destination which causes Aviasales search errors
  if (originIata === destIata) {
    destIata = originIata === 'JED' ? 'MED' : 'JED';
  }

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

  const resolvedLegs = legs.map((leg, idx) => {
    let originIata = resolveIataCode(leg.origin, idx === 0 ? 'JFK' : 'JED');
    let destIata = resolveIataCode(leg.destination, idx === 0 ? 'JED' : 'JFK');
    if (!/^[A-Z]{3}$/.test(originIata)) originIata = idx === 0 ? 'JFK' : 'JED';
    if (!/^[A-Z]{3}$/.test(destIata)) destIata = idx === 0 ? 'JED' : 'JFK';
    if (originIata === destIata) {
      destIata = originIata === 'JED' ? 'MED' : 'JED';
    }
    return {
      originIata,
      destIata,
      departDDMM: formatAviasalesDDMM(leg.date, 14 + idx * 7)
    };
  });

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

