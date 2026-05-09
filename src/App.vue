<template>
  <div>
    <div class="content-wrapper">
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      <TechMarqueeSection />
      <ExpertiseSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <PricingSection />
      <ContactHeroSection />
      <ContactSection />
    </div>
    <!-- /.content-wrapper -->

    <FooterComponent />

    <div class="progress-wrap">
      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

import NavbarComponent    from './components/NavbarComponent.vue'
import HeroSection        from './components/HeroSection.vue'
import AboutSection       from './components/AboutSection.vue'
import TechMarqueeSection from './components/TechMarqueeSection.vue'
import ExpertiseSection   from './components/ExpertiseSection.vue'
import PortfolioSection   from './components/PortfolioSection.vue'
import WhyChooseUsSection from './components/WhyChooseUsSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import PricingSection     from './components/PricingSection.vue'
import ContactHeroSection from './components/ContactHeroSection.vue'
import ContactSection     from './components/ContactSection.vue'
import FooterComponent    from './components/FooterComponent.vue'

/**
 * Dynamically inject a <script> tag and wait for it to load.
 * This ensures vendor scripts (plugins.js, theme.js) run AFTER
 * Vue has fully rendered all components to the DOM.
 */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    // Avoid double-loading
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.body.appendChild(script)
  })
}

/**
 * Initialize custom DOM effects:
 * - Hero grid canvas animation
 * - Tech marquee infinite scroll clone
 */
function initCustom() {
  // ── GRID CANVAS ──────────────────────────────────────────────
  const GRID_CONFIG = {
    cellWidth:  120,
    cellHeight: 80,
    skew:       0.55,
    lineColor:  'rgba(190, 80, 80, 0.28)',
    lineWidth:  0.8,
  }
  const canvas = document.getElementById('hexCanvas')
  if (canvas) {
    const ctx = canvas.getContext('2d')
    function drawGrid() {
      const W = canvas.offsetWidth  || 900
      const H = canvas.offsetHeight || 600
      canvas.width  = W
      canvas.height = H
      ctx.clearRect(0, 0, W, H)
      const { cellWidth, cellHeight, skew, lineColor, lineWidth } = GRID_CONFIG
      const rows    = Math.ceil(H / cellHeight) + 4
      const cols    = Math.ceil(W / cellWidth)  + 4
      const xOffset = skew * (H + cellHeight * 4) + cellWidth
      ctx.strokeStyle = lineColor
      ctx.lineWidth   = lineWidth
      for (let r = -2; r < rows + 2; r++) {
        const y = r * cellHeight
        ctx.beginPath()
        ctx.moveTo(-xOffset, y + H)
        ctx.lineTo(-xOffset + W + xOffset * 2 + cellWidth * 2, y - skew * (H + cellHeight * 4))
        ctx.stroke()
      }
      for (let c = -2; c < cols + 4; c++) {
        const x = c * cellWidth
        ctx.beginPath()
        ctx.moveTo(x, H + cellHeight)
        ctx.lineTo(x + skew * (H + cellHeight * 2), -cellHeight)
        ctx.stroke()
      }
    }
    drawGrid()
    window.addEventListener('resize', drawGrid)
  }

  // ── MARQUEE CLONE ────────────────────────────────────────────
  const techTrack = document.getElementById('techTrack')
  if (techTrack && !techTrack.nextElementSibling) {
    const clone = techTrack.cloneNode(true)
    clone.setAttribute('aria-hidden', 'true')
    techTrack.parentNode.appendChild(clone)
  }
}

onMounted(async () => {
  // Wait for Vue to finish rendering all child components
  await nextTick()

  try {
    // Load vendor scripts sequentially after DOM is ready
    await loadScript('/assets/js/plugins.js')
    await loadScript('/assets/js/theme.js')
  } catch (err) {
    console.warn('[MoraCraft] Vendor script load warning:', err)
  }

  // Run custom canvas + marquee init
  initCustom()
})
</script>
