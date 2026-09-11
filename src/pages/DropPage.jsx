import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DROPS } from '../data/drops.js'
import CassetteIcon from '../components/CassetteIcon.jsx'
import VinylSpinner from '../components/VinylSpinner.jsx'

// DEMO ONLY: accepted answers live in the browser here purely so this
// prototype works without a backend. Before this protects a real answer,
// move `DROPS` (or at least `accepted`) to a server function — the client
// should only ever send a normalized guess and get granted/denied back,
// never hold the correct answer itself.
const WRONG_MESSAGES = [
  'ACCESS: DENIED.',
  'WRONG FREQUENCY.',
  'SIGNAL NOT FOUND.',
  'THE CODE REMAINS LOCKED.',
  'LOOK CLOSER.',
]

const HINT_THRESHOLD = 2

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '')
}

export default function DropPage() {
  const { id } = useParams()
  const drop = DROPS[id]

  const bootLines = drop
    ? ['CODEINK', 'NFC SIGNAL DETECTED', 'IDENTIFYING ARTWORK...', `DROP ${drop.id} FOUND`, 'SONG: ENCRYPTED']
    : ['CODEINK', 'NFC SIGNAL DETECTED', 'IDENTIFYING ARTWORK...', 'SIGNAL LOST']

  const [bootStep, setBootStep] = useState(0)
  const [booted, setBooted] = useState(false)

  const [value, setValue] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [status, setStatus] = useState({ text: '', variant: '' })
  const [hintOpen, setHintOpen] = useState(false)
  const [decoding, setDecoding] = useState(false)
  const [granted, setGranted] = useState(false)

  // Boot sequence — skipped instantly if the user prefers reduced motion.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setBooted(true)
      return
    }
    if (bootStep >= bootLines.length - 1) {
      const t = setTimeout(() => setBooted(true), 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setBootStep((n) => n + 1), 480)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootStep])

  function check() {
    if (!drop) return
    const norm = normalize(value)
    if (!norm) {
      setStatus({ text: 'ENTER AN ANSWER FIRST.', variant: 'denied' })
      return
    }
    if (drop.accepted.map(normalize).includes(norm)) {
      setStatus({ text: 'DECODING... SIGNAL FOUND.', variant: 'granted' })
      setDecoding(true)
      setTimeout(() => setGranted(true), 900)
    } else {
      setAttempts((a) => a + 1)
      const msg = WRONG_MESSAGES[Math.floor(Math.random() * WRONG_MESSAGES.length)]
      setStatus({ text: msg, variant: 'denied' })
    }
  }

  if (!drop) {
    return (
      <div className="drop-page">
        <header className="drop-header">
          <Link to="/" className="logo">
            CODEINK
          </Link>
          <span className="nav-square">□</span>
        </header>
        <div className="crack-body">
          <div className="modal-eyebrow mono">DROP {id}</div>
          <h1 className="modal-title big">SIGNAL NOT FOUND.</h1>
          <p className="modal-question">This code doesn't match a CODEINK drop. Check the piece and tap again.</p>
          <Link to="/" className="crack-cta tape-btn" style={{ marginTop: 32, display: 'inline-flex' }}>
            <CassetteIcon width={32} />
            <span className="tape-label">BACK TO CODEINK</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="drop-page">
      {!booted && (
        <div className="boot-screen">
          <VinylSpinner size={104} />
          <div className="boot-line mono">{bootLines[bootStep]}</div>
        </div>
      )}

      {booted && !granted && (
        <div className={`crack-screen${decoding ? ' decoding' : ''}`}>
          <header className="drop-header">
            <Link to="/" className="logo">
              CODEINK
            </Link>
            <span className="nav-square">□</span>
          </header>

          <div className="crack-body">
            <div className="modal-eyebrow mono">DROP {drop.id}</div>
            <h1 className="modal-title big">{drop.question}</h1>

            <div className="pw-row">
              <label className="pw-label mono" htmlFor="pw-input">
                ENTER PASSWORD
              </label>
              <input
                id="pw-input"
                className="pw-input mono"
                placeholder="TYPE YOUR ANSWER"
                autoComplete="off"
                spellCheck="false"
                value={value}
                disabled={decoding}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && check()}
              />
              <button className="pw-submit tape-btn mono" onClick={check} disabled={decoding}>
                <CassetteIcon width={28} />
                <span className="tape-label">CRACK THE CODE</span>
              </button>
              <div className={`pw-status mono${status.variant ? ' ' + status.variant : ''}`}>
                {decoding && <VinylSpinner size={18} />}
                <span>{status.text}</span>
              </div>
            </div>

            {attempts >= HINT_THRESHOLD && !hintOpen && (
              <button className="hint-link mono" onClick={() => setHintOpen(true)}>
                HINT
              </button>
            )}
            {hintOpen && <div className="hint-text mono">{drop.hint}</div>}
          </div>
        </div>
      )}

      {granted && (
        <div className="reveal-page">
          <header className="drop-header">
            <Link to="/" className="logo">
              CODEINK
            </Link>
            <span className="nav-square">□</span>
          </header>

          <div className="reveal-body">
            <div className="access-granted mono">ACCESS: GRANTED □</div>

            <div className="reveal-art-full">
              <span className="glyph">□</span>
            </div>

            <div className="modal-eyebrow mono">DROP {drop.id}</div>
            <h1 className="reveal-song-title">{drop.song}</h1>
            <div className="reveal-artist">{drop.artist}</div>

            <p className="reveal-concept">{drop.concept}</p>

            <div className="reveal-links">
              <a href={drop.spotifyUrl} target="_blank" rel="noreferrer" className="tape-btn">
                <CassetteIcon width={26} />
                <span className="tape-label">LISTEN ON SPOTIFY</span>
              </a>
              <a href={drop.youtubeUrl} target="_blank" rel="noreferrer" className="tape-btn">
                <CassetteIcon width={26} />
                <span className="tape-label">LISTEN ON YOUTUBE MUSIC</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
