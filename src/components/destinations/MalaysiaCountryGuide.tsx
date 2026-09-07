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
  Palmtree,
  Mountain,
  Landmark
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface MalaysiaCountryGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const MalaysiaCountryGuide: React.FC<MalaysiaCountryGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0369A1] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#7DD3FC]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>Country Travel Guide — Southeast Asia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Malaysia Country Guide — Tropical Splendor, Cultural Harmony & Modernity with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Welcome to Malaysia—a dynamic Southeast Asian nation where futuristic skyscrapers stand alongside million-year-old rainforests, sun-drenched tropical islands, and multicultural heritage towns. Officially promoted under "Malaysia, Truly Asia," the country represents a captivating blend of Malay, Chinese, Indian, and indigenous Bornean communities living in peaceful harmony.
            </p>
            <p>
              From the iconic silver silhouettes of the Petronas Twin Towers in Kuala Lumpur to the heritage shophouses and Michelin-awarded hawker stalls of Penang, Malaysia offers unforgettable experiences for family vacations, luxury escapes, eco-adventures, and Muslim-friendly travel.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with honest price comparisons and comprehensive advice. Discover low-fare flights, premier hotels, halal dining directories, and smart travel calculators to ensure your Malaysian holiday is smooth and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview of Malaysia */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0369A1] uppercase tracking-wider bg-[#F0F9FF] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>Geography & Cultural Identity</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Overview of Malaysia: Two Distinct Worlds in One Nation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-sm leading-relaxed">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#0369A1]" />
              Peninsular Malaysia
            </h3>
            <p>
              Connecting Thailand to Singapore, Peninsular Malaysia contains bustling capital Kuala Lumpur, colonial Malacca, Penang’s gastronomic center, and cool mountain tea hill stations in Cameron Highlands.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Mountain className="w-4 h-4 text-[#0369A1]" />
              Malaysian Borneo (Sabah & Sarawak)
            </h3>
            <p>
              Across the South China Sea lies Malaysian Borneo, boasting Mount Kinabalu, ancient virgin rainforests, endangered orangutan sanctuaries, and world-class diving off Sipadan Island.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#0369A1]" />
              Gold-Standard Halal Ecosystem
            </h3>
            <p>
              Consistently ranked as the world’s #1 Muslim-friendly destination (Global Muslim Travel Index), Malaysia features universal JAKIM halal food assurance, prayer rooms in all malls, and family values.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Best Time to Visit */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Monsoons & Climate Guide</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Malaysia: Regional Seasons Explained
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              West Coast Peak (KL, Penang, Langkawi)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">December to April</h3>
            <p className="text-xs text-gray-500 font-medium">Warm & Sunny: 28°C – 32°C</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Drier weather, calm seas, and bright blue skies. Perfect for island hopping in Langkawi, walking heritage tours in Penang, and open-air rooftop dining in Kuala Lumpur.
            </p>
          </div>

          <div className="border border-teal-200 bg-teal-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              East Coast & Borneo (Perhentian, Tioman, Sabah)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">May to September</h3>
            <p className="text-xs text-gray-500 font-medium">Crystal Water Season: 27°C – 31°C</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              When the northeast monsoon ends, east coast islands feature crystal-clear water with up to 30 meters of diving visibility, sea turtle nesting, and prime jungle hiking weather in Borneo.
            </p>
          </div>

          <div className="border border-purple-200 bg-purple-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Festive Months
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Year-Round Celebrations</h3>
            <p className="text-xs text-gray-500 font-medium">Hari Raya, CNY, Deepavali</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Festivals provide memorable cultural experiences—from the bustling Ramadan bazaars to luminous lanterns during Chinese New Year and Thaipusam processions at Batu Caves.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Major Cities */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Prime Destinations</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Major Cities & Islands in Malaysia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">1. Kuala Lumpur — Metropolis of the Future</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Federal Capital</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Home to the Petronas Twin Towers, Merdeka 118 (world's 2nd tallest tower), bustling night markets in Bukit Bintang, and modern transport networks connecting mega malls and ancient temples.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">2. Penang (George Town) — Food & Culture Capital</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">UNESCO World Heritage</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Celebrated internationally for its interactive street art murals, colonial British architecture, clan jetties, and legendary street food stalls serving Char Kway Teow and Penang Laksa.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">3. Langkawi — The Jewel of Kedah</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">UNESCO Global Geopark</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              An archipelago of 99 tropical islands featuring duty-free shopping, luxury beachfront resorts along Pantai Cenang and Datai Bay, the Langkawi Sky Bridge, and mangrove boat safaris.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">4. Malacca (Melaka) — Historic Trading Port</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">Historic Center</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Step back into centuries of maritime spice trade with Portuguese A Famosa fortress, Dutch Stadthuys red square, scenic river cruises, and weekend antique shopping along Jonker Street.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Flights to Malaysia */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Aviation & Gateway Hubs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to Malaysia
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Malaysia's primary global aviation hub is <strong>Kuala Lumpur International Airport (KUL)</strong>, comprising KLIA Terminal 1 (full-service flag carriers) and KLIA Terminal 2 (AirAsia and low-cost regional flights). Secondary international airports include Penang (PEN), Langkawi (LGK), and Kota Kinabalu (BKI).
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Airlines & Fast Airport Transit</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Malaysia Airlines:</strong> Full-service oneworld alliance carrier offering premium long-haul flights from London, Tokyo, Sydney, Doha, and global cities.</li>
            <li>• <strong>AirAsia:</strong> Headquartered in KL, offering budget-friendly flights across all major Southeast Asian cities, India, China, and Australia.</li>
            <li>• <strong>KLIA Ekspres Train:</strong> Direct high-speed train whisking passengers from KLIA Terminal 1/2 to KL Sentral in just 28 minutes.</li>
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

      {/* 6. Hotels in Malaysia */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Hotels & Island Resorts</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in Malaysia
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Malaysia is celebrated for providing some of the highest hospitality value in Asia, where luxury 5-star suites cost a fraction of rates in neighboring international capitals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">KL Skyline & Sky-Pool Hotels</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Properties around KLCC, Bukit Bintang, and KL Sentral feature panoramic infinity rooftop pools looking out onto the illuminated Petronas Towers.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Penang Heritage Mansions</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Stay in restored 19th-century Peranakan townhouses and boutique properties in George Town, combining antique furnishings with modern luxury.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Langkawi Beach Resorts</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              From family-friendly beach hotels along Pantai Cenang to secluded 5-star rainforest villas with private plunge pools in Tanjung Rhu.
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

      {/* 7. Halal Food & Night Markets */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Culinary Culture & Street Hawker Stalls</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Food & Night Markets in Malaysia
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Malaysia's federal Department of Islamic Development (JAKIM) sets global standards for halal certification. Halal food is universally available—from high-end hotel restaurants to bustling neighborhood night markets (<em>pasar malam</em>).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Nasi Lemak</h4>
            <p className="text-xs text-[#475569]">
              The national dish: fragrant coconut-milk rice served with fiery sambal, roasted peanuts, crunchy anchovies, boiled egg, and crispy fried spiced chicken (Ayam Goreng Berempah).
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Roti Canai & Teh Tarik</h4>
            <p className="text-xs text-[#475569]">
              Flaky Indian-Muslim flatbread hot off the griddle, dipped into fragrant dhal curry and paired with pulled milk tea (Teh Tarik) at 24-hour mamak diners.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Satay & Peanut Sauce</h4>
            <p className="text-xs text-[#475569]">
              Skewers of tender marinated chicken or beef chargrilled over open coals, served with rich peanut gravy, compressed rice cakes (ketupat), and fresh cucumbers.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Jalan Alor Night Market</h4>
            <p className="text-xs text-[#475569]">
              Kuala Lumpur's most famous culinary street, filled with sizzling woks, grilled seafood, fresh coconut ice cream, and sweet durian stalls under red lanterns.
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

      {/* 8. Top Attractions */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Sparkles className="w-4 h-4" />
          <span>Must-See Sights</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in Malaysia
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Petronas Twin Towers & KLCC Park</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Kuala Lumpur Icon</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Rising 452 meters into the sky, these twin architectural masterworks are inspired by geometric Islamic patterns. Walk across the 170-meter-high double-decker Skybridge, take the high-speed elevator to the 86th-floor observation deck, and enjoy the evening Lake Symphony water fountain show at KLCC Park.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Batu Caves & Rainbow Steps</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Ancient Limestone Caves</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Located just 20 minutes north of KL, this 400-million-year-old limestone hill features a giant 42.7-meter gold statue of Lord Murugan and 272 vividly painted rainbow stairs leading into the soaring Cathedral Cave.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Penang Street Art & George Town Heritage</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Cultural Capital</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Rent a bicycle to discover Ernest Zacharevic’s whimsical interactive street murals, explore the grand Cheong Fatt Tze Blue Mansion, and sample mouthwatering dishes at Gurney Drive and Chulia Street.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Langkawi Sky Bridge & Pristine Beaches</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">Island Sanctuary</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Ride the world’s steepest cable car up Mount Machinchang to walk across the 125-meter curved pedestrian Sky Bridge suspended 660 meters above sea level, followed by swimming in crystal turquoise waters along Tanjung Rhu.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Travel Tips */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>Visitor Guidelines & Smart Advice</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential Malaysia Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Currency & Cards</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Malaysian Ringgit (MYR). Contactless credit cards are widely accepted. Use Touch 'n Go cards for public trains and highway tolls.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Grab App Ride-Hailing</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Download the Grab app for transparent, fixed-fare taxi bookings and food delivery throughout all Malaysian cities and island hubs.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Tropical Weather Prep</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Lightweight breathable cotton or linen clothing is recommended. Keep a compact umbrella for sudden afternoon tropical cloudbursts.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Mosque & Temple Etiquette</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Robes and headscarves are provided free of charge at major religious landmarks like the National Mosque and Federal Territory Mosque.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Internal Links */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>DuurDesh Travel Resources</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Explore Related Services on Travel DuurDesh
        </h2>

        <p className="text-sm text-[#475569]">
          Plan every detail of your journey using our dedicated modules:
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

      {/* 11. CTA */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Malaysia Holiday with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates across Malaysia.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Malaysia
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find Malaysia Hotels
          </button>
        </div>
      </section>

      {/* 12. Footer */}
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
