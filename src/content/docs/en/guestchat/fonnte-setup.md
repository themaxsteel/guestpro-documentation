---
title: "GuestChat – Fonnte (WhatsApp) Setup"
description: How to connect a Fonnte device to GuestChat, from device & webhook setup to token sync in the Merchant dashboard
---

Fonnte is used to connect the property's WhatsApp number to GuestChat. Setting up Fonnte requires three stages: configuring the device & webhook in the Fonnte dashboard, connecting the device to WhatsApp, and then syncing the token in the GuestPro Merchant dashboard.

## Stage 1 — Set Up the Device & Webhook in the Fonnte Dashboard

1. Open [fonnte.com](https://fonnte.com/), then Log in or Sign up for a Fonnte account first.

   ![Fonnte homepage, Login/Daftar button](../../../../assets/guestchat/fonnte-01-website-login.png)

2. In the Fonnte dashboard, open the **Device** menu.

   ![Device menu in the Fonnte dashboard sidebar](../../../../assets/guestchat/fonnte-02-device-menu.png)

3. Click **Add Device** if you don't have one yet.

   ![Add Device button on the Devices page](../../../../assets/guestchat/fonnte-03-add-device-button.png)

4. Fill in **Device Name** and **Device Number**, then enable the **Chatbot** and **Personal** toggles as shown, and click **Add Device**.

   ![Add Device form with the Chatbot and Personal toggles enabled](../../../../assets/guestchat/fonnte-04-add-device-form.png)

5. Click **Edit** on the newly created device to add a webhook.

   ![Edit button on the Device list](../../../../assets/guestchat/fonnte-05-edit-device-button.png)

6. In the **Webhook** field, enter the following URL, then click **Save/Update**:

   Webhook: `https://api.marketconnect.id/admin-gp/api/webhook/fonnte/receive-event-message`

   ![Webhook field on the Edit Device form](../../../../assets/guestchat/fonnte-06-webhook-field.png)

## Stage 2 — Connect the Device to WhatsApp

1. After the webhook is added, the device is still in **disconnect** status and not yet connected to WhatsApp.

   ![Device status still showing disconnect](../../../../assets/guestchat/fonnte-07-device-disconnected.png)

2. Click the **Connect** button on that device.

   ![Connect button on the Device list](../../../../assets/guestchat/fonnte-08-connect-button.png)

3. Choose a connection method (**QR** or **Number**), then follow the on-screen steps until finished.

   ![Connect method choice: QR or Number](../../../../assets/guestchat/fonnte-09-connect-method-modal.png)

4. Once connected successfully, the device status changes to **connect**.

   ![Device status changed to connect](../../../../assets/guestchat/fonnte-10-device-connected.png)

## Stage 3 — Sync the Token in the GuestPro Merchant Dashboard

1. Log in to [GuestPro Revenue Booster](https://revenue-booster.guestpro.net/), then open the **Integration** menu.

   ![Integration menu in the GuestPro dashboard](../../../../assets/guestchat/fonnte-11-guestpro-integration-menu.png)

2. On the Integration page, open the **Whatsapp** tab.

   ![Whatsapp tab on the Integration page](../../../../assets/guestchat/fonnte-12-integration-whatsapp-tab.png)

3. Inside the Whatsapp tab, select the **Fonnte** sub-tab. A **Fonnte Device Token** field will appear, still empty.

   ![Fonnte sub-tab under Integration Whatsapp](../../../../assets/guestchat/fonnte-13-whatsapp-fonnte-subtab.png)

   ![Empty Fonnte Device Token field](../../../../assets/guestchat/fonnte-14-guestpro-device-token-field.png)

**How to get the Fonnte Device Token:**

- Open the Fonnte dashboard → **Device** menu
- Click the **Token** icon on the connected device — the token is automatically copied to the clipboard

  ![Token automatically copied after clicking the Token icon](../../../../assets/guestchat/fonnte-15-fonnte-token-copied.png)

4. Back in the Merchant dashboard, paste the token into the **Fonnte Device Token** field, then click **Save**.

   ![Token pasted into the Fonnte Device Token field, Save button](../../../../assets/guestchat/fonnte-16-token-pasted-save.png)

5. Once saved, click **Refresh** then **Reconnect** to sync the device status.

   ![Refresh, Reconnect, and Disconnect buttons](../../../../assets/guestchat/fonnte-17-refresh-reconnect.png)

:::note[Note]
For the risks and limitations of using Fonnte's unofficial WhatsApp connection (e.g. for outbound/broadcast), see the note on the [Channel Setup & Integration page](/en/guestchat/channels/).
:::
