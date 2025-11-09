import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    } else {
      setShowIcon(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    setShowIcon(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    setShowIcon(true);
  };

  const handleOpenConsent = () => {
    setIsVisible(true);
    setShowIcon(false);
  };

  return (
    <>
      {isVisible && (
        <div style={{
          position: 'fixed',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0D1117',
          color: '#C9D1D9',
          padding: '35px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          zIndex: 1000,
          maxWidth: '650px',
          textAlign: 'center',
        }}>
          <p style={{ margin: '0 0 20px', fontSize: '16px', lineHeight: '1.6' }}>
            We use cookies to ensure you get the best experience on our website. By continuing, you agree to our use of cookies.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button 
              onClick={handleAccept} 
              style={{
                padding: '12px 25px',
                background: '#00D1A9',
                color: '#0D1117',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
              }}
            >
              Accept
            </button>
            <button 
              onClick={handleDecline} 
              style={{
                padding: '12px 25px',
                background: '#F85149',
                color: '#0D1117',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
              }}
            >
              Decline
            </button>
          </div>
        </div>
      )}

      {showIcon && (
        <button 
          onClick={handleOpenConsent} 
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            background: '#0D1117',
            color: '#C9D1D9',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
        >
          <Cookie size={24} color="#C9D1D9" />
        </button>
      )}
    </>
  );
};

export default CookieConsent;