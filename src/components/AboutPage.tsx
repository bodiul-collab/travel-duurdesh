import React from 'react';
import {
  Compass,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  Globe2,
  Plane,
  Building2,
  Utensils,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Mail
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate('home') },
            { label: 'About Us' }
          ]}
        />

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-[#071B49] via-[#0D2A68] to-[#0969E8] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl space-y-6">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="relative space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
              <Compass className="w-4 h-4 text-[#38BDF8]" />
              <span>About Travel DuurDesh • Our Story & Mission</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Your Companion for Global Journeys & Sacred Pilgrimages
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Travel DuurDesh was established to solve a fundamental challenge faced by global travelers and spiritual pilgrims: accessing transparent, authentic, and culturally conscious travel guidance without misleading markups or generic filler.
            </p>
          </div>
        </header>

        {/* Mission & Purpose */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Core Purpose</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Empowering Mindful Travelers Everywhere
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              At <strong>Travel DuurDesh</strong> (meaning <em>"distant lands"</em> or journeys across the world), we bridge international travel discovery with respectful spiritual guidance. Whether you are walking around the sacred courtyards of Masjid al-Haram in Makkah, exploring historic minarets along the Bosphorus in Istanbul, wandering through the lush tea gardens of Sylhet, or boarding the subway in New York City, our platform provides vetted itineraries, unbiased price comparisons, and practical guidance.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071B49]">Dedicated Umrah Pilgrimage Guides</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Step-by-step rites from Ihram to Tahallul, Haram-front and walking-distance hotel selections, Nusuk app registration walkthroughs, and high-speed Haramain rail schedules.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21B96F]/10 text-[#21B96F] flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071B49]">Authentic Halal Culinary Directory</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Hand-curated dining dossiers highlighting wholesome, 100% halal-certified kitchens, street cuisine culture, and budget pilgrim dining across major world cities.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF8A2A]/10 text-[#FF8A2A] flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071B49]">Transparent Fare & Stay Comparison</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Zero booking fees or hidden charges. We connect travelers directly to leading verified travel providers including Aviasales, Booking.com, and Airalo eSIM data.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#071B49]">Interactive Planning Utilities</h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Free real-time currency converters, itemized trip cost calculators, season-specific packing checklists, and visa requirement checkers.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Integrity & Standards */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Trust & Integrity</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Editorial Standards & Partner Transparency
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            <p>
              Travel DuurDesh maintains strict editorial independence. Our travel recommendations, attraction guides, pilgrim checklists, and culinary reviews are researched objectively with the traveler’s best interest in mind.
            </p>
            <p>
              <strong>Affiliate Partnerships:</strong> To maintain our website as a 100% free resource for pilgrims and travelers worldwide, Travel DuurDesh participates in select affiliate marketing programs with trusted global providers (such as Aviasales, Booking.com, and Airalo). When you click an affiliate link and make a confirmed reservation or purchase, we may receive a modest referral commission at zero additional cost to you.
            </p>
            <p>
              We never inflate prices, alter rankings for commercial compensation, or recommend inferior services. All outbound affiliate links are clearly labeled and handled with full transparency.
            </p>
          </div>

          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 space-y-2.5 text-xs sm:text-sm text-[#1E3A8A]">
            <div className="font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>Our Commitments to You:</span>
            </div>
            <ul className="space-y-1.5 pl-6 list-disc">
              <li>No hidden transaction fees or surcharges added to partner bookings</li>
              <li>Respectful, accurate, and culturally informed advice for spiritual pilgrims</li>
              <li>Continuous updates of travel rules, visa information, and route options</li>
              <li>Strict protection of user privacy with zero sale of personal data</li>
            </ul>
          </div>
        </section>

        {/* Quick Navigation Callout */}
        <div className="bg-gradient-to-r from-[#071B49] to-[#0A2564] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-syncopate">Have questions or suggestions?</h3>
            <p className="text-xs sm:text-sm text-white/80">
              Our team is always open to feedback from fellow travelers and pilgrims.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>
            <button
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
            >
              <span>Explore Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
