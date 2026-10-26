import { useState } from 'react'
import './App.css'
import { AboutPage } from './pages/AboutPage'
import { MenuPage } from './pages/MenuPage'
import { ProductPage } from './pages/ProductPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { ContactPage } from './pages/ContactPage'
import { OrderPage } from './pages/OrderPage'
import { AdminDashboardPage } from './pages/AdminDashboardPage'

function App() {
  const [currentPage, setCurrentPage] = useState('accueil')

  if (currentPage === 'dashboard') {
    return <AdminDashboardPage currentPage={currentPage} onNavigate={setCurrentPage} />
  }

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

  if (currentPage === 'commande') {
    return <OrderPage currentPage={currentPage} onNavigate={setCurrentPage} />
  }

  return <MenuPage currentPage={currentPage} onNavigate={setCurrentPage} />
}

export default App
