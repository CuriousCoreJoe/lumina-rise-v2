'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function SelfCarePage() {
  const t = useTranslations('Toolkits.SelfCare');
  const locale = useLocale();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="#tools" className="btn">{t('heroBtn')}</a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="content-section" style={{ padding: '100px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('intro.title')}</h2>
            <p>{t('intro.subtitle')}</p>
          </div>

          <div className="content-block" style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '20px' }}>{t('intro.whatIs.title')}</h3>
            <p>{t('intro.whatIs.p1')}</p>
            <p>{t('intro.whatIs.p2')}</p>

            <div className="two-columns" style={{ display: 'flex', gap: '50px', alignItems: 'flex-start', marginTop: '40px' }}>
              <div className="column" style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '20px' }}>{t('intro.why.title')}</h3>
                <p>{t('intro.why.p1')}</p>
                <p>{t('intro.why.p2')}</p>
                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                  {t.raw('intro.why.items').map((item: string, index: number) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="column" style={{ flex: 1 }}>
                <div className="image-container" style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <img src="/images/self-care-importance.jpg" alt="Woman practicing self-care" style={{ width: '100%', display: 'block' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="toolbox" id="tools" style={{ padding: '50px 0 100px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('tools.title')}</h2>
            <p>{t('tools.subtitle')}</p>
          </div>

          <div className="toolkits" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {t.raw('tools.items').map((item: { icon: string, title: string, text: string }, index: number) => (
              <div key={index} className="toolkit-card" style={{ background: 'var(--light-color)', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s, box-shadow 0.3s', borderTop: '4px solid var(--primary-color)' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--accent-color)' }}>{item.title}</h3>
                <p style={{ color: 'var(--slate-blue)' }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Payment Section */}
          <div style={{ textAlign: 'center', margin: '50px auto 30px', maxWidth: '350px' }}>
            <a href="https://buy.stripe.com/00w4gz82kgTidd2343e3e00" className="btn" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', padding: '15px 20px', textDecoration: 'none' }}>
              {t('buy.btn')}
            </a>
            <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)', marginTop: '15px', textAlign: 'center', lineHeight: '1.4' }}>
              {t('buy.info')}
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="back-button" style={{ textAlign: 'center', margin: '40px 0' }}>
        <Link href="/#toolbox" className="btn">{t('backBtn')}</Link>
      </div>

      {/* Contact Section */}
      <section className="contact" id="contact" style={{ padding: '100px 0', background: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
          </div>
          <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '30px' }}>{t('contact.info.title')}</h3>
              <p style={{ marginBottom: '20px', color: 'var(--slate-blue)' }}>{t('contact.info.description')}</p>
              <div className="info-item" style={{ display: 'flex', marginBottom: '20px' }}>
                <i className="fas fa-envelope" style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginRight: '15px' }}></i>
                <p>{t('contact.info.email')}</p>
              </div>
              <div className="info-item" style={{ display: 'flex', marginBottom: '20px' }}>
                <i className="fas fa-map-marker-alt" style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginRight: '15px' }}></i>
                <p>{t('contact.info.location')}</p>
              </div>
            </div>
            <div className="contact-form">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '30px' }}>{t('contact.form.title')}</h3>
              <form action="https://formsubmit.co/Luminariseselfgrowth@gmail.com" method="POST">
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <input type="text" name="name" className="form-control" placeholder={t('contact.form.name')} required style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <input type="email" name="email" className="form-control" placeholder={t('contact.form.email')} required style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }} />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <textarea name="message" className="form-control" placeholder={t('contact.form.message')} required style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', minHeight: '150px' }}></textarea>
                </div>
                <input type="hidden" name="_next" value="https://luminarise.ca/thank-you" />
                <input type="hidden" name="_subject" value={locale === 'fr' ? "Nouvelle Soumission de Formulaire de Contact" : "New Contact Form Submission"} />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="true" />
                <button type="submit" className="btn">{t('contact.form.submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
