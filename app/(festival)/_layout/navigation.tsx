import { clsx } from 'clsx';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

import { NavigationItem } from '@/data/(festival)/types';
import { scrollToSection } from '@/helpers/scroll-to-section';
import { useActiveSection } from '@/hooks/use-active-session';

export const Navigation = ({
  onClick,
  navigationItems,
}: {
  onClick?: () => void;
  navigationItems: NavigationItem[];
}) => {
  const activeSection = useActiveSection(navigationItems.filter(item => item.to === 'section').map(item => item.id));

  return (
    <nav className="fixed right-0 z-10 pt-4 pr-4 text-right lg:w-48">
      <ul className="space-y-6 text-2xl lg:space-y-2 lg:text-lg">
        {navigationItems.map(item => {
          switch (item.to) {
            case 'section': {
              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={() => {
                      scrollToSection(item.id);
                      onClick?.();
                    }}
                    className={clsx(
                      'hover:underline hover:underline-offset-2',
                      activeSection === item.id && 'underline',
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }
            case 'page': {
              return (
                <li key={item.href}>
                  <Link href={item.href} className="italic hover:underline" onClick={onClick}>
                    {item.title}
                  </Link>
                </li>
              );
            }
          }
        })}
        <li className="flex justify-end">
          <a href="https://www.instagram.com/ganache.festival" target="_blank" rel="noreferrer">
            <FaInstagram className="size-7 lg:size-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
