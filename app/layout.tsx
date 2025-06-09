import type { Metadata, Viewport } from 'next';

import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: 'Ganache Studio',
  description: 'Ganache Studio',
  icons: {
    icon: '/images/ganache_favicon.ico',
    shortcut: '/images/ganache_favicon.ico',
    apple: '/images/ganache-favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ganache_favicon.ico" />
      </head>

      <body className={`pt-safe px-safe pb-safe flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
