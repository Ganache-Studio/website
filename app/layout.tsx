import './globals.css';

import type { Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="https://ganache.studio/media/ganache_favicon.ico" />
      </head>

      <body className={`pt-safe px-safe pb-safe flex flex-col antialiased`}>{children}</body>
    </html>
  );
}
