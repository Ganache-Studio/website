import { SelectionFilmItem } from '@/data/(festival)/types';

import { Section } from './section';
import { SelectionFilmGallery } from './selection-film-gallery';
import { Title } from './title';

type SelectionProps = {
  selection: SelectionFilmItem[];
  columns: 3 | 4;
};

export const SelectionSection = ({ selection, columns }: SelectionProps) => {
  return (
    <Section id="selection">
      <Title>LA SÉLECTION</Title>
      <SelectionFilmGallery selection={selection} columns={columns} />
    </Section>
  );
};
