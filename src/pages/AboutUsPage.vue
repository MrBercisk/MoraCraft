<template>
  <main class="about-page-wrapper position-relative text-white">
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
        <span class="breadcrumb-current">Tentang Kami</span>
      </nav>

    

      <!-- Section: Story & Background (2 Columns) -->
      <section class="about-story-section py-5 border-top border-dark-subtle">
        <div class="row align-items-center g-4 g-lg-5">
          <!-- Story Narrative -->
          <div class="col-lg-6">
            <span class="section-sub-badge mb-2 d-inline-block">Tentang Kami</span>
            <h2 class="section-title text-white mb-4">
              Lahir dari Hasrat Terhadap Kode yang Bersih &amp; Desain yang Bernyawa.
            </h2>
           <div class="story-body d-flex flex-column gap-3 text-secondary">
                  <p>
                    MoraCraft berawal dari satu pemikiran sederhana: website yang bagus seharusnya cepat, mudah digunakan, dan benar-benar membantu bisnis berkembang. Kami melihat masih banyak website yang terlihat menarik, tetapi terasa lambat, membingungkan, atau sulit digunakan oleh pengunjung.
                  </p>

                  <p>
                    Karena itu, kami memilih pendekatan yang berbeda. Setiap proyek kami kerjakan dengan perhatian penuh terhadap detail, mulai dari struktur dan performa hingga tampilan visualnya. Kami menggabungkan teknologi modern seperti Vue, React dan TypeScript dengan desain yang disesuaikan dengan karakter dan kebutuhan setiap brand.
                  </p>

                  <p>
                    Kami tidak ingin sekadar membuat website lalu selesai. MoraCraft ingin menjadi partner yang bisa diajak berdiskusi, memahami kebutuhan bisnis Anda, dan bersama-sama mencari solusi yang paling tepat. Setiap proyek dibangun secara khusus, dan kode sumbernya sepenuhnya menjadi milik klien tanpa biaya atau lisensi tersembunyi.
                  </p>
                </div>

           
          </div>

          <!-- Studio Imagery Cluster -->
          <div class="col-lg-6">
            <div class="story-photo-grid position-relative">
              <div class="main-photo-wrap rounded-4 overflow-hidden shadow-lg">
                <img 
                  src="/assets/img/photos/about17.jpg" 
                  alt="MoraCraft Studio Workspace" 
                  class="w-100 h-100 object-fit-cover"
                  loading="lazy"
                  decoding="async"
                  @error="handleImgFallback"
                />
              </div>
              <div class="sub-photo-wrap rounded-4 overflow-hidden shadow-lg position-absolute">
                <img 
                  src="/assets/img/photos/about26.png" 
                  alt="Team Collaboration MoraCraft" 
                  class="w-100 h-100 object-fit-cover"
                  loading="lazy"
                  decoding="async"
                  @error="handleImgFallback2"
                />
              </div>
              <div class="floating-badge-tag rounded-3 px-3 py-2 position-absolute">
                <div class="d-flex align-items-center gap-2">
                  <span class="status-indicator"></span>
                  <span class="small fw-semibold text-white">Bekerja dengan Standar Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- Section: Studio Arsenal (Tech Stack) -->
      <section class="tech-arsenal-section py-5 border-top border-dark-subtle">
        <div class="row align-items-center g-4">
          <div class="col-lg-5">
            <span class="section-sub-badge mb-2 d-inline-block">Standar Teknologi</span>
            <h2 class="section-title text-white mb-3">Ekosistem Modern Tanpa Beban Teknis Usang.</h2>
            <p class="text-secondary mb-4">
              Kami secara ketat memilih alat kerja yang menjamin skalabilitas jangka panjang, keamanan kode, dan kemudahan pemeliharaan bagi tim internal Anda di masa mendatang.
            </p>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <div class="d-flex align-items-center gap-2">
                <span class="status-indicator"></span>
                <span class="text-white small fw-semibold">100% Repositori Git Pribadi</span>
              </div>
              <div class="d-flex align-items-center gap-2">
                <span class="status-indicator"></span>
                <span class="text-white small fw-semibold">Dokumentasi Handoff Lengkap</span>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="tech-tags-grid p-4 rounded-4">
              <div class="row g-3">
                <div class="col-6 col-sm-4" v-for="tool in techArsenal" :key="tool.name">
                  <div class="tool-box p-3 rounded-3 text-center h-100">
                    <div class="tool-category text-secondary mb-1">{{ tool.category }}</div>
                    <div class="tool-name text-white fw-bold">{{ tool.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { scrollToTopDirectly } from '../utils/scroll.js'

defineEmits(['go-home', 'go-contact', 'go-portfolio'])

onMounted(() => {
  scrollToTopDirectly(false)
})

const keyMetrics = [
  { value: '10+', label: 'Proyek Selesai', sub: 'Teruji & aktif digunakan' },
  { value: '98%', label: 'Skor Core Web Vitals', sub: 'Standar performa sub-detik' },
  { value: '100%', label: 'Kepemilikan Kode', sub: 'Aset penuh milik klien' },
  { value: 'Nol', label: 'Template Instan', sub: '100% kustom & unik' }
]

const techArsenal = [
  { category: 'Frontend Modern', name: 'React.js & Vue.js' },
  { category: 'Type Safety', name: 'TypeScript' },
  { category: 'Backend PHP', name: 'Laravel & CodeIgniter' },
  { category: 'Backend Performant', name: 'Go (Golang)' },
  { category: 'Admin Panel', name: 'Filament PHP' },
  { category: 'Database & Cloud', name: 'MySQL & Supabase' },
  { category: 'Desain & UI', name: 'Figma, Tailwind & Bootstrap' },
  { category: 'Build & Edge', name: 'Vite & Vercel' },
  { category: 'DevOps & Finansial', name: 'GitHub & Payment Gateway' }
]

const handleImgFallback = (e) => {
  e.target.src = '/assets/img/photos/about28.jpg'
}

const handleImgFallback2 = (e) => {
  e.target.src = '/assets/img/photos/about29.jpg'
}

</script>

<style scoped>
.about-page-wrapper {
  background-color: #0b0c12;
  min-height: 100vh;
  padding-top: 60px;
  overflow-x: hidden;
}

/* Ambient Lighting Background */
.ambient-glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(120px);
  z-index: 0;
  opacity: 0.15;
}

.glow-top {
  top: 5%;
  right: -100px;
  background: radial-gradient(circle, #e63946 0%, transparent 70%);
}

.glow-middle {
  top: 45%;
  left: -150px;
  background: radial-gradient(circle, #c52a33 0%, transparent 70%);
}

/* Breadcrumb */
.breadcrumb-link-btn {
  background: none;
  border: none;
  color: #9aa1b2;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}

.breadcrumb-link-btn:hover {
  color: #ffffff;
}

.breadcrumb-sep {
  font-size: 0.85rem;
}

.breadcrumb-current {
  color: #e63946;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Badges */
.studio-pill-badge {
  background: rgba(230, 57, 70, 0.1);
  border: 1px solid rgba(230, 57, 70, 0.35);
  color: #ff6b77;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 18px;
  border-radius: 9999px;
  letter-spacing: 0.03em;
}

.section-sub-badge {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e63946;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Hero Titles */
.about-hero-title {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
  max-width: 900px;
}

.text-accent {
  color: #e63946;
}

.about-hero-lead {
  font-size: clamp(1rem, 1.3vw, 1.15rem);
  line-height: 1.7;
  max-width: 780px;
}

/* Metric Cards */
.metric-card {
  background: #11131c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.metric-card:hover {
  border-color: rgba(230, 57, 70, 0.4);
  transform: translateY(-2px);
}

.metric-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 700;
  color: #e63946;
  line-height: 1.1;
}

.metric-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: #f3f4f6;
  line-height: 1.3;
}

.metric-sub {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 3px;
}

/* Story Section */
.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.story-body {
  font-size: 0.96rem;
  line-height: 1.7;
}

.founder-callout {
  background: rgba(230, 57, 70, 0.06);
  border: 1px solid rgba(230, 57, 70, 0.25);
}

.quote-mark {
  font-family: serif;
  font-size: 3rem;
  line-height: 1;
  color: #e63946;
  opacity: 0.8;
}

.quote-text {
  font-size: 0.92rem;
  line-height: 1.6;
}

/* Story Photo Grid */
.story-photo-grid {
  min-height: 440px;
}

.main-photo-wrap {
  width: 82%;
  height: 380px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.sub-photo-wrap {
  width: 58%;
  height: 240px;
  bottom: 0;
  right: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #10121a;
}

.floating-badge-tag {
  bottom: 20px;
  left: 10px;
  background: rgba(13, 15, 22, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
}

.status-indicator {
  width: 7px;
  height: 7px;
  background-color: #10b981;
  border-radius: 50%;
  display: inline-block;
}

/* Vision & Mission Cards */
.max-w-700 {
  max-width: 680px;
}

.vm-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.vm-card:hover {
  border-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.vm-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(230, 57, 70, 0.1);
  border: 1px solid rgba(230, 57, 70, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vm-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
}

.bullet-check {
  color: #e63946;
  font-weight: bold;
}

/* Core Values Pillars */
.pillar-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.pillar-card:hover {
  transform: translateY(-4px);
  border-color: rgba(230, 57, 70, 0.4);
}

.pillar-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: rgba(230, 57, 70, 0.7);
  display: block;
  margin-bottom: 8px;
}

.pillar-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.35;
}

.pillar-desc {
  font-size: 0.85rem;
  line-height: 1.6;
}

.pillar-accent-bar {
  height: 2px;
  width: 28px;
  background: #e63946;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.pillar-card:hover .pillar-accent-bar {
  width: 48px;
}

/* Team Section */
.team-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.18);
}

.team-avatar-wrap {
  width: 100%;
  height: 220px;
  background: #171a26;
}

.team-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .team-avatar {
  transform: scale(1.04);
}

.team-role-tag {
  top: 12px;
  right: 12px;
  background: rgba(11, 12, 18, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
}

.member-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
}

.member-role {
  font-size: 0.8rem;
  font-weight: 500;
}

.text-accent {
  color: #ff6b77;
}

.member-bio {
  line-height: 1.5;
}

.skill-chip {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 4px;
}

/* Process Steps */
.process-step-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.process-step-card:hover {
  transform: translateY(-2px);
  border-color: rgba(230, 57, 70, 0.35);
}

.step-badge {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #e63946;
  width: 36px;
  height: 36px;
  background: rgba(230, 57, 70, 0.1);
  border: 1px solid rgba(230, 57, 70, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-title {
  font-size: 1.05rem;
  font-weight: 700;
}

.step-desc {
  line-height: 1.6;
}

/* Tech Arsenal Grid */
.tech-tags-grid {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.tool-box {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.2s ease;
}

.tool-box:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.tool-category {
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: #94a3b8 !important;
}

.tool-name {
  font-size: 0.95rem;
}

/* Dedicated About CTA */
.about-cta-section {
  background: #11131c;
  border: 1px solid rgba(230, 57, 70, 0.25);
  border-radius: 16px;
}

.cta-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.cta-lead {
  font-size: 1rem;
  line-height: 1.65;
}

.btn-cta-primary {
  background: #c52a33;
  border: 1px solid #e63946;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 24px;
  min-height: 44px;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-cta-primary:hover {
  background: #d8313b;
  transform: translateY(-1px);
}

.btn-cta-secondary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f3f4f6;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 22px;
  min-height: 44px;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.btn-cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 991px) {
  .story-photo-grid {
    min-height: 360px;
    margin-top: 20px;
  }
  .main-photo-wrap {
    width: 90%;
    height: 280px;
  }
  .sub-photo-wrap {
    width: 65%;
    height: 170px;
  }
}

@media (max-width: 576px) {
  .about-page-wrapper {
    padding-top: 40px;
  }
  .about-hero-title {
    font-size: 1.85rem;
  }
  .metric-card {
    padding: 14px 10px !important;
  }
  .story-photo-grid {
    min-height: 270px;
    margin-top: 15px;
  }
  .main-photo-wrap {
    width: 95%;
    height: 220px;
  }
  .sub-photo-wrap {
    width: 65%;
    height: 140px;
  }
  .vm-card,
  .pillar-card,
  .process-step-card {
    padding: 20px 18px !important;
  }
  .about-cta-section {
    padding: 28px 18px !important;
  }
}
</style>
