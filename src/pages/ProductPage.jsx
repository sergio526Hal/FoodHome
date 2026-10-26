import {
    ArrowRight,
    BadgeCheck,
    Clock3,
    Heart,
    Leaf,
    Mail,
    Minus,
    Phone,
    Plus,
    Search,
    ShieldCheck,
    ShoppingCart,
    Star,
    Truck,
    UtensilsCrossed,
} from 'lucide-react'

const relatedProducts = [
    { name: 'Poisson grillé', price: '14 000 Ar', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80' },
    { name: 'Riz sauté aux légumes', price: '10 000 Ar', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
    { name: 'Burger maison', price: '8 000 Ar', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80' },
    { name: 'Salade fraicheur', price: '7 000 Ar', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80' },
]

export function ProductPage({ currentPage = 'product', onNavigate }) {
    const navItems = [
        { value: 'accueil', label: 'Accueil', icon: UtensilsCrossed },
        { value: 'menu', label: 'Menu', icon: UtensilsCrossed },
        { value: 'a-propos', label: 'À propos', icon: UtensilsCrossed },
        { value: 'avis', label: 'Avis', icon: UtensilsCrossed },
        { value: 'contact', label: 'Contact', icon: UtensilsCrossed },
    ]

    return (
        <div className="page-shell page-shell-product">
            <header className="topbar dark-topbar">
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
                            <Icon size={16} className="icon" />
                            <span>{label}</span>
                        </button>
                    ))}
                </nav>

                <div className="top-actions">
                    <button type="button" className="ghost-btn">
                        <Phone size={16} className="icon" />
                        Connexion
                    </button>
                    <button type="button" className="primary-btn">
                        <ShoppingCart size={16} className="icon" />
                        Commander
                    </button>
                </div>
            </header>

            <main className="content product-content">
                <section className="product-hero">
                    <div className="product-breadcrumb">Accueil &nbsp;&gt;&nbsp; Produits &nbsp;&gt;&nbsp; Poulet braisé</div>

                    <div className="product-media-panel">
                        <div className="product-tag">Nouveau !</div>
                        <img
                            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80"
                            alt="Poulet braisé"
                        />
                    </div>

                    <div className="product-info">
                        <div className="product-meta-row">
                            <span className="mini-pill">Plat principal</span>
                        </div>
                        <div className="rating-row">
                            <div className="stars-inline">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <span>4,8 (124 avis)</span>
                        </div>
                        <h1>12 000 Ar</h1>
                        <div className="text-muted">Par portion</div>
                        <p>
                            Un délicieux poulet braisé, tendre et savoureux, accompagné de riz naturel et de légumes frais.
                            Un plat équilibré, riche en protéines et en vitamines, parfait pour un repas sain et gourmand.
                        </p>

                        <div className="benefit-row">
                            <div className="benefit-item">
                                <span className="circle-icon"><ShieldCheck size={14} /></span>
                                <span>Produit frais</span>
                            </div>
                            <div className="benefit-item">
                                <span className="circle-icon"><Star size={14} /></span>
                                <span>Préparé avec soin</span>
                            </div>
                            <div className="benefit-item">
                                <span className="circle-icon"><Leaf size={14} /></span>
                                <span>Équilibré</span>
                            </div>
                        </div>

                        <div className="quantity-box">
                            <span>Quantité</span>
                            <div className="quantity-controls">
                                <button type="button" aria-label="moins"><Minus size={16} /></button>
                                <strong>1</strong>
                                <button type="button" aria-label="plus"><Plus size={16} /></button>
                            </div>
                            <button type="button" className="primary-btn add-btn">
                                <ShoppingCart size={16} className="icon" />
                                Ajouter au panier
                            </button>
                            <button type="button" className="fav-mini" aria-label="favoris">
                                <Heart size={18} />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="details-layout">
                    <div className="details-main">
                        <div className="details-tabs">
                            <button type="button" className="tab active">Description</button>
                            <button type="button" className="tab">Ingrédients</button>
                            <button type="button" className="tab">Valeurs nutritionnelles</button>
                            <button type="button" className="tab">Avis (124)</button>
                        </div>

                        <div className="details-card">
                            <h3>Un plat complet et équilibré</h3>
                            <p>
                                Notre poulet braisé est préparé avec des épices maison, du riz parfumé et une sélection de légumes frais.
                                Il est une excellente option pour un repas complet, savoureux et riche en nutriments.
                            </p>

                            <ul className="check-list">
                                <li>Produit de qualité</li>
                                <li>Équilibre nutritionnel</li>
                                <li>Parfait pour un repas rapide</li>
                                <li>Sans additifs et sans conservateurs</li>
                            </ul>

                            <div className="info-banner">
                                <span>✓</span>
                                <p>Un des plats les plus appréciés de nos clients !</p>
                            </div>
                        </div>
                    </div>

                    <div className="side-panel">
                        <div className="mini-stat-grid">
                            <div>
                                <span><Clock3 size={16} /></span>
                                <p>Disponible tout le semaine</p>
                            </div>
                            <div>
                                <span><Truck size={16} /></span>
                                <p>Préparation en 30 min</p>
                            </div>
                            <div>
                                <span><ShoppingCart size={16} /></span>
                                <p>À retirer à partir de 11h30</p>
                            </div>
                        </div>

                        <div className="option-card">
                            <h4>Choisissez votre option</h4>
                            <div className="option-row">
                                <span>Taile de la portion</span>
                                <div className="option-badges">
                                    <button type="button" className="option-btn active">Standard</button>
                                    <button type="button" className="option-btn">Grande (+3 000 Ar)</button>
                                </div>
                            </div>

                            <div className="option-list">
                                <label><input type="checkbox" /> Salade verte (+100 Ar)</label>
                                <label><input type="checkbox" /> Frites maison (+150 Ar)</label>
                                <label><input type="checkbox" /> Sauce piquante (+50 Ar)</label>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product-banner">
                    <div className="product-banner-image" />
                    <div className="product-banner-content">
                        <div className="scribble scribble-banner">Le bon goût<br />qu’au quotidien</div>
                        <p>Des repas sains, savoureux et équilibrés.</p>
                    </div>
                </section>

                <section className="nutrition-block">
                    <h3>Valeurs nutritionnelles (par portion)</h3>
                    <div className="nutrition-grid">
                        <div><span>Calories</span><strong>520 kcal</strong></div>
                        <div><span>Protéines</span><strong>35 g</strong></div>
                        <div><span>Glucides</span><strong>45 g</strong></div>
                        <div><span>Lipides</span><strong>18 g</strong></div>
                        <div><span>Fibres</span><strong>6 g</strong></div>
                    </div>
                </section>

                <section className="related-section">
                    <div className="related-header">
                        <h3>Découvrez aussi</h3>
                        <a href="#">Voir tous les produits</a>
                    </div>
                    <div className="related-grid">
                        {relatedProducts.map((item) => (
                            <article key={item.name} className="related-card">
                                <img src={item.image} alt={item.name} />
                                <h4>{item.name}</h4>
                                <div className="related-footer">
                                    <span>{item.price}</span>
                                    <button type="button" className="card-btn" onClick={() => onNavigate('menu')}>
                                        <ShoppingCart size={14} className="icon" />
                                        Ajouter au panier
                                    </button>
                                </div>
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
                            <li>Produits</li>
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
                            <span><Mail size={14} /></span>
                            <span><Phone size={14} /></span>
                            <span><Search size={14} /></span>
                        </div>
                        <div className="newsletter">
                            <Mail size={16} className="icon" />
                            <input type="email" placeholder="Votre adresse email" />
                            <button type="button"><ArrowRight size={15} /></button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
