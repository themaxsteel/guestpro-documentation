---
title: Agent Mapping
description: Cara setup Agent Mapping untuk otomatisasi pemetaan agent dari Channel Manager
---

Agent Mapping merupakan fitur GuestPro yang berfungsi untuk otomatisasi pemetaan agent yang masuk dari Channel Manager.

## Proses Implementasi

Tahapan pelaksanaan Agent Mapping meliputi:

1. Menghubungkan GuestPro dengan Channel Manager menggunakan **Credential Code**.
2. Melakukan setup Agent Mapping di menu **Master Data → Agent Mapping**.
3. Memetakan agent Online Travel Agent (OTA).

Setelah Agent Mapping selesai disetup, reservasi yang masuk ke sistem akan otomatis termapping mengacu pada data di **Master Data → Agent Mapping**.

## Informasi Halaman Agent Mapping

Halaman ini menampilkan data agent yang telah terdaftar sebelumnya dalam sistem, dengan informasi berikut:

- **Agent** — data agent yang sudah didaftarkan di **Master Data → Agent**.
- **Payment Status** — status pembayaran sesuai data agent (**Normal**, **City_Ledger**, **Commission**).
- **Agent CM** — daftar agent yang terdaftar di Channel Manager.
- **Payment Type** — informasi tipe pembayaran tamu.
- **Channel_Collect** — informasi pembayaran room charge oleh tamu di agent.
- **Hotel_Collect** — informasi pembayaran room charge oleh tamu di property.
- **Payment Method** — metode penyimpanan informasi deposit tamu di agent.
- **Action** — tombol **Update** untuk menyimpan pengaturan.

:::caution[Persyaratan Pengisian]
Proses Agent Mapping diwajibkan untuk mengisi seluruh field. Jika property menggunakan dua metode pembayaran tamu (**City_Ledger** & **Commission**), agent harus didaftarkan dua kali di **Master Data → Agent** dengan nama berbeda untuk setiap metode pembayaran.
:::
