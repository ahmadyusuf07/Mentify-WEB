import { Link, useParams } from 'react-router-dom'
import { mentors } from '../data/dummyData'

function MentorDetail() {
  const { id } = useParams()

  const mentor = mentors.find(
    (mentor) => mentor.id === Number(id)
  )

  // Kalau mentor tidak ditemukan
  if (!mentor) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-[#2F4860]">
          Mentor tidak ditemukan
        </h1>

        <Link
          to="/mentors"
          className="mt-6 inline-block rounded-lg bg-[#2F4860] px-6 py-3 font-semibold text-white"
        >
          Kembali ke Find Mentor
        </Link>
      </div>
    )
  }

  return (
    <div className="py-10">

      {/* Back */}
      <Link
        to="/mentors"
        className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
      >
        ← Kembali ke Find Mentor
      </Link>


      {/* Main Profile */}
      <section className="mt-8 grid gap-8 lg:grid-cols-3">

        {/* Profile Card */}
        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 text-center shadow-sm">

          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-[#F2F8FF]">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-[#2F4860]">
            {mentor.name}
          </h1>

          <p className="mt-2 font-medium text-[#7DA7D9]">
            {mentor.expertise}
          </p>

          <div className="mt-5 flex justify-center gap-2">
            <span className="rounded-full bg-[#FFFFBF] px-4 py-2 text-sm font-semibold text-[#2F4860]">
              ⭐ {mentor.rating}
            </span>

            <span className="rounded-full bg-[#F2F8FF] px-4 py-2 text-sm text-[#2F4860]">
              {mentor.experience}
            </span>
          </div>

        </div>


        {/* Detail */}
        <div className="lg:col-span-2">

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-wide text-[#7DA7D9]">
              Tentang Mentor
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#2F4860]">
              Belajar langsung dari {mentor.name}
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              {mentor.description}
            </p>


            {/* Expertise */}
            <div className="mt-8">

              <h3 className="font-bold text-[#2F4860]">
                Keahlian
              </h3>

              <div className="mt-3 flex flex-wrap gap-3">

                <span className="rounded-full bg-[#F2F8FF] px-4 py-2 text-sm font-medium text-[#2F4860]">
                  {mentor.expertise}
                </span>

                <span className="rounded-full bg-[#F2F8FF] px-4 py-2 text-sm font-medium text-[#2F4860]">
                  Mentoring
                </span>

                <span className="rounded-full bg-[#F2F8FF] px-4 py-2 text-sm font-medium text-[#2F4860]">
                  Project Based Learning
                </span>

              </div>

            </div>


            {/* Price */}
            <div className="mt-8 rounded-xl bg-[#F2F8FF] p-6">

              <p className="text-sm text-gray-500">
                Harga sesi mentoring
              </p>

              <p className="mt-1 text-3xl font-bold text-[#2F4860]">
                Rp{mentor.price.toLocaleString('id-ID')}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                per sesi mentoring
              </p>

            </div>


            {/* Booking */}
            <Link
              to={`/booking/${mentor.id}`}
              className="mt-6 block rounded-xl bg-[#2F4860] px-6 py-4 text-center font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Booking Sesi Mentoring →
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default MentorDetail