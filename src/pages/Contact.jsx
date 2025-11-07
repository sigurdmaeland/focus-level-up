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

  // Initialiser EmailJS
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
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Hent EmailJS-konfigurasjon
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const adminTemplateID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
      const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('--- DEBUG: EmailJS config ---');
      console.log('Service ID:', serviceID);
      console.log('Admin Template ID:', adminTemplateID);
      console.log('Auto-reply Template ID:', autoReplyTemplateID);
      console.log('Public Key (start):', publicKey?.substring(0,8));
      console.log('-----------------------------');

      if (!serviceID || !adminTemplateID || !autoReplyTemplateID || !publicKey) {
        throw new Error('EmailJS ikke konfigurert. Sjekk .env-filen.');
      }

      const adminTemplateParams = {
  from_name: formData.name,
  phone: `${formData.countryCode} ${formData.phone}`,
  message: formData.message,
  date: new Date().toLocaleString(),
  reply_to: formData.email // dette er brukerens e-post
};


      // Auto-reply til kunden
      const autoReplyTemplateParams = {
        to_name: formData.name,
        email: formData.email,
        customer_name: formData.name,
        company_name: 'Focus Level Up'
      };

      // --- DEBUG: logg parametre ---
      console.log('--- DEBUG: Admin template parameters ---');
      console.log(adminTemplateParams);
      console.log('--- DEBUG: Auto-reply template parameters ---');
      console.log(autoReplyTemplateParams);
      console.log('----------------------------------------');

      // Send admin-notifikasjon
      console.log('Sender admin-notifikasjon...');
      const adminResult = await emailjs.send(
        serviceID,
        adminTemplateID,
        adminTemplateParams,
        publicKey
      );
      console.log('Admin e-post sendt!', adminResult.text);

      // Send auto-reply til kunden
      console.log('Sender auto-reply til kunde...');
      const autoReplyResult = await emailjs.send(
        serviceID,
        autoReplyTemplateID,
        autoReplyTemplateParams,
        publicKey
      );
      console.log('Auto-reply sendt!', autoReplyResult.text);

      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        countryCode: '+47',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Feil ved sending av e-post:', error);

      let errorMessage = 'Noe gikk galt ved sending av meldingen. ';
      
      if (error.status === 412) {
        errorMessage = 'SMTP/EmailJS-konfigurasjonsfeil. Sjekk Service ID, Template ID og e-postinnstillinger.';
      } else if (error.status === 400) {
        errorMessage = 'Ugyldig forespørsel. Sjekk at alle felter er fylt ut korrekt.';
      } else if (error.status === 401) {
        errorMessage = 'Autorisasjonsfeil. Sjekk EmailJS Public Key.';
      } else if (error.status === 404) {
        errorMessage = 'Service eller template ikke funnet. Sjekk EmailJS IDs.';
      } else {
        errorMessage += 'Prøv igjen senere eller kontakt oss direkte på contact@focusmarketingagency.no';
      }
      
      setError(errorMessage);
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
              <span className="contact-item-compact">
                <FaEnvelope /> contact@focusmarketingagency.no
              </span>
              <span className="contact-item-compact">
                <FaPhone /> +47 97405764
              </span>
              <span className="contact-item-compact">
                <FaInstagram /> @focusmarketingagency.no
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
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="form-group">
                      <label>{t('contact.form.emailLabel')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                        disabled={isLoading}
                      />
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
                  </div>
                  
                  <div className="form-group">
                    <label>{t('contact.form.messageLabel')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      rows="5"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  
                  <button type="submit" className="send-button" disabled={isLoading}>
                    <FaPaperPlane />
                    {isLoading ? 'Sender...' : t('contact.form.submitButton')}
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
