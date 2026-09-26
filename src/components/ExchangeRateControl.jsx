import { useExchangeRate } from '../hooks/useExchangeRate.js';

export default function ExchangeRateControl() {
  const { exchangeRate, setExchangeRate } = useExchangeRate();

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      setExchangeRate(value);
    }
  };

  return (
    <div className="exchange-rate-control">
      <label htmlFor="exchange-rate" className="mono">
        USD ×
      </label>
      <input
        id="exchange-rate"
        type="number"
        min="0.01"
        step="0.01"
        value={exchangeRate.toFixed(2)}
        onChange={handleChange}
        className="exchange-rate-input mono"
      />
    </div>
  );
}
