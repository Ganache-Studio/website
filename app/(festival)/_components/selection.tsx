import { Film } from '@/types/festival-data.types';

import { FilmGallery } from './film-gallery';
import { Section } from './section';
import { Title } from './title';

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
