import { useState } from 'react'
import DropCard from '../components/DropCard.jsx'
import LanguageSelector from '../components/LanguageSelector.jsx'
import ProductModal from '../components/ProductModal.jsx'
import { useTranslation } from '../hooks/useTranslation.js'
import { useImageProtection } from '../hooks/useImageProtection.js'
import { PRODUCTS } from '../data/products.js'

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const { t } = useTranslation()
  useImageProtection()

  const handleProductClick = (size, color) => {
    setSelectedSize(size)
    setSelectedColor(color)
  }

  const STEPS = [
    { num: '01', title: t('step.01.title'), desc: t('step.01.desc') },
    { num: '02', title: t('step.02.title'), desc: t('step.02.desc') },
    { num: '03', title: t('step.03.title'), desc: t('step.03.desc') },
    { num: '04', title: t('step.04.title'), desc: t('step.04.desc') },
  ]

  return (
    <>
      <header>
        <div className="logo">{t('header.logo')}</div>
        <div className="header-right">
          <LanguageSelector />
          <span className="nav-square">{t('nav.square')}</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grain" />
        <div className="wrap">
          <div className="hero-eyebrow mono">{t('hero.eyebrow')}</div>
          <h1 className="brand">{t('hero.title')}</h1>
          <div className="hero-line2">{t('hero.subtitle')}</div>
          <p className="hero-copy">{t('hero.description')}</p>
          <div className="hero-bottom">
            <button
              className="crack-cta tape-btn"
              onClick={() => document.getElementById('drops')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="tape-label">{t('hero.cta')}</span>
              <span className="nav-square">{t('nav.square')}</span>
            </button>
            <span className="scroll-hint mono">{t('hero.scroll')}</span>
          </div>
        </div>
      </section>

      <section id="concept">
        <div className="wrap concept-grid">
          <div className="concept-mantra">
            <div>{t('concept.line1')}</div>
            <div className="dim">{t('concept.line2')}</div>
            <div>{t('concept.line3')}</div>
          </div>
          <div className="concept-text">
            <p>
              {t('concept.text1')}
            </p>
            <p>
              {t('concept.text2')}
            </p>
            <p>
              {t('concept.text3')}
            </p>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="section-num">{t('how.title')}</div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.num}>
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
            <div className="drops-title">{t('drops.title')}</div>
            <div className="drops-sub mono">{t('drops.subtitle')}</div>
          </div>
          <div className="drops-grid">
            {PRODUCTS.map((p) => (
              <DropCard
                key={p.id}
                {...p}
                onArtClick={(size, color) => {
                  handleProductClick(size, color)
                  setActiveProduct(p)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-mantra">{t('footer.mantra')}</div>
            <div className="footer-links">
              <a href="#">{t('footer.instagram')}</a>
              <a href="#">{t('footer.spotify')}</a>
              <a href="#">{t('footer.contact')}</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t('footer.copyright')}</span>
            <span>{t('nav.square')}</span>
          </div>
        </div>
      </footer>

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
      />
    </>
  )
}
