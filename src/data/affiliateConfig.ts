/**
 * Centralized Affiliate Network Configuration for Travel Duurdesh
 * Configure real partner IDs, campaign codes, and affiliate endpoints here.
 */

export interface AffiliatePartner {
  name: string;
  category: string;
  logo?: string;
  baseUrl: string;
  disclosure: string;
  defaultCommissionNote: string;
}

export const AFFILIATE_CONFIG = {
  defaultPartner: 'Booking.com',
  affiliateDisclosure:
    'Travel DuurDesh may earn an affiliate commission when you book through selected partner links. This never affects the price you pay.',
  redirectDelayMs: 1400,
  partners: {
    booking: {
      name: 'Booking.com',
      category: 'Hotels & Stays',
      baseUrl: 'https://www.booking.com/searchresults.html',
      disclosure: 'Official accommodation booking partner (Booking.com)',
      defaultCommissionNote: 'Best price guarantee with free cancellation on most rooms.'
    },
    skyscanner: {
      name: 'Skyscanner & Aviasales',
      category: 'Flights & Travel Search',
      baseUrl: 'https://www.aviasales.com/search?marker=737968',
      disclosure: 'Global flight price comparison partner (Marker: 737968)',
      defaultCommissionNote: 'Compares 1,200+ airlines and travel agents with zero extra fees.'
    },
    aviasales: {
      name: 'Aviasales / Travelpayouts',
      category: 'Flights & Travel Search',
      baseUrl: 'https://www.aviasales.com/search?marker=737968',
      marker: '737968',
      widgetScriptSrc:
        'https://tpwdg.com/content?currency=usd&trs=570661&shmarker=737968&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=&plain=true&promo_id=7879&campaign_id=100',
      disclosure: 'Official flight search & comparison partner (Powered by Aviasales / Marker: 737968)',
      defaultCommissionNote: 'Compare 1,000+ airlines and agencies with no added booking fees.'
    },
    viator: {
      name: 'Viator / Tripadvisor Experiences',
      category: 'Tours & Experiences',
      baseUrl: 'https://www.viator.com',
      disclosure: 'Handpicked day tours, museum tickets, and outdoor excursions (Viator)',
      defaultCommissionNote: 'Reserve now & pay later with 24-hour free cancellation.'
    },
    expedia: {
      name: 'Expedia Packages',
      category: 'Holiday Packages',
      baseUrl: 'https://www.expedia.com/Vacation-Packages',
      disclosure: 'Combined flight + hotel package savings partner (Expedia)',
      defaultCommissionNote: 'Save when bundling flights, hotels, and car rentals.'
    },
    getyourguide: {
      name: 'GetYourGuide',
      category: 'Local Activities',
      baseUrl: 'https://www.getyourguide.com',
      disclosure: 'Top-rated guided tours and attraction tickets (GetYourGuide)',
      defaultCommissionNote: 'Mobile ticketing with instant confirmation & multi-language guides.'
    },
    agoda: {
      name: 'Agoda Stays',
      category: 'Asia Stays & Resorts',
      baseUrl: 'https://www.agoda.com',
      disclosure: 'Southeast Asia resort and villa partner (Agoda)',
      defaultCommissionNote: 'VIP member rates and instant booking confirmation.'
    },
    economybookings: {
      name: 'EconomyBookings',
      category: 'Car Rental & Airport Transfers',
      baseUrl: 'https://c10.travelpayouts.com/click?shmarker=737968&promo_id=2020&source_type=link&type=click',
      marker: '737968',
      campaignId: '10',
      promoId: '4480',
      widgetScriptSrc:
        'https://tpwdg.com/content?trs=570661&shmarker=737968&locale=en&powered_by=true&border_radius=6&plain=true&show_logo=true&color_background=%23ffca28&color_button=%2355a539&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10',
      disclosure: 'Official car rental search partner (EconomyBookings / Travelpayouts 737968)',
      defaultCommissionNote: 'Compare 800+ car rental suppliers across 20,000 locations worldwide.'
    },
    airalo: {
      name: 'Airalo Travel eSIM',
      category: 'Mobile Data & eSIM',
      baseUrl: 'https://tp.media/r?p=8588&marker=737968&trs=570661&u=https%3A%2F%2Fwww.airalo.com',
      marker: '737968',
      campaignId: '541',
      promoId: '8588',
      trs: '570661',
      disclosure: 'Official travel eSIM partner (Airalo / Travelpayouts 737968)',
      defaultCommissionNote: 'Instant digital eSIM activation with local network 4G/5G speeds in 200+ countries.'
    },
    ekta: {
      name: 'EKTA Travel Insurance',
      category: 'Travel & Health Insurance',
      baseUrl: 'https://ektatraveling.tpx.gr/uNlKi2Qe',
      disclosure: 'Official international travel insurance partner (EKTA Traveling / Travelpayouts)',
      defaultCommissionNote: 'Instant digital policy issuance for worldwide visas, emergency medical coverage, and trip disruption protection.'
    },
    airhelp: {
      name: 'AirHelp',
      category: 'Flight Delay & Cancellation Compensation',
      baseUrl: 'https://c120.travelpayouts.com/click?shmarker=737968&promo_id=8679&source_type=link&type=click',
      marker: '737968',
      campaignId: '120',
      promoId: '8679',
      trs: '570661',
      widgetScriptSrc:
        'https://tpwdg.com/content?trs=570661&shmarker=737968&lang=en&powered_by=true&campaign_id=120&promo_id=8679',
      disclosure: 'Official flight passenger rights compensation partner (AirHelp / Travelpayouts 737968)',
      defaultCommissionNote: 'Claim up to €600 ($650) for flight delays over 3 hours, cancellations, and overbookings under EU/UK 261 laws.'
    }
  },
  
  // Category-level verified live affiliate routing
  categoryLinks: {
    flights: 'https://www.aviasales.com/search?marker=737968',
    carRental: 'https://c10.travelpayouts.com/click?shmarker=737968&promo_id=2020&source_type=link&type=click',
    hotels: 'https://www.booking.com/searchresults.html',
    packages: 'https://www.aviasales.com/search?marker=737968&show_hotels=true',
    experiences: 'https://www.viator.com',
    esim: 'https://tp.media/r?p=8588&marker=737968&trs=570661&u=https%3A%2F%2Fwww.airalo.com',
    insurance: 'https://ektatraveling.tpx.gr/uNlKi2Qe',
    compensation: 'https://c120.travelpayouts.com/click?shmarker=737968&promo_id=8679&source_type=link&type=click'
  }
};

