'use client';

import { DesktopLayout } from './desktop-layout';
import { Footer } from './footer';
import { MobileLayout } from './mobile-layout';

type FestivalLayoutProps = {
  children: React.ReactNode;
};

export const FestivalLayout = ({ children }: FestivalLayoutProps) => {
  return (
    <div className="font-chalet">
      <div className="hidden lg:block">
        <DesktopLayout />
      </div>
      <div className="lg:hidden">
        <MobileLayout />
      </div>
      <main className="mx-6 mt-16 md:mx-8 md:mt-20 lg:mx-56 lg:mt-[7vw]">{children}</main>
      <Footer />
    </div>
  );
};
