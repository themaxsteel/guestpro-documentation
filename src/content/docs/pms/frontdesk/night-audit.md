---
title: Frontdesk – Night Audit
description: Cara melakukan proses Night Audit untuk mengakhiri hari (tutup buku harian)
---

Night Audit merupakan sub-modul yang dipergunakan untuk proses mengakhiri hari (tutup buku harian). Night Audit akan mengubah tanggal sistem ke hari berikutnya, misalnya dari tanggal 1 Januari menjadi 2 Januari.

:::note
Tanggal sistem pada aplikasi GuestPro tidak mengikuti tanggal harian secara otomatis. Perubahan tanggal sistem hanya terjadi setelah proses Night Audit dijalankan.
:::

Night Audit dapat diakses melalui **Front Desk → Night Audit**.

## Halaman Night Audit

Halaman Night Audit menampilkan Data Transaksi beserta tiga tombol aksi:

| Tombol | Keterangan |
|--------|-----------|
| Export | Export Data Transaksi ke dalam Excel atau format sejenis |
| Print | Mencetak Data Transaksi (PDF) |
| Proses Night Audit | Menjalankan proses Night Audit |

Data Transaksi berisi informasi transaksi Room Charge, Point of Sale, dan Payment.

:::caution
Tombol **Proses Night Audit** hanya muncul setelah semua reservasi selesai diproses (tidak ada Unclear Reservation). Unclear Reservation adalah kondisi ketika masih ada reservasi yang belum selesai, misalnya reservasi berstatus Definite yang belum di-Check In, di-Cancel, atau ditandai No Show, maupun reservasi berstatus Check-In yang belum diproses Check Out. Reservasi tersebut harus diselesaikan terlebih dahulu sebelum Night Audit dapat dijalankan.
:::

## Cara Melakukan Night Audit

1. Buka menu **Front Desk → Night Audit**.
2. Pastikan tidak ada Unclear Reservation pada Data Transaksi. Jika masih ada, selesaikan terlebih dahulu (Check-In, Check-Out, Cancel, atau No Show).
3. Klik tombol **Proses Night Audit** untuk mengakhiri hari.
