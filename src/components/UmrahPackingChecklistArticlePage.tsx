import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Compass,
  Heart,
  Plane,
  Building2,
  ArrowRight,
  Info,
  ShieldCheck,
  Luggage,
  ChevronRight,
  AlertTriangle,
  FileCheck,
  Smartphone,
  CreditCard,
  Footprints,
  BookOpen,
  Printer,
  RotateCcw,
  Sparkles,
  CheckSquare,
  Square,
  ShoppingBag,
  Layers,
  Sun,
  Shield,
  HelpCircle as QuestionIcon
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, UMRAH_PACKING_ARTICLE } from '../data/blogData';

interface UmrahPackingChecklistArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

interface ChecklistItem {
  id: string;
  category: string;
  label: string;
  tier: 'essential' | 'useful' | 'optional';
  note?: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // Travel Documents
  { id: 'doc-1', category: 'Travel Documents', label: 'Valid passport (verify required validity with official authorities)', tier: 'essential', note: 'Ensure at least 6 months validity from date of travel' },
  { id: 'doc-2', category: 'Travel Documents', label: 'Umrah visa / valid Saudi tourist eVisa or transit authorization', tier: 'essential', note: 'Verify current eligibility via official Saudi platforms' },
  { id: 'doc-3', category: 'Travel Documents', label: 'Confirmed flight tickets and boarding passes (printed & digital)', tier: 'essential' },
  { id: 'doc-4', category: 'Travel Documents', label: 'Hotel / accommodation booking vouchers with full address', tier: 'essential', note: 'Keep hotel contact number and street address handy' },
  { id: 'doc-5', category: 'Travel Documents', label: 'Travel insurance certificate & emergency medical assistance details', tier: 'essential' },
  { id: 'doc-6', category: 'Travel Documents', label: 'Emergency contact sheet (consulate, family, group lead numbers)', tier: 'essential' },
  { id: 'doc-7', category: 'Travel Documents', label: 'Physical photocopies & offline digital backups of all key documents', tier: 'essential' },

  // Clothing
  { id: 'clo-1', category: 'Clothing', label: 'Comfortable everyday modest clothing in breathable, lightweight fabrics', tier: 'essential', note: 'Cotton, linen blends, or loose-fitting breathable weaves' },
  { id: 'clo-2', category: 'Clothing', label: 'Comfortable undergarments (breathable, moisture-wicking materials)', tier: 'essential' },
  { id: 'clo-3', category: 'Clothing', label: 'Sleepwear and relaxing loungewear for hotel recovery', tier: 'useful' },
  { id: 'clo-4', category: 'Clothing', label: 'Lightweight layer (light jacket, cardigan, or shawl)', tier: 'useful', note: 'Crucial for heavily air-conditioned terminals, buses, and early mornings' },
  { id: 'clo-5', category: 'Clothing', label: 'Weather-appropriate garments (check seasonal summer vs winter forecasts)', tier: 'useful' },
  { id: 'clo-6', category: 'Clothing', label: 'Loose-fitting walking clothes suitable for sitting on prayer rugs', tier: 'essential' },

  // Ihram-Related Items
  { id: 'ihr-1', category: 'Ihram-Related Items', label: 'Ihram garments for men (2 sets recommended for convenience)', tier: 'essential', note: 'Two white unstitched sheets per set; spare set protects against spills' },
  { id: 'ihr-2', category: 'Ihram-Related Items', label: 'Ihram belt, money pouch, or heavy-duty safety pins (for men)', tier: 'useful', note: 'Keeps the lower izar secure while walking and carrying small items' },
  { id: 'ihr-3', category: 'Ihram-Related Items', label: 'Modest, comfortable travel clothing for women', tier: 'essential', note: 'Loose-fitting abayas or tunics, breathable hijabs, and secure pins' },
  { id: 'ihr-4', category: 'Ihram-Related Items', label: 'Breathable undercaps and spare hijab pins (for women)', tier: 'useful' },
  { id: 'ihr-5', category: 'Ihram-Related Items', label: 'Pre-Ihram and post-Ihram clothing changes', tier: 'essential' },

  // Footwear
  { id: 'foo-1', category: 'Footwear', label: 'Well-cushioned walking shoes or sneakers (already broken-in)', tier: 'essential', note: 'Pilgrims routinely walk 10,000 to 25,000 steps daily' },
  { id: 'foo-2', category: 'Footwear', label: 'Sturdy, comfortable sandals or slip-ons for mosque transit', tier: 'essential', note: 'Easy to remove and put on outside prayer halls' },
  { id: 'foo-3', category: 'Footwear', label: 'Padded or anti-slip socks for marble courtyard floors', tier: 'useful', note: 'Provides comfort on smooth or cool marble interior surfaces' },
  { id: 'foo-4', category: 'Footwear', label: 'Breathable drawstring shoe bag for carrying footwear into Haram', tier: 'useful' },

  // Toiletries
  { id: 'toi-1', category: 'Toiletries', label: 'Travel-size toothbrush and toothpaste', tier: 'essential' },
  { id: 'toi-2', category: 'Toiletries', label: 'Soap and travel shampoo (leak-proof bottles)', tier: 'essential' },
  { id: 'toi-3', category: 'Toiletries', label: 'Deodorant / body hygiene stick', tier: 'essential' },
  { id: 'toi-4', category: 'Toiletries', label: 'Comb or hairbrush', tier: 'useful' },
  { id: 'toi-5', category: 'Toiletries', label: 'Small quick-dry microfibre travel towel', tier: 'optional' },
  { id: 'toi-6', category: 'Toiletries', label: 'Compact hair trimming scissors or disposable razor (for post-rites tahallul)', tier: 'useful', note: 'Must be packed in checked luggage only, never carry-on' },

