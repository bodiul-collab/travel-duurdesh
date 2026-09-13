import React from 'react';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  BookOpen,
  Sparkles,
  Compass,
  MapPin,
  Heart,
  Plane,
  Building2,
  Wrench,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BLOG_CATEGORIES, BLOG_POSTS, BlogPost, BlogCategorySlug } from '../data/blogData';

interface BlogHomePageProps {
  onNavigate: (pageId: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (categorySlug: string) => void;
}

export const BlogHomePage: React.FC<BlogHomePageProps> = ({
  onNavigate,
  selectedCategory = 'all',
  onSelectCategory
}) => {
  const [activeFilter, setActiveFilter] = React.useState<string>(selectedCategory);

  const handleFilterClick = (slug: string) => {
    setActiveFilter(slug);
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
  };

  const filteredPosts = activeFilter === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.categorySlug === activeFilter);

  const featuredPost: BlogPost = BLOG_POSTS[0];

  const handleOpenArticle = (post: BlogPost) => {
    onNavigate(`blog/${post.categorySlug}/${post.slug}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E7EEF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'Travel & Food Blog' }
            ]}
          />
        </div>
      </div>

      {/* 2. Blog Hero Section */}
      <section className="relative bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white py-14 sm:py-20 overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#0969E8]/30 border border-[#4DA3FF]/40 text-[#4DA3FF] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>TravelDuurDesh Editorial Travel & Food Journal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-syncopate leading-tight">
              Travel & Food Guides, Pilgrimages & Smart Insights
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-normal">
              Practical, respectful, and thoroughly researched blueprints for global travelers and pilgrims. Explore comprehensive city guides, authentic halal culinary scenes, step-by-step sacred journeys, and verified travel tips.
            </p>

            {/* Quick cross-links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-white/90">
              <span className="text-white/60 font-medium">Explore Related Hubs:</span>
              <button
                onClick={() => onNavigate('destinations')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#4DA3FF]" />
                <span>Destinations Directory</span>
              </button>
              <button
                onClick={() => onNavigate('umrah')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Umrah Pilgrim Guide</span>
              </button>
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <Wrench className="w-3.5 h-3.5 text-[#21B96F]" />
                <span>Travel Tools</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Navigation Strip */}
      <section className="sticky top-[60px] z-20 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#071B49] text-white shadow-xs'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#071B49]'
              }`}
            >
              All Articles
            </button>

            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = activeFilter === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleFilterClick(cat.slug)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0969E8] text-white shadow-xs'
                      : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#071B49]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        {/* Featured Article Section */}
        {featuredPost && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0969E8]" />
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#071B49] font-syncopate">
                  Primary Featured Guide
                </h2>
              </div>
              <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
                Verified Editorial Publication
              </span>
            </div>

            <div className="bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Area */}
                <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-slate-900 group">
                  <img
                    src={featuredPost.heroImage.url}
                    alt={featuredPost.heroImage.alt}
                    loading="eager"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#0969E8] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      {featuredPost.categoryName}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-[#0969E8] bg-[#EAF2FB] px-3 py-1 rounded-md">
                      <Tag className="w-3 h-3" />
                      <span>{featuredPost.categoryName}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight leading-snug font-syncopate hover:text-[#0969E8] transition-colors cursor-pointer"
                        onClick={() => handleOpenArticle(featuredPost)}>
                      {featuredPost.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-4">
                      {featuredPost.summary}
                    </p>

                    {/* Metadata strip */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B] pt-2 border-t border-[#F1F5F9]">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0969E8]" />
                        <span className="font-semibold text-[#071B49]">{featuredPost.author.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>{featuredPost.readingTime}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>Updated Sep 2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Read Guide CTA */}
                  <div className="pt-4">
                    <button
                      id="btn-read-featured-article"
                      onClick={() => handleOpenArticle(featuredPost)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles Feed */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] font-syncopate">
                Latest Publications
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                Curated articles written and verified by our editorial travel team.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0969E8] bg-[#EAF2FB] px-3 py-1 rounded-full w-fit">
              Showing {filteredPosts.length} Guide{filteredPosts.length === 1 ? '' : 's'}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-[#CBD5E1] p-12 text-center space-y-3">
              <BookOpen className="w-8 h-8 text-[#94A3B8] mx-auto" />
              <h3 className="text-base font-bold text-[#071B49]">No guides in this category yet</h3>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
                Our editorial team is currently writing comprehensive guides for this section. Check back soon or browse our full travel library.
              </p>
              <button
                onClick={() => handleFilterClick('all')}
                className="mt-2 text-xs font-bold text-[#0969E8] hover:underline cursor-pointer"
              >
                View all articles &rarr;
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Card Image */}
                  <div
                    className="relative h-48 sm:h-52 overflow-hidden bg-slate-900 cursor-pointer"
                    onClick={() => handleOpenArticle(post)}
                  >
                    <img
                      src={post.heroImage.url}
                      alt={post.heroImage.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#071B49]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        {post.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span>{post.author.name}</span>
                      </div>

                      <h3
                        className="text-lg font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2 leading-snug cursor-pointer font-syncopate"
                        onClick={() => handleOpenArticle(post)}
                      >
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#64748B] line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                      <button
                        onClick={() => handleOpenArticle(post)}
                        className="text-xs font-bold text-[#0969E8] hover:text-[#0759c5] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                      <span className="text-[11px] text-[#94A3B8]">Updated Sep 2026</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Integrated Navigation Hub Cards */}
        <section className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] font-syncopate">
              Connect Your Journey Across Travel DuurDesh
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Seamlessly explore dedicated flight search engines, hotel rates near holy sites, pilgrimage itineraries, and live travel utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onNavigate('destinations')}
              className="p-5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center mb-3 group-hover:bg-[#0969E8] group-hover:text-white transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors">
                Destinations Guide
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Explore in-depth guides for Makkah, Madinah, Istanbul, Dubai, Dhaka & more.
              </p>
            </button>

            <button
              onClick={() => onNavigate('umrah')}
              className="p-5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFB800]/15 text-[#B45309] flex items-center justify-center mb-3 group-hover:bg-[#FFB800] group-hover:text-white transition-colors">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors">
                Umrah Pilgrim Hub
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Step-by-step Ihram, Tawaf, Sa'i rituals, Nusuk permits & transit blueprints.
              </p>
            </button>

            <button
              onClick={() => onNavigate('hotels')}
              className="p-5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#21B96F]/10 text-[#15803D] flex items-center justify-center mb-3 group-hover:bg-[#21B96F] group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors">
                Haram & World Hotels
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Compare verified hotels steps from Masjid al-Haram and Prophet's Mosque.
              </p>
            </button>

            <button
              onClick={() => onNavigate('tools')}
              className="p-5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#6D28D9] flex items-center justify-center mb-3 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors">
                Free Travel Tools
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                Currency converter, packing checklist, weather forecast, eSIM & flight claims.
              </p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
