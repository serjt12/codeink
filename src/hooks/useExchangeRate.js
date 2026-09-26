import { useContext } from 'react';
import { ExchangeRateContext } from '../context/ExchangeRateContext.jsx';

export function useExchangeRate() {
  const context = useContext(ExchangeRateContext);
  if (!context) {
    throw new Error('useExchangeRate must be used within ExchangeRateProvider');
  }
  return context;
}