  // Personal Care Items
  { id: 'car-1', category: 'Personal Care Items', label: 'Unscented moisturizer or lotion (for dry desert climate)', tier: 'useful', note: 'Dry air frequently causes cracked hands, feet, or skin' },
  { id: 'car-2', category: 'Personal Care Items', label: 'Lip balm to prevent chapped lips', tier: 'useful' },
  { id: 'car-3', category: 'Personal Care Items', label: 'Pocket tissue packets (multiple small packs)', tier: 'essential' },
  { id: 'car-4', category: 'Personal Care Items', label: 'Wet wipes / gentle wipes (unscented options available)', tier: 'useful' },
  { id: 'car-5', category: 'Personal Care Items', label: 'Travel hand sanitizer (small bottle under 100ml for flight)', tier: 'essential' },
  { id: 'car-6', category: 'Personal Care Items', label: 'Personal hygiene and feminine care supplies', tier: 'essential' },

  // Medications / Health
  { id: 'med-1', category: 'Medications / Health', label: 'Personal daily prescription medications in original labeled pharmacy containers', tier: 'essential', note: 'Keep sufficient supply for the whole trip plus buffer in carry-on' },
  { id: 'med-2', category: 'Medications / Health', label: 'Copies of doctor prescriptions and medical summary note', tier: 'essential' },
  { id: 'med-3', category: 'Medications / Health', label: 'Oral rehydration salts / electrolyte powder packets', tier: 'useful', note: 'Helps combat dehydration under intense midday heat' },
  { id: 'med-4', category: 'Medications / Health', label: 'Adhesive bandages (blister plasters / blister pads)', tier: 'useful', note: 'Valuable for blisters from long Tawaf and Sa’i walking' },
  { id: 'med-5', category: 'Medications / Health', label: 'Anti-chafing balm or petroleum jelly', tier: 'useful', note: 'Helps prevent skin friction during long walks' },
  { id: 'med-6', category: 'Medications / Health', label: 'Basic OTC pain relief or throat lozenges (consult healthcare provider)', tier: 'useful' },

  // Electronics
  { id: 'ele-1', category: 'Electronics', label: 'Unlocked smartphone with updated maps and travel apps', tier: 'essential' },
  { id: 'ele-2', category: 'Electronics', label: 'Heavy-duty charging cables and dual USB wall brick', tier: 'essential' },
  { id: 'ele-3', category: 'Electronics', label: 'Type G UK-style 3-pin plug adapter (standard in Saudi Arabia)', tier: 'essential', note: 'Saudi Arabia uses 220V/230V 60Hz Type G sockets' },
  { id: 'ele-4', category: 'Electronics', label: 'Portable power bank (check airline carry-on capacity limits)', tier: 'useful', note: 'Essential for long days inside the Haram; carry-on only' },
  { id: 'ele-5', category: 'Electronics', label: 'Earphones or headphones for calls and audio listening', tier: 'useful' },

  // Travel Accessories
  { id: 'acc-1', category: 'Travel Accessories', label: 'Lightweight day bag, drawstring sack, or small cross-body bag', tier: 'useful', note: 'Easy to carry water bottle, shoe pouch, and prayer book' },
  { id: 'acc-2', category: 'Travel Accessories', label: 'Durable luggage tags with clear name, international phone & email', tier: 'essential' },
  { id: 'acc-3', category: 'Travel Accessories', label: 'Packing cubes to organize clothes and separate clean Ihram garments', tier: 'useful' },
  { id: 'acc-4', category: 'Travel Accessories', label: 'Reusable empty water bottle / collapsible cup for Zamzam stations', tier: 'useful' },
  { id: 'acc-5', category: 'Travel Accessories', label: 'Small compact travel umbrella for midday sun protection', tier: 'optional' },
  { id: 'acc-6', category: 'Travel Accessories', label: 'Laundry bag & leak-proof zip-top bags for toiletries', tier: 'useful' },

  // Money & Payment
  { id: 'mon-1', category: 'Money & Payment', label: 'Primary international debit/credit card (notify bank of travel)', tier: 'essential' },
  { id: 'mon-2', category: 'Money & Payment', label: 'Backup payment card stored separately in hotel safe', tier: 'essential' },
  { id: 'mon-3', category: 'Money & Payment', label: 'Modest amount of Saudi Riyals (SAR) in cash for small purchases', tier: 'useful', note: 'For small snacks, tipping, or small local transport' },
  { id: 'mon-4', category: 'Money & Payment', label: 'Secure neck wallet, hidden waist pouch, or zipped pocket', tier: 'useful' },

  // Comfort Items
  { id: 'com-1', category: 'Comfort Items', label: 'Eyeglasses / contact lenses with spare case and cleaning solution', tier: 'essential' },
  { id: 'com-2', category: 'Comfort Items', label: 'Sunglasses with UV protection for intense outdoor glare', tier: 'useful' },
  { id: 'com-3', category: 'Comfort Items', label: 'Travel neck pillow and eye mask for flights and coach transfers', tier: 'optional' },
  { id: 'com-4', category: 'Comfort Items', label: 'Compact pocket prayer mat (lightweight travel weave)', tier: 'optional', note: 'Helpful for prayer outdoors or in airport transit lounges' }
];

