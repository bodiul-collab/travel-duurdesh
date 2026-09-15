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
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
  Inbox,
  RefreshCw
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface ContactPageProps {
  onNavigate: (pageId: string) => void;
}

const OFFICIAL_EMAIL = 'contact@travelduurdesh.com';

const SUBJECT_LABELS: Record<string, string> = {
  general: 'General Traveler Inquiry',
  umrah: 'Umrah Pilgrimage Guide Question',
  destination: 'Destination Guide Feedback / Suggestion',
  flight: 'Flights & Hotel Search Inquiry',
  partnership: 'Editorial or Partner Inquiry'
};

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'fallback'>('idle');
  const [feedback, setFeedback] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    topic: string;
    message: string;
  } | null>(null);

  const handleCopyEmail = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const constructMailtoUrl = (
    senderName: string,
    senderEmail: string,
    topicKey: string,
    bodyText: string
  ) => {
    const topicLabel = SUBJECT_LABELS[topicKey] || topicKey;
    const mailSubject = `[Travel DuurDesh Inquiry: ${topicLabel}] from ${senderName || 'Traveler'}`;
    const mailBody = `Hello Travel DuurDesh Team,\n\nName: ${senderName}\nEmail: ${senderEmail}\nInquiry Topic: ${topicLabel}\nSent From: travelduurdesh.com/contact\n\nMessage Details:\n${bodyText}\n\nKind regards,\n${senderName}`;
    return `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };

  const handleOpenMailClient = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const url = constructMailtoUrl(name, email, subject, message);
    window.location.href = url;
  };

  const handleCopySummary = () => {
    if (!submittedData && (!name || !message)) return;
    const data = submittedData || {
      name,
      email,
      topic: SUBJECT_LABELS[subject],
      message
    };
    const summary = `Recipient: ${OFFICIAL_EMAIL}\nFrom: ${data.name} (${data.email})\nTopic: ${data.topic}\n\nMessage:\n${data.message}`;
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('fallback');
      setFeedback('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus('fallback');
      setFeedback('Please enter a valid email address so we can reply to you.');
      return;
    }

    setStatus('submitting');
    const topicLabel = SUBJECT_LABELS[subject] || subject;
    const currentData = {
      name: trimmedName,
      email: trimmedEmail,
      topic: topicLabel,
      message: trimmedMessage
    };
    setSubmittedData(currentData);

    try {
      // Direct POST to FormSubmit endpoint configured for contact@travelduurdesh.com
      const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          _replyto: trimmedEmail,
          _subject: `Travel DuurDesh Inquiry: [${topicLabel}] from ${trimmedName}`,
          topic: topicLabel,
          message: trimmedMessage,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFeedback(`Your inquiry was delivered directly to ${OFFICIAL_EMAIL}. Our team will respond to ${trimmedEmail} within 24–48 business hours.`);
      } else {
        // Fallback: If gateway returned non-200, trigger mail client with prefilled values
        setStatus('fallback');
        setFeedback(`Direct gateway response pending. We have launched your default mail app addressed directly to ${OFFICIAL_EMAIL}.`);
        window.location.href = constructMailtoUrl(trimmedName, trimmedEmail, subject, trimmedMessage);
      }
    } catch (err) {
      // Fallback: Adblocker or offline, trigger mail client with prefilled values
      setStatus('fallback');
      setFeedback(`Network gateway was bypassed. We have prepared your email client to send directly to ${OFFICIAL_EMAIL}.`);
      window.location.href = constructMailtoUrl(trimmedName, trimmedEmail, subject, trimmedMessage);
    }
  };

  const handleResetForm = () => {
    setStatus('idle');
    setFeedback('');
    setName('');
    setEmail('');
    setMessage('');
    setSubmittedData(null);
  };

  const faqs = [
    {
      q: 'How can I reach the Travel DuurDesh team directly?',
      a: `You can email our official inbox anytime at ${OFFICIAL_EMAIL}. Our editorial and traveler support team reviews inquiries throughout the week with guaranteed responses within 24–48 business hours.`
    },
    {
      q: 'Does Travel DuurDesh sell airline tickets or hotel bookings directly?',
      a: 'Travel DuurDesh is an independent travel guide and fare comparison platform. We partner with accredited global providers like Aviasales and Booking.com to help you locate real-time rates. All payments and bookings occur securely on our partners’ official encrypted portals without added fees.'
    },
    {
      q: 'Can I request a new destination or pilgrim guide?',
      a: 'Absolutely! If you would like our team to research a specific city, country, or pilgrimage route, select "Destination Guide Feedback / Suggestion" in the contact form or email us directly.'
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
              <span>Direct Traveler Support • Travel DuurDesh</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              We’re Here to Help Your Journey
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Have questions about an Umrah pilgrimage step, flight route, destination guide, or partnership? Send a message below or email us directly at <span className="font-semibold text-white underline underline-offset-4">{OFFICIAL_EMAIL}</span>.
            </p>
          </div>
        </header>

        {/* Main Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                  Official Channels
                </h2>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#475569]">
                {/* Official Email Item with Copy & Send buttons */}
                <li className="p-4 rounded-2xl bg-[#F8FAFC] border border-blue-100 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0969E8]/10 text-[#0969E8] flex items-center justify-center shrink-0">
                      <Inbox className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold text-[#071B49] uppercase tracking-wider">
                        Official Support & Inquiries
                      </div>
                      <a
                        href={`mailto:${OFFICIAL_EMAIL}`}
                        className="text-sm font-bold text-[#0969E8] hover:underline break-all block mt-0.5"
                      >
                        {OFFICIAL_EMAIL}
                      </a>
                      <p className="text-xs text-gray-500 pt-0.5">
                        Monitored daily • Response turnaround within 24–48 hours
                      </p>
                    </div>
                  </div>

                  {/* Action row for email */}
                  <div className="flex items-center gap-2 pt-1 border-t border-gray-200/60">
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0969E8] hover:bg-[#0759c5] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Mail Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#071B49] bg-white border border-gray-200 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </li>

                {/* Headquarters */}
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

                {/* Hours */}
                <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#FFB800]/10 text-[#D97706] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider">Editorial Review Hours</div>
                    <p className="font-semibold text-[#071B49]">Mon – Fri: 9:00 AM – 6:00 PM GMT</p>
                    <p className="text-xs text-gray-500 pt-0.5">Flight fare comparisons, guides & tools available 24/7</p>
                  </div>
                </li>
              </ul>

              {/* Privacy Notice Card */}
              <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-4 text-xs text-[#1E3A8A] space-y-1.5">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>Privacy & Confidentiality Guarantee</span>
                </div>
                <p>
                  All messages sent via this form are delivered strictly to {OFFICIAL_EMAIL}. We never sell, rent, or share your contact info with third-party marketers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] pt-0.5">
                    Messages are delivered directly to <span className="font-bold text-[#0969E8]">{OFFICIAL_EMAIL}</span>
                  </p>
                </div>

                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0969E8] hover:text-[#071B49] bg-[#EAF2FB] hover:bg-[#d8e8f8] px-3 py-1.5 rounded-lg transition-colors cursor-pointer w-fit"
                  title="Compose directly using your email software"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Prefer your email app?</span>
                </a>
              </div>

              {/* State: Success Confirmation */}
              {status === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-emerald-950">
                        Inquiry Successfully Delivered!
                      </h3>
                      <p className="text-xs text-emerald-800">
                        Your message has reached our inbox at <strong>{OFFICIAL_EMAIL}</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/80 border border-emerald-200 text-xs space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#334155]">
                      <div>
                        <span className="font-bold text-[#071B49]">Sender:</span> {submittedData?.name} ({submittedData?.email})
                      </div>
                      <div>
                        <span className="font-bold text-[#071B49]">Category:</span> {submittedData?.topic}
                      </div>
                      <div className="sm:col-span-2">
                        <span className="font-bold text-[#071B49]">Direct Inbox:</span> {OFFICIAL_EMAIL}
                      </div>
                    </div>
                    <p className="text-emerald-800 pt-1 border-t border-emerald-100">
                      Our editorial & traveler assistance team will reply to <strong>{submittedData?.email}</strong> within 24–48 business hours.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071B49] bg-white hover:bg-gray-50 border border-emerald-300 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      {copiedSummary ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied Details!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Details</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenMailClient()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Send a copy via Email App</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-100/70 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
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
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071B49] uppercase tracking-wider mb-1.5">
                        Your Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. traveler@example.com"
                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#071B49] focus:outline-none focus:border-[#0969E8] focus:ring-2 focus:ring-[#0969E8]/20 transition-all"
                        required
                        disabled={status === 'submitting'}
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
                      disabled={status === 'submitting'}
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
                      placeholder="How can our travel team assist you? Share details about your journey, question, or guide feedback..."
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl p-4 text-sm text-[#071B49] focus:outline-none focus:border-[#0969E8] focus:ring-2 focus:ring-[#0969E8]/20 transition-all resize-none"
                      required
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Fallback / Alert notification if needed */}
                  {status === 'fallback' && (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-2">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{feedback}</span>
                      </div>
                      <p className="text-[11px] text-amber-800">
                        If your email application did not launch automatically,{' '}
                        <button
                          type="button"
                          onClick={handleOpenMailClient}
                          className="font-bold underline text-[#0969E8] hover:text-[#0759c5] cursor-pointer"
                        >
                          click here to send via your email client
                        </button>{' '}
                        addressed directly to <strong>{OFFICIAL_EMAIL}</strong>.
                      </p>
                    </div>
                  )}

                  {/* Submission and direct email actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Transmitting to {OFFICIAL_EMAIL}...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send to {OFFICIAL_EMAIL}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#475569] hover:text-[#071B49] bg-[#F1F5F9] hover:bg-[#E2E8F0] px-4 py-3 rounded-xl transition-colors cursor-pointer"
                      title="Open default email software directly"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Or Open in Email App</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#64748B] pt-1">
                    Direct recipient: <span className="font-semibold text-[#071B49]">{OFFICIAL_EMAIL}</span>. We reply directly to the email address you provide above.
                  </p>
                </form>
              )}
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
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-[#071B49] flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0969E8] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-gray-100 bg-[#F8FAFC]/50">
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
