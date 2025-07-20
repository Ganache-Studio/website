import type { Metadata } from 'next';

import type { PageMetadata } from '@/types/metadata.type';

import { Page } from './pages';

export const metadataConfig: Record<Page, PageMetadata> = {
  '/': {
    title: 'Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com',
  },

  '/film-fiction': {
    title: 'Films de Fiction | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/film-fiction',
  },

  '/film-documentaire': {
    title: 'Films Documentaires | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/film-documentaire',
  },

  '/film-musique': {
    title: 'Clips Musicaux | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/film-musique',
  },

  '/film-pub': {
    title: 'Films Publicitaires | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/film-pub',
  },

  '/contact': {
    title: 'Contact | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/contact',
  },

  '/location': {
    title: 'Location | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/location',
  },

  '/legal': {
    title: 'Mentions Légales | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/legal',
  },

  '/ganache-festival': {
    title: 'Ganache Festival 2025 | 3ème Édition',
    description: 'Festival de courts métrages • Paris • 25-26 avril 2025 • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/ganache-festival',
  },

  '/ganache-festival-2024': {
    title: 'Ganache Festival 2024 | 2ème Édition',
    description: 'Festival de courts métrages • Paris • 19-20 avril 2024 • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/ganache-festival-2024',
  },

  '/ganache-festival-2023': {
    title: 'Ganache Festival 2023 | 1ère Édition',
    description: 'Festival de courts métrages • Paris • 21-22 avril 2023 • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache-studio.com/ganache-festival-2023',
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
    alternates: {
      canonical: config.canonicalUrl,
    },
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
