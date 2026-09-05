<template>
  <div class="app-wrapper bg-dark text-white min-vh-100">
    <!-- Floating Responsive Navbar (Full Width) -->
    <Navbar 
      :currentRoute="currentRoute"
      @navigate="handleNavigate"
    />

    <!-- Home Landing Page -->
    <template v-if="currentRoute === 'home'">
      <!-- Hero Section with Canvas Grid & Animations -->
      <HeroSection />

      <!-- Studio About & Performance Stats with Link to Detail Page -->
      <AboutSection @go-to-about="handleNavigate('about')" />

      <!-- Tech Stack / Tools Architecture Infinite Marquee -->
      <TechMarquee />

      <!-- Filterable Featured Portfolio & Case Studies -->
      <PortfolioSection 
        @select-service="handleServiceSelect" 
        @open-project="handleOpenProject"
        @view-all-projects="() => handleOpenProject(101)"
      />

      <!-- Pricing Packages with Tab Switcher -->
      <PricingSection @select-service="handleServiceSelect" />

      <!-- Verified Client Testimonials & Trust Metrics -->
      <TestimonialsSection />

      <!-- Interactive FAQ Accordion -->
      <FaqSection />

      <!-- Project Inquiry & Contact Channels -->
      <ContactSection :preselectedService="selectedService" />
    </template>

    <!-- Dedicated Project & Case Study Detail Page -->
    <template v-else-if="currentRoute === 'project-detail'">
      <ProjectDetailPage 
        :initialProjectId="selectedProjectId"
        @go-home="handleNavigate('home')"
        @go-contact="(service) => { handleServiceSelect(service); handleNavigate('home', 'contact'); }"
      />
    </template>

    <!-- Detailed About Us Dedicated Page -->
    <template v-else-if="currentRoute === 'about'">
      <AboutUsPage 
        @go-home="handleNavigate('home')"
        @go-contact="handleNavigate('home', 'contact')"
        @go-portfolio="handleNavigate('home', 'portfolio')"
      />
    </template>

    <!-- Terms & Conditions Dedicated Page -->
    <template v-else-if="currentRoute === 'terms'">
      <TermsPage 
        @go-home="handleNavigate('home')"
        @go-contact="handleNavigate('home', 'contact')"
      />
    </template>

    <!-- Privacy Policy Dedicated Page -->
    <template v-else-if="currentRoute === 'privacy'">
      <PrivacyPage 
        @go-home="handleNavigate('home')"
        @go-contact="handleNavigate('home', 'contact')"
      />
    </template>

    <!-- Footer with Brand, Navigation & Newsletter -->
    <FooterSection @navigate="handleNavigate" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import TechMarquee from './components/TechMarquee.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import PricingSection from './components/PricingSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import AboutUsPage from './pages/AboutUsPage.vue'
import TermsPage from './pages/TermsPage.vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import ProjectDetailPage from './pages/ProjectDetailPage.vue'
import { scrollToSection, scrollToTopDirectly } from './utils/scroll.js'

const currentRoute = ref('home')
const selectedProjectId = ref(101)
const selectedService = ref('')

const handleServiceSelect = (service) => {
  selectedService.value = service
}

const handleOpenProject = (projectId) => {
  selectedProjectId.value = projectId || 101
  currentRoute.value = 'project-detail'
  window.location.hash = `#/project/${projectId || 101}`
  scrollToTopDirectly(false)
  nextTick(() => scrollToTopDirectly(false))
}

// Watch route changes and guarantee immediate top alignment across DOM mount ticks
watch(currentRoute, async () => {
  scrollToTopDirectly(false)
  await nextTick()
  scrollToTopDirectly(false)
  requestAnimationFrame(() => {
    scrollToTopDirectly(false)
  })
})

const syncRouteWithHash = () => {
  const hash = window.location.hash.toLowerCase()
  if (hash === '#/about' || hash === '#/about-us') {
    currentRoute.value = 'about'
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
  } else if (hash === '#/terms' || hash === '#/terms-and-conditions' || hash === '#terms-and-conditions') {
    currentRoute.value = 'terms'
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
  } else if (hash === '#/privacy' || hash === '#/privacy-policy' || hash === '#privacy-policy') {
    currentRoute.value = 'privacy'
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
  } else if (hash.startsWith('#/project/') || hash === '#/projects' || hash === '#/portfolio-detail') {
    currentRoute.value = 'project-detail'
    const parts = hash.split('/')
    if (parts[2]) {
      const parsedId = parseInt(parts[2], 10)
      if (!isNaN(parsedId)) {
        selectedProjectId.value = parsedId
      }
    }
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
  } else {
    currentRoute.value = 'home'
    const sectionId = hash.replace(/^#\/?/, '')
    if (sectionId && sectionId !== 'hero') {
      nextTick(() => {
        scrollToSection(sectionId)
      })
    } else {
      scrollToTopDirectly(false)
      nextTick(() => scrollToTopDirectly(false))
    }
  }
}

const handleNavigate = (route, targetSection) => {
  if (route === 'about') {
    currentRoute.value = 'about'
    window.location.hash = '#/about-us'
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
    return
  }
  if (route === 'terms') {
    currentRoute.value = 'terms'
    window.location.hash = '#/terms-and-conditions'
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
    return
  }
  if (route === 'privacy') {
    currentRoute.value = 'privacy'
    window.location.hash = '#/privacy-policy'
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
    return
  }
  if (route === 'project-detail') {
    currentRoute.value = 'project-detail'
    if (targetSection) {
      const parsed = parseInt(targetSection, 10)
      if (!isNaN(parsed)) selectedProjectId.value = parsed
    }
    window.location.hash = `#/project/${selectedProjectId.value}`
    scrollToTopDirectly(false)
    nextTick(() => scrollToTopDirectly(false))
    return
  }

  // Navigate to home
  currentRoute.value = 'home'

  if (targetSection && targetSection !== 'hero') {
    window.location.hash = `#${targetSection}`
    nextTick(() => {
      scrollToSection(targetSection)
    })
  } else {
    window.location.hash = '#hero'
    scrollToTopDirectly(false)
    nextTick(() => {
      scrollToTopDirectly(false)
      scrollToSection('hero')
    })
  }
}

onMounted(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  syncRouteWithHash()
  window.addEventListener('hashchange', syncRouteWithHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', syncRouteWithHash)
})
</script>

<style>
/* Smooth scrolling and nav clearance */
html {
  scroll-behavior: smooth;
  overflow-x: clip;
}

body {
  overflow-x: clip;
}

#hero,
#about,
#portfolio,
#pricing,
#testimonials,
#faq,
#contact,
section[id] {
  scroll-margin-top: 85px;
}

/* Global app wrapper fixes */
.app-wrapper {
  overflow-x: clip;
  position: relative;
}
</style>
