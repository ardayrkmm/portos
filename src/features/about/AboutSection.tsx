import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div 
        className={`${styles.sectionLabel} section-number`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariants}
      >
        <span className={styles.sectionLabelNumber}>02</span>
        <div className={styles.sectionLabelLine}></div>
        <span>TENTANG</span>
      </motion.div>

      <div className={styles.grid}>
        <motion.div 
          className={styles.contentLeft}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={fadeUpVariants} className={`${styles.headline} headline-lg-mobile md:headline-lg`}>
            SAYA TIDAK HANYA MENDESAIN LAYAR.<br/>
            <span className={styles.textPrimary}>SAYA MEMBANGUN SISTEM DI BALIKNYA.</span>
          </motion.h2>
          
          <div className={styles.detailsRow}>
            <motion.div variants={fadeUpVariants} className={styles.descriptionBlock}>
              <p className={`${styles.descriptionText} body-lg`}>
                Pembuatan produk digital dari awal hingga akhir, berfokus pada Web, Mobile, API, dan AI/ML (Computer Vision). Menjembatani antara estetika desain tingkat tinggi dan arsitektur teknis yang kokoh.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} className={styles.statsGrid}>
              <motion.div whileHover={{ scale: 1.02 }} className={styles.statBoxFull}>
                <span className={`${styles.statTitle} label-mono`}>PROJEK DIBUAT</span>
                <span className={styles.statValueLarge}>50+</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className={styles.statBoxHalfLeft}>
                <span className={`${styles.statTitle} label-mono`}>PLATFORM</span>
                <span className={`${styles.statValueSmall} label-mono`}>WEB / IOS /<br/>ANDROID</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className={styles.statBoxHalfRight}>
                <span className={`${styles.statTitle} label-mono`}>FOKUS AI</span>
                <span className={`${styles.statValueSmall} label-mono`}>COMPUTER<br/>VISION</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.contentRight}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.imageBackdrop}></div>
          <img 
            src="/assets/profil2.jfif" 
            alt="Profile 2" 
            className={styles.aboutImage} 
          />
        </motion.div>
      </div>
    </section>
  );
};
