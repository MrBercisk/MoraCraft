export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: 'ui-ux' | 'website' | 'application' | string;
  url: string;
  link?: string;
  behanceUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
  tagline?: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tech: string[];
  deliverables?: string[];
  year?: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 101,
    slug: "rentify-vehicle-rental-app",
    title: "Rentify - Vehicle Rental App UI Design",
    category: "UI/UX Design",
    type: "ui-ux",
    featured: true,
    tagline: "Antarmuka Aplikasi Rental Kendaraan Fleksibel & Terintegrasi",
    behanceUrl: "https://www.behance.net/gallery/239405501/Rentify-Vehicle-Rental-App-UI-Design",
    url: "/assets/img/portfolio/ss_rentify.webp",
    description:
      "Desain UI/UX aplikasi rental kendaraan modern dengan alur pencarian armada mobil, perbandingan spesifikasi, filter lokasi, dan proses checkout pemesanan yang mulus.",
    longDescription:
      "Rentify dirancang untuk menyelesaikan friksi umum dalam proses sewa mobil konvensional. Melalui antarmuka visual yang modern dan terstruktur, calon penyewa dapat menelusuri armada mobil berdasarkan kapasitas penumpang, tipe transmisi, opsi lepas kunci atau dengan pengemudi, serta rincian tarif transparan tanpa biaya tersembunyi.",
    features: [
      "Pencarian & filter multi-parameter (transmisi, kapasitas tempat duduk, bahan bakar)",
      "Halaman spesifikasi kendaraan interaktif dengan galeri foto visual resolusi tinggi",
      "Kalender pemilihan tanggal sewa terintegrasi dengan opsi penjemputan lokasi armada",
      "Sistem checkout cepat dengan konfirmasi instan dan digital voucher siap pakai"
    ],
    tech: ["Figma", "UI/UX Design", "Design System", "Mobile App", "Prototyping"],
    deliverables: ["User Research", "Wireframing", "High-Fidelity UI", "Interactive Prototype"],
    year: "2025"
  },
  {
    id: 102,
    slug: "grocery-app-redesign",
    title: "Grocery App Redesign",
    category: "UI/UX Design",
    type: "ui-ux",
    featured: true,
    tagline: "Pengalaman Belanja Kebutuhan Harian Lebih Cepat & Terstruktur",
    behanceUrl: "https://www.behance.net/gallery/241955567/Grocery-App-Redesign",
    url: "/assets/img/portfolio/ss_grocery.webp",
    description:
      "Redesain antarmuka aplikasi belanja kebutuhan harian dan sembako online, memprioritaskan navigasi cepat, kategori bahan segar, keranjang belanja intuitif, dan alur checkout instan.",
    longDescription:
      "Proyek redesain ini berfokus pada efisiensi berbelanja sembako dan produk pangan segar di perangkat mobile. Dengan restrukturisasi hierarki informasi visual dan pengelompokan kategori yang intuitif, waktu penyelesaian pesanan pengguna dapat dipersingkat secara signifikan tanpa membingungkan konsumen pemula.",
    features: [
      "Arsitektur navigasi satu tangan (thumb-friendly) untuk belanja cepat saat mobilitas tinggi",
      "Indikator kesegaran produk, ulasan kualitas, & estimasi stok real-time",
      "Smart floating cart dengan kalkulasi otomatis diskon voucher & ongkir",
      "Fitur 'Beli Ulang Cepat' (One-Tap Reorder) untuk kebutuhan pokok langganan mingguan"
    ],
    tech: ["Figma", "Mobile UI/UX", "User Research", "Prototyping", "UI Kit"],
    deliverables: ["Competitive Audit", "Information Architecture", "Mobile UI Screens", "Micro-interactions"],
    year: "2026"
  },
  {
    id: 103,
    slug: "breeza-smart-fan-control",
    title: "Breeza - Smart Fan Control Experience",
    category: "UI/UX Design",
    type: "ui-ux",
    featured: true,
    tagline: "Kontrol IoT Cerdas untuk Kenyamanan Udara Rumah Modern",
    behanceUrl: "https://www.behance.net/gallery/247572001/Breeza-Designing-a-Smart-Fan-Control-Experience",
    url: "/assets/img/portfolio/ss_breeza.webp",
    description:
      "Eksplorasi antarmuka IoT smart home untuk kontrol kipas angin pintar jarak jauh, pengaturan kecepatan presisi dial, mode hembusan alami, timer tidur, dan monitoring temperatur real-time.",
    longDescription:
      "Breeza menghadirkan pengalaman interaksi digital yang intuitif untuk perangkat keras rumah pintar. Menggabungkan kontrol kenop putar (circular dial) dengan sensor lingkungan ruangan, pengguna dapat menyesuaikan sirkulasi udara dan suasana ruangan cukup dengan satu sentuhan jari di smartphone.",
    features: [
      "Interactive circular dial untuk pengaturan kecepatan hembusan angin 0-100% yang presisi",
      "Live monitoring indikator suhu & kelembapan udara ruangan secara real-time",
      "Smart Preset Modes: Natural Breeze, Sleep Mode, Turbo Cooling & Eco Energy Saver",
      "Otomatisasi jadwal operasional cerdas berdasarkan waktu dan suhu lingkungan sekitar"
    ],
    tech: ["Figma", "IoT Experience", "Smart Home UI", "Micro-interactions", "Prototyping"],
    deliverables: ["Hardware-Software Interaction Flow", "Component Library", "Motion Specs", "Dark Mode UI"],
    year: "2026"
  },
  {
    id: 104,
    slug: "quickbite-food-delivery-app",
    title: "QuickBite - Food Delivery App",
    category: "UI/UX Design",
    type: "ui-ux",
    featured: false,
    tagline: "Pesan Makanan Favorit Lebih Cepat dengan Pelacakan Presisi",
    behanceUrl: "https://www.behance.net/gallery/232691485/Food-Delivery-App-QuickBite",
    url: "/assets/img/portfolio/ss_quickbite.webp",
    description:
      "Konsep desain UI/UX aplikasi pesan antar makanan cepat saji dengan pelacakan kurir real-time, rekomendasi menu personal, dan integrasi ulasan kuliner.",
    longDescription:
      "QuickBite dirancang untuk para penikmat kuliner perkotaan yang mendambakan pemesanan santapan lezat tanpa hambatan. Alur visual difokuskan pada fotografi menu beresolusi tinggi, kustomisasi porsi makanan yang jelas, serta status estimasi pengiriman yang akurat.",
    features: [
      "Tampilan katalog visual dengan filter kategori kuliner, jarak terdekat, & promo aktif",
      "Kustomisasi menu detail (ekstra topping, tingkat kepedasan, instruksi koki)",
      "Live map tracking rute pergerakan kurir secara interaktif dari dapur hingga depan pintu",
      "Sistem ulasan makanan berbasis komunitas lengkap dengan rating hidangan dan foto pelanggan"
    ],
    tech: ["Figma", "Food Delivery UI", "Mobile App", "UI Kit", "Design System"],
    deliverables: ["User Journey Mapping", "Wireframes", "High-Fi App Mockup", "Design System"],
    year: "2025"
  },
  {
    id: 105,
    slug: "flixtime-movie-ticket-booking",
    title: "FlixTime - Movie Ticket Booking App",
    category: "UI/UX Design",
    type: "ui-ux",
    featured: false,
    tagline: "Pemesanan Tiket Bioskop & Denah Kursi Interaktif",
    behanceUrl: "https://www.behance.net/gallery/232934497/Movie-Ticket-Booking-App-FlixTime",
    url: "/assets/img/portfolio/ss_flixtime.webp",
    description:
      "Desain aplikasi pemesanan tiket bioskop modern dengan pemilihan kursi interaktif secara visual, trailer film in-app, jadwal tayang studio, dan e-ticket digital.",
    longDescription:
      "FlixTime menyederhanakan pengalaman menonton di layar bioskop langsung dari genggaman ponsel. Pengguna dapat menyeleksi bioskop terdekat, menonton cuplikan trailer resmi dalam aplikasi, memilih deretan kursi terbaik secara visual, hingga memesan paket kudapan bioskop dalam satu transaksi mulus.",
    features: [
      "Peta denah kursi studio interaktif dengan pembagian kategori jelas (VIP, Reguler, Couple)",
      "In-app trailer player, sinopsis lengkap, skor ulasan kritikus, dan jajaran pemeran film",
      "Pemesanan paket camilan bioskop (popcorn & beverage combo) saat sesi checkout",
      "QR Code E-ticket digital otomatis untuk pemindaian langsung tanpa antre di mesin cetak fisik"
    ],
    tech: ["Figma", "Entertainment UI", "Interactive Seating", "Design System", "Mobile App"],
    deliverables: ["Experience Flowchart", "Interactive Prototype", "UI Design Tokens", "Cinema Portal UI"],
    year: "2025"
  },
  {
    id: 106,
    slug: "mamongs-bedsheet-company-profile",
    title: "Mamongs Bedsheet - Company Profile Website",
    category: "UI/UX Design",
    type: "website",
    featured: false,
    tagline: "Presentasi Brand Tekstil & Sprei Premium Berkarakter Hangat",
    behanceUrl: "https://www.behance.net/gallery/233626743/Company-Profile-Website-Design-Mamongs-Bedsheet",
    url: "/assets/img/portfolio/ss_mamong.webp",
    description:
      "Desain website profil perusahaan & katalog produk sprei premium dengan visual estetik bernuansa nyaman, storytelling bahan kain berkualitas, dan integrasi pemesanan WhatsApp.",
    longDescription:
      "Mamongs Bedsheet membutuhkan representasi digital yang merefleksikan kelembutan, kenyamanan, dan standar mutu tinggi dari produk perlengkapan tidur. Tata letak web menggabungkan tata fotografi lifestyle yang menenangkan, panduan ukuran ranjang, dan jalur konsultasi pemesanan yang ramah konsumen.",
    features: [
      "Tata letak editorial elegan dengan tipografi kontras tinggi yang menenangkan",
      "Showcase katalog motif sprei, spesifikasi kain katun Jepang, dan seri linen premium",
      "Panduan ukuran kasur interaktif (Single, Queen, King, Super King)",
      "Integrasi tombol pemesanan cepat dan konsultasi langsung ke customer care WhatsApp"
    ],
    tech: ["Figma", "Web Design", "Responsive Layout", "E-Commerce Showcase", "Design System"],
    deliverables: ["Desktop & Mobile Layouts", "Brand Typography Pairing", "Product Catalog Grid", "Figma Components"],
    year: "2025"
  },

  // --- WEB DEVELOPMENT & APPLICATION PROJECTS ---
  {
    id: 26,
    slug: "car-rental-admin-dashboard",
    title: "Car Rental with Admin Dashboard",
    category: "Rental",
    type: "website",
    url: "/assets/img/portfolio/ss_rentalpg.webp",
    link: "https://morarent.codemora.my.id/",
    description:
      "Vehicle rental management platform with an administrative dashboard for fleet control, reservation booking, and DOKU payment gateway integration.",
    longDescription:
      "Platform rental armada mobil lengkap dengan portal booking publik dan panel administrasi Filament untuk memonitor ketersediaan unit, status kontrak sewa, verifikasi berkas penyewa, dan integrasi payment gateway DOKU.",
    tech: [
      "Laravel",
      "Filament",
      "Payment Gateway (Doku)",
      "React",
      "TypeScript",
      "MySQL",
      "Tailwind",
    ],
    features: [
      "Dasbor administrasi armada & kalender jadwal sewa",
      "Integrasi payment gateway DOKU aman & otomatis",
      "Pemeriksaan ketersediaan mobil secara real-time",
      "Penerbitan bukti invoice transaksi digital"
    ],
    year: "2024"
  },
  {
    id: 27,
    slug: "ketemu-second-marketplace",
    title: "Ketemu Second",
    category: "Marketplace",
    type: "website",
    url: "/assets/img/portfolio/ketemu_second_ss.png",
    link: "https://ketemusecond.codemora.my.id/",
    description:
      "Vintage & thrift fashion marketplace featuring shopping cart workflows, Midtrans payment gateway checkout, coupon discount engine, and wishlist.",
    longDescription:
      "Marketplace fashion thrift & preloved dengan pengalaman belanja modern. Dilengkapi sistem keranjang belanja interaktif, kupon diskon dinamis, wishlist koleksi favorit, dan alur pembayaran Midtrans.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Payment Gateway (Midtrans)",
    ],
    features: [
      "Katalog pakaian vintage dengan kurasi kondisi barang",
      "Checkout otomatis terintegrasi Midtrans SNAP",
      "Sistem kupon promosi & kalkulasi ongkir ekspedisi",
      "Daftar wishlist produk incaran pelanggan"
    ],
    year: "2024"
  },
  {
    id: 28,
    slug: "kyumora-massage-service",
    title: "Kyumora Massage",
    category: "Service",
    type: "website",
    url: "/assets/img/portfolio/ss_kyumora.webp",
    link: "https://kyumora.com/",
    description:
      "On-demand massage service website with service catalogs, online booking, therapist information, service areas, and customer contact features.",
    longDescription:
      "Website reservasi layanan pijat dan kebugaran on-demand dengan katalog paket relaksasi, profil terapis profesional, cakupan wilayah layanan, serta alur kontak booking instan.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "MySQL",
    ],
    features: [
      "Katalog paket pijat refleksi & relaksasi tubuh",
      "Formulir reservasi jadwal & pemilihan alamat terapis",
      "Integrasi peta cakupan area panggilan rumah",
      "Direct chat pemesanan ke WhatsApp Customer Support"
    ],
    year: "2024"
  },
  {
    id: 17,
    slug: "cleanbox-laundry",
    title: "CleanBox Laundry",
    category: "Service",
    type: "website",
    url: "/assets/img/portfolio/ss_cleanbox.webp",
    link: "https://cleanbox-laundry.vercel.app/",
    description:
      "On-demand laundry service landing page with streamlined ordering steps, tiered pricing schedules, and clear pickup & delivery logistics.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Kalkulator perkiraan biaya laundry kiloan & satuan",
      "Panduan alur jemput dan antar cucian",
      "Desain antarmuka cepat dengan performa SEO tinggi"
    ],
    year: "2024"
  },
  {
    id: 12,
    slug: "cafe-omah-joglo",
    title: "Cafe Omah Joglo",
    category: "F&B",
    type: "website",
    url: "/assets/img/portfolio/ss_coffee.webp",
    link: "https://omah-joglo-coffee.vercel.app/",
    description:
      "Authentic cafe showcase website with interactive menu catalogs, spatial ambiance galleries, and location details to engage new visitors.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Katalog hidangan kopi nusantara dan kuliner khas",
      "Galeri foto suasana joglo tradisional beresolusi tinggi",
      "Integrasi Google Maps untuk rute kedatangan pengunjung"
    ],
    year: "2024"
  },
  {
    id: 13,
    slug: "rental-koperasi-dashboard",
    title: "Rental Koperasi with Admin Dashboard",
    category: "Rental",
    type: "website",
    url: "/assets/img/portfolio/ss_smsrent.webp",
    link: "https://smsrental.vercel.app/",
    description:
      "Cooperative equipment rental platform featuring a comprehensive admin dashboard to oversee inventory, rental contracts, and unit statuses.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    features: [
      "Manajemen inventaris perlengkapan koperasi secara terstruktur",
      "Pencatatan jatuh tempo pengembalian dan denda sewa",
      "Database realtime menggunakan Supabase"
    ],
    year: "2024"
  },
  {
    id: 2,
    slug: "heritage-medical-clinic",
    title: "Heritage Medical Clinic",
    category: "Healthcare",
    type: "website",
    url: "/assets/img/portfolio/ss_heritage.webp",
    link: "https://heritage-clinic.vercel.app/",
    description:
      "Healthcare clinic portal featuring medical service overviews, doctor duty rosters, and direct patient appointment consultation forms.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Jadwal praktek dokter spesialis & umum",
      "Formulir pendaftaran janji temu pasien digital",
      "Informasi fasilitas medis dan asuransi rekanan"
    ],
    year: "2024"
  },
  {
    id: 8,
    slug: "cravora-bakery-pastry",
    title: "Cravora Bakery & Pastry with Admin Dashboard",
    category: "E-Commerce",
    type: "website",
    url: "/assets/img/portfolio/ss_cravora.webp",
    link: "https://cravora.my.id/",
    description:
      "Artisan bakery and pastry e-commerce storefront with product catalogs, dynamic carts, and a Filament admin panel for order fulfillment.",
    tech: ["Vue.js", "Laravel", "Filament", "MySQL", "Bootstrap"],
    features: [
      "Katalog produk roti & pastry segar harian",
      "Sistem pemesanan pre-order untuk kue ulang tahun",
      "Panel admin Filament untuk manajemen stok & pesanan masuk"
    ],
    year: "2024"
  },
  {
    id: 10,
    slug: "pos-ikrom-sidoarjo",
    title: "POS Ikrom Sidoarjo",
    category: "Inventory & POS",
    type: "application",
    url: "/assets/img/portfolio/ss_posikrom.webp",
    link: "https://kantin-pos.codemora.my.id/admin/login",
    description:
      "Point of Sale application for school canteens and retail shops with barcode scanning, stock tracking, cashier checkout, and sales analytics.",
    tech: ["Laravel", "Filament", "Livewire", "MySQL"],
    features: [
      "Pencatatan kasir barcode scanner berkecepatan tinggi",
      "Laporan omzet penjualan harian, mingguan, & bulanan",
      "Peringatan dini stok menipis (low-stock warning)"
    ],
    year: "2024"
  },
  {
    id: 14,
    slug: "ota-data-management",
    title: "OTA Data Management",
    category: "Management Data",
    type: "application",
    url: "/assets/img/portfolio/ss_otamonitor.webp",
    link: "https://ota.codemora.my.id",
    description:
      "Centralized flight operations and station data monitoring platform coordinating multi-airport schedules in one unified dashboard.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "Monitoring operasional stasiun penerbangan multi-bandara",
      "Koordinasi data jadwal dan manifest penerbangan terpusat",
      "Log pelaporan insiden & ketepatan waktu on-time performance"
    ],
    year: "2024"
  },
  {
    id: 15,
    slug: "drip-coffee-shop",
    title: "Drip Coffee",
    category: "F&B",
    type: "website",
    url: "/assets/img/portfolio/ss_drip.webp",
    link: "https://drip-coffee-shop.vercel.app/",
    description:
      "Specialty coffee shop web application highlighting signature brewing menus, brand story, and outlet locations across all devices.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: 21,
    slug: "ryostore-fish-it-market",
    title: "RyoStore Fish It Market",
    category: "Marketplace",
    type: "application",
    url: "/assets/img/portfolio/ss_ocean.webp",
    link: "https://ryo-store.vercel.app/",
    description:
      "Digital gaming marketplace for trading virtual in-game items with structured product listings, shopping cart, and intuitive checkout.",
    tech: ["React.js", "Supabase", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: 22,
    slug: "archvision-architect-studio",
    title: "Archvision Architect Studio",
    category: "Company Profile",
    type: "website",
    url: "/assets/img/portfolio/ss_arcvision.webp",
    link: "https://achvision.vercel.app/",
    description:
      "Architecture studio company profile presenting architectural project portfolios with high-res photo galleries and clean typography.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: 23,
    slug: "lpk-hinode",
    title: "LPK Hinode",
    category: "Company Profile",
    type: "website",
    url: "/assets/img/portfolio/ss_lpk.webp",
    link: "https://lpk-hinode.vercel.app/",
    description:
      "Vocational training institute website featuring course curricula, training batch calendars, and online candidate registration.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: 24,
    slug: "kingswood-corporate-profile",
    title: "Kingswood",
    category: "Company Profile",
    type: "website",
    url: "/assets/img/portfolio/kingswood.webp",
    link: "https://kingswood-theta.vercel.app/",
    description:
      "Corporate business profile with sleek layout, presenting corporate consulting services and enterprise brand credibility.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: 25,
    slug: "donor-darah-sistem",
    title: "Donor Darah Sistem",
    category: "Web Application",
    type: "application",
    url: "/assets/img/portfolio/ss_donordarah.webp",
    link: "https://donor-darah.codemora.my.id/",
    description:
      "Digital blood donation management system for registering blood donors, publishing donation events, and logging donor histories.",
    tech: ["Codeigniter", "MySQL", "Bootstrap"],
    year: "2023"
  },
  {
    id: 16,
    slug: "edelweis-florist",
    title: "Edelweis Florist",
    category: "F&B",
    type: "website",
    url: "/assets/img/portfolio/ss_edelweis.webp",
    link: "https://edelweis-florist.vercel.app/",
    description:
      "Online florist website featuring hand-tied bouquet catalogs, bespoke custom flower arrangement requests, and nationwide delivery details.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    year: "2024"
  },
  {
    id: 20,
    slug: "visitor-management-system",
    title: "Visitor Management System",
    category: "Enterprise Solution",
    type: "application",
    url: "/assets/img/portfolio/ss_vms.webp",
    link: "https://smart-vms.codemora.my.id/checkin",
    description:
      "Corporate visitor management system for digital guest registration, identity verification, and logging with QR Code fast check-in access.",
    tech: ["React.js", "Laravel", "MySQL"],
    year: "2024"
  },
  {
    id: 6,
    slug: "kulinerku-directory",
    title: "Kulinerku",
    category: "F&B",
    type: "website",
    url: "/assets/img/portfolio/ss_kulinerku.webp",
    isPrivate: true,
    description:
      "Local culinary directory platform connecting food enthusiasts with verified dining spots, menu specials, and community food recommendations.",
    tech: ["Codeigniter", "Bootstrap", "MySQL"],
    year: "2023"
  },

  {
    id: 3,
    slug: "siamang-kominfo-yogya",
    title: "Sistem Informasi Aplikasi Magang (Kominfo Yogya)",
    category: "Government",
    type: "application",
    url: "/assets/img/portfolio/ss_siamang.webp",
    isPrivate: true,
    description:
      "Government agency internship management platform covering digital student intake, department placement, and municipal evaluation.",
    tech: ["Codeigniter", "MySQL", "Bootstrap"],
    year: "2023"
  },

  {
    id: 11,
    slug: "al-hawari-finance",
    title: "Al-Hawari Finance",
    category: "Education",
    type: "application",
    url: "/assets/img/portfolio/ss_alirsyad.webp",
    isPrivate: true,
    description:
      "Educational institution financial administration system for recording student tuition fees, operational disbursements, and balance reports.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    year: "2023"
  },
];
