'use client';

import { useTranslations } from 'next-intl';

export default function PersonalGrowthToolkitPage() {
  const t = useTranslations('Toolkits.PersonalGrowth');

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="https://buy.stripe.com/5kA7tF7wO76Z86Z6oo" className="btn" target="_blank" rel="noopener noreferrer">{t('buyBtn')}</a>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '30px' }}>Transform Your Potential</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--slate-blue)', marginBottom: '40px' }}>
            This 78-page toolkit is designed for the woman who is ready to move from surviving to thriving.
            Through structured exercises, you will learn to set goals that align with your values and develop a growth mindset that turns challenges into opportunities.
          </p>
          <img src="/images/toolkit-preview.jpg" alt="Personal Growth Toolkit Preview" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
        </div>
      </section>
    </main>
  );
}
