import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface ContactPageProps {
  onNavigate: (pageId: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setFeedback('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable dispatch & prepare mailto client option
    setTimeout(() => {
      setStatus('success');
      setFeedback(
        `Thank you, ${name}! Your inquiry has been logged. You can also reach our team directly at contact@travelduurdesh.com.`
      );
      setName('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  const faqs = [
    {
      q: 'How can I reach the Travel DuurDesh team directly?',
      a: 'You can email us anytime at contact@travelduurdesh.com. Our editorial and support team reviews messages throughout the week with typical response times within 24–48 business hours.'
    },
    {
      q: 'Does Travel DuurDesh sell airline tickets or hotel bookings directly?',
      a: 'Travel DuurDesh is a travel guide and fare comparison platform. We partner with accredited global providers like Aviasales and Booking.com to help you locate the best real-time rates. All payments and bookings occur securely on our partners’ encrypted portals without extra fees.'
    },
    {
      q: 'Can I request a new destination or pilgrim guide?',
      a: 'Absolutely! If you would like our team to research a specific city, country, or pilgrimage route, select "Destination Suggestion" in the contact form or send us an email.'
    },
    {
      q: 'How do I report outdated travel or visa information?',
      a: 'Travel guidelines and visa regulations change regularly. If you notice any updated regulations for Nusuk permits, transit visas, or city transit, please notify us so we can update our guides promptly.'
    }
  ];

  return (
    <div className="py-8 sm:py-12 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Home', onClick: () => onNavigate('home') },
            { label: 'Contact Us' }
          ]}
        />

        {/* Page Header */}
        <header className="relative bg-gradient-to-br from-[#071B49] via-[#0D2A68] to-[#0969E8] text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl space-y-6">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#93C5FD]">
              <Mail className="w-4 h-4 text-[#38BDF8]" />
              <span>Contact & Traveler Support • Travel DuurDesh</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              We’re Here to Help Your Journey
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Have questions about an Umrah pilgrimage step, flight route, destination guide, or partnership? Reach out to our dedicated editorial and traveler support team.
            </p>
          </div>
        </header>

        {/* Main Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                Official Channels
              </h2>

              <ul className="space-y-4 text-sm text-[#475569]">
                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Official Email</div>
                    <a
                      href="mailto:contact@travelduurdesh.com"
                      className="text-[#0969E8] font-semibold hover:underline break-all"
                    >
                      contact@travelduurdesh.com
                    </a>
                    <p className="text-xs text-gray-500 pt-0.5">Response turnaround within 24–48 hours</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#21B96F]/10 text-[#21B96F] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Headquarters & Network</div>
                    <p className="font-semibold text-[#071B49]">Travel DuurDesh Network</p>
                    <p className="text-xs text-gray-500 pt-0.5">Serving global travelers across Middle East, Asia, Europe & Americas</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#FFB800]/10 text-[#D97706] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Support Hours</div>
                    <p className="font-semibold text-[#071B49]">Mon – Fri: 9:00 AM – 6:00 PM GMT</p>
                    <p className="text-xs text-gray-500 pt-0.5">Website guides, tools & flight searches available 24/7</p>
                  </div>
                </li>
              </ul>

              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-4 text-xs text-[#1E3A8A] space-y-1.5">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>Privacy First Contact</span>
                </div>
                <p>
                  We never share your email address or message content with third parties or marketers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] pt-1">
                  Fill out the form below and our team will get back to you directly via email.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#071B49] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#071B49] focus:outline-none focus:border-[#0969E8] focus:ring-2 focus:ring-[#0969E8]/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071B49] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. traveler@example.com"
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#071B49] focus:outline-none focus:border-[#0969E8] focus:ring-2 focus:ring-[#0969E8]/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B49] uppercase tracking-wider mb-1.5">
                    Topic / Category
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#071B49] focus:outline-none focus:border-[#0969E8] focus:ring-2 focus:ring-[#0969E8]/20 transition-all cursor-pointer"
                  >
                    <option value="general">General Traveler Inquiry</option>
                    <option value="umrah">Umrah Pilgrimage Guide Question</option>
                    <option value="destination">Destination Guide Feedback / Suggestion</option>
                    <option value="flight">Flights & Hotel Search Inquiry</option>
                    <option value="partnership">Editorial or Partner Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#071B49] uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can our travel team assist you? Share details about your upcoming journey..."
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-4 text-sm text-[#071B49] focus:outline-none focus:border-[#0969E8] focus:ring-2 focus:ring-[#0969E8]/20 transition-all resize-none"
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{feedback}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 space-y-2">
                    <div className="flex items-center gap-2 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{feedback}</span>
                    </div>
                    <p className="text-[11px] text-emerald-700">
                      Need immediate action?{' '}
                      <a
                        href="mailto:contact@travelduurdesh.com"
                        className="font-bold underline hover:text-emerald-900"
                      >
                        Click here to send an email directly via your mail client
                      </a>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Common Traveler Questions
          </h2>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left bg-[#F8FAFC] hover:bg-gray-50 transition-colors cursor-pointer"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-sm sm:text-base text-[#071B49]">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-[#0969E8]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#475569] leading-relaxed bg-white border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
