import { useState } from 'react'
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    CakeSlice,
    Check,
    Clock3,
    Coffee,
    Globe,
    Heart,
    Home,
    Leaf,
    Mail,
    MessageCircleMore,
    Phone,
    Search,
    Send,
    ShieldCheck,
    ShoppingCart,
    Soup,
    Sparkles,
    Star,
    Truck,
    UserRound,
    UtensilsCrossed,
} from 'lucide-react'

const navItems = [
    { value: 'accueil', label: 'Accueil', icon: Home },
    { value: 'menu', label: 'Menu', icon: UtensilsCrossed },
    { value: 'a-propos', label: 'À propos', icon: Sparkles },
    { value: 'avis', label: 'Avis', icon: Star },
    { value: 'contact', label: 'Contact', icon: Phone },
    { value: 'dashboard', label: 'Dashboard', icon: BarChart3 },
]

const featurePills = [
    { label: 'Produit frais et de qualité', icon: Check },
    { label: 'Livraison rapide sur place', icon: Truck },
    { label: 'Paiement sécurisé', icon: ShieldCheck },
]

const activityCards = [
    { icon: UtensilsCrossed, title: 'Repas équilibrés', description: 'Repas préparés' },
    { icon: Soup, title: 'Goûters gourmands', description: 'Petits délices' },
    { icon: ShoppingCart, title: 'Commande en ligne', description: 'Simple et rapide' },
    { icon: Truck, title: 'Retrait sur place', description: 'Disponible localement' },
]

const menuTabs = [
    { label: 'Tous', icon: UtensilsCrossed },
    { label: 'Repas', icon: Soup },
    { label: 'Goûters', icon: CakeSlice },
    { label: 'Boissons', icon: Coffee },
]

