---
title: "Switch Property (Multi-Property Switcher)"
description: How to switch between properties for accounts managing more than one property
---

For accounts managing **more than one property**, GuestChat provides a switcher to move between them without logging out.

## Switcher Location

**Location:** the property logo icon, at the bottom of the left sidebar (above the Settings icon).

- If the account only manages **one property**, this icon can't be clicked (no switch badge).
- If the account manages **more than one property**, a small back-and-forth arrow badge appears on the icon.
- If there are unread messages in another property, a **red dot** appears as a marker.

:::caution[Image not yet available]
Add a screenshot of the switcher icon in the sidebar (with the switch badge & red unread dot). Example: `![Sidebar Merchant Switcher](../../../../assets/guestchat/merchant-switcher-sidebar-badge.png)`.
:::

## How to Switch Properties

1. Click the switcher icon to open the **Your Properties** list.
2. The currently active property is marked with an **Active** label; other properties show their number of unread messages (if any).
3. Click the destination property to switch.

:::caution[Image not yet available]
Add a screenshot of the property list popup. Example: `![Your Properties Popup](../../../../assets/guestchat/merchant-switcher-popup-list.png)`.
:::

During the switch, the screen shows a **"Switching to [property name]..."** overlay, then the page automatically reloads with the new property's data (conversations, widgets, channel integrations, and staff permissions are all updated).

:::caution[Image not yet available]
Add a screenshot of the loading overlay during switching. Example: `![Property Switching Overlay](../../../../assets/guestchat/merchant-switcher-loading-overlay.png)`.
:::

:::note[Note]
The refresh button inside the popup can be used to reload the latest property list, for example if a new property was just added to the account.
:::
