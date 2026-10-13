'use client';

import { useStudioContext } from '@studio/context/studio.context';
import { clsx } from 'clsx';
import { FaChevronDown } from 'react-icons/fa';

type IntroOverlayProps = {
  isVisible: boolean;
  text: string;
  onScroll: () => void;
};

export const IntroOverlay = ({ isVisible, text, onScroll }: IntroOverlayProps) => {
  const { isDrawerOpen } = useStudioContext();
  const showScrollHint = isVisible && !isDrawerOpen;

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
      <button
        type="button"
        onClick={onScroll}
        aria-label="Faire défiler"
        tabIndex={showScrollHint ? 0 : -1}
        className={clsx(
          'absolute bottom-0 left-1/2 flex -translate-x-1/2 transform items-center justify-center p-2 text-white transition-opacity duration-300 hover:opacity-100 md:p-3 lg:p-4',
          showScrollHint ? 'pointer-events-auto opacity-90' : 'pointer-events-none opacity-0',
        )}
      >
        <FaChevronDown className="size-4 cursor-pointer" />
      </button>
    </div>
  );
};
