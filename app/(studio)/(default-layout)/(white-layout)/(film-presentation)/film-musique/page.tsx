import { musiquePresentations } from '../../../../../_data/(studio)/musique-presentations';
import { FilmPresentation } from '../_components/film-presentation';

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
