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
    icon: 'https://ganache.studio/images/ganache_favicon.ico',
    shortcut: 'https://ganache.studio/images/ganache_favicon.ico',
    apple: 'https://ganache.studio/images/ganache-favicon.png',
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
