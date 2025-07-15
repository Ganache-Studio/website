import type { Metadata } from 'next';

import { musiquePresentations } from '../../../../../_data/(studio)/musique-presentations';
import { generateMetadata } from '../../../../../_data/metadata';
import { pages } from '../../../../../_data/pages';
import { FilmPresentation } from '../_components/film-presentation';

export const metadata: Metadata = generateMetadata(pages.FilmMusique);

export default function MusiquePage() {
  return (
    <>
      {musiquePresentations.map(musiquePresentation => (
        <FilmPresentation
          key={musiquePresentation.id}
          {...musiquePresentation}
        />
      ))}
    </>
  );
}
