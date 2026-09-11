export default function ProductModal({ product, onClose }) {
  const open = Boolean(product)

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
              <span className="glyph">□</span>
            </div>
            <div className="modal-eyebrow mono">DROP {product.id}</div>
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-question">{product.description}</p>
            {product.price && <div className="product-price mono">{product.price}</div>}
          </>
        )}
      </div>
    </div>
  )
}
