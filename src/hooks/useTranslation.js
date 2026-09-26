import { useContext } from 'react';
import { ExchangeRateContext } from '../context/ExchangeRateContext.jsx';
import { translations } from '../locales/translations.js';

export function useTranslation() {
  const { locale } = useContext(ExchangeRateContext) || { locale: 'en-US' };
  
  const t = (key) => {
    const localeTranslations = translations[locale] || translations['en-US'];
    return localeTranslations[key] || key;
  };

  return { t, locale };
}
