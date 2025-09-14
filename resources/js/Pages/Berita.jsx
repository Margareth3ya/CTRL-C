import React from "react";
import { Link } from "@inertiajs/react"; // ✅ gunakan Inertia Link
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Berita1 from "../assets/Berita1.png";
import Berita2 from "../assets/Berita2.png";
import Berita3 from "../assets/Berita3.png";

const BeritaSection = () => {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <Navbar />

      {/* ===== Section 1 ===== */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 md:mb-12 text-center">
            BERITA TERBARU
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Gambar Besar Kiri */}
            {/* Gambar Besar Kiri */}
              <Link
                href="/berita-lengkap"
                className="lg:w-2/3 group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative w-full h-64 md:h-[500px]">
                  <img
                    src={Berita1}
                    alt="Berita 1"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay muncul saat hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                      SMK PGRI 3 Malang Raih Emas & Perak LKS Nasional 2025
                    </h3>
                    <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                      MALANG POSCO MEDIA, MALANG – SMK PGRI 3 Malang (SKARIGA) berhasil
                      mempertahankan medali emas di Lomba Kompetensi Siswa (LKS) Nasional.
                    </p>
                    <span className="text-blue-400 font-medium text-sm mt-1 inline-block">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>


            {/* Dua Card di Kanan */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* Card 1 */}
              <div
                className="flex flex-1 bg-white rounded-xl shadow-md overflow-hidden 
                            hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300"
              >
                <img
                  className="w-1/3 h-full object-cover"
                  src={Berita2}
                  alt="Berita 2"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                      Gubernur Jatim Apresiasi Skariga Bentuk Karakter
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Gubernur Jawa Timur, Khofifah Indar Parawansa menyatakan
                      keyakinannya bahwa dunia pendidikan Sekolah Menengah
                      Kejuruan (SMK)…
                    </p>
                  </div>
                  <Link
                    href="/berita-2"
                    className="text-blue-500 font-medium text-sm mt-2 inline-block"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="flex flex-1 bg-white rounded-xl shadow-md overflow-hidden 
                            hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300"
              >
                <img
                  className="w-1/3 h-full object-cover"
                  src={Berita3}
                  alt="Berita 3"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                      Pembekalan PKL Kelas XI Skariga, Tanamkan Disiplin
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Ratusan siswa kelas XI SMK PGRI 3 Malang siap berangkat
                      melaksanakan tugas Praktik Kerja Lapangan (PKL).
                    </p>
                  </div>
                  <Link
                    href="/berita-3"
                    className="text-blue-500 font-medium text-sm mt-2 inline-block"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Gambar Besar Kiri */}
            {/* Gambar Besar Kiri */}
              <Link
                href="/berita-lengkap"
                className="lg:w-2/3 group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative w-full h-64 md:h-[500px]">
                  <img
                    src={Berita1}
                    alt="Berita 1"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay muncul saat hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                      SMK PGRI 3 Malang Raih Emas & Perak LKS Nasional 2025
                    </h3>
                    <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                      MALANG POSCO MEDIA, MALANG – SMK PGRI 3 Malang (SKARIGA) berhasil
                      mempertahankan medali emas di Lomba Kompetensi Siswa (LKS) Nasional.
                    </p>
                    <span className="text-blue-400 font-medium text-sm mt-1 inline-block">
                      Baca Selengkapnya →
                    </span>
                  </div>
                </div>
              </Link>


            {/* Dua Card di Kanan */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* Card 1 */}
              <div
                className="flex flex-1 bg-white rounded-xl shadow-md overflow-hidden 
                            hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300"
              >
                <img
                  className="w-1/3 h-full object-cover"
                  src={Berita2}
                  alt="Berita 2"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                      Gubernur Jatim Apresiasi Skariga Bentuk Karakter
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Gubernur Jawa Timur, Khofifah Indar Parawansa menyatakan
                      keyakinannya bahwa dunia pendidikan Sekolah Menengah
                      Kejuruan (SMK)…
                    </p>
                  </div>
                  <Link
                    href="/berita-2"
                    className="text-blue-500 font-medium text-sm mt-2 inline-block"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="flex flex-1 bg-white rounded-xl shadow-md overflow-hidden 
                            hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300"
              >
                <img
                  className="w-1/3 h-full object-cover"
                  src={Berita3}
                  alt="Berita 3"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                      Pembekalan PKL Kelas XI Skariga, Tanamkan Disiplin
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Ratusan siswa kelas XI SMK PGRI 3 Malang siap berangkat
                      melaksanakan tugas Praktik Kerja Lapangan (PKL).
                    </p>
                  </div>
                  <Link
                    href="/berita-3"
                    className="text-blue-500 font-medium text-sm mt-2 inline-block"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </section>


      {/* Line Clamp CSS */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BeritaSection;
