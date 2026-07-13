# Support Knowledge Base — Astro + Starlight

Docs site internal berbasis Markdown/MDX untuk tim support, dibangun dengan Astro + Starlight.

## Struktur

```
support-kb-astro/
├── astro.config.mjs        <- konfigurasi & menu sidebar
├── src/
│   ├── content.config.ts    <- jangan diedit, wiring collection Starlight
│   └── content/docs/        <- SEMUA KONTEN ADA DI SINI (edit file .md/.mdx)
│       ├── index.mdx
│       ├── guestchat/
│       │   ├── index.md
│       │   ├── channels.md
│       │   ├── ai-agent.mdx     <- pakai komponen <Tabs>, makanya .mdx
│       │   └── manage-conversations.md
│       └── pms/
│           └── guestbill-online-payment.md
├── package.json
└── dist/                    <- HASIL BUILD (output otomatis, jangan diedit manual)
```

## Cara Preview di Komputer Sendiri

Butuh Node.js 18+ terinstall.

```bash
cd support-kb-astro
npm install
npm run dev
```

Buka `http://localhost:4321`. Setiap file `.md`/`.mdx` disimpan, halaman auto-refresh.

## Cara Menambah Panduan Baru

1. Buat file `.md` (konten biasa) atau `.mdx` (kalau perlu komponen seperti Tabs/Card) di dalam `src/content/docs/`.
2. Wajib ada frontmatter minimal di bagian atas file:
   ```
   ---
   title: Judul Halaman
   ---
   ```
3. Daftarkan halaman itu di `astro.config.mjs`, bagian `sidebar:`.
4. Jalankan `npm run build` untuk generate ulang folder `dist/` (versi final untuk publish).

## Cara Publish / Hosting (tanpa login)

Output `dist/` adalah file statis, bisa di-host di mana saja:

- **Vercel / Netlify** — connect ke repo git, auto-detect Astro, auto-deploy tiap push (paling umum untuk Astro)
- **GitHub Pages** — perlu GitHub Action tambahan (Astro punya starter workflow resmi)
- **Server internal kantor** — copy folder `dist/` ke web server apa saja

## Catatan Konten

- Placeholder gambar (`image.png`) dari dokumen sumber asli **belum diganti** dengan gambar sungguhan — ditandai kotak peringatan kuning di tiap halaman yang butuh gambar. Simpan gambar asli di `src/assets/` lalu update link di file `.md`/`.mdx` terkait.
- Dua dokumen sumber awal ("Panduan Fitur GuestChat" dan "GuestChat: Semua Percakapan...") isinya tumpang tindih — dokumen kedua adalah versi lengkap dari yang pertama. Situs ini hanya memakai versi lengkap sebagai sumber, dipecah jadi beberapa halaman per topik.
- Search (Pagefind) otomatis ter-generate saat `npm run build` — tidak perlu setup tambahan.
