'use client';

import clsx from 'clsx';
import NextImage from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { FilmCoverType } from '../../../_types/film-cover.type';

const Titles = ({ titles }: { titles: FilmCoverType['titles'] }) => {
  if (!titles || titles.length === 0) return null;

  return (
    <>
      {titles.map(({ text, italic }, i) => (
        <p
          key={i}
          className={clsx(
            'text-3xl font-bold text-white md:text-4xl lg:text-5xl',
            { italic },
          )}
        >
          {text}
        </p>
      ))}
    </>
  );
};

const Subtitle = ({ text }: { text?: string }) => {
  if (!text) return null;

  return (
    <p className="text-base font-bold text-white md:text-lg lg:text-xl">
      {text}
    </p>
  );
};

const Image = ({
  filmCover: { titles, subtitle },
}: {
  filmCover: FilmCoverType;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-2 transition-opacity duration-2000 lg:duration-1000',
        'lg:opacity-0 lg:group-hover:opacity-100',
        {
          'opacity-100': inView,
          'opacity-0': !inView,
        },
      )}
    >
      <Titles titles={titles} />
      <Subtitle text={subtitle} />
    </div>
  );
};

export const FilmCoverPresentation = ({
  filmCover,
}: {
  filmCover: FilmCoverType;
}) => {
  return (
    <div className="relative h-dvh" id={filmCover.id}>
      <Link href={`/film-${filmCover.type}#${filmCover.id}`} className="group">
        <NextImage
          src={filmCover.url}
          alt={filmCover.id}
          width={0}
          height={0}
          className="h-full w-full object-cover"
        />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image filmCover={filmCover} />
      </Link>
    </div>
  );
};
