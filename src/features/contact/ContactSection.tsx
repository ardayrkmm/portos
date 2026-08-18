import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import styles from './ContactSection.module.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={`${styles.sectionLabel} section-number`}>
          <span className={styles.sectionLabelNumber}>07</span>
          <div className={styles.sectionLabelLine}></div>
          <span>KONTAK</span>
        </div>
        <h2 className={`${styles.title} headline-lg-mobile md:headline-lg`}>
          PUNYA IDE? MARI WUJUDKAN MENJADI PRODUK.
        </h2>
      </motion.div>

      <div className={styles.content}>
        {/* Left Side: Form */}
        <motion.div 
          className={styles.formArea}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <form className={styles.form}>
            <motion.div variants={itemVariants} className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>NAMA</label>
              <input type="text" id="name" className={styles.input} />
            </motion.div>
            
            <motion.div variants={itemVariants} className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>EMAIL</label>
              <input type="email" id="email" className={styles.input} />
            </motion.div>

            <motion.div variants={itemVariants} className={styles.inputGroup}>
              <div className={styles.selectWrapper}>
                <select id="projectType" className={styles.input} defaultValue="">
                  <option value="" disabled>Pilih Jenis Projek</option>
                  <option value="web">Pengembangan Web</option>
                  <option value="mobile">Aplikasi Mobile</option>
                  <option value="ai">AI Terapan</option>
                  <option value="other">Lainnya</option>
                </select>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.selectIcon}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className={styles.inputGroup}>
              <label htmlFor="details" className={styles.label}>DETAIL PROJEK</label>
              <textarea id="details" className={styles.textarea}></textarea>
            </motion.div>

            <motion.button 
              type="button" 
              className={styles.submitBtn}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              KIRIM PESAN &rarr;
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side: Image and Details */}
        <motion.div 
          className={styles.infoArea}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <img src="/assets/profil2.jfif" alt="Contact" className={styles.image} style={{ objectPosition: 'top' }} />
          
          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <div className={styles.infoLabel}>KONTAK LANGSUNG</div>
              <div className={styles.infoValue}>ardyrkm23@gmail.com</div>
              <div className={styles.infoValue}>085951545918</div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.infoLabel}>JARINGAN</div>
              <div className={styles.links}>
                <a href="https://github.com/ardayrkmm" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                <a href="https://www.linkedin.com/in/ardayudrik" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                <a href="https://wa.me/6285951545918" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

