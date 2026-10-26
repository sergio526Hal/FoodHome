import { useMemo, useState } from 'react'
import {
    Bell,
    CalendarDays,
    ChartColumn,
    CheckCircle2,
    ChevronDown,
    CircleDashed,
    ClipboardList,
    CreditCard,
    Home,
    LayoutDashboard,
    PackageCheck,
    Plus,
    Search,
    Settings,
    ShoppingBag,
    Star,
    Truck,
    Users,
} from 'lucide-react'

const orders = [
    {
        id: 'FH-01240',
        client: 'Rakoto Andy',
        date: '2026-10-26',
        type: 'Repas abonnement',
        amount: 'Inclu',
        payment: 'Payé',
        preparation: 'Retiré',
        status: 'retire',
        address: 'Lot 25, Antananarivo',
        note: 'Commande livrée au bureau, client satisfait.',
        items: ['Poulet braisé', 'Riz', 'Boisson locale'],
        eta: 'Livré à 12h45',
    },
    {
        id: 'FH-01241',
        client: 'Rasoa Hanitra',
        date: '2026-10-26',
        type: 'Goûter',
        amount: '3 000 Ar',
        payment: 'Payé',
        preparation: 'Prête',
        status: 'prete',
        address: 'Ivandry, Antananarivo',
        note: 'Préparation terminée, attente de récupération.',
        items: ['Gâteau coco', 'Café', 'Muffin'],
        eta: 'Prêt pour retrait',
    },
    {
        id: 'FH-01242',
        client: 'Randria Tiana',
        date: '2026-10-26',
        type: 'Mixte',
        amount: '3 000 Ar',
        payment: 'Payé',
        preparation: 'En préparation',
        status: 'preparation',
        address: 'Analakely, Antananarivo',
        note: 'Commande en cours de préparation dans la cuisine centrale.',
        items: ['Burger maison', 'Salade', 'Jus d’orange'],
        eta: 'Préparation en cours',
    },
    {
        id: 'FH-01243',
        client: 'Rabe Fanja',
        date: '2026-10-26',
        type: 'Repas abonnement',
        amount: 'Inclu',
        payment: 'Payé',
        preparation: 'Confirmée',
        status: 'confirmee',
        address: 'Andohalo, Antananarivo',
        note: 'Client confirmé, livraison planifiée pour ce soir.',
        items: ['Repas familial', 'Petit déjeuner', 'Dessert'],
        eta: 'Livraison prévue 18h30',
    },
    {
        id: 'FH-01244',
        client: 'Razafy Mamy',
        date: '2026-10-26',
        type: 'Goûter',
        amount: '5 000 Ar',
        payment: 'Payé',
        preparation: 'En attente',
        status: 'attente',
        address: 'Tananarive',
        note: 'Paiement reçu, commande en attente de validation.',
        items: ['Salade fraicheur', 'Milkshake', 'Brownie'],
        eta: 'Validation en attente',
    },
    {
        id: 'FH-01245',
        client: 'Miora Lala',
        date: '2026-10-27',
        type: 'Repas',
        amount: '8 000 Ar',
        payment: 'Payé',
        preparation: 'Retiré',
        status: 'retire',
        address: 'Avaradoha, Antananarivo',
        note: 'Livraison effectuée avec bon de sortie.',
        items: ['Poisson grillé', 'Riz', 'Salade'],
        eta: 'Livré à 14h00',
    },
]

const sideMenu = [
    { id: 'pilotage', label: 'Pilotage', icon: Home },
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard, active: true },
    { id: 'orders', label: 'Gestion des commandes', icon: ClipboardList },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'subscriptions', label: 'Abonnements', icon: CalendarDays },
    { id: 'payments', label: 'Paiements', icon: CreditCard },
    { id: 'reviews', label: 'Avis et suggestions', icon: Star },
]

const paymentStatusClass = {
    Payé: 'status-pill success',
    'En préparation': 'status-pill warning',
    'Confirmée': 'status-pill danger',
    'Retiré': 'status-pill success',
    'Prête': 'status-pill success',
    'En attente': 'status-pill neutral',
}

const preparationStatusClass = {
    Retiré: 'status-pill success',
    Prête: 'status-pill success',
    'En préparation': 'status-pill warning',
    Confirmée: 'status-pill danger',
    'En attente': 'status-pill neutral',
}

