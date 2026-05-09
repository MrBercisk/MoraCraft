<template>
  <section class="wrapper bg-dark">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
          <div class="text-center mb-4">
            <span class="section-title">&#9679; Portfolio</span>
          </div>
          <h2 class="display-4 mb-3 text-white">
            View Our <span class="underline-3 style-2 red">Work</span>
          </h2>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->

      <div class="swiper-container grid-view mb-6"
        data-margin="30"
        data-dots="true"
        data-items-xl="3"
        data-items-md="2"
        data-items-xs="1">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div
              v-for="project in projects"
              :key="project.title"
              class="swiper-slide bg-card-custom"
            >
              <figure class="rounded mb-6">
                <img :src="project.img" :srcset="project.imgSrcset" alt="" />
                <a class="item-link" :href="project.fullImg" data-glightbox data-gallery="projects-group">
                  <i class="uil uil-focus-add"></i>
                </a>
              </figure>
              <div class="project-details d-flex justify-content-center flex-column px-4">
                <div class="post-header">
                  <h2 class="post-title h3">
                    <a :href="project.link" class="link-dark text-primary">{{ project.title }}</a>
                  </h2>
                  <div class="post-category text-ash">{{ project.category }}</div>
                  <div class="text-left mb-4">
                    <span class="section-title">&#9679; {{ project.tag }}</span>
                  </div>
                </div>
                <!-- /.post-header -->
              </div>
              <!-- /.project-details -->
            </div>
            <!--/.swiper-slide -->
          </div>
          <!--/.swiper-wrapper -->
        </div>
        <!-- /.swiper -->
      </div>
      <!-- /.swiper-container -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const projects = [
  {
    img:        '/assets/img/photos/pd7.jpg',
    imgSrcset:  '/assets/img/photos/pd7@2x.jpg 2x',
    fullImg:    '/assets/img/photos/pd7-full.jpg',
    link:       './single-project.html',
    title:      'Cras Fermentum Sem',
    category:   'Stationary',
    tag:        'Web Design',
  },
  {
    img:        '/assets/img/photos/pd8.jpg',
    imgSrcset:  '/assets/img/photos/pd8@2x.jpg 2x',
    fullImg:    '/assets/img/photos/pd8-full.jpg',
    link:       './single-project2.html',
    title:      'Mollis Ipsum Mattis',
    category:   'Magazine, Book',
    tag:        'Web Design',
  },
  {
    img:        '/assets/img/photos/pd9.jpg',
    imgSrcset:  '/assets/img/photos/pd9@2x.jpg 2x',
    fullImg:    '/assets/img/photos/pd9-full.jpg',
    link:       './single-project3.html',
    title:      'Ipsum Ultricies Cursus',
    category:   'Packaging',
    tag:        'Web Design',
  },
  {
    img:        '/assets/img/photos/pd10.jpg',
    imgSrcset:  '/assets/img/photos/pd10@2x.jpg 2x',
    fullImg:    '/assets/img/photos/pd10-full.jpg',
    link:       './single-project.html',
    title:      'Inceptos Euismod Egestas',
    category:   'Stationary, Branding',
    tag:        'Web Design',
  },
  {
    img:        '/assets/img/photos/pd11.jpg',
    imgSrcset:  '/assets/img/photos/pd11@2x.jpg 2x',
    fullImg:    '/assets/img/photos/pd11-full.jpg',
    link:       './single-project2.html',
    title:      'Ipsum Mollis Vulputate',
    category:   'Packaging',
    tag:        'Web Design',
  },
  {
    img:        '/assets/img/photos/pd12.jpg',
    imgSrcset:  '/assets/img/photos/pd12@2x.jpg 2x',
    fullImg:    '/assets/img/photos/pd12-full.jpg',
    link:       './single-project3.html',
    title:      'Porta Ornare Cras',
    category:   'Branding',
    tag:        'Web Design',
  },
]
</script>
