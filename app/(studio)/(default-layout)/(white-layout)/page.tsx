import type { Metadata } from 'next';

import { FilmCoverPresentation } from './_components/film-cover-presentation';
import { filmCovers } from '../../../_data/(studio)/film-covers';
import { generateMetadata } from '../../../_data/metadata';
import { pages } from '../../../_data/pages';

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
