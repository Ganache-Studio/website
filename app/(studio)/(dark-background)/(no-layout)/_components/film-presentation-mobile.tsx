'use client';

import { clsx } from 'clsx';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiSkipBack, FiSkipForward, FiX } from 'react-icons/fi';

import { films } from '@/data/(studio)/films';

type FilmPresentationMobileProps = {
  id: string;
  basePage: keyof typeof films;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

const ImageGallery = ({ pictures }: { pictures: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = (): void => {
    setCurrentIndex(prevIndex => {
      if (prevIndex <= 0) {
        return pictures.length - 1;
      }

      return prevIndex - 1;
    });
  };

  const handleNext = (): void => {
    setCurrentIndex(prevIndex => {
      if (prevIndex >= pictures.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  };

  return (
    <div className="flex aspect-video w-full items-center justify-center">
      {pictures.length > 1 && (
        <button onClick={handlePrevious}>
          <FiChevronLeft className="size-6 hover:scale-105" />
        </button>
      )}
      <Image
        src={pictures[currentIndex]}
        alt={`${currentIndex + 1} of ${pictures.length}`}
        width={0}
        height={0}
        className="aspect-video flex-1 object-contain"
      />
      {pictures.length > 1 && (
        <button onClick={handleNext}>
          <FiChevronRight className="size-6 hover:scale-105" />
        </button>
      )}
    </div>
  );
};

export function FilmPresentationMobile({ id, basePage, onClose, onNext, onPrevious }: FilmPresentationMobileProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        onPrevious();
      }
      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  const film = useMemo(() => films[basePage].find(f => f.id === id), [basePage, id]);

  if (!film) {
    return null;
  }

  const { vimeoUrl, title, description, date, pictures } = film;

  return (
    <div className="fixed inset-0 flex h-full w-full flex-col bg-black text-white">
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto">
        {/* Video container with close button */}
        <div className="px-4 pb-4">
          <div className="flex justify-end pb-2">
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <FiX className="size-6" />
            </button>
          </div>
          <div className="aspect-[16/9] w-full">
            {vimeoUrl ? (
              <iframe src={vimeoUrl} className="h-full w-full rounded-lg" allowFullScreen />
            ) : pictures && pictures.length > 0 ? (
              <ImageGallery pictures={pictures} />
            ) : null}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex w-full justify-between px-4 pb-4">
          <button onClick={onPrevious} className="flex items-center space-x-2 transition-all hover:scale-105">
            <FiSkipBack className="size-4" />
            <span className="text-sm">Précédent</span>
          </button>
          <button onClick={onNext} className="flex items-center space-x-2 transition-all hover:scale-105">
            <span className="text-sm">Suivant</span>
            <FiSkipForward className="size-4" />
          </button>
        </div>

        {/* Content area with title */}
        <div className="px-4 pb-8">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">
                {title.map((t, index) => {
                  return (
                    <span key={t.text} className={clsx({ italic: t.italic })}>
                      {t.text} {index < film.title.length - 1 && ' • '}
                    </span>
                  );
                })}
              </h1>
              {date && <p className="text-sm italic opacity-80">{date}</p>}
            </div>
            <p className="text-sm leading-relaxed opacity-90">{description}</p>
            {film.ComponentDescription && <film.ComponentDescription />}
          </div>
        </div>
      </div>
    </div>
  );
}
