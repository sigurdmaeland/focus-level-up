import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import emailjs from '@emailjs/browser';
import '../styles/Global.css';
import '../styles/Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+47',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init({ publicKey });
      console.log('EmailJS initialisert med public key:', publicKey.substring(0, 8) + '...');
    } else {
      console.error('EmailJS Public Key ikke funnet i miljøvariabler');
    }
  }, []);

  const countryCodes = [
    { code: '+47', country: 'NO', name: 'Norge' },
    { code: '+46', country: 'SE', name: 'Sverige' },
    { code: '+45', country: 'DK', name: 'Danmark' },
    { code: '+49', country: 'DE', name: 'Tyskland' },
    { code: '+33', country: 'FR', name: 'Frankrike' },
    { code: '+44', country: 'GB', name: 'Storbritannia' },
    { code: '+1', country: 'US', name: 'USA' },
    { code: '+31', country: 'NL', name: 'Nederland' },
    { code: '+32', country: 'BE', name: 'Belgia' },
    { code: '+41', country: 'CH', name: 'Sveits' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
  const newErrors = {};

  // Navn
  const name = formData.name.trim();

// Minimum 2 bokstaver, maksimum 50 tegn totalt
if (!name) {
  newErrors.name = 'Navn er påkrevd';
} else if (name.replace(/[^a-zA-ZæøåÆØÅ]/g, '').length < 2) {
  newErrors.name = 'Navnet må inneholde minst 2 bokstaver';
} else if (name.length > 50) {
  newErrors.name = 'Navnet kan ikke være lengre enn 50 tegn';
} else if (!/^[a-zA-ZæøåÆØÅ\s'-]+$/.test(name)) {
  newErrors.name = 'Navnet kan kun inneholde bokstaver, mellomrom, bindestrek eller apostrof';
}


  // E-post
  if (!formData.email.trim()) {
    newErrors.email = 'E-post er påkrevd';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    newErrors.email = 'Ugyldig e-postadresse';
  }

 const phoneRaw = formData.phone.trim();
const digitsOnly = phoneRaw.replace(/\D/g, ''); // fjerner alt som ikke er sifre

if (!digitsOnly) {
  newErrors.phone = 'Telefonnummer er påkrevd';
} else if (digitsOnly.length < 6) {
  newErrors.phone = 'Telefonnummer må ha minst 6 sifre';
} else if (digitsOnly.length > 15) {
  newErrors.phone = 'Telefonnummer kan ikke ha mer enn 15 sifre';
} else if (!/^\+?\d{6,15}$/.test('+' + digitsOnly)) {
  newErrors.phone = 'Telefonnummer er ugyldig. Inkluder landskode om nødvendig';
}

  // Melding
  if (!formData.message.trim()) {
    newErrors.message = 'Meldingen kan ikke være tom';
  } else if (formData.message.trim().length < 3) {
    newErrors.message = 'Meldingen er for kort';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validate()) return;

    setIsLoading(true);

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const adminTemplateID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
      const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !adminTemplateID || !autoReplyTemplateID || !publicKey) {
        throw new Error('EmailJS ikke konfigurert. Sjekk .env-filen.');
      }

      const adminTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        message: formData.message,
        date: new Date().toLocaleString(),
        reply_to: formData.email
      };

      const autoReplyTemplateParams = {
        to_name: formData.name,
        email: formData.email,
        customer_name: formData.name,
        company_name: 'Focus Level Up'
      };

      await emailjs.send(serviceID, adminTemplateID, adminTemplateParams, publicKey);
      await emailjs.send(serviceID, autoReplyTemplateID, autoReplyTemplateParams, publicKey);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', countryCode: '+47', phone: '', message: '' });
    } catch (err) {
      console.error('Feil ved sending av e-post:', err);
      setError('Noe gikk galt ved sending av meldingen. Prøv igjen senere.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-header">
              <h1>{t('contact.hero.title')}</h1>
              <p>{t('contact.hero.description')}</p>
            </div>

            <div className="contact-info-compact">
              <span className="contact-item-compact"><FaPhone /> +47 97405764</span>
              <span className="contact-item-compact"><FaEnvelope /> contact@focusmarketingagency.no</span>
              <span className="contact-item-compact">
                <FaInstagram />
                <a
                  href="https://www.instagram.com/focus.level.up"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  @focus.level.up
                </a>
              </span>
            </div>

            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="success-message">
                  <h3>{t('contact.form.successTitle')}</h3>
                  <p>{t('contact.form.successMessage')}</p>
                  <button 
                    onClick={() => setIsSubmitted(false)} 
                    className="send-button"
                    style={{ marginTop: '1rem' }}
                  >
                    Send ny melding
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {error && (
                    <div className="error-message" style={{ 
                      color: '#ff4444', 
                      marginBottom: '1rem', 
                      padding: '0.75rem', 
                      backgroundColor: 'rgba(255, 68, 68, 0.1)', 
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 68, 68, 0.3)'
                    }}>
                      {error}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label>{t('contact.form.nameLabel')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.namePlaceholder')}
                        disabled={isLoading}
                      />
                      {errors.name && <div className="error-message" style={{marginTop:'0.25rem'}}>{errors.name}</div>}
                    </div>
                    <div className="form-group">
                      <label>{t('contact.form.emailLabel')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        disabled={isLoading}
                      />
                      {errors.email && <div className="error-message" style={{marginTop:'0.25rem'}}>{errors.email}</div>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.form.phoneLabel')}</label>
                    <div className="phone-input-group">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="country-select"
                        disabled={isLoading}
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.country} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="phone-input"
                        disabled={isLoading}
                      />
                    </div>
                    {errors.phone && <div className="error-message" style={{marginTop:'0.25rem'}}>{errors.phone}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.form.messageLabel')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows="5"
                      disabled={isLoading}
                    />
                    {errors.message && <div className="error-message" style={{marginTop:'0.25rem'}}>{errors.message}</div>}
                  </div>
                  
                  <button type="submit" className="send-button" disabled={isLoading}>
                    <FaPaperPlane /> {isLoading ? 'Sender...' : t('contact.form.submitButton')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
