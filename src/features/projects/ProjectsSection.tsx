import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';
import { projects } from '../../data/projects';

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const BLOCKS_PER_PAGE = 3;

  // Group projects into blocks (rows) to treat each row layout as a single unit
  const blocks: { items: any[]; startIndex: number }[] = [];
  let i = 0;
  let blockType = 0; // 0: 2/3+1/3, 1: 1/3+2/3, 2: full

  while (i < projects.length) {
    if (blockType === 0 || blockType === 1) {
      blocks.push({
        items: projects.slice(i, i + 2),
        startIndex: i
      });
      i += 2;
    } else {
      blocks.push({
        items: projects.slice(i, i + 1),
        startIndex: i
      });
      i += 1;
    }
    blockType = (blockType + 1) % 3;
  }

  const totalPages = Math.ceil(blocks.length / BLOCKS_PER_PAGE);
  const paginatedBlocks = blocks.slice(
    (currentPage - 1) * BLOCKS_PER_PAGE,
    currentPage * BLOCKS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  // Flatten the blocks back for rendering
  const paginatedProjects: { project: any; globalIndex: number }[] = [];
  paginatedBlocks.forEach(block => {
    block.items.forEach((proj, idx) => {
      paginatedProjects.push({
        project: proj,
        globalIndex: block.startIndex + idx
      });
    });
  });

  const renderCard = ({ project, globalIndex }: { project: any, globalIndex: number }) => {
    const styleId = (globalIndex % 5) + 1;
    
    // Convert Link to motion(Link) is tricky with TypeScript, so we wrap Link in motion.div
    const cardContent = (styleClass: string, children: React.ReactNode) => (
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
        }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={`${styles.card} ${styleClass}`}
      >
        <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'inherit', width: '100%', height: '100%', position: 'relative' }}>
          {children}
        </Link>
      </motion.div>
    );

    switch (styleId) {
      case 1:
        return cardContent(styles.style1, (
          <>
            <div className={styles.cardInner}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.cardTags}>
                {project.technologies?.map((t: string) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} src={project.gallery?.[0] || "https://placehold.co/400x500/e0e7ff/1e3a8a?text=App"} alt={project.title} className={styles.cardImage} />
          </>
        ));
      case 2:
        return cardContent(styles.style2, (
          <>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={styles.topIcon}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <div className={styles.topMeta}>{project.technologies?.[0] || 'WEB'}</div>
            <div className={styles.cardInner}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
            </div>
            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} src={project.gallery?.[0] || "https://placehold.co/400x300/1e3a8a/e0e7ff?text=Dashboard"} alt={project.title} className={styles.cardImage} />
          </>
        ));
      case 3:
        return cardContent(styles.style3, (
          <>
            <div className={styles.cardInner}>
              <div className={styles.topTag}>{project.category}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.cardTags}>
                {project.technologies?.map((t: string) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
            <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} src={project.gallery?.[0] || "https://placehold.co/300x500/dae2fd/1e3a8a?text=UI"} alt={project.title} className={styles.cardImage} />
          </>
        ));
      case 4:
        return cardContent(styles.style4, (
          <>
            <div className={styles.cardInner}>
              <div className={styles.headerRow}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <p className={styles.cardDesc}>{project.description}</p>
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} src={project.gallery?.[0] || "https://placehold.co/600x300/1e3a8a/e0e7ff?text=AI+Nodes"} alt={project.title} className={styles.cardImage} />
            </div>
          </>
        ));
      case 5:
        return cardContent(styles.style5, (
          <>
            <div className={styles.imageBox} style={{ overflow: 'hidden' }}>
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} src={project.gallery?.[0] || "https://placehold.co/600x400/e0e7ff/1e3a8a?text=Portal"} alt={project.title} className={styles.cardImage} />
            </div>
            <div className={styles.contentBox}>
              <div className={styles.topTag}>{project.category}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc} style={{ maxWidth: '100%' }}>{project.description}</p>
              <div className={styles.specs}>
                {project.extra?.specs ? project.extra.specs.map((s: any) => (
                  <div key={s.label} className={styles.specRow}>
                    <span className={styles.specLabel}>{s.label}</span>
                    <span className={styles.specValue}>{s.value}</span>
                  </div>
                )) : (
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Tech Stack</span>
                    <span className={styles.specValue}>{project.technologies?.join(' / ')}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        ));
      default:
        return null;
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className={`${styles.sectionLabel} section-number`}>
          <span className={styles.sectionLabelNumber}>04</span>
          <div className={styles.sectionLabelLine}></div>
          <span>KARYA TERPILIH</span>
        </div>
        <h2 className={`${styles.title} headline-lg-mobile md:headline-lg`}>
          PROJEK &<br/>STUDI KASUS.
        </h2>
      </motion.div>

      <div className={styles.gridContainer}>
        {paginatedBlocks.map((block, bIdx) => (
          <motion.div 
            key={`block-${bIdx}`} 
            className={styles.bentoGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {block.items.map((proj, idx) => (
              <React.Fragment key={proj.id}>
                {renderCard({ project: proj, globalIndex: block.startIndex + idx })}
              </React.Fragment>
            ))}
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <motion.div 
          className={styles.pagination}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button 
            className={styles.pageButton} 
            onClick={handlePrev} 
            disabled={currentPage === 1}
          >
            &larr;
          </button>
          <span className={styles.pageInfo}>HALAMAN {currentPage} / {totalPages}</span>
          <button 
            className={styles.pageButton} 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
          >
            &rarr;
          </button>
        </motion.div>
      )}
    </section>
  );
};
