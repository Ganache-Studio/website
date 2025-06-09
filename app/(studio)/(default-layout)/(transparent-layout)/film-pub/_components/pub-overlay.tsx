'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface PubOverlayProps {
  onOverlayHidden: () => void;
}

const useBlockScroll = (condition: boolean) => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [condition]);
};

export const PubOverlay = ({ onOverlayHidden }: PubOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);

  useBlockScroll(isOverlayVisible);

  useEffect(() => {
    const hideOverlay = () => {
      if (overlayRef.current) {
        // Animate overlay out
        gsap.to(overlayRef.current, {
          opacity: 0,
          y: -100,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            setIsOverlayVisible(false);
            onOverlayHidden();
          },
        });
      }
    };

    const handleScroll = (e: Event) => {
      if (isOverlayVisible && overlayRef.current) {
        e.preventDefault();
        hideOverlay();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isOverlayVisible && overlayRef.current) {
        e.preventDefault();
        hideOverlay();
      }
    };

    const handleTouch = (e: TouchEvent) => {
      if (isOverlayVisible && overlayRef.current) {
        e.preventDefault();
        hideOverlay();
      }
    };

    if (isOverlayVisible) {
      window.addEventListener('scroll', handleScroll, { passive: false });
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouch, { passive: false });
      window.addEventListener('touchmove', handleTouch, { passive: false });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [isOverlayVisible, onOverlayHidden]);

  if (!isOverlayVisible) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-9 flex items-center justify-center"
    >
      <div className="w-4/5 text-left text-white lg:w-2/5">
        <p className="text-sm font-bold tracking-wide uppercase lg:text-lg">
          Issus du cinéma, nous produisons des publicités avec le savoir-faire
          et l&apos;exigence que demandent les grandes histoires. Nous croyons à
          la créativité pure, à la disruption et au travail bien fait.
        </p>
      </div>
    </div>
  );
};
