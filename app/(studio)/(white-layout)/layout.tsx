import { StudioProvider } from '@studio/context/studio.context';
import type { Viewport } from 'next';

import { DesktopLayout } from '../_layout/desktop/desktop-layout';
import { MobileLayout } from '../_layout/mobile/mobile-layout';

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function WhiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StudioProvider isMainContentFullScreen={false}>
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      <div className="lg:hidden">
        <MobileLayout />
      </div>
      <main className="mt-16 h-[calc(100dvh-theme(height.16))] md:mt-20 md:h-[calc(100dvh-theme(height.20))] lg:mt-0 lg:ml-64 lg:h-dvh">
        {children}
      </main>
    </StudioProvider>
  );
}
