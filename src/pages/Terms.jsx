import { useTranslation } from '../hooks/useTranslation';

export default function Terms() {
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
        {t('terms.title')}
      </h1>

      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>
        {t('terms.intro')}
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
        {t('terms.useTitle')}
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>
        {t('terms.useText')}
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
        {t('terms.ipTitle')}
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>
        {t('terms.ipText')}
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
        {t('terms.liabilityTitle')}
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e5e7eb', marginBottom: '1.5rem' }}>
        {t('terms.liabilityText')}
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
        {t('terms.contactTitle')}
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#e5e7eb' }}>
        {t('terms.contactText')}{' '}
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
