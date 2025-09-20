import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { FilmItem, films, filmsTypes, FilmType } from '@/data/(studio)/films';

import { generateFilmMetadata, validateFilm } from '../../_helpers/page.helpers';
import { ClientPage } from './_client-page';

type FilmPageProps = {
  params: Promise<{
    id: string;
    'film-type': FilmType;
  }>;
};

export async function generateMetadata({ params }: FilmPageProps): Promise<Metadata> {
  const { id, 'film-type': filmType } = await params;
  return generateFilmMetadata(id, filmType);
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

  if (!validateFilm(id, filmType)) {
    notFound();
  }

  return <ClientPage id={id} basePage={filmType} />;
}
