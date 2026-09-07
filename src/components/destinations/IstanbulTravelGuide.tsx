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
  Clock,
  DollarSign,
  Coffee
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface IstanbulTravelGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const IstanbulTravelGuide: React.FC<IstanbulTravelGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#071B49] via-[#0D3B66] to-[#B45309] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#FDE68A]">
            <Sparkles className="w-4 h-4 text-[#FFB800]" />
            <span>Destination Guide — Republic of Türkiye</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Istanbul Travel Guide — Where History Meets Modern Life
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Straddling two continents across the legendary Bosphorus strait, Istanbul is one of the world's most enthralling urban crossroads. For millennia, this majestic metropolis has served as the capital of Roman, Byzantine, Latin, and Ottoman empires, bequeathing the city an unmatched architectural legacy, vibrant bazaar culture, and a deeply welcoming Turkish spirit.
            </p>
            <p>
              From the soaring minarets of the Hagia Sophia and the Sultanahmet Mosque to the energetic rhythm of modern Istiklal Avenue, the aromatic labyrinth of the Spice Bazaar, and romantic ferry crossings at sunset, Istanbul envelops travelers in a sensory feast unlike anywhere else in Europe or Asia.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we equip travelers with clear, actionable insights to unlock Istanbul’s rich beauty. Whether you are searching for authentic Sultanahmet boutique hotels, navigating Istanbul Airport (IST) layovers, sampling legendary street simit and hand-pulled baklava, or calculating your Turkish Lira budget, our comprehensive guide ensures an unforgettable voyage.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Best Time to Visit Istanbul */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Weather & Seasons</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Istanbul: Weather & Budget Seasons
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Istanbul experiences four distinct seasons, each offering a distinct ambiance. Planning around seasonal weather and festival periods ensures optimal comfort and value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Spring */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Spring (Apr – May)</span>
              <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px]">Best Season</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">15°C – 22°C (59°F – 72°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Mild, sunny weather and blooming parks. In April, the Istanbul Tulip Festival carpets Sultanahmet Square and Emirgan Park in millions of vivid colors.
            </p>
          </div>

          {/* Autumn */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#D97706]">
              <span>Autumn (Sep – Nov)</span>
              <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-[10px]">Ideal Climate</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">16°C – 23°C (61°F – 74°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Crisp mornings, gentle sea breezes, and pleasant walking temperatures. Excellent for Bosphorus cruises and museum exploration without summer humidity.
            </p>
          </div>

          {/* Summer */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#DC2626]">
              <span>Summer (Jun – Aug)</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-[10px]">Peak Tourist</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">26°C – 32°C (79°F – 90°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Warm and sunny with energetic nightlife and rooftop terrace dining. Long lines at major historical sites; advance ticket booking is recommended.
            </p>
          </div>

          {/* Winter */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#0969E8]">
              <span>Winter (Dec – Mar)</span>
              <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px]">Budget Season</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">5°C – 11°C (41°F – 52°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Cool, atmospheric weather with occasional picturesque snowfalls. Significant hotel discounts, quiet museums, and steaming glasses of hot Turkish tea and sahlep.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions in Istanbul */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
            <Compass className="w-4 h-4" />
            <span>Landmarks & Wonders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Top Attractions in Istanbul: Empires, Bazaars & Waterways
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed max-w-3xl">
            Explore seven magnificent landmarks that illustrate the grandeur and cultural continuity of this two-continent capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hagia Sophia */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Byzantine & Ottoman Masterpiece</div>
            <h3 className="text-lg font-bold text-[#071B49]">Hagia Sophia (Ayasofya-i Kebir)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Constructed in 537 AD as a cathedral and later converted into an imperial Ottoman mosque, Hagia Sophia features a breathtaking 55-meter-high dome, golden Christian mosaics, and majestic Islamic calligraphy roundels.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Dress modestly; head coverings for women are provided at the entrance.
            </div>
          </div>

          {/* Blue Mosque */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Imperial Iznik Splendor</div>
            <h3 className="text-lg font-bold text-[#071B49]">Blue Mosque (Sultan Ahmed)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Commissioned by Sultan Ahmed I in 1609, this iconic mosque boasts six slender minarets and an interior adorned with over 20,000 hand-painted blue ceramic Iznik tiles illuminated by hundreds of stained-glass windows.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Closed to non-worshippers during daily congregational prayers.
            </div>
          </div>

          {/* Grand Bazaar */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Historic Covered Market</div>
            <h3 className="text-lg font-bold text-[#071B49]">Grand Bazaar (Kapalıçarşı)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              One of the oldest and largest covered markets in the world, featuring over 4,000 shops across 61 covered streets. Browse exquisite handwoven carpets, ceramics, gold jewelry, leather goods, and Turkish mosaic lanterns.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Polite bargaining is customary; start by offering 20–30% below initial quotes.
            </div>
          </div>

          {/* Bosphorus Cruise */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Continental Waterway</div>
            <h3 className="text-lg font-bold text-[#071B49]">Bosphorus Cruise & Ferries</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Glide between Europe and Asia past imperial waterfront mansions (Yalı), the Dolmabahçe Palace, and medieval Rumeli Fortress. Take the municipal public ferry from Eminönü to Kadıköy for an authentic, budget-friendly crossing.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Feed simit breadcrumbs to the circling seagulls for classic photo memories.
            </div>
          </div>

          {/* Galata Tower */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Genoese Watchtower</div>
            <h3 className="text-lg font-bold text-[#071B49]">Galata Tower (Galata Kulesi)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Erected in 1348 by Genoese traders, this cylindrical stone tower commands a 360-degree panoramic vista across the Golden Horn, the Bosphorus, and Sultanahmet’s historic peninsula.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Visit during golden hour before dusk to watch city minarets glow in the sunset.
            </div>
          </div>

          {/* Topkapi Palace */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Seat of the Sultans</div>
            <h3 className="text-lg font-bold text-[#071B49]">Topkapi Palace (Topkapı Sarayı)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The administrative nerve center and royal residence of Ottoman sultans for nearly four centuries. Tour the secluded Imperial Harem, tranquil courtyards, and the Privy Chamber housing sacred Islamic relics.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Allocate at least 3 hours to explore the palace grounds and the Harem section.
            </div>
          </div>

          {/* Istiklal Street */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3 md:col-span-2 lg:col-span-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Vibrant Pedestrian Boulevard</div>
            <h3 className="text-lg font-bold text-[#071B49]">Istiklal Street & Taksim Square</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              A buzzing 1.4-kilometer pedestrian avenue traversed by the historic red Nostalgic Tram (T2). Packed with European Belle Époque architecture, indie bookshops, Turkish delight emporiums, live street musicians, art galleries, and lively cafes.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Duck into Çiçek Pasajı (Flower Passage) for neoclassical tiled arcade atmosphere.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Best Hotels in Istanbul */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Building2 className="w-4 h-4" />
              <span>Lodging Strategy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Best Hotels in Istanbul: Sultanahmet, Taksim & Waterfront Havens
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
          Choosing between the ancient cobblestones of Sultanahmet and the energetic modern vibrancy of Taksim and Karaköy shapes your entire trip experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Sultanahmet (Old City)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Step out of your door right into Hagia Sophia, Blue Mosque, and the Grand Bazaar. Quiet evenings, historic wooden mansion conversions, and rooftop breakfast views.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Best For: First-timers & history buffs.</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Taksim & Beyoğlu</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The energetic heart of modern Istanbul. Direct metro access, 24/7 dining, shopping along Istiklal Street, and proximity to Havaist airport transit shuttles.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Best For: Nightlife & modern dining.</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Karaköy & Galata</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Chic harborside quarter with trendy coffee bars, artisan boutiques, contemporary art galleries, and immediate walking access to Galata Tower and the cruise port.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Best For: Boutique travelers & couples.</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Family Hotels & Suites</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Apartment-style suites in Sirkeci and Şişli featuring multi-room layouts, kitchenettes, and lift elevators accommodating strollers with easy tram access.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Best For: Families with kids.</div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-4.5 border border-dashed border-gray-300 text-center text-xs text-[#5E6B82]">
          Discover verified guest reviews and exclusive rates on our comprehensive{' '}
          <button
            onClick={() => onNavigate?.('hotels')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Hotels Page]
          </button>
        </div>
      </section>

      {/* 5. Flights to Istanbul */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Plane className="w-4 h-4" />
              <span>Aviation Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Flights to Istanbul: Major Hubs, Stopovers & Routes
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
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">Istanbul Airport (IST) & Sabiha Gökçen (SAW)</h3>
            <p>
              The colossal <strong>Istanbul Airport (IST)</strong> on the European side serves as the primary home base for <strong>Turkish Airlines</strong>, connecting to more countries than any other airline in the world.
            </p>
            <p>
              On the Asian side, <strong>Sabiha Gökçen Airport (SAW)</strong> operates as a hub for low-cost carriers like <strong>Pegasus Airlines</strong> and <strong>AJet</strong>, providing exceptionally cheap flights across Europe and the Middle East.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">Free Touristanbul & Stopover Perks</h3>
            <p>
              Flying Turkish Airlines with a layover between 6 and 24 hours at IST? You may qualify for <strong>Touristanbul</strong>—a free guided sightseeing tour including complimentary meals, admissions, and airport transfers.
            </p>
            <p>
              Layovers of 20+ hours qualify for the <em>Turkish Airlines Stopover Accommodation</em> program, providing complimentary hotel stays in 4-star or 5-star partner properties.
            </p>
          </div>
        </div>

        <div className="bg-[#EAF2FB] rounded-2xl p-4 border border-blue-200 text-xs text-[#1E3A8A] flex items-center justify-between flex-wrap gap-3">
          <span>Search real-time flight schedules and seasonal discounts:</span>
          <button
            onClick={() => onNavigate?.('flights')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Flights Page]
          </button>
        </div>
      </section>

      {/* 6. Halal Food in Istanbul */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Turkish Culinary Delights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Halal Food in Istanbul: Turkish Classics, Street Bites & Sweets
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
          As a predominantly Muslim-majority nation, the vast majority of traditional restaurants and street food in Türkiye are inherently halal. From sizzling doner skewers to delicate phyllo pastries, Istanbul is a paradise for discerning food lovers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Iconic Turkish Street Bites</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Grab a warm, sesame-crusted <em>Simit</em> bagel from street carts for under $1 USD, or try <em>Balık Ekmek</em> (freshly grilled mackerel fillet inside crusty bread with onion and lemon juice) beside the Galata Bridge.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Kebabs & Lokantas</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Visit traditional <em>Esnaf Lokantası</em> (tradesmen cafeteria restaurants) for home-cooked braised lamb, lentil soup (Mercimek), and eggplant moussaka. Savor spicy <em>Adana Kebab</em> and buttery <em>İskender Kebab</em>.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Baklava & Turkish Coffee</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Indulge in 40 layers of crispy pastry filled with Antep pistachios and pure butter at legendary confectioners in Karaköy, accompanied by slow-brewed Turkish coffee in copper cezve pots.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-gray-500 text-center">
          For neighborhood restaurant directories and food walking tour guides, visit our{' '}
          <button
            onClick={() => onNavigate?.('food')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Food & Travel Page]
          </button>
        </div>
      </section>

      {/* 7. Travel Tips: Safety, Transport, Budget & Etiquette */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>City Practicalities</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Istanbul Travel Tips: Safety, Public Transit & Etiquette
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-[#475569] leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Car className="w-4 h-4 text-[#0969E8]" />
              Get an Istanbulkart Card
            </h3>
            <p>
              Purchase an <strong>Istanbulkart</strong> at yellow vending machines (Biletmatik). This rechargeable contactless transit card works across all metros, historic trams, funiculars, public buses, and scenic Bosphorus passenger ferries.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Safety & Taxi Precautions
            </h3>
            <p>
              Istanbul is generally very safe. However, in bustling areas like Sultanahmet and Taksim, avoid unsolicited "friendly local" invitations to private bars, and always ensure yellow taxi drivers turn on their digital meter (taksimetre) before departing.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#D97706]" />
              Currency Exchange & Card Payments
            </h3>
            <p>
              Credit and debit cards are widely accepted across restaurants, museums, and supermarkets. Carry modest amounts of Turkish Lira (TRY) cash for street food stalls, public restrooms, and small souk purchases.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#EC4899]" />
              Mosque Etiquette & Hospitality
            </h3>
            <p>
              When entering mosques, remove your shoes and place them on provided shelves or carry them in a small bag. Women must cover their hair and shoulders. Turkish people take pride in genuine hospitality; accepting a hot glass of tea (çay) is considered warm and polite.
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
          Coordinate flights, hotels, and pilgrimage connections with our dedicated tools:
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
      <section className="bg-gradient-to-r from-[#071B49] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Istanbul Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — everything you need to experience the magic where continents embrace.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Istanbul
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Compare Istanbul Hotels
          </button>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="pt-8 border-t border-gray-200 text-xs text-[#5E6B82] space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <strong>Travel DuurDesh</strong> — Honest travel wisdom, transparent pricing, and practical guides for international voyagers.
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
