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
  Check,
  ShieldCheck,
  Luggage,
  Clock,
  Globe,
  AlertTriangle,
  Plane,
  Heart,
  ChevronRight,
  RefreshCw,
  Plus,
  Trash2,
  ThermometerSun,
  Droplets,
  Wind,
  Umbrella,
  Search,
  Smartphone,
  Wifi,
  QrCode,
  PhoneCall,
  Car
} from 'lucide-react';
import { CURRENCIES } from '../data/travelData';
import { CurrencyConfig } from '../types';
import { TravelEsimWidget } from './TravelEsimWidget';
import { LiveWeatherTool } from './LiveWeatherTool';
import { CarRentalWidget } from './CarRentalWidget';

interface TravelToolsPageProps {
  currency?: CurrencyConfig;
  onNavigate?: (pageId: string) => void;
}

// Extended Currency Database for the Converter
const CONVERTER_CURRENCIES: Record<string, { code: string; name: string; symbol: string; rateToUSD: number; country: string }> = {
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', rateToUSD: 1.0, country: 'United States' },
  SAR: { code: 'SAR', name: 'Saudi Riyal', symbol: 'SAR', rateToUSD: 3.75, country: 'Saudi Arabia' },
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', rateToUSD: 0.92, country: 'European Union' },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', rateToUSD: 0.79, country: 'United Kingdom' },
  BDT: { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', rateToUSD: 117.5, country: 'Bangladesh' },
  AED: { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rateToUSD: 3.67, country: 'United Arab Emirates' },
  TRY: { code: 'TRY', name: 'Turkish Lira', symbol: '₺', rateToUSD: 34.2, country: 'Turkey' },
  MYR: { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', rateToUSD: 4.45, country: 'Malaysia' },
  CAD: { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rateToUSD: 1.36, country: 'Canada' },
  AUD: { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rateToUSD: 1.52, country: 'Australia' },
  INR: { code: 'INR', name: 'Indian Rupee', symbol: '₹', rateToUSD: 83.5, country: 'India' },
  SGD: { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rateToUSD: 1.35, country: 'Singapore' }
};

export const TravelToolsPage: React.FC<TravelToolsPageProps> = ({
  currency = { code: 'USD', symbol: '$', rateToUSD: 1 },
  onNavigate
}) => {
  // 1. Currency Converter State
  const [convAmount, setConvAmount] = useState<number>(100);
  const [fromCurr, setFromCurr] = useState<string>('USD');
  const [toCurr, setToCurr] = useState<string>('SAR');

  // Converter calculations
  const fromRate = CONVERTER_CURRENCIES[fromCurr]?.rateToUSD || 1.0;
  const toRate = CONVERTER_CURRENCIES[toCurr]?.rateToUSD || 1.0;
  const convertedValue = Math.round((convAmount / fromRate) * toRate * 100) / 100;
  const exchangeRate = Math.round((toRate / fromRate) * 10000) / 10000;

  const handleSwap = () => {
    const temp = fromCurr;
    setFromCurr(toCurr);
    setToCurr(temp);
  };

  // 2. Budget Calculator State
  const [tripDays, setTripDays] = useState<number>(10);
  const [travelers, setTravelers] = useState<number>(2);
  const [tier, setTier] = useState<'budget' | 'comfort' | 'luxury'>('comfort');
  const [isUmrahMode, setIsUmrahMode] = useState<boolean>(true);

  // Budget calculations
  const baseDaily = tier === 'budget' ? 70 : tier === 'comfort' ? 160 : 350;
  const flightEstUSD = (tier === 'budget' ? 600 : tier === 'comfort' ? 950 : 1800) * travelers;
  const roomCount = Math.ceil(travelers / (tier === 'budget' ? 4 : 2));
  const hotelEstUSD = tripDays * (tier === 'budget' ? 60 : tier === 'comfort' ? 150 : 380) * roomCount;
  const foodEstUSD = tripDays * (tier === 'budget' ? 20 : tier === 'comfort' ? 45 : 95) * travelers;
  const transportEstUSD = tripDays * (tier === 'budget' ? 15 : tier === 'comfort' ? 35 : 75) * (isUmrahMode ? 1.3 : 1);
  const pilgrimEstUSD = isUmrahMode ? (150 * travelers + 80 * travelers) : (tripDays * 15 * travelers); // Visa/Nusuk + Zamzam/Ziyarat
  const totalBudgetUSD = Math.round(flightEstUSD + hotelEstUSD + foodEstUSD + transportEstUSD + pilgrimEstUSD);

  const formatWithCurrent = (usd: number) => {
    const val = Math.round(usd * currency.rateToUSD);
    return `${currency.symbol}${val.toLocaleString()}`;
  };

  // 3. Weather Tool State
  const [selectedCityWeather, setSelectedCityWeather] = useState<string>('makkah');

  const weatherData: Record<string, {
    city: string;
    country: string;
    tempDay: string;
    tempNight: string;
    condition: string;
    humidity: string;
    rainfall: string;
    bestSeason: string;
    caution: string;
    pilgrimAdvice: string;
  }> = {
    makkah: {
      city: 'Makkah',
      country: 'Saudi Arabia',
      tempDay: '38°C (100°F)',
      tempNight: '25°C (77°F)',
      condition: 'Sunny & Arid Desert',
      humidity: '32%',
      rainfall: 'Minimal (< 5 mm/mo)',
      bestSeason: 'November to February (Mildest months)',
      caution: 'Extreme midday heat. Marble courtyard tiles can reach over 45°C without shading.',
      pilgrimAdvice: 'Perform Tawaf and Sa’i between 1:00 AM and 4:00 AM or after Isha prayer for cooler temperatures and reduced crowd density.'
    },
    madinah: {
      city: 'Madinah',
      country: 'Saudi Arabia',
      tempDay: '34°C (93°F)',
      tempNight: '20°C (68°F)',
      condition: 'Clear Sky & Dry Breeze',
      humidity: '24%',
      rainfall: 'Extremely Low',
      bestSeason: 'November to March (Pleasant evenings)',
      caution: 'Winter desert evenings can drop to 12°C—pack a lightweight sweater or shawl.',
      pilgrimAdvice: 'Take advantage of the giant automated convertible umbrellas in the Prophet’s Mosque courtyard providing expansive cool shade during Dhuhr prayers.'
    },
    dubai: {
      city: 'Dubai',
      country: 'United Arab Emirates',
      tempDay: '32°C (90°F)',
      tempNight: '23°C (73°F)',
      condition: 'Bright Sunshine',
      humidity: '55%',
      rainfall: 'Rare',
      bestSeason: 'November to April (Ideal outdoor climate)',
      caution: 'Summer months (June–August) exceed 43°C with heavy coastal humidity.',
      pilgrimAdvice: 'During flight layovers, use air-conditioned indoor transit like the Dubai Metro directly into airport terminals.'
    },
    istanbul: {
      city: 'Istanbul',
      country: 'Turkey',
      tempDay: '19°C (66°F)',
      tempNight: '12°C (54°F)',
      condition: 'Mild Breeze & Partial Sun',
      humidity: '68%',
      rainfall: 'Moderate (60 mm/mo)',
      bestSeason: 'April to May & September to October (Spring & Autumn)',
      caution: 'Winter months bring chilly winds off the Black Sea and occasional snowfall.',
      pilgrimAdvice: 'Wear slip-on walking shoes with warm wool socks for visits to the Blue Mosque, Hagia Sophia, and Eyüp Sultan Mosque.'
    },
    kl: {
      city: 'Kuala Lumpur',
      country: 'Malaysia',
      tempDay: '32°C (90°F)',
      tempNight: '24°C (75°F)',
      condition: 'Tropical & Humid',
      humidity: '82%',
      rainfall: 'Frequent afternoon showers (200 mm/mo)',
      bestSeason: 'June to August & December to February',
      caution: 'Sudden torrential tropical rainstorms occur late afternoon.',
      pilgrimAdvice: 'Always carry a compact lightweight travel umbrella and stay hydrated in the humid tropical atmosphere.'
    }
  };

  // 4. Visa Requirement Checker State
  const [passportOrigin, setPassportOrigin] = useState<string>('western');
  const [visaDestination, setVisaDestination] = useState<string>('saudi');

  const getVisaDetails = () => {
    if (visaDestination === 'saudi') {
      if (passportOrigin === 'western') {
        return {
          status: 'Instant Tourist eVisa / Visa on Arrival',
          color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
          validity: '1 Year Multiple-Entry (90 days max stay per visit)',
          cost: 'Approx. 440 SAR (~$117 USD including mandatory health insurance)',
          requirements: ['Passport valid for 6+ months', 'Debit/Credit card for payment', 'Digital passport photo', 'Nusuk app for Rawdah permit'],
          notes: 'Eligible for US, UK, EU, Canada, Australia, and Schengen visa holders. Can be used for tourism and performing Umrah outside of Hajj season.'
        };
      } else if (passportOrigin === 'gcc') {
        return {
          status: 'GCC Resident eVisa / Visa-Free Entry',
          color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
          validity: 'Multiple-entry or single-entry depending on residency status',
          cost: 'Approx. 300 SAR (~$80 USD)',
          requirements: ['Valid GCC residency permit (min 3 months validity)', 'Passport valid for 6+ months', 'Nusuk app registration'],
          notes: 'GCC national citizens require no visa (National ID card only). Expats with GCC residency can apply online in minutes.'
        };
      } else {
        return {
          status: 'Dedicated Umrah Visa / Tourist Visa via Agent',
          color: 'text-blue-600 bg-blue-50 border-blue-200',
          validity: '90 Days Single-Entry for Pilgrimage & Tourism',
          cost: 'Varies by licensed agency ($120 - $180 USD)',
          requirements: ['Confirmed hotel booking in Makkah/Madinah', 'Return flight ticket', 'Approved agency sponsorship', 'Valid bio-metric passport'],
          notes: 'Travelers from South Asia and select regions can easily obtain electronic Umrah visas through authorized partners or apply for the free 96-hour Saudi Transit Stopover Visa.'
        };
      }
    } else if (visaDestination === 'turkey') {
      return {
        status: passportOrigin === 'western' ? 'Online eVisa / Visa-Free' : 'eVisa or Sticker Visa',
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        validity: '90 Days within a 180-day window',
        cost: '$50 USD depending on nationality',
        requirements: ['Passport with 6 months validity', 'Credit card for online fee', 'Proof of return ticket'],
        notes: 'Citizens of many Western European countries and the UK now enjoy complete visa-free entry. Others apply via official government eVisa portal.'
      };
    } else {
      return {
        status: 'Electronic Travel Authorization / Visa Free',
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        validity: '30 to 90 Days',
        cost: 'Free or nominal fee',
        requirements: ['Malaysia Digital Arrival Card (MDAC) filled 3 days prior', 'Valid passport for 6 months', 'Confirmed outbound ticket'],
        notes: 'Most global citizens receive 30–90 days visa-free entry. Complete the free online arrival card before departure.'
      };
    }
  };

  // 5. Packing List Generator State
  const [packingCategory, setPackingCategory] = useState<'umrah' | 'global' | 'electronics' | 'meds'>('umrah');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    '2x Unstitched Ihram Towels (Men)': false,
    'Ihram Belt or Zippered Money Pouch': false,
    'Non-stitched Slippers / Ankle-free Sandals': false,
    'Fragrance-Free Soap, Shampoo & Deodorant': false,
    'Drawstring Shoe Bag for Haram Courtyards': false,
    'Compact Foldable Prayer Mat': false,
    'Pocket Quran & Dua Supplication Book': false,
    'Nusuk App Login & Digital eVisa PDF': false,
    'Refillable Zamzam Water Bottle': false,
    'Oral Rehydration Electrolyte Sachets': false,
    'Universal Travel Adapter & 20,000mAh Power Bank': false,
    'Prescription Medications with Doctor Letter': false
  });

  const toggleChecklistItem = (item: string) => {
    setChecklist(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const totalPacked = Object.values(checklist).filter(Boolean).length;
  const totalItems = Object.keys(checklist).length;
  const packedPercentage = Math.round((totalPacked / totalItems) * 100);

  return (
    <div className="bg-[#F8FAFC] text-[#101C36] min-h-screen">
      {/* ============================================================ */}
      {/* 1. Page Title & Intro */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-[#071B49] via-[#0B2564] to-[#0E2E7D] text-white pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4DA3FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0969E8]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FFB800]/15 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-6" aria-label="Breadcrumb">
            <button
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-white font-medium">Travel Tools</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold tracking-wide text-[#4DA3FF]">
              <Calculator className="w-4 h-4 text-[#FFB800]" />
              <span>Free Smart Trip Utilities & Pilgrimage Calculators</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-syncopate">
              Essential Travel Tools for Every Journey — Travel DuurDesh
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Navigating international journeys and sacred pilgrimages requires clarity, foresight, and reliable planning. Unforeseen currency conversion spreads, sudden climate fluctuations, complex visa paperwork, and disorganized luggage can introduce unnecessary stress to what should be an uplifting and life-changing voyage. Travel DuurDesh equips global travelers, families, and Umrah pilgrims with intuitive, transparent, and accurate travel utilities designed to remove the guesswork before you step out your front door.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <ArrowRightLeft className="w-5 h-5 text-[#4DA3FF] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Live Forex Rates</div>
                  <div className="text-white/70 text-[11px]">Real-time fair conversions</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <DollarSign className="w-5 h-5 text-[#21B96F] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Budget Predictor</div>
                  <div className="text-white/70 text-[11px]">Itemized trip estimator</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <CloudSun className="w-5 h-5 text-[#FFB800] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Seasonal Weather</div>
                  <div className="text-white/70 text-[11px]">Climate & packing alerts</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-[#EC4899] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Visa Checker</div>
                  <div className="text-white/70 text-[11px]">Nusuk & transit guides</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Smartphone className="w-5 h-5 text-[#32a8dd] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Travel eSIM Data</div>
                  <div className="text-white/70 text-[11px]">Airalo 200+ countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. Currency Converter Tool */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Editorial Content */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>Foreign Exchange Planning</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Currency Converter & Smart Exchange Guide
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Currency conversion is one of the most critical elements of international journey planning. Exchange rates dictate the true cost of everyday essentials—from your morning tea and hotel room rates to airport taxis and prayer rugs. Without reliable tools, travelers easily fall victim to inflated retail exchange booth spreads and predatory dynamic currency conversion (DCC) markups at point-of-sale terminals.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
                Expert Money-Saving Tips for Travelers:
              </h3>
              <ul className="space-y-2 text-xs text-[#5E6B82]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span><strong>Never exchange large cash sums at airport kiosks:</strong> Airport money changers frequently charge 8% to 15% worse exchange margins than city center bank ATMs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span><strong>Always choose "Charge in Local Currency":</strong> When card payment machines offer to convert your payment into your home currency, decline. Doing so incurs high hidden DCC fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                  <span><strong>Countries with high exchange volatility:</strong> Monitor real-time rates closely when traveling through Turkey (TRY), Egypt (EGP), or Argentina, where local prices adjust rapidly.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FFF9EE] border border-[#FDE68A] rounded-2xl p-4.5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#92400E]">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>Pilgrim-Friendly Advice for Saudi Arabia (SAR):</span>
              </div>
              <p className="text-xs text-[#78350F] leading-relaxed">
                The Saudi Riyal is officially pegged to the US Dollar at approximately <strong>1 USD = 3.75 SAR</strong>. In Makkah and Madinah, contactless card payments (Visa, Mastercard, and Apple Pay) are accepted almost everywhere—including small water stands and pharmacy counters. You will only need small cash notes (5, 10, and 50 SAR) for charity (Sadaqah) and quick street food purchases.
              </p>
            </div>
          </div>

          {/* Interactive Tool Widget with Required Placeholder */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center font-bold">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#071B49]">Live Currency Converter</h3>
                    <span className="text-[11px] text-gray-500">Real-time benchmark exchange values</span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#21B96F] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Zero Fee Calc
                </span>
              </div>

              {/* Explicit Required Placeholder Label */}
              <div className="text-center py-2 px-4 bg-[#F8FAFC] rounded-xl border border-dashed border-[#CBD5E1] text-xs font-semibold text-[#64748B]">
                [Insert Currency Converter Tool Here.]
              </div>

              {/* Amount Input */}
              <div>
                <label className="block text-xs font-bold text-[#071B49] mb-1.5 uppercase tracking-wider">
                  Amount to Convert
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={convAmount}
                    onChange={(e) => setConvAmount(Math.max(1, parseFloat(e.target.value) || 0))}
                    className="w-full bg-[#F8FAFC] border border-gray-300 rounded-xl px-4 py-3 text-base font-bold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                  />
                  <span className="absolute right-4 top-3 text-xs font-bold text-gray-400">
                    {fromCurr}
                  </span>
                </div>
              </div>

              {/* Currency Selectors with Swap Button */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 mb-1">From</label>
                  <select
                    value={fromCurr}
                    onChange={(e) => setFromCurr(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-gray-300 rounded-xl p-2.5 text-xs font-bold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                  >
                    {Object.values(CONVERTER_CURRENCIES).map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code} - {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center pt-2 sm:pt-4 sm:col-span-1">
                  <button
                    onClick={handleSwap}
                    className="w-9 h-9 rounded-full bg-[#EAF2FB] hover:bg-[#0969E8] text-[#0969E8] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-sm"
                    title="Swap Currencies"
                    aria-label="Swap Currencies"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 mb-1">To</label>
                  <select
                    value={toCurr}
                    onChange={(e) => setToCurr(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-gray-300 rounded-xl p-2.5 text-xs font-bold text-[#071B49] focus:outline-none focus:ring-2 focus:ring-[#0969E8]"
                  >
                    {Object.values(CONVERTER_CURRENCIES).map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code} - {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Conversion Result Display */}
              <div className="bg-gradient-to-br from-[#071B49] to-[#0E2E7D] text-white p-5 rounded-2xl space-y-2">
                <div className="text-xs text-white/75 font-medium">
                  {convAmount.toLocaleString()} {fromCurr} =
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-syncopate">
                  {CONVERTER_CURRENCIES[toCurr]?.symbol} {convertedValue.toLocaleString()} <span className="text-sm font-normal text-white/70">{toCurr}</span>
                </div>
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white/75">
                  <span>1 {fromCurr} = {exchangeRate} {toCurr}</span>
                  <span>1 {toCurr} = {(Math.round((1 / exchangeRate) * 10000) / 10000)} {fromCurr}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. Travel Budget Calculator */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E7EEF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Editorial Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Financial Foresight</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                Comprehensive Travel Budget Calculator
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Accurately budgeting for an overseas trip or pilgrimage prevents financial anxiety, allowing you to immerse yourself in the journey with complete peace of mind. A robust travel budget must account for five distinct spending pillars: international flights, nightly accommodation, nutritious daily meals, local transit, and incidental expenses.
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
                  Special Budgeting Tips for Umrah Pilgrims:
                </h3>
                <ul className="space-y-2.5 text-xs text-[#5E6B82]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                    <span><strong>Haram-Front vs. Shuttle Lodging:</strong> Hotels with direct Kaaba views command 3x higher room rates. Booking 4-star lodging in Aziziyah or Kudai with 24/7 dedicated shuttle service saves hundreds of dollars for families.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                    <span><strong>Zamzam Water Allowance Fees:</strong> GACA permits each pilgrim with an Umrah visa to check one 5-liter Zamzam canister (approx. 12.5 SAR or $3.30 USD), avoiding baggage penalties.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0969E8] shrink-0 mt-0.5" />
                    <span><strong>Family Quad Sharing:</strong> Reserving quad (4-bed) or quintuple suites dramatically lowers the cost per pilgrim compared to separate twin rooms.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('hotels')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#0759c5] bg-[#F3F8FF] hover:bg-[#EAF2FB] px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <span>[See Hotels Page]</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Calculator Widget */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-base font-bold text-[#071B49]">Interactive Budget Estimator</h3>
                    <p className="text-xs text-gray-500">Tailored for global vacations & holy pilgrimages</p>
                  </div>

                  {/* Umrah Toggle */}
                  <label className="inline-flex items-center gap-2 cursor-pointer bg-white px-3 py-1.5 rounded-full border border-gray-300">
                    <input
                      type="checkbox"
                      checked={isUmrahMode}
                      onChange={(e) => setIsUmrahMode(e.target.checked)}
                      className="rounded text-[#0969E8] focus:ring-[#0969E8] w-4 h-4"
                    />
                    <span className="text-xs font-bold text-[#071B49]">Include Umrah Expenses</span>
                  </label>
                </div>

                {/* Explicit Required Placeholder Label */}
                <div className="text-center py-2 px-4 bg-white rounded-xl border border-dashed border-[#CBD5E1] text-xs font-semibold text-[#64748B]">
                  [Insert Budget Calculator Here.]
                </div>

                {/* Input Controls */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Trip Duration</label>
                    <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                      <input
                        type="number"
                        min="1"
                        max="90"
                        value={tripDays}
                        onChange={(e) => setTripDays(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-xs font-bold text-[#071B49] focus:outline-none"
                      />
                      <span className="text-xs text-gray-400 ml-1">Days</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Travelers</label>
                    <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2">
                      <Users className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={travelers}
                        onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full text-xs font-bold text-[#071B49] focus:outline-none"
                      />
                      <span className="text-xs text-gray-400 ml-1">People</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Travel Style</label>
                    <select
                      value={tier}
                      onChange={(e) => setTier(e.target.value as any)}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs font-bold text-[#071B49] focus:outline-none"
                    >
                      <option value="budget">Budget / Backpacker</option>
                      <option value="comfort">Mid-Range / Comfort</option>
                      <option value="luxury">Luxury / Clock Tower</option>
                    </select>
                  </div>
                </div>

                {/* Itemized Cost Breakdown */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200 space-y-3">
                  <div className="text-xs font-bold text-[#071B49] uppercase tracking-wider pb-2 border-b border-gray-100">
                    Estimated Cost Breakdown
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="flex items-center gap-1.5"><Plane className="w-3.5 h-3.5 text-[#0969E8]" /> Flights ({travelers} travelers)</span>
                      <span className="font-bold text-[#071B49]">{formatWithCurrent(flightEstUSD)}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-[#D97706]" /> Accommodation ({tripDays} nights)</span>
                      <span className="font-bold text-[#071B49]">{formatWithCurrent(hotelEstUSD)}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#21B96F]" /> Food & Halal Dining</span>
                      <span className="font-bold text-[#071B49]">{formatWithCurrent(foodEstUSD)}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="flex items-center gap-1.5"><RefreshCw className="w-3.5 h-3.5 text-[#EC4899]" /> Local Transportation</span>
                      <span className="font-bold text-[#071B49]">{formatWithCurrent(transportEstUSD)}</span>
                    </div>
                    {isUmrahMode && (
                      <div className="flex justify-between items-center text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md font-semibold">
                        <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-emerald-600" /> Umrah Visas, Zamzam, Ziyarat</span>
                        <span>{formatWithCurrent(pilgrimEstUSD)}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase">Estimated Total Trip Cost</div>
                      <div className="text-xl sm:text-2xl font-extrabold text-[#071B49] font-syncopate">
                        {formatWithCurrent(totalBudgetUSD)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-gray-500">Per Person Average</div>
                      <div className="text-sm font-bold text-[#0969E8]">
                        {formatWithCurrent(Math.round(totalBudgetUSD / travelers))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. Weather by Country Tool */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <CloudSun className="w-3.5 h-3.5" />
            <span>Seasonal Climate Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Weather by Country & Destination Climate Tool
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Weather conditions dictate every aspect of travel preparation: what clothing you pack, when you schedule outdoor sightseeing, and how much physical energy is consumed. For Umrah pilgrims, knowing seasonal temperatures in Makkah and Madinah is vital for performing rituals safely.
          </p>
        </div>

        {/* Explicit Required Placeholder Label */}
        <div className="max-w-md mx-auto mb-6 text-center py-2 px-4 bg-white rounded-xl border border-dashed border-[#CBD5E1] text-xs font-semibold text-[#64748B]">
          [Insert Weather Tool Here.]
        </div>

        {/* Live Interactive Weather & Climate Tool */}
        <div className="max-w-5xl mx-auto">
          <LiveWeatherTool />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. Visa Requirement Checker */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E7EEF7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Border Clearance & Entry Rules</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
                Visa Requirement Checker & Pilgrimage Permits
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Visa policies and electronic entry regulations evolve continuously. Failing to confirm passport validity rules or arrival permits can lead to denied boarding at airport check-in counters.
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#071B49] uppercase tracking-wider">
                  Key Visa Rules for Umrah Pilgrims:
                </h3>
                <ul className="space-y-2 text-xs text-[#5E6B82]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                    <span><strong>Saudi Tourist eVisa:</strong> Eligible passport holders (including US, UK, Schengen, and GCC residents) can perform Umrah on a standard 1-year multiple-entry tourist eVisa throughout the entire year outside the specific Hajj window.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                    <span><strong>Free 96-Hour Stopover Transit Visa:</strong> Flying with Saudia or Flynas? You can generate an electronic 96-hour stopover transit visa for free, which permits performing Umrah and visiting Madinah during a long layover.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#21B96F] shrink-0 mt-0.5" />
                    <span><strong>Official Nusuk App Booking:</strong> While Umrah permits are generously granted, entering the Rawdah ash-Sharifah in Madinah strictly requires an advance digital slot reservation via the official Nusuk app.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate?.('umrah')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] hover:text-[#0759c5] bg-[#F3F8FF] hover:bg-[#EAF2FB] px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  <span>[Visit Umrah Guide]</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Visa Checker Widget */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
                <div className="flex items-center gap-2.5 pb-4 border-b border-gray-200">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF2FB] text-[#0969E8] flex items-center justify-center font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#071B49]">Interactive Visa Explorer</h3>
                    <span className="text-[11px] text-gray-500">Check eligibility, processing times & costs</span>
                  </div>
                </div>

                {/* Explicit Required Placeholder Label */}
                <div className="text-center py-2 px-4 bg-white rounded-xl border border-dashed border-[#CBD5E1] text-xs font-semibold text-[#64748B]">
                  [Insert Visa Checker Tool Here.]
                </div>

                {/* Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Your Passport Type</label>
                    <select
                      value={passportOrigin}
                      onChange={(e) => setPassportOrigin(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl p-2.5 text-xs font-bold text-[#071B49] focus:outline-none"
                    >
                      <option value="western">US / UK / EU / Canada / Australia</option>
                      <option value="gcc">GCC Citizen or GCC Expat Resident</option>
                      <option value="asia">South Asia / Southeast Asia / Africa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-1">Destination Country</label>
                    <select
                      value={visaDestination}
                      onChange={(e) => setVisaDestination(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl p-2.5 text-xs font-bold text-[#071B49] focus:outline-none"
                    >
                      <option value="saudi">Saudi Arabia (Umrah / Tourism)</option>
                      <option value="turkey">Turkey (Istanbul / Tourism)</option>
                      <option value="malaysia">Malaysia (Kuala Lumpur)</option>
                    </select>
                  </div>
                </div>

                {/* Visa Results Box */}
                {(() => {
                  const details = getVisaDetails();
                  return (
                    <div className="bg-white rounded-2xl p-5 border border-gray-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${details.color}`}>
                          {details.status}
                        </span>
                        <span className="text-[11px] font-bold text-gray-400">Electronic System</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between text-gray-600">
                          <span>Validity Period:</span>
                          <span className="font-bold text-[#071B49]">{details.validity}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                          <span>Estimated Official Fee:</span>
                          <span className="font-bold text-[#071B49]">{details.cost}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="text-[11px] font-bold text-gray-500 uppercase mb-1.5">Mandatory Requirements:</div>
                        <ul className="space-y-1 text-xs text-gray-600">
                          {details.requirements.map((req, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-[11px] text-gray-500 italic bg-gray-50 p-2.5 rounded-xl">
                        {details.notes}
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5B. Global Travel eSIM & Mobile Data Connectivity (Airalo) */}
      {/* ============================================================ */}
      <section id="esim" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Editorial Content */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              <span>International Connectivity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
              Global Travel eSIM & Mobile Data (Airalo)
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B82] leading-relaxed">
              Never get stranded without navigation, Nusuk app access, or family messaging. Travel DuurDesh partners with Airalo—the world’s leading eSIM provider—to deliver instant prepaid mobile data in over 200 countries and regions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                <QrCode className="w-5 h-5 text-[#0969E8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#071B49]">Activate Instantly via QR Code</h4>
                  <p className="text-[11px] text-[#5E6B82] mt-0.5">
                    Buy your eSIM before you travel and install it in seconds using your smartphone camera. Connect to high-speed data the moment your flight touches down.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                <Wifi className="w-5 h-5 text-[#21B96F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#071B49]">Dedicated Umrah & Saudi Coverage</h4>
                  <p className="text-[11px] text-[#5E6B82] mt-0.5">
                    Seamless 5G/4G connectivity across Makkah, Madinah, and Jeddah on Saudi Arabia’s premier mobile networks (STC / Mobily) with zero airport queue delays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-200">
                <PhoneCall className="w-5 h-5 text-[#FF8A2A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#071B49]">Keep Your WhatsApp & Primary SIM Active</h4>
                  <p className="text-[11px] text-[#5E6B82] mt-0.5">
                    Dual SIM functionality lets you use Airalo for affordable travel data while keeping your domestic phone number active for two-factor SMS security codes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Airalo Widget */}
          <div className="lg:col-span-7">
            <TravelEsimWidget />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. Packing List Generator */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0969E8] bg-[#EAF2FB] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Luggage className="w-3.5 h-3.5" />
            <span>Luggage Preparation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B49] tracking-tight font-syncopate">
            Smart Packing List Generator & Checklist
          </h2>
          <p className="text-sm text-[#5E6B82] leading-relaxed">
            Avoid last-minute airport repacking and forgotten essentials. Use our interactive packing generator to track clothing, electronics, travel documents, medications, and sacred Umrah pilgrimage necessities.
          </p>
        </div>

        {/* Explicit Required Placeholder Label */}
        <div className="max-w-md mx-auto mb-8 text-center py-2 px-4 bg-white rounded-xl border border-dashed border-[#CBD5E1] text-xs font-semibold text-[#64748B]">
          [Insert Packing List Generator Here.]
        </div>

        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 sm:p-10 max-w-3xl mx-auto space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#071B49]">Packing Progress</span>
              <span className="font-bold text-[#0969E8]">{packedPercentage}% Completed ({totalPacked}/{totalItems} items)</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#0969E8] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${packedPercentage}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {Object.keys(checklist).map((item) => {
              const isChecked = checklist[item];
              return (
                <div
                  key={item}
                  onClick={() => toggleChecklistItem(item)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                      : 'bg-[#F8FAFC] border-gray-200 text-[#071B49] hover:bg-gray-100'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                      isChecked
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className={`text-xs font-semibold ${isChecked ? 'line-through opacity-75' : ''}`}>
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Packing Light Advice Box */}
          <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-gray-200 text-xs text-[#5E6B82] space-y-1.5">
            <div className="font-bold text-[#071B49] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#0969E8]" />
              <span>Travel DuurDesh Light-Packing Wisdom:</span>
            </div>
            <p className="leading-relaxed">
              Laundry facilities in Makkah and Madinah are extremely fast and economical (same-day wash-and-press service costs merely 3–5 SAR per item). Packing four days of breathable clothing and washing halfway through your stay saves half your luggage space for dates and gifts.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. Travel Insurance Guide */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-[#071B49] to-[#0A225C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFB800] bg-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Health & Trip Protection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
              Travel Insurance Guide for Global Pilgrims
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              Travel insurance is your financial and medical shield against the unexpected. From emergency hospital admissions in foreign countries and flight cancellations to lost luggage containing irreplaceable personal items, comprehensive protection ensures you are never stranded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0969E8] flex items-center justify-center text-white font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Emergency Medical Care</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Overseas healthcare facilities can be extraordinarily expensive. A quality policy covers emergency outpatient consultations, ambulance transit, hospital stays, prescription medications, and emergency dental pain relief.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#21B96F] flex items-center justify-center text-white font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Trip Cancellations & Interruptions</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Reimburses non-refundable flight bookings and prepaid hotel deposits if you must suddenly cancel or cut your journey short due to personal illness, family bereavement, or natural disruptions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800] flex items-center justify-center text-white font-bold">
                <Luggage className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Lost & Delayed Baggage</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Provides emergency spending allowances to purchase immediate replacement clothing, toiletries, and Ihram towels if the airline misplaces your luggage during international transfers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EC4899] flex items-center justify-center text-white font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Why Pilgrims Need Comprehensive Cover</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                While Saudi eVisas include basic emergency state hospital admission, it does not cover flight changes, baggage loss, or non-emergency clinic visits. Supplementary travel insurance bridges these gaps seamlessly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex items-center justify-center text-white font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Safety & Coverage for Elderly Travelers</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Senior pilgrims perform demanding physical activities under high temperatures. Always declare existing health conditions (such as hypertension or diabetes) to ensure the pre-existing condition waiver is active. Carry physical paper copies of your policy number and 24/7 global emergency assistance telephone hotline inside your wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. Internal Link Suggestions */}
      {/* ============================================================ */}
      <section className="bg-white border-y border-[#E7EEF7] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#071B49] font-syncopate">
              Connect Your Journey with Travel DuurDesh
            </h3>
            <p className="text-xs sm:text-sm text-[#5E6B82]">
              Seamlessly transition between booking engines, pilgrimage blueprints, and verified hotel guides.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <button
              onClick={() => onNavigate?.('flights')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [See Flights Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Global Airfare Deals
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('hotels')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [See Hotels Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Haram & City Stays
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('umrah')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [Visit Umrah Guide]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Rites, Miqat & Tips
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('food')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [Explore Food & Travel Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Global Halal Dining
              </span>
            </button>

            <button
              onClick={() => onNavigate?.('destinations')}
              className="bg-[#F8FAFC] hover:bg-[#0969E8] hover:text-white border border-[#E2E8F0] p-4 rounded-2xl text-center transition-all cursor-pointer group shadow-sm col-span-2 sm:col-span-1"
            >
              <span className="text-xs sm:text-sm font-bold block text-[#071B49] group-hover:text-white">
                [Visit Destinations Page]
              </span>
              <span className="text-[11px] text-gray-500 group-hover:text-white/80 block mt-1">
                Curated Travel Guides
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. Call-to-Action */}
      {/* ============================================================ */}
      <section className="bg-[#071B49] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[#4DA3FF] border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Smart Travel Engineering</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-syncopate">
            Plan Smarter with Travel DuurDesh Tools
          </h2>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Use Our Travel Tools to Make Every Journey Easier. Calculate your pilgrimage budget, check visa clearance, convert currency with zero hidden spreads, and pack with absolute confidence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate?.('flights')}
              className="bg-[#0969E8] hover:bg-[#0759c5] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              [See Flights Page]
            </button>
            <button
              onClick={() => onNavigate?.('hotels')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-white/20 transition-colors cursor-pointer"
            >
              [See Hotels Page]
            </button>
            <button
              onClick={() => onNavigate?.('umrah')}
              className="bg-[#21B96F] hover:bg-[#1ea362] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              [Visit Umrah Guide]
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. Footer Section */}
      {/* ============================================================ */}
      <footer className="bg-[#051336] text-white/80 border-t border-white/10 py-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="text-lg font-bold text-white font-syncopate">
                About Travel DuurDesh
              </div>
              <p className="text-white/70 text-xs leading-relaxed max-w-md">
                Travel DuurDesh is your trusted global travel platform and dedicated Umrah pilgrimage companion. We empower discerning travelers with transparent search tools, honest hotel appraisals, comprehensive halal gastronomy guides, and certified pilgrimage planning—making world exploration and spiritual worship accessible, safe, and enriching.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Support & Contact
              </div>
              <ul className="space-y-1.5 text-white/70">
                <li>Email: support@travelduurdesh.com</li>
                <li>WhatsApp: +1 (800) DUURDESH</li>
                <li>Available: 24/7 Global Traveler Help</li>
                <li><button onClick={() => onNavigate?.('contact')} className="hover:text-white underline cursor-pointer">Contact Support Desk</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Legal & Policies
              </div>
              <ul className="space-y-1.5 text-white/70">
                <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-white cursor-pointer">Terms & Conditions</span></li>
                <li><span className="hover:text-white cursor-pointer">Cookie Settings</span></li>
                <li><span className="hover:text-white cursor-pointer">Affiliate Transparency</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-white/60 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              &copy; {new Date().getFullYear()} Travel DuurDesh. All rights reserved. Single-word spelling: Travel DuurDesh.
            </div>
            <div className="flex items-center gap-4">
              <span>Clean, Professional, AdSense-Ready</span>
              <span>•</span>
              <span>Internal Placeholders Only</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
