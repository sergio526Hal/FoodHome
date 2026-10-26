export function ContactPage({ currentPage, onNavigate }) {
    return (
        <div className="page-shell">
            <header className="topbar">
                <div className="brand-wrap">
                    <div className="brand-icon">🍽️</div>
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

                <div className="top-actions">
                    <button type="button" className="ghost-btn">↗ Connexion</button>
                    <button type="button" className="primary-btn">🛒 Commander</button>
                </div>
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
