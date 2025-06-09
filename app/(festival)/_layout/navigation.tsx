import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram } from 'react-icons/fa';

import { festival2023Data } from '../../_data/(festival)/2023';
import { festival2024Data } from '../../_data/(festival)/2024';
import { festival2025Data } from '../../_data/(festival)/2025';
import { scrollToSection } from '../../_helpers/scroll-to-section';
import { useActiveSection } from '../../_hooks/use-active-session';

const Button = ({
  id,
  children,
  isActive,
  onClick,
}: {
  id: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}) => {
  return (
    <li>
      <Link
        href={`#${id}`}
        onClick={() => {
          scrollToSection(id);
          onClick?.();
        }}
        className={clsx(
          'hover:underline hover:underline-offset-2',
          isActive && 'underline',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

const FestivalPageLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <li>
      <Link href={href} className="italic hover:underline" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

type NavigationProps = {
  onClick?: () => void;
};

export const Navigation = ({ onClick }: NavigationProps) => {
  const pathname = usePathname();
  const activeSection = useActiveSection([
    'presentation',
    'programme',
    'selection',
    'parrain',
    'marraine',
    'equipe',
    'partenaires',
  ]);

  const getFestivalYear = () => {
    if (pathname.includes('2023')) return '2023';
    if (pathname.includes('2024')) return '2024';
    return '2025';
  };

  const festivalYear = getFestivalYear();

  const getGender = () => {
    if (festivalYear === '2025') return festival2025Data.parrain.gender;
    if (festivalYear === '2024') return festival2024Data.parrain.gender;
    if (festivalYear === '2023') return festival2023Data.parrain.gender;
    return 'male';
  };

  return (
    <nav className="fixed right-0 z-10 pt-4 pr-4 text-right lg:w-48">
      <ul className="space-y-6 text-2xl lg:space-y-2 lg:text-lg">
        <Button
          id="presentation"
          isActive={activeSection === 'presentation'}
          onClick={onClick}
        >
          PRÉSENTATION
        </Button>
        <Button
          id="programme"
          isActive={activeSection === 'programme'}
          onClick={onClick}
        >
          PROGRAMME
        </Button>
        <Button
          id="selection"
          isActive={activeSection === 'selection'}
          onClick={onClick}
        >
          LA SÉLECTION
        </Button>
        <Button
          id="parrain"
          isActive={activeSection === 'parrain'}
          onClick={onClick}
        >
          {getGender() === 'male' ? 'PARRAIN' : 'MARRAINE'}
        </Button>
        <Button
          id="equipe"
          isActive={activeSection === 'equipe'}
          onClick={onClick}
        >
          ÉQUIPE
        </Button>
        <Button
          id="partenaires"
          isActive={activeSection === 'partenaires'}
          onClick={onClick}
        >
          PARTENAIRES
        </Button>
        {festivalYear !== '2023' && (
          <FestivalPageLink
            href="/ganache-festival-2023#presentation"
            onClick={onClick}
          >
            1ère ÉDITION
          </FestivalPageLink>
        )}
        {festivalYear !== '2024' && (
          <FestivalPageLink
            href="/ganache-festival-2024#presentation"
            onClick={onClick}
          >
            2ème ÉDITION
          </FestivalPageLink>
        )}
        {festivalYear !== '2025' && (
          <FestivalPageLink
            href="/ganache-festival#presentation"
            onClick={onClick}
          >
            3ème ÉDITION
          </FestivalPageLink>
        )}
        <li className="flex justify-end">
          <a href="https://www.instagram.com/ganache.festival" target="_blank">
            <FaInstagram className="size-7 lg:size-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
