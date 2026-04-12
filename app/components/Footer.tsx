'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-col">
            <h4>{t('title')}</h4>
            <p>{t('description')}</p>
            <div className="social-links">
              <a href="https://www.instagram.com/luminarise_selfgrowth/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://ca.pinterest.com/LuminariseSelfGrowth/mind-health/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
              <a href="https://www.facebook.com/people/Lumina-Rise/61578665136668/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t('quickLinks')}</h4>
            <ul>
              <li><Link href="/">{t('home')}</Link></li>
              <li><Link href="/about">{t('about')}</Link></li>
              <li><Link href="/#toolbox">{t('toolbox')}</Link></li>
              <li><Link href="/#services">{t('services')}</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('newsletter')}</h4>
            <form action="https://formsubmit.co/Luminariseselfgrowth@gmail.com" method="POST">
              <input type="email" name="email" className="form-control" placeholder={t('emailPlaceholder')} required style={{ marginBottom: '10px' }} />
              <button type="submit" className="btn" style={{ width: '100%' }}>{t('subscribe')}</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} {t('title')}. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
