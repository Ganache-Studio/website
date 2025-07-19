import type { Metadata } from 'next';

import { fictionPresentations } from '@/data/(studio)/fiction-presentations';
import { generateMetadata } from '@/data/metadata';
import { pages } from '@/data/pages';

import { FilmPresentation } from '../_components/film-presentation';

export const metadata: Metadata = generateMetadata(pages.FilmFiction);

export default function FictionPage() {
  return (
    <>
      {fictionPresentations.map(fictionPresentation => (
        <FilmPresentation key={fictionPresentation.id} {...fictionPresentation} />
      ))}
    </>
  );
}
