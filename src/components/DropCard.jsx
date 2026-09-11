export default function DropCard({ id, name, status, statusVariant, shoppable, onArtClick }) {
  return (
    <div className={`drop-card${shoppable ? '' : ' disabled'}`}>
      <button
        type="button"
        className="drop-art-trigger"
        onClick={shoppable ? onArtClick : undefined}
        disabled={!shoppable}
        aria-label={shoppable ? `View artwork and price for ${name}` : undefined}
      >
        <div className="drop-art">
          <span className="glyph">□</span>
        </div>
      </button>
      <div className="drop-meta">
        <div className="drop-id mono">DROP {id}</div>
        <div className="drop-name">{name}</div>
      </div>
      <div className="drop-status">
        <div className="row">
          <span>STATUS</span>
          <span className={statusVariant}>{status}</span>
        </div>
        <div className="row">
          <span>SONG</span>
          <span className="encrypted">ENCRYPTED</span>
        </div>
      </div>
    </div>
  )
}
