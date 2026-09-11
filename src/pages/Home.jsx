import { useState } from 'react'
import DropCard from '../components/DropCard.jsx'
import ProductModal from '../components/ProductModal.jsx'
import CassetteIcon from '../components/CassetteIcon.jsx'
import { PRODUCTS } from '../data/products.js'

const STEPS = [
  { num: '01', title: 'See', desc: 'Study the artwork on the garment. Nothing is labeled — every mark is a fragment of a song.' },
  { num: '02', title: 'Decode', desc: 'Find the clues. Symbols, colors, objects and phrases all point toward one answer.' },
  { num: '03', title: 'Tap', desc: 'Access CODEINK through the NFC chip embedded in the piece — it opens your Drop directly.' },
  { num: '04', title: 'Crack', desc: "Enter your answer. The interface won't hint at whether you're close." },
  { num: '05', title: 'Listen', desc: "If you're right, the signal unlocks — and the song behind the piece is finally yours." },
]

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <>
      <header>
        <div className="logo">CODEINK</div>
        <span className="nav-square">□</span>
      </header>

      <section className="hero">
        <div className="hero-grain" />
        <div className="wrap">
          <div className="hero-eyebrow mono">STREETWEAR · ENCODED</div>
          <h1 className="brand">CODEINK</h1>
          <div className="hero-line2">Every song hides a universe.</div>
          <p className="hero-copy">
            CODEINK transforms music into visual language. Every piece hides a song. Read the art. Follow the
            clues. Crack the code.
          </p>
          <div className="hero-bottom">
            <button
              className="crack-cta tape-btn"
              onClick={() => document.getElementById('drops')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CassetteIcon width={32} />
              <span className="tape-label">CRΛCK THE CØDƎ</span>
            </button>
            <span className="scroll-hint mono">SCROLL ↓</span>
          </div>
        </div>
      </section>

      <section id="concept">
        <div className="wrap concept-grid">
          <div className="concept-mantra">
            <div>YOU SEE IT.</div>
            <div className="dim">YOU HEAR IT.</div>
            <div>YOU WEAR IT.</div>
          </div>
          <div className="concept-text">
            <p>
              We don't print songs. <strong>We encode them.</strong>
            </p>
            <p>
              Every CODEINK artwork is built from fragments of a song — references, symbols, memories and
              visual clues assembled into a single image.
            </p>
            <p>
              The answer is never printed on the front. <strong>You have to find it.</strong>
            </p>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="section-num">HOW IT WORKS</div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.num}>
                <div className="step-num mono">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="drops">
        <div className="wrap">
          <div className="drops-head">
            <div className="drops-title">Drops</div>
            <div className="drops-sub mono">SONG: ENCRYPTED — until decoded on the physical piece.</div>
          </div>
          <div className="drops-grid">
            {PRODUCTS.map((p) => (
              <DropCard key={p.id} {...p} onArtClick={() => setActiveProduct(p)} />
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-mantra">Every song hides a universe.</div>
            <div className="footer-links">
              <a href="#">INSTAGRAM</a>
              <a href="#">SPOTIFY</a>
              <a href="#">CONTACT</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© CODEINK</span>
            <span>□</span>
          </div>
        </div>
      </footer>

      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </>
  )
}
