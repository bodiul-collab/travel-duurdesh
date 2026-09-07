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
  TreePine,
  Waves,
  Coffee,
  Landmark
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface BangladeshCountryGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const BangladeshCountryGuide: React.FC<BangladeshCountryGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34D399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#6EE7B7]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>Country Travel Guide — South Asia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Bangladesh Country Guide — Rivers, Heritage, and Untamed Nature with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Welcome to Bangladesh—a land of breathtaking river deltas, lush green tea plantations, centuries-old Mughal architecture, and warm hospitality. From the world's longest unbroken natural sea beach in Cox’s Bazar to the UNESCO-protected mangrove forests of the Sundarbans, Bangladesh offers authentic adventures for travelers seeking culture, nature, and rich culinary traditions.
            </p>
            <p>
              Whether you are exploring the energetic streets and historic mosques of Old Dhaka, taking an evening river cruise in Chittagong, trekking the emerald hills of Sylhet and Srimangal, or tasting legendary slow-cooked Kacchi Biryani, Bangladesh welcomes you with genuine smiles and boundless stories.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with practical and transparent guidance. Explore our curated flight comparison tools, verified family hotels, halal culinary insights, and local travel advice to build your perfect Bangladeshi itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview of Bangladesh */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#047857] uppercase tracking-wider bg-[#ECFDF5] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>Country Overview & Geography</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Overview of Bangladesh: Land of Seven Hundred Rivers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-sm leading-relaxed">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <TreePine className="w-4 h-4 text-[#047857]" />
              The Bengal Delta
            </h3>
            <p>
              Bangladesh is cradled by three of Asia's mightiest river systems: the Ganges (Padma), Brahmaputra (Jamuna), and Meghna. These winding waterways enrich fertile plains, generate scenic river life, and nurture vibrant mangrove ecosystems.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#047857]" />
              Historical Heritage
            </h3>
            <p>
              From ancient Buddhist viharas and terracotta temples to grand Mughal river citadels and British colonial relics, the country’s heritage reflects thousands of years of trade, literature, poetry, and artistic resilience.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#047857]" />
              Hospitality & Culture
            </h3>
            <p>
              Guests in Bangladesh are received with sincere warmth. Whether in village tea stalls or urban bustling districts, locals readily offer directions, tea, and heartfelt conversations with international visitors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Best Time to Visit */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Weather, Seasons & Festivals</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Bangladesh: Seasons and Climate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Peak Season (Recommended)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">November to February</h3>
            <p className="text-xs text-gray-500 font-medium">Mild Winter: 18°C – 26°C (64°F – 79°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Crisp mornings, clear blue skies, minimal rainfall, and comfortable daytime temperatures make winter the ideal window for sightseeing, beach strolls in Cox’s Bazar, and mangrove safari expeditions.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Shoulder Season
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">March to April</h3>
            <p className="text-xs text-gray-500 font-medium">Spring & Bengali New Year: 25°C – 33°C</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Warmer temperatures bring the vibrant festival of <em>Pohela Boishakh</em> (Bengali New Year in mid-April) with colorful street parades, masks, and traditional music across university grounds and cultural parks.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Monsoon Greenery
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">June to October</h3>
            <p className="text-xs text-gray-500 font-medium">Monsoon Rains: 28°C – 34°C</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Monsoon showers transform the countryside into a radiant emerald green. The tea gardens of Sylhet and waterfalls of Jaflong reach peak visual glory, though heavy localized rains require flexible travel plans.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Major Cities */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Urban Hubs & Regional Centers</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Major Cities in Bangladesh
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">1. Dhaka — The Historic & Economic Heart</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Capital</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The vibrant capital blends 400-year-old Mughal gateways and riverside palaces in Old Dhaka with sleek corporate towers, embassies, and fine dining in Gulshan and Banani. Home to the modern MRT Metro Rail and bustling university campuses.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">2. Chittagong (Chattogram) — Coastal Gateway</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Port City</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Bangladesh’s chief commercial seaport is surrounded by forested hills and the Bay of Bengal. Highlights include the Karnaphuli River tunnel, Foy’s Lake, Patenga Beach, and the historic shrine of Hazrat Shah Amanat.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">3. Sylhet — Tea Gardens & Spiritual Heritage</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800">Tea Capital</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Renowned for rolling green tea estates, clean freshwater rivers, and the sacred shrines of Hazrat Shah Jalal and Shah Paran. Sylhet is an eco-tourism retreat with proximity to Ratargul Swamp Forest and Jaflong.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">4. Cox’s Bazar — The World's Longest Beach</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Coastal Resort</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Boasting a 120-kilometer continuous sandy coastline, Cox’s Bazar is the epicenter of domestic beach leisure, featuring Marine Drive scenic coastal highway, Inani coral beach, and fresh seafood barbecue markets.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Flights to Bangladesh */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Air Travel & International Hubs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to Bangladesh
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Bangladesh is served by three international airports: <strong>Hazrat Shahjalal International Airport (DAC)</strong> in Dhaka, <strong>Shah Amanat International Airport (CGP)</strong> in Chittagong, and <strong>Osmani International Airport (ZYL)</strong> in Sylhet. Dhaka's flagship Terminal 3 dramatically increases international transit capacity.
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & Routing Options</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Biman Bangladesh Airlines:</strong> National flag carrier offering nonstop routes from London (Heathrow), Manchester, Toronto, Dubai, Jeddah, Medina, and regional capitals.</li>
            <li>• <strong>Gulf Carriers:</strong> Emirates, Qatar Airways, Saudia, and Air Arabia operate multiple daily wide-body flights connecting North America and Europe via Middle East hubs.</li>
            <li>• <strong>Domestic Airlines:</strong> US-Bangla Airlines, Novoair, and Biman connect Dhaka to Cox’s Bazar, Sylhet, Chittagong, Saidpur, and Jessore in under 60 minutes.</li>
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

      {/* 6. Hotels in Bangladesh */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Accommodations & Stays</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in Bangladesh
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          From 5-star international hotel chains in Dhaka’s diplomatic zones to oceanfront resorts in Cox’s Bazar and eco-cottages surrounded by tea gardens, Bangladesh caters to diverse travel budgets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Dhaka Luxury & Business</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Gulshan and Banani host brands like The Westin, InterContinental, Radisson Blu Water Garden, and Le Méridien, offering state-of-the-art security, rooftop pools, and executive lounges.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Cox's Bazar Beach Resorts</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Choose between bustling Kolatoli Beach hotels or quiet luxury retreats along Inani Beach and Marine Drive, featuring private sea-view balconies and family swimming pools.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Sylhet & Srimangal Eco-Resorts</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Grand Sultan Tea Resort, boutique jungle lodges, and organic plantation homestays offer tranquil forest views, fresh local tea tasting, and spa treatments.
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

      {/* 7. Halal Food & Street Food */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Culinary Delights & Halal Assurance</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Food & Street Food in Bangladesh
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Bangladesh is a Muslim-majority nation where virtually all meat, poultry, and dishes served across eateries, street carts, and luxury hotels are naturally and certified 100% Halal. Bengali cuisine is famed for rich aromas, mustard seed oil, cardamom, and fresh river fish.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Dhaka Kacchi Biryani</h4>
            <p className="text-xs text-[#475569]">
              Tender marinated mutton cooked in sealed clay pots with fragrant chinigura or basmati rice, saffron, and spiced potatoes. Served with borhani yoghurt drink.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Hilsa / Ilish Paturi</h4>
            <p className="text-xs text-[#475569]">
              The national fish of Bangladesh, prepared in mustard paste, green chilies, and wrapped inside banana leaves before slow steaming to perfection.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Fuchka & Chotpoti</h4>
            <p className="text-xs text-[#475569]">
              Crispy hollow semolina shells stuffed with spiced yellow peas, potatoes, grated boiled eggs, and topped with zesty tamarind water.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Sweet Meats & Cha</h4>
            <p className="text-xs text-[#475569]">
              World-renowned sweets including Rosogolla, Chamcham, Sandesh, and sweet Curd (Mishti Doi), paired with seven-layer tea or street ginger cha.
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

      {/* 8. Tourist Attractions */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Sparkles className="w-4 h-4" />
          <span>Iconic Sights & Wonders</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Tourist Attractions in Bangladesh
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. The Sundarbans Mangrove Forest</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">UNESCO World Heritage</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The largest continuous mangrove forest on earth, crisscrossed by tidal waterways, mudflats, and coastal islands. Home to the elusive Royal Bengal Tiger, estuarine crocodiles, spotted deer, and over 300 bird species. Multi-day boat expeditions from Khulna offer unforgettable jungle immersion.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Cox’s Bazar & Marine Drive</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">120 km Sea Beach</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Stretching uninterrupted along the Bay of Bengal, Cox’s Bazar offers mesmerizing sunsets, beach buggy rides, and water sports. The 80 km Marine Drive connects Cox's Bazar to Teknaf, offering stunning views with hills on one side and the ocean on the other.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Srimangal & Lawachara National Park</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800">Tea Capital of Bengal</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Known for miles of undulating green tea plantations, rubber estates, and pine groves. Lawachara National Park is a dense semi-evergreen rainforest housing endangered western hoolock gibbons, rare orchids, and serene jungle trekking trails.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Historic Old Dhaka, Lalbagh Fort & Ahsan Manzil</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Heritage Monuments</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Step into 17th-century Mughal grandeur at Lalbagh Fort, featuring the Mausoleum of Pari Bibi and subterranean tunnels. Nearby on the banks of the Buriganga sits Ahsan Manzil (The Pink Palace), displaying royal Nawab relics and river port panoramas.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Travel Tips */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>Practical Advice for Travelers</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential Bangladesh Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Currency & Cash</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Bangladeshi Taka (BDT). International cards work in malls and hotels; keep cash on hand for rickshaws, boatmen, and street food stalls.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Dhaka Transit & Traffic</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Use the modern MRT Metro Rail Line 6 to bypass street congestion across north-south Dhaka. For other routes, ride-hailing apps like Uber and Pathao are readily available.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">SIM Cards & Connectivity</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Pick up an eSIM or physical tourist SIM card (Grameenphone or Robi) at Dhaka Airport arrivals with your passport for fast 4G coverage nationwide.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Cultural Etiquette</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Dress modestly when visiting mosques and rural communities. Always drink bottled or filtered water, and remove shoes before entering residences or sacred spaces.
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
          Make the most of your travel planning with our dedicated suites:
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
      <section className="bg-gradient-to-r from-[#064E3B] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your Bangladesh Journey with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates across Bangladesh.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Bangladesh
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find Bangladesh Hotels
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
