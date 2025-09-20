import { films } from '@/data/(studio)/films';
import { homeFilms } from '@/data/(studio)/home-films';

export const getFilmIndexById = (domain: keyof typeof films, id: string): number => {
  if (films[domain].length === 0) {
    throw new Error('Films array is empty');
  }

  const filmIndex = films[domain].findIndex(film => film.id === id);

  if (filmIndex === -1) {
    throw new Error('Film not found');
  }

  return filmIndex;
};

export const getNextFilmId = (domain: keyof typeof films, currentFilmId: string): string => {
  const filmIndex = getFilmIndexById(domain, currentFilmId);

  if (filmIndex === films[domain].length - 1) {
    return films[domain][0].id;
  }

  return films[domain][filmIndex + 1].id;
};

export const getPreviousFilmId = (domain: keyof typeof films, currentFilmId: string): string => {
  const filmIndex = getFilmIndexById(domain, currentFilmId);

  if (filmIndex === 0) {
    return films[domain][films[domain].length - 1].id;
  }

  return films[domain][filmIndex - 1].id;
};

export const getHomeFilmIndexById = (id: string): number => {
  const filmIndex = homeFilms.findIndex(film => film.id === id);

  if (filmIndex === -1) {
    throw new Error('Film not found in home films');
  }

  return filmIndex;
};

export const getNextHomeFilmId = (currentFilmId: string): string => {
  const filmIndex = getHomeFilmIndexById(currentFilmId);

  if (filmIndex === homeFilms.length - 1) {
    return homeFilms[0].id;
  }

  return homeFilms[filmIndex + 1].id;
};

export const getPreviousHomeFilmId = (currentFilmId: string): string => {
  const filmIndex = getHomeFilmIndexById(currentFilmId);

  if (filmIndex === 0) {
    return homeFilms[homeFilms.length - 1].id;
  }

  return homeFilms[filmIndex - 1].id;
};
