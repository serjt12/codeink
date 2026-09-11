// Small cassette badge used inside buttons, modeled on a real tape:
// black shell, white label strip with ruled lines, a red window housing
// two reels with a center bridge, and four corner screws.
export default function CassetteIcon({ width = 34 }) {
  const height = Math.round(width * (76 / 120))
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 76"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="2" y="2" width="116" height="72" rx="8" style={{ fill: '#141410', stroke: 'var(--line)' }} strokeWidth="1.5" />

      {/* label strip */}
      <rect x="14" y="11" width="92" height="17" rx="2" style={{ fill: 'var(--paper)' }} />
      <line x1="21" y1="16.5" x2="99" y2="16.5" style={{ stroke: '#141410' }} strokeWidth="1.6" opacity="0.55" />
      <line x1="21" y1="21.5" x2="99" y2="21.5" style={{ stroke: '#141410' }} strokeWidth="1.6" opacity="0.4" />

      {/* red window */}
      <rect x="14" y="32" width="92" height="34" rx="2" style={{ fill: 'var(--tape-red)' }} />

      {/* reels */}
      <circle cx="38" cy="49" r="11" style={{ fill: '#141410', stroke: 'var(--paper)' }} strokeWidth="1.2" opacity="0.9" />
      <circle cx="38" cy="49" r="2.2" style={{ fill: 'var(--paper)' }} />
      <circle cx="82" cy="49" r="11" style={{ fill: '#141410', stroke: 'var(--paper)' }} strokeWidth="1.2" opacity="0.9" />
      <circle cx="82" cy="49" r="2.2" style={{ fill: 'var(--paper)' }} />

      {/* bridge window between reels */}
      <rect x="52" y="41" width="16" height="16" rx="1.5" style={{ fill: 'var(--paper)' }} opacity="0.85" />

      {/* corner screws */}
      {[[10, 10], [110, 10], [10, 66], [110, 66]].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`} opacity="0.6">
          <circle cx={cx} cy={cy} r="3.4" fill="none" style={{ stroke: 'var(--paper)' }} strokeWidth="1" />
          <line x1={cx - 1.6} y1={cy - 1.6} x2={cx + 1.6} y2={cy + 1.6} style={{ stroke: 'var(--paper)' }} strokeWidth="1" />
        </g>
      ))}
    </svg>
  )
}
