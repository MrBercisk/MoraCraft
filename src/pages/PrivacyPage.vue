<template>
  <main class="legal-page-wrapper position-relative text-white">
    <div class="container py-5">
      <!-- Breadcrumb & Back Navigation -->
      <nav class="breadcrumb-nav d-flex align-items-center gap-2 mb-4 pt-4" aria-label="Breadcrumb">
        <button 
          class="breadcrumb-link-btn d-inline-flex align-items-center gap-1"
          @click="$emit('go-home')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span>Beranda</span>
        </button>
        <span class="breadcrumb-sep text-secondary">/</span>
        <span class="breadcrumb-current">Privacy Policy</span>
      </nav>

      <!-- Page Header Hero -->
      <header class="legal-hero-header mb-5 pb-lg-3">
        <div class="d-inline-flex align-items-center gap-2 mb-3">
          <span class="legal-pill-badge">Kebijakan Privasi &amp; Perlindungan Data</span>
        </div>
        <h1 class="legal-hero-title text-white mb-3">
          Kebijakan Privasi <span class="text-accent">(Privacy Policy)</span>
        </h1>
        <p class="legal-hero-lead text-secondary mb-3">
          MoraCraft Studio menghormati privasi Anda. Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan memperlakukan data pribadi pengunjung serta mitra proyek.
        </p>
        <div class="legal-meta d-flex align-items-center gap-3 text-secondary small">
          <span>Terakhir diperbarui: <strong>1 September 2024</strong></span>
          <span>·</span>
          <span>Standar: <strong>Transparansi Penuh &amp; Anti-Spam</strong></span>
        </div>
      </header>

      <!-- Main Legal Articles Grid -->
      <div class="row g-4 justify-content-between">
        <!-- Quick Nav Sidebar (Desktop Sticky) -->
        <aside class="col-lg-3 d-none d-lg-block">
          <div class="legal-sidebar p-3 rounded-3 position-sticky" style="top: 100px;">
            <span class="sidebar-title d-block text-secondary small fw-bold text-uppercase mb-3">Daftar Bagian</span>
            <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
              <li v-for="item in sections" :key="item.id">
                <a :href="`#${item.id}`" class="sidebar-nav-link" @click.prevent="scrollToElement(item.id)">
                  {{ item.shortTitle }}
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Privacy Content Body -->
        <article class="col-lg-9">
          <div class="d-flex flex-column gap-4">
            <div 
              v-for="(sec, idx) in sections" 
              :id="sec.id" 
              :key="sec.id" 
              class="legal-card p-4 p-md-5 rounded-4"
            >
              <div class="d-flex align-items-center gap-2 mb-3">
                <span class="section-num">{{ String(idx + 1).padStart(2, '0') }}</span>
                <h2 class="section-heading-title text-white mb-0">{{ sec.title }}</h2>
              </div>
              <div class="section-body text-secondary" v-html="sec.content"></div>
            </div>

            <!-- Bottom CTA Help Box -->
            <div class="legal-cta-card p-4 p-md-5 rounded-4 text-center mt-3">
              <h3 class="text-white fw-bold mb-2">Ingin Memperbarui atau Menghapus Data Anda?</h3>
              <p class="text-secondary small mb-4 max-w-500 mx-auto">
                Anda memiliki hak penuh untuk meminta penghapusan informasi kontak atau riwayat konsultasi dari sistem kami kapan saja.
              </p>
              <div class="d-flex justify-content-center gap-3 flex-wrap">
                <button class="btn-primary-pill" @click="$emit('go-contact')">
                  Kirim Permintaan Privasi
                </button>
                <button class="btn-secondary-pill" @click="$emit('go-home')">
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { scrollToTopDirectly } from '../utils/scroll.js'

defineEmits(['go-home', 'go-contact'])

onMounted(() => {
  scrollToTopDirectly(false)
})

