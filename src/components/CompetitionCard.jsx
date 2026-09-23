import { Link } from 'react-router-dom'

function CompetitionCard({ competition }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#DCEEFF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="h-48 overflow-hidden bg-[#F2F8FF]">
        <img
          src={competition.image}
          alt={competition.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#FFFFBF] px-3 py-1 text-xs font-semibold text-[#2F4860]">
            {competition.category}
          </span>

          <span className="text-xs text-gray-500">
            {competition.location}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-snug text-[#2F4860]">
          {competition.title}
        </h3>

        <p className="mt-3 text-sm text-gray-500">
          {competition.organizer}
        </p>

        <div className="mt-5 space-y-3">

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">
              Deadline
            </span>

            <span className="text-sm font-semibold text-[#2F4860]">
              {competition.deadline}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">
              Hadiah
            </span>

            <span className="text-sm font-semibold text-[#2F4860]">
              {competition.prize}
            </span>
          </div>

        </div>

        <Link
          to={`/competitions/${competition.id}`}
          className="mt-6 block rounded-lg bg-[#2F4860] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#7DA7D9]"
        >
          Lihat Detail
        </Link>

      </div>
    </div>
  )
}

export default CompetitionCard