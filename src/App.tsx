import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingSearchWidget } from './components/BookingSearchWidget';
import { TravelCategories } from './components/TravelCategories';
import { PopularDestinations } from './components/PopularDestinations';
import { UmrahPilgrimsSection } from './components/UmrahPilgrimsSection';
import { FoodAndTravelSection } from './components/FoodAndTravelSection';
import { TravelToolsSection } from './components/TravelToolsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CallToActionSection } from './components/CallToActionSection';
import { FeaturedDeals } from './components/FeaturedDeals';
import { TrustBenefits } from './components/TrustBenefits';
import { ExperiencesSection } from './components/ExperiencesSection';
import { TravelInspiration } from './components/TravelInspiration';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterCTA } from './components/NewsletterCTA';
import { Footer } from './components/Footer';
import { FlightsPage } from './components/FlightsPage';
import { FlightsSection } from './components/FlightsSection';
import { HotelsPage } from './components/HotelsPage';
import { UmrahGuidePage } from './components/UmrahGuidePage';
import { FoodAndTravelPage } from './components/FoodAndTravelPage';
import { TravelToolsPage } from './components/TravelToolsPage';
import { DestinationsPage } from './components/DestinationsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { TermsPage } from './components/TermsPage';
import { applySEO, SEO_PAGES } from './utils/seo';
import { AffiliateRedirectModal } from './components/AffiliateRedirectModal';
import { QuickViewModal } from './components/QuickViewModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { ArticleModal } from './components/ArticleModal';
import { SearchResultsModal } from './components/SearchResultsModal';
import { LanguageModal } from './components/LanguageModal';
import { buildAviasalesRouteUrl } from './utils/aviasales';
import { initGoogleTranslate, applyGoogleLanguageChange } from './utils/googleTranslate';
import {
  getInitialCurrency,
  saveManualCurrency,
  clearManualCurrency,
  detectBrowserCurrency,
  getStoredManualCurrency
} from './utils/currencyDetector';

import {
  POPULAR_DESTINATIONS,
  FEATURED_DEALS,
  TRAVEL_CATEGORIES,
  TRAVEL_EXPERIENCES,
  TRAVEL_ARTICLES,
  TESTIMONIALS,
  CURRENCIES
} from './data/travelData';
import { TOP_20_LANGUAGES } from './data/languages';
import {
  Destination,
  TravelDeal,
  TravelExperience,
  TravelArticle,
  TravelCategory,
  SearchFilterState,
  LanguageConfig
} from './types';

