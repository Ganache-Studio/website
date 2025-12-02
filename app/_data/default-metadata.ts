import { Page } from './pages.enum';

export type PageMetadata = {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
};

export const metadataConfig: Record<Page, PageMetadata> = {
  '/': {
    title: 'Ganache Studio • Société de production',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio',
  },

  '/film-fiction': {
    title: 'Films de Fiction | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/film-fiction',
  },

  '/film-documentaire': {
    title: 'Films Documentaires | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/film-documentaire',
  },

  '/film-musique': {
    title: 'Clips Musicaux | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/film-musique',
  },

  '/film-pub': {
    title: 'Films Publicitaires | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/film-pub',
  },

  '/film': {
    title: 'Films | Ganache Studio',
    description: 'Photos et vidéos en plein écran avec fiches film',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/next',
  },

  '/contact': {
    title: 'Contact | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/contact',
  },

  '/location': {
    title: 'Location | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/location',
  },

  '/legal': {
    title: 'Mentions Légales | Ganache Studio',
    description: 'Production basée à Paris • Fiction • Musique • Documentaire • Pub',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/legal',
  },

  '/ganache-festival': {
    title: 'Ganache Festival 2026 | 4ème Édition',
    description: 'Festival de courts métrages • Paris • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/ganache-festival',
  },

  '/ganache-festival-2023': {
    title: 'Ganache Festival 2023 | 1ère Édition',
    description: 'Festival de courts métrages • Paris • 21-22 avril 2023 • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/ganache-festival-2023',
  },

  '/ganache-festival-2024': {
    title: 'Ganache Festival 2024 | 2ème Édition',
    description: 'Festival de courts métrages • Paris • 19-20 avril 2024 • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/ganache-festival-2024',
  },

  '/ganache-festival-2025': {
    title: 'Ganache Festival 2025 | 3ème Édition',
    description: 'Festival de courts métrages • Paris • 25-26 avril 2025 • Ganache Studio',
    keywords: [],
    canonicalUrl: 'https://ganache.studio/ganache-festival-2025',
  },
};
