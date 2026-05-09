<template>
  <section class="hero-section wrapper">
    <canvas id="hexCanvas" class="hero-canvas"></canvas>
    <div class="hero-overlay"></div>
    <div class="container pt-11 pt-md-13 pb-3 pb-md-3 pb-lg-10 text-center">
      <div class="row">
        <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
          <h1 class="display-1 fs-60 mb-4 px-md-15 px-lg-0">
            We build digital products that help your business grow.
          </h1>
          <p class="lead fs-24 lh-sm mb-7 mx-md-13 mx-lg-10">
            From website development to mobile apps design, we create clean, scalable, and user-friendly solutions.
          </p>
          <div>
            <div class="d-flex justify-content-center gap-3 flex-wrap">
              <a class="btn btn-lg btn-danger rounded-pill mb-5">Start your project</a>
              <a class="btn btn-lg btn-outline-secondary text-white rounded-pill mb-5">View our work</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Canvas grid animation is initialized in App.vue after all components mount
// (requires the #hexCanvas element to be in the DOM first)
</script>
