export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageType?: string;
  extra?: any;
  year?: string;
  role?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  architecture?: {
    nodes: { label: string; subLabel?: string; icon?: string }[];
  };
  gallery?: string[];
}

export const projects: Project[] = [
  {
    "id": "1",
    "slug": "aduanku-website-pengaduan-masyarakat-chatbot",
    "title": "Aduanku",
    "description": "Website pengaduan masyarakat untuk membuat laporan, memantau status pengaduan, dan mendapatkan bantuan melalui chatbot.",
    "category": "Website",
    "technologies": ["Laravel", "MySQL", "JavaScript", "Chatbot API"],
    "imageType": "dashboard-light",
    "year": "2025",
    "role": "Full Stack Developer",
    "overview": "Aduanku adalah website pengaduan masyarakat yang dirancang untuk memudahkan pengguna menyampaikan laporan mengenai permasalahan di lingkungan sekitar. Pengguna dapat membuat laporan dan memantau perkembangan atau status pengaduan melalui sistem.",
    "problem": "Masyarakat sering mengalami kesulitan dalam menyampaikan laporan mengenai permasalahan di lingkungan sekitar karena proses pelaporan yang tidak terpusat dan kurang transparan dalam memberikan informasi mengenai perkembangan laporan.",
    "solution": "Aduanku menyediakan platform pelaporan berbasis web yang memungkinkan pengguna membuat laporan secara lebih terstruktur, memantau status pengaduan, serta mendapatkan bantuan melalui integrasi chatbot.",
    "keyFeatures": [
      {
        "title": "Pembuatan Pengaduan",
        "description": "Pengguna dapat membuat dan mengirimkan laporan mengenai permasalahan yang ditemukan."
      },
      {
        "title": "Monitoring Status",
        "description": "Pengguna dapat memantau perkembangan dan status dari laporan yang telah dibuat."
      },
      {
        "title": "Chatbot Assistance",
        "description": "Chatbot membantu pengguna memperoleh informasi dan panduan saat menggunakan sistem."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Web Client", "subLabel": "(Browser)" },
        { "label": "Application Server", "subLabel": "(Laravel)" },
        { "label": "Database", "subLabel": "(MySQL)" }
      ]
    },
    "gallery": [
      "/assets/Aduanku.png"
    ]
  },
  {
    "id": "2",
    "slug": "berasa-aplikasi-donasi-makanan-minuman",
    "title": "Berasa",
    "description": "Aplikasi mobile untuk menghubungkan pihak yang memiliki makanan berlebih dengan pihak yang membutuhkan.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "Berasa adalah aplikasi mobile yang berfokus pada donasi makanan dan minuman layak konsumsi. Aplikasi membantu mempertemukan pihak yang ingin mendonasikan makanan dengan pihak yang membutuhkan.",
    "problem": "Banyak makanan dan minuman layak konsumsi berpotensi terbuang, sementara di sisi lain masih terdapat pihak yang membutuhkan bantuan makanan.",
    "solution": "Berasa menyediakan platform mobile yang memudahkan pengguna membuat informasi donasi dan menghubungkan makanan yang tersedia dengan calon penerima.",
    "keyFeatures": [
      {
        "title": "Donasi Makanan",
        "description": "Pengguna dapat membuat informasi mengenai makanan atau minuman yang ingin didonasikan."
      },
      {
        "title": "Informasi Donasi",
        "description": "Pengguna dapat melihat informasi mengenai donasi yang tersedia."
      },
      {
        "title": "Manajemen Akun",
        "description": "Sistem autentikasi memungkinkan pengguna mengelola akun dan aktivitas donasi."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "Firebase Services", "subLabel": "(Auth & Firestore)" },
        { "label": "Cloud Database", "subLabel": "(Cloud Firestore)" }
      ]
    },
    "gallery": [
      "/assets/berasa.png"
    ]
  },
  {
    "id": "3",
    "slug": "blockfind-website-komunitas-game-sesuai-mood",
    "title": "blockFind",
    "description": "Platform komunitas Roblox untuk menemukan rekomendasi game berdasarkan mood dan preferensi pengguna.",
    "category": "Website",
    "technologies": ["React JS", "Tailwind CSS", "Node.js", "MongoDB"],
    "imageType": "dashboard-wide",
    "year": "2025",
    "role": "Full Stack Developer",
    "overview": "blockFind adalah website komunitas game bertema Roblox yang membantu pengguna menemukan rekomendasi game berdasarkan mood, kategori, dan preferensi bermain.",
    "problem": "Pemain sering kesulitan menentukan game yang sesuai dengan suasana hati atau jenis pengalaman bermain yang mereka inginkan.",
    "solution": "blockFind menyediakan sistem rekomendasi dan eksplorasi game berdasarkan mood dan kategori sehingga pengguna dapat menemukan game yang lebih sesuai dengan preferensinya.",
    "keyFeatures": [
      {
        "title": "Rekomendasi Berdasarkan Mood",
        "description": "Pengguna dapat menemukan rekomendasi game berdasarkan suasana hati atau mood."
      },
      {
        "title": "Eksplorasi Kategori",
        "description": "Game dapat ditemukan berdasarkan kategori dan jenis pengalaman bermain."
      },
      {
        "title": "Platform Komunitas",
        "description": "Website menjadi wadah untuk mengeksplorasi dan menemukan informasi seputar game Roblox."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Frontend", "subLabel": "(React JS + Tailwind)" },
        { "label": "Backend API", "subLabel": "(Node.js)" },
        { "label": "Database", "subLabel": "(MongoDB)" }
      ]
    },
    "gallery": [
      "/assets/BlockFind.png"
    ]
  },
  {
    "id": "4",
    "slug": "cekgiziku-aplikasi-cek-gizi-ai",
    "title": "CekGiziku",
    "description": "Aplikasi mobile berbasis AI untuk membantu pengguna memperoleh informasi dan analisis kandungan gizi makanan.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase", "AI Model", "Cloud Firestore"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "CekGiziku adalah aplikasi mobile yang memanfaatkan teknologi Artificial Intelligence untuk membantu pengguna mendapatkan informasi mengenai makanan dan kandungan gizinya.",
    "problem": "Pengguna sering kesulitan mengetahui informasi gizi makanan secara cepat dan membutuhkan cara yang lebih praktis untuk memperoleh informasi tersebut.",
    "solution": "CekGiziku memanfaatkan teknologi AI untuk mendukung proses analisis makanan dan menyajikan informasi gizi melalui aplikasi mobile.",
    "keyFeatures": [
      {
        "title": "Analisis Makanan",
        "description": "Makanan dapat dianalisis menggunakan fitur berbasis AI."
      },
      {
        "title": "Informasi Gizi",
        "description": "Aplikasi menampilkan informasi mengenai kandungan atau nilai gizi makanan."
      },
      {
        "title": "Riwayat Analisis",
        "description": "Pengguna dapat menyimpan dan melihat kembali hasil analisis sebelumnya."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "AI Processing", "subLabel": "(AI Model)" },
        { "label": "Cloud Services", "subLabel": "(Firebase)" }
      ]
    },
    "gallery": [
      "/assets/CekGiziku.png"
    ]
  },
  {
    "id": "5",
    "slug": "diary-app-analisis-mood-harian",
    "title": "Diary App",
    "description": "Aplikasi diary digital dengan fitur pencatatan aktivitas dan analisis mood harian.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase Authentication", "Cloud Firestore"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "Diary App adalah aplikasi mobile untuk mencatat aktivitas, pengalaman, dan perasaan pengguna dalam bentuk diary digital dengan dukungan pencatatan serta analisis mood.",
    "problem": "Pengguna sering tidak menyadari pola emosi atau perubahan mood yang terjadi dalam aktivitas sehari-hari.",
    "solution": "Aplikasi menyediakan media pencatatan diary yang terorganisir serta fitur untuk membantu pengguna melihat dan memahami pola mood berdasarkan catatan harian.",
    "keyFeatures": [
      {
        "title": "Diary Harian",
        "description": "Pengguna dapat membuat dan menyimpan catatan harian."
      },
      {
        "title": "Pencatatan Mood",
        "description": "Pengguna dapat mencatat kondisi atau mood yang dirasakan."
      },
      {
        "title": "Riwayat Diary",
        "description": "Catatan sebelumnya dapat dilihat kembali secara terorganisir."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "Authentication", "subLabel": "(Firebase Auth)" },
        { "label": "Cloud Database", "subLabel": "(Cloud Firestore)" }
      ]
    },
    "gallery": [
      "/assets/DiaryApp.png"
    ]
  },
  {
    "id": "6",
    "slug": "komga-website-komunitas-olahraga",
    "title": "KOMGA",
    "description": "Website komunitas olahraga untuk membantu pengguna menemukan teman bermain dan bergabung dengan komunitas.",
    "category": "Website",
    "technologies": ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    "imageType": "dashboard-light",
    "year": "2025",
    "role": "Full Stack Developer",
    "overview": "KOMGA adalah website komunitas olahraga yang dirancang untuk membantu pengguna menemukan teman bermain, komunitas, serta aktivitas olahraga berdasarkan minat.",
    "problem": "Banyak orang ingin melakukan aktivitas olahraga tetapi mengalami kesulitan menemukan teman bermain atau komunitas yang sesuai.",
    "solution": "KOMGA menyediakan platform komunitas yang membantu pengguna menemukan aktivitas olahraga dan terhubung dengan pengguna lain yang memiliki minat serupa.",
    "keyFeatures": [
      {
        "title": "Cari Teman Bermain",
        "description": "Pengguna dapat menemukan teman untuk melakukan aktivitas olahraga."
      },
      {
        "title": "Komunitas Olahraga",
        "description": "Pengguna dapat menemukan dan bergabung dengan komunitas berdasarkan minat olahraga."
      },
      {
        "title": "Eksplorasi Aktivitas",
        "description": "Informasi aktivitas olahraga dapat ditemukan melalui platform."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Web Client", "subLabel": "(Tailwind + JavaScript)" },
        { "label": "Application Server", "subLabel": "(Laravel)" },
        { "label": "Database", "subLabel": "(MySQL)" }
      ]
    },
    "gallery": [
      "/assets/Komga.png"
    ]
  },
  {
    "id": "7",
    "slug": "kopiapp-ecommerce-kopi-petani-lokal",
    "title": "KopiApp",
    "description": "Aplikasi e-commerce mobile yang membantu mempertemukan petani kopi lokal dengan konsumen.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "KopiApp adalah aplikasi e-commerce berbasis mobile yang menyediakan katalog produk kopi dan mendukung interaksi antara produk dari petani kopi lokal dengan konsumen.",
    "problem": "Petani kopi lokal dapat mengalami keterbatasan dalam menjangkau konsumen secara langsung dan masih bergantung pada rantai distribusi yang panjang.",
    "solution": "KopiApp menyediakan platform mobile untuk menampilkan produk kopi lokal dan memudahkan pengguna menjelajahi serta melakukan pembelian produk.",
    "keyFeatures": [
      {
        "title": "Katalog Produk",
        "description": "Pengguna dapat melihat berbagai produk kopi dari petani lokal."
      },
      {
        "title": "Detail Produk",
        "description": "Setiap produk memiliki informasi yang membantu pengguna sebelum melakukan pembelian."
      },
      {
        "title": "Autentikasi Pengguna",
        "description": "Pengguna dapat memiliki akun untuk mendukung aktivitas dalam aplikasi."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "Firebase Services", "subLabel": "(Authentication)" },
        { "label": "Cloud Database", "subLabel": "(Cloud Firestore)" }
      ]
    },
    "gallery": [
      "/assets/KopiApp.png"
    ]
  },
  {
    "id": "8",
    "slug": "kostmate-aplikasi-manajemen-kost",
    "title": "KostMate",
    "description": "Aplikasi mobile untuk membantu pemilik kost mengelola kamar, penghuni, tagihan, dan pembayaran.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "KostMate adalah aplikasi mobile yang membantu pemilik atau pengelola kost dalam mengatur informasi kamar, penghuni, pembayaran, dan tagihan.",
    "problem": "Pengelolaan kost secara manual dapat menyulitkan pemilik dalam memantau status kamar, penghuni, serta pembayaran secara terorganisir.",
    "solution": "KostMate menyediakan sistem manajemen berbasis mobile untuk membantu proses pencatatan dan pemantauan informasi penting dalam pengelolaan kost.",
    "keyFeatures": [
      {
        "title": "Manajemen Kamar",
        "description": "Pengguna dapat memantau informasi dan status kamar."
      },
      {
        "title": "Data Penghuni",
        "description": "Informasi penghuni dapat dikelola dalam satu sistem."
      },
      {
        "title": "Monitoring Tagihan",
        "description": "Pemilik dapat memantau status tagihan dan pembayaran."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "Authentication", "subLabel": "(Firebase Auth)" },
        { "label": "Cloud Database", "subLabel": "(Cloud Firestore)" }
      ]
    },
    "gallery": [
      "/assets/KostMate.png"
    ]
  },
  {
    "id": "9",
    "slug": "queueease-aplikasi-antrean-digital",
    "title": "QueueEase",
    "description": "Aplikasi antrean digital untuk mengambil nomor antrean dan memantau posisi antrean secara online.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "QueueEase adalah aplikasi antrean digital yang membantu pengguna mengambil nomor antrean secara online dan memantau perkembangan antrean tanpa harus terus menunggu di lokasi.",
    "problem": "Pengguna sering membuang waktu karena harus datang lebih awal dan menunggu antrean secara langsung tanpa mengetahui perkembangan antrean secara real-time.",
    "solution": "QueueEase menyediakan sistem antrean berbasis mobile yang memungkinkan pengguna mengambil nomor antrean dan memantau status serta posisi antrean.",
    "keyFeatures": [
      {
        "title": "Ambil Nomor Antrean",
        "description": "Pengguna dapat mengambil nomor antrean melalui aplikasi."
      },
      {
        "title": "Monitoring Posisi",
        "description": "Posisi dan perkembangan antrean dapat dipantau melalui aplikasi."
      },
      {
        "title": "Status Antrean",
        "description": "Pengguna memperoleh informasi mengenai status antrean yang sedang berlangsung."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "Firebase Services", "subLabel": "(Auth)" },
        { "label": "Real-Time Data", "subLabel": "(Cloud Firestore)" }
      ]
    },
    "gallery": [
      "/assets/QueueEase.png"
    ]
  },
  {
    "id": "10",
    "slug": "schooltour-website-virtual-tour-360-sekolah",
    "title": "schoolTour",
    "description": "Website virtual tour 360 derajat untuk menjelajahi lingkungan sekolah secara interaktif.",
    "category": "Website",
    "technologies": ["Laravel", "JavaScript", "Pannellum", "MySQL", "Tailwind CSS"],
    "imageType": "dashboard-wide",
    "year": "2025",
    "role": "Full Stack Developer",
    "overview": "schoolTour adalah website virtual tour yang memungkinkan calon siswa, orang tua, dan pengunjung menjelajahi lingkungan sekolah melalui panorama 360 derajat dan titik interaktif.",
    "problem": "Calon siswa dan orang tua tidak selalu dapat mengunjungi sekolah secara langsung untuk melihat lingkungan dan fasilitas yang tersedia.",
    "solution": "schoolTour menyediakan pengalaman eksplorasi sekolah secara digital menggunakan teknologi virtual tour 360 derajat yang dapat diakses melalui website.",
    "keyFeatures": [
      {
        "title": "Virtual Tour 360 Derajat",
        "description": "Pengguna dapat menjelajahi berbagai area sekolah melalui panorama 360 derajat."
      },
      {
        "title": "Hotspot Interaktif",
        "description": "Titik interaktif menyediakan informasi tambahan mengenai lokasi atau fasilitas."
      },
      {
        "title": "Informasi Lokasi",
        "description": "Setiap area dapat dilengkapi informasi untuk membantu proses eksplorasi."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Web Client", "subLabel": "(JavaScript + Pannellum)" },
        { "label": "Application Server", "subLabel": "(Laravel)" },
        { "label": "Database", "subLabel": "(MySQL)" }
      ]
    },
    "gallery": [
      "/assets/schoolTour.png"
    ]
  },
  {
    "id": "11",
    "slug": "sipanda-sistem-informasi-hewan-dilindungi",
    "title": "SIPANDA",
    "description": "Sistem informasi hewan dilindungi dengan fitur Artificial Intelligence untuk membantu identifikasi satwa.",
    "category": "Web App & AI",
    "technologies": ["Flask", "Python", "TensorFlow", "MySQL", "Bootstrap"],
    "imageType": "ai-nodes",
    "year": "2025",
    "role": "Full Stack Developer & AI Developer",
    "overview": "SIPANDA adalah sistem informasi berbasis web mengenai hewan dilindungi yang menyediakan informasi satwa dan memanfaatkan Artificial Intelligence untuk mendukung proses identifikasi.",
    "problem": "Masyarakat masih dapat mengalami kesulitan dalam mengenali hewan yang termasuk kategori satwa dilindungi dan memperoleh informasi yang relevan mengenai satwa tersebut.",
    "solution": "SIPANDA menyediakan sistem informasi terpusat serta fitur berbasis AI yang membantu pengguna melakukan identifikasi dan memperoleh informasi mengenai hewan.",
    "keyFeatures": [
      {
        "title": "Informasi Hewan Dilindungi",
        "description": "Pengguna dapat mengakses informasi mengenai berbagai satwa dilindungi."
      },
      {
        "title": "Identifikasi Berbasis AI",
        "description": "Teknologi Artificial Intelligence digunakan untuk membantu proses identifikasi hewan."
      },
      {
        "title": "Sistem Informasi Terpusat",
        "description": "Informasi dan data satwa tersedia dalam satu platform berbasis web."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Web Application", "subLabel": "(Flask)" },
        { "label": "AI Model", "subLabel": "(TensorFlow)" },
        { "label": "Database", "subLabel": "(MySQL)" }
      ]
    },
    "gallery": [
      "/assets/WebSipanda.png"
    ]
  },
  {
    "id": "12",
    "slug": "smartlaundry-aplikasi-laundry-pickup-tracking",
    "title": "SmartLaundry",
    "description": "Aplikasi mobile untuk pemesanan layanan laundry, penjadwalan pickup, dan pelacakan status pesanan.",
    "category": "Mobile App",
    "technologies": ["Flutter", "Firebase", "Cloud Firestore", "Firebase Authentication"],
    "imageType": "phone",
    "year": "2025",
    "role": "Mobile Developer",
    "overview": "SmartLaundry adalah aplikasi mobile yang membantu pelanggan melakukan pemesanan layanan laundry, menentukan jadwal penjemputan, dan memantau status pesanan.",
    "problem": "Pelanggan laundry sering tidak mengetahui perkembangan pesanan dan masih harus melakukan komunikasi manual untuk mengetahui status layanan.",
    "solution": "SmartLaundry menyediakan aplikasi yang mengintegrasikan pemesanan, penjadwalan pickup, dan monitoring status pesanan dalam satu platform.",
    "keyFeatures": [
      {
        "title": "Pemesanan Laundry",
        "description": "Pengguna dapat melakukan pemesanan layanan laundry melalui aplikasi."
      },
      {
        "title": "Pickup dan Delivery",
        "description": "Pengguna dapat menentukan jadwal layanan jemput dan antar."
      },
      {
        "title": "Tracking Pesanan",
        "description": "Status dan perkembangan pesanan dapat dipantau melalui aplikasi."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile App", "subLabel": "(Flutter)" },
        { "label": "Authentication", "subLabel": "(Firebase Auth)" },
        { "label": "Cloud Database", "subLabel": "(Cloud Firestore)" }
      ]
    },
    "gallery": [
      "/assets/SmartLaundry.png"
    ]
  },
  {
    "id": "13",
    "slug": "physiomove-aplikasi-panduan-latihan-ai",
    "title": "PhysioMove",
    "description": "Aplikasi mobile panduan latihan mandiri dengan teknologi pose detection dan LSTM untuk membantu mengenali gerakan pengguna.",
    "category": "Mobile App & AI",
    "technologies": ["Flutter", "Dart", "Python", "TensorFlow", "LSTM", "MediaPipe", "Flask API", "MySQL"],
    "imageType": "phone",
    "year": "2026",
    "role": "Full Stack Mobile & AI Developer",
    "overview": "PhysioMove adalah aplikasi mobile panduan latihan mandiri yang dirancang untuk membantu pengguna melakukan latihan fisik secara terstruktur. Aplikasi menggunakan MediaPipe Pose untuk mendeteksi landmark tubuh dan model Long Short-Term Memory atau LSTM untuk mengenali pola gerakan berdasarkan sequence pose.",
    "problem": "Pengguna yang melakukan latihan mandiri dapat mengalami kesulitan dalam memahami gerakan yang benar dan membutuhkan panduan yang lebih interaktif saat melakukan latihan.",
    "solution": "PhysioMove mengintegrasikan aplikasi mobile, pose detection, dan machine learning untuk membantu pengguna mengikuti latihan serta mendukung proses pengenalan pola gerakan.",
    "keyFeatures": [
      {
        "title": "Pain Assessment",
        "description": "Pengguna dapat melakukan penilaian awal terkait kondisi dan tingkat nyeri."
      },
      {
        "title": "Exercise Recommendation",
        "description": "Sistem menyediakan rekomendasi dan jadwal latihan sesuai alur aplikasi."
      },
      {
        "title": "Pose Detection & Movement Recognition",
        "description": "MediaPipe digunakan untuk mendeteksi pose tubuh, sedangkan LSTM digunakan untuk mengenali pola gerakan dari sequence pose landmarks."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Mobile Application", "subLabel": "(Flutter)" },
        { "label": "Backend API", "subLabel": "(Python + Flask)" },
        { "label": "AI Processing", "subLabel": "(MediaPipe + TensorFlow LSTM)" },
        { "label": "Database", "subLabel": "(MySQL)" }
      ]
    },
    "gallery": [
      "/assets/physioMove.jfif"
    ]
  },
  {
    "id": "14",
    "slug": "rekam-medis-elektronik",
    "title": "Rekam Medis Elektronik",
    "description": "Sistem Rekam Medis Elektronik berbasis web untuk mengelola pasien, rekam medis, terapi, jadwal, pembayaran, dan laporan klinik.",
    "category": "Full Stack Web Application",
    "technologies": ["React", "Next.js", "Go", "REST API", "MySQL", "JWT", "Role-Based Access Control"],
    "imageType": "laptop-dark",
    "year": "2026",
    "role": "Full Stack Developer",
    "overview": "Rekam Medis Elektronik adalah sistem berbasis web yang dirancang untuk mendukung operasional klinik melalui pengelolaan data pasien, rekam medis, sesi terapi, jadwal, pembayaran, dan laporan. Sistem menggunakan role-based access agar setiap pengguna memiliki akses sesuai dengan tanggung jawabnya.",
    "problem": "Pengelolaan operasional klinik dan rekam medis secara manual dapat menyebabkan data tersebar, proses administrasi lebih lambat, serta kesulitan dalam mengatur akses berdasarkan peran pengguna.",
    "solution": "Sistem Rekam Medis Elektronik menyediakan platform terintegrasi untuk mengelola data klinik, pasien, rekam medis, terapi, pembayaran, serta laporan dengan dukungan autentikasi dan role-based access control.",
    "keyFeatures": [
      {
        "title": "Manajemen Pasien & Rekam Medis",
        "description": "Data pasien dan riwayat pemeriksaan dapat dikelola secara terpusat."
      },
      {
        "title": "Role-Based Access",
        "description": "Admin atau Front Office, Fisioterapis, dan Owner memiliki akses fitur sesuai dengan peran masing-masing."
      },
      {
        "title": "Operasional Klinik",
        "description": "Sistem mendukung pengelolaan jadwal terapi, pembayaran, pembuatan bukti transaksi, laporan, dan dashboard statistik."
      }
    ],
    "architecture": {
      "nodes": [
        { "label": "Web Application", "subLabel": "(React / Next.js)" },
        { "label": "Backend API", "subLabel": "(Go)" },
        { "label": "Authentication", "subLabel": "(JWT + RBAC)" },
        { "label": "Database", "subLabel": "(MySQL)" }
      ]
    },
    "gallery": [
      "/assets/rekamMedis.jfif"
    ]
  },
  {
    "id": "15",
    "slug": "website-magang-chatbot-automation",
    "title": "Internship Management System",
    "description": "Website manajemen program magang yang dilengkapi chatbot automation untuk membantu pengguna memperoleh informasi dan berinteraksi dengan sistem secara lebih cepat.",
    "category": "Web Application",
    "technologies": [
      "Web Development",
      "Chatbot Automation",
      "Automation",
      "Database"
    ],
    "imageType": "dashboard-light",
    "year": "2026",
    "role": "Full Stack Developer",
    "overview": "Internship Management System adalah website yang digunakan untuk mendukung pengelolaan informasi dan proses terkait program magang. Sistem dilengkapi dengan chatbot automation untuk membantu pengguna mendapatkan informasi secara otomatis dan mempercepat proses interaksi tanpa harus selalu dilakukan secara manual.",
    "problem": "Proses penyampaian informasi dan komunikasi terkait program magang dapat menjadi tidak efisien ketika pengguna harus mencari informasi secara manual atau menunggu respons dari pihak terkait. Pertanyaan yang berulang juga dapat meningkatkan beban administrasi.",
    "solution": "Website menyediakan sistem terpusat untuk mendukung pengelolaan informasi program magang dan mengintegrasikan chatbot automation sebagai media interaksi otomatis. Chatbot membantu menjawab pertanyaan umum, memberikan informasi yang dibutuhkan, dan mengarahkan pengguna berdasarkan kebutuhan mereka.",
    "keyFeatures": [
      {
        "title": "Manajemen Informasi Magang",
        "description": "Menyediakan informasi dan kebutuhan terkait program magang dalam satu platform yang lebih terorganisir."
      },
      {
        "title": "Chatbot Automation",
        "description": "Chatbot membantu merespons pertanyaan dan memberikan informasi secara otomatis kepada pengguna."
      },
      {
        "title": "Automated Interaction",
        "description": "Proses interaksi tertentu dapat dilakukan secara otomatis untuk mengurangi kebutuhan komunikasi manual yang berulang."
      }
    ],
    "architecture": {
      "nodes": [
        {
          "label": "Web Application",
          "subLabel": "(Frontend)"
        },
        {
          "label": "Application Backend",
          "subLabel": "(API & Business Logic)"
        },
        {
          "label": "Chatbot Automation",
          "subLabel": "(Automated Interaction)"
        },
        {
          "label": "Database",
          "subLabel": "(Data Storage)"
        }
      ]
    },
    "gallery": [
      "/assets/magangsWeb.jfif"
    ]
  },
  {
    "id": "16",
    "slug": "olahraga-tracker",
    "title": "Olahraga Tracker",
    "description": "Aplikasi mobile untuk membantu pengguna mencatat aktivitas olahraga, memantau progres, dan membangun kebiasaan olahraga secara lebih teratur.",
    "category": "Mobile App",
    "technologies": [
      "Flutter",
      "Firebase",
      "Cloud Firestore",
      "Firebase Auth"
    ],
    "imageType": "phone",
    "year": "2026",
    "role": "Mobile Developer",
    "overview": "Olahraga Tracker adalah aplikasi mobile yang dirancang untuk membantu pengguna mencatat dan memantau aktivitas olahraga. Aplikasi menyediakan sistem pencatatan aktivitas, pemantauan progres, serta visualisasi data untuk membantu pengguna memahami perkembangan rutinitas olahraga mereka.",
    "problem": "Pengguna sering kesulitan menjaga konsistensi olahraga dan memantau perkembangan aktivitas mereka karena pencatatan dilakukan secara manual atau data aktivitas tersebar di berbagai tempat.",
    "solution": "Olahraga Tracker menyediakan platform mobile terpusat untuk mencatat aktivitas olahraga, memantau progres, melihat riwayat aktivitas, dan membantu pengguna membangun rutinitas olahraga yang lebih terstruktur.",
    "keyFeatures": [
      {
        "title": "Pencatatan Aktivitas",
        "description": "Mencatat berbagai aktivitas olahraga yang dilakukan pengguna."
      },
      {
        "title": "Pemantauan Progres",
        "description": "Menampilkan perkembangan aktivitas dan konsistensi olahraga pengguna."
      },
      {
        "title": "Riwayat Aktivitas",
        "description": "Menyediakan riwayat aktivitas untuk membantu pengguna melihat perkembangan dari waktu ke waktu."
      }
    ],
    "architecture": {
      "nodes": [
        {
          "label": "Mobile Application",
          "subLabel": "(Flutter)"
        },
        {
          "label": "Authentication",
          "subLabel": "(Firebase Auth)"
        },
        {
          "label": "Cloud Database",
          "subLabel": "(Cloud Firestore)"
        }
      ]
    },
    "gallery": [
      "/assets/OlahragaTracker.png"
    ]
  },
  {
    "id": "17",
    "slug": "journal-ai",
    "title": "JournalAI",
    "description": "Aplikasi jurnal suara berbasis AI yang membantu pengguna merekam aktivitas atau perasaan sehari-hari, mengubah suara menjadi teks, dan menganalisis mood.",
    "category": "Mobile App",
    "technologies": [
      "Flutter",
      "Firebase",
      "BLoC",
      "Speech Recognition",
      "TensorFlow Lite"
    ],
    "imageType": "phone",
    "year": "2026",
    "role": "Mobile & AI Developer",
    "overview": "JournalAI adalah aplikasi mobile jurnal pribadi yang memanfaatkan teknologi AI untuk membantu pengguna mencatat aktivitas dan perasaan melalui suara. Rekaman suara dapat diubah menjadi teks, kemudian dianalisis untuk mengidentifikasi kondisi atau mood berdasarkan isi jurnal.",
    "problem": "Menulis jurnal secara manual membutuhkan waktu dan konsistensi, sehingga pengguna sering kesulitan mendokumentasikan aktivitas, pikiran, atau perasaan mereka setiap hari. Selain itu, pengguna belum tentu menyadari pola mood yang muncul dari waktu ke waktu.",
    "solution": "JournalAI menyediakan pengalaman journaling berbasis suara sehingga pengguna dapat merekam cerita secara lebih praktis. Sistem kemudian mengubah suara menjadi teks dan melakukan analisis mood untuk membantu pengguna memahami pola emosional dari catatan mereka.",
    "keyFeatures": [
      {
        "title": "Voice Journal",
        "description": "Pengguna dapat membuat jurnal dengan merekam suara secara langsung melalui aplikasi."
      },
      {
        "title": "Speech to Text",
        "description": "Rekaman suara dikonversi menjadi teks untuk membentuk catatan jurnal digital."
      },
      {
        "title": "AI Mood Analysis",
        "description": "Model AI menganalisis isi jurnal untuk mengidentifikasi kategori mood pengguna."
      },
      {
        "title": "Mood History",
        "description": "Menyediakan riwayat jurnal dan hasil analisis untuk membantu pengguna melihat pola mood dari waktu ke waktu."
      }
    ],
    "architecture": {
      "nodes": [
        {
          "label": "Mobile Application",
          "subLabel": "(Flutter + BLoC)"
        },
        {
          "label": "Voice Processing",
          "subLabel": "(Speech Recognition)"
        },
        {
          "label": "AI Mood Model",
          "subLabel": "(TensorFlow Lite)"
        },
        {
          "label": "Cloud Services",
          "subLabel": "(Firebase)"
        }
      ]
    },
    "gallery": [
      "/assets/JournalAI.png"
    ]
  },
  {
    "id": "18",
    "slug": "mind-ai",
    "title": "MindAI",
    "description": "Website berbasis machine learning untuk melakukan analisis dan prediksi tingkat risiko burnout berdasarkan berbagai faktor yang relevan.",
    "category": "AI Web Application",
    "technologies": [
      "React",
      "Vite",
      "TensorFlow.js",
      "Machine Learning",
      "JavaScript"
    ],
    "imageType": "dashboard-light",
    "year": "2026",
    "role": "Full Stack & Machine Learning Developer",
    "overview": "MindAI adalah aplikasi website yang mengintegrasikan machine learning untuk melakukan prediksi tingkat risiko burnout. Model machine learning dikonversi dan diimplementasikan menggunakan TensorFlow.js sehingga proses prediksi dapat berjalan langsung di sisi frontend tanpa memerlukan API Python sebagai layanan prediksi.",
    "problem": "Analisis terhadap tingkat risiko burnout berdasarkan berbagai faktor dapat menjadi sulit apabila dilakukan secara manual. Selain itu, implementasi model machine learning melalui backend terpisah dapat menambah kompleksitas arsitektur aplikasi.",
    "solution": "MindAI mengintegrasikan model machine learning langsung ke dalam aplikasi website menggunakan TensorFlow.js. Pengguna dapat memasukkan data yang diperlukan, kemudian sistem memproses data tersebut dan menampilkan hasil prediksi tingkat risiko secara langsung melalui aplikasi.",
    "keyFeatures": [
      {
        "title": "Burnout Risk Prediction",
        "description": "Melakukan klasifikasi tingkat risiko burnout berdasarkan data yang dimasukkan pengguna."
      },
      {
        "title": "Client-Side AI Inference",
        "description": "Model machine learning dijalankan langsung di browser menggunakan TensorFlow.js tanpa membutuhkan API Python untuk proses prediksi."
      },
      {
        "title": "Interactive Assessment",
        "description": "Menyediakan antarmuka interaktif untuk memasukkan data dan melihat hasil prediksi."
      },
      {
        "title": "Prediction Result Visualization",
        "description": "Menampilkan hasil klasifikasi risiko dengan visualisasi yang mudah dipahami pengguna."
      }
    ],
    "architecture": {
      "nodes": [
        {
          "label": "Web Application",
          "subLabel": "(React + Vite)"
        },
        {
          "label": "Input Processing",
          "subLabel": "(JavaScript)"
        },
        {
          "label": "Machine Learning Model",
          "subLabel": "(TensorFlow.js)"
        },
        {
          "label": "Prediction Result",
          "subLabel": "(Risk Classification)"
        }
      ]
    },
    "gallery": [
      "/assets/MindAI.png"
    ]
  }
]
