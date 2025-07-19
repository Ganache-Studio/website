import type { Metadata } from 'next';

import { filmCovers } from '@/data/(studio)/film-covers';
import { generateMetadata } from '@/data/metadata';
import { pages } from '@/data/pages';

import { FilmCoverPresentation } from './_components/film-cover-presentation';

export const metadata: Metadata = generateMetadata(pages.Home);

export default function StudioPage() {
  return (
    <>
      {filmCovers.map(filmCover => (
        <FilmCoverPresentation key={filmCover.id} filmCover={filmCover} />
      ))}
    </>
  );
}
