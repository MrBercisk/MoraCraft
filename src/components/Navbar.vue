<template>
  <header 
    class="studio-header fixed-top w-100" 
    :class="{ 'is-scrolled': isScrolled, 'menu-open': isMobileMenuOpen }" 
    id="main-nav"
  >
    <div class="container">
      <div class="d-flex align-items-center justify-content-between h-100">
        <!-- Brand Logo & Studio Mark -->
        <a class="brand-link d-flex align-items-center gap-2" href="#hero" @click.prevent="handleNavClick('hero')">
          <img 
            src="/assets/img/logo_moracraftnew.png" 
            alt="MoraCraft Studio" 
            class="brand-logo" 
            @error="handleLogoError" 
          />
          <span v-if="showTextLogo" class="brand-text">
            Mora<span class="brand-accent">Craft</span>
          </span>
        </a>

        <!-- Desktop Navigation Links (Centered Island Capsule) -->
        <nav class="d-none d-lg-flex align-items-center nav-capsule" aria-label="Main Navigation">
          <a 
            v-for="link in navLinks" 
            :key="link.id"
            :href="'#' + link.id" 
            class="nav-item-link"
            :class="{ active: isLinkActive(link.id) }"
            @click.prevent="handleNavClick(link.id)"
          >
            <span class="nav-item-text">{{ link.name }}</span>
            <span v-if="isLinkActive(link.id)" class="nav-active-pill" aria-hidden="true"></span>
          </a>
        </nav>

        <!-- Right Side: Contact CTA Button (Desktop) -->
        <div class="d-none d-lg-flex align-items-center">
          <a 
            href="#contact" 
            class="btn-nav-contact" 
            :class="{ active: currentRoute === 'home' && activeSection === 'contact' }"
            @click.prevent="handleNavClick('contact')"
          >
            <span>Hubungi Kami</span>
            <svg class="contact-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <!-- Mobile & Tablet Clean Toggle Button -->
        <div class="d-flex d-lg-none align-items-center">
          <button 
            class="mobile-toggle-btn" 
            :class="{ 'is-open': isMobileMenuOpen }" 
            type="button" 
            @click="toggleMobileMenu" 
            aria-label="Toggle navigation menu"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="bar top-bar"></span>
            <span class="bar mid-bar"></span>
            <span class="bar bot-bar"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Overlay Backdrop -->
    <div 
      class="mobile-backdrop d-lg-none" 
      :class="{ 'is-visible': isMobileMenuOpen }" 
      @click="isMobileMenuOpen = false"
      aria-hidden="true"
    ></div>

    <!-- Modern Floating Mobile Card Panel -->
    <div class="mobile-menu-wrapper d-lg-none" :class="{ 'is-active': isMobileMenuOpen }">
      <div class="container px-3 px-sm-4">
        <div class="mobile-card-panel">
          <!-- Mobile Nav Links -->
          <div class="d-flex flex-column gap-1 mb-3">
            <a 
              v-for="link in allMobileLinks" 
              :key="'mobile-' + link.id"
              :href="'#' + link.id" 
              class="mobile-nav-item"
              :class="{ active: isLinkActive(link.id) }"
              @click.prevent="handleNavClick(link.id)"
            >
              <div class="d-flex align-items-center gap-2">
                <span class="mobile-active-dot" v-if="isLinkActive(link.id)"></span>
                <span class="mobile-nav-title">{{ link.name }}</span>
              </div>
              <svg class="mobile-nav-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>

          <!-- Quick Mobile CTA Button -->
          <a 
            href="#contact" 
            class="mobile-btn-contact w-100 d-flex align-items-center justify-content-center gap-2"
            @click.prevent="handleNavClick('contact')"
          >
            <span>Hubungi Kami</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { scrollToSection } from '../utils/scroll.js'

const props = defineProps({
  currentRoute: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['navigate'])

const showTextLogo = ref(false)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('hero')

// Desktop Navigation Items - clean main sections
const navLinks = [
  { id: 'hero', name: 'Beranda' },
  { id: 'about', name: 'Tentang' },
  { id: 'portfolio', name: 'Portofolio' },
  { id: 'pricing', name: 'Harga' },
  { id: 'testimonials', name: 'Testimoni' },
  { id: 'faq', name: 'FAQ' }
]

// Mobile Navigation Items
const allMobileLinks = [
  { id: 'hero', name: 'Beranda' },
  { id: 'about', name: 'Tentang' },
  { id: 'portfolio', name: 'Portofolio' },
  { id: 'pricing', name: 'Harga' },
  { id: 'testimonials', name: 'Testimoni' },
  { id: 'faq', name: 'FAQ' }
]

const handleLogoError = () => {
  showTextLogo.value = true
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isLinkActive = (id) => {
  return props.currentRoute === 'home' && activeSection.value === id
}

const handleNavClick = (id) => {
  isMobileMenuOpen.value = false

  // If currently on about page, emit navigate to home with target section ID
  if (props.currentRoute !== 'home') {
    emit('navigate', 'home', id)
    return
  }

  // If on home, scroll to the corresponding section directly
  activeSection.value = id
  scrollToSection(id)
}

let scrollTicking = false

const handleScroll = () => {
  const currentScroll =
    window.pageYOffset ||
    window.scrollY ||
    document.documentElement?.scrollTop ||
    document.body?.scrollTop ||
    0
  isScrolled.value = currentScroll > 20
  if (props.currentRoute !== 'home') return

  const sectionIds = ['hero', 'about', 'portfolio', 'pricing', 'testimonials', 'faq', 'contact']
  const navHeight = 75
  const probeY = currentScroll + navHeight + 80

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i])
    if (section) {
      const top = section.getBoundingClientRect().top + currentScroll
      if (probeY >= top) {
        activeSection.value = sectionIds[i]
        break
      }
    }
  }
}

