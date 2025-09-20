'use client';

import { useStudioContext } from '@studio/context/studio.context';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { FilmItem, films } from '@/data/(studio)/films';
import { homeFilms } from '@/data/(studio)/home-films';
import { scrollToSection } from '@/helpers/scroll-to-section';

const DownArrow = ({ currentIndex }: { currentIndex: number }) => {
  const handleArrowDown = useCallback(() => {
    const next = homeFilms[currentIndex + 1];
    if (next) scrollToSection(next.id);
  }, [currentIndex]);

  const handleArrowUp = useCallback(() => {
    const previous = homeFilms[currentIndex - 1];
    if (previous) scrollToSection(previous.id);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        handleArrowDown();
      }
      if (event.key === 'ArrowUp') {
        handleArrowUp();
      }
    };

    globalThis.addEventListener('keydown', handleKeyDown);
    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleArrowDown, handleArrowUp]);

  return (
    <button
      onClick={handleArrowDown}
      className={clsx(
        'fixed bottom-0 left-1/2 z-20 flex -translate-x-1/2 transform items-center justify-center p-2 transition-opacity duration-300 hover:opacity-100 md:p-3 lg:p-4',
        {
          'pointer-events-auto opacity-30': currentIndex < homeFilms.length - 1,
          'pointer-events-none opacity-0': currentIndex >= homeFilms.length - 1,
          hidden: currentIndex >= homeFilms.length - 1,
        },
      )}
    >
      <FaChevronDown className="size-4 cursor-pointer" />
    </button>
  );
};

const Video = ({ film, isInView }: { film: FilmItem; isInView: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isInView) return;

    const handleCanPlay = () => {
      video.play().catch(() => null);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      id={film.id}
      className="h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      src={film.video}
      poster={film.videoPoster}
    />
  );
};

const Picture = ({ film }: { film: FilmItem }) => {
  return <Image src={film.picture ?? ''} alt={film.id} id={film.id} fill className="h-full w-full object-cover" />;
};

const FilmPresentationTitle = ({ film }: { film: FilmItem }) => {
  return (
    <h2 className="text-2xl font-bold md:text-3xl">
      {film.title.map((t, index) => {
        return (
          <span key={t.text} className={clsx({ italic: t.italic })}>
            {t.text} {index < film.title.length - 1 && ' • '}
          </span>
        );
      })}
    </h2>
  );
};

const FilmPresentationPresentationItems = ({ film }: { film: FilmItem }) => {
  return (
    <>
      {film.presentationItems.map(item => (
        <p key={item} className="text-sm md:text-base">
          {item}
        </p>
      ))}
    </>
  );
};

const FilmPresentation = ({
  index,
  onInView,
}: PropsWithChildren<{
  index: number;
  onInView: (index: number) => void;
}>) => {
  const { isDrawerOpen } = useStudioContext();

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            onInView(index);
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px',
      },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index, onInView]);

  const filmType = homeFilms[index].filmType;
  const item = films[filmType].find(film => film.id === homeFilms[index].id);

  if (!item) return null;

  return (
    <Link href={`/home/${item.id}`}>
      <div ref={sectionRef} className="relative h-dvh w-full cursor-pointer snap-start snap-always" id={item.id}>
        {item.video ? <Video film={item} isInView={isInView} /> : <Picture film={item} />}
        <div
          className={`absolute right-4 bottom-4 text-right transition-opacity duration-500 ${isDrawerOpen ? 'opacity-0' : 'opacity-100'}`}
        >
          <FilmPresentationTitle film={item} />
          <FilmPresentationPresentationItems film={item} />
        </div>
      </div>
    </Link>
  );
};

export const HomeFilmsPresentation = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <>
      <DownArrow currentIndex={currentIndex} />
      <div className="h-dvh w-full snap-y snap-mandatory overflow-y-auto">
        {homeFilms.map((_, index) => (
          <FilmPresentation key={index} index={index} onInView={setCurrentIndex} />
        ))}
      </div>
    </>
  );
};
