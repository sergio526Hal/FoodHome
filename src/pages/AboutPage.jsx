export function AboutPage({ currentPage, onNavigate }) {
    const values = [
        { icon: '✦', title: 'Qualité', text: 'Des ingrédients frais et soigneusement sélectionnés.' },
        { icon: '❤', title: 'Écoute', text: 'Vos avis et vos besoins comptent pour nous.' },
        { icon: '◎', title: 'Proximité', text: 'Une relation de confiance avec notre communauté.' },
        { icon: '★', title: 'Innovation', text: 'Une plateforme moderne pour un service simple.' },
    ]

    const team = [
        { name: 'Rindra A.', role: 'Fondatrice & Direction', initials: 'RA' },
        { name: 'Tovonirina R.', role: 'Chef cuisinier', initials: 'TR' },
        { name: 'Mialy S.', role: 'Responsable client', initials: 'MS' },
        { name: 'Daniel R.', role: 'Développeur web', initials: 'DR' },
    ]

    return (
        <div className="page-shell about-shell">
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

            <main className="content about-content">
                <section className="about-hero">
                    <div className="about-copy">
                        <p className="eyebrow">À propos de Food Home</p>
                        <h1>
                            Plus qu&apos;un service<br />
                            de repas, une histoire<br />
                            de passion
                        </h1>
                        <p className="about-text">
                            Food Home est née d&apos;une idée simple : offrir à chacun des repas savoureux,
                            équilibrés et accessibles, tout en faisant de la cuisine un vrai moment de
                            plaisir, de partage et de bien-être.
                        </p>
                        <button type="button" className="primary-btn about-btn">
                            Découvrir notre histoire →
                        </button>
                    </div>

                    <div className="about-visual">
                        <div className="about-script">Bien manger,<br />plus proche de vous</div>
                        <div className="about-photo-card">
                            <img
                                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
                                alt="Plat de poulet et légumes"
                            />
                        </div>
                    </div>
                </section>

                <section className="history-row">
                    <div className="history-image-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
                            alt="Chef en cuisine"
                        />
                        <div className="history-bubble">Une idée née d&apos;un besoin réel</div>
                    </div>

                    <div className="history-copy">
                        <span className="eyebrow dark">Notre histoire</span>
                        <h2>Une idée née d&apos;un besoin réel</h2>
                        <p>
                            Tout a commencé par une constatation simple : beaucoup de personnes
                            souhaitent manger mieux sans perdre de temps ni de qualité. Les besoins des
                            clients étaient clairs, mais les solutions existantes étaient souvent limitées,
                            trop rapides, ou peu humaines.
                        </p>
                        <p>
                            C&apos;est de cette observation que Food Home a vu le jour, avec un objectif :
                            proposer des plats savoureux, sains et préparés avec soin, tout en gardant un
                            service chaleureux et proche de la réalité quotidienne.
                        </p>
                        <button type="button" className="primary-btn about-btn small-btn">
                            En savoir plus sur notre histoire →
                        </button>
                    </div>
                </section>

                <section className="values-section">
                    <div className="section-headline">
                        <span className="eyebrow dark">Nos valeurs</span>
                        <h2>Ce qui nous guide au quotidien</h2>
                        <div className="section-script">Des valeurs qui font la différence !</div>
                    </div>

                    <div className="values-grid">
                        {values.map(({ icon, title, text }) => (
                            <article key={title} className="value-card">
                                <div className="value-icon">{icon}</div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mission-band">
                    <div className="mission-copy">
                        <span className="eyebrow dark">Notre mission</span>
                        <h2>
                            Bien manger,<br />
                            au quotidien
                        </h2>
                        <p>
                            Notre mission est de rendre l&apos;accès à des repas de qualité simple, agréable
                            et accessible à tous, tout en soutenant une alimentation plus équilibrée et plus
                            responsable.
                        </p>
                        <button type="button" className="primary-btn about-btn small-btn">
                            Découvrir notre mission →
                        </button>
                    </div>

                    <div className="mission-photo">
                        <img
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
                            alt="Cuisine de restaurant"
                        />
                    </div>
                </section>

                <section className="team-section">
                    <div className="team-copy">
                        <span className="eyebrow dark">Notre équipe</span>
                        <h2>Une équipe passionnée et engagée</h2>
                        <p>
                            Derrière Food Home, il y a une équipe de personnes motivées, créatives et
                            attentives à la satisfaction de nos clients. Chacun apporte son énergie,
                            sa qualité et son goût pour faire grandir cette aventure.
                        </p>
                        <button type="button" className="primary-btn about-btn small-btn">
                            Rencontrer l&apos;équipe →
                        </button>
                    </div>

                    <div className="team-grid">
                        {team.map(({ name, role, initials }) => (
                            <article key={name} className="team-card">
                                <div className="avatar-circle">{initials}</div>
                                <h3>{name}</h3>
                                <p>{role}</p>
                                <div className="socials-mini">
                                    <span>f</span>
                                    <span>in</span>
                                    <span>x</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="site-footer about-footer">
                <div className="footer-brand">
                    <div className="brand-wrap footer-logo">
                        <div className="brand-icon">🍽️</div>
                        <div className="brand-text">
                            <span className="brand-title">Food</span>
                            <span className="brand-subtitle">Home</span>
                            <small>Bien manger, plus proche de vous</small>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Liens rapides</h4>
                        <ul>
                            <li>Accueil</li>
                            <li>Menus</li>
                            <li>À propos</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Service client</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Livraison &amp; retrait</li>
                            <li>Paiement</li>
                            <li>Nous contacter</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Suivez-nous</h4>
                        <div className="socials">
                            <span>f</span>
                            <span>in</span>
                            <span>x</span>
                        </div>
                        <div className="newsletter">
                            <input type="email" placeholder="Votre adresse email" />
                            <button type="button">→</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
