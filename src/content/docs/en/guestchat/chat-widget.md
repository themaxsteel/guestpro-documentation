---
title: "Chat Widget: Create & Customize a Webchat Widget"
description: Creating, styling, and installing a chat widget on the property's website
---

**Menu location:** `Settings → Chat Widget`

Chat Widget is a chat box that can be installed on the property's website/Booking Engine, so prospective guests can ask questions right away without leaving the page. A single property can have more than one widget (for example, different designs for different purposes).

:::caution[Image not yet available]
Add a screenshot of the Chat Widget list grid (both with content and empty). Example: `![Chat Widget List](../../../../assets/guestchat/chat-widget-grid.png)`.
:::

## Creating a New Widget

Click **New Widget**, then fill in the settings across the following 5 tabs:

### 1. General
Widget name (internal), agent name shown to guests, the **Widget Active** toggle (visible/not visible to visitors), and **Management Mode** (when active, visitors choose a property first before chatting — suitable for a property group).

:::caution[Image not yet available]
Add a screenshot of the General tab. Example: `![Chat Widget - General Tab](../../../../assets/guestchat/chat-widget-tab-general.png)`.
:::

### 2. Appearance
Logo, banner (shown on the welcome screen before the guest starts chatting), floating icon (the floating chat button icon), title & body fonts (upload TTF/OTF/WOFF files), and color scheme (background & text) for each widget element.

:::caution[Image not yet available]
Add a screenshot of the Appearance tab, including the color picker. Example: `![Chat Widget - Appearance Tab](../../../../assets/guestchat/chat-widget-tab-appearance.png)`.
:::

### 3. Text & Layout
Welcome Title & Message (welcome text on the banner), Placeholder Text (message input field), Greeting Message (bubble above the floating chat button), and widget position on screen (left/right, top/bottom).

:::caution[Image not yet available]
Add a screenshot of the Text & Layout tab, including the widget position selection grid. Example: `![Chat Widget - Text & Layout Tab](../../../../assets/guestchat/chat-widget-tab-text-layout.png)`.
:::

### 4. Quick Chat
A list of ready-made questions/shortcuts that visitors can click directly to start a chat (for example, "Check room availability"). Item order can be rearranged via drag & drop.

:::caution[Image not yet available]
Add a screenshot of the Quick Chat tab. Example: `![Chat Widget - Quick Chat Tab](../../../../assets/guestchat/chat-widget-tab-quick-chat.png)`.
:::

### 5. Domains & Embed
A list of website domains allowed to display this widget (**allowed origins** — the widget won't appear on domains that aren't registered). This tab also shows the embed code to install on the website, but it only becomes available after the widget is saved for the first time.

:::caution[Image not yet available]
Add a screenshot of the Domains & Embed tab. Example: `![Chat Widget - Domains & Embed Tab](../../../../assets/guestchat/chat-widget-tab-domains-embed.png)`.
:::

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
