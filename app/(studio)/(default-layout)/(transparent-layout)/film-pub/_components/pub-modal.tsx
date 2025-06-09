'use client';

import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { VisuallyHidden } from 'radix-ui';
import { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

import {
  PubAnyCover,
  PubPictureCover,
  PubVideoCover,
} from '../../../../../_types/pub-cover.type';

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
      className={`fixed top-1/2 z-50 -translate-y-1/2 cursor-pointer text-white hover:opacity-80 focus:outline-none ${
        direction === 'next' ? 'right-4' : 'left-4'
      }`}
      aria-label={`${direction} image`}
    >
      <Icon className="size-6 sm:size-8 lg:size-12" />
    </button>
  );
};

interface PubModalProps {
  pubCover: PubAnyCover;
  isOpen: boolean;
}

const isVideoCover = (cover: PubAnyCover): cover is PubVideoCover => {
  return 'vimeoUrl' in cover;
};

const isPictureCover = (cover: PubAnyCover): cover is PubPictureCover => {
  return 'pictures' in cover;
};

const getAspectRatioClasses = (pubCover: PubAnyCover) => {
  switch (pubCover.format) {
    case 'square':
      return 'aspect-square h-[60dvh] lg:h-[70dvh]';
    case 'vertical':
      return 'aspect-[9/16] h-[60dvh] lg:h-[80dvh]';
    case 'horizontal':
    default:
      return 'aspect-video h-[50dvh] lg:h-[55dvh]';
  }
};

export const PubModal: React.FC<PubModalProps> = ({ pubCover, isOpen }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (isPictureCover(pubCover)) {
      setCurrentImageIndex(prev =>
        prev < pubCover.pictures.length - 1 ? prev + 1 : 0,
      );
    }
  }, [pubCover]);

  const handlePrevious = useCallback(() => {
    if (isPictureCover(pubCover)) {
      setCurrentImageIndex(prev =>
        prev > 0 ? prev - 1 : pubCover.pictures.length - 1,
      );
    }
  }, [pubCover]);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen || !isPictureCover(pubCover)) return;

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrevious, isOpen, pubCover]);

  if (!isOpen) return null;

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-black/90 select-none">
        <Dialog.Close asChild>
          <button
            className="absolute top-4 right-4 z-50 cursor-pointer text-white hover:opacity-80 focus:outline-none sm:top-6 sm:right-6 lg:top-8 lg:right-8"
            aria-label="Close modal"
          >
            <FiX className="size-6 sm:size-8 lg:size-12" />
          </button>
        </Dialog.Close>

        <Dialog.Content
          className={`max-w-full ${getAspectRatioClasses(pubCover)} border-0 shadow-none outline-none`}
        >
          <VisuallyHidden.Root>
            <Dialog.Title>{pubCover.title}</Dialog.Title>
          </VisuallyHidden.Root>
          {isVideoCover(pubCover) ? (
            <iframe
              src={pubCover.vimeoUrl}
              className="h-full w-full"
              allow="autoplay; fullscreen;"
              title={`${pubCover.title} video`}
            />
          ) : isPictureCover(pubCover) ? (
            <>
              <Image
                src={pubCover.pictures[currentImageIndex]}
                alt={`${pubCover.title} - Image ${currentImageIndex + 1}`}
                width={0}
                height={0}
                className="h-full w-full object-contain"
              />
              <NavigationButton
                onAction={handlePrevious}
                direction="previous"
              />
              <NavigationButton onAction={handleNext} direction="next" />
            </>
          ) : null}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
