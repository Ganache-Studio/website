'use client';

import { useStudioContext } from '@studio/context/studio.context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { globalLayoutNavigationLinks } from '@/data/(studio)/global-layout/navigation-links';

export const MobileNavigationMenu = () => {
  const { handleDrawerClose, isMainContentFullScreen } = useStudioContext();
  const pathname = usePathname();

  return (
    <nav className="relative w-full flex-1">
      <ul className="absolute top-5/12 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col justify-center space-y-4 text-2xl md:space-y-6 md:text-4xl">
        <li className="flex justify-center">
          <Link
            href="/"
            className={`font-bold ${isMainContentFullScreen ? 'text-white' : 'text-black'}`}
            onClick={handleDrawerClose}
          >
            FILMS
          </Link>
        </li>
        {globalLayoutNavigationLinks.map(item => (
          <li className="flex justify-center" key={item.path}>
            <Link
              onClick={handleDrawerClose}
              href={item.path}
              className={`leading-none ${isMainContentFullScreen ? 'text-white' : 'text-black'} ${
                pathname === item.path ? 'font-bold opacity-100' : 'opacity-30 hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
