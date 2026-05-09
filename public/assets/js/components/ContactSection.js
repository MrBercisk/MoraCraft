// ContactSection.js
const ContactSection = {
  name: 'ContactSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      contactInfo: [
        {
          label: 'Address',
          value: 'Yogyakarta, Indonesia',
          svgPath: 'M12 21C12 21 4 14 4 9a8 8 0 1 1 16 0c0 5-8 12-8 12z M12 9m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0',
          svgExtra: '<circle cx="12" cy="9" r="2.5"/>',
          rawSvg: `<svg viewBox="0 0 24 24"><path d="M12 21C12 21 4 14 4 9a8 8 0 1 1 16 0c0 5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
        },
        {
          label: 'Email',
          value: 'codemora@gmail.com',
          rawSvg: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
        },
        {
          label: 'WhatsApp',
          value: '+62 1234 5678',
          rawSvg: `<svg viewBox="0 0 24 24"><path d="M3 5a2 2 0 0 1 2-2h3l1 4-2 2a16 16 0 0 0 7 7l2-2 4 1v3a2 2 0 0 1-2 2C8 21 3 13.5 3 5z"/></svg>`,
        },
      ],
      socialIcons: [
        { rawSvg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#e05444"/></svg>` },
        { rawSvg: `<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4 4 20"/></svg>` },
        { rawSvg: `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>` },
      ],
    };
  },
  template: `
    <section class="wrap bg-secondary">
      <div class="inner">
        <!-- Left -->
        <div>
          <div class="text-left mb-4">
            <span class="section-title">
              &#9679; Contact
            </span>
          </div>
          <h2 class="display-4 mb-3 text-white">Contact Info</h2>
          <p class="section-desc">I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly.</p>

          <div class="info-item" v-for="info in contactInfo" :key="info.label">
            <div class="info-icon" v-html="info.rawSvg"></div>
            <div>
              <div class="info-label">{{ info.label }}</div>
              <div class="info-value">{{ info.value }}</div>
            </div>
          </div>

          <div class="social-row">
            <div class="social-btn" v-for="(social, idx) in socialIcons" :key="idx" v-html="social.rawSvg"></div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="form-card">
          <p class="form-title">Get in Touch</p>
          <div class="form-row">
            <div class="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" v-model="form.name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" v-model="form.email" />
            </div>
          </div>
          <div class="form-group form-group-full">
            <label>Message</label>
            <textarea placeholder="Write your project ..." v-model="form.message"></textarea>
          </div>
          <button class="btn-send">Send Message</button>
        </div>
      </div>
    </section>
  `,
};
