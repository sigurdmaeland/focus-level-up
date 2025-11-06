import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const { changeLanguage, currentLanguage } = useLanguage();
  const { t } = useTranslation();

  const services = [
    { 
      name: t('nav.servicesDropdown.metaAds'), 
      path: '/meta-ads'
    },
    { 
      name: t('nav.servicesDropdown.tiktokAds'), 
      path: '/tiktok-ads'
    },
    { 
      name: t('nav.servicesDropdown.snapchatAds'), 
      path: '/snapchat-ads'
    },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    const newState = !mobileOpen;
    setMobileOpen(newState);
    
    // Prevent body scroll when mobile menu is open
    if (newState) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link to="/" className={styles.logoLink} onClick={closeMobileMenu}>
            <img src="/logo1.png" alt="Focus Level Up" className={styles.logo} />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navMenu}>
            <Link to="/" className={styles.navLink}>{t('nav.home')}</Link>
            
            <div 
              className={styles.dropdown} 
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={styles.navLink}>
                {t('nav.services')}
                <svg className={styles.dropdownIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {services.map((service) => (
                    <Link 
                      key={service.path} 
                      to={service.path} 
                      className={styles.dropdownItem}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/about" className={styles.navLink}>{t('nav.about')}</Link>
            <Link to="/contact" className={styles.navLink}>{t('nav.contact')}</Link>
          </div>

          {/* Language Switcher */}
          <div className={styles.languageSwitcher}>
            <div 
              className={`${styles.langOption} ${currentLanguage === 'no' ? styles.active : ''}`}
              onClick={() => changeLanguage('no')}
            >
              <img src="https://flagcdn.com/no.svg" alt="Norwegian" className={styles.flag} />
              <span>NO</span>
            </div>
            <div 
              className={`${styles.langOption} ${currentLanguage === 'en' ? styles.active : ''}`}
              onClick={() => changeLanguage('en')}
            >
              <img src="https://flagcdn.com/gb.svg" alt="English" className={styles.flag} />
              <span>EN</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`${styles.mobileMenuBtn} ${mobileOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
           

            {/* Mobile Navigation Links */}
            <div className={styles.mobileNavigation}>
              <Link to="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                {t('nav.home')}
              </Link>
              
              <div className={styles.mobileDropdown}>
                <button 
                  className={`${styles.mobileNavLink} ${styles.mobileDropdownToggle}`}
                  onClick={toggleMobileDropdown}
                  type="button"
                >
                  <span>{t('nav.services')}</span>
                  <svg className={`${styles.mobileDropdownIcon} ${mobileDropdownOpen ? styles.rotate : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {mobileDropdownOpen && (
                  <div className={styles.mobileDropdownItems}>
                    {services.map((service) => (
                      <Link 
                        key={service.path}
                        to={service.path} 
                        className={styles.mobileDropdownItem}
                        onClick={closeMobileMenu}
                      >
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                {t('nav.about')}
              </Link>
              <Link to="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                {t('nav.contact')}
              </Link>
            </div>


          </div>
        </div>
      )}
    </>
  );
}
