import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  Building2,
  Plane,
  Heart,
  Calendar,
  ChevronRight,
  Globe2,
  Landmark,
  Crown
} from 'lucide-react';
import { CurrencyConfig } from '../types';

// Country Guides
import { BangladeshCountryGuide } from './destinations/BangladeshCountryGuide';
import { MalaysiaCountryGuide } from './destinations/MalaysiaCountryGuide';
import { TurkeyCountryGuide } from './destinations/TurkeyCountryGuide';
import { UsaCountryGuide } from './destinations/UsaCountryGuide';
import { UkCountryGuide } from './destinations/UkCountryGuide';

// City Guides
import { DubaiTravelGuide } from './destinations/DubaiTravelGuide';
import { MakkahTravelGuide } from './destinations/MakkahTravelGuide';
import { AlUlaTravelGuide } from './destinations/AlUlaTravelGuide';
import { IstanbulTravelGuide } from './destinations/IstanbulTravelGuide';
import { NewYorkCityGuide } from './destinations/NewYorkCityGuide';
import { LondonCityGuide } from './destinations/LondonCityGuide';
import { KualaLumpurCityGuide } from './destinations/KualaLumpurCityGuide';
import { DhakaCityGuide } from './destinations/DhakaCityGuide';

import { Breadcrumbs } from './Breadcrumbs';
import { DESTINATION_SEO, SEO_PAGES, applySEO } from '../utils/seo';

export type DestinationKey =
  | 'bangladesh'
  | 'malaysia'
  | 'turkey'
  | 'usa'
  | 'uk'
  | 'dubai'
  | 'makkah'
  | 'alula'
  | 'istanbul'
  | 'newyork'
  | 'london'
  | 'kualalumpur'
  | 'dhaka';

