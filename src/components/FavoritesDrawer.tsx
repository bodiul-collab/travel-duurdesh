import React from 'react';
import {
  X,
  Heart,
  Trash2,
  ExternalLink,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { Destination, TravelDeal, CurrencyConfig } from '../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: Destination[];
  onRemoveWishlist: (id: string) => void;
  onClearAll: () => void;
  onBookAffiliate: (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  }) => void;
  currency: CurrencyConfig;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveWishlist,
  onClearAll,
  onBookAffiliate,
  currency
}) => {
  if (!isOpen) return null;

  const formatPrice = (usdAmount: number) => {
    const converted = Math.round(usdAmount * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-gray-200 animate-slideLeft">
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F] flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#071B49] font-syncopate uppercase tracking-tight">
                Saved Trips ({savedItems.length})
              </h3>
              <span className="text-[11px] text-[#5E6B82]">
                Your personalized travel wishlist
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Item List */}
        <div className="p-5 flex-1 overflow-y-auto custom-scrollbar space-y-3">
          {savedItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F3F8FF] text-[#0969E8] flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-[#A3BFFA]" />
              </div>
              <h4 className="text-base font-bold text-[#071B49]">No saved destinations yet</h4>
              <p className="text-xs text-[#5E6B82] max-w-xs mx-auto">
                Click the heart icon on any destination or deal card to save your favorite getaways here.
              </p>
            </div>
          ) : (
            savedItems.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#F8FAFC] rounded-2xl p-3 border border-gray-100 flex gap-3 items-center group relative hover:border-[#0969E8]/30 transition-all"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[10px] text-[#5E6B82]">
                    <MapPin className="w-3 h-3 text-[#0969E8]" />
                    <span>{dest.country}</span>
                  </div>
                  <h4 className="text-xs font-bold text-[#101C36] truncate">
                    {dest.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-extrabold text-[#21B96F]">
                      From {formatPrice(dest.startingPrice)}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      ★ {dest.rating}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 items-end shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onBookAffiliate({
                        title: `${dest.name}, ${dest.country}`,
                        partnerName: dest.partnerName,
                        affiliateUrl: dest.affiliateUrl,
                        price: formatPrice(dest.startingPrice),
                        image: dest.image
                      });
                    }}
                    className="p-2 bg-[#0969E8] hover:bg-[#0759c5] text-white rounded-lg transition-colors"
                    title="Book destination"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRemoveWishlist(dest.id)}
                    className="p-1.5 text-gray-400 hover:text-[#FF5A5F] rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {savedItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-[#F8FAFC] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#5E6B82] mb-1">
              <span>Saved Items Total</span>
              <span className="font-bold text-[#101C36]">{savedItems.length} destinations</span>
            </div>

            <button
              onClick={onClearAll}
              className="w-full text-center text-xs text-gray-500 hover:text-[#FF5A5F] py-1 transition-colors"
            >
              Clear all saved trips
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
