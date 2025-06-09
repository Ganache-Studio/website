'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Film } from './film-card';

const CloseButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-50 cursor-pointer text-white hover:opacity-80 focus:outline-none sm:top-6 sm:right-6 lg:top-8 lg:right-8"
    >
      <FiX className="size-6 sm:size-8 lg:size-12" />
    </button>
  );
};

const NavigationButton = ({
  onAction,
  direction,
}: {
  onAction: (e?: React.MouseEvent) => void;
  direction: 'next' | 'previous';
}) => {
  const Icon = direction === 'next' ? FiChevronRight : FiChevronLeft;

  return (
    <button
      onClick={e => {
        e.stopPropagation();
        onAction(e);
      }}
      className="z-50 cursor-pointer text-white hover:opacity-80 focus:outline-none"
    >
      <Icon className="size-6 sm:size-8 lg:size-12" />
    </button>
  );
};

interface FilmModalProps {
  film: Film;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({
  film,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div>
      {/* Desktop */}
      <div className="fixed inset-0 z-20 hidden items-center justify-center bg-black/90 select-none lg:flex">
        <CloseButton onClose={onClose} />

        <div
          className="absolute flex h-[80dvh] w-full items-center justify-between space-x-10 px-10"
          onClick={onClose}
        >
          <NavigationButton onAction={onPrevious} direction="previous" />

          <div
            className="relative z-50 h-full w-full max-w-6xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={film.imageUrl}
              alt={film.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-0 left-0 p-8">
              <p className="mb-2 text-4xl tracking-wide text-white uppercase">
                {film.title}
              </p>
              <p className="text-xl text-white">
                de {film.director} — {film.duration}&apos;
              </p>
            </div>
            <div className="bg-opacity-50 absolute right-0 bottom-0 left-0 p-8">
              <p className="text-lg text-white">{film.synopsis}</p>
            </div>
          </div>

          <NavigationButton onAction={onNext} direction="next" />
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed inset-0 z-20 flex flex-col justify-center bg-black/90 lg:hidden">
        <CloseButton onClose={onClose} />

        <div className="flex-[15] p-4 pr-12 sm:p-6 sm:pr-16">
          <h2 className="text-xl text-white uppercase sm:text-2xl">
            {film.title}
          </h2>
          <h3 className="text-lg font-light text-white sm:text-xl">
            de {film.director} — {film.duration}&apos;
          </h3>
        </div>
        <div className="relative flex-[60] border-4 border-white">
          <Image
            src={film.imageUrl}
            alt={film.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between p-4 sm:p-6">
            <NavigationButton onAction={onPrevious} direction="previous" />
            <NavigationButton onAction={onNext} direction="next" />
          </div>
        </div>
        <div className="flex-[25] overflow-y-scroll p-4 sm:p-6">
          <p className="text-xs text-white sm:text-base">{film.synopsis}</p>
        </div>
      </div>
    </div>
  );
};
