import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';
import '../styles/Home.css';

// Professional Icons from React Icons
import { 
  FaUsers, 
  FaChartLine, 
  FaBullseye, 
  FaHeadset,
  FaBullhorn,
  FaVideo,
  FaCamera,
  FaStar
} from 'react-icons/fa';

import { 
  MdTrendingUp,
  MdGroups,
  MdRocketLaunch
} from 'react-icons/md';

import { 
  HiSparkles,
  HiLightBulb
} from 'react-icons/hi';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default
  const { t } = useTranslation();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Typing animation
  useEffect(() => {
    const texts = t('home.hero.typingTexts');
    
    // Ensure texts is an array
    if (!Array.isArray(texts) || texts.length === 0) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;
    let typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (!currentText) return;
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 80 : 150;
      
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before next word
      }
      
      timeoutId = setTimeout(type, typeSpeed);
    };
    
    // Start typing animation
    type();
    
    // Cleanup function to clear timeout when component unmounts or language changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [t]);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-typing">
        <div className="container">
          <div className="hero-content-center">
            <h1 className="typing-headline">
              <span className="static-text">{t('home.hero.staticText')}</span>
              <span className="typing-text" id="typing-text"></span>
              <span className="cursor">|</span>
            </h1>
            <Link to="/contact" className="hero-cta">
              {t('home.hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-modern">
        <div className="container">
          <div className="stats-banner">
            <div className="stats-content">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div className="stat-info">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">{t('home.stats.customers')}</span>
                </div>
              </div>
              
              <div className="stats-divider"></div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <MdTrendingUp />
                </div>
                <div className="stat-info">
                  <span className="stat-number">250%</span>
                  <span className="stat-label">{t('home.stats.roi')}</span>
                </div>
              </div>
              
              <div className="stats-divider"></div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBullseye />
                </div>
                <div className="stat-info">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">{t('home.stats.satisfaction')}</span>
                </div>
              </div>
              
              <div className="stats-divider"></div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaHeadset />
                </div>
                <div className="stat-info">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">{t('home.stats.support')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-modern">
        <div className="container">
                    <div className="section-header">
            <div className="section-badge">
              <HiSparkles className="badge-icon" />
              {t('home.services.badge')}
            </div>
            <h2><span className="gradient-text">{t('home.services.title')}</span></h2>
          </div>
          
          <div className="services-grid-clean">
            <div className="service-card-clean">
              <div className="service-icon">
                <FaBullhorn />
              </div>
              <h3>{t('home.services.metaAds.title')}</h3>
              <p>
                {t('home.services.metaAds.description')}
              </p>
              <Link to="/meta-ads" className="service-link">
                {t('home.services.metaAds.cta')}
              </Link>
            </div>

            <div className="service-card-clean">
              <div className="service-icon">
                <FaVideo />
              </div>
              <h3>{t('home.services.tiktokAds.title')}</h3>
              <p>
                {t('home.services.tiktokAds.description')}
              </p>
              <Link to="/tiktok-ads" className="service-link">
                {t('home.services.tiktokAds.cta')}
              </Link>
            </div>

            <div className="service-card-clean">
              <div className="service-icon">
                <FaCamera />
              </div>
              <h3>{t('home.services.snapchatAds.title')}</h3>
              <p>
                {t('home.services.snapchatAds.description')}
              </p>
              <Link to="/snapchat-ads" className="service-link">
                {t('home.services.snapchatAds.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <div className="results-grid">
            <div className="results-content">
              <div className="results-badge">
                {t('home.results.badge')}
              </div>
              <h2>{t('home.results.title')}</h2>
              <p>
                {t('home.results.description')}
              </p>
              <Link to="/contact" className="results-cta">
                {t('home.results.cta')}
              </Link>
            </div>
            <div className="results-visual">
              <div className="dashboard-mockup">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Analytics Dashboard"
                  className="dashboard-img dashboard-1"
                />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Marketing Analytics"
                  className="dashboard-img dashboard-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Performance Report"
                  className="dashboard-img dashboard-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <MdGroups className="badge-icon" />
              {t('home.testimonials.badge')}
            </div>
            <h2>{t('home.testimonials.title')}</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p>
                  "{t('home.testimonials.testimonial1.text')}"
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt={t('home.testimonials.testimonial1.author')}
                />
                <div>
                  <strong>{t('home.testimonials.testimonial1.author')}</strong>
                  <span>{t('home.testimonials.testimonial1.company')}</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p>
                  "{t('home.testimonials.testimonial2.text')}"
                </p>
              </div>
              <div className="testimonial-author">
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  👩‍💼
                </div>
                <div>
                  <strong>{t('home.testimonials.testimonial2.author')}</strong>
                  <span>{t('home.testimonials.testimonial2.company')}</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p>
                  "{t('home.testimonials.testimonial3.text')}"
                </p>
              </div>
              <div className="testimonial-author">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt={t('home.testimonials.testimonial3.author')}
                />
                <div>
                  <strong>{t('home.testimonials.testimonial3.author')}</strong>
                  <span>{t('home.testimonials.testimonial3.company')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <HiLightBulb className="badge-icon" />
              {t('home.faq.badge')}
            </div>
            <h2>{t('home.faq.title')}</h2>
          </div>
          
          <div className="faq-container">
            {t('home.faq.questions').map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${openFaq === index ? 'open' : ''}`}>+</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>
              {t('home.cta.description')}
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary large">
                {t('home.cta.primaryButton')}
              </Link>
            </div>
            <div className="cta-guarantee">
              <span>✓ {t('home.cta.guarantee.free')}</span>
              <span>✓ {t('home.cta.guarantee.commitment')}</span>
              <span>✓ {t('home.cta.guarantee.response')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
