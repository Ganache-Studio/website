import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { festival2025Data } from '@/data/(festival)/2025';
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

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/ganache-festival-2025']);

const PresentationSection = () => {
  return (
    <Section id="presentation">
      <div className="space-y-4 text-sm lg:space-y-6 lg:text-base">
        <PhotoGallery photos={festival2025Data.photos} columns={3} />
        <p className="text-justify">
          Vous avez été nombreux·ses à vous déplacer au Grand Action pour cette troisième édition du Ganache Festival.
          La salle était comble pour les quatre projections, et nous tenions à vous remercier de votre enthousiasme et
          votre fidélité. Une fois de plus, vous nous aidez à démontrer que le cinéma est avant tout une fête. Nous
          remercions également les artistes venu·e·s présenter leurs films, les partenaires pour leur généreux soutien,
          et notre marraine Céline Sallette pour son accompagnement. Merci pour les étoiles dans les yeux, et à
          l&apos;année prochaine !
        </p>
        <p className="text-end">Ganache Studio et l&apos;équipe du Ganache Festival</p>
      </div>

      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image className="w-full" src={festival2025Data.affiche} alt="Affiche Festival 2025" width={0} height={0} />
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
      <iframe className="aspect-video w-full" src={festival2025Data.teaser} allowFullScreen />
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
          <p className="text-xl md:text-2xl">{festival2025Data.programme[0].title}</p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[0].steps[0].title}
            films={festival2025Data.programme[0].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[0].steps[1].title}
            films={festival2025Data.programme[0].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[0].steps[2].title}
            films={festival2025Data.programme[0].steps[2].films}
          />
          <div className="border-b border-gray-300" />
          <h4 className="text-xl md:text-2xl">{festival2025Data.programme[1].title}</h4>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[1].steps[0].title}
            films={festival2025Data.programme[1].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[1].steps[1].title}
            films={festival2025Data.programme[1].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[1].steps[2].title}
            films={festival2025Data.programme[1].steps[2].films}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden space-y-8 md:block">
          <div className="flex space-x-4">
            {festival2025Data.programme.map(({ day, title }) => (
              <div key={day} className="flex-1/2">
                <h4 className="text-2xl">{title}</h4>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[0].title}
                films={festival2025Data.programme[0].steps[0].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[1].steps[0].title}
                films={festival2025Data.programme[1].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[1].title}
                films={festival2025Data.programme[0].steps[1].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[1].steps[1].title}
                films={festival2025Data.programme[1].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[2].title}
                films={festival2025Data.programme[0].steps[2].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[1].steps[2].title}
                films={festival2025Data.programme[1].steps[2].films}
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
          <DesktopLayout edition={3} navigationItems={festival2025Data.navigationItems} />
        </div>
        <div className="lg:hidden">
          <MobileLayout edition={3} navigationItems={festival2025Data.navigationItems} />
        </div>
        <main className="mx-6 mt-16 space-y-24 md:mx-8 md:mt-20 md:space-y-32 lg:mx-56 lg:mt-[7vw] lg:space-y-48">
          <PresentationSection />
          <ProgrammeSection />
          <SelectionSection selection={festival2025Data.selection} columns={4} />
          <ParrainSection parrain={festival2025Data.parrain} />
          <TeamSection members={festival2025Data.team} />
          <PartnersSection partners={festival2025Data.partners} />
        </main>
        <FooterSection year="2025" />
      </div>
    </FestivalProvider>
  );
}
