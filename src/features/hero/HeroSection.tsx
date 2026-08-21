import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './HeroSection.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>GULIR KE BAWAH</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
      
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className={`${styles.sectionLabel} section-number`}>
          <span className={styles.sectionLabelNumber}>01</span>
          <span>//</span>
          <span>PERKENALAN</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className={`${styles.headline} display-hero-mobile md:display-hero`}>
          ARDA YUDRIK<br/>
          MALANA<br/>
          SOFTWARE<br/>
          <span className={styles.headlineBlue}>DEVELOPER</span>
        </motion.h1>

        <motion.div variants={itemVariants} className={styles.badges}>
          {['WEB', 'BACKEND', 'MOBILE', 'AI'].map(badge => (
            <span key={badge} className={`${styles.badge} label-mono`}>{badge}</span>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className={`${styles.description} body-lg`}>
          Saya membangun produk digital secara menyeluruh — mulai dari antarmuka frontend dan sistem backend hingga aplikasi mobile, basis data, fitur cerdas, dan infrastruktur deployment. Dirancang dengan presisi.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <span className={`${styles.detailLabel} label-mono`}>PERAN</span>
            <span className={`${styles.detailValue} label-mono`}>FULL STACK DEVELOPER</span>
          </div>
          <div className={styles.detailItem}>
            <span className={`${styles.detailLabel} label-mono`}>BERBASIS DI</span>
            <span className={`${styles.detailValue} label-mono`}>INDONESIA</span>
          </div>
          <div className={styles.detailItem}>
            <span className={`${styles.detailLabel} label-mono`}>STATUS</span>
            <span className={`${styles.detailValue} label-mono ${styles.statusValue}`}>
              <span className={styles.statusDot}></span> TERBUKA UNTUK KOLABORASI
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.actions}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.btnPrimary} 
            onClick={() => window.location.href = '#projects'}
          >
            LIHAT KARYA &rarr;
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.btnSecondary} 
            onClick={() => window.location.href = '#contact'}
          >
            HUBUNGI SAYA
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          {/* Placeholder image area. In reality this would be an actual image source */}
          <div className={styles.techLineH}></div>
          <div className={styles.techLineV}></div>
          
          <img 
            src="/assets/profil.JPG" 
            alt="Arda Yudrik Malana Profil" 
            className={styles.profileImage}
          />

          <div className={styles.overlayPanel}>
            <div className={`${styles.overlayTitle} label-mono`}>SYS.INIT()</div>
            <div className={styles.overlayText}>
              Pola arsitektur dimuat. Merender solusi UI/UX optimal. Layanan backend aktif.
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
