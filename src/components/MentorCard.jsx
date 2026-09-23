import { Link } from 'react-router-dom'

function MentorCard({ mentor }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#DCEEFF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Foto */}
      <div className="bg-[#F2F8FF] p-6">
        <img
          src={mentor.image}
          alt={mentor.name}
          className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-white shadow"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-[#2F4860]">
          {mentor.name}
        </h3>

        <p className="mt-1 font-medium text-[#7DA7D9]">
          {mentor.expertise}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className="rounded-full bg-[#FFFFBF] px-3 py-1 font-semibold text-[#2F4860]">
            ⭐ {mentor.rating}
          </span>

          <span className="text-gray-500">
            {mentor.experience}
          </span>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {mentor.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Mulai dari
            </p>

            <p className="font-bold text-[#2F4860]">
              Rp{mentor.price.toLocaleString("id-ID")}
              <span className="font-normal text-xs text-gray-500">
                {" "} / sesi
              </span>
            </p>
          </div>

          <Link
            to={`/mentors/${mentor.id}`}
            className="rounded-lg bg-[#2F4860] px-4 py-2 font-semibold text-white transition hover:bg-[#7DA7D9]"
          >
            Lihat Profil
          </Link>

        </div>

      </div>
    </div>
  )
}

export default MentorCard