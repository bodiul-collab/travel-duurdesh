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
      baseUrl: '#see-flights-partner-placeholder',
      disclosure: 'Global flight price comparison partner [Placeholder]',
      defaultCommissionNote: 'Compares 1,200+ airlines and travel agents with zero extra fees.'
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
    }
  },
  
  // Category-level fallback affiliate routing (Internal Placeholders)
  categoryLinks: {
    flights: '#see-flights-page-placeholder',
    hotels: '#see-hotels-page-placeholder',
    packages: '#see-packages-page-placeholder',
    experiences: '#see-experiences-page-placeholder'
  }
};

/**
 * Builds an internal placeholder partner URL for any destination, deal, or search query.
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
  return `#partner-booking-${partnerKey}-placeholder`;
}
