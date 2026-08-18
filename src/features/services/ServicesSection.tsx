import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './ServicesSection.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const ServicesSection = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={`${styles.sectionLabel} section-number`}>
          <span>04</span>
          <span>//</span>
        </div>
        <div className={styles.headerContent}>
          <h2 className={styles.headline}>APA YANG BISA SAYA BUAT?</h2>
          <div className={styles.subheadlineBox}>
            <span className={styles.subheadlineCode}>[SYS_REQ: IDENTIFY_CORE_COMPETENCIES]</span>
            <span className={styles.subheadlineText}>MENGHADIRKAN ARSITEKTUR DIGITAL PERFORMA TINGGI DI BERBAGAI PLATFORM.</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Card 1: Web Apps */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className={`${styles.card} ${styles.cardWeb}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.globeIcon}>
             <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <div className={styles.cardChip}>FE/BE</div>
          <h3 className={styles.cardTitle}>Aplikasi Web</h3>
          <p className={styles.cardDescription}>
            Aplikasi web yang skalabel, responsif, dan dapat diakses, dibangun dengan framework modern. Fokus pada arsitektur berbasis komponen dan optimasi performa.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>Tailwind CSS</span>
          </div>
        </motion.div>

        {/* Card 2: Backend & API */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className={`${styles.card} ${styles.cardBackend}`}>
          <div className={styles.cardChip}>SYS_CORE</div>
          <h3 className={styles.cardTitle}>Backend &amp; API</h3>
          <p className={styles.cardDescription}>
            Logika sisi server yang tangguh, API RESTful dan GraphQL, desain basis data, dan arsitektur microservices yang menjamin integritas data dan throughput tinggi.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Node.js</span>
            <span className={styles.tag}>Python</span>
            <span className={styles.tag}>PostgreSQL</span>
          </div>
        </motion.div>

        {/* Card 3: Mobile Apps */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className={`${styles.card} ${styles.cardMobile}`}>
          <div className={styles.cardChip}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            MOBILE
          </div>
          <h3 className={styles.cardTitle}>Aplikasi Mobile</h3>
          <p className={styles.cardDescription}>
            Aplikasi mobile lintas platform yang memberikan pengalaman seperti aplikasi native dengan basis kode yang dapat digunakan kembali.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Flutter</span>
            <span className={styles.tag}>React Native</span>
          </div>
        </motion.div>

        {/* Card 4: Full Stack */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className={`${styles.card} ${styles.cardFullstack}`}>
          <img src="/assets/work_1.jfif" alt="Architecture" className={styles.fullstackImage} />
          <div className={styles.cardFullstackInner}>
            <div className={styles.cardChip}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              E2E
            </div>
            <h3 className={styles.cardTitle}>Full Stack</h3>
            <p className={styles.cardDescription}>
              Pengembangan produk dari awal hingga akhir, menjembatani jarak antara desain antarmuka dan arsitektur basis data.
            </p>
          </div>
        </motion.div>

        {/* Card 5: AI Integration */}
        <motion.div variants={cardVariants} whileHover={{ y: -5 }} className={`${styles.card} ${styles.cardAI}`}>
          <div className={styles.cardChip}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            EXPERIMENTAL
          </div>
          <h3 className={styles.cardTitle}>Integrasi AI</h3>
          <p className={styles.cardDescription}>
            Mengimplementasikan LLM, agen cerdas, dan model machine learning ke dalam alur kerja yang ada atau aplikasi baru.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
