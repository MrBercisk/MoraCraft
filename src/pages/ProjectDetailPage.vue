<template>
  <div class="project-detail-page bg-dark text-white min-vh-100 py-5">
    <!-- Top Sticky Breadcrumb / Action Header -->
    <div class="container mb-4">
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 pb-3 border-bottom border-secondary border-opacity-25">
        <!-- Back Button & Breadcrumbs -->
        <div class="d-flex align-items-center gap-3">
          <button 
            class="btn-back d-inline-flex align-items-center gap-2"
            @click="$emit('go-home')"
            title="Kembali ke Beranda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Kembali ke Beranda</span>
          </button>

          <span class="text-secondary opacity-50 d-none d-sm-inline">/</span>
          
          <nav aria-label="breadcrumb" class="d-none d-sm-inline-block">
            <span class="breadcrumb-item-text">Portofolio</span>
            <span class="mx-2 text-secondary opacity-50">&rsaquo;</span>
            <span class="breadcrumb-item-active text-truncate max-w-200">{{ activeProject.title }}</span>
          </nav>
        </div>

        <!-- Quick Project Switcher Dropdown / Buttons -->
        <div class="d-flex align-items-center gap-2">
          <button 
            class="btn-nav-proj" 
            @click="prevProject"
            title="Proyek Sebelumnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span class="d-none d-md-inline ms-1">Sebelumnya</span>
          </button>
          
          <span class="proj-counter-text px-1">
            {{ currentIndex + 1 }} / {{ allProjects.length }}
          </span>

          <button 
            class="btn-nav-proj" 
            @click="nextProject"
            title="Proyek Berikutnya"
          >
            <span class="d-none d-md-inline me-1">Berikutnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Project Showcase Hero -->
    <section class="container mb-5">
      <div class="row align-items-center g-4 g-lg-5 mb-5">
        <!-- Left: Project Meta & Heading -->
        <div class="col-lg-6">
          <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
            <span class="badge-category">{{ activeProject.category }}</span>
            <span v-if="activeProject.type === 'ui-ux'" class="badge-type ui-ux">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
              Studi Kasus UI/UX
            </span>
            <span v-else class="badge-type code">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              {{ activeProject.type === 'website' ? 'Web Development' : 'Aplikasi Sistem' }}
            </span>
            <span v-if="activeProject.year" class="badge-year">{{ activeProject.year }}</span>
          </div>

          <h1 class="project-main-title mb-3">
            {{ activeProject.title }}
          </h1>

          <p v-if="activeProject.tagline" class="project-tagline mb-4">
            {{ activeProject.tagline }}
          </p>
          <p v-else class="project-tagline mb-4">
            {{ activeProject.description }}
          </p>

          <!-- Primary External Action Buttons -->
          <div class="d-flex flex-wrap align-items-center gap-3 pt-2">
            <!-- Behance External Presentation Button -->
            <a 
              v-if="activeProject.behanceUrl"
              :href="activeProject.behanceUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-behance-primary d-inline-flex align-items-center gap-2"
            >
              <!-- Behance Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.043 0-6.625-2.784-6.625-6.843 0-4.042 2.766-7.157 6.786-7.157 4.148 0 6.177 3.037 6.007 6.843h-9.987c.105 2.128 1.547 3.844 4.091 3.844 1.83 0 2.973-.836 3.491-1.687h1.338zm-5.074-6.275c-.097-1.782-1.34-3.149-3.411-3.149-2.027 0-3.328 1.344-3.535 3.149h6.946zm-13.652-3.725h5.45c1.472 0 2.651.378 3.537 1.134.78.666 1.205 1.574 1.205 2.628 0 1.282-.693 2.296-1.803 2.822 1.53.534 2.392 1.745 2.392 3.255 0 1.258-.517 2.342-1.455 3.051-.977.739-2.28 1.11-3.876 1.11h-5.45v-14zm2.748 5.496h2.469c.895 0 1.637-.215 2.089-.605.419-.363.666-.926.666-1.585 0-.712-.259-1.272-.728-1.623-.464-.347-1.196-.533-2.115-.533h-2.381v4.346zm0 2.504v4.444h2.723c1.077 0 1.905-.245 2.396-.708.471-.444.733-1.079.733-1.79 0-.756-.271-1.392-.767-1.801-.497-.41-1.365-.625-2.484-.625h-2.601z"/>
              </svg>
              <span>Buka Studi Kasus di Behance</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>

            <!-- Consult / Contact CTA -->
            <button 
              class="btn-consult-outline d-inline-flex align-items-center gap-2"
              @click="$emit('go-contact', activeProject.title)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span>Konsultasi Serupa</span>
            </button>
          </div>
        </div>

        <!-- Right: Interactive Device Mockup Visual -->
        <div class="col-lg-6">
          <div class="showcase-mockup-wrapper">
            <!-- Mac / Mobile Window Header Bar -->
            <div class="mockup-header d-flex align-items-center justify-content-between px-3 py-2">
              <div class="d-flex align-items-center gap-1">
                <span class="mockup-dot red"></span>
                <span class="mockup-dot yellow"></span>
                <span class="mockup-dot green"></span>
              </div>
              <div class="mockup-url-bar text-truncate">
                {{ activeProject.behanceUrl ? 'behance.net/gallery/' + activeProject.slug : 'moracraft.id/portfolio/' + activeProject.slug }}
              </div>
              <div class="mockup-badge">
                {{ activeProject.type === 'ui-ux' ? 'Figma Prototype' : 'Web Project' }}
              </div>
            </div>

            <!-- Visual Content Preview -->
            <div class="mockup-visual-frame position-relative">
              <img 
                :src="activeProject.url" 
                :alt="activeProject.title"
                class="img-fluid w-100 h-100 object-fit-cover"
                @error="handleImgFallback($event, activeProject)"
              />
              
              <!-- Subtle gradient overlay on bottom -->
              <div class="mockup-glass-glow"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project In-Depth Specification Grid -->
      <div class="row g-4 pt-4 border-top border-secondary border-opacity-25">
        <!-- Column 1: Detailed Story, Challenges & Solutions -->
        <div class="col-lg-7">
          <div class="detail-card p-4 p-md-5 h-100">
            <h3 class="detail-section-title mb-3 d-flex align-items-center gap-2">
              <span class="icon-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              Latar Belakang &amp; Pendekatan Desain
            </h3>

            <p class="detail-story-text mb-4 lh-lg">
              {{ activeProject.longDescription || activeProject.description }}
            </p>

            <!-- Key Features / Solutions list -->
            <div v-if="activeProject.features && activeProject.features.length > 0">
              <h4 class="detail-subheading mb-3">
                Fitur Utama &amp; Solusi Antarmuka
              </h4>
              <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                <li 
                  v-for="(feature, idx) in activeProject.features" 
                  :key="idx"
                  class="d-flex align-items-start gap-3"
                >
                  <span class="feature-check-icon mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e63946" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span class="feature-item-text">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Column 2: Tech Specs, Deliverables & Toolkit -->
        <div class="col-lg-5">
          <div class="d-flex flex-column gap-4 h-100">
            <!-- Deliverables Card -->
            <div class="detail-card p-4">
              <h4 class="detail-subheading mb-3 d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
                Deliverables &amp; Ruang Lingkup
              </h4>
              <div class="d-flex flex-wrap gap-2">
                <span 
                  v-for="(deliv, i) in (activeProject.deliverables || ['User Research', 'Wireframing', 'UI Design', 'Interactive Prototype'])"
                  :key="i"
                  class="tech-chip"
                >
                  {{ deliv }}
                </span>
              </div>
            </div>

            <!-- Toolkit & Tech Stack Card -->
            <div class="detail-card p-4">
              <h4 class="detail-subheading mb-3 d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
                Tools &amp; Teknologi
              </h4>
              <div class="d-flex flex-wrap gap-2">
                <span 
                  v-for="tech in activeProject.tech" 
                  :key="tech"
                  class="tech-chip highlight"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Behance / Action Card -->
            <div v-if="activeProject.behanceUrl" class="detail-card p-4 behance-callout-card">
              <div class="d-flex align-items-center gap-3 mb-2">
                <div class="behance-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.043 0-6.625-2.784-6.625-6.843 0-4.042 2.766-7.157 6.786-7.157 4.148 0 6.177 3.037 6.007 6.843h-9.987c.105 2.128 1.547 3.844 4.091 3.844 1.83 0 2.973-.836 3.491-1.687h1.338zm-5.074-6.275c-.097-1.782-1.34-3.149-3.411-3.149-2.027 0-3.328 1.344-3.535 3.149h6.946zm-13.652-3.725h5.45c1.472 0 2.651.378 3.537 1.134.78.666 1.205 1.574 1.205 2.628 0 1.282-.693 2.296-1.803 2.822 1.53.534 2.392 1.745 2.392 3.255 0 1.258-.517 2.342-1.455 3.051-.977.739-2.28 1.11-3.876 1.11h-5.45v-14zm2.748 5.496h2.469c.895 0 1.637-.215 2.089-.605.419-.363.666-.926.666-1.585 0-.712-.259-1.272-.728-1.623-.464-.347-1.196-.533-2.115-.533h-2.381v4.346zm0 2.504v4.444h2.723c1.077 0 1.905-.245 2.396-.708.471-.444.733-1.079.733-1.79 0-.756-.271-1.392-.767-1.801-.497-.41-1.365-.625-2.484-.625h-2.601z"/>
                  </svg>
                </div>
                <div>
                  <h5 class="behance-callout-title mb-0">Presentasi Desain Interaktif</h5>
                  <span class="behance-callout-desc">Tersedia langsung di galeri Behance resmi</span>
                </div>
              </div>
              <a 
                :href="activeProject.behanceUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-behance-block w-100 text-center mt-3 d-flex align-items-center justify-content-center gap-2"
              >
                <span>Buka Behance Case Study</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Gallery Filter & Directory -->
    <section class="container mt-5 pt-4 border-top border-secondary border-opacity-25">
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <span class="portfolio-dot me-2"></span>
          <span class="portfolio-eyebrow">EKSPLORASI PORTOFOLIO</span>
          <h2 class="gallery-section-title mt-1 mb-0">Jelajahi Studi Kasus &amp; Proyek Lainnya</h2>
        </div>

        <!-- Filter Tab Buttons -->
        <div class="d-flex flex-wrap gap-2">
          <button 
            class="tab-filter-btn" 
            :class="{ active: galleryFilter === 'all' }"
            @click="galleryFilter = 'all'"
          >
            Semua ({{ PORTFOLIO_ITEMS.length }})
          </button>
          <button 
            class="tab-filter-btn" 
            :class="{ active: galleryFilter === 'ui-ux' }"
            @click="galleryFilter = 'ui-ux'"
          >
            Studi Kasus UI/UX (6)
          </button>
          <button 
            class="tab-filter-btn" 
            :class="{ active: galleryFilter === 'web' }"
            @click="galleryFilter = 'web'"
          >
            Website &amp; Aplikasi ({{ PORTFOLIO_ITEMS.length - 6 }})
          </button>
        </div>
      </div>

      <!-- Other Projects Grid -->
      <div class="row g-4">
        <div 
          v-for="project in filteredGalleryProjects" 
          :key="project.id"
          class="col-md-6 col-lg-4"
        >
          <div 
            class="gallery-item-card h-100 d-flex flex-column"
            :class="{ 'is-active': project.id === activeProject.id }"
            @click="selectProject(project.id)"
          >
            <!-- Thumbnail preview -->
            <div class="gallery-thumb-wrapper position-relative overflow-hidden">
              <img 
                :src="project.url" 
                :alt="project.title"
                class="gallery-thumb-img w-100 h-100 object-fit-cover"
                @error="handleImgFallback($event, project)"
              />
              <div class="gallery-tag-bar position-absolute top-0 start-0 w-100 p-2 d-flex justify-content-between align-items-center">
                <span class="badge-mini-cat">{{ project.category }}</span>
                <span v-if="project.type === 'ui-ux'" class="badge-mini-type">UI/UX</span>
                <span v-else class="badge-mini-type dev">Code</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-3 d-flex flex-column flex-grow-1">
              <h5 class="gallery-item-title mb-2">
                {{ project.title }}
              </h5>
              <p class="gallery-item-desc line-clamp-2 mb-3 flex-grow-1">
                {{ project.description }}
              </p>

              <div class="d-flex align-items-center justify-content-between pt-2 border-top border-dark">
                <span class="gallery-item-type-label">
                  {{ project.behanceUrl ? 'Behance Case Study' : (project.type === 'website' ? 'Web Project' : 'Aplikasi') }}
                </span>
                <span class="btn-detail-link fw-semibold">
                  {{ project.id === activeProject.id ? 'Sedang Dilihat ✓' : 'Lihat Detail →' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { PORTFOLIO_ITEMS } from '../data/portfolio'
import { scrollToTopDirectly } from '../utils/scroll.js'

const props = defineProps({
  initialProjectId: {
    type: Number,
    default: 101
  }
})

const emit = defineEmits(['go-home', 'go-contact'])

const selectedId = ref(props.initialProjectId || 101)
const galleryFilter = ref('all') // 'all', 'ui-ux', 'web'

// Keep in sync if prop changes
watch(() => props.initialProjectId, (newId) => {
  if (newId) {
    selectedId.value = newId
  }
})

const allProjects = computed(() => PORTFOLIO_ITEMS)

const activeProject = computed(() => {
  const found = PORTFOLIO_ITEMS.find(p => p.id === selectedId.value)
  return found || PORTFOLIO_ITEMS[0]
})

const currentIndex = computed(() => {
  return allProjects.value.findIndex(p => p.id === activeProject.value.id)
})

const selectProject = (id) => {
  selectedId.value = id
  scrollToTopDirectly(true)
}

const prevProject = () => {
  const prevIdx = (currentIndex.value - 1 + allProjects.value.length) % allProjects.value.length
  selectedId.value = allProjects.value[prevIdx].id
  scrollToTopDirectly(true)
}

const nextProject = () => {
  const nextIdx = (currentIndex.value + 1) % allProjects.value.length
  selectedId.value = allProjects.value[nextIdx].id
  scrollToTopDirectly(true)
}

const filteredGalleryProjects = computed(() => {
  if (galleryFilter.value === 'ui-ux') {
    return PORTFOLIO_ITEMS.filter(p => p.type === 'ui-ux')
  }
  if (galleryFilter.value === 'web') {
    return PORTFOLIO_ITEMS.filter(p => p.type !== 'ui-ux')
  }
  return PORTFOLIO_ITEMS
})

// Fallback visual generator for rich mockup presentation
const handleImgFallback = (e, project) => {
  const bgPalette = ['#0f172a', '#111827', '#1e1b4b', '#172554', '#142a27', '#2e1065', '#241429']
  const bg = bgPalette[project.id % bgPalette.length]
  const isUiUx = project.type === 'ui-ux'
  const accentColor = isUiUx ? '#0057ff' : '#e63946'

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="520" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bg}"/>
          <stop offset="100%" stop-color="#08090d"/>
        </linearGradient>
        <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.06)"/>
        </pattern>
      </defs>
      
      <rect width="800" height="520" fill="url(#bgGrad)"/>
      <rect width="800" height="520" fill="url(#gridPattern)"/>
      
      <!-- Device Mockup Card Art -->
      <rect x="150" y="70" width="500" height="360" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      <rect x="150" y="70" width="500" height="40" rx="16" fill="rgba(0,0,0,0.3)"/>
      
      <circle cx="176" cy="90" r="4.5" fill="#ef4444"/>
      <circle cx="192" cy="90" r="4.5" fill="#f59e0b"/>
      <circle cx="208" cy="90" r="4.5" fill="#10b981"/>
      
      <rect x="236" y="82" width="280" height="16" rx="8" fill="rgba(255,255,255,0.08)"/>
      
      <!-- Center Showcase Content -->
      <rect x="200" y="140" width="400" height="160" rx="12" fill="rgba(255,255,255,0.03)" stroke="${accentColor}" stroke-dasharray="4 4" stroke-opacity="0.3"/>
      
      <text x="400" y="195" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700" text-anchor="middle">
        ${escapeXml(project.title)}
      </text>
      <text x="400" y="225" fill="#94a3b8" font-family="sans-serif" font-size="13" text-anchor="middle">
        ${isUiUx ? 'Studi Kasus UI/UX Behance Showcase' : 'Platform & Web Architecture'}
      </text>
      
      <rect x="330" y="250" width="140" height="28" rx="14" fill="${accentColor}"/>
      <text x="400" y="268" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">
        ${isUiUx ? 'Behance Design Case' : 'Interactive Prototype'}
      </text>
      
      <!-- Tech Bar -->
      <text x="400" y="400" fill="#64748b" font-family="sans-serif" font-size="12" text-anchor="middle">
        ${project.tech.slice(0, 4).join('  •  ')}
      </text>
    </svg>
  `.trim()

  e.target.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
}

const escapeXml = (unsafe) => {
  return (unsafe || '').replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case '\'': return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

onMounted(() => {
  scrollToTopDirectly(false)
})
</script>

<style scoped>
.project-detail-page {
  background: #090a0f;
  color: #f3f4f6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}

/* Header & Breadcrumb */
.btn-back {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f3f4f6;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-back:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  transform: translateX(-2px);
}

.btn-nav-proj {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
}

.btn-nav-proj:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.max-w-200 {
  max-width: 200px;
}

.breadcrumb-item-text {
  font-size: 0.88rem;
  color: #94a3b8;
}

.breadcrumb-item-active {
  font-size: 0.88rem;
  color: #f8fafc;
  font-weight: 600;
}

.proj-counter-text {
  font-size: 0.88rem;
  color: #94a3b8;
  font-weight: 500;
}

/* Badges */
.badge-category {
  background: rgba(230, 57, 70, 0.15);
  border: 1px solid rgba(230, 57, 70, 0.35);
  color: #ff6b6b;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 9999px;
}

.badge-type {
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.badge-type.ui-ux {
  background: rgba(0, 87, 255, 0.16);
  border: 1px solid rgba(0, 87, 255, 0.35);
  color: #60a5fa;
}

.badge-type.code {
  background: rgba(16, 185, 129, 0.16);
  border: 1px solid rgba(16, 185, 129, 0.35);
  color: #34d399;
}

.badge-year {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  font-size: 0.8rem;
  padding: 5px 10px;
  border-radius: 6px;
}

.project-main-title {
  font-size: clamp(1.85rem, 3.2vw, 2.45rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #ffffff;
}

.project-tagline {
  font-size: 1.08rem;
  line-height: 1.65;
  color: #cbd5e1;
}

/* External Action Buttons */
.btn-behance-primary {
  background: #0057ff;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 87, 255, 0.35);
}

.btn-behance-primary:hover {
  background: #0045cc;
  transform: translateY(-2px);
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 87, 255, 0.5);
}

.btn-live-primary {
  background: #e63946;
  color: #ffffff;
  padding: 10px 22px;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(230, 57, 70, 0.35);
}

.btn-live-primary:hover {
  background: #c52a33;
  transform: translateY(-2px);
  color: #ffffff;
}

.btn-consult-outline {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f3f4f6;
  padding: 10px 20px;
  border-radius: 9999px;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-consult-outline:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

/* Device Mockup Wrapper */
.showcase-mockup-wrapper {
  background: #11131a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.65);
}

.mockup-header {
  background: #0b0d13;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mockup-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}
.mockup-dot.red { background: #ef4444; }
.mockup-dot.yellow { background: #f59e0b; }
.mockup-dot.green { background: #10b981; }

.mockup-url-bar {
  background: rgba(255, 255, 255, 0.05);
  padding: 3px 14px;
  border-radius: 9999px;
  color: #8b92a3;
  max-width: 260px;
  font-size: 0.78rem;
}

.mockup-badge {
  font-size: 0.78rem;
  color: #8b92a3;
}

.mockup-visual-frame {
  height: 380px;
  background: #0c0e14;
}

.mockup-glass-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to top, rgba(11, 13, 19, 0.6), transparent);
  pointer-events: none;
}

/* Detail Spec Cards */
.detail-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
}

.icon-accent {
  color: #e63946;
}

.detail-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
}

.detail-story-text {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #94a3b8;
}

.detail-subheading {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #cbd5e1;
}

.feature-item-text {
  font-size: 0.94rem;
  line-height: 1.55;
  color: #e2e8f0;
}

.feature-check-icon {
  background: rgba(230, 57, 70, 0.12);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tech-chip {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-size: 0.84rem;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
}

.tech-chip.highlight {
  background: rgba(230, 57, 70, 0.08);
  border-color: rgba(230, 57, 70, 0.25);
  color: #ff8b94;
}

.behance-callout-card {
  background: linear-gradient(135deg, rgba(0, 87, 255, 0.08), rgba(16, 18, 26, 0.95));
  border-color: rgba(0, 87, 255, 0.25);
}

.behance-callout-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
}

.behance-callout-desc {
  font-size: 0.86rem;
  color: #94a3b8;
}

.behance-icon-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0057ff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-behance-block {
  background: #0057ff;
  color: #ffffff;
  padding: 9px 18px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-behance-block:hover {
  background: #0045cc;
  color: #ffffff;
}

/* Gallery Section */
.portfolio-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e63946;
}

.portfolio-eyebrow {
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #e63946;
}

.gallery-section-title {
  font-size: 1.55rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}

.tab-filter-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  font-size: 0.86rem;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-filter-btn:hover {
  background: rgba(255, 255, 255, 0.09);
  color: #ffffff;
}

.tab-filter-btn.active {
  background: #e63946;
  border-color: #e63946;
  color: #ffffff;
  box-shadow: 0 2px 10px rgba(230, 57, 70, 0.35);
}

/* Gallery Item Card */
.gallery-item-card {
  background: #11131c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
}

.gallery-item-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}

.gallery-item-card.is-active {
  border-color: #e63946;
  box-shadow: 0 0 16px rgba(230, 57, 70, 0.25);
}

.gallery-thumb-wrapper {
  height: 190px;
  background: #090a0f;
}

.gallery-thumb-img {
  transition: transform 0.3s ease;
}

.gallery-item-card:hover .gallery-thumb-img {
  transform: scale(1.04);
}

.badge-mini-cat {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
}

.badge-mini-type {
  background: rgba(0, 87, 255, 0.8);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
}

.badge-mini-type.dev {
  background: rgba(16, 185, 129, 0.8);
}

.gallery-item-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.gallery-item-desc {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #94a3b8;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.gallery-item-type-label {
  font-size: 0.82rem;
  color: #94a3b8;
}

.btn-detail-link {
  font-size: 0.85rem;
  color: #e63946;
}

/* Bottom Consultation Banner */
.consultation-banner {
  background: linear-gradient(135deg, #161a26, #0e1017);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}

.max-w-640 {
  max-width: 640px;
}

.badge-accent-subtle {
  background: rgba(230, 57, 70, 0.15);
  border: 1px solid rgba(230, 57, 70, 0.3);
  color: #ff6b6b;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 9999px;
}

.banner-heading {
  font-size: clamp(1.4rem, 2.5vw, 1.85rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
}

.banner-lead {
  font-size: 1rem;
  line-height: 1.6;
  color: #cbd5e1;
}

.btn-cta-red {
  background: #e63946;
  color: #ffffff;
  padding: 11px 26px;
  border-radius: 9999px;
  font-size: 0.92rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cta-red:hover {
  background: #c52a33;
  transform: translateY(-2px);
}

.btn-cta-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
  padding: 11px 26px;
  border-radius: 9999px;
  font-size: 0.92rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cta-outline:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

@media (max-width: 768px) {
  .mockup-visual-frame {
    height: 240px;
  }
}
</style>
