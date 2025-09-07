export const pages = {
  Home: '/',
  FilmFiction: '/film-fiction',
  FilmDocumentaire: '/film-documentaire',
  FilmMusique: '/film-musique',
  FilmPub: '/film-pub',
  Film: '/film',
  Contact: '/contact',
  Location: '/location',
  Legal: '/legal',
  GanacheFestival: '/ganache-festival',
  GanacheFestival2023: '/ganache-festival-2023',
  GanacheFestival2024: '/ganache-festival-2024',
  GanacheFestival2025: '/ganache-festival-2025',
} as const;

export type Page = (typeof pages)[keyof typeof pages];
