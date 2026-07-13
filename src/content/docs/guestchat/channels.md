---
title: "Kanal & Provider: Dari Mana Saja Tamu Bisa Terhubung"
description: Setup integrasi kanal Fonnte, Qontak, Meta, Channex
---

GuestChat dapat menerima pesan dari berbagai kanal. Setiap kanal diaktifkan melalui provider tertentu yang perlu dihubungkan lebih dulu.

:::caution[Gambar belum tersedia]
Ganti placeholder gambar di dokumen sumber dengan screenshot diagram kanal yang asli.
:::

## 1. Fonnte (WhatsApp)

Fonnte menghubungkan nomor WhatsApp property ke GuestChat, khusus untuk kanal WhatsApp.

:::danger[Perlu diperhatikan]
Fonnte menggunakan koneksi WhatsApp yang **tidak resmi**. Koneksi ini aman untuk membalas tamu yang menghubungi property lebih dulu. Namun jika nomor dipakai untuk memulai chat ke tamu terlebih dahulu (outbound), atau untuk mengirim pesan massal (bulk/broadcast), nomor **berisiko ditandai sebagai spam** lalu diblokir atau di-banned oleh WhatsApp. Untuk kebutuhan menyapa tamu duluan atau broadcast, sebaiknya gunakan provider WhatsApp resmi seperti Qontak atau Meta.
:::

## 2. Qontak (WhatsApp, Telegram, LINE, Email, Instagram, Facebook)

Qontak adalah provider omnichannel. Satu koneksi Qontak sekaligus membuka banyak kanal — WhatsApp, Telegram, LINE, Email, Instagram, hingga Facebook — cocok untuk property yang ingin melayani tamu dari banyak platform dalam satu tempat.

## 3. Meta (Facebook, Instagram, WhatsApp)

Meta menghubungkan GuestChat langsung ke ekosistem Meta (Facebook, Instagram, WhatsApp). Sebagai koneksi resmi, jalur ini aman untuk komunikasi proaktif ke tamu sesuai ketentuan Meta.

## 4. Channex (OTA / Online Travel Agent)

Channex berperan sebagai channel manager yang menghubungkan GuestChat dengan OTA seperti Booking.com, Airbnb, dan Expedia. Pesan dari platform pemesanan tersebut masuk ke inbox yang sama dengan kanal lainnya.

## Ringkasan Ketergantungan Kanal

| Kanal Tamu | Provider yang Dibutuhkan |
|---|---|
| WhatsApp | Fonnte, Qontak, atau Meta |
| Telegram | Qontak |
| LINE | Qontak |
| Email | Qontak |
| Instagram | Qontak atau Meta |
| Facebook | Qontak atau Meta |
| OTA (Booking.com, Airbnb, Expedia) | Channex |

:::note[Catatan]
Untuk WhatsApp, property cukup memilih **salah satu** provider (Fonnte, Qontak, atau Meta) sesuai kebutuhan. Pilih Fonnte untuk pemakaian sederhana yang sifatnya membalas tamu, atau Qontak/Meta bila membutuhkan jangkauan resmi untuk menyapa tamu duluan dan broadcast.
:::

## Webchat / Widget: Tamu Bisa Bertanya Langsung dari Booking Engine

Property juga mendapatkan akses ke **Webchat (Widget)** yang tampil langsung di halaman Booking Engine. Calon tamu bisa langsung bertanya — misalnya mengecek ketersediaan kamar atau fasilitas — tanpa harus meninggalkan halaman pemesanan.

Seluruh pesan dari widget ini langsung terhubung ke GuestChat, sehingga tim property dapat menanggapinya di inbox yang sama dengan percakapan WhatsApp.
