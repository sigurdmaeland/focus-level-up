import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaLightbulb, FaCamera, FaPalette } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';
import '../styles/About.css';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="page">
      {/* Original Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <h1>{t('about.hero.title')}</h1>
          <p className="about-hero-text">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="about-container">
          <div className="intro-content">
            <div className="intro-text">
              <span className="intro-badge">{t('about.introduction.badge')}</span>
              <h2>{t('about.introduction.title')}</h2>
              <p>
                {t('about.introduction.text1')}
              </p>
              <p>
                {t('about.introduction.text2')}
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <img src="/thomas.png" alt="Thomas"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="about-container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>{t('about.stats.projects')}</p>
            </div>
            <div className="stat-item">
              <h3>2+</h3>
              <p>{t('about.stats.experience')}</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>{t('about.stats.satisfaction')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="about-container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>{t('about.mission.title')}</h2>
              <p>
                {t('about.mission.text1')}
              </p>
              <p>
                {t('about.mission.text2')}
              </p>
            </div>
            <div className="mission-icon">
              <FaRocket />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-container">
          <h2>{t('about.values.title')}</h2>
          <div className="values-grid">
            <div className="value-item">
              <FaUsers />
              <h3>{t('about.values.partnership.title')}</h3>
              <p>{t('about.values.partnership.description')}</p>
            </div>
            <div className="value-item">
              <FaLightbulb />
              <h3>{t('about.values.innovation.title')}</h3>
              <p>{t('about.values.innovation.description')}</p>
            </div>
            <div className="value-item">
              <FaRocket />
              <h3>{t('about.values.results.title')}</h3>
              <p>{t('about.values.results.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <h2>{t('about.cta.title')}</h2>
          <p>{t('about.cta.description')}</p>
          <Link to="/contact" className="about-cta-button">
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
