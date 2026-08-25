---
title: "GuestChat – Setup Fonnte (WhatsApp)"
description: Cara menghubungkan device Fonnte ke GuestChat, dari setup device & webhook hingga sinkronisasi token di dashboard Merchant
---

Fonnte digunakan untuk menghubungkan nomor WhatsApp property ke GuestChat. Setup Fonnte membutuhkan tiga tahap: konfigurasi device & webhook di dashboard Fonnte, menghubungkan device ke WhatsApp, lalu sinkronisasi token di dashboard Merchant GuestPro.

## Tahap 1 — Setup Device & Webhook di Dashboard Fonnte

1. Buka [fonnte.com](https://fonnte.com/), lalu Login atau Daftar akun Fonnte terlebih dahulu.

   ![Halaman utama Fonnte, tombol Login/Daftar](../../../assets/guestchat/fonnte-01-website-login.png)

2. Di dashboard Fonnte, buka menu **Device**.

   ![Menu Device di sidebar dashboard Fonnte](../../../assets/guestchat/fonnte-02-device-menu.png)

3. Klik **Add Device** jika belum punya device sebelumnya.

   ![Tombol Add Device di halaman Devices](../../../assets/guestchat/fonnte-03-add-device-button.png)

4. Isi **Device Name** dan **Device Number**, lalu aktifkan toggle **Chatbot** dan **Personal** seperti contoh, kemudian klik **Add Device**.

   ![Form Add Device dengan toggle Chatbot dan Personal aktif](../../../assets/guestchat/fonnte-04-add-device-form.png)

5. Klik **Edit** pada device yang baru dibuat untuk menambahkan webhook.

   ![Tombol Edit pada daftar Device](../../../assets/guestchat/fonnte-05-edit-device-button.png)

6. Pada field **Webhook**, masukkan URL berikut, lalu klik **Save/Update**:

   Webhook: `https://api.marketconnect.id/admin-gp/api/webhook/fonnte/receive-event-message`

   ![Field Webhook pada form Edit Device](../../../assets/guestchat/fonnte-06-webhook-field.png)

## Tahap 2 — Hubungkan Device ke WhatsApp

1. Setelah webhook ditambahkan, device masih berstatus **disconnect** dan belum terhubung langsung ke WhatsApp.

   ![Status device masih disconnect](../../../assets/guestchat/fonnte-07-device-disconnected.png)

2. Klik tombol **Connect** pada device tersebut.

   ![Tombol Connect pada daftar Device](../../../assets/guestchat/fonnte-08-connect-button.png)

3. Pilih metode koneksi (**QR** atau **Number**), lalu ikuti langkah yang ditampilkan sampai selesai.

   ![Pilihan metode Connect: QR atau Number](../../../assets/guestchat/fonnte-09-connect-method-modal.png)

4. Setelah berhasil terhubung, status device berubah menjadi **connect**.

   ![Status device berubah menjadi connect](../../../assets/guestchat/fonnte-10-device-connected.png)

## Tahap 3 — Integrasi Token di Dashboard Merchant GuestPro

1. Login ke [GuestPro Revenue Booster](https://revenue-booster.guestpro.net/), lalu buka menu **Integration**.

   ![Menu Integration di dashboard GuestPro](../../../assets/guestchat/fonnte-11-guestpro-integration-menu.png)

2. Pada halaman Integration, buka tab **Whatsapp**.

   ![Tab Whatsapp pada halaman Integration](../../../assets/guestchat/fonnte-12-integration-whatsapp-tab.png)

3. Di dalam tab Whatsapp, pilih sub-tab **Fonnte**. Akan tampil field **Fonnte Device Token** yang masih kosong.

   ![Sub-tab Fonnte pada Integration Whatsapp](../../../assets/guestchat/fonnte-13-whatsapp-fonnte-subtab.png)

   ![Field Fonnte Device Token yang masih kosong](../../../assets/guestchat/fonnte-14-guestpro-device-token-field.png)

**Cara mendapat Fonnte Device Token:**

- Buka dashboard Fonnte → menu **Device**
- Klik ikon **Token** pada device yang sudah terhubung — token otomatis tersalin ke clipboard

  ![Token otomatis tersalin setelah klik ikon Token](../../../assets/guestchat/fonnte-15-fonnte-token-copied.png)

4. Kembali ke dashboard Merchant, tempel (paste) token ke field **Fonnte Device Token**, lalu klik **Save**.

   ![Token ditempel ke field Fonnte Device Token, tombol Save](../../../assets/guestchat/fonnte-16-token-pasted-save.png)

5. Setelah tersimpan, klik **Refresh** lalu **Reconnect** untuk menyinkronkan status device.

   ![Tombol Refresh, Reconnect, dan Disconnect](../../../assets/guestchat/fonnte-17-refresh-reconnect.png)

:::note[Catatan]
Untuk risiko dan batasan penggunaan koneksi WhatsApp tidak resmi via Fonnte (misalnya untuk outbound/broadcast), lihat catatan pada [halaman Setup & Integrasi Kanal](/guestchat/channels/).
:::
