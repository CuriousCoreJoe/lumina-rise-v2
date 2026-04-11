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
              <p>{t('logoTagline')}</p>
            </div>
            {/* Language Switcher - Next to Logo */}
            <div className="language-selector-logo">
              <Link
                href={pathname}
                locale={locale === 'en' ? 'fr' : 'en'}
                className="lang-link-logo"
              >
                {locale === 'en' ? 'EN' : 'FR'}
              </Link>
            </div>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>{t('about')}</Link></li>
            <li><Link href="/#toolbox" onClick={() => setMenuOpen(false)}>{t('toolbox')}</Link></li>
            <li><Link href="/#services" onClick={() => setMenuOpen(false)}>{t('services')}</Link></li>
            <li><Link href="/faq" onClick={() => setMenuOpen(false)}>{t('faq')}</Link></li>
            <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</Link></li>
            <li className="language-selector">
              <Link
                href={pathname}
                locale={locale === 'en' ? 'fr' : 'en'}
                className="lang-link"
                onClick={() => setMenuOpen(false)}
              >
                {locale === 'en' ? 'EN' : 'FR'}
              </Link>
            </li>
          </ul>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>

          {/* Language Selector - Desktop Only */}
          <div className="header-actions">
            <div className="language-selector">
              <Link
                href={pathname}
                locale={locale === 'en' ? 'fr' : 'en'}
                className="lang-link"
              >
                {locale === 'en' ? 'EN' : 'FR'}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
