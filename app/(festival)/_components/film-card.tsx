'use client';

import Image from 'next/image';
import { useState } from 'react';

export type Film = {
  title: string;
  director: string;
  duration: string;
  synopsis: string;
  imageUrl: string;
};

type FilmCardProps = {
  film: Film;
  onFilmClick: () => void;
};

export const FilmCard = ({ film, onFilmClick }: FilmCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={'group relative h-full w-full cursor-pointer transition-transform hover:scale-105'}
      onClick={onFilmClick}
    >
      <Image
        src={film.imageUrl}
        alt={film.title}
        fill
        className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />

      <div className="absolute inset-0 flex flex-col bg-black/40 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl uppercase">{film.title}</h3>
        <p className="text-base">
          de {film.director} — {film.duration}&apos;
        </p>
      </div>
    </div>
  );
};
