import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/#about' },
    { name: 'Keahlian', path: '/#skills' },
    { name: 'Projek', path: '/#projects' },
    { name: 'Pengalaman', path: '/#experience' },
    { name: 'Kontak', path: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      if (currentPath === '/') {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without full reload to reflect hash
          window.history.pushState(null, '', `/#${hash}`);
        }
      }
    } else {
      if (path === '/' && currentPath === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={(e) => handleNavClick(e, '/')}>AYM.</Link>
      <div className={styles.navLinks}>
        {navItems.map((item) => {
          const isActive = currentPath === '/' && (
            (item.path === '/' && !location.hash) || 
            (location.hash === item.path.replace('/', ''))
          );
          
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={(e) => handleNavClick(e, item.path)}
              className={`${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.mobileMenuBtn}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
    </nav>
  );
};

