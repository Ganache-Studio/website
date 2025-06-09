'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import GanacheLogo from '../../_components/ganache-logo';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  const getYear = () => {
    if (pathname.includes('2023')) return '2023';
    if (pathname.includes('2024')) return '2024';
    return '2025';
  };

  return (
    <footer className="relative flex h-dvh flex-col items-center justify-end text-sm">
      <Link
        href="/"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <GanacheLogo
          isWhite={false}
          className="h-32 w-auto object-contain md:h-48 lg:h-64"
        />
      </Link>
      <p className="mb-4">&copy; Ganache Festival {getYear()}</p>
    </footer>
  );
};
