import React from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Cookie,
  Award,
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Compass,
  ChevronRight,
  Mail,
  ExternalLink,
  Info
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface PrivacyPolicyPageProps {
  onNavigate?: (pageId: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate?.('home') },
            { label: 'Privacy Policy' }
          ]}
        />

        {/* 1. Page Title & Intro */}
        <header className="relative bg-gradient-to-br from-[#071B49] via-[#0D2A68] to-[#0969E8] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-lg space-y-6">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Official Privacy Policy • Travel DuurDesh</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Privacy Policy for Travel DuurDesh
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80 pt-1">
              <span className="bg-white/15 px-3 py-1 rounded-full font-medium">
                Last Updated: September 2026
              </span>
              <span className="bg-white/15 px-3 py-1 rounded-full font-medium">
                Applies to: travelduurdesh.com
              </span>
            </div>

            <div className="space-y-3 text-white/90 text-sm sm:text-base leading-relaxed pt-2">
              <p>
                This Privacy Policy describes how <strong>Travel DuurDesh</strong> collects, uses, and protects user information when you visit, browse, or interact with our platform. This policy applies to all visitors and users of <strong>travelduurdesh.com</strong>.
              </p>
              <p>
                At Travel DuurDesh, our commitment to transparency, user privacy, and ethical digital stewardship is paramount. We believe every global traveler deserves clear, unambiguous information about how their data is handled, stored, and protected as they plan journeys, research flights and hotels, discover authentic halal cuisine, or organize sacred Umrah pilgrimages.
              </p>
            </div>
          </div>
        </header>

        {/* Policy Content Body */}
        <article className="space-y-8 text-[#1E293B]">
          {/* Quick Summary Highlights Box */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 sm:p-7 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1D4ED8] uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Summary of Core Privacy Principles</span>
            </div>
            <ul className="text-xs sm:text-sm text-[#1E3A8A] space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>No Sensitive Data:</strong> Travel DuurDesh does not collect sensitive personal data such as financial account numbers, passports, or biometrics.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>No Sale of Data:</strong> Travel DuurDesh does not sell, trade, or rent personal information to any third party.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Full Transparency:</strong> We detail all automatic analytics, optional contact forms, cookie technologies, and affiliate partnerships below.</span>
              </li>
            </ul>
          </div>

          {/* 2. Information We Collect */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <FileText className="w-4 h-4" />
              <span>Section 1</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              1. Information We Collect
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We collect information in two distinct manners: automatically through your browser interaction with our site, and voluntarily when you choose to communicate with us.
            </p>

            <div className="space-y-6 pt-2">
              {/* Part A: Automatically Collected Data */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
                <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0969E8] text-white text-xs flex items-center justify-center font-bold">A</span>
                  <span>Automatically Collected Data</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  When you visit and navigate travelduurdesh.ai.studio, our web servers and trusted analytics utilities may automatically record standard technical telemetry transmitted by your browser. This includes:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#334155] pt-1">
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Device Type:</strong> Desktop, mobile smartphone, or tablet hardware profile.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Browser Type:</strong> Chrome, Safari, Firefox, Edge, and operating system versions.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>IP Address:</strong> Internet Protocol address, which may be anonymized or aggregated by country/city.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Pages Visited:</strong> Specific travel guides, destination dossiers, and tools accessed.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Time Spent on Site:</strong> Duration of session, dwell time per guide, and scroll depth.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Referring URLs:</strong> The search engine, social link, or previous page that directed you here.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100 md:col-span-2">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Cookies and Usage Data:</strong> Session state tokens, selected currency preferences, and preferred interface language.</span>
                  </li>
                </ul>
              </div>

              {/* Part B: Voluntarily Provided Information */}
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
                <h3 className="text-lg font-bold text-[#071B49] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#0969E8] text-white text-xs flex items-center justify-center font-bold">B</span>
                  <span>Voluntarily Provided Information</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Travelers may choose to voluntarily provide specific personal identifiers when requesting travel assistance, submitting inquiries, or contacting our editorial staff. This information may include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#334155] pt-1">
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Full Name:</strong> When provided in correspondence or contact inquiries.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Email Address:</strong> Used solely to reply directly to your questions.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100 sm:col-span-2">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Messages & Content:</strong> Detailed inquiries, destination suggestions, or feedback submitted through our forms.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-gray-100 sm:col-span-2">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>User Shared Details:</strong> Travel dates or preferences you choose to mention in support requests.</span>
                  </li>
                </ul>
              </div>

              {/* Explicit Mandatory Clause */}
              <div className="bg-[#FEF2F2] border-2 border-[#FCA5A5] p-5 rounded-2xl text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Important Guarantee</span>
                </div>
                <p className="text-sm sm:text-base font-extrabold text-[#991B1B]">
                  Travel DuurDesh does not collect sensitive personal data.
                </p>
                <p className="text-xs text-[#7F1D1D] max-w-xl mx-auto">
                  We never solicit, process, or store financial credentials, credit card numbers, national identification or passport numbers, religious affiliation, or health records.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Cookies & Tracking Technologies */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <Cookie className="w-4 h-4" />
              <span>Section 2</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              2. Cookies & Tracking Technologies
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                <strong>What Are Cookies?</strong> Cookies are small text files placed upon your computer, smartphone, or tablet when you visit websites. They act as a memory mechanism that allows websites to recognize your device across visits and retain helpful preferences.
              </p>
              <p>
                <strong>Why We Use Cookies:</strong> Travel DuurDesh utilizes cookies to maintain essential functional features, remember your selected currency (such as USD, GBP, EUR, SAR, BDT, MYR, or AED), remember your preferred browsing language, speed up page rendering times, and analyze how visitors interact with our content.
              </p>
              <p>
                <strong>How Cookies Improve Your Experience:</strong> Instead of having to re-select your preferred currency or start your search from scratch on every page turn, cookies securely preserve your chosen options so your experience remains smooth, instant, and personalized.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0969E8]">Category 1</div>
                <h3 className="font-bold text-[#071B49] text-base">Analytics Cookies</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Analytics cookies help us measure aggregate visitor counts, bounce rates, and traffic flows. This data is entirely aggregated and statistical, helping our editorial team determine which travel guides or pilgrimage resources provide the greatest value.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0969E8]">Category 2</div>
                <h3 className="font-bold text-[#071B49] text-base">Advertising Cookies</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Advertising cookies may be placed by authorized ad networks (such as Google AdSense) to serve contextually relevant travel advertisements and prevent repetitive ad impressions. They do not store direct personal contact identifiers.
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0969E8]">Category 3</div>
                <h3 className="font-bold text-[#071B49] text-base">Performance Cookies</h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Performance cookies monitor CDN asset delivery, server latency, and image rendering speeds, ensuring that visitors worldwide experience rapid loading times even on mobile connections.
                </p>
              </div>
            </div>

            <div className="bg-[#F1F5F9] p-5 rounded-2xl space-y-2">
              <h4 className="font-bold text-sm text-[#071B49]">How You Can Control or Disable Cookies</h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                You possess full control over cookies. You can configure your internet browser (such as Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge) to refuse all cookies, alert you when a cookie is placed, or delete existing cookies from your device storage. Please note that disabling cookies may affect certain interactive conveniences, such as automated currency detection or saved trip bookmarks.
              </p>
            </div>
          </section>

          {/* 4. Advertising & Affiliate Disclosure */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <Award className="w-4 h-4" />
              <span>Section 3</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              3. Advertising & Affiliate Disclosure
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                To support the ongoing research, authoring, and maintenance of our independent, high-quality travel guides and specialized pilgrimage planning tools, Travel DuurDesh participates in digital advertising and travel affiliate programs.
              </p>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200 space-y-3">
                <h4 className="font-bold text-sm text-[#071B49]">Programs We May Utilize:</h4>
                <ul className="text-xs sm:text-sm text-[#334155] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Google AdSense:</strong> Upon approval, Travel DuurDesh may display contextual ads served by Google AdSense. Google uses cookies to serve ads based on prior visits to this or other websites.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0969E8] font-bold">•</span>
                    <span><strong>Travel Affiliate Programs:</strong> We partner with vetted global travel aggregators and booking providers covering hotels, airline ticketing, travel insurance, luggage, and eSIM data products.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFFBEB] border border-[#FDE68A] p-5 rounded-2xl space-y-2">
                <h4 className="font-bold text-sm text-[#92400E]">Important Affiliate Clarifications for Readers:</h4>
                <ul className="text-xs sm:text-sm text-[#B45309] space-y-1.5">
                  <li>• <strong>Tracking Clicks:</strong> When you click on an affiliate recommendation link, a secure cookie may be placed to record that you came from Travel DuurDesh.</li>
                  <li>• <strong>Commissions Earned:</strong> If you subsequently complete a qualifying booking or purchase, we may receive a small referral commission from the merchant partner.</li>
                  <li>• <strong>No Added Cost to You:</strong> Crucially, utilizing our affiliate links <em>never</em> increases your price. In many instances, our partnership access provides negotiated promotional rates or bundled discounts.</li>
                  <li>• <strong>Editorial Independence:</strong> Our editorial ratings and advice remain strictly objective, authentic, and independent.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. How We Use Your Information */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <Eye className="w-4 h-4" />
              <span>Section 4</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              4. How We Use Your Information
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Travel DuurDesh utilizes collected data exclusively for legitimate, clearly defined digital operational purposes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                <h4 className="font-bold text-sm text-[#071B49]">Improving Website Performance</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Optimizing server capacity, reducing load times, enhancing responsive design, and ensuring interactive calculators perform flawlessly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                <h4 className="font-bold text-sm text-[#071B49]">Personalizing Travel Content</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Delivering localized currency conversions, tailored destination suggestions, and preferred linguistic settings across our platform.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                <h4 className="font-bold text-sm text-[#071B49]">Analyzing Visitor Traffic</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Understanding demographic trends, high-demand pilgrimage seasons, and popular routes to guide our research and editorial agenda.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                <h4 className="font-bold text-sm text-[#071B49]">Responding to Messages</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Replying directly to your inquiries, questions about Umrah logistics, or requests for technical clarification submitted through our contact channels.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                <h4 className="font-bold text-sm text-[#071B49]">Supporting Ads & Partnerships</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Measuring the reach of informational campaigns and verifying legitimate affiliate referral transactions with partner platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                <h4 className="font-bold text-sm text-[#071B49]">Preventing Fraud & Abuse</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Safeguarding our visitors and infrastructure against malicious bot attacks, spam submissions, DDoS attempts, and unauthorized exploitation.
                </p>
              </div>
            </div>

            {/* Crucial Data Protection Mandate */}
            <div className="bg-[#ECFDF5] border-2 border-[#6EE7B7] p-5 rounded-2xl text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Commercial Exploitation</span>
              </div>
              <p className="text-base sm:text-lg font-extrabold text-[#065F46]">
                Travel DuurDesh does not sell or rent personal information.
              </p>
              <p className="text-xs text-[#047857] max-w-xl mx-auto">
                We believe your personal privacy is non-negotiable. Your data is never bartered, leased, or monetized to commercial third-party data brokers.
              </p>
            </div>
          </section>

          {/* 6. Data Protection & Security */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <Lock className="w-4 h-4" />
              <span>Section 5</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              5. Data Protection & Security
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                We implement comprehensive administrative, technical, and physical security safeguards designed to protect information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
                  <h4 className="font-bold text-sm text-[#071B49]">SSL / TLS Encryption</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    All network traffic between your web browser and travelduurdesh.ai.studio is encrypted in transit using industry-standard Secure Sockets Layer (SSL) and Transport Layer Security (TLS) cryptographic protocols.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
                  <h4 className="font-bold text-sm text-[#071B49]">Secure Cloud Infrastructure</h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    Our platform is hosted in secure, world-class enterprise cloud container facilities governed by automated patch management, hardware firewalls, and DDoS mitigation networks.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-gray-100 space-y-2">
                <h4 className="font-bold text-sm text-[#071B49]">Realistic Security Acknowledgment</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  While we exercise all reasonable commercial and technological measures to protect your information, no transmission over the Internet or electronic storage method can ever be guaranteed 100% impenetrable. Consequently, while we adhere strictly to global security best practices, we cannot guarantee absolute, infallible security.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Third-Party Services */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <ExternalLink className="w-4 h-4" />
              <span>Section 6</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              6. Third-Party Services & External Links
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                Travel DuurDesh may provide links or referral avenues to third-party services, including airline reservations, hotel booking portals, visa service registries, or travel gear merchants.
              </p>
              <p>
                Please be aware that <strong>Travel DuurDesh is not responsible for the privacy practices, terms of service, or content of third-party websites</strong>. When you leave travelduurdesh.ai.studio to complete a booking or view third-party content, your interactions become subject to the respective privacy policies and terms of those external providers.
              </p>
              <p>
                We strongly advise and encourage our users to review the individual privacy statements of every external website they choose to visit.
              </p>
            </div>
          </section>

          {/* 8. Children's Privacy */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <Users className="w-4 h-4" />
              <span>Section 7</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              7. Children's Privacy
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                Travel DuurDesh is designed for general audiences and adult travelers planning independent or family travel. <strong>Travel DuurDesh is not intended for children under 13 years of age</strong>, and we do not knowingly solicit or collect personally identifiable information from children under the age of 13.
              </p>
              <p>
                If you are a parent or guardian and discover that your child under 13 has submitted personal information to our site without your consent, please contact us immediately. Upon verification, we will promptly delete such records from our servers.
              </p>
            </div>
          </section>

          {/* 9. Your Rights & Choices */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <CheckCircle2 className="w-4 h-4" />
              <span>Section 8</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              8. Your Rights & Privacy Choices
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                Regardless of where you reside globally, Travel DuurDesh respects your fundamental rights concerning your personal information. Depending on applicable data protection regulations (including the GDPR, UK Data Protection Act, and CCPA), your rights include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                  <h4 className="font-bold text-sm text-[#071B49]">Right of Access</h4>
                  <p className="text-xs text-[#475569]">
                    You have the right to request confirmation of whether we hold any personal information about you and receive a copy of that data.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                  <h4 className="font-bold text-sm text-[#071B49]">Right to Deletion (Erasure)</h4>
                  <p className="text-xs text-[#475569]">
                    You may request that we erase any personal information you have voluntarily submitted to us (such as contact correspondence).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                  <h4 className="font-bold text-sm text-[#071B49]">Opting Out of Targeted Advertising</h4>
                  <p className="text-xs text-[#475569]">
                    You can opt out of personalized advertising by visiting Google Ad Settings or utilizing digital advertising choice portals.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100 space-y-1.5">
                  <h4 className="font-bold text-sm text-[#071B49]">Disabling Cookies</h4>
                  <p className="text-xs text-[#475569]">
                    You can withdraw consent for non-essential cookies at any time directly through your web browser preferences.
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <p className="text-xs sm:text-sm text-[#475569] mb-3">
                  To exercise any of these rights, submit a data privacy request:
                </p>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0969E8] hover:text-[#071B49] bg-white border border-[#0969E8]/30 hover:border-[#0969E8] px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <span>[See Contact Page]</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <FileText className="w-4 h-4" />
              <span>Section 9</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              9. Changes to This Privacy Policy
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                Travel DuurDesh reserves the right to amend, update, or modify this Privacy Policy at any time to reflect updates in our operational practices, new travel tools, technological enhancements, or statutory legal requirements.
              </p>
              <p>
                When modifications occur, the updated revision will be posted immediately on this page with an amended <strong>"Last Updated"</strong> date visible at both the top and bottom of the policy. We encourage travelers to periodically review this page to stay informed about our data protection commitments.
              </p>
            </div>
          </section>

          {/* 11. Contact Information */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0969E8] uppercase tracking-wider bg-[#EAF2FB] px-3.5 py-1.5 rounded-full w-fit">
              <Mail className="w-4 h-4" />
              <span>Section 10</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              10. Contact Information
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                If you have any questions, inquiries, comments, or data rights requests concerning this Privacy Policy or our treatment of user data, please reach out directly:
              </p>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-200 space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#071B49]">
                  <Mail className="w-4 h-4 text-[#0969E8]" />
                  <span>Privacy Inquiries Email: <strong>privacy@travelduurdesh.com</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#071B49]">
                  <Compass className="w-4 h-4 text-[#0969E8]" />
                  <span>Platform: <strong>Travel DuurDesh (travelduurdesh.com)</strong></span>
                </div>
                <p className="text-xs text-[#475569] pt-1">
                  For privacy questions, please reach out through our{' '}
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="text-[#0969E8] font-bold hover:underline cursor-pointer"
                  >
                    Contact Us page
                  </button>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* 12. Policy Dedicated Footer Links */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-bold text-sm text-[#071B49]">
                  Explore Travel DuurDesh Resources
                </h3>
                <p className="text-xs text-[#64748B]">
                  Verified travel tools, pilgrimage guidance, and destination itineraries.
                </p>
              </div>

              <div className="text-xs font-semibold text-[#5E6B82]">
                Last Updated: September 2026
              </div>
            </div>

            {/* Quick Internal Navigation */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => onNavigate?.('about')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-[#F8FAFC] hover:bg-[#EDF2F7] border border-gray-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <span>About Us</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-[#F8FAFC] hover:bg-[#EDF2F7] border border-gray-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate?.('destinations')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-[#F8FAFC] hover:bg-[#EDF2F7] border border-gray-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <span>Destinations</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate?.('tools')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-[#F8FAFC] hover:bg-[#EDF2F7] border border-gray-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <span>Travel Tools</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate?.('umrah')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#071B49] bg-[#F8FAFC] hover:bg-[#EDF2F7] border border-gray-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <span>Umrah Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
