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
  Landmark,
  Camera
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface NewYorkCityGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const NewYorkCityGuide: React.FC<NewYorkCityGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#3B82F6] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>City Travel Guide — New York, USA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            New York City Guide — The City That Never Sleeps with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              New York City is an unrivaled global epicenter of arts, theater, architecture, finance, and gastronomy. Comprising five distinct boroughs—Manhattan, Brooklyn, Queens, The Bronx, and Staten Island—NYC pulses with relentless creative momentum and magnetic vitality.
            </p>
            <p>
              From standing at the crossroads of the world in Times Square and walking beneath golden foliage in Central Park to catching an iconic Broadway musical, visiting the Statue of Liberty, or sampling street food from world-famous halal carts, New York City is an unforgettable bucket-list journey.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with transparent, practical, and honest guidance. Explore our curated flight comparison tools, vetted hotels across Manhattan and Queens, halal dining directories, and subway tips to experience the Big Apple smoothly and affordably.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Best Time to Visit NYC */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Seasons & Best Months</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit New York City
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Autumn Peak (Sep to Nov)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Crisp Days & Central Park Foliage</h3>
            <p className="text-xs text-gray-500 font-medium">12°C – 22°C (54°F – 72°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Consistently rated the best time to explore NYC on foot. Comfortable walking temperatures, clear sunny skies, vibrant autumn foliage across Central Park, and the start of the Broadway theater season.
            </p>
          </div>

          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Spring (April to June)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Blossoms & Outdoor Dining</h3>
            <p className="text-xs text-gray-500 font-medium">14°C – 24°C (57°F – 75°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Cherry blossoms at Brooklyn Botanic Garden, open-air sidewalk cafés, rooftop lounges opening for the season, and mild breezes along the Hudson River Greenway.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Holiday Season (Dec)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Winter Magic & Festivities</h3>
            <p className="text-xs text-gray-500 font-medium">0°C – 7°C (32°F – 45°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Experience the giant Rockefeller Center Christmas Tree, illuminated department store holiday windows on 5th Avenue, and ice skating in Bryant Park Winter Village.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Sparkles className="w-4 h-4" />
          <span>Iconic Sights of New York</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in New York City
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Times Square & Broadway Theater District</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Midtown Manhattan</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Known as "The Crossroads of the World," Times Square radiates with towering multi-story LED screens, street performers, and the TKTS discount booth. Within steps are 41 professional Broadway theaters staging world-famous productions like The Lion King, Aladdin, and Wicked.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Central Park</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-800">Urban Oasis</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Designed by Frederick Law Olmsted, this 843-acre masterpiece in the center of Manhattan features Bethesda Terrace and Fountain, Bow Bridge, rowboat rentals on The Lake, Strawberry Fields memorial, and miles of shaded walking and jogging trails.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Statue of Liberty & Ellis Island</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Freedom Symbol</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              A gift from France dedicated in 1886, Lady Liberty stands proudly in New York Harbor. Take the official ferry from Battery Park to explore the pedestal museum, or ride the complimentary Staten Island Ferry for breathtaking views of the Statue and Lower Manhattan skyline.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Brooklyn Bridge & DUMBO</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Engineering Marvel</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Completed in 1883 with iconic Gothic stone arches, walking the 1.1-mile pedestrian promenade over the East River into Brooklyn offers breathtaking skyline views. Arrive in DUMBO for historic cobblestones, waterfront parks, and artisan pizza.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Flights to NYC */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Airports & Transit</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to New York City
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          The NYC metropolitan area is anchored by three major international airports: <strong>John F. Kennedy International Airport (JFK)</strong> in Queens, <strong>Newark Liberty International Airport (EWR)</strong> in New Jersey, and <strong>LaGuardia Airport (LGA)</strong> for domestic and regional routes.
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & Subway Connections</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>International Connectivity:</strong> Non-stop flights into JFK from every major continent via Emirates, Qatar Airways, Turkish Airlines, British Airways, Saudia, and Air France.</li>
            <li>• <strong>AirTrain JFK to Subway:</strong> Take AirTrain JFK to Jamaica Station to connect directly to the E subway line or Long Island Rail Road (LIRR) into Penn Station / Grand Central Madison in 35 minutes.</li>
            <li>• <strong>Newark AirTrain to NJ Transit:</strong> Connects directly into New York Penn Station in 25–30 minutes for an economical transfer.</li>
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

      {/* 5. Hotels in NYC */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Hotels & Neighborhood Stays</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in New York City
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Choosing the right neighborhood in NYC is the key to maximizing your time and budget. Consider these proven areas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Midtown Manhattan</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Ideal for first-time visitors wanting to walk to Times Square, Broadway, Rockefeller Center, and 5th Avenue shopping, with subway lines on every corner.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Long Island City (Queens)</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Smart budget alternative just 1 to 2 subway stops from Midtown Manhattan across the East River, offering modern hotels at 40% lower rates.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Lower Manhattan & Downtown</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Quiet evenings, historic streets near Wall Street, 9/11 Memorial, and ferry terminals for Statue of Liberty and Brooklyn exploration.
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

      {/* 6. Halal Food in NYC */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Halal Dining Scene</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Food in New York City
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          New York City is one of the world's greatest halal street food and dining capitals. You are never more than a few blocks from a certified halal food cart, halal smash burger spot, or authentic ethnic kitchen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">The Halal Guys</h4>
            <p className="text-xs text-[#475569]">
              The legendary cart founded at 53rd Street and 6th Avenue in 1990. Famous worldwide for chicken and gyro over spiced rice topped with famous white sauce and fiery hot sauce.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Halal Smash Burgers</h4>
            <p className="text-xs text-[#475569]">
              NYC leads the artisanal halal burger trend with gourmet crispy double smash patties, halal beef bacon, and special sauce across Brooklyn and Midtown spots like 7th Street and Burger Village.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Astoria Egyptian Seafood</h4>
            <p className="text-xs text-[#475569]">
              Steinway Street in Queens is known as "Little Egypt," packed with authentic halal fish markets where you choose fresh catch to be grilled with Egyptian spices.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Jackson Heights South Asian</h4>
            <p className="text-xs text-[#475569]">
              Queens culinary melting pot serving slow-cooked Bangladeshi kacchi biryani, Indian tandoori grills, and Nepali momos in a 100% halal neighborhood setting.
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
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          <span>Local Secrets & Subway Advice</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential New York City Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">OMNY Subway Tap-and-Go</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Tap your contactless credit card or smartphone at turnstiles for $2.90 per ride. Automatically caps after 12 rides in a Monday-to-Sunday cycle, making subsequent rides free.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Grid Navigation</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Manhattan follows a simple grid above Houston Street: Streets run east-west; Avenues run north-south. Numbered streets increase as you travel uptown.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Comfortable Walking Shoes</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              You will easily log 15,000 to 20,000 steps per day walking between subway stops and avenues. Supportive athletic footwear is indispensable.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Tipping Culture</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Tipping in NYC sit-down restaurants is 18% to 22% of the pre-tax bill. Fast-food counter tips are optional; taxi tips average 15% to 20%.
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
          Optimize your New York journey with our dedicated travel tools:
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
      <section className="bg-gradient-to-r from-[#0F172A] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your NYC Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates in New York City.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to NYC
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find NYC Hotels
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
            <button onClick={() => onNavigate?.('privacy')} className="hover:underline cursor-pointer">Privacy Policy</button>
            <button onClick={() => onNavigate?.('terms')} className="hover:underline cursor-pointer">Terms & Conditions</button>
          </div>
        </div>
      </footer>
    </article>
  );
};
