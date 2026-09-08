import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  Luggage,
  Building2,
  Utensils,
  ShieldCheck,
  Heart,
  ChevronRight,
  Info,
  Calendar,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface UmrahPilgrimsSectionProps {
  onOpenGuideModal?: (topic: string) => void;
  onNavigate?: (pageId: string) => void;
}

export const UmrahPilgrimsSection: React.FC<UmrahPilgrimsSectionProps> = ({
  onOpenGuideModal,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'checklist' | 'hotels' | 'safety'>('overview');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'item-1': true,
    'item-2': true,
    'item-3': false
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const packingChecklist = [
    { id: 'item-1', label: '2 sets of white Ihram towels (men) or loose modest abayas (women)' },
    { id: 'item-2', label: 'Unscented soap, unscented sunscreen, and fragrance-free hygiene kit' },
    { id: 'item-3', label: 'Padded sandals or leather socks for walking on smooth marble courtyards' },
    { id: 'item-4', label: 'Secure waist or neck pouch for passport, Nusuk card, and emergency cash' },
    { id: 'item-5', label: 'Pocket prayer mat and compact digital Tasbeeh counter' },
    { id: 'item-6', label: 'Essential personal medications, rehydration salts, and blister plasters' }
  ];

  const haramHotelPicks = [
    {
      name: 'Makkah Clock Royal Tower Stays',
      distance: 'Direct Haram Access (0 meters)',
      gates: 'Steps to King Abdulaziz Gate #1',
      highlights: 'Direct audio link to Haram prayers, elevators leading directly into the prayer halls, panoramic Kaaba suites.'
    },
    {
      name: 'Jabal Omar Luxury Hotels',
      distance: '100m from Haram Courtyard',
      gates: 'Shuhada & King Fahd Gate Access',
      highlights: 'Spacious family interconnecting rooms, dedicated wheelchair ramp pathways, 24-hour room service with halal buffet.'
    },
    {
      name: 'Madinah Central Northern Hotels',
      distance: 'Adjacent to Al-Masjid an-Nabawi Courtyard',
      gates: 'Ladies Gate #25 & Rawdah Access',
      highlights: '5-minute serene walk to the Prophet’s Mosque, tranquil soundproof rooms, close to historic date markets.'
    }
  ];

  return (
    <section id="umrah" className="py-16 sm:py-20 bg-[#071B49] text-white relative overflow-hidden">
      {/* Subtle Islamic Geometric & Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0969E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#21B96F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#21B96F]/20 text-[#21B96F] border border-[#21B96F]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#21B96F]" />
            <span>Dedicated Sacred Journey Support</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase font-syncopate">
            Umrah Pilgrims Highlight
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] mt-3 leading-relaxed">
            Travel DuurDesh provides compassionate, reliable guidance for every step of your sacred pilgrimage. From understanding Ihram rituals and Nusuk permits to booking hotels steps from the Holy Harams and staying nourished with authentic halal food.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/20'
                : 'bg-white/10 text-white/80 hover:bg-white/15'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>How We Help</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'checklist'
                ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/20'
                : 'bg-white/10 text-white/80 hover:bg-white/15'
            }`}
          >
            <Luggage className="w-4 h-4" />
            <span>Pilgrim Packing List</span>
          </button>

          <button
            onClick={() => setActiveTab('hotels')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'hotels'
                ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/20'
                : 'bg-white/10 text-white/80 hover:bg-white/15'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Hotels Near Harams</span>
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'safety'
                ? 'bg-[#0969E8] text-white shadow-md shadow-blue-500/20'
                : 'bg-white/10 text-white/80 hover:bg-white/15'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Safety & Halal Food</span>
          </button>
        </div>

        {/* Dynamic Tab Panels */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
          {/* Tab 1: How Travel DuurDesh Helps */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0969E8]/20 flex items-center justify-center text-[#4DA3FF] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Step-by-Step Umrah Guides</h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Clear, verified instructions detailing Miqat preparation, wearing the Ihram, Tawaf circling etiquette, Sa'i walk between Safa and Marwah, and proper Tahallul (hair cutting).
                </p>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-[#4DA3FF]">Includes essential Du'a transliterations</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#21B96F]/20 flex items-center justify-center text-[#21B96F] mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Haram Proximity Comparisons</h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Transparent guidance identifying exact walking distances to Masjid al-Haram in Makkah and Al-Masjid an-Nabawi in Madinah, avoiding surprises with steep inclines or remote shuttles.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-[#21B96F]">Special family & elderly suite recommendations</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FF8A2A]/20 flex items-center justify-center text-[#FF8A2A] mb-4">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Nourishment & Pilgrim Care</h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Nutritious, high-energy dining recommendations, advice on safe hydration with Zamzam water, avoiding heat fatigue, and navigating Saudi local SIMs and Nusuk app appointment slots.
                </p>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-[#FF8A2A]">100% verified Halal dining and food courts</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Pilgrim Packing List */}
          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white">Essential Pilgrim Luggage Checklist</h3>
                  <p className="text-xs text-[#CBD5E1] mt-1">
                    Check off items as you pack to ensure peace of mind before boarding your flight.
                  </p>
                </div>
                <span className="text-xs bg-[#0969E8]/30 border border-[#0969E8]/40 px-3 py-1 rounded-full text-[#93C5FD]">
                  {Object.values(checkedItems).filter(Boolean).length} of {packingChecklist.length} Packed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packingChecklist.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#21B96F]/10 border-[#21B96F]/40 text-white'
                          : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border mt-0.5 ${
                        isChecked ? 'bg-[#21B96F] border-[#21B96F] text-white' : 'border-white/30'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'line-through text-white/60' : ''}`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#0969E8]/15 border border-[#0969E8]/30 rounded-xl p-4 flex items-start gap-3 text-xs text-[#CBD5E1]">
                <Info className="w-5 h-5 text-[#4DA3FF] flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Pro-Tip for Umrah Travelers:</strong> Always keep one complete set of Ihram, prescription medicine, and basic toiletries in your carry-on luggage in case checked baggage experiences airline handling delays.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Hotels Near Harams */}
          {activeTab === 'hotels' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white">Recommended Stays Near Masjid al-Haram & Masjid al-Nabawi</h3>
                <p className="text-xs text-[#CBD5E1] mt-1">
                  Selected for walking proximity, prayer audio link, and seamless access for elderly pilgrims and families.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {haramHotelPicks.map((hotel, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="inline-block text-[11px] font-bold text-[#21B96F] bg-[#21B96F]/20 px-2.5 py-0.5 rounded-md mb-2">
                        {hotel.distance}
                      </div>
                      <h4 className="text-sm font-bold text-white">{hotel.name}</h4>
                      <p className="text-[11px] text-[#4DA3FF] font-medium mt-0.5">{hotel.gates}</p>
                      <p className="text-xs text-[#CBD5E1] mt-2 leading-relaxed">{hotel.highlights}</p>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <span className="text-[11px] font-semibold text-white/70">
                        Internal Placeholder: [See Hotels Page]
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Safety & Halal Food */}
          {activeTab === 'safety' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#21B96F]">
                  <Utensils className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">Halal Food & Pilgrim Dining</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  All food served throughout the Kingdom of Saudi Arabia is 100% Halal certified. In both Makkah and Madinah, pilgrims have access to clean, modern food courts inside hotel towers (such as Abraj Al-Bait / Clock Tower and Jabal Omar) as well as traditional Yemeni, Pakistani, Turkish, and Arab dining along Ibrahim Al Khalil street.
                </p>
                <ul className="space-y-2 text-xs text-[#CBD5E1]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                    <span>Plentiful Zamzam water stations available throughout all mosque levels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#21B96F]" />
                    <span>Wholesome dates and fresh fruits available in abundance near the Prophet’s Mosque</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#4DA3FF]">
                  <ShieldCheck className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">Heat Health & Travel Safety Tips</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Performing Tawaf and Sa'i can involve 5 to 7 kilometers of continuous walking. Protect your physical well-being by planning rituals during cooler evening hours or after Fajr prayer, drinking continuous electrolytes, and keeping your group rendezvous points clearly agreed.
                </p>
                <ul className="space-y-2 text-xs text-[#CBD5E1]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4DA3FF]" />
                    <span>Download and verify the official Nusuk App for Rawdah booking slots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4DA3FF]" />
                    <span>Carry a printed hotel business card in Arabic for easy taxi returns</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Section Action Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center">
          <button
            onClick={() => onNavigate ? onNavigate('umrah') : window.location.hash = '#umrah'}
            className="inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>Explore Complete Umrah Guide</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate ? onNavigate('hotels') : window.location.hash = '#hotels'}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl border border-white/20 transition-colors cursor-pointer"
          >
            <span>Browse Makkah & Madinah Hotels</span>
          </button>
        </div>
      </div>
    </section>
  );
};
