<template>
  <section class="wrapper bg-dark">
    <div class="container py-14 py-md-16">
      <div class="text-center mb-4">
        <span class="section-title">&#9679; Testimonials</span>
      </div>
      <h2 class="display-4 mb-3 text-center text-primary">Client Reviews</h2>

      <div class="position-relative">
        <div class="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed="1"
          style="bottom: 0.5rem; right: -1.7rem;"></div>
        <div class="shape bg-dot red rellax w-16 h-16" data-rellax-speed="1"
          style="top: -1rem; left: -1.7rem;"></div>

        <div class="swiper-container dots-closer mb-6"
          data-margin="0"
          data-dots="true"
          data-items-xl="3"
          data-items-md="2"
          data-items-xs="1">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in testimonials"
                :key="index"
                class="swiper-slide"
              >
                <div class="item-inner">
                  <div class="card bg-card-custom text-primary">
                    <div class="card-body">
                      <blockquote class="icon mb-0">
                        <p>{{ item.quote }}</p>
                        <div class="blockquote-details">
                          <img
                            class="rounded-circle w-12"
                            :src="item.avatar"
                            :srcset="item.avatarSrcset"
                            alt=""
                          />
                          <div class="info">
                            <h5 class="mb-1 text-secondary">{{ item.name }}</h5>
                            <p class="mb-0">{{ item.role }}</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.position-relative -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote:        '\u201cVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.\u201d',
    avatar:       '/assets/img/avatars/te1.jpg',
    avatarSrcset: '/assets/img/avatars/te1@2x.jpg 2x',
    name:         'Coriss Ambady',
    role:         'Financial Analyst',
  },
  {
    quote:        '\u201cVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.\u201d',
    avatar:       '/assets/img/avatars/te2.jpg',
    avatarSrcset: '/assets/img/avatars/te2@2x.jpg 2x',
    name:         'Cory Zamora',
    role:         'Marketing Specialist',
  },
  {
    quote:        '\u201cVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.\u201d',
    avatar:       '/assets/img/avatars/te2.jpg',
    avatarSrcset: '/assets/img/avatars/te2@2x.jpg 2x',
    name:         'Cory Zamora',
    role:         'Marketing Specialist',
  },
]
</script>