const products = [
    {
        name: 'Poulet braisé',
        price: '12 000 Ar',
        category: 'Repas',
        image:
            'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    },
    {
        name: 'Poisson grillé',
        price: '14 000 Ar',
        category: 'Repas',
        image:
            'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
    },
    {
        name: 'Riz sauté aux légumes',
        price: '10 000 Ar',
        category: 'Repas',
        image:
            'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    },
    {
        name: 'Burger maison',
        price: '8 000 Ar',
        category: 'Goûters',
        image:
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    },
    {
        name: 'Salade fraicheur',
        price: '7 000 Ar',
        category: 'Boissons',
        image:
            'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    },
]

const stats = [
    { icon: UtensilsCrossed, value: '+1200', label: 'Commandes par mois' },
    { icon: Star, value: '+800', label: 'Clients satisfaits' },
    { icon: BadgeCheck, value: '95%', label: 'Taux de satisfaction' },
]

const testimonials = [
    {
        name: 'Rindra A.',
        text: 'Le service est exceptionnel, les plats sont toujours savoureux et bien présentés.',
        date: '12 avril 2025',
    },
    {
        name: 'Tovonirina R.',
        text: 'J’ai testé plusieurs plats, et chacun est vraiment délicieux. Livraison rapide et fiable.',
        date: '8 avril 2025',
    },
    {
        name: 'Mialy S.',
        text: 'Des produits de qualité, des portions généreuses et une cuisine très appréciée.',
        date: '3 avril 2025',
    },
]

export function MenuPage({ currentPage = 'accueil', onNavigate }) {
    const [activeCategory, setActiveCategory] = useState('Tous')

    const filteredProducts =
        activeCategory === 'Tous'
            ? products
            : products.filter((product) => product.category === activeCategory)

    return (
        <div className="page-shell">
            <header className="topbar">
                <div className="brand-wrap">
                    <div className="brand-icon">
                        <UtensilsCrossed size={28} />
                    </div>
                    <div className="brand-text">
                        <span className="brand-title">Food</span>
                        <span className="brand-subtitle">Home</span>
                        <small>Bien manger, plus proche de vous</small>
                    </div>
                </div>

                <nav className="main-nav" aria-label="Navigation principale">
                    {navItems.map(({ value, label, icon: Icon }) => (
                        <button
                            key={value}
                            type="button"
                            className={currentPage === value ? 'active' : ''}
                            onClick={() => onNavigate(value)}
                        >
                            <Icon className="icon" size={16} />
                            <span>{label}</span>
                        </button>
                    ))}
                </nav>

                <div className="top-actions">
                    <button type="button" className="ghost-btn">
                        <UserRound size={16} className="icon" />
                        Connexion
                    </button>
                    <button type="button" className="primary-btn" onClick={() => onNavigate('dashboard')}>
                        <BarChart3 size={16} className="icon" />
                        Tableau de bord
                    </button>
                </div>
            </header>

            <main className="content">
                <section className="hero-section">
                    <div className="hero-copy">
                        <p className="eyebrow">Repas · Goûters · Boissons</p>
                        <h1>
                            Des repas <span className="script">savoureux</span>
                            <br />
                            au cœur de votre communauté
                        </h1>
                        <p className="lead">
                            Food Home vous propose des repas et goûters frais, variés et équilibrés
                            préparés avec soin. Commandez facilement en ligne et profitez d’une
                            expérience gourmande, simple et rapide.
                        </p>

                        <div className="hero-actions">
                            <button type="button" className="primary-btn large-btn">
                                <ShoppingCart size={18} className="icon" />
                                Commander maintenant
                            </button>
                            <button type="button" className="secondary-btn">
                                <ArrowRight size={16} className="icon" />
                                Voir la vidéo
                            </button>
                        </div>

                        <div className="feature-pills">
                            {featurePills.map(({ label, icon: Icon }) => (
                                <div key={label} className="feature-pill">
                                    <span className="feature-icon">
                                        <Icon size={14} />
                                    </span>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="scribble scribble-top">Fraîcheur &amp; saveurs</div>
                        <div className="food-image-wrap">
                            <img
                                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
                                alt="Assiette de poulet et légumes"
                            />
                        </div>
                        <div className="circle-badge">
                            <Heart size={26} />
                        </div>
                    </div>
                </section>

                <section className="activity-section">
                    <div className="section-header compact-header">
                        <h2>Notre activité</h2>
                    </div>

                    <div className="activity-grid">
                        <div className="activity-copy">
                            <p>
                                Food Home est une entreprise de restauration qui propose des repas et des
                                goûters de qualité aux membres d’une entreprise ou à tous ceux qui cherchent
                                un service rapide, simple et sain.
                            </p>
                            <button type="button" className="primary-btn small-btn">
                                En savoir plus
                            </button>
                        </div>

                        <div className="activity-cards">
                            {activityCards.map(({ icon: Icon, title, description }) => (
                                <article key={title} className="mini-card">
                                    <div className="mini-card-icon">
                                        <Icon size={28} />
                                    </div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="menu-section">
                    <div className="section-header menu-header">
                        <div>
                            <p className="eyebrow dark">Nos menus</p>
                            <h2>
                                Des plats variés <span className="script">pour tous les goûts</span>
                            </h2>
                        </div>
                        <a href="#" className="link-btn">
                            Voir tous les menus
                        </a>
                    </div>

                    <div className="menu-tabs">
                        {menuTabs.map(({ label, icon: Icon }) => (
                            <button
                                key={label}
                                type="button"
                                className={activeCategory === label ? 'tab active' : 'tab'}
                                onClick={() => setActiveCategory(label)}
                            >
                                <Icon size={16} className="icon" />
                                {label}
                            </button>
                        ))}
                        <div className="search-box">
                            <Search size={17} className="icon" />
                            <input type="text" placeholder="Rechercher un menu..." aria-label="Rechercher" />
                        </div>
                    </div>

                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <article key={product.name} className="food-card">
                                <div className="food-image-box">
                                    <img src={product.image} alt={product.name} />
                                    <button type="button" className="fav-btn" aria-label="Ajouter aux favoris">
                                        <Heart size={16} />
                                    </button>
                                </div>
                                <h3>{product.name}</h3>
                                <div className="card-footer">
                                    <strong>{product.price}</strong>
                                    <button type="button" className="card-btn" onClick={() => onNavigate('product')}>
                                        <ShoppingCart size={16} className="icon" />
                                        Commander
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="story-section">
                    <div className="story-media">
                        <img
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80"
                            alt="Chef préparant un repas"
                        />
                    </div>

                    <div className="story-content">
                        <div className="story-badge">Food Home</div>
                        <h2>
                            Bien plus qu’un simple repas
                            <span className="script small-script">Votre satisfaction est notre priorité</span>
                        </h2>
                        <p>
                            Chez Food Home, nous croyons que bien manger est un acte de bien-être, de
                            qualité et de confiance. Nous sélectionnons les meilleurs ingrédients pour
                            offrir des recettes gourmandes, équilibrées et toujours préparées avec soin.
                        </p>

                        <div className="story-points">
                            <div>
                                <span>
                                    <BadgeCheck size={16} />
                                </span>
                                <p>Qualité garantie</p>
                            </div>
                            <div>
                                <span>
                                    <Clock3 size={16} />
                                </span>
                                <p>Service rapide</p>
                            </div>
                            <div>
                                <span>
                                    <MessageCircleMore size={16} />
                                </span>
                                <p>Écoute de nos clients</p>
                            </div>
                            <div>
                                <span>
                                    <Leaf size={16} />
                                </span>
                                <p>Fraîcheur des produits</p>
                            </div>
                        </div>

                        <button type="button" className="primary-btn small-btn">
                            Découvrir notre histoire
                        </button>
                    </div>
                </section>

                <section className="stats-band">
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="stat-box">
                            <span className="stat-icon">
                                <Icon size={24} />
                            </span>
                            <strong>{value}</strong>
                            <small>{label}</small>
                        </div>
                    ))}
                </section>

                <section className="testimonials-section">
                    <div className="section-header testimonials-header">
                        <div>
                            <p className="eyebrow dark">Ce qu’ils en pensent</p>
                            <h2>Les avis de nos clients</h2>
                        </div>
                        <a href="#" className="link-btn">
                            Voir tous les avis
                        </a>
                    </div>

                    <div className="testimonial-grid">
                        {testimonials.map((item) => (
                            <article key={item.name} className="testimonial-card">
                                <div className="testimonial-head">
                                    <div className="avatar">{item.name.charAt(0)}</div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <div className="stars">
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                            <Star size={14} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                                <p>{item.text}</p>
                                <small>{item.date}</small>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="footer-brand">
                    <div className="brand-wrap footer-logo">
                        <div className="brand-icon">
                            <UtensilsCrossed size={28} />
                        </div>
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
                            <span><Globe size={14} /></span>
                            <span><MessageCircleMore size={14} /></span>
                            <span><Send size={14} /></span>
                        </div>
                        <div className="newsletter">
                            <Mail size={16} className="icon" />
                            <input type="email" placeholder="Votre adresse email" />
                            <button type="button">
                                <Send size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
