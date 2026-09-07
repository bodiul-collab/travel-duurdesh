import React from 'react';
import {
  Sparkles,
  MapPin,
  Calendar,
  Sun,
  Compass,
  Plane,
  Building2,
  UtensilsCrossed,
  ShieldCheck,
  Heart,
  ChevronRight,
  Users,
  Clock,
  CheckCircle2,
  Droplets,
  AlertTriangle,
  FileCheck,
  BookOpen
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface MakkahTravelGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const MakkahTravelGuide: React.FC<MakkahTravelGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#0B2564] via-[#071B49] to-[#040E29] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#FFB800]">
            <Heart className="w-4 h-4 text-[#FFB800]" />
            <span>Sacred Destination Guide — Kingdom of Saudi Arabia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Makkah Travel Guide — A Sacred Journey with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Makkah al-Mukarramah (Makkah the Honored) is the spiritual epicenter of the Islamic world and the birthplace of the Prophet Muhammad (peace be upon him). As the direction of daily prayer (Qibla) for nearly two billion Muslims and the sanctuary housing the holy Kaaba within Masjid al-Haram, visiting Makkah is the defining spiritual milestone of a believer's lifetime.
            </p>
            <p>
              Whether you are preparing to undertake the obligatory pilgrimage of Hajj or arriving for the deeply personal spiritual devotion of Umrah, stepping onto the sacred grounds demands meticulous logistical preparation, spiritual humility, and practical foresight.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we are honored to assist pilgrims from every corner of the earth. We provide clear, objective, and pilgrim-focused guidance on securing verified Haram-front or budget shuttle accommodations, organizing low-stress transit from King Abdulaziz International Airport (JED) in Jeddah, maintaining energy through wholesome halal nutrition, and utilizing free digital tools to schedule Tawaf and Sa’i with maximum ease.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Preparing for Your Trip */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Preparation & Visas</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Preparing for Your Sacred Trip: Visas, Timing & Weather
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Proper timing, regulatory compliance, and physical conditioning will allow you to dedicate your heart entirely to worship while avoiding unnecessary hardship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Visas */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4 h-4" />
              Visa Regulations
            </div>
            <div className="text-base font-bold text-[#071B49]">Tourist eVisa or Umrah Visa</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Citizens of over 60 countries and holders of valid US, UK, or Schengen visas can obtain an instant 1-year multiple-entry tourist eVisa online, permitting Umrah outside the Hajj window.
            </p>
          </div>

          {/* Timing */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#21B96F] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Best Time for Umrah
            </div>
            <div className="text-base font-bold text-[#071B49]">November to February</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Winter brings comfortable daytime temperatures (28°C–32°C). For low crowd density and lower hotel rates, visit in Muharram, Safar, or the first half of Rajab.
            </p>
          </div>

          {/* Weather */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1.5">
              <Sun className="w-4 h-4" />
              Climate Caution
            </div>
            <div className="text-base font-bold text-[#071B49]">Extreme Desert Sun</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Midday temperatures regularly exceed 40°C in warmer months. Schedule Tawaf late at night or during the early pre-dawn hours to avoid direct UV exposure.
            </p>
          </div>

          {/* Crowd Levels */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              Peak Crowd Windows
            </div>
            <div className="text-base font-bold text-[#071B49]">Ramadan & Hajj Season</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The last ten nights of Ramadan witness immense spiritual blessings alongside peak crowd density. Book Haram-front hotels 4–6 months in advance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Hotels Near Masjid al-Haram */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Building2 className="w-4 h-4" />
              <span>Pilgrim Lodging Strategy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Hotels Near Masjid al-Haram: Steps Away vs Shuttle Value
            </h2>
          </div>

          <button
            onClick={() => onNavigate?.('hotels')}
            className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>[See Hotels Page]</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed">
          Lodging is the single most important operational decision for pilgrims traveling with elderly parents or young children. Understanding the trade-offs between step-away courtyard hotels and budget shuttle accommodations will optimize your physical stamina and pilgrimage budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Abraj Al Bait (Clock Tower) & Jabal Omar</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Zero meters from the Haram gates. Connected via elevators directly to the prayer halls with internal audio systems broadcasting the Imam's live recitation into rooms.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Properties: Makkah Clock Royal Tower (Fairmont), Swissôtel Al Maqam, Jabal Omar Hyatt Regency.</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Ajyad & Ibrahim Al Khalil Street (5–10 Min Walk)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Within 300 to 700 meters of the King Abdulaziz and King Fahd gates. Offers outstanding balance between walking accessibility and affordable nightly pricing for families.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Properties: Pullman ZamZam Makkah, Elaf Kinda Hotel, Makarem Ajyad.</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Aziziyah & Mahbas Al Jin (Shuttle Hotels)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Located 2 to 5 kilometers away, these spacious 4-star properties operate complimentary 24/7 dedicated private shuttle buses dropping off directly at the Haram tunnels.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Properties: Park Inn by Radisson Makkah Aziziyah, Holiday Inn Makkah Al Aziziyah.</div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-dashed border-gray-300 text-center text-xs text-[#5E6B82]">
          Need help comparing walking distance, quad-sharing options, or Haram courtyard views? Review our curated selections on{' '}
          <button
            onClick={() => onNavigate?.('hotels')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Hotels Page]
          </button>
        </div>
      </section>

      {/* 4. Flights to Makkah (via Jeddah or Madinah) */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Plane className="w-4 h-4" />
              <span>Arrival Gateways</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Flights to Makkah: Jeddah (JED) & Madinah (MED) Gateways
            </h2>
          </div>

          <button
            onClick={() => onNavigate?.('flights')}
            className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>[See Flights Page]</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#475569] leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">Airlines & Arrival Routes</h3>
            <p>
              Since Makkah does not have an international commercial airport, all pilgrims arrive via <strong>King Abdulaziz International Airport (JED)</strong> in Jeddah (located approximately 80 km northwest) or <strong>Prince Mohammad Bin Abdulaziz International Airport (MED)</strong> in Madinah.
            </p>
            <p>
              National flag carriers like <strong>Saudia</strong>, <strong>Emirates</strong>, <strong>Qatar Airways</strong>, <strong>Turkish Airlines</strong>, and <strong>EgyptAir</strong> offer dedicated services with in-flight Miqat announcements when flying toward Jeddah. For affordable fares, low-cost carriers like <strong>Flynas</strong>, <strong>Flyadeal</strong>, and <strong>Air Arabia</strong> provide extensive regional connections.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">Haramain High-Speed Train & Baggage Rules</h3>
            <p>
              The state-of-the-art <strong>Haramain High-Speed Railway</strong> connects JED Airport directly to Makkah Station (Rusaifah) in just 54 minutes at speeds up to 300 km/h. Clean, air-conditioned, and quiet, it eliminates highway taxi congestion.
            </p>
            <p>
              <strong>Zamzam Baggage Allowance:</strong> Under GACA rules, international passengers holding an Umrah visa are permitted to check one standard 5-liter factory-sealed canister of Zamzam water, purchased for approx. 12.5 SAR at the airport terminal outside your standard baggage weight quota.
            </p>
          </div>
        </div>

        <div className="bg-[#EAF2FB] rounded-2xl p-4 border border-blue-200 text-xs text-[#1E3A8A] flex items-center justify-between flex-wrap gap-3">
          <span>Search the most competitive pilgrim flight routes and stopover options:</span>
          <button
            onClick={() => onNavigate?.('flights')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Flights Page]
          </button>
        </div>
      </section>

      {/* 5. Halal Food in Makkah */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Pilgrim Nutrition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Halal Food in Makkah: Nourishing Meals & Hygiene Advice
            </h2>
          </div>

          <button
            onClick={() => onNavigate?.('food')}
            className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>[See Food & Travel Page]</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed">
          In the holy city of Makkah, all food served across restaurants, food courts, and street kiosks is 100% halal. However, performing intensive physical worship like Tawaf and Sa’i requires easily digestible nutrition that sustains stamina without causing lethargy or digestive distress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Clock Tower & Mall Food Courts</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The 3rd and 4th floors of Abraj Al Bait feature air-conditioned food halls serving Arabian grilled chicken, Turkish shawarma, Indian curries, and familiar international chains. Average meal: $6–$12 USD (22–45 SAR).
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Traditional Mandi & Kabsa</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Tender roasted lamb or chicken baked over fragrant long-grain basmati rice with golden raisins and slivered almonds. Excellent for refueling between Dhuhr and Asr prayers.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Hydration & Food Safety Advice</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Drink plenty of Zamzam water, but choose room-temperature canisters rather than ice-cold water to prevent throat irritation. Avoid oily, heavily spiced deep-fried snacks right before entering the Haram.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-gray-500 text-center">
          Read our complete culinary guide for pilgrims on{' '}
          <button
            onClick={() => onNavigate?.('food')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Food & Travel Page]
          </button>
        </div>
      </section>

      {/* 6. Umrah Rituals Overview */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Spiritual Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Umrah Rituals Overview: Step-by-Step Spiritual Journey
            </h2>
          </div>

          <button
            onClick={() => onNavigate?.('umrah')}
            className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <span>[Visit Umrah Guide]</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed">
          Umrah is a concise yet spiritually profound pilgrimage consisting of four fundamental acts of devotion. Entering the sacred state of worship with knowledge and serenity transforms the physical journey into an enduring spiritual renewal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Step 1: Ihram */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <div className="w-7 h-7 rounded-full bg-[#0969E8] text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h3 className="text-sm font-bold text-[#071B49]">Ihram (The Sacred State)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Assuming the state of purity at the designated Miqat boundary before crossing into Makkah. Men don two white unstitched sheets; women wear modest clothing. Recite the Talbiyah: <em>Labbayk Allahumma Labbayk</em>.
            </p>
          </div>

          {/* Step 2: Tawaf */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <div className="w-7 h-7 rounded-full bg-[#0969E8] text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h3 className="text-sm font-bold text-[#071B49]">Tawaf (Circumambulating the Kaaba)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Circling the Holy Kaaba seven times counter-clockwise, beginning and ending at the Black Stone (Hajar al-Aswad). Followed by two rak'ahs of prayer behind Maqam Ibrahim and drinking Zamzam water.
            </p>
          </div>

          {/* Step 3: Sa'i */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <div className="w-7 h-7 rounded-full bg-[#0969E8] text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h3 className="text-sm font-bold text-[#071B49]">Sa'i (Between Safa and Marwah)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Walking seven times between the historic hills of Safa and Marwah, commemorating the devotion of Lady Hajar searching for water for her infant son Ismail. Fully air-conditioned with wheelchair concourses.
            </p>
          </div>

          {/* Step 4: Tahallul */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <div className="w-7 h-7 rounded-full bg-[#0969E8] text-white flex items-center justify-center font-bold text-xs">
              4
            </div>
            <h3 className="text-sm font-bold text-[#071B49]">Tahallul (Hair Trimming / Shaving)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Concluding the rites: men either shave their head (Halq) or trim their hair equally (Taqsir); women cut approximately one fingertip length from the ends of their hair. Ihram restrictions are fully lifted.
            </p>
          </div>
        </div>

        <div className="bg-[#FFF9EE] border border-[#FDE68A] rounded-2xl p-4.5 text-xs text-[#78350F] flex items-center justify-between flex-wrap gap-3">
          <span>Explore our exhaustive step-by-step supplication guides and video walkthroughs:</span>
          <button
            onClick={() => onNavigate?.('umrah')}
            className="font-bold text-[#D97706] hover:underline cursor-pointer"
          >
            [Visit Umrah Guide]
          </button>
        </div>
      </section>

      {/* 7. Travel Tips for Pilgrims */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>Pilgrim Wellbeing</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential Travel Tips for Pilgrims: Safety, Hydration & Elders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-[#475569] leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#0969E8]" />
              Hydration & Heat Exhaustion Prevention
            </h3>
            <p>
              In Makkah's dry climate, dehydration occurs rapidly without noticeable sweating. Drink 2.5 to 3 liters of water daily. Carry electrolyte hydration powders and drink small sips regularly while waiting for prayers in the Haram.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#21B96F]" />
              Support for Elderly Pilgrims & Wheelchairs
            </h3>
            <p>
              Masjid al-Haram provides both complimentary manual wheelchairs and licensed motorized electric golf-cart carts on designated mezzanine levels for Tawaf and Sa’i. Reserve motorized electric carts through the official Haramain portal or on-site counters.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D97706]" />
              Beating the Crowds during Tawaf
            </h3>
            <p>
              The Mataf (the courtyard surrounding the Kaaba) experiences peak congestion immediately following the Maghrib and Isha congregational prayers. The optimal window for a calm and cooler Tawaf is between 1:00 AM and 3:30 AM before Fajr prayer.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#EC4899]" />
              Shoe Management in the Haram
            </h3>
            <p>
              Always bring a compact drawstring shoe bag inside the Haram with you. Never leave footwear outside main gates unattended, as doors can look identical and exiting from a different gate can result in lost footwear on hot marble tiles.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Internal Link Suggestions */}
      <section className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0] space-y-4">
        <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider text-center">
          Explore Related Travel DuurDesh Planning Resources
        </h3>
        <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">
          Equip your journey with our booking tools, culinary guides, and pilgrimage budget estimators:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[See Flights Page]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate?.('hotels')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[See Hotels Page]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate?.('umrah')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[Visit Umrah Guide]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate?.('tools')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[Use Travel Tools]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      <section className="bg-gradient-to-r from-[#0B2564] via-[#0969E8] to-[#0B2564] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Makkah Journey with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Pilgrim Tools — designed with reverence and clarity to support your sacred voyage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('umrah')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Open Complete Umrah Guide
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find Makkah Hotels
          </button>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="pt-8 border-t border-gray-200 text-xs text-[#5E6B82] space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <strong>Travel DuurDesh</strong> — Honoring pilgrims and world voyagers with authentic guidance, transparent pricing, and practical resources.
          </div>
          <div className="flex items-center gap-4 font-semibold text-[#0969E8]">
            <button onClick={() => onNavigate?.('home')} className="hover:underline cursor-pointer">About Travel DuurDesh</button>
            <button onClick={() => onNavigate?.('contact')} className="hover:underline cursor-pointer">Contact</button>
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </article>
  );
};
