<template>
  <section class="tech-marquee-section border-top border-bottom border-dark position-relative overflow-hidden py-3 py-md-4">
    <div class="container d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
      <div class="d-flex align-items-center gap-2">
        <span class="ticker-dot"></span>
        <span class="ticker-label">Tech Stack &amp; Arsitektur</span>
      </div>
      <span class="ticker-status d-none d-sm-inline-block">15 Teknologi Modern &amp; Teruji Produksi</span>
    </div>

    <div class="marquee-wrapper">
      <!-- Track 1 -->
      <div class="marquee-row">
        <div 
          class="tech-pill" 
          v-for="(t, i) in techStack" 
          :key="'t1-' + i"
          :style="{ '--brand-color': t.color, '--brand-bg': t.bg }"
        >
          <div class="tech-logo-box" v-html="t.icon"></div>
          <div class="d-flex flex-column text-start">
            <span class="tech-title">{{ t.name }}</span>
            <span class="tech-subtitle">{{ t.role }}</span>
          </div>
        </div>
      </div>
      
      <!-- Track 2 (Cloned for smooth seamless infinite scroll) -->
      <div class="marquee-row" aria-hidden="true">
        <div 
          class="tech-pill" 
          v-for="(t, i) in techStack" 
          :key="'t2-' + i"
          :style="{ '--brand-color': t.color, '--brand-bg': t.bg }"
        >
          <div class="tech-logo-box" v-html="t.icon"></div>
          <div class="d-flex flex-column text-start">
            <span class="tech-title">{{ t.name }}</span>
            <span class="tech-subtitle">{{ t.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const techStack = [
  {
    name: 'Laravel',
    role: 'PHP Web Framework',
    color: '#ff2d20',
    bg: 'rgba(255, 45, 32, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#ff2d20" d="M117.8 30.6L99.7 19.8c-1.3-.8-2.9-.8-4.2 0L67.1 36.7l-22-13.1c-1.3-.8-2.9-.8-4.2 0L8.7 42.6c-1.3.8-2.1 2.2-2.1 3.7v35.4c0 1.5.8 2.9 2.1 3.7l32.2 19c.7.4 1.4.6 2.1.6.7 0 1.4-.2 2.1-.6l6.8-4 1.3.8 22.3 13.2c.7.4 1.4.6 2.1.6.7 0 1.4-.2 2.1-.6l40.3-23.8c1.3-.8 2.1-2.2 2.1-3.7V34.3c0-1.5-.8-2.9-2.1-3.7zM42.9 99.4L12.9 81.7V48.1l30 17.7v33.6zm4.2-38.3L17.5 43.6l23.3-13.8 29.6 17.5-23.3 13.8zm27.8 49.3l-24.1-14.3V63.5l7.9-4.7 16.2 9.6v42zm2.1-47.5L52.9 48.7l22-13 24.1 14.2-22 13zm38.1 19l-36 21.3V69.6l12.8-7.6 23.2 13.7v26.2zm0-31.2l-10.7-6.3 10.7-6.3v12.6zm-14.9-8.8L77.9 30.1l19.7-11.7 22.3 13.2-19.7 11.3z"/></svg>`
  },
  {
    name: 'React.js',
    role: 'UI Library & Next.js',
    color: '#00d8ff',
    bg: 'rgba(0, 216, 255, 0.12)',
    icon: `<svg viewBox="-11.5 -10.23174 23 20.46348" width="22" height="22"><circle cx="0" cy="0" r="2.05" fill="#00d8ff"/><g stroke="#00d8ff" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`
  },
  {
    name: 'TypeScript',
    role: 'Logika Type-Safe',
    color: '#3178c6',
    bg: 'rgba(49, 120, 198, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#3178c6" d="M1.5 0h125c.8 0 1.5.7 1.5 1.5v125c0 .8-.7 1.5-1.5 1.5H1.5c-.8 0-1.5-.7-1.5-1.5V1.5C0 .7.7 0 1.5 0z"/><path fill="#ffffff" d="M68.7 82.2c1.7 2.9 4.1 5.3 7.3 6.9 3.2 1.6 6.9 2.4 11.2 2.4 3.7 0 6.9-.6 9.4-1.9 2.5-1.3 4.4-3 5.7-5.2 1.3-2.2 1.9-4.8 1.9-7.7 0-2.8-.6-5.2-1.7-7.2-1.1-2-2.8-3.8-5-5.2-2.2-1.4-5.4-2.8-9.5-4.2-3.8-1.3-6.6-2.5-8.4-3.7-1.8-1.2-3.1-2.5-3.9-4-.8-1.5-1.2-3.3-1.2-5.4 0-2.5.7-4.7 2-6.5 1.3-1.8 3.2-3.2 5.6-4.2 2.4-1 5.3-1.5 8.6-1.5 3.3 0 6.2.5 8.7 1.6 2.5 1.1 4.5 2.6 6 4.7 1.5 2 2.4 4.5 2.7 7.4l-11.8 2.4c-.3-1.9-1.1-3.4-2.3-4.5-1.3-1.1-3.2-1.6-5.7-1.6-2.2 0-4 .4-5.3 1.2-1.3.8-1.9 2-1.9 3.5 0 1.3.4 2.3 1.2 3.1.8.8 2.1 1.6 4 2.3 1.8.8 4.6 1.8 8.4 3.2 4.6 1.6 8.2 3.4 10.7 5.3 2.5 1.9 4.3 4.2 5.4 6.8 1.1 2.6 1.7 5.7 1.7 9.3 0 3.7-.9 7.1-2.7 10.1-1.8 3-4.4 5.3-7.8 7-3.4 1.7-7.6 2.5-12.6 2.5-5.2 0-9.7-1-13.4-3-3.7-2-6.4-4.8-8.2-8.4l11.4-5.9zM19.3 35.1h39.1v10.5H41.5v48.6H29.1V45.6H19.3V35.1z"/></svg>`
  },
  {
    name: 'CodeIgniter',
    role: 'Framework PHP Ringan',
    color: '#ee4326',
    bg: 'rgba(238, 67, 38, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#ee4326" d="M64 4C61.4 18.2 50.8 31.5 48.7 34.2c-1.8 2.3-6.5 7.8-8.7 14.8-2.6 8.1-.8 16.5 1.5 21 0-1.8.3-4.3 1.3-7.1 2.1-6.1 6.8-11.1 9.9-13.9 1-1 3.5-3.3 5.4-5.6 1.4 4.5 1.7 9.8 1 15-1 7.2-4.4 13.9-9.5 18.6-8.9 8.2-22.3 7.8-29.3-.8C14.7 68.3 15 57 18.4 49c-8.9 9.8-14.4 23-14.4 37.5 0 28.7 23.3 52 52 52s52-23.3 52-52c0-18.7-9.5-35.3-24-44.8 2 5.5 2.1 11.7.3 17.5-2.5 8-8.3 14.4-15.8 17.4 2.8-5.3 3.6-11.4 2.1-17.3-2-8-8-15.5-14.6-21.8C65.5 27 64 15 64 4z"/></svg>`
  },
  {
    name: 'Vue.js',
    role: 'Frontend Reaktif',
    color: '#42b883',
    bg: 'rgba(66, 184, 131, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#42b883" d="M78.8 10.4L64 36 49.2 10.4H0l64 111 64-111z"/><path fill="#35495e" d="M78.8 10.4L64 36 49.2 10.4H25.6L64 77l38.4-66.6z"/></svg>`
  },
  {
    name: 'Go',
    role: 'Backend Berkinerja Tinggi',
    color: '#00add8',
    bg: 'rgba(0, 173, 216, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#00add8" d="M21.2 52.4c3.4-6.4 8.7-11.4 15.3-14.6 6.6-3.2 14.1-4.2 21.6-2.9 6.2 1.1 12 3.8 16.9 7.9l-8.5 9.4c-3.1-2.5-6.8-4.2-10.8-4.8-4.8-.8-9.7-.1-13.9 2-4.3 2.1-7.7 5.4-9.8 9.6-2.1 4.2-2.7 9-.1 13.6 2 4.6 5.4 8 9.7 10 4.3 2 9.2 2.4 13.9 1.3 4-.9 7.6-2.9 10.4-5.7v-7.8H51.4v-11.8h27.9v25.2c-5.1 5.3-11.7 9-19 10.5-8.5 1.8-17.4.8-25.2-2.9-7.8-3.7-14.1-9.9-17.7-17.7-3.7-7.8-4.2-16.8-1.5-25 1.7-4.4 4.2-8.3 5.3-8.9zm77.9-16.1c7.7 0 15 3.1 20.4 8.5 5.5 5.5 8.5 12.8 8.5 20.4s-3.1 15-8.5 20.4c-5.5 5.5-12.8 8.5-20.4 8.5s-15-3.1-20.4-8.5c-5.5-5.5-8.5-12.8-8.5-20.4s3.1-15 8.5-20.4c5.4-5.4 12.7-8.5 20.4-8.5zm0 12.8c-4.3 0-8.4 1.7-11.4 4.8-3 3-4.8 7.1-4.8 11.4s1.7 8.4 4.8 11.4c3 3 7.1 4.8 11.4 4.8s8.4-1.7 11.4-4.8c3-3 4.8-7.1 4.8-11.4s-1.7-8.4-4.8-11.4c-3-3-7.1-4.8-11.4-4.8z"/></svg>`
  },
  {
    name: 'Filament',
    role: 'Panel Admin & TALL Stack',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#f59e0b" d="M24 16h40c17.7 0 32 14.3 32 32 0 12.2-6.8 22.8-16.8 28.2L96 112H72L56 80H44v32H24V16zm20 44h20c6.6 0 12-5.4 12-12s-5.4-12-12-12H44v24z"/><path fill="#fbbf24" d="M88 28l24 40-16 28h-16l12-24-16-28 12-16z"/></svg>`
  },
  {
    name: 'MySQL',
    role: 'Basis Data Relasional',
    color: '#00758f',
    bg: 'rgba(0, 117, 143, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#00758f" d="M123.6 77.2c-5.1-4.6-11.7-7.8-18.9-9.1-3.6-.7-7.3-.9-11-.6 2.3-4.6 3.7-9.8 4.2-15.1.8-9.4-2.1-18.7-8.1-25.9-6-7.2-14.6-11.8-23.9-12.7-1.7-.2-3.4-.2-5.1 0-11 1.2-20.7 7.7-26.2 17.3-3.6 6.3-5.2 13.5-4.6 20.8.6 6.6 3.1 12.9 7.2 18-5.3 1.9-10.4 4.5-15 7.8C10.8 85.8 4.4 97.4 4 110.4c6.3-4.8 13.4-8.4 21.1-10.7 7.7-2.3 15.8-3.1 23.8-2.3 10.4 1 20.4 4.5 29 10.2 8.7 5.7 15.8 13.4 20.7 22.4 2.8-7.9 7.5-15 13.7-20.6 6.2-5.6 13.7-9.5 21.9-11.4-3.5-6.8-6.9-13.8-10.6-20.8z"/><circle cx="56" cy="48" r="4" fill="#ffffff"/></svg>`
  },
  {
    name: 'Supabase',
    role: 'Backend & Basis Data Cloud',
    color: '#3ecf8e',
    bg: 'rgba(62, 207, 142, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#3ecf8e" d="M68.6 123.6c-2.4 3.2-7.6 1.8-7.9-2.2l-4.1-51.5h49.6c4.6 0 7.2 5.3 4.2 8.8l-41.8 44.9z"/><path fill="#249361" d="M59.4 4.4c2.4-3.2 7.6-1.8 7.9 2.2l4.1 51.5H21.8c-4.6 0-7.2-5.3-4.2-8.8L59.4 4.4z"/></svg>`
  },
  {
    name: 'Bootstrap',
    role: 'Kerangka UI Responsif',
    color: '#7952b3',
    bg: 'rgba(121, 82, 179, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#7952b3" d="M14.6 19.4C18.3 7.8 27.8 0 40.1 0h47.8c12.3 0 21.8 7.8 25.5 19.4 3.7 11.6 3.7 77.6 0 89.2-3.7 11.6-13.2 19.4-25.5 19.4H40.1c-12.3 0-21.8-7.8-25.5-19.4-3.7-11.6-3.7-77.6 0-89.2z"/><path fill="#ffffff" d="M42.2 30h24.8c6.9 0 12.1 1.7 15.6 5.1 3.5 3.4 5.3 8.3 5.3 14.6 0 4.1-.8 7.6-2.5 10.4-1.7 2.8-4.1 4.9-7.3 6.3 4.2 1.3 7.4 3.7 9.5 7.1 2.1 3.4 3.2 7.6 3.2 12.7 0 7.2-2 12.7-6.1 16.5-4.1 3.8-10 5.8-17.7 5.8H42.2V30zm16.5 29.8h9.8c3.2 0 5.6-.7 7.2-2.1 1.6-1.4 2.4-3.5 2.4-6.3 0-2.7-.8-4.7-2.3-6-1.6-1.3-3.9-2-7.1-2h-10v16.4zm0 34.3h10.9c3.7 0 6.5-.8 8.3-2.4 1.8-1.6 2.7-4 2.7-7.2 0-3.1-.9-5.4-2.7-6.9-1.8-1.6-4.6-2.4-8.3-2.4H58.7v18.9z"/></svg>`
  },
  {
    name: 'Vercel',
    role: 'Deployment Global Edge',
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.08)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#ffffff" d="M64 16L124 112H4z"/></svg>`
  },
  {
    name: 'GitHub',
    role: 'Kontrol Versi & CI/CD',
    color: '#f0f6fc',
    bg: 'rgba(240, 246, 252, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#f0f6fc" fill-rule="evenodd" clip-rule="evenodd" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-6.6-.1-12-17.8 3.9-21.6-7.6-21.6-7.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.7 5.3.6-4.2 2.2-7 4.1-8.6-14.2-1.6-29.2-7.1-29.2-31.6 0-7 2.5-12.7 6.6-17.2-.7-1.6-2.9-8.1.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.2 16.1-2.2 5.5 0 11 0.7 16.1 2.2 12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.8 1.3 15.3.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.6-15 30-29.3 31.6 2.3 2 4.3 5.9 4.3 11.9 0 8.6-.1 15.6-.1 17.7 0 1.7 1.2 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"/></svg>`
  },
  {
    name: 'Figma',
    role: 'Sistem Desain UI/UX',
    color: '#f24e1e',
    bg: 'rgba(242, 78, 30, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="#0acf83" d="M38 128c11.6 0 21-9.4 21-21V86H38c-11.6 0-21 9.4-21 21s9.4 21 21 21z"/><path fill="#a259ff" d="M17 65c0-11.6 9.4-21 21-21h21v42H38c-11.6 0-21-9.4-21-21z"/><path fill="#f24e1e" d="M17 22c0-11.6 9.4-21 21-21h21v43H38c-11.6 0-21-9.4-21-21z"/><path fill="#ff7262" d="M59 1h21c11.6 0 21 9.4 21 21s-9.4 21-21 21H59V1z"/><path fill="#1abcfe" d="M101 65c0 11.6-9.4 21-21 21s-21-9.4-21-21 9.4-21 21-21 21 9.4 21 21z"/></svg>`
  },
  {
    name: 'Vite',
    role: 'Build Super Cepat',
    color: '#bd34fe',
    bg: 'rgba(189, 52, 254, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><path fill="url(#vite-grad)" d="M124.9 19.3L66.7 122.9c-1.1 2-4 2-5.1 0L3.1 19.3c-1.3-2.3.5-5.1 3.1-4.7l58.1 9.5 57.5-9.5c2.6-.4 4.4 2.4 3.1 4.7z"/><defs><linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#41d1ff"/><stop offset="100%" stop-color="#bd34fe"/></linearGradient></defs><path fill="#ffdf00" d="M73.5 12.3l-34 32.4c-1.2 1.1-.5 3.2 1.1 3.3l17.7 1.1-12.7 28.5c-.8 1.8 1.4 3.4 2.7 2l32.2-34.4c1.1-1.2.3-3.1-1.3-3.2l-17.5-.8 13.5-27c.8-1.6-1-3.2-2.7-1.9z"/></svg>`
  },
  {
    name: 'Payment Gateway',
    role: 'Midtrans / Xendit / Doku',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)',
    icon: `<svg viewBox="0 0 128 128" width="22" height="22"><rect x="12" y="24" width="104" height="80" rx="14" fill="none" stroke="#10b981" stroke-width="8"/><rect x="12" y="44" width="104" height="18" fill="#10b981"/><rect x="28" y="76" width="28" height="12" rx="4" fill="#10b981"/><circle cx="92" cy="82" r="6" fill="#10b981"/></svg>`
  }
]
</script>

