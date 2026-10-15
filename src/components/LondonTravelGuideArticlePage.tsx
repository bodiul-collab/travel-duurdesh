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
  HeartHandshake,
  Trees,
  ShoppingBag,
  ExternalLink,
  Luggage,
  CalendarDays,
  FileText
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { BlogPost, LONDON_ARTICLE } from '../data/blogData';

interface LondonTravelGuideArticlePageProps {
  post?: BlogPost;
  onNavigate: (pageId: string) => void;
}

export const LondonTravelGuideArticlePage: React.FC<LondonTravelGuideArticlePageProps> = ({
  post = LONDON_ARTICLE,
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
      title: 'Documentation & Pre-Trip Planning',
      items: [
        {
          id: 'lon-chk-1',
          text: 'Verify passport validity and current UK entry or visa requirements through official UK government portals for your nationality.'
        },
        {
          id: 'lon-chk-2',
          text: 'Check whether your preferred museums or heritage attractions recommend pre-booked timed-entry tickets.'
        },
        {
          id: 'lon-chk-3',
          text: 'Review ceremonial schedules and palace opening calendars on official royal websites prior to finalizing your day plans.'
        },
        {
          id: 'lon-chk-4',
          text: 'Confirm that your debit or credit cards support contactless payments for seamless transit on the Transport for London network.'
        }
      ]
    },
    {
      title: 'Transportation & Logistics',
      items: [
        {
          id: 'lon-chk-5',
          text: 'Compare flight arrival airports (Heathrow, Gatwick, Stansted, Luton, London City) to select the best route for your itinerary.'
        },
        {
          id: 'lon-chk-6',
          text: 'Familiarize yourself with the London Underground map and verify real-time status through official Transport for London travel alerts.'
        },
        {
          id: 'lon-chk-7',
          text: 'Cluster nearby attractions into geographical zones (Westminster, South Bank, South Kensington) to minimize transit time.'
        },
        {
          id: 'lon-chk-8',
          text: 'Download an offline London map and secure an international mobile data connection or eSIM for navigation.'
        }
      ]
    },
    {
      title: 'Packing & Daily Comfort',
      items: [
        {
          id: 'lon-chk-9',
          text: 'Pack durable, comfortable walking shoes designed for 15,000+ daily steps across historic cobblestones and transit corridors.'
        },
        {
          id: 'lon-chk-10',
          text: 'Bring versatile layering pieces and a waterproof rain jacket or compact wind-resistant umbrella for unpredictable weather.'
        },
        {
          id: 'lon-chk-11',
          text: 'Pack a UK Type-G 3-pin plug adapter and a portable power bank for mobile ticketing and photo documentation.'
        },
        {
          id: 'lon-chk-12',
          text: 'Carry a reusable water bottle and compact tote bag for neighborhood market purchases and daily exploration.'
        }
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How many days should I plan for London?',
      answer:
        'A stay of four to five full days is ideal for a well-rounded first visit to London. This timeframe allows travelers to visit landmark heritage sites along the River Thames, explore world-renowned national museums in South Kensington and Bloomsbury, stroll through historic royal parks, and experience vibrant neighborhoods like Covent Garden and Camden without feeling excessively rushed. Travelers with seven days or more can comfortably incorporate day trips to historic towns such as Windsor, Oxford, or Cambridge.'
    },
    {
      question: 'What is London best known for?',
      answer:
        'London is celebrated globally for its rich blend of historic royal heritage, monumental architecture, world-class cultural institutions, and vibrant urban neighborhoods. Major hallmarks include iconic landmarks such as Big Ben, Westminster Abbey, Buckingham Palace, and the Tower of London; free access to national museums like the British Museum and Natural History Museum; expansive royal green spaces; West End theatrical productions; and an extraordinarily diverse international culinary scene.'
    },
    {
      question: 'Can I explore London using public transportation?',
      answer:
        'Yes. London possesses one of the world’s most extensive and efficient public transportation networks, operated by Transport for London (TfL). Visitors can navigate effortlessly across the city using the Underground (the Tube), double-decker red buses, the Overground, the Elizabeth Line, Docklands Light Railway (DLR), and river buses. Contactless payment cards and mobile wallets (Apple Pay, Google Pay) work across all TfL services, automatically applying daily fare caps so visitors never pay more than the designated maximum.'
    },
    {
      question: 'Do I need to book popular attractions in advance?',
      answer:
        'Booking in advance is strongly recommended, especially during peak travel months and school holiday periods. While general admission to the permanent galleries of national museums (such as the British Museum, National Gallery, and Natural History Museum) is free, timed-entry tickets are often recommended to guarantee entry and bypass long standby lines. Paid historic attractions such as the Tower of London, Westminster Abbey, and seasonal palace state rooms frequently sell out their most popular visiting slots well ahead of time.'
    },
    {
      question: 'Is London suitable for a first-time visitor to the UK?',
      answer:
        'London is an exceptional entry point for first-time visitors to the United Kingdom. As an international gateway with multilingual signage, comprehensive public transport, walk-friendly central districts, extensive tourist information, and high safety standards, it is very accessible. The city’s major rail terminals also provide swift, direct rail connections to scenic regions across England, Scotland, and Wales.'
    },
    {
      question: 'What should I pack for London?',
      answer:
        'Practical packing for London centers on versatility and comfort. High-priority essentials include broken-in walking shoes for miles of walking, lightweight layers that can be adjusted as temperatures shift throughout the day, a dependable waterproof jacket or compact umbrella for occasional rain showers, a UK Type-G power adapter, a portable phone charger, and any required travel documentation. Even in summer, carrying a light sweater or jacket for breezy evenings along the river is advisable.'
    },
    {
      question: 'Do I need a visa to visit the UK?',
      answer:
        'Visa requirements depend entirely on your citizenship, country of residence, and the purpose and duration of your trip. Travelers from many countries may enter the UK for tourism without a traditional visa for up to six months, while others must obtain a Standard Visitor Visa in advance. Additionally, the UK is rolling out an Electronic Travel Authorisation (ETA) scheme for eligible non-visa nationals. Always verify current entry requirements directly through the official UK Government website (gov.uk) before making non-refundable travel bookings.'
    },
    {
      question: 'Can London be combined with other UK destinations?',
      answer:
        'Yes. London is the central hub of Great Britain’s passenger rail network. Frequent high-speed trains depart from London’s major terminals—such as Paddington, King’s Cross, Euston, and St Pancras—allowing travelers to reach Oxford, Cambridge, Brighton, Bath, or Windsor in one to two hours, and Edinburgh, Manchester, or York in under five hours. Combining London with other UK regions creates a memorable and varied itinerary.'
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
              { label: 'London Travel Guide', path: 'blog/travel-guides/london-travel-guide' }
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
              London, United Kingdom
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
              • Discover London
            </a>
            <a href="#why-visit" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 1. Why Visit London?
            </a>
            <a href="#best-places" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 2. Best Places to Visit
            </a>
            <a href="#when-to-visit" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 3. When Is a Good Time?
            </a>
            <a href="#how-to-get-there" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 4. How to Get to London
            </a>
            <a href="#getting-around" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 5. Getting Around London
            </a>
            <a href="#where-to-stay" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 6. Where to Stay
            </a>
            <a href="#food-dining" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 7. Food & Dining
            </a>
            <a href="#etiquette" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 8. Culture & Etiquette
            </a>
            <a href="#what-to-pack" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 9. What to Pack
            </a>
            <a href="#itinerary" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 10. Sample 3-Day Itinerary
            </a>
            <a href="#budgeting" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 11. Budgeting for London
            </a>
            <a href="#checklist" className="text-[#071B49] hover:text-[#0969E8] font-medium transition-colors">
              • 12. Interactive Checklist
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
        {/* Introduction */}
        <section id="intro" className="prose max-w-none text-[#101C36] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#0969E8]" />
            <span>Introduction: Discover London</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#334155]">
            London stands as the capital of the United Kingdom and one of the world’s most dynamic, culturally layered metropolises. Built along the winding banks of the River Thames over two millennia, London seamlessly bridges ancient Roman foundations and medieval strongholds with soaring modern engineering, internationally acclaimed theater, sprawling royal parklands, and a vibrant mosaic of distinct urban quarters.
          </p>
          <p className="text-base leading-relaxed text-[#334155]">
            What makes London uniquely rewarding for travelers is its incredible versatility. A fulfilling itinerary depends substantially on your specific interests, available travel time, personal mobility, overall budget, and the dates of your journey. Whether you are traveling as a family seeking world-class interactive museums, an architecture admirer fascinated by centuries of royal pageantry, or a traveler eager to explore historic markets and global street cuisine, thoughtful planning will help you craft an enriching and memorable British journey.
          </p>
        </section>

        {/* Section 1: Why Visit London? */}
        <section id="why-visit" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Landmark className="w-6 h-6 text-[#0969E8]" />
            <span>1. Why Visit London?</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            London offers a concentration of cultural, historical, and architectural experiences matched by very few cities worldwide. Regardless of how many times you return, the city consistently presents new layers to discover:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#0969E8]" />
                <span>Historic Landmarks & Architecture</span>
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Marvel at nine centuries of Norman and Tudor masonry at the Tower of London, listen to the acoustic chime of Elizabeth Tower (Big Ben), admire the Gothic splendour of Westminster Abbey, and view the contemporary silhouette of the City’s financial district.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0969E8]" />
                <span>World-Class Museums & Culture</span>
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                London is home to many of the planet's greatest cultural archives. Visitors enjoy free access to the permanent galleries of national institutions including the British Museum, the National Gallery, Tate Modern, and the Victoria and Albert Museum.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <Trees className="w-4 h-4 text-[#0969E8]" />
                <span>Royal Parks & Expansive Green Spaces</span>
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Nearly half of Greater London consists of green and blue space. Royal parks like Hyde Park, Kensington Gardens, Regent’s Park, and St James’s Park provide peaceful retreats right alongside bustling metropolitan avenues.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#0969E8]" />
                <span>Distinct Neighborhoods & Markets</span>
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Each London borough possesses its own individual rhythm—from the vintage record stalls and alternative canals of Camden to the vibrant street performers in Covent Garden, the antique arcade stalls of Portobello Road, and the riverside food stalls of Borough Market.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#0969E8]" />
                <span>West End Theater & Entertainment</span>
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Alongside Broadway, London’s West End represents the pinnacle of global English-language performing arts, hosting legendary musicals, classic Shakespearean revivals, and cutting-edge theatrical productions every night of the week.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <h3 className="text-base font-bold text-[#071B49] flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-[#0969E8]" />
                <span>Vibrant International Gastronomy</span>
              </h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Reflecting its international population, London’s culinary landscape spans traditional British afternoon tea and pie-and-mash shops to authentic South Asian curries in East London, Middle Eastern grills along Edgware Road, and artisanal European patisseries.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Best Places to Visit */}
        <section id="best-places" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#0969E8]" />
            <span>2. Best Places to Visit in London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            When planning your visits, remember that opening hours, special exhibitions, ticket prices, and entry requirements vary across seasons and venues. Always verify current visitor information directly with official attraction operators before your visit.
          </p>

          {/* Westminster and Big Ben */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Westminster and Big Ben
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Westminster serves as the political and ceremonial heartbeat of the United Kingdom. Here, the Palace of Westminster—home to the Houses of Parliament—stretches dramatically alongside the River Thames, dominated by Elizabeth Tower housing the historic Great Bell commonly known as Big Ben. Just across Parliament Square stands Westminster Abbey, the storied coronation site of English monarchs since 1066 and the resting place of renowned monarchs, poets, and scientists. Strolling across Westminster Bridge provides classic photographic angles of Parliament against the river.
            </p>
          </div>

          {/* Buckingham Palace */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Buckingham Palace
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              As the administrative headquarters and official London residence of the British monarch, Buckingham Palace is an enduring symbol of British royal tradition. Visitors gather outside the monumental wrought-iron gates and Victoria Memorial along The Mall to witness the ceremonial Changing of the Guard. Because ceremonial schedules and access to the interior State Rooms vary by season, weather, and royal engagements, always verify official schedules through the Royal Collection Trust before planning your visit.
            </p>
          </div>

          {/* The Tower of London */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The Tower of London
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Perched on the north bank of the Thames, the Tower of London is a UNESCO World Heritage Site with nearly one thousand years of documented history. Founded by William the Conqueror in the 1070s as the White Tower, this imposing fortress has served as a royal castle, notorious prison, royal armory, and repository of the Crown Jewels. Travelers are encouraged to check official visitor information from Historic Royal Palaces for current admission guidelines, guided Yeoman Warder tours, and opening times.
            </p>
          </div>

          {/* Tower Bridge */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Tower Bridge
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Tower Bridge is widely recognized for its iconic neo-Gothic twin towers and suspension bascule design. Spanning the River Thames adjacent to the Tower of London, this Victorian engineering marvel is frequently photographed. Visitors should take care not to confuse Tower Bridge with the more modern, utilitarian London Bridge located roughly half a mile upstream. A dedicated public exhibition allows travelers to walk across the high-level glass floor walkways and view the Victorian steam engine rooms.
            </p>
          </div>

          {/* The British Museum */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The British Museum
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Located in the Bloomsbury district, the British Museum houses an extraordinary global collection dedicated to human history, art, and culture. The building's centerpiece is the Great Court, covered by a magnificent tessellated glass roof surrounding the historic Reading Room. Notable exhibits include the Rosetta Stone, Parthenon sculptures, and extensive Egyptian mummification galleries. While admission to the permanent collection is free, booking a timed-entry ticket online is strongly advised to prevent waiting in outdoor queues.
            </p>
          </div>

          {/* The Natural History Museum and South Kensington */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The Natural History Museum and South Kensington
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              South Kensington is often referred to as London’s museum quarter. Anchored along Exhibition Road, this district houses the magnificent Romanesque Natural History Museum—famed for its soaring Hintze Hall with a blue whale skeleton—as well as the Science Museum and the Victoria and Albert Museum (V&A). The area attracts travelers of all ages, though visitors should note that individual entry arrangements, security queues, and special ticketed exhibitions can vary across the year.
            </p>
          </div>

          {/* The South Bank and River Thames */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              The South Bank and River Thames
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              The South Bank is a vibrant pedestrian promenade stretching from Westminster Bridge toward Tower Bridge. Walking along this riverside trail connects visitors to key cultural hubs such as the Southbank Centre, the National Theatre, the Tate Modern art gallery (housed in a converted former power station), and Shakespeare’s Globe. Along the walk, visitors can browse open-air book markets under Waterloo Bridge and enjoy street performers, subject to weather conditions and seasonal schedules.
            </p>
          </div>

          {/* Covent Garden and the West End */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Covent Garden and the West End
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Covent Garden centers around a lively 19th-century piazza filled with boutique craft stalls, cafes, and licensed street entertainers performing outside St Paul’s Church. Heading westward leads into the bustling West End, encompassing Leicester Square, Piccadilly Circus, Chinatown, and historic theater corridors along Shaftesbury Avenue. It is an exciting district for evening strolls, dining, and live entertainment, with travelers advised to purchase legitimate theater tickets directly through official box offices.
            </p>
          </div>

          {/* Camden Market */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Camden Market
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Situated along Regent’s Canal in north London, Camden Market is famous for its eclectic, bohemian energy. Spanning the historic Camden Lock and Stables Market, this lively trading complex features hundreds of independent stalls offering vintage fashion, handmade jewelry, artwork, and international street food vendors. The market offers an energetic contrast to the formal royal quarters of central London, with weekend visits typically being the busiest.
            </p>
          </div>

          {/* Hyde Park and Other Green Spaces */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="text-xl font-bold text-[#071B49]">
              Hyde Park and Other Green Spaces
            </h3>
            <p className="text-sm leading-relaxed text-[#334155]">
              Covering 350 acres in central London, Hyde Park is one of the city’s largest and most famous royal parks. Travelers can stroll around the Serpentine lake, view the Diana Memorial Fountain, or admire the adjacent Kensington Gardens with its historic palace. Together with Green Park, St James’s Park, and Regent’s Park, London’s green network provides a serene, restorative break from bustling city sidewalks.
            </p>
          </div>
        </section>

        {/* Section 3: When Is a Good Time to Visit London? */}
        <section id="when-to-visit" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Sun className="w-6 h-6 text-[#0969E8]" />
            <span>3. When Is a Good Time to Visit London?</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            London is a year-round travel destination, though seasonal factors such as daylight hours, average temperatures, precipitation patterns, and visitor volume will noticeably shape your experience. Travelers should check current meteorological forecasts and official municipal event calendars when finalizing dates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Spring (March to May)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Spring brings lengthening daylight, blooming flowers across royal parks, and moderate crowds. Weather can alternate quickly between crisp sunshine and light showers, making layered clothing essential.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Summer (June to August)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Summer features the warmest temperatures and the longest daylight hours, with dusk extending past 9:00 PM. This is peak season for international tourism, open-air festivals, and theater, resulting in higher demand for popular attraction tickets.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Autumn (September to November)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Autumn offers golden foliage across royal gardens and pleasant daytime temperatures in September and October. Visitor crowds ease after the summer school break, though rainfall becomes more frequent later in the season.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
              <h3 className="text-sm font-bold text-[#071B49]">Winter (December to February)</h3>
              <p className="text-xs text-[#5E6B82] leading-relaxed">
                Winter is characterized by crisp, cool weather and shorter daylight hours, balanced by festive holiday illuminations along Regent Street and Covent Garden. Indoor museums, galleries, and historic cozy tea rooms offer comfortable, unhurried touring.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How to Get to London */}
        <section id="how-to-get-there" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Plane className="w-6 h-6 text-[#0969E8]" />
            <span>4. How to Get to London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            As a premier international aviation crossroads, London is served by six commercial airports. The most suitable arrival airport depends on your departure origin, chosen carrier, budget, and where you plan to stay in the city:
          </p>
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">London Heathrow (LHR):</span> The UK’s primary long-haul hub located to the west of the city, connected to central London by the Piccadilly Tube line, the high-frequency Elizabeth Line, and dedicated express rail services into Paddington Station.
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">London Gatwick (LGW):</span> Located south of the capital, serving extensive European, transatlantic, and charter flights with direct mainline trains into Victoria and London Bridge stations.
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">London Stansted (STN) & London Luton (LTN):</span> Situated northeast and northwest respectively, these airports host numerous European budget carriers and are linked by regular airport express coaches and rail links into central London.
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1">
              <span className="font-bold text-[#071B49] text-sm">London City Airport (LCY):</span> Positioned in the Royal Docks close to Canary Wharf and the financial district, catering primarily to short-haul European business connections via the Docklands Light Railway.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F0F7FF] border border-[#D0E6FF] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0969E8] shrink-0 mt-0.5" />
            <div className="text-xs text-[#071B49] leading-relaxed space-y-1">
              <div className="font-bold">Official Entry & Visa Requirements</div>
              <p>
                International travelers must verify current UK visa and entry regulations directly with the official UK Government website (<a href="https://www.gov.uk/check-uk-visa" target="_blank" rel="noopener noreferrer" className="text-[#0969E8] font-bold underline">gov.uk/check-uk-visa</a>). Requirements vary by nationality, trip purpose, and length of stay.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('flights')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0969E8] text-white hover:bg-[#0759c5] transition-colors cursor-pointer"
                >
                  <Plane className="w-3.5 h-3.5" />
                  <span>Compare Flights on TravelDuurDesh Flights Page</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Getting Around London */}
        <section id="getting-around" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Train className="w-6 h-6 text-[#0969E8]" />
            <span>5. Getting Around London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            London’s public transit network, managed by Transport for London (TfL), is comprehensive, clean, and easily navigated by international visitors. Understanding the primary transit modes will streamline your days:
          </p>
          <ul className="space-y-2 text-sm text-[#334155] list-disc list-inside">
            <li>
              <strong>The Underground (The Tube):</strong> With 11 color-coded lines, the Tube is the fastest way to travel across long central distances. Stations are clearly marked with the famous red-and-blue roundel emblem.
            </li>
            <li>
              <strong>London Buses:</strong> Iconic red double-decker buses offer panoramic sightseeing routes at economical rates, with the top deck providing scenic vantage points across major bridges and avenues.
            </li>
            <li>
              <strong>The Elizabeth Line & Overground:</strong> These modern, high-capacity lines provide rapid east-west and suburban connections with spacious, air-conditioned carriages and full step-free accessibility at many stations.
            </li>
            <li>
              <strong>Walking:</strong> Central London is surprisingly compact and walkable. Many adjacent Tube stations (such as Leicester Square and Covent Garden) are just a short 5-minute walk apart above ground.
            </li>
            <li>
              <strong>Licensed Black Cabs & Ride-Hailing:</strong> Traditional black taxis can be hailed on the street, while app-based ride-hailing provides convenient door-to-door options when traveling late at night or with luggage.
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
            <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-[#0969E8]" />
              <span>Contactless Payment & Fare Capping</span>
            </div>
            <p className="text-xs text-[#5E6B82] leading-relaxed">
              You do not need to buy paper tickets for public transit. Simply tap any contactless debit card, credit card, or enabled smartphone (Apple Pay or Google Pay) at the yellow readers when entering and exiting stations. TfL automatically applies daily and weekly fare caps, guaranteeing you pay the lowest possible rate for your travel. Always verify current fare tables and service updates directly through official TfL channels.
            </p>
          </div>
        </section>

        {/* Section 6: Where to Stay */}
        <section id="where-to-stay" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-[#0969E8]" />
            <span>6. Where to Stay in London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Choosing where to base yourself in London depends primarily on your travel style, target attractions, budget, and accessibility needs. Proximity to a well-connected Underground station on major lines (such as the Piccadilly, Central, or Jubilee lines) is generally the most important factor:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">West End & Covent Garden</h3>
              <p className="text-xs text-[#5E6B82]">
                Ideal for travelers seeking immediate walking access to theaters, historic dining, shopping streets, and vibrant nightlife, though room rates tend to be higher.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">South Kensington & Chelsea</h3>
              <p className="text-xs text-[#5E6B82]">
                An elegant residential borough popular with families and museum enthusiasts, featuring quiet garden squares, tree-lined streets, and direct museum access.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">King's Cross & St Pancras</h3>
              <p className="text-xs text-[#5E6B82]">
                A major transit interchange with multiple Underground lines, domestic rail connections, and the Eurostar terminal, offering competitive mid-range hotel choices.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5">
              <h3 className="text-sm font-bold text-[#071B49]">The South Bank & Waterloo</h3>
              <p className="text-xs text-[#5E6B82]">
                Convenient for riverside walking enthusiasts and families wanting easy access to Westminster, the London Eye, and riverside dining venues.
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
              <span>Explore Central London Neighborhoods on TravelDuurDesh Hotels Page</span>
            </button>
          </div>
        </section>

        {/* Section 7: Food and Dining in London */}
        <section id="food-dining" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <UtensilsCrossed className="w-6 h-6 text-[#0969E8]" />
            <span>7. Food and Dining in London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            London’s culinary reputation has evolved dramatically over recent decades, establishing itself as one of the culinary capitals of the world. The city’s dining landscape is shaped by historic traditions alongside dynamic global influences:
          </p>
          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1 text-xs text-[#334155]">
              <div className="font-bold text-[#071B49] text-sm">Classic British Dining & Afternoon Tea</div>
              <p>
                Sampling traditional British fare—such as beer-battered fish and chips, Sunday roast with Yorkshire pudding, and savory pies—remains a quintessential London experience. Afternoon tea service, complete with warm scones, clotted cream, and finger sandwiches, is celebrated across historic hotels, department stores, and museum tea salons.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1 text-xs text-[#334155]">
              <div className="font-bold text-[#071B49] text-sm">Historic Food Markets</div>
              <p>
                London’s historic markets are fantastic hubs for culinary exploration. Borough Market near London Bridge is famed for its artisanal breads, farmhouse cheeses, and fresh hot street food dishes. In East London, Spitalfields and Brick Lane offer extensive street delicacies, while Maltby Street Market provides weekend culinary tastings.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-1 text-xs text-[#334155]">
              <div className="font-bold text-[#071B49] text-sm">Halal, Vegetarian & Dietary-Conscious Dining</div>
              <p>
                Due to its diverse demographics, London caters widely to varied dietary preferences. Travelers can find extensive halal-friendly dining along Edgware Road (Middle Eastern mezze and grilled meats), Whitechapel (South Asian specialties), and Bayswater, alongside vegetarian, vegan, and gluten-free dining options across Soho and Covent Garden. Visitors should always verify menus, current preparation practices, and dietary certifications directly with restaurant staff.
              </p>
            </div>
          </div>

          <div className="pt-1">
            <button
              type="button"
              onClick={() => onNavigate('food')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#F0F7FF] text-[#0969E8] hover:bg-[#EAF2FB] border border-[#D0E6FF] transition-colors cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Explore Food & Travel Inspirations on TravelDuurDesh</span>
            </button>
          </div>
        </section>

        {/* Section 8: Culture and Practical Etiquette */}
        <section id="etiquette" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-[#0969E8]" />
            <span>8. Culture and Practical Etiquette</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Londoners are generally polite, helpful, and accustomed to international visitors. Observing simple local norms will ensure smooth and courteous interactions throughout your trip:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Stand on the Right</div>
              <p className="text-[#5E6B82]">
                On all London Underground escalators, stand strictly on the right side. The left side is reserved for commuters walking up or down.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Respect the Queue</div>
              <p className="text-[#5E6B82]">
                Queuing is a deeply ingrained cultural practice in Britain. Always join the end of the line at bus stops, ticket counters, and cafes without cutting ahead.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Museum & Religious Courtesy</div>
              <p className="text-[#5E6B82]">
                Respect quiet zones in historic churches and galleries, avoid flash photography where prohibited, and adhere to venue-specific security protocols.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Photography Etiquette</div>
              <p className="text-[#5E6B82]">
                While street photography in public squares is widespread, always ask permission before taking close-up portraits of performers, children, or shopkeepers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: What to Pack */}
        <section id="what-to-pack" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Luggage className="w-6 h-6 text-[#0969E8]" />
            <span>9. What to Pack for London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            Because London weather can fluctuate throughout a single afternoon and sightseers walk substantial distances daily, sensible packing makes a noticeable difference to your comfort:
          </p>
          <div className="space-y-2 text-sm text-[#334155]">
            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0" />
              <span><strong>Comfortable Walking Shoes:</strong> Durable, cushioned footwear suitable for miles of walking on stone pavements and navigating Tube stairways.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0" />
              <span><strong>Weather-Adaptable Layers:</strong> Breathable t-shirts, light cardigans, and a versatile mid-weight jacket that can be added or removed as needed.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0" />
              <span><strong>Rain Protection:</strong> A hooded water-resistant jacket or a compact, wind-resistant travel umbrella for passing showers.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0" />
              <span><strong>Electronics & Power:</strong> A standard UK Type-G 3-pin plug adapter, a high-capacity mobile power bank, and charging cables.</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0" />
              <span><strong>Personal Essentials & Documentation:</strong> Passport, digital and printed travel booking confirmations, prescription medications, and contactless bank cards.</span>
            </div>
          </div>
        </section>

        {/* Section 10: Sample Three-Day London Itinerary */}
        <section id="itinerary" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Compass className="w-6 h-6 text-[#0969E8]" />
            <span>10. Sample Three-Day London Itinerary</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            This flexible, illustrative three-day framework clusters attractions geographically to minimize transit travel. Adapt your daily schedule according to operating hours, advance timed-entry slots, personal mobility, and the prevailing weather forecast.
          </p>

          <div className="space-y-4 pt-2">
            {/* Day 1 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0969E8] bg-[#F0F7FF] px-2.5 py-1 rounded-md">
                  Day 1
                </span>
                <span className="text-xs text-gray-500 font-medium">Westminster & The River Thames</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                Historic Landmarks, Royal Monuments & Riverside Promenade
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Begin your morning in Westminster taking in the architecture of the Houses of Parliament and Big Ben. Stroll past Westminster Abbey and walk through St James’s Park toward Buckingham Palace. In the afternoon, cross Westminster Bridge to explore the South Bank promenade, browsing open-air bookstalls, admiring the London Eye, and continuing toward Shakespeare’s Globe and the Tate Modern as evening approaches.
              </p>
            </div>

            {/* Day 2 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0969E8] bg-[#F0F7FF] px-2.5 py-1 rounded-md">
                  Day 2
                </span>
                <span className="text-xs text-gray-500 font-medium">South Kensington & Royal Parks</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                World-Class Museums, Design Collections & Kensington Gardens
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Dedicate your morning to South Kensington’s renowned museum quarter, visiting either the Natural History Museum, the Science Museum, or the decorative arts galleries of the V&A. In the afternoon, take a relaxing walk into adjacent Kensington Gardens to see Kensington Palace and the Albert Memorial, concluding your day with a peaceful stroll across Hyde Park and afternoon tea nearby.
              </p>
            </div>

            {/* Day 3 */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0969E8] bg-[#F0F7FF] px-2.5 py-1 rounded-md">
                  Day 3
                </span>
                <span className="text-xs text-gray-500 font-medium">Markets, Culture & West End Atmosphere</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#071B49]">
                The British Museum, Camden Lock & Evening Theater District
              </h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Start early at the British Museum in Bloomsbury exploring its historic world treasures. Next, take the Northern Line up to Camden Market to browse independent craft stalls and sample international street delicacies along the canal. Later in the afternoon, head down to Covent Garden to enjoy street performers and boutique arcades, followed by an evening in the vibrant West End theater quarter.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Budgeting for London */}
        <section id="budgeting" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight border-b border-[#E2E8F0] pb-3 flex items-center gap-2">
            <Coins className="w-6 h-6 text-[#0969E8]" />
            <span>11. Budgeting for London</span>
          </h2>
          <p className="text-base leading-relaxed text-[#334155]">
            London accommodates varied travel budgets depending on accommodation choices, dining preferences, and transport planning. Key factors influencing total trip expenditure include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Take Advantage of Free Galleries</div>
              <p className="text-[#5E6B82]">
                Unlike many global capitals where museum entry fees are steep, London’s national museums offer free admission to their permanent collections. This provides world-class sightseeing with zero entry expense.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Automated Transit Fare Caps</div>
              <p className="text-[#5E6B82]">
                Using contactless payments on TfL automatically applies daily caps, meaning after reaching the designated threshold, subsequent rides on the Tube, bus, and DLR that day are free.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Balance Dining Styles</div>
              <p className="text-[#5E6B82]">
                Mix formal restaurant dinners with street food at markets (Borough, Camden, Spitalfields) and high-street supermarket meal deals for budget-conscious lunches on the go.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs space-y-1.5">
              <div className="font-bold text-[#071B49] text-sm">Book Paid Attractions Early</div>
              <p className="text-[#5E6B82]">
                When visiting paid attractions like the Tower of London or Westminster Abbey, booking advance tickets directly through official operator websites often saves time and guarantees entry.
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: Interactive Travel Checklist */}
        <section id="checklist" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071B49] tracking-tight flex items-center gap-2">
              <CheckSquare className="w-6 h-6 text-[#0969E8]" />
              <span>12. London Trip Planning Checklist</span>
            </h2>
            <span className="text-xs font-semibold text-[#0969E8] bg-[#F0F7FF] px-3 py-1 rounded-full border border-[#D0E6FF] self-start sm:self-auto">
              Interactive Preparation Tool
            </span>
          </div>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Track your pre-trip preparations by checking off the essential milestones below:
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
            <span>13. Frequently Asked Questions</span>
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Essential traveler answers to common planning questions regarding London visits:
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
              <span>Plan Your British Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Combine History, Culture & Neighborhood Exploration
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
              By combining historic royal monuments along the River Thames with world-class free museum galleries, expansive green parks, diverse food scenes, and the easy accessibility of the Underground, your London journey will be both enriching and memorable. Explore more TravelDuurDesh destination guides and flight tools to continue planning your upcoming adventures.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('destinations/london')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#071B49] hover:bg-[#F0F7FF] transition-colors cursor-pointer shadow-sm"
              >
                View London Destination Hub
              </button>
              <button
                type="button"
                onClick={() => onNavigate('flights')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/15 text-white hover:bg-white/25 border border-white/20 transition-colors cursor-pointer"
              >
                Search Flights to London
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

              <button
                type="button"
                onClick={() => onNavigate('blog/travel-guides/alula-travel-guide')}
                className="p-4 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#0969E8] text-left transition-colors cursor-pointer group shadow-2xs"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0969E8] mb-1">
                  Heritage Guide
                </div>
                <div className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-2">
                  AlUla Travel Guide: What Travelers Should Know
                </div>
                <div className="text-xs text-gray-500 mt-2 flex items-center justify-between">
                  <span>16 min read</span>
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
