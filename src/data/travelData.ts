import {
  Destination,
  TravelDeal,
  TravelCategory,
  TravelExperience,
  TravelArticle,
  Testimonial,
  CurrencyConfig
} from '../types';
import baliImg from '../assets/images/bali_temple_lake_1787600775047.jpg';
import swissAlpsImg from '../assets/images/swiss_alps_train_1787600789746.jpg';
import santoriniDealImg from '../assets/images/deal_santorini_greece_1787600757995.jpg';

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: 'USD', symbol: '$', rateToUSD: 1.0 },
  EUR: { code: 'EUR', symbol: '€', rateToUSD: 0.92 },
  GBP: { code: 'GBP', symbol: '£', rateToUSD: 0.79 },
  AUD: { code: 'AUD', symbol: 'A$', rateToUSD: 1.52 },
  CAD: { code: 'CAD', symbol: 'C$', rateToUSD: 1.36 },
  JPY: { code: 'JPY', symbol: '¥', rateToUSD: 154.5 },
  INR: { code: 'INR', symbol: '₹', rateToUSD: 83.5 },
  BDT: { code: 'BDT', symbol: '৳', rateToUSD: 117.5 },
  AED: { code: 'AED', symbol: 'AED', rateToUSD: 3.67 },
  SGD: { code: 'SGD', symbol: 'S$', rateToUSD: 1.35 },
  CHF: { code: 'CHF', symbol: 'CHF', rateToUSD: 0.90 }
};

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'dest-makkah',
    name: 'Makkah',
    country: 'Saudi Arabia',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 599,
    currency: 'USD',
    rating: 5.0,
    reviewCount: 9850,
    discountPercentage: 20,
    tag: 'Spiritual Sanctuary',
    description: 'The holiest city in Islam, centered around the revered Holy Kaaba and Masjid al-Haram. Welcoming millions of Umrah and Hajj pilgrims each year with exceptional spiritual atmosphere, world-class Clock Tower hotels, and 24/7 hospitality.',
    highlights: ['Masjid al-Haram Courtyards', 'Direct Kaaba Courtyard Views', 'Jabal al-Nour & Hira Cave Excursion', 'Zamzam Spring Access & Historic Ziyarat'],
    bestTimeToVisit: 'Year-round (cooler months: Nov – Feb)',
    affiliateCategory: 'hotels',
    partnerName: 'Verified Hotel Partner [Placeholder]',
    affiliateUrl: '#see-hotels-makkah-placeholder',
    coordinates: { lat: 21.3891, lng: 39.8579 }
  },
  {
    id: 'dest-madinah',
    name: 'Madinah',
    country: 'Saudi Arabia',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 489,
    currency: 'USD',
    rating: 5.0,
    reviewCount: 8420,
    discountPercentage: 15,
    tag: 'City of Peace',
    description: 'The radiant city of serenity, home to Al-Masjid an-Nabawi (the Prophet\'s Mosque), the iconic Green Dome, and Rawdah ash-Sharifah. Experience tranquil spiritual contemplation, historic date farms, and peaceful walking pathways to Mount Uhud.',
    highlights: ['Al-Masjid an-Nabawi & Rawdah ash-Sharifah', 'Masjid Quba (First Mosque in Islam)', 'Mount Uhud Historic Battle Site', 'Authentic Ajwa Date Markets'],
    bestTimeToVisit: 'Oct – Mar',
    affiliateCategory: 'hotels',
    partnerName: 'Verified Hotel Partner [Placeholder]',
    affiliateUrl: '#see-hotels-madinah-placeholder',
    coordinates: { lat: 24.5247, lng: 39.5692 }
  },
  {
    id: 'dest-alula',
    name: 'AlUla',
    country: 'Saudi Arabia',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 649,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 3740,
    discountPercentage: 15,
    tag: 'Ancient Living Museum',
    description: "The archaeological wonder of Arabia, home to UNESCO World Heritage site Hegra (Mada'in Salih), the Guinness-record mirrored Maraya concert hall, Elephant Rock, and a lush 20-kilometer date palm oasis.",
    highlights: ["Hegra (Mada'in Salih) Nabataean Tombs", 'Mirrored Maraya Hall & Ashar Valley', 'Elephant Rock (Jabal AlFil) Sunset Lounge', 'AlUla Old Town & Ancient Dadan Inscriptions'],
    bestTimeToVisit: 'Oct – Apr',
    affiliateCategory: 'hotels',
    partnerName: 'Heritage Desert Stays [Placeholder]',
    affiliateUrl: '#see-hotels-alula-placeholder',
    coordinates: { lat: 26.6167, lng: 37.9167 }
  },
  {
    id: 'dest-dubai',
    name: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 699,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 5210,
    discountPercentage: 25,
    tag: 'Luxury & Modern',
    description: 'A world-famous futuristic metropolis renowned for awe-inspiring skyline architecture, desert safari dunes, 100% halal dining across all cuisines, luxurious family resorts, and tax-free shopping destinations.',
    highlights: ['Burj Khalifa Sky Deck Observation', 'Red Dunes Desert Safari & BBQ Dinner', 'Dubai Marina Luxury Sunset Dhow Cruise', 'Museum of the Future Interactive Entry'],
    bestTimeToVisit: 'Nov – Apr',
    affiliateCategory: 'hotels',
    partnerName: 'Global Stays Partner [Placeholder]',
    affiliateUrl: '#see-hotels-dubai-placeholder',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: 'dest-istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 549,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 6890,
    discountPercentage: 20,
    tag: 'Historic Crossroads',
    description: 'Where continents converge across the glistening Bosphorus strait. Discover centuries of Ottoman and Byzantine majesty at the Blue Mosque and Hagia Sophia, savor authentic kebabs and Turkish tea, and explore the Grand Bazaar.',
    highlights: ['Hagia Sophia & Sultanahmet Blue Mosque', 'Bosphorus Sunset Sightseeing Cruise', 'Historic Grand Bazaar Spice Market', 'Topkapi Palace Ottoman Relics Tour'],
    bestTimeToVisit: 'Apr – May & Sep – Nov',
    affiliateCategory: 'packages',
    partnerName: 'Heritage Stays Partner [Placeholder]',
    affiliateUrl: '#see-hotels-istanbul-placeholder',
    coordinates: { lat: 41.0082, lng: 28.9784 }
  },
  {
    id: 'dest-kuala-lumpur',
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 429,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 4620,
    discountPercentage: 30,
    tag: 'Halal Tourism Hub',
    description: 'Southeast Asia\'s celebrated Muslim-friendly capital, famous for the sky-piercing Petronas Twin Towers, lush tropical city parks, certified halal street food markets on Jalan Alor, and incredible value luxury hotels.',
    highlights: ['Petronas Twin Towers Skybridge View', 'Batu Caves Limestone Temple Excursion', 'Jalan Alor Halal Street Food Trail', 'Bukit Bintang Modern Shopping District'],
    bestTimeToVisit: 'Dec – Feb & May – Aug',
    affiliateCategory: 'packages',
    partnerName: 'Southeast Asia Partner [Placeholder]',
    affiliateUrl: '#see-hotels-kl-placeholder',
    coordinates: { lat: 3.1390, lng: 101.6869 }
  },
  {
    id: 'dest-dhaka',
    name: 'Dhaka',
    country: 'Bangladesh',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 389,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 3180,
    discountPercentage: 25,
    tag: 'Heritage & Culture',
    description: 'The energetic "City of Mosques" along the Buriganga River. Rich in Mughal architecture like Lalbagh Fort and Ahsan Manzil, world-renowned traditional Kacchi Biryani, vibrant rickshaw art, and warm Bengali hospitality.',
    highlights: ['17th-Century Mughal Lalbagh Fort', 'Pink Palace (Ahsan Manzil) Museum', 'Old Dhaka Authentic Kacchi Biryani Trail', 'Baitul Mukarram National Mosque Visit'],
    bestTimeToVisit: 'Nov – Feb (Mild Winter)',
    affiliateCategory: 'hotels',
    partnerName: 'Regional Travel Partner [Placeholder]',
    affiliateUrl: '#see-hotels-dhaka-placeholder',
    coordinates: { lat: 23.8103, lng: 90.4125 }
  },
  {
    id: 'dest-london',
    name: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 689,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 7120,
    discountPercentage: 15,
    tag: 'Global Landmark',
    description: 'A royal and historic metropolis blending ancient landmarks with thriving modern culture. Explore Big Ben, the Tower of London, world-class free museums, and an expansive selection of certified halal dining from Edgware Road to East London.',
    highlights: ['Westminster Abbey & Big Ben Walk', 'Tower Bridge & Thames River Stroll', 'British Museum & Free Galleries', 'Edgware Road & Whitechapel Halal Dining'],
    bestTimeToVisit: 'May – Sep',
    affiliateCategory: 'flights',
    partnerName: 'UK Stays Partner [Placeholder]',
    affiliateUrl: '#see-hotels-london-placeholder',
    coordinates: { lat: 51.5074, lng: -0.1278 }
  },
  {
    id: 'dest-new-york',
    name: 'New York',
    country: 'USA',
    region: 'Americas',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80',
    startingPrice: 749,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 8190,
    discountPercentage: 20,
    tag: 'Metropolitan Wonder',
    description: 'The iconic cultural metropolis that never sleeps. Marvel at the Manhattan skyline from Top of the Rock, walk Central Park\'s shaded avenues, catch Broadway productions, and enjoy legendary New York halal food carts on every major avenue.',
    highlights: ['Central Park & Fifth Avenue Stroll', 'Top of the Rock Skyline Observation', 'Times Square & Broadway Theatres', 'Famous NYC Halal Carts & Midtown Dining'],
    bestTimeToVisit: 'Apr – Jun & Sep – Nov',
    affiliateCategory: 'flights',
    partnerName: 'US Travel Partner [Placeholder]',
    affiliateUrl: '#see-hotels-nyc-placeholder',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  }
];

