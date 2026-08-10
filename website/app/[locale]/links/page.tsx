'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useEffect } from 'react';

export default function LinksPage() {
  const t = useTranslations('Links');
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === 'en' ? 'fr' : 'en';

  useEffect(() => {
    // Subtle parallax on pointer move (desktop only)
    if (window.matchMedia('(hover: hover)').matches) {
      const orbs = document.querySelectorAll('.links-orb');
      const handler = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        orbs.forEach((orb, i) => {
          const factor = (i + 1) * 0.5;
          (orb as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
      };
      document.addEventListener('mousemove', handler);
      return () => document.removeEventListener('mousemove', handler);
    }

    // Soft haptic feedback on mobile tap
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(10);
      });
    });
  }, []);

  const linkItems = [
    {
      icon: 'fa-solid fa-house',
      title: t('home.title'),
      subtitle: t('home.subtitle'),
      href: '/',
    },
    {
      icon: 'fa-solid fa-sparkles',
      title: t('services.title'),
      subtitle: t('services.subtitle'),
      href: '/services/coaching',
    },
    {
      icon: 'fa-solid fa-book-open',
      title: t('toolkits.title'),
      subtitle: t('toolkits.subtitle'),
      href: '/#toolbox',
    },
    {
      icon: 'fa-solid fa-user',
      title: t('about.title'),
      subtitle: t('about.subtitle'),
      href: '/about',
    },
  ];

  const socialLinks = [
    {
      icon: 'fa-brands fa-instagram',
      href: 'https://www.instagram.com/luminarise_selfgrowth/',
      label: 'Instagram',
    },
    {
      icon: 'fa-brands fa-pinterest',
      href: 'https://ca.pinterest.com/LuminariseSelfGrowth/mind-health/',
      label: 'Pinterest',
    },
    {
      icon: 'fa-brands fa-facebook',
      href: 'https://www.facebook.com/people/Lumina-Rise/61578665136668/',
      label: 'Facebook',
    },
    {
      icon: 'fa-brands fa-tiktok',
      href: '#',
      label: 'TikTok',
    },
    {
      icon: 'fa-solid fa-envelope',
      href: 'mailto:Luminariseselfgrowth@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --links-cream: #FBF3EC;
          --links-cream-deep: #F5E8DC;
          --links-terracotta: #D87B5A;
          --links-terracotta-deep: #C25E3D;
          --links-plum: #3F2A38;
          --links-plum-light: #6B4A5E;
          --links-gold: #E8B765;
          --links-ink: #2A1D24;
        }

        * { -webkit-tap-highlight-color: transparent; }

        .links-page {
          font-family: 'Inter', sans-serif;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232, 183, 101, 0.25), transparent 60%),
            radial-gradient(ellipse 70% 50% at 20% 100%, rgba(216, 123, 90, 0.18), transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 90%, rgba(107, 74, 94, 0.15), transparent 60%),
            linear-gradient(180deg, #FBF3EC 0%, #F5E8DC 100%);
          color: var(--links-ink);
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
          margin: 0;
          padding: 0;
        }

        .links-page .font-display { font-family: 'Fraunces', serif; }

        .links-orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        .links-orb-1 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, #E8B765, transparent 70%);
          top: -80px; left: -80px;
          animation: links-float1 18s ease-in-out infinite;
        }

        .links-orb-2 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, #D87B5A, transparent 70%);
          bottom: -100px; right: -100px;
          animation: links-float2 22s ease-in-out infinite;
        }

        .links-orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, #B8829A, transparent 70%);
          top: 40%; right: -60px;
          animation: links-float3 20s ease-in-out infinite;
        }

        @keyframes links-float1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, 60px); }
        }
        @keyframes links-float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, -40px); }
        }
        @keyframes links-float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }

        .links-logo-container {
          background: linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.4));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow:
            0 20px 60px -10px rgba(63, 42, 56, 0.15),
            0 8px 20px -5px rgba(216, 123, 90, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.9);
          border-radius: 1.5rem;
          width: 7rem;
          height: 7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        @media (min-width: 640px) {
          .links-logo-container {
            width: 8rem;
            height: 8rem;
          }
        }

        .links-logo-container img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 8px;
        }

        .links-logo-container.shimmer::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 70%
          );
          transform: rotate(45deg) translateX(-100%);
          animation: links-shimmer 4s ease-in-out infinite;
        }

        @keyframes links-shimmer {
          0%, 100% { transform: rotate(45deg) translateX(-100%); }
          50% { transform: rotate(45deg) translateX(100%); }
        }

        .links-glass-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow:
            0 30px 80px -20px rgba(63, 42, 56, 0.18),
            0 10px 30px -10px rgba(216, 123, 90, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          border-radius: 1.5rem;
          padding: 1.25rem;
          width: 100%;
          max-width: 28rem;
        }

        @media (min-width: 640px) {
          .links-glass-card {
            padding: 1.75rem;
          }
        }

        .links-link-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 4px 16px -4px rgba(63, 42, 56, 0.08);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1rem;
          text-decoration: none;
          color: inherit;
          width: 100%;
        }

        .links-link-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(216, 123, 90, 0.12), rgba(232, 183, 101, 0.08));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .links-link-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -8px rgba(216, 123, 90, 0.25);
          border-color: rgba(216, 123, 90, 0.3);
        }

        .links-link-card:hover::before { opacity: 1; }

        .links-link-card:hover .links-link-arrow {
          transform: translateX(4px);
          color: var(--links-terracotta-deep);
        }

        .links-link-card:active {
          transform: translateY(0) scale(0.98);
        }

        .links-link-arrow {
          transition: all 0.3s ease;
        }

        .links-link-icon-box {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(216,123,90,0.15), rgba(232,183,101,0.1));
        }

        .links-link-icon-box i {
          font-size: 0.875rem;
          color: var(--links-terracotta-deep);
        }

        .links-link-content {
          flex: 1;
          min-width: 0;
        }

        .links-link-title {
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--links-plum);
        }

        @media (min-width: 640px) {
          .links-link-title { font-size: 1rem; }
        }

        .links-link-subtitle {
          font-size: 0.75rem;
          color: var(--links-plum-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .links-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(216, 123, 90, 0.3), transparent);
          margin: 0.9375rem 0;
        }

        .links-cta-card {
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          padding: 1rem;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #D87B5A 0%, #C25E3D 50%, #E8B765 100%);
          box-shadow: 0 10px 30px -8px rgba(216, 123, 90, 0.4);
          text-decoration: none;
        }

        .links-cta-card:hover {
          transform: scale(1.02);
        }

        .links-cta-card:active {
          transform: scale(0.99);
        }

        .links-cta-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .links-cta-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.8;
          color: #FBF3EC;
        }

        .links-cta-title {
          font-family: 'Fraunces', serif;
          font-size: 1.125rem;
          font-weight: 500;
          margin-top: 0.125rem;
          color: #FBF3EC;
        }

        .links-cta-arrow-circle {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(251, 243, 236, 0.25);
        }

        .links-cta-arrow-circle i {
          font-size: 0.875rem;
          color: #FBF3EC;
        }

        .links-cta-decor {
          position: absolute;
          right: -1.5rem;
          bottom: -1.5rem;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          opacity: 0.2;
          background: radial-gradient(circle, #FBF3EC, transparent 70%);
        }

        .links-social-pill {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.7);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--links-plum);
          text-decoration: none;
        }

        .links-social-pill:hover {
          transform: translateY(-3px);
          background: var(--links-plum);
          color: var(--links-cream);
          border-color: var(--links-plum);
          box-shadow: 0 10px 24px -6px rgba(63, 42, 56, 0.35);
        }

        .links-social-pill i {
          font-size: 1.125rem;
        }

        .links-fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: links-fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes links-fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .links-grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
          z-index: 0;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/></svg>');
        }

        .links-lang-switch {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 50;
          background: linear-gradient(135deg, #D87B5A, #C25E3D);
          border: none;
          border-radius: 2rem;
          padding: 0.5rem 1.25rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #FBF3EC;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px -4px rgba(216, 123, 90, 0.4);
        }

        .links-lang-switch:hover {
          background: linear-gradient(135deg, #C25E3D, #A84A2E);
          color: #fff;
          box-shadow: 0 8px 24px -6px rgba(216, 123, 90, 0.5);
          transform: translateY(-1px);
        }

        .links-lang-switch:active {
          transform: scale(0.95);
        }

        ::-webkit-scrollbar { width: 0; }

        @media (max-width: 380px) {
          .links-link-title { font-size: 0.95rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="links-page">
        {/* Floating background orbs */}
        <div className="links-orb links-orb-1"></div>
        <div className="links-orb links-orb-2"></div>
        <div className="links-orb links-orb-3"></div>

        {/* Subtle grain texture overlay */}
        <div className="links-grain-overlay"></div>

        {/* Floating Language Switcher */}
        <Link
          href={pathname}
          locale={otherLocale}
          className="links-lang-switch"
        >
          {otherLocale === 'en' ? 'EN' : 'FR'}
        </Link>

        <main style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5rem 1rem' }}>
          {/* Logo Container */}
          <div className="links-fade-up links-logo-container shimmer" style={{ animationDelay: '0.05s', marginBottom: '1.5rem' }}>
            <img src="/images/logo.png" alt="Lumina Rise Logo" />
          </div>

          {/* Brand name + tagline */}
          <div className="links-fade-up" style={{ animationDelay: '0.15s', textAlign: 'center', marginBottom: '0.5rem' }}>
            <h1 className="font-display" style={{ fontSize: '1.875rem', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--links-plum)', margin: 0 }}>
              Lumina Rise
            </h1>
            <p className="font-display" style={{ fontStyle: 'italic', fontSize: '1rem', marginTop: '0.25rem', color: 'var(--links-terracotta-deep)', margin: '0.25rem 0 0', maxWidth: '24rem', padding: '0 0.5rem' }}>
              Where Self-care meets Self-Growth
            </p>
          </div>

          {/* Social Links */}
          <div className="links-fade-up" style={{ animationDelay: '0.3s', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="links-social-pill"
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          {/* Main glass card containing links */}
          <div className="links-fade-up links-glass-card" style={{ animationDelay: '0.35s' }}>
            {/* Link list */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {linkItems.map((item) => (
                <Link key={item.href} href={item.href} className="links-link-card">
                  <div className="links-link-icon-box">
                    <i className={item.icon}></i>
                  </div>
                  <div className="links-link-content">
                    <div className="links-link-title">{item.title}</div>
                    <div className="links-link-subtitle">{item.subtitle}</div>
                  </div>
                  <i className="links-link-arrow fa-solid fa-arrow-right" style={{ fontSize: '0.875rem', color: 'var(--links-plum-light)' }}></i>
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="links-divider"></div>

            {/* CTA highlight */}
            <Link href="/#contact" className="links-cta-card">
              <div className="links-cta-inner">
                <div>
                  <div className="links-cta-label">{t('cta.label')}</div>
                  <div className="links-cta-title">{t('cta.title')}</div>
                </div>
                <div className="links-cta-arrow-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="links-cta-decor"></div>
            </Link>
          </div>

        </main>
      </div>
    </>
  );
}