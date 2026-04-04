'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('Privacy');

  return (
    <main>
      <section className="hero" style={{ padding: '100px 0 60px' }}>
        <div className="container">
          <h2>{t('title')}</h2>
        </div>
      </section>

      <section style={{ padding: '60px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ marginBottom: '20px' }}>{t('p1')}</p>
          <p style={{ marginBottom: '20px' }}>{t('p2')}</p>
          <p style={{ marginBottom: '20px' }}>{t('p3')}</p>
        </div>
      </section>
    </main>
  );
}
