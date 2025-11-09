import { useTranslation } from '../hooks/useTranslation';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        marginTop: '8rem',
        marginBottom: '4rem',
        color: '#e5e7eb',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '2.6rem',
          marginBottom: '1.8rem',
          textAlign: 'center',
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #00bcd4, #00e6b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('privacy.title')}
      </h1>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        {t('privacy.intro')}
      </p>

      <h2
        style={{
          fontSize: '1.8rem',
          marginTop: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #00bcd4, #00e6b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('privacy.infoTitle')}
      </h2>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        {t('privacy.infoText')}
      </p>

      <h2
        style={{
          fontSize: '1.8rem',
          marginTop: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #00bcd4, #00e6b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('privacy.usageTitle')}
      </h2>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        {t('privacy.usageText')}
      </p>

      <h2
        style={{
          fontSize: '1.8rem',
          marginTop: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #00bcd4, #00e6b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('privacy.rightsTitle')}
      </h2>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        {t('privacy.rightsText')}
      </p>

      <h2
        style={{
          fontSize: '1.8rem',
          marginTop: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #00bcd4, #00e6b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('privacy.securityTitle')}
      </h2>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
        {t('privacy.securityText')}
      </p>

      <h2
        style={{
          fontSize: '1.8rem',
          marginTop: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #00bcd4, #00e6b6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('privacy.contactTitle')}
      </h2>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
        {t('privacy.contactText')}{' '}
        <a
          href="mailto:contact@focusmarketingagency.no"
          style={{
            color: '#00bcd4',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          
        >
          contact@focusmarketingagency.no
        </a>
        .
      </p>
    </div>
  );
}