export const FEATURED_DEALS: TravelDeal[] = [
  {
    id: 'deal-greece',
    title: 'Greece Aegean Escape',
    destination: 'Santorini & Mykonos',
    country: 'Greece',
    duration: '5 Days / 4 Nights',
    image: santoriniDealImg,
    originalPrice: 899,
    discountedPrice: 629,
    savings: 270,
    badge: 'Best Seller',
    badgeColor: 'blue',
    rating: 4.9,
    reviews: 1420,
    inclusions: ['4-Star Cliffside Resort', 'Daily Breakfast Buffet', 'Sunset Catamaran Cruise', 'Ferry Transfers Included'],
    accommodationType: 'Boutique Caldera Suites',
    validUntil: 'Limited Summer Season',
    partnerName: 'Expedia Packages [Placeholder]',
    affiliateUrl: '#see-packages-santorini-placeholder',
    coordinates: { lat: 36.3932, lng: 25.4615 }
  },
  {
    id: 'deal-thailand',
    title: 'Thailand Island Getaway',
    destination: 'Phuket & Phi Phi Islands',
    country: 'Thailand',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
    originalPrice: 749,
    discountedPrice: 529,
    savings: 220,
    badge: 'Hot Deal',
    badgeColor: 'coral',
    rating: 4.8,
    reviews: 2190,
    inclusions: ['Beachfront Luxury Resort', 'Phi Phi Speedboat Snorkel', 'Elephant Sanctuary Visit', 'Airport VIP Transfers'],
    accommodationType: '5-Star Oceanfront Villa',
    validUntil: 'Ends in 48 Hours',
    partnerName: 'Agoda VIP Stays [Placeholder]',
    affiliateUrl: '#see-hotels-phuket-placeholder',
    coordinates: { lat: 7.8804, lng: 98.3923 }
  },
  {
    id: 'deal-japan',
    title: 'Japan Golden Route Discovery',
    destination: 'Tokyo, Kyoto & Mt. Fuji',
    country: 'Japan',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    originalPrice: 1299,
    discountedPrice: 899,
    savings: 400,
    badge: 'Special Offer',
    badgeColor: 'purple',
    rating: 4.9,
    reviews: 3100,
    inclusions: ['7-Day JR Shinkansen Pass', 'Traditional Ryokan with Onsen', 'Guided Kyoto Bamboo Forest', 'English-Speaking Concierge'],
    accommodationType: 'Premium City Stays & Ryokan',
    validUntil: 'Autumn Booking Special',
    partnerName: 'Viator & Booking.com [Placeholder]',
    affiliateUrl: '#see-packages-japan-placeholder',
    coordinates: { lat: 35.0116, lng: 135.7681 }
  }
];

