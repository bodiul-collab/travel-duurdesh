import { LanguageConfig } from '../types';

/**
 * The 20 most spoken languages globally by total speaker population
 * including Bengali (বাংলা) with native scripts, flags, and metadata.
 */
export const TOP_20_LANGUAGES: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    speakers: '1.5 Billion'
  },
  {
    code: 'zh',
    name: 'Mandarin Chinese',
    nativeName: '中文 (普通话)',
    flag: '🇨🇳',
    speakers: '1.1 Billion'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    speakers: '610 Million'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    speakers: '560 Million'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: '🇸🇦',
    speakers: '332 Million',
    rtl: true
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    speakers: '312 Million'
  },
  {
    code: 'bn',
    name: 'Bengali (Bangla)',
    nativeName: 'বাংলা',
    flag: '🇧🇩',
    speakers: '273 Million'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    speakers: '264 Million'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    speakers: '255 Million'
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    speakers: '232 Million',
    rtl: true
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    speakers: '199 Million'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    speakers: '135 Million'
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    speakers: '125 Million'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    speakers: '99 Million'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    speakers: '96 Million'
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    speakers: '90 Million'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    speakers: '87 Million'
  },
  {
    code: 'yue',
    name: 'Cantonese',
    nativeName: '粵語 / 廣東話',
    flag: '🇭🇰',
    speakers: '86 Million'
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    speakers: '85 Million'
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    speakers: '82 Million'
  }
];

export const DEFAULT_LANGUAGE = TOP_20_LANGUAGES[0]; // English
