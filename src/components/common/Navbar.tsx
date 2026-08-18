import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/#about' },
    { name: 'Keahlian', path: '/#skills' },
    { name: 'Projek', path: '/#projects' },
    { name: 'Pengalaman', path: '/#experience' },
    { name: 'Kontak', path: '/#contact' },
  ];

  useEffect(() => {
    if (currentPath !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      // Add roughly half viewport height offset for smoother transitions
      const scrollPosition = window.scrollY + (window.innerHeight / 2); 
      
      // Order from bottom to top
      const sections = ['contact', 'experience', 'projects', 'skills', 'about'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          current = section;
          break;
        }
      }
      
      // If we are very close to top, force 'Beranda'
      if (window.scrollY < 100) {
        current = '';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsMobileMenuOpen(false); 
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      if (currentPath === '/') {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          navigate(`/#${hash}`, { replace: true });
        }
      }
    } else {
      if (path === '/' && currentPath === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/', { replace: true });
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={(e) => handleNavClick(e, '/')}>AYM.</Link>
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navItems.map((item) => {
          const itemHash = item.path.includes('#') ? item.path.split('#')[1] : '';
          
          let isActive = false;
          if (currentPath === '/') {
            if (itemHash === '') {
              isActive = activeSection === '';
            } else {
              isActive = activeSection === itemHash;
            }
          }
          
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={(e) => handleNavClick(e, item.path)}
              className={`${styles.navLink} ${isActive ? styles.activeText : ''}`}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="navbar-underline"
                  className={styles.underline}
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
      <div 
        className={styles.mobileMenuBtn} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        )}
      </div>
    </nav>
  );
};