export const TRUST_BENEFITS = [
  {
    id: 'benefit-value',
    title: 'Best Value Deals',
    description: 'Compare thousands of trusted booking providers to find the highest-value fares and lowest room rates.',
    iconName: 'ShieldCheck',
    badge: 'Price Match Guarantee'
  },
  {
    id: 'benefit-support',
    title: '24/7 Travel Support',
    description: 'Expert customer assistance and flexible cancellation guidelines available throughout your booking lifecycle.',
    iconName: 'Headphones',
    badge: 'Round the Clock'
  },
  {
    id: 'benefit-secure',
    title: '100% Secure Booking',
    description: 'Book directly through accredited world-class airlines, hotel chains, and certified tour operators with SSL encryption.',
    iconName: 'Lock',
    badge: 'Verified Partners'
  },
  {
    id: 'benefit-flex',
    title: 'Flexible Options',
    description: 'Enjoy free cancellation and simple date amendments on millions of hotels, flights, and curated experiences.',
    iconName: 'CheckCircle2',
    badge: 'Hassle-Free'
  },
  {
    id: 'benefit-curated',
    title: 'Handpicked Stays',
    description: 'Every package, villa, and tour undergoes strict quality review to guarantee authentic travel excellence.',
    iconName: 'Sparkles',
    badge: 'Top Rated 4.8+'
  }
];

