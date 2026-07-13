---
title: Master Data – Agent
description: Cara mendaftarkan, mengedit, dan menghapus data Agent di PMS
---

Master Data Agent digunakan untuk mendaftarkan dan menyimpan data agent yang bekerja sama dengan properti. Halaman Master Data Agent menampilkan daftar agent yang sudah terdaftar beserta nama, source, status pembayaran, alamat, telepon, email, dan website. Data agent yang terdaftar akan digunakan pada proses pembuatan reservasi.

Halaman ini memiliki tombol **Add New** untuk mendaftarkan agent baru, serta tombol **Action** untuk melakukan upload data agent secara massal dari file Excel sesuai format yang ditentukan sistem.

## Cara Menambahkan Agent Baru

1. Klik tombol **Add New** pada halaman Master Data Agent.
2. Lengkapi form pendaftaran agent. Field bertanda bintang (*) wajib diisi:
   - **Name**
   - **Source**
   - **Payment Status**

   Field berikut bersifat opsional:
   - **Background & Font Color** (otomatis terisi jika dikosongkan)
   - **Address**
   - **Phone**
   - **Email**
   - **Website**
3. Keterangan masing-masing field:

| Field | Keterangan |
|-------|-----------|
| Name | Nama agent |
| Background & Font Color | Identitas warna untuk agent |
| Source | Jenis agent (Walk in, Direct, Booking Engine, Online Travel Agent, Travel Agent, Company, Wholesaler) |
| Payment Status | Kondisi pembayaran tamu: **Normal** (tamu bayar langsung), **City_Ledger** (agent yang membayar ke properti), **City_Ledger_Payment** (dikonfirmasi lewat reservasi), **Commission** (properti membayar komisi ke agent), **Commission_And_City_Ledger** (agent menerima pembayaran lalu membayar komisi ke properti) |
| AR Account | Chart of account yang digunakan untuk City_Ledger_Payment |
| AP Account | Chart of account yang digunakan untuk komisi |
| Deposit Account | Chart of account yang digunakan untuk deposit agent |
| Assign to POS | Mengaktifkan agent agar bisa digunakan di POS dengan harga khusus |
| Address, Phone, Email, Website | Informasi kontak tambahan agent |

4. Klik **Submit** untuk menyimpan, atau **Cancel** untuk membatalkan.

## Cara Mengedit Agent

Klik tombol **Edit** pada halaman Master Data Agent untuk mengubah data agent yang sudah terdaftar sebelumnya.

## Cara Menghapus Agent

Klik tombol **Delete** pada halaman Master Data Agent untuk menghapus data agent yang sudah terdaftar.
