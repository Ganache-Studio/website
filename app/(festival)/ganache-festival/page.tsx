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
      <div className="mt-30 flex flex-col items-center space-y-4 text-xs lg:space-y-6 lg:text-sm xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <ClickableModalImage src={festival2026Data.affiche} alt="Affiche Festival 2026" className="w-full" />
        </div>
        <div className="flex-2/3 space-y-4">
          <div className="space-y-2">
            <p className="text-justify">
              Les candidatures sont ouvertes pour la quatrième édition du Ganache Festival, qui se tiendra au cinéma Le
              Grand Action, à Paris, les 24 et 25 avril 2026. Cette année encore, nous avons à cœur de :
            </p>
            <ul className="ml-2 space-y-1">
              <li>— donner à voir des courts métrages émergents et personnels,</li>
              <li>— construire une programmation éclectique, exigeante et paritaire,</li>
              <li>
                — permettre à des réalisateur·trice·s, technicien·ne·s, auteur·trice·s, comédien·ne·s de tisser des
                liens,
              </li>
              <li>— réunir un public varié et organiser une fête !</li>
            </ul>
            <p className="text-justify">
              Nous cherchons à découvrir, sélectionner et promouvoir des films (fiction, documentaire et animation)
              portés par de jeunes réalisateur·rice·s, et qui répondent aux critères suivants :
            </p>
            <ul className="ml-2 space-y-1">
              <li>— autoproduits ou qui sont le fruit d’une première production,</li>
              <li>— réalisés par des personnes âgées de moins de 35 ans, </li>
              <li>— d’une durée de 30 minutes maximum,</li>
              <li>— en langue française.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-justify">
              À l&apos;instar des éditions précédentes, le festival se déroulera avec l&apos;accompagnement bienveillant
              d’un parrain connu de la profession, et aucun prix n’y sera décerné.
            </p>
            <p className="text-justify">
              Les candidatures s’effectuent via la plateforme{' '}
              <a
                href="https://filmfreeway.com/ganachefestival"
                target="_blank"
                className="text-black underline hover:text-blue-800"
                rel="noreferrer"
              >
                {' '}
                FilmFreeway
              </a>
              . Pour toute question relative à une candidature, vous pouvez prendre contact avec{' '}
              <a
                href="mailto:festival@ganache.studio"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-orange-800"
              >
                festival@ganache.studio
              </a>
            </p>
            <p className="text-justify">Nous nous réjouissons de découvrir vos films.</p>
            <p className="text-justify">À bientôt !</p>
            <p className="text-justify">Ganache Studio et l’équipe du Ganache Festival</p>
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
