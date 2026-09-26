import { useContext } from 'react';
import { ExchangeRateContext } from '../context/ExchangeRateContext.jsx';

const REGIONS = [
  { code: 'en-US', name: 'North America', flag: '🇺🇸', region: 'NAM' },
  { code: 'es-CO', name: 'Colombia', flag: '🇨🇴', region: 'COP' },
  { code: 'de-DE', name: 'Europe', flag: '🇪🇺', region: 'EUR' },
];

export default function LanguageSelector() {
  const { region, setRegion } = useContext(ExchangeRateContext) || {};

  if (!setRegion) return null;

  return (
    <div className="language-selector">
      <select
        className="language-select"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        title="Change region and currency"
      >
        {REGIONS.map(r => (
          <option key={r.code} value={r.region}>
            {r.flag} {r.name}
          </option>
        ))}
      </select>
    </div>
  );
}
