'use client';

import { homeFilms } from '@/data/(studio)/home-films';

import { FilmPresentation } from '../../_components/film-presentation';
import { getNextHomeFilmId, getPreviousHomeFilmId } from '../../_helpers/navigation.helpers';

type HomeFilmNavigationWrapperProps = {
  id: string;
};

export function ClientPage({ id }: HomeFilmNavigationWrapperProps) {
  const homeFilm = homeFilms.find(f => f.id === id);

  if (!homeFilm) {
    return null;
  }

  return (
    <FilmPresentation
      id={id}
      basePage={homeFilm.filmType}
      getNextId={(currentId: string) => getNextHomeFilmId(currentId)}
      getPreviousId={(currentId: string) => getPreviousHomeFilmId(currentId)}
      getCloseUrl={(currentId: string) => `/#${currentId}`}
      getNavigationUrl={(targetId: string) => `/home/${targetId}`}
    />
  );
}
