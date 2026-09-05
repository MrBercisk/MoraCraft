<template>
  <section id="pricing" class="pricing-studio-section py-5 position-relative">
    <div class="container py-lg-5">
      <!-- Top Center Header (Badge + Title) -->
      <div class="text-center mb-5">
        <div class="d-inline-flex align-items-center justify-content-center mb-3">
          <span class="pricing-top-badge">Paket Investasi</span>
        </div>
        <h2 class="pricing-display-title text-white">
          Paket Layanan &amp; Harga
        </h2>
      </div>

      <!-- Main Layout: Left Tabs + Right 3-Column Pricing Cards -->
      <div class="row g-4 align-items-start">
        <!-- Left Sidebar Category Tabs -->
        <div class="col-lg-3 col-xl-3">
          <div class="service-tabs-nav d-flex flex-column gap-3">
            <button
              v-for="tab in serviceCategories"
              :key="tab.id"
              class="service-tab-item text-start"
              :class="{ 'is-active': activeCategory === tab.id }"
              @click="activeCategory = tab.id"
            >
              {{ tab.name }}
            </button>
          </div>
        </div>

        <!-- Right 3-Column Pricing Cards Grid -->
        <div class="col-lg-9 col-xl-9">
          <div class="row g-3 g-xl-4">
            <div
              class="col-md-4"
              v-for="plan in currentPlans"
              :key="plan.tier"
            >
              <div
                class="pricing-tier-card h-100 d-flex flex-column justify-content-between p-4"
                :class="{ 'is-popular': plan.popular }"
              >
                <div>
                  <!-- Card Header (Tier Name + Optional Popular Badge) -->
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <span class="tier-name">{{ plan.tier }}</span>
                    <span v-if="plan.popular" class="popular-tag">Terpopuler</span>
                  </div>

                  <!-- Price Display -->
                  <div class="tier-price-val text-white mb-2">
                    {{ plan.price }}
                  </div>

                  <!-- Tagline / Subtitle -->
                  <p class="tier-subtitle text-secondary mb-4">
                    {{ plan.subtitle }}
                  </p>

                  <!-- Divider -->
                  <div class="tier-divider mb-4"></div>

                  <!-- Feature List with Red Dots -->
                  <ul class="list-unstyled d-flex flex-column gap-3 mb-4">
                    <li
                      v-for="(feature, fIndex) in plan.features"
                      :key="fIndex"
                      class="feature-row d-flex align-items-start gap-2"
                    >
                      <span class="feature-dot"></span>
                      <span class="feature-text">{{ feature }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Bottom CTA Action -->
                <div class="pt-3">
                  <button
                    class="btn-tier-action w-100"
                    :class="{ 'btn-tier-popular': plan.popular }"
                    @click="choosePlan(plan)"
                  >
                    Pilih Paket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { scrollToSection } from '../utils/scroll.js'

const emit = defineEmits(['select-service'])

const activeCategory = ref('web-dev')

const serviceCategories = [
  { id: 'web-dev', name: 'Pengembangan Web' },
  { id: 'web-design', name: 'Desain Web' },
  { id: 'mobile-app', name: 'Desain Aplikasi Mobile' }
]

const packagesData = {
  'web-dev': [
    {
      tier: 'BASIC',
      price: 'Rp 2.500.000',
      subtitle: 'Landing page ringkas dan efektif untuk kebutuhan Anda.',
      popular: false,
      features: [
        '1 halaman landing page responsif',
        'Arsitektur modern Vue 3 / Next.js',
        'Integrasi formulir prospek & tombol WhatsApp',
        'Konfigurasi meta tag SEO dasar',
        'Dukungan teknis 14 hari'
      ]
    },
    {
      tier: 'STANDARD',
      price: 'Rp 5.500.000',
      subtitle: 'Website dinamis multi-halaman dengan CMS.',
      popular: true,
      features: [
        'Hingga 6 halaman kustom',
        'Logika TypeScript & integrasi API',
        'Komponen interaktif & animasi halus',
        'Dasbor admin / manajemen konten',
        'Jaminan skor performa 95+',
        'Dukungan teknis 30 hari'
      ]
    },
    {
      tier: 'PREMIUM',
      price: 'Rp 10.500.000',
      subtitle: 'Aplikasi web full-stack & portal kustom.',
      popular: false,
      features: [
        'Aplikasi web & portal pengguna kustom',
        'Autentikasi & penyiapan basis data',
        'Integrasi payment gateway',
        'Pipeline deployment otomatis (CI/CD)',
        'Dukungan prioritas khusus 60 hari'
      ]
    }
  ],
  'web-design': [
    {
      tier: 'BASIC',
      price: 'Rp 1.800.000',
      subtitle: 'Mockup & tata letak UI Figma esensial.',
      popular: false,
      features: [
        '1 mockup landing page Figma kustom',
        'Frame responsif desktop & mobile',
        'Token palet warna & tipografi',
        'Aset siap ekspor resolusi tinggi'
      ]
    },
    {
      tier: 'STANDARD',
      price: 'Rp 4.200.000',
      subtitle: 'Sistem desain UI/UX komprehensif.',
      popular: true,
      features: [
        'Hingga 5 layar utama kustom',
        'Library komponen atomik Figma lengkap',
        'Prototipe interaktif yang dapat diklik',
        'Varian tema gelap & terang',
        'Dokumentasi handoff untuk developer'
      ]
    },
    {
      tier: 'PREMIUM',
      price: 'Rp 7.800.000',
      subtitle: 'Branding produk & sistem UX terpadu.',
      popular: false,
      features: [
        'Sistem desain lengkap web app / SaaS',
        'Panduan identitas merek & ikon kustom',
        'Prototipe interaktif multi-perangkat',
        'Alur UX wireframe & perjalanan pengguna',
        'Sesi konsultasi langsung dengan desainer'
      ]
    }
  ],
  'mobile-app': [
    {
      tier: 'BASIC',
      price: 'Rp 2.800.000',
      subtitle: 'Konsep & alur dasar aplikasi mobile.',
      popular: false,
      features: [
        'Hingga 4 mockup layar aplikasi utama',
        'Panduan UI native iOS & Android',
        'Layar onboarding & splash screen',
        'File mentah Figma & paket ikon'
      ]
    },
    {
      tier: 'STANDARD',
      price: 'Rp 6.500.000',
      subtitle: 'Prototipe UI/UX mobile end-to-end.',
      popular: true,
      features: [
        'Hingga 10 layar aplikasi lengkap',
        'Alur onboarding & autentikasi lengkap',
        'Prototipe mikro-animasi interaktif',
        'Kit komponen mobile kustom',
        'Ekspor aset produksi (Flutter/React Native)'
      ]
    },
    {
      tier: 'PREMIUM',
      price: 'Rp 12.000.000',
      subtitle: 'Ekosistem aplikasi mobile kelas enterprise.',
      popular: false,
      features: [
        'Ekosistem produk mobile lengkap 20+ layar',
        'Wireframe kasus khusus & state lanjutan',
        'Ekspor token desain untuk pengembang mobile',
        'Uji coba pengguna & audit UX mendalam',
        'Revisi sprint desain terdedikasi'
      ]
    }
  ]
}

const currentPlans = computed(() => {
  return packagesData[activeCategory.value] || packagesData['web-dev']
})

const choosePlan = (plan) => {
  const categoryName = serviceCategories.find(c => c.id === activeCategory.value)?.name || 'Pengembangan Web'
  emit('select-service', `${categoryName} - ${plan.tier}`)
  scrollToSection('contact')
}
</script>

<style scoped>
.pricing-studio-section {
  background-color: #0c0e15;
  overflow: hidden;
}

/* Top Pill Badge */
.pricing-top-badge {
  background: rgba(230, 57, 70, 0.08);
  border: 1px solid rgba(230, 57, 70, 0.35);
  color: #ff6b77;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 18px;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

/* Display Title */
.pricing-display-title {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(2rem, 3.8vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Service Category Tabs on the Left */
.service-tabs-nav {
  position: sticky;
  top: 90px;
}

.service-tab-item {
  width: 100%;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #c5cad6;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 14px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: block;
}

.service-tab-item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.16);
}

.service-tab-item.is-active {
  background: #c52a33;
  color: #ffffff;
  border-color: #e63946;
  box-shadow: 0 4px 20px rgba(197, 42, 51, 0.45);
}

/* Pricing Cards */
.pricing-tier-card {
  background: #11131c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.pricing-tier-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.16);
}

/* Popular Highlighted Card */
.pricing-tier-card.is-popular {
  background: #151826;
  border: 1px solid #e63946;
}

/* Header Elements */
.tier-name {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #94a3b8;
  text-transform: uppercase;
}

.popular-tag {
  background: rgba(230, 57, 70, 0.18);
  border: 1px solid rgba(230, 57, 70, 0.4);
  color: #ff6b77;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 9999px;
  letter-spacing: 0.02em;
}

/* Price Value */
.tier-price-val {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(1.5rem, 2vw, 1.85rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.tier-subtitle {
  font-size: 0.88rem;
  color: #9aa1b2;
  line-height: 1.5;
  min-height: 42px;
}

.tier-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.07);
}

/* Features List with Red Dots */
.feature-row {
  line-height: 1.4;
}

.feature-dot {
  width: 6px;
  height: 6px;
  background-color: #e63946;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 7px;
}

.feature-text {
  font-size: 0.9rem;
  color: #d1d5db;
  line-height: 1.5;
}

/* CTA Action Buttons */
.btn-tier-action {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f3f4f6;
  padding: 10px 16px;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-tier-action:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

.btn-tier-popular {
  background: #c52a33;
  border: 1px solid #e63946;
  color: #ffffff;
}

.btn-tier-popular:hover {
  background: #d8313b;
  border-color: #f25c68;
  color: #ffffff;
  transform: translateY(-1px);
}

@media (max-width: 991px) {
  .service-tabs-nav {
    position: static;
    flex-direction: row !important;
    overflow-x: auto;
    padding-bottom: 8px;
    margin-bottom: 12px;
    gap: 8px !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .service-tabs-nav::-webkit-scrollbar {
    display: none;
  }
  .service-tab-item {
    white-space: nowrap;
    width: auto;
    padding: 10px 18px;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    font-size: 0.88rem;
  }
}

@media (max-width: 576px) {
  .pricing-tier-card {
    padding: 20px 16px !important;
  }
  .tier-price-val {
    font-size: 1.55rem;
  }
  .tier-subtitle {
    min-height: auto;
    margin-bottom: 1rem !important;
  }
  .service-tab-item {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
}
</style>
