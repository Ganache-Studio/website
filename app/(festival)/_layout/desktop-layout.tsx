'use client';

import { NavigationItem } from '@/data/(festival)/types';

import { Header } from './header';
import { Navigation } from './navigation';

export const DesktopLayout = ({ edition, navigationItems }: { edition: number; navigationItems: NavigationItem[] }) => {
  return (
    <>
      <div className="fixed z-10 p-4">
        <Header editionNumber={edition} />
      </div>
      <Navigation navigationItems={navigationItems} />
    </>
  );
};
