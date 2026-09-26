import { useState, useContext } from 'react';
import { ExchangeRateContext } from '../context/ExchangeRateContext.jsx';
import { useTranslation } from '../hooks/useTranslation.js';

export default function DropCard({ id, name, status, statusVariant, shoppable, price, image, imageWhite, onArtClick }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { price: regionPrice, currency, locale } = useContext(ExchangeRateContext) || { 
    price: 119, 
    currency: 'USD', 
    locale: 'en-US' 
  };
  const { t } = useTranslation();

  // Format price with locale and currency
  const getFormattedPrice = () => {
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(regionPrice);
    } catch (e) {
      // Fallback formatting
      return `${currency} ${regionPrice}`;
    }
  };

  const formattedPrice = shoppable ? getFormattedPrice() : 'N/A';
  
  // Determine which image to show based on color selection
  const currentImage = selectedColor === 'white' && imageWhite ? imageWhite : image;
  const isWhiteVersion = selectedColor === 'white' && imageWhite;

  return (
    <div className={`drop-card${shoppable ? '' : ' disabled'}`}>
      <button
        type="button"
        className="drop-art-trigger"
        onClick={shoppable ? () => onArtClick(selectedSize, selectedColor) : undefined}
        disabled={!shoppable}
        aria-label={shoppable ? `View artwork and price for ${name}` : undefined}
      >
        <div className={`drop-art${isWhiteVersion ? ' white-version' : ''}`}>
          {currentImage && <img src={currentImage} alt={name} className="drop-image" />}
          <span className="glyph">□</span>
        </div>
      </button>
      <div className="drop-meta">
        <div className="drop-id mono">DROP {id}</div>
        <div className="drop-name">{name}</div>
      </div>
      <div className="drop-status">
        <div className="row">
          <span>{t('drop.status')}</span>
          <span className={statusVariant}>{status}</span>
        </div>
        <div className="row">
          <span>{t('drop.price')}</span>
          <span className="price-display">{formattedPrice}</span>
        </div>
      </div>
      <div className="drop-options-label mono">{t('drop.selectFirst')}</div>
      <div className="drop-options">
        <select
          className="drop-select"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          disabled={!shoppable}
        >
          <option value="">{t('select.size')}</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="2xl">2XL</option>
        </select>
        <select
          className="drop-select"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          disabled={!shoppable}
        >
          <option value="">{t('select.color')}</option>
          <option value="black">Black</option>
          {imageWhite && <option value="white">White</option>}
          <option value="red">Red</option>
          <option value="navy">Navy</option>
          <option value="grey">Grey</option>
          <option value="amber">Amber</option>
        </select>
      </div>
    </div>
  );
}
