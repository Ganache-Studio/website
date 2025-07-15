import type { Metadata } from 'next';

import { documentairePresentations } from '../../../../../_data/(studio)/documentaire-presentations';
import { generateMetadata } from '../../../../../_data/metadata';
import { pages } from '../../../../../_data/pages';
import { FilmPresentation } from '../_components/film-presentation';

export const metadata: Metadata = generateMetadata(pages.FilmDocumentaire);

export default function DocumentairePage() {
  return (
    <>
      {documentairePresentations.map(documentairePresentation => (
        <FilmPresentation
          key={documentairePresentation.id}
          {...documentairePresentation}
        />
      ))}
    </>
  );
}
