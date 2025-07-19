import type { Metadata } from 'next';

import type { PageMetadata } from '@/types/metadata.type';

import { Page } from './pages';

export const metadataConfig: Record<Page, PageMetadata> = {
  '/': {
    title: 'Ganache Studio',
    description: '',
    keywords: [],
  },

  '/film-fiction': {
    title: 'Films de Fiction | Ganache Studio',
    description: '',
    keywords: [],
  },

  '/film-documentaire': {
    title: 'Films Documentaires | Ganache Studio',
    description: '',
    keywords: [],
  },

  '/film-musique': {
    title: 'Clips Musicaux | Ganache Studio',
    description: '',
    keywords: [],
  },

  '/film-pub': {
    title: 'Films Publicitaires | Ganache Studio',
    description: '',
    keywords: [],
  },

  '/contact': {
    title: 'Contact | Ganache Studio',
    description: '',
    keywords: [],
  },

  '/location': {
    title: "Location d'Espaces | Ganache Studio",
    description: '',
    keywords: [],
  },

  '/legal': {
    title: 'Mentions Légales | Ganache Studio',
    description: '',
    keywords: [],
  },

  '/ganache-festival': {
    title: 'Ganache Festival 2025 | 3ème Édition',
    description: '',
    keywords: [],
  },

  '/ganache-festival-2024': {
    title: 'Ganache Festival 2024 | 2ème Édition',
    description: '',
    keywords: [],
  },

  '/ganache-festival-2023': {
    title: 'Ganache Festival 2023 | 1ère Édition',
    description: '',
    keywords: [],
  },
};

export const generateMetadata = (path: Page): Metadata => {
  const config = metadataConfig[path];

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords.join(', '),
    creator: 'Ganache Studio',
    publisher: 'Ganache Studio',
    referrer: 'origin-when-cross-origin',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};
