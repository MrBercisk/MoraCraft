// app.js — Vue 3 Application Entry Point
// All component files must be loaded before this script in index.html

const { createApp } = Vue;

const app = createApp({
  name: 'MoraCraftApp',
  // Root component — actual content is handled by child components
});

// Register all page components globally
app.component('navbar-component',       NavbarComponent);
app.component('hero-section',           HeroSection);
app.component('about-section',          AboutSection);
app.component('tech-marquee-section',   TechMarqueeSection);
app.component('expertise-section',      ExpertiseSection);
app.component('portfolio-section',      PortfolioSection);
app.component('why-choose-us-section',  WhyChooseUsSection);
app.component('testimonial-section',    TestimonialSection);
app.component('pricing-section',        PricingSection);
app.component('contact-hero-section',   ContactHeroSection);
app.component('contact-section',        ContactSection);
app.component('footer-component',       FooterComponent);

// Mount Vue app
app.mount('#app');
