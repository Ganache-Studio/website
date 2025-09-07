import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { FilmItem, films, filmsTypes, FilmType } from '@/data/(studio)/films';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import FilmPresentationDesktop from '../../_components/film-presentation-desktop';
import FilmPresentationMobile from '../../_components/film-presentation-mobile';

type FilmPageProps = {
  params: Promise<{
    id: string;
    'film-type': FilmType;
  }>;
};

const getFilmIndexById = (domain: keyof typeof films, id: string): number => {
  if (films[domain].length === 0) {
    throw new Error('Films array is empty');
  }

  const filmIndex = films[domain].findIndex(film => film.id === id);

  if (filmIndex === -1) {
    throw new Error('Film not found');
  }

  return filmIndex;
};

const getNextFilmId = (domain: keyof typeof films, currentFilmId: string): string => {
  const filmIndex = getFilmIndexById(domain, currentFilmId);

  if (filmIndex === films[domain].length - 1) {
    return films[domain][0].id;
  }

  return films[domain][filmIndex + 1].id;
};

const getPreviousFilmId = (domain: keyof typeof films, currentFilmId: string): string => {
  const filmIndex = getFilmIndexById(domain, currentFilmId);

  if (filmIndex === 0) {
    return films[domain][films[domain].length - 1].id;
  }

  return films[domain][filmIndex - 1].id;
};

export async function generateMetadata({ params }: FilmPageProps): Promise<Metadata> {
  const { id, 'film-type': filmType } = await params;

  const film = films[filmType].find(f => f.id === id);

  if (!film) {
    throw new Error('Generated metadata: Film not found');
  }

  return generateDefaultMetadata(film.pageMetadata);
}

export async function generateStaticParams() {
  return Object.values(filmsTypes).flatMap(filmType =>
    films[filmType].map((film: FilmItem) => ({
      id: film.id,
      'film-type': filmType,
    })),
  );
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { id, 'film-type': filmType } = await params;

  const film = films[filmType].find(f => f.id === id);

  if (!film) {
    notFound();
  }

  return (
    <>
      <div className="hidden lg:block">
        <FilmPresentationDesktop
          id={id}
          basePage={filmType}
          nextId={getNextFilmId(filmType, film.id)}
          previousId={getPreviousFilmId(filmType, film.id)}
        />
      </div>

      <div className="lg:hidden">
        <FilmPresentationMobile
          id={id}
          basePage={filmType}
          nextId={getNextFilmId(filmType, film.id)}
          previousId={getPreviousFilmId(filmType, film.id)}
        />
      </div>
    </>
  );
}
