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
  Landmark,
  Train,
  Camera
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface DhakaCityGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const DhakaCityGuide: React.FC<DhakaCityGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6EE7B7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#A7F3D0]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>City Travel Guide — Dhaka, Bangladesh</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Dhaka City Guide — Mughal Heritage, Rickshaw Art & Historic Hospitality with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Dhaka, the bustling mega-city capital of Bangladesh, is a breathtaking tapestry of 400-year-old Mughal architecture, colorful hand-painted cycle rickshaws, energetic riverside trade along the Buriganga River, and legendary Bengali hospitality.
            </p>
            <p>
              From wandering the terracotta Mughal ramparts of Lalbagh Fort and admiring the pink palace grandeur of Ahsan Manzil to riding the new Dhaka Metro Rail through modern diplomatic enclaves in Gulshan and indulging in authentic Old Dhaka kacchi biryani, Dhaka delivers an intense, warm, and deeply authentic South Asian adventure.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with transparent, practical, and honest guidance. Explore our multi-airline flight search, vetted central hotels, legendary food recommendations, and local transit advice to navigate Dhaka with ease.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Best Time to Visit Dhaka */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Weather & Best Months</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Dhaka
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Winter Peak (Nov to Feb)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Crisp & Comfortable</h3>
            <p className="text-xs text-gray-500 font-medium">Pleasant: 15°C – 26°C (59°F – 79°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Without question the best season to explore Dhaka. The air is cool and dry, walking Old Dhaka is enjoyable, and seasonal winter pitha (sweet rice cakes) are prepared fresh on street corners.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Spring Culture (February to March)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Ekushey Book Fair & Blossoms</h3>
            <p className="text-xs text-gray-500 font-medium">Warm: 20°C – 30°C (68°F – 86°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              February brings the massive Amar Ekushey Boi Mela (national book fair) around Dhaka University and Bangla Academy, filled with literary discussions, live music, and colorful celebrations.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Summer & Monsoon (Apr to Oct)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Lush Greenery & Mangoes</h3>
            <p className="text-xs text-gray-500 font-medium">Humid: 28°C – 35°C (82°F – 95°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              High humidity and heavy monsoon downpours bring lush city greenery alongside peak season for sweet Bangladeshi mangoes, litchis, and jackfruit in riverside markets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <Sparkles className="w-4 h-4" />
          <span>Heritage Sights of Dhaka</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in Dhaka
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Lalbagh Fort (Fort Aurangabad)</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">17th-Century Mughal</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Commissioned in 1678 by Mughal Prince Muhammad Azam, this historic fortress complex features the magnificent marble-domed Mausoleum of Pari Bibi, the Diwan-i-Aam governor’s hall, and tranquil Mughal water fountains and manicured lawns.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Ahsan Manzil (The Pink Palace)</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">Nawabs of Dhaka</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Situated right along the bank of the bustling Buriganga River in Old Dhaka, this iconic pink Indo-Saracenic palace was the official seat of the Nawabs of Dhaka. Today a national museum displaying royal antique furniture, weapons, and historic photographs.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Central Shahid Minar & National Parliament</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">National Monuments</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Visit the poignant Shahid Minar monument commemorating martyrs of the 1952 Language Movement, and marvel at the Jatiya Sangsad Bhaban (National Parliament House) designed by American modernist architect Louis Kahn, floating on an artificial lake.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Sadarghat River Port & Shakharibazar</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Living Old Dhaka</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Experience the energetic river pulse of Sadarghat where double-decker passenger launch boats depart across Bangladesh's delta. Nearby, explore Shakharibazar—a 300-year-old narrow street of conch shell artisans, sweet makers, and heritage temples.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Flights to Dhaka */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Airport & International Hubs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to Dhaka
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Dhaka is served by <strong>Hazrat Shahjalal International Airport (DAC)</strong>, located in Kurmitola approximately 17 kilometers north of the historic city center, now expanding with a modern new Terminal 3.
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & New Elevated Expressway</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Biman Bangladesh Airlines:</strong> National flag carrier with direct wide-body Boeing 787 Dreamliner flights connecting London (Heathrow), Manchester, Toronto, Jeddah, Medina, Dubai, and Singapore.</li>
            <li>• <strong>Middle East & Asian Carriers:</strong> Emirates, Qatar Airways, Saudia, Singapore Airlines, Malaysian Airlines, and Turkish Airlines operate daily flights.</li>
            <li>• <strong>Dhaka Elevated Expressway:</strong> Direct airport expressway allows travelers to bypass city traffic and reach Banani, Gulshan, and Tejgaon in under 20 minutes.</li>
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

      {/* 5. Hotels in Dhaka */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Neighborhood Hotels & Stays</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in Dhaka
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          For convenience, safety, and international dining, staying in the northern diplomatic zones is highly recommended:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Gulshan & Banani</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              The premier upscale diplomatic zone, home to international luxury hotels (The Westin, Renaissance, Sheraton), embassies, trendy rooftop lounges, and lakeside parks.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Uttara (Airport Hub)</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Located adjacent to Hazrat Shahjalal International Airport and the first stations of the new Dhaka Metro Rail (MRT Line 6). Perfect for short transit stays.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Kawran Bazar & Central</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Central commercial hotels (InterContinental Dhaka, Pan Pacific Sonargaon) situated midway between Gulshan business offices and Old Dhaka heritage attractions.
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

      {/* 6. Street Food & Biryani */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Gastronomy & Legendary Biryani</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Street Food & Biryani in Dhaka
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Dhaka is world-famous for its distinct culinary traditions born out of Mughal court kitchens, refined over centuries with fragrant chinigura aromatic rice and mustard oil.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Old Dhaka Kacchi Biryani</h4>
            <p className="text-xs text-[#475569]">
              Raw marinated tender mutton layered with chinigura rice, whole golden potatoes, saffron, and pure ghee, slow-cooked inside sealed clay pots over charcoal embers at spots like Haji Biryani and Grand Nawab.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Morog Polao</h4>
            <p className="text-xs text-[#475569]">
              Spiced heritage country chicken simmered in rich gravy served over buttery aromatic polao rice with sweet boiled eggs and fresh yogurt borhani drink.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Fuchka & Chotpoti</h4>
            <p className="text-xs text-[#475569]">
              Bangladesh’s beloved street snack: crispy puffed pastry shells stuffed with spiced mashed yellow peas, boiled eggs, and topped with tart tamarind chili water.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Bakarkhani & Tea</h4>
            <p className="text-xs text-[#475569]">
              Traditional flaky spiced Old Dhaka flatbread baked in tandoor ovens, paired with sweetened cardamom milk tea (doodh cha) from roadside tea stalls.
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
          <span>Local Secrets & Commute Advice</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential Dhaka Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Dhaka Metro Rail (MRT Line 6)</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Use the sleek new elevated MRT Line 6 to travel between Uttara, Mirpur, Farmgate, Dhaka University, and Motijheel in air-conditioned comfort in 30 minutes.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Ride-Hailing Apps</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Use Pathao or Uber apps for air-conditioned cars or motorcycle rides to avoid street fare negotiations.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Hand-Painted Rickshaws</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Taking a cycle rickshaw ride through Dhanmondi or Old Dhaka is a cultural must. Agree on the fare before boarding (usually 30–80 BDT for local hops).
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Drink Bottled Water</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Always consume sealed bottled mineral water (such as Mum or Kinley) and avoid tap water for brushing teeth.
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
          Organize your Dhaka journey with our dedicated travel tools:
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
      <section className="bg-gradient-to-r from-[#064E3B] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Dhaka Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates in Dhaka.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Dhaka
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find Dhaka Hotels
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
