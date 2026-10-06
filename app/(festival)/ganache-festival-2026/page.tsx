import { Metadata } from 'next';
import Link from 'next/link';

import { ClickableModalImage } from '@/components/clickable-modal-image';
import { festival2026Data } from '@/data/(festival)/2026';
import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { FooterSection } from '../_components/footer-section';
import { ParrainSection } from '../_components/parrain-section';
import { PartnersSection } from '../_components/partners-section';
import { PhotoGallery } from '../_components/photo-gallery';
import { ProgrammeStep } from '../_components/program-step';
import { Section } from '../_components/section';
import { SelectionSection } from '../_components/selection-section';
import { TeamSection } from '../_components/team-section';
import { Title } from '../_components/title';
import { FestivalProvider } from '../_context/festival.context';
import { DesktopLayout } from '../_layout/desktop-layout';
import { MobileLayout } from '../_layout/mobile-layout';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/ganache-festival']);

const PresentationSection = () => {
  return (
    <Section id="presentation">
      <div className="space-y-1 text-sm lg:space-y-4 lg:text-base">
        <PhotoGallery photos={festival2026Data.photos} columns={3} />
        <p className="text-right text-xs opacity-70">Crédit photo : Julia Hervouin</p>
        <p className="text-justify">
          Vous avez été nombreux·ses à vous déplacer au Grand Action pour cette quatrième édition du Ganache Festival.
          La salle était comble pour les quatre projections, et nous tenions à vous remercier de votre enthousiasme et
          votre fidélité. Une fois de plus, vous nous aidez à démontrer que le cinéma est avant tout une fête. Nous
          remercions également les artistes venu·e·s présenter leurs films, les partenaires pour leur généreux soutien,
          et notre parrain Dali Benssalah pour son accompagnement. Merci pour les étoiles dans les yeux, et à
          l&apos;année prochaine !
        </p>
        <p className="text-end">Ganache Studio et l&apos;équipe du Ganache Festival</p>
      </div>
      <div className="mt-30 flex flex-col items-center space-y-4 text-xs lg:space-y-6 lg:text-sm xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <ClickableModalImage src={festival2026Data.affiche} alt="Affiche Festival 2026" className="w-full" />
        </div>
        <div className="flex-2/3 space-y-4">
          <p className="text-justify">
            Le Ganache Festival est un festival de cinéma émergent créé en 2023 par la société de production{' '}
            <Link href="/" className="underline">
              Ganache Studio
            </Link>
            . La quatrième édition s&apos;est tenue au cinéma Le Grand Action, à Paris, les vendredi 24 et samedi 25
            avril 2026.
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
              <li>
                - donner à voir une sélection paritaire de films émergents et personnels (fiction, documentaire et
                animation),
              </li>
              <li>
                - permettre à des réalisateur·trice·s, technicien·ne·s, auteur·trice·s, comédien·ne·s de tisser des
                liens,
              </li>
              <li>- réunir un public varié et organiser une grande fête !</li>
            </ul>
          </div>
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
      <iframe className="aspect-video w-full" src={festival2026Data.teaser} allowFullScreen />
    </Section>
  );
};

const ProgrammeSection = () => {
  return (
    <Section id="programme">
      <Title>LE PROGRAMME</Title>
      <div className="space-y-4 md:space-y-8">
        {/* Mobile View */}
        <div className="block space-y-4 md:hidden">
          <p className="text-xl md:text-2xl">{festival2026Data.programme[0].title}</p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2026Data.programme[0].steps[0].title}
            films={festival2026Data.programme[0].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2026Data.programme[0].steps[1].title}
            films={festival2026Data.programme[0].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2026Data.programme[0].steps[2].title}
            films={festival2026Data.programme[0].steps[2].films}
          />
          <div className="border-b border-gray-300" />
          <h4 className="text-xl md:text-2xl">{festival2026Data.programme[1].title}</h4>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2026Data.programme[1].steps[0].title}
            films={festival2026Data.programme[1].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2026Data.programme[1].steps[1].title}
            films={festival2026Data.programme[1].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2026Data.programme[1].steps[2].title}
            films={festival2026Data.programme[1].steps[2].films}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden space-y-8 md:block">
          <div className="flex space-x-4">
            {festival2026Data.programme.map(({ day, title }) => (
              <div key={day} className="flex-1/2">
                <h4 className="text-2xl">{title}</h4>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2026Data.programme[0].steps[0].title}
                films={festival2026Data.programme[0].steps[0].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2026Data.programme[1].steps[0].title}
                films={festival2026Data.programme[1].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2026Data.programme[0].steps[1].title}
                films={festival2026Data.programme[0].steps[1].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2026Data.programme[1].steps[1].title}
                films={festival2026Data.programme[1].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2026Data.programme[0].steps[2].title}
                films={festival2026Data.programme[0].steps[2].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2026Data.programme[1].steps[2].title}
                films={festival2026Data.programme[1].steps[2].films}
              />
            </div>
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
          <ProgrammeSection />
          <SelectionSection selection={festival2026Data.selection} columns={4} />
          <ParrainSection
            parrain={festival2026Data.parrain}
            imageSrc="https://ganache.studio/media/festival/2026/photos/Dali.jpeg"
          />
          <TeamSection members={festival2026Data.team} showNames={true} />
          <PartnersSection partners={festival2026Data.partners} />
        </main>
        <FooterSection year="2026" />
      </div>
    </FestivalProvider>
  );
}
