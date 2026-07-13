---
title: Setup Guestbill / Online Payment (PMS)
description: Cara setup dan menggunakan fitur pembayaran online di PMS
---

Fitur Guestbill / Online Payment memungkinkan property membuat tagihan online untuk tamu langsung dari PMS. Setelah tagihan dibuat, sistem menghasilkan QR code dan link pembayaran yang bisa ditunjukkan atau dikirim ke tamu. Tamu tinggal scan QR atau membuka link, lalu menyelesaikan pembayaran secara online.

:::note[Alur Cepat]
**Cek Payment Method di GRB** → **Setup Payment Method di PMS** → **Hubungkan PMS dengan GRB** → **Siap digunakan**
:::

:::caution[Sebelum Mulai]
Pastikan Payment Method yang ingin digunakan sudah di-setup dan berstatus **Active** di GRB terlebih dahulu. Jika payment method belum aktif di GRB, proses di PMS tidak akan berfungsi.
:::

## Tahap 1 — Cek Payment Method di GRB

Pastikan payment method yang diinginkan sudah aktif di sisi GRB.

1. Login ke GRB, buka menu **Payment Method** (di dalam **Booking Engine & Website**).
2. Di tab **Payment Gateway**, cek daftar payment gateway. Pastikan gateway yang ingin dipakai menunjukkan status **Active** di kolom Status.
3. Pindah ke tab **Payment Channel**, pastikan payment channel yang ingin dipakai juga berstatus **Active**.

:::danger[Penting]
Jika status masih **Inactive**, aktifkan terlebih dahulu sebelum lanjut ke tahap berikutnya.
:::

## Tahap 2 — Setup Payment Method di PMS

Setelah payment method di GRB aktif, lanjutkan ke PMS untuk membuat payment method baru.

1. Login ke PMS, buka menu **Master Data → Payment Method**.
2. Di halaman Payment Method, klik tombol **ADD NEW** untuk menambah payment method baru.
3. Isi form sesuai kebutuhan property. Field yang bisa disesuaikan: **Name**, **Payment Account**, **Assign to**, dan lainnya.

:::danger[Wajib Diperhatikan]
Untuk field **Payment Method Type**, pilih **Payment Integration**. Field ini **tidak boleh** diisi dengan pilihan lain, karena inilah yang menghubungkan payment ke sistem online.
:::

4. Setelah semua terisi, simpan payment method tersebut.

## Tahap 3 — Hubungkan PMS dengan GRB

Payment method yang baru dibuat di PMS perlu dihubungkan (mapping) ke payment method di GRB.

1. Kembali ke dashboard GRB, buka menu **Integration** (di dalam **Setting**).
2. Buka tab **Guestpro → Payment**. Akan muncul dua kolom: **Payment Guestapp** (kiri) dan **Payment Reference** (kanan).
3. Pada baris payment method yang dituju, pilih **Payment Reference** yang sesuai dengan payment method yang dibuat di PMS.
4. Setelah mapping selesai, setup selesai dan fitur siap digunakan.

---

## Cara Menggunakan

Membuat tagihan online untuk tamu:

1. Buka **Frontdesk → Reservation**, lalu pilih folio tamu yang ingin dibuatkan pembayaran.
2. Di detail folio, klik tombol **Payment**.
3. Di form payment, pilih **Payment Method** yang sudah dibuat, pastikan **Total Paid** sudah benar, lalu klik **Generate QR**.
4. Sistem menampilkan QR code dan **Full URL** (link pembayaran). Pilih salah satu untuk ditunjukkan langsung ke tamu, atau kirimkan ke tamu (misalnya lewat tombol **Send Email**).

## Tampilan di Sisi Tamu

Setelah tamu scan QR atau membuka link, mereka langsung diarahkan ke halaman pembayaran online (Guestbill):

- Tamu melihat detail tagihan (detail kamar, tanggal, total, dan sisa yang harus dibayar).
- Tamu memilih metode pembayaran yang tersedia, mengisi data kontak, lalu menyelesaikan pembayaran.
