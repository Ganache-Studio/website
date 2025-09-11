import { Section } from '@festival/components/section';
import { TeamSection } from '@festival/components/team-section';
import { Metadata } from 'next';
import Link from 'next/link';

import { ClickableModalImage } from '@/components/clickable-modal-image';
import { festival2026Data } from '@/data/(festival)/2026';
import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { FooterSection } from '../_components/footer-section';
import { FestivalProvider } from '../_context/festival.context';
import { DesktopLayout } from '../_layout/desktop-layout';
import { MobileLayout } from '../_layout/mobile-layout';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/ganache-festival']);

const PresentationSection = () => {
  return (
    <Section id="presentation">
      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <ClickableModalImage src={festival2026Data.affiche} alt="Affiche Festival 2026" className="w-full" />
        </div>
        <div className="flex-2/3 space-y-4">
          <p className="text-justify">
            Le Ganache Festival est un festival de cinéma émergent créé en 2023 par la société de production{' '}
            <Link href="/" className="underline">
              Ganache Studio
            </Link>
            . La troisième édition s&apos;est tenue au cinéma Le Grand Action, à Paris, les vendredi 25 et samedi 26
            avril 2025.
          </p>
          <div className="space-y-2">
            <p className="text-justify">Cette année encore, nous avons projeté des films :</p>
            <ul className="ml-2 space-y-1">
              <li>- autoproduits ou qui sont le fruit d&apos;une première production,</li>
              <li>- réalisés par des personnes francophones de moins de 35 ans.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-justify">Nous avons eu à cœur de :</p>
            <ul className="ml-2 space-y-1">
              <li>- donner à voir une sélection paritaire de films émergents et personnels,</li>
              <li>
                - permettre à des réalisateur·trice·s, technicien·ne·s, auteur·trice·s, comédien·ne·s de tisser des
                liens,
              </li>
              <li>- réunir un public varié et organiser une grande fête !</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default function GanacheFestivalPage() {
  return (
    <FestivalProvider>
      <div className="font-chalet">
        <div className="hidden lg:block">
          <DesktopLayout edition={4} navigationItems={festival2026Data.navigationItems} />
        </div>
        <div className="lg:hidden">
          <MobileLayout edition={4} navigationItems={festival2026Data.navigationItems} />
        </div>
        <main className="mx-6 mt-16 space-y-24 md:mx-8 md:mt-20 md:space-y-32 lg:mx-56 lg:mt-[7vw] lg:space-y-48">
          <PresentationSection />
          <TeamSection members={festival2026Data.team} />
        </main>
        <FooterSection year="2026" />
      </div>
    </FestivalProvider>
  );
}
