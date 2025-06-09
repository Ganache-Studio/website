import { documentairePresentations } from '../../../../../_data/(studio)/documentaire-presentations';
import { FilmPresentation } from '../_components/film-presentation';

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
