import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [userName, setUserName] = useState('User Mentify')
  const [userRole, setUserRole] = useState('mentee')

  const [booking, setBooking] = useState(null)
  const [purchasedProduct, setPurchasedProduct] = useState(null)
  const [savedCompetitions, setSavedCompetitions] = useState([])

  useEffect(() => {
    const savedUser = localStorage.getItem('mentifyUser')
    const savedRole = localStorage.getItem('mentifyRole')

    if (savedUser) {
      setUserName(savedUser)
    }

    if (savedRole) {
      setUserRole(savedRole)
    }

    const savedBooking = localStorage.getItem('mentifyBooking')
    const savedProduct = localStorage.getItem('mentifyProduct')
    const savedCompetitionsData =
      JSON.parse(localStorage.getItem('mentifyCompetitions')) || []

    if (savedBooking) {
      setBooking(JSON.parse(savedBooking))
    }

    if (savedProduct) {
      setPurchasedProduct(JSON.parse(savedProduct))
    }

    setSavedCompetitions(savedCompetitionsData)
  }, [])

  const roleLabels = {
    mentee: 'Mentee',
    mentor: 'Mentor',
    provider: 'Product Provider',
    organizer: 'Organizer',
  }

  const roleLabel = roleLabels[userRole] || 'User'

  return (
    <div className="py-10">

      {/* Header */}
      <section>
        <p className="font-semibold text-[#7DA7D9]">
          DASHBOARD
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Halo, {userName}! 👋
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-[#FFFFBF] px-3 py-1 text-xs font-bold text-[#2F4860]">
            {roleLabel}
          </span>

          <p className="text-gray-600">
            Selamat datang kembali di Mentify.
          </p>
        </div>
      </section>


      {/* Statistik */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">

        {/* Mentoring */}
        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Sesi Mentoring
              </p>

              <p className="mt-2 text-3xl font-bold text-[#2F4860]">
                {booking ? '1' : '0'}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F8FF] text-2xl">
              🎓
            </div>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            Sesi mentoring yang terjadwal
          </p>

        </div>


        {/* Produk */}
        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Produk Dibeli
              </p>

              <p className="mt-2 text-3xl font-bold text-[#2F4860]">
                {purchasedProduct ? '1' : '0'}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F8FF] text-2xl">
              🛒
            </div>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            Produk digital yang kamu beli
          </p>

        </div>


        {/* Lomba */}
        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Lomba Tersimpan
              </p>

              <p className="mt-2 text-3xl font-bold text-[#2F4860]">
                {savedCompetitions.length}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F8FF] text-2xl">
              🏆
            </div>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            Kompetisi yang kamu simpan
          </p>

        </div>

      </section>


      {/* Aktivitas */}
      <section className="mt-10 grid gap-8 lg:grid-cols-3">

        {/* Sesi Mendatang */}
        <div className="lg:col-span-2">

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold text-[#7DA7D9]">
                  MENTORING
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2F4860]">
                  Sesi Mendatang
                </h2>

              </div>

              <Link
                to="/mentors"
                className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
              >
                Cari Mentor
              </Link>

            </div>


            {booking ? (

              <div className="mt-6 rounded-xl border border-[#DCEEFF] bg-[#F2F8FF] p-6">

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  <div>

                    <p className="text-sm font-semibold text-[#7DA7D9]">
                      MENTORING TERJADWAL
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#2F4860]">
                      {booking.mentorName}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {booking.expertise}
                    </p>

                  </div>


                  <div className="rounded-xl bg-white p-4">

                    <p className="text-xs text-gray-500">
                      Jadwal
                    </p>

                    <p className="mt-1 font-bold text-[#2F4860]">
                      {booking.date}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {booking.time} WIB
                    </p>

                  </div>

                </div>


                <div className="mt-5 border-t border-[#DCEEFF] pt-5">

                  <p className="text-sm text-gray-500">
                    Topik
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-[#2F4860]">
                    {booking.topic}
                  </p>

                </div>


                <div className="mt-5 flex items-center justify-between">

                  <div>

                    <p className="text-xs text-gray-500">
                      Harga
                    </p>

                    <p className="font-bold text-[#2F4860]">
                      Rp{booking.price?.toLocaleString('id-ID')}
                    </p>

                  </div>

                  <span className="rounded-full bg-[#FFFFBF] px-4 py-2 text-xs font-bold text-[#2F4860]">
                    {booking.status}
                  </span>

                </div>

              </div>

            ) : (

              <div className="mt-6 rounded-xl border border-dashed border-[#DCEEFF] p-8 text-center">

                <div className="text-3xl">
                  🎓
                </div>

                <h3 className="mt-3 font-bold text-[#2F4860]">
                  Belum ada sesi mentoring
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Temukan mentor yang sesuai dengan kebutuhanmu.
                </p>

                <Link
                  to="/mentors"
                  className="mt-5 inline-block rounded-lg bg-[#2F4860] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7DA7D9]"
                >
                  Cari Mentor
                </Link>

              </div>

            )}

          </div>

        </div>


        {/* Produk Saya */}
        <div>

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold text-[#7DA7D9]">
                  PRODUK
                </p>

                <h2 className="mt-1 text-2xl font-bold text-[#2F4860]">
                  Produk Saya
                </h2>

              </div>

              <Link
                to="/products"
                className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
              >
                Jelajahi
              </Link>

            </div>


            {purchasedProduct ? (

              <div className="mt-6 overflow-hidden rounded-xl border border-[#DCEEFF]">

                <div className="h-36 bg-[#F2F8FF]">

                  <img
                    src={purchasedProduct.image}
                    alt={purchasedProduct.productName}
                    className="h-full w-full object-cover"
                  />

                </div>


                <div className="p-5">

                  <span className="rounded-full bg-[#FFFFBF] px-3 py-1 text-xs font-semibold text-[#2F4860]">
                    {purchasedProduct.type}
                  </span>

                  <h3 className="mt-3 font-bold leading-snug text-[#2F4860]">
                    {purchasedProduct.productName}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Oleh {purchasedProduct.seller}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <p className="font-bold text-[#2F4860]">
                      Rp{purchasedProduct.price?.toLocaleString('id-ID')}
                    </p>

                    <span className="text-xs font-semibold text-green-600">
                      ✓ Sudah Dibeli
                    </span>

                  </div>

                </div>

              </div>

            ) : (

              <div className="mt-6 rounded-xl border border-dashed border-[#DCEEFF] p-8 text-center">

                <div className="text-3xl">
                  🛒
                </div>

                <h3 className="mt-3 font-bold text-[#2F4860]">
                  Belum ada produk
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Temukan produk digital untuk mendukung proses belajarmu.
                </p>

                <Link
                  to="/products"
                  className="mt-5 inline-block rounded-lg bg-[#2F4860] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7DA7D9]"
                >
                  Jelajahi Produk
                </Link>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* Lomba Tersimpan */}
      <section className="mt-8">

        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="font-semibold text-[#7DA7D9]">
                KOMPETISI
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#2F4860]">
                Lomba Tersimpan
              </h2>

            </div>

            <Link
              to="/competitions"
              className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
            >
              Cari Lomba
            </Link>

          </div>


          {savedCompetitions.length > 0 ? (

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {savedCompetitions.map((competition) => (

                <div
                  key={competition.id}
                  className="overflow-hidden rounded-xl border border-[#DCEEFF]"
                >

                  <div className="h-36 bg-[#F2F8FF]">

                    <img
                      src={competition.image}
                      alt={competition.title}
                      className="h-full w-full object-cover"
                    />

                  </div>


                  <div className="p-5">

                    <span className="rounded-full bg-[#FFFFBF] px-3 py-1 text-xs font-semibold text-[#2F4860]">
                      {competition.category}
                    </span>

                    <h3 className="mt-3 font-bold leading-snug text-[#2F4860]">
                      {competition.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {competition.organizer}
                    </p>


                    <div className="mt-4 flex items-center justify-between">

                      <div>

                        <p className="text-xs text-gray-500">
                          Deadline
                        </p>

                        <p className="text-sm font-semibold text-[#2F4860]">
                          {competition.deadline}
                        </p>

                      </div>


                      <Link
                        to={`/competitions/${competition.id}`}
                        className="rounded-lg bg-[#2F4860] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7DA7D9]"
                      >
                        Lihat
                      </Link>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="mt-6 rounded-xl border border-dashed border-[#DCEEFF] p-8 text-center">

              <div className="text-3xl">
                🏆
              </div>

              <h3 className="mt-3 font-bold text-[#2F4860]">
                Belum ada lomba tersimpan
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Simpan lomba yang menarik supaya mudah ditemukan kembali.
              </p>

              <Link
                to="/competitions"
                className="mt-5 inline-block rounded-lg bg-[#2F4860] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7DA7D9]"
              >
                Cari Lomba
              </Link>

            </div>

          )}

        </div>

      </section>


      {/* CTA */}
      <section className="mt-8 rounded-2xl bg-[#2F4860] p-8 text-white">

        <h2 className="text-2xl font-bold">
          Mau terus berkembang?
        </h2>

        <p className="mt-2 max-w-2xl text-[#F2F8FF]">
          Temukan mentor, produk digital, dan peluang kompetisi yang
          sesuai dengan tujuanmu.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <Link
            to="/mentors"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-[#2F4860] transition hover:bg-[#FFFFBF]"
          >
            Cari Mentor
          </Link>

          <Link
            to="/products"
            className="rounded-lg bg-[#7DA7D9] px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#2F4860]"
          >
            Jelajahi Produk
          </Link>

          <Link
            to="/competitions"
            className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#2F4860]"
          >
            Lihat Lomba
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Dashboard