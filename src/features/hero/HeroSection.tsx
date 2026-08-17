import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.scrollIndicator}>
        <span>GULIR KE BAWAH</span>
        <div className={styles.scrollLine}></div>
      </div>
      
      <div className={styles.content}>
        <div className={`${styles.sectionLabel} section-number`}>
          <span className={styles.sectionLabelNumber}>01</span>
          <span>//</span>
          <span>PERKENALAN</span>
        </div>

        <h1 className={`${styles.headline} display-hero-mobile md:display-hero`}>
          ARDA YUDRIK<br/>
          MALANA<br/>
          FULL<br/>
          STACK<br/>
          <span className={styles.headlineBlue}>DEVELOPER</span>
        </h1>

        <div className={styles.badges}>
          {['WEB', 'BACKEND', 'MOBILE', 'AI'].map(badge => (
            <span key={badge} className={`${styles.badge} label-mono`}>{badge}</span>
          ))}
        </div>

        <p className={`${styles.description} body-lg`}>
          Saya membangun produk digital secara menyeluruh — mulai dari antarmuka frontend dan sistem backend hingga aplikasi mobile, basis data, fitur cerdas, dan infrastruktur deployment. Dirancang dengan presisi.
        </p>

        <div className={styles.detailsGrid}>
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
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => window.location.href = '#projects'}>
            LIHAT KARYA &rarr;
          </button>
          <button className={styles.btnSecondary} onClick={() => window.location.href = '#contact'}>
            HUBUNGI SAYA
          </button>
        </div>
      </div>

      <div className={styles.imageContainer}>
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
      </div>
    </section>
  );
};
