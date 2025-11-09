import { BiLogoTiktok } from 'react-icons/bi';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';

export default function TikTokAds() {
  const { t } = useTranslation();

  const stats = [
    { value: '1B+', label: t('tiktokAds.stats.users') },
    { value: '89%', label: t('tiktokAds.stats.engagement') },
    { value: '52 min', label: t('tiktokAds.stats.time') },
    { value: '16-24', label: t('tiktokAds.stats.age') },
  ];

  const processSteps = [1, 2, 3, 4];

  return (
    <div className="page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero text-center" style={{ position: 'relative', overflow: 'hidden' }}>
          {[{ left: '5%', top: '25%' }, { right: '2%', top: '45%' }].map((pos, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                ...pos,
                transform: 'translateY(-50%)',
                zIndex: 0,
                opacity: 0.25,
              }}
            >
              <BiLogoTiktok
                size={120}
                color="#00bcd4"
                style={{ filter: 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.3)) blur(1px)' }}
              />
            </div>
          ))}
          <div style={{ position: 'relative', zIndex: 1, padding: '0 1rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
              {t('tiktokAds.hero.title')}
            </h1>
            <p
              style={{
                color: '#cccccc',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                padding: '0 1rem',
              }}
            >
              {t('tiktokAds.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section" style={{ marginTop: 'clamp(3rem, 8vw, 5rem)', padding: '0 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                marginBottom: 'clamp(2rem, 6vw, 4rem)',
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                padding: '0 1rem',
              }}
            >
              {t('tiktokAds.stats.title')}
            </h2>
            <div
              className="stats-grid-tiktok"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'clamp(1rem, 3vw, 2rem)',
                marginBottom: '3rem',
                padding: '0 1rem',
              }}
            >
              <style>{`
                @media (min-width: 480px) {
                  .stats-grid-tiktok { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (min-width: 1024px) {
                  .stats-grid-tiktok { grid-template-columns: repeat(4, 1fr) !important; }
                }
              `}</style>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: 'clamp(1.5rem, 4vw, 2rem)',
                    background: 'rgba(0, 188, 212, 0.1)',
                    borderRadius: '15px',
                    border: '1px solid rgba(0, 188, 212, 0.3)',
                  }}
                >
                  <h3
                    style={{
                      color: '#00bcd4',
                      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                      margin: '0 0 0.5rem 0',
                      fontWeight: 'bold',
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    style={{
                      color: '#cccccc',
                      margin: 0,
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          style={{
            marginTop: 'clamp(3rem, 8vw, 6rem)',
            padding: 'clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)',
            background: 'linear-gradient(135deg, rgba(42, 82, 152, 0.05), rgba(255, 0, 80, 0.03))',
          }}
        >
          <div
            className="content-wrapper-tiktok"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(2rem, 6vw, 5rem)',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <style>{`
      @media (min-width: 768px) {
        .content-wrapper-tiktok { 
          flex-direction: row !important; 
          align-items: center !important; 
          gap: clamp(2rem, 5vw, 4rem) !important; 
        }
        .text-content-tiktok {
          text-align: left !important;
        }
      }

      @media (max-width: 767px) {
        .text-content-tiktok {
          text-align: center !important;
        }
        .image-content-tiktok img {
          width: 100% !important;
          height: auto !important;
          object-fit: contain !important;
        }
      }
    `}</style>

            {/* Tekst */}
            <div className="text-content-tiktok" style={{ textAlign: 'center', flex: 1 }}>
              <h2
                style={{
                  marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  padding: '0 1rem',
                }}
              >
                {t('tiktokAds.why.title')}
              </h2>
              <p
                style={{
                  color: '#e0e0e0',
                  fontSize: 'clamp(1rem, 3vw, 1.15rem)',
                  lineHeight: '1.8',
                  marginBottom: 'clamp(1rem, 3vw, 2rem)',
                  fontWeight: 400,
                  maxWidth: '800px',
                  margin: '0 auto',
                  padding: '0 1rem',
                }}
              >
                {t('tiktokAds.why.description')}
              </p>
            </div>

            {/* Bilde */}
            <div className="image-content-tiktok" style={{ flex: 1, padding: '0 1rem' }}>
              <div
                style={{
                  width: '100%',
                  height: 'clamp(350px, 50vw, 350px)',
                  borderRadius: 'clamp(15px, 3vw, 20px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/toktok.jpg"
                  alt="TikTok Ads"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: 'inherit',
                    display: 'block',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  onError={(e) => {
                    e.target.src = '/logo1.png';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" style={{ padding: '0 1rem', marginTop: 'clamp(3rem, 8vw, 5rem)' }}>
          <h2 className="text-center" style={{ marginBottom: 'clamp(2rem, 6vw, 4rem)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
            {t('tiktokAds.process.title')}
          </h2>
          <div className="process-grid-tiktok" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(1rem, 3vw, 2rem)', maxWidth: '1200px', margin: '0 auto' }}>
            <style>{`
              @media (min-width: 768px) {
                .process-grid-tiktok { grid-template-columns: repeat(2, 1fr) !important; }
              }
            `}</style>
            {processSteps.map((step) => (
              <div
                key={step}
                style={{
                  background: step % 2 === 1 ? 'linear-gradient(135deg, #3f454fff, #47bcd3ff)' : 'linear-gradient(135deg, #47bcd3ff, #3f454fff)',
                  borderRadius: '15px',
                  padding: '2rem',
                  color: 'white',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {step}
                </div>
                <h4 style={{ marginTop: '3rem', marginBottom: '1rem' }}>
                  {t(`tiktokAds.process.step${step}.title`)}
                </h4>
                <p>{t(`tiktokAds.process.step${step}.description`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section
          className="section text-center"
          style={{
            padding: 'clamp(3rem, 8vw, 5rem) 1rem',
            marginTop: 'clamp(3rem, 8vw, 5rem)',
            background: 'linear-gradient(135deg, rgba(255, 0, 80, 0.03), rgba(42, 82, 152, 0.05))',
            borderRadius: '20px',
          }}
        >
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
                background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              {t('tiktokAds.cta.title')}
            </h2>
            <p
              style={{
                color: '#e0e0e0',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                marginBottom: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: '1.7',
                fontWeight: 400,
              }}
            >
              {t('tiktokAds.cta.description')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <a
                href="/kontakt"
                className="cta-button"
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                  padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)',
                }}
              >
                {t('tiktokAds.cta.button')}
              </a>
              <p style={{ color: '#999', fontSize: 'clamp(0.9rem, 2vw, 1rem)', margin: 0, fontStyle: 'italic' }}>
                {t('tiktokAds.cta.subtitle')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
