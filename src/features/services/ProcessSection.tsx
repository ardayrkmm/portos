import styles from './ProcessSection.module.css';

const steps = [
  {
    num: '01',
    title: 'Penemuan',
    desc: 'Pengumpulan kebutuhan, analisis kelayakan teknis, dan pendefinisian ruang lingkup masalah utama.'
  },
  {
    num: '02',
    title: 'Perencanaan',
    desc: 'Pembuatan peta jalan (roadmap), pemilihan teknologi yang sesuai, dan penentuan pencapaian sprint.'
  },
  {
    num: '03',
    title: 'Arsitektur',
    desc: 'Perancangan skema basis data, kontrak API, dan diagram komponen sistem.'
  },
  {
    num: '04',
    title: 'Pembangunan',
    desc: 'Penulisan kode yang bersih, modular, dan berperforma tinggi dengan mengikuti praktik terbaik dan pola desain.'
  },
  {
    num: '05',
    title: 'Pengujian',
    desc: 'Pengujian unit, integrasi, dan E2E untuk memastikan keandalan dan penanganan kasus ekstrem (edge-case).'
  },
  {
    num: '06',
    title: 'Rilis & Deploy',
    desc: 'Konfigurasi pipeline CI/CD, penyediaan server, dan peluncuran akhir ke tahap produksi.'
  }
];

export const ProcessSection = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.header}>
        <div className={`${styles.sectionLabel} section-number`}>
          <span>05</span>
          <span>//</span>
        </div>
        <div className={styles.headerContent}>
          <h2 className={styles.headline}>CARA SAYA MEMBANGUN.</h2>
          <div className={styles.subheadlineBox}>
            <span className={styles.subheadlineCode}>[EXECUTION_PIPELINE: ACTIVE]</span>
            <span className={styles.subheadlineText}>PENDEKATAN SISTEMATIS DALAM MENGUBAH KONSEP MENJADI PERANGKAT LUNAK SIAP PRODUKSI.</span>
          </div>
        </div>
      </div>

      <div className={styles.timelineGrid}>
        <div className={styles.timelineLine}></div>
        {steps.map(step => (
          <div key={step.num} className={styles.step}>
            <div className={styles.stepBadge}>{step.num}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
