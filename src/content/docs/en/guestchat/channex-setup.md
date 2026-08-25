---
title: "GuestChat – Channex Setup (Channel Manager / OTA)"
description: How to connect Channex to GuestChat, from app installation and webhook to activating Chat in the dashboard
---

Channex acts as a *channel manager* that connects messages from OTAs (Booking.com, Airbnb, Expedia, and others) to the GuestChat inbox. Setting up Channex requires four stages: installing the app in Channex, webhook integration, connecting to the GuestPro dashboard, and activating the Chat feature in Admin GP.

## Stage 1 — Install Channex Messages

1. Log in to the property's Channex account.
2. Click the **Applications** menu in the top navbar.
3. Select **Manage Apps** from the dropdown.

   ![Applications menu in the Channex navbar](../../../../assets/guestchat/channex-01-applications-menu.png)

4. On the Applications page, find and click **Channex Messages**.

   ![Manage Apps list, select Channex Messages](../../../../assets/guestchat/channex-02-manage-apps.png)

5. Click the **Install** button on the confirmation popup.

   ![Install Channex Messages confirmation popup](../../../../assets/guestchat/channex-03-install-confirm.png)

## Stage 2 — Webhook Integration

1. Click the account avatar/name in the top-right corner, select **Organization**.

   ![Opening the Organization menu from the account avatar](../../../../assets/guestchat/channex-04-organization-menu.png)

2. In the left sidebar, select **Property Webhooks**.

   ![Property Webhooks sidebar](../../../../assets/guestchat/channex-05-property-webhooks.png)

3. Click the **Create** button in the top-right corner.
4. Fill in the Create Webhook form:
   - **Trigger:** New Message + New Review
   - **Callback URL:** `https://api.marketconnect.id/admin-gp/api/webhook/channex-messaging/receive-event-message`
   - **Property:** select the property being set up
   - **Is Active:** check ✅
   - **Send Data:** check ✅

   ![Create Webhook form fully filled in](../../../../assets/guestchat/channex-06-create-webhook-form.png)

   :::tip[Before saving]
   Before saving, click **Send test message** in the **Test** section to confirm the webhook connection is successful. If successful, a **Success** response with status `200` will appear.
   :::

   ![Success response status 200 from test message](../../../../assets/guestchat/channex-07-test-message-success.png)

5. Click **Save**.

## Stage 3 — Integration in the GuestPro Dashboard (Booking Engine)

1. Log in to the GuestPro merchant dashboard.
2. Go to **Setting → Integration → Channel Manager**.
3. Select **CHANNEX** as the Channel Manager.
4. Fill in the following two fields: **CM Hotel ID** and **CM API Key**.

   ![CM Hotel ID and CM API Key fields in the GuestPro dashboard](../../../../assets/guestchat/channex-08-guestpro-channel-manager-fields.png)

**How to get the CM Hotel ID:**

- Open Channex → **Properties** menu
- Click **Actions → Edit** on the relevant property
- Copy the ID shown at the top of the Edit Property form

  ![Properties list in Channex](../../../../assets/guestchat/channex-09-properties-list.png)

  ![Property ID on the Edit Property form](../../../../assets/guestchat/channex-10-edit-property-id.png)

**How to get the CM API Key:**

- Open Channex → click the avatar → **Organization**
- Select **API Keys** in the left sidebar
- Use an existing API Key, or click **Create new API Key**

  ![API Keys page in Channex](../../../../assets/guestchat/channex-11-api-keys.png)

5. Once both fields are filled in, click **Save**.

   ![Saving the Channel Manager configuration](../../../../assets/guestchat/channex-12-save-integration.png)

## Stage 4 — Activate GuestChat in Admin GP

1. Open **MarketConnect → Merchant Detail** for the relevant property.
2. On the **General** tab, find the **Chat App** toggle.
3. Activate the toggle.

   ![Chat App toggle in Merchant Detail](../../../../assets/guestchat/channex-13-merchant-chat-app-toggle.png)

4. Check the GuestPro merchant dashboard — the **Chat** menu should now appear in the left sidebar.

   ![Chat menu appearing in the GuestPro sidebar](../../../../assets/guestchat/channex-14-chat-menu-appears.png)
