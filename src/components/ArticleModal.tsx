import React from 'react';
import {
  X,
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TravelArticle } from '../types';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: TravelArticle | null;
  onExploreDestinations: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  article,
  onExploreDestinations
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl border border-gray-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md transition-colors"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="bg-[#0969E8] text-white text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight font-syncopate uppercase tracking-tight">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article Meta & Content */}
        <div className="p-6 sm:p-8 space-y-6 text-[#101C36]">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 text-xs text-[#5E6B82]">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <span className="font-bold text-[#101C36] block">{article.author.name}</span>
                <span className="text-[11px] text-gray-500">{article.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0969E8]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#4DA3FF]" />
                {article.readTime}
              </span>
            </div>
          </div>

          {/* Article Summary Box */}
          <div className="bg-[#F3F8FF] p-4 rounded-2xl border border-blue-100 text-sm text-[#071B49] font-medium leading-relaxed italic">
            "{article.summary}"
          </div>

          {/* Article Body */}
          <div className="prose max-w-none text-sm sm:text-base leading-relaxed text-[#5E6B82] space-y-4">
            <p>{article.content}</p>
            <p>
              When planning an itinerary through Travel Duurdesh partner networks, prioritize booking accommodations that provide full cancellation flexibility up to 48 hours before arrival. This ensures you can adapt to unexpected flight schedule changes or take advantage of last-minute price reductions without penalty.
            </p>
            <h3 className="text-lg font-bold text-[#071B49] pt-2">
              Key Recommendations from Our Travel Editorial Board:
            </h3>
            <ul className="space-y-2 text-sm text-[#101C36]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                <span>Compare flight bundle rates vs standalone room bookings.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                <span>Reserve popular local museum and catamaran tours at least 2 weeks in advance during peak summer months.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                <span>Use local currency selection to avoid credit card dynamic conversion surcharges.</span>
              </li>
            </ul>
          </div>

          {/* Tags & Action */}
          <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-[#5E6B82] text-xs font-semibold px-2.5 py-1 rounded-md"
                >
                  #{t}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                onClose();
                onExploreDestinations();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-colors"
            >
              <span>Explore Featured Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
