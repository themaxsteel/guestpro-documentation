---
title: Master Data – Point of Sale (POS)
description: Cara mendaftarkan, mengubah, dan menghapus data Point of Sale (Outlet) di PMS
---

**Point of Sale** digunakan untuk menambahkan data POS (*Outlet*) yang ada atau digunakan di properti. Master Data Point of Sale berfungsi untuk mendaftarkan, mengubah, atau menghapus POS yang tersedia di properti.

Halaman Point of Sale dapat diakses melalui **Master Data → Point of Sale**, dan menampilkan daftar Point of Sale yang sudah didaftarkan pada sistem (Nama, Income Account). Halaman Point of Sale memiliki empat tombol: **Add New**, **Action**, **Edit**, dan **Delete**.

## Cara Menambahkan Point of Sale Baru

1. Klik tombol **Add New** pada halaman Master Data Point of Sale.
2. Isi form pendaftaran Point of Sale yang muncul setelah tombol **Add New** diklik. Data yang harus diinputkan:

   | Field | Keterangan |
   |-------|-----------|
   | Name | Diisikan dengan nama Point of Sale |
   | Warehouse | Gudang yang digunakan oleh POS (jika tidak menggunakan warehouse, dapat dikosongkan) |
   | POS Type | Menentukan tipe POS: **Standard**, **Table Management**, **Ticket**, atau **Schedule** |
   | Image | Untuk upload gambar POS |
   | Description | Untuk menambahkan informasi mengenai POS |
   | User Access | Pengaturan tim yang dapat mengakses POS |
   | Show Tax & Service | Konfigurasi apakah informasi tax & service tampil di struk atau tidak, untuk masing-masing POS |
   | Use Shift | Dicentang untuk mendefinisikan bahwa penggunaan POS disertai Shift (fitur Shift khusus untuk GuestPro Mobile) |
   | Use Adapter | Untuk mendeklarasikan bahwa POS menggunakan GuestPro Adapter, dengan pengaturan Adapter IP, Print Bill to Adapter, dan Print Order to Adapter |

   :::caution[Wajib Diisi]
   Semua data wajib diisikan pada proses pendaftaran Point of Sale. Proses pendaftaran tidak dapat dilanjutkan jika data masih kosong.
   :::

3. Klik tombol **Submit** untuk menyimpan Point of Sale, atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Mengubah Data Point of Sale

**Edit Point of Sale** digunakan untuk melakukan perubahan data pada Point of Sale yang sudah didaftarkan sebelumnya. Klik tombol **Edit** pada halaman Master Data Point of Sale.

## Cara Menghapus Data Point of Sale

**Delete Point of Sale** digunakan untuk menghapus data Point of Sale yang sudah didaftarkan sebelumnya. Klik tombol **Delete** pada halaman Master Data Point of Sale.
