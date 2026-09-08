/**
 * Airalo & Travelpayouts eSIM Affiliate Deep-Link & URL Generator
 * Affiliate Partner ID / Marker: 737968
 * Campaign ID: 541 (Airalo) | Promo ID: 8588 | TRS: 570661
 */

export const AIRALO_AFFILIATE_MARKER = '737968';
export const AIRALO_CAMPAIGN_ID = '541';
export const AIRALO_PROMO_ID = '8588';
export const AIRALO_TRS = '570661';

export const TRAVELPAYOUTS_ESIM_SCRIPT_SRC =
  'https://tpwdg.com/content?trs=570661&shmarker=737968&locale=en&powered_by=true&color_button=%2332a8dd&color_focused=%23f2685f&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=0&plain=false&no_labels=&promo_id=8588&campaign_id=541';

export interface EsimDestination {
  id: string;
  name: string;
  flag: string;
  countryCode: string;
  slug: string;
  network: string;
  startingData: string;
  startingPriceUSD: number;
  highlight: string;
}

export const POPULAR_ESIM_DESTINATIONS: EsimDestination[] = [
  {
    id: 'saudi',
    name: 'Saudi Arabia (Umrah & Hajj)',
    flag: '🇸🇦',
    countryCode: 'SA',
    slug: 'saudi-arabia-esim',
    network: 'STC / Mobily 5G/4G',
    startingData: '1 GB – 20 GB',
    startingPriceUSD: 5.0,
    highlight: 'Essential for Nusuk app & Haramain connectivity'
  },
  {
    id: 'turkey',
    name: 'Turkey (Istanbul & Anatolia)',
    flag: '🇹🇷',
    countryCode: 'TR',
    slug: 'turkey-esim',
    network: 'Turkcell / Vodafone 4G',
    startingData: '1 GB – 20 GB',
    startingPriceUSD: 4.5,
    highlight: 'Instant activation across Istanbul & Cappadocia'
  },
  {
    id: 'uae',
    name: 'United Arab Emirates (Dubai)',
    flag: '🇦🇪',
    countryCode: 'AE',
    slug: 'united-arab-emirates-esim',
    network: 'Etisalat / du 5G',
    startingData: '1 GB – 10 GB',
    startingPriceUSD: 8.5,
    highlight: 'Fast high-speed data for Dubai & Abu Dhabi'
  },
  {
    id: 'uk',
    name: 'United Kingdom (London)',
    flag: '🇬🇧',
    countryCode: 'GB',
    slug: 'united-kingdom-esim',
    network: 'O2 / Three UK 5G',
    startingData: '1 GB – 20 GB',
    startingPriceUSD: 5.0,
    highlight: 'London Underground & UK-wide high speed'
  },
  {
    id: 'europe',
    name: 'Europe Regional (39 Countries)',
    flag: '🇪🇺',
    countryCode: 'EU',
    slug: 'europe-esim',
    network: 'Multi-Network 4G/5G',
    startingData: '1 GB – 100 GB',
    startingPriceUSD: 5.0,
    highlight: 'Cross-border coverage across France, Spain, Italy & more'
  },
  {
    id: 'malaysia',
    name: 'Malaysia (KL & Penang)',
    flag: '🇲🇾',
    countryCode: 'MY',
    slug: 'malaysia-esim',
    network: 'Celcom / Digi 4G/5G',
    startingData: '1 GB – 20 GB',
    startingPriceUSD: 4.5,
    highlight: 'Seamless coverage for Kuala Lumpur & islands'
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    countryCode: 'US',
    slug: 'united-states-esim',
    network: 'T-Mobile / AT&T 5G',
    startingData: '1 GB – 20 GB',
    startingPriceUSD: 4.5,
    highlight: 'Coast-to-coast nationwide 5G connectivity'
  },
  {
    id: 'global',
    name: 'Discover Global (130+ Countries)',
    flag: '🌐',
    countryCode: 'GLOBAL',
    slug: 'global-esim',
    network: 'Worldwide Tier-1 Partners',
    startingData: '1 GB – 20 GB',
    startingPriceUSD: 9.0,
    highlight: 'Single eSIM profile valid in 130+ nations'
  }
];

/**
 * Builds the official Airalo affiliate redirect URL via Travelpayouts
 */
export function buildAiraloUrl(destinationSlug?: string): string {
  const targetPath = destinationSlug ? `/${destinationSlug}` : '';
  const fullAiraloUrl = `https://www.airalo.com${targetPath}`;

  return `https://tp.media/r?p=${AIRALO_PROMO_ID}&marker=${AIRALO_AFFILIATE_MARKER}&trs=${AIRALO_TRS}&u=${encodeURIComponent(
    fullAiraloUrl
  )}`;
}
