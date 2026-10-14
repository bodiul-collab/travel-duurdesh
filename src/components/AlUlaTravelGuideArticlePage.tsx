import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Tag,
  Share2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MapPin,
  Compass,
  Plane,
  Building2,
  Info,
  ShieldCheck,
  Luggage,
  ChevronRight,
  Car,
  Footprints,
  Sparkles,
  CheckSquare,
  Square,
  ChevronDown,
  Camera,
  Sun,
  Eye,
  FileText,
  Landmark
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, ALULA_ARTICLE } from '../data/blogData';

interface AlUlaTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const AlUlaTravelGuideArticlePage: React.FC<AlUlaTravelGuideArticlePageProps> = ({
  post = ALULA_ARTICLE,
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
      title: 'Before Departure',
      items: [
        { id: 'alula-chk-1', text: 'Confirm passport validity (at least 6 months remaining) and obtain an approved Saudi eVisa or tourist visa via official government channels' },
        { id: 'alula-chk-2', text: 'Check seasonal opening schedules and reserve advance entrance permits for Hegra, Dadan, and Jabal Ikmah via the official Experience AlUla portal' },
        { id: 'alula-chk-3', text: 'Book domestic or international flights into AlUla International Airport (ULH) or plan ground transfer routes from Madinah (MED)' },
        { id: 'alula-chk-4', text: 'Secure confirmed accommodation matching your itinerary, noting cancellation terms and deposit policies' },
        { id: 'alula-chk-5', text: 'Arrange a rental car or book scheduled transfers, as attractions are widely dispersed across expansive desert canyons' }
      ]
    },
    {
      title: 'Daily Excursion Preparation',
      items: [
        { id: 'alula-chk-6', text: 'Verify excursion departure times and arrive at designated visitor centers or meeting points at least 20 minutes prior to scheduled tour departure' },
        { id: 'alula-chk-7', text: 'Carry sufficient drinking water, high-SPF sun protection, UV-blocking sunglasses, and a wide-brim hat' },
        { id: 'alula-chk-8', text: 'Fully charge your mobile phone and camera, and pack a high-capacity portable power bank' },
        { id: 'alula-chk-9', text: 'Wear sturdy, closed-toe walking shoes or trail runners suitable for loose sand, gravel, and uneven rock surfaces' },
        { id: 'alula-chk-10', text: 'Pack a lightweight jacket or fleece layer for sudden temperature drops after desert sunset' }
      ]
    },
    {
      title: 'Responsible Heritage & Departure',
      items: [
        { id: 'alula-chk-11', text: 'Follow all heritage site rules: never touch rock carvings, climb monuments, or remove natural stone or ceramic fragments' },
        { id: 'alula-chk-12', text: 'Ask permission before photographing residents or artisans in traditional markets and heritage settlements' },
        { id: 'alula-chk-13', text: 'Confirm onward journey schedules, airport check-in windows, and fuel levels if driving across desert highways' }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Where is AlUla located?',
      answer: 'AlUla is situated in the Medina Province of northwestern Saudi Arabia, approximately 325 kilometers north of the holy city of Madinah and roughly 1,100 kilometers northwest of Riyadh. Set within the Biblical valley of Wadi Al-Qura, AlUla sits amidst towering sandstone massifs and an ancient agricultural oasis on the historic Incense Trade Route.'
    },
    {
      question: 'What is AlUla known for?',
      answer: 'AlUla is renowned as an extraordinary open-air living museum of world heritage and natural geology. It is best known for Hegra (Saudi Arabia’s first UNESCO World Heritage Site), monumental ancient tombs from the Dadanite and Lihyanite kingdoms, the open-air inscription library of Jabal Ikmah, the mudbrick labyrinth of AlUla Old Town, dramatic natural formations like Elephant Rock, and modern architectural landmarks such as Maraya.'
    },
    {
      question: 'What is Hegra?',
      answer: 'Hegra (also historically known as Mada’in Salih or Al-Hijr) was the principal southern settlement of the ancient Nabataean Kingdom, second in importance only to Petra in Jordan. Dating from the 1st century BCE to the 1st century CE, Hegra preserves more than 110 remarkably intact monumental tombs carved directly into monolithic sandstone outcrops, complete with ornate classical inscriptions, decorative pediments, and funerary iconography.'
    },
    {
      question: 'How much time should I plan for an AlUla trip?',
      answer: 'A stay of 3 to 4 days provides a balanced, realistic pace for most travelers. This allows sufficient time to take guided tours of Hegra, explore Dadan and Jabal Ikmah, stroll through AlUla Old Town and its date palm oasis, experience sunset at Elephant Rock, and take in scenic views from Harrat Viewpoint without feeling rushed. A shorter 2-day visit can cover the highlights, while 5 or more days allows for wellness activities, canyon hiking, and day excursions.'
    },
    {
      question: 'Can I visit AlUla\'s heritage attractions without a guide?',
      answer: 'No. Major archaeological sites, including Hegra, Dadan, and Jabal Ikmah, are strictly protected heritage reserves that cannot be entered independently on foot or in private vehicles. Visitors must book official guided tours or designated site shuttle experiences through official destination channels. These tours are accompanied by certified local storytellers (Rawis) and heritage guides who ensure visitor safety and preserve ancient monuments.'
    },
    {
      question: 'What should I check before booking an AlUla trip?',
      answer: 'Before booking flights and hotels, verify the seasonal operating calendar and ticket availability for the attractions and events you plan to experience. Also check entry visa requirements for your nationality, compare flight options into AlUla (ULH) versus Madinah (MED), check seasonal weather forecasts, and confirm local transportation availability, as rental cars and private transfers often book up quickly during peak winter months.'
    },
    {
      question: 'Can AlUla be combined with a visit to Makkah or Madinah?',
      answer: 'Yes, travelers frequently combine AlUla with an Umrah pilgrimage or cultural journey to Makkah and Madinah. Madinah is the closest major gateway, connected to AlUla by a scenic desert drive of approximately 3 to 4 hours via well-maintained highways. Travelers can perform Umrah in Makkah, take the high-speed Haramain train to Madinah, and then continue north to AlUla by road or domestic flight. Always confirm your overall itinerary and transport connections well in advance.'
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
              { label: 'AlUla Travel Guide: What Travelers Should Know' }
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
            AlUla Travel Guide: What Travelers Should Know
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            Plan your AlUla trip with this practical travel guide covering ancient heritage, dramatic desert landscapes, trip planning, local culture, and responsible travel in Saudi Arabia.
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

          {/* Intro Section */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              Introduction: Discover AlUla
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Nestled in the desert valleys of northwestern Saudi Arabia, AlUla is a destination that captures the imagination like few places on earth. Defined by sweeping ochre sandstone massifs, fertile date palm oases, and monumental rock-cut architecture, this ancient crossroads served for millennia as a vital artery along the historic Incense Route connecting the southern Arabian Peninsula with Egypt, the Levant, and the Mediterranean world.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Today, travelers drawn to archaeology, world heritage, nature photography, and authentic Arabian culture visit AlUla to witness thousands of years of human history written directly into towering desert cliffs. From the monumental Nabataean tombs of Hegra to the mudbrick labyrinths of AlUla Old Town, the region offers an immersive journey through time.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="flex items-center gap-2 text-[#0969E8] font-bold text-xs uppercase tracking-wider">
                <Info className="w-4 h-4 shrink-0" />
                <span>Setting Realistic Travel Expectations</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A rewarding visit to AlUla requires thoughtful planning. Because the region&apos;s archaeological sites and cultural venues are strictly protected heritage reserves, experiences depend on your trip dates, available tour reservations, conservation rules, ground transportation, and personal budget. AlUla is not a drop-in destination where visitors wander freely into historic tombs; rather, it is a curated, carefully managed living museum designed to preserve priceless heritage for generations to come.
              </p>
            </div>
          </section>

          {/* Section 1: Why Visit AlUla? */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              1. Why Visit AlUla?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              AlUla has emerged as one of the premier cultural destinations in the Middle East, appealing to thoughtful travelers seeking depth rather than commercial spectacle. The primary reasons to consider AlUla include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Landmark className="w-4 h-4 text-[#0969E8]" />
                  <span>Millennia of Archaeological Heritage</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Layers of continuous civilization spanning the Neolithic era, the ancient Dadanite and Lihyanite kingdoms, the Nabataean empire, Roman garrisons, and Islamic pilgrimage caravans.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Sun className="w-4 h-4 text-[#0969E8]" />
                  <span>Dramatic Sandstone Landscapes</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Monumental wind-sculpted sandstone towers, narrow desert canyons, basalt volcanic plateaus, and dramatic vistas that change color from dawn gold to fiery sunset amber.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Compass className="w-4 h-4 text-[#0969E8]" />
                  <span>Historic Mudbrick Settlements</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  AlUla Old Town preserves traditional mudbrick and stone architecture, historic mosques, and an atmospheric market alleyway reflecting centuries of communal oasis life.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Camera className="w-4 h-4 text-[#0969E8]" />
                  <span>Guided Cultural Storytelling</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Guided explorations led by certified local Rawis (traditional storytellers) who share oral traditions, ancient inscriptions, and botanical wisdom passed down through generations.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-2">
              For travelers who appreciate geology, quiet desert nights, cultural heritage, and contemplative landscape photography, AlUla provides a rare combination of raw natural beauty and deep historical significance.
            </p>
          </section>

          {/* Section 2: Top Places and Experiences to Explore */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              2. Top Places and Experiences to Explore
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              AlUla encompasses several distinct heritage sites and natural landmarks spread over dozens of kilometers. Understanding what makes each location unique—and how access is structured—is vital for planning your days.
            </p>

            {/* Subsection: Hegra */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Hegra (Mada&apos;in Salih): Saudi Arabia&apos;s UNESCO Crown Jewel
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Hegra was the principal southern city of the Nabataean civilization, flourishing alongside Petra between the 1st century BCE and the 1st century CE. Spread across massive sandstone monoliths rising from flat desert sands, Hegra preserves more than 110 monumental rock-hewn tombs featuring ornate classical pediments, carved eagles, sphinxes, and Medusa motifs.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                The most celebrated monument is the monolithic <em>Tomb of Lihyan son of Kuza</em> (popularly known as Qasr al-Farid, or the &ldquo;Lonely Castle&rdquo;), standing four stories high on an isolated sandstone block. Other significant areas include the Jabal Ithlib sacred precinct and the Diwan ceremonial dining hall.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Important Access Rule for Hegra</span>
                </span>
                <p>
                  Visitors cannot drive private vehicles or walk freely into Hegra. All visits must be booked as official guided tours departing by air-conditioned coach or vintage Land Rover from the Winter Park or Hegra Welcome Center. Tour slots sell out weeks in advance during high season, so advance booking through official channels is essential.
                </p>
              </div>
            </div>

            {/* Subsection: AlUla Old Town */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] tracking-tight font-syncopate">
                AlUla Old Town & the Incense Road Market
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Dating back to at least the 12th century, AlUla Old Town is an intricate labyrinth of nearly 900 mudbrick and stone dwellings, interconnected defense walls, and quiet communal plazas. Inhabited until the 1980s, the settlement is overlooked by the 10th-century AlUla Fort, which affords panoramic views over the surrounding date palm canopy.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Adjacent to the historic ruins, the restored <strong>Incense Road market</strong> features artisanal handicraft shops, local date and citrus boutiques, traditional perfumers, and outdoor terrace cafes. Guided heritage tours lead visitors through the conserved core, explaining the ingenious mudbrick architecture, passive desert ventilation, and natural spring irrigation systems.
              </p>
            </div>

            {/* Subsection: Elephant Rock */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Elephant Rock (Jabal AlFil)
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Rising 52 meters above golden sands, Elephant Rock is an iconic natural sculpture formed over millions of years of wind, moisture, and sand erosion. Its distinctive profile clearly resembles an elephant whose trunk reaches to the desert floor.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                The area around Jabal AlFil features sunken lounge seating embedded into the sand with cozy fire pits and beverage kiosks. It is a favored gathering spot in the late afternoon and evening, when the setting sun bathes the sandstone in deep red hues, followed by dramatic nocturnal illumination against star-filled desert skies.
              </p>
            </div>

            {/* Subsection: Sandstone Valleys, Viewpoints & Desert Landscapes */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Sandstone Valleys, Viewpoints & Desert Landscapes
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Beyond individual monuments, AlUla&apos;s natural topography is an attraction in its own right. The <strong>Harrat Viewpoint</strong> atop the black basalt plateau of Harrat Uwayrid offers a breathtaking 360-degree overlook across the entire valley, showing the stark contrast between volcanic rock, ochre canyons, and the emerald green oasis below.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                The <strong>Ashar Valley</strong> showcases wind-sculpted rock towers and winding canyons, while the shaded <strong>Oasis Heritage Trail</strong> provides a peaceful 3-kilometer walking path under towering date palms, citrus orchards, and fragrant mint gardens irrigated by historic aqueducts.
              </p>
            </div>

            {/* Subsection: Dadan & Jabal Ikmah */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Dadan & Jabal Ikmah: The Open-Air Inscription Library
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Before the Nabataeans arrived, the ancient oasis was the center of the powerful Dadan and Lihyan kingdoms (9th to 2nd centuries BCE). At <strong>Dadan</strong>, visitors can observe dramatic square-cut tombs carved high into red cliff faces, notably the iconic <em>Lion Tombs</em> adorned with sculpted predatory felines symbolizing elite status.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                A short distance away lies <strong>Jabal Ikmah</strong>, celebrated as Saudi Arabia&apos;s largest &ldquo;open-air library.&rdquo; Here, hundreds of pre-Arabic inscriptions in Dadanitic, Lihyanite, Thamudic, and Aramaic scripts are carved into canyon walls, recording ancient laws, religious vows, economic transactions, and pastoral traditions.
              </p>
            </div>

            {/* Subsection: Maraya */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#071B49] tracking-tight font-syncopate">
                Maraya: The Mirrored Architectural Marvel
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Located in the Ashar Valley, Maraya (meaning &ldquo;mirrors&rdquo; in Arabic) holds the Guinness World Record as the largest mirrored building in the world, clad in nearly 10,000 square meters of reflective glass panels. The structure blends almost magically into the desert, reflecting the sculpted sandstone cliffs and changing sky throughout the day.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                Maraya functions as a premier concert auditorium and cultural venue hosting international musicians and exhibitions. <strong>Access note:</strong> The Ashar Valley is a private security-controlled precinct. Visitors cannot simply drive up to Maraya without a confirmed concert ticket, verified fine-dining reservation, or approved tour pass. Always verify access requirements through official channels before your visit.
              </p>
            </div>
          </section>

          {/* Section 3: When Is a Good Time to Visit AlUla? */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              3. When Is a Good Time to Visit AlUla?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Choosing when to travel to AlUla involves balancing daytime outdoor comfort, daylight hours, seasonal festival programming, and personal budget. Because AlUla has an arid desert climate, conditions vary considerably throughout the year:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="font-bold text-sm text-[#071B49] mb-1">
                  Cooler Season (October through March / April)
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  This is the peak travel window. Daytime temperatures are generally pleasant and comfortable for exploring open-air archaeological sites, walking the oasis, and hiking canyon trails. Nights can become quite brisk, frequently dropping into single digits Celsius, requiring warm clothing. This period coincides with major seasonal cultural festivals, which brings vibrant programming but also higher accommodation rates and earlier booking sell-outs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="font-bold text-sm text-[#071B49] mb-1">
                  Shoulder Season (April & May / September & October)
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  During shoulder months, daytime temperatures climb steadily, but mornings and late afternoons remain manageable. Crowd levels are significantly lower than during mid-winter, making it easier to secure preferred tour time slots and accommodation choices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="font-bold text-sm text-[#071B49] mb-1">
                  Summer Season (June through August)
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Summers bring intense desert heat with afternoon temperatures frequently exceeding 40°C (104°F). Outdoor archaeological touring is typically restricted to early morning hours or deferred until evening. While budget travelers may find lower hotel rates, daytime activities are curtailed, and visitors must practice strict hydration and heat management.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#64748B] italic">
              Weather patterns and event calendars vary from year to year. Travelers should always check reliable short-term meteorological forecasts and the official Experience AlUla seasonal calendar for their planned dates before finalizing reservations.
            </p>
          </section>

          {/* Section 4: How to Plan Your Journey to AlUla */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              4. How to Plan Your Journey to AlUla
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Reaching AlUla has become significantly easier with expanded domestic air connectivity and upgraded highway infrastructure. Depending on your origin, several route options exist:
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Plane className="w-5 h-5 text-[#0969E8] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-[#071B49]">Flying into AlUla International Airport (ULH)</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    AlUla International Airport is located approximately 35 kilometers southeast of the city center. It receives regular domestic scheduled flights from major Saudi hubs including Riyadh (RUH) and Jeddah (JED), alongside seasonal international flights from select regional hubs such as Dubai (DXB). Flying directly into ULH saves substantial ground travel time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Car className="w-5 h-5 text-[#0969E8] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-[#071B49]">Arriving via Madinah Gateway (MED)</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Prince Mohammad bin Abdulaziz International Airport in Madinah is the nearest major international airport with extensive global connections. The road journey from Madinah to AlUla spans approximately 325 kilometers and takes roughly 3 to 4 hours along well-paved, multi-lane desert highways. This route is particularly popular for pilgrims combining Umrah with cultural exploration.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#475569]">
              You can research and compare domestic and international flight options across participating carriers by visiting our dedicated{' '}
              <button
                onClick={() => onNavigate('flights')}
                className="text-[#0969E8] hover:underline font-semibold cursor-pointer"
              >
                Travel DuurDesh Flights Page
              </button>
              . Always confirm your ground transfer arrangements and arrival airport terminal prior to booking non-refundable tours.
            </p>
          </section>

          {/* Section 5: How Many Days Should You Allow? */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              5. How Many Days Should You Allow?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Because heritage sites in AlUla are strictly timed and geographically separated by desert terrain, pacing your visit is essential. The following sample planning frameworks are illustrative examples rather than fixed itineraries:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">2 Days &bull; Express</span>
                <h3 className="font-bold text-sm text-[#071B49]">Highlights Tour</h3>
                <ul className="text-xs text-[#64748B] space-y-1.5 list-disc list-inside">
                  <li>Day 1: Guided Hegra tour; evening sunset at Elephant Rock.</li>
                  <li>Day 2: AlUla Old Town walk and Incense Road market; Dadan & Jabal Ikmah.</li>
                </ul>
                <p className="text-[11px] text-gray-500 pt-1 italic">
                  Fast-paced; requires synchronized tour bookings.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#0969E8]/30 bg-blue-50/20 space-y-2">
                <span className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">3–4 Days &bull; Recommended</span>
                <h3 className="font-bold text-sm text-[#071B49]">Balanced Cultural Journey</h3>
                <ul className="text-xs text-[#475569] space-y-1.5 list-disc list-inside">
                  <li>Day 1: Arrival, Oasis Heritage Trail stroll, Elephant Rock twilight.</li>
                  <li>Day 2: Morning Hegra tour, afternoon at AlUla Old Town & Fort.</li>
                  <li>Day 3: Dadan & Jabal Ikmah inscriptions, Harrat Viewpoint sunset.</li>
                  <li>Day 4: Stargazing in the desert or Ashar Valley cultural visit.</li>
                </ul>
                <p className="text-[11px] text-gray-500 pt-1 italic">
                  Ideal balance of depth, photography, and rest.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <span className="text-xs font-bold text-[#0969E8] uppercase tracking-wider">5+ Days &bull; Immersive</span>
                <h3 className="font-bold text-sm text-[#071B49]">Deep Exploration</h3>
                <ul className="text-xs text-[#64748B] space-y-1.5 list-disc list-inside">
                  <li>Includes all balanced cultural sites.</li>
                  <li>Desert canyon hiking, mountain biking, or ziplining.</li>
                  <li>Wellness experiences and local farm visits.</li>
                  <li>Day excursion to nearby Khaybar volcanic fields.</li>
                </ul>
                <p className="text-[11px] text-gray-500 pt-1 italic">
                  Permits unhurried discovery and creative photography.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] italic pt-1">
              Note: Sample itineraries are provided for orientation purposes. Actual availability of site tours and event programming is subject to official reservation schedules.
            </p>
          </section>

          {/* Section 6: Where to Stay in AlUla */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              6. Where to Stay in AlUla
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Accommodation options in AlUla range from luxury eco-resorts nestled against sandstone cliffs to central oasis boutique hotels and desert glamping sites. When choosing where to stay, consider the following practical factors:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="font-bold text-sm text-[#071B49]">Ashar Valley & Canyon Precincts</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Home to internationally renowned luxury resorts and tented villas set against dramatic rock faces. Offers serene desert seclusion and fine dining, but requires private vehicle transfers to reach Old Town and other heritage hubs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="font-bold text-sm text-[#071B49]">AlUla Town & Oasis Area</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Located closer to everyday amenities, local supermarkets, traditional eateries, and the AlUla Old Town market. Offers convenient walking access to the oasis and more varied accommodation price points.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="font-bold text-sm text-[#071B49]">Desert Glamping & RV Camps</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Positioned in quiet desert corridors under dark skies, ideal for stargazing enthusiasts and budget-conscious travelers seeking an authentic outdoor desert ambiance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <h3 className="font-bold text-sm text-[#071B49]">Cancellation & Booking Windows</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Due to high demand during winter festival months, accommodations often carry strict cancellation policies. Always review booking terms carefully before making non-refundable payments.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#475569]">
              To explore verified accommodation locations, neighborhood orientation, and stay considerations across Saudi Arabia and international hubs, visit our{' '}
              <button
                onClick={() => onNavigate('hotels')}
                className="text-[#0969E8] hover:underline font-semibold cursor-pointer"
              >
                Travel DuurDesh Hotels Page
              </button>
              .
            </p>
          </section>

          {/* Section 7: Getting Around and Exploring Responsibly */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              7. Getting Around and Exploring Responsibly
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Unlike compact metropolitan destinations, AlUla spans hundreds of square kilometers. Getting between your hotel, visitor centers, and natural landmarks requires planned transportation:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#071B49]">
                  <Car className="w-4 h-4 text-[#0969E8]" />
                  <span>Car Rental vs. Private Drivers</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Renting a car at AlUla International Airport provides maximum flexibility to explore at your own pace. Roads are modern, well-signposted, and illuminated along primary corridors. If you prefer not to drive, pre-arranged private drivers or hotel transfer services can be scheduled, though ride-hailing app coverage can be intermittent in remote desert pockets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#071B49]">
                  <Footprints className="w-4 h-4 text-[#0969E8]" />
                  <span>Site Shuttles and Heritage Transport</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  For ticketed heritage sites like Hegra and Dadan, visitors park at designated visitor centers (such as Winter Park) and board official transport shuttles. Follow your scheduled boarding times strictly to prevent missing booked slots.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#071B49]">
                  <ShieldCheck className="w-4 h-4 text-[#21B96F]" />
                  <span>Responsible Heritage Ethics</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  AlUla&apos;s monuments are carved into porous, fragile sandstone that has survived for over two millennia. Visitors must observe strict conservation rules: never touch carved tomb facades, never lean against ancient walls, stay strictly on designated wooden walkways, never collect stone or ceramic surface fragments, and always pack out all personal waste.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: What to Bring: AlUla Travel Packing Essentials */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              8. What to Bring: AlUla Travel Packing Essentials
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Packing for AlUla requires preparing for desert climate extremes: warm, sunny daytime excursions coupled with surprisingly cool desert nights. Essential items to include:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#475569]">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Footprints className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#071B49] block">Sturdy Walking Shoes</strong>
                  Breathable, closed-toe trail sneakers or hiking shoes suitable for loose sand, gravel, and stone steps.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Sun className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#071B49] block">Sun Protection Gear</strong>
                  Broad-spectrum high-SPF sunscreen, polarized UV sunglasses, and a wide-brim hat or desert headscarf.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Luggage className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#071B49] block">Lightweight & Warm Layers</strong>
                  Loose, modest cotton or linen daywear; a fleece, windbreaker, or warm jacket for brisk desert evenings.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Camera className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#071B49] block">Electronics & Power Bank</strong>
                  A high-capacity portable charger, international Type G plug adapter, and camera equipment with dust protection.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <FileText className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#071B49] block">Travel Documentation</strong>
                  Digital and printed copies of your passport, approved Saudi eVisa, and confirmed excursion tickets.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <Eye className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#071B49] block">Personal Medications & Hydration</strong>
                  Reusable water bottle, electrolyte sachets, lip balm with SPF, and any prescription medications.
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Culture and Responsible Travel */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              9. Culture and Responsible Travel
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Saudi Arabia is known for warm, generous hospitality (<em>karam</em>), and visitors to AlUla will encounter courteous, helpful residents and guides eager to share their regional heritage. Observing a few basic cultural courtesies ensures positive, respectful interactions:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="font-bold text-sm text-[#071B49]">Modest Dress Standards</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  While formal dress codes have relaxed for international tourists, dressing modestly in public areas remains culturally respectful and appreciated. Both men and women should wear clothing that covers shoulders and knees. Lightweight, loose-fitting trousers, long skirts, and long-sleeved shirts are comfortable in the desert heat and well-received locally.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="font-bold text-sm text-[#071B49]">Photography & Personal Privacy</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Always seek polite verbal permission before taking photographs of local people, particularly women, families, or children. Never photograph military checkpoints, government installations, or security personnel. Commercial photography and drone usage require advance permits from official authorities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <h3 className="font-bold text-sm text-[#071B49]">Respecting Daily Prayer Times</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Daily life in AlUla pauses briefly during the five daily Islamic prayer times. While many tourist restaurants and modern venues remain open, small local shops and service counters may pause for 15 to 20 minutes. Plan your daily errands and dining with this rhythm in mind.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: A Simple AlUla Trip-Planning Checklist */}
          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
                  10. A Simple AlUla Trip-Planning Checklist
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Use this interactive checklist to organize key milestones before departing on your AlUla journey.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {checklistSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-2 border-b border-[#F1F5F9] pb-2">
                    <CheckSquare className="w-4 h-4 text-[#0969E8]" />
                    <span>{section.title}</span>
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item) => {
                      const isDone = !!checkedItems[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                            isDone
                              ? 'bg-emerald-50/50 border-emerald-200 text-[#071B49]'
                              : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9]'
                          }`}
                        >
                          <button
                            type="button"
                            className="mt-0.5 text-xs focus:outline-none shrink-0"
                            aria-label={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Square className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                          <span className={`text-xs sm:text-sm leading-relaxed ${isDone ? 'line-through text-gray-500' : ''}`}>
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-400 italic pt-2">
              Checklist state is saved locally during your active browser session.
            </p>
          </section>

          {/* Section 11: Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              11. Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Common practical questions from travelers planning their first visit to AlUla.
            </p>

            <div className="space-y-3 pt-2">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-4 py-4 sm:px-5 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-[#071B49] hover:text-[#0969E8] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#0969E8] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#0969E8]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-gray-100 bg-[#F8FAFC]">
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
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              AlUla is a destination that rewards patient, thoughtful travelers. Standing before the monumental tombs of Hegra, wandering through the quiet date palms of the ancient oasis, or watching the desert sunset bathe Elephant Rock in crimson light leaves an indelible impression.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              By planning your transportation and tour reservations well in advance, respecting archaeological conservation guidelines, dressing considerately, and approaching local communities with openness, your journey through northwestern Saudi Arabia will be safe, enriching, and deeply memorable.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              We invite you to explore our comprehensive destination guides, travel tools, and flight resources across Travel DuurDesh as you prepare for your journey.
            </p>
          </section>

          {/* Related Travel DuurDesh Resources */}
          <div className="pt-8 border-t border-[#E2E8F0] space-y-4">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider font-syncopate">
              Related Travel DuurDesh Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigate('blog/travel-guides/makkah-travel-guide-first-time-visitors')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Makkah First-Timer Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Comprehensive guide for visitors to Makkah.
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
                  Practical tips, transit & respectful etiquette.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/umrah-travel/first-time-umrah-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>First-Time Umrah Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Pilgrim preparation, Nusuk permits & transit.
                </p>
              </button>

              <button
                onClick={() => onNavigate('destinations/alula')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>AlUla Destination Hub</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Detailed destination profile & highlights.
                </p>
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-syncopate">
                Plan Your Journey to AlUla with Confidence
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Compare flight routes to AlUla (ULH) and Madinah (MED), check accommodations across Saudi Arabia, and utilize our free travel tools on Travel DuurDesh.
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
                <span>Back to Travel & Food Blog &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};
