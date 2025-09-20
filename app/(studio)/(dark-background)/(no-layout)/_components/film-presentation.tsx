'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { films } from '@/data/(studio)/films';

import { FilmPresentationDesktop } from './film-presentation-desktop';
import { FilmPresentationMobile } from './film-presentation-mobile';

type FilmPresentationProps = {
  id: string;
  basePage: keyof typeof films;
  getNextId: (currentId: string) => string;
  getPreviousId: (currentId: string) => string;
  getCloseUrl: (currentId: string) => string;
  getNavigationUrl: (targetId: string) => string;
};

export function FilmPresentation({
  id,
  basePage,
  getNextId,
  getPreviousId,
  getCloseUrl,
  getNavigationUrl,
}: FilmPresentationProps) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    const closeUrl = getCloseUrl(id);
    router.push(closeUrl);
  }, [router, id, getCloseUrl]);

  const handlePrevious = useCallback(() => {
    const previousId = getPreviousId(id);
    const navigationUrl = getNavigationUrl(previousId);
    router.push(navigationUrl);
  }, [router, id, getPreviousId, getNavigationUrl]);

  const handleNext = useCallback(() => {
    const nextId = getNextId(id);
    const navigationUrl = getNavigationUrl(nextId);
    router.push(navigationUrl);
  }, [router, id, getNextId, getNavigationUrl]);

  return (
    <>
      <div className="hidden lg:block">
        <FilmPresentationDesktop
          id={id}
          basePage={basePage}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>

      <div className="lg:hidden">
        <FilmPresentationMobile
          id={id}
          basePage={basePage}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </>
  );
}
