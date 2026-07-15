---
title: "PMS: Property Management System"
description: Ringkasan modul PMS — Pembayaran, Frontdesk, dan Master Data
---

import { Card, CardGrid } from '@astrojs/starlight/components';

PMS (Property Management System) adalah sistem inti untuk mengelola operasional properti sehari-hari, mulai dari pembayaran tamu, aktivitas frontdesk, hingga pengaturan data master yang menjadi dasar seluruh transaksi.

<CardGrid>
	<Card title="Pembayaran" icon="seti:db">
		Setup dan penggunaan fitur Guestbill / Online Payment serta payment gateway (CommercePay).

		[Buka panduan →](/pms/guestbill-online-payment/)
	</Card>
	<Card title="Frontdesk" icon="document">
		Reservasi, room plan, night audit, group reservation, guest profile, payment, dan operasional frontdesk lainnya.

		[Buka panduan →](/pms/frontdesk/reservation/)
	</Card>
	<Card title="Master Data" icon="setting">
		Konfigurasi agent, room type, rates, product sale, payment method, COA, dan data master PMS lainnya.

		[Buka panduan →](/pms/master-data/agent-mapping/)
	</Card>
</CardGrid>
