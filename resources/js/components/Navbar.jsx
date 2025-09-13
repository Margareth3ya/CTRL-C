import { useState } from "react";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src="https://i.ibb.co.com/MkPkNv4c/Logo-Sekolah.png" alt="Logo" className="h-8 w-15" />
                    <span className="font-bold text-lg">SKARIGA</span>
                </div>

                {/* Hamburger Menu */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-2xl focus:outline-none"
                >
                    ☰
                </button>

                {/* Menu (desktop) */}
                <ul className="hidden lg:flex space-x-6 font-medium">
                    <li>
                        <a href="/" className="hover:text-orange-500">
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a href="/profile" className="hover:text-orange-500">
                            Profile
                        </a>
                    </li>

                    {/* Dropdown Program */}
                    <li className="relative">
                        <button
                            onClick={() => toggleDropdown("program")}
                            className="hover:text-orange-500 flex items-center"
                        >
                            Program <span className="ml-1">{openDropdown === "program" ? "▾" : "▴"}</span>
                        </button>
                        <div
                            className={`absolute bg-white shadow-lg rounded mt-2 py-2 w-40 transform transition-all duration-200 origin-top
            ${openDropdown === "program" ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} `}
                        >
                            <a href="/" className="block px-4 py-2 rounded hover:bg-orange-100">
                                Organisasi
                            </a>
                            <a href="/" className="block px-4 py-2 rounded hover:bg-orange-100">
                                Jurusan
                            </a>
                        </div>
                    </li>

                    {/* Dropdown Informasi */}
                    <li className="relative">
                        <button
                            onClick={() => toggleDropdown("informasi")}
                            className="hover:text-orange-500 flex items-center"
                        >
                            Informasi <span className="ml-1">{openDropdown === "informasi" ? "▾" : "▴"}</span>
                        </button>
                        <div
                            className={`absolute bg-white shadow-lg rounded mt-2 py-2 w-48 transform transition-all duration-200 origin-top
                            ${openDropdown === "informasi" ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`} >
                            <a href="/" className="block px-4 py-2 rounded hover:bg-orange-100">
                                Berita
                            </a>
                            <a href="/" className="block px-4 py-2 rounded hover:bg-orange-100">
                                Kegiatan
                            </a>
                            <a href="/" className="block px-4 py-2 rounded hover:bg-orange-100">
                                Informasi SSB
                            </a>
                            <a href="/" className="block px-4 py-2 rounded hover:bg-orange-100">
                                Prestasi
                            </a>
                        </div>
                    </li>

                    <li>
                        <a href="/" className="hover:text-orange-500">
                            Kontak Kami
                        </a>
                    </li>
                </ul>
            </div>

            {/* Menu (mobile) */}
            <div
                className={`lg:hidden bg-white border-t transition-all duration-300 overflow-hidden 
        ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col font-medium p-4 space-y-2">
                    <li>
                        <a href="/" className="block hover:bg-orange-100 px-3 py-2 rounded">
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a href="/" className="block hover:bg-orange-100 px-3 py-2 rounded">
                            Profile
                        </a>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="cursor-pointer px-3 py-2 hover:bg-orange-100 rounded">
                                Program
                            </summary>
                            <ul className="pl-4 mt-1 space-y-1">
                                <li>
                                    <a href="/" className="block px-3 py-2 rounded hover:bg-orange-100">
                                        Organisasi
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block px-3 py-2 rounded hover:bg-orange-100">
                                        Jurusan
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="cursor-pointer px-3 py-2 hover:bg-orange-100 rounded">
                                Informasi
                            </summary>
                            <ul className="pl-4 mt-1 space-y-1">
                                <li>
                                    <a href="/" className="block px-3 py-2 rounded hover:bg-orange-100">
                                        Berita
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block px-3 py-2 rounded hover:bg-orange-100">
                                        Kegiatan
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block px-3 py-2 rounded hover:bg-orange-100">
                                        Informasi SSB
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="block px-3 py-2 rounded hover:bg-orange-100">
                                        Prestasi
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a href="#" className="block hover:bg-orange-100 px-3 py-2 rounded">
                            Kontak Kami
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
