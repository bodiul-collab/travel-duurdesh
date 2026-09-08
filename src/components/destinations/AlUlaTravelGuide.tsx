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
  Camera,
  FileCheck,
  BookOpen,
  Moon,
  Landmark,
  Smartphone
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface AlUlaTravelGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const AlUlaTravelGuide: React.FC<AlUlaTravelGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro Hero */}
      <section className="relative bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#F59E0B]">
            <Landmark className="w-4 h-4 text-[#F59E0B]" />
            <span>UNESCO World Heritage & Ancient Oasis — Kingdom of Saudi Arabia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            AlUla Travel Guide — The World&apos;s Masterpiece of Ancient Arabia
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Tucked within the Medina Region of northwestern Saudi Arabia, AlUla is one of the world&apos;s most extraordinary open-air living museums. Surrounded by towering ochre sandstone massifs and a lush 20-kilometer date palm oasis, AlUla served for millennia as a pivotal crossroads on the historic Incense and Silk trade routes linking the Arabian Peninsula with the Mediterranean and North Africa.
            </p>
            <p>
              From the monumental rock-cut Nabataean tombs of <strong>Hegra</strong> (Saudi Arabia&apos;s first UNESCO World Heritage Site) to the mirrored architectural marvel of <strong>Maraya</strong>, the atmospheric mud-brick alleys of <strong>AlUla Old Town</strong>, and the ancient inscriptions of <strong>Dadan and Jabal Ikmah</strong>, AlUla offers an unforgettable encounter with human civilization spanning over 200,000 years.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide culture seekers, eco-luxury voyagers, and Umrah pilgrims with comprehensive, verified guidance. Whether you are adding a scenic desert excursion from Madinah or flying directly into AlUla International Airport (ULH), our guide helps you navigate booking windows, authentic halal dining, canyon accommodations, and expert local Rawi guides.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Key Fast Facts & Seasonal Planning */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Trip Planning & Seasons</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Preparing for AlUla: Visas, Optimal Seasons & Weather
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Because AlUla lies in an arid desert basin with high summer daytime temperatures, planning your visit during the winter and early spring ensures ideal conditions for outdoor archaeological exploration and open-air dining.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Visas */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4 h-4" />
              Saudi Tourist eVisa
            </div>
            <div className="text-base font-bold text-[#071B49]">Instant Online eVisa</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Citizens of over 60 countries and holders of valid US, UK, or Schengen visas can obtain a 1-year multiple-entry tourist eVisa online in minutes. Permits up to 90 days stay per visit.
            </p>
          </div>

          {/* Best Season */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#21B96F] uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Best Travel Season
            </div>
            <div className="text-base font-bold text-[#071B49]">October to April</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Mild, sunny daytime temperatures (18°C–25°C) and refreshing, crisp desert nights (8°C–14°C). Hosts the Winter at Tantora and AlUla Arts festivals.
            </p>
          </div>

          {/* Gateway */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1.5">
              <Plane className="w-4 h-4" />
              Arrival Gateways
            </div>
            <div className="text-base font-bold text-[#071B49]">ULH Airport or Madinah</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Direct flights to AlUla (ULH) from Riyadh, Jeddah, Dubai, and Doha. Also an easy 3.5-hour scenic highway road transfer from Al-Masjid an-Nabawi in Madinah.
            </p>
          </div>

          {/* Cultural Etiquette */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Local Heritage
            </div>
            <div className="text-base font-bold text-[#071B49]">Guided Rawi Access</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Archaeological zones are carefully preserved under the Royal Commission for AlUla. Timed entry tickets and local storytelling guides (Rawis) provide deep historic context.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Iconic Attractions & Ancient Wonders */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Compass className="w-4 h-4" />
              <span>Must-See Monuments</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Iconic Attractions & Wonders of AlUla
            </h2>
          </div>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed">
          From ancient civilizational capitals to world-renowned modern architectural triumphs, explore the top landmarks that make AlUla a world-class travel destination.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Hegra (Mada'in Salih) */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#FAFCFF] space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider flex items-center gap-1.5">
                <Landmark className="w-4 h-4" />
                <span>UNESCO World Heritage</span>
              </div>
              <h3 className="text-base font-bold text-[#071B49]">
                Hegra (Mada&apos;in Salih) & Qasr al-Farid
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                The southern capital of the Nabataean kingdom and sister city to Petra in Jordan. Features more than 110 monumental tombs carved directly into monolithic golden sandstone cliffs, most notably <strong>Qasr al-Farid</strong> (Tomb of Lihyan son of Kuza), standing four stories high in solitary desert grandeur.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#0969E8] bg-blue-50/70 p-2.5 rounded-xl">
              Highlights: Qasr al-Farid, Jabal Ithlib ceremonial gorge, Jabal al-Banat, Vintage Land Rover tours.
            </div>
          </div>

          {/* 2. Maraya Concert Hall */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#FAFCFF] space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Mirrored Wonder</span>
              </div>
              <h3 className="text-base font-bold text-[#071B49]">
                Maraya Mirrored Concert Hall
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Holding the Guinness World Record as the largest mirrored building on the planet, Maraya is clad in 9,740 square meters of reflective glass mirrors that dissolve into the Ashar Valley canyon. It serves as a premier venue for world-class concerts, international art exhibitions, and fine rooftop dining.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#0969E8] bg-blue-50/70 p-2.5 rounded-xl">
              Highlights: Desert reflection photography, Maraya Social rooftop restaurant, Ashar Valley sunset.
            </div>
          </div>

          {/* 3. Elephant Rock (Jabal AlFil) */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#FAFCFF] space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#21B96F] uppercase tracking-wider flex items-center gap-1.5">
                <Moon className="w-4 h-4" />
                <span>Geological Marvel</span>
              </div>
              <h3 className="text-base font-bold text-[#071B49]">
                Elephant Rock (Jabal AlFil)
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                A breathtaking 52-meter sandstone monolith carved by millions of years of natural wind and water erosion into the lifelike likeness of an elephant with its trunk resting on the desert floor. In the evening, sunken desert lounge fire pits illuminate the rock beneath starlit skies.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#0969E8] bg-blue-50/70 p-2.5 rounded-xl">
              Highlights: Sunset viewings, cozy sunken seating, desert coffee kiosks, night illumination.
            </div>
          </div>

          {/* 4. AlUla Old Town & AlJadidah Arts District */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#FAFCFF] space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                <span>Living Heritage</span>
              </div>
              <h3 className="text-base font-bold text-[#071B49]">
                AlUla Old Town (Ad-Deerah) & AlJadidah
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                An ancient labyrinth of nearly 900 mud-brick houses, 400 shops, and five historic town squares dating back to the 12th century, crowned by the 10th-century AlUla Fort. Adjoining is AlJadidah, a vibrant pedestrian cultural district with art murals, artisan craft shops, and outdoor cafes.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#0969E8] bg-blue-50/70 p-2.5 rounded-xl">
              Highlights: AlUla Castle overlook, incense shops, handcrafted pottery, outdoor film screenings.
            </div>
          </div>

          {/* 5. Dadan & Jabal Ikmah (Open-Air Library) */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#FAFCFF] space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#EC4899] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Ancient Inscriptions</span>
              </div>
              <h3 className="text-base font-bold text-[#071B49]">
                Dadan & Jabal Ikmah
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Dadan served as the capital of both the Dadanite and Lihyanite kingdoms during the 1st millennium BCE, noted for its square lion-sculpted tombs. Nearby Jabal Ikmah is recognized as an &quot;open-air library,&quot; containing the largest concentration of ancient rock inscriptions in Saudi Arabia in early Arabic predecessors.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#0969E8] bg-blue-50/70 p-2.5 rounded-xl">
              Highlights: Lion Tombs, pre-Arabic epigraphy, interactive archaeological exhibitions.
            </div>
          </div>

          {/* 6. The Lush Oasis & Heritage Trail */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#FAFCFF] space-y-3 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#059669] uppercase tracking-wider flex items-center gap-1.5">
                <Sun className="w-4 h-4" />
                <span>Emerald Canopy</span>
              </div>
              <h3 className="text-base font-bold text-[#071B49]">
                The AlUla Oasis & Heritage Trail
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Stretching for 20 kilometers through the valley, this verdant oasis is home to over 2.3 million date palms, fragrant citrus trees, and ancient gravity-fed irrigation channels. Walk the tranquil 3-kilometer shaded Heritage Trail from Dadan to the Old Town to taste fresh local dates and herbal tea.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#0969E8] bg-blue-50/70 p-2.5 rounded-xl">
              Highlights: Shaded walking trails, organic date orchards, citrus harvesting, heritage springs.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Where to Stay in AlUla: Desert Resorts & Heritage Lodges */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Building2 className="w-4 h-4" />
              <span>Lodging & Accommodations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Hotels & Eco-Resorts in AlUla: Canyon Stays & Desert Glamping
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
          AlUla offers a distinctive hospitality ecosystem where architecture harmonizes with dramatic natural canyon landscapes. Accommodations range from ultra-luxury canyon villas to comfortable oasis hotels and bohemian desert glamping.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Luxury Canyon Eco-Resorts */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Ultra-Luxury Ashar Valley Resorts</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Nestled against the monumental red-rock amphitheater of the Ashar Valley. Feature private plunge pools, canopy tent designs, personalized butler service, and organic wellness spas.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">
              Properties: Banyan Tree AlUla, Our Habitas AlUla, The Chedi Hegra.
            </div>
          </div>

          {/* Desert Glamping & Airstreams */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Boutique Desert & Glamping Experiences</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Customized luxury vintage Airstream trailers and safari tents parked amidst golden dunes, featuring private decks, communal fire pits, and immersive stargazing telescopes.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">
              Properties: Caravan by Habitas, Shaden Resort (Canyon Pool Chalets).
            </div>
          </div>

          {/* Town & Oasis Stays */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Town & Oasis Lodging (Value & Accessibility)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Conveniently positioned close to Old Town, AlJadidah, and the Winter Park transit hub. Excellent for families and travelers prioritizing dining and cultural accessibility.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">
              Properties: Cloud7 Residence AlUla, Sahary AlUla Resort, Heritage Farm Guesthouses.
            </div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-dashed border-gray-300 text-center text-xs text-[#5E6B82]">
          Searching for seasonal rates, pool chalets, or family villas in AlUla? Review verified rates on our{' '}
          <button
            onClick={() => onNavigate?.('hotels')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Hotels Page]
          </button>
        </div>
      </section>

      {/* 5. How to Reach AlUla: Flight Gateways & Road Trip from Madinah */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Plane className="w-4 h-4" />
              <span>Transit & Gateways</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Flights & Getting to AlUla: ULH Airport & Umrah Road Extension
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
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
              Flying to AlUla International Airport (ULH)
            </h3>
            <p>
              Located just 35 km southeast of the town center, <strong>AlUla International Airport (ULH)</strong> welcomes domestic non-stop flights from <strong>Riyadh (RUH)</strong>, <strong>Jeddah (JED)</strong>, and <strong>Dammam (DMM)</strong> operated by <strong>Saudia</strong> and <strong>flynas</strong> (approx. 1 hour 45 minutes flight time).
            </p>
            <p>
              Direct international services also connect AlUla with <strong>Dubai International (DXB)</strong> via flydubai and <strong>Doha (DOH)</strong> via Qatar Airways, making international arrival remarkably smooth without domestic transit stops.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
              Road Transfer from Madinah (The Ideal Umrah Extension)
            </h3>
            <p>
              Many pilgrims performing Umrah in Makkah and Madinah choose to conclude their pilgrimage with a 2-to-3-day cultural extension to AlUla. The scenic modern <strong>Medina-AlUla Highway (Route 375)</strong> takes approximately <strong>3.5 hours</strong> by private SUV or chauffeured vehicle.
            </p>
            <p>
              Within AlUla, visitors can rent vehicles directly at ULH airport or use the complimentary tourist shuttle buses operated by the Royal Commission for AlUla connecting Winter Park, Old Town, Dadan, and Hegra.
            </p>
          </div>
        </div>

        <div className="bg-[#EAF2FB] rounded-2xl p-4 border border-blue-200 text-xs text-[#1E3A8A] flex items-center justify-between flex-wrap gap-3">
          <span>Compare flight schedules and multi-city route options to AlUla:</span>
          <button
            onClick={() => onNavigate?.('flights')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Flights Page]
          </button>
        </div>
      </section>

      {/* 6. Halal Dining & Farm-to-Table Cuisine */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Oasis Culinary Scene</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Halal Food in AlUla: Farm-to-Table Dates, Citrus & Fine Dining
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
          As in all cities across Saudi Arabia, 100% of meat and food served across AlUla is strictly halal. What sets AlUla apart is its agricultural bounty—the ancient oasis produces world-famous Barni dates, sweet and bitter oranges, lemons, pomegranates, and aromatic herbs that star in both traditional dishes and Michelin-caliber kitchens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">AlJadidah & Old Town Courtyard Cafes</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Dine al fresco beneath date palms. Savor Arabic cardamom coffee (Gahwa) paired with succulent Barni dates, freshly baked saffron pastries at Pink Camel, and Levantine shared plates at <em>Somewhere</em>.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Traditional Saudi Feasts & Desert Barbecue</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Experience slow-cooked <em>Saleeg</em> (creamy rice stewed with broth and chicken), fragrant <em>Kabsa</em>, and whole-roasted lamb cooked underground in traditional sand pits during authentic Bedouin desert dinners.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Fine Dining with Mirrored Canyon Vistas</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Indulge in seasonal farm-to-table cuisine at <em>Tama</em> (Our Habitas) or enjoy British-Mediterranean fare by Michelin-starred chef Jason Atherton at <em>Maraya Social</em> atop the world-famous mirrored hall.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-gray-500 text-center">
          Read our comprehensive culinary guide for Middle Eastern and halal journeys on{' '}
          <button
            onClick={() => onNavigate?.('food')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Food & Travel Page]
          </button>
        </div>
      </section>

      {/* 7. Essential Visitor Tips for AlUla */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>Visitor Insights</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential Travel Tips for AlUla: Tickets, Footwear & Stargazing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-[#475569] leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0969E8]" />
              Book Archaeological Sites in Advance
            </h3>
            <p>
              To protect the delicate sandstone tombs, capacity at Hegra, Dadan, and Jabal Ikmah is strictly capped each day. Tickets must be reserved online in advance through the official Experience AlUla portal or via certified hotel concierges.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Sun className="w-4 h-4 text-[#D97706]" />
              Desert Footwear & Sun Protection
            </h3>
            <p>
              Sightseeing requires walking on soft sand and stone pathways. Wear closed-toe, comfortable walking shoes or light hiking sneakers. Bring polarized sunglasses, a broad-brimmed sun hat, and high-SPF mineral sunscreen.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Moon className="w-4 h-4 text-[#7C3AED]" />
              World-Class Stargazing in Gharameel
            </h3>
            <p>
              Because AlUla enjoys virtually zero light pollution, it is a world-renowned dark sky sanctuary. Book a guided night excursion to the Gharameel rock pillars to see the Milky Way, meteor showers, and distant constellations with your bare eyes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#21B96F]" />
              Mobile Data & eSIM Connectivity
            </h3>
            <p>
              Coverage across AlUla town and Hegra on Saudi networks (STC and Mobily) is excellent with 5G connectivity. Install an Airalo prepaid Saudi eSIM before departure for seamless navigation and instant photo sharing without roaming surcharges.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Internal Navigation Resources */}
      <section className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0] space-y-4">
        <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider text-center">
          Explore Related Travel DuurDesh Planning Resources
        </h3>
        <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">
          Equip your journey to the Kingdom with our flight tools, verified hotel searches, and mobile eSIM guides:
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
            <span>[Use Travel Tools & Airalo eSIM]</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      <section className="bg-gradient-to-r from-[#0F172A] via-[#0969E8] to-[#0F172A] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your AlUla Journey with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Heritage Guides, and Travel Tools — designed with clarity and care to bring the wonders of ancient Arabia to life.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find AlUla Desert Hotels
          </button>
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to AlUla (ULH)
          </button>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="pt-8 border-t border-gray-200 text-xs text-[#5E6B82] space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <strong>Travel DuurDesh</strong> — Honoring heritage travelers and world voyagers with authentic guidance, transparent pricing, and practical resources.
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
