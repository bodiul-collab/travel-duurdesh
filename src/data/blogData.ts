import umrahPackingChecklistImg from '../assets/images/umrah_packing_checklist_1789949815620.jpg';

export interface BlogPost {
  slug: string;
  categorySlug: 'travel-guides' | 'food-culture' | 'umrah-travel' | 'travel-tips';
  categoryName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  summary: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedDate: string; // ISO format e.g. 2026-09-13
  lastUpdatedDate: string;
  readingTime: string;
  heroImage: {
    url: string;
    alt: string;
    caption?: string;
  };
  tags: string[];
}

export const BLOG_CATEGORIES = [
  {
    id: 'travel-guides',
    name: 'Travel Guides',
    slug: 'travel-guides',
    description: 'Comprehensive, tested city and regional itineraries with practical logistical guidance.'
  },
  {
    id: 'food-culture',
    name: 'Food & Culture',
    slug: 'food-culture',
    description: 'Authentic culinary discoveries, halal dining recommendations, and neighborhood food walks.'
  },
  {
    id: 'umrah-travel',
    name: 'Umrah Travel',
    slug: 'umrah-travel',
    description: 'Respectful, step-by-step pilgrim planning, Haram transit blueprints, and sacred site ziyarat.'
  },
  {
    id: 'travel-tips',
    name: 'Travel Tips',
    slug: 'travel-tips',
    description: 'Actionable packing checklists, foreign currency advice, eSIM connectivity, and smart airfare strategies.'
  }
] as const;

export type BlogCategorySlug = typeof BLOG_CATEGORIES[number]['slug'];

export const MAKKAH_ARTICLE: BlogPost = {
  slug: 'makkah-travel-guide-first-time-visitors',
  categorySlug: 'travel-guides',
  categoryName: 'Travel Guides',
  title: 'Makkah Travel Guide for First-Time Visitors',
  metaTitle: 'Makkah Travel Guide for First-Time Visitors | Travel DuurDesh',
  metaDescription: 'Complete, respectful first-timer guide to visiting Makkah: Haram navigation, airport transit from Jeddah, hotel selection, halal dining, packing, and FAQs.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/travel-guides/makkah-travel-guide-first-time-visitors',
  summary: 'A comprehensive, practical, and respectful travel blueprint for first-time visitors to Makkah. Learn how to plan your journey, navigate transit from Jeddah, select accommodations near Masjid al-Haram, explore local dining, and prepare mentally and physically.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-09-13',
  lastUpdatedDate: '2026-09-13',
  readingTime: '12 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1600&q=85',
    alt: 'The sacred city of Makkah with the Grand Mosque Masjid al-Haram and Abraj Al Bait architecture',
    caption: 'Masjid al-Haram courtyard and surrounding holy sanctuary architecture in Makkah'
  },
  tags: ['Makkah', 'First-Time Visitors', 'Umrah Travel', 'Travel Guides', 'Saudi Arabia', 'Masjid al-Haram']
};

export const UMRAH_FIRST_TIME_ARTICLE: BlogPost = {
  slug: 'first-time-umrah-travel-guide',
  categorySlug: 'umrah-travel',
  categoryName: 'Umrah Travel',
  title: 'First-Time Umrah Travel Guide: What Every Traveler Should Know',
  metaTitle: 'First-Time Umrah Travel Guide | Travel DuurDesh',
  metaDescription: 'Planning your first Umrah? Explore practical travel preparation tips, packing advice, transportation considerations, accommodation planning, and useful guidance for your journey.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/umrah-travel/first-time-umrah-travel-guide',
  summary: 'A practical, respectful travel blueprint for pilgrims planning their first Umrah journey. Learn how to organize documents, choose realistic travel dates, pack essentials, plan transit between Makkah and Madinah, and avoid common travel pitfalls.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-09-13',
  lastUpdatedDate: '2026-09-13',
  readingTime: '14 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85',
    alt: 'Travel preparation essentials for a first-time Umrah journey',
    caption: 'Pilgrim travelers planning their journey to the holy sanctuaries of Makkah and Madinah'
  },
  tags: ['Umrah Travel', 'First-Time Umrah', 'Pilgrim Planning', 'Makkah', 'Madinah', 'Travel Preparation']
};

export const UMRAH_PACKING_ARTICLE: BlogPost = {
  slug: 'what-to-pack-for-umrah',
  categorySlug: 'umrah-travel',
  categoryName: 'Umrah Travel',
  title: 'What to Pack for Umrah: A Practical Packing Checklist',
  metaTitle: 'What to Pack for Umrah: Complete Packing Checklist | Travel DuurDesh',
  metaDescription: 'Planning your Umrah trip? Use this practical packing checklist covering documents, clothing, personal items, electronics, travel essentials, and useful preparation tips.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/umrah-travel/what-to-pack-for-umrah',
  summary: 'Planning your Umrah trip? Use this practical packing checklist covering documents, clothing, personal items, electronics, travel essentials, and useful preparation tips.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-09-13',
  lastUpdatedDate: '2026-09-13',
  readingTime: '15 min read',
  heroImage: {
    url: umrahPackingChecklistImg,
    alt: 'Comprehensive Umrah packing checklist and travel essentials flat lay',
    caption: 'Essential packing checklist items for Umrah including Ihram garments, travel documents, prayer items, and toiletries'
  },
  tags: ['Umrah Travel', 'Umrah Packing Checklist', 'Pilgrim Travel', 'Makkah', 'Madinah', 'Travel Essentials']
};

