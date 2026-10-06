import { Metadata } from 'next';

import { ClickableModalImage } from '@/components/clickable-modal-image';
import { festival2027Data } from '@/data/(festival)/2027';
import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { FooterSection } from '../_components/footer-section';
import { Section } from '../_components/section';
import { TeamSection } from '../_components/team-section';
import { FestivalProvider } from '../_context/festival.context';
import { DesktopLayout } from '../_layout/desktop-layout';
import { MobileLayout } from '../_layout/mobile-layout';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/ganache-festival']);

const PresentationSection = () => {
  return (
    <Section id="presentation">
      <div className="mt-40 flex flex-col items-center space-y-4 text-sm lg:space-y-6 xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <ClickableModalImage src={festival2027Data.affiche} alt="Affiche Festival 2027" className="w-full" />
          <p className="mt-2 text-right text-sm opacity-70">Crédit affiche : Jonathan Bertin</p>
        </div>
        <div className="flex-2/3 space-y-3">
          <p className="text-justify">
            Les candidatures sont ouvertes pour la <b>cinquième</b> édition du Ganache Festival, qui se tiendra au
            cinéma <b>Le Grand Action</b>, à Paris, les <b>23 et 24 avril 2027</b>. Cette année encore, nous avons à
            cœur de :
          </p>
          <ul className="ml-2 space-y-1">
            <li>- donner à voir des courts métrages émergents et personnels,</li>
            <li>- construire une programmation éclectique, exigeante et paritaire,</li>
            <li>
              - permettre à des réalisateur·trice·s, technicien·ne·s, auteur·trice·s, comédien·ne·s de tisser des liens,
            </li>
            <li>- réunir un public varié et organiser une fête !</li>
          </ul>
          <p className="text-justify">
            Nous cherchons à découvrir, sélectionner et promouvoir des films (fiction, documentaire et animation) portés
            par de jeunes réalisateur·rice·s, et qui répondent aux critères suivants :
          </p>
          <ul className="ml-2 space-y-1">
            <li>- autoproduits ou qui sont le fruit d’une première production,</li>
            <li>- réalisés par des personnes âgées de moins de 35 ans,</li>
            <li>- d’une durée de 30 minutes maximum,</li>
            <li>- en langue française.</li>
          </ul>
          <p className="text-justify">
            À l’instar des éditions précédentes, le festival se déroulera avec l’accompagnement bienveillant{' '}
            <b> d’une marraine</b> connue de la profession, et aucun prix n’y sera décerné.
          </p>
          <p className="text-justify">
            Les candidatures s’effectuent via la plateforme{' '}
            <a
              href="https://filmfreeway.com/ganachefestival"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              FilmFreeway.
            </a>{' '}
            Pour toute question relative à une candidature, vous pouvez prendre contact avec{' '}
            <a
              href="mailto:festival@ganache.studio"
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              festival@ganache.studio
            </a>
          </p>
          <p className="text-justify">Nous nous réjouissons de découvrir vos films.</p>
          <p className="text-justify">À bientôt !</p>
          <p className="text-justify">Ganache Studio et l’équipe du Ganache Festival</p>
        </div>
      </div>
      {/* <div className="mt-4 flex justify-center md:mt-8">
        <a
          href="https://www.billetweb.fr/ganache-festival3"
          target="_blank"
          rel="noreferrer"
          className="transform rounded-[10px] bg-[#cf3f2c] px-10 py-4 text-base font-bold tracking-wider text-white uppercase transition duration-150 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer hover:opacity-90"
        >
          BILLETTERIE
        </a>
      </div> */}
    </Section>
  );
};

export default function GanacheFestivalPage() {
  return (
    <FestivalProvider>
      <div className="font-chalet">
        <div className="hidden lg:block">
          <DesktopLayout edition={5} navigationItems={festival2027Data.navigationItems} />
        </div>
        <div className="lg:hidden">
          <MobileLayout edition={5} navigationItems={festival2027Data.navigationItems} />
        </div>
        <main className="mx-6 mt-16 space-y-24 md:mx-8 md:mt-20 md:space-y-32 lg:mx-56 lg:mt-[7vw] lg:space-y-48">
          <PresentationSection />
          <TeamSection members={festival2027Data.team} showNames={true} />
        </main>
        <FooterSection year="2027" />
      </div>
    </FestivalProvider>
  );
}
