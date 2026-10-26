import { useState } from 'react'

export function OrderPage({ currentPage, onNavigate }) {
    const [showPayment, setShowPayment] = useState(false)
    const [selectedMethod, setSelectedMethod] = useState('Orange Money')

    const paymentMethods = [
        {
            id: 'orange',
            label: 'Orange Money',
            description: 'Paiement rapide via Orange Money',
            icon: 'payments',
            accent: 'orange'
        },
        {
            id: 'mvola',
            label: 'Mvola',
            description: 'Paiement rapide via Mvola',
            icon: 'local_atm',
            accent: 'pink'
        },
        {
            id: 'airtel',
            label: 'Airtel Money',
            description: 'Paiement rapide via Airtel Money',
            icon: 'smartphone',
            accent: 'red'
        }
    ]

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
                    {!showPayment ? (
                        <>
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
                                <button type="button" className="primary-btn" onClick={() => setShowPayment(true)}>
                                    Valider la commande
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="eyebrow dark">Paiement</p>
                            <h1>Choisissez votre mode de paiement</h1>

                            <div className="payment-methods">
                                {paymentMethods.map((method) => (
                                    <button
                                        key={method.id}
                                        type="button"
                                        className={`payment-option ${selectedMethod === method.label ? 'selected' : ''}`}
                                        onClick={() => setSelectedMethod(method.label)}
                                    >
                                        <span className={`payment-icon ${method.accent}`}>
                                            <span className="material-symbols-outlined">{method.icon}</span>
                                        </span>
                                        <span>
                                            <strong>{method.label}</strong>
                                            <small>{method.description}</small>
                                        </span>
                                    </button>
                                ))}
                            </div>

                            <div className="payment-box">
                                <label htmlFor="phone-number">Numéro du paiement</label>
                                <input id="phone-number" type="tel" placeholder="Ex : +261 34 00 000 00" />
                            </div>

                            <div className="payment-box">
                                <label htmlFor="payment-note">Référence / note</label>
                                <input id="payment-note" type="text" placeholder="Ex : Livraison à l'entrée du quartier" />
                            </div>

                            <div className="order-actions payment-actions">
                                <button type="button" className="secondary-btn" onClick={() => setShowPayment(false)}>
                                    Retour
                                </button>
                                <button type="button" className="primary-btn" onClick={() => onNavigate('menu')}>
                                    Payer {selectedMethod}
                                </button>
                            </div>
                        </>
                    )}
                </section>
            </main>
        </div>
    )
}