const sections = [
  {
    id: 'prinsip-dasar',
    shortTitle: '1. Komitmen Privasi',
    title: 'Komitmen Utama Terhadap Privasi Anda',
    content: `
      <p class="mb-3">
        MoraCraft Studio ("kami", "studio") menjunjung tinggi privasi setiap individu yang mengunjungi situs web kami atau berinteraksi dengan layanan kami. Prinsip dasar kami sangat tegas:
      </p>
      <ul class="mb-0 ps-3">
        <li class="mb-2"><strong>Tidak Menjual Data:</strong> Kami tidak pernah menjual, menyewakan, atau memperjualbelikan data pribadi Anda kepada broker data atau pihak ketiga manapun.</li>
        <li class="mb-2"><strong>Bebas Iklan Pihak Ketiga:</strong> Situs kami tidak memasang jaringan iklan pelacak (ad trackers) pihak ketiga.</li>
        <li><strong>Pengumpulan Minimal:</strong> Kami hanya mengumpulkan informasi yang benar-benar esensial untuk menjawab pertanyaan, merancang proposal, atau menjalankan proyek Anda.</li>
      </ul>
    `
  },
  {
    id: 'data-yang-dikumpulkan',
    shortTitle: '2. Data yang Dikumpulkan',
    title: 'Informasi yang Kami Kumpulkan',
    content: `
      <p class="mb-3">
        Kami dapat mengumpulkan informasi dalam situasi berikut:
      </p>
      <ul class="mb-0 ps-3">
        <li class="mb-2">
          <strong>Data Formulir Kontak:</strong> Nama lengkap, alamat email, serta deskripsi kebutuhan proyek yang Anda isi secara sukarela melalui formulir di situs kami.
        </li>
        <li class="mb-2">
          <strong>Data Komunikasi Langsung:</strong> Pesan yang Anda kirimkan melalui email resmi kami (<code>studiomoracraft@gmail.com</code>) atau pesan WhatsApp.
        </li>
        <li>
          <strong>Data Teknis Non-Pribadi:</strong> Informasi anonim browser, resolusi layar, dan metrik Core Web Vitals untuk tujuan diagnostik performa situs tanpa mengaitkannya dengan identitas individu Anda.
        </li>
      </ul>
    `
  },
  {
    id: 'tujuan-penggunaan',
    shortTitle: '3. Tujuan Penggunaan',
    title: 'Bagaimana Kami Menggunakan Informasi Anda',
    content: `
      <p class="mb-3">
        Data yang Anda berikan digunakan khusus untuk tujuan profesional:
      </p>
      <ul class="mb-0 ps-3">
        <li class="mb-2">Merespons pertanyaan konsultasi dan jadwal sesi diskusi teknis.</li>
        <li class="mb-2">Menyusun dokumen penawaran harga, estimasi waktu sprint, dan arsitektur produk digital.</li>
        <li class="mb-2">Menjalankan koordinasi komunikasi selama fase pengerjaan proyek berlangsung.</li>
        <li>Menyampaikan pembaruan status server atau pemeliharaan purnajual jika Anda mengambil paket retainer.</li>
      </ul>
    `
  },
  {
    id: 'keamanan-penyimpanan',
    shortTitle: '4. Keamanan & Enkripsi',
    title: 'Keamanan, Penyimpanan, & Perlindungan Data',
    content: `
      <p class="mb-3">
        Kami menerapkan langkah-langkah pengamanan teknis dan organisasional yang ketat:
      </p>
      <p class="mb-3">
        Seluruh transmisi web dienkripsi menggunakan protokol aman SSL/TLS (HTTPS). Kredensial server, token akses API, atau data sensitif yang dibagikan selama masa pengembangan proyek dikelola dengan protokol keamanan tingkat tinggi dan dihapus secara tuntas setelah serah terima proyek selesai.
      </p>
      <p class="mb-0">
        Akses ke informasi komunikasi proyek dibatasi hanya kepada anggota tim inti MoraCraft yang secara langsung bertanggung jawab atas delivery proyek Anda.
      </p>
    `
  },
  {
    id: 'cookies-pelacak',
    shortTitle: '5. Kebijakan Cookies',
    title: 'Penggunaan Cookies & Penyimpanan Lokal',
    content: `
      <p class="mb-3">
        Situs web kami hanya memanfaatkan cookie atau local storage esensial untuk mendukung fungsi dasar aplikasi (misalnya mengingat status navigasi atau preferensi tema).
      </p>
      <p class="mb-0">
        Kami tidak menggunakan cookie pelacak lintas situs (cross-site tracking) untuk keperluan profil pemasaran eksternal. Anda dapat mengatur atau menghapus cookie melalui pengaturan peramban (browser) Anda kapan saja.
      </p>
    `
  },
  {
    id: 'hak-pengguna',
    shortTitle: '6. Hak Anda Atas Data',
    title: 'Hak Akses, Koreksi, & Penghapusan Data',
    content: `
      <p class="mb-3">
        Anda memiliki hak penuh atas data pribadi Anda, termasuk:
      </p>
      <ul class="mb-0 ps-3">
        <li class="mb-2"><strong>Hak Akses:</strong> Meminta konfirmasi data apa saja yang kami simpan mengenai Anda.</li>
        <li class="mb-2"><strong>Hak Koreksi:</strong> Meminta perbaikan atas data yang tidak akurat atau kedaluwarsa.</li>
        <li><strong>Hak Penghapusan (Right to be Forgotten):</strong> Meminta kami menghapus catatan kontak dan riwayat email Anda dari sistem kami, sejauh tidak bertentangan dengan kewajiban pencatatan pajak dan akuntansi hukum yang berlaku.</li>
      </ul>
    `
  },
  {
    id: 'kontak-privasi',
    shortTitle: '7. Narahubung Privasi',
    title: 'Hubungi Petugas Privasi Kami',
    content: `
      <p class="mb-3">
        Jika Anda memiliki pertanyaan, masukan, atau permohonan hak privasi terkait data Anda, silakan hubungi tim kami melalui:
      </p>
      <p class="mb-0">
        Email: <a href="mailto:studiomoracraft@gmail.com" class="text-accent fw-bold text-decoration-none">studiomoracraft@gmail.com</a><br />
        Alamat: MoraCraft Studio, Jakarta, Indonesia (Remote Global Network).
      </p>
    `
  }
]

