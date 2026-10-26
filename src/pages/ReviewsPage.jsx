export function ReviewsPage({ currentPage, onNavigate }) {
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
