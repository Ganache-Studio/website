'use client';

import Link from 'next/link';

import { DesktopBottomNavigation } from './desktop-bottom-navigation';
import { DesktopNavigationMenu } from './desktop-navigation-menu';
import GanacheLogo from '../../../../_components/ganache-logo';
import { useStudioContext } from '../../../_context/studio.context';

export const DesktopLayout = () => {
  const { handleDrawerClose, isMainContentFullScreen } = useStudioContext();

  const isWhite = isMainContentFullScreen;

  return (
    <aside
      className={`fixed z-10 hidden h-full w-64 flex-col items-center justify-between py-8 lg:flex ${
        isWhite ? 'bg-transparent text-white' : 'bg-white text-black'
      }`}
    >
      <Link href="/" onClick={handleDrawerClose}>
        <GanacheLogo
          className="h-16 w-auto md:h-20 lg:h-auto lg:w-56"
          isWhite={isWhite}
        />
      </Link>
      <DesktopNavigationMenu />
      <DesktopBottomNavigation />
    </aside>
  );
};
