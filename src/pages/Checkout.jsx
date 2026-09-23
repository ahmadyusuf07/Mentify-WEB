import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { mentors } from '../data/dummyData'

function Checkout() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const mentor = mentors.find(
    (mentor) => mentor.id === Number(id)
  )

  const { date, time, topic } = location.state || {}

  if (!mentor) {
    return (
      <div className="py-20 text-center">

        <h1 className="text-3xl font-bold text-[#2F4860]">
          Mentor tidak ditemukan
        </h1>

        <Link
          to="/mentors"
          className="mt-6 inline-block rounded-lg bg-[#2F4860] px-6 py-3 font-semibold text-white transition hover:bg-[#7DA7D9]"
        >
          Kembali ke Find Mentor
        </Link>

      </div>
    )
  }

  const handlePayment = () => {
  const bookingData = {
    mentorId: mentor.id,
    mentorName: mentor.name,
    expertise: mentor.expertise,
    date,
    time,
    topic,
    price: mentor.price,
    status: 'Terjadwal',
  }

  localStorage.setItem(
    'mentifyBooking',
    JSON.stringify(bookingData)
  )

  navigate('/payment-success')
}

  return (
    <div className="py-10">

      {/* Kembali */}
      <Link
        to={`/booking/${mentor.id}`}
        className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
      >
        ← Kembali ke Booking
      </Link>


      {/* Header */}
      <section className="mt-8">

        <p className="font-semibold text-[#7DA7D9]">
          CHECKOUT
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Konfirmasi Booking
        </h1>

        <p className="mt-3 text-gray-600">
          Periksa kembali detail sesi mentoring sebelum melakukan pembayaran.
        </p>

      </section>


      {/* Isi */}
      <section className="mt-10 grid gap-8 lg:grid-cols-3">

        {/* Detail Booking */}
        <div className="lg:col-span-2">

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

            <h2 className="text-xl font-bold text-[#2F4860]">
              Detail Mentoring
            </h2>


            {/* Mentor */}
            <div className="mt-6 flex items-center gap-4">

              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>

                <h3 className="text-lg font-bold text-[#2F4860]">
                  {mentor.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {mentor.expertise}
                </p>

              </div>

            </div>


            <div className="my-6 border-t border-gray-100" />


            {/* Tanggal */}
            <div className="rounded-xl bg-[#F2F8FF] p-5">

              <p className="text-sm text-gray-500">
                Tanggal
              </p>

              <p className="mt-1 font-bold text-[#2F4860]">
                {date
                  ? new Date(`${date}T00:00:00`).toLocaleDateString(
                      'id-ID',
                      {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      }
                    )
                  : '-'}
              </p>

            </div>


            {/* Waktu */}
            <div className="mt-4 rounded-xl bg-[#F2F8FF] p-5">

              <p className="text-sm text-gray-500">
                Waktu
              </p>

              <p className="mt-1 font-bold text-[#2F4860]">
                {time || '-'} WIB
              </p>

            </div>


            {/* Topik */}
            <div className="mt-4 rounded-xl bg-[#F2F8FF] p-5">

              <p className="text-sm text-gray-500">
                Topik Mentoring
              </p>

              <p className="mt-1 leading-relaxed text-[#2F4860]">
                {topic || '-'}
              </p>

            </div>


            {/* Info */}
            <div className="mt-6 rounded-xl bg-[#FFFFBF] p-5">

              <p className="font-semibold text-[#2F4860]">
                Mode Prototype
              </p>

              <p className="mt-1 text-sm leading-relaxed text-[#2F4860]">
                Pembayaran pada halaman ini hanya simulasi untuk keperluan
                demo prototype Mentify.
              </p>

            </div>

          </div>

        </div>


        {/* Ringkasan Pembayaran */}
        <div>

          <div className="sticky top-6 rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-[#2F4860]">
              Ringkasan Pembayaran
            </h2>


            <div className="mt-6 space-y-4">

              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Sesi Mentoring
                </span>

                <span className="font-semibold text-[#2F4860]">
                  Rp{mentor.price.toLocaleString('id-ID')}
                </span>

              </div>


              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Durasi
                </span>

                <span className="font-semibold text-[#2F4860]">
                  60 menit
                </span>

              </div>


              <div className="flex justify-between gap-4">

                <span className="text-gray-500">
                  Biaya Layanan
                </span>

                <span className="font-semibold text-[#2F4860]">
                  Rp0
                </span>

              </div>

            </div>


            <div className="my-6 border-t border-gray-100" />


            <div className="flex items-end justify-between">

              <span className="text-gray-500">
                Total Pembayaran
              </span>

              <span className="text-2xl font-bold text-[#2F4860]">
                Rp{mentor.price.toLocaleString('id-ID')}
              </span>

            </div>


            <button
              onClick={handlePayment}
              className="mt-6 w-full rounded-xl bg-[#2F4860] px-6 py-4 font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Bayar Sekarang
            </button>


            <p className="mt-4 text-center text-xs leading-relaxed text-gray-400">
              Dengan melanjutkan pembayaran, kamu menyetujui booking
              sesi mentoring ini.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Checkout