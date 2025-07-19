import type { Metadata } from 'next';

import { documentairePresentations } from '@/data/(studio)/documentaire-presentations';
import { generateMetadata } from '@/data/metadata';
import { pages } from '@/data/pages';

import { FilmPresentation } from '../_components/film-presentation';

export const metadata: Metadata = generateMetadata(pages.FilmDocumentaire);

export default function DocumentairePage() {
  return (
    <>
      {documentairePresentations.map(documentairePresentation => (
        <FilmPresentation key={documentairePresentation.id} {...documentairePresentation} />
      ))}
    </>
  );
}
