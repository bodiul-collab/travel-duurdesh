import React from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Info,
  Scale
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface TermsPageProps {
  onNavigate: (pageId: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate('home') },
            { label: 'Terms and Conditions' }
          ]}
        />

        {/* Page Header */}
        <header className="relative bg-gradient-to-br from-[#071B49] via-[#0D2A68] to-[#0969E8] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl space-y-6">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
              <Scale className="w-4 h-4 text-[#38BDF8]" />
              <span>Legal Terms & User Agreement • Travel DuurDesh</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Terms and Conditions
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80 pt-1">
              <span className="bg-white/15 px-3 py-1 rounded-full font-medium">
                Effective Date: September 2026
              </span>
              <span className="bg-white/15 px-3 py-1 rounded-full font-medium">
                Applies to: travelduurdesh.com
              </span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <article className="space-y-8 text-[#1E293B]">
          {/* Quick Summary Highlights Box */}
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1D4ED8] uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Key Highlights of Our Terms</span>
            </div>
            <ul className="text-xs sm:text-sm text-[#1E3A8A] space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Informational & Planning Platform:</strong> Travel DuurDesh provides travel research, destination guides, Umrah planning steps, and fare comparison tools. We are not an airline, hotel operator, or travel agency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Third-Party Bookings:</strong> When you book flights, hotels, or eSIM data via partner links (such as Aviasales, Booking.com, or Airalo), your transaction and reservation are governed exclusively by that provider’s terms.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span><strong>Zero Markups:</strong> We never charge you fees for using our site, guides, calculators, or comparison links.</span>
              </li>
            </ul>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              By accessing, browsing, or using the website <strong>travelduurdesh.com</strong> (the "Platform"), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any portion of these terms, you should discontinue using the Platform immediately.
            </p>
          </section>

          {/* Section 2: Informational Purpose & Travel Advice */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              2. Informational Purpose & Travel Advice
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              All destination dossiers, city itineraries, religious pilgrimage overviews, halal dining directories, foreign currency rates, budget calculators, and visa summaries provided on Travel DuurDesh are published in good faith for general informational and educational purposes only.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              While our editorial team endeavors to ensure all flight schedules, hotel proximities, and government visa requirements (such as Saudi Nusuk app policies or eVisa requirements) are current, travel rules and commercial terms change frequently. Travelers are responsible for verifying official entry requirements with relevant consulates, airlines, and embassy resources prior to departure.
            </p>
          </section>

          {/* Section 3: Third-Party Affiliate Partners */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              3. Third-Party Affiliate Relationships & Bookings
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Travel DuurDesh directs users to vetted third-party booking engines, ticket aggregators, hotel platforms, and telecom providers, including but not limited to <strong>Aviasales</strong>, <strong>Booking.com</strong>, and <strong>Airalo</strong>.
            </p>
            <div className="p-4 bg-[#F8FAFC] border border-gray-200 rounded-2xl space-y-2 text-xs text-[#334155]">
              <p>
                <strong>Important:</strong> Travel DuurDesh does not issue tickets, manage hotel room inventory, process financial transactions, or hold traveler payments. Any reservation, purchase, cancellation, or refund request is entered into directly between you and the respective third-party merchant, subject to their independent terms and cancellation policies.
              </p>
              <p>
                Travel DuurDesh participates in legitimate affiliate marketing programs. We may earn an affiliate commission on confirmed bookings made through our links at zero extra cost to you.
              </p>
            </div>
          </section>

          {/* Section 4: Intellectual Property */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              4. Intellectual Property Rights
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              All proprietary content on Travel DuurDesh—including written travel articles, curated destination itineraries, logo designs, custom UI components, interactive packing generators, and website design—is owned by Travel DuurDesh and protected by international copyright and intellectual property laws. You may not republish, scrape, duplicate, or redistribute our content for commercial purposes without prior written consent.
            </p>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              5. Limitation of Liability
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              To the fullest extent permitted by applicable law, Travel DuurDesh, its affiliates, and editorial contributors shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the platform, inability to use the platform, flight cancellations, schedule changes, hotel disputes, visa rejections, or reliance upon information published on this website.
            </p>
          </section>

          {/* Section 6: Contact & Questions */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              6. Questions & Contact Information
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              If you have any questions regarding these Terms and Conditions, please contact us at:
            </p>
            <div className="p-4 bg-[#F8FAFC] border border-gray-200 rounded-2xl text-xs text-[#071B49] space-y-1">
              <div className="font-bold">Travel DuurDesh Legal & Editorial Team</div>
              <div>Official Email: <a href="mailto:contact@travelduurdesh.com" className="text-[#0969E8] font-bold hover:underline">contact@travelduurdesh.com</a></div>
              <div>Website: <a href="https://travelduurdesh.com" className="text-[#0969E8] font-bold hover:underline">https://travelduurdesh.com</a></div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
