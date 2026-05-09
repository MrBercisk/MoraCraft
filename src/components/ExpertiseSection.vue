<template>
  <section class="wrapper bg-secondary">
    <div class="container py-14 py-md-16 text-center">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <div class="text-center mb-4">
            <span class="section-title">&#9679; Services</span>
          </div>
          <h3 class="display-4 mb-10 px-xl-10 text-white">Our Expertise</h3>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="position-relative">
        <div class="shape rounded-circle bg-soft-blue rellax w-16 h-16" data-rellax-speed="1"
          style="bottom: -0.5rem; right: -2.2rem; z-index: 0;"></div>
        <div class="shape bg-dot red rellax w-16 h-17" data-rellax-speed="1"
          style="top: -0.5rem; left: -2.5rem; z-index: 0;"></div>
        <div class="row gx-md-5 gy-5 text-center">
          <div v-for="service in services" :key="service.title" class="col-md-6 col-xl-4">
            <div class="card bg-card-custom shadow-lg">
              <div class="card-body">
                <img :src="service.icon" class="icon-svg icon-svg-md mb-3" :class="service.iconClass" alt="" />
                <h4 class="text-white">{{ service.title }}</h4>
                <p class="mb-2">{{ service.description }}</p>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->
  </section>
</template>


<script setup>
const services = [
  {
    icon:        '/assets/img/icons/lineal/search-2.svg',
    iconClass:   'icon-yellow',
    title:       'Web Development',
    description: 'We build fast and reliable websites and web applications for your business.',
  },
  {
    icon:        '/assets/img/icons/lineal/browser.svg',
    iconClass:   'icon-red',
    title:       'Web Design',
    description: 'We design clean and user-friendly website interfaces for a better user experience.',
  },
  {
    icon:        '/assets/img/icons/lineal/chat-2.svg',
    iconClass:   'icon-green',
    title:       'Mobile App Design',
    description: 'We create simple and intuitive mobile app designs that are easy to use.',
  },
]
</script>
