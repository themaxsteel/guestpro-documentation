---
title: Frontdesk – Reservation
description: Cara membuat, melihat, mencari, dan mengelola reservasi tamu di PMS
---

Reservation merupakan sub-modul yang dipergunakan untuk mengelola reservasi (Create, Edit, Delete & View Reservation). Halaman Reservation dapat diakses melalui **Front Desk → Reservation**.

## Reservation Chart (Kalender Reservasi)

Reservation Chart merupakan kalender reservasi yang menampilkan informasi reservasi. Reservasi yang sudah dibuat sebelumnya akan menempati (block) kalender reservasi sesuai dengan Room yang dipilih, sepanjang masa tinggal (Arrival Date hingga Departure Date).

Room Type dan nama Room ditampilkan di sebelah kiri kalender reservasi, sedangkan tanggal kalender ditampilkan di atas kalender. **Change Filter** dan konfigurasi kalender terdapat di pojok kanan atas kalender. Reservasi pada kalender memiliki warna yang berbeda tergantung status reservasinya.

### Warna Default Reservasi

| Warna | Status Reservasi |
|-------|------------------|
| Orange | Tentative |
| Kuning | Definite |
| Hijau | In-House |
| Merah | Check-Out |

### Status Reservasi

| Status | Keterangan |
|--------|-----------|
| Tentative | Reservasi yang membutuhkan konfirmasi dari tamu |
| Definite | Reservasi yang sudah dikonfirmasi atau pasti menginap di properti |
| In-house | Reservasi yang sudah Check-In |
| Check-Out | Reservasi yang sudah meninggalkan properti |

### Change Filter

Form filter muncul ketika tombol **Change Filter** diklik. Pengaturan filter yang dilakukan akan memengaruhi tampilan kalender reservasi.

| Field | Keterangan |
|-------|-----------|
| Start Date | Tanggal awal kalender |
| End Date | Tanggal akhir kalender |
| Room Type | Tipe kamar yang ditampilkan pada kalender |
| Icon | Jenis ikon yang ditampilkan pada kalender |

:::note
Field **Room Type** dan **Icon** pada Change Filter dapat dikosongkan.
:::

### Calendar Configuration

Calendar Configuration digunakan untuk mengatur tampilan kalender reservasi, meliputi Calendar Type, Use Unallocated, Calendar Label, Calendar Height, Room Column (Width), dan warna reservasi.

| Field | Keterangan |
|-------|-----------|
| Calendar Type | Mengatur urutan tampilan room pada Reservation Chart. **Normal**: room tidak dikelompokkan, urutan berdasarkan Position Calendar. **Group By Room Type**: room dikelompokkan berdasarkan Room Type, urutan berdasarkan nama Room Type |
| Calendar Label | Mengatur informasi reservasi yang ditampilkan. **Guest Name**: menampilkan nama tamu. **Folio**: menampilkan nomor folio |
| Calendar Height | Mengatur tinggi kalender (jika data lebih banyak, scrollbar akan muncul) |
| Room Column (Width) | Mengatur lebar kolom pada kalender |
| Warna reservasi | Pengaturan warna untuk masing-masing status reservasi |

Nilai default Calendar Configuration adalah Calendar Type: **Normal**, Calendar Label: **Guest Name** & **Folio** dicentang, Calendar Height: **500**, Room Column (Width): **100**.

## Create Reservation

Proses pembuatan reservasi dilakukan dengan menekan tombol **Create Reservation** pada sub-modul Reservation. Terdapat 3 pilihan aksi:

| Action | Keterangan |
|--------|-----------|
| Create Single Reservation | Membuat reservasi pemesanan satu kamar |
| Create Group Reservation | Membuat reservasi kelompok atau memesan lebih dari satu kamar |
| Create Hold Reservation | Membuat reservasi tentative yang memerlukan konfirmasi pemesanan dari tamu |

Reservasi yang dibuat akan langsung masuk ke kalender reservasi sesuai dengan Room Type, Arrival Date & Departure Date.

### 1. Create Single Reservation

1. Klik **Create Reservation**, lalu pilih **Create Single Reservation**.
2. Lengkapi form awal reservasi:

   | Field | Keterangan |
   |-------|-----------|
   | Arrival Date | Tanggal Check-In |
   | Night | Jumlah malam tamu menginap |
   | Departure Date | Tanggal Check-Out |
   | Reference No | Nomor referensi (misalnya No. Booking OTA), dapat dikosongkan |
   | Agent | Agen yang membawa tamu |
   | Room Type | Tipe kamar yang ingin ditempati |

   Night akan otomatis berubah ketika Departure Date ditentukan, begitu juga sebaliknya.

   :::note
   Jika tidak ada kamar tersedia (room penuh) pada Room Type, Arrival Date, dan Departure Date yang dipilih, sistem akan menampilkan informasi tersebut. Ubah Arrival Date, Departure Date, atau Room Type untuk melanjutkan.
   :::

3. Pilih **Room** yang tersedia, lalu isi jumlah tamu yang menginap (**Adult** & **Child**), **Special Request**, dan **Remark**. Special Request akan ditampilkan pada Print Registration Form, sedangkan Remark hanya dapat dilihat dari Reservation Detail & Guest List Daily.
4. Lengkapi **Guest Profile**. Field yang wajib diisi saat pembuatan reservasi hanya **Guest Name**, informasi lainnya dapat dilengkapi saat tamu Check-In.
5. Pilih **Rate** yang diinginkan tamu (hanya rate yang sudah terdaftar di Master Data dan sesuai kondisi setting pada master data yang dapat dipilih). Harga akan otomatis di-breakdown per tanggal sesuai jumlah Night reservasi, sesuai harga default di Master Data Rates. Harga dapat diubah per tanggal atau secara total melalui field **Total**.
6. Klik **Save** untuk menyimpan reservasi.

