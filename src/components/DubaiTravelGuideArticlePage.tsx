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
  Landmark,
  Coins,
  UtensilsCrossed,
  Train,
  ShieldAlert,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, DUBAI_ARTICLE } from '../data/blogData';

interface DubaiTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const DubaiTravelGuideArticlePage: React.FC<DubaiTravelGuideArticlePageProps> = ({
  post = DUBAI_ARTICLE,
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
        { id: 'dubai-chk-1', text: 'Confirm passport validity (at least 6 months from entry date) and verify whether your nationality receives visa-on-arrival or requires an advance UAE eVisa' },
        { id: 'dubai-chk-2', text: 'Book advance timed-entry tickets for top attractions like the Burj Khalifa At The Top observation deck and the Museum of the Future to secure preferred slots' },
        { id: 'dubai-chk-3', text: 'Purchase international travel medical insurance that covers emergency hospital care and trip interruption' },
        { id: 'dubai-chk-4', text: 'Check prescription medication guidelines via the UAE Ministry of Health portal to ensure personal pharmaceuticals comply with local regulations' },
        { id: 'dubai-chk-5', text: 'Notify your bank of upcoming travel in the UAE and ensure debit or credit cards have international transactions enabled' }
      ]
    },
    {
      title: 'Arrival & Getting Around',
      items: [
        { id: 'dubai-chk-6', text: 'Pick up an RTA Silver Nol Card at Dubai International Airport (DXB) Metro stations for effortless, cashless metro, bus, and tram travel' },
        { id: 'dubai-chk-7', text: 'Activate an international eSIM or obtain a local tourist SIM card (available at airport customs and telecommunication kiosks)' },
        { id: 'dubai-chk-8', text: 'Download essential local mobile applications: Careem (for taxis and ride-hailing), S’hail (official RTA public transit journey planner), and Google Maps' },
        { id: 'dubai-chk-9', text: 'Exchange or withdraw a modest amount of UAE Dirhams (AED) for small market purchases, abras, and local food stalls, though cards are universally accepted elsewhere' }
      ]
    },
    {
      title: 'Daily Etiquette & Comfortable Exploration',
      items: [
        { id: 'dubai-chk-10', text: 'Dress respectfully in public shopping centers, government buildings, and historic districts by keeping shoulders and knees covered' },
        { id: 'dubai-chk-11', text: 'Carry high-SPF sunscreen, sunglasses, and a refillable water bottle or hydration pack, particularly when walking between outdoor attractions' },
        { id: 'dubai-chk-12', text: 'Carry a UK Type-G 3-pin power adapter with built-in surge protection for charging electronic devices at your hotel' }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Is Dubai expensive for tourists to visit?',
      answer: 'Dubai has a reputation for luxury, but it can accommodate virtually any travel budget. Luxury visitors can spend thousands on five-star suites and Michelin-star dining, while budget travelers can comfortably visit by staying in well-connected neighborhoods like Deira or Bur Dubai, riding the clean and affordable Dubai Metro, eating delicious authentic meals in neighborhood cafeterias ($5 to $10 per meal), and enjoying free public beaches and heritage areas.'
    },
    {
      question: 'How many days are ideal for a first-time trip to Dubai?',
      answer: 'A duration of 4 to 5 full days is ideal for first-time visitors. This allows you to explore Downtown Dubai and Burj Khalifa, spend a morning in Old Dubai and its historic souks, relax at JBR or Kite Beach, take an evening desert safari, and explore modern architectural landmarks like the Museum of the Future and Palm Jumeirah without feeling rushed.'
    },
    {
      question: 'Do tourists need a visa to enter Dubai?',
      answer: 'Citizens of more than 70 nations—including the United States, Canada, the United Kingdom, European Union countries, Australia, Japan, and GCC member states—receive a free 30-day or 90-day visa on arrival at UAE airports. Citizens of other countries must obtain a pre-arranged UAE tourist visa through airlines, licensed tour operators, or official government immigration portals before traveling.'
    },
    {
      question: 'What is the dress code for tourists in Dubai?',
      answer: 'Dubai is cosmopolitan and welcoming, but cultural respect is expected. At hotel pools, private beach clubs, and waterparks, standard swimwear is completely acceptable. In public spaces such as shopping malls, restaurants, city streets, and historic quarters, modest clothing covering shoulders and knees is recommended. When visiting religious sites like Jumeirah Mosque, women must cover their hair, arms, and legs, and men should wear long trousers.'
    },
    {
      question: 'Can tourists easily use the Dubai Metro?',
      answer: 'Yes, the Dubai Metro is one of the world’s most modern, clean, and punctual driverless rail networks. It connects Dubai International Airport (DXB) directly to Downtown Dubai, Burj Khalifa, Business Bay, Dubai Marina, and Expo City. Tourists can buy a reloadable Silver Nol Card or single-day Red Ticket at any station. Trains feature air conditioning, free Wi-Fi, dedicated women-and-children cabins, and Gold Class carriages.'
    },
    {
      question: 'Is Dubai safe for solo travelers and families?',
      answer: 'Dubai consistently ranks among the top five safest cities globally in international safety indexes. Violent crime and petty theft are exceedingly rare due to strict law enforcement and advanced city infrastructure. Solo female travelers, families with young children, and older adults can move around the city at all hours of day and night with peace of mind.'
    },
    {
      question: 'When is the best time of year to visit Dubai?',
      answer: 'The best months to visit are from November through March, when daytime temperatures hover pleasantly between 22°C and 28°C (72°F to 82°F) with virtually no humidity, making it ideal for outdoor sightseeing, beach visits, and desert excursions. The shoulder months of April and October are warmer but manageable, while the summer months (June to September) experience extreme desert heat best suited for indoor entertainment, waterparks, and air-conditioned shopping.'
    },
    {
      question: 'Can Dubai be combined with a trip to Abu Dhabi or Umrah in Saudi Arabia?',
      answer: 'Absolutely. Abu Dhabi is only a 75- to 90-minute drive from Dubai via the E11 highway, making it an easy day trip to see the Sheikh Zayed Grand Mosque and Louvre Abu Dhabi. Furthermore, Dubai has frequent daily flights to Jeddah (JED) and Madinah (MED), allowing pilgrims to easily combine a family leisure trip in the UAE with an Umrah pilgrimage in Saudi Arabia.'
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
              { label: 'Dubai Travel Guide: Best Places to Visit and How to Plan Your Trip' }
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
            Dubai Travel Guide: Best Places to Visit and How to Plan Your Trip
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-normal">
            Plan your Dubai trip with this practical travel guide covering famous attractions, historic neighborhoods, local culture, transportation, budgeting, and itinerary tips.
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

          {/* Introduction: Discover Dubai */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              Introduction: Discover Dubai
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Rising dramatically from the golden sands of the Arabian Desert along the warm turquoise waters of the Arabian Gulf, Dubai is a city of remarkable transformation. In just a few decades, this former pearling and seafaring outpost in the United Arab Emirates has evolved into one of the planet&apos;s most influential global hubs—a magnet for cutting-edge architecture, visionary commerce, and multicultural community life.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              What makes Dubai so compelling to international visitors is its multi-layered identity. The city offers vastly different adventures for different travel styles. Families appreciate world-class theme parks, pristine public beaches, and pedestrian-friendly waterfronts; couples and solo explorers discover world-renowned culinary innovation and rooftop skylines; architecture and design lovers marvel at gravity-defying feats of civil engineering; while cultural travelers uncover rich seafaring heritage, traditional souks, and authentic Arabian hospitality along historic Dubai Creek.
            </p>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
              <div className="flex items-center gap-2 text-[#0969E8] font-bold text-xs uppercase tracking-wider">
                <Info className="w-4 h-4 shrink-0" />
                <span>Setting Realistic Travel Expectations</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A rewarding Dubai journey begins with grounded expectations. While social media often highlights ultra-luxury supercars and VIP desert resorts, Dubai is also a functioning, highly livable metropolis accessible to sensible, value-focused travelers. Real-world costs, seasonal weather extremes, attraction crowds, and transit times vary significantly depending on whether you visit during the cool winter peak (November to March) or the blistering summer months (June to September). Planning your district routing and pacing your days makes all the difference.
              </p>
            </div>
          </section>

          {/* Section 1: Why Visit Dubai? */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              1. Why Visit Dubai?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dubai caters to a broad spectrum of traveler interests rather than a single monolithic tourist profile. Whether you are planning a fast 48-hour stopover between Europe and Asia or an immersive week-long family vacation, the primary reasons travelers choose Dubai include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Building2 className="w-4 h-4 text-[#0969E8]" />
                  <span>Modern Architecture & City Views</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Home to the world&apos;s tallest tower, the Burj Khalifa, the sail-shaped Burj Al Arab, and the torus-shaped Museum of the Future, Dubai is an outdoor gallery of boundary-pushing contemporary engineering.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Landmark className="w-4 h-4 text-[#0969E8]" />
                  <span>Historic Neighborhoods & Dubai Creek</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Old Dubai preserves coral-stone wind-tower houses in the Al Fahidi Historical Neighbourhood, bustling spice and gold souks, and wooden abras that ferry travelers across the creek for just 1 AED.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Sun className="w-4 h-4 text-[#0969E8]" />
                  <span>Beaches & Waterfront Promenades</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Kilometers of pristine public sands along Kite Beach, JBR Beach, and Dubai Marina offer gentle waters, jogging paths, outdoor exercise facilities, and seaside cafes with skyline vistas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <UtensilsCrossed className="w-4 h-4 text-[#0969E8]" />
                  <span>Global Halal Culinary Diversity</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  With over 200 nationalities living in harmony, Dubai is one of the world&apos;s great dining capitals. Enjoy authentic Emirati stews, fragrant South Asian biryanis, Levantine mezze, and international fine dining, virtually all certified halal.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Compass className="w-4 h-4 text-[#0969E8]" />
                  <span>Desert Safaris & Nature Escapes</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Just 45 minutes beyond the high-rises lies the sweeping Arabian Desert. Visitors can experience dune driving, sandboarding, falconry, Bedouin-inspired camps, and peaceful desert stargazing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#0969E8]" />
                  <span>Safety & Family Infrastructure</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Renowned as one of the safest cities worldwide, Dubai offers clean public transit, smooth push-chair accessibility, kid-friendly entertainment complexes, and secure streets round-the-clock.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Best Places to Visit in Dubai */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              2. Best Places to Visit in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dubai is organized across several distinct geographic districts stretching from the historic creek in the northeast down toward Dubai Marina and Palm Jumeirah in the southwest. Rather than crisscrossing the entire city each day, group your visits by neighborhood to save transit time and reduce fatigue.
            </p>

            {/* Subsection: Burj Khalifa and Downtown Dubai */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0969E8]" />
                <span>Burj Khalifa and Downtown Dubai</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Standing at a record-breaking 828 meters (2,716.5 feet), the Burj Khalifa is Dubai’s undisputed civic centerpiece. Visitors ascend high-speed double-decker elevators traveling at 10 meters per second to the &quot;At The Top&quot; observation decks on levels 124, 125, and the premium level 148 SKY lounge. From these panoramic glass decks, the Persian Gulf, city skyscrapers, and distant desert expanses stretch out beneath your feet.
              </p>
              <div className="p-3 bg-white rounded-xl border border-[#E2E8F0] text-xs text-[#64748B] space-y-1">
                <span className="font-bold text-[#071B49] block">Traveler Tip:</span>
                <span>Sunset tickets (between 4:30 PM and 6:30 PM) sell out days or weeks in advance. Book your timed slot online via the official ticketing portal well ahead of your travel dates to avoid disappointment and bypass lengthy box-office lines.</span>
              </div>
            </div>

            {/* Subsection: Dubai Mall and Downtown Area */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0969E8]" />
                <span>Dubai Mall and the Dubai Fountain</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Adjacent to the Burj Khalifa, the Dubai Mall is one of the world’s largest retail and lifestyle destinations, housing over 1,200 stores, an Olympic-sized ice rink, the Dubai Aquarium &amp; Underwater Zoo with its massive walk-through tunnel, and hundreds of diverse halal restaurants. Outside on Burj Lake, the Dubai Fountain performs choreographed water, light, and music spectacles every 30 minutes from 6:00 PM to 11:00 PM daily. The shows are entirely free to watch from the waterfront promenade and Souk Al Bahar bridge.
              </p>
            </div>

            {/* Subsection: Old Dubai */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#0969E8]" />
                <span>Old Dubai: Al Fahidi Historical Neighbourhood &amp; the Souks</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                To understand Dubai’s origins, spend a dedicated morning exploring Old Dubai on both sides of Dubai Creek. Begin in Bur Dubai’s Al Fahidi Historical Neighbourhood (also known as Al Bastakiya), where narrow car-free lanes showcase restored 19th-century gypsum and coral stone buildings capped with traditional wind towers (<em>barjeel</em>). Visit the Sheikh Mohammed bin Rashid Al Maktoum Centre for Cultural Understanding (SMCCU) for authentic cultural breakfasts and open Q&amp;A sessions about local customs.
              </p>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                After browsing the Textile Souk, board a traditional wooden motorized boat (<em>abra</em>) to cross Dubai Creek to Deira for just 1 AED (roughly $0.27). In Deira, follow the aromas of cinnamon, cardamom, saffron, and dried frankincense into the vibrant Spice Souk, then wander the shimmering window displays of the world-famous Gold Souk. Polite, friendly bargaining is customary in the traditional souks.
              </p>
            </div>

            {/* Subsection: Dubai Marina and JBR */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0969E8]" />
                <span>Dubai Marina &amp; Jumeirah Beach Residence (JBR)</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                In southwest Dubai, Dubai Marina is a dazzling man-made canal city framed by twisting residential towers, luxury yachts, and the 7-kilometer pedestrian Marina Walk lined with outdoor cafes. A short stroll across the footbridges leads to Jumeirah Beach Residence (JBR) and &quot;The Beach,&quot; an open-air promenade with seaside dining, shaded playgrounds, and wide sandy shores overlooking Bluewaters Island and Ain Dubai. It is one of the most walkable, vibrant neighborhoods in the emirate.
              </p>
            </div>

            {/* Subsection: Palm Jumeirah */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#0969E8]" />
                <span>Palm Jumeirah &amp; The View at The Palm</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                An artificial archipelago shaped like a stylized palm tree, Palm Jumeirah is a marvel of maritime land reclamation. For the most dramatic vantage point, visit &quot;The View at The Palm&quot; on level 52 of the Palm Tower (240 meters above ground), offering 360-degree unobstructed views of the fronds, the outer crescent, Dubai Marina skyscrapers, and the Arabian Gulf. The Palm Jumeirah Monorail provides a scenic transit ride from the base of the trunk to the iconic Atlantis resort and Aquaventure Waterpark at the crest.
              </p>
            </div>

            {/* Subsection: Desert Safari */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#0969E8]" />
                <span>Arabian Desert Safari Experiences</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                No trip to Dubai is complete without experiencing the stark majesty of the surrounding red dunes. Standard afternoon safaris include hotel pickup in an air-conditioned 4x4, thrilling dune bashing across the Lahbab desert, sandboarding down steep sand faces, short camel rides, and an open-air dinner camp with barbecue and cultural performances. For wildlife and eco-conscious travelers, daytime conservation drives in the Dubai Desert Conservation Reserve offer opportunities to spot native Arabian oryx and sand gazelles in their protected natural habitat.
              </p>
            </div>

            {/* Subsection: Cultural Highlights */}
            <div className="space-y-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0969E8]" />
                <span>Cultural Highlights: Museum of the Future &amp; Jumeirah Mosque</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Situated along Sheikh Zayed Road, the Museum of the Future is an architectural masterpiece adorned with Arabic calligraphy quotes by His Highness Sheikh Mohammed bin Rashid Al Maktoum. Inside, immersive exhibits explore space exploration, bioengineering, and ecosystems 50 years into the future. For traditional spiritual heritage, Jumeirah Mosque is one of the few UAE mosques open to non-Muslim visitors through guided cultural tours under the motto &quot;Open Doors. Open Minds,&quot; providing gentle, respectful insights into Islamic customs, prayer rituals, and architecture.
              </p>
            </div>
          </section>

          {/* Section 3: When Is the Best Time to Visit Dubai? */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              3. When Is the Best Time to Visit Dubai?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dubai has a subtropical desert climate with year-round sunshine. Deciding when to visit depends primarily on your tolerance for heat, planned activities, and flight and hotel budgets:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Peak Winter Season (November to March)</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Ideal Weather</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Daytime temperatures average 23°C to 28°C (73°F to 82°F) with cool desert evenings and mild breezes. Perfect for beach days, desert safaris, al fresco dining, and outdoor festivals like the Dubai Shopping Festival (DSF). Expect the highest hotel rates and larger crowds at popular attractions. Advance bookings are essential.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Shoulder Season (April, May &amp; October)</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">Balanced Value</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Temperatures climb to 32°C to 38°C (90°F to 100°F). Swimming pools and ocean waters are warm, mornings and evenings are pleasant, and hotel pricing drops considerably compared to peak winter. Sightseeing outdoors is comfortable during morning hours, followed by indoor attractions during peak afternoon heat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Summer Low Season (June to September)</span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">Lowest Rates</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Extreme desert heat often exceeds 42°C (108°F) with high coastal humidity. Outdoor activities during midday are not recommended. However, summer offers massive hotel discounts, empty theme parks, and completely climate-controlled indoor attractions like Ski Dubai, Green Planet, world-class aquariums, and sprawling mega-malls.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: How to Get Around Dubai */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              4. How to Get Around Dubai
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dubai is an expansive, elongated metropolis spanning over 40 kilometers from Deira to Dubai Marina. While individual districts like Downtown, City Walk, and JBR are enjoyable to explore on foot, walking between districts across major highways is impractical. Fortunately, Dubai boasts an exceptional public and private transit network:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Train className="w-4 h-4 text-[#0969E8]" />
                  <span>The Dubai Metro &amp; Nol Cards</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  The driverless Dubai Metro features two primary lines: the Red Line (running parallel to Sheikh Zayed Road from DXB Airport to Expo City) and the Green Line (serving Old Dubai and the Creek). Purchase an RTA Silver Nol Card at any ticket booth for 25 AED (which includes 19 AED in stored fare value). Fares range from 3 to 8.50 AED depending on the number of zones crossed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Car className="w-4 h-4 text-[#0969E8]" />
                  <span>Metered Taxis &amp; Careem</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Official RTA taxis (cream-colored sedans with colored roofs) are clean, strictly metered, and widely available outside malls and hotels. Credit cards, Apple Pay, and cash are accepted in all taxis. For convenient digital hailing, download the Careem app (the local Uber equivalent) to book standard Hala Taxis or private rides with transparent upfront pricing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Footprints className="w-4 h-4 text-[#0969E8]" />
                  <span>Walking: Where It Works (and Where It Doesn&apos;t)</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Walking is fantastic along Dubai Marina Walk (7 km loop), The Walk at JBR, Downtown Boulevard, and through the alleyways of Al Fahidi and Deira souks during cooler months. However, do not attempt to walk between major districts along highway interchanges; use the air-conditioned metro footbridges or hail a taxi.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2 text-[#071B49] font-bold text-sm">
                  <Car className="w-4 h-4 text-[#0969E8]" />
                  <span>Car Rental &amp; Driving Considerations</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Car rentals are affordable and roads are paved to world-class standards. However, multi-lane highways (up to 7 lanes each way on Sheikh Zayed Road) require confident navigation. Highway tolls (Salik, 4 AED per gate) are tracked automatically via windshield tags and billed at vehicle return. Parking is metered via SMS or RTA apps.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Where to Stay in Dubai (Neighborhood Guide) */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              5. Where to Stay in Dubai (Neighborhood Guide)
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Choosing the right neighborhood anchor ensures your daily sightseeing is convenient and fits your personal travel style. Here is a breakdown of the top areas for visitors:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Downtown Dubai</span>
                  <span className="text-xs text-[#0969E8] font-medium">Best for First-Timers &amp; Sightseeing</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Putting you within immediate walking distance of the Burj Khalifa, Dubai Mall, and Dubai Opera, Downtown offers premier luxury and central connectivity. Perfect if you prefer stepping out of your lobby into the heart of the city&apos;s most famous landmarks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Dubai Marina &amp; JBR (Jumeirah Beach Residence)</span>
                  <span className="text-xs text-[#0969E8] font-medium">Best for Beaches, Couples &amp; Night Walks</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  If your dream vacation includes morning seaside jogs, easy beach lounging, sunset catamaran cruises, and hundreds of al fresco restaurants, Dubai Marina and JBR are unmatched. Highly pedestrian-friendly with tram and metro links.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Deira &amp; Bur Dubai (Old Dubai)</span>
                  <span className="text-xs text-[#0969E8] font-medium">Best for Budget Travelers &amp; Heritage Lovers</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Located right on Dubai Creek, Old Dubai provides the most budget-friendly hotel accommodations in the emirate. You are surrounded by traditional markets, heritage museums, low-cost halal dining from India, Pakistan, Iran, and the Levant, and direct access to both metro lines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Palm Jumeirah</span>
                  <span className="text-xs text-[#0969E8] font-medium">Best for Luxury Resort Escapes &amp; Families</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Lined with five-star beachfront resorts offering private lagoons, celebrity-chef dining, wellness spas, and waterparks like Aquaventure. Perfect for travelers seeking a resort-style holiday with periodic excursions into the city.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#071B49]">Business Bay &amp; Al Barsha</span>
                  <span className="text-xs text-[#0969E8] font-medium">Best for Value Mid-Range Accommodations</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Business Bay sits immediately south of Downtown with canal views and contemporary hotels at noticeably lower rates than Downtown proper. Al Barsha sits near the Mall of the Emirates and provides reliable mid-range hotel apartments with excellent metro links.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Budgeting and Trip Costs in Dubai */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              6. Budgeting and Trip Costs in Dubai
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              The official currency is the United Arab Emirates Dirham (AED), which is pegged to the US Dollar at a stable exchange rate of approximately 1 USD = 3.6725 AED. Estimating your daily budget depends largely on dining preferences and ticketed excursions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
                  Budget Explorer
                </div>
                <div className="text-lg font-bold text-[#071B49]">$60 – $100 / day</div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Stay in clean 3-star hotels or hotel apartments in Deira or Bur Dubai. Ride the Metro using an RTA Silver Card ($3–$6/day). Eat at local shawarma, biryani, and falafel cafes ($4–$8 per meal). Enjoy free public beaches, creek abras, and fountain shows.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md w-fit">
                  Mid-Range Traveler
                </div>
                <div className="text-lg font-bold text-[#071B49]">$150 – $300 / day</div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Stay in 4-star hotels in Business Bay, Al Barsha, or near the Marina. Mix metro journeys with occasional Careem/RTA taxis. Dine at casual sit-down restaurants along Marina Walk or Downtown Boulevard ($20–$40 per person). Book Burj Khalifa At The Top and a desert safari.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md w-fit">
                  Luxury Experience
                </div>
                <div className="text-lg font-bold text-[#071B49]">$450+ / day</div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Stay in 5-star beachfront resorts on Palm Jumeirah or luxury towers in Downtown. Private chauffeur and luxury car transfers. Indulge in Michelin-guide dining and high tea at Burj Al Arab. VIP lounge access at Burj Khalifa SKY and private desert conservation safaris.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-[#475569] space-y-2">
              <span className="font-bold text-[#071B49] block flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-[#0969E8]" />
                Practical Money-Saving Tips:
              </span>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#64748B]">
                <li><strong>Book attraction tickets online in advance:</strong> Bundle tickets through platforms or city passes to save 15% to 30% compared to on-the-day counter pricing.</li>
                <li><strong>Explore Old Dubai dining:</strong> Some of the city&apos;s most delicious, authentic meals cost under 25 AED ($7) in Karama, Deira, and Satwa.</li>
                <li><strong>Use hotel shuttles:</strong> Many hotels in Al Barsha and Business Bay offer complimentary daily shuttle buses to JBR Beach, Dubai Mall, or Mall of the Emirates.</li>
              </ul>
            </div>
          </section>

          {/* Section 7: Culture, Local Laws, and Respectful Travel */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              7. Culture, Local Laws, and Respectful Travel
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dubai is celebrated for welcoming millions of visitors from across the globe while preserving its proud Emirati heritage and Islamic values. Following basic cultural courtesies ensures a smooth, respectful, and joyful visit:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-[#071B49]">
                  <ShieldCheck className="w-4 h-4 text-[#0969E8]" />
                  <span>Dress Code Expectations</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  In private resort pools, beach clubs, and waterparks, bikinis and standard swimwear are completely normal. When entering shopping malls, restaurants, metro stations, and public streets, dress modestly by covering shoulders and knees. Carrying a light scarf or linen shirt is helpful for stepping into air-conditioned buildings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-[#071B49]">
                  <HeartHandshake className="w-4 h-4 text-[#0969E8]" />
                  <span>Public Decorum &amp; Photography</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Holding hands is acceptable for couples, but excessive public displays of affection are culturally discouraged in public areas. When photographing city views and skylines, be mindful not to photograph local residents—particularly women and families—without explicit permission. Photographing military facilities, government compounds, or airports is strictly prohibited.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                <div className="flex items-center gap-2 font-bold text-sm text-[#071B49]">
                  <Calendar className="w-4 h-4 text-[#0969E8]" />
                  <span>Traveling During the Holy Month of Ramadan</span>
                </div>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Visiting during Ramadan offers a serene, culturally rich atmosphere. Today, restaurants inside malls, hotels, and tourist districts remain open with discreet partitions during daytime fasting hours. At sunset, experience the joyful tradition of <em>Iftar</em> (breaking the fast) at traditional community tents and luxury hotel buffets serving roasted lamb, dates, and Arabic sweets.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Sample Itineraries */}
          <section className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              8. Sample Itineraries: 3-Day &amp; 5-Day Frameworks
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Use these carefully organized frameworks to structure your days logically and minimize unnecessary back-and-forth travel:
            </p>

            {/* 3-Day Framework */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0969E8]" />
                  <span>3-Day Essential Dubai Highlights</span>
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-[#0969E8] border border-blue-200">Express Pace</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
                <li><strong className="text-[#071B49]">Day 1: Downtown &amp; Modern Icons:</strong> Morning visit to Burj Khalifa At The Top observation deck. Stroll through the Dubai Aquarium tunnel. Afternoon shopping and lunch at Dubai Mall. Evening dinner overlooking the illuminated Dubai Fountain show.</li>
                <li><strong className="text-[#071B49]">Day 2: Heritage, Old Dubai &amp; Desert Safari:</strong> Morning walking tour of Al Fahidi Historical Neighbourhood and SMCCU. 1 AED abra boat ride across Dubai Creek to Deira Spice and Gold Souks. Mid-afternoon pickup for an Arabian red dune safari with sandboarding and barbecue dinner.</li>
                <li><strong className="text-[#071B49]">Day 3: Dubai Marina &amp; Palm Jumeirah:</strong> Morning walk along JBR Beach and Bluewaters Island. Afternoon panoramic views from The View at The Palm on Palm Jumeirah. Sunset dinner cruise or outdoor cafe meal along Dubai Marina Walk.</li>
              </ul>
            </div>

            {/* 5-Day Framework */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0969E8]" />
                  <span>5-Day Comprehensive Dubai &amp; Cultural Immersion</span>
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Balanced Pace</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#64748B]">
                <li><strong className="text-[#071B49]">Day 1: Downtown Grandeur:</strong> Burj Khalifa, Dubai Mall, Dubai Fountain, and sunset stroll down Sheikh Mohammed bin Rashid Boulevard.</li>
                <li><strong className="text-[#071B49]">Day 2: Old Dubai &amp; Spice Trails:</strong> Al Fahidi heritage houses, Dubai Coffee Museum, abra creek crossing, traditional Deira souks, and street food feast in Karama.</li>
                <li><strong className="text-[#071B49]">Day 3: Innovation &amp; Red Dunes:</strong> Morning ticket at the Museum of the Future along Sheikh Zayed Road. Afternoon and evening red dunes desert safari with stargazing and Bedouin camp hospitality.</li>
                <li><strong className="text-[#071B49]">Day 4: Palm Jumeirah &amp; Beach Relaxation:</strong> The View at The Palm, monorail ride to Atlantis, afternoon swimming or watersports at Kite Beach, with photos of the Burj Al Arab from the sand.</li>
                <li><strong className="text-[#071B49]">Day 5: Marina Lifestyle or Abu Dhabi Day Trip:</strong> Morning walk around Dubai Marina and Ain Dubai, or take an easy 90-minute road excursion to visit Abu Dhabi’s magnificent Sheikh Zayed Grand Mosque and Louvre Abu Dhabi before your evening departure.</li>
              </ul>
            </div>
          </section>

          {/* Section 9: Interactive Checklist */}
          <section className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
                  9. A Simple Dubai Trip-Planning Checklist
                </h2>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Use this interactive checklist to organize key milestones before departing on your Dubai adventure.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {checklistSections.map((sec, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                  <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#0969E8]" />
                    <span>{sec.title}</span>
                  </h3>
                  <div className="space-y-2.5">
                    {sec.items.map(item => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                            isChecked
                              ? 'bg-blue-50/70 border-blue-200 text-[#071B49]'
                              : 'bg-white border-[#E2E8F0] hover:border-blue-300 text-[#475569]'
                          }`}
                        >
                          <div className="pt-0.5 shrink-0">
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

          {/* Section 10: Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#071B49] tracking-tight font-syncopate">
              10. Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Common practical questions from travelers planning their first visit to Dubai.
            </p>

            <div className="space-y-3 pt-2">
              {faqItems.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
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
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Dubai is far more than a glittering metropolis of high-rise superlatives. It is a dynamic, welcoming world city where century-old dhows still navigate historic creek waters alongside record-breaking towers, and where world-class dining and spotless public transit sit against the timeless tranquility of the Arabian desert.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
              By grouping your sightseeing by district, reserving peak attraction tickets in advance, taking advantage of the affordable Dubai Metro, and approaching local customs with mindfulness and respect, your trip to Dubai will be smooth, inspiring, and unforgettable.
            </p>
          </section>

          {/* Related Travel & Pilgrim Guides */}
          <div className="pt-6 border-t border-[#F1F5F9] space-y-4">
            <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
              Explore More Travel Guides &amp; Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                  Practical tips, transit &amp; respectful etiquette.
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
                  Ancient heritage, Hegra &amp; desert landscapes.
                </p>
              </button>

              <button
                onClick={() => onNavigate('blog/travel-guides/kuala-lumpur-travel-guide')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Kuala Lumpur Travel Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  Petronas Towers, Batu Caves, halal food &amp; city guide.
                </p>
              </button>

              <button
                onClick={() => onNavigate('destinations/dubai')}
                className="p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors flex items-center justify-between">
                  <span>Dubai Destination Hub</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
                <p className="text-[11px] text-[#64748B] mt-1">
                  City highlights, deals &amp; attractions overview.
                </p>
              </button>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-br from-[#071B49] via-[#0B2564] to-[#040E29] text-white rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="max-w-xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-syncopate">
                Plan Your Journey to Dubai with Confidence
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Compare flight routes to Dubai (DXB), check accommodations across the UAE, and utilize our free travel tools on Travel DuurDesh.
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
