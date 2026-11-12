# Laboratory Inventory & Borrowing Management System

> **Sistem Digital Manajemen Inventaris dan Sirkulasi Peminjaman Peralatan Laboratorium Komputer**  
> Dirancang dengan standar Enterprise SaaS, Clean UI/UX, Keamanan Bertingkat (Role-Based Access Control), dan Terintegrasi Supabase Cloud PostgreSQL.

---

## 📌 Ringkasan Proyek

Aplikasi **Laboratory Inventory & Borrowing Management System** adalah solusi full-stack profesional untuk mengelola inventaris perangkat laboratorium komputer, pencatatan transaksi peminjaman multi-item, pemrosesan pengembalian barang secara parsial maupun penuh, serta audit dan kontrol akses staf laboratorium.

Aplikasi ini dapat diakses secara publik dan siap dideploy ke **Vercel** dengan arsitektur backend PostgreSQL di **Supabase**.

---

## 🚀 Demo & Kredensial Pengujian (Poin 17)

Sistem telah dilengkapi dengan dua akun demo resmi yang siap digunakan oleh dosen/evaluator:

| Role | Email / Akun | Password | Hak Akses Utama |
|---|---|---|---|
| **Admin** | `margaretta@lab.com` | `Retta123!` | CRUD Barang penuh, Manajemen Akun Staf (Aktif/Nonaktif), Audit Log, Akses seluruh laporan |
| **Staff** | `dwi@lab.com` | `StaffDwi123!` | Katalog stok read-only, Pencatatan Peminjaman Multi-Item, Pemrosesan Pengembalian, Cetak Slip Bukti |

> 💡 **Fitur Pengujian Cepat (1-Click Demo Login):**  
> Pada halaman login, tersedia tombol cepat *"Login Admin"* dan *"Login Staff"* untuk langsung mengautentikasi dan menguji sistem tanpa perlu mengetik manual.

---

## 🛠️ Teknologi & Arsitektur

- **Frontend Core:** React 18 + Vite (TypeScript)
- **Styling & Design System:** Tailwind CSS
  - Primary Navy Blue: `#1E3A5F`
  - Secondary Accent Blue: `#2563EB`
  - Background: `#F5F7FB`
  - Card: `#FFFFFF`
  - Status Colors: Emerald Green `#16A34A`, Amber Warning `#F59E0B`, Danger Red `#DC2626`
- **Iconography:** Lucide React
- **Cloud Backend & Database:** Supabase Cloud (PostgreSQL 15+)
- **Otentikasi:** Supabase Auth (Email & Password)
- **Dual-Engine Resilience:** Aplikasi dilengkapi sinkronisasi cloud Supabase serta fallback penyimpanan persisten browser (localStorage + BroadcastChannel multi-tab sync) sehingga aplikasi tetap 100% berfungsi normal baik saat offline maupun online.
- **Hosting / Deployment:** Vercel (disertai konfigurasi `vercel.json` untuk SPA client-side routing)

---

## 📋 Fitur Utama Sistem

### 1. Autentikasi & Otorisasi Ketat (RBAC)
- Otentikasi berbasis email Supabase Auth.
- Input password dilengkapi tombol Show/Hide Password.
- Pembatasan rute dan otorisasi: Staf tidak diperbolehkan menghapus barang, mengubah hak akses, atau mengelola pengguna.
- Pencegahan Admin menonaktifkan akun miliknya sendiri saat sedang login.

### 2. Dashboard Eksekutif Admin
- **4 Kartu Statistik Real-Time:** Total Barang, Barang Tersedia, Barang Sedang Dipinjam, Total Transaksi.
- **Grafik Aktivitas Peminjaman:** Visualisasi mingguan tren transaksi.
- **Grafik Distribusi Kategori:** Analisis proporsi stok alat per kategori.
- **Peringatan Stok Rendah (Low Stock Alert):** Deteksi otomatis barang dengan stok $\le 2$ unit.
- **Audit Log Aktivitas:** Rekam jejak seluruh mutasi inventaris dan perubahan staf.

### 3. Dashboard Operasional Staf
- **4 Kartu Operasional:** Barang Tersedia, Barang Sedang Dipinjam, Transaksi yang Diproses Staf, Total Pengembalian Selesai.
- **Tombol Aksi Cepat:** Pintasan langsung ke form peminjaman dan pemrosesan pengembalian.
- **Katalog Barang Siap Pinjam:** Pemantauan langsung stok peralatan yang tersedia.

