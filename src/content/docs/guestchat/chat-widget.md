---
title: "Chat Widget: Buat & Kustomisasi Widget Webchat"
description: Membuat, mengatur tampilan, dan memasang widget chat di website property
---

**Lokasi menu:** `Settings → Chat Widget`

Chat Widget adalah kotak chat yang bisa dipasang di website/Booking Engine property, sehingga calon tamu bisa langsung bertanya tanpa meninggalkan halaman. Satu property bisa memiliki lebih dari satu widget (misalnya beda desain untuk beda tujuan).

![Contoh tampilan Chat Widget di halaman Booking Engine, dari sisi tamu](../../../assets/guestchat/chat-widget-live-example.png)

![Halaman daftar Chat Widget dengan grid widget dan tombol New Widget](../../../assets/guestchat/chat-widget-grid.png)

## Membuat Widget Baru

Klik **New Widget**, lalu isi pengaturan pada 6 tab berikut:

### 1. General
Nama widget (internal), nama agent yang tampil ke tamu, toggle **Widget Active** (tampil/tidak ke pengunjung), dan **Management Mode** (jika aktif, pengunjung memilih property dulu sebelum chat — cocok untuk grup properti).

![Chat Widget - Tab General dengan Widget Name, Agent Name, Widget Active, dan Management Mode](../../../assets/guestchat/chat-widget-tab-general.png)

### 2. Appearance
Logo, banner (tampil di layar sambutan sebelum tamu mulai chat), dan floating icon (ikon tombol chat mengambang).

![Chat Widget - Tab Appearance bagian Logo, Banner Image, dan Floating Icon](../../../assets/guestchat/chat-widget-tab-appearance.png)

Font judul & isi (upload file TTF/OTF/WOFF/WOFF2), serta skema warna (background & teks) untuk tiap elemen widget — **Main** (header), **Agent** (bubble chat staff), dan **Visitor** (bubble chat tamu).

![Chat Widget - Tab Appearance bagian Title/Body Font dan Color Scheme](../../../assets/guestchat/chat-widget-tab-appearance-fonts-colors.png)

### 3. Text & Layout
Welcome Title & Message (teks sambutan di banner), Placeholder Text (kolom input pesan), dan Greeting Message (bubble di atas tombol chat mengambang).

![Chat Widget - Tab Text & Layout bagian Welcome Title, Welcome Message, Placeholder Text, dan Greeting Message](../../../assets/guestchat/chat-widget-tab-text-layout.png)

Posisi widget di layar bisa dipilih dari 4 opsi: **Top Left**, **Top Right**, **Bot Left**, atau **Bot Right**.

![Chat Widget - Tab Text & Layout bagian pemilihan Widget Position](../../../assets/guestchat/chat-widget-tab-widget-position.png)

### 4. Quick Chat
Daftar shortcut siap pakai yang bisa langsung diklik pengunjung untuk memulai chat. Setiap shortcut terdiri dari judul, deskripsi singkat, dan pesan otomatis yang terkirim saat di-tap (misalnya "Check Availability" — "Rooms & rates"). Tambahkan shortcut baru lewat **Add Another Shortcut**, urutan item bisa diatur ulang dengan drag & drop, dan hasilnya bisa dicek langsung lewat **Preview Quick Chat**.

![Chat Widget - Tab Quick Chat dengan daftar shortcut dan preview tombol Quick Chat](../../../assets/guestchat/chat-widget-tab-quick-chat.png)

### 5. Advanced
**Custom CSS** — kolom untuk menambahkan styling tambahan pada widget. Perubahan di sini diterapkan langsung ke widget, namun tidak langsung terefleksi di panel preview.

![Chat Widget - Tab Advanced dengan kolom Custom CSS](../../../assets/guestchat/chat-widget-tab-advanced.png)

### 6. Domains & Embed
Daftar domain website yang diizinkan menampilkan widget ini (**allowed origins** — widget tidak akan muncul di domain yang tidak terdaftar). Ada juga toggle **Enable in Group Booking Engine** untuk menampilkan widget ini di Group Booking Engine (manajemen multi-property). Tab ini juga menampilkan kode embed untuk dipasang di website, namun baru tersedia setelah widget pertama kali disimpan.

![Chat Widget - Tab Domains & Embed dengan Allowed Origins, toggle Enable in Group Booking Engine, dan kode embed](../../../assets/guestchat/chat-widget-tab-domains-embed.png)

## Memasang Widget di Website (Install)

Dari grid daftar widget, klik tombol **Install** pada kartu widget untuk membuka kode embed secara cepat tanpa perlu masuk ke mode edit penuh. Salin snippet berikut ke halaman website:

```html
<script src="[VITE_WIDGET_BASE_URL]/dist/chat-widget.js"></script>
<chat-widget webchat-key="[kode-unik-widget]"></chat-widget>
```

:::caution[Gambar belum tersedia]
Tambahkan screenshot modal Install Widget dengan kode embed. Contoh: `![Install Widget Modal](../../../assets/guestchat/chat-widget-install-modal.png)`.
:::

:::note[Terhubung dengan Booking Engine]
Widget yang sudah dipasang otomatis terhubung ke inbox GuestChat yang sama dengan kanal lainnya (WhatsApp, Email, dll) — lihat juga [halaman Setup & Integrasi Kanal](/guestchat/channels/).
:::
