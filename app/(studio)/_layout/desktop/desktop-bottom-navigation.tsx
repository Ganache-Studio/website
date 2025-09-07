'use client';

import { useStudioContext } from '@studio/context/studio.context';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { globalLayoutFooterLinks } from '@/data/(studio)/global-layout/footer-links';
import { globalLayoutSocialNetworkLinks } from '@/data/(studio)/global-layout/social-network-links';

const SocialNetworks = () => {
  const { isMainContentFullScreen: isWhite } = useStudioContext();

  return (
    <ul className="flex items-center justify-center space-x-6">
      {globalLayoutSocialNetworkLinks.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${isWhite ? 'text-white' : 'text-black'} opacity-30 hover:opacity-100`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const { isMainContentFullScreen } = useStudioContext();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-center justify-center space-y-1">
      {globalLayoutFooterLinks.map((item, index) => (
        <li
          key={index}
          className={`${isMainContentFullScreen ? 'text-white' : 'text-black'} ${
            pathname === item.path ? 'font-bold opacity-100' : 'opacity-30 hover:opacity-100'
          }`}
        >
          <Link href={item.path} target={item.target}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const DesktopBottomNavigation = () => {
  return (
    <nav className="flex flex-col items-center space-y-2">
      <SocialNetworks />
      <Navigation />
    </nav>
  );
};
