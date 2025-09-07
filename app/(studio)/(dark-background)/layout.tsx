import '../../globals.css';

import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function DarkBackgroundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`bg-black text-white`}>{children}</div>;
}
