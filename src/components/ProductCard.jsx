import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#DCEEFF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="h-48 overflow-hidden bg-[#F2F8FF]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#FFFFBF] px-3 py-1 text-xs font-semibold text-[#2F4860]">
            {product.type}
          </span>

          <span className="text-xs text-gray-500">
            {product.category}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-[#2F4860]">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {product.description}
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Oleh {product.seller}
        </p>

        <div className="mt-3 rounded-lg bg-[#F2F8FF] px-3 py-2">
          <p className="text-xs text-gray-500">
            Pencapaian
          </p>

          <p className="text-sm font-semibold text-[#2F4860]">
            🏆 {product.achievement}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">
              Harga
            </p>

            <p className="font-bold text-[#2F4860]">
              Rp{product.price.toLocaleString('id-ID')}
            </p>
          </div>

          <Link
            to={`/products/${product.id}`}
            className="rounded-lg bg-[#2F4860] px-4 py-2 font-semibold text-white transition hover:bg-[#7DA7D9]"
          >
            Lihat Produk
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProductCard