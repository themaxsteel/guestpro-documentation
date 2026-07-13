---
title: Fitur Deposit atau DP (Down Payment)
description: Cara mencatat dan menggunakan Deposit atau DP dari tamu maupun agent
---

Fitur Deposit merupakan fitur yang dapat digunakan untuk mendaftarkan atau mencatat titipan pembayaran yang dilakukan oleh Guest (Tamu) atau Agent.

:::note[Pengakuan Deposit]
Deposit diakui ketika reservasi sudah check-in dan sudah melalui Night Audit atau Posting Jurnal (jika menggunakan fitur Posting Jurnal).
:::

## 1. Mencatat Deposit

Pencatatan Deposit pada GuestPro Cloud PMS dapat dilakukan dengan 2 cara, yaitu: menambahkan ketika pembuatan reservasi (**Create Reservation**) dan/atau ditambahkan dari menu **Accounting → Deposit**.

### 1.1. Menambahkan Deposit ketika Create Reservasi

Penambahan atau pencatatan Deposit ketika pembuatan reservasi dapat dilakukan dengan mencentang **Add Deposit** pada formulir **Create Reservation**, dimana nantinya Deposit didaftarkan pada tamu sesuai dengan nama tamu yang dipilih (Guest Profile).

### 1.2. Menambahkan Deposit dari Modul Accounting

Penambahan deposit dari modul accounting dapat dilakukan pada **Accounting → Deposit**. Penambahan deposit pada modul ini dikelompokkan menjadi 2, yaitu: **Deposit Customer** dan **Deposit Agent**.

| Field | Keterangan |
|-------|-----------|
| Date | Informasi tanggal dilakukannya Deposit |
| Transaction No. | Informasi nomor transaksi (dapat dikosongkan, maka dibuat otomatis oleh sistem) |
| Payment Method | Metode pembayaran yang digunakan untuk memberikan Deposit pada Property |
| Customer/Agent | Informasi Agent atau Customer yang melakukan Deposit |
| Amount | Informasi jumlah deposit |
| Notes | Catatan untuk Deposit (dapat dikosongkan) |

## 2. Menggunakan Deposit

### 2.1. Menggunakan Deposit pada Reservasi

Penggunaan Deposit dapat dilakukan dengan menekan tombol **Payment** pada reservasi. Jika Tamu atau Agent dari reservasi memiliki deposit, maka akan muncul tabel Deposit. Payment Deposit otomatis mengurangi Outstanding dari reservasi.

### 2.2. Menggunakan Deposit pada POS

Penggunaan Deposit dapat dilakukan dengan menambahkan informasi customer atau agent pada transaksi. Tab **By Deposit** akan muncul ketika melakukan payment jika agent dan/atau customer yang ditambahkan pada transaksi memiliki Deposit.

:::note
Deposit yang sudah digunakan sebelumnya otomatis akan dimasukkan ke **Deposit On Hold**, dan pengakuan Deposit dilakukan ketika sudah dilakukan Night Audit atau pukul 23.59.
:::
