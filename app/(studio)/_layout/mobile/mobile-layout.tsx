'use client';

import { useStudioContext } from '@studio/context/studio.context';
import Link from 'next/link';

import { GanacheLogo } from '@/components/ganache-logo';

import { BurgerMenuButton } from './burger-menu-button';
import { MobileDrawer } from './mobile-drawer';

export const MobileLayout = () => {
  const { handleDrawerClose, isDrawerOpen, isMainContentFullScreen } = useStudioContext();

  return (
    <>
      <header className="fixed top-0 left-1/2 z-20 -translate-x-1/2 lg:hidden">
        <Link href="/" onClick={handleDrawerClose}>
          <GanacheLogo isWhite={isMainContentFullScreen} className="h-16 w-auto md:h-20 lg:h-auto lg:w-56" />
        </Link>
      </header>

      <div
        className={`fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-start px-4 md:h-20 ${isMainContentFullScreen ? 'bg-transparent' : 'bg-white'}`}
      >
        <BurgerMenuButton />
      </div>
      <div
        onClick={handleDrawerClose}
        className={`fixed top-16 z-10 h-[calc(100dvh-theme(height.16))] w-full transform transition-transform duration-500 md:top-20 md:h-[calc(100dvh-theme(height.20))] ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <MobileDrawer />
      </div>
    </>
  );
};
