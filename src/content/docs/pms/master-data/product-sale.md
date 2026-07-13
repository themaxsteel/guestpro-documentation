---
title: Master Data – Product
description: Cara mendaftarkan Product Standard, Composite, Consigment, dan Inventory Only di PMS
---

Master Data Product digunakan untuk mengkonfigurasi produk yang ada di properti. Product berfungsi untuk mendaftarkan, mengedit, atau menghapus produk di properti.

Halaman Product dapat diakses melalui **Master Data → Product**. Halaman ini menampilkan list product yang sudah didaftarkan pada sistem, yang dapat difilter sesuai kebutuhan. Halaman Product memiliki 5 tombol: **Add New**, **Action**, **Change Image**, **Delete**, dan **Edit**.

Terdapat 4 jenis produk yang dapat dikonfigurasi:

| Nama | Keterangan |
|------|-----------|
| Product Standard | Produk yang dijual di properti dan stoknya bisa dikelola (non olahan), sehingga saat terjadi penjualan stok product akan berkurang otomatis. Contoh: Beer, Soft Drink |
| Product Composite | Produk yang dijual di properti dan komponen penyusun/resepnya dapat dikonfigurasi, sehingga saat terjadi penjualan stok komponen product akan berkurang otomatis. Contoh: Nasi Goreng |
| Product Consigment | Produk dari pihak ketiga. Saat terjadi penjualan, sistem akan memisahkan komisi yang didapat dan utang yang harus dibayarkan ke vendor. Contoh: Rental motor |
| Product Inventory Only | Produk yang tidak dijual tapi stoknya dikelola untuk kebutuhan operasional. Contoh: telur, beras, chemical, cleaning supplies |

## Cara Menambahkan Product Standard

**Langkah 1:** Klik tombol **Add New → Product Standard** pada halaman Master Data Product.

**Langkah 2:** Lengkapi data pada form Add New Product Standard.

*Informasi Umum:*

| Field | Keterangan |
|-------|-----------|
| Code | Kode identitas produk yang didaftarkan, dapat dikosongkan (otomatis diisi sistem) |
| Barcode | Kode bar identitas produk yang didaftarkan, dapat dikosongkan (otomatis diisi sistem) |
| Name | Nama Product Standard |
| POS | Point of sale atau tempat produk dijual (dapat dipilih lebih dari satu) |
| Category | Kategori untuk produk yang dijual |
| Base Unit | Satuan unit dari produk |

*Unit Conversion:*

| Field | Keterangan |
|-------|-----------|
| Add Unit Conversion | Menambahkan konversi unit |
| Action | Aksi yang dapat dilakukan |
| Conversion | Satuan unit konversi |
| Base Unit | Nilai satuan unit konversi terhadap base unit |
| Cost Price | Harga per satuan unit konversi |

*Variant:*

| Field | Keterangan |
|-------|-----------|
| Variant Code | Code variant dari produk |
| Variant Name | Nama product variant |
| Sell Price | Harga dari product variant |

*Sell Information:*

| Field | Keterangan |
|-------|-----------|
| Sell Price | Harga jual produk |
| Income Account | Akun akunting yang digunakan untuk menampung nilai ketika terjadi transaksi |
| Taxes | Nilai pajak untuk produk |

*Inventory Information:*

| Field | Keterangan |
|-------|-----------|
| Initial Quantity on Hand (QOH) | Jumlah yang dimiliki (stock) di properti |
| Inventory Asset Account | Akun yang digunakan untuk menampung nilai inventory dari produk |

*Purchasing Information:*

| Field | Keterangan |
|-------|-----------|
| Cost Price | Harga beli produk |
| Cost of Sales Account | Akun untuk menampung cost pembelian produk |

*Deskripsi:*

| Field | Keterangan |
|-------|-----------|
| Description | Digunakan untuk menambahkan informasi produk |

:::note
Semua field bertanda bintang (*) wajib diisi pada proses pendaftaran Product Standard. Proses pendaftaran tidak dapat dilanjutkan jika field tersebut masih kosong.
:::

**Langkah 3:** Klik **Submit** untuk menyimpan Product Standard, atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Menambahkan Product Composite

**Langkah 1:** Klik tombol **Add New → Product Composite** pada halaman Master Data Product.

**Langkah 2:** Lengkapi data pada form Add New Product Composite.

Field **Code**, **Barcode**, **Name**, **POS**, **Category**, **Base Unit**, **Unit Conversion**, **Variant**, dan **Sell Information** diisi dengan cara yang sama seperti pada Product Standard.