interface DestinationsPageProps {
  currency: CurrencyConfig;
  onNavigate: (pageId: string) => void;
  initialDestination?: DestinationKey;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  currency,
  onNavigate,
  initialDestination = 'bangladesh'
}) => {
  const [activeDestination, setActiveDestination] = useState<DestinationKey>(initialDestination);
  const [activeTab, setActiveTab] = useState<'all' | 'countries' | 'cities'>('all');

  useEffect(() => {
    // Check if hash has a specific destination parameter
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('bangladesh')) {
      setActiveDestination('bangladesh');
    } else if (hash.includes('malaysia')) {
      setActiveDestination('malaysia');
    } else if (hash.includes('turkey') || hash.includes('turkiye')) {
      setActiveDestination('turkey');
    } else if (hash.includes('usa') || hash.includes('america') || hash.includes('united-states')) {
      setActiveDestination('usa');
    } else if (hash.includes('uk') || hash.includes('britain') || hash.includes('united-kingdom')) {
      setActiveDestination('uk');
    } else if (hash.includes('dubai')) {
      setActiveDestination('dubai');
    } else if (hash.includes('makkah') || hash.includes('mecca')) {
      setActiveDestination('makkah');
    } else if (hash.includes('alula')) {
      setActiveDestination('alula');
    } else if (hash.includes('istanbul')) {
      setActiveDestination('istanbul');
    } else if (hash.includes('newyork') || hash.includes('nyc')) {
      setActiveDestination('newyork');
    } else if (hash.includes('london')) {
      setActiveDestination('london');
    } else if (hash.includes('kualalumpur') || hash.includes('kl')) {
      setActiveDestination('kualalumpur');
    } else if (hash.includes('dhaka')) {
      setActiveDestination('dhaka');
    }
  }, []);

  const handleSelectDestination = (dest: DestinationKey) => {
    setActiveDestination(dest);
    window.location.hash = `#destinations-${dest}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const countryGuides: { id: DestinationKey; name: string; tag: string; icon: string }[] = [
    { id: 'bangladesh', name: 'Bangladesh', tag: 'South Asia', icon: '🇧🇩' },
    { id: 'malaysia', name: 'Malaysia', tag: 'Southeast Asia', icon: '🇲🇾' },
    { id: 'turkey', name: 'Turkey (Türkiye)', tag: 'Eurasia', icon: '🇹🇷' },
    { id: 'usa', name: 'USA', tag: 'North America', icon: '🇺🇸' },
    { id: 'uk', name: 'United Kingdom', tag: 'Western Europe', icon: '🇬🇧' },
  ];

  const cityGuides: { id: DestinationKey; name: string; tag: string; icon: string }[] = [
    { id: 'dubai', name: 'Dubai', tag: 'UAE', icon: '🏙️' },
    { id: 'makkah', name: 'Makkah', tag: 'Saudi Arabia', icon: '🕋' },
    { id: 'alula', name: 'AlUla', tag: 'Saudi Arabia', icon: '🏜️' },
    { id: 'istanbul', name: 'Istanbul', tag: 'Turkey', icon: '🕌' },
    { id: 'newyork', name: 'New York City', tag: 'USA', icon: '🗽' },
    { id: 'london', name: 'London', tag: 'UK', icon: '🎡' },
    { id: 'kualalumpur', name: 'Kuala Lumpur', tag: 'Malaysia', icon: '🗼' },
    { id: 'dhaka', name: 'Dhaka', tag: 'Bangladesh', icon: '🏛️' },
  ];

  const allGuides = [...countryGuides, ...cityGuides];
  const activeGuideObj = allGuides.find((g) => g.id === activeDestination);
  const activeGuideName = activeGuideObj?.name || 'Guide';

  useEffect(() => {
    if (DESTINATION_SEO[activeDestination]) {
      applySEO(DESTINATION_SEO[activeDestination]);
    } else {
      applySEO(SEO_PAGES.destinations);
    }
  }, [activeDestination]);

  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate('home') },
            { label: 'Destinations', onClick: () => handleSelectDestination('bangladesh') },
            { label: activeGuideName }
          ]}
        />

        {/* Navigation / Switcher Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-200 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4" />
                <span>Travel DuurDesh Complete Guides</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                Country & City Travel Guides
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white text-[#0969E8] shadow-xs'
                    : 'text-[#5E6B82] hover:text-[#0969E8]'
                }`}
              >
                All (13)
              </button>
              <button
                onClick={() => setActiveTab('countries')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'countries'
                    ? 'bg-white text-[#0969E8] shadow-xs'
                    : 'text-[#5E6B82] hover:text-[#0969E8]'
                }`}
              >
                🌍 Country Guides (5)
              </button>
              <button
                onClick={() => setActiveTab('cities')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'cities'
                    ? 'bg-white text-[#0969E8] shadow-xs'
                    : 'text-[#5E6B82] hover:text-[#0969E8]'
                }`}
              >
                🏙️ City Guides (8)
              </button>
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="space-y-4">
            {(activeTab === 'all' || activeTab === 'countries') && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#0969E8]" />
                  <span>Country Guides:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {countryGuides.map((guide) => (
                    <button
                      key={guide.id}
                      onClick={() => handleSelectDestination(guide.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeDestination === guide.id
                          ? 'bg-[#0969E8] text-white shadow-sm ring-2 ring-[#0969E8]/20'
                          : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#EDF2F7] border border-gray-200'
                      }`}
                    >
                      <span className="text-base leading-none">{guide.icon}</span>
                      <span>{guide.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'cities') && (
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0969E8]" />
                  <span>City & Holy Sanctuary Guides:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cityGuides.map((guide) => (
                    <button
                      key={guide.id}
                      onClick={() => handleSelectDestination(guide.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeDestination === guide.id
                          ? 'bg-[#0969E8] text-white shadow-sm ring-2 ring-[#0969E8]/20'
                          : 'bg-[#F8FAFC] text-[#334155] hover:bg-[#EDF2F7] border border-gray-200'
                      }`}
                    >
                      <span className="text-base leading-none">{guide.icon}</span>
                      <span>{guide.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Render Active Guide */}
        {/* Country Guides */}
        {activeDestination === 'bangladesh' && (
          <BangladeshCountryGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'malaysia' && (
          <MalaysiaCountryGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'turkey' && (
          <TurkeyCountryGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'usa' && (
          <UsaCountryGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'uk' && (
          <UkCountryGuide currency={currency} onNavigate={onNavigate} />
        )}

        {/* City Guides */}
        {activeDestination === 'dubai' && (
          <DubaiTravelGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'makkah' && (
          <MakkahTravelGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'alula' && (
          <AlUlaTravelGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'istanbul' && (
          <IstanbulTravelGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'newyork' && (
          <NewYorkCityGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'london' && (
          <LondonCityGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'kualalumpur' && (
          <KualaLumpurCityGuide currency={currency} onNavigate={onNavigate} />
        )}
        {activeDestination === 'dhaka' && (
          <DhakaCityGuide currency={currency} onNavigate={onNavigate} />
        )}
      </div>
    </div>
  );
};
