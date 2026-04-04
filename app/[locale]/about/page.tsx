'use client';

import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutMe');

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="#intro" className="btn">{t('heroBtn')}</a>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" style={{ padding: '80px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('intro.title')}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--slate-blue)' }}>{t('intro.p1')}</p>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img src="/images/about-founder.jpg" alt="Gina-Line" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>{t('passion.title')}</h2>
            <p style={{ marginBottom: '15px' }}>{t('passion.p1')}</p>
            <p style={{ marginBottom: '15px' }}>{t('passion.p2')}</p>
            <p style={{ marginBottom: '15px' }}>{t('passion.p3')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: '80px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '40px' }}>{t('mission.title')}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>{t('mission.missionTitle')}</h3>
              <p>{t('mission.missionText')}</p>
            </div>
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>{t('mission.visionTitle')}</h3>
              <p>{t('mission.visionText')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
