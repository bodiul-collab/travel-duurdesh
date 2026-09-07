import React from 'react';
import {
  Plane,
  Building2,
  Compass,
  Utensils,
  Calculator,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { TravelCategory } from '../types';

interface TravelCategoriesProps {
  categories: TravelCategory[];
  onSelectCategory: (category: TravelCategory) => void;
}

export const TravelCategories: React.FC<TravelCategoriesProps> = ({
  categories,
  onSelectCategory
}) => {
  const getCategoryIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#0969E8]' };
    switch (iconName) {
      case 'Plane':
        return <Plane {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Utensils':
        return <Utensils {...props} />;
      case 'Calculator':
        return <Calculator {...props} />;
      case 'Globe':
      default:
        return <Globe {...props} />;
    }
  };

  return (
    <section id="categories" className="py-14 sm:py-18 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Travel Services & Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
            Featured Categories
          </h2>
          <p className="text-sm sm:text-base text-[#5E6B82] mt-3 leading-relaxed">
            From affordable global flights and premier Haram-adjacent hotels to comprehensive step-by-step Umrah pilgrim support, verified halal cuisine trails, and essential travel tools.
          </p>
        </div>

        {/* Categories Grid (6 Featured Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {categories.map((category) => (
            <article
              key={category.id}
              id={`featured-category-${category.id}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image banner with icon badge */}
              <div className="relative h-44 w-full overflow-hidden bg-[#071B49]">
                <img
                  src={category.image}
                  alt={category.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B49] via-[#071B49]/40 to-transparent" />

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-sm border border-white/60">
                  {getCategoryIcon(category.iconName)}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#93C5FD] font-medium line-clamp-1 mt-0.5">
                    {category.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {category.description}
                  </p>

                  {/* Bullet highlights */}
                  {category.features && category.features.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#21B96F] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Clean Learn More button (internal link placeholder) */}
                <div className="pt-3 border-t border-[#F1F5F9]">
                  <button
                    onClick={() => onSelectCategory(category)}
                    className="w-full inline-flex items-center justify-between bg-[#F8FAFC] hover:bg-[#EAF2FB] group-hover:border-[#0969E8]/30 border border-[#E2E8F0] px-4 py-2.5 rounded-xl text-xs font-bold text-[#071B49] hover:text-[#0969E8] transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0969E8] group-hover:translate-x-0.5 transition-transform" />
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
