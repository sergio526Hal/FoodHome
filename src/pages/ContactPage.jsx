import {
    ArrowRight,
    Clock3,
    Mail,
    MapPin,
    MessageSquareText,
    Phone,
    Send,
    Sparkles,
} from 'lucide-react'

export function ContactPage({ currentPage, onNavigate }) {
    const navItems = [
        { value: 'accueil', label: 'Accueil' },
        { value: 'menu', label: 'Menu' },
        { value: 'a-propos', label: 'À propos' },
        { value: 'avis', label: 'Avis' },
        { value: 'contact', label: 'Contact' },
    ]

    return (
        <div className="page-shell contact-page-shell">
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
                    {navItems.map(({ value, label }) => (
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
                    <button type="button" className="primary-btn" onClick={() => onNavigate('commande')}>
                        🛒 Commander
                    </button>
                </div>
            </header>

            <main className="contact-page-main">
                <section className="contact-hero">
                    <div className="contact-hero-copy">
                        <div className="mini-tag">
                            <span className="mini-tag-icon">✦</span>
                            Contactez-nous
                        </div>
                        <h1>
                            Une question ?
                            <span className="script-line">Nous sommes là !</span>
                        </h1>

                        <p>
                            Notre équipe est à votre écoute pour répondre à toutes vos questions,
                            vous accompagner dans vos commandes et vous faire vivre la meilleure
                            expérience possible.
                        </p>

                        <div className="contact-benefits">
                            <div className="benefit-item">
                                <span>◌</span>
                                <label>Réponse rapide</label>
                            </div>
                            <div className="benefit-item">
                                <span>◌</span>
                                <label>Équipe bienveillante</label>
                            </div>
                            <div className="benefit-item">
                                <span>◌</span>
                                <label>À votre écoute</label>
                            </div>
                        </div>
                    </div>

                    <div className="contact-hero-visual">
                        <div className="scribble-note">Votre satisfaction est notre priorité</div>
                        <div className="hero-food-card">
                            <img
                                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
                                alt="Plat gastronomique"
                            />
                        </div>
                        <div className="hero-flower hero-flower-one">✦</div>
                        <div className="hero-flower hero-flower-two">✦</div>
                    </div>
                </section>

                <section className="contact-location-panel">
                    <div className="find-us-card">
                        <div className="section-kicker">
                            <span className="section-kicker-icon">✦</span>
                            Nos coordonnées
                        </div>
                        <h2>Nous trouver <span>facilement</span></h2>
                        <p>Vous pouvez nous contacter de différentes manières. Choisissez celle qui vous convient le mieux.</p>

                        <div className="contact-info-stack">
                            <div className="info-line">
                                <div className="info-icon"><MapPin size={18} /></div>
                                <div>
                                    <strong>Adresse</strong>
                                    <p>Lot II 123, Andohalo<br />Antananarivo 101, Madagascar</p>
                                </div>
                                <ArrowRight size={18} className="chevron" />
                            </div>

                            <div className="info-line">
                                <div className="info-icon"><Phone size={18} /></div>
                                <div>
                                    <strong>Téléphone</strong>
                                    <p>+261 34 12 345 67<br />Lun - Ven : 8h - 17h</p>
                                </div>
                                <ArrowRight size={18} className="chevron" />
                            </div>

                            <div className="info-line">
                                <div className="info-icon"><Mail size={18} /></div>
                                <div>
                                    <strong>Email</strong>
                                    <p>contact@foodhome.mg<br />Réponse sous 24h</p>
                                </div>
                                <ArrowRight size={18} className="chevron" />
                            </div>

                            <div className="info-line social-line">
                                <div className="info-icon"><Sparkles size={18} /></div>
                                <div>
                                    <strong>Réseaux sociaux</strong>
                                    <div className="social-icons">
                                        <button type="button" aria-label="Facebook">f</button>
                                        <button type="button" aria-label="Instagram">◎</button>
                                        <button type="button" aria-label="X">x</button>
                                    </div>
                                </div>
                                <ArrowRight size={18} className="chevron" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <div className="section-kicker right">
                            <span className="section-kicker-icon">✦</span>
                            Écrivez-nous
                        </div>
                        <h2>Envoyez-nous <span>un message</span></h2>
                        <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

                        <form className="contact-form">
                            <div className="input-grid two-col">
                                <label>
                                    <span>Nom complet</span>
                                    <input type="text" placeholder="Nom complet" />
                                </label>
                                <label>
                                    <span>Email</span>
                                    <input type="email" placeholder="Email" />
                                </label>
                            </div>

                            <div className="input-grid two-col">
                                <label>
                                    <span>Téléphone</span>
                                    <input type="tel" placeholder="Téléphone" />
                                </label>
                                <label>
                                    <span>Objet de votre demande</span>
                                    <select defaultValue="">
                                        <option value="" disabled>Objet de votre demande</option>
                                        <option value="commande">Commande</option>
                                        <option value="reclamation">Réclamation</option>
                                        <option value="partenariat">Partenariat</option>
                                    </select>
                                </label>
                            </div>

                            <label>
                                <span>Votre message...</span>
                                <textarea placeholder="Votre message..." rows="5" />
                            </label>

                            <button type="button" className="primary-btn full-width-btn">
                                <MessageSquareText size={18} />
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </section>

                <section className="contact-bottom-row">
                    <div className="hours-card">
                        <div className="hours-icon"><Clock3 size={22} /></div>
                        <h3>Nos horaires</h3>
                        <div className="hours-row">
                            <span>Lundi - Vendredi</span>
                            <strong>8h00 - 17h00</strong>
                        </div>
                        <div className="hours-row">
                            <span>Samedi</span>
                            <strong>8h00 - 12h00</strong>
                        </div>
                        <p>Notre équipe est disponible du lundi au samedi.</p>
                    </div>

                    <div className="map-card">
                        <div className="map-pin-badge">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                                alt="Carte de localisation"
                            />
                            <div className="map-location-label">
                                <strong>Food Home</strong>
                                <span>Lot II 123, Andohalo</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact-banner">
                    <div className="contact-banner-inner">
                        <span className="banner-script">Une envie ? Une question ?</span>
                        <button type="button" className="secondary-btn banner-btn" onClick={() => onNavigate('menu')}>
                            Contactez-nous
                        </button>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="brand-wrap footer-logo">
                    <div className="brand-icon">🍽️</div>
                    <div className="brand-text">
                        <span className="brand-title">Food</span>
                        <span className="brand-subtitle">Home</span>
                        <small>Bien manger, plus proche de vous</small>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Liens rapides</h4>
                        <ul>
                            <li>Accueil</li>
                            <li>Menu</li>
                            <li>À propos</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Service client</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Livraison & retrait</li>
                            <li>Paiement</li>
                            <li>Nous contacter</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Suivez-nous</h4>
                        <div className="socials">
                            <span><Instagram size={14} /></span>
                            <span><Facebook size={14} /></span>
                            <span><X size={14} /></span>
                        </div>
                        <div className="newsletter">
                            <input type="email" placeholder="Votre adresse email" />
                            <button type="button" aria-label="Envoyer"><Send size={16} /></button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
