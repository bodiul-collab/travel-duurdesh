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
  Castle,
  Landmark
} from 'lucide-react';
import { CurrencyConfig } from '../../types';

interface UkCountryGuideProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const UkCountryGuide: React.FC<UkCountryGuideProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  return (
    <article className="space-y-16">
      {/* 1. Page Title & Intro */}
      <section className="relative bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E3A8A] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#94A3B8]">
            <Sparkles className="w-4 h-4 text-[#FDE047]" />
            <span>Country Travel Guide — Western Europe</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
            UK Country Guide — Royal Heritage, Dramatic Coastlines & Cosmopolitan Culture with Travel DuurDesh
          </h1>

          <div className="space-y-4 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              The United Kingdom of Great Britain and Northern Ireland weaves together centuries of royal history, iconic medieval fortresses, dramatic Scottish Highlands, and energetic cultural capitals. Comprising England, Scotland, Wales, and Northern Ireland, the UK presents travelers with an extraordinary combination of literary legacy, world-leading art galleries, and historic university towns.
            </p>
            <p>
              Whether you are marveling at Big Ben and Westminster Abbey in London, walking the atmospheric volcanic cobbles of Edinburgh's Royal Mile, exploring industrial music history in Manchester, or discovering the booming multicultural halal dining scenes across Birmingham and Bradford, the UK offers an inspiring voyage.
            </p>
            <p className="text-sm sm:text-base text-white/80 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              At <strong>Travel DuurDesh</strong>, we provide travelers with practical and transparent guidance. Explore our curated flight comparison tools, vetted central hotels, halal culinary insights, and local travel advice to build your ideal British itinerary.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Overview of the UK */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A] uppercase tracking-wider bg-[#EFF6FF] px-3.5 py-1.5 rounded-full w-fit">
          <Compass className="w-4 h-4" />
          <span>Four Nations & Heritage</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Overview of the UK: An Island of History & Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#475569] text-sm leading-relaxed">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#1E3A8A]" />
              Monarchy & Living History
            </h3>
            <p>
              Home to ancient castles, Windsor Castle, Buckingham Palace, the Tower of London, and parliamentary traditions that have shaped global democracy for centuries.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Castle className="w-4 h-4 text-[#1E3A8A]" />
              Four Distinct Nations
            </h3>
            <p>
              England's rolling countryside, Scotland's dramatic lochs and highlands, Wales's rugged national parks and castles, and Northern Ireland's basalt Giant's Causeway.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h3 className="font-bold text-[#071B49] text-base flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1E3A8A]" />
              Arts & Free Museums
            </h3>
            <p>
              The UK's premier national institutions—including the British Museum, National Gallery, Tate Modern, and Natural History Museum—offer free general admission to all visitors.
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
          Best Time to Visit the UK: Seasons & British Weather
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-green-200 bg-green-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Late Spring (May to June)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Long Days & Blooming Gardens</h3>
            <p className="text-xs text-gray-500 font-medium">Mild: 15°C – 21°C (59°F – 70°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Delightful daylight lasting until 9:30 PM, blooming royal parks, open-air café terraces, and fewer crowds than midsummer. Ideal for countryside driving and city strolls.
            </p>
          </div>

          <div className="border border-blue-200 bg-blue-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Summer (July to August)
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Festival & Highland Season</h3>
            <p className="text-xs text-gray-500 font-medium">Warmest: 18°C – 26°C (64°F – 79°F)</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Vibrant atmosphere, the world-famous Edinburgh Festival Fringe, outdoor theater in London's Regent's Park, and prime conditions for hiking in the Lake District.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-6 rounded-2xl space-y-3">
            <div className="inline-block bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
              Autumn & Festive Lights
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Sep–Nov / Dec</h3>
            <p className="text-xs text-gray-500 font-medium">Foliage & Christmas Illuminations</p>
            <p className="text-xs text-[#475569] leading-relaxed">
              Autumn features golden leaves in Richmond Park. December turns London into a winter wonderland with Oxford Street lights, Hyde Park Winter Wonderland, and festive markets.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Major Cities */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Cities of Great Britain</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Major Cities in the UK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">1. London — The Global Capital</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Capital</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Home to the London Eye, Big Ben, Buckingham Palace, West End theaters, diverse boroughs from Soho to Kensington, and seamless underground transit on the Tube.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">2. Manchester — Music, Culture & Football</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-800">Northern England</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Famous for Old Trafford and the Etihad Stadium, the industrial brick warehouses of the Northern Quarter, science museums, and the renowned Rusholme Curry Mile.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">3. Birmingham — Canals & Multicultural Pulse</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">Midlands</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The UK's second city has more miles of canals than Venice, world-famous Jewellery Quarter workshops, the Library of Birmingham, and the iconic Balti Triangle.
            </p>
          </div>

          <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-gray-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#071B49]">4. Edinburgh — The Scottish Crown</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">Scotland</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Dominated by Edinburgh Castle atop an extinct volcanic crag, the medieval Royal Mile, Arthur's Seat viewpoint, and grand Georgian architecture in New Town.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Flights to UK */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Plane className="w-4 h-4" />
          <span>Aviation & Airports</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Flights to the UK
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          The UK operates world-class aviation gateways led by <strong>London Heathrow (LHR)</strong>—Europe’s busiest hub—alongside <strong>London Gatwick (LGW)</strong>, <strong>Manchester (MAN)</strong>, <strong>Birmingham (BHX)</strong>, and <strong>Edinburgh (EDI)</strong>.
        </p>

        <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-4">
          <h3 className="font-bold text-[#071B49] text-base">Key Airlines & High-Speed Airport Rail</h3>
          <ul className="text-xs text-[#475569] space-y-2">
            <li>• <strong>British Airways:</strong> Flag carrier connecting North America, Middle East, Asia, and European cities with direct flights into Heathrow and Gatwick.</li>
            <li>• <strong>Middle East & Asian Carriers:</strong> Emirates, Qatar Airways, Saudia, Turkish Airlines, and Biman Bangladesh operate high-frequency direct wide-body flights to both London and Manchester.</li>
            <li>• <strong>Elizabeth Line & Heathrow Express:</strong> Travel from Heathrow terminals to central London (Paddington / Tottenham Court Road) in 15 to 30 minutes via modern rail.</li>
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

      {/* 6. Hotels in UK */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <Building2 className="w-4 h-4" />
          <span>Accommodations & City Stays</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Hotels in the UK
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          From historic Victorian townhouses facing quiet London garden squares to modern serviced apartments, Scottish stone manor lodges, and countryside country inns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Central London Heritage</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Boutique hotels in Bloomsbury, Kensington, and Westminster offering historic character within steps of museums, parks, and Underground stations.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Manchester & Northern Boutique</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Trendy loft hotels in converted textile mills around Manchester's Northern Quarter and Ancoats, featuring artisan coffee shops and modern amenities.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Edinburgh Royal Mile</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Atmospheric stone buildings along the Royal Mile offering views of the castle, historic closes, and walking access to Princes Street gardens.
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

      {/* 7. Halal Food & British Cuisine */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
          <UtensilsCrossed className="w-4 h-4" />
          <span>Halal Dining & British Classics</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Halal Food & British Cuisine
        </h2>

        <p className="text-sm text-[#475569] leading-relaxed">
          The UK has one of Europe’s most vibrant and transparent Halal culinary scenes, overseen by rigorous certifications like the Halal Monitoring Committee (HMC). Travelers can experience halal afternoon teas, halal traditional Fish & Chips, authentic South Asian curries, and modern halal steakhouses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Halal Fish & Chips</h4>
            <p className="text-xs text-[#475569]">
              Golden beer-batter-free fried cod or haddock served with thick-cut chips, mushy peas, and tartar sauce at certified fish bars across London and coastal towns.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Curry Capital & Balti</h4>
            <p className="text-xs text-[#475569]">
              Chicken Tikka Masala (invented in the UK), sizzling cast-iron Balti curries in Birmingham, and Manchester's Curry Mile serving slow-cooked karahi and naan.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Halal Afternoon Tea</h4>
            <p className="text-xs text-[#475569]">
              Luxury London hotels in Mayfair and Knightsbridge offering full halal-certified afternoon teas with delicate finger sandwiches, warm scones, clotted cream, and preserves.
            </p>
          </div>
          <div className="bg-[#F8FAFC] p-4 rounded-xl border border-gray-100 space-y-1.5">
            <h4 className="font-bold text-[#071B49] text-sm">Edgware Road & Whitechapel</h4>
            <p className="text-xs text-[#475569]">
              Edgware Road is London's Middle Eastern artery for Lebanese shawarma and grills; Whitechapel is famous for Bengali fish curries and biryanis.
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
          <span>British Icons</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
          Top Attractions in the UK
        </h2>

        <div className="space-y-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">1. Big Ben & Westminster Abbey</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">London Landmark</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              The newly restored Elizabeth Tower (Big Ben) and the Gothic masterpiece of Westminster Abbey, site of royal coronations and weddings since 1066. Stroll across Westminster Bridge for panoramic Thames views.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">2. The London Eye & South Bank</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">Observation Wheel</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Rising 135 meters above the River Thames, the London Eye's high-tech glass capsules offer 360-degree views stretching up to 40 kilometers over St. Paul’s Cathedral, The Shard, and Windsor Castle.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">3. Edinburgh Castle & Royal Mile</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">Scottish Citadel</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Perched atop Castle Rock, Edinburgh Castle houses the Honours of Scotland (the Crown Jewels) and the historic Stone of Destiny, overlooking the picturesque volcanic ridges and gardens of the Scottish capital.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#071B49] text-lg">4. Tower Bridge & Tower of London</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Historic Fortress</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              Walk across the high-level glass floor walkway of Victorian Tower Bridge and explore the 900-year-old Tower of London fortress, protected by the Yeoman Warders (Beefeaters) and home to the Koh-i-Noor diamond.
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
          Essential UK Travel Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Contactless Transit</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              You do not need an Oyster card: simply tap any contactless bank card or phone on London Underground fare gates and buses with automatic daily fare capping.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Advance Train Tickets</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Intercity rail travel (e.g. London to Edinburgh or Manchester) is significantly cheaper when booked 4 to 12 weeks in advance via National Rail.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Weather Layering</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              British weather is notoriously changeable. Always carry a light rain jacket or compact umbrella, and dress in versatile layers.
            </p>
          </div>

          <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-2">
            <h4 className="font-bold text-[#071B49] text-sm">Free National Museums</h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              Permanent collections at major London and Edinburgh museums are free of charge. Booking free timed entry slots online is recommended.
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
          Plan every detail of your UK holiday with our dedicated modules:
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
      <section className="bg-gradient-to-r from-[#1E293B] via-[#0969E8] to-[#071B49] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-syncopate">
          Plan Your UK Journey with Travel DuurDesh
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Find Flights, Hotels, Food Guides, and Travel Tools — all designed to give you clarity, transparency, and the best travel rates across the United Kingdom.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate?.('flights')}
            className="bg-white text-[#071B49] hover:bg-gray-100 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Search Flights to UK
          </button>
          <button
            onClick={() => onNavigate?.('hotels')}
            className="bg-[#FFB800] hover:bg-[#e0a200] text-[#071B49] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
          >
            Find UK Hotels
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