export const UmrahPackingChecklistArticlePage: React.FC<UmrahPackingChecklistArticlePageProps> = ({
  post = UMRAH_PACKING_ARTICLE,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const handleToggleItem = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleResetChecklist = () => {
    setCheckedIds({});
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(post.canonicalUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const totalItems = CHECKLIST_ITEMS.length;
  const checkedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100);

  const categories = ['all', ...Array.from(new Set(CHECKLIST_ITEMS.map(item => item.category)))];

  const displayedItems = activeCategoryFilter === 'all'
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter(item => item.category === activeCategoryFilter);

  return (
    <article className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E7EEF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb">
            <Breadcrumbs
              items={[
                { label: 'Home', onClick: () => onNavigate('home') },
                { label: 'Travel & Food', onClick: () => onNavigate('blog') },
                { label: 'Umrah Travel', onClick: () => onNavigate('blog') },
                { label: 'What to Pack for Umrah' }
              ]}
            />
          </nav>
        </div>
      </div>

      {/* 2. Article Header & Meta */}
      <header className="bg-white border-b border-[#E2E8F0] pt-8 pb-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] hover:bg-[#d8e8f8] px-3 py-1 rounded-full transition-colors cursor-pointer"
            >
              <Tag className="w-3 h-3" />
              <span>{post.categoryName}</span>
            </button>
            <span className="text-xs text-[#64748B] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readingTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-[#071B49] tracking-tight leading-tight font-syncopate">
            What to Pack for Umrah: A Practical Packing Checklist
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
            Planning your Umrah trip? Use this practical packing checklist covering documents, clothing, personal items, electronics, travel essentials, and useful preparation tips.
          </p>

          {/* Author & Editorial Metadata */}
          <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#071B49] text-white flex items-center justify-center font-bold text-sm">
                TD
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-[#071B49]">
                  {post.author.name}
                </div>
                <div className="text-[11px] text-[#64748B] flex items-center gap-3 mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Published: September 13, 2026</span>
                  </span>
                  <span>•</span>
                  <span>Updated: September 13, 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#071B49] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Print Packing Checklist"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print List</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#071B49] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Share Article"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied Link!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] bg-white">
          <img
            src={post.heroImage.url}
            alt={post.heroImage.alt}
            referrerPolicy="no-referrer"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            loading="eager"
          />
          {post.heroImage.caption && (
            <p className="p-3 text-xs text-[#64748B] bg-white border-t border-[#F1F5F9] italic text-center">
              {post.heroImage.caption}
            </p>
          )}
        </div>
      </div>

      {/* 4. Main Article Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="space-y-12 text-[#1E293B] leading-relaxed">

          {/* Section: Introduction */}
          <section className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-[#334155]">
              Preparing for Umrah is an uplifting milestone that combines spiritual anticipation with thoughtful logistics. Good preparation can make the journey more organized, peaceful, and comfortable, allowing you to focus your full energy and attention on devotion rather than last-minute disruptions.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Packing needs vary significantly by traveler, season, trip length, airline, accommodation proximity, and individual circumstances. Packing for a week-long stay in close proximity to Masjid al-Haram during the peak of summer requires different considerations than an extended winter journey split between Makkah and Madinah. We encourage travelers to use this checklist as a practical, flexible baseline and adjust it to fit their specific travel plans and current airline requirements.
            </p>

            {/* Three Tiers Legend Box */}
            <div className="p-5 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#071B49] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0969E8]" />
                <span>How This Checklist Is Categorized</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#CBD5E1] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>Essential Travel Items</span>
                  </div>
                  <p className="text-[#64748B] text-[11px] leading-normal">
                    Must-haves without which you cannot travel: passports, required visas, prescribed medications, and payment cards.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#CBD5E1] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>Useful Personal Items</span>
                  </div>
                  <p className="text-[#64748B] text-[11px] leading-normal">
                    Items that significantly enhance comfort, physical stamina, hygiene, and daily convenience during high step-counts.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#CBD5E1] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Optional Convenience</span>
                  </div>
                  <p className="text-[#64748B] text-[11px] leading-normal">
                    Helpful accessories such as compact umbrellas, packing cubes, or portable luggage scales that make transit smoother.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Quick Umrah Packing Checklist (Interactive) */}
          <section className="space-y-6 pt-4">
            <div className="border-b border-[#E2E8F0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
                  Quick Umrah Packing Checklist
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Interactive checklist for mobile & desktop. Tap any item to mark it packed.
                </p>
              </div>

              {/* Reset & Stats Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetChecklist}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#DC2626] bg-white border border-[#E2E8F0] hover:border-red-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  title="Uncheck all items"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Progress Bar Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-[#071B49] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0969E8]" />
                  <span>Packing Progress: {checkedCount} of {totalItems} items checked</span>
                </span>
                <span className="font-bold text-[#0969E8]">{progressPercent}%</span>
              </div>
              <div className="w-full bg-[#E2E8F0] h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#0969E8] h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              {progressPercent === 100 && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2 animate-fadeIn">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Masha'Allah! You have completed all checklist items. Have a safe and blessed journey!</span>
                </div>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin text-xs">
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategoryFilter === cat
                      ? 'bg-[#071B49] text-white'
                      : 'bg-white text-[#64748B] hover:text-[#071B49] border border-[#E2E8F0]'
                  }`}
                >
                  {cat === 'all' ? 'All Items' : cat}
                </button>
              ))}
            </div>

            {/* Checklist Items List */}
            <div className="space-y-2.5">
              {displayedItems.map(item => {
                const isChecked = Boolean(checkedIds[item.id]);
                return (
                  <label
                    key={item.id}
                    htmlFor={`check-${item.id}`}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-[#F8FAFC] border-[#CBD5E1] text-[#64748B]'
                        : 'bg-white border-[#E2E8F0] text-[#0F172A] hover:border-[#0969E8]/40 shadow-xs'
                    }`}
                  >
                    <input
                      id={`check-${item.id}`}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleItem(item.id)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0969E8] focus:ring-[#0969E8] cursor-pointer"
                    />
                    <div className="flex-1 space-y-1 text-xs sm:text-sm">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className={`font-semibold ${isChecked ? 'line-through text-[#64748B]' : 'text-[#071B49]'}`}>
                          {item.label}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                            item.tier === 'essential'
                              ? 'bg-red-50 text-red-700 border border-red-200'
                              : item.tier === 'useful'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {item.tier}
                        </span>
                      </div>
                      {item.note && (
                        <p className={`text-xs ${isChecked ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
                          {item.note}
                        </p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </section>

          {/* Section: Important Travel Documents */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#0969E8]" />
              <span>Important Travel Documents</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Your travel documents form the irreplaceable core of your journey. Without them, boarding your flights or checking into accommodations in Saudi Arabia is impossible.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 text-xs sm:text-sm">
              <ul className="space-y-2.5 list-disc list-inside text-[#334155]">
                <li>
                  <strong className="text-[#071B49]">Passport:</strong> Ensure your passport has adequate validity remaining (many international routes require at least 6 months) and blank pages for entry/exit stamps.
                </li>
                <li>
                  <strong className="text-[#071B49]">Visa / Travel Authorization:</strong> Depending on your nationality, you may travel on an official Umrah visa, a Saudi tourist eVisa, a GCC resident visa, or a transit visa.
                </li>
                <li>
                  <strong className="text-[#071B49]">Flight Confirmations:</strong> Carry physical or offline digital e-ticket receipts displaying complete PNRs, baggage allowances, and departure/return terminal numbers.
                </li>
                <li>
                  <strong className="text-[#071B49]">Hotel Booking Vouchers:</strong> Have booking confirmations ready displaying the property’s Arabic name, local phone number, and street address.
                </li>
                <li>
                  <strong className="text-[#071B49]">Travel Insurance:</strong> Carry your policy schedule with 24/7 overseas medical assistance phone numbers.
                </li>
                <li>
                  <strong className="text-[#071B49]">Emergency Contacts:</strong> Keep a written sheet containing phone numbers of family, your embassy/consulate in Jeddah or Riyadh, and your tour coordinator.
                </li>
                <li>
                  <strong className="text-[#071B49]">Backup Copies:</strong> Store paper photocopies of your passport and visa in your checked luggage, plus secure password-protected digital copies saved offline on your phone.
                </li>
              </ul>
            </div>

            {/* Official Source Disclaimer Banner */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Verify Current Official Entry Rules:</strong> Entry protocols and visa categories can change. Always verify current visa requirements directly through official Saudi government portals (such as the Ministry of Hajj and Umrah, Nusuk, and the Saudi Tourism Authority) and confirm boarding rules with your airline prior to departure.
              </div>
            </div>
          </section>

          {/* Section: Clothing to Pack */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Luggage className="w-5 h-5 text-[#0969E8]" />
              <span>Clothing to Pack</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              When selecting clothing for Umrah, the guiding priorities should be modesty, breathability, and physical comfort. The holy sanctuaries of Makkah and Madinah involve substantial walking outdoors and prolonged periods of sitting indoors on soft carpeted flooring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Comfortable Everyday Wear</h3>
                <p className="text-[#475569] leading-relaxed">
                  Choose loose-fitting garments in natural, breathable fabrics such as lightweight cotton or linen blends. Avoid synthetic materials that trap heat or cause friction during long walks between your hotel and the mosque courtyards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Undergarments & Sleepwear</h3>
                <p className="text-[#475569] leading-relaxed">
                  Pack adequate, breathable undergarments and soft sleepwear for hotel room rest. Having comfortable loungewear ensures restorative sleep after physically demanding days.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Lightweight Layers</h3>
                <p className="text-[#475569] leading-relaxed">
                  Airport terminals, high-speed Haramain train carriages, and air-conditioned hotel lobbies can feel surprisingly chilly. A light cardigan, windbreaker, or shawl is invaluable, particularly for pre-dawn Tahajjud prayers or desert winter evenings in Madinah.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Weather-Appropriate Choices</h3>
                <p className="text-[#475569] leading-relaxed">
                  Summer in the Hijaz region frequently sees temperatures exceeding 40°C (104°F), calling for light-colored, airy fabrics. Winter months (November to February) bring milder daytime temperatures and crisp evenings.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] italic">
              Note: Clothing recommendations here focus purely on practical travel comfort and local climate adaptation, not as formal religious rulings.
            </p>
          </section>

          {/* Section: Ihram and Related Items */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0969E8]" />
              <span>Ihram and Related Items</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Packing needs for entering the sacred state of Ihram differ between men and women and can vary based on individual circumstances, flight routing, and personal preparation.
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* For Men */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
                <h3 className="text-sm font-bold text-[#071B49]">Practical Considerations for Men</h3>
                <ul className="space-y-2 list-disc list-inside text-[#475569]">
                  <li>
                    <strong className="text-[#071B49]">Ihram Garments:</strong> Typically consists of two white, unstitched sheets (towels or cotton fabrics). Bringing two sets is highly recommended; having a spare set protects you if one becomes soiled or wet.
                  </li>
                  <li>
                    <strong className="text-[#071B49]">Ihram Belt or Pouch:</strong> An adjustable waist belt or secure pouch keeps the lower garment firmly in place and holds essentials such as room keys, phone, and money.
                  </li>
                  <li>
                    <strong className="text-[#071B49]">Pre- and Post-Ihram Clothing:</strong> Pack standard comfortable modest clothing (such as thobes or pants and shirts) to wear before entering Ihram and after completing your rites.
                  </li>
                  <li>
                    <strong className="text-[#071B49]">Footwear in Ihram:</strong> Prepare comfortable sandals or flip-flops suitable for walking, keeping in mind the guidance you follow regarding footwear while in the state of Ihram.
                  </li>
                </ul>
              </div>

              {/* For Women */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
                <h3 className="text-sm font-bold text-[#071B49]">Practical Considerations for Women</h3>
                <p className="text-[#475569] leading-relaxed">
                  Women are not required to wear a specific uniform or color; rather, women prepare modest, comfortable clothing appropriate for their religious practice, personal preference, local customs, and the guidance they follow.
                </p>
                <ul className="space-y-2 list-disc list-inside text-[#475569]">
                  <li>
                    <strong className="text-[#071B49]">Modest Everyday Attire:</strong> Loose-fitting, breathable abayas, jilbabs, or modest tunics with trousers made of opaque, lightweight fabrics that allow ease of movement.
                  </li>
                  <li>
                    <strong className="text-[#071B49]">Hijabs & Undercaps:</strong> Breathable cotton or jersey scarves with snug undercaps that stay securely in place during active walking and prostration without constant adjustment.
                  </li>
                  <li>
                    <strong className="text-[#071B49]">Socks:</strong> Padded or cotton socks to keep feet comfortable on the expansive, smooth marble surfaces inside the mosques.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#475569] text-xs">
                <strong>Important Guidance Note:</strong> Religious rulings and interpretations regarding specific details of Ihram garments differ among schools of thought and individual scholars. Do not interpret these packing suggestions as religious edicts. Consult trusted religious scholars or guides you rely on for specific religious rules, and remember that no particular branded commercial product is religiously required.
              </div>
            </div>
          </section>

          {/* Section: Footwear */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Footprints className="w-5 h-5 text-[#0969E8]" />
              <span>Footwear: Prioritizing Comfort Over Fashion</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Between navigating international airports, walking from hotels to the mosques, and performing the sacred rites of Tawaf and Sa’i, pilgrims frequently log between 10,000 and 25,000 steps per day. Your footwear choices will have an immediate impact on your daily energy and physical comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49]">Cushioned Walking Shoes</h3>
                <p className="text-[#475569] leading-relaxed">
                  Bring well-cushioned running or walking sneakers for airport transfers, road transit, and city walking. Never bring brand-new, unbroken shoes on Umrah; break them in thoroughly several weeks prior to departure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49]">Slip-On Sandals & Slippers</h3>
                <p className="text-[#475569] leading-relaxed">
                  Footwear must be removed before entering the carpeted mosque halls. Sturdy sandals or slip-on slides with good arch support make entering and exiting the mosque quick, easy, and painless.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49]">Manageable Shoe Bag</h3>
                <p className="text-[#475569] leading-relaxed">
                  Keep a lightweight, washable drawstring shoe bag in your daypack so you can carry your shoes with you into the mosque rather than leaving them in public exterior racks where they can be misplaced during peak exit crowds.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Toiletries and Personal Care */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#0969E8]" />
              <span>Toiletries and Personal Care</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Pack travel-sized toiletries in leak-proof containers. Focus on essentials for basic hygiene and skin health in an arid, air-conditioned environment:
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] text-xs sm:text-sm space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#334155]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Toothbrush, travel toothpaste & dental floss</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Travel-sized shampoo & body wash</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Deodorant or antiperspirant stick</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Hairbrush or pocket comb</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Unscented moisturizer & protective lip balm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Multiple pocket packs of tissues & gentle wipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Small travel hand sanitizer (under 100ml)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Small quick-dry microfibre travel towel</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Personal nail clippers & disposable razor (checked bag only)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0969E8]"></span>
                  <span>Personal hygiene and feminine care items</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-[#1E3A8A] text-xs leading-relaxed">
              <strong>Ritual State & Fragrance Considerations:</strong> Many pilgrims deliberately choose fragrance-free and unscented soaps, lotions, and deodorants when in the state of Ihram. We do not offer religious rulings on whether specific ingredients or scents are permitted or impermissible. We advise readers to follow the specific scholarly guidance they personally rely upon.
            </div>
          </section>

          {/* Section: Medication and Personal Health Supplies */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0969E8]" />
              <span>Medication and Personal Health Supplies</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Maintaining good health allows you to perform your rites with vitality. While modern pharmacies (such as Al-Dawaa and Nahdi) are plentiful right outside the Haramain sanctuaries, having your personal health supplies organized in advance prevents urgent searches in unfamiliar surroundings.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 text-xs sm:text-sm">
              <h3 className="font-bold text-[#071B49] text-sm">Recommended Health Kit Essentials</h3>
              <ul className="space-y-2 list-disc list-inside text-[#334155]">
                <li>
                  <strong className="text-[#071B49]">Daily Prescriptions:</strong> Pack all regular personal medications in their original, clearly labeled pharmacy bottles with your name and dosage. Always pack extra days of medication in your carry-on luggage.
                </li>
                <li>
                  <strong className="text-[#071B49]">Doctor's Letter & Copies:</strong> Keep copies of your official prescriptions and a brief doctor's note, especially for injectables or specialized medications.
                </li>
                <li>
                  <strong className="text-[#071B49]">Electrolytes & Rehydration Salts:</strong> Hydration is critical under warm sun and prolonged activity. Electrolyte powder packets help restore mineral balance quickly.
                </li>
                <li>
                  <strong className="text-[#071B49]">Blister Plasters & Bandages:</strong> Friction blisters on toes and heels are among the most frequent minor discomforts for pilgrims.
                </li>
                <li>
                  <strong className="text-[#071B49]">Anti-Chafing Balms:</strong> Skin irritation and thigh chafing during prolonged walking can be mitigated with soothing balms or petroleum jelly.
                </li>
                <li>
                  <strong className="text-[#071B49]">General First-Aid:</strong> Basic pain relief, antacid tablets, or throat lozenges as recommended by your physician.
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Medical & Regulatory Disclaimer:</strong> This guide does not provide medical diagnoses, treatment advice, or drug recommendations. Always consult your qualified personal healthcare professional prior to international travel. In addition, check official regulations regarding restricted or controlled medications with the Saudi Food and Drug Authority (SFDA) and your transit airlines.
              </div>
            </div>
          </section>

          {/* Section: Electronics */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[#0969E8]" />
              <span>Electronics & Connectivity</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Modern pilgrimage relies on digital tools for official permits (such as Nusuk appointments for the Rawdah in Madinah), maps, hotel transit, and keeping in touch with family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Unlocked Smartphone</h3>
                <p className="text-[#475569] leading-relaxed">
                  Ensure your phone is carrier-unlocked so you can install a local Saudi eSIM before departure or purchase a physical tourist SIM (STC, Mobily, or Zain) upon landing at King Abdulaziz International Airport in Jeddah or Prince Mohammad bin Abdulaziz Airport in Madinah.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Power Adapter (Type G)</h3>
                <p className="text-[#475569] leading-relaxed">
                  Saudi Arabia primarily uses the British standard Type G 3-pin wall socket at 220V/230V and 60Hz. Pack a sturdy universal adapter with built-in USB ports so you can charge multiple devices from a single outlet.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Portable Power Bank</h3>
                <p className="text-[#475569] leading-relaxed">
                  A high-capacity portable power bank (10,000 to 20,000 mAh) is indispensable when spending 6 to 12 hours consecutively inside the Grand Mosque.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">Earphones & Backup Cables</h3>
                <p className="text-[#475569] leading-relaxed">
                  Pack durable charging cables and compact earphones for listening to Quranic recitations, lectures, or communicating without disturbing fellow worshipers.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#475569] text-xs">
              <strong>Airline Battery Regulations:</strong> Battery policies vary by carrier and international civil aviation standards. Power banks and spare lithium-ion batteries must virtually always be carried in your carry-on luggage, never in checked baggage. Verify your airline’s current Watt-hour limits (commonly 100Wh to 160Wh) prior to packing.
            </div>
          </section>

          {/* Section: Money and Payment Essentials */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#0969E8]" />
              <span>Money and Payment Essentials</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Saudi Arabia has an exceptionally advanced digital payment infrastructure. Contactless payment (credit/debit cards, Apple Pay, and mada) is standard across supermarkets, retail stores, train stations, and restaurants.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-3 text-xs sm:text-sm">
              <ul className="space-y-2.5 list-disc list-inside text-[#334155]">
                <li>
                  <strong className="text-[#071B49]">Payment Cards:</strong> Bring at least two international payment cards (Visa or Mastercard) that do not incur heavy foreign transaction fees. Inform your financial institution of your travel dates to prevent security freezes.
                </li>
                <li>
                  <strong className="text-[#071B49]">Local Currency (SAR):</strong> While cards are widely accepted, carrying a modest reserve of Saudi Riyals (SAR) in small denominations (5, 10, 50 notes) is useful for tips, small souvenir stalls, and occasional roadside transport.
                </li>
                <li>
                  <strong className="text-[#071B49]">Emergency Backup Method:</strong> Keep a backup card stored securely in your hotel room safe separate from your daily wallet.
                </li>
                <li>
                  <strong className="text-[#071B49]">Secure Carrying:</strong> Use a flat, zipped waist bag worn under clothing or a secure neck pouch, particularly in dense crowds around the Haram courtyards.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Useful Travel Accessories */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#0969E8]" />
              <span>Useful Travel Accessories</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              A handful of well-chosen travel accessories can keep your daily routine efficient and stress-free:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0969E8] mt-1.5 shrink-0"></span>
                <div>
                  <strong className="text-[#071B49]">Compact Daypack / Drawstring Bag:</strong> Foldable, lightweight bag to hold your water bottle, shoe bag, and prayer essentials.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0969E8] mt-1.5 shrink-0"></span>
                <div>
                  <strong className="text-[#071B49]">Compression Packing Cubes:</strong> Keep clean Ihram towels, daywear, and laundry neatly separated inside your suitcase.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0969E8] mt-1.5 shrink-0"></span>
                <div>
                  <strong className="text-[#071B49]">Reusable Water Bottle:</strong> Stay hydrated by filling at the numerous cold Zamzam drinking stations throughout both Holy Mosques.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0969E8] mt-1.5 shrink-0"></span>
                <div>
                  <strong className="text-[#071B49]">Compact Sun Umbrella:</strong> Protects against direct desert ultraviolet exposure during sunny midday outdoor walks.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0969E8] mt-1.5 shrink-0"></span>
                <div>
                  <strong className="text-[#071B49]">Breathable Drawstring Shoe Bag:</strong> Keeps outdoor footwear contained and clean inside your daypack.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0969E8] mt-1.5 shrink-0"></span>
                <div>
                  <strong className="text-[#071B49]">Handheld Digital Luggage Scale:</strong> Weigh your bags before heading to the airport to avoid surprise excess baggage fees.
                </div>
              </div>
            </div>
          </section>

          {/* Section: What NOT to Overpack */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>What NOT to Overpack</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              First-time pilgrims almost universally pack far more than they actually use. Overpacking creates heavy baggage to haul through airports, train stations, and hotel elevators, while leaving zero flexibility for gifts or purchases on the return leg.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm space-y-3">
              <h3 className="font-bold text-amber-950 text-sm">Leave These Behind or Buy Locally:</h3>
              <ul className="space-y-2 list-disc list-inside text-amber-900">
                <li>
                  <strong>Excessive Changes of Clothing:</strong> Hotels in Makkah and Madinah have rapid same-day laundry services, and clothing stores surround every hotel. Packing 4 to 6 modest outfits is typically ample for a 10 to 14 day stay.
                </li>
                <li>
                  <strong>Duplicate & Heavy Electronics:</strong> Bulky laptops, tablets, and excessive cords add weight and security screening delays at airports. Unless you must work remotely, your smartphone handles virtually everything.
                </li>
                <li>
                  <strong>Full-Sized Heavy Toiletries:</strong> Gigantic bottles of shampoo, body lotion, and mouthwash weigh down your luggage. Buy travel sizes or purchase affordable full-size products at local pharmacies right next to your hotel.
                </li>
                <li>
                  <strong>Excessive Pairs of Shoes:</strong> Two pairs (one cushioned walking sneaker and one reliable sandal/slipper) are all you need.
                </li>
                <li>
                  <strong>Items Plentiful at the Destination:</strong> Prayer mats, umbrellas, scissors for hair trimming, miswaks, and unscented soaps are widely available right outside the mosque entrances for minimal cost.
                </li>
              </ul>
            </div>
          </section>

          {/* Section: Carry-On vs Checked Luggage */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Luggage className="w-5 h-5 text-[#0969E8]" />
              <span>Carry-On vs. Checked Luggage Strategy</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Smart luggage allocation ensures that if your checked suitcase is delayed or misplaced in transit, your pilgrimage and health will not be compromised.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              {/* Carry-On */}
              <div className="p-5 rounded-2xl bg-white border-2 border-[#0969E8]/30 shadow-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#071B49] text-base">
                  <Plane className="w-4 h-4 text-[#0969E8]" />
                  <span>Carry-On Bag (Your Critical Lifeline)</span>
                </div>
                <p className="text-[#64748B] text-xs">
                  Must remain with you in the aircraft cabin at all times:
                </p>
                <ul className="space-y-2 list-disc list-inside text-[#334155]">
                  <li>All passports, visas, flight boarding passes, and hotel vouchers</li>
                  <li>All daily prescription medications in original labeled containers</li>
                  <li>Smartphone, charging cables, and portable power bank (lithium batteries)</li>
                  <li>Wallet, payment cards, and cash</li>
                  <li>Essential eyeglasses or contact lens supplies</li>
                  <li>One change of comfortable everyday clothes or an Ihram set (crucial if landing directly in Jeddah/Madinah to begin rites)</li>
                  <li>Small travel toothbrush, lip balm, and pocket tissues</li>
                </ul>
              </div>

              {/* Checked Bag */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#071B49] text-base">
                  <Luggage className="w-4 h-4 text-[#64748B]" />
                  <span>Checked Suitcase (Bulk & Non-Essentials)</span>
                </div>
                <p className="text-[#64748B] text-xs">
                  Stowed in aircraft hold; items you do not need until hotel arrival:
                </p>
                <ul className="space-y-2 list-disc list-inside text-[#334155]">
                  <li>Main rotation of everyday modest clothing and undergarments</li>
                  <li>Spare Ihram sets for men / extra abayas and tunics for women</li>
                  <li>Main shoes, spare slippers, and extra socks</li>
                  <li>Bottles of liquids/toiletries exceeding cabin liquid allowances</li>
                  <li>Nail clippers, disposable razors, or small scissors for tahallul</li>
                  <li>Compression packing cubes and laundry bags</li>
                  <li>Empty volume reserved for dates, gifts, and Zamzam water allowance</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-[#64748B] italic">
              Important: Baggage allowances, carry-on weight limits, and liquid restrictions vary across airlines (e.g. Saudia, Emirates, Qatar Airways, Biman, Turkish Airlines, flynas). Always check your specific ticket confirmation and airline policies before departure.
            </p>
          </section>

          {/* Section: Umrah Packing Checklist by Trip Stage */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0969E8]" />
              <span>Umrah Packing Checklist by Trip Stage</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#071B49] text-white flex items-center justify-center text-xs font-bold">1</span>
                  <span>Before Leaving Home</span>
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Verify passport validity and double-check that all family members’ eVisa / visa documents are printed. Weigh your luggage with a digital scale. Notify your bank of international travel dates. Confirm hotel reservation dates and save the property's local address offline.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#071B49] text-white flex items-center justify-center text-xs font-bold">2</span>
                  <span>At the Departure Airport</span>
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Keep passports and boarding passes in an easily accessible front pocket. If your flight crosses the Miqat boundary en route to Jeddah, ensure you are wearing your Ihram garments before boarding or change at the designated transit airport terminal. Fully charge all devices at departure gate power stations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#071B49] text-white flex items-center justify-center text-xs font-bold">3</span>
                  <span>During the Journey & In-Flight</span>
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Drink water regularly to prevent cabin dehydration. Keep your prescription medications, lip balm, and power bank in the seatback pocket or under-seat bag. Listen for the captain's announcement approximately 30 to 45 minutes prior to the Miqat boundary.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#071B49] text-white flex items-center justify-center text-xs font-bold">4</span>
                  <span>After Arrival at Hotel</span>
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Check into your room, place passports, emergency backup cash, and extra cards directly into the room safe. Prepare your small daypack with your shoe bag, water bottle, and prayer items before heading down to Masjid al-Haram.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#071B49] text-white flex items-center justify-center text-xs font-bold">5</span>
                  <span>Before Returning Home</span>
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Package dates and souvenirs securely. Check your airline’s specific policy regarding the official 5-liter boxed Zamzam water canister (frequently checked as an additional free or nominal-cost piece at designated airport counters in Jeddah or Madinah). Weigh all bags to avoid excess luggage charges.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Simple Packing Tips for First-Time Travelers */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0969E8]" />
              <span>Simple Packing Tips for First-Time Travelers</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">1. Pack Several Days Early:</span>
                <p className="text-[#64748B]">Assemble your gear 4 to 5 days before departure so you have time to acquire missing travel items without stress.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">2. Weigh Your Luggage at Home:</span>
                <p className="text-[#64748B]">Use a handheld luggage scale. Excess baggage fees at airport check-in counters can be very expensive.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">3. Keep Essentials in Carry-On:</span>
                <p className="text-[#64748B]">Never pack passports, visas, medications, or valuable electronics in checked baggage.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">4. Label Every Piece of Baggage:</span>
                <p className="text-[#64748B]">Include durable luggage tags with your full name, phone number with country code, and email address.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">5. Charge All Devices in Advance:</span>
                <p className="text-[#64748B]">Ensure your smartphone, power bank, and smart watch are 100% charged before leaving for the airport.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">6. Verify Airline Baggage Rules:</span>
                <p className="text-[#64748B]">Double-check exact piece counts, weight limits, and cabin dimensions with every airline on your itinerary.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">7. Check Current Official Travel Rules:</span>
                <p className="text-[#64748B]">Verify current health and visa guidelines directly through official Saudi government portals.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">8. Leave 15–20% Empty Suitcase Space:</span>
                <p className="text-[#64748B]">You will inevitably want to bring home Ajwa dates, prayer beads, or thoughtful gifts for loved ones.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">9. Avoid "Just-in-Case" Redundancies:</span>
                <p className="text-[#64748B]">If you are unsure whether you will need an item, leave it at home; local stores in Makkah are exceptionally well-stocked.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
                <span className="font-bold text-[#071B49]">10. Break In Your Footwear:</span>
                <p className="text-[#64748B]">Walk at least 20 to 30 miles in your chosen shoes before the trip to ensure there are no uncomfortable pressure points.</p>
              </div>
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate flex items-center gap-2">
              <QuestionIcon className="w-5 h-5 text-[#0969E8]" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">
                  What are the most important things to pack for Umrah?
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  The most vital items are your valid passport, approved visa or travel authorization, confirmed flight and hotel bookings, prescription medications in their original packaging, primary and backup payment cards, a Type G plug adapter, broken-in walking shoes, and for men, your Ihram garments. Everything else, from toiletries to replacement clothing, can easily be obtained locally if forgotten.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">
                  What should I keep in my carry-on bag?
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Keep your travel documents, all prescription medicines, wallet and money, phone and charging cables, portable power bank, essential personal items, and at least one complete change of clothing (or Ihram garments if landing in Jeddah/Madinah ready for rites) in your carry-on. In the event that your checked luggage is delayed, you can still proceed smoothly with your journey.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">
                  How many clothes should I pack for Umrah?
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  For a typical 10 to 14 day trip, packing 4 to 6 everyday modest outfits is usually ideal. Most hotels in Makkah and Madinah offer rapid, affordable same-day laundry services, and self-service or local laundries are widespread. Men should also bring two sets of Ihram garments to have a spare if one gets soiled.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">
                  What should men pack for Ihram?
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Men should pack two sets of Ihram garments (two white unstitched sheets per set), an adjustable Ihram belt or money pouch to secure the lower garment, heavy-duty safety pins if preferred, comfortable walking sandals that comply with the footwear guidance they follow while in Ihram, and a travel shoe bag.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="font-bold text-[#071B49] text-sm">
                  What should women consider when packing for Umrah?
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  Women should pack comfortable, modest everyday clothing (such as loose-fitting abayas or tunics and trousers) made of breathable fabrics that allow ease of movement. Breathable hijabs, secure undercaps, comfortable walking shoes, and padded socks for smooth marble surfaces inside the mosques are also highly recommended. Women should follow the guidance they rely upon regarding clothing and personal practice.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Final Thoughts */}
          <section className="space-y-4 pt-6 border-t border-[#E2E8F0]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              Final Thoughts
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              The best packing list is one that is thoughtfully adapted to your individual health, itinerary, travel season, airline allowances, and personal circumstances. By covering your essential documents and health needs well in advance, choosing comfortable walking footwear, and resisting the urge to overpack, you will enjoy a serene, organized, and deeply rewarding Umrah journey.
            </p>
          </section>

          {/* Internal Linking & Related Resources */}
          <section className="pt-8 border-t border-[#E2E8F0] space-y-4">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider font-syncopate">
              Related Travel DuurDesh Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('blog/umrah-travel/first-time-umrah-travel-guide')}
                className="p-4 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-left transition-colors cursor-pointer group shadow-xs"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>First-Time Umrah Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Step-by-step logistical travel blueprint for new pilgrims.
                </p>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/makkah-travel-guide-first-time-visitors')}
                className="p-4 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-left transition-colors cursor-pointer group shadow-xs"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Makkah Visitors Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  14-section in-depth guide to visiting Makkah.
                </p>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('umrah')}
                className="p-4 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-left transition-colors cursor-pointer group shadow-xs"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Umrah Hub & Rites</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Step-by-step rites, permits, and planning tools.
                </p>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('destinations/makkah')}
                className="p-4 rounded-xl bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-left transition-colors cursor-pointer group shadow-xs"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Makkah City Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Sacred city overview, historic landmarks & transit.
                </p>
              </button>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-syncopate">
                Plan Your Umrah Journey with Travel DuurDesh
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Compare real-time airfares to Jeddah and Madinah, explore verified accommodations near Masjid al-Haram, and access free travel planning tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('flights')}
                className="inline-flex items-center gap-1.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <Plane className="w-4 h-4" />
                <span>Compare Flights</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('hotels')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>Search Hotels</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Travel Planning Tools</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold px-3 py-2.5 transition-colors cursor-pointer"
              >
                <span>Back to Travel & Food Blog &rarr;</span>
              </button>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
};
