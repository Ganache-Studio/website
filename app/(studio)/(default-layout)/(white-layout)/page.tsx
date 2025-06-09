import { FilmCoverPresentation } from './_components/film-cover-presentation';
import { filmCovers } from '../../../_data/(studio)/film-covers';

export default function StudioPage() {
  return (
    <>
      {filmCovers.map(filmCover => (
        <FilmCoverPresentation key={filmCover.id} filmCover={filmCover} />
      ))}
    </>
  );
}
