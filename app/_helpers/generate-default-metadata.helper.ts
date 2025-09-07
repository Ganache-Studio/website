import type { Metadata } from 'next';

import { PageMetadata } from '@/data/default-metadata';

export const generateDefaultMetadata = (pageMetadata: PageMetadata): Metadata => {
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords.join(', '),
    creator: 'Ganache Studio',
    publisher: 'Ganache Studio',
    referrer: 'origin-when-cross-origin',
    alternates: {
      canonical: pageMetadata.canonicalUrl,
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
