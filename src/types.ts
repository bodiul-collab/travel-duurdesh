export type BookingTabType = 'flights' | 'hotels' | 'packages' | 'experiences';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Americas' | 'Middle East' | 'Oceania' | 'Africa';
  image: string;
  startingPrice: number;
  currency: string;
  rating: number;
  reviewCount: number;
  discountPercentage?: number;
  tag?: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  affiliateCategory: BookingTabType;
  partnerName: string;
  affiliateUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TravelDeal {
  id: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  badge: string;
  badgeColor?: 'orange' | 'blue' | 'coral' | 'purple';
  rating: number;
  reviews: number;
  inclusions: string[];
  accommodationType: string;
  validUntil: string;
  affiliateUrl: string;
  partnerName: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TravelCategory {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  image: string;
  itemCount: number;
  accentColor: string;
  description?: string;
  features?: string[];
  internalPlaceholder?: string;
}

export interface TravelExperience {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  shortDesc: string;
  highlights: string[];
  partnerName: string;
  affiliateUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TravelArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  trip: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FlightLeg {
  id: string;
  origin: string;
  destination: string;
  date: string;
}

export interface SearchFilterState {
  tab: BookingTabType;
  fromLocation: string;
  toLocation: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  rooms: number;
  cabinClass: 'Economy' | 'Premium Economy' | 'Business' | 'First';
  hotelStars?: number;
  tripType?: 'round' | 'oneWay' | 'multiCity';
  multiLegs?: FlightLeg[];
}

export interface CurrencyConfig {
  code: string;
  symbol: string;
  rateToUSD: number;
}

export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  speakers: string;
  rtl?: boolean;
}
