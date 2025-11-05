import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaBullseye, FaChartLine, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';
import '../styles/Ads.css';

export default function MetaAds() {
  const { t } = useTranslation();
  
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="ads-hero">
        <div className="ads-container">
          <div className="ads-hero-content">
            <div className="platform-badge meta">{t('metaAds.hero.badge')}</div>
            <h1>{t('metaAds.hero.title')}</h1>
            <p className="ads-hero-subtitle">
              {t('metaAds.hero.subtitle')}
            </p>
            <Link to="/contact" className="ads-hero-cta">
              {t('metaAds.hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ads-stats">
        <div className="ads-container">
          <div className="ads-stats-header">
            <h2>{t('metaAds.stats.title')}</h2>
            <p className="ads-stats-subtitle">
              {t('metaAds.stats.subtitle')}
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">3.0B</span>
              <span className="stat-label">{t('metaAds.stats.stat1')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2.0B</span>
              <span className="stat-label">{t('metaAds.stats.stat2')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">400%</span>
              <span className="stat-label">{t('metaAds.stats.stat3')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1.6B</span>
              <span className="stat-label">{t('metaAds.stats.stat4')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ads-features">
        <div className="ads-container">
          <div className="ads-stats-header">
            <h2>{t('metaAds.features.title')}</h2>
            <p className="ads-stats-subtitle">
              {t('metaAds.features.subtitle')}
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaFacebook />
              </div>
              <h3>{t('metaAds.features.facebook.title')}</h3>
              <p>
                {t('metaAds.features.facebook.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaInstagram />
              </div>
              <h3>{t('metaAds.features.instagram.title')}</h3>
              <p>
                {t('metaAds.features.instagram.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaWhatsapp />
              </div>
              <h3>{t('metaAds.features.messenger.title')}</h3>
              <p>
                {t('metaAds.features.messenger.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaBullseye />
              </div>
              <h3>{t('metaAds.features.targeting.title')}</h3>
              <p>
                {t('metaAds.features.targeting.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ads-process">
        <div className="ads-container">
          <div className="ads-stats-header">
            <h2>{t('metaAds.process.title')}</h2>
            <p className="ads-stats-subtitle">
              {t('metaAds.process.subtitle')}
            </p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>{t('metaAds.process.step1.title')}</h3>
                <p>
                  {t('metaAds.process.step1.description')}
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>{t('metaAds.process.step2.title')}</h3>
                <p>
                  {t('metaAds.process.step2.description')}
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>{t('metaAds.process.step3.title')}</h3>
                <p>
                  {t('metaAds.process.step3.description')}
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>{t('metaAds.process.step4.title')}</h3>
                <p>
                  {t('metaAds.process.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ads-cta">
        <div className="ads-container">
          <h2>{t('metaAds.cta.title')}</h2>
          <p>
            {t('metaAds.cta.subtitle')}
          </p>
          <Link to="/contact" className="ads-hero-cta">
            {t('metaAds.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
