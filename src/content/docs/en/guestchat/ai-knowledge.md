---
title: "AI Knowledge: Data Sources Used by the AI Agent"
description: AI Agent capabilities per specialist and the data sources/menus that need to be set up
---

**Menu location:** `Settings → AI Knowledge`

This page explains **what data** each AI Agent specialist uses (see also the [AI Assistant & AI Agent page](/en/guestchat/ai-agent/)) to answer guests accurately, along with which PMS menus need to be filled in for that capability to work.

:::caution[Image not yet available]
Add a screenshot of the AI Knowledge 3-card grid. Example: `![AI Knowledge Grid](../../../../assets/guestchat/ai-knowledge-grid.png)`.
:::

Click one of the cards to see its capability details in an accordion, complete with a **Setup** shortcut button that leads directly to the related menu in the PMS.

:::caution[Image not yet available]
Add a screenshot of an agent's detail modal with the accordion open. Example: `![AI Knowledge Detail Modal](../../../../assets/guestchat/ai-knowledge-detail-modal.png)`.
:::

## Reservation Agent

| Capability | Data Source / Setup Menu |
|---|---|
| Daily Availability Lookup | Availability & Rate Plan |
| List Available Rooms | Room Type, Rate Plans |
| Room Detail Information | Room Type, Rate Plans |
| Create Reservation | Automatic validation from real-time availability & rate, sends payment link |

## Concierge Agent

| Capability | Data Source / Setup Menu |
|---|---|
| Hotel Information | General Settings (description, facilities, payment methods, check-in/out times) |
| Contact & Social Media Information | General Settings |
| Nearby Destination | General Settings |
| General Policy | Policies/rules on rate plans & property |

## Additional Service Agent

| Capability | Data Source / Setup Menu |
|---|---|
| Room Dining & Spa Overview | Concierge → In-Room Dining, Spa |
| List Activities Information | Master Data → Activity |
| List Outlet Information | Master Data → Custom POS |
| General Details (Activity & Outlet) | Activity, Custom POS |
| Full Product Item Link | Automatic from already-configured product data |
| Search by Preferences | Combination of In-Room Dining, Spa, Activity, Outlet |

:::tip[Why this page matters]
If one of the setup menus above hasn't been filled in by the property, the related AI Agent specialist won't be able to accurately answer guest questions in that area. Use this page as a checklist before activating AI Agent for a new property.
:::
