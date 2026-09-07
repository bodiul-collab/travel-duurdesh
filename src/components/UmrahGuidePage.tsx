import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  CheckCircle2,
  Calendar,
  DollarSign,
  Clock,
  Footprints,
  ShieldCheck,
  Heart,
  Luggage,
  Sparkles,
  Search,
  ChevronRight,
  Plane,
  Building2,
  Utensils,
  Coffee,
  AlertCircle,
  HelpCircle,
  Users,
  Award,
  ChevronDown,
  Info,
  Droplets,
  Scissors,
  ArrowRight,
  SlidersHorizontal,
  BookmarkCheck,
  Calculator
} from 'lucide-react';
import { CurrencyConfig } from '../types';

interface UmrahGuidePageProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const UmrahGuidePage: React.FC<UmrahGuidePageProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  // Interactive Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Interactive Budget Calculator State
  const [calcDays, setCalcDays] = useState<number>(10);
  const [calcTravelers, setCalcTravelers] = useState<number>(2);
  const [calcHotelTier, setCalcHotelTier] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [calcFlightCostUSD, setCalcFlightCostUSD] = useState<number>(650);

  // Active FAQ or Step Accordion
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatPrice = (usd: number) => {
    const converted = Math.round(usd * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  // Estimated costs calculation
  const hotelNightlyRateUSD = calcHotelTier === 'budget' ? 60 : calcHotelTier === 'mid' ? 140 : 350;
  const foodDailyUSD = calcHotelTier === 'budget' ? 18 : calcHotelTier === 'mid' ? 30 : 55;
  const transportTotalUSD = 75; // train + airport transfer per person

  const totalHotelUSD = Math.ceil(calcDays * hotelNightlyRateUSD * (Math.ceil(calcTravelers / 2)));
  const totalFlightsUSD = calcFlightCostUSD * calcTravelers;
  const totalFoodUSD = calcDays * foodDailyUSD * calcTravelers;
  const totalTransportUSD = transportTotalUSD * calcTravelers;
  const totalEstimatedUSD = totalHotelUSD + totalFlightsUSD + totalFoodUSD + totalTransportUSD;

  const umrahSteps = [
    {
      step: 1,
      title: 'Preparation & Spiritual Purity (Taharah & Ghusl)',
      shortDesc: 'Purifying the body, trimming nails, grooming, and preparing one’s intention prior to entering the sacred state.',
      details: 'Before crossing the designated Miqat boundary, pilgrims perform a complete ritual bath (Ghusl), trim nails, groom personal hair, and don clean clothes. Spiritual readiness begins with sincere repentance (Tawbah), settling outstanding personal debts, and seeking forgiveness from relatives and companions.'
    },
    {
      step: 2,
      title: 'Entering Ihram & Declaring Niyyah',
      shortDesc: 'Donning the prescribed white cloths and voicing the sacred intention (Niyyah) for Umrah.',
      details: 'For adult males, the Ihram consists of two clean, unstitched white cloth sheets (the Izar wrapped around the waist and the Rida draped across the shoulders). For women, any modest, loose-fitting, non-transparent attire is permissible. Upon donning Ihram, formulate your explicit intention in the heart and recite verbally: "Labbayka Allahumma \'Umrah" (Here I am, O Allah, answering Your call for Umrah). Immediately begin continuously chanting the Talbiyah: "Labbayk Allahumma Labbayk, Labbayka Laa Shareeka Laka Labbayk..."'
    },
    {
      step: 3,
      title: 'Observing the Miqat Boundary',
      shortDesc: 'Crossing the geographical station where pilgrims must enter the state of Ihram.',
      details: 'Pilgrims cannot pass the Miqat boundaries without being in Ihram. Key stations include: Dhul Hulaifah (Abyar Ali) for those arriving from Madinah; Al-Juhfah (near Rabigh) for travelers arriving from Syria, Egypt, and Europe; Qarn al-Manazil (As-Sail Al-Kabeer) for pilgrims from Riyadh and GCC; Yalamlam for arrivals from Yemen, South Asia, and the Indian Ocean; Dhat Irq for Iraq and the East; and Masjid Aisha at At-Tan\'im for residents already inside Makkah. If traveling by commercial airline to Jeddah or Madinah, you must enter Ihram and declare your intention onboard approximately 30 to 45 minutes prior to flyover when the flight captain announces proximity to the Miqat.'
    },
    {
      step: 4,
      title: 'Adhering to Ihram Prohibitions',
      shortDesc: 'Maintaining strict sacred discipline while remaining in the consecrated state.',
      details: 'While in Ihram, pilgrims are strictly forbidden from: applying scented perfumes or fragranced soaps; cutting hair or trimming nails; wearing stitched tailoring, trousers, or head coverings for men; wearing face veils (Niqab) or gloves for women; engaging in marital intimacy or courting; and harming plants or hunting animals. Violations may necessitate expiation (Fidyah).'
    },
    {
      step: 5,
      title: 'Arrival in Makkah & Entering Masjid al-Haram',
      shortDesc: 'Entering the Grand Mosque with reverence, supplication, and humble devotion.',
      details: 'Upon reaching the sacred grounds of Masjid al-Haram, enter with your right foot forward while reciting the entrance supplication: "Bismillah, was-salatu was-salamu \'ala Rasulillah. Allahummaftah li abwaba rahmatik" (In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, open for me the gates of Your mercy). Upon first viewing the Holy Kaaba, lower your gaze in awe, proclaim "Allahu Akbar", and make earnest personal supplications, as prayers upon first sight are deeply blessed.'
    },
    {
      step: 6,
      title: 'Tawaf (Circling the Holy Kaaba Seven Times)',
      shortDesc: 'Seven complete counter-clockwise circuits starting and ending at the Black Stone (Hajar al-Aswad).',
      details: 'For men, perform Idtiba prior to starting (leaving the right shoulder uncovered by draping the Rida under the right armpit and over the left shoulder). Align with the Black Stone (marked by green courtyard wall lights). Face the Kaaba, raise your right hand, and proclaim: "Bismillahi Allahu Akbar". Complete seven counter-clockwise circuits. During the first three circuits, men walk with brisk, vigorous steps (Raml), followed by normal walking for the final four. At the Yemeni Corner (Rukn al-Yamani), touch it if possible or pass without raising hands. Between the Yemeni Corner and the Black Stone, recite: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina \'adhaban-nar". Cover both shoulders once all seven circuits conclude.'
    },
    {
      step: 7,
      title: 'Two Rak’ahs Behind Maqam Ibrahim & Drinking Zamzam',
      shortDesc: 'Offering prayers near the Station of Abraham and refreshing with sacred Zamzam water.',
      details: 'Recite: "Wattakhidhu min Maqami Ibrahima musalla" (Take the Station of Abraham as a place of prayer, Surah 2:125). Offer two short Rak’ahs behind Maqam Ibrahim if accessible, or anywhere within the Grand Mosque if crowded. Recite Surah Al-Kafirun in the first Rak’ah and Surah Al-Ikhlas in the second. Next, proceed to the Zamzam water stations. Drink facing the Qibla, pour a little water over your head, and supplicate for beneficial knowledge, abundant provision, and healing from every illness.'
    },
    {
      step: 8,
      title: 'Sa’i Between Safa and Marwah (Seven Laps)',
      shortDesc: 'Walking seven traverses between the twin hillocks in honor of Lady Hajar’s devotion.',
      details: 'Ascend Mount Safa. Facing the Kaaba, recite Surah 2:158: "Innas-Safa wal-Marwata min sha\'a\'irillah...". Raise both hands, proclaim Takbeer three times, and make personal du\'a. Walk towards Marwah. When passing between the two sets of green fluorescent ceiling markers, male pilgrims jog briskly at a moderate pace, while women maintain a normal walking stride. Reaching Marwah completes Lap 1. Supplicate at Marwah as you did at Safa. Repeat the traverse until concluding seven complete laps at Marwah (Lap 7 ends at Marwah). The total distance is approximately 3.15 kilometers.'
    },
    {
      step: 9,
      title: 'Halq or Taqsir (Shaving or Trimming the Hair)',
      shortDesc: 'The final rite symbolizing spiritual renewal, humility, and rebirth.',
      details: 'For male pilgrims, Halq (completely shaving the head with a sterile razor) carries the highest spiritual reward, as the Prophet (PBUH) supplicated forgiveness thrice for those who shave and once for those who trim. Alternatively, Taqsir (clipping at least one inch evenly across the entire head) is fully acceptable. For female pilgrims, only Taqsir is prescribed: gather the tips of the hair and cut approximately a fingertip’s length (1 to 2 centimeters) from the ends.'
    },
    {
      step: 10,
      title: 'Completion & Exiting the State of Ihram (Tahallul)',
      shortDesc: 'All Ihram restrictions are immediately lifted, concluding the sacred pilgrimage.',
      details: 'Alhamdulillah, with the haircut completed, your Umrah is officially fulfilled and the state of Ihram is fully concluded (Tahallul). All standard prohibitions are removed, and you may shower, apply fragrance, and resume regular modest attire. Spend the remaining days in Makkah engaged in congregational prayers, voluntary Tawaf, Quranic recitation, and preparing for your journey to the Prophet’s Mosque (Masjid al-Nabawi) in Madinah.'
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#101C36] min-h-screen">
      {/* ============================================================ */}
      {/* SECTION 1: Page Title & Introduction */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#071B49] via-[#0A2464] to-[#0E2E7D] text-white pt-16 pb-20 overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0969E8]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FFB800]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-6" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-medium">Umrah Guide</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#4DA3FF]">
              <Compass className="w-4 h-4 text-[#FFB800]" />
              <span>Sacred Pilgrimage Blueprint & Practical Travel Resource</span>
            </div>

            {/* Exact Headline as requested */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Complete Umrah Guide for Pilgrims — Travel DuurDesh
            </h1>

            {/* Respectful, comprehensive Intro paragraph explaining Umrah, benefits, and platform support */}
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Umrah is the sacred spiritual journey to the Holy City of Makkah in Islam. Known as the minor pilgrimage, it is an act of profound spiritual purification, renewal, and devotion that can be undertaken at any time of the year. Whether you are stepping onto the marble piazzas of Masjid al-Haram for the very first time or returning to refresh your heart and renew your covenant with Allah, this comprehensive guide provides clear, authentic religious steps paired with modern, stress-free travel logistics. Travel DuurDesh stands beside every pilgrim with verified flight routes, vetted hotels within walking distance of the Holy Harams, reliable halal dining guides, and transparent budget calculators—ensuring your pilgrimage is spiritually fulfilling, physically safe, and seamlessly organized from start to finish.
            </p>

            {/* Quick Informational Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Footprints className="w-5 h-5 text-[#FFB800] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">4 Sacred Pillars</div>
                  <div className="text-white/70 text-[11px]">Ihram, Tawaf, Sa’i, Halq</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#21B96F] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Duration</div>
                  <div className="text-white/70 text-[11px]">2 to 4 hours for rites</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#4DA3FF] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Visa Flexibility</div>
                  <div className="text-white/70 text-[11px]">Tourist & Umrah eVisa</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-[#FF8A2A] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Spiritual Goal</div>
                  <div className="text-white/70 text-[11px]">Purification & renewal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Step-by-Step Umrah Guide */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Footprints className="w-3.5 h-3.5" />
            <span>Rituals of Devotion</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Step-by-Step Umrah Guide
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Follow the Sunnah of the Prophet Muhammad (peace be upon him) with our structured, respectful, and easy-to-follow guide through each vital stage of the pilgrimage.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {umrahSteps.map((item) => {
            const isExpanded = expandedStep === item.step;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-[#E7EEF7] shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-200"
              >
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : item.step)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isExpanded ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/20' : 'bg-[#EAF2FB] text-[#0969E8]'
                    }`}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5E6B82] mt-1 line-clamp-1">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-[#0969E8] bg-[#EAF2FB]' : 'bg-gray-100'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-gray-100 bg-[#F8FAFC]">
                    <p>{item.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Umrah Packing List */}
      {/* ============================================================ */}
      <section className="bg-[#FFFFFF] border-y border-[#E7EEF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Luggage className="w-3.5 h-3.5" />
              <span>Complete Luggage Checklist</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Umrah Packing List
            </h2>
            <p className="text-sm text-[#5E6B82] leading-relaxed">
              Travel light, comfortably, and strictly within the boundaries of Ihram requirements. Check off each essential item as you pack your bags.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: For Men */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold text-sm">
                      M
                    </span>
                    For Men
                  </h3>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">5 Core Essentials</span>
                </div>
                <div className="space-y-3">
                  {[
                    { id: 'm-1', title: 'Ihram clothing', desc: 'Two white, unstitched cotton or terrycloth sheets (Izar and Rida).' },
                    { id: 'm-2', title: 'Comfortable sandals', desc: 'Durable slip-on sandals leaving ankle bones and top instep exposed.' },
                    { id: 'm-3', title: 'Prayer mat', desc: 'Thin, foldable, lightweight pocket prayer rug for marble courtyards.' },
                    { id: 'm-4', title: 'Travel pouch', desc: 'Waist belt or under-shirt neck pouch for passport, cash, and room key.' },
                    { id: 'm-5', title: 'Toiletries (non-fragrant)', desc: 'Strictly unscented soap, shampoo, roll-on deodorant, and petroleum jelly.' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        checkedItems[item.id]
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-white border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        checkedItems[item.id] ? 'bg-emerald-600 text-white' : 'border border-gray-300 bg-white'
                      }`}>
                        {checkedItems[item.id] && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${checkedItems[item.id] ? 'line-through text-emerald-800' : 'text-[#071B49]'}`}>
                          {item.title}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: For Women */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#21B96F]/10 text-[#21B96F] flex items-center justify-center font-bold text-sm">
                      W
                    </span>
                    For Women
                  </h3>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">4 Core Essentials</span>
                </div>
                <div className="space-y-3">
                  {[
                    { id: 'w-1', title: 'Modest clothing', desc: '3–4 loose, breathable cotton abayas or long tunics with opaque undergarments.' },
                    { id: 'w-2', title: 'Comfortable shoes', desc: 'Supportive walking trainers or padded flats with breathable socks.' },
                    { id: 'w-3', title: 'Hijabs & under-caps', desc: 'Lightweight jersey or modal scarves and secure under-caps with snag-free pins.' },
                    { id: 'w-4', title: 'Travel essentials', desc: 'Feminine hygiene supplies, non-fragrant lotion, small scissors for hair trimming.' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        checkedItems[item.id]
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-white border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        checkedItems[item.id] ? 'bg-emerald-600 text-white' : 'border border-gray-300 bg-white'
                      }`}>
                        {checkedItems[item.id] && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${checkedItems[item.id] ? 'line-through text-emerald-800' : 'text-[#071B49]'}`}>
                          {item.title}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: For Everyone */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-[#FFB800]/10 text-[#D97706] flex items-center justify-center font-bold text-sm">
                      All
                    </span>
                    For Everyone
                  </h3>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase">Universal Essentials</span>
                </div>
                <div className="space-y-3">
                  {[
                    { id: 'a-1', title: 'Passport', desc: 'Valid for at least 6 months beyond travel date with visa printout.' },
                    { id: 'a-2', title: 'Travel documents', desc: 'Physical and digital copies of flight tickets, hotel vouchers, and Nusuk app.' },
                    { id: 'a-3', title: 'Medication', desc: 'Prescription medicines, throat lozenges, rehydration salts, and blister plasters.' },
                    { id: 'a-4', title: 'Water bottle', desc: 'BPA-free refillable bottle for refreshing Zamzam throughout the day.' },
                    { id: 'a-5', title: 'Snacks', desc: 'High-energy travel fuel: wholesome dates, raw almonds, and dried figs.' },
                    { id: 'a-6', title: 'Phone charger', desc: 'Universal plug adapter, charging cables, and high-capacity portable power bank.' },
                    { id: 'a-7', title: 'Small backpack', desc: 'Lightweight drawstring shoe bag and daypack for carrying footwear into mosque.' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        checkedItems[item.id]
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                          : 'bg-white border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                        checkedItems[item.id] ? 'bg-emerald-600 text-white' : 'border border-gray-300 bg-white'
                      }`}>
                        {checkedItems[item.id] && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${checkedItems[item.id] ? 'line-through text-emerald-800' : 'text-[#071B49]'}`}>
                          {item.title}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Best Time to Perform Umrah */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Seasonal Travel Calendar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Best Time to Perform Umrah
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Understanding seasonal cycles, weather patterns, school break surges, and holy periods will help you select the ideal window for your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Cheapest Months */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Cheapest Months</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The months immediately following Hajj (Muharram and Safar), as well as mid-autumn (late October to mid-November) and late spring (Shawwal), offer the lowest airline fares and up to 40% hotel discounts. Occupancy in Makkah and Madinah dips, creating tranquil courtyard conditions and budget-friendly packages.
            </p>
            <div className="text-[11px] font-bold text-[#0969E8] bg-[#F3F8FF] p-2 rounded-lg">
              Optimal window for cost-conscious pilgrims and pensioners.
            </div>
          </div>

          {/* Card 2: Crowded Months */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Crowded Months</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Crowd densities peak dramatically during the entire blessed month of Ramadan (most notably the final ten nights), the winter holiday weeks of late December and early January, and during the Mawlid period (Rabi’ al-Awwal). During these windows, the Mataf reaches maximum capacity hours before Fardh Salah.
            </p>
            <div className="text-[11px] font-bold text-[#D97706] bg-[#FFF9EE] p-2 rounded-lg">
              Plan to arrive at the mosque 90 minutes before the call to prayer.
            </div>
          </div>

          {/* Card 3: Weather Conditions */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ECFDF5] text-[#21B96F] flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Weather Conditions</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              <strong>Winter (Nov to Feb):</strong> Temperatures hover pleasantly between 18°C and 28°C, making daytime outdoor Tawaf comfortable and Sa’i effortless.<br />
              <strong>Summer (May to Sep):</strong> Extreme desert heat frequently exceeds 42°C to 48°C. During summer, pilgrims should perform rituals late at night or before dawn.
            </p>
            <div className="text-[11px] font-bold text-[#21B96F] bg-[#ECFDF5] p-2 rounded-lg">
              Winter provides optimal stamina for elderly travelers and children.
            </div>
          </div>

          {/* Card 4: School Holiday Seasons */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">School Holiday Seasons</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Periods aligning with school breaks in the UK, North America, Pakistan, India, and GCC countries (mid-term autumn breaks, December holidays, and spring breaks) witness a sharp influx of family travelers. Multi-bed quad and quintuple rooms sell out quickly; book at least 60 days in advance.
            </p>
            <div className="text-[11px] font-bold text-[#7C3AED] bg-[#F5F3FF] p-2 rounded-lg">
              Higher demand for connecting suites and child-friendly hotels.
            </div>
          </div>

          {/* Card 5: Ramadan Considerations */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3 lg:col-span-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Ramadan Considerations & High Rewards</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Performing Umrah during Ramadan holds immense spiritual merit, as the Prophet Muhammad (PBUH) stated that Umrah in Ramadan is equivalent in reward to performing Hajj in his company. However, logistical realities require meticulous preparation: hotels adjacent to the Haram command premium peak rates, Suhoor and Iftar logistics require advance coordination, and the Haramain Train tickets must be booked weeks ahead. Patience, patience, and good manners (Sabr) are paramount amidst millions of fellow worshippers.
            </p>
            <div className="text-[11px] font-bold text-[#E11D48] bg-[#FFF1F2] p-2 rounded-lg">
              Unrivaled spiritual blessings balanced by heavy crowd density.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: Umrah Travel Tips */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#071B49] to-[#0A225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB800] bg-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/15">
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>Pilgrim Wisdom & Logistics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
              Umrah Travel Tips
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Practical guidance gathered from experienced travelers and scholars to preserve your health, comfort, and focus on prayer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0969E8] flex items-center justify-center text-white">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">How to Choose Flights</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Consider flying into Prince Mohammad Bin Abdulaziz Airport in Madinah (MED) first. Starting in Madinah allows you to settle, recover from jet lag, and enjoy peaceful worship at the Prophet’s Mosque without Ihram restrictions. You can then take the comfortable 1-hour 50-minute Haramain High-Speed Train into Makkah after donning your Ihram at Dhul Hulaifah.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21B96F] flex items-center justify-center text-white">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Hotels Near the Haram</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Look beyond raw physical distance. A hotel located 300 meters away without elevator bottlenecks or steep stair climbs can be far faster to exit after prayer than a 50-story tower where waiting for elevators can take 30 to 45 minutes during post-Salah rushes. Ensure the hotel features direct in-room audio broadcasts of the Imam’s Salah.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800] flex items-center justify-center text-white">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">How to Avoid Crowds</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                The quietest hours for Tawaf are late at night between 1:00 AM and 4:00 AM (prior to Fajr prayer), or in the afternoon between Dhuhr and Asr. Avoid entering the Mataf ground floor immediately after Isha or on Friday afternoons. For cooler temperatures and open space, utilize the expansive upper roof terraces.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#06B6D4] flex items-center justify-center text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">How to Stay Hydrated</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Drink small, continuous sips of Zamzam water throughout your day rather than consuming large quantities right before prayers. To replenish essential salts lost through perspiration, carry electrolyte powder sachets. Choose room-temperature Zamzam barrels if prone to cold symptoms from refrigerated water.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Navigating Jeddah & Madinah Airports</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Jeddah’s King Abdulaziz International Airport features Terminal 1 and the North Terminal. Terminal 1 contains an integrated Haramain High-Speed Train station right inside the terminal building, allowing you to board a high-speed express train to Makkah in 35 minutes. Pre-book your train tickets online before departure.
              </p>
            </div>

            {/* Tip 6 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EC4899] flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Elderly Pilgrims & Family Tips</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                For elderly parents, register for electric mobility carts on the mezzanine floor of the Mataf, or request authorized wheelchair attendants at designated entry portals. For young children, write the hotel name and local contact phone number on a waterproof wristband, and establish a clear meeting pillar in the courtyard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: Hotels for Umrah Pilgrims */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Sacred Accommodations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Hotels for Umrah Pilgrims
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Finding comfortable lodging steps from the Holy Mosques preserves your physical energy for worship. Explore recommended areas and key amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Makkah Hotels */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Masjid al-Haram</div>
              <h3 className="text-lg font-bold text-[#071B49] mt-1">Makkah Hotels</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed mt-2">
                Properties in the Abraj Al Bait (Clock Tower) complex, Jabal Omar, and Ajyad Street offer 0 to 5-minute walk times to King Abdulaziz and King Fahd gates. Many boast direct Haram and Kaaba views with synchronized prayer audio.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-gray-500 block mb-2">Distance: 0m – 400m to piazza</span>
              <button
                onClick={() => onNavigate?.('hotels')}
                className="w-full bg-[#F3F8FF] hover:bg-[#EAF2FB] text-[#0969E8] text-xs font-bold py-2 rounded-xl transition-colors text-center cursor-pointer"
              >
                [See Hotels Page]
              </button>
            </div>
          </div>

          {/* Madinah Hotels */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="text-xs font-bold text-[#21B96F] uppercase tracking-wider">Masjid al-Nabawi</div>
              <h3 className="text-lg font-bold text-[#071B49] mt-1">Madinah Hotels</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed mt-2">
                The Northern Central Area (Markaziyah Shamaliyah) is ideal for quick access to women’s prayer gates (Gates 16–25) and the Rawdah. Southern Markaziyah provides quiet pedestrian access to the courtyards.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-gray-500 block mb-2">Distance: 50m – 300m to gates</span>
              <button
                onClick={() => onNavigate?.('hotels')}
                className="w-full bg-[#F3F8FF] hover:bg-[#EAF2FB] text-[#0969E8] text-xs font-bold py-2 rounded-xl transition-colors text-center cursor-pointer"
              >
                [See Hotels Page]
              </button>
            </div>
          </div>

          {/* Budget Pilgrim Lodging */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider">High Value</div>
              <h3 className="text-lg font-bold text-[#071B49] mt-1">Budget Hotels</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed mt-2">
                Hotels in Aziziyah, Mahbas Al Jin, and Kudai provide modern, hygienic rooms at 50% to 70% lower rates. Saudi Transport Authority shuttle buses run 24/7 directly between the hotels and the Haram bus terminals.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-gray-500 block mb-2">Rates: $35 - $75 / night</span>
              <button
                onClick={() => onNavigate?.('hotels')}
                className="w-full bg-[#F3F8FF] hover:bg-[#EAF2FB] text-[#0969E8] text-xs font-bold py-2 rounded-xl transition-colors text-center cursor-pointer"
              >
                [See Hotels Page]
              </button>
            </div>
          </div>

          {/* Family Accommodations */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-300 transition-all">
            <div>
              <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">Spacious Suites</div>
              <h3 className="text-lg font-bold text-[#071B49] mt-1">Family Hotels</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed mt-2">
                Quad and quintuple rooms with multiple individual beds, connected adjoining family suites, in-room refrigerators, electric kettles, wheelchair accessibility, and on-site halal buffet restaurants.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-gray-500 block mb-2">Amenities: Kitchenettes & cribs</span>
              <button
                onClick={() => onNavigate?.('hotels')}
                className="w-full bg-[#F3F8FF] hover:bg-[#EAF2FB] text-[#0969E8] text-xs font-bold py-2 rounded-xl transition-colors text-center cursor-pointer"
              >
                [See Hotels Page]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7: Flights for Umrah Pilgrims */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E7EEF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5" />
              <span>Aviation & Booking Advice</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Flights for Umrah Pilgrims
            </h2>
            <p className="text-sm text-[#5E6B82] leading-relaxed">
              Navigating routes, airlines, baggage allowances for holy Zamzam water, and optimal layover strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-gray-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071B49]">Best Airlines & Cheapest Routes</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Full-service carriers like Saudia, Emirates, Qatar Airways, Turkish Airlines, and Gulf Air offer dedicated prayer areas and in-flight Miqat announcements. For cost-conscious travelers, budget options like Flynas, flydubai, Air Arabia, and Wizz Air provide competitive regional fares. Booking mid-week flights 60–90 days ahead yields the highest savings.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('flights')}
                  className="text-xs font-bold text-[#0969E8] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  [See Flights Page] <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-gray-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#21B96F]/10 text-[#21B96F] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071B49]">Layover Strategies & Ihram Timing</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                If booking a connecting itinerary, choose a layover of at least 2.5 to 3 hours. This allows ample time to change into your Ihram garments, perform wudu, and comfortably prepare before boarding the final flight leg towards the Miqat. Many transit hub airports (Dubai, Doha, Istanbul) feature clean airport prayer halls with shower facilities.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('flights')}
                  className="text-xs font-bold text-[#0969E8] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  [See Flights Page] <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-gray-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800]/10 text-[#D97706] flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#071B49]">Baggage Rules & 5L Zamzam Allowance</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Under General Authority of Civil Aviation (GACA) regulations, pilgrims departing Saudi Arabia on international flights with Umrah or tourist visas are permitted to check one complimentary 5-liter factory-sealed bottle of Zamzam water. Ensure you purchase your official sealed container at King Abdulaziz (JED) or Prince Mohammad (MED) airport checkout points.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('tools')}
                  className="text-xs font-bold text-[#0969E8] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  [Use Travel Tools] <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: Halal Food for Pilgrims */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5" />
            <span>Nourishment & Halal Dining</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Halal Food for Pilgrims
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Saudi Arabia guarantees a 100% certified halal culinary environment. Discover satisfying dining options, authentic street food, and vital hygiene practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Makkah Food */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#0969E8]" />
              Halal Food in Makkah
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The multi-floor food courts in Abraj Al Bait (Clock Tower) and Jabal Omar Mall feature hundreds of choices—from traditional Saudi Mandi and fragrant chicken Kabsa to Turkish grills, South Asian biryani, and beloved local broast chicken. Ibrahim Al Khalil street features round-the-clock casual dining.
            </p>
          </div>

          {/* Madinah Food */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#21B96F]" />
              Halal Food in Madinah
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Madinah offers a peaceful dining atmosphere. The Northern Markaziyah hosts welcoming restaurants serving hot stews, grilled meats, and fresh tandoori rotis. Sultana Street is famous for family-friendly cafes, fresh fruit smoothie bars, and bakeries. Do not miss buying authentic Ajwa dates near Quba.
            </p>
          </div>

          {/* Street Food & Budget Meals */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              Street Food & Budget Dining
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Street food in the Holy Cities is affordable and wholesome. Freshly baked clay-oven Tamis bread paired with rich Foul Mudammas (fava bean dip) costs around $1.50. Savory falafel wraps, tender lamb shawarma, and stuffed Mutabbaq pastries provide hearty meals under $4 to $7 per person.
            </p>
          </div>

          {/* Food Safety Tips */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-3 lg:col-span-3">
            <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
              Food Safety & Digestive Comfort Tips
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Drink only sealed bottled water or verified fresh Zamzam dispensers. Opt for freshly cooked, piping-hot meals at high-turnover restaurants with busy patron lines. Thoroughly peel all fresh fruits before eating, avoid overly oily fried snacks right before long Tawaf walking sessions, and keep mints or ginger lozenges in your daypack.
            </p>
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => onNavigate?.('food')}
                className="text-xs font-bold text-[#0969E8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                [See Food & Travel Page] <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9: Umrah Budget Guide */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E7EEF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Financial Planning & Estimation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Umrah Budget Guide
            </h2>
            <p className="text-sm text-[#5E6B82] leading-relaxed">
              Transparent cost breakdowns across budget, mid-range, and luxury tiers to help you budget accurately and avoid unexpected expenses.
            </p>
          </div>

          {/* Expense Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200">
              <div className="text-xs font-bold text-gray-500 uppercase">Flights</div>
              <div className="text-lg font-bold text-[#071B49] mt-1">$450 – $1,100</div>
              <p className="text-[11px] text-gray-500 mt-1">Depends on departure hub, seasonality, and direct vs. 1-stop routes.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200">
              <div className="text-xs font-bold text-gray-500 uppercase">Hotels / Night</div>
              <div className="text-lg font-bold text-[#071B49] mt-1">$40 – $400+</div>
              <p className="text-[11px] text-gray-500 mt-1">Budget shuttle hotels ($40) to 5-star Haram piazza luxury ($350+).</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200">
              <div className="text-xs font-bold text-gray-500 uppercase">Food / Day</div>
              <div className="text-lg font-bold text-[#071B49] mt-1">$15 – $40</div>
              <p className="text-[11px] text-gray-500 mt-1">Wholesome local meals, falafel, shawarma, and hotel buffets.</p>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200">
              <div className="text-xs font-bold text-gray-500 uppercase">Transit & Rail</div>
              <div className="text-lg font-bold text-[#071B49] mt-1">$50 – $120</div>
              <p className="text-[11px] text-gray-500 mt-1">Haramain high-speed train tickets, airport transfers, and local taxis.</p>
            </div>
          </div>

          {/* Explicit Placeholder as instructed by User: "[Insert Budget Calculator Here]" */}
          <div className="bg-[#F8FAFC] border-2 border-dashed border-[#BCD3F7] rounded-3xl p-6 sm:p-10">
            <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
              <span className="inline-block bg-[#0969E8]/10 text-[#0969E8] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                Interactive Cost Estimator
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#071B49] font-mono">
                [Insert Budget Calculator Here]
              </p>
              <p className="text-xs text-[#5E6B82]">
                Estimate your total pilgrimage expenses dynamically based on duration, party size, and preferred accommodation tier.
              </p>
            </div>

            {/* Functional Interactive Calculator Widget */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-[#5E6B82] uppercase mb-1.5">Number of Days</label>
                  <select
                    value={calcDays}
                    onChange={(e) => setCalcDays(Number(e.target.value))}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:border-blue-500"
                  >
                    <option value={7}>7 Days (Quick Umrah)</option>
                    <option value={10}>10 Days (Recommended)</option>
                    <option value={14}>14 Days (Two Weeks)</option>
                    <option value={21}>21 Days (Extended Stay)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E6B82] uppercase mb-1.5">Travelers</label>
                  <select
                    value={calcTravelers}
                    onChange={(e) => setCalcTravelers(Number(e.target.value))}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:border-blue-500"
                  >
                    <option value={1}>1 Pilgrim (Solo)</option>
                    <option value={2}>2 Pilgrims (Couple / Pair)</option>
                    <option value={4}>4 Pilgrims (Family / Quad)</option>
                    <option value={6}>6 Pilgrims (Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E6B82] uppercase mb-1.5">Hotel Category</label>
                  <select
                    value={calcHotelTier}
                    onChange={(e) => setCalcHotelTier(e.target.value as any)}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:border-blue-500"
                  >
                    <option value="budget">Budget Shuttle (~$60/night)</option>
                    <option value="mid">Mid-Range 300m (~$140/night)</option>
                    <option value="luxury">5-Star Haram Front (~$350/night)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5E6B82] uppercase mb-1.5">Flight Est. / Person (USD)</label>
                  <input
                    type="number"
                    value={calcFlightCostUSD}
                    onChange={(e) => setCalcFlightCostUSD(Number(e.target.value))}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:border-blue-500"
                    min={200}
                    max={3000}
                    step={50}
                  />
                </div>
              </div>

              {/* Total Calculation Output */}
              <div className="bg-[#071B49] text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">Total Estimated Trip Cost</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#4DA3FF] font-syncopate mt-0.5">
                    {formatPrice(totalEstimatedUSD)}
                  </div>
                  <div className="text-[11px] text-white/60 mt-1">
                    ~{formatPrice(Math.round(totalEstimatedUSD / calcTravelers))} per pilgrim for {calcDays} days ({calcTravelers} travelers)
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onNavigate?.('hotels')}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    [See Hotels Page]
                  </button>
                  <button
                    onClick={() => onNavigate?.('flights')}
                    className="bg-[#0969E8] hover:bg-[#085ac7] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/20"
                  >
                    [See Flights Page]
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10: Internal Link Suggestions */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h3 className="text-xl font-bold text-[#071B49] font-syncopate">
            Explore More Travel DuurDesh Resources
          </h3>
          <p className="text-xs text-[#5E6B82]">
            Navigate seamlessly between dedicated guides, accommodation listings, and flight search tools.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
          <button
            onClick={() => onNavigate?.('flights')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <Plane className="w-5 h-5 text-[#0969E8] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[#071B49]">[See Flights Page]</div>
          </button>

          <button
            onClick={() => onNavigate?.('hotels')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <Building2 className="w-5 h-5 text-[#21B96F] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[#071B49]">[See Hotels Page]</div>
          </button>

          <button
            onClick={() => onNavigate?.('food')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-[#FF8A2A] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[#071B49]">[Explore Food & Travel Guides]</div>
          </button>

          <button
            onClick={() => onNavigate?.('tools')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all group cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#7C3AED] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[#071B49]">[Use Travel Tools]</div>
          </button>

          <button
            onClick={() => onNavigate?.('destinations')}
            className="p-4 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-sm transition-all group cursor-pointer col-span-2 sm:col-span-1"
          >
            <MapPin className="w-5 h-5 text-[#E11D48] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-[#071B49]">[Visit Destinations Page]</div>
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11: Call-to-Action */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-r from-[#071B49] via-[#0969E8] to-[#071B49] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-[#FFB800]">
            <Sparkles className="w-4 h-4" />
            <span>Embark on Your Spiritual Journey</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-syncopate">
            Start Planning Your Umrah Journey with Travel DuurDesh
          </h2>

          <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            Find Flights, Hotels, Guides, and Travel Tools for Pilgrims. Let Travel DuurDesh assist you with verified accommodations, seamless flight searches, and authentic religious guidance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate?.('hotels')}
              className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>[See Hotels Page]</span>
            </button>
            <button
              onClick={() => onNavigate?.('flights')}
              className="bg-white text-[#071B49] hover:bg-white/90 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <Plane className="w-4 h-4 text-[#0969E8]" />
              <span>[See Flights Page]</span>
            </button>
            <button
              onClick={() => onNavigate?.('tools')}
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#4DA3FF]" />
              <span>[Use Travel Tools]</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
