---
title: Master Data – Sales Type
description: Cara mengatur Sales Type untuk menaikkan atau menurunkan harga produk di modul Sales (POS)
---

Sales Type merupakan fitur yang disediakan oleh GuestPro untuk menaikkan atau menurunkan harga produk berdasarkan kondisi atau event tertentu. Sales Type digunakan pada modul **Sales (POS)**.

## Cara Menambahkan Sales Type Baru

Pembuatan Sales Type baru mewajibkan pengisian form **Add New Sales Type** dengan informasi berikut:

- **Name** — nama dari Sales Type yang dibuat.
- **System Calculation** — cara perhitungan, dibedakan menjadi dua:
  - **Manual** — sistem perhitungan untuk produk tertentu yang update harganya harus dikonfigurasi lebih lanjut di **Master Data → Product Sales**.
  - **Automatic** — sistem perhitungan yang berlaku untuk seluruh produk dalam transaksi.
- **Operator** — menentukan arah perhitungan harga:
  - **+** — menambahkan harga produk.
  - **–** — mengurangi harga produk.
- **Type** — cara perhitungan dari perubahan harga:
  - **Percent** — perhitungan berdasarkan persentase nilai produk.
  - **Amount** — perhitungan dengan nilai pasti (fixed amount).
- **Type Value** — nilai atau jumlah perubahan harga yang diinginkan.

## Edit Sales Type

Edit Sales Type berfungsi untuk melakukan perubahan data Sales Type yang sudah didaftarkan sebelumnya. Edit dilakukan dengan menekan tombol **Edit** pada halaman **Master Data → Sales Type**.

## Delete Sales Type

Delete Sales Type berfungsi untuk menghapus data Sales Type yang sudah didaftarkan sebelumnya. Delete dilakukan dengan menekan tombol **Delete** pada halaman **Master Data → Sales Type**.
