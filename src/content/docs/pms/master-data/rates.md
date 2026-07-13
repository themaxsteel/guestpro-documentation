---
title: Master Data – Rates
description: Cara mengelola harga kamar (Rates), update harga per tanggal, dan bulk update di PMS
---

Master Data Rates memungkinkan pengelolaan harga kamar untuk properti. Akses melalui **Master Data → Rates**. Halaman ini menampilkan daftar rate yang sudah terdaftar dengan kolom Name, Type, Promo Type, Start Date, End Date, Taxes, Service, dan status Open Rates.

## Keterangan Field Rate

| Field | Keterangan |
|-------|-----------|
| Name | Nama rate yang terdaftar |
| Type | Jenis rate: **Standard** (ditampilkan per tanggal) atau **Package** (ditampilkan sebagai satu kesatuan) |
| Start Date | Tanggal rate mulai berlaku |
| End Date | Tanggal rate berakhir |
| Taxes (%) | Nilai pajak yang termasuk dalam rate |
| Service (%) | Biaya service yang termasuk dalam rate |
| Open Rate | Menunjukkan apakah nilai rate bisa diubah saat pembuatan reservasi |

## Cara Menambahkan Rate Baru

1. Klik tombol **Add New** pada halaman Master Data Rates.
2. Lengkapi form pendaftaran dengan field berikut:
   - **Name**: Nama rate
   - **Type**: Standard atau Package
   - **Start Date**: Tanggal rate mulai berlaku
   - **Use End Date**: Checkbox untuk menentukan tanggal kedaluwarsa (default 3 tahun jika tidak dicentang)
   - **End Date**: Tanggal rate berakhir
   - **Currency**: IDR atau USD
   - **Taxes**: Persentase pajak
   - **Minimum/Maximum Night**: Batasan lama menginap
   - **Guest include In Rate**: Jumlah tamu yang termasuk dalam rate
   - **Guest Max in Rate**: Jumlah maksimal tamu yang diperbolehkan
   - **Extra Adult/Child Rate**: Biaya tambahan untuk tamu ekstra
   - **Price Table**: Harga per room type
   - **Include Product**: Menambahkan product ke dalam rate
   - **Apply to Booking Engine**: Menjadikan rate tersedia di booking engine
3. Klik **Submit** untuk menyimpan, atau **Cancel** untuk membatalkan.

## Cara Mengedit Rates

Klik tombol **Edit** pada halaman Master Data Rates untuk mengubah rate yang sudah terdaftar.

## Cara Menghapus Rates

Klik tombol **Delete** pada halaman Master Data Rates untuk menghapus rate yang sudah terdaftar.

## Cara Mengubah Rate Berdasarkan Tanggal

Ubah harga untuk tanggal-tanggal tertentu melalui tombol **Detail**.

### Update Harga Satu Tanggal

Klik harga pada Room Type dan tanggal tertentu untuk mengubahnya secara individual.

### Bulk Update

Ubah harga untuk beberapa tanggal sekaligus menggunakan tombol **Bulk Update** dengan field berikut:

| Field | Keterangan |
|-------|-----------|
| Start Date | Awal periode perubahan |
| End Date | Akhir periode perubahan |
| Room Type | Room type yang akan diubah |
| Use Day Of Week | Opsi untuk menerapkan perubahan berdasarkan hari dalam minggu |
| Master Data Rates | Harga baru yang akan diterapkan |
