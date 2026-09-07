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
  ExternalLink,
  Users,
  Clock,
  CheckCircle2,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface DubaiTravelGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const DubaiTravelGuide: React.FC<DubaiTravelGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#1E3A8A] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#4DA3FF]">
            <Sparkles className="w-4 h-4 text-[#FFB800]" />
            <span>Official Destination Guide — United Arab Emirates</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            Dubai Travel Guide — Explore the City of Gold with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Dubai stands as one of the world’s most dynamic global destinations—an awe-inspiring crossroads where futuristic architectural wonders rise seamlessly beside timeless Arabian desert heritage. Known universally as the "City of Gold," Dubai captivates millions of international voyagers every year with its record-breaking skylines, world-class luxury resorts, vibrant spice souks, and family-friendly cosmopolitan spirit.
            </p>
            <p>
              Whether you are marveling at the towering Burj Khalifa, wandering the winding historic alleyways of Al Fahidi, savoring aromatic biryanis along Al Dhiyafah Road, or indulging in tax-free retail during the Dubai Shopping Festival, the city delivers an extraordinary fusion of modern glamour and authentic hospitality.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide global travelers with clear, transparent, and practical planning advice. From finding competitive flight itineraries and family-friendly hotels to identifying authentic halal dining hubs and mastering the Dubai Metro, our curated guides ensure every moment of your Arabian journey is seamless, rewarding, and cost-effective.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Best Time to Visit Dubai */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Seasonal Climate & Timing</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit Dubai: Seasons, Events & Budget Advice
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Dubai enjoys year-round sunshine within an arid desert climate. Understanding seasonal temperature shifts and cultural calendars is the key to balancing comfortable outdoor sightseeing with your overall travel budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#0969E8]">
              <span>Winter (Nov – Feb)</span>
              <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px]">Peak Season</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">20°C – 28°C (68°F – 82°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Crisp blue skies and pleasant outdoor breezes. Ideal for desert safaris, beach strolls, and al fresco dining. Expect higher hotel occupancy and lively crowds.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#D97706]">
              <span>Spring (Mar – Apr)</span>
              <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full text-[10px]">Shoulder Season</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">26°C – 34°C (78°F – 93°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Warm daytime temperatures with warm sea waters. Perfect for waterparks, boat cruises, and evening rooftop lounging before summer heat intensifies.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#DC2626]">
              <span>Summer (Jun – Aug)</span>
              <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-[10px]">Budget Season</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">38°C – 45°C (100°F – 113°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Intense desert heat with coastal humidity. Luxury 5-star hotels offer discounts of up to 60%. Enjoy climate-controlled mega malls, indoor ski resorts, and aquariums.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#7C3AED]">
              <span>Autumn (Sep – Oct)</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full text-[10px]">Transition</span>
            </div>
            <div className="text-lg font-extrabold text-[#071B49]">30°C – 36°C (86°F – 97°F)</div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Humidity begins to dissipate and evening temperatures become pleasant. Outdoor festivals and open-air markets resume their seasonal operations.
            </p>
          </div>
        </div>

        {/* Ramadan & Budget Considerations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-[#FFF9EE] border border-[#FDE68A] rounded-2xl p-5 space-y-2">
            <h3 className="text-xs font-bold text-[#92400E] uppercase tracking-wider flex items-center gap-1.5">
              <MoonStarIcon className="w-4 h-4 text-[#D97706]" />
              Ramadan Travel Considerations
            </h3>
            <p className="text-xs text-[#78350F] leading-relaxed">
              Visiting during the holy month of Ramadan offers a deeply spiritual and tranquil perspective on Dubai. The city lights up after sunset with lavish Iftar and Suhoor community banquets. While restaurants now maintain discreet dining during daytime fasting hours, visitors should dress respectfully in public spaces and observe fasting etiquette until dusk.
            </p>
          </div>

          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5 space-y-2">
            <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              Budget Travel Months (May to September)
            </h3>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Travelers looking to maximize value should consider May or September. Flight tickets drop substantially, theme park lines are nonexistent, and premium suites at Dubai Marina and Downtown become accessible at fractional prices with complimentary breakfast inclusions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions in Dubai */}
      <section className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
            <Compass className="w-4 h-4" />
            <span>Must-Visit Landmarks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Top Attractions in Dubai: Modern Icons & Cultural Treasures
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed max-w-3xl">
            From record-breaking architectural wonders to ancient desert sands and historic heritage quarters, explore the definitive highlights that make Dubai an unforgettable destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Burj Khalifa */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">World's Tallest Building</div>
            <h3 className="text-lg font-bold text-[#071B49]">Burj Khalifa</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Soaring 828 meters above the Arabian Gulf, the Burj Khalifa offers panoramic vistas from its 124th, 125th, and 148th-floor observation decks. Book sunset slots well in advance to witness the transition from day to shimmering city lights below.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Access directly via the lower ground floor of The Dubai Mall.
            </div>
          </div>

          {/* Dubai Mall */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Retail & Family Epicenter</div>
            <h3 className="text-lg font-bold text-[#071B49]">The Dubai Mall</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              More than a shopping mall, this colossal complex spans over 1,200 retail outlets, an Olympic-sized ice rink, the massive Dubai Aquarium & Underwater Zoo, VR gaming zones, and direct waterfront access to the synchronized Dubai Fountain show.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Fountain shows run every 30 minutes starting at 6:00 PM every evening.
            </div>
          </div>

          {/* Palm Jumeirah */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Engineering Marvel</div>
            <h3 className="text-lg font-bold text-[#071B49]">Palm Jumeirah</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              This iconic palm-tree-shaped archipelago is home to premier luxury beach resorts, Aquaventure Waterpark, and The View at The Palm—a 360-degree observation deck located 240 meters above the fronds offering breathtaking shoreline panoramas.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Ride the Palm Monorail from Gateway Station for scenic aerial transit.
            </div>
          </div>

          {/* Dubai Marina */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Waterfront Promenade</div>
            <h3 className="text-lg font-bold text-[#071B49]">Dubai Marina & JBR</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              A 7-kilometer canal bordered by gleaming residential towers, luxury yachts, and pedestrian boardwalks. Stroll along Marina Walk or relax across Jumeirah Beach Residence (JBR) for family beach activities and sunset dining.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Book an evening dhow cruise for dinner with shimmering skyline views.
            </div>
          </div>

          {/* Desert Safari */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Arabian Wilderness</div>
            <h3 className="text-lg font-bold text-[#071B49]">Desert Safari Experience</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Venture into the golden Arabian dunes for 4x4 dune bashing, sandboarding, camel rides, and traditional Bedouin camp hospitality. Savor open-flame halal barbecue dinners under clear starlit skies accompanied by heritage cultural shows.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Afternoon safaris (3:00 PM to 9:00 PM) offer optimal sunset photo lighting.
            </div>
          </div>

          {/* Old Dubai (Deira & Al Fahidi) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Heritage & Souks</div>
            <h3 className="text-lg font-bold text-[#071B49]">Old Dubai (Deira & Al Fahidi)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Step back into the emirate's historic origins along Dubai Creek. Explore wind-tower architecture in Al Fahidi Historical Quarter, cross the waterway on a traditional 1 AED wooden Abra boat, and haggle across the famous Gold Souk and Spice Souk.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Buy authentic saffron and frankincense directly from verified merchants in Deira.
            </div>
          </div>

          {/* Global Village */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3 md:col-span-2 lg:col-span-3">
            <div className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">Multicultural Festival Park</div>
            <h3 className="text-lg font-bold text-[#071B49]">Global Village (Seasonal: October to April)</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              A vibrant seasonal outdoor extravaganza bringing together over 90 world cultures across grand regional pavilions. Taste authentic Yemen sidr honey, Turkish delight, Thai mango sticky rice, and Pakistani street delicacies while enjoying live theatrical entertainment and artisan craft bazaars.
            </p>
            <div className="text-[11px] font-semibold text-gray-500 pt-1 border-t border-gray-100">
              Pro-Tip: Visit on weekday afternoons (open at 4:00 PM) to avoid peak weekend crowds.
            </div>
          </div>
        </div>
      </section>

      {/* 4. Best Hotels in Dubai */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Building2 className="w-4 h-4" />
              <span>Lodging Strategy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Best Hotels in Dubai: From Clock Tower Views to Beachside Resorts
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
          Dubai boasts one of the most comprehensive hotel ecosystems on earth. Selecting the right neighborhood saves hours of daily transit time and significantly reduces transport expenses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Hotels Near Dubai Mall & Downtown</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Prime location for luxury shopping, fine dining, and instant access to Burj Khalifa and Dubai Opera. Perfect for first-time travelers and short city layovers.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Examples: Address Downtown, Rove Downtown (Budget-friendly boutique).</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Hotels Near Dubai Marina & JBR</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Ideal for beach lovers, evening waterfront strolls, and vibrant cafe culture. Most properties offer apartment-style suites equipped with kitchens for families.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Examples: Address Beach Resort, Hilton Dubai Jumeirah, Marina Byblos.</div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Budget Hotels & Deira Heritage Quarters</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Superb value for smart budget travelers. Located near Dubai International Airport (DXB) and historic souks with immediate access to metro green line stations.
            </p>
            <div className="text-[11px] font-semibold text-[#0969E8]">Examples: Ibis Al Rigga, Holiday Inn Express Dubai Airport, Citymax Bur Dubai.</div>
          </div>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-dashed border-gray-300 text-center space-y-2">
          <p className="text-xs text-gray-600">
            Looking for verified hotel rates and exclusive booking deals in Dubai?
          </p>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="text-xs font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            Explore all properties on our dedicated [See Hotels Page]
          </button>
        </div>
      </section>

      {/* 5. Flights to Dubai */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <Plane className="w-4 h-4" />
              <span>Aviation & Routes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Flights to Dubai: Major Airlines, Routing & Layover Strategies
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
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">Top Airlines Serving Dubai</h3>
            <p>
              Dubai International Airport (DXB) is the central global aviation hub for <strong>Emirates Airlines</strong>, offering non-stop services to over 150 destinations across six continents. For budget-conscious voyagers, <strong>flydubai</strong> operates comprehensive regional connections across the Middle East, Eastern Europe, Central Asia, and the Indian subcontinent.
            </p>
            <p>
              Travelers arriving from North America, Europe, or Australia can also consider major carriers like Turkish Airlines, Qatar Airways, Saudia, or Gulf Air, often unlocking advantageous multi-city stopovers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">Smart Layover Tips & Free Transit Perks</h3>
            <p>
              Transiting through Dubai? Passengers with connections exceeding 8 to 24 hours on Emirates can frequently qualify for the <em>Dubai Connect</em> program, which provides complimentary hotel stays, ground transit, and meals.
            </p>
            <p>
              DXB airport features luggage storage lockers in Terminals 1 and 3, allowing passengers to take the Dubai Metro directly into downtown to visit Burj Khalifa within 20 minutes before their onward flight.
            </p>
          </div>
        </div>

        <div className="bg-[#EAF2FB] rounded-2xl p-4.5 border border-blue-200 text-xs text-[#1E3A8A] flex items-center justify-between flex-wrap gap-3">
          <span>Compare real-time airline fares and search flexible flight dates on Travel DuurDesh:</span>
          <button
            onClick={() => onNavigate?.('flights')}
            className="font-bold text-[#0969E8] hover:underline cursor-pointer"
          >
            [See Flights Page]
          </button>
        </div>
      </section>

      {/* 6. Halal Food in Dubai */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit mb-2">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Gastronomic Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Halal Food in Dubai: Authentic Flavors, Street Food & Budget Dining
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
          Dubai is a global halal dining sanctuary. Under UAE federal regulations, all meat and poultry imported and served in public establishments are strictly halal-certified by certified Islamic authorities. Travelers can dine everywhere—from humble corner cafeterias to 3-star Michelin establishments—with complete confidence and peace of mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Emirati & Khaleeji Classics</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Savor slow-simmered <em>Al Harees</em> (cracked wheat with tender lamb), aromatic <em>Machboos</em> (spiced rice stewed with local Gulf fish or chicken), and warm <em>Luqaimat</em> (crisp golden dough dumplings drizzled with sticky date syrup and toasted sesame seeds).
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Street Food & Karak Tea Culture</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              No Dubai trip is complete without stopping at neighborhood cafeterias in Satwa or Deira for piping-hot <em>Chai Karak</em> (cardamom-infused evaporated milk tea for 1–2 AED), accompanied by fresh <em>Shawarma</em> sliced from vertical roasting spits and crispy falafel wraps.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200 space-y-2">
            <h3 className="text-sm font-bold text-[#071B49]">Mall Food Courts & Family Feasts</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Mega malls in Dubai house vast culinary concourses where international franchises operate alongside Middle Eastern kebab grills, South Asian biryani stations, and Turkish pastry kitchens. Meals average $8–$14 USD per person with spacious family booths.
            </p>
          </div>
        </div>

        <div className="pt-2 text-xs text-gray-500 text-center">
          For in-depth city-by-city restaurant recommendations, visit our comprehensive{' '}
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
          <span>Practical Advice</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Dubai Travel Tips: Safety, Transit, Budgeting & Etiquette
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Safety & Law */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              World-Class Safety Standards
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Dubai consistently ranks among the safest cities in the world. Violent crime is virtually non-existent, and solo travelers (including solo female tourists and families with young children) can navigate the city safely at all hours of the night.
            </p>
          </div>

          {/* Transport: Dubai Metro & Nol Card */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Car className="w-4 h-4 text-[#0969E8]" />
              Effortless Metro & Nol Card Transit
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              The automated Dubai Metro connects DXB Airport to Downtown, Burj Khalifa, Mall of the Emirates, and Dubai Marina. Purchase a silver <strong>Nol Card</strong> at any station counter for affordable, contactless fares across all trains, trams, and public feeder buses.
            </p>
          </div>

          {/* Budget & Bargaining */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#D97706]" />
              Smart Budget & Souk Bargaining
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              While prices in luxury shopping malls are fixed, polite bargaining is welcomed across traditional souks in Deira and Bur Dubai. Always ask for the cash discount when purchasing gold jewelry, cashmere shawls, and spices.
            </p>
          </div>

          {/* Cultural Etiquette */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#EC4899]" />
              Cultural Respect & Modesty
            </h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Dubai is tolerant and cosmopolitan. In malls, family attractions, and historical quarters, modest clothing covering shoulders and knees is appreciated. Public displays of overt affection should be restrained, and always ask permission before photographing local Emirati residents.
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
          Take advantage of our complete suite of booking tools, pilgrimage guides, and culinary directories:
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
          Plan Your Dubai Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to Dubai
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Compare Dubai Hotels
          </button>
        </div>
      </section>

      {/* 10. Footer Section */}
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

function MoonStarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}
