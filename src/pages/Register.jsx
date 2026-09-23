import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('mentee')

  const handleRegister = (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      return
    }

    localStorage.setItem('mentifyUser', name)
    localStorage.setItem('mentifyRole', role)

    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-[75vh] items-center justify-center py-10">

      <div className="w-full max-w-md">

        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

          {/* Header */}
          <div className="text-center">

            <p className="font-semibold text-[#7DA7D9]">
              MENTIFY
            </p>

            <h1 className="mt-2 text-3xl font-bold text-[#2F4860]">
              Buat Akun
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Daftar untuk mulai mengembangkan potensimu.
            </p>

          </div>


          {/* Form */}
          <form
            onSubmit={handleRegister}
            className="mt-8"
          >

            {/* Nama */}
            <div>

              <label className="text-sm font-semibold text-[#2F4860]">
                Nama Lengkap
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 outline-none transition focus:border-[#7DA7D9]"
                required
              />

            </div>


            {/* Email */}
            <div className="mt-5">

              <label className="text-sm font-semibold text-[#2F4860]">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 outline-none transition focus:border-[#7DA7D9]"
                required
              />

            </div>


            {/* Password */}
            <div className="mt-5">

              <label className="text-sm font-semibold text-[#2F4860]">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 outline-none transition focus:border-[#7DA7D9]"
                required
              />

            </div>


            {/* Role */}
            <div className="mt-5">

              <label className="text-sm font-semibold text-[#2F4860]">
                Daftar Sebagai
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none transition focus:border-[#7DA7D9]"
              >
                <option value="mentee">
                  Mentee
                </option>

                <option value="mentor">
                  Mentor
                </option>

                <option value="provider">
                  Product Provider
                </option>

                <option value="organizer">
                  Organizer
                </option>
              </select>

            </div>


            {/* Button */}
            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-[#2F4860] px-6 py-4 font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Daftar
            </button>

          </form>


          {/* Login */}
          <p className="mt-6 text-center text-sm text-gray-500">

            Sudah punya akun?{' '}

            <Link
              to="/login"
              className="font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  )
}

export default Register