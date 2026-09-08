/**
 * Automated Google Translate Integration Utility
 * Enables instant full-page translation into 20 global languages
 * with zero reload delays, seamless DOM translation, and clean styling.
 */

// Mapping internal language codes to Google Translate supported language tags
export const GOOGLE_TRANSLATE_LANG_MAP: Record<string, string> = {
  en: 'en',
  zh: 'zh-CN',
  hi: 'hi',
  es: 'es',
  ar: 'ar',
  fr: 'fr',
  bn: 'bn',
  pt: 'pt',
  ru: 'ru',
  ur: 'ur',
  id: 'id',
  de: 'de',
  ja: 'ja',
  mr: 'mr',
  te: 'te',
  tr: 'tr',
  ta: 'ta',
  yue: 'zh-TW',
  vi: 'vi',
  ko: 'ko'
};

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
    googleTranslateLoaded?: boolean;
  }
}

/**
 * Initializes the Google Translate Element silently in the background
 */
export function initGoogleTranslate(): void {
  if (typeof window === 'undefined') return;

  // Defensive check to ensure window.fetch is writable and cannot trigger:
  // "TypeError: Cannot set property fetch of #<Window> which has only a getter"
  try {
    if ('fetch' in window) {
      const orig = window.fetch.bind(window);
      let active = orig;
      try {
        Object.defineProperty(window, 'fetch', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: orig
        });
      } catch {
        try {
          Object.defineProperty(window, 'fetch', {
            configurable: true,
            enumerable: true,
            get: () => active,
            set: (fn) => {
              active = typeof fn === 'function' ? fn : orig;
            }
          });
        } catch {
          // ignore if unconfigurable
        }
      }
    }
  } catch {
    // ignore
  }

  // Define Google Translate Callback
  window.googleTranslateElementInit = () => {
    try {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,zh-CN,hi,es,ar,fr,bn,pt,ru,ur,id,de,ja,mr,te,tr,ta,zh-TW,vi,ko',
            autoDisplay: false
          },
          'google_translate_element'
        );
        window.googleTranslateLoaded = true;

        // Apply saved language if any
        const savedLang = localStorage.getItem('travel_duurdesh_lang') || 'en';
        if (savedLang && savedLang !== 'en') {
          setTimeout(() => {
            applyGoogleLanguageChange(savedLang);
          }, 300);
        }
      }
    } catch (e) {
      console.warn('Google Translate initialization notice:', e);
    }
  };

  // Inject script if not already present
  if (!document.getElementById('google-translate-script')) {
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => {
      console.info('Google Translate service unavailable in current network/iframe environment; using client-side translation.');
    };
    try {
      document.head.appendChild(script);
    } catch (e) {
      console.warn('Unable to append Google Translate script:', e);
    }
  }
}

/**
 * Applies full page translation to the chosen language code
 */
export function applyGoogleLanguageChange(langCode: string): void {
  if (typeof window === 'undefined') return;

  const gtCode = GOOGLE_TRANSLATE_LANG_MAP[langCode] || langCode;

  // Update HTML lang and direction
  document.documentElement.lang = gtCode;
  document.documentElement.dir = (langCode === 'ar' || langCode === 'ur') ? 'rtl' : 'ltr';

  // Save to localStorage
  localStorage.setItem('travel_duurdesh_lang', langCode);

  if (gtCode === 'en') {
    // Clear translate cookies for English restoration
    const domain = window.location.hostname;
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;

    const selectEl = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (selectEl) {
      selectEl.value = 'en';
      selectEl.dispatchEvent(new Event('change'));
    }
    return;
  }

  // Set translation cookies
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${gtCode}; path=/; max-age=31536000;`;
  document.cookie = `googtrans=/auto/${gtCode}; path=/; max-age=31536000;`;
  if (domain && domain !== 'localhost') {
    document.cookie = `googtrans=/en/${gtCode}; path=/; domain=.${domain}; max-age=31536000;`;
    document.cookie = `googtrans=/auto/${gtCode}; path=/; domain=.${domain}; max-age=31536000;`;
  }

  // Attempt triggering the Google combo box directly
  const tryTriggerCombo = (attemptsLeft: number = 10) => {
    const selectEl = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (selectEl) {
      selectEl.value = gtCode;
      selectEl.dispatchEvent(new Event('change'));
    } else if (attemptsLeft > 0) {
      setTimeout(() => tryTriggerCombo(attemptsLeft - 1), 250);
    }
  };

  tryTriggerCombo();
}
