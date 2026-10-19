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
  AlertTriangle,
  TreePine,
  ShieldCheck,
  Footprints,
  Umbrella,
  Coffee
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, SINGAPORE_ARTICLE } from '../data/blogData';

interface SingaporeTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const SingaporeTravelGuideArticlePage: React.FC<SingaporeTravelGuideArticlePageProps> = ({
  post = SINGAPORE_ARTICLE,
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
          id: 'sg-chk-1',
          text: 'Verify passport validity (minimum 6 months from entry) and confirm specific visa requirements based on your nationality via the official Singapore Immigration & Checkpoints Authority (ICA) portal.'
        },
        {
          id: 'sg-chk-2',
          text: 'Submit the mandatory SG Arrival Card with Electronic Health Declaration online via official ICA portal (eservices.ica.gov.sg) within three days prior to arrival.'
        },
        {
          id: 'sg-chk-3',
          text: 'Review local import regulations: note that chewing gum importation and electronic cigarettes/vaping devices are strictly prohibited and illegal in Singapore.'
        },
        {
          id: 'sg-chk-4',
          text: 'Ensure credit or debit cards support foreign contactless transactions (SimplyGo) for seamless public transit on MRT and public buses without purchasing paper tickets.'
        }
      ]
    },
    {
      title: 'Transit & Connectivity Setup',
      items: [
        {
          id: 'sg-chk-5',
          text: 'Secure an international mobile eSIM or pick up a local 4G/5G tourist SIM at Changi Airport for real-time MRT routing and Grab ride-hailing.'
        },
        {
          id: 'sg-chk-6',
          text: 'Download official transit apps such as SimplyGo and Citymapper or offline maps to navigate MRT interchanges with confidence.'
        },
        {
          id: 'sg-chk-7',
          text: 'Remember strict transit regulations: absolutely no food, drinks, or smoking are permitted on MRT trains or within station fare gates (steep fines apply).'
        },
        {
          id: 'sg-chk-8',
          text: 'Pre-book timed-entry tickets for high-demand indoor conservatories (Flower Dome and Cloud Forest at Gardens by the Bay) to guarantee preferred entry slots.'
        }
      ]
    },
    {
      title: 'Packing & Tropical Comfort',
      items: [
        {
          id: 'sg-chk-9',
          text: 'Pack lightweight, breathable cotton or linen clothing suited for tropical heat (28°C–32°C) and year-round humidity averaging 80%.'
        },
        {
          id: 'sg-chk-10',
          text: 'Bring comfortable, supportive walking shoes designed for 15,000+ daily steps across gardens, shopping concourses, and waterfront promenades.'
        },
        {
          id: 'sg-chk-11',
          text: 'Carry a compact wind-resistant umbrella or rain poncho for sudden tropical downpours, plus a light cardigan or sweater for icy air-conditioned shopping malls and museums.'
        },
        {
          id: 'sg-chk-12',
          text: 'Pack a Type-G UK 3-pin plug adapter and a portable power bank to keep mobile navigation and camera devices charged throughout the day.'
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'Is Singapore good for first-time visitors?',
      answer:
        'Yes. Singapore is widely recognized as one of the world’s most welcoming, clean, and safe destinations for first-time international travelers. English is the primary working language and is spoken fluently across hospitality, retail, and public transit. Street signage, metro maps, and dining menus are fully bilingual. The city possesses an impeccably organized public transit network, exceptionally low crime rates, and universal consumer protections, making independent navigation intuitive for solo travelers, seniors, and families alike.'
    },
    {
      question: 'How many days are enough for Singapore?',
      answer:
        'A stay of three to four full days provides an ideal introduction to Singapore’s major highlights. This timeframe allows travelers to experience Marina Bay and Gardens by the Bay, explore historic cultural quarters like Chinatown, Little India, and Kampong Glam, discover world-class dining across hawker centers, and spend a relaxing afternoon on Sentosa Island or at the Singapore Botanic Gardens. Travelers with five to seven days can add leisure excursions to Mandai Wildlife Reserve (Singapore Zoo, Night Safari, Bird Paradise), museum trails, and neighborhood food walks in Katong/Joo Chiat.'
    },
    {
      question: 'Is Singapore suitable for Muslim travelers?',
      answer:
        'Singapore is an exceptionally Muslim-friendly destination with a well-established halal dining ecosystem and rich Islamic heritage. The Majlis Ugama Islam Singapura (MUIS) oversees rigorous official halal certification, making it easy to identify verified halal restaurants, fast-food outlets, and hawker stalls displaying the official MUIS logo. Historic, welcoming mosques with dedicated prayer halls and ablution facilities are located in every major district, including Masjid Sultan in Kampong Glam, Masjid Jamae in Chinatown, and Masjid Al-Falah on Orchard Road. In addition, prayer rooms are provided at Changi Airport, major theme parks on Sentosa, and shopping centers.'
    },
    {
      question: 'Is public transport convenient in Singapore?',
      answer:
        'Public transit in Singapore is world-class, punctual, and inexpensive. The Mass Rapid Transit (MRT) rail system connects virtually every tourist neighborhood, shopping district, and Changi Airport with clean, air-conditioned trains arriving every 2 to 5 minutes during peak hours. Buses provide extensive door-to-door connectivity. Thanks to Singapore’s SimplyGo system, international visitors do not even need to purchase a transport card—simply tap any contactless foreign Visa or Mastercard credit/debit card, Apple Pay, or Google Pay directly at the fare gates when boarding and exiting.'
    },
    {
      question: 'When is the best time to visit Singapore?',
      answer:
        'Because Singapore sits just 137 kilometers north of the equator, temperatures remain warm and tropical year-round, typically ranging between 25°C and 32°C (77°F to 90°F). The months from February to April usually experience slightly lower rainfall and clearer skies, making them popular for outdoor sightseeing. The Northeast Monsoon (November through January) brings frequent, heavy afternoon thunderstorms. When planning, consider cultural events: the Singapore Grand Prix in late September brings high hotel rates and lively concerts, while festive periods like Lunar New Year and Hari Raya bring spectacular street illuminations to Chinatown and Geylang Serai.'
    },
    {
      question: 'Do travelers need a visa for Singapore?',
      answer:
        'Visa requirements depend entirely on the traveler’s nationality, passport type, and travel circumstances. Citizens from many countries (including the United States, Canada, United Kingdom, European Union member states, Australia, and ASEAN nations) can enter Singapore visa-free for tourism stays of 30 to 90 days. However, passport holders from designated assessment countries must obtain a visa in advance. Crucially, all arriving travelers—regardless of visa status—must complete and submit the official electronic SG Arrival Card within three days prior to landing via the Immigration & Checkpoints Authority (ICA) portal (eservices.ica.gov.sg). Always confirm current regulations with official ICA resources before departure.'
    }
  ];

  return (
    <article className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={[
              { label: 'Home', path: 'home' },
              { label: 'Travel Guides', path: 'blog' },
              { label: 'Singapore Travel Guide', path: 'blog/travel-guides/singapore-travel-guide' }
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
              Downtown Core, Singapore
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
              • Discover Singapore
            </a>
            <a href="#best-time" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 1. Best Time to Visit
            </a>
            <a href="#best-places" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 2. Best Places to Visit
            </a>
            <a href="#things-to-do" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 3. Things to Do in Singapore
            </a>
            <a href="#muslim-travelers" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 4. Singapore for Muslim Travelers
            </a>
            <a href="#what-to-eat" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 5. What to Eat & Food Culture
            </a>
            <a href="#getting-around" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 6. Getting Around (MRT & Transit)
            </a>
            <a href="#where-to-stay" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 7. Where to Stay (Neighborhoods)
            </a>
            <a href="#itinerary" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 8. Flexible 3-Day Itinerary
            </a>
            <a href="#travel-tips" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 9. Practical Travel Tips
            </a>
            <a href="#common-mistakes" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 10. Common Mistakes to Avoid
            </a>
            <a href="#checklist" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 11. Interactive Travel Checklist
            </a>
            <a href="#faq" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 12. Frequently Asked Questions
            </a>
            <a href="#conclusion" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 13. Summary & Related Guides
            </a>
          </div>
        </div>
      </div>

      {/* 5. Main Article Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Section: Discover Singapore */}
        <section id="intro" className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Sparkles className="w-4 h-4" />
            <span>The Garden City of Southeast Asia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            Discover Singapore: Where Futuristic Vision Meets Heritage
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Perched at the southern tip of the Malay Peninsula, Singapore is a dynamic island city-state that defies easy categorization. In just a few decades, this former colonial trading outpost and regional maritime hub transformed itself into one of the world’s most prosperous, secure, and technologically advanced global metropolises. Yet despite its gleaming glass towers and futuristic skyline, Singapore has preserved a lush green canopy and a rich multicultural soul where Chinese, Malay, Indian, and Eurasian communities live side by side in harmony.
            </p>
            <p>
              What immediately captivates first-time visitors is Singapore’s reputation as a true “City in Nature.” Canopy-covered walkways, vertical plant walls on skyscrapers, and expansive botanical reserves weave greenery through every corner of the urban landscape. Cleanliness, civil order, and punctuality are civic priorities here. Public transportation functions with Swiss-like precision, violent crime is extraordinarily rare, and English is the universal language of commerce and daily life.
            </p>
            <p>
              Whether you are marveling at the towering Supertrees of Gardens by the Bay, sampling aromatic laksa at a UNESCO-recognized hawker center, hearing the melodic call to prayer echo from historic Masjid Sultan in Kampong Glam, or walking the peaceful paths of the UNESCO World Heritage Botanic Gardens, Singapore presents an effortless, rewarding travel experience. This practical guide provides everything you need to organize a seamless visit, from transport and neighborhood selection to halal dining and cultural etiquette.
            </p>
          </div>

          {/* Quick Key Facts Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-bold text-[#0969E8] uppercase tracking-wider">Currency</div>
              <div className="text-base font-extrabold text-[#071B49] mt-0.5">Singapore Dollar (SGD / S$)</div>
              <div className="text-xs text-gray-500 mt-1">Contactless widely accepted</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-bold text-[#0969E8] uppercase tracking-wider">Language</div>
              <div className="text-base font-extrabold text-[#071B49] mt-0.5">English (Official)</div>
              <div className="text-xs text-gray-500 mt-1">Malay, Mandarin & Tamil spoken</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-bold text-[#0969E8] uppercase tracking-wider">Transit</div>
              <div className="text-base font-extrabold text-[#071B49] mt-0.5">MRT & Public Bus</div>
              <div className="text-xs text-gray-500 mt-1">Tap with credit card (SimplyGo)</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <div className="text-[11px] font-bold text-[#0969E8] uppercase tracking-wider">Plug Type</div>
              <div className="text-base font-extrabold text-[#071B49] mt-0.5">Type G (UK 3-pin)</div>
              <div className="text-xs text-gray-500 mt-1">230V / 50Hz electricity</div>
            </div>
          </div>
        </section>

        {/* Section 1: Best Time to Visit */}
        <section id="best-time" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Sun className="w-4 h-4" />
            <span>Climate & Seasons</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            1. Best Time to Visit Singapore: Weather, Humidity & Events
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Located just one degree north of the equator, Singapore experiences a true tropical rainforest climate with no distinct four seasons. Daytime temperatures hover consistently between 28°C and 32°C (82°F to 90°F) throughout the entire year, while overnight lows rarely dip below 24°C (75°F). Relative humidity remains high, typically averaging 70% to 90%. As a result, planning your trip revolves less around temperature shifts and more around monsoon rainfall patterns, crowd levels, and major cultural festivals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs space-y-2">
                <div className="text-xs font-bold text-[#0969E8] uppercase">February to April</div>
                <div className="text-sm font-bold text-[#071B49]">Drier Days & Pleasant Skies</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Following the retreat of the Northeast Monsoon, February through April typically records the lowest monthly rainfall and highest sunshine hours. Perfect for walking tours, outdoor botanical gardens, and rooftop viewpoints.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs space-y-2">
                <div className="text-xs font-bold text-[#0969E8] uppercase">May to August</div>
                <div className="text-sm font-bold text-[#071B49]">Mid-Year Warmth & Great Singapore Sale</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Warm, sunny mornings frequently punctuated by brief, intense afternoon showers. An active period for retail promotions, food festivals, and school holiday travel across Southeast Asia.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs space-y-2">
                <div className="text-xs font-bold text-[#0969E8] uppercase">November to January</div>
                <div className="text-sm font-bold text-[#071B49]">Northeast Monsoon & Festivities</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  The wettest period of the year with frequent overcast afternoons and prolonged rain squalls. However, temperatures feel slightly cooler and festive holiday illuminations light up Orchard Road and Marina Bay.
                </p>
              </div>
            </div>

            <p>
              <strong>Important Events & Peak Periods:</strong> Hotel rates surge during major international conventions and the Formula 1 Singapore Grand Prix (held on the Marina Bay Street Circuit in late September). Cultural celebrations like Lunar New Year (January/February), Hari Raya Aidilfitri, Deepavali (October/November), and Christmas bring elaborate street light-ups, festive night markets, and vibrant community spirit.
            </p>
          </div>
        </section>

        {/* Section 2: Best Places to Visit */}
        <section id="best-places" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Landmark className="w-4 h-4" />
            <span>Must-See Landmarks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            2. Best Places to Visit in Singapore
          </h2>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            Singapore’s compact geographic footprint makes it remarkably straightforward to explore a rich variety of iconic architectural achievements, verdant nature parks, and vibrant heritage enclaves in a single day. Always verify current operating hours, access rules, and ticket requirements via official attraction portals prior to visiting.
          </p>

          <div className="space-y-4 pt-2">
            {/* Marina Bay Sands & Waterfront */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#0969E8]" />
                  <span>Marina Bay Sands & Waterfront Promenade</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Downtown</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                An internationally recognized engineering marvel, Marina Bay Sands features three 55-story hotel towers crowned by the cantilevered Sands SkyPark observation deck. The surrounding waterfront promenade is the city’s premier gathering place, offering scenic pedestrian paths, the striking lotus-inspired ArtScience Museum, the double-helix Helix Bridge, and the nightly Spectra light and water fountain show. Visiting the outdoor promenade is free, while SkyPark and museum galleries require admission tickets.
              </p>
              <div className="text-xs text-[#0969E8] font-medium flex items-center gap-1.5 bg-[#F0F7FF] p-2.5 rounded-lg border border-[#D0E6FF]">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Travel Tip: Take the MRT directly to Bayfront station (CE1/DT16) for immediate underground access to both Marina Bay Sands and Gardens by the Bay.</span>
              </div>
            </div>

            {/* Gardens by the Bay */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-[#0969E8]" />
                  <span>Gardens by the Bay: Supertrees & Conservatories</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Iconic Nature</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Spanning over 101 hectares of reclaimed waterfront land, Gardens by the Bay is a triumphant blend of botanical conservation and high-tech horticulture. Central to the park is the Supertree Grove—towering vertical gardens standing 25 to 50 meters tall that collect rainwater and generate solar energy. Inside the climate-controlled Flower Dome and Cloud Forest conservatories, visitors encounter thousands of rare plant species, a towering 35-meter indoor waterfall, and aerial walkways shrouded in misty mountain flora.
              </p>
              <div className="text-xs text-gray-500">
                • <strong>Practical Notice:</strong> Access to outdoor gardens and the nightly Garden Rhapsody sound-and-light show is free; Flower Dome and Cloud Forest require paid admission tickets booked in advance.
              </div>
            </div>

            {/* Merlion Park */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#0969E8]" />
                  <span>Merlion Park</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Civic Emblem</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Standing proudly at One Fullerton overlooking the waters of Marina Bay, the iconic 8.6-meter Merlion statue—a mythical creature with the head of a lion and the body of a fish—symbolizes Singapore’s humble beginnings as a fishing village (Temasek) and its original Sanskrit name, Singapura (“Lion City”). The spacious observation pier provides an unobstructed, photogenic panorama across the bay toward Marina Bay Sands, making it a mandatory stop for any first-time visitor.
              </p>
            </div>

            {/* Sentosa Island */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <Sun className="w-5 h-5 text-[#0969E8]" />
                  <span>Sentosa Island: Coastal Resorts & Entertainment</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Resort Island</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Just 15 minutes south of the central business district lies Sentosa Island, Singapore’s premier leisure and resort enclave. Sentosa is home to Resorts World Sentosa, Universal Studios Singapore, the vast marine habitats of the S.E.A. Aquarium, scenic cable car networks, and sun-soaked sandy beaches (Siloso, Palawan, and Tanjong). Visitors can reach Sentosa via the scenic pedestrian boardwalk from VivoCity, the Sentosa Express monorail, or the Singapore Cable Car from Mount Faber.
              </p>
            </div>

            {/* Chinatown */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#0969E8]" />
                  <span>Chinatown: Heritage Shophouses & Historic Temples</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Culture & Heritage</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A colorful tapestry of tradition and modernization, Singapore’s historic Chinatown enchants visitors with preserved pastel shophouses, traditional Chinese medicine apothecaries, and vibrant street markets along Pagoda and Trengganu Streets. Notably, Chinatown reflects Singapore’s multicultural spirit: within walking distance along South Bridge Road stand the ornate Buddha Tooth Relic Temple and Museum, the historic Hindu Sri Mariamman Temple (Singapore’s oldest, founded in 1827), and Masjid Jamae (Chulia), one of the island’s earliest mosques.
              </p>
            </div>

            {/* Little India */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#0969E8]" />
                  <span>Little India: Vibrant Spices & Heritage Bazaars</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Cultural Enclave</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Little India pulses with sensory energy. Along Serangoon Road and Campbell Lane, fragrant jasmine garland stalls, goldsmiths, and spice merchants share sidewalks with vibrant murals and historic temples like Sri Veeramakaliamman. Don’t miss Tekka Centre, a bustling multi-story complex featuring a lively wet market, apparel stalls, and a celebrated hawker center famous for freshly flipped roti prata, biryani, and teh tarik. Nearby stands the 24-hour retail emporium Mustafa Centre, stocked with thousands of international goods.
              </p>
            </div>

            {/* Kampong Glam and Arab Street */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#0969E8]" />
                  <span>Kampong Glam, Arab Street & Sultan Mosque</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Malay-Muslim Quarter</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Kampong Glam is Singapore’s historic Malay-Muslim royal quarter. Anchored by the majestic golden dome of Masjid Sultan (Sultan Mosque), Bussorah Street is lined with palm trees, outdoor Mediterranean and Middle Eastern cafes, and traditional Malay textile merchants. Adjoining Haji Lane provides a trendy, indie counterpoint filled with vibrant street art murals, boutique clothing shops, and specialty coffee roasters. Arab Street remains famous for fine silks, batiks, handwoven carpets, and non-alcoholic artisanal attar perfumes.
              </p>
            </div>

            {/* Singapore Botanic Gardens */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-[#0969E8]" />
                  <span>Singapore Botanic Gardens (UNESCO World Heritage Site)</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">UNESCO Heritage</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Established in 1859, the 82-hectare Singapore Botanic Gardens is the only tropical botanical garden inscribed on the UNESCO World Heritage list. Home to ancient heritage trees, tranquil swan lakes, and sweeping rolling lawns, the gardens offer peaceful shaded walking trails. A major highlight is the National Orchid Garden, which showcases more than 1,000 species and 2,000 hybrids of vibrant orchids, including VIP orchids named after visiting heads of state. Entry to the main grounds is free, while the National Orchid Garden charges a modest admission fee.
              </p>
            </div>

            {/* Jewel Changi Airport */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <Plane className="w-5 h-5 text-[#0969E8]" />
                  <span>Jewel Changi Airport & HSBC Rain Vortex</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F0F7FF] text-[#0969E8] font-semibold">Aviation Hub</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Connected seamlessly to Terminals 1, 2, and 3 at Singapore Changi Airport, Jewel is a multi-dimensional lifestyle destination designed by world-renowned architect Moshe Safdie. At its center cascades the HSBC Rain Vortex—the world’s tallest indoor waterfall at 40 meters, surrounded by the four-tier terraced greenery of the Shiseido Forest Valley. Accessible to both departing and arriving passengers as well as members of the public, Jewel features hundreds of retail stores, dining outlets, early check-in lounges, and baggage storage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Things to Do */}
        <section id="things-to-do" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Footprints className="w-4 h-4" />
            <span>Memorable Experiences</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            3. Things to Do in Singapore: City Walks, Waterfronts & Family Adventures
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Beyond visiting flagship monuments, Singapore excels in curated outdoor experiences and family-friendly activities that make the most of its tropical climate and innovative infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-[#0969E8]" />
                  <span>Scenic City Walks & Nature Ridges</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Take the Southern Ridges trail, a 10-kilometer connected series of green spaces featuring Henderson Waves, Singapore’s highest pedestrian bridge made of wave-like timber slats. Alternatively, stroll through historic Fort Canning Park to see ancient spice gardens, colonial military barracks, and the famous tree tunnel photography spot.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#0969E8]" />
                  <span>Singapore River Cruise & Waterfront Breezes</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Board a traditional electric wooden bumboat from Clarke Quay or Boat Quay for a relaxed 40-minute cruise down the Singapore River. The cruise glides beneath historic 19th-century bridges, passes the colonial Civic District, and sweeps into Marina Bay for panoramic views of the skyline from the water.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0969E8]" />
                  <span>Marina Barrage Skyline Picnics & Kite Flying</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Built across the mouth of the Marina Channel, the Marina Barrage creates Singapore’s 15th freshwater reservoir while serving as a flood control system. Its sprawling green rooftop lawn provides panoramic 360-degree views of Marina Bay Sands and the city skyline, making it a beloved spot for weekend kite flying, evening picnics, and sunset photography.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0969E8]" />
                  <span>World-Class Wildlife & Family Attractions</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Head to the Mandai Wildlife Reserve in the north, home to the internationally acclaimed Singapore Zoo (pioneering open-concept animal habitats), the world-first Night Safari (nocturnal tram tours and walking trails), River Wonders (giant panda forest), and the state-of-the-art Bird Paradise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Singapore for Muslim Travelers */}
        <section id="muslim-travelers" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <HeartHandshake className="w-4 h-4" />
            <span>Faith-Friendly Travel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            4. Singapore for Muslim Travelers: Halal Dining, Mosques & Etiquette
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Singapore is one of the most comfortable destinations in Asia for Muslim travelers. Muslims make up approximately 15% of Singapore’s citizen population, with an established Malay-Muslim heritage dating back centuries. The government guarantees freedom of worship and supports a robust Islamic infrastructure through the Majlis Ugama Islam Singapura (MUIS), the statutory Islamic Religious Council of Singapore.
            </p>

            {/* Halal Verification Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#D0E6FF] shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#071B49]">
                <ShieldCheck className="w-5 h-5 text-[#0969E8]" />
                <span>How to Verify Halal Food in Singapore</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                In Singapore, halal certification is legally governed and regulated by MUIS. Eateries and hawker stalls that are certified display an official black and green MUIS certificate featuring a crescent moon, globe logo, and a unique certificate serial number.
              </p>
              <ul className="text-xs text-[#334155] space-y-2 list-disc list-inside">
                <li>
                  <strong>Official Resources:</strong> Travelers can verify any establishment’s certification status in real time via the official MUIS Halal Directory portal or the Muslim.sg mobile app.
                </li>
                <li>
                  <strong>Major Chains:</strong> Many international fast-food chains (including McDonald’s, KFC, Subway, Burger King, and The Coffee Bean & Tea Leaf) and local family restaurant chains (such as Old Chang Kee, Encik Tan, Tenderfresh, and PastaMania) maintain full MUIS halal certification across Singapore.
                </li>
                <li>
                  <strong>Critical Caution:</strong> Never assume a restaurant or food stall is halal merely because it serves chicken, seafood, or Indian cuisine. In diverse food courts and hawker centers, halal stalls operate side by side with non-halal vendors. Always check for the displayed MUIS certificate or verify with management before ordering.
                </li>
                <li>
                  <strong>Muslim-Owned Eateries:</strong> Some boutique cafes and traditional family-run stalls in Kampong Glam and Geylang Serai are 100% Muslim-owned but may not carry formal MUIS certification due to annual audit costs. Muslim diners frequently patronize these establishments after verifying halal sourcing with the owners.
                </li>
              </ul>
            </div>

            {/* Mosques and Prayer Facilities */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-[#071B49] flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#0969E8]" />
                <span>Historic Mosques & Strategic Prayer Locations</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Singapore is home to over 70 active mosques (masjid) spread across its residential and downtown districts, equipped with clean ablution facilities (wudu areas) and segregated prayer halls for men and women. Key centrally located mosques include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">Masjid Sultan (Sultan Mosque)</div>
                  <div className="text-gray-500 mt-0.5">Muscat Street, Kampong Glam</div>
                  <div className="text-gray-600 mt-1">Singapore’s most famous national monument mosque with a capacity of 5,000 worshippers. Visitors welcome outside prayer times.</div>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">Masjid Al-Falah</div>
                  <div className="text-gray-500 mt-0.5">Cairnhill Place, Orchard Road</div>
                  <div className="text-gray-600 mt-1">Conveniently situated right in the heart of the Orchard Road retail district, offering air-conditioned prayer halls for shoppers.</div>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">Masjid Jamae (Chulia Mosque)</div>
                  <div className="text-gray-500 mt-0.5">South Bridge Road, Chinatown</div>
                  <div className="text-gray-600 mt-1">Founded in 1826 by Tamil Muslim traders, known for its distinct South Indian stepped minaret architecture.</div>
                </div>
                <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">Masjid Abdul Gafoor</div>
                  <div className="text-gray-500 mt-0.5">Dunlop Street, Little India</div>
                  <div className="text-gray-600 mt-1">National monument celebrated for its intricate Victorian and Moorish architectural motifs and star-and-crescent cupolas.</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 pt-1">
                • <strong>Attraction Prayer Spaces:</strong> Dedicated prayer rooms (Surau) with ablution areas are available at Singapore Changi Airport (Terminals 1, 2, 3, and 4), Universal Studios Singapore on Sentosa, and Singapore Expo.
              </p>
            </div>

            {/* Cultural Etiquette */}
            <div className="p-4 rounded-xl bg-[#F0F7FF] border border-[#D0E6FF] text-xs text-[#071B49] space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#0969E8]" />
                <span>Mosque Visiting Etiquette:</span>
              </div>
              <p className="text-[#334155] leading-relaxed">
                When entering any mosque, remove footwear at the designated entrance racks. Dress modestly with shoulders and knees covered; female visitors entering tourist areas of Masjid Sultan are provided with clean, complimentary modest robes and head coverings. Maintain a quiet, respectful demeanor, avoid walking in front of individuals engaged in prayer, and schedule non-worship sightseeing outside congregational Friday prayer hours (12:30 PM to 2:30 PM).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: What to Eat */}
        <section id="what-to-eat" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Singapore Culinary Scene</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            5. What to Eat in Singapore: Hawker Culture & Iconic Dishes
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Singapore’s culinary culture is legendary. In 2020, Singapore’s Hawker Culture was officially inscribed onto the UNESCO Representative List of the Intangible Cultural Heritage of Humanity. In open-air, hygienic hawker centers, multi-generational cooks prepare rich, complex regional dishes rooted in Chinese, Malay, Indian, Indonesian, and Peranakan traditions.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#071B49]">Hainanese Chicken Rice</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">National Dish</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fragrant, oily jasmine rice gently simmered in chicken stock, garlic, ginger, and pandan leaves, paired with tender poached or roasted chicken. Served with freshly grated ginger, dark sweet soy sauce, and a piquant garlic-chili dip. Available at certified halal stalls across Maxwell Food Centre and food chains like Encik Tan and Tenderfresh.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#071B49]">Singapore Laksa (Katong Style)</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">Spicy Seafood Broth</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thick rice vermicelli bathed in a rich, aromatic coconut curry broth infused with dried shrimp, lemongrass, galangal, and turmeric. Garnished with plump prawns, sliced fish cake, cockles, and Vietnamese laksa leaves. The noodles are cut short to allow eating with a soup spoon alone. Look for MUIS-certified laksa specialists.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#071B49]">Charcoal-Grilled Satay</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">Street Food Staple</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Skewers of chicken, beef, or mutton marinated in lemongrass, coriander, and turmeric, then grilled over blazing charcoal until smoky and caramelized. Served alongside sweet and savory spiced peanut sauce, compressed rice cakes (ketupat), sliced cucumbers, and red onions. Best experienced outdoors along Satay Street at Lau Pa Sat after 7:00 PM.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#071B49]">Roti Prata with Curry Dal</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">South Indian Breakfast</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Crispy on the exterior, soft and flaky on the interior, this dough flatbread is hand-stretched, flipped theatrically, and cooked on a hot griddle. Served with fragrant fish, mutton, or lentil dal curry. Available 24 hours at Muslim-Indian eateries throughout Little India, Jalan Besar, and Kampong Glam.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#071B49]">Kaya Toast & Half-Boiled Eggs</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-medium">Traditional Kopitiam</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Crispy charcoal-toasted bread slathered with cold butter and kaya (a sweet, creamy jam made from coconut milk, pandan, and egg). Eaten alongside two runny half-boiled eggs seasoned with dark soy sauce and white pepper, paired with robust local coffee (Kopi) or tea (Teh). Halal-certified outlets of chains like Ya Kun and Toast Box operate across Changi Airport and downtown malls.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Food Caution for Halal Travelers:</strong> Always verify ingredients and preparation methods. Pork, lard, and cooking wine are common in traditional Chinese hawker dishes. Look for the green/black MUIS Halal logo or patronize stalls in Muslim-friendly hawker centers like Lau Pa Sat, Tekka Centre, and Geylang Serai Market.
              </span>
            </div>
          </div>
        </section>

        {/* Section 6: Getting Around */}
        <section id="getting-around" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Train className="w-4 h-4" />
            <span>Transport & Logistics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            6. Getting Around Singapore: MRT, Buses & Airport Transit
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <p>
              Singapore’s public transportation network, overseen by the Land Transport Authority (LTA), is regarded as an international benchmark for efficiency, safety, and cleanliness. You do not need to rent a car or rely heavily on taxis during your stay.
            </p>

            {/* SimplyGo and Payment */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-[#071B49] flex items-center gap-2">
                <Coins className="w-4 h-4 text-[#0969E8]" />
                <span>How to Pay: SimplyGo Contactless System</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Singapore uses the SimplyGo contactless ticketing architecture. International travelers do not need to queue for paper tickets or purchase local transport cards:
              </p>
              <ul className="text-xs text-[#334155] space-y-1.5 list-disc list-inside">
                <li>
                  <strong>Contactless Bank Cards:</strong> Simply tap any foreign Visa or Mastercard credit or debit card directly at the MRT fare gates or bus card readers. The same card can be added to Apple Pay or Google Pay.
                </li>
                <li>
                  <strong>EZ-Link Cards & Singapore Tourist Pass (STP):</strong> Traditional stored-value EZ-Link cards are available at MRT passenger service counters. The Singapore Tourist Pass offers unlimited travel for 1, 2, or 3 days (S$12 to S$29 plus refundable deposit).
                </li>
                <li>
                  <strong>Tap In & Tap Out Rule:</strong> Always tap the same card or device when boarding and exiting MRT stations or buses. Failure to tap out results in the maximum fare being charged.
                </li>
              </ul>
            </div>

            {/* Airport Connection */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-[#071B49] flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#0969E8]" />
                <span>Airport Transfers from Changi Airport</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Reaching the city center from Changi Airport is straightforward, affordable, and stress-free:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">MRT Train (Budget)</div>
                  <div className="text-gray-500 mt-0.5">Approx. S$2.00 | ~35-45 mins</div>
                  <div className="text-gray-600 mt-1">Board at Changi Airport station (CG2) in Terminal 2 or 3, transfer at Tanah Merah to the East West Line directly into City Hall or Bugis.</div>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">Metered Taxi</div>
                  <div className="text-gray-500 mt-0.5">Approx. S$25–S$40 | ~25 mins</div>
                  <div className="text-gray-600 mt-1">Available 24 hours at airport arrival taxi stands. Surcharges apply during peak hours, airport departures, and midnight to 6:00 AM.</div>
                </div>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                  <div className="font-bold text-[#071B49]">Ride-Hailing (Grab / Gojek)</div>
                  <div className="text-gray-500 mt-0.5">Approx. S$20–S$35 | ~25 mins</div>
                  <div className="text-gray-600 mt-1">Book via smartphone app at designated ride-hailing pickup bays in Terminals 1, 2, 3, and 4. Upfront pricing confirmed before booking.</div>
                </div>
              </div>
            </div>

            {/* Strict Transit Rules Notice */}
            <div className="p-4 rounded-xl bg-[#F0F7FF] border border-[#D0E6FF] text-xs text-[#071B49] space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#0969E8]" />
                <span>Strict MRT Rules & Penalties (Rapid Transit Systems Act):</span>
              </div>
              <p className="text-[#334155] leading-relaxed">
                Do not consume any food, snacks, candy, or beverages (even plain bottled water) inside MRT stations or on board trains. Eating and drinking carry fines of up to S$500. Smoking is penalized up to S$1,000, and carrying flammable liquids can result in fines up to S$5,000. Keep snacks packed away in your bag until you exit the fare gates.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Where to Stay */}
        <section id="where-to-stay" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Building2 className="w-4 h-4" />
            <span>Accommodation Planning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            7. Where to Stay in Singapore: Neighborhood Comparison
          </h2>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            Singapore offers a diverse array of neighborhoods, each with distinct character, dining options, and transport connections. Choosing the right base depends on your budget, travel style, and whether you prefer modern luxury or historic ambiance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#071B49]">Marina Bay & Downtown Core</h3>
                <span className="text-[11px] font-bold text-[#0969E8] bg-[#F0F7FF] px-2 py-0.5 rounded">Luxury & Views</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Best for:</strong> Luxury travelers, couples, and first-time visitors seeking iconic skyline views.<br />
                <strong>Vibe:</strong> Glamorous, polished, and scenic. Directly adjacent to Gardens by the Bay, the waterfront promenade, and the financial district.<br />
                <strong>Transport:</strong> Superb via Bayfront, Raffles Place, and Marina Bay MRT stations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#071B49]">Bugis & Kampong Glam</h3>
                <span className="text-[11px] font-bold text-[#0969E8] bg-[#F0F7FF] px-2 py-0.5 rounded">Heritage & Halal Dining</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Best for:</strong> Muslim travelers, boutique hotel enthusiasts, and mid-range budgets.<br />
                <strong>Vibe:</strong> Vibrant, historic, and creative. Steps from Sultan Mosque, bustling Arab Street dining, and trendy Haji Lane boutiques.<br />
                <strong>Transport:</strong> Outstanding connection via Bugis MRT (Downtown & East West Lines).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#071B49]">Chinatown & Tanjong Pagar</h3>
                <span className="text-[11px] font-bold text-[#0969E8] bg-[#F0F7FF] px-2 py-0.5 rounded">Culture & Foodies</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Best for:</strong> Budget to mid-range travelers, street-food lovers, and architecture fans.<br />
                <strong>Vibe:</strong> Atmospheric shophouse boutique hotels, energetic street markets, and famous hawker centers like Maxwell and Amoy Street.<br />
                <strong>Transport:</strong> Served by Chinatown, Maxwell, and Telok Ayer MRT stations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#071B49]">Orchard Road</h3>
                <span className="text-[11px] font-bold text-[#0969E8] bg-[#F0F7FF] px-2 py-0.5 rounded">Retail & Families</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Best for:</strong> Dedicated shoppers, business travelers, and families seeking international brand hotels.<br />
                <strong>Vibe:</strong> Sleek commercial boulevard lined with multi-story luxury malls, department stores, and indoor entertainment.<br />
                <strong>Transport:</strong> Excellent via Orchard, Somerset, and Dhoby Ghaut interchange stations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Flexible 3-Day Itinerary */}
        <section id="itinerary" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <CalendarDays className="w-4 h-4" />
            <span>Trip Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            8. A Flexible 3-Day Singapore Itinerary
          </h2>
          <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
            This balanced, realistic 3-day itinerary groups sights by geographic proximity to minimize transit time and help travelers avoid the midday tropical heat.
          </p>

          <div className="space-y-4 pt-1">
            {/* Day 1 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#071B49]">
                  Day 1: Marina Bay, Merlion Park & Futuristic Gardens
                </h3>
                <span className="text-xs font-bold text-[#0969E8] bg-[#F0F7FF] px-3 py-1 rounded-full">Day 1</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                <p>
                  <strong>Morning:</strong> Begin at Merlion Park at One Fullerton for cool morning breezes and panoramic photos with the iconic Merlion statue. Stroll across the Esplanade Bridge, pass the distinctive durian-shaped domes of the Esplanade Theatres, and cross the pedestrian Helix Bridge to Marina Bay Sands.
                </p>
                <p>
                  <strong>Afternoon:</strong> Enter the climate-controlled Flower Dome and Cloud Forest conservatories at Gardens by the Bay. Walk along the aerial cloud walkways beneath the 35-meter indoor waterfall, exploring rare montane plant life away from the midday heat.
                </p>
                <p>
                  <strong>Evening:</strong> Gather at the Supertree Grove for the free Garden Rhapsody light and sound show (typically at 7:45 PM and 8:45 PM). Walk to historic Lau Pa Sat festival market to enjoy grilled satay under the stars along Boon Tat Street before catching the Spectra water and light show back at Marina Bay Sands.
                </p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#071B49]">
                  Day 2: Cultural Enclaves, Historic Mosques & Vibrant Markets
                </h3>
                <span className="text-xs font-bold text-[#0969E8] bg-[#F0F7FF] px-3 py-1 rounded-full">Day 2</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                <p>
                  <strong>Morning:</strong> Take the MRT to Chinatown (DT19/NE4). Explore the multi-tiered Buddha Tooth Relic Temple, admire the ornate gopuram towers of Sri Mariamman Temple, and visit historic Masjid Jamae along South Bridge Road. Stop at Maxwell Food Centre for breakfast snacks or fresh fruit juices.
                </p>
                <p>
                  <strong>Afternoon:</strong> Ride the Downtown Line to Little India (DT12/NE7). Walk along Serangoon Road, browse colorful flower garland stands, and sample authentic roti prata at Tekka Centre. Explore the multi-story Mustafa Centre for international travel essentials and souvenirs.
                </p>
                <p>
                  <strong>Late Afternoon & Evening:</strong> Walk or take a brief bus ride into Kampong Glam. Visit historic Sultan Mosque (Masjid Sultan), photograph the colorful street art murals along Haji Lane, and enjoy dinner at an outdoor cafe on Bussorah Street. Browse traditional attar perfumes and batiks along Arab Street.
                </p>
              </div>
            </div>

            {/* Day 3 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#071B49]">
                  Day 3: Sentosa Beach Relaxation OR Heritage Gardens & Jewel Changi
                </h3>
                <span className="text-xs font-bold text-[#0969E8] bg-[#F0F7FF] px-3 py-1 rounded-full">Day 3</span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
                <p>
                  <strong>Option A (Family & Coastal Adventure):</strong> Board the Sentosa Express or Singapore Cable Car to Sentosa Island. Spend the morning discovering the marine biodiversity of S.E.A. Aquarium, relax along the palm-fringed sands of Siloso or Palawan Beach, and enjoy coastal lunch at a beachfront cafe.
                </p>
                <p>
                  <strong>Option B (Botanical Nature & Heritage Museum Trail):</strong> Spend a tranquil morning walking through the UNESCO World Heritage Singapore Botanic Gardens, visiting the renowned National Orchid Garden. In the afternoon, visit the National Museum of Singapore or the Asian Civilisations Museum along the historic Singapore River.
                </p>
                <p>
                  <strong>Evening Finale at Jewel Changi:</strong> Travel to Changi Airport 3 to 4 hours prior to flight departure. Store luggage at early check-in, marvel at the 40-meter indoor HSBC Rain Vortex waterfall, and explore the Shiseido Forest Valley before your flight home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Practical Travel Tips */}
        <section id="travel-tips" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <Info className="w-4 h-4" />
            <span>Essential Advice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            9. Practical Travel Tips: Money, Connectivity, Laws & Comfort
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Coins className="w-4 h-4 text-[#0969E8]" />
                  <span>Money & Cashless Payments</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Singapore is virtually cashless. Contactless cards, Apple Pay, and Google Pay are accepted by taxis, restaurants, pharmacies, and even many modern hawker stalls. Keep S$10 to S$30 in small notes (S$2, S$5, S$10) for traditional cash-only hawker stalls and market purchases. ATMs are widely available across MRT stations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0969E8]" />
                  <span>Local Laws & Strict Fines</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Singapore maintains strict civic laws that keep the city exceptionally clean and safe. Chewing gum importation and sale are prohibited. Littering, spitting, and jaywalking carry steep fines. Vaping, e-cigarettes, and shisha are completely illegal to possess, buy, or bring into the country. Strict drug laws carry severe penalties.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <Umbrella className="w-4 h-4 text-[#0969E8]" />
                  <span>Weather Preparation & Clothing</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Always carry a small compact umbrella for sudden afternoon showers or bright sun. Bring a light jacket, sweater, or scarf; while outside is hot and humid, indoor shopping malls, MRT trains, and museums maintain aggressive air conditioning (often set around 19°C–21°C).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#0969E8]" />
                  <span>Accessibility & Family Travel</span>
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Singapore is one of the world’s most accessible cities. Every MRT station features step-free elevator access and wide fare gates. Buses have low boarding floors and wheelchair ramps. Wide sidewalks, tactile paving, and curb cuts make traveling with baby strollers or wheelchairs effortless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Common Mistakes to Avoid */}
        <section id="common-mistakes" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <AlertTriangle className="w-4 h-4" />
            <span>Avoid Travel Pitfalls</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            10. Common Mistakes to Avoid in Singapore
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
              <strong className="text-[#071B49]">1. Overpacking the Itinerary:</strong>
              <p>Singapore looks small on a map, but heat, humidity, and extensive walking across expansive attractions (like Sentosa or Gardens by the Bay) drain energy quickly. Limit yourself to 2 or 3 major sights per day and rest during the hottest afternoon hours.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
              <strong className="text-[#071B49]">2. Forgetting the Strict Transit Rules:</strong>
              <p>Do not take sips of water, chew candy, or carry open drinks through MRT fare gates or onto trains. Plainclothes inspectors enforce fines up to S$500.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
              <strong className="text-[#071B49]">3. Forgetting the Mandatory SG Arrival Card:</strong>
              <p>Do not wait until you land to fill out your electronic health declaration. Complete the free SG Arrival Card via the official ICA portal within 3 days before your departure to avoid immigration delays.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
              <strong className="text-[#071B49]">4. Bringing Vapes or E-Cigarettes:</strong>
              <p>Electronic cigarettes, vape pods, and accessories are strictly banned in Singapore. Carrying them across customs checkpoints can result in confiscation, heavy fines up to S$10,000, and legal prosecution.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1">
              <strong className="text-[#071B49]">5. Not Booking Conservatories in Advance:</strong>
              <p>The Flower Dome and Cloud Forest frequently reach capacity during weekends, holidays, and evening light show hours. Purchase timed-entry tickets online in advance to bypass ticket counter queues.</p>
            </div>
          </div>
        </section>

        {/* Section 11: Interactive Checklist */}
        <section id="checklist" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <CheckSquare className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            11. Singapore Travel Preparation Checklist
          </h2>
          <p className="text-xs sm:text-sm text-[#5E6B82]">
            Track your pre-trip essentials. Check off completed items to stay organized for your journey to Singapore.
          </p>

          <div className="space-y-4 pt-2">
            {checklistSections.map((sec, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs space-y-3">
                <h3 className="text-sm font-bold text-[#071B49] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0969E8]" />
                  <span>{sec.title}</span>
                </h3>
                <div className="space-y-2">
                  {sec.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-colors ${
                          isChecked ? 'bg-[#F0F7FF] text-[#071B49]' : 'hover:bg-[#F8FAFC] text-[#334155]'
                        }`}
                      >
                        <div className="mt-0.5 text-[#0969E8]">
                          {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-gray-400" />}
                        </div>
                        <span className={`text-xs sm:text-sm ${isChecked ? 'line-through text-gray-500' : ''}`}>
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

        {/* Section 12: Frequently Asked Questions */}
        <section id="faq" className="space-y-4 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0969E8]">
            <HelpCircle className="w-4 h-4" />
            <span>Traveler Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight">
            12. Frequently Asked Questions About Visiting Singapore
          </h2>

          <div className="space-y-3 pt-2">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden transition-shadow shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-[#071B49] text-sm sm:text-base hover:text-[#0969E8] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0969E8] shrink-0 transition-transform duration-200 ${
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

        {/* Section 13: Conclusion & Related Guides */}
        <section id="conclusion" className="space-y-6 pt-4">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#071B49] via-[#09357A] to-[#0969E8] text-white space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Explore Southeast Asia Seamlessly</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              A World-Class Urban Masterpiece Awaiting Your Discovery
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
              From the architectural splendor of Marina Bay Sands and the cooled conservatories of Gardens by the Bay to the rich cultural heritage of Kampong Glam, Chinatown, and Little India, Singapore provides an unforgettable, effortless travel experience. Thoughtful planning, light packing, and an open culinary palate will make your journey smooth and rewarding. Explore our neighboring TravelDuurDesh guides and travel utilities to continue planning your adventures.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('flights')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#071B49] hover:bg-[#F0F7FF] transition-colors cursor-pointer shadow-sm"
              >
                Search Flights to Singapore (SIN)
              </button>
              <button
                type="button"
                onClick={() => onNavigate('tools')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors cursor-pointer"
              >
                Currency Converter (SGD)
              </button>
              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/kuala-lumpur-travel-guide')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors cursor-pointer"
              >
                Explore Kuala Lumpur Guide
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
                onClick={() => onNavigate('blog/travel-guides/kuala-lumpur-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Southeast Asia
                </div>
                <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2">
                  Kuala Lumpur Travel Guide: Best Places to Visit and How to Plan Your Trip
                </div>
                <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                  <span>18 min read</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#0969E8]" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/dubai-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Middle East
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
                onClick={() => onNavigate('blog/travel-guides/istanbul-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Eurasia
                </div>
                <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2">
                  Istanbul Travel Guide: Best Places to Visit, Things to Do, and Travel Tips
                </div>
                <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                  <span>21 min read</span>
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
