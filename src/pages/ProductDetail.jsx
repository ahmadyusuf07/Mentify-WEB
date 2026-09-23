import { Link, useParams } from 'react-router-dom'
import { products } from '../data/dummyData'

function ProductDetail() {
  const { id } = useParams()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-[#2F4860]">
          Produk tidak ditemukan
        </h1>

        <Link
          to="/products"
          className="mt-6 inline-block rounded-lg bg-[#2F4860] px-6 py-3 font-semibold text-white transition hover:bg-[#7DA7D9]"
        >
          Kembali ke Produk Digital
        </Link>
      </div>
    )
  }

  return (
    <div className="py-10">

      {/* Back */}
      <Link
        to="/products"
        className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
      >
        ← Kembali ke Produk Digital
      </Link>

      {/* Product Detail */}
      <section className="mt-8 grid gap-10 lg:grid-cols-2">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl border border-[#DCEEFF] bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-[420px] w-full object-cover"
          />
        </div>

        {/* Information */}
        <div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#FFFFBF] px-4 py-2 text-sm font-semibold text-[#2F4860]">
              {product.type}
            </span>

            <span className="rounded-full bg-[#F2F8FF] px-4 py-2 text-sm font-medium text-[#2F4860]">
              {product.category}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#2F4860]">
            {product.name}
          </h1>

          <p className="mt-5 leading-relaxed text-gray-600">
            {product.description}
          </p>

          {/* Seller */}
          <div className="mt-8 rounded-2xl bg-[#F2F8FF] p-5">
            <p className="text-sm text-gray-500">
              Produk dibuat oleh
            </p>

            <p className="mt-1 font-bold text-[#2F4860]">
              {product.seller}
            </p>
          </div>

          {/* Price */}
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Harga Produk
            </p>

            <p className="mt-1 text-4xl font-bold text-[#2F4860]">
              Rp{product.price.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h2 className="font-bold text-[#2F4860]">
              Yang Kamu Dapatkan
            </h2>

            <div className="mt-4 space-y-3">

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFBF] text-sm">
                  ✓
                </span>
                <span className="text-gray-600">
                  Akses produk digital
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFBF] text-sm">
                  ✓
                </span>
                <span className="text-gray-600">
                  Materi dapat digunakan kapan saja
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFFFBF] text-sm">
                  ✓
                </span>
                <span className="text-gray-600">
                  Cocok untuk pengembangan skill
                </span>
              </div>

            </div>
          </div>

          {/* Buy Button */}
          <Link
            to={`/product-checkout/${product.id}`}
            className="mt-8 block w-full rounded-xl bg-[#2F4860] px-6 py-4 text-center font-bold text-white transition hover:bg-[#7DA7D9]"
          >
            Beli Produk →
          </Link>

        </div>
      </section>

      {/* Additional Information */}
      <section className="mt-16 rounded-3xl bg-[#F2F8FF] p-8">
        <p className="font-semibold text-[#7DA7D9]">
          TENTANG PRODUK
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[#2F4860]">
          Tingkatkan kemampuanmu dengan produk pilihan Mentify
        </h2>

        <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
          Produk digital di Mentify dibuat untuk membantu pengguna
          mendapatkan materi, tools, dan resource yang dapat langsung
          digunakan dalam proses belajar maupun pengembangan project.
        </p>
      </section>

    </div>
  )
}

export default ProductDetail