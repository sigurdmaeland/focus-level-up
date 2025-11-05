import { useState } from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaRocket, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
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

  // Country codes
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

  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="page">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            {/* Header */}
            <div className="contact-header">
              <h1>{t('contact.hero.title')}</h1>
              <p>{t('contact.hero.description')}</p>
            </div>

            {/* Compact Contact Info */}
            <div className="contact-info-compact">
              <span className="contact-item-compact">
                <FaEnvelope /> hei@focuslevelup.no
              </span>
              <span className="contact-item-compact">
                <FaPhone /> +47 483 53 943
              </span>
              <span className="contact-item-compact">
                <FaInstagram /> @focuslevelup
              </span>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="success-message">
                  <h3>{t('contact.form.successTitle')}</h3>
                  <p>{t('contact.form.successMessage')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
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
                    />
                  </div>
                  
                  <button type="submit" className="send-button">
                    <FaPaperPlane />
                    {t('contact.form.submitButton')}
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
