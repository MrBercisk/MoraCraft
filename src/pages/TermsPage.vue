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
        <span class="breadcrumb-current">Terms &amp; Conditions</span>
      </nav>

      <!-- Page Header Hero -->
      <header class="legal-hero-header mb-5 pb-lg-3">
        <div class="d-inline-flex align-items-center gap-2 mb-3">
          <span class="legal-pill-badge">Pedoman Kerja Sama &amp; Legalitas</span>
        </div>
        <h1 class="legal-hero-title text-white mb-3">
          Syarat &amp; Ketentuan Layanan <span class="text-accent">(Terms &amp; Conditions)</span>
        </h1>
        <p class="legal-hero-lead text-secondary mb-3">
          Ketentuan ini mengatur ruang lingkup kerja, kepemilikan kode sumber, komitmen kerahasiaan, serta hak dan kewajiban antara MoraCraft Studio dan klien.
        </p>
        <div class="legal-meta d-flex align-items-center gap-3 text-secondary small">
          <span>Terakhir diperbarui: <strong>1 September 2024</strong></span>
          <span>·</span>
          <span>Status: <strong>Berlaku Efektif</strong></span>
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

        <!-- Legal Content Body -->
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
              <h3 class="text-white fw-bold mb-2">Ada Pertanyaan Seputar Kontrak &amp; Ketentuan?</h3>
              <p class="text-secondary small mb-4 max-w-500 mx-auto">
                Tim kami siap mendiskusikan klausul khusus, perjanjian kerahasiaan (NDA), atau penyesuaian ruang lingkup sesuai kebutuhan perusahaan Anda.
              </p>
              <div class="d-flex justify-content-center gap-3 flex-wrap">
                <button class="btn-primary-pill" @click="$emit('go-contact')">
                  Hubungi Tim Legal &amp; Proyek
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
    id: 'pendahuluan',
    shortTitle: '1. Ketentuan Umum',
    title: 'Ketentuan Umum & Penerimaan Layanan',
    content: `
      <p class="mb-3">
        Selamat datang di MoraCraft Studio ("MoraCraft", "kami", "studio"). Syarat & Ketentuan ini merupakan kesepakatan yang sah dan mengikat antara MoraCraft dan individu, perusahaan, atau entitas hukum ("Klien", "Anda") yang menggunakan situs web ini atau menyepakati kerja sama proyek digital.
      </p>
      <p class="mb-0">
        Dengan menyetujui penawaran harga, menandatangani <em>Statement of Work</em> (SOW), atau membayar uang muka (down payment), Anda menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.
      </p>
    `
  },
  {
    id: 'ruang-lingkup',
    shortTitle: '2. Ruang Lingkup Proyek',
    title: 'Ruang Lingkup Proyek & Proses Pengerjaan',
    content: `
      <p class="mb-3">
        Setiap proyek yang kami kerjakan didasarkan pada spesifikasi teknis dan ruang lingkup kerja (<em>Scope of Work</em>) yang disepakati bersama sebelum proses rekayasa dimulai. Layanan mencakup Pengembangan Web Kustom, Desain UI/UX & Prototipe Figma, Desain Aplikasi Mobile, serta Konsultasi Arsitektur Perangkat Lunak.
      </p>
      <p class="mb-3">
        <strong>Perubahan Ruang Lingkup (Scope Creep):</strong> Setiap penambahan fitur, perubahan tata letak fundamental di luar batas revisi yang telah disepakati, atau permintaan integrasi baru di tengah berjalannya proyek akan dihitung sebagai <em>Change Request</em> dan dapat mempengaruhi estimasi biaya serta jadwal peluncuran.
      </p>
      <p class="mb-0">
        <strong>Putaran Revisi:</strong> Setiap paket layanan mencakup kuota revisi terarah sesuai fase sprint yang disepakati (umumnya 2-3 putaran revisi pada tahap desain kawat/Figma dan 1-2 putaran ulasan pada tahap fungsionalitas kode).
      </p>
    `
  },
  {
    id: 'kepemilikan-kode',
    shortTitle: '3. Kepemilikan Kode & Aset',
    title: '100% Kepemilikan Kode Sumber & Hak Cipta',
    content: `
      <p class="mb-3">
        <strong>Aset Penuh Milik Klien:</strong> Setelah seluruh kewajiban pembayaran proyek diselesaikan lunas, 100% kepemilikan atas kode sumber aplikasi (source code), berkas desain Figma resolusi penuh, aset visual final, serta basis data yang dibuat khusus untuk Klien dialihkan secara penuh kepada Klien tanpa biaya royalti tambahan.
      </p>
      <p class="mb-3">
        <strong>Lisensi Komponen Pihak Ketiga:</strong> Komponen open-source atau pustaka dependensi (seperti Vue, React, Tailwind CSS, icon pack open-source) tunduk pada lisensi masing-masing (seperti lisensi MIT atau Apache 2.0).
      </p>
      <p class="mb-0">
        <strong>Hak Portofolio Studio:</strong> Kecuali jika ada Perjanjian Kerahasiaan (NDA) tertulis yang melarangnya, MoraCraft berhak secara wajar menampilkan tangkapan layar, mock-up visual, dan rangkuman studi kasus proyek dalam portofolio promosi studio kami.
      </p>
    `
  },
  {
    id: 'pembayaran-termin',
    shortTitle: '4. Skema Pembayaran',
    title: 'Ketentuan Pembayaran & Termin Biaya',
    content: `
      <p class="mb-3">
        <strong>Jadwal Pembayaran:</strong> Pembayaran dilakukan berdasarkan jadwal termin yang disepakati, standar kami adalah uang muka (down payment) 50% untuk memulai sprint proyek dan pelunasan 50% sebelum penyerahan akses produksi (final handoff) atau repositori GitHub produksi.
      </p>
      <p class="mb-3">
        <strong>Metode Pembayaran:</strong> Semua transaksi dilakukan via transfer bank resmi atau invoice gateway yang terverifikasi. Biaya transfer bank internasional atau pajak yang timbul menjadi tanggung jawab masing-masing pihak sesuai peraturan perundang-undangan.
      </p>
      <p class="mb-0">
        <strong>Pembatalan Proyek:</strong> Apabila Klien membatalkan proyek di tengah pengerjaan karena alasan sepihak di luar kelalaian studio, uang muka yang telah dibayarkan tidak dapat dikembalikan untuk mengompensasi alokasi waktu dan sumber daya yang telah berjalan.
      </p>
    `
  },
  {
    id: 'kerahasiaan-nda',
    shortTitle: '5. Kerahasiaan (NDA)',
    title: 'Kerahasiaan Data Bisnis & Informasi Klien',
    content: `
      <p class="mb-3">
        MoraCraft berkomitmen menjaga kerahasiaan seluruh materi internal, strategi bisnis, dokumen perencanaan produk, serta kredensial teknis (API key, akun server) yang dibagikan oleh Klien selama masa kerja sama.
      </p>
      <p class="mb-0">
        Kami bersedia menandatangani <em>Non-Disclosure Agreement</em> (NDA) terpisah sebelum pertukaran informasi sensitif dilakukan demi kenyamanan dan perlindungan hukum aset bisnis Anda.
      </p>
    `
  },
  {
    id: 'garansi-dukungan',
    shortTitle: '6. Garansi & Pemeliharaan',
    title: 'Garansi Teknis & Dukungan Purnajual',
    content: `
      <p class="mb-3">
        <strong>Periode Garansi Bebas Bug:</strong> Setiap peluncuran produk disertai masa garansi teknis gratis (14 hingga 60 hari tergantung paket yang dipilih). Garansi mencakup perbaikan galat (bug), perbaikan tata letak responsif yang tidak sesuai kesepakatan, dan penanganan ketidaksesuaian fungsional pada cakupan awal.
      </p>
      <p class="mb-0">
        <strong>Pengecualian Garansi:</strong> Garansi tidak berlaku apabila kode sumber atau konfigurasi server diubah oleh pihak ketiga tanpa persetujuan MoraCraft, atau akibat kegagalan server penyedia hosting eksternal di luar kendali kami.
      </p>
    `
  },
  {
    id: 'hukum-kontak',
    shortTitle: '7. Hukum & Kontak',
    title: 'Hukum yang Berlaku & Kanal Konsultasi',
    content: `
      <p class="mb-3">
        Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia. Segala perselisihan yang timbul akan diupayakan untuk diselesaikan secara musyawarah untuk mencapai mufakat.
      </p>
      <p class="mb-0">
        Untuk pertanyaan resmi terkait kontrak, invoice, atau konsultasi klausul khusus, silakan hubungi kami melalui email di <a href="mailto:studiomoracraft@gmail.com" class="text-accent fw-bold text-decoration-none">studiomoracraft@gmail.com</a>.
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

.section-body :deep(em) {
  color: #cbd5e1;
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