export default function App() {
  // Global State: Auto-detect default currency from browser locale settings with manual backup
  const [currencyState, setCurrencyState] = useState(() => {
    const supported = Object.keys(CURRENCIES);
    return getInitialCurrency(supported, 'USD');
  });

  const selectedCurrency = currencyState.currency;
  const isCurrencyAutoDetected = currencyState.isAutoDetected;

  // Manual currency change handler: updates state and preserves manual selection in localStorage
  const handleSelectCurrency = (code: string) => {
    saveManualCurrency(code);
    setCurrencyState({
      currency: code,
      isAutoDetected: false,
      source: 'manual'
    });
  };

  // Re-run auto-detection and clear manual override
  const handleResetCurrencyToAuto = () => {
    clearManualCurrency();
    const supported = Object.keys(CURRENCIES);
    const detected = detectBrowserCurrency(supported, 'USD');
    setCurrencyState({
      currency: detected.currency,
      isAutoDetected: true,
      source: detected.source,
      detectedLocale: detected.detectedLocale
    });
  };

  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('travel_duurdesh_lang') || 'en';
    }
    return 'en';
  });
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['dest-paris', 'dest-bali']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Initialize automated background translation engine and browser locale listeners on mount
  useEffect(() => {
    initGoogleTranslate();
    const savedLang = localStorage.getItem('travel_duurdesh_lang');
    if (savedLang && savedLang !== 'en') {
      applyGoogleLanguageChange(savedLang);
    }

    // Dynamic browser locale listener (adjusts auto-detected currency if user has no manual override)
    const handleLanguageChange = () => {
      const manual = getStoredManualCurrency();
      if (!manual) {
        const supported = Object.keys(CURRENCIES);
        const detected = detectBrowserCurrency(supported, 'USD');
        setCurrencyState({
          currency: detected.currency,
          isAutoDetected: true,
          source: detected.source,
          detectedLocale: detected.detectedLocale
        });
      }
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  // Centralized Language Switcher (Updates React state, cookies & triggers DOM full-page translation)
  const handleSelectLanguage = (langCode: string) => {
    setSelectedLanguageCode(langCode);
    applyGoogleLanguageChange(langCode);
  };

  // Active language object
  const currentLanguage: LanguageConfig = 
    TOP_20_LANGUAGES.find((l) => l.code === selectedLanguageCode) || TOP_20_LANGUAGES[0];

  // Search filter query state
  const [searchState, setSearchState] = useState<SearchFilterState>({
    tab: 'flights',
    fromLocation: 'New York (JFK)',
    toLocation: 'Paris, France',
    checkInDate: '2026-09-15',
    checkOutDate: '2026-09-22',
    adults: 2,
    children: 0,
    rooms: 1,
    cabinClass: 'Economy'
  });

  const [activePage, setActivePage] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'flights', 'hotels', 'umrah', 'food', 'tools', 'destinations', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  // Modal active item states
  const [quickViewItem, setQuickViewItem] = useState<(Destination | TravelDeal | TravelExperience) | null>(null);
  const [quickViewType, setQuickViewType] = useState<'destination' | 'deal' | 'experience'>('destination');
  const [activeArticle, setActiveArticle] = useState<TravelArticle | null>(null);

  // Affiliate redirect modal state
  const [redirectTarget, setRedirectTarget] = useState<{
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  } | null>(null);
  const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);

  const currencyConfig = CURRENCIES[selectedCurrency] || CURRENCIES.USD;

  // Wishlist handler
  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
  };

  const savedDestinations = POPULAR_DESTINATIONS.filter((d) =>
    wishlistIds.includes(d.id)
  );

  // Affiliate Trigger Handlers
  const handleTriggerAffiliate = (target: {
    title: string;
    partnerName: string;
    affiliateUrl: string;
    price?: string;
    image?: string;
  }) => {
    setRedirectTarget(target);
    setIsRedirectModalOpen(true);
  };

  const handleSearchSubmit = (newSearchState: SearchFilterState) => {
    setSearchState(newSearchState);
    if (newSearchState.tab === 'flights') {
      const fromLoc = newSearchState.fromLocation || 'Houston (IAH)';
      const toLoc = newSearchState.toLocation || 'Madinah (MED)';
      const affiliateUrl = buildAviasalesRouteUrl(fromLoc, toLoc, {
        departDate: newSearchState.checkInDate,
        returnDate: newSearchState.checkOutDate,
        passengers: newSearchState.adults + newSearchState.children,
        cabinClass:
          newSearchState.cabinClass === 'Business'
            ? 'c'
            : newSearchState.cabinClass === 'First'
            ? 'f'
            : newSearchState.cabinClass === 'Premium Economy'
            ? 'w'
            : 'y'
      });

      // Directly open the official partner landing page for destination flight results
      try {
        window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback popup handled in modal
      }

      // Show transparent partner portal redirect with direct action
      handleTriggerAffiliate({
        title: `${fromLoc} to ${toLoc}`,
        partnerName: 'Aviasales Verified Flights',
        affiliateUrl,
        price: 'Live Airfare Rates'
      });
      return;
    }

    setIsSearchModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Apply Dynamic SEO & Structured Data per page
  useEffect(() => {
    if (activePage !== 'destinations') {
      const config = SEO_PAGES[activePage] || SEO_PAGES.home;
      applySEO(config);
    }
  }, [activePage]);

  // Sync URL pathname and hash changes with active page state
  useEffect(() => {
    const handleRouteSync = () => {
      // 1. Check clean pathname first (e.g. /flights, /hotels, /umrah, /about)
      const pathSegment = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/')[0].toLowerCase();
      // 2. Check hash (e.g. #flights, #destinations)
      const rawHash = window.location.hash.replace('#', '').toLowerCase();

      const routeKey = pathSegment || rawHash;

      if (routeKey.startsWith('destinations')) {
        setActivePage('destinations');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (routeKey === 'privacy' || routeKey === 'privacy-policy') {
        setActivePage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (routeKey === 'about' || routeKey === 'about-us') {
        setActivePage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (routeKey === 'contact' || routeKey === 'contact-us') {
        setActivePage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (routeKey === 'terms' || routeKey === 'terms-and-conditions') {
        setActivePage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (['home', 'flights', 'hotels', 'umrah', 'food', 'tools'].includes(routeKey)) {
        setActivePage(routeKey);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleRouteSync(); // Handle initial route on load
    window.addEventListener('hashchange', handleRouteSync);
    window.addEventListener('popstate', handleRouteSync);
    return () => {
      window.removeEventListener('hashchange', handleRouteSync);
      window.removeEventListener('popstate', handleRouteSync);
    };
  }, []);

  // Central navigation handler for clean routing and SEO canonical compliance
  const handleNavigate = (pageId: string) => {
    const validPages = [
      'flights',
      'hotels',
      'umrah',
      'food',
      'tools',
      'destinations',
      'about',
      'contact',
      'terms',
      'privacy',
      'home'
    ];

    if (validPages.includes(pageId)) {
      setActivePage(pageId);
      window.location.hash = `#${pageId}`;
      try {
        const newPath = pageId === 'home' ? '/' : `/${pageId}`;
        if (window.location.pathname !== newPath) {
          window.history.pushState(null, '', newPath);
        }
      } catch (e) {}
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `#${pageId}`;
      setActivePage('home');
      setTimeout(() => {
        scrollToSection(pageId);
      }, 50);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#101C36] selection:bg-[#0969E8] selection:text-white">
      {/* 1. Header Navigation */}
      <Header
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        selectedCurrency={selectedCurrency}
        onSelectCurrency={handleSelectCurrency}
        currencies={CURRENCIES}
        selectedLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        onBookNowClick={() => {
          if (activePage === 'hotels') {
            const el = document.getElementById('popular-destinations-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          } else {
            scrollToSection('destinations');
          }
        }}
        isCurrencyAutoDetected={isCurrencyAutoDetected}
        onResetCurrencyToAuto={handleResetCurrencyToAuto}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      <main className="flex-grow">
        {activePage === 'flights' ? (
          <FlightsPage
            currency={currencyConfig}
            onNavigate={handleNavigate}
            onBookAffiliate={handleTriggerAffiliate}
          />
        ) : activePage === 'hotels' ? (
          <HotelsPage
            currency={currencyConfig}
            onNavigate={handleNavigate}
          />
        ) : activePage === 'umrah' ? (
          <UmrahGuidePage
            currency={currencyConfig}
            onNavigate={handleNavigate}
          />
        ) : activePage === 'food' ? (
          <FoodAndTravelPage
            currency={currencyConfig}
            onNavigate={handleNavigate}
          />
        ) : activePage === 'tools' ? (
          <TravelToolsPage
            currency={currencyConfig}
            onNavigate={handleNavigate}
          />
        ) : activePage === 'destinations' ? (
          <DestinationsPage
            currency={currencyConfig}
            onNavigate={handleNavigate}
          />
        ) : activePage === 'about' ? (
          <AboutPage
            onNavigate={handleNavigate}
          />
        ) : activePage === 'contact' ? (
          <ContactPage
            onNavigate={handleNavigate}
          />
        ) : activePage === 'terms' ? (
          <TermsPage
            onNavigate={handleNavigate}
          />
        ) : activePage === 'privacy' ? (
          <PrivacyPolicyPage
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            {/* Section 1: Hero Section */}
            <Hero
              selectedLanguage={selectedLanguageCode}
              onExploreClick={() => handleNavigate('destinations')}
              onFindTripClick={() => handleNavigate('destinations')}
              onSpecialOfferClick={() => handleNavigate('umrah')}
            />

            {/* Global Travel & Route Search Widget */}
            <BookingSearchWidget 
              selectedLanguage={selectedLanguageCode}
              onSearchSubmit={handleSearchSubmit} 
            />

            {/* Section 2: Featured Categories (Flights, Hotels, Umrah Pilgrims, Food & Travel, Travel Tools, Destinations) */}
            <TravelCategories
              categories={TRAVEL_CATEGORIES}
              onSelectCategory={(category: TravelCategory) => {
                if (category.id === 'cat-umrah' || category.id === 'umrah-pilgrims') {
                  handleNavigate('umrah');
                } else if (category.id === 'cat-food' || category.id === 'food-travel') {
                  handleNavigate('food');
                } else if (category.id === 'cat-tools' || category.id === 'travel-tools') {
                  handleNavigate('tools');
                } else if (category.id === 'cat-destinations' || category.id === 'destinations') {
                  handleNavigate('destinations');
                } else if (category.id === 'cat-hotels') {
                  handleNavigate('hotels');
                } else if (category.id === 'cat-flights' || category.id === 'flights') {
                  handleNavigate('flights');
                } else {
                  handleNavigate('flights');
                }
              }}
            />

            {/* Dedicated Flights Section with Live Aviasales Partner Integration */}
            <FlightsSection
              currency={currencyConfig}
              onNavigate={handleNavigate}
              onBookAffiliate={handleTriggerAffiliate}
            />

        {/* Section 3: Popular Destinations (8 Specific Global & Pilgrimage Hubs) */}
        <PopularDestinations
          destinations={POPULAR_DESTINATIONS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onDestinationClick={(dest) => {
            setQuickViewItem(dest);
            setQuickViewType('destination');
          }}
          onBookAffiliate={(dest) => {
            const converted = Math.round(dest.startingPrice * currencyConfig.rateToUSD);
            handleTriggerAffiliate({
              title: `${dest.name}, ${dest.country}`,
              partnerName: dest.partnerName,
              affiliateUrl: dest.affiliateUrl,
              price: `${currencyConfig.symbol}${converted.toLocaleString()}`,
              image: dest.image
            });
          }}
          onViewFlights={(dest) => {
            let destCode = 'JED';
            const name = dest.name.toLowerCase();
            if (name.includes('madinah') || name.includes('medina')) destCode = 'MED';
            else if (name.includes('dubai')) destCode = 'DXB';
            else if (name.includes('istanbul')) destCode = 'IST';
            else if (name.includes('london')) destCode = 'LHR';
            else if (name.includes('york')) destCode = 'JFK';
            else if (name.includes('dhaka')) destCode = 'DAC';
            else if (name.includes('kuala') || name.includes('lumpur')) destCode = 'KUL';
            else if (name.includes('paris')) destCode = 'CDG';
            else if (name.includes('cairo')) destCode = 'CAI';
            else if (name.includes('doha')) destCode = 'DOH';
            else if (name.includes('singapore')) destCode = 'SIN';
            else if (name.includes('riyadh')) destCode = 'RUH';
            else if (name.includes('alula')) destCode = 'ULH';

            const origin = searchState.fromLocation || 'Houston (IAH)';
            const affiliateUrl = buildAviasalesRouteUrl(origin, destCode);
            try {
              window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
            } catch {
              // popup fallback handled by modal
            }
            const converted = Math.round(dest.startingPrice * currencyConfig.rateToUSD);
            handleTriggerAffiliate({
              title: `Flights to ${dest.name} (${destCode})`,
              partnerName: 'Aviasales Verified Flights',
              affiliateUrl,
              price: `${currencyConfig.symbol}${converted.toLocaleString()}`,
              image: dest.image
            });
          }}
          currency={currencyConfig}
          selectedLanguage={selectedLanguageCode}
          onNavigate={handleNavigate}
        />

        {/* Section 4: Umrah Pilgrims Highlight Section */}
        <UmrahPilgrimsSection onNavigate={handleNavigate} />

        {/* Section 5: Food & Travel Section */}
        <FoodAndTravelSection onNavigate={handleNavigate} />

        {/* Section 6: Travel Tools Section */}
        <TravelToolsSection
          currentCurrency={currencyConfig}
          onCurrencyChange={handleSelectCurrency}
          onNavigate={handleNavigate}
        />

        {/* Section 7: Why Choose Travel DuurDesh */}
        <WhyChooseSection />

        {/* Section 8: Call-to-Action Section */}
        <CallToActionSection
          onNavigate={handleNavigate}
          onExploreDestinations={() => handleNavigate('destinations')}
          onSearchFlightsHotels={() => handleNavigate('flights')}
        />

        {/* Featured Global Deals & Packages */}
        <FeaturedDeals
          deals={FEATURED_DEALS}
          onDealClick={(deal) => {
            setQuickViewItem(deal);
            setQuickViewType('deal');
          }}
          onBookDealAffiliate={(deal) => {
            const converted = Math.round(deal.discountedPrice * currencyConfig.rateToUSD);
            handleTriggerAffiliate({
              title: deal.title,
              partnerName: deal.partnerName,
              affiliateUrl: deal.affiliateUrl,
              price: `${currencyConfig.symbol}${converted.toLocaleString()}`,
              image: deal.image
            });
          }}
          currency={currencyConfig}
        />

        {/* Editorial Inspiration & Travel Guides */}
        <TravelInspiration
          articles={TRAVEL_ARTICLES}
          onArticleClick={(article) => setActiveArticle(article)}
        />

        {/* Verified Pilgrim & Traveler Reviews */}
        <TestimonialsSection testimonials={TESTIMONIALS} />

        {/* Newsletter & Updates */}
        <NewsletterCTA />
          </>
        )}
      </main>

      {/* 12. Multi-column Comprehensive Footer */}
      <Footer 
        selectedLanguage={currentLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        onSelectLanguage={handleSelectLanguage}
        onNavigate={handleNavigate}
      />

      {/* Modals & Slide-out Drawers */}
      {/* 20 Languages Selection Modal */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        selectedLanguageCode={selectedLanguageCode}
        onSelectLanguage={(lang) => {
          handleSelectLanguage(lang.code);
        }}
      />

      {/* Transparent Affiliate Partner Redirect Interstitial Modal */}
      <AffiliateRedirectModal
        isOpen={isRedirectModalOpen}
        onClose={() => setIsRedirectModalOpen(false)}
        target={redirectTarget}
      />

      {/* Item Quick View Modal */}
      <QuickViewModal
        isOpen={!!quickViewItem}
        onClose={() => setQuickViewItem(null)}
        item={quickViewItem}
        itemType={quickViewType}
        onBookAffiliate={(target) => {
          setQuickViewItem(null);
          handleTriggerAffiliate(target);
        }}
        isWishlisted={quickViewItem ? wishlistIds.includes(quickViewItem.id) : false}
        onToggleWishlist={handleToggleWishlist}
        currency={currencyConfig}
      />

      {/* Wishlist Saved Trips Slide-out Drawer */}
      <FavoritesDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        savedItems={savedDestinations}
        onRemoveWishlist={handleToggleWishlist}
        onClearAll={handleClearWishlist}
        onBookAffiliate={handleTriggerAffiliate}
        currency={currencyConfig}
      />

      {/* Article Full Reader Modal */}
      <ArticleModal
        isOpen={!!activeArticle}
        onClose={() => setActiveArticle(null)}
        article={activeArticle}
        onExploreDestinations={() => {
          setActiveArticle(null);
          scrollToSection('destinations');
        }}
      />

      {/* Search Results Filter Modal */}
      <SearchResultsModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        searchState={searchState}
        destinations={POPULAR_DESTINATIONS}
        deals={FEATURED_DEALS}
        experiences={TRAVEL_EXPERIENCES}
        onBookAffiliate={(target) => {
          setIsSearchModalOpen(false);
          handleTriggerAffiliate(target);
        }}
        currency={currencyConfig}
      />
    </div>
  );
}
