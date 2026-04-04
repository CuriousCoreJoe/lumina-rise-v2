'use client';

import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header({ locale }: { locale: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Header');

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src="/images/lumina-logo.png" alt="Lumina Rise Logo" style={{ height: '50px', marginRight: '12px' }} />
            <div className="logo-text">
              <h1>Lumina Rise</h1>
              <p>Where Self-Care Meets Self-Growth</p>
            </div>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>{t('about')}</Link></li>
            <li><Link href="/about-me" onClick={() => setMenuOpen(false)}>{t('founder')}</Link></li>
            <li><Link href="/#toolbox" onClick={() => setMenuOpen(false)}>{t('toolbox')}</Link></li>
            <li><Link href="/#services" onClick={() => setMenuOpen(false)}>{t('services')}</Link></li>
            <li><Link href="/faq" onClick={() => setMenuOpen(false)}>{t('faq')}</Link></li>
            <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</Link></li>
          </ul>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>

          {/* Social Icons & Language Selector */}
          <div className="header-actions">
            <div className="social-icons-header">
              <a href="https://www.instagram.com/luminarise_selfgrowth/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://ca.pinterest.com/LuminariseSelfGrowth/mind-health/" target="_blank" rel="noopener noreferrer" title="Pinterest"><i className="fab fa-pinterest-p"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61566373727142" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            </div>
            
            <div className="language-selector">
              <Link 
                href={pathname} 
                locale={locale === 'en' ? 'fr' : 'en'} 
                className="lang-btn"
              >
                <i className="fas fa-globe"></i> {locale === 'en' ? 'FR' : 'EN'}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
