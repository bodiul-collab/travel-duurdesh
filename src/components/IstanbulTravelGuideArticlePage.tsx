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
  ChevronRight,
  Sparkles,
  CheckSquare,
  Square,
  ChevronDown,
  Sun,
  Landmark,
  Coins,
  UtensilsCrossed,
  Train,
  HeartHandshake,
  ShoppingBag,
  ExternalLink,
  Luggage,
  CalendarDays,
  FileText,
  Ship,
  MoonStar,
  Coffee,
  AlertTriangle
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, ISTANBUL_ARTICLE } from '../data/blogData';

interface IstanbulTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const IstanbulTravelGuideArticlePage: React.FC<IstanbulTravelGuideArticlePageProps> = ({
  post = ISTANBUL_ARTICLE,
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
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const checklistSections = [
    {
      title: 'Documentation & Pre-Trip Requirements',
      items: [
        {
          id: 'ist-chk-1',
          text: 'Verify passport validity (minimum 6 months from entry) and confirm official visa or e-Visa requirements via evisa.gov.tr.'
        },
        {
          id: 'ist-chk-2',
          text: 'Check museum closing days (e.g. Topkapi Palace is historically closed on Tuesdays, Grand Bazaar on Sundays).'
        },
        {
          id: 'ist-chk-3',
          text: 'Review prayer times and visitor opening hours for Hagia Sophia and the Blue Mosque to plan visits outside congregational prayers.'
        },
        {
          id: 'ist-chk-4',
          text: 'Download an offline transit map and secure an international eSIM or mobile data package for real-time navigation.'
        }
      ]
    },
    {
      title: 'Arrival & Transit Preparation',
      items: [
        {
          id: 'ist-chk-5',
          text: 'Purchase an Istanbulkart transit card at airport kiosks or Havaist bus terminals for seamless tram, metro, and ferry rides.'
        },
        {
          id: 'ist-chk-6',
          text: 'Plan your airport transfer (Havaist luxury express bus, M11 metro line from IST, or Havabus from Sabiha Gökçen SAW).'
        },
        {
          id: 'ist-chk-7',
          text: 'Withdraw a modest amount of Turkish Lira (TRY) from bank ATMs for street simit, public restrooms, and small bazaar purchases.'
        },
        {
          id: 'ist-chk-8',
          text: 'Confirm that your lodging is located near a primary transit artery (such as the T1 Tram line in Sultanahmet or Sirkeci).'
        }
      ]
    },
    {
      title: 'Cultural Etiquette & Packing Essentials',
      items: [
        {
          id: 'ist-chk-9',
          text: 'Pack modest attire covering shoulders and knees for mosque visits, along with a lightweight headscarf for women.'
        },
        {
          id: 'ist-chk-10',
          text: 'Wear slip-on walking shoes with good grip for navigating cobblestone alleys, steep hills, and frequent shoe removals at mosques.'
        },
        {
          id: 'ist-chk-11',
          text: 'Carry a compact tote bag or plastic bag for holding your shoes when exploring active places of worship.'
        },
        {
          id: 'ist-chk-12',
          text: 'Pack a European two-pin Type-C/F plug adapter and a portable power bank for long full-day walking tours.'
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Is Istanbul good for first-time visitors?',
      answer:
        'Yes. Istanbul is an exceptional destination for first-time travelers. The city combines monumental historical architecture, warm Turkish hospitality, an extensive and clean public transit network (especially the T1 tram and scenic public ferries), and a rich culinary culture. Historic districts like Sultanahmet and Sirkeci are very pedestrian-friendly, making key landmarks easy to explore together.'
    },
    {
      question: 'How many days should I spend in Istanbul?',
      answer:
        'A stay of four to five full days is ideal for a comprehensive first visit. This allows two days to explore the monumental Sultanahmet historic core (Hagia Sophia, Blue Mosque, Topkapi Palace, Basilica Cistern, Grand Bazaar), one day to discover Galata, Karaköy, Taksim, and a Bosphorus ferry ride, and one to two days to explore colorful historic quarters like Balat or cross the Bosphorus to the lively Asian shore in Kadıköy.'
    },
    {
      question: 'Is Istanbul suitable for Muslim travelers?',
      answer:
        'Istanbul is one of the world’s most rewarding destinations for Muslim travelers. With thousands of historic active mosques, prayer times echoing melodiously across the hills, and widespread availability of halal-sourced Turkish food, halal-conscious travelers will feel deeply welcomed. Historic landmarks such as Hagia Sophia and the Blue Mosque remain functioning places of worship with dedicated prayer halls and wudu facilities for believers.'
    },
    {
      question: 'Can visitors travel between the European and Asian sides?',
      answer:
        'Yes, crossing between the European and Asian shores is fast, scenic, and very affordable. Public municipal ferries operated by Şehir Hatları run continuously between European terminals (Eminönü, Karaköy, Beşiktaş) and Asian ports (Kadıköy, Üsküdar), taking just 15 to 20 minutes with stunning views of Topkapi Palace and Maiden’s Tower. Alternatively, travelers can use the subterranean Marmaray commuter train under the Bosphorus seabed in under five minutes.'
    },
    {
      question: 'What is the best area to stay in Istanbul?',
      answer:
        'The best area depends on your travel goals. For first-time visitors focused on historic landmarks within walking distance, Sultanahmet or Sirkeci is ideal. For travelers who prefer lively pedestrian streets, boutique cafes, art galleries, and scenic waterfront evening strolls, Karaköy or Galata is popular. For shopping, nightlife, and modern transit connections, Taksim and Beyoğlu are convenient. Kadıköy on the Asian side offers an authentic, relaxed local neighborhood vibe.'
    },
    {
      question: 'Do I need a visa to visit Türkiye?',
      answer:
        'Visa requirements depend entirely on your nationality and passport country. Citizens of many European nations, North America, and other regions can enter Türkiye for tourism visa-free or obtain an official Electronic Visa (e-Visa) online prior to travel. Always verify your specific entry rules through the official Republic of Türkiye Ministry of Foreign Affairs e-Visa portal (evisa.gov.tr) before booking flights.'
    },
    {
      question: 'What should I check before visiting major attractions?',
      answer:
        'Before heading out each morning, check three essential factors: weekly closing days (e.g. Topkapi Palace is closed on Tuesdays, Grand Bazaar on Sundays), daily prayer times (which temporarily pause tourist entry at Hagia Sophia and the Blue Mosque), and dress requirements for active mosques (shoulders and knees covered, headscarf for women, shoes removed).'
    }
  ];

  return (
    <article className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Accessible Breadcrumbs */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', path: 'home' },
              { label: 'Travel Guides', path: 'blog' },
              { label: 'Istanbul Travel Guide', path: 'blog/travel-guides/istanbul-travel-guide' }
            ]}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* 2. Article Header */}
      <header className="bg-white border-b border-[#E2E8F0] py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0969E8]/10 text-[#0969E8]">
                <Tag className="w-3.5 h-3.5" />
                {post.categoryName}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#5E6B82] bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#5E6B82] bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                <CalendarDays className="w-3.5 h-3.5 text-gray-500" />
                Published {post.publishedDate}
              </span>
            </div>

            {/* Exactly One H1 Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#071B49] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5E6B82] leading-relaxed">
              {post.metaDescription}
            </p>

            {/* Author Byline & Social Share */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D0E6FF]"
                />
                <div>
                  <div className="text-sm font-bold text-[#071B49]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[#5E6B82]">
                    Verified Travel Planning Guide • Destination Insights
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#F0F7FF] text-[#0969E8] hover:bg-[#EAF2FB] border border-[#D0E6FF] transition-colors cursor-pointer"
                  title="Copy canonical link to clipboard"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Guide'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Hero Photograph Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <figure className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-white">
          <img
            src={post.heroImage.url}
            alt={post.heroImage.alt}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <figcaption className="p-3 sm:p-4 text-xs text-[#5E6B82] bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-2">
            <span>{post.heroImage.caption}</span>
            <span className="text-[11px] font-mono text-[#0969E8] shrink-0 font-medium">
              Istanbul, Türkiye
            </span>
          </figcaption>
        </figure>
      </div>

      {/* 4. Quick Jump Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#F0F7FF] rounded-2xl p-5 border border-[#D0E6FF]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8] mb-3">
            <Compass className="w-4 h-4" />
            <span>Guide Contents & Quick Jump</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            <a href="#intro" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 1. Introduction to Istanbul
            </a>
            <a href="#when-to-visit" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 2. Best Time to Visit
            </a>
            <a href="#best-places" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 3. Best Places to Visit
            </a>
            <a href="#things-to-do" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 4. Things to Do
            </a>
            <a href="#muslim-travelers" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 5. Istanbul for Muslim Travelers
            </a>
            <a href="#what-to-eat" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 6. What to Eat
            </a>
            <a href="#getting-around" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 7. Getting Around Istanbul
            </a>
            <a href="#where-to-stay" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 8. Where to Stay
            </a>
            <a href="#itinerary" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 9. Suggested 3-Day Itinerary
            </a>
            <a href="#practical-tips" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 10. Practical Travel Tips
            </a>
            <a href="#mistakes" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 11. Common Mistakes to Avoid
            </a>
            <a href="#checklist" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 12. Trip Planning Checklist
            </a>
            <a href="#faqs" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 13. Frequently Asked Questions
            </a>
            <a href="#conclusion" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • Conclusion & Next Steps
            </a>
          </div>
        </div>
      </div>

      {/* 5. Main Article Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Section 1: Introduction to Istanbul */}
        <section id="intro" className="prose max-w-none text-[#101C36] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#0969E8]" />
            <span>1. Introduction to Istanbul: Where Continents Converge</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#334155]">
            Few cities on Earth capture the imagination quite like Istanbul. Straddling the sparkling blue waters of the Bosphorus strait, this historic metropolis occupies an extraordinary geographic position connecting Europe and Asia. Over its more than two-and-a-half millennia of documented history, the city has stood as the imperial capital of the Roman, Byzantine, Latin, and Ottoman empires—a lineage that has endowed Istanbul with monumental domed architecture, imperial palaces, subterranean cisterns, and vibrant bazaar quarters.
          </p>
          <p className="text-base leading-relaxed text-[#334155]">
            Today, Istanbul is a thriving city of more than 15 million residents where traditional Ottoman tea gardens and historic calligraphic mosques sit harmoniously beside lively contemporary art spaces, scenic waterfront promenades, and bustling transit corridors. Because the city spans two continents, hilly terrain, and numerous distinct neighborhoods, planning your visit with realistic expectations regarding walking distances, transport choices, and opening schedules is essential for a rewarding trip.
          </p>
        </section>

        {/* Section 2: Best Time to Visit Istanbul */}
        <section id="when-to-visit" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Sun className="w-6 h-6 text-[#0969E8]" />
            <span>2. Best Time to Visit Istanbul</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Istanbul experiences four distinct seasons shaped by both Mediterranean and Black Sea climatic influences. Understanding general seasonal patterns helps you pack appropriately and plan around crowds:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Spring (April to May)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Widely considered an ideal travel window. Temperatures are comfortably warm, city parks bloom with millions of colorful tulips during the annual Tulip Festival in April, and outdoor walking tours along the Bosphorus are exceptionally pleasant before peak summer heat arrives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Summer (June to August)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Characterized by warm sunshine, lively evening waterfronts, and extended daylight. Sightseeing lines at major Sultanahmet monuments are at their longest, and humidity can rise. Early morning touring and evening ferry crossings are ideal strategies during summer.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Autumn (September to November)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Another favorite season for travelers. September and October offer crisp, clear skies, pleasant daytime walking conditions, and tapering visitor numbers after school holidays conclude. Occasional autumn rains begin toward November.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Winter (December to March)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Cooler, crisper days with occasional rain or picturesque snow flurries. Hotel rates are competitive, and indoor heritage sites, palace chambers, and historic hamams can be enjoyed with significantly shorter queues and an authentic local atmosphere.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Best Places to Visit in Istanbul */}
        <section id="best-places" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Landmark className="w-6 h-6 text-[#0969E8]" />
            <span>3. Best Places to Visit in Istanbul</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Istanbul’s most iconic attractions span centuries of Roman, Byzantine, and Ottoman civilization. Keep in mind that visiting regulations, ticket pricing, and visitor routes can evolve, so always consult official operator notices before your visit.
          </p>

          {/* Hagia Sophia */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Hagia Sophia (Ayasofya-i Kebir Cami-i Şerifi)
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Commissioned by Byzantine Emperor Justinian I in 537 AD and converted into an imperial mosque by Sultan Mehmed II following the conquest of Constantinople in 1453, Hagia Sophia is a masterpiece of world architectural history. Its soaring central dome, supported by massive pendentive arches, stood as the largest cathedral in the world for nearly a thousand years. Today, Hagia Sophia operates as an active place of worship with separate visitor corridors. Non-worshipping international tourists enter through dedicated galleries where upper-level mosaics and calligraphic medallions can be observed with respectful decorum.
            </p>
          </div>

          {/* The Blue Mosque */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The Blue Mosque (Sultan Ahmed Mosque)
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Facing Hagia Sophia across a park of fountains and flowerbeds, the Sultan Ahmed Mosque is renowned for its graceful cascade of domes and six slender minarets. Inside, the mosque’s upper walls and high dome ceilings are lined with more than 20,000 handmade Iznik ceramic tiles depicting traditional floral patterns, which give the landmark its popular nickname. As an active, functioning mosque, tourist entry pauses during the five daily congregational prayers, and all visitors must observe modest clothing standards and remove their shoes at the entrance.
            </p>
          </div>

          {/* Topkapi Palace */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Topkapi Palace (Topkapı Sarayı)
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              For nearly four centuries, Topkapi Palace served as the primary administrative headquarters and imperial residence of the Ottoman sultans. Perched on Seraglio Point overlooking the Bosphorus, Golden Horn, and Sea of Marmara, the complex encompasses four sprawling ceremonial courtyards, the Imperial Council chamber, the private Imperial Harem with exquisite Iznik tilework, and the Sacred Relics pavilion housing revered historical items. Allocate at least 2.5 to 3 hours to tour the palace pavilions, and note that Topkapi Palace is historically closed to visitors on Tuesdays.
            </p>
          </div>

          {/* Basilica Cistern */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Basilica Cistern (Yerebatan Sarnıcı)
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Descend beneath the streets of Sultanahmet into the Basilica Cistern, an extraordinary 6th-century underground reservoir constructed during the reign of Emperor Justinian to provide filtered water for the Great Palace of Constantinople. Supported by a forest of 336 marble columns salvaged from classical Roman temples, the cistern features elevated wooden walkways, atmospheric mood lighting, and two mysterious carved stone Medusa heads positioned at the bases of northwest columns.
            </p>
          </div>

          {/* Grand Bazaar */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The Grand Bazaar (Kapalıçarşı)
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Established in 1461 shortly after the Ottoman conquest, the Grand Bazaar is one of the oldest and largest covered trading complexes in the world. Spanning more than 60 covered labyrinthine streets and thousands of shops, it is a sensory wonderland filled with hand-woven Turkish carpets, ceramic tableware, hand-beaten copperware, leather goods, and gold jewelry. Bargaining is conducted in a courteous, conversational manner over small tulip-shaped glasses of hot tea. Note that the Grand Bazaar is closed on Sundays.
            </p>
          </div>

          {/* Spice Bazaar */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The Spice Bazaar (Mısır Çarşısı)
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Located in the Eminönü waterfront district next to the New Mosque (Yeni Cami), the Spice Bazaar—historically funded by revenues from Ottoman Egypt—is smaller and more fragrant than the Grand Bazaar. Its L-shaped vaulted corridors brim with vibrant mounds of sumac, saffron, and paprika, alongside Turkish delight (lokum), herbal tisanes, dried figs, and roasted nuts. Friendly shopkeepers often offer samples to help you choose gifts to take home.
            </p>
          </div>

          {/* Galata Tower */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Galata Tower & Karaköy
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Constructed in 1348 as the Tower of Christ by Genoese merchants, Galata Tower stands prominently atop the northern hill overlooking the Golden Horn. Its upper observation deck offers breathtaking 360-degree panoramic vistas across the historic peninsula, the Bosphorus, and modern Istanbul. The surrounding Galata and Karaköy quarters are characterized by steep, winding cobblestone streets lined with artisan coffee roasters, vintage clothing boutiques, independent bookstores, and art studios.
            </p>
          </div>

          {/* Bosphorus Waterfront */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The Bosphorus Waterfront & Ferry Routes
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              The Bosphorus is the lifeblood of Istanbul, an international maritime strait separating European Thrace from Asian Anatolia. Rather than expensive private tour boats, one of the most rewarding experiences is boarding a municipal public ferry (Şehir Hatları) from Eminönü or Karaköy across to Kadıköy or Üsküdar on the Asian shore. As seagulls trail the wake, travelers enjoy unobstructed views of Topkapi Palace, Dolmabahçe Palace, and the iconic Maiden’s Tower (Kız Kulesi).
            </p>
          </div>

          {/* Istiklal Avenue & Taksim Square */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Istiklal Avenue & Taksim Square
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Istiklal Avenue (İstiklal Caddesi) is Istanbul’s premier pedestrian boulevard, stretching 1.4 kilometers from Taksim Square down toward Galata. Traversed by the charming red historic nostalgic tramway, this lively thoroughfare is lined with late-Ottoman neoclassical facades, covered shopping arcades (such as Çiçek Pasajı), international retail flagships, street musicians, and traditional Turkish dessert parlors.
            </p>
          </div>

          {/* Balat and Fener */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Balat and Fener Historic Neighborhoods
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Located along the banks of the Golden Horn, the historic districts of Fener (historically Greek) and Balat (historically Jewish) offer a quieter, deeply photogenic look into Istanbul’s multicultural heritage. Renowned for their pastel-painted wooden Ottoman townhouses, steep stepped alleys, antique markets, and the red-brick Ecumenical Patriarchate of Constantinople, these bohemian quarters are ideal for unhurried morning walks.
            </p>
          </div>
        </section>

        {/* Section 4: Things to Do in Istanbul */}
        <section id="things-to-do" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Ship className="w-6 h-6 text-[#0969E8]" />
            <span>4. Memorable Things to Do in Istanbul</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Beyond visiting famous museums, Istanbul invites visitors to immerse themselves in simple, rewarding daily rituals:
          </p>
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">Cross Continents by Public Ferry:</span> Board a commuter ferry from Eminönü to Kadıköy around sunset with an Istanbulkart. Sip Turkish tea from the onboard cart while watching the sun dip behind the historic Sultanahmet minarets.
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">Experience Traditional Turkish Tea & Coffee Rituals:</span> Relax at an open-air çay bahçesi (tea garden) under plane trees in Gülhane Park or along the Bosphorus waterfront in Ortaköy, enjoying freshly brewed black tea in tulip glasses or frothy, slow-simmered Turkish coffee.
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">Stroll Across Galata Bridge at Dusk:</span> Walk between Karaköy and Eminönü along the lower and upper decks of the historic Galata Bridge, observing local fishermen casting lines into the Golden Horn against the backdrop of the illuminated Süleymaniye Mosque.
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">Discover the Asian Shore (Kadıköy & Moda):</span> Take a ferry to Kadıköy to explore its bustling fish market, pedestrian shopping lanes, and the laid-back residential waterfront promenade of Moda.
            </div>
          </div>
        </section>

        {/* Section 5: Istanbul for Muslim Travelers */}
        <section id="muslim-travelers" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <MoonStar className="w-6 h-6 text-[#0969E8]" />
            <span>5. Istanbul for Muslim Travelers</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            With more than 3,000 active mosques and a centuries-old Islamic heritage, Istanbul is exceptionally hospitable and convenient for Muslim travelers. However, keeping practical considerations in mind ensures a smooth, respectful trip:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs text-[#334155]">
              <div className="font-bold text-[#071B49] text-sm">Abundant Mosques & Prayer Facilities</div>
              <p>
                The call to prayer (Adhan) echoes across every neighborhood five times daily. Historic masterpieces like the Süleymaniye Mosque, Fatih Mosque, and Eyüp Sultan Mosque—one of the oldest and most spiritually revered shrines in Istanbul—welcome worshippers for daily prayers. Clean wudu (ablution) facilities are located in all mosque courtyards.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs text-[#334155]">
              <div className="font-bold text-[#071B49] text-sm">Navigating Halal Food Options</div>
              <p>
                The overwhelming majority of meat (lamb, beef, and poultry) served across Istanbul restaurants, kebab houses, and street stalls is sourced from halal-slaughtered domestic livestock. However, because Istanbul is a cosmopolitan global city, some restaurants serve alcohol or pork products. Muslim travelers seeking strictly alcohol-free dining should look for family-oriented lokantas (traditional home-style cafeterias) or inquire directly with restaurant staff about halal meat certification and preparation methods.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs text-[#334155]">
              <div className="font-bold text-[#071B49] text-sm">Mosque Dress Codes & Etiquette</div>
              <p>
                Modest attire is strictly enforced when entering active mosques. Both men and women must cover their shoulders and knees. Women must cover their hair, neck, and chest with a headscarf, and wear loose-fitting clothing. At major mosques like Hagia Sophia and the Blue Mosque, wrap-around skirts and scarves are provided at visitor desks. Shoes must be removed before stepping onto carpeted prayer areas.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: What to Eat in Istanbul */}
        <section id="what-to-eat" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-[#0969E8]" />
            <span>6. What to Eat in Istanbul: Turkish Culinary Traditions</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Turkish cuisine is celebrated worldwide for its fresh ingredients, fragrant regional spices, and centuries of Ottoman imperial refinement. Essential dishes to savor include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs">
              <span className="font-bold text-[#071B49] text-sm">Simit (Sesame Bread Ring)</span>
              <p className="text-[#5E6B82]">
                Crisp on the outside, chewy on the inside, and heavily coated in toasted sesame seeds. Sold from distinctive glass-windowed red carts across the city, it is the classic breakfast on the go, often enjoyed with cream cheese or tea.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs">
              <span className="font-bold text-[#071B49] text-sm">Pide (Turkish Flatbread)</span>
              <p className="text-[#5E6B82]">
                Boat-shaped flatbread baked in wood-fired stone ovens, generously topped with spiced minced lamb (kıymalı), melted cheese (kaşarlı), or sucuk (spicy garlic beef sausage).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs">
              <span className="font-bold text-[#071B49] text-sm">Kebabs & Meze Platters</span>
              <p className="text-[#5E6B82]">
                From spicy hand-minced Adana kebabs grilled over charcoal skewers to tender İskender kebabs served over sliced pide bread with hot melted sheep’s butter and tomato sauce, accompanied by cool yogurt and eggplant mezes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs">
              <span className="font-bold text-[#071B49] text-sm">Traditional Turkish Breakfast (Serpme Kahvaltı)</span>
              <p className="text-[#5E6B82]">
                A feast of small ceramic dishes containing various sheep and goat cheeses, black and green olives, fresh tomatoes, cucumbers, clotted cream (kaymak) drizzled with honeycomb, and hot scrambled eggs with spiced tomatoes (menemen).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs">
              <span className="font-bold text-[#071B49] text-sm">Baklava & Turkish Delight (Lokum)</span>
              <p className="text-[#5E6B82]">
                Paper-thin layers of hand-rolled phyllo dough packed with vibrant green Gaziantep pistachios and soaked in light sugar syrup, paired with artisanal fruit, rosewater, and hazelnut Turkish delight.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 text-xs">
              <span className="font-bold text-[#071B49] text-sm">Turkish Tea (Çay) & Coffee</span>
              <p className="text-[#5E6B82]">
                Strong black tea brewed in stacked double teapots (çaydanlık) served in clear glass cups, and traditional finely ground, unfiltered Turkish coffee cooked slowly in copper cezve pots.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('food')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#F0F7FF] text-[#0969E8] hover:bg-[#EAF2FB] border border-[#D0E6FF] transition-colors cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Explore Global Food & Culinary Features on TravelDuurDesh</span>
            </button>
          </div>
        </section>

        {/* Section 7: Getting Around Istanbul */}
        <section id="getting-around" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Train className="w-6 h-6 text-[#0969E8]" />
            <span>7. Getting Around Istanbul: Transit & Transportation</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Because Istanbul spans two continents and features dense urban traffic, utilizing the city’s modern rail, tram, and ferry network is significantly faster and less stressful than sitting in highway taxis:
          </p>

          <ul className="space-y-2 text-sm text-[#334155] list-disc list-inside">
            <li>
              <strong>T1 Tramway Line:</strong> The single most valuable line for tourists, connecting Sultanahmet (Hagia Sophia/Blue Mosque) directly to Sirkeci, the Eminönü ferry docks, and across the Galata Bridge to Karaköy and Kabataş.
            </li>
            <li>
              <strong>The Istanbul Metro (M2 Line):</strong> Links the historic city northward from the Golden Horn bridge through Taksim Square and the modern business districts of Şişli and Levent.
            </li>
            <li>
              <strong>Marmaray Commuter Rail:</strong> An engineering triumph traveling through a subterranean tunnel beneath the Bosphorus seabed, whisking passengers from Sirkeci on the European side to Üsküdar on the Asian side in under 5 minutes.
            </li>
            <li>
              <strong>Public Passenger Ferries (Şehir Hatları):</strong> Reliable, breezy, and scenic municipal ferries linking European and Asian terminals across the Bosphorus and Golden Horn.
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
            <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-[#0969E8]" />
              <span>The Istanbulkart Transit Card</span>
            </div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              To travel seamlessly across all municipal buses, trams, metros, funiculars, and public ferries, purchase an <strong>Istanbulkart</strong> from automated yellow-and-blue vending machines at airport terminals, major metro stations, and ferry docks. You can load funds with credit cards or cash and tap the card at turnstiles. Official fares and card terms are updated periodically by Metro Istanbul and IETT, so verify current rates upon arrival.
            </p>
          </div>
        </section>

        {/* Section 8: Where to Stay */}
        <section id="where-to-stay" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-[#0969E8]" />
            <span>8. Where to Stay in Istanbul</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Choosing where to base yourself in Istanbul depends on your sightseeing priorities, mobility, and preference for historic quiet versus bustling evening dining:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">Sultanahmet (Historic Peninsula)</h3>
              <p className="text-xs text-[#5E6B82]">
                Unbeatable for first-time visitors who want to walk to Hagia Sophia, the Blue Mosque, Topkapi Palace, and Basilica Cistern in minutes. Evenings are quiet and peaceful once day tourists depart.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">Sirkeci and Eminönü</h3>
              <p className="text-xs text-[#5E6B82]">
                Superbly strategic transit hubs sitting at the nexus of the T1 tramway, the Marmaray trans-continental rail, and primary Bosphorus ferry terminals, offering varied mid-range hotels.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">Karaköy and Galata</h3>
              <p className="text-xs text-[#5E6B82]">
                Trendy, artistic waterfront quarters filled with boutique design hotels, specialty coffee bars, and independent boutiques, just across the bridge from the historic peninsula.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">Taksim and Beyoğlu</h3>
              <p className="text-xs text-[#5E6B82]">
                The heart of modern retail, live theater, and evening strolls along Istiklal Avenue, with direct M2 metro connections across the city and airport express shuttles.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('hotels')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#F0F7FF] text-[#0969E8] hover:bg-[#EAF2FB] border border-[#D0E6FF] transition-colors cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Explore Central Istanbul Neighborhoods on TravelDuurDesh Hotels Page</span>
            </button>
          </div>
        </section>

        {/* Section 9: Suggested 3-Day Itinerary */}
        <section id="itinerary" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Compass className="w-6 h-6 text-[#0969E8]" />
            <span>9. Suggested 3-Day Istanbul Itinerary</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            This flexible 3-day itinerary groups neighboring attractions together to eliminate backtracking. Adjust timings according to current opening schedules, prayer times, and weather conditions:
          </p>

          <div className="space-y-4 pt-2">
            {/* Day 1 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0969E8] bg-[#F0F7FF] px-2.5 py-1 rounded-md">
                  Day 1
                </span>
                <span className="text-xs text-gray-500 font-medium">Sultanahmet Historic Heart</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                Hagia Sophia, Blue Mosque, Basilica Cistern & Topkapi Palace
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Start early at Hagia Sophia to admire its Byzantine dome and Ottoman calligraphy before crowds peak. Next, cross Sultanahmet Square to explore the Blue Mosque and stroll the ancient Roman Hippodrome. In the afternoon, descend into the illuminated Basilica Cistern before touring the courtyards and Imperial Harem of Topkapi Palace. Conclude with a traditional Turkish dinner in a peaceful Sultanahmet courtyard.
              </p>
            </div>

            {/* Day 2 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0969E8] bg-[#F0F7FF] px-2.5 py-1 rounded-md">
                  Day 2
                </span>
                <span className="text-xs text-gray-500 font-medium">Bazaars, Galata & Bosphorus Ferry</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                Grand Bazaar, Spice Market, Galata Tower & Waterfront Crossing
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Spend your morning navigating the historic covered corridors of the Grand Bazaar, shopping for ceramics, carpets, and spices. Walk down the hill toward Eminönü to visit the Spice Bazaar. Next, cross Galata Bridge into Karaköy and climb to the top of Galata Tower for 360-degree city views. In the late afternoon, take a scenic municipal ferry across the Bosphorus to Kadıköy for dinner and sunset views along the water.
              </p>
            </div>

            {/* Day 3 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0969E8] bg-[#F0F7FF] px-2.5 py-1 rounded-md">
                  Day 3
                </span>
                <span className="text-xs text-gray-500 font-medium">Historic Quarters or Modern Beyoğlu</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                Balat & Fener Wooden Houses or Istiklal Avenue & Taksim
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Choose between exploring the historic colorful wooden townhouses and antique cafes of Balat and Fener along the Golden Horn, or wandering the lively pedestrian avenues of Istiklal Street and Taksim Square. In the afternoon, visit the monumental Süleymaniye Mosque for sweeping views over the Golden Horn before enjoying a farewell Turkish coffee and sweet baklava.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Practical Istanbul Travel Tips */}
        <section id="practical-tips" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Coins className="w-6 h-6 text-[#0969E8]" />
            <span>10. Practical Istanbul Travel Tips</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Keep these practical urban travel tips in mind for a stress-free stay:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Currency & Payments (TRY)</div>
              <p className="text-[#5E6B82]">
                The local currency is the Turkish Lira (TRY). Credit and debit cards are widely accepted at hotels, restaurants, and shops. However, keeping small cash notes is essential for street simit, public restrooms, and tipping.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Useful Turkish Phrases</div>
              <p className="text-[#5E6B82]">
                Learning a few polite words goes a long way: <em>Merhaba</em> (Hello), <em>Lütfen</em> (Please), <em>Teşekkür ederim</em> (Thank you), and <em>Kolay gelsin</em> (May your work be easy—used when greeting shopkeepers).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Mobile Connectivity</div>
              <p className="text-[#5E6B82]">
                Prepaid tourist SIM cards are sold at Istanbul Airport (IST) and Sabiha Gökçen (SAW) by Turkcell, Vodafone, and Türk Telekom. Alternatively, digital travelers can install an international eSIM before arriving.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Urban Safety & Taxi Precautions</div>
              <p className="text-[#5E6B82]">
                Istanbul is generally safe, but standard city precautions apply. When hailing yellow taxis, ensure the taximeter (taksimetre) is turned on immediately, or utilize official ride-hailing apps (like BiTaksi or Uber) to prevent fare disputes.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('tools')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#F0F7FF] text-[#0969E8] hover:bg-[#EAF2FB] border border-[#D0E6FF] transition-colors cursor-pointer"
            >
              <Coins className="w-3.5 h-3.5" />
              <span>Use Free Currency Converter (USD / TRY) on Travel Tools Page</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('flights')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#F0F7FF] text-[#0969E8] hover:bg-[#EAF2FB] border border-[#D0E6FF] transition-colors cursor-pointer"
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Compare Flights to Istanbul (IST / SAW)</span>
            </button>
          </div>
        </section>

        {/* Section 11: Common Mistakes to Avoid */}
        <section id="mistakes" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-[#0969E8]" />
            <span>11. Common Mistakes to Avoid in Istanbul</span>
          </h2>
          <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#334155]">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
              <div>
                <strong>Overpacking Your Daily Itinerary:</strong> Trying to cover four major monuments across both sides of the Bosphorus in a single afternoon leads to exhaustion. Group sites logically by area and allow time for spontaneous tea pauses.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
              <div>
                <strong>Underestimating Traffic & Walking Distances:</strong> Istanbul’s bridge crossings and highway corridors experience heavy peak-hour vehicle congestion. Always prioritize rail trams, the metro, and public ferries over street taxis.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
              <div>
                <strong>Assuming Every Site Is Open Daily:</strong> Not all heritage attractions share the same operating schedule. Topkapi Palace is closed Tuesdays, the Grand Bazaar is closed Sundays, and active mosques pause tourist entry during prayer calls.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
              <div>
                <strong>Exchanging Money at Airport Arrival Desks:</strong> Airport foreign exchange kiosks frequently charge wide spreads and high commission fees. Withdraw small amounts from major bank ATMs or exchange cash in the central city.
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Interactive Trip Planning Checklist */}
        <section id="checklist" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight flex items-center gap-2">
              <CheckSquare className="w-6 h-6 text-[#0969E8]" />
              <span>12. Istanbul Trip Planning Checklist</span>
            </h2>
            <span className="text-xs font-semibold text-[#0969E8] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D0E6FF] self-start sm:self-auto">
              Interactive Preparation Tool
            </span>
          </div>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Keep track of your pre-trip preparations by checking off the essential milestones below:
          </p>

          <div className="space-y-6 pt-2">
            {checklistSections.map((sec, secIdx) => (
              <div key={secIdx} className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-xs space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#071B49] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0969E8] text-white flex items-center justify-center text-xs">
                    {secIdx + 1}
                  </span>
                  <span>{sec.title}</span>
                </h3>
                <div className="space-y-2.5">
                  {sec.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleCheck(item.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                          isChecked
                            ? 'bg-[#F0F7FF] border-[#0969E8]/40 text-[#0969E8]'
                            : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#0969E8]/40 text-[#334155]'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-[#0969E8]" />
                          ) : (
                            <Square className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'line-through text-[#0969E8]/80 font-medium' : ''}`}>
                          {item.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 13: Frequently Asked Questions */}
        <section id="faqs" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#0969E8]" />
            <span>13. Frequently Asked Questions About Istanbul</span>
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Essential traveler answers to common planning questions regarding trips to Istanbul:
          </p>

          <div className="space-y-3 pt-2">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#071B49]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0969E8] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#334155] leading-relaxed border-t border-[#E2E8F0] pt-3 bg-[#F8FAFC]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 14: Conclusion & Related Guides */}
        <section id="conclusion" className="space-y-6 pt-4">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#071B49] via-[#09357A] to-[#0969E8] text-white space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Experience Istanbul Responsibly</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              A City That Rewards Thoughtful Planning & Curiosity
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
              From the spiritual peace of Ottoman courtyards and the acoustic splendor of Hagia Sophia to the breezy joy of a sunset Bosphorus ferry ride, Istanbul offers memories that linger for a lifetime. Thoughtful planning, respectful cultural awareness, and comfortable footwear unlock this incredible crossroads of civilizations. Explore our additional TravelDuurDesh destination guides and travel tools to continue organizing your journeys.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('destinations/istanbul')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#071B49] hover:bg-[#F0F7FF] transition-colors cursor-pointer shadow-sm"
              >
                View Istanbul Destination Hub
              </button>
              <button
                type="button"
                onClick={() => onNavigate('flights')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors cursor-pointer"
              >
                Search Flights to Istanbul
              </button>
              <button
                type="button"
                onClick={() => onNavigate('tools')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors cursor-pointer"
              >
                Currency Converter (TRY)
              </button>
              <button
                type="button"
                onClick={() => onNavigate('blog')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors cursor-pointer"
              >
                Browse All Travel Guides
              </button>
            </div>
          </div>

          {/* Related Articles Grid */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#0969E8]" />
              <span>Related TravelDuurDesh Destination Guides</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/london-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Travel Guide
                </div>
                <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2">
                  London Travel Guide: Best Places to Visit and How to Plan Your Trip
                </div>
                <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                  <span>19 min read</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/dubai-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Travel Guide
                </div>
                <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2">
                  Dubai Travel Guide: Best Places to Visit and How to Plan Your Trip
                </div>
                <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                  <span>17 min read</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/kuala-lumpur-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Travel Guide
                </div>
                <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2">
                  Kuala Lumpur Travel Guide: Best Places to Visit and How to Plan Your Trip
                </div>
                <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                  <span>18 min read</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};
