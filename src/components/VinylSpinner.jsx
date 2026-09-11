// Spinning vinyl-record loader — used for the NFC boot sequence and the
// brief "decoding" moment right before a correct answer reveals its Drop.
export default function VinylSpinner({ size = 96 }) {
  return (
    <svg
      className="vinyl-spin"
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" style={{ fill: '#141410', stroke: 'var(--line)' }} strokeWidth="1" />
      <circle cx="60" cy="60" r="50" fill="none" style={{ stroke: 'var(--paper)' }} strokeOpacity="0.07" strokeWidth="1" />
      <circle cx="60" cy="60" r="42" fill="none" style={{ stroke: 'var(--paper)' }} strokeOpacity="0.07" strokeWidth="1" />
      <circle cx="60" cy="60" r="34" fill="none" style={{ stroke: 'var(--paper)' }} strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="60" cy="60" r="26" fill="none" style={{ stroke: 'var(--paper)' }} strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="60" cy="60" r="18" style={{ fill: 'var(--tape-red)' }} />
      <circle cx="60" cy="60" r="2.6" style={{ fill: 'var(--paper)' }} />
    </svg>
  )
}
