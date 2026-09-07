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
  Check
} from 'lucide-react';

interface FoodAndTravelSectionProps {
  onNavigate?: (pageId: string) => void;
}

export const FoodAndTravelSection: React.FC<FoodAndTravelSectionProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'halal' | 'street' | 'pilgrim' | 'global'>('all');

  const foodStories = [
    {
      id: 'food-1',
      type: 'halal',
      title: 'Global Halal Food Guides & City Directories',
      location: 'London, Istanbul & Dubai',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      badge: 'Certified Halal',
      description: 'Discovering gourmet halal steakhouses, Michelin-recommended eateries with certified halal meat, and alcohol-free family dining across major Western and Middle Eastern capitals.',
      tips: ['Look for local Islamic council certification logos', 'Edgware Road & Whitechapel in London offer diverse global halal cuisines', 'Dubai and Istanbul feature 100% halal default menus']
    },
    {
      id: 'food-2',
      type: 'street',
      title: 'Legendary Street Food Recommendations',
      location: 'Dhaka & Kuala Lumpur',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      badge: 'Street Food Trails',
      description: 'From slow-cooked traditional Kacchi Biryani in Old Dhaka to smoky chicken satay with peanut sauce along Jalan Alor in Kuala Lumpur, explore authentic recipes crafted over generations.',
      tips: ['Old Dhaka: Try authentic Nazira Bazaar Kacchi and fresh Borhani', 'KL: Sample Roti Canai and Teh Tarik at morning hawker stalls', 'Always opt for busy street food stalls with high ingredient turnover']
    },
    {
      id: 'food-3',
      type: 'pilgrim',
      title: 'Nourishing Food for Umrah & Hajj Pilgrims',
      location: 'Makkah & Madinah',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      badge: 'Pilgrim Health',
      description: 'Optimizing nutrition for spiritual endurance. Sustaining physical stamina through wholesome Sunnah foods—fresh Ajwa dates, pure Zamzam water, organic honey, and light easily digestible broths.',
      tips: ['Avoid overly spicy or heavy fried foods right before entering Tawaf', 'Keep packets of vacuum-packed dates and nuts in your day bag', 'Continuous sips of lukewarm Zamzam prevent sudden thermal dehydration']
    },
    {
      id: 'food-4',
      type: 'global',
      title: 'Global Cuisine Exploration with Cultural Respect',
      location: 'Worldwide Destinations',
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
      badge: 'Culinary Heritage',
      description: 'Connecting with cultures through their tables. Navigating international menus with ease, identifying seafood and vegetarian specialties in destinations with emerging halal options.',
      tips: ['Learn key dietary phrases in local languages (e.g. halal, no pork, no alcohol)', 'Explore regional vegetarian delicacies in Tokyo and Mediterranean cities', 'Savor Turkish kahve and baklava in Istanbul’s historic bazaars']
    }
  ];

  const filteredStories = activeFilter === 'all'
    ? foodStories
    : foodStories.filter((s) => s.type === activeFilter);

  return (
    <section id="food" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8A2A] uppercase tracking-wider mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>Taste the World with Confidence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
            Food & Travel
          </h2>
          <p className="text-sm sm:text-base text-[#5E6B82] mt-3 leading-relaxed">
            Savor exceptional culinary journeys tailored for conscious travelers. Explore authentic halal dining guides, award-winning street food trails, energy-rich pilgrim nutrition, and global gastronomic wonders.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Culinary Guides' },
            { id: 'halal', label: 'Halal Food Guides' },
            { id: 'street', label: 'Street Food Spots' },
            { id: 'pilgrim', label: 'Food for Pilgrims' },
            { id: 'global', label: 'Global Cuisine' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-[#071B49] text-white shadow-sm'
                  : 'bg-[#F1F5F9] text-[#475569] hover:text-[#071B49] hover:bg-[#E2E8F0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-[#071B49]">
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-[#071B49]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/20">
                    {story.badge}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-xs text-[#93C5FD] font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{story.location}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {story.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {story.description}
                  </p>

                  <div className="bg-white rounded-xl p-4 border border-[#E2E8F0] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#071B49] uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF8A2A]" />
                      <span>Curated Local Advice</span>
                    </div>
                    <ul className="space-y-1.5">
                      {story.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#21B96F] flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Internal Placeholder */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate ? onNavigate('food') : (window.location.hash = '#food')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#0759c5] transition-colors cursor-pointer"
                  >
                    <span>[See Food & Travel Page]</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
