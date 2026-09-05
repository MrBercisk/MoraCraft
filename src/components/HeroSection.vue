<template>
  <section
    id="hero"
    class="studio-hero position-relative d-flex align-items-center justify-content-center text-center"
  >
    <!-- Canvas Grid Background -->
    <canvas
      ref="hexCanvas"
      class="hero-canvas"
      aria-hidden="true"
    ></canvas>

    <!-- Dark Wine Overlay -->
    <div
      class="hero-bg-overlay"
      aria-hidden="true"
    ></div>

    <!-- Content -->
    <div class="container position-relative hero-content py-5 my-auto">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-9">

          <h1 class="hero-serif-title text-white mb-4">
            Kami membangun produk digital yang membantu bisnis Anda bertumbuh.
          </h1>

          <p class="hero-subtext mx-auto mb-4 pb-2">
            Dari pengembangan website hingga desain aplikasi mobile, kami
            menciptakan solusi yang bersih, terukur, dan ramah pengguna.
          </p>

          <div
            class="hero-action-group d-flex flex-wrap align-items-center justify-content-center gap-3"
          >
            <a
              href="#contact"
              class="btn-hero-pill-primary"
              @click.prevent="scrollTo('contact')"
            >
              Mulai Proyek Anda
            </a>

            <a
              href="#portfolio"
              class="btn-hero-pill-secondary"
              @click.prevent="scrollTo('portfolio')"
            >
              Lihat Portofolio Kami
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
} from 'vue'

import { scrollToSection } from '../utils/scroll.js'

const hexCanvas = ref(null)

const GRID_CONFIG = {
  cellWidth: 120,
  cellHeight: 80,
  skew: 0.55,
  lineColor: 'rgba(190, 80, 80, 0.28)',
  lineWidth: 0.8,
}

const scrollTo = (id) => {
  scrollToSection(id)
}

const drawGrid = () => {
  const canvas = hexCanvas.value

  if (!canvas) return

  const ctx = canvas.getContext('2d')

  if (!ctx) return

  const W = canvas.offsetWidth || 900
  const H = canvas.offsetHeight || 600

  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  canvas.width = W * dpr
  canvas.height = H * dpr

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  ctx.clearRect(0, 0, W, H)

  const {
    cellWidth,
    cellHeight,
    skew,
    lineColor,
    lineWidth,
  } = GRID_CONFIG

  const rows = Math.ceil(H / cellHeight) + 4
  const cols = Math.ceil(W / cellWidth) + 4

  const xOffset =
    skew * (H + cellHeight * 4) + cellWidth

  ctx.strokeStyle = lineColor
  ctx.lineWidth = lineWidth

  /*
   * Garis diagonal arah pertama
   */
  for (let r = -2; r < rows + 2; r++) {
    const y = r * cellHeight

    ctx.beginPath()

    ctx.moveTo(
      -xOffset,
      y + H
    )

    ctx.lineTo(
      -xOffset + W + xOffset * 2 + cellWidth * 2,
      y - skew * (H + cellHeight * 4)
    )

    ctx.stroke()
  }

  /*
   * Garis diagonal arah kedua
   */
  for (let c = -2; c < cols + 4; c++) {
    const x = c * cellWidth

    ctx.beginPath()

    ctx.moveTo(
      x,
      H + cellHeight
    )

    ctx.lineTo(
      x + skew * (H + cellHeight * 2),
      -cellHeight
    )

    ctx.stroke()
  }
}

onMounted(() => {
  drawGrid()

  window.addEventListener(
    'resize',
    drawGrid
  )
})

onUnmounted(() => {
  window.removeEventListener(
    'resize',
    drawGrid
  )
})
</script>

<style scoped>
.studio-hero {
  position: relative;

  min-height: 88vh;

  padding: 100px 0 80px;

  overflow: hidden;

  background:
    radial-gradient(
      ellipse 80% 60% at 50% 50%,
      rgba(85, 12, 17, 0.75) 0%,
      rgba(26, 3, 5, 0.95) 70%,
      #0c0102 100%
    );
}

