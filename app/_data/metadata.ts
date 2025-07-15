import type { Metadata } from 'next';

import { Page } from './pages';

export type PageMetadata = {
  title: string;
  description: string;
  keywords?: string[];
};

export const metadataConfig: Record<Page, PageMetadata> = {
  '/': {
    title: 'Ganache Studio - Production audiovisuelle',
    description:
      'Ganache Studio est une société de production audiovisuelle spécialisée dans la fiction, le documentaire et les clips musicaux.',
    keywords: [
      'production audiovisuelle',
      'cinéma',
      'documentaire',
      'fiction',
      'clips musicaux',
      'Ganache Studio',
    ],
  },

  '/film-fiction': {
    title: 'Films de Fiction - Ganache Studio',
    description:
      'Découvrez notre sélection de films de fiction produits par Ganache Studio. Des histoires captivantes et des réalisations audacieuses.',
    keywords: [
      'films fiction',
      'cinéma fiction',
      'réalisation',
      'Ganache Studio',
    ],
  },

  '/film-documentaire': {
    title: 'Films Documentaires - Ganache Studio',
    description:
      'Explorez nos documentaires qui racontent des histoires vraies avec authenticité et sensibilité. Une production documentaire engagée.',
    keywords: [
      'documentaires',
      'films documentaires',
      'réalité',
      'Ganache Studio',
    ],
  },

  '/film-musique': {
    title: 'Clips Musicaux - Ganache Studio',
    description:
      'Découvrez nos clips musicaux créatifs et innovants. Une approche artistique unique pour accompagner la musique.',
    keywords: [
      'clips musicaux',
      'vidéos musique',
      'artistes',
      'Ganache Studio',
    ],
  },

  '/film-pub': {
    title: 'Films Publicitaires - Ganache Studio',
    description:
      'Nos films publicitaires allient créativité et efficacité pour des campagnes marquantes et mémorables.',
    keywords: [
      'publicité',
      'films publicitaires',
      'campagnes',
      'Ganache Studio',
    ],
  },

  '/contact': {
    title: 'Contact - Ganache Studio',
    description:
      'Contactez Ganache Studio pour vos projets audiovisuels. Notre équipe est à votre disposition pour discuter de vos besoins.',
    keywords: [
      'contact',
      'Ganache Studio',
      'production audiovisuelle',
      'devis',
    ],
  },

  '/location': {
    title: 'Location - Ganache Studio',
    description:
      'Découvrez nos espaces de location pour vos tournages et événements. Des lieux uniques au cœur de Paris.',
    keywords: [
      'location',
      'espaces tournage',
      'événements',
      'Paris',
      'Ganache Studio',
    ],
  },

  '/legal': {
    title: 'Mentions Légales - Ganache Studio',
    description:
      "Mentions légales et politique de confidentialité de Ganache Studio. Informations sur l'utilisation de nos services.",
    keywords: [
      'mentions légales',
      'politique confidentialité',
      'Ganache Studio',
    ],
  },

  '/ganache-festival': {
    title: 'Ganache Festival 2025 - Festival de cinéma émergent',
    description:
      'Le Ganache Festival est un festival de cinéma émergent créé par Ganache Studio. Découvrez la programmation 2025.',
    keywords: [
      'Ganache Festival',
      'festival cinéma',
      'cinéma émergent',
      'Paris',
      '2025',
    ],
  },

  '/ganache-festival-2024': {
    title: 'Ganache Festival 2024 - Festival de cinéma émergent',
    description:
      'Retour sur la deuxième édition du Ganache Festival en 2024. Un festival de cinéma émergent au Grand Action.',
    keywords: [
      'Ganache Festival',
      'festival cinéma',
      'cinéma émergent',
      'Paris',
      '2024',
    ],
  },

  '/ganache-festival-2023': {
    title: 'Ganache Festival 2023 - Festival de cinéma émergent',
    description:
      "La première édition du Ganache Festival en 2023. Le début d'une aventure cinématographique passionnante.",
    keywords: [
      'Ganache Festival',
      'festival cinéma',
      'cinéma émergent',
      'Paris',
      '2023',
    ],
  },
};

export const generateMetadata = (path: Page): Metadata => {
  const config = metadataConfig[path];

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(', '),
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Ganache Studio',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
    },
  };
};
