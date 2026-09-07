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
  CreditCard,
  ShoppingBag,
  Car,
  Heart,
  ChevronRight,
  Users,
  Clock,
  CheckCircle2,
  Train,
  Camera,
  Coffee
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface KualaLumpurCityGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const KualaLumpurCityGuide: React.FC<KualaLumpurCityGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#047857] via-[#065F46] to-[#064E3B] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A7F3D0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#A7F3D0]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>City Travel Guide — Kuala Lumpur, Malaysia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Kuala Lumpur City Guide — Twin Towers, Cultural Heritage & Street Gastronomy with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Kuala Lumpur, the vibrant capital of Malaysia, is a dazzling metropolis where futuristic stainless-steel skyscrapers rise harmoniously above lush tropical banyan trees, ornate Moorish minarets, and ancient limestone shrines.
            </p>
            <p>
              From marveling at the soaring Petronas Twin Towers and scaling the 272 rainbow steps of Batu Caves to shopping in the high-energy entertainment district of Bukit Bintang or indulging in 100% halal street food along Jalan Alor, Kuala Lumpur is a welcoming, modern, and affordable tropical dream.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with transparent and practical guidance. Explore our curated flight search, vetted central hotels, certified halal food directories, and smart transit tips to experience KL smoothly and safely.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Best Time to Visit KL */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Tropical Climate & Best Travel Windows</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Kuala Lumpur
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Driest Window (May to July)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Clear Skies & Sunshine</h3>
            <p className="text-xs text-gray-500 font-medium">Warm: 27°C – 33°C (81°F – 91°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Consistently sunny weather with lowest rainfall of the year. Ideal for photography at the Petronas Skybridge, exploring Batu Caves, and walking open-air street markets.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Winter Getaway (Dec to Feb)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Festivals & Holiday Buzz</h3>
            <p className="text-xs text-gray-500 font-medium">Pleasant: 25°C – 32°C (77°F – 90°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Experience the spectacular Thaipusam festival celebrations at Batu Caves, Chinese New Year red lantern displays, and massive year-end mega sales across Bukit Bintang malls.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Year-Round Travel Note
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Brief Showers & Air-Conditioned Ease</h3>
            <p className="text-xs text-gray-500 font-medium">Equatorial Climate</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Afternoon showers typically last only 45–60 minutes, cooling down the evening air. Over 80% of major attractions and transit walkways are fully covered or air-conditioned.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <Sparkles className="w-4 h-4" />
          <span>KL City Icons</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in Kuala Lumpur
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Petronas Twin Towers & KLCC Park</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Global Icon</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Rising 451.9 meters as the world’s tallest twin towers, their Islamic eight-point star architectural design is inspired by geometric principles. Walk the double-decker Skybridge at level 41 and watch the musical Lake Symphony fountain show in KLCC Park every evening at 8:00 PM.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Batu Caves & Golden Lord Murugan Statue</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">400-Million-Year-Old Limestone</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Located just 25 minutes north of the city via KTM Komuter train, Batu Caves features a towering 140-foot golden statue guarding 272 vividly painted rainbow steps. Climb up into cathedral-like limestone caverns with wild macaque monkeys and ornate shrines.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Bukit Bintang & Pavilion Shopping Hub</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Retail & Entertainment</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              KL’s premier shopping and nightlife district. Explore Pavilion KL for international luxury brands, Starhill Gallery, and Berjaya Times Square indoor roller coaster. An elevated, air-conditioned pedestrian skybridge connects Bukit Bintang seamlessly to KLCC.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Merdeka 118 & KL Tower</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">Observation Decks</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Marvel at Merdeka 118—the second-tallest building on Earth (678.9 meters)—and take in open-air views from the Sky Deck of the Menara KL Tower, featuring glass Sky Boxes hanging over the Bukit Nanas tropical rainforest reserve.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Flights to KL */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Aviation & KLIA Ekspres</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to Kuala Lumpur
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Kuala Lumpur International Airport (KLIA Terminal 1 and KLIA Terminal 2) is Southeast Asia’s premier aviation mega-hub, handling over 60 million passengers annually.
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & 28-Minute Train to City Center</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Malaysia Airlines:</strong> Full-service oneworld alliance flag carrier operating non-stop flights connecting London, Australia, Japan, the Middle East, and South Asia.</li>
            <li>• <strong>AirAsia:</strong> World's leading low-cost carrier headquartered at KLIA Terminal 2, offering ultra-affordable connections across Thailand, Indonesia, Vietnam, and Singapore.</li>
            <li>• <strong>KLIA Ekspres:</strong> Non-stop high-speed train reaching KL Sentral in downtown Kuala Lumpur in just 28 minutes, equipped with complimentary 5G Wi-Fi.</li>
          </ul>

          <div className="pt-2">
            <button
              onClick={() => onNavigate?.('flights')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
            >
              <span>[See Flights Page]</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Hotels in KL */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>5-Star Value & Central Neighborhoods</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in Kuala Lumpur
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Kuala Lumpur is globally renowned for offering the most affordable 5-star luxury hotel rates of any major global metropolis:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">KLCC & City Centre</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Direct views of the Petronas Twin Towers, tranquil park surroundings, and rooftop infinity pools at properties like Mandarin Oriental and Grand Hyatt.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Bukit Bintang Entertainment</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Step directly into world-class shopping malls, night markets, and Monorail stations. Perfect for shopping enthusiasts and food lovers.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">KL Sentral Transit Hub</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Unbeatable convenience for business travelers and day-trippers. Connect directly to KLIA Ekspres airport trains and intercity electric rail (ETS).
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate?.('hotels')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[See Hotels Page]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 6. Halal Street Food */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>100% Halal Food Paradise</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Street Food & Dining in Kuala Lumpur
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          As a Muslim-majority country with rigorous JAKIM halal certification, Kuala Lumpur offers complete peace of mind for Muslim travelers. Virtually every major dining establishment, fast-food outlet, and street food market adheres to strict halal standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Nasi Lemak Antarabangsa</h4>
            <p className="text-xs text-[#475569]">
              Located in traditional Kampung Baru, serving fragrant coconut rice wrapped in banana leaves with spicy sambal, crispy anchovies, roasted peanuts, and beef rendang.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">24-Hour Mamak Stalls</h4>
            <p className="text-xs text-[#475569]">
              Watch master cooks toss flaky Roti Canai into the air, served with creamy dhal curry and a frothy glass of hot pulled Teh Tarik milk tea.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Jalan Alor & Halal Satay</h4>
            <p className="text-xs text-[#475569]">
              Vibrant neon street night market serving skewered chicken and beef satay grilled over glowing charcoal, paired with sweet peanut gravy and pressed rice cakes.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Petaling Street (Chinatown)</h4>
            <p className="text-xs text-[#475569]">
              Covered market street famous for halal Chinese dim sum, fresh air mata kucing fruit juices, and Portuguese grilled fish with spicy tamarind dip.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate?.('food')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[See Food & Travel Page]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 7. Travel Tips */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>Local Secrets & Smart Travel Advice</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential Kuala Lumpur Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Grab E-Hailing App</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Download the Grab app on arrival. Fares are transparent and significantly cheaper and more reliable than street-hailed metered taxis.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Touch 'n Go Transit Card</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Purchase a reloadable Touch 'n Go card to tap seamlessly across MRT, LRT, Monorail lines, and rapid buses without queuing for tokens.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Free GOKL City Buses</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Look for the magenta GOKL buses that circulate key tourist routes connecting Bukit Bintang, KLCC, and Chinatown free or at nominal local rates.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Twin Towers Advance Booking</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Tickets for the Petronas Towers Skybridge and observation deck sell out days in advance. Reserve online 2 to 3 weeks ahead.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Internal Links */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>DuurDesh Travel Resources</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Explore Related Services on Travel DuurDesh
        </h2>

        <p className="text-sm text-[#475569]">
          Organize your Malaysian vacation with our dedicated travel tools:
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
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
            onClick={() => onNavigate?.('food')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[See Food & Travel Page]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate?.('tools')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[Use Travel Tools]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onNavigate?.('umrah')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-white border border-gray-200 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-2xs transition-all cursor-pointer"
          >
            <span>[Visit Umrah Guide]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-gradient-to-r from-[#047857] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Kuala Lumpur Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates in Kuala Lumpur.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Kuala Lumpur
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find Kuala Lumpur Hotels
          </button>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="pt-8 border-t border-gray-200 text-xs text-[#5E6B82] space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <strong>Travel DuurDesh</strong> — Empowering travelers worldwide with authentic guides, transparent utilities, and honest travel advice.
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
