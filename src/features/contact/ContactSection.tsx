import styles from './ContactSection.module.css';

export const ContactSection = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.header}>
        <div className={styles.sectionLabelContainer}>
          <div className={styles.sectionLabel}>08</div>
          <div className={styles.sectionLine}></div>
        </div>
        <h2 className={styles.title}>PUNYA IDE? MARI WUJUDKAN MENJADI PRODUK.</h2>
      </div>

      <div className={styles.content}>
        {/* Left Side: Form */}
        <div className={styles.formArea}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>NAMA</label>
              <input type="text" id="name" className={styles.input} />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>EMAIL</label>
              <input type="email" id="email" className={styles.input} />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.selectWrapper}>
                <select id="projectType" className={styles.input}>
                  <option value="" disabled selected>Pilih Jenis Projek</option>
                  <option value="web">Pengembangan Web</option>
                  <option value="mobile">Aplikasi Mobile</option>
                  <option value="ai">AI Terapan</option>
                  <option value="other">Lainnya</option>
                </select>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.selectIcon}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="details" className={styles.label}>DETAIL PROJEK</label>
              <textarea id="details" className={styles.textarea}></textarea>
            </div>

            <button type="button" className={styles.submitBtn}>
              KIRIM PESAN &rarr;
            </button>
          </form>
        </div>

        {/* Right Side: Image and Details */}
        <div className={styles.infoArea}>
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=1000" alt="Contact" className={styles.image} />
          
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
                <a href="https://www.linkedin.com/ardayudrik" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                <a href="https://wa.me/6285951545918" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

