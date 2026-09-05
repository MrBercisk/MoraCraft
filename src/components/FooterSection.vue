<template>
  <footer class="studio-footer pt-5 pb-4 border-top border-dark position-relative">
    <div class="container py-lg-3">
      <div class="row g-4 justify-content-between mb-5">
        <!-- Studio Identity & Mission -->
        <div class="col-lg-4">
          <a class="d-inline-flex align-items-center gap-2 mb-3 text-decoration-none" href="#hero" @click.prevent="handleFooterNav('home', 'hero')">
            <img src="/assets/img/logo_moracraftnew.png" alt="MoraCraft Studio" class="footer-logo" @error="handleLogoError" />
            <span v-if="showTextLogo" class="footer-brand-text">Mora<span class="brand-accent">Craft</span></span>
          </a>
          <p class="footer-desc mb-0">
            MoraCraft adalah digital studio yang bantu mengubah ide jadi produk digital yang clean, fast, dan built to scale dari UI/UX sampai kode di baliknya.
          </p>
        </div>

        <!-- Sitemap Navigation -->
        <div class="col-6 col-md-3 col-lg-2">
          <h4 class="footer-heading text-white fw-bold mb-3">Navigasi</h4>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li><a href="#hero" class="footer-link" @click.prevent="handleFooterNav('home', 'hero')">Beranda</a></li>
            <li><a href="#about" class="footer-link" @click.prevent="handleFooterNav('home', 'about')">Tentang Kami</a></li>
            <li><a href="#/about-us" class="footer-link" @click.prevent="handleFooterNav('about')">Detail Profil Studio</a></li>
            <li><a href="#portfolio" class="footer-link" @click.prevent="handleFooterNav('home', 'portfolio')">Portofolio Terpilih</a></li>
            <li><a href="#/projects" class="footer-link" @click.prevent="handleFooterNav('project-detail')">Detail Proyek &amp; Studi Kasus</a></li>
            <li><a href="#pricing" class="footer-link" @click.prevent="handleFooterNav('home', 'pricing')">Paket Harga</a></li>
            <li><a href="#faq" class="footer-link" @click.prevent="handleFooterNav('home', 'faq')">FAQ &amp; Tanya Jawab</a></li>
            <li><a href="#contact" class="footer-link" @click.prevent="handleFooterNav('home', 'contact')">Hubungi Kami</a></li>
          </ul>
        </div>

        <!-- Terms & Conditions & Privacy Policy -->
        <div class="col-6 col-md-3 col-lg-2">
          <h4 class="footer-heading text-white fw-bold mb-3">Ketentuan &amp; Privasi</h4>
          <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
            <li>
              <a href="#/terms-and-conditions" class="footer-link" @click.prevent="handleFooterNav('terms')">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#/privacy-policy" class="footer-link" @click.prevent="handleFooterNav('privacy')">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <!-- Channels & Office -->
        <div class="col-md-6 col-lg-3">
          <h4 class="footer-heading text-white fw-bold mb-3">Konsultasi Studio</h4>
          <p class="text-secondary small mb-2">Punya ide proyek atau butuh ulasan arsitektur?</p>
          <a href="mailto:studiomoracraft@gmail.com" class="footer-email-link mb-3 d-inline-block">studiomoracraft@gmail.com</a>
          <div class="d-flex gap-2 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-chip">Instagram</a>
          </div>
        </div>
      </div>

      <!-- Bottom Copyright & Legal Strip -->
      <div class="footer-bottom pt-4 border-top border-dark d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
        <span class="footer-copy text-secondary small">
          © {{ currentYear }} MoraCraft Studio. Hak cipta dilindungi.
        </span>
        <div class="d-flex align-items-center gap-3">
          <a href="#/terms-and-conditions" class="footer-legal-tag" @click.prevent="handleFooterNav('terms')">Terms &amp; Conditions</a>
          <span class="text-secondary opacity-50 small">·</span>
          <a href="#/privacy-policy" class="footer-legal-tag" @click.prevent="handleFooterNav('privacy')">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['navigate'])

const currentYear = new Date().getFullYear()
const showTextLogo = ref(false)

const handleLogoError = () => {
  showTextLogo.value = true
}

const handleFooterNav = (route, sectionId) => {
  emit('navigate', route, sectionId)
}
</script>

<style scoped>
.studio-footer {
  background-color: #090a0e;
  border-color: rgba(255, 255, 255, 0.06) !important;
}

.footer-logo {
  max-height: 28px;
  width: auto;
}

.footer-brand-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #ffffff;
}

.brand-accent {
  color: #e63946;
}

.footer-desc {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.65;
}

.footer-heading {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #f3f4f6;
}

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.15s ease;
  display: inline-block;
  padding: 2px 0;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-text-item {
  color: #6b7280;
  font-size: 0.9rem;
}

.footer-email-link {
  color: #e63946;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
}

.footer-email-link:hover {
  text-decoration: underline;
}

.social-chip {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #9ca3af;
  font-size: 0.82rem;
  padding: 6px 12px;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.15s ease;
}

.social-chip:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.footer-bottom {
  border-color: rgba(255, 255, 255, 0.06) !important;
}

.footer-legal-tag {
  font-size: 0.85rem;
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.15s ease;
  cursor: pointer;
}

.footer-legal-tag:hover {
  color: #ffffff;
  text-decoration: underline;
}
</style>
