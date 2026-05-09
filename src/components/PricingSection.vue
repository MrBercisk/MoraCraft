<template>
  <section class="pricing-section bg-secondary">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">

      <!-- Header -->
      <div class="pricing-header">
        <span class="pricing-badge">Pricing</span>
        <h2 class="pricing-title">Service Package</h2>
      </div>

      <!-- Layout: Sidebar + Cards -->
      <div class="pricing-layout">

        <!-- Sidebar -->
        <div class="pricing-sidebar">
          <button
            v-for="cat in categories"
            :key="cat"
            class="sidebar-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Pricing cards -->
        <div class="pricing-cards">
          <div
            v-for="plan in plans"
            :key="plan.tier"
            class="pricing-card bg-card-custom"
            :class="{ popular: plan.popular }"
          >
            <div class="card-header-row">
              <p class="card-tier">{{ plan.tier }}</p>
              <span v-if="plan.popular" class="card-popular-badge">Popular</span>
            </div>
            <h3 class="card-price">{{ plan.price }}</h3>
            <p class="card-desc">{{ plan.description }}</p>
            <hr class="card-divider">
            <ul class="card-features">
              <li v-for="feature in plan.features" :key="feature">
                <span class="feature-dot"></span> {{ feature }}
              </li>
            </ul>
            <a href="#" class="card-btn" :class="plan.btnClass">Select Plan</a>
          </div>
        </div>
        <!-- /pricing-cards -->

      </div>
      <!-- /pricing-layout -->
    </div>
    <!-- /container -->
  </section>
</template>

<script setup>
import { ref } from 'vue'

const categories = ['Web Development', 'Web Design', 'Mobile App Design']
const activeCategory = ref('Web Development')

const plans = [
  {
    tier:        'Basic',
    price:       'Rp 2.500.000',
    description: 'Simple landing page for your need.',
    features: [
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
    ],
    popular:  false,
    btnClass: 'outline',
  },
  {
    tier:        'Standard',
    price:       'Rp 2.500.000',
    description: 'Simple landing page for your need.',
    features: [
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
    ],
    popular:  true,
    btnClass: 'solid',
  },
  {
    tier:        'Premium',
    price:       'Rp 2.500.000',
    description: 'Simple landing page for your need.',
    features: [
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
      'Lorem ipsum pharetra pharetra',
    ],
    popular:  false,
    btnClass: 'outline',
  },
]
</script>
