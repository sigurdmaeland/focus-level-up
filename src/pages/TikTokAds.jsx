import { FaTiktok } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { BiLogoTiktok } from 'react-icons/bi';
import { useTranslation } from '../hooks/useTranslation';
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
              color="#00bcd4"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.3)) blur(1px)'
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
              color="#00bcd4"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(0, 188, 212, 0.3)) blur(1px)'
              }}
            />
          </div>
          
          <div style={{ position: 'relative', zIndex: 1, padding: '0 1rem' }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '1.5rem'
            }}>{t('tiktokAds.hero.title')}</h1>
            <p style={{ 
              color: '#cccccc', 
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
              maxWidth: '800px', 
              margin: '0 auto',
              lineHeight: '1.6',
              padding: '0 1rem'
            }}>
              {t('tiktokAds.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Statistics Section - Clean Design */}
        <section className="section" style={{ marginTop: 'clamp(3rem, 8vw, 5rem)', padding: '0 1rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              marginBottom: 'clamp(2rem, 6vw, 4rem)', 
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              padding: '0 1rem'
            }}>{t('tiktokAds.stats.title')}</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'clamp(1rem, 3vw, 2rem)', 
              marginBottom: '3rem',
              padding: '0 1rem'
            }}
            className="stats-grid-tiktok">

            <style>{`
              .stats-grid-tiktok {
                display: grid !important;
                grid-template-columns: 1fr !important;
                gap: clamp(1rem, 3vw, 2rem) !important;
              }
              @media (min-width: 480px) {
                .stats-grid-tiktok {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
              @media (min-width: 1024px) {
                .stats-grid-tiktok {
                  grid-template-columns: repeat(4, 1fr) !important;
                }
              }
            `}</style>

              <div style={{ 
                padding: 'clamp(1.5rem, 4vw, 2rem)', 
                background: 'rgba(0, 188, 212, 0.1)', 
                borderRadius: '15px', 
                border: '1px solid rgba(0, 188, 212, 0.3)' 
              }}>
                <h3 style={{ 
                  color: '#00bcd4', 
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                  margin: '0 0 0.5rem 0', 
                  fontWeight: 'bold' 
                }}>1B+</h3>
                <p style={{ 
                  color: '#cccccc', 
                  margin: '0', 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' 
                }}>{t('tiktokAds.stats.users')}</p>
              </div>
              <div style={{ 
                padding: 'clamp(1.5rem, 4vw, 2rem)', 
                background: 'rgba(0, 188, 212, 0.1)', 
                borderRadius: '15px', 
                border: '1px solid rgba(0, 188, 212, 0.3)' 
              }}>
                <h3 style={{ 
                  color: '#00bcd4', 
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                  margin: '0 0 0.5rem 0', 
                  fontWeight: 'bold' 
                }}>89%</h3>
                <p style={{ 
                  color: '#cccccc', 
                  margin: '0', 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' 
                }}>{t('tiktokAds.stats.engagement')}</p>
              </div>
              <div style={{ 
                padding: 'clamp(1.5rem, 4vw, 2rem)', 
                background: 'rgba(0, 188, 212, 0.1)', 
                borderRadius: '15px', 
                border: '1px solid rgba(0, 188, 212, 0.3)' 
              }}>
                <h3 style={{ 
                  color: '#00bcd4', 
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                  margin: '0 0 0.5rem 0', 
                  fontWeight: 'bold' 
                }}>52 min</h3>
                <p style={{ 
                  color: '#cccccc', 
                  margin: '0', 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' 
                }}>{t('tiktokAds.stats.time')}</p>
              </div>
              <div style={{ 
                padding: 'clamp(1.5rem, 4vw, 2rem)', 
                background: 'rgba(0, 188, 212, 0.1)', 
                borderRadius: '15px', 
                border: '1px solid rgba(0, 188, 212, 0.3)' 
              }}>
                <h3 style={{ 
                  color: '#00bcd4', 
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)', 
                  margin: '0 0 0.5rem 0', 
                  fontWeight: 'bold' 
                }}>16-24</h3>
                <p style={{ 
                  color: '#cccccc', 
                  margin: '0', 
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' 
                }}>{t('tiktokAds.stats.age')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Run Ads Section - Text + Visual */}
        <section className="section" style={{ 
          marginTop: 'clamp(3rem, 8vw, 6rem)', 
          padding: 'clamp(2rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)', 
          background: 'linear-gradient(135deg, rgba(42, 82, 152, 0.05), rgba(255, 0, 80, 0.03))' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            gap: 'clamp(2rem, 6vw, 5rem)', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}
          className="content-wrapper-tiktok">

                    <style>{`
            .content-wrapper-tiktok {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
            .text-content-tiktok {
              width: 100% !important;
              text-align: center !important;
            }
            .image-content-tiktok {
              width: 100% !important;
              max-width: 600px !important;
            }
            @media (min-width: 768px) {
              .content-wrapper-tiktok {
                flex-direction: row !important;
                align-items: flex-start !important;
                gap: clamp(2rem, 5vw, 4rem) !important;
              }
              .text-content-tiktok {
                flex: 1 !important;
                text-align: left !important;
              }
              .image-content-tiktok {
                flex: 1 !important;
                max-width: none !important;
              }
            }
          `}</style>

            <div className="text-content-tiktok">
              <h2 style={{ 
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', 
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
                background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                padding: '0 1rem'
              }}>
                {t('tiktokAds.why.title')}
              </h2>
              <p style={{ 
                color: '#e0e0e0', 
                fontSize: 'clamp(1rem, 3vw, 1.15rem)', 
                lineHeight: '1.8', 
                marginBottom: 'clamp(1rem, 3vw, 2rem)',
                fontWeight: '400',
                maxWidth: '800px',
                margin: '0 auto',
                padding: '0 1rem'
              }}>
                {t('tiktokAds.why.description')}
              </p>

            </div>
            
            <div className="image-content-tiktok" style={{ padding: '0 1rem' }}>
              {/* Enhanced placeholder for image */}
              <div style={{ 
                width: '100%',  
                height: 'clamp(300px, 50vw, 450px)', 
                background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(0, 230, 178, 0.05))',
                border: '2px dashed rgba(0, 188, 212, 0.4)', 
                borderRadius: 'clamp(15px, 3vw, 20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00bcd4',
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                fontWeight: '500',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1rem' }}>📸</div>
                  <p style={{ margin: '0' }}>Bilde kommer her</p>
                  
                </div>
                
                {/* Decorative elements */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-10px', 
                  right: '-10px', 
                  width: 'clamp(40px, 8vw, 60px)', 
                  height: 'clamp(40px, 8vw, 60px)', 
                  background: 'rgba(255, 0, 80, 0.1)', 
                  borderRadius: '50%',
                  display: window.innerWidth > 768 ? 'block' : 'none'
                }}></div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-15px', 
                  left: '-15px', 
                  width: 'clamp(50px, 10vw, 80px)', 
                  height: 'clamp(50px, 10vw, 80px)', 
                  background: 'rgba(42, 82, 152, 0.1)', 
                  borderRadius: '50%',
                  display: window.innerWidth > 768 ? 'block' : 'none'
                }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - 4 Steps */}
        <section className="section" style={{ padding: '0 1rem', marginTop: 'clamp(3rem, 8vw, 5rem)' }}>
          <h2 className="text-center" style={{ 
            marginBottom: 'clamp(2rem, 6vw, 4rem)', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' 
          }}>{t('tiktokAds.process.title')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
          className="process-grid-tiktok">

          <style>{`
            .process-grid-tiktok {
              display: grid !important;
              grid-template-columns: 1fr !important;
              gap: clamp(1rem, 3vw, 2rem) !important;
            }
            @media (min-width: 768px) {
              .process-grid-tiktok {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #3f454fff, #47bcd3ff)', 
              borderRadius: '15px', 
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
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
                fontWeight: 'bold'
              }}>1</div>
              <h4 style={{ marginTop: '3rem', marginBottom: '1rem' }}>{t('tiktokAds.process.step1.title')}</h4>
              <p>{t('tiktokAds.process.step1.description')}</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #47bcd3ff, #3f454fff)', 
              borderRadius: '15px', 
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
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
                fontWeight: 'bold'
              }}>2</div>
              <h4 style={{ marginTop: '3rem', marginBottom: '1rem' }}>{t('tiktokAds.process.step2.title')}</h4>
              <p>{t('tiktokAds.process.step2.description')}</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #3f454fff, #47bcd3ff)', 
              borderRadius: '15px', 
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
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
                fontWeight: 'bold'
              }}>3</div>
              <h4 style={{ marginTop: '3rem', marginBottom: '1rem' }}>{t('tiktokAds.process.step3.title')}</h4>
              <p>{t('tiktokAds.process.step3.description')}</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #47bcd3ff, #3f454fff)', 
              borderRadius: '15px', 
              padding: '2rem',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{ 
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
                fontWeight: 'bold'
              }}>4</div>
              <h4 style={{ marginTop: '3rem', marginBottom: '1rem' }}>{t('tiktokAds.process.step4.title')}</h4>
              <p>{t('tiktokAds.process.step4.description')}</p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section text-center" style={{ 
          padding: 'clamp(3rem, 8vw, 5rem) 1rem',
          marginTop: 'clamp(3rem, 8vw, 5rem)',
          background: 'linear-gradient(135deg, rgba(255, 0, 80, 0.03), rgba(42, 82, 152, 0.05))',
          borderRadius: '20px',
          margin: 'clamp(3rem, 8vw, 5rem) 1rem 0'
        }}>
          <div style={{ 
            maxWidth: '700px', 
            margin: '0 auto',
            position: 'relative'
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
              borderRadius: '50%',
              opacity: 0.1,
              display: window.innerWidth > 768 ? 'block' : 'none'
            }}></div>
            
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'bold'
            }}>{t('tiktokAds.cta.title')}</h2>
            
            <p style={{ 
              color: '#e0e0e0', 
              fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: '1.7',
              padding: '0 1rem',
              fontWeight: '400'
            }}>
              {t('tiktokAds.cta.description')}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <a href="/kontakt" className="cta-button" style={{ 
                display: 'inline-block',
                fontSize: 'clamp(1.1rem, 3vw, 1.2rem)',
                padding: 'clamp(1rem, 3vw, 1.25rem) clamp(2rem, 5vw, 2.5rem)',
                background: 'linear-gradient(135deg, #00bcd4, #00e6b2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                border: 'none',
                boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)'
              }}>
{t('tiktokAds.cta.button')}
              </a>
              
              <p style={{ 
                color: '#999', 
                fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                margin: '0',
                fontStyle: 'italic'
              }}>
                {t('tiktokAds.cta.subtitle')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
