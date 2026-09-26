import { createContext, useState, useEffect } from 'react';

// Fixed prices per region
const FIXED_PRICES = {
  'NAM': { price: 119, currency: 'USD', locale: 'en-US' },
  'EUR': { price: 100, currency: 'EUR', locale: 'de-DE' },
  'COP': { price: 310000, currency: 'COP', locale: 'es-CO' },
};

// Language to region mapping
const LANGUAGE_TO_REGION = {
  'en': 'NAM',
  'en-US': 'NAM',
  'en-GB': 'EUR',
  'en-CA': 'NAM',
  'en-AU': 'EUR',
  'es': 'COP',
  'es-CO': 'COP',
  'es-MX': 'COP',
  'es-AR': 'COP',
  'de': 'EUR',
  'de-DE': 'EUR',
  'de-AT': 'EUR',
  'de-CH': 'EUR',
  'fr': 'EUR',
  'fr-FR': 'EUR',
  'fr-BE': 'EUR',
  'fr-CH': 'EUR',
  'it': 'EUR',
  'it-IT': 'EUR',
  'pt': 'COP',
  'pt-BR': 'COP',
  'nl': 'EUR',
  'nl-NL': 'EUR',
  'nl-BE': 'EUR',
  'pl': 'EUR',
  'pl-PL': 'EUR',
  'ru': 'EUR',
  'ru-RU': 'EUR',
  'ja': 'EUR',
  'ja-JP': 'EUR',
  'zh': 'EUR',
  'zh-CN': 'EUR',
  'zh-TW': 'EUR',
  'ko': 'EUR',
  'ko-KR': 'EUR',
};

const getRegionFromLanguage = (browserLocale) => {
  // Direct match
  let region = LANGUAGE_TO_REGION[browserLocale];
  
  // Fallback: try to match by language code only
  if (!region) {
    const languageCode = browserLocale.split('-')[0];
    region = LANGUAGE_TO_REGION[languageCode];
  }
  
  // Final fallback to North America
  return region || 'NAM';
};

export const ExchangeRateContext = createContext();

export function ExchangeRateProvider({ children }) {
  const [region, setRegion] = useState('NAM');

  useEffect(() => {
    // Detect browser language on mount and set region
    const browserLocale = navigator.language || 'en-US';
    const detectedRegion = getRegionFromLanguage(browserLocale);
    setRegion(detectedRegion);
  }, []);

  const currentPrice = FIXED_PRICES[region];

  // Map region to translation locale
  const localeMap = {
    'NAM': 'en-US',
    'EUR': 'de-DE',
    'COP': 'es-CO',
  };

  return (
    <ExchangeRateContext.Provider value={{ 
      region,
      setRegion,
      price: currentPrice.price,
      currency: currentPrice.currency,
      locale: localeMap[region],
      FIXED_PRICES
    }}>
      {children}
    </ExchangeRateContext.Provider>
  );
}