*Component (khusus Product Composite):*

| Field | Keterangan |
|-------|-----------|
| Add Component | Menambahkan komponen penyusun product |
| Action | Aksi yang dapat dilakukan |
| Product | Nama komponen |
| Qty | Jumlah komponen |
| Unit | Satuan unit dari komponen |

*Deskripsi:*

| Field | Keterangan |
|-------|-----------|
| Description | Digunakan untuk menambahkan informasi produk |

:::note
Semua field bertanda bintang (*) wajib diisi pada proses pendaftaran Product Composite. Proses pendaftaran tidak dapat dilanjutkan jika field tersebut masih kosong.
:::

**Langkah 3:** Klik **Submit** untuk menyimpan Product Composite, atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Menambahkan Product Consigment

**Langkah 1:** Klik tombol **Add New → Product Consigment** pada halaman Master Data Product.

**Langkah 2:** Lengkapi data pada form Add New Product Consigment.

Field **Code**, **Barcode**, **Name**, **POS**, **Category**, **Base Unit**, dan **Unit Conversion** diisi dengan cara yang sama seperti pada Product Standard.

*Consigment (khusus Product Consigment):*

| Field | Keterangan |
|-------|-----------|
| Supplier | Vendor penyedia product |
| Consigment Type | Kalkulasi komisi yang diberikan oleh Supplier (% atau Net) |
| Commission Value | Nilai komisi |

*Sell Information:*

| Field | Keterangan |
|-------|-----------|
| Sell Price | Harga jual produk |
| Income Account | Akun akunting yang digunakan untuk menampung nilai ketika terjadi transaksi |
| Taxes | Nilai pajak untuk produk |

*Inventory Information:*

Dicentang jika produk consigment ingin dikelola stoknya.

| Field | Keterangan |
|-------|-----------|
| Initial Qty on Hand | Jumlah qty produk |

*Deskripsi:*

| Field | Keterangan |
|-------|-----------|
| Description | Digunakan untuk menambahkan informasi produk |

:::note
Semua field bertanda bintang (*) wajib diisi pada proses pendaftaran Product Consigment. Proses pendaftaran tidak dapat dilanjutkan jika field tersebut masih kosong.
:::

**Langkah 3:** Klik **Submit** untuk menyimpan Product Consigment, atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Menambahkan Product Inventory Only

**Langkah 1:** Klik tombol **Add New → Product Inventory** pada halaman Master Data Product.

**Langkah 2:** Lengkapi data pada form Add New Product Inventory.

| Field | Keterangan |
|-------|-----------|
| Code | Kode identitas produk yang didaftarkan, dapat dikosongkan (otomatis diisi sistem) |
| Name | Nama Product Inventory |
| Category | Kategori untuk produk yang dijual |
| Base Unit | Satuan unit dari produk |

*Unit Conversion:*

| Field | Keterangan |
|-------|-----------|
| Add Unit Conversion | Menambahkan konversi unit |
| Action | Aksi yang dapat dilakukan |
| Conversion | Satuan unit konversi |
| Base Unit | Nilai satuan unit konversi terhadap base unit |
| Cost Price | Harga per satuan unit konversi |

*Inventory Information:*

| Field | Keterangan |
|-------|-----------|
| Initial Quantity On Hand (QOH) | Jumlah yang dimiliki (stock) di properti |
| Inventory Asset Account | Akun yang digunakan untuk menampung nilai inventory dari produk |

*Purchasing Information:*

| Field | Keterangan |
|-------|-----------|
| Cost Price | Harga beli produk |
| Cost Of Sales Account | Akun untuk menampung hutang pembelian produk |

*Deskripsi:*

| Field | Keterangan |
|-------|-----------|
| Description | Digunakan untuk menambahkan informasi produk |

:::note
Semua field bertanda bintang (*) wajib diisi pada proses pendaftaran Product Inventory. Proses pendaftaran tidak dapat dilanjutkan jika field tersebut masih kosong.
:::

**Langkah 3:** Klik **Submit** untuk menyimpan Product Inventory, atau **Cancel** untuk membatalkan proses pendaftaran.

## Cara Mengedit Product

Klik tombol **Edit** pada halaman Master Data Product untuk mengubah data Product yang sudah didaftarkan sebelumnya.

## Cara Menghapus Product

Klik tombol **Delete** pada halaman Master Data Product untuk menghapus data Product yang sudah didaftarkan sebelumnya.
