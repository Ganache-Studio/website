import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { festival2025Data } from '../../_data/(festival)/2025';
import { generateMetadata } from '../../_data/metadata';
import { pages } from '../../_data/pages';
import { Parrain } from '../_components/parrain';
import { Partners } from '../_components/partners';
import { PhotoGallery } from '../_components/photo-gallery';
import { ProgrammeStep } from '../_components/program-step';
import { Section } from '../_components/section';
import { Selection } from '../_components/selection';
import { Team } from '../_components/team';
import { Title } from '../_components/title';

export const metadata: Metadata = generateMetadata(pages.GanacheFestival);

const Festival = () => {
  return (
    <Section id="presentation">
      <div className="space-y-4 text-sm lg:space-y-6 lg:text-base">
        <PhotoGallery photos={festival2025Data.photos} columns={3} />
        <p className="text-justify">{festival2025Data.description}</p>
        <p className="text-end">
          Ganache Studio et l&apos;équipe du Ganache Festival
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image
            className="w-full"
            src={festival2025Data.presentation.posterUrl}
            alt="Affiche Festival 2025"
            width={0}
            height={0}
          />
        </div>
        <div className="flex-2/3 space-y-4">
          <p className="text-justify">
            Le Ganache Festival est un festival de cinéma émergent créé en 2023
            par la société de production{' '}
            <Link href="/" className="underline">
              Ganache Studio
            </Link>
            . La troisième édition s&apos;est tenue au cinéma Le Grand Action, à
            Paris, les vendredi 25 et samedi 26 avril 2025.
          </p>
          <div className="space-y-2">
            <p className="text-justify">
              Cette année encore, nous avons projeté des films :
            </p>
            <ul className="ml-2 space-y-1">
              <li>
                - autoproduits ou qui sont le fruit d&apos;une première
                production,
              </li>
              <li>
                - réalisés par des personnes francophones de moins de 35 ans.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-justify">Nous avons eu à cœur de :</p>
            <ul className="ml-2 space-y-1">
              <li>
                - donner à voir une sélection paritaire de films émergents et
                personnels,
              </li>
              <li>
                - permettre à des réalisateur·trice·s, technicien·ne·s,
                auteur·trice·s, comédien·ne·s de tisser des liens,
              </li>
              <li>- réunir un public varié et organiser une grande fête !</li>
            </ul>
          </div>
        </div>
      </div>
      <iframe
        className="aspect-video w-full"
        src={festival2025Data.presentation.teaserUrl}
        allowFullScreen
      />
    </Section>
  );
};

const Programme = () => {
  return (
    <Section id="programme">
      <Title>LE PROGRAMME</Title>
      <div className="space-y-4 md:space-y-8">
        {/* Mobile View */}
        <div className="block space-y-4 md:hidden">
          <p className="text-xl md:text-2xl">
            {festival2025Data.programme[0].text}
          </p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[0].steps[0].text}
            films={festival2025Data.programme[0].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[0].steps[1].text}
            films={festival2025Data.programme[0].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[0].steps[2].text}
            films={festival2025Data.programme[0].steps[2].films}
          />
          <div className="border-b border-gray-300" />
          <h4 className="text-xl md:text-2xl">
            {festival2025Data.programme[1].text}
          </h4>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[1].steps[0].text}
            films={festival2025Data.programme[1].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2025Data.programme[1].steps[1].text}
            films={festival2025Data.programme[1].steps[1].films}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden space-y-8 md:block">
          <div className="flex space-x-4">
            {festival2025Data.programme.map(({ day, text }) => (
              <div key={day} className="flex-1/2">
                <h4 className="text-2xl">{text}</h4>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[0].text}
                films={festival2025Data.programme[0].steps[0].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[1].text}
                films={festival2025Data.programme[0].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[1].text}
                films={festival2025Data.programme[0].steps[1].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[1].steps[1].text}
                films={festival2025Data.programme[1].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[0].steps[2].text}
                films={festival2025Data.programme[0].steps[2].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2025Data.programme[1].steps[2].text}
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
    <div className="space-y-24 md:space-y-32 lg:space-y-48">
      <Festival />
      <Programme />
      <Selection films={festival2025Data.films} columns={4} />
      <Parrain {...festival2025Data.parrain} />
      <Team members={festival2025Data.team} />
      <Partners partners={festival2025Data.partners} />
    </div>
  );
}
