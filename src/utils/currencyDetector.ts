/**
 * Currency auto-detection utility based on browser locale and environment settings.
 * Detects user's local currency on initial page load while preserving manual user selection as backup.
 */

const STORAGE_KEY = 'travel_duurdesh_currency';

// Region code (ISO 3166-1 alpha-2) to Currency code mapping
const REGION_TO_CURRENCY: Record<string, string> = {
  // United States & Territories
  US: 'USD',
  PR: 'USD',
  GU: 'USD',
  VI: 'USD',
  AS: 'USD',
  MP: 'USD',
  EC: 'USD', // Ecuador
  SV: 'USD', // El Salvador
  PA: 'USD', // Panama

  // Eurozone
  AT: 'EUR', // Austria
  BE: 'EUR', // Belgium
  CY: 'EUR', // Cyprus
  DE: 'EUR', // Germany
  EE: 'EUR', // Estonia
  ES: 'EUR', // Spain
  FI: 'EUR', // Finland
  FR: 'EUR', // France
  GR: 'EUR', // Greece
  HR: 'EUR', // Croatia
  IE: 'EUR', // Ireland
  IT: 'EUR', // Italy
  LT: 'EUR', // Lithuania
  LU: 'EUR', // Luxembourg
  LV: 'EUR', // Latvia
  MT: 'EUR', // Malta
  NL: 'EUR', // Netherlands
  PT: 'EUR', // Portugal
  SI: 'EUR', // Slovenia
  SK: 'EUR', // Slovakia
  AD: 'EUR', // Andorra
  MC: 'EUR', // Monaco
  SM: 'EUR', // San Marino
  VA: 'EUR', // Vatican City
  ME: 'EUR', // Montenegro
  XK: 'EUR', // Kosovo

  // United Kingdom & Crown Dependencies
  GB: 'GBP',
  UK: 'GBP',
  GG: 'GBP',
  IM: 'GBP',
  JE: 'GBP',

  // Canada
  CA: 'CAD',

  // Australia & External Territories
  AU: 'AUD',
  CX: 'AUD',
  CC: 'AUD',
  NF: 'AUD',
  NR: 'AUD',
  TV: 'AUD',

  // Japan
  JP: 'JPY',

  // India
  IN: 'INR',

  // Bangladesh
  BD: 'BDT',

  // United Arab Emirates
  AE: 'AED',

  // Singapore
  SG: 'SGD',

  // Switzerland & Liechtenstein
  CH: 'CHF',
  LI: 'CHF'
};

// Base language fallback mapping when no region can be extracted
const LANGUAGE_TO_CURRENCY: Record<string, string> = {
  ja: 'JPY',
  de: 'EUR',
  fr: 'EUR',
  it: 'EUR',
  es: 'EUR',
  nl: 'EUR',
  el: 'EUR',
  pt: 'EUR',
  bn: 'BDT',
  hi: 'INR',
  mr: 'INR',
  te: 'INR',
  ta: 'INR',
  gu: 'INR',
  kn: 'INR',
  pa: 'INR',
  ur: 'INR',
  ar: 'AED'
};

/**
 * Extracts the 2-letter ISO region code from a BCP 47 language tag (e.g., 'en-GB' -> 'GB', 'ja' -> 'JP').
 */
function extractRegionFromLocale(localeStr: string): string | null {
  if (!localeStr || typeof localeStr !== 'string') return null;

  try {
    if (typeof Intl !== 'undefined' && 'Locale' in Intl) {
      const locale = new Intl.Locale(localeStr);
      if (locale.region) {
        return locale.region.toUpperCase();
      }
      // If region is not explicitly defined, maximize to resolve default region for language
      const maximized = locale.maximize?.();
      if (maximized && maximized.region) {
        return maximized.region.toUpperCase();
      }
    }
  } catch {
    // Ignore Intl parsing errors and fall back to string parsing
  }

  // Fallback parsing e.g. "en-US", "en_US", "fr-FR"
  const clean = localeStr.replace('_', '-');
  const parts = clean.split('-');
  if (parts.length >= 2) {
    const candidate = parts[parts.length - 1];
    if (candidate.length === 2) {
      return candidate.toUpperCase();
    }
  }

  return null;
}

/**
 * Infer currency from the browser's IANA time zone identifier.
 */
