---
title: Master Data – Payment Method
description: Cara mendaftarkan, mengubah, dan menghapus metode pembayaran di PMS
---

**Payment Method** digunakan untuk menambahkan data metode pembayaran yang ada atau digunakan di properti. Master Data Payment Method berfungsi untuk mendaftarkan, mengubah, atau menghapus metode pembayaran yang tersedia di properti.

Halaman Payment Method dapat diakses melalui **Master Data → Payment Method**, dan menampilkan daftar Payment Method yang sudah didaftarkan pada sistem (Name, Payment Method Type, dan Payment Account). Halaman Payment Method memiliki empat tombol: **Add New**, **Action**, **Edit**, dan **Delete**.

## Cara Menambahkan Payment Method Baru

1. Klik tombol **Add New** pada halaman Master Data Payment Method.
2. Isi form pendaftaran Payment Method yang muncul setelah tombol **Add New** diklik. Data yang harus dilengkapi:

   | Field | Keterangan |
   |-------|-----------|
   | Name | Diisikan dengan nama metode pembayaran |
   | Payment Method Type | Tipe pembayaran dari payment method yang dibuat |
   | Payment Account | Akun penampung, data diambil dari COA Level 4 |
   | Assign To | Mendeklarasikan tim yang bisa menggunakan Payment Method yang dibuat |
   | Position Order | Mengurutkan tampilan Position Order (dimulai dari 0) |
   | Use Settlement | Mendeklarasikan bahwa Payment Method memerlukan konfirmasi Accounting — ketika Payment Method digunakan, akan muncul Settlement List dan Team Accounting harus konfirmasi agar mempengaruhi Report. Biasanya digunakan untuk Credit Card |

   :::caution[Wajib Diisi]
   Semua data wajib diisikan pada proses pendaftaran Payment Method. Proses pendaftaran tidak dapat dilanjutkan jika data masih kosong.
   :::

3. Klik tombol **Submit** untuk menyimpan data Payment Method, atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Mengubah Data Payment Method

**Edit Payment Method** digunakan untuk melakukan perubahan data Payment Method yang sudah didaftarkan sebelumnya. Klik tombol **Edit** pada halaman Master Data Payment Method.

## Cara Menghapus Data Payment Method

**Delete Payment Method** digunakan untuk menghapus data Payment Method yang sudah didaftarkan sebelumnya. Klik tombol **Delete** pada halaman Master Data Payment Method.