const scrollToElement = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.legal-page-wrapper {
  background-color: #0b0c12;
  min-height: 100vh;
  position: relative;
  overflow-x: clip;
}

/* Ambient Glow */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(120px);
}

.glow-top {
  top: -80px;
  right: 15%;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(230, 57, 70, 0.08) 0%, rgba(230, 57, 70, 0) 70%);
}

/* Breadcrumb */
.breadcrumb-nav {
  position: relative;
  z-index: 2;
  font-size: 0.85rem;
}

.breadcrumb-link-btn {
  background: none;
  border: none;
  color: #9ca3af;
  padding: 0;
  cursor: pointer;
  transition: color 0.15s ease;
}

.breadcrumb-link-btn:hover {
  color: #ffffff;
}

.breadcrumb-sep {
  opacity: 0.4;
}

.breadcrumb-current {
  color: #cbd5e1;
  font-weight: 500;
}

/* Hero */
.legal-hero-header {
  position: relative;
  z-index: 2;
  max-width: 820px;
}

.legal-pill-badge {
  background: rgba(230, 57, 70, 0.12);
  border: 1px solid rgba(230, 57, 70, 0.3);
  color: #ff6b77;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 5px 16px;
  border-radius: 9999px;
  text-transform: uppercase;
}

.legal-hero-title {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(2rem, 3.8vw, 2.9rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.text-accent {
  color: #ff6b77;
}

.legal-hero-lead {
  font-size: 1.05rem;
  line-height: 1.65;
}

/* Sidebar */
.legal-sidebar {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-title {
  letter-spacing: 0.08em;
  font-size: 0.75rem;
}

.sidebar-nav-link {
  color: #9ca3af;
  font-size: 0.88rem;
  text-decoration: none;
  display: block;
  padding: 6px 10px;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.sidebar-nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

/* Legal Cards */
.legal-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.07);
  scroll-margin-top: 100px;
  transition: border-color 0.2s ease;
}

.legal-card:hover {
  border-color: rgba(255, 255, 255, 0.14);
}

.section-num {
  font-family: monospace;
  color: #e63946;
  font-size: 0.88rem;
  font-weight: 700;
  background: rgba(230, 57, 70, 0.1);
  padding: 2px 8px;
  border-radius: 6px;
}

.section-heading-title {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.section-body {
  font-size: 0.95rem;
  line-height: 1.7;
}

.section-body :deep(p) {
  margin-bottom: 1rem;
}

.section-body :deep(strong) {
  color: #f1f5f9;
}

.section-body :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
  color: #ff858d;
  font-size: 0.88em;
}

/* CTA Card */
.legal-cta-card {
  background: #10121a;
  border: 1px solid rgba(230, 57, 70, 0.25);
}

.max-w-500 {
  max-width: 500px;
}

.btn-primary-pill {
  background: #c52a33;
  border: 1px solid #e63946;
  color: #ffffff;
  padding: 10px 22px;
  min-height: 44px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.btn-primary-pill:hover {
  background: #d8313b;
  transform: translateY(-1px);
}

.btn-secondary-pill {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  padding: 10px 22px;
  min-height: 44px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.btn-secondary-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}
</style>
