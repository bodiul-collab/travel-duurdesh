import React, { useState } from 'react';
import {
  Clock,
  Tag,
  Share2,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Compass,
  Plane,
  Building2,
  Info,
  ShieldCheck,
  ChevronRight,
  Car,
  Footprints,
  Sparkles,
  CheckSquare,
  Square,
  ChevronDown,
  Camera,
  Sun,
  Landmark,
  Coins,
  UtensilsCrossed,
  Train,
  ShieldAlert,
  HeartHandshake,
  Trees,
  ShoppingBag
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, KUALA_LUMPUR_ARTICLE } from '../data/blogData';

interface KualaLumpurTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const KualaLumpurTravelGuideArticlePage: React.FC<KualaLumpurTravelGuideArticlePageProps> = ({
  post = KUALA_LUMPUR_ARTICLE,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(post.canonicalUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    }
  };

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const checklistSections = [
    {
      title: 'Before Departure & Documentation',
      items: [
        { id: 'kl-chk-1', text: 'Confirm passport validity for at least 6 months beyond your scheduled date of entry into Malaysia' },
        { id: 'kl-chk-2', text: 'Submit the mandatory Malaysia Digital Arrival Card (MDAC) online via the official immigration portal within 3 days prior to your arrival' },
        { id: 'kl-chk-3', text: 'Book advance observation deck entry tickets for the Petronas Twin Towers skybridge or Menara KL Tower to secure your preferred sunset time slots' },
        { id: 'kl-chk-4', text: 'Check whether your nationality is eligible for visa-free entry (most nationalities enjoy 30 to 90 days visa-free)' },
        { id: 'kl-chk-5', text: 'Notify your bank of international travel and confirm that contactless debit or credit cards are activated for transactions in Malaysia' }
      ]
    },
    {
      title: 'Arrival & Getting Around',
      items: [
        { id: 'kl-chk-6', text: 'Purchase a KLIA Ekspres non-stop train ticket at the airport station for a smooth 28-minute transfer into KL Sentral station' },
        { id: 'kl-chk-7', text: 'Download and set up the Grab ride-hailing app on your smartphone with a linked credit card for affordable city rides and street deliveries' },
        { id: 'kl-chk-8', text: 'Acquire a Touch \'n Go card or RapidKL MyCity Day Pass at any major transit station for seamless, cashless LRT, MRT, and Monorail travel' },
        { id: 'kl-chk-9', text: 'Activate an international eSIM or pick up a local prepaid SIM card at airport arrival terminals for continuous GPS navigation' },
        { id: 'kl-chk-10', text: 'Withdraw a modest supply of Malaysian Ringgit (MYR) from bank ATMs for open-air street markets, food stalls, and heritage transport' }
      ]
    },
    {
      title: 'Cultural Exploration & Packing Essentials',
      items: [
        { id: 'kl-chk-11', text: 'Pack breathable, lightweight clothing alongside a compact umbrella for sudden afternoon tropical rains' },
        { id: 'kl-chk-12', text: 'Pack modest attire covering shoulders and knees for visits to the National Mosque (Masjid Negara), Batu Caves, and Thean Hou Temple' },
        { id: 'kl-chk-13', text: 'Wear comfortable, slip-on walking shoes for climbing the 272 steps at Batu Caves and easily removing footwear before entering religious shrines' },
        { id: 'kl-chk-14', text: 'Carry a UK Type-G three-pin power adapter for charging your electronic gear in Malaysian accommodations' }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How many days are recommended for a first visit to Kuala Lumpur?',
      answer: 'Three to four full days provide the ideal balance for first-time visitors. This timeframe allows you to explore major landmarks like the Petronas Twin Towers, Batu Caves, and Merdeka Square, experience vibrant cultural quarters like Chinatown and Little India, sample street food on Jalan Alor, and enjoy panoramic skyline views without feeling rushed.'
    },
    {
      question: 'Is Kuala Lumpur an expensive destination for travelers?',
      answer: 'Compared to Western capitals and regional hubs like Singapore or Tokyo, Kuala Lumpur provides remarkable value. High-standard four- and five-star accommodations, efficient public transit, and world-class dining are available at very competitive rates. Budget travelers can comfortably explore on $30 to $45 USD per day, while mid-range travelers enjoy upscale dining and comfortable hotel suites for $70 to $120 USD daily.'
    },
    {
      question: 'Is English widely spoken in Kuala Lumpur?',
      answer: 'Yes, English is widely spoken and understood across Kuala Lumpur. Bahasa Melayu is the national language, but signs in transit stations, shopping malls, restaurants, and museums are bilingual. Most hotel staff, taxi drivers, shopkeepers, and street stall operators communicate comfortably in English.'
    },
    {
      question: 'What is the most convenient way to travel from KLIA Airport to downtown Kuala Lumpur?',
      answer: 'The fastest and most reliable option is the non-stop KLIA Ekspres train, which connects Terminal 1 and Terminal 2 directly to KL Sentral in just 28 to 33 minutes, avoiding highway congestion. From KL Sentral, travelers can easily connect to the LRT, MRT, Monorail, or take a short Grab ride to their hotel. For groups of three or four travelers with heavy luggage, a pre-booked Grab or airport taxi directly to the hotel is also economical.'
    },
    {
      question: 'Is halal food readily available in Kuala Lumpur?',
      answer: 'Halal dining is the standard in Kuala Lumpur. Malaysia is an internationally recognized leader in halal certification, overseen by the Department of Islamic Development Malaysia (JAKIM). The vast majority of Malaysian, Malay, Indian Muslim (Mamak), Middle Eastern, and international restaurant chains carry certified halal credentials with official logos displayed at entrance counters.'
    },
    {
      question: 'What should visitors wear when visiting religious landmarks like Batu Caves and Masjid Negara?',
      answer: 'Modest dress is required at all religious sites across Malaysia. Both men and women should wear clothing that covers the shoulders and knees. When visiting mosques such as Masjid Negara or Masjid Wilayah, women are required to cover their hair and wear loose, full-length robes, which are provided free of charge at visitor desks. Shoes must always be removed before entering prayer halls and temple grounds.'
    },
    {
      question: 'Is Kuala Lumpur safe for solo and female travelers?',
      answer: 'Kuala Lumpur is generally safe for solo travelers, families, and female visitors. Violent crime is rare in tourist zones. The main precaution is safeguarding personal belongings from opportunistic motorbike bag-snatching along busy curbsides and keeping wallets secure in crowded night markets. Always choose marked sidewalks facing oncoming traffic and use registered ride-hailing services like Grab at night.'
    },
    {
      question: 'Can visitors drink tap water in Kuala Lumpur?',
      answer: 'While municipal tap water in Kuala Lumpur is treated to international standards at treatment plants, older building plumbing can affect taste and purity. Most travelers and locals prefer drinking filtered, boiled, or bottled water. Modern hotels typically supply complimentary bottled water or have filtered water dispensers in rooms.'
    }
  ];

  return (
    <article className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E7EEF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'Travel & Food', onClick: () => onNavigate('food-and-travel') },
              { label: 'Travel Guides', onClick: () => onNavigate('blog') },
              { label: 'Kuala Lumpur Travel Guide: Best Places to Visit and How to Plan Your Trip' }
            ]}
          />
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
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            {post.summary}
          </p>

          {/* Author, Date, Share Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F1F5F9] text-xs text-[#64748B]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <span className="font-bold text-[#071B49] block">{post.author.name}</span>
                <span className="text-[11px] text-gray-500">{post.author.role} &bull; Published Oct 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#071B49] rounded-lg font-medium transition-colors cursor-pointer text-xs"
                title="Share article URL"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <figure className="space-y-2">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-gray-200 aspect-video shadow-md">
            <img
              src={post.heroImage.url}
              alt={post.heroImage.alt}
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {post.heroImage.caption && (
            <figcaption className="text-center text-xs text-[#64748B] italic pt-1">
              {post.heroImage.caption}
            </figcaption>
          )}
        </figure>
      </div>

      {/* 4. Article Core Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E2E8F0] shadow-xs space-y-12">

          {/* Key Highlights Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4">
            <div className="flex items-center gap-2 text-[#0969E8] font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Kuala Lumpur Travel Guide at a Glance</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs pt-1">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs">
                <Building2 className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#071B49]">Skyline Architecture</span>
                  <span className="text-[#64748B]">Petronas Twin Towers, Menara KL & Merdeka 118</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs">
                <UtensilsCrossed className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#071B49]">Halal Gastronomy</span>
                  <span className="text-[#64748B]">Jalan Alor, Mamak stalls & authentic Nasi Lemak</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs">
                <Train className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#071B49]">Effortless Transit</span>
                  <span className="text-[#64748B]">28-min KLIA Ekspres & RapidKL LRT/MRT network</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs">
                <Landmark className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#071B49]">Heritage & Shrines</span>
                  <span className="text-[#64748B]">Batu Caves, National Mosque & Thean Hou Temple</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs">
                <Coins className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#071B49]">Exceptional Value</span>
                  <span className="text-[#64748B]">Affordable luxury hotels & low daily travel costs</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs">
                <Compass className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-[#071B49]">Strategic Gateway</span>
                  <span className="text-[#64748B]">Direct access to Penang, Langkawi, Melaka & Borneo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Introduction: Discover Kuala Lumpur */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              Introduction: Discover Kuala Lumpur
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Kuala Lumpur, affectionately known as KL, is the pulsating federal capital of Malaysia and one of Southeast Asia’s most captivating, forward-thinking urban centers. Nestled at the confluence of the Gombak and Klang rivers—from which the city originally derived its name, meaning “muddy confluence”—Kuala Lumpur has evolved from a nineteenth-century tin-mining outpost into a glittering metropolis celebrated for its harmonious blend of soaring contemporary engineering, lush equatorial greenery, and rich cultural traditions.
              </p>
              <p>
                What distinguishes Kuala Lumpur on the global stage is its remarkable multicultural fabric. Within a single day, travelers can stand in awe before the world’s tallest twin skyscrapers, ascend the 272 vibrant limestone stairs of Batu Caves flanked by Hindu shrines, visit the serene moorish courtyards of the National Mosque, stroll past century-old shophouses in Chinatown’s Petaling Street, and savor fresh roti canai at a lively late-night 24-hour mamak open-air stall.
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#0969E8] font-bold text-xs uppercase tracking-wider">
                  <Info className="w-4 h-4 shrink-0" />
                  <span>Setting Realistic Travel Expectations</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Setting realistic expectations is key to a smooth journey: Kuala Lumpur experiences a warm, tropical climate year-round with humid afternoons and brief, refreshing thunderstorms. Pacing your sightseeing between air-conditioned landmarks, covered elevated walkways, and outdoor cultural districts will ensure an enjoyable, energized adventure. Whether you are visiting as a family, solo explorer, cultural pilgrim, or food enthusiast, this comprehensive guide provides the verified, practical knowledge needed to navigate the Malaysian capital with confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Why Visit Kuala Lumpur? */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              1. Why Visit Kuala Lumpur?
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Travelers from around the globe choose Kuala Lumpur for a distinctive array of reasons that set it apart from other regional megacities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#0969E8]" />
                    <h4>Futuristic Skyline & World Records</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    KL is home to iconic engineering masterpieces, including the 451.9-meter stainless-steel Petronas Twin Towers, the soaring telecommunications spire of Menara KL Tower, and the newly completed Merdeka 118, the world’s second-tallest building.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-[#0969E8]" />
                    <h4>Cultural Diversity & Community Harmony</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Experience the peaceful coexistence of Malay, Chinese, Indian, Indigenous Orang Asli, and Peranakan heritage. Mosques, Hindu temples, Buddhist monasteries, and historic churches stand peacefully alongside one another across the city.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <UtensilsCrossed className="w-4 h-4 text-[#0969E8]" />
                    <h4>A Global Culinary Capital</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Malaysia’s cuisine is celebrated worldwide for its depth of spice, fragrant coconut milk, and smoky wok heat. With universally recognized JAKIM halal standards, Muslim travelers can dine with complete confidence across the city.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Trees className="w-4 h-4 text-[#0969E8]" />
                    <h4>Tropical Green Spaces in the City</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Far from a concrete jungle, KL is known as the Garden City of Lights. Expansive urban reserves like Perdana Botanical Gardens, KLCC Park, and the Bukit Nanas Forest Eco Park provide lush rainforest green lungs in the very heart of downtown.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Coins className="w-4 h-4 text-[#0969E8]" />
                    <h4>Unrivaled Travel Value</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Luxury hospitality, private transit via Grab, five-star rooftop dining, and international shopping are consistently more affordable in Kuala Lumpur than in comparable global tier-one travel hubs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Compass className="w-4 h-4 text-[#0969E8]" />
                    <h4>Ideal Gateway to Malaysia & Southeast Asia</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    KLIA connects effortlessly to domestic destinations like Penang, Langkawi, Sabah, and Sarawak, as well as high-speed rail lines to Ipoh and comfortable highway routes to historical Melaka.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Best Places to Visit in Kuala Lumpur */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              2. Best Places to Visit in Kuala Lumpur
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Kuala Lumpur’s top attractions showcase the city’s multifaceted character, combining ancient limestone formations and historic colonial quarters with cutting-edge architectural engineering:
            </p>

            <div className="space-y-6">
              {/* Landmark 1 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#0969E8]" />
                    Petronas Twin Towers & KLCC
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Iconic Landmark
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Soaring 451.9 meters into the sky, the 88-story Petronas Twin Towers, designed by master architect César Pelli, draw inspiration from traditional geometric Islamic motifs. Visitors can walk along the double-decker Skybridge on the 41st and 42nd floors connecting the towers before ascending to the 86th-floor observation deck for breathtaking 360-degree vistas across the Klang Valley. At the base of the towers lies Suria KLCC, one of Southeast Asia’s premier shopping complexes featuring high-end international boutiques, science discovery centers, and direct access to shaded outdoor fountains.
                </p>
                <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs text-[#64748B] flex items-center gap-2 border border-[#E2E8F0]">
                  <Info className="w-4 h-4 text-[#0969E8] shrink-0" />
                  <span>
                    <strong>Traveler Tip:</strong> Observation deck tickets are strictly limited per timeslot. We strongly recommend booking entry vouchers several weeks in advance, especially during peak holiday periods.
                  </span>
                </div>
              </div>

              {/* Landmark 2 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#0969E8]" />
                    KLCC Park
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Urban Oasis
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Spanning 50 meticulously landscaped acres directly beneath the Petronas Towers, KLCC Park was masterminded by Brazilian landscape architect Roberto Burle Marx. The park features nearly 2,000 indigenous tropical trees and palms, a 1.3-kilometer cushioned jogging track, children’s wading pools, and Lake Symphony. In the evening, the lake comes alive with choreographed musical water fountain light shows that draw both locals and international travelers for open-air relaxation.
                </p>
                <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs text-[#64748B] flex items-center gap-2 border border-[#E2E8F0]">
                  <Camera className="w-4 h-4 text-[#0969E8] shrink-0" />
                  <span>
                    <strong>Photography Spot:</strong> The pedestrian bridge across Lake Symphony offers an unobstructed angle to photograph the illuminated towers reflecting in the water after sunset.
                  </span>
                </div>
              </div>

              {/* Landmark 3 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#0969E8]" />
                    Batu Caves & Murugan Statue
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Ancient Sacred Site
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Located approximately 13 kilometers north of the city center, Batu Caves is a dramatic 400-million-year-old limestone hill housing a complex of cavernous Hindu temples. Welcoming visitors at the entrance is the world’s tallest statue of Lord Murugan—standing an astonishing 42.7 meters high and clad in gold paint. To reach Cathedral Cave, travelers ascend 272 steep, vividly painted rainbow steps while observing playful macaques. Inside, natural daylight filters through massive limestone apertures onto ancient shrines.
                </p>
                <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs text-[#64748B] flex items-center gap-2 border border-[#E2E8F0]">
                  <ShieldCheck className="w-4 h-4 text-[#0969E8] shrink-0" />
                  <span>
                    <strong>Visitor Etiquette:</strong> Batu Caves is an active Hindu place of worship. Modest dress covering shoulders and knees is strictly enforced at the stair base. Avoid carrying exposed food or plastic bags that may attract curious monkeys.
                  </span>
                </div>
              </div>

              {/* Landmark 4 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#0969E8]" />
                    Merdeka Square & the Historic Colonial Core
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Historical Heritage
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Merdeka Square (Independence Square) is the birthplace of modern Malaysia, where the Union Jack was lowered and the Malayan flag raised for the first time at midnight on August 31, 1957. The square is framed by one of the world’s tallest flagpoles (95 meters) and the majestic Sultan Abdul Samad Building, renowned for its ornate Moorish copper domes, arched colonnades, and 41-meter clock tower. Nearby stands the historic Masjid Jamek Sultan Abdul Samad, built in 1909 right where the Gombak and Klang rivers meet.
                </p>
                <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs text-[#64748B] flex items-center gap-2 border border-[#E2E8F0]">
                  <Footprints className="w-4 h-4 text-[#0969E8] shrink-0" />
                  <span>
                    <strong>River of Life:</strong> Visit the riverbank at dusk when mist fountains and blue ambient lighting illuminate the historic river confluence, creating a peaceful evening walking path.
                  </span>
                </div>
              </div>

              {/* Landmark 5 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#0969E8]" />
                    Chinatown & Petaling Street
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Bustling Markets
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Kuala Lumpur’s Chinatown is anchored by Petaling Street, a bustling pedestrian lane covered by a high green polycarbonate roof known as the “Green Dragon.” During the day and long into the evening, visitors stroll past stalls offering souvenirs, artisanal goods, clothing, and traditional herbal remedies. Surrounding the market are restored heritage lanes like Kwai Chai Hong, where 1960s murals depict the early migrant life of Chinese settlers, alongside specialty cafes and traditional tea houses.
                </p>
              </div>

              {/* Landmark 6 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#0969E8]" />
                    Little India (Brickfields)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Sensory Quarters
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Situated just south of KL Sentral transport terminal, Brickfields is the vibrant heart of the city’s Indian community. The district captivates visitors with brightly painted broad avenues, traditional arches, floral garland vendors, and fragrant incense. It is an extraordinary destination to explore authentic banana leaf rice eateries, South Indian vegetarian establishments, aromatic spice shops, and shops selling elaborate silk saris and traditional gold jewelry.
                </p>
              </div>

              {/* Landmark 7 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#0969E8]" />
                    Bukit Bintang & The Golden Triangle
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Shopping & Entertainment
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Bukit Bintang is Kuala Lumpur’s primary shopping, lifestyle, and nightlife quarter. Massive air-conditioned shopping emporiums such as Pavilion KL, Starhill, and Lot 10 offer everything from ultra-luxury haute couture to affordable Japanese and regional lifestyle goods. By night, neon street signs, pedestrian crosswalks, street musicians, and bustling restaurants make Bukit Bintang the city’s most energetic neighborhood.
                </p>
              </div>

              {/* Landmark 8 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-[#0969E8]" />
                    Thean Hou Temple
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Hilltop Architecture
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Perched atop Robson Hill overlooking the southern city skyline, Thean Hou Temple is one of the largest and most ornate six-tiered Chinese temples in Southeast Asia. Dedicated to Mazu, the Chinese sea goddess, the temple seamlessly integrates Buddhism, Taoism, and Confucianism. It features ornate red pillars, dragon carvings, tiered pagodas, and thousands of glowing hanging red lanterns that present an unforgettable visual spectacle, especially during festive lunar celebrations.
                </p>
              </div>

              {/* Landmark 9 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Trees className="w-5 h-5 text-[#0969E8]" />
                    Perdana Botanical Garden (Lake Gardens)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Botanical Sanctuary
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Established in 1888 as a colonial retreat, the Perdana Botanical Garden spans 220 acres of tranquil lakes, exotic hibiscus collections (Malaysia’s national flower), sunken gardens, and bamboo groves. Located within the same heritage park precinct are the celebrated KL Bird Park—one of the world’s largest free-flight walk-in aviaries—the National Planetarium, and the Islamic Arts Museum Malaysia, housing one of the Islamic world’s finest collections of calligraphy, textiles, and architectural scale models.
                </p>
              </div>

              {/* Landmark 10 */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#0969E8]" />
                    Menara Kuala Lumpur (KL Tower)
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2FB] text-[#0969E8] border border-[#D0E2FF]">
                    Panoramic Viewpoint
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Rising 421 meters from the peak of Bukit Nanas nature reserve, Menara KL is Southeast Asia’s tallest telecommunication tower. Because it stands atop a natural hill, its open-air Sky Deck and enclosed Observation Deck offer arguably the premier vantage point in the entire city for admiring the Petronas Towers up close against the horizon. For thrill-seekers, the glass-floored Sky Box extends outward directly over the precipice.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3: Neighborhoods and Where to Stay */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              3. Neighborhoods and Where to Stay
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Selecting the right base depends on your travel style, pace, and priorities. Kuala Lumpur offers distinctly characterized districts, each providing unique connectivity and ambiance:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#071B49] text-base">KLCC (Kuala Lumpur City Centre)</h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      First-Time Visitors & Luxury
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    <strong>Character:</strong> Upscale, modern, and walkable. Direct pedestrian access to the Petronas Towers, Suria KLCC mall, and KLCC Park. Home to five-star international hotels with skyline infinity pools.
                  </p>
                  <p className="text-xs text-[#0969E8] font-medium">
                    <strong>Best for:</strong> Families, honeymooners, and first-time visitors seeking central luxury and peaceful green surroundings.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#071B49] text-base">Bukit Bintang</h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      Shopping & Nightlife
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    <strong>Character:</strong> High energy, central, and vibrant 24/7. Stepping outside places you directly among mega shopping malls, street dining on Jalan Alor, and rapid transit Monorail and MRT stations.
                  </p>
                  <p className="text-xs text-[#0969E8] font-medium">
                    <strong>Best for:</strong> Avid shoppers, food enthusiasts, and travelers who thrive in lively urban environments.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#071B49] text-base">Chinatown & Historic Core</h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      Heritage & Budget
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    <strong>Character:</strong> Rich historical atmosphere, heritage shophouse boutique hotels, independent artisan coffee shops, and night markets. Superb connectivity via Pasar Seni transit interchange.
                  </p>
                  <p className="text-xs text-[#0969E8] font-medium">
                    <strong>Best for:</strong> Solo travelers, budget explorers, photographers, and culture lovers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#071B49] text-base">KL Sentral & Brickfields</h4>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      Maximum Transit Ease
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    <strong>Character:</strong> The central transport nexus of Peninsular Malaysia. Direct access to the KLIA Ekspres airport train, interstate ETS railway, LRT, MRT, and Monorail lines, flanked by major business hotels.
                  </p>
                  <p className="text-xs text-[#0969E8] font-medium">
                    <strong>Best for:</strong> Short stopovers, business travelers, and those planning frequent day trips outside the city.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: What and Where to Eat: Malaysian Halal & Street Food Guide */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              4. What and Where to Eat: Malaysian Halal & Street Food Guide
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Malaysian food is a celebration of flavor born from generations of cultural cross-pollination among Malay, Chinese, Indian, and indigenous communities. Spices like lemongrass, galangal, pandan, turmeric, and star anise marry rich coconut milk and smoky wok char. With Malaysia’s world-renowned Department of Islamic Development (JAKIM) setting gold standards for halal certification, Muslim travelers will find thousands of verified halal eateries across every neighborhood.
              </p>

              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-4">
                <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-[#0969E8]" />
                  Must-Try Signature Dishes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <span className="font-bold text-[#071B49] block text-sm">Nasi Lemak (The National Pride)</span>
                    <p className="text-[#64748B]">
                      Fragrant rice steeped in creamy coconut milk and pandan leaves, served with spicy sweet sambal chili, crispy fried anchovies (ikan bilis), roasted peanuts, hard-boiled or fried egg, and savory fried chicken (ayam goreng berempah).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <span className="font-bold text-[#071B49] block text-sm">Roti Canai & Teh Tarik</span>
                    <p className="text-[#64748B]">
                      Crisp, flaky Indian flatbread flipped by hand on flat griddles, dipped in aromatic dhal or spicy mutton curry. Pair it with <em>Teh Tarik</em> (frothy “pulled” sweet condensed milk tea) at any neighborhood mamak stall.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <span className="font-bold text-[#071B49] block text-sm">Beef Rendang</span>
                    <p className="text-[#64748B]">
                      Tender slow-cooked beef simmered for hours in rich coconut milk, toasted grated coconut (kerisik), lemongrass, and galangal until the spices caramelize into a deeply aromatic, melt-in-your-mouth gravy.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <span className="font-bold text-[#071B49] block text-sm">Laksa (Curry Laksa & Assam Laksa)</span>
                    <p className="text-[#64748B]">
                      Rich noodle soup served either as Curry Laksa (velvety coconut-curry broth with tofu puffs, cockles, and shredded chicken) or Penang-style Assam Laksa (tangy tamarind fish broth loaded with mint and cucumber).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <span className="font-bold text-[#071B49] block text-sm">Chicken & Beef Satay</span>
                    <p className="text-[#64748B]">
                      Skewers of marinated chicken or beef grilled over glowing coconut charcoal, accompanied by fragrant pressed rice cakes (ketupat), crisp cucumber slices, and warm spiced peanut sauce.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                    <span className="font-bold text-[#071B49] block text-sm">Cendol</span>
                    <p className="text-[#64748B]">
                      The ultimate tropical dessert: finely shaved ice drenched in creamy coconut milk and smoky Gula Melaka (dark palm sugar syrup), topped with green pandan rice flour jelly and sweetened red beans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
                <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0969E8]" />
                  Where to Experience KL’s Food Scene
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#475569]">
                  <p>
                    <strong>Jalan Alor (Bukit Bintang):</strong> The city’s most famous open-air culinary strip. In the evening, hundreds of outdoor tables spill into the road serving wok-fried noodles, grilled seafood, fresh tropical fruit (including durian), and dim sum.
                  </p>
                  <p>
                    <strong>Mamak Stalls (Everywhere in KL):</strong> Casual, open-air eateries operated by the Tamil Muslim community, often open 24 hours. They are beloved community gathering spots for affordable roti canai, mee goreng, and teh tarik.
                  </p>
                  <p>
                    <strong>Lot 10 Hutong:</strong> An air-conditioned gourmet heritage food court in Bukit Bintang bringing together multi-generational heritage hawker recipes under one roof.
                  </p>
                  <p>
                    <strong>Kampung Baru:</strong> A historic Malay enclave preserved in the shadow of modern skyscrapers, offering traditional night markets with authentic Malay dishes like grilled fish (ikan bakar) and ayam percik.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Getting Around Kuala Lumpur */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              5. Getting Around Kuala Lumpur
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Kuala Lumpur features one of Southeast Asia’s most modern and integrated multi-modal transit systems. Visitors can move across the capital effortlessly by rail, road, and covered pedestrian skyways:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Train className="w-4 h-4 text-[#0969E8]" />
                    <h4>RapidKL Rail Network (LRT, MRT, Monorail)</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    The automated driverless rail system connects every major quadrant of Greater KL. The MRT Kajang Line and Putrajaya Line, LRT Kelana Jaya Line, and KL Monorail provide direct air-conditioned travel between KLCC, Bukit Bintang, Chinatown, and KL Sentral.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Plane className="w-4 h-4 text-[#0969E8]" />
                    <h4>KLIA Ekspres Airport Train</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Connecting Terminal 1 and Terminal 2 directly to KL Sentral in just 28 to 33 minutes, running at speeds up to 160 km/h with free onboard 4G Wi-Fi. It is the most reliable way to avoid peak-hour airport highway congestion.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Car className="w-4 h-4 text-[#0969E8]" />
                    <h4>Grab Ride-Hailing</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Southeast Asia’s dominant ride-hailing app works seamlessly in KL. Rides are affordable, fares are fixed before booking, and credit card payments eliminate the need for cash change.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Footprints className="w-4 h-4 text-[#0969E8]" />
                    <h4>Covered Pedestrian Skywalks</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    The 1.1-kilometer elevated, air-conditioned KLCC-to-Bukit Bintang pedestrian walkway enables travelers to walk between Suria KLCC and Pavilion shopping malls in 15 minutes, sheltered from rain and tropical heat.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] text-xs text-[#475569] space-y-1.5">
                <div className="font-bold text-[#071B49] flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#0969E8]" />
                  Cashless Transit Payment: Touch \'n Go & MyCity Pass
                </div>
                <p>
                  Visitors can purchase a reloadable <strong>Touch \'n Go (TnG) card</strong> at major transit stations or pick up the RapidKL <strong>MyCity 1-Day or 3-Day Pass</strong>, offering unlimited rides on all LRT, MRT, and Monorail lines at exceptional value.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Best Time to Visit & Weather */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              6. Best Time to Visit & Weather
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Kuala Lumpur sits roughly 3 degrees north of the equator, experiencing a consistent tropical rainforest climate. Daytime temperatures consistently hover between 28°C and 33°C (82°F to 91°F), dipping pleasantly to 23°C to 25°C at night. Humidity remains high throughout the year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Sun className="w-4 h-4 text-[#0969E8]" />
                    <span>Dryer Windows (May–Aug & Dec–Feb)</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Slightly lower rainfall and more sunshine make these periods ideal for outdoor explorations, day trips to Batu Caves, and walking city tours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Info className="w-4 h-4 text-[#0969E8]" />
                    <span>Monsoon Seasons (Mar–Apr & Oct–Nov)</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Heavier afternoon showers and dramatic tropical thunderstorms are common. Rain typically lasts 1 to 2 hours, clearing the air and leaving cool evenings.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-[#0969E8]" />
                    <span>Festive Seasons</span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Visiting during Hari Raya Aidilfitri, Chinese New Year, Thaipusam (at Batu Caves), or Deepavali provides mesmerizing cultural processions, festive street decorations, and open houses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Suggested Itineraries */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              7. Suggested Itineraries
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                To help structure your days smoothly, our editorial team has assembled three flexible itineraries tailored to different trip lengths:
              </p>

              <div className="space-y-4 pt-2">
                {/* Itinerary 1 */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#071B49] text-base">2-Day Essential Highlights</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      Quick Stopover
                    </span>
                  </div>
                  <ul className="text-xs text-[#475569] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 1:</span>
                      <span>Morning visit to the Petronas Twin Towers Skybridge; afternoon walk through KLCC Park; evening exploration of Bukit Bintang and dinner on the street food strip of Jalan Alor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 2:</span>
                      <span>Early morning climb up the 272 steps at Batu Caves; midday visit to Merdeka Square and the Sultan Abdul Samad Building; afternoon souvenir and tea hunting in Chinatown’s Petaling Street and Kwai Chai Hong murals.</span>
                    </li>
                  </ul>
                </div>

                {/* Itinerary 2 */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#071B49] text-base">3-Day Culture, Food & Skyline</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      Recommended Standard
                    </span>
                  </div>
                  <ul className="text-xs text-[#475569] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 1:</span>
                      <span>Downtown modern wonders: Petronas Towers, Suria KLCC shopping, KLCC Park lake symphony, and sunset cocktails or mocktails at Menara KL Tower Sky Deck.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 2:</span>
                      <span>Heritage & religious architecture: Batu Caves in the morning, Islamic Arts Museum Malaysia, National Mosque (Masjid Negara), and Merdeka Square River of Life at dusk.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 3:</span>
                      <span>Multi-ethnic neighborhoods: Morning peaceful visit to hilltop Thean Hou Temple; lunch in Brickfields (Little India) banana leaf rice; afternoon exploring Chinatown cafes and Central Market artisan crafts.</span>
                    </li>
                  </ul>
                </div>

                {/* Itinerary 3 */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-[#071B49] text-base">5-Day Kuala Lumpur & Day Trips</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF2FB] text-[#0969E8]">
                      Comprehensive Experience
                    </span>
                  </div>
                  <ul className="text-xs text-[#475569] space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Days 1–3:</span>
                      <span>Follow the complete 3-Day Culture, Food & Skyline itinerary covering all major inner-city districts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 4:</span>
                      <span>Day trip to historical Melaka (Malacca), a UNESCO World Heritage city 2 hours south of KL. Explore Dutch Square (Stadthuys), St. Paul’s Hill, A Famosa fortress, and Jonker Street night market.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#0969E8] shrink-0">Day 5:</span>
                      <span>Morning excursion to Putrajaya, Malaysia’s federal administrative center, to view the stunning pink-domed Putra Mosque and cruise Putrajaya Lake; afternoon leisure shopping and spa relaxation before airport departure.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Practical Budgeting & Travel Costs */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              8. Practical Budgeting & Travel Costs
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                The local currency is the <strong>Malaysian Ringgit (MYR)</strong>, often written as RM. Credit and contactless debit cards (Visa and Mastercard) are universally accepted across shopping centers, hotels, supermarkets, and established restaurants. Small cash is only required for street hawkers, wet markets, and reloading transit cards.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-[#E2E8F0] rounded-xl overflow-hidden">
                  <thead className="bg-[#071B49] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Traveler Tier</th>
                      <th className="p-3">Daily Cost (MYR)</th>
                      <th className="p-3">Approx. (USD)</th>
                      <th className="p-3">Includes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] bg-white">
                    <tr>
                      <td className="p-3 font-bold text-[#071B49]">Budget Traveler</td>
                      <td className="p-3 font-semibold text-[#0969E8]">RM 120 – RM 190</td>
                      <td className="p-3">$28 – $45 USD</td>
                      <td className="p-3 text-[#64748B]">Boutique hostel or guesthouse, public transit (LRT/MRT), street hawker meals, free temples & public parks</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#071B49]">Mid-Range Traveler</td>
                      <td className="p-3 font-semibold text-[#0969E8]">RM 280 – RM 520</td>
                      <td className="p-3">$65 – $120 USD</td>
                      <td className="p-3 text-[#64748B]">4-star hotel in Bukit Bintang/KLCC, mix of Grab rides and metro, sit-down air-conditioned dining, paid observation deck tickets</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-[#071B49]">Luxury Traveler</td>
                      <td className="p-3 font-semibold text-[#0969E8]">RM 850 – RM 1,800+</td>
                      <td className="p-3">$195 – $420+ USD</td>
                      <td className="p-3 text-[#64748B]">5-star luxury suites (Grand Hyatt, Mandarin Oriental, Banyan Tree), private chauffeured cars, fine-dining restaurants, luxury spa treatments</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-[#F8FAFC] rounded-xl text-xs text-[#64748B] flex items-center gap-2 border border-[#E2E8F0]">
                <Coins className="w-4 h-4 text-[#0969E8] shrink-0" />
                <span>
                  <strong>Tipping Policy:</strong> Tipping is not customary in Malaysia. Most restaurants and hotels automatically add a 10% service charge and 6% Sales & Service Tax (SST) to your bill. Leaving small change for exceptional service at cafes or luggage assistance is appreciated but entirely optional.
                </span>
              </div>
            </div>
          </section>

          {/* Section 9: Local Etiquette, Safety & Respectful Travel */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              9. Local Etiquette, Safety & Respectful Travel
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Malaysia is a warm, gracious, and welcoming nation where diverse cultures thrive through mutual respect. Following a few simple etiquette practices ensures you will be treated with genuine hospitality wherever you go:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#0969E8]" />
                    <h4>Dress Respectfully at Sacred Sites</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Always cover your shoulders and knees before entering mosques, Hindu temples, and Buddhist shrines. Always remove footwear at entrance thresholds. Women visiting mosques must cover their hair (modest visitor cloaks and headscarves are provided free of charge at major tourist mosques).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <HeartHandshake className="w-4 h-4 text-[#0969E8]" />
                    <h4>Traditional Hand Gestures & Manners</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Use your right hand when giving or receiving money, gifts, or food, as the left hand is traditionally considered unhygienic. Avoid pointing directly with your index finger; instead, indicate direction politely using your right thumb resting over a closed fist.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <ShieldAlert className="w-4 h-4 text-[#0969E8]" />
                    <h4>Street Awareness & Bag Protection</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    While violent crime is exceedingly rare, opportunistic bag-snatching by passing motorcyclists can occur along busy curbsides. Always carry handbags and cross-body bags away from the street edge, walk facing oncoming traffic, and maintain awareness in crowded night markets.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                    <Sun className="w-4 h-4 text-[#0969E8]" />
                    <h4>Hydration & Tropical Well-being</h4>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Equatorial humidity accelerates dehydration. Carry bottled or filtered water throughout your day. While tap water is treated at city plants, travelers should drink boiled, filtered, or sealed bottled water for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Interactive Trip Planning Checklist */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              10. Interactive Trip Planning Checklist
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Use this interactive checklist to prepare your trip to Kuala Lumpur. Tap any item to check it off as you complete your planning:
            </p>

            <div className="space-y-4 pt-2">
              {checklistSections.map((sec, sIdx) => (
                <div key={sIdx} className="border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 bg-[#F8FAFC] space-y-3">
                  <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#0969E8]" />
                    {sec.title}
                  </h3>
                  <div className="space-y-2.5">
                    {sec.items.map((item) => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                            isChecked
                              ? 'bg-[#EAF2FB] border-[#D0E2FF] text-[#071B49]'
                              : 'bg-white hover:bg-slate-50 border-[#E2E8F0] text-[#334155]'
                          }`}
                        >
                          <div className="shrink-0 mt-0.5">
                            {isChecked ? (
                              <CheckCircle2 className="w-4 h-4 text-[#0969E8]" />
                            ) : (
                              <Square className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'line-through text-gray-400' : ''}`}>
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 11: Frequently Asked Questions (FAQ) */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              11. Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Find answers to the most common practical questions asked by travelers planning their trip to Kuala Lumpur:
            </p>

            <div className="space-y-3 pt-2">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#071B49] hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#0969E8] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#0969E8]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 bg-[#F8FAFC]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Conclusion */}
          <section className="space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              Conclusion
            </h2>
            <div className="text-sm sm:text-base text-[#475569] leading-relaxed space-y-4">
              <p>
                Kuala Lumpur is a city that defies simple categorization. It is an ultra-modern skyline of steel and glass, an ancient natural limestone sanctuary, a historic colonial river settlement, and a culinary wonder all at once. By understanding its neighborhoods, traveling respectfully across its sacred sanctuaries, and pacing your days between modern attractions and open-air street markets, your journey through the Malaysian capital will be deeply rewarding and memorable.
              </p>
              <p>
                Continue preparing your global travel plans with our dedicated destination guides and pilgrimage resources:
              </p>
            </div>
          </section>

          {/* Related Travel & Pilgrim Guides */}
          <div className="pt-6 border-t border-[#F1F5F9] space-y-4">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
              Explore More Travel Guides &amp; Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                onClick={() => onNavigate('blog/travel-guides/dubai-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Dubai Travel Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Burj Khalifa, historic souks, desert safaris & itineraries.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/travel-guides/alula-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>AlUla Travel Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Ancient Nabataean Hegra, rock art & desert canyons.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/travel-guides/madinah-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Madinah Travel Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Prophet\'s Mosque, Rawdah permits, transit & respectful etiquette.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/travel-guides/makkah-travel-guide-first-time-visitors')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Makkah First-Timer Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Masjid al-Haram, Tawaf navigation, lodging & rituals.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/umrah-travel/what-to-pack-for-umrah')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Umrah Packing Checklist</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Comprehensive luggage, Ihram gear & pilgrimage essentials.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/travel-guides/london-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>London Travel Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Landmarks, museums, royal heritage &amp; public transit.
                </p>
              </button>

              <button
                onClick={() => onNavigate('destinations/kualalumpur')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>KL Destination Hub</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  City highlights, flight searches &amp; travel weather data.
                </p>
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-syncopate">
                Plan Your Journey to Kuala Lumpur with Confidence
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Compare flight routes to Kuala Lumpur (KUL), explore vetted accommodations across Malaysia, and utilize our free travel tools on Travel DuurDesh.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('flights')}
                className="inline-flex items-center gap-1.5 bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <Plane className="w-4 h-4" />
                <span>Compare Flights</span>
              </button>
              <button
                onClick={() => onNavigate('hotels')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>Search Hotels</span>
              </button>
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Free Travel Tools</span>
              </button>
              <button
                onClick={() => onNavigate('blog')}
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold px-3 py-2.5 transition-colors cursor-pointer"
              >
                <span>Back to Travel &amp; Food Blog &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};
