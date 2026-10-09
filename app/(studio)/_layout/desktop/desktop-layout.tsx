'use client';

import { useStudioContext } from '@studio/context/studio.context';
import Link from 'next/link';

import { GanacheLogo } from '@/components/ganache-logo';

import { DesktopBottomNavigation } from './desktop-bottom-navigation';
import { DesktopNavigationMenu } from './desktop-navigation-menu';

const logoClassName = 'h-16 w-auto md:h-20 lg:h-auto lg:w-56';

export const DesktopLayout = () => {
  const { handleDrawerClose, isMainContentFullScreen } = useStudioContext();

  const isWhite = isMainContentFullScreen;

  if (isWhite) {
    return (
      <>
        <aside className="fixed z-[16] hidden h-full w-64 flex-col items-center py-8 lg:flex">
          <Link href="/" onClick={handleDrawerClose}>
            <GanacheLogo className={logoClassName} isWhite />
          </Link>
        </aside>
        <aside className="pointer-events-none fixed z-20 hidden h-full w-64 flex-col items-center justify-between py-8 lg:flex">
          <GanacheLogo className={`${logoClassName} invisible`} isWhite />
          <div className="pointer-events-auto">
            <DesktopNavigationMenu />
          </div>
          <div className="pointer-events-auto">
            <DesktopBottomNavigation />
          </div>
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed z-10 hidden h-full w-64 flex-col items-center justify-between bg-white py-8 text-black lg:flex">
      <Link href="/" onClick={handleDrawerClose}>
        <GanacheLogo className={logoClassName} isWhite={false} />
      </Link>
      <DesktopNavigationMenu />
      <DesktopBottomNavigation />
    </aside>
  );
};
