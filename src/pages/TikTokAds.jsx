import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';

export default function TikTokAds() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero text-center">
          <h1>{t('tiktokAds.hero.title')}</h1>
          <p>{t('tiktokAds.hero.subtitle')}</p>
          <a href="/contact" className="cta-button">
            {t('tiktokAds.hero.cta')}
          </a>
        </section>

        {/* What is TikTok Ads Section */}
        <section className="section">
          <div className="text-center mb-4">
            <h2>{t('tiktokAds.what.title')}</h2>
            <p style={{ color: '#cccccc', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              {t('tiktokAds.what.description')}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <h2 className="text-center mb-4">{t('tiktokAds.benefits.title')}</h2>
          <div className="grid">
            <div className="card">
              <h4>{t('tiktokAds.benefits.reach.title')}</h4>
              <p>{t('tiktokAds.benefits.reach.description')}</p>
            </div>
            <div className="card">
              <h4>{t('tiktokAds.benefits.engagement.title')}</h4>
              <p>{t('tiktokAds.benefits.engagement.description')}</p>
            </div>
            <div className="card">
              <h4>{t('tiktokAds.benefits.targeting.title')}</h4>
              <p>{t('tiktokAds.benefits.targeting.description')}</p>
            </div>
            <div className="card">
              <h4>{t('tiktokAds.benefits.creative.title')}</h4>
              <p>{t('tiktokAds.benefits.creative.description')}</p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="section">
          <h2 className="text-center mb-4">{t('tiktokAds.process.title')}</h2>
          <div className="grid">
            <div className="card">
              <h4>{t('tiktokAds.process.strategy.title')}</h4>
              <p>{t('tiktokAds.process.strategy.description')}</p>
            </div>
            <div className="card">
              <h4>{t('tiktokAds.process.content.title')}</h4>
              <p>{t('tiktokAds.process.content.description')}</p>
            </div>
            <div className="card">
              <h4>{t('tiktokAds.process.optimization.title')}</h4>
              <p>{t('tiktokAds.process.optimization.description')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section text-center">
          <h2>{t('tiktokAds.cta.title')}</h2>
          <p style={{ color: '#cccccc', fontSize: '1.2rem', marginBottom: '2rem' }}>
            {t('tiktokAds.cta.description')}
          </p>
          <a href="/contact" className="cta-button">
            {t('tiktokAds.cta.button')}
          </a>
        </section>
      </div>
    </div>
  );
}
