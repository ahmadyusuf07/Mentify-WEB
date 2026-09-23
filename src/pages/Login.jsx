import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

 const handleLogin = (e) => {
  e.preventDefault()

  const savedUser =
    localStorage.getItem('mentifyUser') || 'User Mentify'

  localStorage.setItem('mentifyUser', savedUser)
  localStorage.setItem('mentifyRole', 'mentee')

  navigate('/dashboard')
}

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <p className="font-semibold text-[#7DA7D9]">
            WELCOME BACK
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
            Masuk ke Mentify
          </h1>

          <p className="mt-3 text-gray-600">
            Lanjutkan perjalanan belajar dan pengembangan dirimu.
          </p>
        </div>

        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

          <form onSubmit={handleLogin}>

            <div>
              <label className="text-sm font-semibold text-[#2F4860]">
                Email
              </label>

              <input
                type="email"
                placeholder="contoh@email.com"
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] px-4 py-3 outline-none focus:border-[#7DA7D9]"
                required
              />
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-[#2F4860]">
                Password
              </label>

              <input
                type="password"
                placeholder="Masukkan password"
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] px-4 py-3 outline-none focus:border-[#7DA7D9]"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#2F4860] px-6 py-3 font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Masuk
            </button>

          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">atau</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <Link
            to="/"
            className="block w-full rounded-xl border border-[#DCEEFF] px-6 py-3 text-center font-semibold text-[#2F4860] transition hover:bg-[#F2F8FF]"
          >
            Kembali ke Home
          </Link>

        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
             Belum punya akun?{' '}
            <Link
                to="/register"
                className="font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
            >
                Daftar sekarang
                </Link>
            </p>

      </div>
    </div>
  )
}

export default Login