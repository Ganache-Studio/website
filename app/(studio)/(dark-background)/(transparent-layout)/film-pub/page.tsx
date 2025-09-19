import type { Metadata } from 'next';

import { filmsTypes } from '@/data/(studio)/films';
import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { FilmsPresentation } from '../_components/films-presentation';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/film-pub']);

export default async function FilmPubPage() {
  return <FilmsPresentation filmType={filmsTypes.pub} />;
}