export const TRAVEL_CATEGORIES: TravelCategory[] = [
  {
    id: 'cat-flights',
    name: 'Flights',
    tagline: 'Cheap flights, global routes & Umrah travel flights',
    iconName: 'Plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    itemCount: 850,
    accentColor: '#0969E8',
    description: 'Find affordable airfares, compare international route options across major global carriers, and discover specialized flight routes for Umrah pilgrims landing directly in Jeddah and Madinah with generous baggage allowances.',
    features: ['Real-time low-fare flight comparisons', 'Direct Jeddah & Madinah Umrah flights', 'Flexible multi-city & transit stopovers'],
    internalPlaceholder: 'Explore Global Flights & Fares'
  },
  {
    id: 'cat-hotels',
    name: 'Hotels',
    tagline: 'Best hotels worldwide & stays near Masjid al-Haram & Masjid al-Nabawi',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    itemCount: 1200,
    accentColor: '#21B96F',
    description: 'Explore top-rated accommodations worldwide from boutique city sanctuaries to prime hotels located directly on the courtyards of Masjid al-Haram in Makkah and Al-Masjid an-Nabawi in Madinah for effortless daily prayers.',
    features: ['Steps-away hotels near Holy Harams', 'Wheelchair-friendly family suites', 'Verified price-match partner comparisons'],
    internalPlaceholder: 'See Hotels Page [Placeholder]'
  },
  {
    id: 'cat-umrah',
    name: 'Umrah Pilgrims',
    tagline: 'Step-by-step Umrah guide, packing list, halal food & travel tips',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    itemCount: 420,
    accentColor: '#071B49',
    description: 'A compassionate, dedicated resource hub for pilgrims embarking on their blessed spiritual journey. Access authentic step-by-step Ihram rituals, essential packing checklists, accessible prayer spots, and respectful pilgrim advice.',
    features: ['Complete step-by-step rites guide', 'Season-appropriate Ihram & luggage checklist', 'Ziyarat sacred landmark directions'],
    internalPlaceholder: 'See Umrah Guide Page [Placeholder]'
  },
  {
    id: 'cat-food',
    name: 'Food & Travel',
    tagline: 'Halal food guides, global cuisine & food for pilgrims',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    itemCount: 610,
    accentColor: '#FF8A2A',
    description: 'Savor the world with confidence. From mouthwatering street foods in Istanbul and Dhaka to certified halal dining hubs in London and nutritious, revitalizing meals for pilgrims in Makkah and Madinah.',
    features: ['100% verified Halal dining directories', 'Famous local street food spots', 'High-energy pilgrim nutrition recommendations'],
    internalPlaceholder: 'See Halal Food Guide [Placeholder]'
  },
  {
    id: 'cat-tools',
    name: 'Travel Tools',
    tagline: 'Currency converter, budget calculator & visa info',
    iconName: 'Calculator',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    itemCount: 95,
    accentColor: '#7B61FF',
    description: 'Empower your itinerary with smart planning utilities. Convert global currencies dynamically with live market rates, estimate entire trip budgets, check seasonal weather forecasts, and review visa requirement guidelines.',
    features: ['Live multi-currency converter', 'Interactive trip cost estimator', 'Visa requirements & entry regulation guides'],
    internalPlaceholder: 'See Travel Tools Page [Placeholder]'
  },
  {
    id: 'cat-destinations',
    name: 'Destinations',
    tagline: 'Dubai, Istanbul, Makkah, Madinah, Malaysia, Bangladesh, USA, UK',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    itemCount: 340,
    accentColor: '#0969E8',
    description: 'Explore comprehensive, culturally rich city guides across our premier spotlight destinations: Makkah, Madinah, Dubai, Istanbul, Kuala Lumpur, Dhaka, London, and New York with verified traveler insights.',
    features: ['In-depth neighborhood recommendations', 'Best seasonal months to visit', 'Direct flight and hotel search shortcuts'],
    internalPlaceholder: 'See All Destinations [Placeholder]'
  }
];

