import type { Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-16 h-[calc(100dvh-theme(height.16))] md:mt-20 md:h-[calc(100dvh-theme(height.20))] lg:mt-0 lg:ml-64 lg:h-dvh">
      {children}
    </main>
  );
}
