'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CoachingPage() {
  const t = useTranslations('Services.Coaching');

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAYVbxl1UMEw3MkVLV0JTSVM0T0pHWklRUU9YQ0hHSi4u" className="btn" target="_blank" rel="noopener noreferrer">{t('heroBtn')}</a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="content-section" style={{ padding: '80px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('intro.title')}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--slate-blue)' }}>{t('intro.p1')}</p>
          </div>
          <div className="content-block" style={{ marginTop: '40px', textAlign: 'center' }}>
            <p>{t('intro.p2')}</p>
            <div className="image-container" style={{ marginTop: '40px', maxWidth: '600px', margin: '40px auto' }}>
              <img src="/images/coachings.jpg" alt="Coaching in action" style={{ width: '100%', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" style={{ padding: '100px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('benefits.title')}</h2>
          </div>
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {t.raw('benefits.items').map((item: { title: string, text: string }, index: number) => (
              <div key={index} className="benefit-card" style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <i className="fas fa-check-circle" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px', display: 'block' }}></i>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '15px', fontSize: '1.4rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--slate-blue)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('packages.title')}</h2>
          </div>
          <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'stretch' }}>
            
            {/* Discovery Package */}
            <div className="package-card" style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #eee' }}>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.8rem', marginBottom: '10px' }}>{t('packages.discovery.title')}</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '20px' }}>{t('packages.discovery.price')}</div>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px' }}>
                {t.raw('packages.discovery.features').map((feature: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <i className="fas fa-check" style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}></i> {feature}
                  </li>
                ))}
              </ul>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAYVbxl1UMEw3MkVLV0JTSVM0T0pHWklRUU9YQ0hHSi4u" className="btn" target="_blank" rel="noopener noreferrer">{t('heroBtn')}</a>
            </div>

            {/* Transformation Package */}
            <div className="package-card featured" style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', border: '2px solid var(--accent-color)', transform: 'scale(1.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '30px', background: 'var(--accent-color)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 700 }}>Popular Choice</div>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.8rem', marginBottom: '10px' }}>{t('packages.transformation.title')}</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '20px' }}>{t('packages.transformation.price')}</div>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px' }}>
                {t.raw('packages.transformation.features').map((feature: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <i className="fas fa-check" style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}></i> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/#contact" className="btn">{t('heroBtn')}</Link>
            </div>

            {/* Growth Package */}
            <div className="package-card" style={{ background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #eee' }}>
              <h4 style={{ color: 'var(--accent-color)', fontSize: '1.8rem', marginBottom: '10px' }}>{t('packages.growth.title')}</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '20px' }}>{t('packages.growth.price')}</div>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px' }}>
                {t.raw('packages.growth.features').map((feature: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <i className="fas fa-check" style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}></i> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/#contact" className="btn">{t('heroBtn')}</Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ padding: '80px 0', textAlign: 'center', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <h3>Ready to start your transformation?</h3>
          <p>Book a free discovery session today and find out how coaching can help you rise.</p>
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAYVbxl1UMEw3MkVLV0JTSVM0T0pHWklRUU9YQ0hHSi4u" className="btn" style={{ marginTop: '20px' }} target="_blank" rel="noopener noreferrer">{t('heroBtn')}</a>
        </div>
      </section>
    </main>
  );
}
