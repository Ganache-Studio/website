'use client';

import { useStudioContext } from '@studio/context/studio.context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { footerLinks } from '@/data/(studio)/footer-links';
import { socialNetworkLinks } from '@/data/(studio)/social-network-links';

const SocialNetworks = () => {
  const { isMainContentFullScreen } = useStudioContext();

  return (
    <>
      {socialNetworkLinks.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={isMainContentFullScreen ? 'text-white' : 'text-black'}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </>
  );
};

const Navigation = () => {
  const { isMainContentFullScreen } = useStudioContext();
  const pathname = usePathname();

  return (
    <>
      {footerLinks.map((item, index) => (
        <li
          key={index}
          className={`${isMainContentFullScreen ? 'text-white' : 'text-black'} ${
            pathname === item.path ? 'font-bold opacity-100' : 'opacity-30 hover:opacity-100'
          }`}
        >
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </>
  );
};

export const MobileBottomNavigation = () => {
  return (
    <nav className="w-full max-w-xl">
      <ul className="flex h-16 items-center justify-between px-6 py-1 text-sm md:h-20 md:text-xl">
        <SocialNetworks />
        <Navigation />
      </ul>
    </nav>
  );
};
