// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Support Knowledge Base',
      logo: {
        src: './src/assets/logo.png',
        alt: 'GuestPro',
      },
      favicon: '/favicon.png',
      locales: {
        root: { label: 'Indonesia', lang: 'id' },
      },
      sidebar: [
        {
          label: 'Beranda',
          link: '/',
        },
        {
          label: 'GuestChat',
          items: [
            { label: 'Ringkasan', link: '/guestchat/' },
            { label: 'Setup & Integrasi Kanal', link: '/guestchat/channels/' },
            { label: 'Setup Channex (Channel Manager)', link: '/guestchat/channex-setup/' },
            { label: 'AI Assistant & AI Agent', link: '/guestchat/ai-agent/' },
            { label: 'Kelola Percakapan & Leads', link: '/guestchat/manage-conversations/' },
          ],
        },
        {
          label: 'Booking Engine (GRB)',
          items: [
            { label: 'Konfigurasi Tampilan Kalender', link: '/booking-engine/calendar-display-configuration/' },
            { label: 'Destination Area (Group Booking)', link: '/booking-engine/destination-area/' },
            { label: 'Setup Meta Pixel & Meta CAPI', link: '/booking-engine/meta-pixel-capi/' },
          ],
        },
        {
          label: 'PMS',
          items: [
            { label: 'Ringkasan', link: '/pms/' },
            {
              label: 'Pembayaran',
              items: [
                { label: 'Guestbill / Online Payment', link: '/pms/guestbill-online-payment/' },
                { label: 'Setup CommercePay', link: '/pms/commercepay-setup/' },
              ],
            },
            {
              label: 'Frontdesk',
              items: [
                { label: 'Reservation', link: '/pms/frontdesk/reservation/' },
                { label: 'Room Plan', link: '/pms/frontdesk/room-plan/' },
                { label: 'Import Reservation', link: '/pms/frontdesk/import-reservation/' },
                { label: 'Night Audit', link: '/pms/frontdesk/night-audit/' },
                { label: 'Group Reservation', link: '/pms/frontdesk/group-reservation/' },
                { label: 'Cancel Group Reservation', link: '/pms/frontdesk/cancel-group-reservation/' },
                { label: 'Guest List Daily', link: '/pms/frontdesk/guest-list-daily/' },
                { label: 'Guest Profile', link: '/pms/frontdesk/guest-profile/' },
                { label: 'Payment', link: '/pms/frontdesk/payment/' },
                { label: 'Deposit / DP', link: '/pms/frontdesk/deposit-dp/' },
                { label: 'Pembuatan User & Role', link: '/pms/frontdesk/user-role/' },
                { label: 'Dummy Folio', link: '/pms/frontdesk/dummy-folio/' },
              ],
            },
            {
              label: 'Master Data',
              items: [
                { label: 'Agent Mapping', link: '/pms/master-data/agent-mapping/' },
                { label: 'Agent', link: '/pms/master-data/agent/' },
                { label: 'Room Type', link: '/pms/master-data/room-type/' },
                { label: 'Bed Type', link: '/pms/master-data/bed-type/' },
                { label: 'Room', link: '/pms/master-data/room/' },
                { label: 'Room Status', link: '/pms/master-data/room-status/' },
                { label: 'Rates', link: '/pms/master-data/rates/' },
                { label: 'Update Rate', link: '/pms/master-data/update-rate/' },
                { label: 'Product Sale', link: '/pms/master-data/product-sale/' },
                { label: 'Point of Sale (POS)', link: '/pms/master-data/point-of-sale/' },
                { label: 'Group', link: '/pms/master-data/group/' },
                { label: 'Category', link: '/pms/master-data/category/' },
                { label: 'Payment Method', link: '/pms/master-data/payment-method/' },
                { label: 'Department', link: '/pms/master-data/department/' },
                { label: 'Chart of Account (COA)', link: '/pms/master-data/chart-of-account/' },
                { label: 'Unit', link: '/pms/master-data/unit/' },
                { label: 'Warehouse', link: '/pms/master-data/warehouse/' },
                { label: 'Sales Type', link: '/pms/master-data/sales-type/' },
                { label: 'Extra Charge', link: '/pms/master-data/extra-charge/' },
                { label: 'Taxes', link: '/pms/master-data/taxes/' },
                { label: 'Konfigurasi Approval', link: '/pms/master-data/approval-configuration/' },
                { label: 'Purchase Request (PR) & Purchase Order (PO)', link: '/pms/master-data/purchase-request-po/' },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
      },
    }),
  ],
});
