'use client';

import { useTranslations } from 'next-intl';

export default function EmpowermentToolkitPage() {
  const t = useTranslations('Toolkits.Empowerment');

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>{t('title')} <span style={{ fontSize: '0.5em', verticalAlign: 'middle' }}>{t('status')}</span></h2>
          <p>{t('description')}</p>
          <a href="/#contact" className="btn">{t('heroBtn')}</a>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '30px' }}>Build Unshakeable Confidence</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--slate-blue)', marginBottom: '40px' }}>
            The Empowerment Essentials toolkit is currently under development. It will feature activities designed to boost self-esteem, improve leadership skills, and help you take command of your life with confidence.
            Sign up for our newsletter or contact us to be the first to know when it launches.
          </p>
          <div style={{ background: 'var(--soft-peach)', padding: '40px', borderRadius: '15px' }}>
            <h4 style={{ marginBottom: '20px' }}>What to expect:</h4>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Confidence-boosting modules</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Leadership & assertiveness tools</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Public speaking & presence guides</li>
              <li style={{ marginBottom: '10px' }}><i className="fas fa-check-circle" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Reclaiming your personal power</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
