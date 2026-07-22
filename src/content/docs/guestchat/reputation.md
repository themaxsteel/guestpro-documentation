---
title: "Reputation: Monitor & Balas Ulasan Tamu dari Semua OTA"
description: Dashboard analitik reputasi dan pengelolaan review dari berbagai OTA
---

GuestChat mengumpulkan ulasan tamu dari berbagai **OTA (Online Travel Agent)** — Booking.com, Agoda, Tiket.com, Traveloka, Expedia, dan Trip.com — dalam satu dashboard, lengkap dengan analisis sentimen otomatis.

## Dashboard Reputation

**Lokasi menu:** ikon bintang di sidebar kiri.

Filter yang tersedia di bagian atas: **Date Type** (semua tanggal, atau rentang tanggal khusus) dan **OTA Provider**. Setelah klik **Search**, tiga widget berikut diperbarui:

| Widget | Fungsi |
|---|---|
| **Ratio** | Donut chart proporsi ulasan Positif / Negatif / Netral. |
| **Most Frequent Phrases** | Wordcloud frasa yang paling sering disebut tamu, bisa difilter per kategori (Lokasi, Kebersihan, Layanan, dll). |
| **Summary** | Kartu ringkasan skor per kategori (Service, Location, Cleanliness, Value, Room, Design, Facilities, F&B, Other) dengan status Excellent/Stable/Bad/Needs Attention. |

:::caution[Gambar belum tersedia]
Tambahkan screenshot dashboard Reputation lengkap dengan data terisi. Contoh: `![Dashboard Reputation](../../../assets/guestchat/reputation-dashboard-overview.png)`.
:::

## Halaman All Reviews

**Lokasi menu:** tombol **View OTA Reviews** di dashboard Reputation.

Halaman ini menampilkan seluruh ulasan satu per satu, dengan filter lebih lengkap: **Date, OTA, Status (Analyzed/Unanalyzed), Category, Polarity**. Tampilan bisa dipilih dalam mode **Card** (grid) atau **Tile** (list memanjang).

:::caution[Gambar belum tersedia]
Tambahkan 2 screenshot: `![All Reviews - Card View](../../../assets/guestchat/reputation-all-reviews-card-view.png)` dan `![All Reviews - List View](../../../assets/guestchat/reputation-all-reviews-list-view.png)`.
:::

## Detail Review & Balas Review

Klik salah satu review untuk membuka detailnya: teks asli + terjemahan (jika ada), daftar **Detected Aspects** (kategori, opini spesifik, dan polaritasnya), serta riwayat balasan sebelumnya.

:::caution[Gambar belum tersedia]
Tambahkan screenshot modal detail review dengan Detected Aspects. Contoh: `![Detail Review](../../../assets/guestchat/reputation-review-detail-aspects.png)`.
:::

:::danger[Hanya Review dari Channex yang Bisa Dibalas]
Form balasan hanya muncul untuk ulasan yang masuk melalui **Channex**. Untuk sumber lain, GuestChat menampilkan keterangan *"Replies are only available for reviews received through Channex"* tanpa form balasan.
:::

:::caution[Gambar belum tersedia]
Tambahkan 2 screenshot: `![Form Balas Review](../../../assets/guestchat/reputation-review-reply-form.png)` dan `![Notice Review Non-Channex](../../../assets/guestchat/reputation-review-non-channex-notice.png)`.
:::
