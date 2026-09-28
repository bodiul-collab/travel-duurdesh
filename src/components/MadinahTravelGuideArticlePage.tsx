import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  CheckCircle2,
  AlertCircle,
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
  Train,
  Car,
  Footprints,
  Bus,
  Coffee,
  Sparkles,
  CheckSquare,
  Square,
  Wrench,
  ChevronDown
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, MADINAH_ARTICLE } from '../data/blogData';

interface MadinahTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const MadinahTravelGuideArticlePage: React.FC<MadinahTravelGuideArticlePageProps> = ({
  post = MADINAH_ARTICLE,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(post.canonicalUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    }
  };

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const checklistSections = [
    {
      title: 'Before Departure',
      items: [
        { id: 'dep-1', text: 'Confirm passport validity (at least 6 months) and valid Saudi tourist or Umrah eVisa' },
        { id: 'dep-2', text: 'Confirm hotel bookings in Madinah with full address and local contact numbers' },
        { id: 'dep-3', text: 'Check transportation options and book Haramain train tickets or intercity transfers early' },
        { id: 'dep-4', text: 'Save emergency contacts, hotel location, and group leader phone numbers' },
        { id: 'dep-5', text: 'Review current official entry and Rawdah permit requirements via the Nusuk platform' }
      ]
    },
    {
      title: 'Before Leaving the Hotel',
      items: [
        { id: 'hot-1', text: 'Ensure smartphone is fully charged and carry a portable battery pack' },
        { id: 'hot-2', text: 'Carry essential belongings only (room key, identification, small currency)' },
        { id: 'hot-3', text: 'Note your hotel name, nearest mosque courtyard gate number, and street' },
        { id: 'hot-4', text: 'Carry water or know the nearest drinking water/Zamzam dispenser station' },
        { id: 'hot-5', text: 'Agree on a designated family meeting point in the courtyard if traveling together' }
      ]
    },
    {
      title: 'Before Leaving Madinah',
      items: [
        { id: 'lev-1', text: 'Check luggage against airline weight limits and pack securely' },
        { id: 'lev-2', text: 'Confirm onward transportation departure times and station transfer buffers' },
        { id: 'lev-3', text: 'Verify flight or hotel check-in details for your next stop' },
        { id: 'lev-4', text: 'Keep passports, boarding passes, and booking vouchers easily accessible' }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'What should first-time visitors know about Madinah?',
      answer: 'Madinah is celebrated for its calm, welcoming, and organized atmosphere centered around Al-Masjid an-Nabawi (the Prophet\'s Mosque). Daily life is structured around the five congregational prayer times, when shops close briefly and pedestrian corridors fill. The central Markaziyah area is entirely walkable, and permits for praying in the Rawdah ash-Sharifah should be reserved in advance through the official Nusuk application.'
    },
    {
      question: 'How can travelers get from Makkah to Madinah?',
      answer: 'Travelers can journey between Makkah and Madinah via the high-speed Haramain rail network, scheduled intercity bus coaches (such as SAPTCO), private taxis, or authorized group transfers. The high-speed train provides a comfortable connection between the two holy cities, while road transfers offer flexibility for travelers carrying multiple pieces of luggage. Advance booking is strongly recommended during peak seasons.'
    },
    {
      question: 'What should I consider when choosing a hotel in Madinah?',
      answer: 'Proximity to Al-Masjid an-Nabawi within the Central Area (Markaziyah) is the primary consideration. Visitors should note whether a hotel is closer to the northern/eastern gates (convenient for women\'s prayer courtyards) or southern/western gates (closer to men\'s main prayer entrances). Additionally, consider elevator availability during post-prayer rush hours, walking distance, wheelchair accessibility, and room layouts for families.'
    },
    {
      question: 'What should I pack for a trip to Madinah?',
      answer: 'Pack modest, breathable everyday clothing in lightweight fabrics, well-cushioned walking footwear or slip-on sandals for smooth marble courtyards, lightweight layers for chilly winter mornings and air-conditioned hotel lobbies, essential travel documents, international Type G plug adapters, a high-capacity power bank, personal medications, and a lightweight drawstring shoe bag for carrying footwear into the mosque.'
    },
    {
      question: 'What are some practical etiquette tips for visitors?',
      answer: 'Dress modestly with loose-fitting attire, maintain a calm and courteous demeanor, follow crowd control signage and guidance from security personnel, never walk across prayer rows directly in front of people performing Salah, be mindful when taking photographs (avoid capturing worshippers or women without permission), and keep noise levels low in both courtyards and hotel corridors.'
    }
  ];

  return (
    <article className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E7EEF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'Travel & Food', onClick: () => onNavigate('food-and-travel') },
              { label: 'Travel Guides', onClick: () => onNavigate('blog') },
              { label: 'Madinah Travel Guide for First-Time Visitors' }
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
            Madinah Travel Guide for First-Time Visitors
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
            Planning a visit to Madinah? Explore practical travel planning tips, transportation, accommodation considerations, food, local etiquette, and useful advice for first-time visitors.
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
                  Published: September 28, 2026 • Last updated: September 28, 2026
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
              alt="Madinah travel destination view for visitors"
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <figcaption className="p-3 text-[11px] sm:text-xs text-[#64748B] text-center bg-[#F8FAFC] border-t border-[#F1F5F9]">
            {post.heroImage.caption || 'The serene central courtyard and minarets surrounding Al-Masjid an-Nabawi in Madinah'}
          </figcaption>
        </figure>
      </div>

      {/* 4. Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-xs space-y-12 text-[#1E293B]">

          {/* Section: Introduction */}
          <section className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-[#334155]">
              Madinah—officially known as <em>Al-Madinah Al-Munawwarah</em> (the Illuminated City)—holds a deeply cherished place in the hearts of millions of travelers across the globe. Situated in the Hejaz region of western Saudi Arabia, it served as the sanctuary that embraced Prophet Muhammad ﷺ after the Hijrah from Makkah, becoming the cradle of early Islamic society and the spiritual resting place of the Prophet and many of his closest companions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Unlike the bustling, vertical topography of Makkah, Madinah is characterized by a tranquil, welcoming rhythm that immediately envelops arriving pilgrims and visitors. Whether you are traveling independently, visiting as part of an Umrah itinerary, or exploring the cultural heritage of Saudi Arabia for the first time, careful logistical preparation allows you to focus on your personal spiritual goals with peace of mind.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              This comprehensive travel guide provides practical, verified advice tailored for first-time visitors: from choosing travel seasons and selecting well-situated hotels to understanding transit options between Makkah and Madinah, navigating local dining, observing mosque etiquette, and avoiding common travel missteps.
            </p>
          </section>

          {/* Section: Getting to Know Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#0969E8]" />
              <span>Getting to Know Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Madinah is situated approximately 250 miles (400 kilometers) north of Makkah in an elevated desert basin flanked by volcanic basalt hills and fertile palm oases. The entire daily life of the city is anchored by the magnificent complex of <strong>Al-Masjid an-Nabawi</strong> (The Prophet&apos;s Mosque), which occupies the central core of the city.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>The Central Markaziyah</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The immediate zone surrounding the Prophet&apos;s Mosque is known as the <em>Markaziyah</em>. It is a pedestrian-friendly district packed with hotels, covered walkways, shops, and casual restaurants, designed to accommodate tens of thousands of worshippers moving to and from prayer.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#21B96F] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Daily Prayer Rhythm</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The rhythm of Madinah is measured by the five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha. Commercial establishments pause operations briefly during congregational Salah, and courtyards fill with worshippers well before the call to prayer begins.
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              For first-time visitors, the overall travel experience in Madinah is noticeably more relaxed than in transit-heavy commercial cities. Wide open courtyards with massive automated shading umbrellas, cooling water mist fans, and gleaming white marble floors provide a serene environment for reflection and study.
            </p>
          </section>

          {/* Section: When to Plan Your Visit */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#0969E8]" />
              <span>When to Plan Your Visit</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Choosing the right time to visit Madinah involves balancing seasonal weather patterns, crowd levels, accommodation availability, and personal schedules. Because Madinah is an arid desert city, temperatures fluctuate dramatically throughout the year.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1">
                <h3 className="text-sm font-bold text-[#071B49]">Autumn & Winter (October to March)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  This is widely considered the most comfortable window for travel. Daytime temperatures are generally pleasant and mild, while early mornings and late evenings can feel distinctly crisp. A light jacket, sweater, or warm shawl is recommended for pre-dawn Fajr prayers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 space-y-1">
                <h3 className="text-sm font-bold text-[#071B49]">Spring & Summer (April to September)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Summertime in Madinah experiences intense daytime heat, frequently exceeding 40°C (104°F). Visitors planning trips during these months typically schedule outdoor site visits in the early morning hours and remain indoors or under shaded courtyard pavilions during midday.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Crowd volumes peak noticeably during the Holy Month of Ramadan, the annual Hajj pilgrimage season, and regional school vacations. During these high-demand periods, hotel rooms book out weeks in advance and courtyard transit requires extra patience. Traveling during off-peak autumn weeks often offers calmer hotel lobbies and easier movement. Because entry requirements, seasonal flight schedules, and visa regulations change periodically, travelers should verify current guidance before finalizing dates.
            </p>
          </section>

          {/* Section: Getting to Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Plane className="w-5 h-5 text-[#0969E8]" />
              <span>Getting to Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Depending on your international itinerary, you have multiple convenient ways to reach Madinah:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#0969E8]" />
                  <span>Flying Directly to Madinah (MED)</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Prince Mohammad bin Abdulaziz International Airport (airport code: MED) receives direct flights from major international hubs across the Middle East, South Asia, Southeast Asia, and Europe. It is located roughly 15 to 20 kilometers northeast of the central area, with taxis and airport buses providing straightforward access to downtown hotels.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#0969E8]" />
                  <span>Arriving via Jeddah (JED)</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Many travelers land first at King Abdulaziz International Airport in Jeddah (JED), which hosts extensive global airline connections. From the airport terminal in Jeddah, you can board the high-speed Haramain train directly to Madinah, hire a registered taxi, or join an organized coach transfer.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#0969E8]" />
                  <span>Arriving from Makkah</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  For visitors performing Umrah, traveling between Makkah and Madinah is a natural segment of the journey. Modern high-speed rail and intercity highway networks connect the two holy cities efficiently.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              To compare flight options, airlines, and baggage allowances for your journey, explore our dedicated{' '}
              <button
                onClick={() => onNavigate('flights')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                Flights Page
              </button>. Always confirm terminal departure details and luggage limits directly with your chosen airline.
            </p>
          </section>

          {/* Section: Traveling Between Makkah and Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Train className="w-5 h-5 text-[#0969E8]" />
              <span>Traveling Between Makkah and Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              The overland distance between Makkah and Madinah is approximately 450 kilometers (280 miles). Planning this transfer in advance ensures a smooth transition between your accommodation in both cities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8]">
                  <Train className="w-4 h-4" />
                  <span>Haramain High-Speed Train</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  A modern electric high-speed railway that links Makkah, Jeddah, King Abdullah Economic City (KAEC), and Madinah. Travel time is approximately 2 to 2.5 hours depending on stops. Advance booking is crucial during pilgrimage seasons. Strict baggage policies apply (typically one piece of checked luggage plus one personal item).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#21B96F]">
                  <Bus className="w-4 h-4" />
                  <span>Intercity Bus Coaches</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Companies such as SAPTCO operate regular bus services along the expressway. Journey time is typically around 5 to 6 hours including rest stops. Coaches provide a budget-friendly option with generous luggage capacity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#D97706]">
                  <Car className="w-4 h-4" />
                  <span>Private Taxi / Van</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Private vehicles offer door-to-door transfer directly between hotel lobbies. This option is popular among families traveling with young children, senior citizens, or bulky baggage, allowing tailored stopovers at roadside rest areas.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              If your itinerary begins with pilgrimage rites in Makkah, consult our companion{' '}
              <button
                onClick={() => onNavigate('destinations/makkah')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                Makkah Destination Guide
              </button>{' '}
              and our{' '}
              <button
                onClick={() => onNavigate('blog/umrah-travel/first-time-umrah-travel-guide')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                First-Time Umrah Travel Guide
              </button>{' '}
              for in-depth Haram transit and logistics.
            </p>
          </section>

          {/* Section: Choosing Where to Stay in Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#0969E8]" />
              <span>Choosing Where to Stay in Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Finding the right accommodation in Madinah heavily influences your overall daily comfort. Consider the following practical factors when comparing properties:
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Proximity to Al-Masjid an-Nabawi</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Hotels situated directly on the courtyard perimeter (First Row in the Central Markaziyah) allow you to step directly onto the marble piazza without crossing vehicular streets. Properties 3 to 10 minutes further out often offer larger rooms and competitive pricing while remaining easily walkable.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">North vs. South Courtyard Considerations</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  The women&apos;s prayer entrances and designated women&apos;s courtyard access areas are situated primarily along the Northern and Eastern courtyards of the mosque. Families traveling with women and elderly relatives often prioritize hotels in the Northern Markaziyah to minimize daily walking distances.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Elevator Capacity and Peak Hours</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  In high-rise hotels around the mosque, thousands of guests descend and ascend simultaneously before and after prayer times. Look for properties with multiple high-speed elevators or opt for rooms on lower floors accessible via stairs during peak prayer departures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Family Configurations & Accessibility</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Many Madinah hotels feature triple, quad, and quintuple room arrangements tailored for families. If traveling with elderly family members or strollers, verify step-free entrances, wheelchair accessibility, and roll-in showers.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Explore available properties and hotel options through our{' '}
              <button
                onClick={() => onNavigate('hotels')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                Hotels Page
              </button>.
            </p>
          </section>

          {/* Section: Getting Around Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Footprints className="w-5 h-5 text-[#0969E8]" />
              <span>Getting Around Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Navigating Madinah is straightforward thanks to its centralized layout:
            </p>
            <ul className="space-y-2.5 list-disc list-inside text-xs sm:text-sm text-[#475569] leading-relaxed">
              <li>
                <strong className="text-[#071B49]">Walking:</strong> If your accommodation is located in the Central Markaziyah, almost all daily movements to the Prophet&apos;s Mosque, local eateries, pharmacies, and shopping arcades are on foot. The entire immediate courtyard zone is paved and vehicular-free.
              </li>
              <li>
                <strong className="text-[#071B49]">Taxis & Rideshares:</strong> Licensed city taxis and modern rideshare apps operate widely outside the pedestrian ring road. These are convenient for trips to outer historical landmarks, date orchards, and train stations.
              </li>
              <li>
                <strong className="text-[#071B49]">Public Buses & Sightseeing Shuttles:</strong> Hop-on hop-off sightseeing coaches and public bus routes connect the Prophet&apos;s Mosque with landmark sites such as Masjid Quba, Mount Uhud, and Masjid al-Qiblatain.
              </li>
              <li>
                <strong className="text-[#071B49]">Hotel Shuttles:</strong> Properties situated beyond the pedestrian perimeter frequently operate complimentary private shuttle vans with designated drop-off points near the outer courtyard gates.
              </li>
            </ul>
          </section>

          {/* Section: Important Places to Know About */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#0969E8]" />
              <span>Important Places to Know About</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Madinah is home to numerous historical sites that hold profound spiritual and cultural significance for Muslim visitors. Visiting these places provides valuable context to the history of the early Muslim community:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <h3 className="text-base font-bold text-[#071B49]">1. Al-Masjid an-Nabawi (The Prophet&apos;s Mosque)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  The spiritual centerpiece of Madinah, originally built by Prophet Muhammad ﷺ and expanded through the centuries into one of the largest mosques in the world. It features the iconic Green Dome above the sacred resting chambers, hundreds of hydraulic shading umbrellas in the open marble courtyard, and the deeply revered <em>Rawdah ash-Sharifah</em> area.
                </p>
                <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Important Permit Note:</strong> Visiting the Rawdah ash-Sharifah requires an official booking permit issued through the Saudi government&apos;s <strong>Nusuk</strong> platform. Men and women have separate designated visiting schedules, and reservations should be secured well ahead of your arrival.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <h3 className="text-base font-bold text-[#071B49]">2. Quba Mosque (Masjid Quba)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Located approximately 3 kilometers south of the central area, Masjid Quba is the first mosque established in Islamic history. Many visitors enjoy walking along the pedestrianized <em>Quba Avenue (Darb as-Sunnah)</em>—a landscaped, vehicle-free walkway lined with shaded benches, traditional date stalls, and heritage cafes connecting Al-Masjid an-Nabawi to Masjid Quba.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <h3 className="text-base font-bold text-[#071B49]">3. Masjid al-Qiblatain (The Mosque of the Two Qiblas)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Historically significant as the location where the congregation was commanded during prayer to shift the direction of prayer (Qibla) from Jerusalem (Al-Quds) toward the Kaaba in Makkah. It offers quiet prayer halls and panoramic courtyard terraces.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <h3 className="text-base font-bold text-[#071B49]">4. Mount Uhud Area (Jabal Uhud)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Located north of the city, Mount Uhud was the site of the historic Battle of Uhud. Visitors can view Archers&apos; Hill (Jabal ar-Rumah) and pay respects near the cemetery of the martyrs of Uhud. It provides a solemn reminder of sacrifice and community resilience.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                <h3 className="text-base font-bold text-[#071B49]">5. Jannat al-Baqi (Al-Baqi Cemetery)</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Situated immediately adjacent to the eastern courtyard of Al-Masjid an-Nabawi, this historic burial ground contains the resting places of numerous companions, wives, and family members of the Prophet. Access gates open during specific daily visiting hours following Fajr and Asr prayers.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] italic">
              Note: Visiting hours, security regulations, and entry arrangements for historical sites may adjust based on ongoing municipal development and seasonal crowd control. Travelers should consult local signage and official announcements upon arrival.
            </p>
          </section>

          {/* Section: Food and Dining in Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[#0969E8]" />
              <span>Food and Dining in Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dining in Madinah is an enjoyable part of the travel experience. Because Madinah is a holy city in Saudi Arabia, all food prepared in local eateries and restaurants is 100% Halal by default.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="text-sm font-bold text-[#071B49]">Traditional Saudi Specialities</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Enjoy aromatic <strong>Kabsa</strong> (fragrant spiced basmati rice with slow-roasted chicken or tender lamb), slow-smoked <strong>Mandi</strong>, and distinctive golden <strong>Ruz Madini</strong> (Madinah-style turmeric and mastic rice). Freshly baked giant <em>Tamis</em> flatbreads served with slow-cooked fava bean mash (<em>Foul Mudammas</em>) make for a satisfying, budget-friendly breakfast.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="text-sm font-bold text-[#071B49]">The World-Famous Madinah Dates</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Madinah&apos;s ancient palm orchards produce some of the finest dates in the world. Look for dark, soft <strong>Ajwa</strong> dates, sweet caramel-toned <strong>Sukari</strong>, and long amber <strong>Safawi</strong> dates. Date shops around the central courtyards and the Central Date Market offer sample tastings and travel-ready vacuum-sealed boxes.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              For comprehensive halal dining directories, regional street eats, and pilgrim dietary advice, visit our dedicated{' '}
              <button
                onClick={() => onNavigate('food-and-travel')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                Food & Travel Section
              </button>. Drink plentiful lukewarm or chilled Zamzam water from the dispensers available throughout the mosque to maintain proper hydration under the dry climate.
            </p>
          </section>

          {/* Section: What to Pack for Madinah */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Luggage className="w-5 h-5 text-[#0969E8]" />
              <span>What to Pack for Madinah</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Packing smartly prevents unnecessary discomfort. For a full, itemized pilgrimage checklist, see our comprehensive guide:{' '}
              <button
                onClick={() => onNavigate('blog/umrah-travel/what-to-pack-for-umrah')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                What to Pack for Umrah: A Practical Packing Checklist
              </button>. Key essentials specifically beneficial for Madinah include:
            </p>

            <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-[#475569] leading-relaxed">
              <li>
                <strong className="text-[#071B49]">Comfortable modest clothing:</strong> Loose, breathable cotton tunics, abayas, and light trousers suited for long hours seated on carpeted prayer floors.
              </li>
              <li>
                <strong className="text-[#071B49]">Footwear & cushioned socks:</strong> Broken-in walking shoes for outdoor streets and thick, padded or anti-slip socks for walking across cool marble courtyard piazzas.
              </li>
              <li>
                <strong className="text-[#071B49]">Lightweight layering piece:</strong> A light cardigan, windbreaker, or shawl for early morning outdoor prayers during winter months or inside air-conditioned bus transfers.
              </li>
              <li>
                <strong className="text-[#071B49]">Electronics & Connectivity:</strong> Universal Type G 3-pin wall adapter (standard across Saudi Arabia), heavy-duty charging cables, and a slim portable power bank.
              </li>
              <li>
                <strong className="text-[#071B49]">Drawstring shoe bag:</strong> A ventilated small carrier bag to keep your sandals or shoes with you inside the mosque rather than leaving them in crowded external shoe racks.
              </li>
            </ul>
          </section>

          {/* Section: Respectful Travel and Local Etiquette */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0969E8]" />
              <span>Respectful Travel and Local Etiquette</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              As one of Islam&apos;s two holiest sanctuaries, Madinah demands a high standard of respect, patience, and decorum from all visitors:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Modest Dress Standards</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Both men and women must dress modestly in loose-fitting clothing that covers the body appropriately. Women wear loose abayas or modest attire with head coverings, while men should wear long trousers or traditional thobes with shoulders covered.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Courtyard & Prayer Etiquette</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Never walk directly across prayer rows in front of individuals engaged in Salah. Keep voices gentle and respectful, especially in the vicinity of the Prophet&apos;s chambers and during prayer transitions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Photography Mindfulness</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Exercise discretion when taking personal photographs. Never photograph other worshippers, especially women or sleeping individuals, without explicit permission. Commercial filming or intrusive tripods are prohibited inside prayer halls.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#071B49]">Patience & Compliance</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Follow instructions from mosque marshals and security personnel promptly. During entry and exit rushes, bottlenecks happen naturally; maintaining patience and offering assistance to elderly visitors embodies the spirit of the city.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Practical Tips for First-Time Visitors */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0969E8]" />
              <span>Practical Tips for First-Time Visitors</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#475569]">
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Save Hotel Gate Coordinates:</strong> Note your nearest mosque gate number (e.g. Gate 22, Gate 305). Courtyard exits look identical, and gate numbers are the easiest way to orient yourself.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Allow Departure Buffers:</strong> Arrive at the mosque at least 30 to 45 minutes before congregational prayer calls to find space inside the carpeted halls rather than outdoor walkways.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Establish Family Rendezvous Points:</strong> Cell networks experience heavy congestion immediately following prayers. Agree on a specific numbered shade pillar or gate as your physical meeting spot.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Schedule Restful Afternoons:</strong> The gap between Dhuhr and Asr is typically the quietest and hottest part of the day, making it the ideal window for hotel rest and battery recharging.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Use our interactive{' '}
              <button
                onClick={() => onNavigate('tools')}
                className="text-[#0969E8] font-semibold underline hover:text-[#0759c5] cursor-pointer"
              >
                Travel Tools
              </button>{' '}
              to check currency exchange rates and weather forecasts before your journey.
            </p>
          </section>

          {/* Section: Common Mistakes to Avoid */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>Common Mistakes to Avoid</span>
            </h2>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#475569]">
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5">
                <span className="font-bold text-amber-800 shrink-0">•</span>
                <span><strong>Overpacking heavy luggage:</strong> Carrying oversized luggage complicates station transfers and hotel check-ins. Keep checked suitcases manageable and lightweight.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5">
                <span className="font-bold text-amber-800 shrink-0">•</span>
                <span><strong>Overly rigid itineraries:</strong> Trying to pack too many excursions into a single afternoon causes physical exhaustion. Prioritize prayer times and leave room for contemplation.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5">
                <span className="font-bold text-amber-800 shrink-0">•</span>
                <span><strong>Relying on outdated permit rules:</strong> Booking procedures for the Rawdah ash-Sharifah evolve regularly. Verify current slot availability directly in the official Nusuk app rather than third-party forums.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-2.5">
                <span className="font-bold text-amber-800 shrink-0">•</span>
                <span><strong>Leaving shoes unattended outside:</strong> With hundreds of thousands of identical sandals placed outside, shoes are easily displaced. Always carry your shoes in a small drawstring bag.</span>
              </div>
            </div>
          </section>

          {/* Section: Simple Madinah Trip Planning Checklist */}
          <section className="space-y-5 pt-4 border-t border-[#F1F5F9]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider">
                <CheckSquare className="w-4 h-4" />
                <span>Interactive Checklist</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Simple Madinah Trip Planning Checklist
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Tap items as you complete them to track your journey preparations across all three stages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {checklistSections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-[#071B49] pb-2 border-b border-[#E2E8F0]">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.items.map(item => {
                        const isDone = !!checkedItems[item.id];
                        return (
                          <li
                            key={item.id}
                            onClick={() => toggleCheck(item.id)}
                            className="flex items-start gap-2.5 cursor-pointer group select-none text-xs text-[#334155]"
                          >
                            <span className="mt-0.5 shrink-0 text-[#0969E8]">
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                              ) : (
                                <Square className="w-4 h-4 text-gray-400 group-hover:text-[#0969E8]" />
                              )}
                            </span>
                            <span className={isDone ? 'line-through text-gray-400' : 'text-[#334155]'}>
                              {item.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="space-y-5 pt-4 border-t border-[#F1F5F9]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Visitor FAQ</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="font-bold text-sm sm:text-base text-[#071B49]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#0969E8]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-gray-100 bg-[#F8FAFC]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Final Thoughts */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              Final Thoughts
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Visiting Madinah is an unforgettable milestone for any traveler. With thoughtful advance planning, a realistic itinerary, respectful awareness of local customs, and flexibility in navigating daily prayer rushes, your visit can be deeply tranquil and spiritually restorative.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Always remember to check current official announcements through the official Saudi Ministry of Hajj and Umrah portals, confirm your transit bookings in advance, and approach your journey with patience and gratitude.
            </p>
          </section>

          {/* Related Travel DuurDesh Resources */}
          <div className="pt-8 border-t border-[#E2E8F0] space-y-4">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider font-syncopate">
              Related Travel DuurDesh Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                onClick={() => onNavigate('blog/umrah-travel/first-time-umrah-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>First-Time Umrah Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Planning, permits, transportation & rites.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/umrah-travel/what-to-pack-for-umrah')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Umrah Packing Checklist</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Interactive checklist for clothing & essentials.
                </p>
              </button>

              <button
                onClick={() => onNavigate('destinations')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Destinations Directory</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Explore global destination guides & hubs.
                </p>
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-syncopate">
                Plan Your Journey to Madinah with Confidence
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Compare flight routes to Madinah (MED) and Jeddah (JED), check accommodations near the Prophet&apos;s Mosque, and make use of complimentary trip utilities on Travel DuurDesh.
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
