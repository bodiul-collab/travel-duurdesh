import React from 'react';
import {
  Globe,
  Compass,
  Utensils,
  ArrowRightLeft,
  ShieldCheck,
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      id: 'reason-1',
      title: 'Global Travel Coverage',
      description: 'Comprehensive itineraries and authentic local advice spanning premier destinations in the Middle East, Asia, Europe, and the Americas.',
      icon: Globe,
      color: '#0969E8'
    },
    {
      id: 'reason-2',
      title: 'Specialized Umrah Guidance',
      description: 'Respectful, step-by-step guidance on Ihram, Tawaf, Sa’i, and hotel bookings steps away from Masjid al-Haram and Masjid al-Nabawi.',
      icon: Compass,
      color: '#21B96F'
    },
    {
      id: 'reason-3',
      title: 'Halal Food Recommendations',
      description: 'Carefully vetted halal food directories, legendary street food spots, and high-energy nutrition recommendations for travelers and pilgrims.',
      icon: Utensils,
      color: '#FF8A2A'
    },
    {
      id: 'reason-4',
      title: 'Flight & Hotel Comparison',
      description: 'Compare international flight routes, direct pilgrim connections to Jeddah & Madinah, and verified worldwide hotel rates.',
      icon: ArrowRightLeft,
      color: '#071B49'
    },
    {
      id: 'reason-5',
      title: 'Trusted Travel Resources',
      description: 'Free, transparent travel utilities including our live currency converter, realistic budget estimator, and visa requirement summaries.',
      icon: ShieldCheck,
      color: '#7B61FF'
    },
    {
      id: 'reason-6',
      title: 'Easy-to-Read Guides',
      description: 'Clear, concise, and friendly articles written for everyday travelers and first-time pilgrims without confusing industry jargon.',
      icon: BookOpen,
      color: '#0969E8'
    }
  ];

  return (
    <section id="why-choose" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for the Modern Traveler</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
            Why Choose Travel DuurDesh
          </h2>
          <p className="text-sm sm:text-base text-[#5E6B82] mt-3 leading-relaxed">
            We bridge authentic spiritual pilgrimage guidance with global leisure exploration, making every journey thoughtful, economical, and memorable.
          </p>
        </div>

        {/* 6 Reasons Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#0969E8]/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#071B49] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-xs font-semibold text-[#21B96F]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Travel DuurDesh Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
