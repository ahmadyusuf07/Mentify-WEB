import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Mentors from './pages/Mentors'
import Products from './pages/Products'
import Competitions from './pages/Competitions'
import MentorDetail from './pages/MentorDetail'
import Booking from './pages/Booking'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import ProductDetail from './pages/ProductDetail'
import ProductCheckout from './pages/ProductCheckout'
import CompetitionDetail from './pages/CompetitionDetail'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route path="/mentors" element={<Mentors />} />
  <Route path="/mentors/:id" element={<MentorDetail />} />
  <Route path="/booking/:id" element={<Booking />} />
  <Route path="/checkout/:id" element={<Checkout />} />

  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetail />} />
  <Route path="/product-checkout/:id" element={<ProductCheckout />} />

  <Route path="/competitions" element={<Competitions />} />
  <Route path="/competitions/:id" element={<CompetitionDetail />} />

  <Route path="/payment-success" element={<PaymentSuccess />} />

  <Route path="/dashboard" element={<Dashboard />} />

</Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App