---
title: Konfigurasi Approval
description: Cara konfigurasi Approval untuk Purchase Request (PR) dan Purchase Order (PO)
---

Konfigurasi Approval Purchase Request (PR) & Purchase Order (PO) dilakukan setelah melakukan konfigurasi **Position** & **Employ**. Konfigurasi dilakukan dari menu **Company Profile → Setting → Approval Setting**.

## Konfigurasi Purchase Request

Konfigurasi Purchase Request dimulai dengan memilih **Purchase Request** pada Approval Setting. Sistem akan menampilkan form konfigurasi approval untuk masing-masing departemen dengan field berikut:

- **Departemen** — informasi Departemen yang didaftarkan Approval bertingkat. Departemen yang muncul merupakan Departemen yang sudah didaftarkan di Master Data.
- **Is Sequential** — digunakan untuk mengatur approval secara berurutan atau bisa langsung dilompati.
- **Status**:
  - **Active** — Is Sequential (Active) artinya approval harus berurutan dari yang paling bawah.
  - **Deactive** — Is Sequential (Deactive) artinya approval bisa langsung dilakukan oleh user dengan posisi yang lebih tinggi.
- **Add Approval Setting** — digunakan untuk menambahkan posisi yang memberikan persetujuan (approval).
- **Action (Delete)** — digunakan untuk menghapus posisi yang sebelumnya ditambahkan.
- **Position** — digunakan untuk memilih posisi yang harus memberikan approval atau persetujuan.
- **Max Amount** — batasan nilai yang dapat disetujui untuk setiap level (Position).

## Konfigurasi Purchase Order

Konfigurasi Purchase Order dimulai dengan memilih **Purchase Order** pada Approval Setting. Sistem akan menampilkan form konfigurasi batasan kenaikan harga produk dari nilai Purchase Request yang sudah disetujui.

Purchase Order Setting digunakan untuk membatasi kenaikan harga produk ketika proses pembuatan PO ataupun Receiving. Pembatasan kenaikan harga dikonfigurasi untuk setiap departemen.
