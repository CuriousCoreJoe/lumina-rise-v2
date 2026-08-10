import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import NavigationWrapper from '@/app/components/NavigationWrapper';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lumina Rise Self-Growth | Where Self-Care Meets Self-Growth',
  description: 'Empowering Women to Rise and Shine',
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NavigationWrapper locale={locale}>
            {children}
          </NavigationWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}