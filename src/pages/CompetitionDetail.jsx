import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { competitions } from '../data/dummyData'

function CompetitionDetail() {
  const { id } = useParams()

  const competition = competitions.find(
    (competition) => competition.id === Number(id)
  )

  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    if (!competition) return

    const savedCompetitions =
      JSON.parse(localStorage.getItem('mentifyCompetitions')) || []

    const alreadySaved = savedCompetitions.some(
      (item) => item.id === competition.id
    )

    setIsSaved(alreadySaved)
  }, [competition])

  if (!competition) {
    return (
      <div className="py-20 text-center">

        <h1 className="text-3xl font-bold text-[#2F4860]">
          Lomba tidak ditemukan
        </h1>

        <Link
          to="/competitions"
          className="mt-6 inline-block rounded-lg bg-[#2F4860] px-6 py-3 font-semibold text-white transition hover:bg-[#7DA7D9]"
        >
          Kembali ke Info Lomba
        </Link>

      </div>
    )
  }

  const handleSave = () => {
    const savedCompetitions =
      JSON.parse(localStorage.getItem('mentifyCompetitions')) || []

    if (isSaved) {
      const updatedCompetitions = savedCompetitions.filter(
        (item) => item.id !== competition.id
      )

      localStorage.setItem(
        'mentifyCompetitions',
        JSON.stringify(updatedCompetitions)
      )

      setIsSaved(false)

      return
    }

    const competitionData = {
      id: competition.id,
      title: competition.title,
      organizer: competition.organizer,
      category: competition.category,
      deadline: competition.deadline,
      location: competition.location,
      prize: competition.prize,
      image: competition.image,
    }

    const updatedCompetitions = [
      ...savedCompetitions,
      competitionData,
    ]

    localStorage.setItem(
      'mentifyCompetitions',
      JSON.stringify(updatedCompetitions)
    )

    setIsSaved(true)
  }

  return (
    <div className="py-10">

      {/* Back */}
      <Link
        to="/competitions"
        className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
      >
        ← Kembali ke Info Lomba
      </Link>


      {/* Hero */}
      <section className="mt-8 overflow-hidden rounded-3xl border border-[#DCEEFF] bg-white shadow-sm">

        <div className="h-72 overflow-hidden bg-[#F2F8FF]">

          <img
            src={competition.image}
            alt={competition.title}
            className="h-full w-full object-cover"
          />

        </div>

        <div className="p-8">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-[#FFFFBF] px-4 py-2 text-sm font-semibold text-[#2F4860]">
              {competition.category}
            </span>

            <span className="rounded-full bg-[#F2F8FF] px-4 py-2 text-sm font-medium text-[#2F4860]">
              {competition.location}
            </span>

          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-[#2F4860]">
            {competition.title}
          </h1>

          <p className="mt-4 text-gray-500">
            Diselenggarakan oleh {competition.organizer}
          </p>

        </div>

      </section>


      {/* Main Information */}
      <section className="mt-8 grid gap-8 lg:grid-cols-3">

        {/* Description */}
        <div className="lg:col-span-2">

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

            <p className="font-semibold text-[#7DA7D9]">
              TENTANG LOMBA
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#2F4860]">
              Deskripsi Kompetisi
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              {competition.description}
            </p>


            <h3 className="mt-8 font-bold text-[#2F4860]">
              Informasi Peserta
            </h3>

            <p className="mt-2 leading-relaxed text-gray-600">
              Kompetisi ini terbuka untuk{' '}
              <span className="font-semibold text-[#2F4860]">
                {competition.participants}
              </span>.
            </p>


            <h3 className="mt-8 font-bold text-[#2F4860]">
              Kenapa Ikut Kompetisi?
            </h3>

            <div className="mt-4 space-y-3">

              <div className="flex items-center gap-3">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFBF]">
                  ✓
                </span>

                <span className="text-gray-600">
                  Menambah pengalaman dan portofolio
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFBF]">
                  ✓
                </span>

                <span className="text-gray-600">
                  Mengasah kemampuan dan kreativitas
                </span>

              </div>


              <div className="flex items-center gap-3">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFBF]">
                  ✓
                </span>

                <span className="text-gray-600">
                  Berkesempatan mendapatkan hadiah
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* Summary */}
        <div>

          <div className="sticky top-6 rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-[#2F4860]">
              Informasi Lomba
            </h2>


            <div className="mt-6 space-y-5">

              <div>

                <p className="text-sm text-gray-500">
                  Deadline Pendaftaran
                </p>

                <p className="mt-1 font-bold text-[#2F4860]">
                  {competition.deadline}
                </p>

              </div>


              <div>

                <p className="text-sm text-gray-500">
                  Peserta
                </p>

                <p className="mt-1 font-bold text-[#2F4860]">
                  {competition.participants}
                </p>

              </div>


              <div>

                <p className="text-sm text-gray-500">
                  Lokasi
                </p>

                <p className="mt-1 font-bold text-[#2F4860]">
                  {competition.location}
                </p>

              </div>


              <div>

                <p className="text-sm text-gray-500">
                  Total Hadiah
                </p>

                <p className="mt-1 text-2xl font-bold text-[#2F4860]">
                  {competition.prize}
                </p>

              </div>

            </div>


            {/* Simpan Lomba */}
            <button
              type="button"
              onClick={handleSave}
              className={`mt-8 w-full rounded-xl border px-6 py-4 font-bold transition ${
                isSaved
                  ? 'border-[#7DA7D9] bg-[#F2F8FF] text-[#2F4860]'
                  : 'border-[#DCEEFF] bg-white text-[#2F4860] hover:bg-[#F2F8FF]'
              }`}
            >
              {isSaved ? '✓ Lomba Tersimpan' : '☆ Simpan Lomba'}
            </button>


            {/* Pendaftaran */}
            <p className="mt-5 text-center text-xs leading-relaxed text-gray-400">
              Pendaftaran dilakukan melalui website resmi penyelenggara lomba.
            </p>


            <a
              href={competition.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full rounded-xl bg-[#2F4860] px-6 py-4 text-center font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Lihat Pendaftaran →
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default CompetitionDetail