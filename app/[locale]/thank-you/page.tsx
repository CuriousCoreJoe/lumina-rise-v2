'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const t_footer = useTranslations('Footer');

  useEffect(() => {
    // Auto-download the PDF when page loads
    const link = document.createElement('a');
    link.href = '/resources/subscription.pdf';
    link.download = 'Daily-Self-Care-Tracker.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Thank You for Subscribing!</h2>
          <p>Your free Daily Self-Care Tracker is ready for download.</p>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="about" style={{ padding: '100px 0', backgroundColor: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="thank-you-box" style={{ 
            backgroundColor: 'var(--light-color)', 
            borderRadius: '10px', 
            padding: '40px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)', 
            textAlign: 'center', 
            maxWidth: '700px', 
            margin: '0 auto' 
          }}>
            <p>Thank you for joining the Lumina Rise community! We're excited to be part of your self-growth journey.</p>
            <p>Check your email for a confirmation message with more information.</p>
            
            <div className="divider" style={{ 
              height: '1px', 
              background: 'linear-gradient(to right, transparent, var(--accent-color), transparent)', 
              margin: '30px 0' 
            }}></div>
            
            <div className="download-section" style={{ 
              margin: '40px 0', 
              padding: '30px', 
              backgroundColor: 'var(--soft-pink)', 
              borderRadius: '10px' 
            }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>Download Your Free Tracker Now</h3>
              <p>Click the button below to get your free tracker immediately:</p>
              <a 
                href="/resources/subscription.pdf" 
                download 
                className="btn download-btn"
                style={{ 
                  display: 'inline-block', 
                  padding: '12px 30px', 
                  background: 'var(--gradient)', 
                  color: 'var(--light-color)', 
                  textDecoration: 'none', 
                  borderRadius: '30px', 
                  fontWeight: '600', 
                  transition: 'all 0.3s', 
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)', 
                  border: 'none', 
                  cursor: 'pointer',
                  marginTop: '15px'
                }}
              >
                <i className="fas fa-download" style={{ marginRight: '10px' }}></i>Download Daily Self-Care Tracker
              </a>
            </div>
            
            <div className="divider" style={{ 
              height: '1px', 
              background: 'linear-gradient(to right, transparent, var(--accent-color), transparent)', 
              margin: '30px 0' 
            }}></div>
            
            <p>If you don't see the email in your inbox within the next 24 hours, please check your spam folder.</p>
            <Link href="/" className="btn" style={{ marginTop: '30px' }}>Return to Homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
