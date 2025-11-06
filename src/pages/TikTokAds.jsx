import { useTranslation } from '../hooks/useTranslation';
import { FaTiktok } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { BiLogoTiktok } from 'react-icons/bi';
import '../styles/Global.css';

export default function TikTokAds() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero text-center" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* TikTok Logo Left */}
          <div style={{
            position: 'absolute',
            left: '5%',
            top: '25%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            opacity: 0.25
          }}>
            <BiLogoTiktok 
              size={120} 
              color="#ff0050"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 0, 80, 0.3)) blur(1px)'
              }}
            />
          </div>
          
          {/* TikTok Logo Right */}
          <div style={{
            position: 'absolute',
            right: '2%',
            top: '45%',
            transform: 'translateY(-50%)',
            zIndex: 0,
            opacity: 0.25
          }}>
            <BiLogoTiktok 
              size={120} 
              color="#ff0050"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 0, 80, 0.3)) blur(1px)'
              }}
            />
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1>TikTok Annonsering</h1>
            <p style={{ 
              color: '#cccccc', 
              fontSize: '1.2rem', 
              maxWidth: '800px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Øk din digitale synlighet og nå markedsføringsmålene dine med effektive TikTok-annonser på verdens raskest voksende sosiale plattform. Utnyttt vår ekspertise for å maksimere din annonseringsstrategi.
            </p>
          </div>
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
