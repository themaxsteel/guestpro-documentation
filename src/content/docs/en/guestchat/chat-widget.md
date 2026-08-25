---
title: "Chat Widget: Create & Customize a Webchat Widget"
description: Creating, styling, and installing a chat widget on the property's website
---

**Menu location:** `Settings → Chat Widget`

Chat Widget is a chat box that can be installed on the property's website/Booking Engine, so prospective guests can ask questions right away without leaving the page. A single property can have more than one widget (for example, different designs for different purposes).

![Example of the Chat Widget on a Booking Engine page, from the guest's side](../../../../assets/guestchat/chat-widget-live-example.png)

![Chat Widget list page showing the widget grid and the New Widget button](../../../../assets/guestchat/chat-widget-grid.png)

## Creating a New Widget

Click **New Widget**, then fill in the settings across the following 6 tabs:

### 1. General
Widget name (internal), agent name shown to guests, the **Widget Active** toggle (visible/not visible to visitors), and **Management Mode** (when active, visitors choose a property first before chatting — suitable for a property group).

![Chat Widget - General tab with Widget Name, Agent Name, Widget Active, and Management Mode](../../../../assets/guestchat/chat-widget-tab-general.png)

### 2. Appearance
Logo, banner (shown on the welcome screen before the guest starts chatting), and floating icon (the floating chat button icon).

![Chat Widget - Appearance tab section for Logo, Banner Image, and Floating Icon](../../../../assets/guestchat/chat-widget-tab-appearance.png)

Title & body fonts (upload TTF/OTF/WOFF/WOFF2 files), and color scheme (background & text) for each widget element — **Main** (header), **Agent** (staff chat bubble), and **Visitor** (guest chat bubble).

![Chat Widget - Appearance tab section for Title/Body Font and Color Scheme](../../../../assets/guestchat/chat-widget-tab-appearance-fonts-colors.png)

### 3. Text & Layout
Welcome Title & Message (welcome text on the banner), Placeholder Text (message input field), and Greeting Message (bubble above the floating chat button).

![Chat Widget - Text & Layout tab section for Welcome Title, Welcome Message, Placeholder Text, and Greeting Message](../../../../assets/guestchat/chat-widget-tab-text-layout.png)

Widget position on screen can be chosen from 4 options: **Top Left**, **Top Right**, **Bot Left**, or **Bot Right**.

![Chat Widget - Text & Layout tab Widget Position selector](../../../../assets/guestchat/chat-widget-tab-widget-position.png)

### 4. Quick Chat
A list of ready-made shortcuts that visitors can tap directly to start a chat. Each shortcut has a title, a short description, and an auto-sent message that fires when tapped (for example, "Check Availability" — "Rooms & rates"). Add new shortcuts via **Add Another Shortcut**, reorder items via drag & drop, and check the result live with **Preview Quick Chat**.

![Chat Widget - Quick Chat tab with the shortcut list and Quick Chat button preview](../../../../assets/guestchat/chat-widget-tab-quick-chat.png)

### 5. Advanced
**Custom CSS** — a field for adding extra styling to the widget. Changes here are applied directly to the widget, but aren't reflected live in the preview panel.

![Chat Widget - Advanced tab with the Custom CSS field](../../../../assets/guestchat/chat-widget-tab-advanced.png)

### 6. Domains & Embed
A list of website domains allowed to display this widget (**allowed origins** — the widget won't appear on domains that aren't registered). There's also an **Enable in Group Booking Engine** toggle to show this widget in the Group Booking Engine (multi-property management). This tab also shows the embed code to install on the website, but it only becomes available after the widget is saved for the first time.

![Chat Widget - Domains & Embed tab with Allowed Origins, the Enable in Group Booking Engine toggle, and the embed code](../../../../assets/guestchat/chat-widget-tab-domains-embed.png)

## Installing the Widget on a Website (Install)

From the widget list grid, click the **Install** button on a widget card to quickly open its embed code without entering full edit mode. Copy the following snippet into the website page:

```html
<script src="[VITE_WIDGET_BASE_URL]/dist/chat-widget.js"></script>
<chat-widget webchat-key="[unique-widget-code]"></chat-widget>
```

:::caution[Image not yet available]
Add a screenshot of the Install Widget modal with the embed code. Example: `![Install Widget Modal](../../../../assets/guestchat/chat-widget-install-modal.png)`.
:::

:::note[Connected to the Booking Engine]
An installed widget automatically connects to the same GuestChat inbox as the other channels (WhatsApp, Email, etc.) — see also the [Channel Setup & Integration page](/en/guestchat/channels/).
:::
