import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';
import { experience } from '../../data/experience';

export const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <motion.div 
        className={styles.headerArea}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.sectionLabelContainer}>
          <div className={`${styles.sectionLabel} section-number`}>
            <span>06</span>
            <span>//</span>
          </div>
          <div className={styles.sectionLabelText}>WORK</div>
        </div>

        <div className={styles.headlineBox}>
          <div className={styles.bgBrackets}>{`{ "" }`}</div>
          <h2 className={styles.headline}>
            <span className={styles.headlineBlack}>PENGALAMAN</span>
            <span className={styles.headlineBlue}>KERJA.</span>
          </h2>
        </div>

        <div className={styles.introBox}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
          <p className={styles.introText}>
            Kumpulan pengalaman profesional, peran, dan produk digital yang telah saya bangun. Dari sistem backend yang skalabel hingga antarmuka pengguna interaktif, membangun sistem yang berdampak.
          </p>
        </div>
      </motion.div>

      <div className={styles.experienceList}>
        {experience.map((exp, index) => {
          const isEven = index % 2 === 1;
          
          const TextContent = (
            <motion.div 
              className={styles.textContent}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.roleTitleGroup}>
                <div className={styles.inlineNumber}>0{index + 1}</div>
                <h3 className={styles.role}>{exp.role}</h3>
              </div>
              <div className={styles.company}>{exp.company}</div>
              
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.metaIcon}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {exp.period}
                </div>
                <div className={styles.metaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.metaIcon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  {exp.location}
                </div>
                <div className={styles.metaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.metaIcon}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  {exp.type}
                </div>
              </div>

              <p className={styles.description}>{exp.description}</p>
              
              <div className={styles.responsibilitiesTitle}>TANGGUNG JAWAB UTAMA</div>
              <ul className={styles.responsibilitiesList}>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>

              <div className={styles.techTags}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.tag}>{tech}</span>
                ))}
              </div>
            </motion.div>
          );

          const ImageContent = (
            <motion.div 
              className={styles.imageContent}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={exp.imagePlaceholder || '/assets/work_1.jfif'} 
                alt={`${exp.role} Preview`} 
                className={styles.imagePlaceholder} 
              />
            </motion.div>
          );

          return (
            <div key={exp.id} className={styles.experienceItem}>
              {/* For responsive, we always want text first on mobile, but on desktop we alternate */}
              {isEven ? (
                <>
                  <div className={styles.hiddenMobile}>{ImageContent}</div>
                  {TextContent}
                  <div className={styles.showMobile}>{ImageContent}</div>
                </>
              ) : (
                <>
                  {TextContent}
                  {ImageContent}
                </>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
