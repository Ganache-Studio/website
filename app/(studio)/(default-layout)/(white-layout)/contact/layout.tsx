import type { Metadata } from 'next';

import { generateMetadata } from '@/data/metadata';
import { pages } from '@/data/pages';

export const metadata: Metadata = generateMetadata(pages.Contact);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
