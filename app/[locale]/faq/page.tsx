'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const locale = useLocale();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="#contact" className="btn">{t('heroBtn')}</a>
        </div>
      </section>

      {/* Roadmap & Services Section */}
      <section id="services-deep-dive" style={{ padding: '100px 0', backgroundColor: 'var(--light-color)' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '15px' }}>{t('roadmap.title')}</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--slate-blue)' }}>{t('roadmap.subtitle')}</p>
          </div>

          {/* Service Overview */}
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            <div className="service-card" style={{ background: 'var(--soft-peach)', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
              <i className="fas fa-microphone-alt" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3 style={{ marginBottom: '15px' }}>{t('roadmap.speaking.title')}</h3>
              <p style={{ color: 'var(--slate-blue)' }}>{t('roadmap.speaking.text')}</p>
            </div>
            <div className="service-card" style={{ background: 'var(--soft-peach)', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '2px solid var(--accent-color)' }}>
              <i className="fas fa-hand-holding-heart" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3 style={{ marginBottom: '15px' }}>{t('roadmap.coaching.title')}</h3>
              <p style={{ color: 'var(--slate-blue)' }}>{t('roadmap.coaching.text')}</p>
            </div>
            <div className="service-card" style={{ background: 'var(--soft-peach)', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
              <i className="fas fa-toolbox" style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '20px' }}></i>
              <h3 style={{ marginBottom: '15px' }}>{t('roadmap.toolkits.title')}</h3>
              <p style={{ color: 'var(--slate-blue)' }}>{t('roadmap.toolkits.text')}</p>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="details-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
            {/* Coaching Details */}
            <div className="detail-box">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px', borderBottom: '2px solid var(--soft-peach)', paddingBottom: '10px' }}>{t('details.who.title')}</h3>
              <p style={{ marginBottom: '15px', color: 'var(--slate-blue)' }}>{t('details.who.intro')}</p>
              <ul style={{ listStyle: 'none', color: 'var(--slate-blue)', padding: 0 }}>
                {t.raw('details.who.items').map((item: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <i className="fas fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Selection Guide */}
            <div className="detail-box" style={{ background: 'var(--soft-gradient)', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ color: 'var(--dark-color)', marginBottom: '20px' }}>{t('details.which.title')}</h3>
              <div style={{ marginBottom: '15px' }}>
                <strong>{t('details.which.inspiration')}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)' }}>{t('details.which.inspirationBtn')}</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <strong>{t('details.which.support')}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)' }}>{t('details.which.supportBtn')}</p>
              </div>
              <div>
                <strong>{t('details.which.pace')}</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)' }}>{t('details.which.paceBtn')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Content */}
      <section className="qa-section" style={{ padding: '100px 0 60px' }}>
        <div className="container">
          {t.raw('questions').map((item: { q: string; a: string }, index: number) => (
            <div key={index} className="qa-card" style={{ background: 'var(--soft-peach)', padding: '30px', borderRadius: '15px', marginBottom: '30px', borderLeft: '5px solid var(--primary-color)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="qa-section">
        <div className="container">
          <div className="table-container" style={{ overflowX: 'auto', margin: '40px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <thead>
                <tr>
                  {t.raw('table.headers').map((header: string, index: number) => (
                    <th key={index} style={{ background: 'var(--gradient)', color: 'white', textAlign: 'left', padding: '15px' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.raw('table.rows').map((row: string[], rowIndex: number) => (
                  <tr key={rowIndex}>
                    {row.map((cell: string, cellIndex: number) => (
                      <td key={cellIndex} style={{ padding: '15px', borderBottom: '1px solid #eee', color: 'var(--slate-blue)' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="deep-dive" style={{ padding: '80px 0', background: 'var(--soft-gradient)' }}>
        <div className="container">
          <div className="list-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="list-column" style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px', borderBottom: '2px solid var(--soft-peach)', paddingBottom: '10px' }}>{t('deepDive.development.title')}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.raw('deepDive.development.items').map((item: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✨</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="list-column" style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px', borderBottom: '2px solid var(--soft-peach)', paddingBottom: '10px' }}>{t('deepDive.growth.title')}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.raw('deepDive.growth.items').map((item: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✨</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="list-column" style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px', borderBottom: '2px solid var(--soft-peach)', paddingBottom: '10px' }}>{t('deepDive.selfCare.title')}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.raw('deepDive.selfCare.items').map((item: string, index: number) => (
                  <li key={index} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✨</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Approach */}
          <div className="detail-box" style={{ gridColumn: '1 / -1', textAlign: 'center', maxWidth: '800px', margin: '40px auto 0' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>{t('approach.title')}</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--slate-blue)', marginBottom: '20px' }}>"{t('approach.quote')}"</p>
            <p style={{ color: 'var(--slate-blue)' }}>{t('approach.text')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact" style={{ padding: '100px 0', backgroundColor: 'var(--soft-peach)' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '15px' }}>{t('contact.title')}</h2>
            <p style={{ color: 'var(--slate-blue)' }}>{t('contact.subtitle')}</p>
          </div>
          <div className="contact-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)', marginBottom: '30px' }}>{t('contact.info.title')}</h3>
              <p>{t('contact.info.description')}</p>
              <div className="info-item" style={{ display: 'flex', marginBottom: '20px' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--primary-color)', marginRight: '15px' }}></i>
                <p>{t('contact.info.email')}</p>
              </div>
              <div className="info-item" style={{ display: 'flex', marginBottom: '20px' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-color)', marginRight: '15px' }}></i>
                <p>{t('contact.info.location')}</p>
              </div>
              <div className="social-links" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <a href="https://www.instagram.com/luminarise_selfgrowth/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--light-color)', backgroundColor: 'rgba(255,255,255,0.1)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', transition: 'all 0.3s' }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://ca.pinterest.com/LuminariseSelfGrowth/mind-health/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--light-color)', backgroundColor: 'rgba(255,255,255,0.1)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', transition: 'all 0.3s' }}>
                  <i className="fab fa-pinterest-p"></i>
                </a>
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
                  <select name="inquiry-type" className="form-control" required style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem' }}>
                    <option value="">{t('contact.form.interest')}</option>
                    <option value="coaching">{t('contact.form.interests.coaching')}</option>
                    <option value="workshop">{t('contact.form.interests.workshop')}</option>
                    <option value="toolkit">{t('contact.form.interests.toolkit')}</option>
                    <option value="other">{t('contact.form.interests.other')}</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <textarea name="message" className="form-control" placeholder={t('contact.form.message')} style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', minHeight: '150px' }} required></textarea>
                </div>
                <button type="submit" className="btn">{t('contact.form.submit')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
