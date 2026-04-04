'use client';

import { useTranslations } from 'next-intl';

export default function TokenSelfCarePage() {
  const t = useTranslations('Toolkits.SelfCare');

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="#buy" className="btn">{t('heroBtn')}</a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="content-section" style={{ padding: '80px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('intro.title')}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--slate-blue)' }}>{t('intro.subtitle')}</p>
          </div>
          <div className="content-block" style={{ marginTop: '40px' }}>
            <p>{t('intro.p1')}</p>
            <p>{t('intro.p2')}</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginTop: '60px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>{t('why.title')}</h3>
              <p>{t('why.p1')}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.raw('why.items').map((item: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <i className="fas fa-check" style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}></i> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}>
              <img src="/images/self-care-importance.jpg" alt="Self-care Importance" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section style={{ padding: '100px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('tools.title')}</h2>
            <p>{t('tools.subtitle')}</p>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {t.raw('tools.items').map((item: { title: string, text: string }, index: number) => (
              <div key={index} className="service-card" style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>{item.title}</h4>
                <p style={{ color: 'var(--slate-blue)' }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Buy Section */}
          <div id="buy" style={{ marginTop: '80px', textAlign: 'center', maxWidth: '600px', margin: '80px auto 0' }}>
            <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '2px solid var(--primary-color)' }}>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Ready to rise?</h3>
              <a href="https://buy.stripe.com/00w4gz82kgTidd2343e3e00" className="btn" style={{ fontSize: '1.2rem', padding: '15px 40px', width: '100%' }} target="_blank" rel="noopener noreferrer">{t('buy.btn')}</a>
              <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--slate-blue)' }}>{t('buy.info')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
