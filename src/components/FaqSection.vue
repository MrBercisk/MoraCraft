<template>
  <section id="faq" class="studio-section py-5 position-relative">
    <div class="container py-lg-4">
      <!-- Section Header -->
      <div class="row justify-content-between align-items-end mb-5">
        <div class="col-lg-6">
          <div class="section-kicker mb-2">Pertanyaan yang Sering Diajukan</div>
          <h2 class="section-heading text-white">
            Kejelasan Mengenai Proses, Ruang Lingkup &amp; Serah Terima.
          </h2>
        </div>
        <div class="col-lg-5 mt-3 mt-lg-0">
          <p class="section-lead text-secondary mb-0">
            Jawaban transparan mengenai kontrak, kepemilikan repositori kode, jadwal milestone, dan garansi pasca-deployment.
          </p>
        </div>
      </div>

      <!-- FAQ Accordion List -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="d-flex flex-column gap-3">
            <div 
              v-for="(item, index) in faqs" 
              :key="index"
              class="faq-box"
              :class="{ 'is-expanded': activeIndex === index }"
            >
              <button 
                class="faq-header-btn w-100 text-start p-4 d-flex align-items-center justify-content-between"
                @click="toggleFaq(index)"
                :aria-expanded="activeIndex === index"
              >
                <span class="faq-question text-white fw-bold">{{ item.q }}</span>
                <span class="faq-icon-symbol">{{ activeIndex === index ? '−' : '+' }}</span>
              </button>
              <div v-show="activeIndex === index" class="faq-body-content px-4 pb-4">
                <p class="faq-answer-text mb-0 line-height-relaxed">{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const faqs = [
  {
  q: 'Berapa biaya pembuatan website?',
  a: 'Biaya pembuatan website menyesuaikan dengan kebutuhan dan tingkat kompleksitas proyek. Website company profile sederhana tentu memiliki kebutuhan yang berbeda dengan website booking, marketplace, dashboard, atau aplikasi dengan fitur khusus. Setelah kami memahami kebutuhan Anda, kami akan memberikan penawaran dan rincian ruang lingkup pekerjaan secara jelas.'
  },

  {
  q: 'Berapa lama proses pembuatan website?',
  a: 'Waktu pengerjaan tergantung pada jenis dan kompleksitas website. Website sederhana biasanya dapat diselesaikan lebih cepat, sedangkan website dengan fitur khusus, sistem dashboard, integrasi pembayaran, atau kebutuhan backend membutuhkan waktu yang lebih panjang. Estimasi timeline akan kami diskusikan sebelum proyek dimulai.'
  },

  {
  q: 'Apakah saya bisa meminta desain website sesuai brand bisnis saya?',
  a: 'Tentu. Setiap website dirancang menyesuaikan identitas dan kebutuhan bisnis Anda. Kami dapat menyesuaikan warna, gaya visual, struktur halaman, hingga pengalaman pengguna agar website terasa lebih relevan dengan brand Anda dan tidak terlihat seperti template generik.'
  },

  {
  q: 'Apakah website saya akan bisa dibuka dengan baik di HP?',
  a: 'Ya. Website yang kami bangun dirancang responsif sehingga dapat digunakan dengan nyaman di desktop, tablet, maupun smartphone. Kami memperhatikan tampilan, navigasi, dan pengalaman pengguna di berbagai ukuran layar.'
  },

  {
  q: 'Apakah saya mendapatkan akses dan kepemilikan penuh setelah website selesai?',
  a: 'Ya. Setelah proyek dan pembayaran diselesaikan sesuai kesepakatan, Anda akan mendapatkan akses ke website dan aset proyek yang telah disepakati. Kami tidak menerapkan biaya lisensi tersembunyi atau membuat Anda terikat untuk menggunakan layanan kami selamanya.'
  },

  {
  q: 'Apakah Anda bisa membantu domain dan hosting?',
  a: 'Bisa. Kami dapat membantu proses pemilihan domain, hosting, hingga deployment website agar website siap digunakan secara online. Jika Anda sudah memiliki domain atau hosting sendiri, kami juga dapat menyesuaikan dengan layanan yang sudah Anda gunakan.'
  },

  {
  q: 'Apakah saya bisa request fitur khusus untuk website?',
  a: 'Tentu. Kami dapat membangun fitur sesuai kebutuhan bisnis, seperti sistem booking, dashboard admin, katalog produk, formulir khusus, integrasi WhatsApp, payment gateway, API, dan berbagai kebutuhan lainnya. Fitur akan dibahas terlebih dahulu agar solusi yang dibuat benar-benar sesuai kebutuhan.'
  },

  {
  q: 'Apakah ada revisi selama proses pengerjaan?',
  a: 'Ya. Revisi dapat dilakukan sesuai tahapan dan ruang lingkup yang telah disepakati. Kami akan berkomunikasi selama proses pengerjaan agar arah desain dan pengembangan tetap sesuai dengan kebutuhan Anda.'
  },

  {
  q: 'Apakah website mendapatkan garansi setelah selesai?',
  a: 'Ya. Kami menyediakan masa garansi untuk perbaikan bug atau masalah teknis yang berkaitan dengan hasil pekerjaan. Detail durasi dan cakupan garansi akan dijelaskan dalam kesepakatan proyek sebelum pengerjaan dimulai.'
  },

  {
  q: 'Bagaimana cara memulai kerja sama?',
  a: 'Anda cukup menghubungi kami dan menjelaskan gambaran kebutuhan website Anda. Jika masih belum yakin dengan kebutuhan teknisnya, tidak masalah. Kami dapat membantu mendiskusikan tujuan bisnis, fitur yang dibutuhkan, dan solusi website yang paling sesuai sebelum proyek dimulai.'
  }
]


const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.studio-section {
  background-color: #0c0d13;
}

.section-kicker {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #e63946;
}

.section-heading {
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.section-lead {
  font-size: 1rem;
  line-height: 1.65;
}

.faq-box {
  background: #11131a;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.faq-box.is-expanded {
  background: #13151f;
  border-color: rgba(255, 255, 255, 0.16);
}

.faq-header-btn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.faq-question {
  font-size: 1rem;
  padding-right: 15px;
}

.faq-answer-text {
  font-size: 0.94rem;
  color: #94a3b8;
  line-height: 1.65;
}

.faq-icon-symbol {
  color: #e63946;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1;
  flex-shrink: 0;
}

.line-height-relaxed {
  line-height: 1.65;
}

@media (max-width: 576px) {
  .faq-header-btn {
    padding: 16px 16px !important;
    min-height: 48px;
  }
  .faq-question {
    font-size: 0.95rem;
  }
  .faq-answer-text {
    font-size: 0.9rem;
  }
  .faq-body-content {
    padding-left: 16px !important;
    padding-right: 16px !important;
    padding-bottom: 16px !important;
  }
}
</style>
