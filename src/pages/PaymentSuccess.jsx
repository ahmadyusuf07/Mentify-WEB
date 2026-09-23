import { Link, useSearchParams } from 'react-router-dom'

function PaymentSuccess() {
  const [searchParams] = useSearchParams()

  const type = searchParams.get('type')

  const isProduct = type === 'product'

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">

      <div className="w-full max-w-xl rounded-3xl border border-[#DCEEFF] bg-white p-10 text-center shadow-sm">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFFFBF] text-4xl">
          ✓
        </div>

        {/* Label */}
        <p className="mt-6 font-semibold text-[#7DA7D9]">
          PEMBAYARAN BERHASIL
        </p>

        {/* Title */}
        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          {isProduct
            ? 'Pembelian Berhasil!'
            : 'Booking Berhasil!'}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-gray-600">

          {isProduct
            ? 'Pembayaran kamu telah berhasil diproses. Produk digital sudah tersedia di akun Mentify kamu.'
            : 'Pembayaran kamu telah berhasil diproses. Sesi mentoring kamu sudah tercatat di akun Mentify.'}

        </p>

        {/* Transaction Information */}
        <div className="mt-8 rounded-2xl bg-[#F2F8FF] p-6 text-left">

          <div className="flex justify-between">

            <span className="text-gray-500">
              Status
            </span>

            <span className="font-bold text-green-600">
              Berhasil
            </span>

          </div>

          <div className="mt-4 flex justify-between">

            <span className="text-gray-500">
              {isProduct ? 'Order ID' : 'Booking ID'}
            </span>

            <span className="font-semibold text-[#2F4860]">
              {isProduct
                ? 'PRD-2026-001'
                : 'MNT-2026-001'}
            </span>

          </div>

          <div className="mt-4 flex justify-between">

            <span className="text-gray-500">
              Pembayaran
            </span>

            <span className="font-semibold text-[#2F4860]">
              Berhasil
            </span>

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            to="/"
            className="flex-1 rounded-xl bg-[#2F4860] px-6 py-3 font-bold text-white transition hover:bg-[#7DA7D9]"
          >
            Kembali ke Home
          </Link>

          <Link
            to={isProduct ? '/products' : '/mentors'}
            className="flex-1 rounded-xl border border-[#DCEEFF] px-6 py-3 font-bold text-[#2F4860] transition hover:bg-[#F2F8FF]"
          >
            {isProduct
              ? 'Cari Produk Lain'
              : 'Cari Mentor Lain'}
          </Link>

        </div>

      </div>

    </div>
  )
}

export default PaymentSuccess