import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="animate-fade-up relative overflow-hidden rounded-3xl bg-[#F2F8FF] px-8 py-16 md:px-14 md:py-20">

        {/* Decorative Shapes */}
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FFFFBF] opacity-70" />

        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#7DA7D9] opacity-20" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">

          {/* Hero Text */}
          <div>
            <span className="inline-block rounded-full bg-[#FFFFBF] px-4 py-2 text-sm font-bold text-[#2F4860]">
              PLATFORM PENGEMBANGAN MAHASISWA
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#2F4860] md:text-6xl">
              Menang Lomba
              <span className="block text-[#7DA7D9]">
                Dimulai dari Persiapan.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              Mentify membantu mahasiswa mempersiapkan diri menghadapi
              berbagai kompetisi melalui mentor berpengalaman, karya
              pemenang, dan informasi lomba yang relevan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/competitions"
                className="rounded-xl bg-[#2F4860] px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#7DA7D9] hover:shadow-lg active:scale-95"
              >
                Cari Lomba →
              </Link>

              <Link
                to="/mentors"
                className="rounded-xl border-2 border-[#2F4860] bg-white px-6 py-3.5 font-bold text-[#2F4860] transition duration-300 hover:-translate-y-1 hover:bg-[#FFFFBF] active:scale-95"
              >
                Temukan Mentor
              </Link>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="animate-float relative">

            <div className="rounded-3xl border border-[#DCEEFF] bg-white p-6 shadow-xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold text-gray-400">
                    MENTIFY
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#2F4860]">
                    Persiapan Lomba
                  </h3>
                </div>

                <div className="rounded-full bg-[#FFFFBF] px-3 py-1 text-xs font-bold text-[#2F4860]">
                  🚀
                </div>

              </div>

              <div className="mt-6 space-y-3">

                {/* Step 1 */}
                <div className="flex items-center gap-4 rounded-xl bg-[#F2F8FF] p-4 transition duration-300 hover:translate-x-1 hover:shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl">
                    🏆
                  </div>

                  <div>
                    <p className="font-semibold text-[#2F4860]">
                      Cari Kompetisi
                    </p>

                    <p className="text-xs text-gray-500">
                      Temukan lomba yang sesuai
                    </p>
                  </div>

                  <span className="ml-auto text-green-500">
                    ✓
                  </span>

                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-4 rounded-xl bg-[#F2F8FF] p-4 transition duration-300 hover:translate-x-1 hover:shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl">
                    👨‍🏫
                  </div>

                  <div>
                    <p className="font-semibold text-[#2F4860]">
                      Temukan Mentor
                    </p>

                    <p className="text-xs text-gray-500">
                      Belajar dari pengalaman
                    </p>
                  </div>

                  <span className="ml-auto text-green-500">
                    ✓
                  </span>

                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 rounded-xl bg-[#FFFFBF] p-4 transition duration-300 hover:translate-x-1 hover:shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-xl">
                    📚
                  </div>

                  <div>
                    <p className="font-semibold text-[#2F4860]">
                      Pelajari Karya Pemenang
                    </p>

                    <p className="text-xs text-gray-500">
                      Jadikan referensi belajarmu
                    </p>
                  </div>

                  <span className="ml-auto text-[#2F4860]">
                    →
                  </span>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="mt-10 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7DA7D9] hover:shadow-md">
          <p className="text-3xl font-bold text-[#2F4860]">
            50+
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Mentor Berpengalaman
          </p>
        </div>

        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7DA7D9] hover:shadow-md">
          <p className="text-3xl font-bold text-[#2F4860]">
            100+
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Karya & Referensi
          </p>
        </div>

        <div className="rounded-2xl border border-[#DCEEFF] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7DA7D9] hover:shadow-md">
          <p className="text-3xl font-bold text-[#2F4860]">
            30+
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Kompetisi Mahasiswa
          </p>
        </div>

      </section>


      {/* FITUR UTAMA */}
      <section className="mt-20">

        <div className="text-center">

          <p className="font-semibold text-[#7DA7D9]">
            APA YANG KAMU BUTUHKAN?
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#2F4860] md:text-4xl">
            Semua Persiapan Lomba dalam Satu Platform
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Mulai dari menemukan kompetisi hingga mempelajari karya
            pemenang dan mendapatkan bimbingan dari mentor.
          </p>

        </div>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Cari Lomba */}
          <Link
            to="/competitions"
            className="group rounded-2xl border border-[#DCEEFF] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7DA7D9] hover:bg-[#FCFEFF] hover:shadow-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2F8FF] text-3xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
              🏆
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#2F4860]">
              Cari Lomba
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Temukan berbagai kompetisi mahasiswa berdasarkan bidang,
              kategori, dan kebutuhanmu.
            </p>

            <p className="mt-5 font-semibold text-[#7DA7D9]">
              Jelajahi Lomba →
            </p>

          </Link>


          {/* Mentor */}
          <Link
            to="/mentors"
            className="group rounded-2xl border border-[#DCEEFF] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7DA7D9] hover:bg-[#FCFEFF] hover:shadow-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2F8FF] text-3xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
              👨‍🏫
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#2F4860]">
              Belajar dari Mentor
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Dapatkan bimbingan dari mentor yang berpengalaman dalam
              berbagai kompetisi mahasiswa.
            </p>

            <p className="mt-5 font-semibold text-[#7DA7D9]">
              Cari Mentor →
            </p>

          </Link>


          {/* Karya */}
          <Link
            to="/products"
            className="group rounded-2xl border border-[#DCEEFF] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#7DA7D9] hover:bg-[#FCFEFF] hover:shadow-xl"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F2F8FF] text-3xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
              📚
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#2F4860]">
              Pelajari Karya Pemenang
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Jadikan karya pemenang dari berbagai kompetisi sebagai
              referensi untuk meningkatkan kualitas karyamu.
            </p>

            <p className="mt-5 font-semibold text-[#7DA7D9]">
              Lihat Karya →
            </p>

          </Link>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="mt-20 rounded-3xl bg-[#2F4860] px-8 py-14 text-white md:px-14">

        <div className="text-center">

          <p className="font-semibold text-[#FFFFBF]">
            CARA KERJA
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Dari Cari Lomba sampai Siap Bertanding
          </h2>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-4">

          <div className="text-center transition duration-300 hover:-translate-y-2">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFBF] font-bold text-[#2F4860]">
              1
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Temukan Lomba
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#F2F8FF]">
              Cari kompetisi yang sesuai dengan minat dan kemampuanmu.
            </p>

          </div>


          <div className="text-center transition duration-300 hover:-translate-y-2">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFBF] font-bold text-[#2F4860]">
              2
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Cari Mentor
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#F2F8FF]">
              Dapatkan bimbingan dari orang yang sudah berpengalaman.
            </p>

          </div>


          <div className="text-center transition duration-300 hover:-translate-y-2">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFBF] font-bold text-[#2F4860]">
              3
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Pelajari Karya
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#F2F8FF]">
              Pelajari karya pemenang sebagai bahan belajar dan referensi.
            </p>

          </div>


          <div className="text-center transition duration-300 hover:-translate-y-2">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFFFBF] font-bold text-[#2F4860]">
              4
            </div>

            <h3 className="mt-5 text-lg font-bold">
              Ikuti Kompetisi
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#F2F8FF]">
              Terapkan ilmu dan persiapkan karya terbaikmu.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="mt-20 rounded-3xl bg-[#F2F8FF] px-8 py-14 text-center">

        <p className="font-semibold text-[#7DA7D9]">
          SIAP BERKEMBANG?
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#2F4860] md:text-4xl">
          Temukan Kompetisi Pertamamu
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Mulai persiapkan dirimu dengan mentor dan referensi karya
          terbaik dari berbagai kompetisi mahasiswa.
        </p>

        <Link
          to="/competitions"
          className="mt-7 inline-block rounded-xl bg-[#2F4860] px-7 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#7DA7D9] hover:shadow-lg active:scale-95"
        >
          Jelajahi Kompetisi →
        </Link>

      </section>

    </div>
  )
}

export default Home