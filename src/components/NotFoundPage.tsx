import React from 'react';
import {
  Compass,
  Home,
  Plane,
  Building2,
  Heart,
  Search,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface NotFoundPageProps {
  onNavigate: (pageId: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const quickLinks = [
    {
      title: 'Flights & Airfares',
      desc: 'Compare global routes & low-cost tickets',
      id: 'flights',
      icon: Plane,
      color: 'text-[#0969E8] bg-[#0969E8]/10'
    },
    {
      title: 'Hotels Worldwide',
      desc: 'Haram-front suites & iconic city stays',
      id: 'hotels',
      icon: Building2,
      color: 'text-[#21B96F] bg-[#21B96F]/10'
    },
    {
      title: 'Umrah Pilgrims Guide',
      desc: 'Complete step-by-step spiritual handbook',
      id: 'umrah',
      icon: Heart,
      color: 'text-[#EC4899] bg-[#EC4899]/10'
    },
    {
      title: 'Destination Guides',
      desc: 'Makkah, Madinah, Dubai, Istanbul, London & more',
      id: 'destinations',
      icon: MapPin,
      color: 'text-[#FF8A2A] bg-[#FF8A2A]/10'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate('home') },
            { label: 'Page Not Found (404)' }
          ]}
        />

        {/* 404 Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#071B49] to-[#0969E8] text-white shadow-lg mx-auto">
            <Compass className="w-10 h-10 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0969E8]">
              Error 404 • Destination Unknown
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Looks Like You’ve Wandered Off The Route
            </h1>
            <p className="text-sm sm:text-base text-[#475569] max-w-lg mx-auto leading-relaxed">
              We couldn't find the page or travel route you were looking for. The link may have changed, or the address might contain a small typo.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </button>
            <button
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#071B49] font-bold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#0969E8]" />
              <span>Explore Destinations</span>
            </button>
          </div>
        </div>

        {/* Useful Navigation Grid */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-[#071B49] uppercase tracking-wider text-center">
            Or Explore These Popular Sections:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 border border-[#E2E8F0] rounded-2xl text-left transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0969E8] group-hover:translate-x-0.5 transition-all" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
