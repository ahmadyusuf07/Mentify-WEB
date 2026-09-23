import { useState } from 'react'
import { mentors } from '../data/dummyData'
import MentorCard from '../components/MentorCard'

function Mentors() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua Bidang')
  const [sort, setSort] = useState('Urutkan')

  const filteredMentors = mentors
    .filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.expertise.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'Semua Bidang' ||
        mentor.expertise === category

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sort === 'Rating Tertinggi') {
        return b.rating - a.rating
      }

      if (sort === 'Harga Terendah') {
        return a.price - b.price
      }

      if (sort === 'Harga Tertinggi') {
        return b.price - a.price
      }

      return 0
    })

  return (
    <div>

      {/* Header */}
      <section className="py-10">
        <p className="font-semibold text-[#7DA7D9]">
          FIND MENTOR
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Temukan Mentor yang Tepat
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          Belajar langsung dari mentor berpengalaman sesuai bidang dan kebutuhanmu.
        </p>
      </section>


      {/* Filter */}
      <section className="mb-10 rounded-2xl bg-[#F2F8FF] p-6">

        <div className="grid gap-4 md:grid-cols-3">

          {/* Search */}
          <input
            type="text"
            placeholder="Cari mentor atau bidang..."
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
            <option>Semua Bidang</option>
            <option>LKTI & Karya Tulis Ilmiah</option>
            <option>Esai & Karya Tulis</option>
            <option>Business Case</option>
            <option>Business Plan</option>
            <option>Pitching & Presentation</option>
            <option>UI/UX Competition</option>
          </select>


          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
          >
            <option>Urutkan</option>
            <option>Rating Tertinggi</option>
            <option>Harga Terendah</option>
            <option>Harga Tertinggi</option>
          </select>

        </div>

      </section>


      {/* Mentor List */}
      <section className="pb-16">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold text-[#2F4860]">
            Mentor Pilihan
          </h2>

          <p className="text-sm text-gray-500">
            {filteredMentors.length} mentor tersedia
          </p>

        </div>


        {filteredMentors.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMentors.map((mentor) => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
              />
            ))}
          </div>

        ) : (

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-10 text-center">

            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#2F4860]">
              Mentor tidak ditemukan
            </h3>

            <p className="mt-2 text-gray-500">
              Coba gunakan kata kunci atau bidang yang berbeda.
            </p>

          </div>

        )}

      </section>

    </div>
  )
}

export default Mentors