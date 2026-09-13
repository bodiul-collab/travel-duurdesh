import React from 'react';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark,
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
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, MAKKAH_ARTICLE } from '../data/blogData';

interface BlogPostDetailPageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  post = MAKKAH_ARTICLE,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(post.canonicalUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
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
              { label: 'Blog', onClick: () => onNavigate('blog') },
              { label: post.categoryName, onClick: () => onNavigate('blog') },
              { label: post.title }
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

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold text-[#071B49] tracking-tight leading-tight font-syncopate">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
            {post.summary}
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
              alt={post.heroImage.alt}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {post.heroImage.caption && (
            <figcaption className="p-3 text-[11px] sm:text-xs text-[#64748B] text-center bg-[#F8FAFC] border-t border-[#F1F5F9]">
              {post.heroImage.caption}
            </figcaption>
          )}
        </figure>
      </div>

      {/* 4. Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-xs space-y-12 text-[#1E293B]">

          {/* Editorial Notice Banner */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#1E3A8A]">
            <Info className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <p className="font-semibold text-[#1E40AF]">
                Editorial Note for Travelers
              </p>
              <p className="text-[#1E3A8A]">
                Travel policies, visa requirements, Nusuk slot allocations, train timings, and local transit fees in Saudi Arabia are subject to periodic regulatory updates by official authorities. Always confirm current rules via official platforms such as the Ministry of Hajj and Umrah and Saudi Tourism Authority prior to departure.
              </p>
            </div>
          </div>

          {/* Section 1: Introduction to Makkah */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              1. Introduction to Makkah
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Makkah al-Mukarramah, nestled in the Sirat Mountains of western Saudi Arabia, is the holiest city in Islam. For centuries, it has stood as the spiritual beacon toward which Muslims around the globe turn five times each day in prayer. At its heart lies Masjid al-Haram, the Grand Mosque, encircling the ancient and sacred Kaaba.
              </p>
              <p>
                Stepping into Makkah for the first time is an experience marked by profound awe and intense activity. Modern Makkah blends ancient historical gravity with high-capacity 21st-century infrastructure: high-speed electric trains, multi-level pedestrian concourses, climate-controlled prayer halls, and extensive hospitality towers designed to welcome millions of visitors annually.
              </p>
            </div>
          </section>

          {/* Section 2: Why Makkah is Important to Muslim Travelers */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              2. Why Makkah is Important to Muslim Travelers
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                For Muslim travelers, Makkah is not merely a travel destination; it is the ultimate destination of spiritual devotion and repentance. The city holds the Kaaba, originally built by the Prophet Ibrahim (Abraham) and his son Ismail (peace be upon them), as the first house of worship dedicated to the One God.
              </p>
              <p>
                The city is central to two forms of pilgrimage:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong className="text-[#071B49]">Hajj:</strong> The annual major pilgrimage that forms the fifth pillar of Islam, obligatory once in a lifetime for every physically and financially able Muslim.
                </li>
                <li>
                  <strong className="text-[#071B49]">Umrah:</strong> The minor, non-obligatory pilgrimage that can be performed at any time of the year, involving Ihram, Tawaf around the Kaaba, Sa'i between Safa and Marwah, and shaving or trimming the hair.
                </li>
              </ul>
              <p>
                For in-depth step-by-step guidance on performing the spiritual rites themselves, you can reference our dedicated{' '}
                <button
                  onClick={() => onNavigate('umrah')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Umrah Pilgrim Guide
                </button>.
              </p>
            </div>
          </section>

          {/* Section 3: When to Plan a Visit */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              3. When to Plan a Visit
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Makkah experiences a hot desert climate. Determining when to visit depends heavily on weather preferences, crowd tolerance, and religious calendars:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-sm font-bold text-[#071B49]">Cooler Months (November to February)</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Daytime temperatures are comparatively milder (mid-20s to low-30s Celsius), making outdoor walking between hotels and courtyards significantly more comfortable.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-sm font-bold text-[#071B49]">Summer Months (June to August)</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Daytime temperatures frequently exceed 42°C (108°F). Outdoor movement is best concentrated around dawn (Fajr) and evening hours, taking advantage of cooled indoor prayer halls.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-sm font-bold text-[#071B49]">Ramadan & Hajj Seasons</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Unmatched spiritual rewards and communal atmosphere, accompanied by peak crowd volumes and higher accommodation rates. Advance planning of several months is essential.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-sm font-bold text-[#071B49]">Off-Peak Windows (Muharram, Safar, Shawwal)</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Immediately following the Hajj season or post-Ramadan, visitor numbers tend to normalize, offering calmer courtyards and shorter lines for services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Preparing for the Journey */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              4. Preparing for the Journey
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Thorough preparation ensures you enter Makkah calm, composed, and attentive to worship rather than overwhelmed by logistical friction.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">Visa & Entry Documentation:</strong> Saudi Arabia offers multiple entry visa categories, including Tourist e-Visas (which permit Umrah outside the official Hajj window), Transit Visas, and dedicated Umrah visas. Ensure your passport has at least six months of validity remaining from your arrival date.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">The Official Nusuk Application:</strong> Download and set up the official Nusuk app on your smartphone before departing. Nusuk manages scheduled permits for Umrah and Rawdah visits in Madinah to preserve safety and crowd comfort.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#475569]">
                    <strong className="text-[#071B49]">Physical Readiness:</strong> Performing Tawaf and Sa'i typically involves walking 5 to 7 kilometers, often on marble courtyards. Building daily walking endurance for several weeks beforehand pays immense dividends.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Getting to Makkah */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              5. Getting to Makkah
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Because Makkah does not have its own commercial airport, international travelers fly into either{' '}
                <strong className="text-[#071B49]">King Abdulaziz International Airport (JED)</strong> in Jeddah (approx. 85 km west) or{' '}
                <strong className="text-[#071B49]">Prince Mohammad bin Abdulaziz Airport (MED)</strong> in Madinah.
              </p>
              <p>
                Primary transit methods from Jeddah airport to Makkah include:
              </p>
              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                    <Plane className="w-4 h-4 text-[#0969E8]" />
                    <span>Haramain High-Speed Railway (HHR)</span>
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    The modern, high-speed train connects the Terminal 1 station directly to Makkah (Rusaifa Station) in roughly 54 minutes at speeds up to 300 km/h. It offers air-conditioned comfort and dedicated luggage racks. Booking tickets online ahead of time is recommended.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#0969E8]" />
                    <span>Official Airport Taxis & Ridesharing</span>
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Licensed airport dispatch counters, along with approved ride-hailing apps, operate 24/7. Travel time by road is usually between 60 and 90 minutes depending on highway traffic and city security checkpoints.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0969E8]" />
                    <span>Intercity Pilgrim Coaches (SAPTCO)</span>
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Regular air-conditioned buses connect Jeddah and Makkah terminals, providing a dependable, cost-efficient option for budget-conscious pilgrims.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                Looking to check flights to Jeddah or Madinah? Use our live{' '}
                <button
                  onClick={() => onNavigate('flights')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Flights Comparison Engine
                </button>{' '}
                to research flight routes.
              </p>
            </div>
          </section>

          {/* Section 6: Getting Around Makkah */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              6. Getting Around Makkah
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Inside the central Haram area (Central District / Markaziyyah), vehicular access is strictly restricted during prayer times to ensure pedestrian safety. The vast majority of transit within the central zone occurs on foot.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong className="text-[#071B49]">Makkah Bus Network:</strong> The city's modern public bus system operates frequent air-conditioned routes linking residential sectors (Aziziyah, Al Shohadaa) to central transit stations near the Haram.
                </li>
                <li>
                  <strong className="text-[#071B49]">Hotel Shuttle Buses:</strong> Many properties situated 1 to 4 kilometers from the mosque provide continuous private shuttle services that drop guests off at Kudai or Ajyad bus stations.
                </li>
                <li>
                  <strong className="text-[#071B49]">Rideshare & Taxis:</strong> Readily available across the city. Be prepared for brief traffic holds around the five daily prayer calls when roads clear for pedestrian flows.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Choosing Accommodation */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              7. Choosing Accommodation
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Accommodations in Makkah span an extensive range of budgets and distances. Selecting the right area significantly shapes your daily routine:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Clock Tower & Markaziyyah (Central Zone)</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Direct courtyard access, indoor Haram-facing audio speakers, and elevator access straight down to the prayer plazas. Premium pricing, but ideal for travelers with elderly family members or mobility constraints.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Ibrahim Al Khalil Street & Ajyad (5-15 min walk)</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    A balanced middle tier providing walkable access to the King Abdulaziz and King Fahd gates with vibrant surrounding markets, pharmacies, and dining options.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-sm font-bold text-[#071B49]">Aziziyah & Outer Neighborhoods (Shuttle Required)</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Significantly more economical per night, offering spacious suites and kitchenettes. Requires factoring in 15 to 30 minutes of shuttle transit each way for prayers.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                Browse verified Haram-front and budget stays in our{' '}
                <button
                  onClick={() => onNavigate('hotels')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Hotels Directory
                </button>.
              </p>
            </div>
          </section>

          {/* Section 8: Food and Dining Considerations */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              8. Food and Dining Considerations
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                All food served across Makkah is strictly halal by law. Due to the international influx of pilgrims, you will encounter culinary traditions spanning the Middle East, South Asia, Southeast Asia, North Africa, and Central Asia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#0969E8]" />
                    <span>Traditional Hejazi & Arabic Dishes</span>
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Kabsa, Mandi, Bukhari rice, Mutabbaq (stuffed thin pastry), and freshly grilled meats are staples available throughout the city.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-[#0969E8]" />
                    <span>Quick Dining & Food Courts</span>
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Shopping malls inside the Clock Tower, Jabal Omar, and Safwah Center host expansive food courts featuring familiar regional chains like Al Baik, alongside shawarma and juice bars.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                Discover more culinary highlights in our curated{' '}
                <button
                  onClick={() => onNavigate('food')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Halal Food & Travel Guide
                </button>.
              </p>
            </div>
          </section>

          {/* Section 9: What First-Time Visitors Should Know */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              9. What First-Time Visitors Should Know
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Entering Masjid al-Haram for the very first time can feel sensory-rich. Keep these key insights in mind:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Gate Numbering & Memory Anchors</h3>
                  <p className="text-xs text-[#64748B]">
                    Masjid al-Haram has scores of gates. Always take note of the specific gate name and number through which you enter (such as King Abdulaziz Gate 1, King Fahd Gate 79, or Bab Al-Salam). Take a photo of the entrance sign on your phone so you can easily navigate back after prayers.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Shoe Management</h3>
                  <p className="text-xs text-[#64748B]">
                    Always carry a lightweight drawstring shoe bag. Taking your footwear with you prevents losing your shoes among thousands of storage shelves when leaving through a different gate.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#E2E8F0] space-y-1">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Hydration with Zamzam</h3>
                  <p className="text-xs text-[#64748B]">
                    Cool and uncooled Zamzam water barrels with disposable cups are continuously replenished throughout every hall and plaza. Drink regularly, especially in hot weather.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Useful Packing Suggestions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              10. Useful Packing Suggestions
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Smart packing minimizes unnecessary hotel room clutter and ensures personal comfort across long days of devotion:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <Luggage className="w-3.5 h-3.5 text-[#0969E8]" />
                    <span>Pilgrim Essentials</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Ihram garments (2 sets of unstitched white towels for men)</li>
                    <li>Secure waist belt or neck pouch for passport and cards</li>
                    <li>Unscented soap, sunscreen, and moisturizer (for Ihram state)</li>
                    <li>Pocket prayer mat for outer marble courtyard use</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0969E8]" />
                    <span>Comfort & Electronics</span>
                  </h3>
                  <ul className="text-xs text-[#64748B] space-y-1.5 list-disc pl-4">
                    <li>Well-cushioned sandals (broken in beforehand to prevent blisters)</li>
                    <li>Compact power bank for your mobile phone</li>
                    <li>Saudi-compatible UK-style 3-pin plug adapter (Type G)</li>
                    <li>Lightweight drawstring shoe tote</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-[#64748B]">
                For an interactive packing checklist and currency tools, check our{' '}
                <button
                  onClick={() => onNavigate('tools')}
                  className="font-bold text-[#0969E8] hover:underline cursor-pointer"
                >
                  Travel Tools Section
                </button>.
              </p>
            </div>
          </section>

          {/* Section 11: Respectful Behavior and Local Considerations */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              11. Respectful Behavior and Local Considerations
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                Makkah is a consecrated sanctuary (Haram). Preserving patience, dignity, and mindfulness of fellow pilgrims is paramount:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-[#475569]">
                <li>
                  <strong className="text-[#071B49]">Exercise Patience:</strong> With tens of thousands of worshippers moving simultaneously, queues and congestion will occur. Avoid pushing or rushing fellow pilgrims.
                </li>
                <li>
                  <strong className="text-[#071B49]">Photography Etiquette:</strong> While mobile phone photography is generally permitted, be mindful of privacy. Avoid taking intrusive photographs of others engaged in deep prayer or supplication.
                </li>
                <li>
                  <strong className="text-[#071B49]">Sanctuary Rules:</strong> Harming plant life, chasing animals, or picking up dropped items without turning them over to security is prohibited within the Haram boundary.
                </li>
                <li>
                  <strong className="text-[#071B49]">Modesty:</strong> Loose, modest attire is standard across the city at all times for both men and women.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 12: Practical Planning Tips */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              12. Practical Planning Tips
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Arrive Early for Friday Prayers (Jumu'ah)</h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    On Fridays, the internal prayer halls fill up up to two hours prior to the Adhan. If you arrive late, you will be directed to the outdoor courtyards, where sun exposure can be intense.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Set Up Mobile Connectivity Promptly</h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Purchase an eSIM or local Saudi SIM card at the airport immediately upon landing. Consistent mobile data is essential for the Nusuk app, ridesharing, and staying in contact with travel companions.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h3 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Cash vs. Card</h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Saudi Arabia is heavily digitized; credit and debit cards (Visa, Mastercard, Mada) are accepted virtually everywhere. Carrying a small amount of Saudi Riyals (SAR) is still practical for small roadside vendors and tips.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 13: Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              13. Frequently Asked Questions
            </h2>
            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>Can non-Muslims enter the city of Makkah?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  No. Under Saudi regulations rooted in Islamic tradition, the city of Makkah and its sacred sanctuary boundary are reserved exclusively for Muslims. Road checkpoints verify documentation before entry.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>How many days should a first-time visitor spend in Makkah?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Most independent travelers allocate between 4 and 7 days in Makkah, allowing time for Umrah completion, daily congregational prayers, visiting historical sites (Jabal al-Nour, Jabal Thawr), and visiting Madinah (often 3 to 5 days).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>Are wheelchairs available for elderly or mobility-impaired pilgrims?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Yes. Masjid al-Haram provides complimentary manual wheelchairs at designated stations, as well as an official electric mobility scooter rental service operating on elevated mezzanines dedicated to Tawaf and Sa'i.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0969E8]" />
                  <span>Where can I take my Zamzam water home?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Official sealed 5-liter Zamzam bottles packaged for air travel can be purchased at King Abdulaziz International Airport in Jeddah or Prince Mohammad bin Abdulaziz Airport in Madinah, provided your airline and visa category permit checked Zamzam allowances.
                </p>
              </div>
            </div>
          </section>

          {/* Section 14: Final Thoughts */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate border-b border-[#F1F5F9] pb-3">
              14. Final Thoughts
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-[#334155] space-y-4">
              <p>
                A first journey to Makkah is a transformative life milestone. The key to a fulfilling visit lies in balancing practical logistics with spiritual humility. When you have planned your transit, secured suitable accommodation, and understood the layout of the sanctuary in advance, you free your mind to focus entirely on worship, reflection, and gratitude.
              </p>
              <p>
                May your journey be peaceful, safe, and spiritually accepted.
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
                onClick={() => onNavigate('blog/umrah-travel/first-time-umrah-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>First-Time Umrah Travel Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Preparation, packing, transit & checklist for first-time pilgrims.
                </p>
              </button>

              <button
                onClick={() => onNavigate('umrah')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Step-by-Step Umrah Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Ihram, Tawaf, Sa'i, and prayer permits.
                </p>
              </button>

              <button
                onClick={() => onNavigate('hotels')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Hotels Near Masjid al-Haram</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Compare walking distance and shuttle properties.
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
                <span>Back to All Articles &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};
