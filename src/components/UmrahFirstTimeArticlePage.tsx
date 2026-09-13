import React from 'react';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Compass,
  Heart,
  Plane,
  Building2,
  ArrowRight,
  Info,
  ShieldCheck,
  Luggage,
  Utensils,
  ChevronRight,
  AlertTriangle,
  FileCheck,
  Smartphone,
  CreditCard,
  Footprints,
  BookOpen
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, UMRAH_FIRST_TIME_ARTICLE } from '../data/blogData';

interface UmrahFirstTimeArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const UmrahFirstTimeArticlePage: React.FC<UmrahFirstTimeArticlePageProps> = ({
  post = UMRAH_FIRST_TIME_ARTICLE,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(post.canonicalUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <article className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E7EEF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'Travel & Food', onClick: () => onNavigate('blog') },
              { label: 'Umrah Travel', onClick: () => onNavigate('blog') },
              { label: 'First-Time Umrah Travel Guide' }
            ]}
          />
        </div>
      </div>

      {/* 2. Article Header & Meta */}
      <header className="bg-white border-b border-[#E2E8F0] pt-8 pb-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] hover:bg-[#d8e8f8] px-3 py-1 rounded-full transition-colors cursor-pointer"
            >
              <Tag className="w-3 h-3" />
              <span>{post.categoryName}</span>
            </button>
            <span className="text-xs text-[#64748B] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-[#071B49] tracking-tight leading-tight font-syncopate">
            First-Time Umrah Travel Guide: What Every Traveler Should Know
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
            Planning your first Umrah? Explore practical travel preparation tips, packing advice, transportation considerations, accommodation planning, and useful guidance for your journey.
          </p>

          {/* Author & Editorial Metadata */}
          <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#071B49] text-white flex items-center justify-center font-bold text-sm">
                TD
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#071B49]">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-[#64748B]">
                  Published: September 13, 2026 • Last updated: September 13, 2026
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#071B49] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Copy canonical link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <figure className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm">
          <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
            <img
              src={post.heroImage.url}
              alt="Travel preparation essentials for a first-time Umrah journey"
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <figcaption className="p-3 text-[11px] sm:text-xs text-[#64748B] text-center bg-[#F8FAFC] border-t border-[#F1F5F9]">
            {post.heroImage.caption || 'Practical travel preparation for first-time pilgrims traveling to Makkah and Madinah'}
          </figcaption>
        </figure>
      </div>

      {/* 4. Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-xs space-y-12 text-[#1E293B]">

          {/* Editorial Advisory Banner */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#1E3A8A]">
            <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <p className="font-semibold text-[#1E40AF]">
                Important Traveler Advisory
              </p>
              <p className="text-[#1E3A8A]">
                Visa regulations, entry protocols, vaccination mandates, health declarations, and transportation policies in Saudi Arabia can evolve. Always verify current, official travel prerequisites with official Saudi government portals, the Ministry of Hajj and Umrah, your chosen airline, and licensed pilgrimage operators prior to booking or departing. For religious practices and specific fiqh rulings, consult qualified scholars or certified religious authorities.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
            <p>
              Embarking on your first Umrah is one of the most anticipated and emotionally resonant journeys of a lifetime. Traveling to the holy sanctuaries of Makkah al-Mukarramah and Madinah al-Munawwarah combines deep spiritual intent with real-world international travel logistics.
            </p>
            <p>
              This comprehensive travel guide is written specifically for first-time travelers. It focuses on the practical, organizational, and physical aspects of planning your journey: scheduling your trip, understanding flight connections, packing smartly, navigating arrivals, selecting comfortable lodging, arranging intercity transit, and maintaining personal well-being throughout your stay.
            </p>
          </div>

          {/* Section: Before You Begin Planning */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Before You Begin Planning
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                A smooth pilgrimage begins months before your plane departs. Careful foundational planning eliminates confusion and lets you focus on your worship once you arrive.
              </p>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Choosing Travel Dates</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Consider seasonal weather patterns, family commitments, and peak religious windows. Cooler months (typically November through February) provide milder daytime temperatures for walking, while periods such as Ramadan witness peak attendance and require booking months in advance.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Preparing Travel Documents</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Check your passport expiration date immediately. Most international destinations require at least six months of passport validity beyond your intended departure date. Ensure all travelers, including infants and children, possess individual valid passports.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Checking Current Entry and Travel Requirements</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Saudi Arabia provides several visa paths depending on your nationality, including Tourist e-Visas, Visa on Arrival, Umrah Visas, and Transit Visas. Because entry criteria, health requirements, and vaccination mandates are subject to change, verify the latest guidelines directly through official Saudi government portals and your carrier before finalizing reservations.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Planning Enough Time & Physical Preparation</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Avoid cramming too many activities into brief layovers. Allow extra days for rest and acclimatization. Physical stamina is essential: Tawaf and Sa'i require walking several kilometers on marble surfaces. Gradual walking practice in the weeks leading up to departure significantly reduces fatigue during the pilgrimage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Planning Your Trip */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Planning Your Trip
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Structuring your itinerary well creates a calm rhythm for your days in the Kingdom.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">Flights & Arrival City:</strong> International flights serving pilgrims typically land in either King Abdulaziz International Airport (JED) in Jeddah or Prince Mohammad bin Abdulaziz International Airport (MED) in Madinah. Arriving in Jeddah is ideal if you intend to perform Umrah first, while flying into Madinah allows you to settle and visit the Prophet's Mosque before entering the state of Ihram. You can review flight routes through our{' '}
                    <button
                      onClick={() => onNavigate('flights')}
                      className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                    >
                      Flights section
                    </button>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">Makkah and Madinah Time Allocation:</strong> Most travelers divide their trip between both holy cities—for instance, 4 to 6 nights in Makkah and 3 to 4 nights in Madinah. This distribution allows adequate time for rites, personal worship, rest, and educational visits to historic sites.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">Travel Time Between Destinations:</strong> Factor in transit durations when scheduling prayers or hotel check-ins. The distance between Makkah and Madinah is approximately 450 kilometers; the high-speed rail connects them in roughly 2 hours and 20 minutes, while highway driving takes 4.5 to 6 hours.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">Budgeting Mindfully:</strong> Costs fluctuate based on season, proximity of lodging to the holy mosques, and transit choices. Account for flights, room bookings, local transit, food, sim cards, laundry, and a small emergency buffer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: What to Pack for Umrah */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              What to Pack for Umrah
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Efficient packing prevents heavy luggage and keeps your focus where it belongs. Use this organized packing blueprint as your starting checklist:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#0969E8]" />
                    <span>Documents & Financials</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Original passports and valid visas</li>
                    <li>Printed hotel confirmations and transit tickets</li>
                    <li>Credit/debit cards and a small emergency cash reserve</li>
                    <li>Digital backups stored securely on your smartphone</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <Luggage className="w-4 h-4 text-[#0969E8]" />
                    <span>Clothing & Pilgrim Garments</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Ihram sets (2 sets recommended for male pilgrims)</li>
                    <li>Secure waist pouch or money belt for Ihram</li>
                    <li>Loose, breathable, modest modest everyday clothing</li>
                    <li>Extra undergarments and lightweight nightwear</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <Footprints className="w-4 h-4 text-[#0969E8]" />
                    <span>Comfort & Footwear</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Well-cushioned sandals or slip-on walking shoes</li>
                    <li>Lightweight drawstring shoe tote for mosque entrances</li>
                    <li>Padded socks for sensitive feet on cooler evening tiles</li>
                    <li>Compact foldable travel prayer mat</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0969E8]" />
                    <span>Personal Care & Health Supplies</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Unscented soap, lip balm, and lotion (for Ihram state)</li>
                    <li>Personal prescription medications in original packaging</li>
                    <li>Basic blister prevention tape and band-aids</li>
                    <li>Electrolyte hydration powder packets and pocket tissues</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 sm:col-span-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#0969E8]" />
                    <span>Electronics & Travel Accessories</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Universal plug adapter (Saudi Arabia predominantly utilizes UK-style Type G plugs)</li>
                    <li>Portable battery power bank (strictly carried in carry-on luggage per airline rules)</li>
                    <li>Charging cables and protective phone lanyard</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                For interactive checklists and packing tools, visit our dedicated{' '}
                <button
                  onClick={() => onNavigate('tools')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Travel Tools
                </button>{' '}
                hub.
              </p>
            </div>
          </section>

          {/* Section: Understanding the Journey */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Understanding the Journey
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Every pilgrim’s route reflects their flight schedule and personal priorities. However, most first-time travelers follow one of two standard pathways:
              </p>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Route Option A: Makkah First</h3>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Home Departure → Airport Arrival (Jeddah) → Transit to Makkah → Performance of Umrah → Spiritual Stay in Makkah → Transit to Madinah → Visitation in Madinah → Departure for Home.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-[#E2E8F0]">
                  <h3 className="text-sm font-bold text-[#071B49]">Route Option B: Madinah First</h3>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Home Departure → Airport Arrival (Madinah) → Rest and Visitation in Madinah → Assume Ihram at designated Miqat (e.g. Dhul Hulaifah) → Transit to Makkah → Performance of Umrah → Stay in Makkah → Departure for Home from Jeddah.
                  </p>
                </div>
              </div>
              <p>
                You can explore in-depth destination context in our{' '}
                <button
                  onClick={() => onNavigate('destinations/makkah')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Makkah Destination Guide
                </button>{' '}
                and review the rites in our detailed{' '}
                <button
                  onClick={() => onNavigate('umrah')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Umrah Pilgrim Guide
                </button>. You can also read our companion article:{' '}
                <button
                  onClick={() => onNavigate('blog/travel-guides/makkah-travel-guide-first-time-visitors')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Makkah Travel Guide for First-Time Visitors
                </button>.
              </p>
            </div>
          </section>

          {/* Section: Arriving in Saudi Arabia */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Arriving in Saudi Arabia
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Entering through major international terminals in Jeddah or Madinah is structured and modern, but it can be busy during pilgrimage seasons.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong className="text-[#071B49]">Keep Documents Accessible:</strong> Do not pack your passport, visa confirmation printouts, or hotel vouchers in checked baggage. Keep them in your personal carry-on pouch at all times.
                </li>
                <li>
                  <strong className="text-[#071B49]">Airport Navigation:</strong> Follow airport signage to passport control and immigration counters. Biometric verification (fingerprint and photo capture) is standard.
                </li>
                <li>
                  <strong className="text-[#071B49]">Luggage Collection & Baggage:</strong> Allow ample time at baggage reclaim, as wide-body pilgrim flights handle substantial luggage volumes. Distinct luggage tags or brightly colored straps help you identify your bags quickly.
                </li>
                <li>
                  <strong className="text-[#071B49]">Local Connectivity:</strong> Telecom service kiosks are situated right in the arrivals hall. Setting up an eSIM or local SIM card immediately gives you access to map navigation, rideshare apps, and family coordination.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Getting Around */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Getting Around
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Saudi Arabia’s transportation network offers reliable choices between cities and around holy sanctuaries:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Haramain High-Speed Railway</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Connects Jeddah Airport, Jeddah City, Makkah, and Madinah with high-speed electric trains reaching speeds up to 300 km/h. Seats and luggage space are reserved, so purchasing tickets in advance through the official rail platform is strongly recommended.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Official Airport Taxis & Approved Ridesharing</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Authorized airport taxi desks and app-based rideshare services operate round-the-clock. Confirm designated pickup points outside the terminal and verify driver details before boarding.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Intercity Coaches & City Buses</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    SAPTCO buses and the modern Makkah Bus fleet offer budget-friendly travel between transit terminals, outer districts, and central stations near the holy mosques.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                Always review current transportation schedules and operating hours prior to your travel day, as prayer times affect traffic flow near the mosques.
              </p>
            </div>
          </section>

          {/* Section: Choosing Accommodation */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Choosing Accommodation
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Your choice of hotel shapes your day-to-day comfort, rest quality, and access to the Haram. First-time pilgrims should weigh several practical considerations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Distance & Walking Route</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Properties facing the mosque courtyards provide immediate access, which is invaluable for travelers with children or elderly relatives. Properties situated 10 to 20 minutes away on foot or in outer districts (e.g. Aziziyah) offer lower room rates but require shuttle coordination.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Accessibility & Elevators</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Large high-rise hotels can experience high elevator wait times immediately following congregational prayers. Check elevator capacities and step-free access if mobility is a concern.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Family Needs & Room Setup</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Triple and quad occupancy rooms are widely available across Makkah and Madinah. Clarify bed configurations and check-in times in advance to avoid unexpected delays upon arrival.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Hotel Policies & Luggage Storage</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Confirm baggage storage availability if you arrive early in the morning before your room is ready, allowing you to freshen up and head to the mosque without luggage encumbrance.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                You can review hotel categories and district breakdowns in our{' '}
                <button
                  onClick={() => onNavigate('hotels')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Hotels section
                </button>.
              </p>
            </div>
          </section>

          {/* Section: Food and Daily Travel Needs */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Food and Daily Travel Needs
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Staying nourished and hydrated protects your energy across long prayer days:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong className="text-[#071B49]">Finding Halal Food:</strong> Food served throughout Saudi Arabia is halal. You will find local Saudi specialties (Kabsa, Mandi), South Asian delicacies, Turkish barbecues, and global fast-food options in hotel malls and surrounding streets.
                </li>
                <li>
                  <strong className="text-[#071B49]">Prioritize Hydration:</strong> Even in cooler seasons, the dry desert air demands consistent fluid intake. Drink water and Zamzam regularly rather than waiting until you feel thirsty.
                </li>
                <li>
                  <strong className="text-[#071B49]">Balanced Meal Planning:</strong> Heavy, oily meals immediately before walking to Tawaf can lead to sluggishness or indigestion. Opt for light, nutritious foods, dates, fruit, and yogurt during active daytime hours.
                </li>
                <li>
                  <strong className="text-[#071B49]">Daily Essentials:</strong> Keep small packs of tissues, unperfumed hand wipes, and a small water bottle with you when heading to the mosque for extended periods.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Practical Tips for First-Time Travelers */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Practical Tips for First-Time Travelers
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569]">
                    <strong className="text-[#071B49]">Keep Document Copies:</strong> Store paper photocopies and cloud backups of your passport and visa separate from your originals.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569]">
                    <strong className="text-[#071B49]">Keep Devices Charged:</strong> Carry a dependable power bank. Phone batteries drain faster when navigating busy crowds.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569]">
                    <strong className="text-[#071B49]">Carry Hotel Business Cards:</strong> Keep a physical hotel card in Arabic and English in your pocket to show taxi drivers if needed.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569]">
                    <strong className="text-[#071B49]">Designate Family Meeting Points:</strong> Pick an unambiguous exterior landmark (e.g., a specific numbered gate or clock tower pillar) in case you get separated in the crowd.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569]">
                    <strong className="text-[#071B49]">Allow Extra Time:</strong> Mosque courtyard gates close temporarily when internal capacity is reached before prayer calls. Arrive early.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569]">
                    <strong className="text-[#071B49]">Keep Emergency Contacts Ready:</strong> Note your group leader's number, hotel front desk, and diplomatic embassy contact on a pocket card.
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Common Mistakes First-Time Travelers Can Avoid */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Common Mistakes First-Time Travelers Can Avoid
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2]/60 space-y-1">
                  <h3 className="text-sm font-bold text-[#991B1B] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    <span>Overpacking Heavy Luggage</span>
                  </h3>
                  <p className="text-xs text-[#7F1D1D] leading-relaxed">
                    Dragging oversized bags through train stations and crowded hotel lobbies creates unnecessary strain. Pack light and make use of accessible local laundry services.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2]/60 space-y-1">
                  <h3 className="text-sm font-bold text-[#991B1B] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    <span>Making an Overly Tight Schedule</span>
                  </h3>
                  <p className="text-xs text-[#7F1D1D] leading-relaxed">
                    Scheduling departures or tours too close to prayer times frequently leads to delays, as roads around the mosques temporarily close for pedestrian movements.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2]/60 space-y-1">
                  <h3 className="text-sm font-bold text-[#991B1B] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    <span>Not Allowing Adequate Rest</span>
                  </h3>
                  <p className="text-xs text-[#7F1D1D] leading-relaxed">
                    The physical exertion of travel combined with late-night worship and early dawn prayers can cause exhaustion. Build brief naps and hydration periods into each day.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2]/60 space-y-1">
                  <h3 className="text-sm font-bold text-[#991B1B] flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
                    <span>Relying on Outdated Online Information</span>
                  </h3>
                  <p className="text-xs text-[#7F1D1D] leading-relaxed">
                    Rules regarding permit apps, gate access, and high-speed train policies change periodically. Always verify current practices through official authorities rather than old forum threads.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Umrah Planning Checklist */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Umrah Planning Checklist
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Phase 1: Before Booking</h3>
                  <ul className="text-xs text-[#64748B] space-y-1 list-disc pl-5">
                    <li>Confirm passport validity (at least 6 months remaining).</li>
                    <li>Research seasonal crowd levels and weather conditions.</li>
                    <li>Verify eligible visa categories through official channels.</li>
                    <li>Establish a realistic budget covering flights, accommodation, transit, and food.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Phase 2: Before Departure</h3>
                  <ul className="text-xs text-[#64748B] space-y-1 list-disc pl-5">
                    <li>Pack essentials using an organized checklist; avoid heavy overpacking.</li>
                    <li>Download required travel and permit applications (such as Nusuk).</li>
                    <li>Notify your bank of international travel and confirm card authorizations.</li>
                    <li>Prepare physical and digital copies of travel documents and health details.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Phase 3: At the Airport</h3>
                  <ul className="text-xs text-[#64748B] space-y-1 list-disc pl-5">
                    <li>Keep passports, visas, and boarding passes in personal carry-on bags.</li>
                    <li>Confirm where you will assume Ihram (at home, airport, or on the flight prior to Miqat).</li>
                    <li>Ensure power banks are packed strictly in carry-on baggage.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Phase 4: Upon Arrival</h3>
                  <ul className="text-xs text-[#64748B] space-y-1 list-disc pl-5">
                    <li>Proceed patiently through immigration and customs procedures.</li>
                    <li>Acquire a local SIM card or activate your pre-arranged eSIM for immediate connectivity.</li>
                    <li>Use official airport rail or authorized taxis to reach your accommodation.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Phase 5: During the Trip</h3>
                  <ul className="text-xs text-[#64748B] space-y-1 list-disc pl-5">
                    <li>Maintain consistent hydration and avoid skipping meals.</li>
                    <li>Set clear meeting landmarks with family members before entering mosques.</li>
                    <li>Pace your worship with adequate rest to prevent exhaustion.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Phase 6: Before Returning Home</h3>
                  <ul className="text-xs text-[#64748B] space-y-1 list-disc pl-5">
                    <li>Verify flight departure times and terminal information 24 hours in advance.</li>
                    <li>Check your airline's specific baggage policy and allowances for packaged Zamzam water.</li>
                    <li>Allow plenty of time for transit to the airport to ensure a relaxed check-in.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>What should I prepare before my first Umrah?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Prepare essential travel documents (a passport with at least six months validity and the correct entry visa), build physical walking stamina, research your transportation routes, and consult qualified scholars on the rites of Umrah so you understand the steps before arrival.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>How early should I start planning my Umrah trip?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Starting your planning 2 to 4 months before your intended departure gives you adequate time to monitor flight routes, compare suitable hotel locations, arrange documents, and secure permits without rushed deadlines. Peak periods like Ramadan often benefit from even earlier planning.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>What should I pack for Umrah?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Focus on essentials: valid travel documents, Ihram sets for men, modest loose garments, comfortable walking sandals, unscented toiletries for the state of Ihram, personal medications, an electrical adapter (Type G), and a power bank for your mobile phone.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>How should I plan travel between Makkah and Madinah?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  The Haramain High-Speed Railway offers the fastest and most comfortable connection (around 2 hours and 20 minutes). Alternatively, licensed intercity buses or private ground transfers are widely available. Book tickets ahead of time, especially during busy travel periods.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>Should I check current travel requirements before departure?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Yes, always. Visa regulations, health policies, application requirements, and airport protocols are subject to regulatory updates. Verify the latest official instructions from the Saudi government, the Ministry of Hajj and Umrah, and your airline before traveling.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Final Thoughts */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              Final Thoughts
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Your first Umrah is an extraordinary privilege and a spiritual turning point. While the logistical aspects of international travel require attention and care, thorough preparation allows you to navigate the journey with peace of mind.
              </p>
              <p>
                Approach each step with patience, adaptability, and respect for fellow pilgrims from all corners of the world. Remember to verify current official information before setting out, and may your pilgrimage be ease-filled, memorable, and spiritually accepted.
              </p>
            </div>
          </section>

          {/* Related Travel DuurDesh Content Hubs */}
          <div className="pt-8 border-t border-[#E2E8F0] space-y-4">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider font-syncopate">
              Related Travel DuurDesh Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => onNavigate('blog/travel-guides/makkah-travel-guide-first-time-visitors')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Makkah First-Timer Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  14-section in-depth guide to visiting Makkah.
                </p>
              </button>

              <button
                onClick={() => onNavigate('umrah')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Umrah Pilgrim Hub</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Step-by-step rites, permits, and planning.
                </p>
              </button>

              <button
                onClick={() => onNavigate('destinations/makkah')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Makkah Destination Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Sacred city overview, sites, and history.
                </p>
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-syncopate">
                Plan Your Journey with Confidence
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Explore real-time airfares to Jeddah or Madinah, check accommodations within steps of the Grand Mosque, and take advantage of free trip utilities on Travel DuurDesh.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('flights')}
                className="inline-flex items-center gap-1.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <Plane className="w-4 h-4" />
                <span>Compare Flights</span>
              </button>
              <button
                onClick={() => onNavigate('hotels')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>Search Hotels</span>
              </button>
              <button
                onClick={() => onNavigate('blog')}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold px-3 py-2.5 transition-colors cursor-pointer"
              >
                <span>Back to Travel & Food Blog &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};
