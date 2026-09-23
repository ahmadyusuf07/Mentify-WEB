import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/dummyData'

function ProductCheckout() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  const [paymentMethod, setPaymentMethod] = useState('qris')

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

  const handlePayment = () => {
  const purchasedProduct = {
    productId: product.id,
    productName: product.name,
    type: product.type,
    category: product.category,
    price: product.price,
    seller: product.seller,
    image: product.image,
    status: 'Sudah Dibeli',
  }

  localStorage.setItem(
    'mentifyProduct',
    JSON.stringify(purchasedProduct)
  )

  navigate('/payment-success?type=product')
}

  return (
    <div className="py-10">

      {/* Back */}
      <Link
        to={`/products/${product.id}`}
        className="text-sm font-semibold text-[#7DA7D9] hover:text-[#2F4860]"
      >
        ← Kembali ke Detail Produk
      </Link>

      {/* Header */}
      <section className="mt-8">
        <p className="font-semibold text-[#7DA7D9]">
          CHECKOUT PRODUK
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#2F4860]">
          Konfirmasi Pembelian
        </h1>

        <p className="mt-3 text-gray-600">
          Periksa kembali produk dan metode pembayaran sebelum melakukan pembelian.
        </p>
      </section>

      {/* Checkout */}
      <section className="mt-10 grid gap-8 lg:grid-cols-3">

        {/* Payment */}
        <div className="lg:col-span-2">

          <div className="rounded-2xl border border-[#DCEEFF] bg-white p-8 shadow-sm">

            <h2 className="text-xl font-bold text-[#2F4860]">
              Metode Pembayaran
            </h2>

            <div className="mt-6 space-y-4">

              {/* QRIS */}
              <button
                type="button"
                onClick={() => setPaymentMethod('qris')}
                className={`w-full rounded-xl border p-5 text-left transition ${
                  paymentMethod === 'qris'
                    ? 'border-[#2F4860] bg-[#F2F8FF]'
                    : 'border-[#DCEEFF] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="font-bold text-[#2F4860]">
                      QRIS
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Bayar menggunakan QRIS
                    </p>
                  </div>

                  <div className="text-2xl">
                    ▦
                  </div>

                </div>
              </button>

              {/* E-Wallet */}
              <button
                type="button"
                onClick={() => setPaymentMethod('ewallet')}
                className={`w-full rounded-xl border p-5 text-left transition ${
                  paymentMethod === 'ewallet'
                    ? 'border-[#2F4860] bg-[#F2F8FF]'
                    : 'border-[#DCEEFF] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="font-bold text-[#2F4860]">
                      E-Wallet
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      GoPay, OVO, DANA, dan lainnya
                    </p>
                  </div>

                  <div className="text-2xl">
                    💳
                  </div>

                </div>
              </button>

              {/* Virtual Account */}
              <button
                type="button"
                onClick={() => setPaymentMethod('bank')}
                className={`w-full rounded-xl border p-5 text-left transition ${
                  paymentMethod === 'bank'
                    ? 'border-[#2F4860] bg-[#F2F8FF]'
                    : 'border-[#DCEEFF] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="font-bold text-[#2F4860]">
                      Virtual Account
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Transfer melalui virtual account
                    </p>
                  </div>

                  <div className="text-2xl">
                    🏦
                  </div>

                </div>
              </button>

            </div>

            {/* Prototype Notice */}
            <div className="mt-8 rounded-xl bg-[#FFFFBF] p-5">
              <p className="font-semibold text-[#2F4860]">
                Mode Prototype
              </p>

              <p className="mt-1 text-sm leading-relaxed text-[#2F4860]">
                Pembayaran pada halaman ini hanya simulasi
                untuk keperluan demo prototype Mentify.
              </p>
            </div>

          </div>

        </div>

        {/* Order Summary */}
        <div>

          <div className="sticky top-6 rounded-2xl border border-[#DCEEFF] bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-[#2F4860]">
              Ringkasan Pesanan
            </h2>

            {/* Product */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#DCEEFF]">

              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">

                <p className="font-bold text-[#2F4860]">
                  {product.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {product.type} • {product.category}
                </p>

              </div>

            </div>

            {/* Price */}
            <div className="my-6 border-t border-gray-100" />

            <div className="space-y-4">

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Harga Produk
                </span>

                <span className="font-semibold text-[#2F4860]">
                  Rp{product.price.toLocaleString('id-ID')}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-500">
                  Biaya Layanan
                </span>

                <span className="font-semibold text-[#2F4860]">
                  Rp0
                </span>
              </div>

            </div>

            <div className="my-6 border-t border-gray-100" />

            <div className="flex items-end justify-between">

              <span className="text-gray-500">
                Total Pembayaran
              </span>

              <span className="text-2xl font-bold text-[#2F4860]">
                Rp{product.price.toLocaleString('id-ID')}
              </span>

            </div>

            <button
              onClick={handlePayment}
              className="mt-6 w-full rounded-xl bg-[#2F4860] px-6 py-4 font-bold text-white transition hover:bg-[#7DA7D9]"
            >
              Bayar Sekarang
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Dengan melanjutkan pembayaran, kamu menyetujui pembelian produk.
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ProductCheckout