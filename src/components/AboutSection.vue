<template>
  <section id="about" class="about-studio-section position-relative py-5">
    <div class="container py-lg-5">
      <div class="row align-items-center g-4 g-lg-5">
        <!-- Left Column: Story, Philosophy & Stats -->
        <div class="col-lg-6 col-xl-6">
          <div class="about-content pe-lg-3">
            <!-- Headline Without Badge -->
            <h2 class="about-serif-title text-white mb-4">
              Tentang Studio Kami
            </h2>

            <!-- Paragraphs Matching User Reference -->
            <div class="about-narrative d-flex flex-column gap-3 mb-4 pb-2">
             <p class="mb-0">
              MoraCraft adalah digital studio yang membantu mengubah ide bagus menjadi produk digital yang benar-benar works. Kami menggabungkan UI/UX yang clean dengan software engineering yang solid untuk menciptakan website dan aplikasi yang nggak cuma enak dilihat, tapi juga cepat, responsif, dan siap berkembang.
            </p>
            <p class="mb-0">
              Kami percaya produk digital yang bagus lahir dari kolaborasi, bukan sekadar brief lalu selesai. Karena itu, kami ikut memahami bisnis, kebutuhan user, dan goals yang ingin dicapai sebelum mulai build. Dari first pixel sampai final line of code, kami hadir untuk bikin ide Anda jadi sesuatu yang nyata, relevan, dan worth using.
            </p>

            </div>

            <!-- Action Button to Detailed About Us Page -->
            <div class="about-action-wrap pt-2">
              <button 
                id="btn-about-detail-profile"
                class="btn-detail-about d-inline-flex align-items-center gap-2"
                @click="$emit('go-to-about')"
              >
                <span>Detail Profil Studio</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Right Column: Dual Overlapping Photo Composition -->
        <div class="col-lg-6 col-xl-6">
          <div class="about-image-cluster position-relative mx-auto">
            <!-- Top / Right Backing Image (Studio Leadership) -->
            <div class="back-photo-wrapper">
              <img 
                src="/assets/img/photos/about27.jpg" 
                alt="MoraCraft Design Strategy" 
                class="photo-img rounded-4"
                loading="lazy"
                decoding="async"
                @error="handleBackFallback"
              />
            </div>

            <!-- Bottom / Left Foreground Image (Team Collaboration) -->
            <div class="front-photo-wrapper">
              <img 
                src="/assets/img/photos/about26.png" 
                alt="MoraCraft Engineering Team" 
                class="photo-img rounded-4"
                loading="lazy"
                decoding="async"
                @error="handleFrontFallback"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['go-to-about'])

const stats = [
  { number: '10+', label: 'Proyek Selesai' },
  { number: '50+', label: 'Klien Puas' },
  { number: '5+', label: 'Tahun Pengalaman' }
]

const handleBackFallback = (e) => {
  e.target.src = '/assets/img/photos/about28.jpg'
}

const handleFrontFallback = (e) => {
  e.target.src = '/assets/img/photos/about29.jpg'
}
</script>

<style scoped>
.about-studio-section {
  background-color: #0e1017;
  overflow: hidden;
}

/* Serif Display Headline Matching Screenshot */
.about-serif-title {
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: clamp(2.3rem, 4vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

/* Narrative Body Text */
.about-narrative {
  color: #9aa1b2;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.7;
}

/* Stat Cards */
.stat-card {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stat-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.stat-number {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(1.4rem, 2.2vw, 1.9rem);
  font-weight: 700;
  color: #e63946;
  line-height: 1.1;
}

.stat-label {
  font-size: clamp(0.72rem, 1vw, 0.82rem);
  color: #8b92a3;
  line-height: 1.35;
}

/* Image Cluster & Composition */
.about-image-cluster {
  max-width: 540px;
  min-height: 480px;
  position: relative;
}

/* Decorative Dot Grid */
.decorative-dots-grid {
  position: absolute;
  top: 40px;
  left: 20px;
  width: 120px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.75;
}

.matrix-dot {
  width: 5px;
  height: 5px;
  background-color: #e63946;
  border-radius: 50%;
  display: block;
}

/* Backing Photo (Top-Right) */
.back-photo-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 72%;
  height: 380px;
  z-index: 2;
}

.back-photo-wrapper .photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: block;
}

/* Foreground Photo (Bottom-Left) */
.front-photo-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 62%;
  height: 320px;
  z-index: 3;
}

.front-photo-wrapper .photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.14);
  display: block;
}

@media (max-width: 991px) {
  .about-image-cluster {
    min-height: 420px;
    max-width: 460px;
    margin-top: 20px;
  }
  .back-photo-wrapper {
    height: 320px;
  }
  .front-photo-wrapper {
    height: 260px;
  }
}

/* Action button to full About page */
.btn-detail-about {
  background: rgba(230, 57, 70, 0.08);
  border: 1px solid rgba(230, 57, 70, 0.35);
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 10px 22px;
  min-height: 44px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.22s ease;
}

.btn-detail-about:hover {
  background: #c52a33;
  border-color: #e63946;
  color: #ffffff;
  transform: translateX(4px);
}

.btn-detail-about svg {
  transition: transform 0.2s ease;
}

.btn-detail-about:hover svg {
  transform: translateX(3px);
}

@media (max-width: 576px) {
  .stat-card {
    padding: 12px 10px !important;
    border-radius: 10px;
  }
  .stat-number {
    font-size: 1.35rem;
  }
  .stat-label {
    font-size: 0.78rem;
    line-height: 1.3;
    color: #94a3b8;
  }
  .about-image-cluster {
    min-height: 300px;
    max-width: 100%;
    margin-top: 10px;
  }
  .back-photo-wrapper {
    height: 230px;
    width: 76%;
  }
  .front-photo-wrapper {
    height: 180px;
    width: 66%;
  }
}
</style>
