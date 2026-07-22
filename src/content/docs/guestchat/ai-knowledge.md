---
title: "AI Knowledge: Sumber Data yang Dipakai AI Agent"
description: Kapabilitas AI Agent per spesialis dan sumber data/menu yang perlu disiapkan
---

**Lokasi menu:** `Settings → AI Knowledge`

Halaman ini menjelaskan **data apa saja** yang dipakai oleh masing-masing spesialis AI Agent (lihat juga [halaman AI Assistant & AI Agent](/guestchat/ai-agent/)) agar bisa menjawab tamu dengan akurat, beserta menu di PMS yang perlu diisi supaya kapabilitas tersebut berfungsi.

:::caution[Gambar belum tersedia]
Tambahkan screenshot grid 3 kartu AI Knowledge. Contoh: `![AI Knowledge Grid](../../../assets/guestchat/ai-knowledge-grid.png)`.
:::

Klik salah satu kartu untuk melihat detail kapabilitasnya dalam bentuk accordion, lengkap dengan tombol pintasan **Setup** yang langsung mengarah ke menu terkait di PMS.

:::caution[Gambar belum tersedia]
Tambahkan screenshot modal detail salah satu agent dengan accordion terbuka. Contoh: `![AI Knowledge Detail Modal](../../../assets/guestchat/ai-knowledge-detail-modal.png)`.
:::

## Reservation Agent

| Kapabilitas | Sumber Data / Menu Setup |
|---|---|
| Daily Availability Lookup | Availability & Rate Plan |
| List Available Rooms | Room Type, Rate Plans |
| Room Detail Information | Room Type, Rate Plans |
| Create Reservation | Validasi otomatis dari availability & rate real-time, kirim link pembayaran |

## Concierge Agent

| Kapabilitas | Sumber Data / Menu Setup |
|---|---|
| Hotel Information | General Settings (deskripsi, fasilitas, metode pembayaran, jam check-in/out) |
| Contact & Social Media Information | General Settings |
| Nearby Destination | General Settings |
| General Policy | Kebijakan/aturan pada rate plan & property |

## Additional Service Agent

| Kapabilitas | Sumber Data / Menu Setup |
|---|---|
| Room Dining & Spa Overview | Concierge → In-Room Dining, Spa |
| List Activities Information | Master Data → Activity |
| List Outlet Information | Master Data → Custom POS |
| General Details (Activity & Outlet) | Activity, Custom POS |
| Full Product Item Link | Otomatis dari data produk yang sudah disetup |
| Search by Preferences | Kombinasi In-Room Dining, Spa, Activity, Outlet |

:::tip[Kenapa halaman ini penting]
Kalau salah satu menu setup di atas belum diisi property, maka spesialis AI Agent terkait tidak akan bisa menjawab pertanyaan tamu di area itu secara akurat. Gunakan halaman ini sebagai checklist sebelum mengaktifkan AI Agent untuk property baru.
:::
