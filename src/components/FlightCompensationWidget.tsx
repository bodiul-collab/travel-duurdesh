import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Clock,
  DollarSign,
  AlertTriangle,
  Plane,
  Scale
} from 'lucide-react';

interface FlightCompensationWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export const FlightCompensationWidget: React.FC<FlightCompensationWidgetProps> = ({
  className = '',
  title = 'Flight Delay & Cancellation Compensation (AirHelp)',
  subtitle = 'Check if you are owed up to $650 (€600) per passenger for delayed, cancelled, or overbooked flights under EU 261 and UK passenger rights laws.',
  compact = false
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Exact Travelpayouts / AirHelp script HTML in an isolated responsive container
  const iframeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      padding: 6px;
      background: #FFFFFF;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow-x: hidden;
      min-height: 270px;
    }
    #airhelp-widget-wrapper {
      width: 100%;
      min-height: 265px;
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

  const directClaimUrl =
    'https://c120.travelpayouts.com/click?shmarker=737968&promo_id=8679&source_type=link&type=click';

  const ELIGIBILITY_RULES = [
    {
      title: 'Flight Delayed 3+ Hours',
      payout: 'Up to €600 ($650)',
      desc: 'If your flight reached your final destination over 3 hours late and the airline was responsible.'
    },
    {
      title: 'Flight Cancelled <14 Days',
      payout: 'Up to €600 ($650)',
      desc: 'If the airline cancelled without at least 14 days advance warning and without valid re-routing.'
    },
    {
      title: 'Denied Boarding / Overbooked',
      payout: 'Up to €600 ($650)',
      desc: 'If you were involuntarily denied boarding due to airline overbooking or operational seat cuts.'
    },
    {
      title: 'Past 3 Years Claims Valid',
      payout: 'Historical Claims',
      desc: 'You can claim money back for disrupted flights taken anywhere within the last 3 years.'
    }
  ];

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E7EEF7] shadow-sm p-4 sm:p-7 transition-all ${className}`}
    >
      {/* Header Info & Attribution */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EAF2FB]">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0969E8]/15 to-[#FFB800]/15 flex items-center justify-center text-[#0969E8] shrink-0">
            <Scale className="w-5 h-5 text-[#0969E8]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] tracking-tight">
                {title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0969E8] bg-[#0969E8]/10 px-2.5 py-0.5 rounded-full">
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
            href={directClaimUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0969E8] hover:bg-[#0759c5] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <span>Open Full Claim Form</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Interactive Widget Area */}
      <div className="space-y-6">
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-[#071B49] uppercase tracking-wider flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-[#0969E8]" />
              Instant Flight Compensation Calculator
            </span>
            <span className="text-[11px] text-[#64748B]">
              No win, no fee • Direct airline dispute resolution
            </span>
          </div>

          <div className="w-full relative min-h-[270px] bg-white rounded-xl border border-gray-200 overflow-hidden">
            <iframe
              title="AirHelp Flight Compensation Claim Widget"
              srcDoc={iframeHtml}
              className="w-full min-h-[270px] h-[280px] border-0"
              scrolling="no"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          <div className="mt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2 pt-2 border-t border-gray-100">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#21B96F]" />
              Over 2.5 million passengers helped • Highest win rate worldwide
            </span>
            <a
              href={directClaimUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0969E8] font-bold hover:underline flex items-center gap-1"
            >
              Check compensation directly on AirHelp.com →
            </a>
          </div>
        </div>

        {/* Eligibility Criteria Cards */}
        {!compact && (
          <div className="space-y-3">
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

        {/* Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
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
    </div>
  );
};
