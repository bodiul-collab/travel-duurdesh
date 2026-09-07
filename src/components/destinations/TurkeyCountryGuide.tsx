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
  Mountain,
  Landmark,
  Palmtree
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface TurkeyCountryGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const TurkeyCountryGuide: React.FC<TurkeyCountryGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#991B1B] via-[#B91C1C] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FCA5A5_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#FCA5A5]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>Country Travel Guide — Eurasia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Turkey Country Guide — Empires, Landscapes & Crossroads of Continents with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Turkey (Türkiye) bridges Europe and Asia with unmatched historical majesty and breathtaking geographical variety. As the heartland of the Roman, Byzantine, and Ottoman Empires, Turkey enchants global travelers with soaring minarets, ancient Greco-Roman ruins, surreal fairy chimney valleys, and sun-kissed Mediterranean turquoise coastlines.
            </p>
            <p>
              Whether you are floating over the lunar landscapes of Cappadocia in a hot air balloon at sunrise, taking a scenic municipal ferry across the Bosphorus Strait in Istanbul, relaxing on the pristine beaches of Antalya, or soaking in the mineral-rich thermal waters of Pamukkale, Turkey is a sensory masterpiece.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with practical and transparent guidance. Explore our flight deal comparisons, verified cave hotels, halal culinary insights, and local travel advice to build your ideal Turkish holiday.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview of Turkey */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#B91C1C] uppercase tracking-wider bg-[#FEF2F2] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>Eurasian Crossroads & History</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Overview of Turkey: A Transcontinental Bridge of Civilizations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-sm leading-relaxed">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#B91C1C]" />
              Four Seas & Varied Terrains
            </h3>
            <p>
              Bordered by the Black Sea, Mediterranean Sea, Aegean Sea, and Sea of Marmara, Turkey offers diverse topographies—from snow-capped Anatolian peaks to lush tea hills in Rize and olive groves along the Aegean.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#B91C1C]" />
              Imperial Legacy
            </h3>
            <p>
              Turkey is home to 21 UNESCO World Heritage Sites including Ephesus, Troy, Göbekli Tepe (humanity's oldest temple), and the historic quarters of Istanbul.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#B91C1C]" />
              Turkish Hospitality (Misafirperverlik)
            </h3>
            <p>
              In Turkish culture, a visitor is regarded as a "guest from God" (<em>Tanrı Misafiri</em>). Expect warm welcomes, endless glasses of black tea (<em>çay</em>), and attentive service everywhere you travel.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Best Time to Visit */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Seasons & Best Travel Windows</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Turkey: Seasons & Regional Climates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Spring Tulip Season (Ideal)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">April to May</h3>
            <p className="text-xs text-gray-500 font-medium">Mild & Floral: 16°C – 23°C</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Millions of blooming tulips in Istanbul’s parks, comfortable walking weather for ruins, blooming Anatolian valleys, and gentle hot air balloon winds across Cappadocia.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Autumn Harvest (Ideal)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">September to November</h3>
            <p className="text-xs text-gray-500 font-medium">Golden Light: 18°C – 25°C</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              The summer crowds thin out, Mediterranean waters remain warm for swimming along Antalya, and sightseeing historic sites like Ephesus and Topkapi Palace is delightful.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Summer Beach / Winter Snow
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Jun–Aug / Dec–Feb</h3>
            <p className="text-xs text-gray-500 font-medium">Resort Sun vs. Ski Slopes</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Summer offers turquoise gulet yacht cruises along the Riviera. Winter brings snow-dusted fairy chimneys in Cappadocia and world-class ski slopes in Uludağ and Erciyes.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Major Cities */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Hubs & Regions</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Major Cities & Regions in Turkey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">1. Istanbul — The Historic Jewel</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-800">Transcontinental</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Spanning Europe and Asia across the Bosphorus Strait, Istanbul features Hagia Sophia, the Blue Mosque, Topkapi Palace, Grand Bazaar, and bustling dining in Karaköy and Taksim.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">2. Ankara — The Modern Capital</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">National Capital</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The political and diplomatic hub of Turkey, home to the monumental Anıtkabir (Atatürk Mausoleum), the world-class Museum of Anatolian Civilizations, and leafy park boulevards.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">3. Antalya — The Turquoise Riviera</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Coastal Gateway</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Surrounded by the Taurus Mountains and turquoise Mediterranean waters, Antalya offers Kaleiçi historic old town, Düden Waterfalls, Roman theater of Aspendos, and world-class beach resorts.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">4. Cappadocia — Land of Fairy Chimneys</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Geological Wonder</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Famous worldwide for sunrise hot air balloon flights, rock-cut underground cities (Derinkuyu and Kaymaklı), cave hotel suites, and ancient volcanic tuff canyons in Göreme National Park.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Flights to Turkey */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Aviation & Gateway Hubs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to Turkey
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Turkey is home to one of the world's most connected mega-hubs: <strong>Istanbul Airport (IST)</strong> on the European side, alongside <strong>Sabiha Gökçen Airport (SAW)</strong> on the Asian side. Regional international airports include Antalya (AYT), Izmir (ADB), and Ankara (ESB).
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & Transit Programs</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Turkish Airlines:</strong> Flies to more countries than any other airline on earth, featuring complimentary stopover hotels in Istanbul and free <em>Touristanbul</em> city tours for long layover passengers.</li>
            <li>• <strong>Pegasus Airlines:</strong> Low-cost carrier hubbed at SAW, offering economical flights across Europe, the Middle East, Central Asia, and domestic Turkish cities.</li>
            <li>• <strong>Domestic Connections:</strong> Frequent 60-to-80-minute flights connect Istanbul to Cappadocia (Nevşehir and Kayseri), Antalya, Bodrum, Trabzon, and Gaziantep.</li>
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

      {/* 6. Hotels in Turkey */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Accommodations & Unique Stays</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in Turkey
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Accommodations in Turkey span atmospheric cave suites carved into volcanic rock, waterfront Ottoman palaces along the Bosphorus, and all-inclusive Mediterranean family beach resorts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Cappadocia Cave Hotels</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Stay in authentic stone-carved boutique rooms in Göreme or Uçhisar, featuring panoramic rooftop terraces to watch hundreds of hot air balloons fill the sunrise sky.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Istanbul Heritage & Bosphorus</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Choose between restored wooden Ottoman mansions in Sultanahmet within steps of Hagia Sophia, or luxury waterfront properties overlooking the sparkling Bosphorus.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Antalya Beach Resorts</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Family-oriented luxury beachfront resorts in Lara, Belek, and Kemer offering private sandy beaches, waterparks, and halal-friendly dining options.
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

      {/* 7. Halal Food & Turkish Cuisine */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Halal Gastronomy & Culinary Heritage</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Food & Turkish Cuisine
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Meat in Turkey is overwhelmingly sourced and prepared in full accordance with Islamic dietary standards (Halal). Turkish cuisine is celebrated as one of the world’s three grand classical culinary traditions, balancing fresh vegetables, slow-roasted lamb, handmade breads, and aromatic spices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Kebabs (Adana & İskender)</h4>
            <p className="text-xs text-[#475569]">
              Hand-minced spicy lamb skewers grilled over charcoal, or thinly sliced döner beef placed over warm pide bread, drenched in brown butter and tomato sauce with yogurt.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Serpme Kahvaltı (Breakfast)</h4>
            <p className="text-xs text-[#475569]">
              An elaborate morning spread featuring 15–25 small dishes: feta and kashar cheeses, cured olives, honeycomb with kaymak clotted cream, menemen eggs, and simit.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Pide & Lahmacun</h4>
            <p className="text-xs text-[#475569]">
              Boat-shaped Turkish flatbreads baked in stone wood-fired ovens with melted cheese, spicy sujuk sausage, or minced meat garnished with fresh parsley and lemon.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Baklava & Künefe</h4>
            <p className="text-xs text-[#475569]">
              Crispy paper-thin phyllo pastry layered with Antep emerald pistachios and syrup, alongside stretchy cheese künefe served hot off the copper griddle with Turkish tea.
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
          <span>Wonders of Turkey</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in Turkey
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Hagia Sophia (Ayasofya)</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-800">Istanbul Landmark</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Standing for nearly 1,500 years, this architectural marvel features a massive 31-meter dome that appears suspended in mid-air. Adorned with golden mosaics and colossal Ottoman calligraphic medallions, it remains an active mosque and one of humanity’s greatest monuments.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Cappadocia Fairy Chimneys & Sunrise Balloons</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">UNESCO Natural Wonder</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Wind and water erosion sculpted millions of years of volcanic ash into towering fairy chimneys, rock-carved churches, and multi-story underground cities. Flying at sunrise with 100+ colorful balloons drifting over Love Valley is a once-in-a-lifetime sight.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Blue Mosque (Sultan Ahmed Mosque)</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Ottoman Masterpiece</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Commissioned in 1609 opposite Hagia Sophia, the Blue Mosque is adorned with over 20,000 handmade Iznik turquoise ceramic tiles and six slender minarets, creating an unforgettable skyline along the historic peninsula.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Pamukkale & Hierapolis Thermal Terraces</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">Cotton Castle</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Mineral-rich thermal spring waters flowing down mountain cliffs have created dazzling white travertine terraces and cascading pools. Walk barefoot across the warm mineral waters and swim among submerged Roman marble columns in Cleopatra’s Antique Pool.
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
          Essential Turkey Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Currency & Lira</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Turkish Lira (TRY). Credit cards are accepted in restaurants and hotels; keep cash for tips, street simit vendors, and taxi fares.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Istanbulkart Transit</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Purchase one rechargeable Istanbulkart to pay for metros, nostalgic trams, funiculars, and Bosphorus municipal ferries seamlessly.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Museum Pass Card</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Consider purchasing the official Türkiye Museum Pass to skip ticket lines at Topkapi Palace, Galata Tower, Ephesus, and Göreme Open Air Museum.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Mosque Dress Etiquette</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Remove footwear before stepping onto carpets. Women should cover hair and shoulders with a scarf; both men and women should wear trousers or long skirts.
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
          Plan every aspect of your Turkish getaway with our dedicated modules:
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
      <section className="bg-gradient-to-r from-[#991B1B] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Turkey Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates across Turkey.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Turkey
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find Turkey Hotels
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
