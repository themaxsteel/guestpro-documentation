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
        en: { label: 'English', lang: 'en' },
      },
      sidebar: [
        {
          label: 'Beranda',
          translations: { en: 'Home' },
          link: '/',
        },
        {
          label: 'GuestChat',
          items: [
            { label: 'Ringkasan', translations: { en: 'Overview' }, link: '/guestchat/' },
            { label: 'Login, SSO & 2FA', link: '/guestchat/login-2fa/' },
            { label: 'Setup & Integrasi Kanal', translations: { en: 'Channel Setup & Integration' }, link: '/guestchat/channels/' },
            { label: 'Setup Fonnte (WhatsApp)', link: '/guestchat/fonnte-setup/' },
            { label: 'Setup Channex (Channel Manager)', translations: { en: 'Channex Setup (Channel Manager)' }, link: '/guestchat/channex-setup/' },
            { label: 'Chat Widget (Webchat)', link: '/guestchat/chat-widget/' },
            { label: 'AI Assistant & AI Agent', link: '/guestchat/ai-agent/' },
            { label: 'AI Knowledge (Sumber Data AI)', translations: { en: 'AI Knowledge (AI Data Sources)' }, link: '/guestchat/ai-knowledge/' },
            { label: 'Kelola Percakapan & Leads', translations: { en: 'Manage Conversations & Leads' }, link: '/guestchat/manage-conversations/' },
            { label: 'Detail Ruang Percakapan', translations: { en: 'Conversation Room Details' }, link: '/guestchat/conversation-room/' },
            { label: 'Ganti Property (Multi-Property)', translations: { en: 'Switch Property (Multi-Property)' }, link: '/guestchat/merchant-switcher/' },
            { label: 'Reputation (Ulasan Tamu)', translations: { en: 'Reputation (Guest Reviews)' }, link: '/guestchat/reputation/' },
            { label: 'Profile Saya & Password', translations: { en: 'My Profile & Password' }, link: '/guestchat/profile-account/' },
          ],
        },
        // Booking Engine (GRB) dan PMS disembunyikan sementara agar situs fokus ke GuestChat.
        // Konten masih ada di src/content/docs/booking-engine dan src/content/docs/pms,
        // tinggal kembalikan blok sidebar-nya (lihat riwayat git) untuk menampilkan lagi.
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeSelect: './src/components/ThemeToggle.astro',
      },
    }),
  ],
});
