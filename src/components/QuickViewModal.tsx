import React from 'react';
import {
  X,
  Star,
  MapPin,
  Calendar,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Heart,
  Clock,
  Sparkles,
  Plane
} from 'lucide-react';
import { Destination, TravelDeal, TravelExperience, CurrencyConfig } from '../types';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: (Destination | TravelDeal | TravelExperience) | null;
  itemType: 'destination' | 'deal' | 'experience';
  onBookAffiliate: (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  }) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  currency: CurrencyConfig;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  item,
  itemType,
  onBookAffiliate,
  isWishlisted,
  onToggleWishlist,
  currency
}) => {
  if (!isOpen || !item) return null;

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const isDestination = (it: any): it is Destination => 'country' in it && 'startingPrice' in it;
  const isDeal = (it: any): it is TravelDeal => 'discountedPrice' in it && 'duration' in it;
  const isExp = (it: any): it is TravelExperience => 'duration' in it && !('discountedPrice' in it);

  const title = isDestination(item) ? item.name : item.title;
  const subLoc = isDestination(item)
    ? `${item.country} • ${item.region}`
    : isDeal(item)
    ? `${item.destination}, ${item.country}`
    : item.location;
  const price = isDestination(item)
    ? formatPrice(item.startingPrice)
    : isDeal(item)
    ? formatPrice(item.discountedPrice)
    : formatPrice(item.price);
  const rating = item.rating;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl border border-gray-100 relative flex flex-col">
        {/* Close & Wishlist floating buttons */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => onToggleWishlist(item.id)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
              isWishlisted
                ? 'bg-[#FF5A5F] text-white'
                : 'bg-white/80 hover:bg-white text-gray-700'
            }`}
            title={isWishlisted ? 'Saved to favorites' : 'Save to favorites'}
            aria-label="Toggle wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/80 hover:bg-white text-gray-700 backdrop-blur-md shadow-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Image Header */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={item.image}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs text-[#4DA3FF] font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{subLoc}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight font-syncopate uppercase tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 flex-1">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 bg-[#F8FAFC] p-3.5 rounded-2xl border border-gray-100 text-center">
            <div>
              <span className="text-[11px] text-[#5E6B82] block font-medium">Guest Rating</span>
              <div className="flex items-center justify-center gap-1 font-bold text-sm text-[#FF8A2A]">
                <Star className="w-3.5 h-3.5 fill-[#FF8A2A]" />
                <span>{rating} / 5.0</span>
              </div>
            </div>
            <div>
              <span className="text-[11px] text-[#5E6B82] block font-medium">Partner</span>
              <span className="text-xs font-bold text-[#0969E8] truncate block">
                {item.partnerName}
              </span>
            </div>
            <div>
              <span className="text-[11px] text-[#5E6B82] block font-medium">Price</span>
              <span className="text-sm font-extrabold text-[#21B96F]">
                {price}
              </span>
            </div>
          </div>

          {/* Description & Inclusions */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider mb-2">
                Overview & Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6B82] leading-relaxed">
                {isDestination(item)
                  ? item.description
                  : isDeal(item)
                  ? `Experience an all-inclusive stay at ${item.accommodationType} with daily breakfast, airport transfers, and excursions included.`
                  : item.shortDesc}
              </p>
            </div>

            {/* Highlights List */}
            {('highlights' in item || 'inclusions' in item) && (
              <div>
                <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider mb-2.5">
                  Package Highlights & Included Perks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#101C36]">
                  {(('highlights' in item ? item.highlights : (item as TravelDeal).inclusions) || []).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#F3F8FF] p-2 rounded-xl border border-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0" />
                      <span className="font-medium truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Partner & Booking Actions */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-[#5E6B82] block">Verified Partner Rate</span>
              <span className="text-2xl font-black text-[#071B49]">{price}</span>
              <span className="text-[10px] text-[#21B96F] block font-medium">
                Free cancellation on most dates
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookAffiliate({
                  title,
                  partnerName: item.partnerName,
                  affiliateUrl: item.affiliateUrl,
                  price,
                  image: item.image
                });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] active:scale-[0.98] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-150"
            >
              <span>Book with {item.partnerName}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
