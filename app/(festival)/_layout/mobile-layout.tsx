'use client';

import { clsx } from 'clsx';
import { HiMiniBars3 as BurgerIcon, HiOutlineXMark as CrossIcon } from 'react-icons/hi2';

import { NavigationItem } from '@/data/(festival)/types';

import { useFestivalContext } from '../_context/festival.context';
import { Header } from './header';
import { Navigation } from './navigation';

export const BurgerMenuButton = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } = useFestivalContext();

  return (
    <button
      onClick={() => {
        if (isDrawerOpen) handleDrawerClose();
        else handleDrawerOpen();
      }}
      className={`focus:outline-none`}
    >
      <div className={`cursor-pointer transition-transform duration-300 ${isDrawerOpen ? 'rotate-90' : 'rotate-0'}`}>
        {isDrawerOpen ? <CrossIcon className="size-7 md:size-9" /> : <BurgerIcon className="size-7 md:size-9" />}
      </div>
    </button>
  );
};

export const MobileLayout = ({ navigationItems, edition }: { navigationItems: NavigationItem[]; edition: number }) => {
  const { isDrawerOpen, handleDrawerClose } = useFestivalContext();

  return (
    <>
      <div className="fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-between bg-white pr-6 pl-2 md:h-20">
        <Header editionNumber={edition} />
        <BurgerMenuButton />
      </div>

      <div
        className={clsx(
          'fixed top-16 right-0 z-10 h-[calc(100dvh-theme(height.16))] w-full transform bg-white transition-transform duration-500 ease-in-out md:top-20 md:h-[calc(100dvh-theme(height.20))]',
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <Navigation onClick={handleDrawerClose} navigationItems={navigationItems} />
      </div>
    </>
  );
};
