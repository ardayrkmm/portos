import styles from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${styles.sectionLabel} section-number`}>
        <span className={styles.sectionLabelNumber}>02</span>
        <div className={styles.sectionLabelLine}></div>
        <span>TENTANG</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.contentLeft}>
          <h2 className={`${styles.headline} headline-lg-mobile md:headline-lg`}>
            SAYA TIDAK HANYA MENDESAIN LAYAR.<br/>
            <span className={styles.textPrimary}>SAYA MEMBANGUN SISTEM DI BALIKNYA.</span>
          </h2>
          
          <div className={styles.detailsRow}>
            <div className={styles.descriptionBlock}>
              <p className={`${styles.descriptionText} body-lg`}>
                Pembuatan produk digital dari awal hingga akhir, berfokus pada Web, Mobile, API, dan AI/ML (Computer Vision). Menjembatani antara estetika desain tingkat tinggi dan arsitektur teknis yang kokoh.
              </p>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statBoxFull}>
                <span className={`${styles.statTitle} label-mono`}>PROJEK DIBUAT</span>
                <span className={styles.statValueLarge}>50+</span>
              </div>
              <div className={styles.statBoxHalfLeft}>
                <span className={`${styles.statTitle} label-mono`}>PLATFORM</span>
                <span className={`${styles.statValueSmall} label-mono`}>WEB / IOS /<br/>ANDROID</span>
              </div>
              <div className={styles.statBoxHalfRight}>
                <span className={`${styles.statTitle} label-mono`}>FOKUS AI</span>
                <span className={`${styles.statValueSmall} label-mono`}>COMPUTER<br/>VISION</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.imageBackdrop}></div>
          <img 
            src="/assets/profil2.jfif" 
            alt="Profile 2" 
            className={styles.aboutImage} 
          />
        </div>
      </div>
    </section>
  );
};
