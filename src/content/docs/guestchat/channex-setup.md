---
title: "GuestChat – Setup Channex (Channel Manager / OTA)"
description: Cara menghubungkan Channex ke GuestChat, dari instalasi app, webhook, hingga aktivasi Chat di dashboard
---

Channex berperan sebagai *channel manager* yang menghubungkan pesan dari OTA (Booking.com, Airbnb, Expedia, dan lainnya) ke inbox GuestChat. Setup Channex membutuhkan empat tahap: instalasi app di Channex, integrasi webhook, koneksi ke dashboard GuestPro, dan aktivasi fitur Chat di Admin GP.

## Tahap 1 — Install Channex Messages

1. Login ke akun Channex property.
2. Klik menu **Applications** di navbar atas.
3. Pilih **Manage Apps** dari dropdown.

   ![Menu Applications di navbar Channex](../../../assets/guestchat/channex-01-applications-menu.png)

4. Di halaman Applications, temukan dan klik **Channex Messages**.

   ![Daftar Manage Apps, pilih Channex Messages](../../../assets/guestchat/channex-02-manage-apps.png)

5. Klik tombol **Install** pada popup konfirmasi.

   ![Popup konfirmasi Install Channex Messages](../../../assets/guestchat/channex-03-install-confirm.png)

## Tahap 2 — Integrasi Webhook

1. Klik avatar/nama akun di pojok kanan atas, pilih **Organization**.

   ![Membuka menu Organization dari avatar akun](../../../assets/guestchat/channex-04-organization-menu.png)

2. Di sidebar kiri, pilih **Property Webhooks**.

   ![Sidebar Property Webhooks](../../../assets/guestchat/channex-05-property-webhooks.png)

3. Klik tombol **Create** di pojok kanan atas.
4. Isi form Create Webhook:
   - **Trigger:** New Message + New Review
   - **Callback URL:** `https://api.marketconnect.id/admin-gp/api/webhook/channex-messaging/receive-event-message`
   - **Property:** pilih property yang akan disetup
   - **Is Active:** centang ✅
   - **Send Data:** centang ✅

   ![Form Create Webhook diisi lengkap](../../../assets/guestchat/channex-06-create-webhook-form.png)

   :::tip[Sebelum Save]
   Sebelum menyimpan, klik **Send test message** di bagian **Test** untuk memastikan koneksi webhook berhasil. Jika berhasil, akan muncul response **Success** dengan status `200`.
   :::

   ![Response Success status 200 dari test message](../../../assets/guestchat/channex-07-test-message-success.png)

5. Klik **Save**.

## Tahap 3 — Integrasi di Dashboard GuestPro (Booking Engine)

1. Login ke GuestPro dashboard merchant.
2. Masuk ke **Setting → Integration → Channel Manager**.
3. Pilih **CHANNEX** sebagai Channel Manager.
4. Isi dua field berikut: **CM Hotel ID** dan **CM API Key**.

   ![Field CM Hotel ID dan CM API Key di dashboard GuestPro](../../../assets/guestchat/channex-08-guestpro-channel-manager-fields.png)

**Cara mendapat CM Hotel ID:**

- Buka Channex → menu **Properties**
- Klik **Actions → Edit** pada property yang dimaksud
- Salin ID yang tertera di bagian atas form Edit Property

  ![Daftar Properties di Channex](../../../assets/guestchat/channex-09-properties-list.png)

  ![ID property pada form Edit Property](../../../assets/guestchat/channex-10-edit-property-id.png)

**Cara mendapat CM API Key:**

- Buka Channex → klik avatar → **Organization**
- Pilih **API Keys** di sidebar kiri
- Gunakan API Key yang sudah ada, atau klik **Create new API Key**

  ![Halaman API Keys di Channex](../../../assets/guestchat/channex-11-api-keys.png)

5. Setelah kedua field terisi, klik **Save**.

   ![Menyimpan konfigurasi Channel Manager](../../../assets/guestchat/channex-12-save-integration.png)

## Tahap 4 — Aktifkan Guestchat di Admin GP

1. Buka **MarketConnect → Merchant Detail** property yang dimaksud.
2. Di tab **General**, cari toggle **Chat App**.
3. Aktifkan toggle tersebut.

   ![Toggle Chat App di Merchant Detail](../../../assets/guestchat/channex-13-merchant-chat-app-toggle.png)

4. Cek di GuestPro dashboard merchant — menu **Chat** seharusnya sudah muncul di sidebar kiri.

   ![Menu Chat muncul di sidebar GuestPro](../../../assets/guestchat/channex-14-chat-menu-appears.png)
