import { StudioProvider } from '@studio/context/studio.context';
import type { Viewport } from 'next';

import { DesktopLayout } from '../../_layout/desktop/desktop-layout';
import { MobileLayout } from '../../_layout/mobile/mobile-layout';

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StudioProvider isMainContentFullScreen={true}>
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      <div className="lg:hidden">
        <MobileLayout />
      </div>
      <main>{children}</main>
    </StudioProvider>
  );
}