### 4. Manajemen Inventaris (Inventory Management)
- Tabel data inventaris lengkap: Nomor, Kode Barang, Nama, Kategori, Total Stok, Stok Tersedia, Status Badge (*Available*, *Low Stock*, *Out of Stock*), dan Aksi.
- Pencarian cerdas berdasarkan Kode Barang atau Nama Barang.
- Filter multi-kategori (Komputer, Peripheral, Display, Networking, Accessories).
- Modal Tambah dan Edit Barang dengan validasi otomatis (Admin only).
- Dialog konfirmasi hapus permanen dengan pencegahan jika barang masih memiliki peminjaman aktif.

### 5. Manajemen Peminjaman (Borrowing Management)
- **Multi-Item Support:** Satu formulir transaksi dapat meminjam lebih dari satu jenis barang sekaligus.
- **Validasi Stok Real-Time:** Mencegah peminjaman melebihi stok yang tersedia.
- **Generator Kode Transaksi Unik:** Format standar universitas `TRX-YYYYMMDD-XXX`.
- **Pengurangan Stok Otomatis:** Stok berkurang seketika begitu transaksi disimpan.
- **Cetak Bukti Resmi:** Fitur cetak slip bukti peminjaman berformat standar laboratorium kampus yang siap dicetak fisik atau disimpan ke format PDF (`window.print()`).

### 6. Manajemen Pengembalian (Return Management)
- Daftar peminjaman aktif yang belum tuntas.
- **Dukungan Pengembalian Parsial:** Peminjam dapat mengembalikan sebagian barang terlebih dahulu (misal: 1 dari 2 unit); sisa unit tetap tercatat dalam status aktif.
- **Pencegahan Pengembalian Ganda (Double-Return Safe):** Validasi kuantitas memastikan stok tidak bertambah dua kali lipat.
- Pembaruan status transaksi otomatis menjadi `SELESAI` saat seluruh barang kembali.
- Pencatatan catatan kondisi barang dan nama staf pemeriksa.

### 7. Manajemen Pengguna (User Management - Admin Only)
- Pembuatan akun Staf baru secara aman tanpa registrasi publik.
- Pengaturan aktif / nonaktif akun Staf dengan satu tombol.
- Edit informasi nama lengkap dan reset password staf.

### 8. Riwayat Transaksi & Laporan (Transaction History)
- Riwayat seluruh transaksi peminjaman dan pengembalian.
- Filter berdasarkan status (`DIPINJAM`, `SELESAI`, `TERLAMBAT`).
- Filter rentang tanggal peminjaman.
- Fitur Pagination dan Ekspor Laporan ke format **CSV / Excel**.

---

## 📦 Data Awal Wajib (Poin 12)

Sistem telah diisi dengan 5 data barang wajib awal beserta kategori lengkap:

| Kode | Nama Barang | Kategori | Total Stok | Stok Tersedia |
|---|---|---|---|---|
| **BR001** | Laptop Lenovo | Komputer | 5 | 4 |
| **BR002** | Mouse Logitech | Peripheral | 10 | 8 |
| **BR003** | Keyboard Mechanical | Peripheral | 8 | 8 |
| **BR004** | Proyektor Epson | Display | 3 | 3 |
| **BR005** | Monitor LG | Display | 6 | 6 |
| **BR006** | Cisco Router 2901 | Networking | 4 | 4 |
| **BR007** | Switch TP-Link 24-Port | Networking | 5 | 5 |
| **BR008** | Toolkit Jaringan & LAN Tester | Accessories | 12 | 12 |
| **BR009** | Kabel HDMI 5 Meter | Accessories | 15 | 15 |

---

## 💻 Panduan Menjalankan di Komputer Lokal

### Prasyarat
- Node.js versi 18 ke atas (disarankan versi 20 atau 22).

### Langkah Instalasi:
1. Masuk ke direktori proyek:
   ```bash
   cd lab-inventory-system
   ```
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembang lokal:
   ```bash
   npm run dev
   ```
4. Buka peramban di alamat `http://localhost:5173`.
5. Untuk menguji build produksi:
   ```bash
   npm run build
   npm run preview
   ```

---

## ☁️ Panduan Menghubungkan ke Database Supabase

Jika ingin menghubungkan ke project database Supabase Anda sendiri:

