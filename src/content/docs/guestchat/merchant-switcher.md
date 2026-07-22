---
title: "Ganti Property (Multi-Property Switcher)"
description: Cara berpindah antar property untuk akun yang mengelola lebih dari satu property
---

Untuk akun yang mengelola **lebih dari satu property**, GuestChat menyediakan switcher untuk berpindah tanpa perlu logout.

## Lokasi Switcher

**Lokasi:** ikon logo property, di bagian bawah sidebar kiri (di atas ikon Settings).

- Jika akun hanya mengelola **satu property**, ikon ini tidak bisa diklik (tidak ada badge switch).
- Jika akun mengelola **lebih dari satu property**, muncul badge kecil ikon panah bolak-balik di ikon tersebut.
- Jika ada pesan yang belum dibaca di property lain, muncul **titik merah** sebagai penanda.

:::caution[Gambar belum tersedia]
Tambahkan screenshot ikon switcher di sidebar (dengan badge switch & titik merah unread). Contoh: `![Sidebar Merchant Switcher](../../../assets/guestchat/merchant-switcher-sidebar-badge.png)`.
:::

## Cara Berpindah Property

1. Klik ikon switcher untuk membuka daftar **Your Properties**.
2. Property yang sedang aktif ditandai label **Active**; property lain menampilkan jumlah pesan belum dibaca (jika ada).
3. Klik property tujuan untuk berpindah.

:::caution[Gambar belum tersedia]
Tambahkan screenshot popup daftar property. Contoh: `![Popup Your Properties](../../../assets/guestchat/merchant-switcher-popup-list.png)`.
:::

Selama proses berpindah, layar menampilkan overlay **"Switching to [nama property]..."**, lalu halaman otomatis reload dengan data property baru (percakapan, widget, integrasi channel, dan permission staff ikut diperbarui).

:::caution[Gambar belum tersedia]
Tambahkan screenshot overlay loading saat switching. Contoh: `![Overlay Switching Property](../../../assets/guestchat/merchant-switcher-loading-overlay.png)`.
:::

:::note[Catatan]
Tombol refresh di dalam popup bisa dipakai untuk memuat ulang daftar property terbaru, misalnya jika ada property baru yang baru saja ditambahkan ke akun.
:::
