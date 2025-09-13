import { useEffect, useState } from "react";
import {
    Facebook,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

const logos1 = ["/lg.png", "/alfamart.png", "/daihatsu.png", "/pjb.png"];
const logos2 = ["/jagoan.png", "/asco.png", "/autochem.png", "/japfa.png"];

export default function Footer() {
    const [offset1, setOffset1] = useState(0);
    const [offset2, setOffset2] = useState(0);

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const direction = currentScroll > lastScroll ? 1 : -1;

            setOffset1((prev) => prev + 40 * direction);
            setOffset2((prev) => prev - 40 * direction);

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="mt-16">
            {/* ================= KERJASAMA INDUSTRI ================= */}
            <section className="overflow-hidden py-10 bg-white">
                <h2 className="text-center text-2xl font-bold mb-6">
                    KERJASAMA INDUSTRI
                </h2>
                <div
                    className="flex gap-12 mb-6 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${offset1}px)` }}
                >
                    {logos1.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="logo"
                            className="h-16 object-contain hover:scale-110 transition-transform"
                        />
                    ))}
                </div>
                <div
                    className="flex gap-12 transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(${offset2}px)` }}
                >
                    {logos2.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="logo"
                            className="h-16 object-contain hover:scale-110 transition-transform"
                        />
                    ))}
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-neutral-900 text-gray-300 py-2 px-6 rounded-4xl">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4 mt-20">
                            <img
                                src="https://i.ibb.co.com/MkPkNv4c/Logo-Sekolah.png"
                                alt="logo"
                                className="h-14 mr-3"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">SKARIGA</h3>
                                <p className="text-sm text-orange-400">Success By Discipline</p>
                            </div>
                        </div>

                        <p className="text-sm mb-4">
                            Sekolah Kejuruan yang berfokus pada pembentukan siswa cerdas, terampil, dan berkarakter.
                        </p>

                        <p className="mt-4 mb-2 text-white">Social Media :</p>
                        <div className="flex gap-3">
                            <a href="#" className="hover:text-orange-400 transition-colors">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-orange-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Tentang Sekolah */}
                        <div>
                            <h3 className="font-semibold text-white mb-4 mt-20 text-lg">Tentang Sekolah</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Beranda</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Profil</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Jurusan</a></li>
                            </ul>
                        </div>

                        {/* Informasi & Layanan */}
                        <div>
                            <h3 className="font-semibold text-white mb-4 mt-20 text-lg">Informasi & Layanan</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Ekstrakurikuler</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Berita</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Pendaftaran</a></li>
                                <li><a href="#" className="hover:text-orange-400 transition-colors text-sm">Kegiatan</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row-span-2 mt-20">
                        <h3 className="font-semibold text-white text-lg">Kontak Kami</h3>
                        <p className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span>Jl. Raya Tlogomas Gg 9 No.29, Tlogomas, Lowokwaru, Malang, Jawa Timur</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <span>(0341) 586383</span>
                        </p>
                        <p className="flex items-center mt-2 gap-2">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <a
                                href="mailto:mail.smkpgri3malang@gmail.com"
                                className="hover:text-blue-400 transition-colors"
                            >
                                mail.smkpgri3malang@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Map */}
                    <div className="space-y-4 mt-20 text-sm">
                        <div className="pt-2">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3141822078886!2d112.60827657478438!3d-7.966366792046811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882865d069f23%3A0xef5e93c2e40da5f1!2sSMK%20PGRI%203%20Malang!5e0!3m2!1sen!2sid!4v1643011579952!5m2!1sen!2sid"
                                className="w-full h-40 rounded-lg border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="col-span-5 row-start-5 max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} SKARIGA. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}