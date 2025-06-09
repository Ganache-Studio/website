import { FilmGallery } from './film-gallery';
import { Section } from './section';
import { Title } from './title';
import { Film } from '../../../_types/festival-data.types';

type SelectionProps = {
  films: Film[];
  columns: 3 | 4;
};

export const Selection = ({ films, columns }: SelectionProps) => {
  return (
    <Section id="selection">
      <Title>LA SÉLECTION</Title>
      <FilmGallery films={films} columns={columns} />
    </Section>
  );
};
