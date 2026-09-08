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
    'Travel Duurdesh may earn a commission when you book through selected partner links. This does not affect the price you pay.',
  redirectDelayMs: 1400,
  partners: {
    booking: {
      name: 'Booking.com',
      category: 'Hotels & Stays',
      baseUrl: '#see-hotels-partner-placeholder',
      disclosure: 'Official accommodation booking partner [Placeholder]',
      defaultCommissionNote: 'Best price guarantee with free cancellation on most rooms.'
    },
    skyscanner: {
      name: 'Skyscanner',
      category: 'Flights & Travel Search',
      baseUrl: 'https://www.aviasales.com/search?marker=737968',
      disclosure: 'Global flight price comparison partner',
      defaultCommissionNote: 'Compares 1,200+ airlines and travel agents with zero extra fees.'
    },
    aviasales: {
      name: 'Aviasales / Travelpayouts',
      category: 'Flights & Travel Search',
      baseUrl: 'https://www.aviasales.com/search?marker=737968',
      marker: '737968',
      widgetScriptSrc:
        'https://tpwdg.com/content?currency=usd&trs=570661&shmarker=737968&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=&plain=true&promo_id=7879&campaign_id=100',
      disclosure: 'Official flight search & comparison partner (Powered by Aviasales)',
      defaultCommissionNote: 'Compare 1,000+ airlines and agencies with no added booking fees.'
    },
    viator: {
      name: 'Viator / Tripadvisor',
      category: 'Tours & Experiences',
      baseUrl: '#see-tours-partner-placeholder',
      disclosure: 'Handpicked day tours, museum tickets, and outdoor excursions [Placeholder]',
      defaultCommissionNote: 'Reserve now & pay later with 24-hour free cancellation.'
    },
    expedia: {
      name: 'Expedia Packages',
      category: 'Holiday Packages',
      baseUrl: '#see-packages-partner-placeholder',
      disclosure: 'Combined flight + hotel package savings partner [Placeholder]',
      defaultCommissionNote: 'Save up to $450 when bundling flights, hotels, and car rentals.'
    },
    getyourguide: {
      name: 'GetYourGuide',
      category: 'Local Activities',
      baseUrl: '#see-activities-partner-placeholder',
      disclosure: 'Top-rated guided tours and skip-the-line attraction tickets [Placeholder]',
      defaultCommissionNote: 'Mobile ticketing with instant confirmation & multi-language guides.'
    },
    agoda: {
      name: 'Agoda Asia',
      category: 'Asia Stays & Resorts',
      baseUrl: '#see-agoda-partner-placeholder',
      disclosure: 'Specialized Southeast Asia resort and villa partner [Placeholder]',
      defaultCommissionNote: 'VIP member rates and instant cashback points.'
    },
    economybookings: {
      name: 'EconomyBookings',
      category: 'Car Rental & Airport Transfers',
      baseUrl: 'https://c10.travelpayouts.com/click?shmarker=737968&promo_id=2020&source_type=link&type=click',
      marker: '737968',
      campaignId: '10',
      promoId: '2082',
      widgetScriptSrc:
        'https://tpwdg.com/content?trs=570661&shmarker=737968&locale=en&width=100&height=30&powered_by=true&campaign_id=10&promo_id=2082',
      disclosure: 'Official car rental search partner (Powered by EconomyBookings / Travelpayouts)',
      defaultCommissionNote: 'Compare 800+ car rental suppliers across 20,000 locations worldwide.'
    }
  },
  
  // Category-level fallback affiliate routing
  categoryLinks: {
    flights: 'https://www.aviasales.com/search?marker=737968',
    carRental: 'https://c10.travelpayouts.com/click?shmarker=737968&promo_id=2020&source_type=link&type=click',
    hotels: '#see-hotels-page-placeholder',
    packages: '#see-packages-page-placeholder',
    experiences: '#see-experiences-page-placeholder'
  }
};

/**
 * Builds an affiliate partner URL for any destination, deal, or search query.
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
  }
): string {
  if (partnerKey === 'aviasales' || partnerKey === 'skyscanner' || params?.category === 'flights') {
    const base = 'https://www.aviasales.com/search?marker=737968';
    if (params?.destination) {
      return `${base}&destination=${encodeURIComponent(params.destination)}`;
    }
    return base;
  }
  return `#partner-booking-${partnerKey}-placeholder`;
}
