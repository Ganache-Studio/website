import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { festival2024Data } from '@/data/(festival)/2024';
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

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/ganache-festival-2024']);

const PresentationSection = () => {
  return (
    <Section id="presentation">
      <div className="space-y-4 text-sm lg:space-y-6 lg:text-base">
        <PhotoGallery photos={festival2024Data.photos} columns={4} />
        <p className="text-justify">
          La seconde édition du Ganache Festival s&apos;est tenue les 19 et 20 avril 2024 à Paris. Une fois de plus, la
          grande salle du Grand Action était comble tout le week-end. La sélection, paritaire et particulièrement
          éclectique, a rencontré un public divers et festif qui a volontiers prolongé ces deux soirées autour d&apos;un
          – ou plusieurs – verres. Ganache Studio remercie du fond du cœur les spectateur·ice·s, les artistes venu·e·s
          présenter leurs films, les partenaires pour leur généreux soutien, et notre parrain Alex Lutz pour son
          implication sincère. À l&apos;année prochaine !
        </p>
        <p className="text-end">Ganache Studio et l&apos;équipe du Ganache Festival</p>
      </div>

      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image className="w-full" src={festival2024Data.affiche} alt="Affiche Festival 2024" width={0} height={0} />
        </div>
        <div className="flex-2/3 space-y-4">
          <p className="text-justify">
            Le Ganache Festival est un festival de cinéma émergent créé en 2023 par la société de production{' '}
            <Link href="/" className="underline">
              Ganache Studio
            </Link>
            . La seconde édition s&apos;est tenue au cinéma Le Grand Action, à Paris, les vendredi 19 et samedi 20 avril
            2024.
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
      <iframe className="aspect-video w-full" src={festival2024Data.teaser} allowFullScreen />
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
          <p className="text-xl md:text-2xl">{festival2024Data.programme[0].title}</p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[0].steps[0].title}
            films={festival2024Data.programme[0].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[0].steps[1].title}
            films={festival2024Data.programme[0].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[0].steps[2].title}
            films={festival2024Data.programme[0].steps[2].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[0].steps[3].title}
            films={festival2024Data.programme[0].steps[3].films}
          />
          <div className="border-b border-gray-300" />
          <h4 className="text-xl md:text-2xl">{festival2024Data.programme[1].title}</h4>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[1].steps[0].title}
            films={festival2024Data.programme[1].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[1].steps[1].title}
            films={festival2024Data.programme[1].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2024Data.programme[1].steps[2].title}
            films={festival2024Data.programme[1].steps[2].films}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden space-y-8 md:block">
          <div className="flex space-x-4">
            {festival2024Data.programme.map(({ day, title }) => (
              <div key={day} className="flex-1/2">
                <h4 className="text-2xl">{title}</h4>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[0].steps[0].title}
                films={festival2024Data.programme[0].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[0].steps[1].title}
                films={festival2024Data.programme[0].steps[1].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[1].steps[0].title}
                films={festival2024Data.programme[1].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[0].steps[2].title}
                films={festival2024Data.programme[0].steps[2].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[1].steps[1].title}
                films={festival2024Data.programme[1].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[0].steps[3].title}
                films={festival2024Data.programme[0].steps[3].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2024Data.programme[1].steps[2].title}
                films={festival2024Data.programme[1].steps[2].films}
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
          <DesktopLayout edition={2} navigationItems={festival2024Data.navigationItems} />
        </div>
        <div className="lg:hidden">
          <MobileLayout edition={2} navigationItems={festival2024Data.navigationItems} />
        </div>
        <main className="mx-6 mt-16 space-y-24 md:mx-8 md:mt-20 md:space-y-32 lg:mx-56 lg:mt-[7vw] lg:space-y-48">
          <PresentationSection />
          <ProgrammeSection />
          <SelectionSection selection={festival2024Data.selection} columns={4} />
          <ParrainSection parrain={festival2024Data.parrain} />
          <TeamSection members={festival2024Data.team} />
          <PartnersSection partners={festival2024Data.partners} />
        </main>
        <FooterSection year="2024" />
      </div>
    </FestivalProvider>
  );
}