/*
|--------------------------------------------------------------------------
| Canvas Background
|--------------------------------------------------------------------------
*/

.hero-canvas {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 0;

  pointer-events: none;
}

/*
|--------------------------------------------------------------------------
| Dark Overlay
|--------------------------------------------------------------------------
*/

.hero-bg-overlay {
  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    radial-gradient(
      circle at center,
      rgba(40, 4, 8, 0.05) 20%,
      rgba(8, 1, 2, 0.7) 100%
    );

  pointer-events: none;
}

/*
|--------------------------------------------------------------------------
| Hero Content
|--------------------------------------------------------------------------
*/

.hero-content {
  z-index: 2;
}

/*
|--------------------------------------------------------------------------
| Heading
|--------------------------------------------------------------------------
*/

.hero-serif-title {
  font-family:
    'Playfair Display',
    Georgia,
    Cinzel,
    serif;

  font-size:
    clamp(
      2.4rem,
      5.2vw,
      4.2rem
    );

  font-weight: 700;

  letter-spacing: -0.02em;

  line-height: 1.16;

  max-width: 820px;

  margin-left: auto;
  margin-right: auto;

  text-wrap: balance;

  text-shadow:
    0 4px 24px
    rgba(0, 0, 0, 0.4);
}

/*
|--------------------------------------------------------------------------
| Subtitle
|--------------------------------------------------------------------------
*/

.hero-subtext {
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;

  font-size:
    clamp(
      1rem,
      1.6vw,
      1.18rem
    );

  line-height: 1.65;

  max-width: 580px;

  color: #bfa8a9;

  font-weight: 400;
}

/*
|--------------------------------------------------------------------------
| Buttons
|--------------------------------------------------------------------------
*/

.hero-action-group {
  margin-top: 4px;
}

.btn-hero-pill-primary,
.btn-hero-pill-secondary {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 12px 28px;

  min-height: 46px;

  border-radius: 9999px;

  font-weight: 500;

  font-size: 0.95rem;

  text-decoration: none;

  transition: all 0.2s ease;
}

.btn-hero-pill-primary {
  background-color: #a82025;

  color: #ffffff;

  border:
    1px solid
    rgba(255, 255, 255, 0.12);
}

.btn-hero-pill-primary:hover {
  background-color: #be252b;

  color: #ffffff;

  transform:
    translateY(-2px);
}

.btn-hero-pill-secondary {
  background-color:
    rgba(255, 255, 255, 0.04);

  color: #e5e7eb;

  border:
    1px solid
    rgba(255, 255, 255, 0.24);
}

.btn-hero-pill-secondary:hover {
  background-color:
    rgba(255, 255, 255, 0.1);

  border-color:
    rgba(255, 255, 255, 0.4);

  color: #ffffff;

  transform:
    translateY(-2px);
}

/*
|--------------------------------------------------------------------------
| Tablet & Mobile
|--------------------------------------------------------------------------
*/

@media (max-width: 768px) {
  .studio-hero {
    min-height: 80vh;

    padding: 90px 0 60px;
  }

  .hero-serif-title {
    font-size:
      clamp(
        1.85rem,
        6.8vw,
        2.6rem
      );

    line-height: 1.22;

    margin-bottom: 1rem !important;
  }

  .hero-subtext {
    font-size: 0.98rem;

    line-height: 1.6;

    margin-bottom: 1.5rem !important;

    padding: 0 4px;
  }

  .btn-hero-pill-primary,
  .btn-hero-pill-secondary {
    padding: 11px 24px;

    font-size: 0.92rem;

    min-height: 44px;
  }
}

@media (max-width: 480px) {
  .hero-action-group {
    flex-direction: column;

    width: 100%;

    max-width: 280px;

    margin-left: auto;
    margin-right: auto;
  }

  .btn-hero-pill-primary,
  .btn-hero-pill-secondary {
    width: 100%;
  }
}
</style>