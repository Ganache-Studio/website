'use client';

import { useStudioContext } from '@studio/context/studio.context';
import { HiMiniBars3 as BurgerIcon, HiOutlineXMark as CrossIcon } from 'react-icons/hi2';

export const BurgerMenuButton = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose, isMainContentFullScreen } = useStudioContext();

  return (
    <button
      onClick={() => {
        if (isDrawerOpen) handleDrawerClose();
        else handleDrawerOpen();
      }}
      className={`focus:outline-none`}
    >
      <div className={`transition-transform duration-300 ${isDrawerOpen ? 'rotate-90' : 'rotate-0'}`}>
        {isDrawerOpen ? (
          <CrossIcon className={`size-7 md:size-9 ${isMainContentFullScreen ? 'text-white' : 'text-black'}`} />
        ) : (
          <BurgerIcon className={`size-7 md:size-9 ${isMainContentFullScreen ? 'text-white' : 'text-black'}`} />
        )}
      </div>
    </button>
  );
};
