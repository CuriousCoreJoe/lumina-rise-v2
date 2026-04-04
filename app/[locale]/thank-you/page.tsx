'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ThankYouPage() {
  const t_footer = useTranslations('Footer');

  return (
    <main>
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '5rem', marginBottom: '30px' }}>✨</div>
          <h2 style={{ fontSize: '3.5rem' }}>Thank You!</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
            Your message has been received. I am so grateful you reached out, and I will get back to you within 24-48 hours.
          </p>
          <Link href="/" className="btn">{t_footer('home')}</Link>
        </div>
      </section>
    </main>
  );
}
