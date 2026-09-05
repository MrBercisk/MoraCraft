<template>
  <section id="contact" class="contact-clean-section py-5 position-relative">
    <div class="container py-lg-5">
      <!-- Section Header -->
      <div class="text-center mb-5 max-w-700 mx-auto">
        <span class="contact-badge mb-3 d-inline-block">Hubungi Kami</span>
        <h2 class="contact-title text-white mb-3">
          Mari Wujudkan Ide Digital Anda
        </h2>
        <p class="contact-subtitle text-secondary">
          Punya rencana proyek baru atau ingin berkonsultasi seputar web dan UI/UX? Kami siap membantu mewujudkannya.
        </p>
      </div>

      <div class="row g-4 justify-content-center">
        <!-- Direct Quick Channels (Left Column) -->
        <div class="col-lg-4 col-md-5">
          <div class="contact-info-panel h-100 p-4 p-lg-4 d-flex flex-column justify-content-between">
            <div>
              <h3 class="panel-heading text-white mb-3">Kontak Langsung</h3>
              <p class="panel-desc text-secondary mb-4">
                Ingin respon instan? Hubungi kami langsung melalui WhatsApp atau kirim pesan email.
              </p>

              <div class="d-flex flex-column gap-3 mb-4">
                <!-- WhatsApp -->
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20MoraCraft,%20saya%20ingin%20konsultasi%20proyek" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="contact-direct-card d-flex align-items-center gap-3 p-3 text-decoration-none"
                >
                  <div class="icon-box wa-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span class="direct-label d-block text-secondary">WhatsApp</span>
                    <span class="direct-val text-white">+62 812-3456-7890</span>
                  </div>
                </a>

                <!-- Email -->
                <a 
                  href="mailto:studiomoracraft@gmail.com" 
                  class="contact-direct-card d-flex align-items-center gap-3 p-3 text-decoration-none"
                >
                  <div class="icon-box email-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <span class="direct-label d-block text-secondary">Email</span>
                    <span class="direct-val text-white">studiomoracraft@gmail.com</span>
                  </div>
                </a>

                <!-- Location -->
                <div class="contact-direct-card d-flex align-items-center gap-3 p-3">
                  <div class="icon-box loc-box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span class="direct-label d-block text-secondary">Lokasi</span>
                    <span class="direct-val text-white">Indonesia · Remote Global</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Clean Project Form (Right Column) -->
        <div class="col-lg-6 col-md-7">
          <div class="contact-form-panel p-4 p-md-4">
            <form @submit.prevent="handleSubmit">
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="clean-form-label" for="user-name">Nama Anda</label>
                  <input 
                    id="user-name"
                    v-model="form.name"
                    type="text" 
                    class="clean-form-input" 
                    placeholder="Nama Lengkap" 
                    required 
                  />
                </div>
                <div class="col-md-6">
                  <label class="clean-form-label" for="user-email">Email</label>
                  <input 
                    id="user-email"
                    v-model="form.email"
                    type="email" 
                    class="clean-form-input" 
                    placeholder="nama@email.com" 
                    required 
                  />
                </div>
                <div class="col-12">
                  <label class="clean-form-label" for="user-msg">Pesan / Detail Proyek</label>
                  <textarea 
                    id="user-msg"
                    v-model="form.message"
                    rows="4" 
                    class="clean-form-input" 
                    placeholder="Ceritakan gambaran singkat tentang website atau desain yang ingin Anda buat..." 
                    required
                  ></textarea>
                </div>
              </div>

              <!-- Action Submit Button -->
              <div class="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 pt-2">
                <button type="submit" class="btn-clean-submit" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Kirim Pesan</span>
                  <span v-else>Mengirim...</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>

                <div v-if="submitSuccess" class="success-alert">
                  ✓ Pesan terkirim! Kami akan segera menghubungi Anda.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  preselectedService: {
    type: String,
    default: ''
  }
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

watch(() => props.preselectedService, (newVal) => {
  if (newVal) {
    form.value.message = `Halo MoraCraft, saya tertarik dengan: ${newVal}\n\n`
  }
})

const handleSubmit = () => {
  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) return

  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    form.value.message = ''
  }, 700)
}
</script>

<style scoped>
.contact-clean-section {
  background-color: #0b0c12;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.max-w-700 {
  max-width: 640px;
}

.contact-badge {
  background: rgba(230, 57, 70, 0.1);
  border: 1px solid rgba(230, 57, 70, 0.35);
  color: #ff6b77;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 9999px;
  letter-spacing: 0.02em;
}

.contact-title {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Left Info Panel */
.contact-info-panel {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.panel-heading {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
}

.panel-desc {
  font-size: 0.86rem;
  line-height: 1.5;
}

.contact-direct-card {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  transition: all 0.2s ease;
}

.contact-direct-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wa-box {
  background: rgba(37, 211, 102, 0.12);
  color: #25d366;
  border: 1px solid rgba(37, 211, 102, 0.25);
}

.email-box {
  background: rgba(230, 57, 70, 0.12);
  color: #ff6b77;
  border: 1px solid rgba(230, 57, 70, 0.25);
}

.loc-box {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.direct-label {
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: #94a3b8 !important;
}

.direct-val {
  font-size: 0.92rem;
  font-weight: 600;
}

/* Right Form Panel */
.contact-form-panel {
  background: #10121a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.clean-form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 6px;
  display: block;
}

.clean-form-input {
  width: 100%;
  background: #090a0f;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 11px 14px;
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.clean-form-input:focus {
  outline: none;
  border-color: #e63946;
  box-shadow: 0 0 0 2px rgba(230, 57, 70, 0.25);
}

.btn-clean-submit {
  background: #c52a33;
  border: 1px solid #e63946;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 10px 24px;
  min-height: 44px;
  border-radius: 9999px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.btn-clean-submit:hover:not(:disabled) {
  background: #d8313b;
  transform: translateY(-1px);
}

.success-alert {
  color: #10b981;
  font-size: 0.88rem;
  font-weight: 600;
}

@media (max-width: 576px) {
  .contact-info-panel,
  .contact-form-panel {
    padding: 22px 18px !important;
  }
  .contact-direct-card {
    padding: 10px 12px !important;
  }
  .btn-clean-submit {
    width: 100%;
    justify-content: center;
  }
}
</style>
