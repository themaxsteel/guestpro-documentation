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
          label: 'GuestChat & WhatsApp',
          items: [
            { label: 'Ringkasan', link: '/guestchat/' },
            { label: 'Setup & Integrasi Kanal', link: '/guestchat/channels/' },
            { label: 'AI Assistant & AI Agent', link: '/guestchat/ai-agent/' },
            { label: 'Kelola Percakapan & Leads', link: '/guestchat/manage-conversations/' },
          ],
        },
        {
          label: 'PMS - Pembayaran',
          items: [
            { label: 'Guestbill / Online Payment', link: '/pms/guestbill-online-payment/' },
          ],
        },
        {
          label: 'PMS - Master Data',
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
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
      },
    }),
  ],
});