<style scoped>
.tech-marquee-section {
  background: #090a0f;
  border-color: rgba(255, 255, 255, 0.07) !important;
}

.ticker-dot {
  width: 7px;
  height: 7px;
  background-color: #e63946;
  border-radius: 50%;
  display: inline-block;
}

.ticker-label {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  color: #e63946;
  font-weight: 700;
}

.ticker-status {
  font-size: 0.78rem;
  color: #94a3b8;
  font-weight: 500;
}

.marquee-wrapper {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 16px;
  mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
  padding: 4px 0;
}

.marquee-row {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  animation: marqueeScroll 46s linear infinite;
}

@keyframes marqueeScroll {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-100%, 0, 0); }
}

.marquee-wrapper:hover .marquee-row {
  animation-play-state: paused;
}

/* Vibrant Colorful Tech Pill */
.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #11131c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 16px;
  border-radius: 10px;
  white-space: nowrap;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.tech-pill:hover {
  transform: translateY(-2px);
  border-color: var(--brand-color);
  background-color: #171b28;
}

.tech-logo-box {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tech-title {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: #f3f4f6;
  line-height: 1.2;
}

.tech-subtitle {
  font-size: 0.72rem;
  color: #8b92a3;
  line-height: 1.2;
  margin-top: 2px;
}
</style>
