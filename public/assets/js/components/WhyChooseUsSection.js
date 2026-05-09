// WhyChooseUsSection.js
const WhyChooseUsSection = {
  name: 'WhyChooseUsSection',
  data() {
    return {
      features: [
        {
          cardClass: 'bg-pale-yellow',
          icon: './assets/img/icons/lineal/telephone-3.svg',
          iconClass: 'text-yellow',
          title: '24/7 Support',
          description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.',
          colClass: 'col-md-5 offset-md-1 align-self-end',
        },
        {
          cardClass: 'bg-pale-red',
          icon: './assets/img/icons/lineal/shield.svg',
          iconClass: 'text-red',
          title: 'Secure Payments',
          description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.',
          colClass: 'col-md-6 align-self-end',
        },
        {
          cardClass: 'bg-pale-leaf',
          icon: './assets/img/icons/lineal/cloud-computing-3.svg',
          iconClass: 'text-leaf',
          title: 'Daily Updates',
          description: 'Nulla vitae elit libero, a pharetra augue.',
          colClass: 'col-md-5',
        },
        {
          cardClass: 'bg-pale-primary',
          icon: './assets/img/icons/lineal/analytics.svg',
          iconClass: '',
          title: 'Market Research',
          description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.',
          colClass: 'col-md-6 align-self-start',
        },
      ],
    };
  },
  template: `
    <section class="wrapper bg-secondary">
      <div class="container py-14 py-md-16">
        <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div class="col-lg-7 order-lg-2">
            <div class="row gx-md-5 gy-5">
              <div
                v-for="feature in features"
                :key="feature.title"
                :class="feature.colClass"
              >
                <div class="card" :class="feature.cardClass">
                  <div class="card-body">
                    <img
                      :src="feature.icon"
                      class="svg-inject icon-svg icon-svg-md mb-3"
                      :class="feature.iconClass"
                      alt=""
                    />
                    <h4>{{ feature.title }}</h4>
                    <p class="mb-0">{{ feature.description }}</p>
                  </div>
                  <!--/.card-body -->
                </div>
                <!--/.card -->
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/column -->
          <div class="col-lg-5">
            <div class="text-left mb-4">
              <span class="section-title">
                &#9679; Portfolio
              </span>
            </div>
            <h2 class="display-4 mb-3 text-primary">Why Choose Us</h2>
            <p class="text-primary">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </section>
  `,
};
