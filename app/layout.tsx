import type { Metadata, Viewport } from 'next';

import './globals.css';
import { generateMetadata } from './_data/metadata';
import { pages } from './_data/pages';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export const metadata: Metadata = generateMetadata(pages.Home);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          href="https://ganache.studio/images/ganache_favicon.ico"
        />
      </head>

      <body className={`pt-safe px-safe pb-safe flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