function inferCurrencyFromTimeZone(): string | null {
  try {
    if (typeof Intl === 'undefined' || !Intl.DateTimeFormat) return null;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!timeZone) return null;

    if (timeZone.includes('London') || timeZone.includes('Belfast')) {
      return 'GBP';
    }
    if (timeZone.includes('Tokyo')) {
      return 'JPY';
    }
    if (
      timeZone.includes('Paris') ||
      timeZone.includes('Berlin') ||
      timeZone.includes('Rome') ||
      timeZone.includes('Madrid') ||
      timeZone.includes('Amsterdam') ||
      timeZone.includes('Brussels') ||
      timeZone.includes('Vienna') ||
      timeZone.includes('Dublin') ||
      timeZone.includes('Athens') ||
      timeZone.includes('Helsinki') ||
      timeZone.includes('Lisbon')
    ) {
      return 'EUR';
    }
    if (
      timeZone.includes('Sydney') ||
      timeZone.includes('Melbourne') ||
      timeZone.includes('Brisbane') ||
      timeZone.includes('Perth') ||
      timeZone.includes('Adelaide') ||
      timeZone.includes('Hobart') ||
      timeZone.includes('Darwin')
    ) {
      return 'AUD';
    }
    if (
      timeZone.includes('Toronto') ||
      timeZone.includes('Vancouver') ||
      timeZone.includes('Montreal') ||
      timeZone.includes('Edmonton') ||
      timeZone.includes('Calgary') ||
      timeZone.includes('Winnipeg') ||
      timeZone.includes('Halifax')
    ) {
      return 'CAD';
    }
    if (timeZone.includes('Kolkata') || timeZone.includes('Calcutta')) {
      return 'INR';
    }
    if (timeZone.includes('Dhaka')) {
      return 'BDT';
    }
    if (timeZone.includes('Dubai')) {
      return 'AED';
    }
    if (timeZone.includes('Singapore')) {
      return 'SGD';
    }
    if (timeZone.includes('Zurich')) {
      return 'CHF';
    }
    if (
      timeZone.includes('New_York') ||
      timeZone.includes('Chicago') ||
      timeZone.includes('Los_Angeles') ||
      timeZone.includes('Denver') ||
      timeZone.includes('Phoenix') ||
      timeZone.includes('Anchorage') ||
      timeZone.includes('Honolulu')
    ) {
      return 'USD';
    }
  } catch {
    // Ignore timezone inspection errors
  }
  return null;
}

/**
 * Reads any saved manual currency selection from localStorage.
 */
export function getStoredManualCurrency(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Persists user's manual currency selection in localStorage.
 */
export function saveManualCurrency(currencyCode: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, currencyCode);
  } catch {
    // LocalStorage write failed or quota exceeded
  }
}

/**
 * Clears manual currency selection, allowing auto-detection to take effect again.
 */
export function clearManualCurrency(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
}

export interface DetectionResult {
  currency: string;
  isAutoDetected: boolean;
  source: 'manual' | 'locale-region' | 'locale-language' | 'timezone' | 'default';
  detectedLocale?: string;
}

/**
 * Automatically detects the appropriate currency based on browser's locale settings.
 * Checks navigator.languages, navigator.language, Intl.Locale, and timezone.
 */
export function detectBrowserCurrency(
  supportedCurrencies: string[],
  defaultCurrency = 'USD'
): { currency: string; source: 'locale-region' | 'locale-language' | 'timezone' | 'default'; detectedLocale?: string } {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { currency: defaultCurrency, source: 'default' };
  }

  // 1. Gather all candidate locales in priority order
  const candidateLocales: string[] = [];
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    candidateLocales.push(...navigator.languages);
  }
  if (navigator.language && !candidateLocales.includes(navigator.language)) {
    candidateLocales.push(navigator.language);
  }

  // 2. Iterate through locales to match explicit region code
  for (const loc of candidateLocales) {
    const region = extractRegionFromLocale(loc);
    if (region && REGION_TO_CURRENCY[region]) {
      const mapped = REGION_TO_CURRENCY[region];
      if (supportedCurrencies.includes(mapped)) {
        return { currency: mapped, source: 'locale-region', detectedLocale: loc };
      }
    }
  }

  // 3. Try language-based fallback (e.g. 'ja' -> JPY, 'de' -> EUR, 'bn' -> BDT)
  for (const loc of candidateLocales) {
    const lang = loc.split('-')[0]?.toLowerCase();
    if (lang && LANGUAGE_TO_CURRENCY[lang]) {
      const mapped = LANGUAGE_TO_CURRENCY[lang];
      if (supportedCurrencies.includes(mapped)) {
        return { currency: mapped, source: 'locale-language', detectedLocale: loc };
      }
    }
  }

  // 4. Try browser timezone fallback
  const tzCurrency = inferCurrencyFromTimeZone();
  if (tzCurrency && supportedCurrencies.includes(tzCurrency)) {
    return { currency: tzCurrency, source: 'timezone' };
  }

  // 5. Default fallback
  return { currency: defaultCurrency, source: 'default' };
}

/**
 * Retrieves the initial currency for the app on mount:
 * - Returns manual selection if the user previously selected one in localStorage.
 * - Otherwise, automatically detects from browser locale settings.
 */
export function getInitialCurrency(
  supportedCurrencies: string[],
  defaultCurrency = 'USD'
): DetectionResult {
  // Check if manual selection exists in localStorage
  const saved = getStoredManualCurrency();
  if (saved && supportedCurrencies.includes(saved)) {
    return {
      currency: saved,
      isAutoDetected: false,
      source: 'manual'
    };
  }

  // Auto-detect using browser's locale settings
  const detected = detectBrowserCurrency(supportedCurrencies, defaultCurrency);
  return {
    currency: detected.currency,
    isAutoDetected: true,
    source: detected.source,
    detectedLocale: detected.detectedLocale
  };
}
