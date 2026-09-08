import React, { useState } from 'react';
import {
  Calculator,
  ArrowRightLeft,
  DollarSign,
  CloudSun,
  FileCheck,
  Sparkles,
  Info,
  CheckCircle2,
  Calendar,
  Users,
  Compass,
  Smartphone,
  Wifi
} from 'lucide-react';
import { CURRENCIES } from '../data/travelData';
import { CurrencyConfig } from '../types';
import { TravelEsimWidget } from './TravelEsimWidget';
import { LiveWeatherTool } from './LiveWeatherTool';

interface TravelToolsSectionProps {
  currentCurrency: CurrencyConfig;
  onCurrencyChange: (curr: CurrencyConfig) => void;
  onNavigate?: (pageId: string) => void;
}

export const TravelToolsSection: React.FC<TravelToolsSectionProps> = ({
  currentCurrency,
  onCurrencyChange,
  onNavigate
}) => {
  const [activeTool, setActiveTool] = useState<'converter' | 'budget' | 'weather' | 'visa' | 'esim'>('converter');

  // Currency Converter State
  const [amount, setAmount] = useState<number>(100);
  const [fromCode, setFromCode] = useState<string>('USD');
  const [toCode, setToCode] = useState<string>('BDT');

  // Budget Calculator State
  const [tripDays, setTripDays] = useState<number>(7);
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [travelStyle, setTravelStyle] = useState<'budget' | 'moderate' | 'luxury'>('moderate');

  // Currency converter calculations
  const fromRate = CURRENCIES[fromCode]?.rateToUSD || 1.0;
  const toRate = CURRENCIES[toCode]?.rateToUSD || 1.0;
  // convert: amount in fromCurrency -> USD -> toCurrency
  const amountInUSD = amount / fromRate;
  const convertedAmount = Math.round(amountInUSD * toRate * 100) / 100;
  const unitRate = Math.round((toRate / fromRate) * 10000) / 10000;

  const handleSwapCurrencies = () => {
    const temp = fromCode;
    setFromCode(toCode);
    setToCode(temp);
  };

  // Budget Estimation Calculations
  const styleMultiplier = travelStyle === 'budget' ? 60 : travelStyle === 'moderate' ? 140 : 320;
  const estimatedStayUSD = tripDays * (styleMultiplier * 0.5) * (travelersCount <= 2 ? 1 : Math.ceil(travelersCount / 2));
  const estimatedFoodUSD = tripDays * (styleMultiplier * 0.3) * travelersCount;
  const estimatedTransportUSD = tripDays * (styleMultiplier * 0.2) * travelersCount;
  const totalBudgetUSD = Math.round(estimatedStayUSD + estimatedFoodUSD + estimatedTransportUSD);

  const formatWithCurrent = (usdVal: number) => {
    const converted = Math.round(usdVal * currentCurrency.rateToUSD);
    return `${currentCurrency.symbol}${converted.toLocaleString()}`;
  };

  return (
    <section id="tools" className="py-16 sm:py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B61FF] uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Smart Trip Utilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071B49] tracking-tight font-syncopate uppercase">
            Travel Tools
          </h2>
          <p className="text-sm sm:text-base text-[#5E6B82] mt-3 leading-relaxed">
            Eliminate travel uncertainty before boarding. Our integrated planning utilities provide accurate currency conversions, realistic budget estimations, seasonal climate overviews, and up-to-date visa requirement guides.
          </p>
          {onNavigate && (
            <div className="mt-4">
              <button
                onClick={() => onNavigate('tools')}
                className="inline-flex items-center gap-2 bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Open Complete Travel Tools Suite (Packing, Umrah & Insurance)</span>
              </button>
            </div>
          )}
        </div>

        {/* 5 Tool Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
          <button
            onClick={() => setActiveTool('converter')}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTool === 'converter'
                ? 'bg-[#071B49] text-white shadow-sm'
                : 'bg-white text-[#475569] hover:text-[#071B49] hover:bg-white/80'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4 text-[#4DA3FF]" />
            <span>Currency Converter</span>
          </button>

          <button
            onClick={() => setActiveTool('budget')}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTool === 'budget'
                ? 'bg-[#071B49] text-white shadow-sm'
                : 'bg-white text-[#475569] hover:text-[#071B49] hover:bg-white/80'
            }`}
          >
            <DollarSign className="w-4 h-4 text-[#21B96F]" />
            <span>Budget Calculator</span>
          </button>

          <button
            onClick={() => setActiveTool('weather')}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTool === 'weather'
                ? 'bg-[#071B49] text-white shadow-sm'
                : 'bg-white text-[#475569] hover:text-[#071B49] hover:bg-white/80'
            }`}
          >
            <CloudSun className="w-4 h-4 text-[#FFB800]" />
            <span>Weather Guide</span>
          </button>

          <button
            onClick={() => setActiveTool('visa')}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTool === 'visa'
                ? 'bg-[#071B49] text-white shadow-sm'
                : 'bg-white text-[#475569] hover:text-[#071B49] hover:bg-white/80'
            }`}
          >
            <FileCheck className="w-4 h-4 text-[#7B61FF]" />
            <span>Visa Info</span>
          </button>

          <button
            onClick={() => setActiveTool('esim')}
            className={`flex items-center justify-center gap-2 p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer relative ${
              activeTool === 'esim'
                ? 'bg-[#071B49] text-white shadow-sm'
                : 'bg-white text-[#475569] hover:text-[#071B49] hover:bg-white/80'
            }`}
          >
            <Smartphone className="w-4 h-4 text-[#32a8dd]" />
            <span>Travel eSIM</span>
            <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider bg-[#32a8dd]/20 text-[#0969E8] px-1.5 py-0.5 rounded">
              Airalo
            </span>
          </button>
        </div>

        {/* Dynamic Tool Interface */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
          {/* Tool 1: Currency Converter */}
          {activeTool === 'converter' && (
            <div className="space-y-6">
              <div className="border-b border-[#F1F5F9] pb-4">
                <h3 className="text-lg font-bold text-[#071B49]">Live Multi-Currency Converter</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Convert between major world currencies including USD, EUR, GBP, BDT, AED, and SAR with live market rates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
                {/* Amount and From */}
                <div className="md:col-span-3 space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569] block">Amount</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      value={amount}
                      onChange={(e) => setAmount(Math.max(1, parseFloat(e.target.value) || 0))}
                      className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#071B49] focus:outline-none focus:border-[#0969E8]"
                    />
                    <select
                      value={fromCode}
                      onChange={(e) => setFromCode(e.target.value)}
                      className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-xs font-bold text-[#071B49] focus:outline-none focus:border-[#0969E8]"
                    >
                      {Object.keys(CURRENCIES).map((code) => (
                        <option key={code} value={code}>{code}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap button */}
                <div className="md:col-span-1 flex justify-center pt-4 md:pt-0">
                  <button
                    onClick={handleSwapCurrencies}
                    className="p-3 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#071B49] rounded-xl transition-colors"
                    title="Swap Currencies"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                  </button>
                </div>

                {/* Converted result and To */}
                <div className="md:col-span-3 space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569] block">Converted To</label>
                  <div className="flex gap-2">
                    <div className="w-full bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm font-bold text-[#0969E8] flex items-center">
                      {CURRENCIES[toCode]?.symbol} {convertedAmount.toLocaleString()}
                    </div>
                    <select
                      value={toCode}
                      onChange={(e) => setToCode(e.target.value)}
                      className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2.5 text-xs font-bold text-[#071B49] focus:outline-none focus:border-[#0969E8]"
                    >
                      {Object.keys(CURRENCIES).map((code) => (
                        <option key={code} value={code}>{code}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#475569]">
                <div>
                  <strong>Indicative Rate:</strong> 1 {fromCode} = {unitRate} {toCode}
                </div>
                <div className="text-[11px] text-[#64748B]">
                  No hidden margins • Ideal for calculating Umrah food, taxis & hotel budgets
                </div>
              </div>
            </div>
          )}

          {/* Tool 2: Budget Calculator */}
          {activeTool === 'budget' && (
            <div className="space-y-6">
              <div className="border-b border-[#F1F5F9] pb-4">
                <h3 className="text-lg font-bold text-[#071B49]">Travel Budget Estimator</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Plan your journey with realistic estimates tailored for hotels, daily meals, local transportation, and activities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569]">Trip Length (Days)</label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={tripDays}
                    onChange={(e) => setTripDays(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm font-bold text-[#071B49] focus:outline-none focus:border-[#0969E8]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569]">Travelers</label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm font-bold text-[#071B49] focus:outline-none focus:border-[#0969E8]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#475569]">Comfort Tier</label>
                  <select
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value as any)}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 text-sm font-bold text-[#071B49] focus:outline-none focus:border-[#0969E8]"
                  >
                    <option value="budget">Economy & Smart ($60/day/p)</option>
                    <option value="moderate">Moderate & Comfortable ($140/day/p)</option>
                    <option value="luxury">Luxury & Haram View ($320/day/p)</option>
                  </select>
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 text-center">
                  <span className="text-[11px] font-semibold text-[#64748B] block uppercase">Accommodation</span>
                  <span className="text-base font-extrabold text-[#071B49] mt-1 block">
                    {formatWithCurrent(estimatedStayUSD)}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 text-center">
                  <span className="text-[11px] font-semibold text-[#64748B] block uppercase">Food & Dining</span>
                  <span className="text-base font-extrabold text-[#071B49] mt-1 block">
                    {formatWithCurrent(estimatedFoodUSD)}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 text-center">
                  <span className="text-[11px] font-semibold text-[#64748B] block uppercase">Transport & Taxis</span>
                  <span className="text-base font-extrabold text-[#071B49] mt-1 block">
                    {formatWithCurrent(estimatedTransportUSD)}
                  </span>
                </div>

                <div className="bg-[#071B49] text-white rounded-xl p-3.5 text-center">
                  <span className="text-[11px] font-semibold text-[#93C5FD] block uppercase">Estimated Total</span>
                  <span className="text-base font-extrabold text-[#21B96F] mt-1 block">
                    {formatWithCurrent(totalBudgetUSD)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tool 3: Live Weather Guide */}
          {activeTool === 'weather' && (
            <div className="space-y-6">
              <div className="border-b border-[#F1F5F9] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[#071B49]">Live Weather & Climate Radar by Destination</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    Choose your country and city from the dropdowns or search any local area worldwide for instant temperatures and climate advice.
                  </p>
                </div>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('tools')}
                    className="text-xs font-bold text-[#0969E8] hover:underline self-start sm:self-auto cursor-pointer"
                  >
                    Open Full Climate Tool &rarr;
                  </button>
                )}
              </div>

              <LiveWeatherTool />
            </div>
          )}

          {/* Tool 4: Visa Information */}
          {activeTool === 'visa' && (
            <div className="space-y-5">
              <div className="border-b border-[#F1F5F9] pb-4">
                <h3 className="text-lg font-bold text-[#071B49]">Global Visa & Entry Requirement Guidelines</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Key guidelines on electronic visas, tourist permits, and entry prerequisites for popular travel routes.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#21B96F] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#071B49]">Saudi Arabia (Tourist e-Visa & Umrah Nusuk)</h4>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      Citizens of 60+ countries (and holders of valid US, UK, or Schengen visas) can obtain an instant one-year multiple-entry tourist e-Visa allowing Umrah performance and tourism. Ensure passport has 6+ months validity.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#0969E8] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#071B49]">United Arab Emirates (Dubai 30/60-Day Entry)</h4>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      GCC nationals, EU, US, and many Asian passports receive free visa-on-arrival for 30 to 90 days. Other passport holders can easily apply for tourist visas via airline sponsorships or licensed hotel partners.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-[#7B61FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#071B49]">Malaysia & Turkey e-Visas</h4>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      Malaysia offers visa-free entry for up to 90 days for most nationalities (with digital MDAC arrival card). Turkey offers quick online e-Visas for eligible passports within 5 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tool 5: Global Travel eSIM & Mobile Data (Airalo) */}
          {activeTool === 'esim' && (
            <TravelEsimWidget
              className="border-0 shadow-none p-0"
              title="Global Prepaid eSIM & Data Packages (Airalo)"
              subtitle="Search high-speed 4G/5G data packages for Saudi Arabia (Umrah/Hajj), UAE, Turkey, UK, USA, and 200+ global destinations."
            />
          )}

          {/* Internal Navigation Action Strip */}
          <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="text-[#64748B]">
              Integrated Tools: Currency, Budget, Weather, Visa, & Global eSIM
            </span>
            <div className="flex items-center gap-3">
              {onNavigate && (
                <button
                  onClick={() => onNavigate('tools')}
                  className="font-bold text-[#0969E8] hover:text-[#071B49] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Open Full Tools Suite</span>
                  <Sparkles className="w-3 h-3 text-[#FFB800]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
