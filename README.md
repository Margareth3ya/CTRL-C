# 🎓 CTRL-C — Sekolah Ku Project

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Inertia](https://img.shields.io/badge/Inertia.js-6E4AFF?style=for-the-badge&logo=inertia&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Proyek ini merupakan aplikasi berbasis **Laravel**, **React**, **Inertia.js**, dan **TailwindCSS** untuk mendukung pengembangan sistem sekolah modern.  
Didesain agar mudah dikembangkan, responsif, serta memiliki performa yang optimal.

---

## 🚀 Teknologi yang Digunakan
- ⚡ **Laravel** — Backend framework PHP
- ⚛️ **React** — Frontend interaktif
- 🌀 **Inertia.js** — Jembatan antara Laravel & React
- 🎨 **TailwindCSS** — Utility-first CSS framework

---

## 📦 Instalasi & Menjalankan Project

1. **Clone Repository**
   ```bash
   git clone https://github.com/Margareth3ya/CTRL-C.git
   cd CTRL-C
   ```

2. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Konfigurasi Environment**
   - Copy file `.env.example` menjadi `.env`
   - Atur database dan konfigurasi lain sesuai kebutuhan:
     ```bash
     php artisan key:generate
     ```

4. **Migrasi Database**
   ```bash
   php artisan migrate
   ```

5. **Jalankan Server**
   - Backend Laravel
     ```bash
     php artisan serve
     ```
   - Frontend React + Vite
     ```bash
     npm run dev
     ```

6. **Akses Aplikasi**
   ```
   http://127.0.0.1:8000
   ```

---

## 📌 Fitur Utama
- 🔑 Autentikasi pengguna (Login & Register)
- 📚 Manajemen data sekolah
- 🎨 Desain responsif dengan TailwindCSS
- ⚡ Integrasi penuh Laravel + React via Inertia

---

## 🤝 Kontribusi
Jika ingin berkontribusi:
1. Fork repo ini
2. Buat branch baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request 🎉

---

## 📝 Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).
