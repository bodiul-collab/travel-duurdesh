import React, { useState, useId } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Clock,
  DollarSign,
  AlertTriangle,
  Plane,
  Scale,
  ArrowRight,
  ShieldCheck,
  Search,
  Building,
  Check
} from 'lucide-react';

interface FlightCompensationWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const POPULAR_AIRPORTS = [
  { code: 'LHR', name: 'London Heathrow', city: 'London, UK' },
  { code: 'JFK', name: 'John F. Kennedy Intl', city: 'New York, USA' },
  { code: 'CDG', name: 'Charles de Gaulle', city: 'Paris, France' },
  { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt, Germany' },
  { code: 'AMS', name: 'Schiphol Airport', city: 'Amsterdam, Netherlands' },
  { code: 'DXB', name: 'Dubai International', city: 'Dubai, UAE' },
  { code: 'SIN', name: 'Singapore Changi', city: 'Singapore' },
  { code: 'LAX', name: 'Los Angeles Intl', city: 'Los Angeles, USA' },
  { code: 'FCO', name: 'Rome Fiumicino', city: 'Rome, Italy' },
  { code: 'MAD', name: 'Madrid-Barajas', city: 'Madrid, Spain' },
  { code: 'DEL', name: 'Indira Gandhi Intl', city: 'Delhi, India' },
  { code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok, Thailand' }
];

export const FlightCompensationWidget: React.FC<FlightCompensationWidgetProps> = ({
  className = '',
  title = 'Flight Delay & Cancellation Compensation (AirHelp)',
  subtitle = 'Check if you are legally owed up to $650 (€600) per passenger for delayed, cancelled, or overbooked flights under EU 261 and UK passenger rights laws.',
  compact = false
}) => {
  const [activeView, setActiveView] = useState<'calculator' | 'embedded'>('calculator');
  const [departureInput, setDepartureInput] = useState('');
  const [arrivalInput, setArrivalInput] = useState('');
  const [disruptionType, setDisruptionType] = useState<'delay' | 'cancel' | 'overbooked' | 'missed'>('delay');
  const [flightYear, setFlightYear] = useState('2026');
  const [passengersCount, setPassengersCount] = useState(1);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeUid = useId();

  // Primary verified Travelpayouts redirect link (Campaign 120, Promo 3665, Marker 737968)
  const primaryAffiliateUrl =
    'https://c120.travelpayouts.com/click?shmarker=737968&promo_id=3665&source_type=link&type=click';

  // Base AirHelp claim funnel with Travelpayouts partner credentials
  const baseFunnelUrl =
    'https://funnel.airhelp.com/claims/new/trip-details?lang=en&utm_source=pap&utm_medium=affiliate&utm_campaign=aff-Travelpayouts&a_aid=Travelpayouts&a_bid=12eefaac&partner_id=Travelpayouts&data5=737968';

  // Category specific verified links
  const delayGuideUrl =
    'https://www.airhelp.com/en-int/eu-flight-delay-compensation/?utm_source=pap&utm_medium=affiliate&utm_campaign=aff-Travelpayouts&a_aid=Travelpayouts&a_bid=12eefaac&partner_id=Travelpayouts&data5=737968';
  const cancelGuideUrl =
    'https://www.airhelp.com/en-int/flight-cancellation-compensation/?utm_source=pap&utm_medium=affiliate&utm_campaign=aff-Travelpayouts&a_aid=Travelpayouts&a_bid=12eefaac&partner_id=Travelpayouts&data5=737968';
  const deniedBoardingGuideUrl =
    'https://www.airhelp.com/en-int/denied-boarding-compensation/?utm_source=pap&utm_medium=affiliate&utm_campaign=aff-Travelpayouts&a_aid=Travelpayouts&a_bid=12eefaac&partner_id=Travelpayouts&data5=737968';

  // Build targeted URL based on selected route
  const getDynamicClaimUrl = () => {
    const dep = departureInput.trim().toUpperCase().slice(0, 3);
    const arr = arrivalInput.trim().toUpperCase().slice(0, 3);
    if (dep && arr && dep.length === 3 && arr.length === 3) {
      return `${baseFunnelUrl}&departureAirportIata=${encodeURIComponent(dep)}&arrivalAirportIata=${encodeURIComponent(arr)}`;
    }
    return primaryAffiliateUrl;
  };

  // Calculate estimated total compensation
  const maxCompensationPerPerson = 600; // EUR (€600)
  const estimatedTotal = passengersCount * maxCompensationPerPerson;

  // Exact Travelpayouts / AirHelp script HTML in an isolated responsive container
  const iframeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 4px;
      background: #FFFFFF;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow-x: hidden;
      min-height: 275px;
    }
    #airhelp-widget-wrapper {
      width: 100%;
      min-height: 270px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    iframe {
      width: 100% !important;
      min-height: 265px !important;
      border: 0 !important;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div id="airhelp-widget-wrapper">
    <script async src="https://tpwdg.com/content?trs=570661&shmarker=737968&lang=en&powered_by=true&campaign_id=120&promo_id=8679" charset="utf-8"></script>
  </div>
</body>
</html>
`;

  const ELIGIBILITY_RULES = [
    {
      title: 'Flight Delayed 3+ Hours',
      payout: 'Up to €600 / $650',
      desc: 'Arrival at final destination was 3 or more hours late due to airline operational or technical faults.'
    },
    {
      title: 'Flight Cancelled <14 Days',
      payout: 'Up to €600 / $650',
      desc: 'Cancellation announced less than 14 days prior to departure without acceptable equivalent re-routing.'
    },
    {
      title: 'Denied Boarding / Overbooked',
      payout: 'Up to €600 / $650',
      desc: 'Denied boarding involuntarily due to seat overbooking, aircraft down-gauging, or crew scheduling.'
    },
    {
      title: 'Past 3 Years Claims Valid',
      payout: 'Historical Claims',
      desc: 'Valid for past flights in 2023, 2024, 2025, and 2026. Zero upfront fees under No Win, No Fee guarantee.'
    }
  ];

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E7EEF7] shadow-sm p-4 sm:p-7 transition-all ${className}`}
    >
      {/* Header Info & Attribution */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EAF2FB]">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0969E8]/15 to-[#FFB800]/15 flex items-center justify-center text-[#0969E8] shrink-0 shadow-sm border border-[#0969E8]/10">
            <Scale className="w-6 h-6 text-[#0969E8]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] tracking-tight">
                {title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0969E8] bg-[#0969E8]/10 px-2.5 py-0.5 rounded-full border border-[#0969E8]/20">
                <Sparkles className="w-3 h-3 text-[#FFB800]" />
                Official AirHelp Partner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6B82] mt-0.5 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <a
            href={primaryAffiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <span>Open AirHelp Claim Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Switcher: Interactive Claim Checker vs Official Widget */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2 bg-[#F1F5F9] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveView('calculator')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'calculator'
                ? 'bg-white text-[#0969E8] shadow-sm'
                : 'text-[#64748B] hover:text-[#071B49]'
            }`}
          >
            Quick Route Calculator
          </button>
          <button
            type="button"
            onClick={() => setActiveView('embedded')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'embedded'
                ? 'bg-white text-[#0969E8] shadow-sm'
                : 'text-[#64748B] hover:text-[#071B49]'
            }`}
          >
            AirHelp Embedded Widget
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#21B96F] font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#21B96F]" />
          <span>No Win, No Fee Guarantee</span>
        </div>
      </div>

      {/* Main Interactive Tool Body */}
      {activeView === 'calculator' ? (
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Departure */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#071B49] flex items-center gap-1">
                <Plane className="w-3.5 h-3.5 text-[#0969E8]" />
                <span>Departure Airport</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. LHR or London"
                  value={departureInput}
                  onChange={(e) => setDepartureInput(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                />
              </div>
            </div>

            {/* Arrival */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#071B49] flex items-center gap-1">
                <Plane className="w-3.5 h-3.5 text-[#21B96F] rotate-90" />
                <span>Arrival Airport</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. JFK or New York"
                  value={arrivalInput}
                  onChange={(e) => setArrivalInput(e.target.value)}
                  className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                />
              </div>
            </div>

            {/* Disruption Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#071B49] flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Flight Disruption</span>
              </label>
              <select
                value={disruptionType}
                onChange={(e) => setDisruptionType(e.target.value as any)}
                className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
              >
                <option value="delay">Delayed 3+ Hours</option>
                <option value="cancel">Flight Cancelled (&lt;14 Days)</option>
                <option value="overbooked">Denied Boarding / Overbooked</option>
                <option value="missed">Missed Connecting Flight</option>
              </select>
            </div>

            {/* Passengers & Year */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#071B49] flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-[#21B96F]" />
                <span>Passengers</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={passengersCount}
                  onChange={(e) => setPassengersCount(Number(e.target.value))}
                  className="w-2/3 bg-white border border-[#CBD5E1] rounded-xl px-3 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                >
                  <option value={1}>1 Traveler</option>
                  <option value={2}>2 Travelers</option>
                  <option value={3}>3 Travelers</option>
                  <option value={4}>4 Travelers</option>
                  <option value={5}>5+ Family / Group</option>
                </select>
                <select
                  value={flightYear}
                  onChange={(e) => setFlightYear(e.target.value)}
                  className="w-1/3 bg-white border border-[#CBD5E1] rounded-xl px-2 py-2 text-xs font-semibold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Airport Suggestions Chips */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-semibold text-[#64748B]">
              Quick Airport Suggestions:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_AIRPORTS.slice(0, 8).map((airport) => (
                <button
                  key={airport.code}
                  type="button"
                  onClick={() => {
                    if (!departureInput) {
                      setDepartureInput(airport.code);
                    } else if (!arrivalInput) {
                      setArrivalInput(airport.code);
                    } else {
                      setDepartureInput(airport.code);
                    }
                  }}
                  className="text-[11px] font-medium bg-white hover:bg-blue-50 border border-gray-200 text-[#071B49] px-2 py-1 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span className="font-bold text-[#0969E8]">{airport.code}</span>
                  <span className="text-gray-500">{airport.city.split(',')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Payout & Action Bar */}
          <div className="bg-gradient-to-r from-[#071B49] to-[#0969E8] rounded-xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                Estimated Legal Compensation Eligibility
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold flex items-baseline gap-2 justify-center sm:justify-start">
                <span>€{estimatedTotal}</span>
                <span className="text-sm font-medium text-blue-200">
                  (approx. ${Math.round(estimatedTotal * 1.08)} USD)
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  {passengersCount} {passengersCount === 1 ? 'passenger' : 'passengers'}
                </span>
              </div>
              <p className="text-[11px] text-blue-100/80">
                Under EU Regulation 261/2004 & UK Passenger Rights. 100% No Win, No Fee.
              </p>
            </div>

            <a
              href={getDynamicClaimUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#21B96F] hover:bg-[#1da863] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Check My Claim on AirHelp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : (
        /* Official Embedded Widget */
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
            <span className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-[#0969E8]" />
              Official AirHelp Passenger Compensation Form
            </span>
            <span className="text-[11px] text-[#64748B]">
              Powered by Travelpayouts & AirHelp
            </span>
          </div>

          <div className="w-full relative min-h-[280px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-inner">
            <iframe
              key={iframeUid}
              title="AirHelp Flight Compensation Claim Widget"
              srcDoc={iframeHtml}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation allow-modals"
              className="w-full min-h-[275px] h-[285px] border-0"
              scrolling="no"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          <div className="mt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2 pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#21B96F]" />
              Over 2.5 million passengers successfully assisted worldwide
            </span>
            <a
              href={primaryAffiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0969E8] font-bold hover:underline flex items-center gap-1"
            >
              Check claim directly on AirHelp.com →
            </a>
          </div>
        </div>
      )}

      {/* Direct Category Guides & Deep Links */}
      <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-[#071B49] uppercase tracking-wider">
            Verified Passenger Rights Claim Guides & Deep Links
          </span>
          <span className="text-[11px] text-[#0969E8] font-bold">
            AirHelp Travelpayouts Partner
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <a
            href={delayGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8]/30 transition-all flex items-start gap-2.5 cursor-pointer group"
          >
            <Clock className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] flex items-center gap-1">
                <span>Flight Delayed 3+ Hours</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </div>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                Up to €600 compensation if arrival was delayed past 3 hours.
              </p>
            </div>
          </a>

          <a
            href={cancelGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8]/30 transition-all flex items-start gap-2.5 cursor-pointer group"
          >
            <AlertTriangle className="w-4 h-4 text-[#FF8A2A] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] flex items-center gap-1">
                <span>Flight Cancelled (&lt;14 Days)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </div>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                Receive refund + legal cash compensation up to €600.
              </p>
            </div>
          </a>

          <a
            href={deniedBoardingGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white hover:bg-blue-50/50 rounded-xl border border-[#E2E8F0] hover:border-[#0969E8]/30 transition-all flex items-start gap-2.5 cursor-pointer group"
          >
            <Scale className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#071B49] group-hover:text-[#0969E8] flex items-center gap-1">
                <span>Denied Boarding & Overbooking</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </div>
              <p className="text-[11px] text-[#64748B] mt-0.5">
                Involuntary bump from your booked seat qualifies immediately.
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Eligibility Criteria Cards */}
      {!compact && (
        <div className="space-y-3 mt-6 pt-5 border-t border-gray-100">
          <h4 className="text-xs font-bold text-[#071B49] uppercase tracking-wider">
            When Are You Entitled to Cash Compensation?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ELIGIBILITY_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-all p-3.5 rounded-xl border border-[#E2E8F0] space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#071B49]">{rule.title}</span>
                  <span className="text-[11px] font-extrabold text-[#21B96F] bg-[#21B96F]/10 px-2 py-0.5 rounded">
                    {rule.payout}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trust & Guarantee Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 mt-5 border-t border-gray-100">
        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-xl p-3 border border-[#E2E8F0]">
          <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-[#071B49] block">No Win, No Fee</span>
            <span className="text-[11px] text-[#64748B]">Zero upfront cost</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-xl p-3 border border-[#E2E8F0]">
          <DollarSign className="w-4 h-4 text-[#0969E8] shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-[#071B49] block">Up to €600 / Person</span>
            <span className="text-[11px] text-[#64748B]">Cash paid to bank</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-xl p-3 border border-[#E2E8F0]">
          <Clock className="w-4 h-4 text-[#FFB800] shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-[#071B49] block">3-Year Window</span>
            <span className="text-[11px] text-[#64748B]">Claim past flights</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#F8FAFC] rounded-xl p-3 border border-[#E2E8F0]">
          <AlertTriangle className="w-4 h-4 text-[#EC4899] shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-[#071B49] block">Luggage & Delays</span>
            <span className="text-[11px] text-[#64748B]">Baggage compensation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
