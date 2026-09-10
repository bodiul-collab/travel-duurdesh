export interface RouteSEOConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonLd?: object[];
}

export const BASE_URL = 'https://travelduurdesh.com';
export const DEFAULT_OG_IMAGE = 'https://travelduurdesh.com/og-image.jpg';

// Common Organization Schema
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Travel DuurDesh',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  email: 'contact@travelduurdesh.com',
  description: 'Global travel companion, dedicated Umrah pilgrimage guides, flight and hotel comparison, authentic halal culinary directory, and interactive trip utilities.'
};

// Common WebSite Schema
export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Travel DuurDesh',
  url: BASE_URL,
  inLanguage: 'en',
  publisher: {
    '@id': `${BASE_URL}/#organization`
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/#destinations`,
    'query-input': 'required name=search_term_string'
  }
};

export const SEO_PAGES: Record<string, RouteSEOConfig> = {
  home: {
    title: 'Travel DuurDesh | Global Travel, Umrah Pilgrims, Flights, Hotels & Halal Food Guides',
    description: 'Explore global destinations, step-by-step Umrah pilgrimage guidance, compare real-time flight and hotel deals, discover authentic halal food, and use free travel tools with Travel DuurDesh.',
    canonicalUrl: `${BASE_URL}/`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [WEBSITE_SCHEMA, ORGANIZATION_SCHEMA]
  },
  flights: {
    title: 'Compare Global Flights & Umrah Airfares | Travel DuurDesh',
    description: 'Search and compare real-time airfares across 1,000+ airlines, low-cost carriers, and specialized Umrah pilgrimage routes to Jeddah and Madinah with Aviasales integration.',
    canonicalUrl: `${BASE_URL}/flights`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Flights & Airfares', item: `${BASE_URL}/flights` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Global Flights & Airfare Search',
        url: `${BASE_URL}/flights`,
        description: 'Comprehensive flight comparison engine covering domestic, international, and pilgrim routes worldwide.'
      }
    ]
  },
  hotels: {
    title: 'Find the Best Hotels Worldwide & Haram Stays | Travel DuurDesh',
    description: 'Discover verified accommodations steps from Masjid al-Haram in Makkah, Al-Masjid an-Nabawi in Madinah, and top hotels across Dubai, Istanbul, London, Kuala Lumpur, and Dhaka.',
    canonicalUrl: `${BASE_URL}/hotels`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Hotels', item: `${BASE_URL}/hotels` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Worldwide Hotel & Accommodation Directory',
        url: `${BASE_URL}/hotels`,
        description: 'Vetted hotels, family suites, luxury high-rises, and budget pilgrim stays within walking distance of sacred mosques.'
      }
    ]
  },
  umrah: {
    title: 'Complete Umrah Guide for Pilgrims | Step-by-Step Rites & Travel Logistics | Travel DuurDesh',
    description: 'Comprehensive, authentic step-by-step guide to performing Umrah in Makkah and visiting Madinah. Includes Ihram rules, Tawaf, Sa’i, Nusuk app permits, Ziyarat, and pilgrim budget planning.',
    canonicalUrl: `${BASE_URL}/umrah`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Umrah Pilgrims Guide', item: `${BASE_URL}/umrah` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Complete Umrah Guide for Pilgrims — Step-by-Step Rites & Travel Planning',
        description: 'Comprehensive pilgrim handbook covering spiritual preparation, Ihram, Tawaf, Sa’i, Tahallul, Haramain High-Speed Train, and Madinah visitation.',
        author: { '@type': 'Organization', name: 'Travel DuurDesh Editorial Team' },
        publisher: { '@id': `${BASE_URL}/#organization` },
        mainEntityOfPage: `${BASE_URL}/umrah`
      }
    ]
  },
  food: {
    title: 'Global Halal Food & Culinary Travel Guide | Travel DuurDesh',
    description: 'Discover authentic halal cuisine and street food traditions across Makkah, Madinah, Dubai, Istanbul, Kuala Lumpur, and Dhaka with verified dining tips and pilgrim nutrition advice.',
    canonicalUrl: `${BASE_URL}/food`,
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Food & Travel', item: `${BASE_URL}/food` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Global Halal Food & Culinary Travel Experiences',
        description: 'Curated guide to authentic street food, traditional dining etiquette, and wholesome pilgrim meals worldwide.',
        author: { '@type': 'Organization', name: 'Travel DuurDesh Editorial Team' },
        publisher: { '@id': `${BASE_URL}/#organization` },
        mainEntityOfPage: `${BASE_URL}/food`
      }
    ]
  },
  tools: {
    title: 'Free Travel Tools: Currency Converter, Budget Predictor & Visa Checker | Travel DuurDesh',
    description: 'Interactive travel tools: real-time foreign currency converter, itemized Umrah & vacation budget predictor, visa requirement checker, packing checklist, and Airalo eSIM data plans.',
    canonicalUrl: `${BASE_URL}/tools`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Travel Tools', item: `${BASE_URL}/tools` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Travel DuurDesh Smart Trip Utilities',
        applicationCategory: 'TravelApplication',
        operatingSystem: 'All',
        url: `${BASE_URL}/tools`,
        description: 'Live currency exchange rates, trip budget calculator, seasonal weather forecasts, visa information, and packing checklists.'
      }
    ]
  },
  destinations: {
    title: 'Travel Destination Guides: Countries & Iconic Cities | Travel DuurDesh',
    description: 'In-depth travel guides for Bangladesh, Malaysia, Turkey, USA, UK, Makkah, AlUla, Dubai, Istanbul, New York, London, Kuala Lumpur, and Dhaka with itineraries, transit, and local tips.',
    canonicalUrl: `${BASE_URL}/destinations`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` }
        ]
      }
    ]
  },
  about: {
    title: 'About Travel DuurDesh | Our Mission, Editorial Standards & Global Team',
    description: 'Learn about Travel DuurDesh: our mission to simplify international travel and Umrah pilgrimages, our ethical editorial standards, affiliate transparency, and traveler commitment.',
    canonicalUrl: `${BASE_URL}/about`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Travel DuurDesh',
        url: `${BASE_URL}/about`,
        description: 'Detailed overview of Travel DuurDesh, our founding vision, travel philosophy, and editorial independence.'
      }
    ]
  },
  contact: {
    title: 'Contact Travel DuurDesh | Traveler Support & Editorial Inquiries',
    description: 'Get in touch with Travel DuurDesh. Reach our team via contact@travelduurdesh.com for travel inquiries, guide suggestions, partnership questions, and support.',
    canonicalUrl: `${BASE_URL}/contact`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${BASE_URL}/contact` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Travel DuurDesh',
        url: `${BASE_URL}/contact`,
        mainEntity: {
          '@type': 'Organization',
          name: 'Travel DuurDesh',
          email: 'contact@travelduurdesh.com',
          url: BASE_URL
        }
      }
    ]
  },
  privacy: {
    title: 'Privacy Policy | Travel DuurDesh',
    description: 'Official Privacy Policy for Travel DuurDesh. Learn how we respect and protect your data, privacy rights, cookie usage, and security across travelduurdesh.com.',
    canonicalUrl: `${BASE_URL}/privacy`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${BASE_URL}/privacy` }
        ]
      }
    ]
  },
  terms: {
    title: 'Terms and Conditions | Travel DuurDesh',
    description: 'Read the Terms and Conditions for Travel DuurDesh. Outlines platform usage rules, third-party affiliate relationships (Aviasales, Booking.com, Airalo), and user guidelines.',
    canonicalUrl: `${BASE_URL}/terms`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: `${BASE_URL}/terms` }
        ]
      }
    ]
  },
  '404': {
    title: 'Page Not Found (404) | Travel DuurDesh',
    description: 'The requested page could not be found on Travel DuurDesh. Return to our homepage or explore our destination guides, flights, hotels, and Umrah resources.',
    canonicalUrl: `${BASE_URL}/`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE
  }
};

// Destination Sub-guide SEO metadata
export const DESTINATION_SEO: Record<string, RouteSEOConfig> = {
  makkah: {
    title: 'Makkah Travel Guide: Sacred Umrah & City Guide | Travel DuurDesh',
    description: 'In-depth guide to Makkah al-Mukarramah: Masjid al-Haram, Holy Kaaba, Clock Tower hotels, Zamzam wells, Tawaf etiquette, budget dining, and Jabal al-Nour excursions.',
    canonicalUrl: `${BASE_URL}/destinations/makkah`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Makkah', item: `${BASE_URL}/destinations/makkah` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Makkah',
        description: 'The holiest city in Islam, centered around the revered Holy Kaaba and Masjid al-Haram.',
        touristType: ['Pilgrimage', 'Religious', 'Cultural'],
        geo: { '@type': 'GeoCoordinates', latitude: 21.3891, longitude: 39.8579 }
      }
    ]
  },
  madinah: {
    title: 'Madinah Travel Guide: Al-Masjid an-Nabawi & Ziyarat | Travel DuurDesh',
    description: 'Comprehensive guide to visiting Madinah: Al-Masjid an-Nabawi, Rawdah ash-Sharifah Nusuk permits, Masjid Quba, Mount Uhud, and Ajwa date markets.',
    canonicalUrl: `${BASE_URL}/destinations/madinah`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Madinah', item: `${BASE_URL}/destinations/madinah` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Madinah',
        description: 'The city of peace and serenity, home to Al-Masjid an-Nabawi and the Prophet’s tomb.',
        touristType: ['Pilgrimage', 'Religious', 'Cultural'],
        geo: { '@type': 'GeoCoordinates', latitude: 24.5247, longitude: 39.5692 }
      }
    ]
  },
  alula: {
    title: 'AlUla Travel Guide: Hegra UNESCO Tombs & Living Museum | Travel DuurDesh',
    description: 'Explore AlUla, Saudi Arabia’s ancient archaeological marvel. Guide to Hegra Nabataean tombs, mirrored Maraya concert hall, Elephant Rock, and oasis trails.',
    canonicalUrl: `${BASE_URL}/destinations/alula`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'AlUla', item: `${BASE_URL}/destinations/alula` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'AlUla',
        description: 'Archaeological wonder of Arabia featuring UNESCO World Heritage site Hegra.',
        touristType: ['Archaeological', 'Heritage', 'Desert Adventure'],
        geo: { '@type': 'GeoCoordinates', latitude: 26.6167, longitude: 37.9167 }
      }
    ]
  },
  dubai: {
    title: 'Dubai City Travel Guide: Burj Khalifa, Souks & Halal Dining | Travel DuurDesh',
    description: 'Comprehensive Dubai visitor guide: Burj Khalifa, Palm Jumeirah, Dubai Mall, traditional gold & spice souks, desert safaris, and halal dining spots.',
    canonicalUrl: `${BASE_URL}/destinations/dubai`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Dubai', item: `${BASE_URL}/destinations/dubai` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Dubai',
        description: 'Modern metropolis of UAE celebrated for architectural marvels, luxury shopping, and family entertainment.',
        touristType: ['City Break', 'Luxury', 'Shopping', 'Family'],
        geo: { '@type': 'GeoCoordinates', latitude: 25.2048, longitude: 55.2708 }
      }
    ]
  },
  istanbul: {
    title: 'Istanbul City Guide: Hagia Sophia, Grand Bazaar & Bosphorus | Travel DuurDesh',
    description: 'Discover Istanbul where East meets West: Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar, Bosphorus ferry cruises, and authentic Turkish cuisine.',
    canonicalUrl: `${BASE_URL}/destinations/istanbul`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Istanbul', item: `${BASE_URL}/destinations/istanbul` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Istanbul',
        description: 'Historic transcontinental city spanning Europe and Asia with millennia of rich heritage.',
        touristType: ['Historical', 'Cultural', 'Culinary'],
        geo: { '@type': 'GeoCoordinates', latitude: 41.0082, longitude: 28.9784 }
      }
    ]
  },
  newyork: {
    title: 'New York City Travel Guide: Manhattan, Halal Food & Transit | Travel DuurDesh',
    description: 'Explore NYC like a pro: Central Park, Times Square, Brooklyn Bridge, Statue of Liberty, authentic halal street carts, subway transit, and neighborhood guides.',
    canonicalUrl: `${BASE_URL}/destinations/new-york`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'New York City', item: `${BASE_URL}/destinations/new-york` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'New York City',
        description: 'The premier global cultural and financial capital of the United States.',
        touristType: ['Urban Culture', 'Sightseeing', 'Arts & Dining'],
        geo: { '@type': 'GeoCoordinates', latitude: 40.7128, longitude: -74.006 }
      }
    ]
  },
  london: {
    title: 'London City Travel Guide: Iconic Sights, Halal Dining & Museums | Travel DuurDesh',
    description: 'Complete London city guide: Big Ben, Tower of London, free national museums, West End theatre, Halal dining across central London, and Tube navigation.',
    canonicalUrl: `${BASE_URL}/destinations/london`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'London', item: `${BASE_URL}/destinations/london` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'London',
        description: 'Historic British capital famed for its royal landmarks, world-class museums, and diverse culinary scene.',
        touristType: ['Historical', 'Cultural', 'City Break'],
        geo: { '@type': 'GeoCoordinates', latitude: 51.5074, longitude: -0.1278 }
      }
    ]
  },
  kualalumpur: {
    title: 'Kuala Lumpur Travel Guide: Petronas Towers & Halal Street Food | Travel DuurDesh',
    description: 'Discover Kuala Lumpur, Malaysia: Petronas Twin Towers, Batu Caves, Jalan Alor night markets, Bukit Bintang shopping, and premier Islamic tourism experiences.',
    canonicalUrl: `${BASE_URL}/destinations/kuala-lumpur`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Kuala Lumpur', item: `${BASE_URL}/destinations/kuala-lumpur` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Kuala Lumpur',
        description: 'Dynamic Southeast Asian hub combining futuristic skyscrapers with lush heritage and world-leading halal tourism.',
        touristType: ['City Break', 'Culinary', 'Halal Tourism'],
        geo: { '@type': 'GeoCoordinates', latitude: 3.139, longitude: 101.6869 }
      }
    ]
  },
  dhaka: {
    title: 'Dhaka City Travel Guide: Lalbagh Fort, Heritage & Street Food | Travel DuurDesh',
    description: 'Explore Dhaka, Bangladesh: Mughal architecture at Lalbagh Fort, Ahsan Manzil Pink Palace, Old Dhaka heritage biryani, rickshaw art, and Buriganga river views.',
    canonicalUrl: `${BASE_URL}/destinations/dhaka`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Dhaka', item: `${BASE_URL}/destinations/dhaka` }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Dhaka',
        description: 'Vibrant capital of Bangladesh celebrated for Mughal heritage, river commerce, and century-old cuisine.',
        touristType: ['Cultural', 'Heritage', 'Culinary'],
        geo: { '@type': 'GeoCoordinates', latitude: 23.8103, longitude: 90.4125 }
      }
    ]
  },
  bangladesh: {
    title: 'Bangladesh Country Travel Guide: Cox’s Bazar, Sundarbans & Sylhet | Travel DuurDesh',
    description: 'Comprehensive travel guide to Bangladesh: Cox’s Bazar 120km sea beach, Sundarbans mangrove tiger reserve, Sylhet rolling tea gardens, and river cruises.',
    canonicalUrl: `${BASE_URL}/destinations/bangladesh`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Bangladesh', item: `${BASE_URL}/destinations/bangladesh` }
        ]
      }
    ]
  },
  malaysia: {
    title: 'Malaysia Country Travel Guide: KL, Penang, Langkawi & Borneo | Travel DuurDesh',
    description: 'Explore Malaysia: Kuala Lumpur skyline, Penang UNESCO culinary capital, Langkawi tropical beaches, Cameron Highlands tea estates, and Borneo rainforests.',
    canonicalUrl: `${BASE_URL}/destinations/malaysia`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Malaysia', item: `${BASE_URL}/destinations/malaysia` }
        ]
      }
    ]
  },
  turkey: {
    title: 'Turkey Travel Guide: Istanbul, Cappadocia, Antalya & Ephesus | Travel DuurDesh',
    description: 'Complete guide to Turkey: historic Istanbul, Cappadocia fairy chimney hot air balloons, turquoise coast Antalya, ancient Roman Ephesus, and Turkish culinary delights.',
    canonicalUrl: `${BASE_URL}/destinations/turkey`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'Turkey', item: `${BASE_URL}/destinations/turkey` }
        ]
      }
    ]
  },
  usa: {
    title: 'USA Country Travel Guide: Cities, National Parks & Coast-to-Coast | Travel DuurDesh',
    description: 'Traveler handbook for the United States: iconic cities from NYC to San Francisco, Grand Canyon and Yellowstone national parks, road trip routes, and travel tips.',
    canonicalUrl: `${BASE_URL}/destinations/usa`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'USA', item: `${BASE_URL}/destinations/usa` }
        ]
      }
    ]
  },
  uk: {
    title: 'United Kingdom Travel Guide: London, Edinburgh, Cotswolds & Beyond | Travel DuurDesh',
    description: 'Complete UK travel guide: historic London landmarks, Edinburgh castle & Scottish Highlands, pastoral Cotswolds villages, rail transit, and cultural tips.',
    canonicalUrl: `${BASE_URL}/destinations/uk`,
    ogType: 'article',
    ogImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    jsonLd: [
      ORGANIZATION_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Destinations', item: `${BASE_URL}/destinations` },
          { '@type': 'ListItem', position: 3, name: 'United Kingdom', item: `${BASE_URL}/destinations/uk` }
        ]
      }
    ]
  }
};

/**
 * Applies SEO metadata to the DOM dynamically
 */
export function applySEO(config: RouteSEOConfig) {
  if (typeof document === 'undefined') return;

  // 1. Page Title
  document.title = config.title;

  // 2. Meta Description
  let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = config.description;

  // 3. Canonical Link Tag
  let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = config.canonicalUrl;

  // 4. Open Graph Tags
  const setMeta = (property: string, content: string, isName = false) => {
    const attr = isName ? 'name' : 'property';
    let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, property);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  setMeta('og:title', config.title);
  setMeta('og:description', config.description);
  setMeta('og:url', config.canonicalUrl);
  setMeta('og:type', config.ogType || 'website');
  setMeta('og:site_name', 'Travel DuurDesh');
  setMeta('og:image', config.ogImage || DEFAULT_OG_IMAGE);

  // 5. Twitter Card Tags
  setMeta('twitter:card', 'summary_large_image', true);
  setMeta('twitter:title', config.title, true);
  setMeta('twitter:description', config.description, true);
  setMeta('twitter:image', config.ogImage || DEFAULT_OG_IMAGE, true);

  // 6. Structured Data / JSON-LD
  let scriptEl = document.querySelector<HTMLScriptElement>('#schema-structured-data');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'schema-structured-data';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  if (config.jsonLd && config.jsonLd.length > 0) {
    scriptEl.textContent = JSON.stringify(
      config.jsonLd.length === 1 ? config.jsonLd[0] : { '@context': 'https://schema.org', '@graph': config.jsonLd }
    );
  } else {
    scriptEl.textContent = JSON.stringify(ORGANIZATION_SCHEMA);
  }
}
