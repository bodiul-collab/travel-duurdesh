import React, { useState, useEffect } from 'react';
import {
  Compass,
  Search,
  Heart,
  Menu,
  X,
  ShieldCheck,
  Headphones,
  Sparkles,
  ChevronDown,
  Globe,
  Plane,
  Languages
} from 'lucide-react';
import { CurrencyConfig, LanguageConfig } from '../types';
import { getTranslation, TranslationKey } from '../data/translations';
import { TOP_20_LANGUAGES } from '../data/languages';

interface HeaderProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  selectedCurrency: string;
  onSelectCurrency: (code: string) => void;
  currencies: Record<string, CurrencyConfig>;
  selectedLanguage: LanguageConfig;
  onSelectLanguage: (langCode: string) => void;
  onOpenLanguageModal: () => void;
  onBookNowClick: () => void;
  isCurrencyAutoDetected?: boolean;
  onResetCurrencyToAuto?: () => void;
  activePage?: string;
  onNavigate?: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenSearch,
  selectedCurrency,
  onSelectCurrency,
  currencies,
  selectedLanguage,
  onSelectLanguage,
  onOpenLanguageModal,
  onBookNowClick,
  isCurrencyAutoDetected = true,
  onResetCurrencyToAuto,
  activePage = 'home',
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (key: TranslationKey) => getTranslation(selectedLanguage.code, key);

  const navLinks = [
    { id: 'home', name: 'Home', href: '#home' },
    { id: 'flights', name: 'Flights', href: '#flights' },
    { id: 'hotels', name: 'Hotels', href: '#hotels' },
    { id: 'umrah', name: 'Umrah', href: '#umrah' },
    { id: 'food', name: 'Food & Travel', href: '#food' },
    { id: 'tools', name: 'Travel Tools', href: '#tools' },
    { id: 'destinations', name: 'Destinations', href: '#destinations' },
    { id: 'contact', name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Slim Utility Bar */}
      <div className="bg-[#071B49] text-white/90 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar py-0.5 min-w-0">
            <div className="flex items-center gap-1.5 whitespace-nowrap text-white/85 text-[11px] sm:text-xs shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#21B96F] shrink-0" />
              <span>{t('freeCancellation')}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 whitespace-nowrap text-white/85 text-xs shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
              <span>{t('bestValueDeals')}</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 whitespace-nowrap text-white/85 text-xs shrink-0">
              <Headphones className="w-3.5 h-3.5 text-[#4DA3FF] shrink-0" />
              <span>{t('support247')}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto">
            {/* Language Selector Trigger & Dropdown */}
            <div className="relative shrink-0">
              <button
                id="language-selector-btn"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2 sm:px-2.5 py-1 rounded-md transition-all border border-white/10 shrink-0"
                title="Select Language (20 Languages available)"
                aria-label="Select Language"
              >
                <span className="text-xs sm:text-sm">{selectedLanguage.flag}</span>
                <span className="font-semibold max-w-[65px] sm:max-w-none truncate">{selectedLanguage.nativeName}</span>
                <ChevronDown className="w-3 h-3 opacity-70 shrink-0" />
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-white text-[#101C36] rounded-xl shadow-2xl border border-gray-100 py-1.5 z-50 text-xs animate-fadeIn">
                  <div className="px-3 py-1.5 border-b border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#5E6B82] uppercase tracking-wider">
                    <span>{t('selectLanguage')}</span>
                    <span className="text-[10px] text-[#0969E8] font-bold">20 Languages</span>
                  </div>

                  <div className="max-h-60 overflow-y-auto custom-scrollbar py-1">
                    {TOP_20_LANGUAGES.map((lang) => {
                      const isSelected = selectedLanguage.code === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onSelectLanguage(lang.code);
                            setLanguageDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 hover:bg-[#F3F8FF] flex items-center justify-between transition-colors ${
                            isSelected ? 'bg-[#EAF2FB] text-[#0969E8] font-bold' : 'text-[#101C36]'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-sm shrink-0">{lang.flag}</span>
                            <span className="truncate">{lang.nativeName}</span>
                            <span className="text-[10px] text-gray-400 font-normal truncate">({lang.name})</span>
                          </div>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-1.5 border-t border-gray-100 bg-[#F8FAFC]">
                    <button
                      onClick={() => {
                        setLanguageDropdownOpen(false);
                        onOpenLanguageModal();
                      }}
                      className="w-full text-center py-1.5 text-xs text-[#0969E8] font-semibold hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>Search All 20 Languages</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div className="relative shrink-0">
              <button
                id="currency-selector-btn"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-white/90 hover:text-white bg-white/10 hover:bg-white/15 px-2 sm:px-2.5 py-1 rounded-md transition-colors shrink-0"
                aria-label="Select Currency"
                title={
                  isCurrencyAutoDetected
                    ? `Currency: ${selectedCurrency} (Auto-detected from browser locale)`
                    : `Currency: ${selectedCurrency} (Manually selected)`
                }
              >
                <Globe className="w-3 h-3 text-[#4DA3FF] shrink-0" />
                <span className="font-semibold">{selectedCurrency}</span>
                {isCurrencyAutoDetected && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#21B96F] shrink-0"
                    title="Auto-detected from browser locale"
                  />
                )}
                <ChevronDown className="w-3 h-3 opacity-70 shrink-0" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white text-[#101C36] rounded-xl shadow-2xl border border-gray-100 py-1.5 z-50 text-xs animate-fadeIn">
                  <div className="px-3 py-1.5 border-b border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#5E6B82] uppercase tracking-wider">
                    <span>Currency</span>
                    {isCurrencyAutoDetected ? (
                      <span className="text-[10px] text-[#1e9659] font-bold bg-[#E8F8F0] px-1.5 py-0.5 rounded border border-[#21B96F]/20">
                        Auto-detect
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#0969E8] font-bold bg-[#EAF2FB] px-1.5 py-0.5 rounded border border-[#0969E8]/20">
                        Manual
                      </span>
                    )}
                  </div>

                  <div className="max-h-60 overflow-y-auto custom-scrollbar py-1">
                    {Object.keys(currencies).map((code) => {
                      const isSelected = selectedCurrency === code;
                      return (
                        <button
                          key={code}
                          onClick={() => {
                            onSelectCurrency(code);
                            setCurrencyDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 hover:bg-[#F3F8FF] flex items-center justify-between transition-colors ${
                            isSelected ? 'text-[#0969E8] font-bold bg-[#EAF2FB]' : 'text-[#101C36]'
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium">{code}</span>
                            {isSelected && isCurrencyAutoDetected && (
                              <span className="text-[9px] text-[#21B96F] font-semibold">(Locale)</span>
                            )}
                          </div>
                          <span className="text-gray-500 font-mono text-xs">{currencies[code].symbol}</span>
                        </button>
                      );
                    })}
                  </div>

                  {!isCurrencyAutoDetected && onResetCurrencyToAuto && (
                    <div className="p-1.5 border-t border-gray-100 bg-[#F8FAFC]">
                      <button
                        onClick={() => {
                          onResetCurrencyToAuto();
                          setCurrencyDropdownOpen(false);
                        }}
                        className="w-full text-center py-1.5 text-[11px] text-[#0969E8] hover:text-[#0759c5] font-semibold hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <span>↺</span>
                        <span>Auto-detect from browser</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled
            ? 'py-2 sm:py-2.5 shadow-md bg-white/95 backdrop-blur-md border-b border-[#E7EEF7]'
            : 'py-2.5 sm:py-4 shadow-sm border-b border-[#EAF2FB]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('home');
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 mr-3 sm:mr-4 lg:mr-6 xl:mr-8"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#071B49] via-[#0969E8] to-[#4DA3FF] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col shrink-0">
              <div className="flex items-center text-sm sm:text-base lg:text-lg font-bold tracking-tight font-syncopate">
                <span className="text-[#071B49]">Travel</span>
                <span className="text-[#0969E8] ml-1.5">DuurDesh</span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-[#5E6B82] uppercase font-semibold -mt-0.5 hidden sm:block">
                {t('brandTagline')}
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) - 8 Specified Items Only */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 mx-auto">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(link.id);
                    }
                  }}
                  className={`px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-medium rounded-lg transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-[#0969E8] font-bold bg-[#EAF2FB]'
                      : 'text-[#101C36] hover:text-[#0969E8] hover:bg-[#F3F8FF]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-1.5 sm:p-2 text-[#5E6B82] hover:text-[#0969E8] hover:bg-[#F3F8FF] rounded-lg transition-colors shrink-0"
              title={t('search')}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              id="header-wishlist-btn"
              onClick={onOpenWishlist}
              className="relative p-1.5 sm:p-2 text-[#5E6B82] hover:text-[#0969E8] hover:bg-[#F3F8FF] rounded-lg transition-colors shrink-0"
              title={t('savedTrips')}
              aria-label="Saved Trips"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-[#FF5A5F] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              id="header-book-now-btn"
              onClick={onBookNowClick}
              className="hidden sm:inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] active:scale-[0.98] text-white font-semibold text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/20 transition-all duration-150 whitespace-nowrap shrink-0"
            >
              <Plane className="w-4 h-4" />
              <span>{t('bookNow')}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#101C36] hover:bg-[#F3F8FF] active:bg-[#EAF2FB] rounded-lg transition-colors shrink-0 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer - 8 Specified Items Only */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAF2FB] bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(link.id);
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-[#0969E8] font-bold bg-[#EAF2FB]'
                        : 'text-[#101C36] hover:text-[#0969E8] hover:bg-[#F3F8FF]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookNowClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0969E8] text-white font-semibold text-sm py-3 rounded-xl shadow-md"
                >
                  <Plane className="w-4 h-4" />
                  <span>{t('bookNow')}</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#5E6B82] px-2 py-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLanguageModal();
                    }}
                    className="flex items-center gap-1.5 text-[#0969E8] font-bold bg-[#EAF2FB] px-2.5 py-1.5 rounded-lg"
                  >
                    <Languages className="w-4 h-4" />
                    <span>{selectedLanguage.flag} {selectedLanguage.nativeName}</span>
                  </button>
                  <span className="text-gray-600 font-medium">Currency: {selectedCurrency} ({currencies[selectedCurrency]?.symbol})</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
