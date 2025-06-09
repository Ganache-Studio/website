import { fictionPresentations } from '../../../../../_data/(studio)/fiction-presentations';
import { FilmPresentation } from '../_components/film-presentation';

export default function FictionPage() {
  return (
    <>
      {fictionPresentations.map(fictionPresentation => (
        <FilmPresentation
          key={fictionPresentation.id}
          {...fictionPresentation}
        />
      ))}
    </>
  );
}
