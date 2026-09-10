import React, { useState } from 'react';
import {
  Compass,
  Mail,
  MapPin,
  Heart,
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Languages,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { AFFILIATE_CONFIG } from '../data/affiliateConfig';
import { LanguageConfig } from '../types';
import { TOP_20_LANGUAGES } from '../data/languages';

interface FooterProps {
  selectedLanguage?: LanguageConfig;
  onOpenLanguageModal?: () => void;
  onSelectLanguage?: (langCode: string) => void;
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  selectedLanguage,
  onOpenLanguageModal,
  onSelectLanguage,
  onNavigate
}) => {
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [validationStatus, setValidationStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = subscriptionEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setValidationStatus('error');
      setValidationMessage('Please enter your email address to sign up for travel deals and updates.');
      return;
    }

    if (!emailRegex.test(trimmed)) {
      setValidationStatus('error');
      setValidationMessage('Please enter a valid email address (e.g., traveler@example.com).');
      return;
    }

    // Successfully validated
    setValidationStatus('success');
    setValidationMessage('Thank you! You are now subscribed to receive exclusive travel deals and updates.');
    setSubscriptionEmail('');
  };

  return (
    <footer id="contact" className="bg-[#071B49] text-white/80 text-sm border-t border-white/10 pt-16 pb-12">
      <div id="footer-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Email Subscription Section */}
        <div className="mb-12 bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Title & Description */}
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#0969E8]/30 border border-[#4DA3FF]/30 px-3 py-1 rounded-full text-xs font-bold text-[#4DA3FF] uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5 text-[#4DA3FF]" />
                <span>Email Subscription</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-syncopate">
                Sign Up for Travel Deals & Updates
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Stay updated with curated flight fare alerts, secret hotel price drops, Umrah guidance bulletins, and authentic halal food recommendations sent directly to your inbox.
              </p>
            </div>

            {/* Email Input Form with Placeholder Validation Message */}
            <div className="w-full lg:max-w-md">
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={subscriptionEmail}
                      onChange={(e) => {
                        setSubscriptionEmail(e.target.value);
                        if (validationStatus !== 'idle') {
                          setValidationStatus('idle');
                          setValidationMessage('');
                        }
                      }}
                      placeholder="Enter your email for travel deals and updates..."
                      className={`w-full bg-white/10 text-white placeholder-white/50 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border focus:outline-none transition-all ${
                        validationStatus === 'error'
                          ? 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/30'
                          : validationStatus === 'success'
                          ? 'border-emerald-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30'
                          : 'border-white/20 focus:border-[#4DA3FF] focus:ring-2 focus:ring-[#4DA3FF]/30'
                      }`}
                      aria-label="Email Subscription"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0858C2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Validation message feedback area */}
                {validationStatus === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-red-300 bg-red-950/40 border border-red-500/30 px-3 py-1.5 rounded-lg">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                    <span>{validationMessage}</span>
                  </div>
                )}

                {validationStatus === 'success' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                    <span>{validationMessage}</span>
                  </div>
                )}

                {validationStatus === 'idle' && (
                  <p className="text-[11px] text-white/50 flex items-center gap-1.5 pl-1">
                    <Sparkles className="w-3 h-3 text-[#FFB800] shrink-0" />
                    <span>Zero spam. Only verified travel discounts, pilgrimage alerts, and destination dossiers.</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0969E8] to-[#4DA3FF] flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-white font-syncopate">
                  <span>Travel</span>
                  <span className="text-[#4DA3FF] ml-1">DuurDesh</span>
                </div>
                <span className="text-[9px] tracking-widest text-white/60 uppercase font-semibold -mt-0.5">
                  Global Travel • Umrah Pilgrims • Halal Food
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">About Travel DuurDesh</h4>
              <p className="text-xs text-white/70 leading-relaxed max-w-sm">
                Travel DuurDesh is your comprehensive global travel companion and dedicated Umrah pilgrimage resource. We empower mindful travelers with verified step-by-step spiritual rites, authentic halal culinary guides, smart interactive planning tools, and transparent flight and hotel price comparisons worldwide.
              </p>
            </div>

            {/* Language Switcher in Footer */}
            {onOpenLanguageModal && (
              <div className="pt-2">
                <div className="text-xs font-semibold text-white/90 mb-2 flex items-center justify-between">
                  <span>20 Global Languages Supported:</span>
                  <button
                    onClick={onOpenLanguageModal}
                    className="inline-flex items-center gap-1.5 text-xs text-[#4DA3FF] hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span>Change Language ({selectedLanguage?.nativeName || 'English'})</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-white/70">
                  {TOP_20_LANGUAGES.slice(0, 8).map((l) => (
                    <button
                      key={l.code}
                      onClick={() => onSelectLanguage ? onSelectLanguage(l.code) : onOpenLanguageModal?.()}
                      className={`cursor-pointer px-2 py-0.5 rounded transition-colors ${
                        selectedLanguage?.code === l.code
                          ? 'bg-[#0969E8] text-white font-bold'
                          : 'bg-white/5 hover:bg-white/15'
                      }`}
                    >
                      {l.flag} {l.nativeName}
                    </button>
                  ))}
                  <button
                    onClick={onOpenLanguageModal}
                    className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium text-[#4DA3FF]"
                  >
                    +12 more
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider font-syncopate">
              Explore Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate?.('hotels')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Hotels (Makkah, Madinah & Global Stays)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('flights')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Flights (Cheap Global & Umrah Routes)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('umrah')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Umrah Pilgrims Guide & Stays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('food')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Halal Food & Street Cuisine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('tools')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Travel Tools & Currency Converter
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('destinations')}
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Destinations (8 Iconic Cities)
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policy Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider font-syncopate">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Travel DuurDesh
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Editorial Integrity & Disclosure
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider font-syncopate">
              Contact Information
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@travelduurdesh.com"
                  className="hover:text-white transition-colors"
                >
                  contact@travelduurdesh.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0 mt-0.5" />
                <span>Travel DuurDesh Global Support Network</span>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-1 text-[#4DA3FF] hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  <span>Open Contact & Support Page →</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Box */}
        <div className="my-6 bg-white/5 rounded-2xl p-4 border border-white/10 text-xs text-white/70 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#4DA3FF] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Affiliate Transparency Disclosure: </span>
              {AFFILIATE_CONFIG.affiliateDisclosure}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Payment Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 Travel DuurDesh. All rights reserved. Registered Travel Platform.
          </div>

          {/* Payment Trust Badges */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/50 uppercase font-semibold">Accepted via Partners:</span>
            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-white/80">
              <span className="bg-white/10 px-2 py-0.5 rounded">VISA</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Mastercard</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">PayPal</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Apple Pay</span>
              <span className="bg-white/10 px-2 py-0.5 rounded">Google Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
