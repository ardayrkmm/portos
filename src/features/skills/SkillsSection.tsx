import { motion } from 'framer-motion';
import styles from './SkillsSection.module.css';
import { skillsData } from '../../data/skills';

// Simple SVG Icons for the cards
const Icons: Record<string, React.ReactNode> = {
  'Frontend': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
  'Backend': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
  'AI / ML': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
  'Mobile': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
  'Database': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
  'Infra / Tools': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.cardIcon}><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <motion.div 
        className={`${styles.sectionLabel} section-number`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionLabelNumber}>03</span>
        <div className={styles.sectionLabelLine}></div>
        <span>KEAHLIAN & ARSITEKTUR</span>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((category) => (
          <motion.div 
            key={category.title} 
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{category.title}</h3>
              {Icons[category.title]}
            </div>
            <p className={styles.cardDescription}>{category.description}</p>
            <div className={styles.tags}>
              {category.items.map((item) => (
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  key={item.name} 
                  className={`${styles.tag} ${item.highlight ? (item.name === 'Python' ? styles.tagAltHighlight : styles.tagHighlight) : ''}`}
                >
                  {item.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeText}>
          REACT &nbsp; NEXT.JS &nbsp; GO &nbsp; <span className={styles.marqueeTextHighlight}>FLUTTER</span> &nbsp; LARAVEL &nbsp; POSTGRESQL &nbsp; DOCKER &nbsp; REACT &nbsp; NEXT.JS &nbsp; GO &nbsp; <span className={styles.marqueeTextHighlight}>FLUTTER</span> &nbsp; LARAVEL &nbsp; POSTGRESQL &nbsp; DOCKER
        </div>
      </div>
    </section>
  );
};

