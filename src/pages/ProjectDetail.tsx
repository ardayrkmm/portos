import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import styles from './ProjectDetail.module.css';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);

  // scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h2>Projek tidak ditemukan</h2>
        <button className={styles.backBtn} onClick={() => navigate('/#projects')}>Kembali ke Projek</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.sectionLabelContainer}>
            <div className={styles.sectionLabel}>01</div>
            <div className={styles.sectionLine}></div>
            <div className={styles.sectionText}>STUDI KASUS</div>
          </div>
          
          <h1 className={styles.title}>{project.title}.</h1>
          
          <div className={styles.metaGrid}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Kategori</span>
              <span className={styles.metaValue}>{project.category}</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Tahun</span>
              <span className={styles.metaValue}>{project.year || '2024'}</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Peran</span>
              <span className={styles.metaValue}>{project.role || 'Lead Engineer'}</span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroRight}>
          <div className={styles.heroImageWrapper}>
            <img 
              src={project.gallery?.[0] || 'https://placehold.co/800x1000/e0e7ff/1e3a8a?text=Cover'} 
              alt={project.title} 
              className={styles.heroImage} 
            />
          </div>
        </div>
      </section>

      {/* Details Section (Overview, Problem, Solution) */}
      {(project.overview || project.problem || project.solution) && (
        <section className={styles.detailsSection}>
          <div className={styles.detailColumns}>
            {project.overview && (
              <div className={styles.detailCol}>
                <div className={styles.sectionLabelContainer}>
                  <div className={styles.sectionLabel}>02</div>
                  <div className={styles.sectionLine}></div>
                  <h3 className={styles.colTitle}>Ringkasan</h3>
                </div>
                <p className={styles.colText}>{project.overview}</p>
              </div>
            )}
            
            {project.problem && (
              <div className={styles.detailCol}>
                <div className={styles.sectionLabelContainer}>
                  <div className={styles.sectionLabel}>03</div>
                  <div className={styles.sectionLine}></div>
                  <h3 className={styles.colTitle}>Masalah</h3>
                </div>
                <p className={styles.colText}>{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div className={styles.detailCol}>
                <div className={styles.sectionLabelContainer}>
                  <div className={styles.sectionLabel}>04</div>
                  <div className={styles.sectionLine}></div>
                  <h3 className={styles.colTitle}>Solusi</h3>
                </div>
                <p className={styles.colText}>{project.solution}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabelContainer}>
              <div className={styles.sectionLabel}>05</div>
              <div className={styles.sectionLine}></div>
              <div className={styles.sectionText}>KAPABILITAS</div>
            </div>
            <h2 className={styles.sectionTitle}>Fitur Utama</h2>
          </div>
          
          <div className={styles.featuresGrid}>
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Architecture Flow */}
      {project.architecture && project.architecture.nodes && (
        <section className={styles.archSection}>
           <div className={styles.sectionLabelContainer}>
            <div className={styles.sectionLabel}>06</div>
            <div className={styles.sectionLine}></div>
            <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>Alur Arsitektur</h2>
          </div>
          
          <div className={styles.archFlow}>
            {project.architecture.nodes.map((node, idx) => (
              <div key={idx} className={styles.archNodeWrapper}>
                <div className={`${styles.archNode} ${idx === project.architecture!.nodes.length - 1 ? styles.archNodeDark : ''}`}>
                  <div className={styles.archIcon}>
                     <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                  </div>
                  <div className={styles.archLabel}>{node.label}</div>
                  {node.subLabel && <div className={styles.archSubLabel}>{node.subLabel}</div>}
                </div>
                {idx < project.architecture!.nodes.length - 1 && (
                  <div className={styles.archArrow}>
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interface Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <section className={styles.gallerySection}>
          <div className={styles.sectionLabelContainer}>
            <div className={styles.sectionLabel}>07</div>
            <div className={styles.sectionLine}></div>
            <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>Galeri Antarmuka</h2>
          </div>
          
          <div className={styles.galleryGrid}>
            {project.gallery.slice(1).map((img, idx) => (
              <div key={idx} className={styles.galleryItem}>
                <img src={img} alt={`Gallery ${idx + 1}`} className={styles.galleryImage} />
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Footer Nav removed as requested */}
    </div>
  );
};
