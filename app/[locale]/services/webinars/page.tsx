'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function WebinarsPage() {
  const t = useTranslations('Services.Webinars');

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
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
              <img src="/images/speaking-event.jpg" alt="Speaking at an event" style={{ width: '100%', borderRadius: '15px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lumina Rise Speaking Section */}
      <section className="benefits-section" style={{ padding: '80px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('whyChoose.title')}</h2>
            <p>{t('whyChoose.subtitle')}</p>
          </div>
          
          <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div className="benefit-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <i className="fas fa-brain" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-color)' }}>{t('whyChoose.scienceBacked.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('whyChoose.scienceBacked.description')}</p>
            </div>
            
            <div className="benefit-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <i className="fas fa-tools" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-color)' }}>{t('whyChoose.practicalStrategies.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('whyChoose.practicalStrategies.description')}</p>
            </div>
            
            <div className="benefit-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <i className="fas fa-laptop-house" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-color)' }}>{t('whyChoose.flexibleFormats.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('whyChoose.flexibleFormats.description')}</p>
            </div>
            
            <div className="benefit-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <i className="fas fa-heart" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--accent-color)' }}>{t('whyChoose.authenticConnection.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('whyChoose.authenticConnection.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Speaking Topics Section */}
      <section className="experience-section" id="speaking" style={{ padding: '100px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('coreTopics.title')}</h2>
            <p>{t('coreTopics.subtitle')}</p>
          </div>
          
          <div className="experience-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div className="experience-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px' }}>{t('coreTopics.youMatter.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('coreTopics.youMatter.description')}</p>
            </div>
            
            <div className="experience-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px' }}>{t('coreTopics.consistency.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('coreTopics.consistency.description')}</p>
            </div>
            
            <div className="experience-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px' }}>{t('coreTopics.fulfillingLife.title')}</h4>
              <p style={{ color: 'var(--slate-blue)' }}>{t('coreTopics.fulfillingLife.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Types Section */}
      <section className="packages-section" style={{ padding: '80px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('engagementTypes.title')}</h2>
            <p>{t('engagementTypes.subtitle')}</p>
          </div>
          
          <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div className="package-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px' }}>{t('engagementTypes.inPerson.title')}</h4>
              <p className="package-price" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '20px' }}>{t('engagementTypes.inPerson.duration')}</p>
              <ul style={{ listStyle: 'none', marginBottom: '20px', textAlign: 'left' }}>
                {t.raw('engagementTypes.inPerson.features').map((feature: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: 'var(--slate-blue)' }}>
                    <span style={{ content: '✓', color: 'var(--primary-color)', position: 'absolute', left: '0' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <p style={{ color: 'var(--slate-blue)', marginBottom: '20px' }}>{t('engagementTypes.inPerson.perfectFor')}</p>
              <Link href="/#contact" className="btn">{t('engagementTypes.inPerson.btn')}</Link>
            </div>
                        
            <div className="package-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '15px' }}>{t('engagementTypes.virtual.title')}</h4>
              <p className="package-price" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '20px' }}>{t('engagementTypes.virtual.duration')}</p>
              <ul style={{ listStyle: 'none', marginBottom: '20px', textAlign: 'left' }}>
                {t.raw('engagementTypes.virtual.features').map((feature: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: 'var(--slate-blue)' }}>
                    <span style={{ content: '✓', color: 'var(--primary-color)', position: 'absolute', left: '0' }}>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <p style={{ color: 'var(--slate-blue)', marginBottom: '20px' }}>{t('engagementTypes.virtual.perfectFor')}</p>
              <Link href="/#contact" className="btn">{t('engagementTypes.virtual.btn')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="cta-section" style={{ textAlign: 'center', marginTop: '80px', padding: '60px 0', background: 'var(--soft-gradient)', borderRadius: '10px' }}>
          <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '20px' }}>{t('cta.title')}</h3>
          <p style={{ maxWidth: '700px', margin: '0 auto 30px', color: 'var(--slate-blue)' }}>{t('cta.description')}</p>
          <Link href="/#contact" className="btn">{t('cta.btn')}</Link>
        </div>
      </section>
    </main>
  );
}
