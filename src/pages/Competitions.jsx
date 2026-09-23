import { useState } from 'react'
import { competitions } from '../data/dummyData'
import CompetitionCard from '../components/CompetitionCard'

function Competitions() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua Kategori')
  const [location, setLocation] = useState('Semua Lokasi')
  const [sort, setSort] = useState('Urutkan')

  const filteredCompetitions = competitions
    .filter((competition) => {
      const matchesSearch =
        competition.title.toLowerCase().includes(search.toLowerCase()) ||
        competition.organizer.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'Semua Kategori' ||
        competition.category === category

      const matchesLocation =
        location === 'Semua Lokasi' ||
        competition.location === location

      return matchesSearch && matchesCategory && matchesLocation
    })
    .sort((a, b) => {
      if (sort === 'Deadline Terdekat') {
        return new Date(a.deadline) - new Date(b.deadline)
      }

      return 0
    })

  return (
    <div>

      {/* Header */}
      <section className="py-10">
        <p className="font-semibold text-[#7DA7D9]">
          INFO LOMBA
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Temukan Peluang Kompetisi
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          Temukan berbagai kompetisi yang bisa menjadi kesempatan
          untuk mengembangkan skill, pengalaman, dan portofoliomu.
        </p>
      </section>


      {/* Filter */}
      <section className="mb-10 rounded-2xl bg-[#F2F8FF] p-6">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Cari lomba atau penyelenggara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 outline-none focus:border-[#7DA7D9]"
          />


          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
          >
            <option>Semua Kategori</option>
            <option>Business</option>
            <option>UI/UX</option>
            <option>Technology</option>
            <option>Marketing</option>
          </select>


          {/* Location */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
          >
            <option>Semua Lokasi</option>
            <option>Online</option>
            <option>Offline</option>
          </select>


          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
          >
            <option>Urutkan</option>
            <option>Deadline Terdekat</option>
          </select>

        </div>

      </section>


      {/* Competition List */}
      <section className="pb-16">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold text-[#2F4860]">
            Kompetisi Pilihan
          </h2>

          <p className="text-sm text-gray-500">
            {filteredCompetitions.length} lomba tersedia
          </p>

        </div>


        {filteredCompetitions.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2">
            {filteredCompetitions.map((competition) => (
              <CompetitionCard
                key={competition.id}
                competition={competition}
              />
            ))}
          </div>

        ) : (

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-10 text-center">

            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#2F4860]">
              Lomba tidak ditemukan
            </h3>

            <p className="mt-2 text-gray-500">
              Coba gunakan kata kunci atau filter yang berbeda.
            </p>

          </div>

        )}

      </section>

    </div>
  )
}

export default Competitions