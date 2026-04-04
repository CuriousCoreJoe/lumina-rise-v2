'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function WorkshopsPage() {
  const t = useTranslations('Services.Workshops');

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>{t('title')} <span style={{ fontSize: '1rem', background: 'var(--accent-color)', padding: '5px 10px', borderRadius: '15px', color: 'white', verticalAlign: 'middle' }}>{t('status')}</span></h2>
          <p>{t('description')}</p>
          <Link href="/#contact" className="btn">{t('heroBtn')}</Link>
        </div>
      </section>

      <section className="content-section" style={{ padding: '80px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('intro.title')}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--slate-blue)' }}>{t('intro.p1')}</p>
          </div>
          <div className="content-block" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p>{t('intro.p2')}</p>
            <div className="image-container" style={{ marginTop: '40px', maxWidth: '600px', margin: '40px auto' }}>
              <img src="/images/workshops.jpg" alt="Workshops and Group Growth" style={{ width: '100%', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