export const TRAVEL_EXPERIENCES: TravelExperience[] = [
  {
    id: 'exp-1',
    title: 'Santorini Sunset Private Catamaran & Wine Tasting',
    category: 'Food & Culture',
    location: 'Santorini, Greece',
    duration: '5 Hours',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
    price: 135,
    originalPrice: 175,
    rating: 4.9,
    reviewCount: 890,
    isFeatured: true,
    shortDesc: 'Sail past the volcanic Red and White beaches, swim in natural thermal hot springs, and savor freshly prepared Greek gourmet cuisine with local Assyrtiko wine.',
    highlights: ['Volcanic Hot Springs Swim', 'Greek BBQ Dinner Onboard', 'Open Bar with Local Wines', 'Round-trip Hotel Transport'],
    partnerName: 'Viator Top Rated [Placeholder]',
    affiliateUrl: '#see-experiences-santorini-placeholder',
    coordinates: { lat: 36.3932, lng: 25.4615 }
  },
  {
    id: 'exp-2',
    title: 'Swiss Alps Tandem Paragliding Over Interlaken',
    category: 'Adventure',
    location: 'Interlaken, Switzerland',
    duration: '2 Hours',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    price: 189,
    originalPrice: 220,
    rating: 4.9,
    reviewCount: 1120,
    isFeatured: false,
    shortDesc: 'Soar like an eagle with an experienced pilot over turquoise Lake Brienz and the majestic snow-capped peaks of the Eiger, Mönch and Jungfrau.',
    highlights: ['Certified Tandem Pilot', 'All Safety Gear Provided', 'GoPro HD Photo/Video Package Available', 'Breathtaking 360° Alpine Panorama'],
    partnerName: 'GetYourGuide [Placeholder]',
    affiliateUrl: '#see-experiences-swiss-placeholder',
    coordinates: { lat: 46.6863, lng: 7.8632 }
  },
  {
    id: 'exp-3',
    title: 'Dubai Red Dune Desert Safari with BBQ Dinner & Stargazing',
    category: 'Local Experiences',
    location: 'Dubai, UAE',
    duration: '7 Hours',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    price: 65,
    originalPrice: 95,
    rating: 4.8,
    reviewCount: 3420,
    isFeatured: false,
    shortDesc: 'Thrilling 4x4 dune bashing in Lahbab Desert, camel riding, sandboarding, falconry, fire dancers, and an authentic Arabian buffet dinner under the desert stars.',
    highlights: ['4x4 Dune Bashing on Red Dunes', 'Camel Ride & Sandboarding', 'Tanoura Dance & Fire Show', 'Five-Star BBQ Buffet'],
    partnerName: 'Viator Exclusive [Placeholder]',
    affiliateUrl: '#see-experiences-dubai-placeholder',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: 'exp-4',
    title: 'Kyoto Secret Bamboo Forest & Traditional Tea Ceremony',
    category: 'Food & Culture',
    location: 'Kyoto, Japan',
    duration: '4 Hours',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    price: 88,
    originalPrice: 115,
    rating: 4.9,
    reviewCount: 760,
    isFeatured: false,
    shortDesc: 'Escape the crowds in a serene private bamboo grove followed by an authentic matcha tea preparation led by an experienced Urasenke master.',
    highlights: ['Private Garden Access', 'Authentic Matcha Preparation', 'Historical Temple Guide', 'Traditional Wagashi Sweets'],
    partnerName: 'GetYourGuide [Placeholder]',
    affiliateUrl: '#see-experiences-kyoto-placeholder',
    coordinates: { lat: 35.0116, lng: 135.7681 }
  }
];

