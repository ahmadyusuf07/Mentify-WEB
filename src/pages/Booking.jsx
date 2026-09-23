import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { mentors } from '../data/dummyData'

function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()

  const mentor = mentors.find(
    (mentor) => mentor.id === Number(id)
  )

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [topic, setTopic] = useState('')

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

  const handleContinue = (e) => {
    e.preventDefault()

    if (!date || !time || !topic) {
      return
    }

    navigate(`/checkout/${mentor.id}`, {
      state: {
        date,
        time,
        topic,
      },
    })
  }

  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold text-red-500">
        TEST BOOKING
      </h1>

      {/* Kembali */}
      <Link
        to={`/mentors/${mentor.id}`}
        className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
      >
        ← Kembali ke Profil Mentor
      </Link>


      {/* Header */}
      <section className="mt-8">

        <p className="font-semibold text-[#7DA7D9]">
          BOOKING MENTOR
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Jadwalkan Sesi Mentoring
        </h1>

        <p className="mt-3 text-gray-600">
          Pilih waktu yang sesuai dan tentukan topik yang ingin kamu bahas.
        </p>

      </section>


      {/* Isi halaman */}
      <section className="mt-10 grid gap-8 lg:grid-cols-3">


        {/* ========================= */}
        {/* FORM BOOKING */}
        {/* ========================= */}

        <div className="lg:col-span-2">

          <form
            onSubmit={handleContinue}
            className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm"
          >

            <h2 className="text-xl font-bold text-[#2F4860]">
              Detail Sesi
            </h2>


            {/* Tanggal */}
            <div className="mt-6">

              <label className="text-sm font-semibold text-[#2F4860]">
                Pilih Tanggal
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 outline-none focus:border-[#7DA7D9]"
                required
              />

            </div>


            {/* Waktu */}
            <div className="mt-6">

              <label className="text-sm font-semibold text-[#2F4860]">
                Pilih Waktu
              </label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-2 w-full rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
                required
              >

                <option value="">
                  Pilih jam mentoring
                </option>

                <option value="09:00">
                  09:00
                </option>

                <option value="11:00">
                  11:00
                </option>

                <option value="13:00">
                  13:00
                </option>

                <option value="15:00">
                  15:00
                </option>

                <option value="19:00">
                  19:00
                </option>

                <option value="20:00">
                  20:00
                </option>

              </select>

            </div>


            {/* Topik */}
            <div className="mt-6">

              <label className="text-sm font-semibold text-[#2F4860]">
                Topik yang Ingin Dibahas
              </label>

              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Contoh: Saya ingin belajar membuat website menggunakan React..."
                rows="5"
                className="mt-2 w-full resize-none rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 outline-none focus:border-[#7DA7D9]"
                required
              />

            </div>


            {/* ========================= */}
            {/* TOMBOL LANJUT CHECKOUT */}
            {/* ========================= */}

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[#2F4860] px-6 py-4 font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Lanjut ke Checkout →
            </button>

          </form>

        </div>


        {/* ========================= */}
        {/* RINGKASAN MENTOR */}
        {/* ========================= */}

        <div>

          <div className="sticky top-6 rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

            <p className="font-semibold text-[#7DA7D9]">
              MENTOR
            </p>


            {/* Profil mentor */}
            <div className="mt-5 flex items-center gap-4">

              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>

                <h2 className="font-bold text-[#2F4860]">
                  {mentor.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {mentor.expertise}
                </p>

              </div>

            </div>


            <div className="my-6 border-t border-gray-100" />


            {/* Harga */}
            <div className="flex items-center justify-between">

              <span className="text-gray-500">
                Harga sesi
              </span>

              <span className="text-xl font-bold text-[#2F4860]">
                Rp{mentor.price.toLocaleString('id-ID')}
              </span>

            </div>


            {/* Durasi */}
            <div className="mt-4 flex items-center justify-between">

              <span className="text-gray-500">
                Durasi
              </span>

              <span className="font-semibold text-[#2F4860]">
                60 menit
              </span>

            </div>


            {/* Info */}
            <div className="mt-5 rounded-xl bg-[#F2F8FF] p-4">

              <p className="text-sm leading-relaxed text-gray-600">
                Pilih tanggal, waktu, dan topik mentoring sebelum melanjutkan pembayaran.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Booking