import React, { useState } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-white border-t border-b border-[#EAF2FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Real Traveler Feedback</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
              What Travelers Are Saying
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] mt-1">
              Read how our community discovers unbeatable vacation value through Travel Duurdesh partner deals.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] text-[#5E6B82] hover:text-[#0969E8] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8] text-[#5E6B82] hover:text-[#0969E8] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((test, index) => (
            <div
              key={test.id}
              className={`bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-[#E7EEF7] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative ${
                index === currentIndex ? 'ring-2 ring-[#0969E8]/30 bg-white' : ''
              }`}
            >
              <div className="space-y-3">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <Quote className="w-6 h-6 text-[#0969E8]/30" />
                  <div className="flex text-[#FFB800]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#101C36] leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              {/* Author & Destination Meta */}
              <div className="pt-4 mt-4 border-t border-gray-200/70 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-bold text-[#071B49] truncate">
                    {test.author}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#5E6B82] truncate">
                    <MapPin className="w-3 h-3 text-[#0969E8] shrink-0" />
                    <span className="truncate">{test.trip}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
