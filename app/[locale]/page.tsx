'use client';

import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Index');
  const locale = useLocale();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h2>{t('title')}</h2>
          <p>{t('description')}</p>
          <a href="#contact" className="btn">{t('startJourney')}</a>
          <div className="hero-social-icons" style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/luminarise_selfgrowth/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: 'var(--soft-peach)', fontSize: '1.8rem', transition: 'transform 0.3s, color 0.3s' }}><i className="fab fa-instagram"></i></a>
            <a href="https://ca.pinterest.com/LuminariseSelfGrowth/mind-health/" target="_blank" rel="noopener noreferrer" title="Pinterest" style={{ color: 'var(--soft-peach)', fontSize: '1.8rem', transition: 'transform 0.3s, color 0.3s' }}><i className="fab fa-pinterest-p"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61566373727142" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ color: 'var(--soft-peach)', fontSize: '1.8rem', transition: 'transform 0.3s, color 0.3s' }}><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="credibility-bar" style={{ background: 'white', padding: '40px 0', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <i className="fas fa-graduation-cap" style={{ color: '#ff7f30', fontSize: '2.5rem', marginBottom: '15px', display: 'block' }}></i>
              <p style={{ fontWeight: 700, marginBottom: '5px', color: '#333' }}>{t('credibility.yale')}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)' }}>🟠 {t('credibility.wellBeing')}</p>
            </div>
            <div>
              <i className="fas fa-award" style={{ color: '#ff7f30', fontSize: '2.5rem', marginBottom: '15px', display: 'block' }}></i>
              <p style={{ fontWeight: 700, marginBottom: '5px', color: '#333' }}>{t('credibility.tenYears')}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)' }}>🟠 {t('credibility.expertise')}</p>
            </div>
            <div>
              <i className="fas fa-brain" style={{ color: '#ff7f30', fontSize: '2.5rem', marginBottom: '15px', display: 'block' }}></i>
              <p style={{ fontWeight: 700, marginBottom: '5px', color: '#333' }}>{t('credibility.evidence')}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-blue)' }}>🟠 {t('credibility.coach')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>{t('about.title')}</h2>
            <p>{t('about.subtitle')}</p>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img src="/images/lumina-logo.png" alt="Women empowerment" />
            </div>
            <div className="about-text">
              <h3>{t('about.heading')}</h3>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
              <Link href="/about-me" className="btn">{t('about.founderBtn')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="qualification-section">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            
            {/* This is for you if - Card */}
            <div className="qualification-card">
              <div style={{ fontSize: '40px', marginBottom: '20px', textAlign: 'center' }}>💪</div>
              <h3>{t('qualification.forYou')}</h3>
              <ul>
                <li><span>✨</span> {t('qualification.items.work')}</li>
                <li><span>🎯</span> {t('qualification.items.goals')}</li>
                <li><span>⏰</span> {t('qualification.items.time')}</li>
                <li><span>🌱</span> {t('qualification.items.invest')}</li>
                <li><span>🚀</span> {t('qualification.items.change')}</li>
                <li><span>📚</span> {t('qualification.items.learning')}</li>
                <li><span>🦋</span> {t('qualification.items.comfort')}</li>
                <li><span>💎</span> {t('qualification.items.quality')}</li>
              </ul>
            </div>

            {/* This is not for you if - Card */}
            <div className="qualification-card">
              <div style={{ fontSize: '40px', marginBottom: '20px', textAlign: 'center' }}>🚫</div>
              <h3>{t('qualification.notForYou')}</h3>
              <ul>
                <li><span>💊</span> {t('qualification.items.magic')}</li>
                <li><span>😴</span> {t('qualification.items.effort')}</li>
                <li><span>⏳</span> {t('qualification.items.investTime')}</li>
                <li><span>🛋️</span> {t('qualification.items.others')}</li>
                <li><span>🎪</span> {t('qualification.items.promises')}</li>
                <li><span>🔒</span> {t('qualification.items.ready')}</li>
                <li><span>👉</span> {t('qualification.items.blame')}</li>
                <li><span>💸</span> {t('qualification.items.cheap')}</li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>{t('services.title')}</h2>
            <p>{t('services.subtitle')}</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/coaching.jpg" alt="One-on-One Coaching" />
              </div>
              <div className="service-content">
                <h3>{t('services.coaching.title')}</h3>
                <p>{t('services.coaching.description')}</p>
                <Link href="/services/coaching" className="btn">{t('services.learnMore')}</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/workshops.jpg" alt="Group Workshops" />
              </div>
              <div className="service-content">
                <h3>{t('services.workshops.title')}</h3>
                <p>{t('services.workshops.description')}</p>
                <Link href="/services/workshops" className="btn">{t('services.comingSoon')}</Link>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="/images/webinars.jpg" alt="Inspirational Speaking" />
              </div>
              <div className="service-content">
                <h3>{t('services.speaking.title')}</h3>
                <p>{t('services.speaking.description')}</p>
                <Link href="/services/webinars" className="btn">{t('services.learnMore')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a One-on-One Consultation Section */}
      <section className="consultation">
        <div className="container">
          <div className="section-title">
            <h2>{t('consultation.title')}</h2>
            <p>{t('consultation.subtitle')}</p>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: 'var(--slate-blue)', marginBottom: '30px', fontSize: '1.1rem' }}>
              {t('consultation.p1')}
            </p>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAYVbxl1UMEw3MkVLV0JTSVM0T0pHWklRUU9YQ0hHSi4u" className="btn" target="_blank" rel="noopener noreferrer">{t('consultation.btn')}</a>
          </div>
        </div>
      </section>

      {/* Toolbox Section */}
      <section className="toolbox" id="toolbox">
        <div className="container">
          <div className="section-title">
            <h2>{t('toolbox.title')}</h2>
            <p>{t('toolbox.subtitle')}</p>
          </div>
          <div className="toolkits">
            <div className="toolkit-card">
              <i className="fas fa-heart"></i>
              <h3>{t('toolbox.selfCare.title')} <span>{t('toolbox.selfCare.pages')}</span></h3>
              <p>{t('toolbox.selfCare.description')}</p>
              <Link href="/toolkits/self-care" className="btn">{t('toolbox.btn')}</Link>
            </div>
            <div className="toolkit-card">
              <i className="fas fa-seedling"></i>
              <h3>{t('toolbox.personalGrowth.title')} <span>{t('toolbox.personalGrowth.pages')}</span></h3>
              <p>{t('toolbox.personalGrowth.description')}</p>
              <Link href="/toolkits/personal-growth" className="btn">{t('toolbox.btn')}</Link>
            </div>
            <div className="toolkit-card">
              <i className="fas fa-fist-raised"></i>
              <h3>{t('toolbox.empowerment.title')} <span>{t('toolbox.empowerment.status')}</span></h3>
              <p>{t('toolbox.empowerment.description')}</p>
              <Link href="/toolkits/empowerment" className="btn">{t('toolbox.btn')}</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Q&A Section */}
      <section className="qa-section" id="qa">
        <div className="container">
          <div className="section-title">
            <h2>{t('faq.title')}</h2>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link href="/faq" className="btn">{t('faq.btn')}</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="newsletter-section" style={{ marginTop: '50px', background: 'var(--soft-gradient)', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '20px' }}>{t('newsletter.title')}</h3>
        <p style={{ color: 'var(--slate-blue)', fontSize: '1.1rem', marginBottom: '15px' }}>{t('newsletter.description')}</p>
        <div style={{ backgroundColor: 'var(--light-color)', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'inline-block' }}>
          <i className="fas fa-gift" style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '10px' }}></i>
          <p style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('newsletter.gift')}</p>
        </div>
        <form action="https://formsubmit.co/Luminariseselfgrowth@gmail.com" method="POST" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder={t('newsletter.placeholder')} required style={{ padding: '15px', borderRadius: '30px', border: '1px solid #ddd', width: '100%', marginBottom: '20px', fontSize: '1rem' }} />
          </div>
          <input type="hidden" name="_next" value="https://luminarise.ca/thank-you" />
          <input type="hidden" name="_subject" value="Nouvelle Inscription à l'Infolettre" />
          <button type="submit" className="btn" style={{ background: 'var(--primary-color)', width: '100%', padding: '15px', fontSize: '1.1rem', fontWeight: '600', borderRadius: '30px' }}>{t('newsletter.btn')}</button>
        </form>
      </div>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>{t('contact.info.title')}</h3>
              <p>{t('contact.info.description')}</p>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <p>{t('contact.info.email')}</p>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>{t('contact.info.location')}</p>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/luminarise_selfgrowth/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://ca.pinterest.com/LuminariseSelfGrowth/mind-health/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
                <a href="https://www.facebook.com/profile.php?id=61566373727142" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>

            <div className="contact-form">
              <h3>{t('contact.form.title')}</h3>
              <form action="https://formsubmit.co/Luminariseselfgrowth@gmail.com" method="POST">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder={t('contact.form.name')} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" placeholder={t('contact.form.email')} required />
                </div>
                <div className="form-group">
                  <select name="inquiry-type" className="form-control" required defaultValue="">
                    <option value="" disabled>{t('contact.form.interest')}</option>
                    <option value="coaching">{t('contact.form.interests.coaching')}</option>
                    <option value="workshop">{t('contact.form.interests.workshop')}</option>
                    <option value="speaking">{t('contact.form.interests.speaking')}</option>
                    <option value="toolkit">{t('contact.form.interests.toolkit')}</option>
                    <option value="other">{t('contact.form.interests.other')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" className="form-control" placeholder={t('contact.form.message')} required></textarea>
                </div>
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
