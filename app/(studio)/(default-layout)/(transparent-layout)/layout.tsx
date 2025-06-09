import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
