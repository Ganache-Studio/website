'use client';

import { useStudioContext } from '@studio/context/studio.context';
import { clsx } from 'clsx';

type IntroOverlayProps = {
  isVisible: boolean;
};

export const IntroOverlay = ({ isVisible }: IntroOverlayProps) => {
  const { isDrawerOpen } = useStudioContext();

  return (
    <div
      aria-hidden={!isVisible}
      className={clsx(
        'pointer-events-none fixed inset-0 z-[15] flex items-center justify-center bg-black/40 backdrop-blur-md transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <p
        className={clsx(
          'max-w-xl px-8 text-center text-sm tracking-widest text-white uppercase transition-opacity duration-300 md:text-base',
          isDrawerOpen && 'opacity-0',
        )}
      >
        Ganache Studio — films, documentaires, musique & pub
      </p>
    </div>
  );
};
