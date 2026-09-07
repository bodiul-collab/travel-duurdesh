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
  Camera,
  Flag,
  Landmark
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface UsaCountryGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const UsaCountryGuide: React.FC<UsaCountryGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93C5FD_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>Country Travel Guide — North America</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            USA Country Guide — Iconic Cities, Vast Landscapes & Limitless Adventures with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Spanning nearly 3.8 million square miles and six time zones, the United States of America is a land of staggering diversity. From the neon-lit canyons of New York City and the entertainment epicenter of Los Angeles to the geological wonder of the Grand Canyon and the sun-soaked Art Deco avenues of Miami, the USA offers limitless horizons for every type of traveler.
            </p>
            <p>
              Whether you are planning an epic American cross-country road trip along Route 66, exploring world-renowned national parks, touring international museums in Washington D.C., or savoring the growing halal culinary scenes across major metropolitan hubs, the United States delivers unforgettable moments.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with practical and transparent guidance. Explore our multi-carrier flight search, family-friendly hotel directories, curated halal dining guides, and smart travel budget tools to navigate America with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview of the USA */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider bg-[#EFF6FF] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>Geography & Scale</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Overview of the USA: Fifty States of Wonder
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-sm leading-relaxed">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Landmark className="w-4 h-4 text-[#1D4ED8]" />
              Major Regions
            </h3>
            <p>
              Divided into the historic Northeast, sunny Southeast, agricultural Midwest, majestic Rocky Mountains, arid Southwest, and Pacific West Coast—each region exhibits distinct accents, weather, and cultural character.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#1D4ED8]" />
              National Park System
            </h3>
            <p>
              America's 63 designated National Parks (Yellowstone, Yosemite, Zion, Grand Canyon) preserve some of the planet’s most pristine wilderness, alpine lakes, giant sequoias, and wildlife habitats.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1D4ED8]" />
              Urban Innovation
            </h3>
            <p>
              American cities are global engines of technology, cinema, music, and commerce, featuring iconic architectural skylines and extensive transit options for international voyagers.
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
          Best Time to Visit the USA: Seasons by Region
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Spring (April to June)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Pleasant Across the Country</h3>
            <p className="text-xs text-gray-500 font-medium">Mild: 15°C – 24°C (59°F – 75°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Cherry blossoms bloom in Washington D.C., moderate temperatures make walking in New York City and Chicago delightful, and desert national parks in Utah and Arizona are comfortable before peak summer heat.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Autumn (September to November)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Golden Foliage Season</h3>
            <p className="text-xs text-gray-500 font-medium">Crisp: 12°C – 22°C (54°F – 72°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Spectacular fall foliage blankets New England, California grape harvests begin, and major cities offer lower hotel rates alongside sunny autumn afternoons.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Summer Coast & Winter Holidays
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Jul–Aug / Dec–Jan</h3>
            <p className="text-xs text-gray-500 font-medium">Beaches vs. Festive Lights</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Summer is prime for road trips, California beaches, and theme parks. December brings holiday window displays, ice skating, and festive cheer in NYC and Chicago.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Major Cities */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Premier Metropolitan Centers</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Major Cities in the USA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">1. New York City — The Big Apple</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">East Coast</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The financial and cultural capital of the world, featuring Broadway theaters, Central Park, Statue of Liberty, Brooklyn Bridge, and around-the-clock subway connectivity.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">2. Los Angeles — The City of Angels</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">West Coast</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The entertainment capital of Hollywood, Universal Studios, Griffith Observatory, Beverly Hills, and sunny Pacific beach towns in Santa Monica and Venice Beach.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">3. Chicago — The Windy City</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">Midwest</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Renowned for magnificent river architecture cruises, the shiny Cloud Gate ("The Bean") in Millennium Park, deep-dish pizza, and the Magnificent Mile retail boulevard.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">4. Miami — Sunshine & Latin Culture</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">Southeast Coast</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Famous for turquoise Atlantic waters, South Beach pastel Art Deco architecture, vibrant Cuban food and coffee in Little Havana, and gateway access to the Florida Everglades.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Flights to USA */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>International Gateways & Airlines</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to the USA
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          The United States is served by hundreds of international gateway airports. Primary international arrival hubs include <strong>New York (JFK and EWR)</strong>, <strong>Los Angeles (LAX)</strong>, <strong>Chicago (ORD)</strong>, <strong>Miami (MIA)</strong>, <strong>San Francisco (SFO)</strong>, and <strong>Washington Dulles (IAD)</strong>.
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & Visa Advice</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Global Airlines:</strong> Emirates, Qatar Airways, Turkish Airlines, British Airways, Singapore Airlines, and Lufthansa operate non-stop wide-body flights from Europe, Middle East, and Asia.</li>
            <li>• <strong>Domestic Airlines:</strong> Delta Air Lines, United Airlines, and American Airlines offer thousands of daily flights connecting every US city and national park gateway.</li>
            <li>• <strong>Visa Entry Requirements:</strong> Eligible travelers from Visa Waiver Program countries must obtain an approved Electronic System for Travel Authorization (ESTA) prior to boarding. Other travelers require a standard B1/B2 tourist visa.</li>
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

      {/* 6. Hotels in USA */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Accommodations & Lodging</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in the USA
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          From boutique high-rise suites in Manhattan to historic national park timber lodges, beachfront resorts, and comfortable roadside motels, US lodging accommodates every budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Metropolitan Luxury & Business</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Centrally located properties in Manhattan, Downtown Chicago, and San Francisco within walking distance of subways, museums, and shopping avenues.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Family Theme Park Resorts</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Orlando and Anaheim resorts offering complimentary shuttle buses, early park entry, themed family suites, and lagoon swimming complexes.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">National Park Lodges & Motels</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Iconic rustic timber lodges situated inside or at the rim of national parks, alongside value-priced roadside chains for road-trippers.
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

      {/* 7. Food & Travel (Halal options in major cities) */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Halal Dining Across America</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Food & Travel: Halal Options in Major US Cities
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          The United States has seen an explosion in certified halal dining over the past decade. Major metropolitan areas host vibrant halal food ecosystems spanning gourmet halal smash burgers, authentic Middle Eastern shawarma, South Asian biryanis, and Texas halal barbecues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">New York City</h4>
            <p className="text-xs text-[#475569]">
              Birthplace of The Halal Guys on 53rd & 6th; Astoria’s Egyptian seafood corridor on Steinway Street; Jackson Heights South Asian diners; and halal smash burger joints across Brooklyn.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Los Angeles & SoCal</h4>
            <p className="text-xs text-[#475569]">
              Halal tacos and birria in Anaheim’s Little Arabia; gourmet halal Nashville hot chicken in Glendale; and artisanal Persian grills in Westwood.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Chicago</h4>
            <p className="text-xs text-[#475569]">
              Legendary Devon Avenue South Asian dining corridor; halal deep-dish pizza options; and Bridgeview Middle Eastern bakeries and grills.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Detroit & Houston</h4>
            <p className="text-xs text-[#475569]">
              Dearborn, Michigan has America’s highest concentration of halal Arab cuisine; Houston features famous halal Texas smoked beef brisket barbecue.
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
          <span>National Highlights</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in the USA
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. New York City Icons (Times Square & Central Park)</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">New York</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Stand amidst the dazzling digital billboards of Times Square, stroll through 843 acres of tranquil pathways in Central Park, ride the ferry past the Statue of Liberty, and take in the 360-degree skyline from Summit One Vanderbilt.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. Grand Canyon National Park</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Arizona Wonder</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Carved over millions of years by the Colorado River, the Grand Canyon stretches 277 miles long and over a mile deep. Marvel at panoramic sunrise views from the South Rim or take a helicopter flight over the vibrant red-rock gorges.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Orlando Theme Parks & Entertainment</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">Florida</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The world’s family entertainment capital, home to Walt Disney World Resort (Magic Kingdom, Epcot), Universal Orlando Resort (The Wizarding World of Harry Potter), and Kennedy Space Center along the Space Coast.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Los Angeles, Hollywood & Santa Monica Pier</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">California</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Walk the Hollywood Walk of Fame, view the city from Griffith Observatory, shop on Rodeo Drive, and ride the solar-powered Pacific Wheel on historic Santa Monica Pier overlooking the Pacific ocean.
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
          Essential USA Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Tipping Etiquette</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Tipping is customary in US sit-down restaurants (18% to 22%), taxi rides (15% to 20%), and hotel bellhops ($2 to $5 per bag).
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Credit Cards & Cash</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Virtually all transactions from coffee shops to public transit accept Visa, Mastercard, and Apple/Google Pay. Cash is rarely essential.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Distances & Car Rental</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Cities like NYC and Chicago have world-class subways; for exploring California, Florida, or national parks, renting a car is highly recommended.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Travel Insurance</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Healthcare in the US is expensive for international visitors. Always travel with comprehensive travel medical insurance coverage.
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
          Plan every detail of your American adventure with our dedicated modules:
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
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your USA Journey with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates across the United States.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to USA
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find USA Hotels
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
