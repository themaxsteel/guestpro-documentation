---
title: Pembuatan User & Role
description: Cara membuat Role, membuat User, dan mengganti password di sistem GuestPro
---

Pembuatan user baru bertujuan untuk menambahkan user atau pengguna yang diizinkan untuk mengakses sistem GuestPro untuk team di property. Pembuatan User atau Role dapat dilakukan oleh user yang memiliki akses untuk melakukan action tersebut pada sistem GuestPro.

Pembuatan user diawali dengan pembuatan Role (hak akses atau Action) yang dapat dilakukan oleh user bersangkutan. Satu role dapat digunakan untuk lebih dari satu user, namun satu user hanya bisa menggunakan satu role.

## 1. Create Role

Pembuatan Role dapat dilakukan dari menu **Master Data → Role**.

Halaman Role menampilkan role yang terdaftar sebelumnya dan 3 tombol, yaitu **Add New**, **Edit**, dan **Delete**. **Add New** berfungsi untuk menambahkan atau membuat Role baru, **Edit** untuk melakukan perubahan pada Role yang sudah dibuat sebelumnya, dan **Delete** digunakan untuk menghapus Role yang sudah dibuat sebelumnya.

1. Klik tombol **Add New** di pojok kanan atas halaman Role List.
2. Isi informasi dan pilih hak akses yang dapat digunakan oleh user. Informasi yang perlu dilengkapi pada form Add Role:
   - **Role Name** diisi dengan nama role yang dibuat.
   - Tab **Modul** merupakan pengelompokan dari hak akses yang dapat dipilih pada modul.
   - Tombol *check* digunakan untuk memilih hak akses atau action yang dapat dilakukan.
   - **Action Name** merupakan informasi dari fitur atau action yang dipilih.
   - **Action Location** merupakan informasi lokasi dari fitur atau action.

## 2. Create User

Pembuatan User dapat dilakukan dari menu **Master Data → User Management**. Halaman ini berfungsi untuk pengelolaan pengguna atau user yang diizinkan untuk mengakses sistem property.

Halaman User Management (User List) menampilkan informasi user yang terdaftar dan 4 tombol pengaturan:

| Tombol | Fungsi |
|--------|--------|
| Add New | Menambahkan atau mendaftarkan user baru |
| POS Setting | Mengatur POS yang dapat diakses oleh user bersangkutan |
| Edit | Melakukan perubahan pada user yang sudah dibuat (tidak dapat mengubah password) |
| Delete | Menghapus user |

1. Klik tombol **Add New** untuk menambahkan user baru.
2. Lengkapi form Add User:

| Field | Keterangan |
|-------|-----------|
| Name | Diinputkan dengan nama team/pemilik user |
| Username | Diinputkan dengan nama pengguna atau unique name yang digunakan untuk login pada halaman login (username diinputkan tanpa spasi) |
| Role | Diisikan dengan hak akses atau level akses yang sudah didaftarkan |
| Password | Diinputkan dengan kata sandi yang ingin digunakan |

## 3. Change Password

Change Password berfungsi untuk mengubah kata sandi yang digunakan untuk login aplikasi. Penggantian kata sandi dapat dilakukan ketika user bersangkutan sudah login ke aplikasi GuestPro.

1. Klik menu **Profile**, lalu pilih **Change Password**.
2. Lengkapi form Change User Password:

| Field | Keterangan |
|-------|-----------|
| Current Password | Wajib diisi dengan password yang digunakan untuk login ke sistem |
| New Password | Wajib diisi dengan password baru yang ingin digunakan |
| Renew Password | Wajib diisi sekali lagi dengan password yang sama seperti pada field New Password |
