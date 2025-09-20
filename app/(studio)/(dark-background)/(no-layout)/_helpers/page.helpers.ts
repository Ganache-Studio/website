import type { Metadata } from 'next';

import { films, FilmType } from '@/data/(studio)/films';
import { homeFilms } from '@/data/(studio)/home-films';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

export const generateFilmMetadata = async (id: string, filmType: FilmType): Promise<Metadata> => {
  const film = films[filmType].find(f => f.id === id);

  if (!film) {
    throw new Error('Generated metadata: Film not found');
  }

  return generateDefaultMetadata(film.pageMetadata);
};

export const generateHomeFilmMetadata = async (id: string): Promise<Metadata> => {
  const homeFilm = homeFilms.find(f => f.id === id);

  if (!homeFilm) {
    throw new Error('Generated metadata: Film not found in home films');
  }

  const film = films[homeFilm.filmType].find(f => f.id === id);

  if (!film) {
    throw new Error('Generated metadata: Film not found');
  }

  return generateDefaultMetadata(film.pageMetadata);
};

export const validateFilm = (id: string, filmType: FilmType): boolean => {
  const film = films[filmType].find(f => f.id === id);
  return !!film;
};

export const validateHomeFilm = (id: string): boolean => {
  const homeFilm = homeFilms.find(f => f.id === id);
  return !!homeFilm;
};
