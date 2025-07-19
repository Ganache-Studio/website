import { StudioProvider } from '@studio/context/studio.context';

import { DesktopLayout } from './_layout/desktop/desktop-layout';
import { MobileLayout } from './_layout/mobile/mobile-layout';

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StudioProvider>
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      <div className="lg:hidden">
        <MobileLayout />
      </div>
      {children}
    </StudioProvider>
  );
}
