---
title: "Chat Widget: Buat & Kustomisasi Widget Webchat"
description: Membuat, mengatur tampilan, dan memasang widget chat di website property
---

**Lokasi menu:** `Settings → Chat Widget`

Chat Widget adalah kotak chat yang bisa dipasang di website/Booking Engine property, sehingga calon tamu bisa langsung bertanya tanpa meninggalkan halaman. Satu property bisa memiliki lebih dari satu widget (misalnya beda desain untuk beda tujuan).

:::caution[Gambar belum tersedia]
Tambahkan screenshot grid daftar Chat Widget (kondisi ada isi & kosong). Contoh: `![Daftar Chat Widget](../../../assets/guestchat/chat-widget-grid.png)`.
:::

## Membuat Widget Baru

Klik **New Widget**, lalu isi pengaturan pada 5 tab berikut:

### 1. General
Nama widget (internal), nama agent yang tampil ke tamu, toggle **Widget Active** (tampil/tidak ke pengunjung), dan **Management Mode** (jika aktif, pengunjung memilih property dulu sebelum chat — cocok untuk grup properti).

:::caution[Gambar belum tersedia]
Tambahkan screenshot tab General. Contoh: `![Chat Widget - Tab General](../../../assets/guestchat/chat-widget-tab-general.png)`.
:::

### 2. Appearance
Logo, banner (tampil di layar sambutan sebelum tamu mulai chat), floating icon (ikon tombol chat mengambang), font judul & isi (upload file TTF/OTF/WOFF), dan skema warna (background & teks) untuk tiap elemen widget.

:::caution[Gambar belum tersedia]
Tambahkan screenshot tab Appearance, termasuk color picker. Contoh: `![Chat Widget - Tab Appearance](../../../assets/guestchat/chat-widget-tab-appearance.png)`.
:::

### 3. Text & Layout
Welcome Title & Message (teks sambutan di banner), Placeholder Text (kolom input pesan), Greeting Message (bubble di atas tombol chat mengambang), serta posisi widget di layar (kiri/kanan, atas/bawah).

:::caution[Gambar belum tersedia]
Tambahkan screenshot tab Text & Layout, termasuk grid pemilihan posisi widget. Contoh: `![Chat Widget - Tab Text & Layout](../../../assets/guestchat/chat-widget-tab-text-layout.png)`.
:::

### 4. Quick Chat
Daftar pertanyaan/shortcut siap pakai yang bisa langsung diklik pengunjung untuk memulai chat (misalnya "Cek ketersediaan kamar"). Urutan item bisa diatur ulang dengan drag & drop.

:::caution[Gambar belum tersedia]
Tambahkan screenshot tab Quick Chat. Contoh: `![Chat Widget - Tab Quick Chat](../../../assets/guestchat/chat-widget-tab-quick-chat.png)`.
:::

### 5. Domains & Embed
Daftar domain website yang diizinkan menampilkan widget ini (**allowed origins** — widget tidak akan muncul di domain yang tidak terdaftar). Tab ini juga menampilkan kode embed untuk dipasang di website, namun baru tersedia setelah widget pertama kali disimpan.

:::caution[Gambar belum tersedia]
Tambahkan screenshot tab Domains & Embed. Contoh: `![Chat Widget - Tab Domains & Embed](../../../assets/guestchat/chat-widget-tab-domains-embed.png)`.
:::

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
