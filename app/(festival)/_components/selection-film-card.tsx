'use client';

import Image from 'next/image';
import { useState } from 'react';

import { SelectionFilmItem } from '@/data/(festival)/types';

type SelectionFilmCardProps = {
  selectionFilmItem: SelectionFilmItem;
  onClick: () => void;
};

export const SelectionFilmCard = ({ selectionFilmItem, onClick }: SelectionFilmCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={'group relative h-full w-full cursor-pointer transition-transform hover:scale-105'}
      onClick={onClick}
    >
      <Image
        src={selectionFilmItem.image}
        alt={selectionFilmItem.title}
        fill
        className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => {
          setImageLoaded(true);
        }}
      />

      <div className="absolute inset-0 flex flex-col bg-black/40 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl uppercase">{selectionFilmItem.title}</h3>
        <p className="text-base">
          de {selectionFilmItem.director} — {selectionFilmItem.duration}&apos;
        </p>
      </div>
    </div>
  );
};
