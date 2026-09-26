import { useContext } from 'react';
import { ExchangeRateContext } from '../context/ExchangeRateContext.jsx';
import { useTranslation } from '../hooks/useTranslation.js';

export default function ProductModal({ product, onClose, selectedSize, selectedColor }) {
  const { price: regionPrice, currency, locale } = useContext(ExchangeRateContext) || {
    price: 119,
    currency: 'USD',
    locale: 'en-US'
  };
  const { t } = useTranslation();

  const open = Boolean(product);

  const handlePurchase = () => {
    // Handle purchase logic
    console.log('Purchase:', { product: product?.name, size: selectedSize, color: selectedColor });
    // Could integrate with payment system, cart, or checkout flow here
    onClose();
  };

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

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <button className="modal-close mono" onClick={onClose}>
          CLOSE ✕
        </button>

        {product && (
          <>
            <div className="product-art">
              {product.image && <img src={product.image} alt={product.name} className="product-image" />}
              <span className="glyph">□</span>
            </div>
            <div className="modal-eyebrow mono">DROP {product.id}</div>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-question">{product.description}</p>
            {product.price && <div className="product-price mono">{getFormattedPrice()}</div>}

            <div className="modal-instruction mono">{t('modal.instruction')}</div>

            <div className="modal-selection">
              <div className="selection-row">
                <span className="selection-label mono">{t('modal.size')}</span>
                <span className="selection-value">{selectedSize || '—'}</span>
              </div>
              <div className="selection-row">
                <span className="selection-label mono">{t('modal.color')}</span>
                <span className="selection-value">{selectedColor || '—'}</span>
              </div>
            </div>

            <button
              className="modal-purchase crack-cta tape-btn"
              onClick={handlePurchase}
              disabled={!selectedSize || !selectedColor}
            >
              <span className="tape-label">{t('modal.buy')}</span>
              <span className="nav-square">{t('nav.square')}</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
