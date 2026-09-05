<template>
  <section id="portfolio" class="portfolio-section py-5 position-relative">
    <div class="container py-lg-4">
      <!-- Section Header -->
      <div class="row align-items-end justify-content-between mb-4 pb-2">
        <div class="col-lg-8">
          <div class="section-kicker mb-2">
            PORTOFOLIO TERPILIH
          </div>
          <h2 class="section-heading text-white mb-2">
            Studi Kasus &amp; Proyek Unggulan
          </h2>
          <p class="section-lead text-secondary mb-0">
            Eksplorasi karya desain UI/UX dan sistem digital yang dirancang dengan perhatian mendalam pada pengalaman pengguna, arsitektur visual, dan kebutuhan bisnis nyata.
          </p>
        </div>

        <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
          <button 
            class="btn-view-all-header d-inline-flex align-items-center gap-2"
            @click="$emit('view-all-projects')"
          >
            <span>Buka Semua Proyek</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Projects Grid: Strictly Maximum 3 Projects on the Front Page -->
      <div class="row g-4">
        <div 
          class="col-md-6 col-lg-4" 
          v-for="project in featuredProjects" 
          :key="project.id"
        >
          <div 
            class="simple-project-card h-100 d-flex flex-column cursor-pointer"
            @click="$emit('open-project', project.id)"
          >
            <!-- Project Image Wrapper -->
            <div class="project-img-wrapper position-relative overflow-hidden">
              <img 
                :src="getProjectPreview(project)" 
                :alt="project.title" 
                class="project-img w-100"
                loading="lazy"
                decoding="async"
                width="640"
                height="400"
                @error="(e) => handleImgFallback(e, project)"
              />
              
              <!-- Floating Top Badges -->
              <div class="position-absolute top-0 start-0 w-100 p-3 d-flex justify-content-between align-items-center pointer-events-none">
                <span class="card-category-badge">
                  {{ project.category }}
                </span>
                <span v-if="project.type === 'ui-ux'" class="card-type-badge ui-ux">
                  UI/UX Case Study
                </span>
                <span v-else class="card-type-badge">
                  {{ project.type === 'website' ? 'Website' : 'Aplikasi' }}
                </span>
              </div>
            </div>

            <!-- Project Content: Title, Description, Tech Stack, Footer -->
            <div class="project-card-body p-4 d-flex flex-column flex-grow-1 justify-content-between">
              <div>
                <!-- Title & Type Header -->
                <div class="d-flex align-items-start justify-content-between gap-2 mb-2">
                  <h3 class="project-title text-white mb-0">
                    {{ project.title }}
                  </h3>
                  <span class="project-type-tag">
                    {{ project.type === 'ui-ux' ? 'UI/UX' : (project.type === 'website' ? 'Web' : 'App') }}
                  </span>
                </div>

                <!-- Description -->
                <p class="project-description text-secondary mb-3">
                  {{ project.description }}
                </p>
              </div>

              <!-- Tech Stack Badges & CTA Footer -->
              <div>
                <div class="project-tech-group d-flex flex-wrap gap-1 pt-3 border-top border-dark">
                  <span 
                    v-for="tech in project.tech.slice(0, 4)" 
                    :key="tech" 
                    class="tech-badge"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.tech.length > 4" class="tech-badge-more">
                    +{{ project.tech.length - 4 }}
                  </span>
                </div>

                <!-- Bottom Status Bar & Button to Detail Page -->
                <div class="pt-3 mt-3 border-top border-dark d-flex align-items-center justify-content-between">
                  <span class="project-scope-label text-secondary small">
                    {{ project.behanceUrl ? 'Studi Kasus Behance' : 'Sistem & Platform' }}
                  </span>

                  <button 
                    class="btn-detail-link d-inline-flex align-items-center gap-1"
                    @click.stop="$emit('open-project', project.id)"
                  >
                    <span>Detail Proyek</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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
import { computed } from 'vue'
import { PORTFOLIO_ITEMS } from '../data/portfolio.ts'
import { getProjectSvgDataUri } from '../utils/portfolioImage.ts'

defineEmits(['select-service', 'open-project', 'view-all-projects'])

const featuredProjects = computed(() => {
  const featuredIds = [28, 105, 26]

  return featuredIds
    .map((id) => PORTFOLIO_ITEMS.find((project) => project.id === id))
    .filter(Boolean)
})

const getProjectPreview = (project) => {
  return project.url || getProjectSvgDataUri(project)
}

const handleImgFallback = (e, project) => {
  e.target.src = getProjectSvgDataUri(project)
}
</script>

<style scoped>
.portfolio-section {
  background-color: #0b0c10;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.section-kicker {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: #e63946;
  font-weight: 700;
}

.section-heading {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.section-lead {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 580px;
}

.btn-view-all-header {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f3f4f6;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-view-all-header:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  transform: translateX(2px);
}

/* Project Card */
.cursor-pointer {
  cursor: pointer;
}

.simple-project-card {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.simple-project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.22);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65);
}

/* Image Wrapper */
.project-img-wrapper {
  width: 100%;
  aspect-ratio: 16 / 10;
  height: auto;
  min-height: 190px;
  background-color: #0d0f15;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.simple-project-card:hover .project-img {
  transform: scale(1.04);
}

.pointer-events-none {
  pointer-events: none;
}

.card-category-badge {
  background: rgba(11, 12, 18, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
}

.card-type-badge {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e1;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
}

.card-type-badge.ui-ux {
  background: rgba(0, 87, 255, 0.25);
  border-color: rgba(0, 87, 255, 0.45);
  color: #93c5fd;
}

/* Card Body */
.project-card-body {
  background-color: #10121a;
}

.project-title {
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-type-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: #9aa1b2;
  background: rgba(255, 255, 255, 0.05);
  padding: 2px 7px;
  border-radius: 4px;
  text-transform: uppercase;
}

.project-description {
  font-size: 0.86rem;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #8b92a3;
}

/* Tech Badges */
.tech-badge {
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #d1d5db;
  font-size: 0.72rem;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 4px;
}

.tech-badge-more {
  background-color: rgba(255, 255, 255, 0.02);
  color: #9ca3af;
  font-size: 0.72rem;
  padding: 3px 6px;
  border-radius: 4px;
}

/* Bottom Details */
.project-scope-label {
  font-size: 0.78rem;
  color: #8b92a3;
}

.btn-detail-link {
  background: transparent;
  border: none;
  color: #e63946;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease, color 0.2s ease;
}

.btn-detail-link:hover {
  color: #ff6b6b;
  transform: translateX(3px);
}

/* All Projects Banner */
.all-projects-banner {
  background: #11131c;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.banner-bullet {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #e63946;
  display: inline-block;
}

.banner-title {
  font-size: 0.92rem;
}

.banner-subtext {
  font-size: 0.85rem;
  color: #94a3b8;
}

.btn-open-detail-page {
  background: #c52a33;
  color: #ffffff;
  padding: 10px 22px;
  min-height: 44px;
  border-radius: 9999px;
  font-size: 0.86rem;
  font-weight: 600;
  border: 1px solid #e63946;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-open-detail-page:hover {
  background: #d8313b;
  transform: translateY(-2px);
}

@media (max-width: 576px) {
  .section-heading {
    font-size: 1.75rem;
  }
  .project-title {
    font-size: 1.05rem;
  }
}
</style>