export function AdminDashboardPage({ currentPage, onNavigate }) {
    const [selectedDate, setSelectedDate] = useState('2026-10-26')
    const [searchValue, setSearchValue] = useState('')
    const [typeFilter, setTypeFilter] = useState('tous')
    const [paymentFilter, setPaymentFilter] = useState('tous')
    const [preparationFilter, setPreparationFilter] = useState('tous')
    const [selectedOrderId, setSelectedOrderId] = useState('FH-01240')
    const [activeSection, setActiveSection] = useState('dashboard')

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchesDate = selectedDate ? order.date === selectedDate : true
            const matchesSearch = !searchValue
                ? true
                : [order.id, order.client].some((value) =>
                    value.toLowerCase().includes(searchValue.toLowerCase()),
                )
            const matchesType = typeFilter === 'tous' ? true : order.type === typeFilter
            const matchesPayment = paymentFilter === 'tous' ? true : order.payment === paymentFilter
            const matchesPreparation =
                preparationFilter === 'tous' ? true : order.preparation === preparationFilter

            return matchesDate && matchesSearch && matchesType && matchesPayment && matchesPreparation
        })
    }, [selectedDate, searchValue, typeFilter, paymentFilter, preparationFilter])

    const selectedOrder =
        filteredOrders.find((order) => order.id === selectedOrderId) ?? filteredOrders[0] ?? orders[0]

    const clients = [
        { name: 'Rakoto Andy', city: 'Antananarivo', total: 18, status: 'Actif' },
        { name: 'Rasoa Hanitra', city: 'Ivandry', total: 11, status: 'Actif' },
        { name: 'Randria Tiana', city: 'Analakely', total: 9, status: 'Occasionnel' },
        { name: 'Rabe Fanja', city: 'Andohalo', total: 15, status: 'Actif' },
    ]

    const subscriptions = [
        { name: 'Formule Standard', price: '70 000 Ar/mois', clients: 12, status: 'Actif' },
        { name: 'Formule Premium', price: '120 000 Ar/mois', clients: 7, status: 'Actif' },
        { name: 'Formule Famille', price: '180 000 Ar/mois', clients: 5, status: 'En attente' },
    ]

    const payments = [
        { ref: 'OM-1452', method: 'Orange Money', amount: '45 000 Ar', status: 'Reçu' },
        { ref: 'MV-7154', method: 'Mvola', amount: '28 000 Ar', status: 'En cours' },
        { ref: 'AM-2211', method: 'Airtel Money', amount: '63 000 Ar', status: 'Reçu' },
    ]

    const reviews = [
        { client: 'Miora', note: 5, message: 'Très rapide, repas délicieux et bien emballé.' },
        { client: 'Tiana', note: 4, message: 'Service fiable, livraison ponctuelle.' },
        { client: 'Noro', note: 5, message: 'Excellent rapport qualité-prix et très bon accueil.' },
    ]

    const summaryCards = [
        {
            title: 'Chiffre d’affaires',
            value: '441 000 Ar',
            sub: 'Paiements encaissés',
            accent: 'card-pink',
            icon: ShoppingBag,
        },
        {
            title: 'Commandes du jour',
            value: '6',
            sub: 'À retirer aujourd’hui',
            accent: 'card-light',
            icon: ClipboardList,
        },
        {
            title: 'Commandes de demain',
            value: '4',
            sub: 'À préparer',
            accent: 'card-light',
            icon: ClockIcon,
        },
        {
            title: 'En attente',
            value: '5',
            sub: 'À confirmer',
            accent: 'card-light',
            icon: CircleDashed,
        },
        {
            title: 'Abonnements actifs',
            value: '5',
            sub: 'Formule 70 000 Ar / mois',
            accent: 'card-light',
            icon: PackageCheck,
        },
    ]

    const renderSectionContent = () => {
        if (activeSection === 'orders') {
            return (
                <>
                    <div className="admin-title-row secondary-row">
                        <div>
                            <h2>Gestion des commandes</h2>
                            <p>Suivi du traitement et de la livraison des commandes.</p>
                        </div>
                    </div>
                    <div className="admin-filters">
                        <label className="admin-input search-input">
                            <Search size={16} />
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(event) => setSearchValue(event.target.value)}
                                placeholder="N° ou client..."
                            />
                        </label>

                        <label className="admin-input select-input">
                            <span>Type</span>
                            <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)}>
                                <option value="tous">Tous</option>
                                <option value="Repas abonnement">Repas abonnement</option>
                                <option value="Goûter">Goûter</option>
                                <option value="Mixte">Mixte</option>
                            </select>
                            <ChevronDown size={16} />
                        </label>

                        <label className="admin-input select-input">
                            <span>Paiement</span>
                            <select value={paymentFilter} onChange={(event) => setPaymentFilter(event.target.value)}>
                                <option value="tous">Tous</option>
                                <option value="Payé">Payé</option>
                            </select>
                            <ChevronDown size={16} />
                        </label>

                        <label className="admin-input select-input">
                            <span>Préparation</span>
                            <select value={preparationFilter} onChange={(event) => setPreparationFilter(event.target.value)}>
                                <option value="tous">Tous</option>
                                <option value="Retiré">Retiré</option>
                                <option value="Prête">Prête</option>
                                <option value="En préparation">En préparation</option>
                                <option value="Confirmée">Confirmée</option>
                                <option value="En attente">En attente</option>
                            </select>
                            <ChevronDown size={16} />
                        </label>

                        <label className="admin-input date-input">
                            <CalendarDays size={16} />
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(event) => setSelectedDate(event.target.value)}
                            />
                        </label>
                    </div>

                    <div className="delivery-box-grid">
                        {filteredOrders.map((order) => (
                            <button
                                key={order.id}
                                type="button"
                                className={`delivery-box ${selectedOrder.id === order.id ? 'active' : ''}`}
                                onClick={() => setSelectedOrderId(order.id)}
                            >
                                <div className="delivery-box-top">
                                    <span className="delivery-box-id">{order.id}</span>
                                    <span className={`status-pill ${preparationStatusClass[order.preparation] || 'status-pill neutral'}`}>
                                        {order.preparation}
                                    </span>
                                </div>
                                <div className="delivery-client">{order.client}</div>
                                <div className="delivery-meta">{order.date}</div>
                                <div className="delivery-meta">{order.address}</div>
                                <div className="delivery-footer">
                                    <strong>{order.amount}</strong>
                                    <span>{order.payment}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="dashboard-table-wrap">
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Montant</th>
                                    <th>Paiement</th>
                                    <th>Préparation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className={selectedOrder.id === order.id ? 'selected-row' : ''}
                                        onClick={() => setSelectedOrderId(order.id)}
                                    >
                                        <td>{order.id}</td>
                                        <td>{order.client}</td>
                                        <td>{order.date}</td>
                                        <td>{order.type}</td>
                                        <td>{order.amount}</td>
                                        <td>
                                            <span className={paymentStatusClass[order.payment] || 'status-pill neutral'}>
                                                {order.payment}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={preparationStatusClass[order.preparation] || 'status-pill neutral'}>
                                                {order.preparation}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )
        }

        if (activeSection === 'clients') {
            return (
                <div className="admin-section-grid">
                    {clients.map((client) => (
                        <article key={client.name} className="admin-card">
                            <div className="admin-card-head">
                                <div className="admin-mini-avatar">{client.name.charAt(0).toUpperCase()}</div>
                                <div>
                                    <h3>{client.name}</h3>
                                    <span>{client.city}</span>
                                </div>
                            </div>
                            <div className="admin-metric-row">
                                <strong>{client.total}</strong>
                                <span>commandes</span>
                            </div>
                            <span className="status-pill success">{client.status}</span>
                        </article>
                    ))}
                </div>
            )
        }

        if (activeSection === 'subscriptions') {
            return (
                <div className="admin-section-grid">
                    {subscriptions.map((plan) => (
                        <article key={plan.name} className="admin-card">
                            <div className="admin-card-head">
                                <div className="admin-mini-avatar purple">{plan.name.charAt(0)}</div>
                                <div>
                                    <h3>{plan.name}</h3>
                                    <span>{plan.price}</span>
                                </div>
                            </div>
                            <div className="admin-metric-row">
                                <strong>{plan.clients}</strong>
                                <span>clients actifs</span>
                            </div>
                            <span className={`status-pill ${plan.status === 'Actif' ? 'success' : 'neutral'}`}>{plan.status}</span>
                        </article>
                    ))}
                </div>
            )
        }

        if (activeSection === 'payments') {
            return (
                <div className="admin-section-grid">
                    {payments.map((payment) => (
                        <article key={payment.ref} className="admin-card">
                            <div className="admin-card-head">
                                <div className="admin-mini-avatar orange">{payment.method.slice(0, 1)}</div>
                                <div>
                                    <h3>{payment.ref}</h3>
                                    <span>{payment.method}</span>
                                </div>
                            </div>
                            <div className="admin-metric-row">
                                <strong>{payment.amount}</strong>
                                <span>montant</span>
                            </div>
                            <span className={`status-pill ${payment.status === 'Reçu' ? 'success' : 'warning'}`}>{payment.status}</span>
                        </article>
                    ))}
                </div>
            )
        }

        if (activeSection === 'reviews') {
            return (
                <div className="admin-section-grid reviews-grid">
                    {reviews.map((review) => (
                        <article key={review.client} className="admin-card review-card">
                            <div className="admin-card-head">
                                <div className="admin-mini-avatar pink">{review.client.charAt(0)}</div>
                                <div>
                                    <h3>{review.client}</h3>
                                    <span>{'★'.repeat(review.note)}</span>
                                </div>
                            </div>
                            <p>{review.message}</p>
                        </article>
                    ))}
                </div>
            )
        }

        return (
            <>
                <div className="summary-card-row">
                    {summaryCards.map(({ title, value, sub, accent, icon: Icon }) => (
                        <article key={title} className={`summary-card ${accent}`}>
                            <div className="summary-card-head">
                                <div className="summary-card-icon">
                                    <Icon size={18} />
                                </div>
                            </div>
                            <div className="summary-card-value">{value}</div>
                            <div className="summary-card-title">{title}</div>
                            <div className="summary-card-sub">{sub}</div>
                        </article>
                    ))}
                </div>

                <div className="detail-panel">
                    <div className="detail-head">
                        <div>
                            <small>Détails de la livraison</small>
                            <h2>{selectedOrder.id}</h2>
                        </div>
                        <button type="button" className="detail-close-btn" onClick={() => onNavigate('menu')}>
                            Fermer
                        </button>
                    </div>

                    <div className="detail-main-grid">
                        <div className="detail-card">
                            <div className="detail-inline">
                                <span>Client</span>
                                <strong>{selectedOrder.client}</strong>
                            </div>
                            <div className="detail-inline">
                                <span>Adresse</span>
                                <strong>{selectedOrder.address}</strong>
                            </div>
                            <div className="detail-inline">
                                <span>État</span>
                                <strong>{selectedOrder.preparation}</strong>
                            </div>
                        </div>

                        <div className="detail-card timeline-card">
                            <h3>Suivi</h3>
                            <ul>
                                <li>
                                    <CheckCircle2 size={14} />
                                    Commande confirmée
                                </li>
                                <li>
                                    <Truck size={14} />
                                    {selectedOrder.eta}
                                </li>
                                <li>
                                    <ChartColumn size={14} />
                                    Paiement vérifié
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="detail-items">
                        <h3>Produits</h3>
                        <div className="detail-item-list">
                            {selectedOrder.items.map((item) => (
                                <span key={item} className="detail-item-tag">{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className="detail-note">
                        <strong>Note</strong>
                        <p>{selectedOrder.note}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="admin-dashboard-shell">
            <aside className="admin-sidebar">
                <div className="admin-brand-block">
                    <div className="admin-brand-icon">🍽️</div>
                    <div>
                        <div className="admin-brand-name">Food Home</div>
                        <small>Back-office</small>
                    </div>
                </div>

                <nav className="admin-sidebar-nav" aria-label="Menu back-office">
                    {sideMenu.map(({ id, label, icon: Icon, active }) => (
                        <button
                            key={id || label}
                            type="button"
                            className={`sidebar-link ${activeSection === id || (id === 'dashboard' && activeSection === 'dashboard') ? 'active' : ''}`}
                            onClick={() => {
                                setActiveSection(id)
                                if (id === 'dashboard') {
                                    onNavigate('dashboard')
                                }
                            }}
                        >
                            <Icon size={18} />
                            <span>{label}</span>
                        </button>
                    ))}
                </nav>

                <div className="admin-sidebar-footer">
                    <button type="button" className="sidebar-add-btn" onClick={() => onNavigate('menu')}>
                        ← Revenir au site web
                    </button>
                    <button type="button" className="sidebar-logout-btn" onClick={() => onNavigate('menu')}>
                        ↗ Déconnexion
                    </button>
                </div>
            </aside>

            <div className="admin-main-panel">
                <header className="admin-topbar">
                    <div className="admin-breadcrumb">Food Home · Antananarivo</div>
                    <div className="admin-topbar-actions">
                        <button type="button" className="icon-btn">
                            <Bell size={16} />
                        </button>
                        <div className="admin-avatar">SH</div>
                    </div>
                </header>

                <main className="admin-dashboard-body">
                    <div className="admin-title-row">
                        <div>
                            <h1>{activeSection === 'orders' ? 'Gestion des commandes' : activeSection === 'clients' ? 'Clients' : activeSection === 'subscriptions' ? 'Abonnements' : activeSection === 'payments' ? 'Paiements' : activeSection === 'reviews' ? 'Avis et suggestions' : 'Gestion des commandes'}</h1>
                            <p>
                                {activeSection === 'orders' && `${filteredOrders.length} commandes au total`}
                                {activeSection === 'clients' && `${clients.length} clients enregistrés`}
                                {activeSection === 'subscriptions' && `${subscriptions.length} formules disponibles`}
                                {activeSection === 'payments' && `${payments.length} transactions récentes`}
                                {activeSection === 'reviews' && `${reviews.length} avis récents`}
                                {activeSection === 'dashboard' && `${filteredOrders.length} commandes au total`}
                            </p>
                        </div>
                        <button type="button" className="admin-primary-btn">
                            <Plus size={18} />
                            Nouvelle commande
                        </button>
                    </div>

                    {renderSectionContent()}
                </main>
            </div>
        </div>
    )
}

function ClockIcon({ size = 18 }) {
    return <div className="mock-clock" style={{ width: size, height: size }} />
}
