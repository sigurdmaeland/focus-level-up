import { useTranslation } from '../hooks/useTranslation';
import { SiSnapchat } from 'react-icons/si';
import '../styles/Global.css';

export default function SnapchatAds() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero text-center" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Snapchat Logo Left */}
          <div style={{
            position: 'absolute',
            left: '5%',
            top: '25%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            opacity: 0.3
          }}>
            <SiSnapchat 
              size={120}
            />
          </div>
          
          {/* Snapchat Logo Right */}
          <div style={{
            position: 'absolute',
            right: '2%',
            top: '45%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            opacity: 0.3
          }}>
            <SiSnapchat 
              size={120}
            />
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1>Snapchat Annonsering</h1>
            <p style={{ 
              color: '#cccccc', 
              fontSize: '1.2rem', 
              maxWidth: '800px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Øk din digitale synlighet og nå markedsføringsmålene dine med effektive Snapchat-annonser på denne unike og kreative plattformen. Utnyttt vår ekspertise for å maksimere din annonseringsstrategi.
            </p>
          </div>
        </section>

        {/* What is Snapchat Ads Section */}
        <section className="section">
          <div className="text-center mb-4">
            <h2>{t('snapchatAds.what.title')}</h2>
            <p style={{ color: '#cccccc', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              {t('snapchatAds.what.description')}
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <h2 className="text-center mb-4">{t('snapchatAds.benefits.title')}</h2>
          <div className="grid">
            <div className="card">
              <h4>{t('snapchatAds.benefits.audience.title')}</h4>
              <p>{t('snapchatAds.benefits.audience.description')}</p>
            </div>
            <div className="card">
              <h4>{t('snapchatAds.benefits.ar.title')}</h4>
              <p>{t('snapchatAds.benefits.ar.description')}</p>
            </div>
            <div className="card">
              <h4>{t('snapchatAds.benefits.engagement.title')}</h4>
              <p>{t('snapchatAds.benefits.engagement.description')}</p>
            </div>
            <div className="card">
              <h4>{t('snapchatAds.benefits.targeting.title')}</h4>
              <p>{t('snapchatAds.benefits.targeting.description')}</p>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="section">
          <h2 className="text-center mb-4">{t('snapchatAds.process.title')}</h2>
          <div className="grid">
            <div className="card">
              <h4>{t('snapchatAds.process.strategy.title')}</h4>
              <p>{t('snapchatAds.process.strategy.description')}</p>
            </div>
            <div className="card">
              <h4>{t('snapchatAds.process.creative.title')}</h4>
              <p>{t('snapchatAds.process.creative.description')}</p>
            </div>
            <div className="card">
              <h4>{t('snapchatAds.process.optimization.title')}</h4>
              <p>{t('snapchatAds.process.optimization.description')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section text-center">
          <h2>{t('snapchatAds.cta.title')}</h2>
          <p style={{ color: '#cccccc', fontSize: '1.2rem', marginBottom: '2rem' }}>
            {t('snapchatAds.cta.description')}
          </p>
          <a href="/contact" className="cta-button">
            {t('snapchatAds.cta.button')}
          </a>
        </section>
      </div>
    </div>
  );
}
