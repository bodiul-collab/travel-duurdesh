import React from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Tag
} from 'lucide-react';
import { TravelArticle } from '../types';

interface TravelInspirationProps {
  articles: TravelArticle[];
  onArticleClick: (article: TravelArticle) => void;
}

export const TravelInspiration: React.FC<TravelInspirationProps> = ({
  articles,
  onArticleClick
}) => {
  return (
    <section id="inspiration" className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Editorial Guides & Tips</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
              Travel Inspiration & Guides
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] mt-1">
              Practical planning strategies, destination breakdowns, and smart ways to unlock deeper travel value.
            </p>
          </div>

          <div className="hidden sm:block">
            <span className="text-xs font-semibold text-[#5E6B82]">
              Written by experienced global travel writers
            </span>
          </div>
        </div>

        {/* Articles Grid (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => onArticleClick(article)}
              className="group bg-white rounded-2xl border border-[#E7EEF7] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#071B49]/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {article.category}
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-4 sm:p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-[#5E6B82]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#0969E8]" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#4DA3FF]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#101C36] leading-snug group-hover:text-[#0969E8] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#5E6B82] leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Author & Read Action */}
              <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    referrerPolicy="no-referrer"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-[#101C36]">
                    {article.author.name}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#0969E8] group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