1. Buat project baru di [supabase.com](https://supabase.com).
2. Buka menu **SQL Editor** pada dashboard Supabase Anda.
3. Buka file `supabase_schema.sql` pada proyek ini, salin seluruh isinya, lalu klik **Run** di SQL Editor Supabase.
4. Buka file `supabase_seed.sql`, salin seluruh isinya, lalu klik **Run** untuk memasukkan data awal barang dan transaksi.
5. Salin file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
6. Isi variabel lingkungan:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```
7. Aplikasi juga memiliki menu **Database Config Modal** (ikon database di navbar) untuk memasukkan konfigurasi Supabase secara langsung di browser tanpa build ulang!

---

## 🌐 Panduan Deployment ke Vercel

Aplikasi ini sudah 100% siap untuk di-deploy ke Vercel:

### Metode 1: Menggunakan Vercel Dashboard (Rekomendasi)
1. Push folder proyek ke repository GitHub Anda (`git push origin main`).
2. Masuk ke akun Anda di [vercel.com](https://vercel.com).
3. Klik **Add New Project** dan pilih repository GitHub Anda.
4. Pada bagian **Build and Output Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. (Opsional) Masukkan Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Klik **Deploy**. URL publik Anda akan aktif dalam hitungan detik.

### Metode 2: Menggunakan Vercel CLI
```bash
npm install -g vercel
vercel
vercel --prod
```

---

## 📂 Struktur Direktori Proyek

```
lab-inventory-system/
├── dist/                     # Bundle build produksi yang telah diverifikasi
├── src/
│   ├── components/           # Komponen UI modular
│   │   ├── ConfirmDialog.tsx       # Dialog konfirmasi aksi berbahaya
│   │   ├── DatabaseConfigModal.tsx # Panel pengaturan database Supabase & Backup JSON
│   │   ├── Modal.tsx               # Modal dialog generik
│   │   ├── Navbar.tsx              # Top navigation bar & indikator cloud
│   │   ├── NotificationToast.tsx   # Toast notification feedback
│   │   ├── PrintLoanSlip.tsx       # Bukti peminjaman resmi siap cetak / PDF
│   │   ├── Sidebar.tsx             # Sidebar navigasi responsif & collapsible
│   │   └── StatCard.tsx            # Komponen kartu statistik metrik lab
│   ├── context/              # State management & React Context
│   │   ├── AppContext.tsx          # Operasi CRUD, validasi stok, peminjaman & pengembalian
│   │   └── AuthContext.tsx         # Otentikasi Supabase & Role Guarding (Admin/Staff)
│   ├── data/
│   │   └── initialData.ts          # 5 Data awal barang wajib & akun demo
│   ├── services/
│   │   ├── storage.ts              # Persistent Storage Engine & BroadcastChannel Sync
│   │   └── supabase.ts             # Supabase Client & SQL Schema Definition
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces & types
│   ├── views/                # Halaman aplikasi
│   │   ├── BorrowingView.tsx       # Peminjaman barang multi-item & cetak slip
│   │   ├── DashboardView.tsx       # Dashboard eksekutif Admin & operasional Staff
│   │   ├── HistoryView.tsx         # Riwayat transaksi, filter tanggal & ekspor CSV
│   │   ├── InventoryView.tsx       # CRUD data barang & filter kategori
│   │   ├── LoginView.tsx           # Halaman login dengan ilustrasi & 1-click demo
│   │   ├── ReturnView.tsx          # Pemrosesan pengembalian barang & restock
│   │   └── UsersView.tsx           # Manajemen staf & kontrol status akun
│   ├── App.tsx               # Root component & routing
│   ├── index.css             # Tailwind CSS & print media styles
│   ├── main.tsx              # Application entry point
│   └── vite-env.d.ts         # Vite TypeScript environment declarations
├── .env.example              # Contoh variabel lingkungan
├── index.html                # HTML entry point dengan font Plus Jakarta Sans
├── package.json              # Dependensi & skrip npm
├── supabase_schema.sql       # Skrip DDL PostgreSQL lengkap untuk Supabase
├── supabase_seed.sql         # Skrip DML Seed Data barang & transaksi awal
├── tailwind.config.js        # Konfigurasi color palette spesifik (Navy #1E3A5F)
├── tsconfig.json             # Konfigurasi TypeScript
└── vercel.json               # Konfigurasi Vercel SPA Rewrites
```

---

## 🔒 Jaminan Keamanan & Integritas Data

1. **Pencegahan Peminjaman Melebihi Stok:** Sistem memverifikasi stok barang sebelum menyimpan transaksi. Permintaan yang melebihi kuota stok tersedia akan ditolak.
2. **Pencegahan Pengembalian Ganda:** Fungsi pengembalian membatasi kuantitas maksimal yang dapat dikembalikan sesuai dengan sisa unit yang belum kembali. Stok dijamin tidak bertambah ganda.
3. **Pencegahan Penghapusan Barang Aktif:** Barang yang sedang dalam masa peminjaman aktif dilindungi dari penghapusan.
4. **Isolasi Hak Akses Staf:** Fitur sensitif seperti manajemen pengguna dan CRUD barang terkunci di tingkat tampilan, context, dan aturan keamanan database (RLS).
