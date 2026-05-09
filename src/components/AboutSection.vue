<template>
  <section class="wrapper bg-secondary">
    <div class="container py-14 py-md-16">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">

        <!-- Images column -->
        <div class="col-lg-6 position-relative order-lg-2">
          <div class="shape bg-dot red rellax w-16 h-20" data-rellax-speed="1" style="top: 3rem; left: 5.5rem"></div>
          <div class="overlap-grid overlap-grid-2">
            <div class="item">
              <figure class="rounded shadow">
                <img src="/assets/img/photos/about2.jpg" srcset="/assets/img/photos/about2@2x.jpg 2x" alt="About MoraCraft">
              </figure>
            </div>
            <div class="item">
              <figure class="rounded shadow">
                <img src="/assets/img/photos/about3.jpg" srcset="/assets/img/photos/about3@2x.jpg 2x" alt="MoraCraft Team">
              </figure>
            </div>
          </div>
        </div>
        <!--/column -->

        <!-- Text column -->
        <div class="col-lg-6">
          <div class="title mb-4">
            <span class="section-title">&#9679; About Us</span>
          </div>
          <h2 class="display-4 mb-3 text-white">Who We Are</h2>
          <p class="lead fs-lg">
            We're MoraCraft — a fresh, passionate web development and UI/UX design studio on a mission to help
            businesses show up beautifully online. We may be new, but we bring big energy, sharp skills, and a
            genuine love for crafting digital experiences that actually work.
          </p>
          <p class="mb-6">
            From building clean, responsive websites to designing intuitive user interfaces, we're here to turn
            your ideas into something real and remarkable. We work closely with our clients — listening first,
            then creating — because great digital products start with understanding people, not just pixels.
          </p>

          <!-- Stats -->
          <div class="row gy-3 gx-xl-8">
            <div v-for="stat in stats" :key="stat.label" class="col-4">
              <div class="stat-card">
                <span class="stat-number">{{ stat.number }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->

      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const stats = [
  { number: '10+', label: 'Project Delivered' },
  { number: '50+', label: 'Happy Clients'     },
  { number: '5+',  label: 'Years Experience'  },
]
</script>
