<template>
  <section id="testimonials" class="studio-section py-5 position-relative">
    <div class="container py-lg-4">
      <!-- Section Header -->
      <div class="row justify-content-between align-items-end mb-5">
        <div class="col-lg-6">
          <div class="section-kicker mb-2">Testimoni Klien</div>
          <h2 class="section-heading text-white">
            Ulasan Nyata dari Klien Kami.
          </h2>
        </div>
        <div class="col-lg-5 mt-3 mt-lg-0">
          <p class="section-lead text-secondary mb-0">
            Komitmen kami pada kualitas visual, kode berstandar tinggi, dan penyelesaian tepat waktu dirasakan langsung oleh mitra kami.
          </p>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="t in testimonials" :key="t.author">
          <div class="testimonial-card p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <!-- 5-Star Rating & Minimal Quote Mark -->
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="star-rating d-flex align-items-center gap-1" aria-label="5 bintang">
                  <svg 
                    v-for="n in 5" 
                    :key="n" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="#fab758" 
                    stroke="#fab758" 
                    stroke-width="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span class="quote-mark text-secondary opacity-50">“</span>
              </div>

              <!-- Testimonial Quote Text -->
              <p class="quote-text text-light mb-4">{{ t.quote }}</p>
            </div>

            <!-- Author & Company Attribution (Simple & Clean) -->
            <div class="author-attribution pt-3 border-top">
              <h3 class="author-name text-white fw-semibold mb-0">{{ t.author }}</h3>
              <span class="company-name text-secondary">{{ t.company }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'MoraCraft merevolusi platform telemetri kami secara total. Kode TypeScript mereka sangat bersih, modular, dan waktu muat halaman berkurang 65%. Komunikasi langsung tanpa birokrasi berbelit.',
    author: 'Marcus Vance',
    company: 'Nova Technologies'
  },
  {
    quote: 'Storefront busana headless kami mencatat kenaikan konversi 38% hanya dalam dua minggu peluncuran. Presisi visual di Figma diterjemahkan dengan sempurna ke kode produksi.',
    author: 'Elena Rostova',
    company: 'Lumina Apparel'
  },
  {
    quote: 'Sangat jarang menemukan studio yang menguasai keindahan estetika antarmuka sekaligus rekayasa frontend yang mendalam. MoraCraft menyelesaikan MVP fintech kami dua minggu lebih awal dari jadwal.',
    author: 'Devon Chen',
    company: 'Apex Fintech'
  }
]
</script>

<style scoped>
.studio-section {
  background-color: #0e0f16;
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #e63946;
}

.section-heading {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.section-lead {
  font-size: 1rem;
  line-height: 1.65;
}

.testimonial-card {
  background: #12141d;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  transition: all 0.22s ease-in-out;
}

.testimonial-card:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: #141722;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
}

.quote-mark {
  font-family: 'IBM Plex Serif', Georgia, serif;
  font-size: 1.8rem;
  line-height: 1;
}

.quote-text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: #e2e8f0 !important;
}

.author-attribution {
  border-color: rgba(255, 255, 255, 0.08) !important;
}

.author-name {
  font-size: 1rem;
  letter-spacing: -0.01em;
}

.company-name {
  font-size: 0.85rem;
  color: #94a3b8 !important;
}

@media (max-width: 576px) {
  .testimonial-card {
    padding: 20px 18px !important;
  }
  .quote-text {
    font-size: 0.92rem;
  }
}
</style>
