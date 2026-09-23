import { useState } from 'react'
import { products } from '../data/dummyData'
import ProductCard from '../components/ProductCard'

function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua Kategori')
  const [type, setType] = useState('Semua Tipe')
  const [sort, setSort] = useState('Urutkan')

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.seller.toLowerCase().includes(search.toLowerCase())

      const matchesCategory =
        category === 'Semua Kategori' ||
        product.category === category

      const matchesType =
        type === 'Semua Tipe' ||
        product.type === type

      return matchesSearch && matchesCategory && matchesType
    })
    .sort((a, b) => {
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
          PRODUK DIGITAL
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Produk untuk Membantu Perkembanganmu
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          Temukan template, e-book, course, dan berbagai produk digital
          untuk mendukung proses belajar dan pengembangan skill-mu.
        </p>
      </section>


      {/* Filter */}
      <section className="mb-10 rounded-2xl bg-[#F2F8FF] p-6">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Cari produk..."
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
            <option>Esai</option>
            <option>LKTI</option>
            <option>Business Plan</option>
            <option>Business Case</option>
            <option>Pitching</option>
            <option>UI/UX</option>
          </select>


          {/* Type */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
          >
            <option>Semua Tipe</option>
            <option>Karya Pemenang</option>
            <option>Pitch Deck</option>
            <option>Design Case</option>
          </select>


          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-[#DCEEFF] bg-white px-4 py-3 text-gray-600 outline-none focus:border-[#7DA7D9]"
          >
            <option>Urutkan</option>
            <option>Harga Terendah</option>
            <option>Harga Tertinggi</option>
          </select>

        </div>

      </section>


      {/* Product List */}
      <section className="pb-16">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-xl font-bold text-[#2F4860]">
            Produk Pilihan
          </h2>

          <p className="text-sm text-gray-500">
            {filteredProducts.length} produk tersedia
          </p>

        </div>


        {filteredProducts.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        ) : (

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-10 text-center">

            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#2F4860]">
              Produk tidak ditemukan
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

export default Products