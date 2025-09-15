import React, { useState } from "react";

export default function Rekomendasi() {
    const [keyword, setKeyword] = useState("");
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const popularKeywords = [
        "Programming",
        "Desain Grafis",
        "Mesin",
        "Multimedia",
        "Jaringan",
        "Animasi",
    ];

    const handleSelectKeyword = (kw) => {
        setKeyword(kw);
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            const departments = [
                {
                    name: "Rekayasa Perangkat Lunak",
                    department: "TIK",
                    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3",
                    description: "Jurusan ini fokus pada pemrograman dan TI."
                },
                {
                    name: "Teknik Pemesinan",
                    department: "Pemesinan",
                    image: "https://images.unsplash.com/photo-1581094288338-231b058b38b8?ixlib=rb-4.0.3",
                    description: "Jurusan ini mempelajari mesin dan teknik manufaktur."
                },
                {
                    name: "Desain Komunikasi Visual",
                    department: "DKV",
                    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3",
                    description: "Jurusan ini fokus pada desain grafis dan multimedia."
                },
            ];
            const randomResult = departments[Math.floor(Math.random() * departments.length)];
            setResult(randomResult);
            setIsLoading(false);
            setShowResult(true);
        }, 1500);
    };

    const handleReset = () => {
        setShowResult(false);
        setKeyword("");
        setTimeout(() => {
            setResult(null);
        }, 500);
    };

    return (
        <section className="w-full py-16 bg-white flex justify-center">
            <div className="w-full max-w-6xl px-4 flex flex-col lg:flex-row gap-12">
                {/* Kiri */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {!showResult ? (
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                TEMUKAN JURUSAN
                            </h2>
                            <div className="text-3xl md:text-4xl font-bebas text-orange-400 mb-6">
                                TEPAT UNTUKMU
                            </div>
                            <p className="text-lg text-gray-700 mb-8">
                                Belum tahu jurusan apa yang cocok?<br />
                                Masih bingung pilih jurusan?<br />
                                Tenang, kita bantu.<br />
                                Isi form di samping dan dapatkan rekomendasi jurusan.
                            </p>
                        </div>
                    ) : (
                        <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                REKOMENDASI KAMI
                            </h2>
                            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
                            {result && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-800">{result.name}</h3>
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mt-2">
                                            {result.department}
                                        </span>
                                    </div>
                                    <div className="relative overflow-hidden rounded-xl">
                                        <img
                                            src={result.image}
                                            alt={result.name}
                                            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Form Kanan */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    {!showResult && (
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mb-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                Ceritakan Minatmu
                            </h3>

                            <div className="mb-6 relative">
                                <label className="block text-gray-700 mb-2">Keyword</label>
                                <input
                                    type="text"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onFocus={() => setShowDropdown(true)}
                                    placeholder="Keyword yang sering didengar..."
                                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                />
                                {showDropdown && (
                                    <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-md">
                                        {popularKeywords
                                            .filter((kw) =>
                                                kw.toLowerCase().includes(keyword.toLowerCase())
                                            )
                                            .map((kw, idx) => (
                                                <li
                                                    key={idx}
                                                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                                                    onClick={() => handleSelectKeyword(kw)}
                                                >
                                                    {kw}
                                                </li>
                                            ))}
                                    </ul>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-lg font-medium text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                                                1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Memproses...
                                    </>
                                ) : (
                                    "DAPATKAN REKOMENDASI"
                                )}
                            </button>
                        </form>
                    )}

                    {showResult && (
                        <div className="w-full max-w-md text-center animate-fade-in">
                            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Rekomendasi Lainnya</h3>
                                <p className="text-gray-600 mb-6">
                                    Ingin menjelajahi opsi jurusan lainnya? Klik tombol di bawah untuk mencoba lagi.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                                >
                                    Cari Rekomendasi Baru
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