### 2. Create Group Reservation

1. Klik **Create Reservation**, lalu pilih **Create Group Reservation**.
2. Lengkapi form awal reservasi:

   | Field | Keterangan |
   |-------|-----------|
   | Arrival Date | Tanggal Check-In |
   | Night | Jumlah malam tamu menginap |
   | Departure Date | Tanggal Check-Out |
   | Reference No | Nomor referensi (misalnya No. Booking OTA), dapat dikosongkan |
   | Agent | Agen yang membawa tamu |
   | Is Hold Reservation | Diaktifkan jika reservasi group yang dibuat bersifat tentative |
   | Split Bill On Each Reservation | Diaktifkan untuk memisahkan bill per folio |

3. Klik **Check Room Available**.
4. Centang **Room Type** yang ingin digunakan, lalu klik **Next**.
5. Isi jumlah room pada masing-masing Room Type, **Total Adult** (jumlah tamu dewasa per kamar), **Total Child** (jumlah anak-anak per kamar), **Special Request**, dan **Remark**.
6. Pilih **Rate** untuk setiap Room Type (hanya rate yang sudah terdaftar di Master Data dan sesuai kondisi setting pada master data yang dapat dipilih). Harga akan otomatis di-breakdown per tanggal sesuai jumlah Night reservasi, dan dapat diubah per tanggal atau secara total melalui field **Total**.
7. Klik **Save** untuk menyimpan reservasi.

### 3. Create Hold Reservation

Proses pembuatan Hold Reservation (Tentative) hampir sama dengan Create Single Reservation, namun terdapat tambahan field **Length of Hold**, yaitu batas waktu konfirmasi yang dihitung sejak tanggal reservasi dibuat.

## Reservation Detail

Reservation Detail menampilkan informasi detail terkait reservasi. Halaman ini dapat diakses dengan mengklik reservasi pada Reservation Chart, dan informasinya dikelompokkan dalam 4 tab:

| Tab | Keterangan |
|-----|-----------|
| Reservation Detail | Menampilkan informasi Reservasi & Guest |
| Guest Bill | Menampilkan informasi tagihan (bill) |
| Master Rates | Menampilkan informasi rate yang diberikan |
| History | Menampilkan riwayat perubahan pada reservasi |

### Tombol Action pada Reservation Detail

| Tombol | Keterangan |
|--------|-----------|
| No Show | Menyembunyikan reservasi jika tamu tidak datang dan tidak ada konfirmasi kedatangan saat waktu check-in |
| Check-In | Mengubah status reservasi dari Definite menjadi Check-In |
| Cancel | Membatalkan Reservasi, Check-In, atau Check-Out |
| Edit | Melakukan perubahan terhadap reservasi (lihat sub-aksi di bawah) |
| Payment | Memproses pembayaran tagihan reservasi |
| Add Product | Menambahkan produk pada reservasi |
| Print | Mencetak Guest Bill atau Registration Form |

Sub-aksi pada tombol **Edit**:

| Sub-Aksi | Keterangan |
|----------|-----------|
| Edit Reservation | Mengubah reservasi yang sudah dibuat sebelumnya |
| Edit Rates | Mengubah rate atau harga yang diberikan kepada tamu |
| Add Extra Charge | Menambahkan tagihan kamar (Additional Room Charge, Extra Adult, Extra Bed, Extra Child, Late Check Out, atau Other) |
| Rebate | Mengurangi tagihan kamar |
| Add Guest Folio | Menambahkan folio baru pada reservasi |
| Edit Guest Profile | Mengubah atau menambahkan data tamu |
| Early Check-Out | Mengurangi waktu tinggal tamu dan otomatis mengurangi tagihan (Room Charge) |
| Extend | Menambahkan atau memperpanjang waktu tinggal tamu |
| Move Room | Memindahkan reservasi. Terdapat 2 jenis: **Move Room Full** (memindahkan reservasi secara keseluruhan) dan **Move Room Partial** (memindahkan reservasi sebagian) |
| Change Icon | Mengubah ikon pada reservasi |
| Open Availability | Membuka ketersediaan kamar untuk room yang sudah memiliki reservasi di dalamnya |

:::note
Extra Charge dan Rebate yang sudah dibuat dapat diedit atau dihapus melalui **Reservation Detail → Guest Bill**.
:::

## Search Reservation

Search Reservation digunakan untuk mencari reservasi yang sudah dibuat sebelumnya. Halaman ini dapat diakses melalui tombol **Search Reservation** pada halaman **Frontdesk → Reservation**.

Filter yang tersedia pada Search Reservation:

| Filter | Keterangan |
|--------|-----------|
| Date of Reservation | Filter berdasarkan tanggal dibuatnya reservasi |
| Date of Arrival | Filter berdasarkan tanggal kedatangan tamu |
| Date of Departure | Filter berdasarkan tanggal tamu Check-Out |
| No Use Date Filter | Mengabaikan filter tanggal (menampilkan seluruh data yang terdaftar di sistem) |
| Folio No | Pencarian menggunakan nomor Folio |
| Guest Name | Pencarian menggunakan nama tamu |
| Reference No | Pencarian menggunakan Reference No |
| Room | Pencarian menggunakan nama kamar |
| Open Availability | Pencarian berdasarkan kamar yang tersedia karena sudah dilakukan Open Availability |

## Room Availability

Room Availability menampilkan informasi jumlah kamar yang tersedia berdasarkan Room Type dan tanggal. Halaman ini memiliki fitur filter tanggal serta tombol untuk export data Room Availability ke Excel.
