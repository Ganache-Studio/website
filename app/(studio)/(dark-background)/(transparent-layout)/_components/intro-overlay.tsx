'use client';

import { useStudioContext } from '@studio/context/studio.context';
import { clsx } from 'clsx';

type IntroOverlayProps = {
  isVisible: boolean;
  text: string;
};

export const IntroOverlay = ({ isVisible, text }: IntroOverlayProps) => {
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
          'max-w-3xl px-8 text-center text-lg font-semibold tracking-widest text-white uppercase transition-opacity duration-300 md:text-xl lg:text-2xl',
          isDrawerOpen && 'opacity-0',
        )}
      >
        {text}
      </p>
    </div>
  );
};
