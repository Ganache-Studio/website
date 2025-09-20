'use client';

import { films } from '@/data/(studio)/films';

import { FilmPresentation } from '../../_components/film-presentation';
import { getNextFilmId, getPreviousFilmId } from '../../_helpers/navigation.helpers';

type FilmNavigationWrapperProps = {
  id: string;
  basePage: keyof typeof films;
};

export function ClientPage({ id, basePage }: FilmNavigationWrapperProps) {
  return (
    <FilmPresentation
      id={id}
      basePage={basePage}
      getNextId={(currentId: string) => getNextFilmId(basePage, currentId)}
      getPreviousId={(currentId: string) => getPreviousFilmId(basePage, currentId)}
      getCloseUrl={(currentId: string) => `/${basePage}#${currentId}`}
      getNavigationUrl={(targetId: string) => `/${basePage}/${targetId}`}
    />
  );
}
