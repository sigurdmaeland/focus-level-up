import { Link } from 'react-router-dom';
import { FaGoogle, FaSearch, FaShoppingCart, FaYoutube, FaChartLine, FaBullseye, FaRocket, FaMobile } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';
import '../styles/Ads.css';

export default function GoogleAds() {
  const { t } = useTranslation();
  
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="ads-hero">
        <div className="ads-container">
          <div className="ads-hero-content">
            <div className="platform-badge google">{t('googleAds.hero.badge')}</div>
            <h1>{t('googleAds.hero.title')}</h1>
            <p className="ads-hero-subtitle">
              {t('googleAds.hero.subtitle')}
            </p>
            <Link to="/contact" className="ads-hero-cta">
              {t('googleAds.hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ads-stats">
        <div className="ads-container">
          <div className="ads-stats-header">
            <h2>{t('googleAds.stats.title')}</h2>
            <p className="ads-stats-subtitle">
              {t('googleAds.stats.subtitle')}
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">8.5B</span>
              <span className="stat-label">{t('googleAds.stats.stat1')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">92%</span>
              <span className="stat-label">{t('googleAds.stats.stat2')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">300%</span>
              <span className="stat-label">{t('googleAds.stats.stat3')}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">65%</span>
              <span className="stat-label">{t('googleAds.stats.stat4')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ads-features">
        <div className="ads-container">
          <div className="ads-stats-header">
            <h2>{t('googleAds.features.title')}</h2>
            <p className="ads-stats-subtitle">
              {t('googleAds.features.subtitle')}
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaSearch />
              </div>
              <h3>{t('googleAds.features.search.title')}</h3>
              <p>
                {t('googleAds.features.search.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaShoppingCart />
              </div>
              <h3>{t('googleAds.features.shopping.title')}</h3>
              <p>
                {t('googleAds.features.shopping.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaYoutube />
              </div>
              <h3>{t('googleAds.features.youtube.title')}</h3>
              <p>
                {t('googleAds.features.youtube.description')}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>{t('googleAds.features.performance.title')}</h3>
              <p>
                {t('googleAds.features.performance.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ads-process">
        <div className="ads-container">
          <div className="ads-stats-header">
            <h2>{t('googleAds.process.title')}</h2>
            <p className="ads-stats-subtitle">
              {t('googleAds.process.subtitle')}
            </p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>{t('googleAds.process.step1.title')}</h3>
                <p>
                  {t('googleAds.process.step1.description')}
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>{t('googleAds.process.step2.title')}</h3>
                <p>
                  {t('googleAds.process.step2.description')}
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>{t('googleAds.process.step3.title')}</h3>
                <p>
                  {t('googleAds.process.step3.description')}
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>{t('googleAds.process.step4.title')}</h3>
                <p>
                  {t('googleAds.process.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ads-cta">
        <div className="ads-container">
          <h2>{t('googleAds.cta.title')}</h2>
          <p>
            {t('googleAds.cta.subtitle')}
          </p>
          <Link to="/contact" className="ads-hero-cta">
            {t('googleAds.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
