---
title: Purchase Request (PR) & Purchase Order (PO)
description: Panduan lengkap membuat dan memproses Purchase Request (PR) dan Purchase Order (PO) di modul Logistic
---

## Purchase Request (PR)

Purchase Request (PR) merupakan sub modul yang digunakan untuk membuat atau mendata produk yang dibutuhkan oleh departemen dan harus di-**Approve** atau disetujui oleh atasan (Position yang lebih tinggi). Data yang tampil hanya PR sesuai dengan departemen yang diaktifkan pada Employ. Modul Purchase Request di GuestPro dapat diakses dari **Modul Logistic → Purchase Request**.

### Purchase Request List

Halaman pertama yang tampil ketika mengakses Purchase Request adalah **PR List**. Halaman ini menampilkan tabulasi sesuai dengan status dari PR:

| Tab | Keterangan |
|---|---|
| PR Requested | Status ketika PR pertama kali dibuat & masih dalam proses approval. |
| PR Approved | Status ketika PR sudah di-approve & bisa dilanjutkan ke PO. |
| PR Closed | Status PR yang sudah ditutup. |
| PR Incompleted | Status jika PR sudah dibuat menjadi PO, namun masih ada item PR yang belum diproses menjadi PO. |
| PR Completed | Status untuk PR yang semua produknya sudah diproses menjadi PO. |

Halaman PR List menampilkan informasi berikut untuk setiap PR:

| Field | Keterangan |
|---|---|
| PR Number | Nomor dari PR yang dibuat. |
| PO Number | Nomor PO ketika PR sudah menjadi PO. |
| Department | Departemen dari user yang membuat PR. |
| PR Date | Tanggal dari PR. |
| Created By | User yang membuat PR. |
| Created Time | Waktu PR dibuat. |
| Notes | Catatan dari PR yang dibuat. |
| Total | Total amount dari PR. |

### Membuat Purchase Request

Proses pembuatan Purchase Request dilakukan dengan menekan tombol **Create new PR** pada halaman Purchase Request List. Pembuatan PR berfokus pada produk (nama produk) dan jumlah yang dipesan.

| Field | Keterangan |
|---|---|
| PR No | Nomor dari PR (jika dikosongkan akan dibuat otomatis oleh sistem). |
| PR Date | Tanggal dari PR. |
| PR Due Date | Tanggal jatuh tempo PR (belum berpengaruh terhadap modul lain). |
| Departement | Departemen yang membuat PR. |
| Add New Product | Pintasan akses ke **Master Data → Create Product Inventory** untuk langsung membuat produk inventory (memerlukan akses ke Master Data Product Inventory). |
| Add Product | Digunakan untuk menambah list produk & memilih produk yang memiliki inventory di master data. |

Informasi produk pada form PR:

| Field | Keterangan |
|---|---|
| Action (X) | Menghapus produk yang dipilih sebelumnya. |
| Product Name | Nama produk yang dipilih, dapat diklik untuk memilih produk lain. |
| Units | Unit dari produk yang dipilih. |
| QOH | Stock system per tanggal PR. |
| QTY | Stock atau jumlah yang dipesan. |
| Price | Harga terakhir dari produk. |
| Sub Total | Nilai Price dikali Qty. |

Setelah form terisi, klik tombol **Save** untuk menyimpan, atau **Cancel** untuk membatalkan.

### Detail Purchase Request

Detail Purchase Request diakses dengan menekan **PR Number**. Sistem akan menampilkan informasi detail dari PR beserta tombol yang digunakan untuk memproses PR:

| Tombol | Keterangan |
|---|---|
| Edit | Mengubah informasi dari PR yang dibuat. |
| Approve | Mereview & menyetujui PR. |
| UnApprove | Membatalkan Approve (hanya bisa dilakukan jika level yang lebih tinggi belum approve). |
| Delete | Menghapus PR (hanya jika PR belum di-approve & masih diproses oleh pembuat PR). |
| Close PR | Menutup PR. |
| Print | Mencetak PR. |

Detail PR memiliki tabulasi berikut:

| Tab | Keterangan |
|---|---|
| Transaction Detail | Informasi PR yang dibuat (nama produk, Qty, QOH, Price & Sub Total dari PR). |
| History | Catatan atau action yang pernah dilakukan oleh tim pada PR. |
| Approval Status | Informasi status dari PR (dapat diklik untuk melihat Position atau user yang harus approve). |

Status PR:

| Status | Keterangan |
|---|---|
| Pending | PR masih dalam proses pengajuan. |
| Approved | PR sudah disetujui & bisa dilanjutkan pada pembuatan PO. |

## Purchase Order (PO)

Purchase Order (PO) merupakan sub modul yang digunakan untuk memproses PR atau membentuk PO dari PR (assign produk pada PR ke supplier). Satu PR dapat dibentuk menjadi beberapa PO sesuai dengan jumlah supplier yang dipilih ketika pembentukan PO dari PR. Modul Purchase Order di GuestPro dapat diakses dari **Modul Logistic → Purchase Order**.

### PO List

**PO List** merupakan halaman pertama yang tampil ketika mengakses Purchase Order. Halaman ini menampilkan tabulasi sesuai dengan status dari PO:

| Tab | Keterangan |
|---|---|
| PO Requested | Status ketika PO baru dibuat & siap dikirim ke supplier. |
| PO Closed | Status untuk PO yang tidak dilanjutkan. |
| In Complete | Status PO dengan kondisi receiving hanya sebagian produk. |
| Complete | Status PO yang sudah direceiving semua produknya. |

Halaman PO List menampilkan informasi berikut:

| Field | Keterangan |
|---|---|
| PO Number | Nomor PO. |
| PR Number | PR asal dari PO. |
| Department | Departemen yang membuat PR/PO. |
| PO Date | Tanggal PO. |
| Supplier Name | Nama Supplier dari PO. |
| Created By | User yang membuat PO. |
| Created Time | Waktu dibuatnya PO. |
| Notes | Catatan dari PO. |
| Total | Total nilai PO. |

### Detail Purchase Order

Detail Purchase Order diakses dengan menekan **PO Number**. Sistem akan menampilkan informasi detail dari PO beserta tombol yang digunakan untuk memproses PO:

| Tombol | Keterangan |
|---|---|
| Edit | Mengubah Qty & harga dari PO yang dibuat. |
| Close PO | Menutup PO. |
| Receiving | Memproses Receiving langsung dari PO. |
| Delete | Menghapus PO (hanya jika PO belum diproses lebih lanjut). |
| Print | Mencetak PO. |

### Membuat PO dari PR

Pembuatan PO dari PR dilakukan dengan menekan tombol **Search PR**. Sistem secara otomatis menampilkan list PR dengan status **Approved** dan **Incomplete**, kemudian user diminta untuk memilih.

Dalam proses pembentukan PO dari PR, user diminta untuk memilih supplier dari masing-masing produk dan menyesuaikan Qty produk per supplier. PO yang terbentuk menyesuaikan dengan jumlah supplier yang dipilih dalam pembuatan PO dari PR.

### Membuat PO Tanpa PR

Membuat PO tanpa PR dilakukan dengan menekan tombol **Create** pada halaman PO List. Proses ini mewajibkan user untuk menginput tanggal PO, departemen, produk, Qty produk, dan harga produk (tanpa validasi & batasan seperti pada pembuatan PO dari PR).
