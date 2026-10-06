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
                      item.italic && 'italic',
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
                  <Link
                    href={item.href}
                    target={item.target}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className={clsx('hover:underline', item.italic && 'italic')}
                    onClick={onClick}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            }
            case 'group': {
              return (
                <li key={item.title}>
                  <details>
                    <summary className="cursor-pointer list-none hover:underline">{item.title}</summary>
                    <ul className="space-y-2 pt-2">
                      {item.items.map(subItem => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            target={subItem.target}
                            rel={subItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                            className={clsx('hover:underline', subItem.italic && 'italic')}
                            onClick={onClick}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
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