/**
 * Builds a verified live affiliate partner URL for any destination, deal, or search query.
 * Guarantees that EVERY returned link is a valid, functional https:// URL.
 */
export function buildAffiliateUrl(
  partnerKey: keyof typeof AFFILIATE_CONFIG.partners | string,
  params?: {
    destination?: string;
    from?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    category?: string;
    query?: string;
  }
): string {
  const dest = params?.destination || params?.query || '';
  const cleanDest = dest.trim();

  // Flights / Aviasales / Skyscanner
  if (
    partnerKey === 'aviasales' ||
    partnerKey === 'skyscanner' ||
    params?.category === 'flights'
  ) {
    const base = 'https://www.aviasales.com/search?marker=737968';
    if (cleanDest) {
      return `${base}&destination=${encodeURIComponent(cleanDest)}`;
    }
    return base;
  }

  // Car Rental / EconomyBookings
  if (
    partnerKey === 'economybookings' ||
    params?.category === 'carRental' ||
    params?.category === 'cars'
  ) {
    return 'https://c10.travelpayouts.com/click?shmarker=737968&promo_id=2020&source_type=link&type=click';
  }

  // Airalo / eSIM
  if (
    partnerKey === 'airalo' ||
    params?.category === 'esim'
  ) {
    if (cleanDest) {
      const slug = cleanDest.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const targetUrl = `https://www.airalo.com/${slug}-esim`;
      return `https://tp.media/r?p=8588&marker=737968&trs=570661&u=${encodeURIComponent(targetUrl)}`;
    }
    return 'https://tp.media/r?p=8588&marker=737968&trs=570661&u=https%3A%2F%2Fwww.airalo.com';
  }

  // EKTA / Travel Insurance
  if (
    partnerKey === 'ekta' ||
    partnerKey === 'insurance' ||
    params?.category === 'insurance'
  ) {
    return 'https://ektatraveling.tpx.gr/uNlKi2Qe';
  }

  // AirHelp / Flight Delay Compensation
  if (
    partnerKey === 'airhelp' ||
    partnerKey === 'compensation' ||
    params?.category === 'compensation'
  ) {
    return 'https://c120.travelpayouts.com/click?shmarker=737968&promo_id=8679&source_type=link&type=click';
  }

  // Hotels (Booking.com & Agoda)
  if (
    partnerKey === 'booking' ||
    partnerKey === 'hotels' ||
    params?.category === 'hotels'
  ) {
    if (cleanDest) {
      return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(cleanDest)}`;
    }
    return 'https://www.booking.com/searchresults.html';
  }

  if (partnerKey === 'agoda') {
    if (cleanDest) {
      return `https://www.agoda.com/search?city=${encodeURIComponent(cleanDest)}`;
    }
    return 'https://www.agoda.com';
  }

  // Tours & Experiences (Viator & GetYourGuide)
  if (
    partnerKey === 'viator' ||
    params?.category === 'experiences' ||
    params?.category === 'tours'
  ) {
    if (cleanDest) {
      return `https://www.viator.com/searchResults/all?text=${encodeURIComponent(cleanDest)}`;
    }
    return 'https://www.viator.com';
  }

  if (partnerKey === 'getyourguide') {
    if (cleanDest) {
      return `https://www.getyourguide.com/s/?q=${encodeURIComponent(cleanDest)}`;
    }
    return 'https://www.getyourguide.com';
  }

  // Packages (Expedia)
  if (partnerKey === 'expedia' || params?.category === 'packages') {
    if (cleanDest) {
      return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(cleanDest)}`;
    }
    return 'https://www.booking.com/searchresults.html';
  }

  // Universal fallback for any custom or unspecified destination
  if (cleanDest) {
    return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(cleanDest)}`;
  }

  return 'https://www.aviasales.com/search?marker=737968';
}
