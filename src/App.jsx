import { useState } from 'react'
import './App.css'
import { MenuPage } from './pages/MenuPage'
import { ProductPage } from './pages/ProductPage'

function AboutPage({ currentPage, onNavigate }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-icon">
            <span></span>
          </div>
          <div className="brand-text">
            <span className="brand-title">Food</span>
            <span className="brand-subtitle">Home</span>
            <small>Bien manger, plus proche de vous</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          {[
            { value: 'accueil', label: 'Accueil' },
            { value: 'menu', label: 'Menu' },
            { value: 'a-propos', label: 'À propos' },
            { value: 'avis', label: 'Avis' },
            { value: 'contact', label: 'Contact' },
          ].map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={currentPage === value ? 'active' : ''}
              onClick={() => onNavigate(value)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className="content simple-page">
        <section className="info-panel">
          <p className="eyebrow dark">À propos</p>
          <h1>Une cuisine de quartier, faite pour vous</h1>
          <p>
            Food Home a été pensé comme un espace gourmand et chaleureux, où chaque repas
            met en avant la fraîcheur, la qualité et le confort de manger bien.
          </p>
          <div className="info-grid">
            <div>
              <strong>100%</strong>
              <span>Ingrédients frais</span>
            </div>
            <div>
              <strong>30 min</strong>
              <span>Préparation rapide</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Service client</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ReviewsPage({ currentPage, onNavigate }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-icon">
            <span>⭐</span>
          </div>
          <div className="brand-text">
            <span className="brand-title">Food</span>
            <span className="brand-subtitle">Home</span>
            <small>Bien manger, plus proche de vous</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          {[
            { value: 'accueil', label: 'Accueil' },
            { value: 'menu', label: 'Menu' },
            { value: 'a-propos', label: 'À propos' },
            { value: 'avis', label: 'Avis' },
            { value: 'contact', label: 'Contact' },
          ].map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={currentPage === value ? 'active' : ''}
              onClick={() => onNavigate(value)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className="content simple-page">
        <section className="info-panel">
          <p className="eyebrow dark">Avis clients</p>
          <h1>La satisfaction de nos clients parle d’elle-même</h1>
          <div className="testimonial-list">
            <article>
              <strong>Rindra A.</strong>
              <p>“Un service très agréable, les plats sont toujours délicieux et bien préparés.”</p>
            </article>
            <article>
              <strong>Tovonirina R.</strong>
              <p>“J’adore la qualité des ingrédients et la rapidité de livraison.”</p>
            </article>
            <article>
              <strong>Mialy S.</strong>
              <p>“Très bon équilibre entre saveur, fraîcheur et rapport qualité-prix.”</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

function ContactPage({ currentPage, onNavigate }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-icon">
            <span>📞</span>
          </div>
          <div className="brand-text">
            <span className="brand-title">Food</span>
            <span className="brand-subtitle">Home</span>
            <small>Bien manger, plus proche de vous</small>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          {[
            { value: 'accueil', label: 'Accueil' },
            { value: 'menu', label: 'Menu' },
            { value: 'a-propos', label: 'À propos' },
            { value: 'avis', label: 'Avis' },
            { value: 'contact', label: 'Contact' },
          ].map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={currentPage === value ? 'active' : ''}
              onClick={() => onNavigate(value)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className="content simple-page">
        <section className="info-panel contact-panel">
          <p className="eyebrow dark">Contact</p>
          <h1>Contactez-nous</h1>
          <div className="contact-list">
            <div>
              <span>📍</span>
              <p>Antananarivo, Madagascar</p>
            </div>
            <div>
              <span>📞</span>
              <p>+261 34 12 345 67</p>
            </div>
            <div>
              <span>✉️</span>
              <p>contact@foodhome.mg</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('accueil')

  if (currentPage === 'a-propos') {
    return <AboutPage currentPage={currentPage} onNavigate={setCurrentPage} />
  }

  if (currentPage === 'avis') {
    return <ReviewsPage currentPage={currentPage} onNavigate={setCurrentPage} />
  }

  if (currentPage === 'contact') {
    return <ContactPage currentPage={currentPage} onNavigate={setCurrentPage} />
  }

  if (currentPage === 'product') {
    return <ProductPage currentPage={currentPage} onNavigate={setCurrentPage} />
  }

  return <MenuPage currentPage={currentPage} onNavigate={setCurrentPage} />
}

export default App
