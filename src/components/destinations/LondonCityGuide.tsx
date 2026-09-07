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
  Crown,
  Landmark,
  Camera
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface LondonCityGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const LondonCityGuide: React.FC<LondonCityGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E3A8A] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>City Travel Guide — London, United Kingdom</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            London City Guide — Royal Majesty, Iconic Landmarks & Vibrant Boroughs with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              London stands as one of humanity’s greatest global metropolises—a two-thousand-year-old river city where Roman ruins, Gothic cathedrals, royal palaces, and sleek glass skyscrapers coexist along the River Thames.
            </p>
            <p>
              From hearing the iconic chimes of Big Ben beside the Houses of Parliament and boarding the glass observation capsules of the London Eye to strolling across Victorian Tower Bridge, exploring world-renowned free national museums, or savoring diverse halal food across Edgware Road and Whitechapel, London is endlessly captivating.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with practical and transparent guidance. Explore our curated flight comparison tools, vetted central hotels, halal culinary directories, and contactless Underground advice to navigate London smoothly and cost-effectively.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Best Time to Visit London */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Calendar className="w-4 h-4" />
          <span>Seasons & Best Months</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Best Time to Visit London
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Late Spring (May to June)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Long Sunlight & Royal Gardens</h3>
            <p className="text-xs text-gray-500 font-medium">16°C – 22°C (61°F – 72°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              London is at its most enchanting. Days are long with sunsets after 9 PM, royal parks (Hyde Park, St James's Park) are in full bloom, and outdoor café terraces along Covent Garden are bustling.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Summer (July to August)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Warm Days & Open Palaces</h3>
            <p className="text-xs text-gray-500 font-medium">18°C – 26°C (64°F – 79°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Buckingham Palace State Rooms open to the public, open-air river concerts occur on the South Bank, and roof terraces across the City and Shoreditch are in high demand.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Festive Season (Nov to Dec)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">World-Class Christmas Lights</h3>
            <p className="text-xs text-gray-500 font-medium">4°C – 10°C (39°F – 50°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              The luminous angel lights of Regent Street, festive ice rinks at Somerset House, and the massive Winter Wonderland in Hyde Park create a magical European holiday experience.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Sparkles className="w-4 h-4" />
          <span>London Landmarks</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in London
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Big Ben & The Houses of Parliament</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Westminster</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The freshly gilded neo-Gothic Elizabeth Tower (Big Ben) and Palace of Westminster form the quintessential London image. Stroll along Westminster Bridge to photograph the clock face and Parliament reflecting off the River Thames.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. The London Eye</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">South Bank</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Standing 135 meters tall directly opposite Parliament, this giant cantilevered observation wheel provides a 30-minute slow rotation inside air-conditioned glass pods with 360-degree vistas of the entire city skyline.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Tower Bridge & The Tower of London</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Historic Center</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Walk across the iconic twin Victorian Gothic bascule bridge with glass floor walkways looking down on passing boats. Next door, explore the ancient White Tower and see the British Crown Jewels in the historic fortress.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Buckingham Palace & St James's Park</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Royal Residence</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The official London residence of the British Sovereign. Watch the colourful Changing the Guard ceremony at 11:00 AM on scheduled days, accompanied by military marching bands and horseback cavalry.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Flights to London */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Aviation & Fast Transit</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to London
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          London is served by six commercial airports, spearheaded by <strong>London Heathrow (LHR)</strong> and <strong>London Gatwick (LGW)</strong>, followed by London Stansted (STN), Luton (LTN), and London City Airport (LCY).
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & High-Speed Rail Connections</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>Major Flag Carriers:</strong> British Airways, Virgin Atlantic, Emirates, Qatar Airways, Saudia, Turkish Airlines, and Biman Bangladesh operate high-frequency direct wide-body routes.</li>
            <li>• <strong>Elizabeth Line:</strong> Modern high-frequency air-conditioned rail connecting Heathrow Airport to Central London (Paddington, Tottenham Court Road, Liverpool Street) in approximately 30 minutes at standard transit fares.</li>
            <li>• <strong>Heathrow Express:</strong> Premium non-stop train running between Heathrow Terminals and London Paddington in just 15 minutes.</li>
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

      {/* 5. Hotels in London */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Neighborhood Hotels & Stays</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in London
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          Selecting the ideal London neighborhood ensures easy walking and Tube access:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Westminster & South Bank</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Stay within sight of Big Ben and the London Eye. Walk directly to the riverside walkway, National Theatre, and boat cruise piers.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Kensington & Chelsea</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Upscale, quiet Victorian residential squares near the Victoria & Albert Museum, Natural History Museum, Hyde Park, and Harrods.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Bloomsbury & King’s Cross</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Excellent value boutique townhouses near the British Museum and King's Cross St. Pancras transport hub (Eurostar to Paris/Brussels).
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

      {/* 6. Halal Food in London */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Halal Dining Hubs</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Food in London
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          London is recognized as Europe's premier capital for halal gastronomy. A substantial Muslim population, combined with strict certification bodies like the Halal Monitoring Committee (HMC), ensures transparent choices across cuisines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Edgware Road</h4>
            <p className="text-xs text-[#475569]">
              Known as "Little Beirut," this vibrant corridor off Marble Arch is packed with 100% halal Lebanese shawarma, chargrilled lamb kofta, fresh juices, and Moroccan tagines open late into the night.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Whitechapel & Brick Lane</h4>
            <p className="text-xs text-[#475569]">
              East London’s legendary South Asian curry capital. Sample authentic Bangladeshi bhuna, slow-cooked lamb shank biryani, and handmade jalebi sweets.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Halal Fine Dining</h4>
            <p className="text-xs text-[#475569]">
              High-end halal steakhouses, halal French confit duck, and Wagyu beef burgers in Mayfair, Knightsbridge, and Covent Garden.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Halal Afternoon Tea</h4>
            <p className="text-xs text-[#475569]">
              Traditional British afternoon teas served with halal chicken and cucumber finger sandwiches, warm clotted cream scones, and luxury Earl Grey tea in 5-star hotels.
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
          <span>Local Secrets & Transit Advice</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Essential London Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Contactless Tap-to-Pay</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              No need to buy paper tickets or Oyster cards. Tap your contactless card or Apple/Google Pay on Tube gates and iconic red buses with automatic daily price capping.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Free National Museums</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              The British Museum, National Gallery, Tate Modern, Natural History Museum, and Science Museum are completely free to enter.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Thames River Bus</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              The Uber Boat by Thames Clippers is an economical, scenic way to glide past Tower Bridge, St. Paul's, and Greenwich using your contactless transit card.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Escalator Etiquette</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Always stand on the right side of London Underground escalators so commuters can walk up on the left.
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
          Organize your trip with our dedicated travel modules:
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
          Plan Your London Trip with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates in London.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to London
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find London Hotels
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
