'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function NavigationWrapper({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Strip the locale prefix to check if we're on the links page
  // pathname looks like /en/links or /fr/links
  const isLinksPage = pathname.replace(/^\/[a-z]{2}/, '') === '/links';

  if (isLinksPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header locale={locale} />
      {children}
      <Footer />
    </>
  );
}