const onScrollThrottled = () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      handleScroll()
      scrollTicking = false
    })
    scrollTicking = true
  }
}

const handleClickOutside = (e) => {
  const header = document.getElementById('main-nav')
  if (isMobileMenuOpen.value && header && !header.contains(e.target)) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScrollThrottled, { passive: true })
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScrollThrottled)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.studio-header {
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 0;
  background: rgba(9, 10, 15, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1040;
}

.studio-header.is-scrolled {
  padding: 11px 0;
  background: rgba(8, 9, 14, 0.92);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.75);
}

/* Brand Link */
.brand-link {
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  padding: 2px 0;
}

.brand-link:hover {
  opacity: 0.95;
  transform: translateY(-1px);
}

.brand-logo {
  height: 32px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
  display: block;
  transition: height 0.25s ease;
}

@media (min-width: 768px) {
  .brand-logo {
    height: 35px;
  }
}

.brand-text {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.brand-accent {
  color: #e63946;
}

/* Center Navigation Capsule (Island Pill) */
.nav-capsule {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  padding: 4px 6px;
  gap: 2px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 4px 16px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nav-item-link {
  color: #94a3b8;
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  padding: 7px 16px;
  border-radius: 9999px;
  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nav-item-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

.nav-item-link.active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-item-text {
  position: relative;
  z-index: 2;
}

/* Right CTA Button (Desktop) */
.btn-nav-contact {
  background: linear-gradient(135deg, #e63946 0%, #c92330 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 0.83rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 8px 20px;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(230, 57, 70, 0.35);
}

.btn-nav-contact:hover {
  background: linear-gradient(135deg, #f04855 0%, #d82b39 100%);
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(230, 57, 70, 0.5);
  border-color: rgba(255, 255, 255, 0.35);
}

.btn-nav-contact.active {
  background: #b81f2b;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(230, 57, 70, 0.3);
}

.btn-nav-contact .contact-arrow {
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-nav-contact:hover .contact-arrow {
  transform: translateX(3px);
}

/* Mobile Toggle Button */
.mobile-toggle-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
}

.mobile-toggle-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.bar {
  width: 19px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}

.mobile-toggle-btn.is-open {
  background: rgba(230, 57, 70, 0.15);
  border-color: rgba(230, 57, 70, 0.4);
}

.mobile-toggle-btn.is-open .top-bar {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle-btn.is-open .mid-bar {
  opacity: 0;
  transform: scale(0);
}

.mobile-toggle-btn.is-open .bot-bar {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Backdrop */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 5, 8, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1045;
}

.mobile-backdrop.is-visible {
  opacity: 1;
  pointer-events: auto;
}

/* Floating Mobile Card Panel */
.mobile-menu-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 8px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1050;
}

.mobile-menu-wrapper.is-active {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.mobile-card-panel {
  background: rgba(12, 14, 20, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
}

.mobile-nav-item {
  color: #cbd5e1;
  font-size: 0.92rem;
  font-weight: 500;
  padding: 11px 14px;
  border-radius: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.18s ease;
}

.mobile-nav-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.mobile-nav-item.active {
  color: #ffffff;
  background: rgba(230, 57, 70, 0.14);
  border: 1px solid rgba(230, 57, 70, 0.3);
  font-weight: 600;
}

.mobile-active-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #e63946;
  display: inline-block;
}

.mobile-nav-chevron {
  color: #64748b;
  transition: transform 0.2s ease, color 0.2s ease;
}

.mobile-nav-item:hover .mobile-nav-chevron,
.mobile-nav-item.active .mobile-nav-chevron {
  color: #ffffff;
  transform: translateX(3px);
}

.mobile-btn-contact {
  background: #c52a33;
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 12px 16px;
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid #e63946;
  transition: all 0.2s ease;
}

.mobile-btn-contact:hover {
  background: #d8313b;
  color: #ffffff;
}

/* ==========================================================================
   Responsive Adaptations
   ========================================================================== */

/* Medium Desktops & Laptops (992px - 1199px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .nav-capsule {
    padding: 3px 4px;
    gap: 1px;
  }
  .nav-item-link {
    font-size: 0.81rem;
    padding: 6px 12px;
  }
  .btn-nav-contact {
    font-size: 0.8rem;
    padding: 7px 16px;
    gap: 5px;
  }
}

/* Tablets & Mobile (< 992px) */
@media (max-width: 991.98px) {
  .studio-header {
    padding: 13px 0;
  }
  .studio-header.is-scrolled {
    padding: 10px 0;
  }
  .mobile-menu-wrapper {
    padding: 8px 0 24px;
  }
  .mobile-card-panel {
    max-width: 480px;
    margin: 0 auto;
    max-height: calc(100vh - 86px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  }
  .mobile-card-panel::-webkit-scrollbar {
    width: 4px;
  }
  .mobile-card-panel::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
}

/* Compact Smartphones (< 480px) */
@media (max-width: 480px) {
  .studio-header {
    padding: 11px 0;
  }
  .studio-header.is-scrolled {
    padding: 9px 0;
  }
  .brand-logo {
    height: 28px;
    max-width: 130px;
  }
  .mobile-card-panel {
    padding: 12px;
    border-radius: 16px;
  }
  .mobile-nav-item {
    padding: 10px 12px;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  .mobile-btn-contact {
    padding: 11px 14px;
    font-size: 0.86rem;
    border-radius: 10px;
  }
}
</style>
