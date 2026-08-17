export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  imagePlaceholder?: string;
}

export const experience: Experience[] = [
  {
    "id": "1",
    "role": "Front End Developer",
    "company": "PT GIT Solution",
    "period": "JUL 2025 - NOV 2025",
    "location": "INDONESIA",
    "type": "INTERNSHIP",
    "description": "Berperan sebagai Front End Developer Intern dalam pengembangan website Omnichannel. Bertanggung jawab membangun antarmuka pengguna menggunakan React, melakukan integrasi API, serta menghubungkan aplikasi frontend dengan workflow automation menggunakan n8n.",
    "responsibilities": [
      "Mengembangkan user interface website Omnichannel menggunakan React.",
      "Melakukan integrasi frontend dengan API dan layanan backend.",
      "Menghubungkan frontend dengan workflow automation n8n melalui webhook, routing chat, dan trigger otomatis.",
      "Membangun komponen dashboard, manajemen chat, dan fitur multi-channel.",
      "Melakukan debugging dan optimasi performa aplikasi.",
      "Berkolaborasi dengan tim backend dalam proses pengembangan dan integrasi sistem."
    ],
    "technologies": [
      "React JS",
      "JavaScript",
      "API Integration",
      "n8n",
      "Webhook",
      "Workflow Automation"
    ],
    "imagePlaceholder": "/assets/work_1.jfif"
  },
  {
    "id": "2",
    "role": "Pemateri Workshop",
    "company": "PT GIT Solution",
    "period": "JUL 2025 - NOV 2025",
    "location": "INDONESIA",
    "type": "WORKSHOP",
    "description": "Menjadi pemateri workshop bertema Bikin Chatbot Pintar Tanpa Coding dengan fokus pada pengenalan dan implementasi workflow automation menggunakan n8n yang diintegrasikan dengan aplikasi React JS.",
    "responsibilities": [
      "Membawakan materi workshop Bikin Chatbot Pintar Tanpa Coding.",
      "Menjelaskan konsep dasar chatbot dan workflow automation.",
      "Mendemonstrasikan implementasi workflow automation menggunakan n8n.",
      "Menjelaskan integrasi workflow automation dengan aplikasi React JS.",
      "Mengajar dan membimbing sekitar 20 peserta secara langsung selama workshop."
    ],
    "technologies": [
      "n8n",
      "React JS",
      "Chatbot Automation",
      "Webhook",
      "Workflow Automation"
    ],
    "imagePlaceholder": "/assets/work_2.jfif"
  },
  {
    "id": "3",
    "role": "Full Stack Developer",
    "company": "Klinik Mandiri",
    "period": "3 BULAN",
    "location": "INDONESIA",
    "type": "PROJECT-BASED",
    "description": "Mengembangkan Sistem Rekam Medis Elektronik berbasis web untuk mendukung kebutuhan operasional Klinik Mandiri, termasuk pengelolaan data pasien, rekam medis, sesi terapi, jadwal, pembayaran, dan administrasi klinik.",
    "responsibilities": [
      "Menganalisis kebutuhan sistem berdasarkan proses operasional klinik.",
      "Merancang dan mengembangkan Sistem Rekam Medis Elektronik berbasis web.",
      "Membangun fitur manajemen pasien dan data rekam medis.",
      "Mengembangkan fitur sesi terapi dan pengelolaan jadwal.",
      "Membangun fitur pembayaran dan administrasi klinik.",
      "Mengimplementasikan Role-Based Access Control untuk Admin atau Front Office, Fisioterapis, dan Owner.",
      "Mengembangkan frontend, backend, API, dan integrasi database.",
      "Melakukan testing, debugging, dan perbaikan sistem berdasarkan kebutuhan pengguna."
    ],
    "technologies": [
      "Next.js",
      "React",
      "Go",
      "MySQL",
      "REST API",
      "JWT",
      "Role-Based Access Control"
    ],
    "imagePlaceholder": "/assets/work_3.jfif"
  }
];
