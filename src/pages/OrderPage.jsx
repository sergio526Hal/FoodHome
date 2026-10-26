export function OrderPage({ currentPage, onNavigate }) {
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
                    <button type="button" className="primary-btn" onClick={() => onNavigate('commande')}>🛒 Commander</button>
                </div>
            </header>

            <main className="content simple-page">
                <section className="info-panel order-panel">
                    <p className="eyebrow dark">Votre commande</p>
                    <h1>Résumé de votre commande</h1>

                    <div className="order-summary">
                        <div className="order-row">
                            <div>
                                <strong>Poulet braisé</strong>
                                <small>1 x 12 000 Ar</small>
                            </div>
                            <span>12 000 Ar</span>
                        </div>
                        <div className="order-row">
                            <div>
                                <strong>Livraison</strong>
                                <small>Livraison locale</small>
                            </div>
                            <span>2 000 Ar</span>
                        </div>
                        <div className="order-total">
                            <span>Total</span>
                            <strong>14 000 Ar</strong>
                        </div>
                    </div>

                    <div className="order-actions">
                        <button type="button" className="secondary-btn" onClick={() => onNavigate('menu')}>
                            Continuer les achats
                        </button>
                        <button type="button" className="primary-btn" onClick={() => onNavigate('menu')}>
                            Valider la commande
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}
