---
title: "Channels & Providers: Where Guests Can Connect From"
description: Setting up Fonnte, Qontak, Meta, and Channex channel integrations
---

GuestChat can receive messages from various channels. Each channel is activated through a specific provider that needs to be connected first.

:::caution[Image not yet available]
Replace the image placeholder in the source document with an actual channel diagram screenshot.
:::

## 1. Fonnte (WhatsApp)

Fonnte connects the property's WhatsApp number to GuestChat, specifically for the WhatsApp channel.

:::danger[Important note]
Fonnte uses an **unofficial** WhatsApp connection. This connection is safe for replying to guests who contact the property first. However, if the number is used to initiate chats with guests first (outbound), or to send bulk/broadcast messages, the number **risks being flagged as spam** and then blocked or banned by WhatsApp. For proactively greeting guests or broadcasting, it's best to use an official WhatsApp provider such as Qontak or Meta.
:::

## 2. Qontak (WhatsApp, Telegram, LINE, Email, Instagram, Facebook)

Qontak is an omnichannel provider. A single Qontak connection opens up many channels at once — WhatsApp, Telegram, LINE, Email, Instagram, and even Facebook — ideal for properties that want to serve guests from multiple platforms in one place.

## 3. Meta (Facebook, Instagram, WhatsApp)

Meta connects GuestChat directly to the Meta ecosystem (Facebook, Instagram, WhatsApp). As an official connection, this route is safe for proactive communication with guests in accordance with Meta's terms.

## 4. Channex (OTA / Online Travel Agent)

Channex acts as a channel manager that connects GuestChat with OTAs such as Booking.com, Airbnb, and Expedia. Messages from those booking platforms arrive in the same inbox as the other channels.

For the complete setup steps (app installation, webhook, through to activating Chat), see the [Channex Setup page](/en/guestchat/channex-setup/).

## Channel Dependency Summary

| Guest Channel | Required Provider |
|---|---|
| WhatsApp | Fonnte, Qontak, or Meta |
| Telegram | Qontak |
| LINE | Qontak |
| Email | Qontak |
| Instagram | Qontak or Meta |
| Facebook | Qontak or Meta |
| OTA (Booking.com, Airbnb, Expedia) | Channex |

:::note[Note]
For WhatsApp, the property only needs to choose **one** provider (Fonnte, Qontak, or Meta) based on its needs. Choose Fonnte for simple use focused on replying to guests, or Qontak/Meta if official reach is needed for greeting guests first and broadcasting.
:::

## Webchat / Widget: Guests Can Ask Directly from the Booking Engine

Properties also get access to a **Webchat (Widget)** that appears directly on the Booking Engine page. Prospective guests can ask questions right away — for example, checking room or facility availability — without leaving the booking page.

All messages from this widget connect directly to GuestChat, so the property team can respond to them in the same inbox as WhatsApp conversations.
