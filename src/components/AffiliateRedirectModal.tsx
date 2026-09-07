import React, { useEffect, useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  X
} from 'lucide-react';
import { AFFILIATE_CONFIG } from '../data/affiliateConfig';

interface AffiliateRedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  } | null;
}

export const AffiliateRedirectModal: React.FC<AffiliateRedirectModalProps> = ({
  isOpen,
  onClose,
  target
}) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (!isOpen || !target) {
      setCountdown(3);
      return;
    }

    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          // Trigger redirect simulation/link
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, target]);

  if (!isOpen || !target) return null;

  const handleProceed = () => {
    // Keep within page as an affiliate placeholder
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-100 relative overflow-hidden space-y-5">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Partner Icon & Badge */}
        <div className="text-center space-y-2 pt-2">
          <div className="w-14 h-14 rounded-2xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center mx-auto shadow-sm">
            <ExternalLink className="w-7 h-7" />
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#21B96F] bg-[#21B96F]/10 px-3 py-1 rounded-full">
            <Lock className="w-3 h-3" />
            Verified Booking Partner [Placeholder]
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
            {target.partnerName}
          </h3>
          <p className="text-xs text-[#5E6B82]">
            Affiliate-Ready Placeholder: In production with your affiliate IDs connected, this action links directly to {target.partnerName}.
          </p>
        </div>

        {/* Item Preview Card */}
        <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-gray-100 flex items-center gap-3.5">
          {target.image && (
            <img
              src={target.image}
              alt={target.title}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-xl object-cover shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-[#101C36] truncate">
              {target.title}
            </h4>
            {target.price && (
              <span className="text-sm font-extrabold text-[#0969E8] block">
                {target.price}
              </span>
            )}
            <span className="text-[10px] text-[#21B96F] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Verified Partner Rate [Placeholder]
            </span>
          </div>
        </div>

        {/* Trust Points */}
        <div className="space-y-2 text-xs text-[#5E6B82] bg-[#F3F8FF] p-3.5 rounded-xl border border-blue-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0969E8] shrink-0" />
            <span>Encrypted SSL 256-bit secure checkout ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF8A2A] shrink-0" />
            <span>Affiliate tracking integration placeholder verified</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleProceed}
            className="w-full bg-[#0969E8] hover:bg-[#0759c5] active:scale-[0.98] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-150"
          >
            <span>Close & Return to Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
