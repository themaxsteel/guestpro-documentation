---
title: Master Data – Chart of Account (COA)
description: Cara mendaftarkan, mengubah, dan menghapus Chart of Account (COA) di PMS
---

**Chart of Account (COA)** digunakan untuk mengelola akun yang menampung transaksi akuntansi pada properti. Sistem memiliki Chart of Account (COA) *default* yang dapat diubah atau ditambahkan jika properti memiliki konfigurasi atau COA khusus.

Halaman Chart of Account (COA) dapat diakses melalui **Master Data → Chart of Account (COA)**, dan menampilkan daftar COA yang sudah didaftarkan pada sistem (nama Chart of Account). Halaman Chart of Account (COA) memiliki empat tombol: **Add New**, **Action**, **Edit**, dan **Delete**.

## Cara Menambahkan Chart of Account (COA) Baru

1. Klik tombol **Add New** pada halaman Master Data Chart of Account (COA).
2. Isi form pendaftaran COA yang muncul setelah tombol **Add New** diklik. Data yang harus dimasukkan:

   | Field | Keterangan |
   |-------|-----------|
   | Code | Kode COA (dapat dikosongkan) |
   | Name | Diisikan dengan nama Chart of Account |
   | Level | Tingkatan pengelompokan, sistem memiliki 4 Level (lihat rincian di bawah) |
   | Parent | Induk atau kelompok dari COA |

   Rincian tingkatan **Level**:

   - **Level 4** — Akun yang digunakan langsung dalam transaksi.
   - **Level 3** — Akun parent untuk akun Level 4 (Akun Level 3 terdiri dari akun Level 4).
   - **Level 2** — Akun parent untuk akun Level 3 (Akun Level 2 terdiri dari akun Level 3).
   - **Level 1** — Akun tertinggi (Akun Level 1 terdiri dari akun Level 2).

   :::caution[Wajib Diisi]
   Semua data wajib diisikan pada proses pendaftaran Chart of Account (COA). Proses pendaftaran tidak dapat dilanjutkan jika terdapat data yang masih kosong.
   :::

3. Klik tombol **Submit** untuk menyimpan Chart of Account (COA), atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Mengubah Data Chart of Account (COA)

**Edit Chart of Account (COA)** digunakan untuk melakukan perubahan data pada COA yang sudah didaftarkan sebelumnya. Klik tombol **Edit** pada halaman Master Data Chart of Account (COA).

## Cara Menghapus Data Chart of Account (COA)

**Delete Chart of Account (COA)** digunakan untuk menghapus data COA yang sudah didaftarkan sebelumnya. Klik tombol **Delete** pada halaman Master Data Chart of Account (COA).
