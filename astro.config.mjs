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
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
      },
    }),
  ],
});
