import React, { useState } from 'react';
import {
  Utensils,
  MapPin,
  Sparkles,
  Heart,
  ChevronRight,
  Flame,
  Award,
  Compass,
  CheckCircle2,
  AlertCircle,
  Coffee,
  DollarSign,
  ShieldCheck,
  Globe,
  Clock,
  Info,
  Droplets,
  Search,
  BookOpen,
  Calendar,
  Layers,
  HelpCircle,
  Check,
  ChevronDown
} from 'lucide-react';
import { CurrencyConfig } from '../types';

interface FoodAndTravelPageProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

export const FoodAndTravelPage: React.FC<FoodAndTravelPageProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  const [selectedCity, setSelectedCity] = useState<'makkah' | 'madinah' | 'dubai' | 'istanbul' | 'kl' | 'dhaka'>('makkah');
  const [expandedSection, setExpandedSection] = useState<string | null>('history');
  const [activeStreetFilter, setActiveStreetFilter] = useState<'all' | 'asia' | 'middleeast' | 'europe'>('all');

  const formatPrice = (usd: number) => {
    const converted = Math.round(usd * currency.rateToUSD);
    return `${currency.symbol}${converted.toLocaleString()}`;
  };

  const citiesData = {
    makkah: {
      name: 'Makkah, Saudi Arabia',
      badge: 'Spiritual Center & Pilgrim Dining',
      desc: 'Dining in the Holy City of Makkah brings together flavors from across the entire Islamic world. Around the Grand Mosque, pilgrims enjoy fragrant rice dishes, piping-hot freshly baked tandoori breads, roasted meats, and wholesome stews suited for energy and devotion.',
      popularDishes: [
        { name: 'Traditional Chicken & Lamb Kabsa', desc: 'Long-grain spiced basmati rice infused with black dried lime, cardamom, cloves, and cinnamon, served with fall-off-the-bone meat.' },
        { name: 'Mutton Mandi', desc: 'Slow-cooked in subterranean clay tandoor pits with gentle wood smoke, rendering the rice rich and aromatically seasoned.' },
        { name: 'Oven-baked Mutabbaq', desc: 'Crispy folded pan-fried pastry stuffed with spiced minced meat, scallions, eggs, and freshly squeezed lemon juice.' },
        { name: 'Fresh Tamis with Foul Mudammas', desc: 'Giant disk of fresh flatbread straight from the tandoor oven dipped in slow-simmered fava bean mash seasoned with cumin and olive oil.' }
      ],
      budgetMeals: `Full hearty meals can be found for ${formatPrice(3)} to ${formatPrice(7)} (12 to 25 SAR). High-value local options include half roasted chicken with aromatic rice, generous falafel wraps, and hot vegetable salona stews.`,
      nearHaram: 'The air-conditioned multi-level food courts within the Abraj Al Bait (Clock Tower) complex, Jabal Omar concourses, and Ajyad Street offer hundreds of halal food stalls with quick service between prayer times.',
      pilgrimTips: 'Avoid heavy, deep-fried snacks right before Tawaf to prevent sluggishness or indigestion. Drink ample lukewarm Zamzam water instead of icy sodas, and eat light meals between Dhuhr and Asr.'
    },
    madinah: {
      name: 'Madinah, Saudi Arabia',
      badge: 'City of the Prophet & Gentle Hospitality',
      desc: 'Madinah dining is characterized by tranquility, generous family-style eateries, and world-renowned date orchards. The city offers diverse Arabic, South Asian, Indonesian, and Turkish establishments catering to pilgrims in the Prophet’s city.',
      popularDishes: [
        { name: 'Madini Spiced Rice (Ruz Madini)', desc: 'Distinctive golden-yellow rice delicately perfumed with mastic, cardamom, and bone broth, traditionally paired with roasted lamb.' },
        { name: 'Authentic Ajwa Dates & Fresh Gahwa', desc: 'Soft, sweet, dark Ajwa dates native to the palm groves of Madinah, traditionally enjoyed with cardamon-infused Arabic light coffee.' },
        { name: 'Charcoal-Grilled Shish Tawook', desc: 'Tender marinated chicken breast skewers served over fresh flatbread with garlic toum sauce, pickled turnip, and grilled chili.' },
        { name: 'Bukhari Rice with Grilled Half Chicken', desc: 'Hearty central Asian inspired spiced pilaf topped with shredded caramelized carrots, raisins, and tender grilled poultry.' }
      ],
      budgetMeals: `Comfortable family dinners and street platters range between ${formatPrice(4)} and ${formatPrice(8)} (15 to 30 SAR). Many family restaurants offer complimentary hot soups, green salads, and unlimited bread refills.`,
      nearHaram: 'The Northern Central Area (Markaziyah Shamaliyah) features family restaurants, Turkish barbecues, and international food courts directly across from the women’s prayer gates and courtyard piazzas.',
      pilgrimTips: 'Visit the Historic Dates Souk near Quba Mosque to sample authentic Ajwa, Safawi, and Sukari dates directly from local farmers with vacuum packaging available for your flight home.'
    },
    dubai: {
      name: 'Dubai, United Arab Emirates',
      badge: 'Global Halal Gastronomy Capital',
      desc: 'Dubai is an international dining wonderland where every major cuisine from across five continents is prepared strictly halal by default. From modest neighborhood cafeterias to Michelin-recognized culinary landmarks, halal dining is universal and seamless.',
      popularDishes: [
        { name: 'Emirati Al Harees', desc: 'Ancient traditional slow-cooked cracked wheat and tender meat simmered in clay pots overnight into a smooth, savory porridge drizzled with pure ghee.' },
        { name: 'Levantine Mixed Grills', desc: 'Platters of spiced kofta, lamb chops, chicken shish, and grilled tomatoes served with fresh tabbouleh, hummus, and warm pita.' },
        { name: 'Gulf Machboos', desc: 'Richly seasoned basmati rice slow-cooked with aromatic loomi (dried limes), turmeric, coriander, and fresh gulf seafood or chicken.' },
        { name: 'Karak Tea & Regag Crepes', desc: 'Strong spiced tea simmered with evaporated milk, paired with paper-thin crispy Emirati wafers stuffed with cream cheese and honey.' }
      ],
      budgetMeals: `Neighborhood eateries in Deira, Bur Dubai, and Karama serve full biryani trays, shawarmas, and curries for ${formatPrice(4)} to ${formatPrice(9)} (15 to 35 AED), whereas fine dining venues offer multi-course tasting menus.`,
      nearHaram: 'Key food precincts include Al Dhiyafah Road in Satwa, Al Rigga and Al Muraqqabat Streets in Deira, and the massive international pavilions at Global Village.',
      pilgrimTips: 'Look out for small neighborhood cafeterias displaying "Chai Karak" signs—they offer some of the freshest, most delicious and wallet-friendly chicken wraps and fresh fruit juices in the entire city.'
    },
    istanbul: {
      name: 'Istanbul, Turkey',
      badge: 'Centuries of Ottoman Culinary Mastery',
      desc: 'At the crossroads of Europe and Asia, Istanbul boasts one of the world’s most celebrated food cultures. The overwhelming majority of meat in Istanbul is 100% halal, blending Central Asian nomadic heritage, Persian court refinements, and Mediterranean produce.',
      popularDishes: [
        { name: 'Simit (Turkish Sesame Ring)', desc: 'Freshly baked circular bread encrusted with toasted sesame seeds and dipped in grape molasses—the quintessential Istanbul breakfast.' },
        { name: 'Iskender & Adana Kebabs', desc: 'Thinly sliced tender döner meat placed over warm pide bread, drenched in savory tomato sauce, sizzling brown butter, and thick yogurt.' },
        { name: 'Crisp Antep Pistachio Baklava', desc: 'Dozens of layers of translucent handmade phyllo pastry filled with crushed emerald pistachios and soaked in light honey syrup.' },
        { name: 'Balık Ekmek (Bosphorus Mackerel Sandwich)', desc: 'Grilled fresh mackerel fillet tucked into crusty half-baguette with shredded lettuce, onions, and freshly squeezed lemon juice by the Galata Bridge.' }
      ],
      budgetMeals: `Street snacks like simit, roasted chestnuts, and döner wraps cost only ${formatPrice(1.5)} to ${formatPrice(4)} (50 to 140 TRY). Sit-down traditional lokantas serve hearty home-cooked vegetable and meat stews for under ${formatPrice(6)}.`,
      nearHaram: 'Top neighborhoods for food enthusiasts include historic Sultanahmet, the deeply traditional and pious district of Fatih, the energetic bazaar alleys of Eminönü, and Kadıköy on the Asian shoreline.',
      pilgrimTips: 'Always dine at "Esnaf Lokantası" (tradesmen restaurants) at lunchtime. Food is displayed in steaming glass counters, allowing you to visually point to fresh vegetable stews, pilafs, and braised meats.'
    },
    kl: {
      name: 'Kuala Lumpur, Malaysia',
      badge: 'Vibrant Halal Street Food Paradise',
      desc: 'Kuala Lumpur is universally recognized as a halal food haven, governed by the world’s most stringent JAKIM halal certification standards. Malay, Chinese-Muslim, and South Indian culinary traditions merge into an explosion of bold flavors, rich spices, and fragrant herbs.',
      popularDishes: [
        { name: 'National Nasi Lemak', desc: 'Fragrant rice steamed in coconut milk and pandan leaves, served with spicy sweet sambal, crunchy dried anchovies, toasted peanuts, boiled egg, and crispy fried chicken.' },
        { name: 'Roti Canai with Dhal & Curry', desc: 'Flaky, buttery, pan-tossed flatbread paired with rich lentil dhal, chicken curry sauce, and cold sweetened iced Teh Tarik.' },
        { name: 'Slow-simmered Beef Rendang', desc: 'Tender chunks of beef slowly caramelized in coconut milk, lemongrass, galangal, ginger, and toasted ground coconut until thick and dark.' },
        { name: 'Charcoal-Grilled Chicken & Beef Satay', desc: 'Skewered marinated meat grilled over glowing coconut husks, accompanied by peanut dipping sauce, cucumber slices, and compressed rice cakes (ketupat).' }
      ],
      budgetMeals: `Hawker stalls and local food courts (Medan Selera) provide spectacular meals for ${formatPrice(2.5)} to ${formatPrice(5)} (10 to 22 MYR). Clean, high-volume dining is exceptionally affordable.`,
      nearHaram: 'Head to Kampung Baru for traditional Malay culinary village atmosphere under the skyscrapers, Jalan Alor for buzzing evening action, and air-conditioned shopping mall food courts like Lot 10 Hutong.',
      pilgrimTips: 'Look for the official green-and-white JAKIM Halal logo displayed prominently at restaurant entrances. In Malaysia, even large international chains follow strict halal supply chains.'
    },
    dhaka: {
      name: 'Dhaka, Bangladesh',
      badge: 'Rich Spice Heritage & Royal Feast Culture',
      desc: 'Dhaka’s cuisine is a soulful celebration of aromatic spices, slow-cooked royal Mughal gravies, delicate mustard marinades, and an energetic street food culture that comes alive from dawn until late at night.',
      popularDishes: [
        { name: 'Traditional Old Dhaka Kacchi Biryani', desc: 'Raw marinated tender mutton pieces layered with uncooked fragrant Chinigura rice, saffron, dried plums (alu bokhara), and fried potatoes, dum-cooked sealed in dough.' },
        { name: 'Morog Polao with Roasted Chicken', desc: 'Fragrant golden pilaf paired with a tender whole chicken quarter braised in a velvety yogurt, ghee, and cashew gravy.' },
        { name: 'Spicy Fuchka & Chotpoti', desc: 'Crisp hollow round puris stuffed with spiced chickpea and potato mash, drenched in tangy tamarind-cilantro water and topped with grated hard-boiled egg.' },
        { name: 'Assorted Bhorta Platters', desc: 'Traditional mashed preparations made from roasted eggplant, fiery dried chili, lentils, mustard oil, and smoked fish served alongside steaming white rice.' }
      ],
      budgetMeals: `Street delicacies like Fuchka, Jhalmuri, and Singara cost merely ${formatPrice(0.5)} to ${formatPrice(1.5)} (50 to 160 BDT), while a lavish festive Kacchi Biryani feast with fresh Borhani yogurt drink costs ${formatPrice(3.5)} to ${formatPrice(6)}.`,
      nearHaram: 'Explore Nazira Bazaar and Chawkbazar in historic Old Dhaka for heritage Biryani houses and century-old sweet shops, or Dhanmondi and Gulshan for modern air-conditioned family bistros.',
      pilgrimTips: 'Drink bottled water with intact factory seals, and choose bustling biryani restaurants that prepare fresh cauldrons (Degs) throughout the lunch and dinner rush.'
    }
  };

  return (
    <div className="bg-[#F8FAFC] text-[#101C36] min-h-screen">
      {/* ============================================================ */}
      {/* 1. Page Title & Intro */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#071B49] via-[#0B2564] to-[#0E2E7D] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0969E8]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FFB800]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-6" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-medium">Food & Travel</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#4DA3FF]">
              <Utensils className="w-4 h-4 text-[#FFB800]" />
              <span>Worldwide Culinary Explorations & Halal Dining Directory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Explore Global Halal Food & Travel Experiences — Travel DuurDesh
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Food is the universal heartbeat of global travel—an intimate gateway into the history, geography, and hospitality of people across every continent. For the mindful global traveler and Umrah pilgrim, discovering authentic, wholesome halal food is both a spiritual comfort and an exciting culinary journey. From steaming bowls of fragrant coconut laksa at bustling night markets in Southeast Asia and slow-cooked tandoori mandi in the holy cities of Makkah and Madinah to crispy street-side Turkish simit by the Bosphorus, Travel DuurDesh guides you toward safe, delicious, and culturally respectful dining experiences anywhere your wanderlust leads you.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#21B96F] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">100% Halal Focus</div>
                  <div className="text-white/70 text-[11px]">Wholesome & pure dining</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Flame className="w-5 h-5 text-[#FF8A2A] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Street Food Trails</div>
                  <div className="text-white/70 text-[11px]">Vibrant local flavors</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-[#FFB800] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Pilgrim Nutrition</div>
                  <div className="text-white/70 text-[11px]">Sustenance for worship</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <DollarSign className="w-5 h-5 text-[#4DA3FF] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Budget Transparency</div>
                  <div className="text-white/70 text-[11px]">Street eats to banquets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. Halal Food Guides (City by City) */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Destination Guides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Halal Food Guides in Major Destinations
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Detailed culinary blueprints for six world-famous destinations. Select a city below to discover signature dishes, budget-friendly meal prices, and local food tips.
          </p>
        </div>

        {/* City Switcher Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {[
            { id: 'makkah', label: 'Makkah' },
            { id: 'madinah', label: 'Madinah' },
            { id: 'dubai', label: 'Dubai' },
            { id: 'istanbul', label: 'Istanbul' },
            { id: 'kl', label: 'Kuala Lumpur' },
            { id: 'dhaka', label: 'Dhaka' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCity(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                selectedCity === tab.id
                  ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-[#5E6B82] border border-[#E2E8F0] hover:border-blue-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selected City Detail Card */}
        {(() => {
          const city = citiesData[selectedCity];
          return (
            <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 sm:p-10 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3 py-1 rounded-full inline-block mb-2">
                    {city.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B49]">
                    {city.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate?.('hotels')}
                    className="text-xs font-bold text-[#0969E8] hover:text-[#0759c5] bg-[#F3F8FF] hover:bg-[#EAF2FB] px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    [See Hotels Page]
                  </button>
                </div>
              </div>

              <p className="text-sm text-[#475569] leading-relaxed mt-5">
                {city.desc}
              </p>

              {/* Popular Halal Dishes Grid */}
              <div className="mt-8">
                <h4 className="text-sm font-bold text-[#071B49] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#0969E8]" />
                  Popular Halal Dishes & Specialties
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.popularDishes.map((dish, i) => (
                    <div key={i} className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-200">
                      <div className="font-bold text-sm text-[#071B49]">{dish.name}</div>
                      <p className="text-xs text-[#5E6B82] mt-1 leading-relaxed">{dish.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#071B49] uppercase">
                    <DollarSign className="w-4 h-4 text-[#21B96F]" />
                    Budget Meals & Average Costs
                  </div>
                  <p className="text-xs text-[#5E6B82] leading-relaxed">
                    {city.budgetMeals}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#071B49] uppercase">
                    <MapPin className="w-4 h-4 text-[#D97706]" />
                    Best Food Hubs & Vicinity
                  </div>
                  <p className="text-xs text-[#5E6B82] leading-relaxed">
                    {city.nearHaram}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#071B49] uppercase">
                    <Info className="w-4 h-4 text-[#0969E8]" />
                    Travel & Pilgrim Insider Tips
                  </div>
                  <p className="text-xs text-[#5E6B82] leading-relaxed">
                    {city.pilgrimTips}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* ============================================================ */}
      {/* 3. Food for Umrah Pilgrims */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#071B49] to-[#0A225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB800] bg-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/15">
              <Heart className="w-3.5 h-3.5" />
              <span>Sacred Pilgrimage Nutrition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
              Food for Umrah Pilgrims
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Performing the rites of Umrah requires significant physical stamina—walking miles across marble courtyards, performing seven circuits of Tawaf, and traversing the Sa’i track. Mindful nutrition safeguards your health and enhances your spiritual presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: What to Eat */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0969E8] flex items-center justify-center text-white font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">What to Eat During Umrah</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Focus on wholesome, easily digestible meals: lean roasted chicken with fragrant basmati rice, clear vegetable and lentil soups, fresh cucumbers, and natural unsweetened yogurt. Steer clear of excessively oily fried foods or heavy garlic curries before heading into crowded mosques.
              </p>
            </div>

            {/* Card 2: Healthy Meal Options */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21B96F] flex items-center justify-center text-white font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Healthy Balanced Options</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Choose grilled fish, steamed rice, fresh vegetable salads, and wholemeal flatbreads. Freshly squeezed pomegranate and orange juice stalls provide vital vitamin C to help prevent respiratory colds common among pilgrims during large gatherings.
              </p>
            </div>

            {/* Card 3: Budget-Friendly Meals */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800] flex items-center justify-center text-white font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Budget-Friendly Pilgrim Meals</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Supermarkets and casual eateries near the Haram bus stations offer freshly grilled chicken with rice for under {formatPrice(5)}, hearty bowls of lentil soup with warm bread for {formatPrice(2)}, and fresh bananas and apples for nutritious, pocket-friendly nourishment.
              </p>
            </div>

            {/* Card 4: Hydration Tips */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#06B6D4] flex items-center justify-center text-white font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Hydration & Zamzam Wisdom</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Drink small, measured sips of Zamzam water continuously throughout the day rather than chugging liters right before Salah. Choose non-cold Zamzam barrels if sensitive to throat irritation. Carry oral rehydration salts to restore electrolytes after long walks in desert warmth.
              </p>
            </div>

            {/* Card 5: Food Safety for Elderly */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EC4899] flex items-center justify-center text-white font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Food Safety for Elderly Pilgrims</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Senior travelers should stick to cooked-to-order steaming dishes and avoid raw street salads or unpeeled fruits. Ensure diabetic family members maintain predictable meal schedules by packing compact snack boxes of whole nuts, seed crackers, and safe protein bites.
              </p>
            </div>

            {/* Card 6: Snacks to Carry */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex items-center justify-center text-white font-bold">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Snacks to Carry in Your Day Bag</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Keep a small zip-lock pouch in your shoe bag with: 3 to 5 premium Ajwa dates, raw almonds, walnuts, dried figs, and sugar-free mints. These non-perishable snacks provide instantaneous, clean energy during long waits between Maghrib and Isha prayers.
              </p>
            </div>
          </div>

          {/* Internal Link to Umrah Page */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate?.('umrah')}
              className="inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span>[See Umrah Page]</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. Global Street Food Section */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>Culinary Adventures</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Global Street Food Adventures
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Street food is the living, sizzling soul of every city. Discover what makes street cuisine extraordinary, how to identify hygienic stalls, and how to embark on delicious budget-friendly food trails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Best Street Food Cities</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Cities like Kuala Lumpur, Istanbul, Bangkok (Muslim Quarter), Cairo, Old Dhaka, and Marrakech offer legendary open-air culinary theater. From sizzling wok tossers to wood-fired kebab masters, street corners transform into dynamic community dining halls every evening.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">What Makes Street Food Special</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Street food strips away commercial pretensions. You watch your dish being prepared directly in front of your eyes from fresh raw ingredients over searing coals or bubbling woks. It preserves heirloom family recipes passed down over generations without restaurant markups.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ECFDF5] text-[#21B96F] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Street Food Safety Protocols</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Always select stalls with a long, energetic queue of local families—high turnover guarantees fresh food that hasn't sat in ambient heat. Eat food served piping hot straight from the flame or bubbling broth. Avoid pre-sliced fruits washed in tap water.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">How to Find Halal Options</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              In non-Muslim majority nations, head toward neighborhoods near central mosques, universities, or historic Muslim heritage quarters. Look for prominent Arabic "Halal" signage, certified green stamps, or ask stall owners if the meat is slaughtered according to Islamic rites.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-sm space-y-3 lg:col-span-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#071B49]">Budget-Friendly Food Adventures Under $5</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              A street food crawl is the ultimate high-reward, low-cost travel experience. With as little as {formatPrice(5)} in Istanbul, you can enjoy a freshly baked sesame simit, a grilled fish sandwich by the waterfront, and a glass of hot Turkish black tea. In Kuala Lumpur, {formatPrice(4)} purchases two crispy rotis, rich dhal curry, and sweet Teh Tarik.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. Food & Culture Travel Guides */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E7EEF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cultural Understanding</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Food & Culture Travel Guides
            </h2>
            <p className="text-sm text-[#5E6B82] leading-relaxed">
              Exploring the profound intersections of history, faith, hospitality, and budget consciousness in culinary traditions across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Food + History */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-gray-200 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#071B49]">Food + History</h3>
                  <span className="text-[11px] text-gray-500 font-semibold">How Cuisine Reflects Civilization</span>
                </div>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Every regional recipe is a living artifact of trade routes, royal dynasties, and cultural migrations. The Silk Road brought cardamoms, star anise, and cinnamon across Persia into the Arabian Peninsula, while Moorish travelers carried saffron and rice cultivation techniques into Andalusia.
              </p>
              <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-xs space-y-2">
                <div className="font-bold text-[#071B49]">Iconic Regional Masterpieces:</div>
                <ul className="space-y-1 text-gray-600 text-[11px] list-disc list-inside">
                  <li><strong>Mughal Biryani:</strong> Royal Persian-Indian fusion cooked in sealed copper degs.</li>
                  <li><strong>Ottoman Stews:</strong> Fragrant lamb simmered with dried apricots and fresh figs.</li>
                  <li><strong>Malay Rendang:</strong> Coconut reduction preservation crafted for long seafaring trips.</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Food + Religion */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-gray-200 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#21B96F]/10 text-[#21B96F] flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#071B49]">Food + Religion</h3>
                  <span className="text-[11px] text-gray-500 font-semibold">The Sacred Concept of Halal & Tayyib</span>
                </div>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                In Islamic tradition, eating is an act of grateful worship. Food must not only be technically Halal (permissible and free from pork, alcohol, or non-ritual slaughter), but also Tayyib (wholesome, ethical, clean, and nutritious).
              </p>
              <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-xs space-y-2">
                <div className="font-bold text-[#071B49]">Sunnah Dining Practices:</div>
                <ul className="space-y-1 text-gray-600 text-[11px] list-disc list-inside">
                  <li>Beginning meals with <em>Bismillah</em> and eating with the right hand.</li>
                  <li>Sharing platters generously among companions and neighbors.</li>
                  <li>Eating until one-third full, leaving room for water and air.</li>
                  <li>Total prohibition of wasting food or discarding untouched sustenance.</li>
                </ul>
              </div>
            </div>

            {/* Column 3: Food + Budget Travel */}
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-gray-200 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-[#D97706]/10 text-[#D97706] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#071B49]">Food + Budget Travel</h3>
                  <span className="text-[11px] text-gray-500 font-semibold">Feasting Lavishly on a Shoestring</span>
                </div>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Smart food travelers eat like locals, not tourists. Tourist plazas near major monuments frequently charge triple the price for inferior microwave reheating. By walking just 300 meters away from tourist hubs, you discover vibrant neighborhood dining.
              </p>
              <div className="bg-white rounded-xl p-3.5 border border-gray-200 text-xs space-y-2">
                <div className="font-bold text-[#071B49]">Proven Money-Saving Tactics:</div>
                <ul className="space-y-1 text-gray-600 text-[11px] list-disc list-inside">
                  <li>Eat your largest meal during lunchtime when executive specials are active.</li>
                  <li>Explore local municipal fresh fruit markets and bakery bakeries for breakfasts.</li>
                  <li>Choose student-dense university districts for generous, low-cost portions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. Travel Tips for Food Lovers */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Essential Culinary Advice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Travel Tips for Food Lovers
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Arm yourself with practical culinary travel strategies to explore any country with complete dietary confidence and culinary joy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="text-base font-bold text-[#071B49]">How to Find Halal Food Abroad</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              When visiting non-Muslim countries, locate the nearest central mosque or Islamic cultural center. Surrounding streets almost invariably host authentic halal butchers, bakeries, and immigrant-owned restaurants serving delicious home-style cuisine.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF9EE] text-[#D97706] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="text-base font-bold text-[#071B49]">How to Avoid Tourist Traps</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Avoid restaurants that employ aggressive sidewalk barkers trying to usher you inside, or venues that feature giant laminated menus translated into six languages with faded photographic prints. True gems rarely need to plead for patrons.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#21B96F] flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="text-base font-bold text-[#071B49]">How to Check Hidden Ingredients</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Learn international E-numbers and deceptive additives. Watch out for pork-derived gelatin in mousses, pastries, and candies; animal rennet in aged European cheeses; lard (shortening) in pie crusts; and wine or mirin in cooked glazes and reductions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="text-base font-bold text-[#071B49]">Communicate Dietary Needs</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Save translated dietary phrases on your smartphone or carry a small printed card in the local language explaining: "I cannot consume pork, lard, or alcohol in cooking. Seafood or vegetarian is welcome." Clear communication prevents accidental slip-ups.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center font-bold text-xs">
              05
            </div>
            <h3 className="text-base font-bold text-[#071B49]">Choose Safe Street Food</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Apply the golden rule: "Boil it, cook it, peel it, or forget it." Verify that vendors handle money with tongs or gloves rather than the same bare hands handling your food. Drink bottled mineral water with unbroken safety seals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold text-xs">
              06
            </div>
            <h3 className="text-base font-bold text-[#071B49]">Plan Food + Travel Together</h3>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              Build your daily itinerary around meal spots rather than scrambling when hungry. Visit morning wholesale markets when produce arrives fresh, take evening walking food tours with local guides, and reserve memorable dinners in advance.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. Internal Link Suggestions */}
      {/* ============================================================ */}
      <section className="bg-[#FFFFFF] border-y border-[#E7EEF7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] font-syncopate">
              Continue Planning with Travel DuurDesh
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6B82]">
              Explore our connected flight searches, hotel finders, pilgrimage blueprints, and smart travel calculators.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <button
              onClick={() => onNavigate?.('flights')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [See Flights Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Global Airfare Deals
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('hotels')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [See Hotels Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Haram & City Lodging
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('umrah')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [Visit Umrah Guide]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Rites & Packing Lists
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('tools')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [Use Travel Tools]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Currency & Jetlag Tools
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('destinations')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm col-span-2 sm:col-span-1"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [Explore Destinations Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                8 Iconic Global Cities
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. Call-to-Action */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-r from-[#071B49] via-[#0A2464] to-[#0E2E7D] text-white py-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFB800]/20 text-[#FFB800] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#FFB800]/30">
            <Utensils className="w-3.5 h-3.5" />
            <span>Taste the World with Confidence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
            Discover Halal Food & Travel Experiences with Travel DuurDesh
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-normal">
            Explore Global Cuisine, Street Food, and Pilgrim-Friendly Meals
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.('umrah')}
              className="bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              [Explore Umrah Food & Rites Guide]
            </button>
            <button
              onClick={() => onNavigate?.('destinations')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl border border-white/20 transition-colors cursor-pointer"
            >
              [Explore Food Destinations]
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
