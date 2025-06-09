'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigationLinks } from '../../../../_data/(studio)/navigation-links';
import { useStudioContext } from '../../../_context/studio.context';

export const DesktopNavigationMenu = () => {
  const { handleDrawerClose, isMainContentFullScreen } = useStudioContext();
  const pathname = usePathname();

  return (
    <nav className="group relative w-full p-6 text-2xl md:text-4xl lg:text-base">
      <Link
        href="/"
        className={`flex w-full justify-center font-bold ${
          isMainContentFullScreen ? 'text-white' : 'text-black'
        }`}
        onClick={handleDrawerClose}
      >
        FILMS
      </Link>
      <ul className="invisible absolute left-1/2 mt-2 flex -translate-x-1/2 flex-col items-center justify-center space-y-1 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:opacity-100">
        {navigationLinks.map(item => (
          <li key={item.path}>
            <Link
              onClick={handleDrawerClose}
              href={item.path}
              className={`flex transition-all duration-500 ${
                isMainContentFullScreen ? 'text-white' : 'text-black'
              } ${
                pathname === item.path
                  ? 'font-bold opacity-100'
                  : 'opacity-30 hover:opacity-100'
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