export const TRAVEL_ARTICLES: TravelArticle[] = [
  {
    id: 'art-1',
    title: '10 Handpicked Destinations to Add to Your Bucket List This Year',
    slug: '10-destinations-bucket-list',
    category: 'Travel Guide',
    readTime: '6 min read',
    date: 'Updated Yesterday',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    summary: 'From hidden mountain retreats in Switzerland to secluded coral atolls in the Indian Ocean, here are the most rewarding spots to discover.',
    author: {
      name: 'Elena Rostova',
      role: 'Senior Travel Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    content: `Planning your next big escape requires finding places that blend beauty, rich culture, and accessible value. In this comprehensive guide, our destination editors analyze flight patterns, seasonal weather trends, and regional accommodation value to bring you the definitive top 10 list for unforgettable international travels.`,
    tags: ['Bucket List', 'Destinations', 'Flight Tips']
  },
  {
    id: 'art-2',
    title: 'How to Plan a Stress-Free International Trip in 7 Simple Steps',
    slug: 'how-to-plan-stress-free-international-trip',
    category: 'Planning Tips',
    readTime: '5 min read',
    date: '3 days ago',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    summary: 'Avoid baggage headaches, optimize flight layovers, and secure flexible bookings with our expert checklist.',
    author: {
      name: 'Marcus Vance',
      role: 'Aviation & Booking Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    content: `Booking international travel doesn't need to be intimidating. By locking in refundable hotel reservations first, setting flight price alerts 60 days ahead, and downloading offline regional maps, you can minimize friction and maximize enjoyment.`,
    tags: ['Smart Travel', 'Budgeting', 'Checklist']
  },
  {
    id: 'art-3',
    title: 'Best Beach Destinations for an Unwinding Escape',
    slug: 'best-beach-destinations-escape',
    category: 'Beach & Island',
    readTime: '4 min read',
    date: '1 week ago',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    summary: 'Crystal clear waters, warm breezes, and world-renowned coastal cuisine across Bali, Amalfi, and the Greek Islands.',
    author: {
      name: 'Claire Moreau',
      role: 'Luxury Stays Curator',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
    },
    content: `Nothing rejuvenates the spirit quite like the rhythm of ocean waves against powdery white sand. Whether you're seeking private overwater bungalows in the Maldives or sun-soaked beach clubs in Mykonos, we review the top seaside havens.`,
    tags: ['Beach', 'Luxury', 'Islands']
  },
  {
    id: 'art-4',
    title: 'Smart Ways to Compare and Find Better Travel Deals',
    slug: 'smart-ways-find-better-travel-deals',
    category: 'Deal Hunting',
    readTime: '5 min read',
    date: '2 weeks ago',
    image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=800&q=80',
    summary: 'Learn when to bundle flights with accommodations, how currency arbitrage works, and how to spot genuine promotional discounts.',
    author: {
      name: 'David Kim',
      role: 'Affiliate Travel Analyst',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    content: `Travel affiliate networks connect you directly with premier booking engines. Learn how to compare aggregate prices across Skyscanner, Booking.com, and Expedia without paying extra hidden broker charges.`,
    tags: ['Deals', 'Hacks', 'Savings']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Sophia Williams',
    location: 'London, UK',
    trip: 'Santorini & Mykonos Escape',
    rating: 5,
    comment: 'Travel Duurdesh made discovering and comparing Greek island deals effortless. The hotel partner link saved us over $280 on our caldera suite with breathtaking sunset views!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    date: 'Trip completed August 2026'
  },
  {
    id: 'test-2',
    author: 'James Anderson',
    location: 'Chicago, USA',
    trip: 'Swiss Alps Panoramic Train Package',
    rating: 5,
    comment: 'Clear, transparent pricing and reliable partner recommendations. We booked our Glacier Express passes and boutique Zermatt lodge in under 5 minutes without any surprise fees.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    date: 'Trip completed July 2026'
  },
  {
    id: 'test-3',
    author: 'Olivia Martinez',
    location: 'Sydney, Australia',
    trip: 'Bali Luxury Ubud Villa',
    rating: 5,
    comment: 'The curated experiences were top notch! The private catamaran tour and sunrise volcano hike recommended on Travel Duurdesh were the absolute highlight of our entire honeymoon.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    date: 'Trip completed August 2026'
  },
  {
    id: 'test-4',
    author: 'Liam Chen',
    location: 'Toronto, Canada',
    trip: 'Japan Golden Route Discovery',
    rating: 5,
    comment: 'I love how clean and intuitive the interface is. You find genuine deals from trusted providers like Booking.com and Viator without having to sift through spammy popups.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    date: 'Trip completed June 2026'
  }
];

export const POPULAR_ORIGIN_CITIES = [
  'New York (JFK / EWR)',
  'London (LHR / LGW)',
  'Dubai (DXB)',
  'Singapore (SIN)',
  'Sydney (SYD)',
  'Toronto (YYZ)',
  'Paris (CDG)',
  'Tokyo (HND / NRT)',
  'Los Angeles (LAX)',
  'Frankfurt (FRA)'
];

export const POPULAR_DESTINATION_CITIES = [
  'Paris, France',
  'Bali, Indonesia',
  'Dubai, UAE',
  'Maldives',
  'Swiss Alps, Switzerland',
  'Tokyo, Japan',
  'Santorini, Greece',
  'Phuket, Thailand',
  'Rome, Italy',
  'Amalfi Coast, Italy'
];
