import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/Global.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer style={{ 
      background: '#111111', 
      borderTop: '1px solid #333',
      marginTop: '0',
      padding: '3rem 0 2rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <img src="/logo1.png" alt="Focus Level Up" style={{ height: '100px', marginBottom: '0.25rem' }} />
            <p style={{ color: '#cccccc', lineHeight: '1.6' }}>
              {t('footer.companyDescription')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="mailto:post@focuslevelup.no" style={{ color: '#00bcd4', textDecoration: 'none' }}>
                post@focuslevelup.no
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#00e6b2', marginBottom: '1rem' }}>{t('footer.services.title')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/meta-ads" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.services.metaAds')}</Link>
              <Link to="/google-ads" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.services.googleAds')}</Link>
              <Link to="/website-shop" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.services.websiteShop')}</Link>
              <Link to="/seo" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.services.seo')}</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#00e6b2', marginBottom: '1rem' }}>{t('footer.company.title')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/about" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.company.about')}</Link>
              <Link to="/contact" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.company.contact')}</Link>
              <Link to="/services" style={{ color: '#cccccc', textDecoration: 'none' }}>{t('footer.company.allServices')}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#00e6b2', marginBottom: '1rem' }}>{t('footer.contactInfo.title')}</h4>
            <div style={{ color: '#cccccc', lineHeight: '1.6' }}>
              <p>+47 123 45 678</p>
              <p>post@focuslevelup.no</p>
              <p>
                Innovasjonsveien 1<br/>
                0123 Oslo
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#888', margin: 0 }}>
            {t('footer.copyright')}
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>
              {t('footer.links.privacy')}
            </a>
            <a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>
              {t('footer.links.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
