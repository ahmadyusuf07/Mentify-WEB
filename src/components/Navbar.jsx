import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-mentify.png'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const savedName = localStorage.getItem('mentifyUser') || ''
    const savedRole = localStorage.getItem('mentifyRole') || ''

    setUserName(savedName)
    setUserRole(savedRole)
  }, [location])

  const roleLabels = {
    mentee: 'Mentee',
    mentor: 'Mentor',
    provider: 'Product Provider',
    organizer: 'Organizer',
  }

  const roleLabel = roleLabels[userRole] || 'User'

  const handleLogout = () => {
    localStorage.removeItem('mentifyUser')
    localStorage.removeItem('mentifyRole')

    setUserName('')
    setUserRole('')
    setIsUserMenuOpen(false)

    navigate('/')
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isLoggedIn = Boolean(userName)

  return (
    <nav className="sticky top-0 z-50 border-b border-[#DCEEFF] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Mentify"
              className="h-30 w-auto object-contain"
            />
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="font-medium text-gray-600 transition hover:text-[#2F4860]"
          >
            Home
          </Link>

          <Link
            to="/mentors"
            className="font-medium text-gray-600 transition hover:text-[#2F4860]"
          >
            Find Mentor
          </Link>

          <Link
            to="/products"
            className="font-medium text-gray-600 transition hover:text-[#2F4860]"
          >
            Produk Digital
          </Link>

          <Link
            to="/competitions"
            className="font-medium text-gray-600 transition hover:text-[#2F4860]"
          >
            Info Lomba
          </Link>
        </div>

        {/* Desktop User Area */}
        <div className="hidden items-center gap-5 md:flex">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="rounded-lg bg-[#2F4860] px-5 py-2.5 font-medium text-white transition hover:bg-[#7DA7D9]"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="font-semibold text-[#2F4860] transition hover:text-[#7DA7D9]"
              >
                Dashboard
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-3 rounded-lg border border-[#DCEEFF] bg-white px-4 py-2 transition hover:bg-[#F2F8FF]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFFFBF] font-bold text-[#2F4860]">
                    {userName.charAt(0).toUpperCase()}
                  </div>

                  <div className="text-left">
                    <p className="max-w-32 truncate text-sm font-semibold text-[#2F4860]">
                      {userName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {roleLabel}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    ▼
                  </span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-[#DCEEFF] bg-white shadow-lg">

                    <div className="border-b border-gray-100 px-5 py-4">
                      <p className="text-sm font-bold text-[#2F4860]">
                        {userName}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {roleLabel}
                      </p>
                    </div>

                    <Link
                      to="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block px-5 py-3 text-sm font-medium text-[#2F4860] hover:bg-[#F2F8FF]"
                    >
                      Dashboard
                    </Link>

                    <button
                      type="button"
                      className="block w-full px-5 py-3 text-left text-sm font-medium text-[#2F4860] hover:bg-[#F2F8FF]"
                    >
                      Profil
                    </button>

                    <div className="border-t border-gray-100" />

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="block w-full px-5 py-3 text-left text-sm font-medium text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg border border-[#DCEEFF] px-3 py-2 text-[#2F4860] md:hidden"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[#DCEEFF] bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="font-medium text-gray-600"
            >
              Home
            </Link>

            <Link
              to="/mentors"
              onClick={closeMobileMenu}
              className="font-medium text-gray-600"
            >
              Find Mentor
            </Link>

            <Link
              to="/products"
              onClick={closeMobileMenu}
              className="font-medium text-gray-600"
            >
              Produk Digital
            </Link>

            <Link
              to="/competitions"
              onClick={closeMobileMenu}
              className="font-medium text-gray-600"
            >
              Info Lomba
            </Link>

            <div className="border-t border-gray-100 pt-4">
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="block rounded-lg bg-[#2F4860] px-5 py-3 text-center font-semibold text-white"
                >
                  Login
                </Link>
              ) : (
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFBF] font-bold text-[#2F4860]">
                      {userName.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold text-[#2F4860]">
                        {userName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {roleLabel}
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/dashboard"
                    onClick={closeMobileMenu}
                    className="mt-4 block rounded-lg bg-[#F2F8FF] px-4 py-3 font-semibold text-[#2F4860]"
                  >
                    Dashboard
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      closeMobileMenu()
                      handleLogout()
                    }}
                    className="mt-2 block w-full rounded-lg px-4 py-3 text-left font-semibold text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar