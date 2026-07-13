---
title: Master Data – Room
description: Cara mendaftarkan, mengedit, dan menghapus data Room (termasuk Virtual Room) di PMS
---

Fitur Master Data Room digunakan untuk mengelola kamar-kamar pada sebuah properti. Fitur ini memungkinkan Anda mendaftarkan, mengedit, atau menghapus kamar yang tersedia di properti.

Halaman Master Data Room (dapat diakses melalui **Master Data → Room**) menampilkan informasi kamar yang sudah terdaftar, meliputi nama, room type, bed type, position calendar, dan status virtual room. Halaman ini memiliki empat tombol: **Add New**, **Action**, **Edit**, dan **Delete**.

## Cara Menambahkan Room Baru

1. Klik tombol **Add New** pada halaman Master Data Room.
2. Lengkapi form pendaftaran dengan field berikut:

| Field | Keterangan |
|-------|-----------|
| Name | Nama kamar |
| Room Type | Pilih dari room type yang sudah terdaftar |
| Bed Type | Pilih dari bed type yang sudah terdaftar |
| Position Calendar | Nomor urut kamar pada Reservation Calendar (dimulai dari 0) |
| Tags | Digunakan untuk mengelompokkan kamar |

:::note
Semua field wajib diisi. Proses pendaftaran tidak dapat dilanjutkan jika ada field yang kosong.
:::

3. Klik **Submit** untuk menyimpan, atau **Cancel** untuk membatalkan.

## Cara Menambahkan Virtual Room

Virtual room (main room) terdiri dari beberapa child room. Sebagai contoh, sebuah villa berfungsi sebagai main room yang berisi beberapa kamar tamu di dalamnya.

Ketika main room dipesan, seluruh child room di dalamnya otomatis menjadi tidak tersedia. Sebaliknya, jika salah satu atau seluruh child room sudah dipesan, main room tidak dapat dipilih untuk reservasi pada tanggal tersebut.

Langkah membuat virtual room:

1. Klik tombol **Add New**, lalu pilih **New Virtual Room**.
2. Lengkapi form dengan field berikut:

| Field | Keterangan |
|-------|-----------|
| Name | Nama kamar |
| Room Type | Pilih dari room type yang sudah terdaftar |
| Position Calendar | Nomor urut pada Reservation Calendar (dimulai dari 0) |
| Room Child | Pilih satu atau lebih kamar yang sudah terdaftar sebagai penyusun virtual room |

:::note
Semua field, termasuk pemilihan child room, wajib diisi.
:::

3. Klik **Submit** untuk menyimpan, atau **Cancel** untuk membatalkan.

## Cara Mengedit Room

Klik tombol **Edit** pada halaman Master Data Room untuk mengubah data room atau virtual room yang sudah terdaftar.

## Cara Menghapus Room

Klik tombol **Delete** pada halaman Master Data Room untuk menghapus data room atau virtual room yang sudah terdaftar.
