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
    name: 'TravelDuurDesh Editorial Team',
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
  metaTitle: 'First-Time Umrah Travel Guide | TravelDuurDesh',
  metaDescription: 'Planning your first Umrah? Explore practical travel preparation tips, packing advice, transportation considerations, accommodation planning, and useful guidance for your journey.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/umrah-travel/first-time-umrah-travel-guide',
  summary: 'A practical, respectful travel blueprint for pilgrims planning their first Umrah journey. Learn how to organize documents, choose realistic travel dates, pack essentials, plan transit between Makkah and Madinah, and avoid common travel pitfalls.',
  author: {
    name: 'TravelDuurDesh Editorial Team',
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
  metaTitle: 'What to Pack for Umrah: Complete Packing Checklist | TravelDuurDesh',
  metaDescription: 'Planning your Umrah trip? Use this practical packing checklist covering documents, clothing, personal items, electronics, travel essentials, and useful preparation tips.',
  canonicalUrl: 'https://www.travelduurdesh.com/blog/umrah-travel/what-to-pack-for-umrah',
  summary: 'Planning your Umrah trip? Use this practical packing checklist covering documents, clothing, personal items, electronics, travel essentials, and useful preparation tips.',
  author: {
    name: 'TravelDuurDesh Editorial Team',
    role: 'Editorial Team',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  publishedDate: '2026-09-13',
  lastUpdatedDate: '2026-09-13',
  readingTime: '15 min read',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=85',
    alt: 'Travel essentials prepared for an Umrah journey',
    caption: 'Practical packing essentials, travel documents, and organized baggage prepared for an Umrah journey'
  },
  tags: ['Umrah Travel', 'Umrah Packing Checklist', 'Pilgrim Travel', 'Makkah', 'Madinah', 'Travel Essentials']
};

export const BLOG_POSTS: BlogPost[] = [
  UMRAH_FIRST_TIME_ARTICLE,
  UMRAH_PACKING_ARTICLE,
  MAKKAH_ARTICLE
];
