import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { homeFilms } from '@/data/(studio)/home-films';

import { generateHomeFilmMetadata, validateHomeFilm } from '../../_helpers/page.helpers';
import { ClientPage } from './_client-page';

type FilmPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: FilmPageProps): Promise<Metadata> {
  const { id } = await params;
  return generateHomeFilmMetadata(id);
}

export async function generateStaticParams() {
  return homeFilms.map(homeFilm => ({
    id: homeFilm.id,
  }));
}

export default async function FilmPage({ params }: FilmPageProps) {
  const { id } = await params;

  if (!validateHomeFilm(id)) {
    notFound();
  }

  return <ClientPage id={id} />;
}
