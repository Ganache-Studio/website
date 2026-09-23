'use client';

import { useStudioContext } from '@studio/context/studio.context';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, PropsWithChildren, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { FilmItem, films, FilmType } from '@/data/(studio)/films';
import { scrollToSection } from '@/helpers/scroll-to-section';

import { IntroOverlay } from './intro-overlay';

export const INTRO_SECTION_ID = 'intro';

const sectionObserverOptions: IntersectionObserverInit = {
  threshold: 0.5,
  rootMargin: '0px 0px -50% 0px',
};

const DownArrow = ({
  currentIndex,
  filmType,
  isIntroVisible,
  withIntro,
}: {
  currentIndex: number;
  filmType: FilmType;
  isIntroVisible: boolean;
  withIntro: boolean;
}) => {
  const handleArrowDown = useCallback(() => {
    if (isIntroVisible) {
      const first = films[filmType][0];
      if (first) scrollToSection(first.id);
      return;
    }

    const next = films[filmType][currentIndex + 1];
    if (next) scrollToSection(next.id);
  }, [currentIndex, filmType, isIntroVisible]);

  const handleArrowUp = useCallback(() => {
    if (isIntroVisible) return;

    if (currentIndex === 0 && withIntro) {
      scrollToSection(INTRO_SECTION_ID);
      return;
    }

    const previous = films[filmType][currentIndex - 1];
    if (previous) scrollToSection(previous.id);
  }, [currentIndex, filmType, isIntroVisible, withIntro]);

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
          'pointer-events-auto opacity-30': !isIntroVisible && currentIndex < films[filmType].length - 1,
          'pointer-events-none opacity-0': isIntroVisible || currentIndex >= films[filmType].length - 1,
          hidden: isIntroVisible || currentIndex >= films[filmType].length - 1,
        },
      )}
    >
      <FaChevronDown className="size-4 cursor-pointer" />
    </button>
  );
};

const Video = ({ film, isInView, disableDomId }: { film: FilmItem; isInView: boolean; disableDomId?: boolean }) => {
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
      id={disableDomId ? undefined : film.id}
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

const Picture = ({ film, disableDomId }: { film: FilmItem; disableDomId?: boolean }) => {
  return (
    <Image
      src={film.picture ?? ''}
      alt={film.id}
      id={disableDomId ? undefined : film.id}
      fill
      className="h-full w-full object-cover"
    />
  );
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

const FilmPresentationSynopsis = ({ film }: { film: FilmItem }) => {
  return (
    <div className="w-full pl-4 text-sm sm:w-8/10 md:text-base">
      <p className="text-white/90 italic">{film.description}</p>
    </div>
  );
};

const FirstFilmWithIntro = ({
  item,
  filmType,
  withSynopsis,
  onInView,
  onIntroInView,
}: {
  item: FilmItem;
  filmType: FilmType;
  withSynopsis?: boolean;
  onInView: (index: number) => void;
  onIntroInView: (isInView: boolean) => void;
}) => {
  const { isDrawerOpen } = useStudioContext();
  const introRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isFilmInView, setIsFilmInView] = useState(true);

  useEffect(() => {
    const introElement = introRef.current;
    const wrapperElement = wrapperRef.current;
    if (!introElement || !wrapperElement) return;

    const introObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        onIntroInView(entry.isIntersecting);
      }
    }, sectionObserverOptions);

    const wrapperObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          setIsFilmInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            onInView(0);
          }
        }
      },
      { threshold: 0.25 },
    );

    introObserver.observe(introElement);
    wrapperObserver.observe(wrapperElement);

    return () => {
      introObserver.disconnect();
      wrapperObserver.disconnect();
    };
  }, [onInView, onIntroInView]);

  return (
    <div ref={wrapperRef} className="relative h-[200dvh]">
      <div ref={introRef} id={INTRO_SECTION_ID} className="h-dvh snap-start snap-always" aria-hidden />
      <div id={item.id} className="h-dvh snap-start snap-always" />
      <Link href={`/${filmType}/${item.id}`} className="sticky top-0 z-[1] -mt-[200dvh] block h-dvh w-full">
        <div className="relative h-full w-full cursor-pointer">
          {item.video ? (
            <Video film={item} isInView={isFilmInView} disableDomId />
          ) : (
            <Picture film={item} disableDomId />
          )}
          <div
            className={`absolute right-4 bottom-4 flex flex-col items-end text-right transition-opacity duration-500 ${isDrawerOpen ? 'opacity-0' : 'opacity-100'}`}
          >
            <FilmPresentationTitle film={item} />
            <FilmPresentationPresentationItems film={item} />
            {withSynopsis && <FilmPresentationSynopsis film={item} />}
          </div>
        </div>
      </Link>
    </div>
  );
};

const FilmPresentation = ({
  item,
  index,
  onInView,
  filmType,
  withSynopsis,
}: PropsWithChildren<{
  item: FilmItem;
  index: number;
  onInView: (index: number) => void;
  filmType: FilmType;
  withSynopsis?: boolean;
}>) => {
  const { isDrawerOpen } = useStudioContext();

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentElement = sectionRef.current;

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setIsInView(true);
          onInView(index);
        }
      }
    }, sectionObserverOptions);

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index, onInView]);

  return (
    <Link href={`/${filmType}/${item.id}`}>
      <div ref={sectionRef} className="relative h-dvh w-full cursor-pointer snap-start snap-always" id={item.id}>
        {item.video ? <Video film={item} isInView={isInView} /> : <Picture film={item} />}
        <div
          className={`absolute right-4 bottom-4 flex flex-col items-end text-right transition-opacity duration-500 ${isDrawerOpen ? 'opacity-0' : 'opacity-100'}`}
        >
          <FilmPresentationTitle film={item} />
          <FilmPresentationPresentationItems film={item} />
          {withSynopsis && <FilmPresentationSynopsis film={item} />}
        </div>
      </div>
    </Link>
  );
};

type FilmsPresentationProps = {
  readonly filmType: FilmType;
  readonly withSynopsis?: boolean;
  readonly withIntro?: boolean;
};

export const FilmsPresentation: FunctionComponent<FilmsPresentationProps> = ({
  filmType,
  withSynopsis = false,
  withIntro = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isIntroVisible, setIsIntroVisible] = useState(withIntro);

  useLayoutEffect(() => {
    if (withIntro && globalThis.location.hash) {
      setIsIntroVisible(false);
    }
  }, [withIntro]);

  const handleIntroInView = useCallback((inView: boolean) => {
    setIsIntroVisible(inView);
  }, []);

  return (
    <>
      {withIntro && <IntroOverlay isVisible={isIntroVisible} />}
      <DownArrow
        currentIndex={currentIndex}
        filmType={filmType}
        isIntroVisible={isIntroVisible}
        withIntro={withIntro}
      />
      <div className="h-dvh w-full snap-y snap-mandatory overflow-y-auto">
        {films[filmType].map((filmItem, index) =>
          withIntro && index === 0 ? (
            <FirstFilmWithIntro
              key={filmItem.id}
              item={filmItem}
              filmType={filmType}
              withSynopsis={withSynopsis}
              onInView={setCurrentIndex}
              onIntroInView={handleIntroInView}
            />
          ) : (
            <FilmPresentation
              filmType={filmType}
              key={filmItem.id}
              item={filmItem}
              index={index}
              onInView={setCurrentIndex}
              withSynopsis={withSynopsis}
            />
          ),
        )}
      </div>
    </>
  );
};
