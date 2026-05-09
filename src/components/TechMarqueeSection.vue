<template>
  <section class="wrapper bg-dark" style="padding: 3rem 0; overflow: hidden;">
    <div class="text-center mb-4">
      <span class="section-title">&#9679; Technologies We Use</span>
    </div>
    <div class="marquee-outer">
      <div class="marquee-track" id="techTrack">
        <div v-for="tech in technologies" :key="tech.alt" class="tech-item">
          <div class="tech-icon">
            <img :src="tech.src" :alt="tech.alt" :class="tech.extraClass" />
          </div>
          <span></span>
        </div>
      </div>
      <!-- The duplicate clone for infinite scroll is injected by App.vue after mount -->
    </div>
  </section>
</template>

<script setup>
// Technologies list — marquee clone injected in App.vue after mount
const technologies = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',               alt: 'Figma'       },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',                   alt: 'PHP'         },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',                     alt: 'Go'          },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',               alt: 'MySQL'       },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',    alt: 'Laravel'     },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg', alt: 'CodeIgniter' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',               alt: 'Vue.js'      },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',     alt: 'JavaScript'  },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',     alt: 'TypeScript'  },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',               alt: 'React'       },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',             alt: 'Docker'      },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',               alt: 'HTML5'       },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',                 alt: 'CSS3'        },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filamentphp/filamentphp-original.svg',   alt: 'FilamentPHP', extraClass: 'icon-yellow' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',       alt: 'Bootstrap'   },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',     alt: 'PostgreSQL'  },
]
</script>
