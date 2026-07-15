---
title: "Booking Engine – Konfigurasi Tampilan Kalender"
description: Cara mengatur kalender pencarian tanggal di Booking Engine menampilkan harga termurah atau sisa kamar
---

Booking Engine (BE) memiliki konfigurasi yang memungkinkan *merchant* mengatur jenis informasi yang muncul pada kalender pemilihan tanggal.

Secara standar, kalender hanya menampilkan **harga termurah** (*Show Lowest Price*). Melalui konfigurasi ini, kalender bisa diubah untuk menampilkan **total sisa kamar** (*Show Availability*) — angka ketersediaan yang muncul merupakan gabungan kuota dari seluruh tipe kamar yang sedang aktif pada tanggal yang dipilih.

## Panduan Konfigurasi

1. **Akses Menu Pengaturan Properti** — Login ke dashboard merchant. Pada bilah navigasi kiri, arahkan ke bagian bawah dan pilih menu **Setting**.

   ![Menu Setting di navigasi kiri dashboard merchant](../../../assets/booking-engine/calendar-01-setting-menu.png)

2. **Masuk ke Pengaturan Booking Engine** — Pada submenu vertikal di sisi tengah-kiri, klik opsi **Booking Engine**, lalu gulir halaman ke bawah hingga menemukan section bertajuk **Filter & Search Result**.

   ![Section Filter & Search Result di pengaturan Booking Engine](../../../assets/booking-engine/calendar-02-booking-engine-filter-search.png)

3. **Mengubah Gaya Kalender Tanggal** — Cari dropdown field bernama **Search Room Filter Dates Style**. Pilih sesuai kebutuhan:
   - Pilih **Show Availability on every Date** untuk menampilkan total sisa kamar gabungan di kalender.

     ![Dropdown Search Room Filter Dates Style dipilih Show Availability](../../../assets/booking-engine/calendar-03-show-availability.png)

   - Pilih **Show Lowest Price** untuk mengembalikan kalender ke mode standar (harga termurah).

     ![Dropdown Search Room Filter Dates Style dipilih Show Lowest Price](../../../assets/booking-engine/calendar-04-show-lowest-price.png)

4. **Menyimpan Perubahan** — Klik tombol **Save** di bagian bawah halaman untuk menerapkan konfigurasi ke frontend.
