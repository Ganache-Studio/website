import type { Metadata } from 'next';

import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { HomeFilmsPresentation } from './_components/home-film-presentation';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/']);

export default function StudioHomePage() {
  return <HomeFilmsPresentation />;
}