export const MADINAH_ARTICLE: BlogPost = {
  slug: 'madinah-travel-guide',
  categorySlug: 'travel-guides',
  categoryName: 'Travel Guides',
  title: 'Madinah Travel Guide for First-Time Visitors',
  metaTitle: 'Madinah Travel Guide for First-Time Visitors | Travel DuurDesh',
  metaDescription: 'Planning a visit to Madinah? Explore practical travel planning tips, transportation, accommodation considerations, food, local etiquette, and useful advice for first-time visitors.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/travel-guides/madinah-travel-guide',
  summary: 'A comprehensive, practical, and respectful travel guide for first-time visitors to Madinah. Discover essential preparation tips, transit from Makkah and airports, accommodation areas, local dining, and respectful etiquette.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-09-28',
  lastUpdatedDate: '2026-09-28',
  readingTime: '15 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1600&q=85',
    alt: 'Madinah travel destination view for visitors',
    caption: 'The serene courtyard and minarets surrounding Al-Masjid an-Nabawi in Madinah'
  },
  tags: ['Madinah', 'First-Time Visitors', 'Travel Guides', 'Saudi Arabia', 'Al-Masjid an-Nabawi', 'Umrah Travel']
};

export const ALULA_ARTICLE: BlogPost = {
  slug: 'alula-travel-guide',
  categorySlug: 'travel-guides',
  categoryName: 'Travel Guides',
  title: 'AlUla Travel Guide: What Travelers Should Know',
  metaTitle: 'AlUla Travel Guide: What Travelers Should Know | Travel DuurDesh',
  metaDescription: 'Plan your AlUla trip with this practical travel guide covering ancient heritage, dramatic desert landscapes, trip planning, local culture, and responsible travel in Saudi Arabia.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/travel-guides/alula-travel-guide',
  summary: 'Plan your AlUla trip with this practical travel guide covering ancient heritage, dramatic desert landscapes, trip planning, local culture, and responsible travel in Saudi Arabia.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-10-14',
  lastUpdatedDate: '2026-10-14',
  readingTime: '16 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85',
    alt: 'Dramatic sandstone desert landscape and ancient rock-cut tombs in AlUla, Saudi Arabia',
    caption: 'Monumental sandstone massifs and ancient Nabataean rock-carved tombs in the desert landscape of AlUla'
  },
  tags: ['AlUla', 'Hegra', 'Saudi Arabia', 'Travel Guides', 'Heritage', 'Desert Travel', 'Elephant Rock']
};

export const DUBAI_ARTICLE: BlogPost = {
  slug: 'dubai-travel-guide',
  categorySlug: 'travel-guides',
  categoryName: 'Travel Guides',
  title: 'Dubai Travel Guide: Best Places to Visit and How to Plan Your Trip',
  metaTitle: 'Dubai Travel Guide: Best Places to Visit and How to Plan Your Trip | Travel DuurDesh',
  metaDescription: 'Plan your Dubai trip with this practical travel guide covering famous attractions, historic neighborhoods, local culture, transportation, budgeting, and itinerary tips.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/travel-guides/dubai-travel-guide',
  summary: 'Plan your Dubai trip with this practical travel guide covering famous attractions, historic neighborhoods, local culture, transportation, budgeting, and itinerary tips.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-10-14',
  lastUpdatedDate: '2026-10-14',
  readingTime: '17 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Burj Khalifa soaring above Downtown Dubai skyline and the Dubai Fountain lake',
    caption: 'Downtown Dubai skyline anchored by the iconic Burj Khalifa, lake promenades, and contemporary architecture'
  },
  tags: ['Dubai', 'UAE', 'Travel Guides', 'Burj Khalifa', 'Dubai Marina', 'Old Dubai', 'Desert Safari']
};

export const KUALA_LUMPUR_ARTICLE: BlogPost = {
  slug: 'kuala-lumpur-travel-guide',
  categorySlug: 'travel-guides',
  categoryName: 'Travel Guides',
  title: 'Kuala Lumpur Travel Guide: Best Places to Visit and How to Plan Your Trip',
  metaTitle: 'Kuala Lumpur Travel Guide: Best Places to Visit and How to Plan Your Trip | Travel DuurDesh',
  metaDescription: 'Plan your Kuala Lumpur trip with this practical travel guide covering famous landmarks, cultural neighborhoods, Malaysian food, transportation, budgeting, and itinerary tips.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/travel-guides/kuala-lumpur-travel-guide',
  summary: 'Plan your Kuala Lumpur trip with this practical travel guide covering famous landmarks, cultural neighborhoods, Malaysian food, transportation, budgeting, and itinerary tips.',
  author: {
    name: 'Travel DuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-10-14',
  lastUpdatedDate: '2026-10-14',
  readingTime: '18 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=85',
    alt: 'Petronas Twin Towers illuminated against dusk skyline with tropical park greenery in Kuala Lumpur',
    caption: 'The iconic Petronas Twin Towers soaring above Kuala Lumpur City Centre and illuminated evening skylines'
  },
  tags: ['Kuala Lumpur', 'Malaysia', 'Travel Guides', 'Petronas Towers', 'Batu Caves', 'Halal Food', 'Bukit Bintang']
};

export const BLOG_POSTS: BlogPost[] = [
  UMRAH_FIRST_TIME_ARTICLE,
  UMRAH_PACKING_ARTICLE,
  MAKKAH_ARTICLE,
  MADINAH_ARTICLE,
  ALULA_ARTICLE,
  DUBAI_ARTICLE,
  KUALA_LUMPUR_ARTICLE
];


