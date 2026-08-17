import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>AYM.</Link>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Arda Yudrik Malana. Dirancang dengan presisi.
      </div>
      <div className={styles.links}>
        <a href="https://github.com/ardayrkmm" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
        <a href="https://www.linkedin.com/ardayudrik" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
        <a href="mailto:ardyrkm23@gmail.com" className={styles.link}>Email</a>
        <a href="https://wa.me/6285951545918" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
      </div>
    </footer>
  );
};

