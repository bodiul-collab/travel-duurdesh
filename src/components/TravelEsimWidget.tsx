import React, { useState, useEffect, useRef } from 'react';
import {
  Smartphone,
  Wifi,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  QrCode,
  Globe2,
  CheckCircle2,
  Zap,
  PhoneCall,
  Info
} from 'lucide-react';
import {
  AIRALO_AFFILIATE_MARKER,
  TRAVELPAYOUTS_ESIM_SCRIPT_SRC,
  POPULAR_ESIM_DESTINATIONS,
  buildAiraloUrl
} from '../utils/airalo';

interface TravelEsimWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export const TravelEsimWidget: React.FC<TravelEsimWidgetProps> = ({
  className = '',
  title = 'Global Travel eSIM & Mobile Data (Airalo)',
  subtitle = 'Stay connected in 200+ countries with instant prepaid eSIM data. Zero roaming fees, no physical SIM swaps.'
}) => {
  const [activeTab, setActiveTab] = useState<'widget' | 'destinations'>('widget');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Exact Travelpayouts script HTML inside an isolated responsive iframe
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
    body {
      margin: 0;
      padding: 12px 14px;
      background: #FFFFFF;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow-x: hidden;
    }
    #tp-widget-container {
      width: 100%;
      min-height: 120px;
    }
  </style>
</head>
<body>
  <div id="tp-widget-container">
    <script async src="${TRAVELPAYOUTS_ESIM_SCRIPT_SRC}" charset="utf-8"></script>
  </div>
</body>
</html>
`;

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-[#E7EEF7] shadow-sm p-4 sm:p-7 transition-all ${className}`}
    >
      {/* Header Info & Attribution */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EAF2FB]">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#32a8dd]/15 to-[#0969E8]/15 flex items-center justify-center text-[#0969E8] shrink-0">
            <Smartphone className="w-5 h-5 text-[#0969E8]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#071B49] tracking-tight">
                {title}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0969E8] bg-[#0969E8]/10 px-2.5 py-0.5 rounded-full">
                <Wifi className="w-3 h-3" />
                Airalo eSIM
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#21B96F] bg-[#21B96F]/10 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Instant QR Setup
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#5E6B82] mt-0.5 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Action Toggle & Direct Airalo button */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <div className="flex items-center bg-[#F3F8FF] p-1 rounded-xl border border-[#E7EEF7] text-xs font-semibold">
            <button
              onClick={() => setActiveTab('widget')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'widget'
                  ? 'bg-white text-[#0969E8] shadow-sm font-bold'
                  : 'text-[#5E6B82] hover:text-[#071B49]'
              }`}
            >
              Search Widget
            </button>
            <button
              onClick={() => setActiveTab('destinations')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'destinations'
                  ? 'bg-white text-[#0969E8] shadow-sm font-bold'
                  : 'text-[#5E6B82] hover:text-[#071B49]'
              }`}
            >
              Popular Countries
            </button>
          </div>

          <a
            href={buildAiraloUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0969E8] hover:bg-[#0759c5] px-3.5 py-2 rounded-xl transition-all shadow-sm shadow-blue-500/20 shrink-0"
          >
            <span>Airalo.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'widget' ? (
        <div className="space-y-5">
          {/* Embedded Travelpayouts Script Widget */}
          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white shadow-inner relative">
            <iframe
              srcDoc={iframeHtml}
              title="Airalo eSIM Country Search Widget"
              className="w-full min-h-[220px] sm:min-h-[190px] border-0"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          {/* Quick Route Quick-Links */}
          <div>
            <div className="text-xs font-bold text-[#071B49] mb-2 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#0969E8]" />
              <span>Quick Select Popular Travel & Umrah Destinations:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {POPULAR_ESIM_DESTINATIONS.slice(0, 6).map((dest) => (
                <a
                  key={dest.id}
                  href={buildAiraloUrl(dest.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#F8FAFC] hover:bg-[#EAF2FB] text-[#071B49] hover:text-[#0969E8] border border-gray-200 hover:border-blue-200 transition-all cursor-pointer shadow-xs"
                >
                  <span>{dest.flag}</span>
                  <span className="font-semibold">{dest.name.split(' (')[0]}</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                    from ${dest.startingPriceUSD}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Popular Destinations Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {POPULAR_ESIM_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="p-4 rounded-2xl border border-gray-200 hover:border-blue-300 bg-[#FBFDFF] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{dest.flag}</span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    from ${dest.startingPriceUSD} USD
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#071B49] group-hover:text-[#0969E8] transition-colors line-clamp-1">
                  {dest.name}
                </h4>
                <div className="text-[11px] text-[#5E6B82] mt-1 space-y-0.5">
                  <div>Network: <strong className="text-gray-700">{dest.network}</strong></div>
                  <div>Data: <strong className="text-gray-700">{dest.startingData}</strong></div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 line-clamp-2 leading-relaxed italic">
                  &ldquo;{dest.highlight}&rdquo;
                </p>
              </div>

              <a
                href={buildAiraloUrl(dest.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0969E8] group-hover:text-white bg-[#EAF2FB] group-hover:bg-[#0969E8] py-2 px-3 rounded-xl transition-all"
              >
                <span>Get {dest.countryCode} eSIM</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      )}

      {/* 4 Feature Highlights for Pilgrims & Global Travelers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-[#EAF2FB]">
        <div className="flex items-start gap-2.5">
          <QrCode className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-bold text-[#071B49]">Instant QR Activation</div>
            <div className="text-[#5E6B82] text-[11px]">Install in 2 minutes before flying</div>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <PhoneCall className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-bold text-[#071B49]">Keep WhatsApp Number</div>
            <div className="text-[#5E6B82] text-[11px]">Chat with family seamlessly</div>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-[#FF8A2A] shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-bold text-[#071B49]">Zero Airport SIM Queues</div>
            <div className="text-[#5E6B82] text-[11px]">Skip lines at Jeddah & Madinah</div>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#7B61FF] shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-bold text-[#071B49]">No Roaming Bill Shock</div>
            <div className="text-[#5E6B82] text-[11px]">100% prepaid transparent rates</div>
          </div>
        </div>
      </div>

      {/* Affiliate Partner Disclosure Footer */}
      <div className="mt-5 pt-3.5 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#64748B]">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#21B96F]" />
          <span>
            Official Partner: <strong className="text-[#071B49]">Airalo</strong> via Travelpayouts (Marker: <code className="text-[#0969E8] font-mono">737968</code>)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Campaign ID: 541 | Promo ID: 8588</span>
        </div>
      </div>
    </div>
  );
};
