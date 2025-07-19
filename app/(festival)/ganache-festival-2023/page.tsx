import { Parrain } from '@festival/components/parrain';
import { Partners } from '@festival/components/partners';
import { PhotoGallery } from '@festival/components/photo-gallery';
import { ProgrammeStep } from '@festival/components/program-step';
import { Section } from '@festival/components/section';
import { Selection } from '@festival/components/selection';
import { Team } from '@festival/components/team';
import { Title } from '@festival/components/title';
import type { Metadata } from 'next';
import Image from 'next/image';

import { festival2023Data } from '@/data/(festival)/2023';
import { generateMetadata } from '@/data/metadata';
import { pages } from '@/data/pages';

export const metadata: Metadata = generateMetadata(pages.GanacheFestival2023);

const Festival = () => {
  return (
    <Section id="presentation">
      <div className="space-y-4 text-sm lg:space-y-6 lg:text-base">
        <PhotoGallery photos={festival2023Data.photos} columns={3} />
        <p className="text-justify">{festival2023Data.description}</p>
        <p className="text-end">Ganache Studio et l&apos;équipe du Ganache Festival</p>
      </div>

      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image
            className="w-full"
            src={festival2023Data.presentation.posterUrl}
            alt="Affiche Festival 2023"
            width={0}
            height={0}
          />
        </div>
        <div className="flex-2/3 space-y-4">
          <div className="space-y-2">
            <p className="text-justify">
              Pour la première édition de notre festival, nous souhaitons mettre en lumière des courts métrages portés
              par de jeunes réalisateur.trice.s francophones.
            </p>
            <p className="text-justify">Les 21 et 22 avril, au Grand Action, nous aurons à cœur de :</p>
            <ul className="ml-2 space-y-1">
              <li>- donner à voir des films émergents, personnels, et pas encore institutionnalisés,</li>
              <li>
                - permettre à des réalisateur.trice.s, technicien.ne.s, auteur.trice.s, comédien.ne.s de tisser des
                liens,
              </li>
              <li>- réunir un public varié et organiser une grande fête !</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-justify">Nous projetterons des films :</p>
            <ul className="ml-2 space-y-1">
              <li>- autoproduits ou qui sont le fruit d&apos;une première production,</li>
              <li>- réalisés par des personnes de moins de 35 ans,</li>
              <li>- francophones.</li>
            </ul>
          </div>
        </div>
      </div>
      <iframe className="aspect-video w-full" src={festival2023Data.presentation.teaserUrl} allowFullScreen />
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
          <p className="text-xl md:text-2xl">{festival2023Data.programme[0].text}</p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[0].text}
            films={festival2023Data.programme[0].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[1].text}
            films={festival2023Data.programme[0].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[2].text}
            films={festival2023Data.programme[0].steps[2].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[3].text}
            films={festival2023Data.programme[0].steps[3].films}
          />
          <div className="border-b border-gray-300" />
          <h4 className="text-xl md:text-2xl">{festival2023Data.programme[1].text}</h4>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[1].steps[0].text}
            films={festival2023Data.programme[1].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[1].steps[1].text}
            films={festival2023Data.programme[1].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[1].steps[2].text}
            films={festival2023Data.programme[1].steps[2].films}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden space-y-8 md:block">
          <div className="flex space-x-4">
            {festival2023Data.programme.map(({ day, text }) => (
              <div key={day} className="flex-1/2">
                <h4 className="text-2xl">{text}</h4>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[0].text}
                films={festival2023Data.programme[0].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[1].text}
                films={festival2023Data.programme[0].steps[1].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[1].steps[0].text}
                films={festival2023Data.programme[1].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[2].text}
                films={festival2023Data.programme[0].steps[2].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[1].steps[1].text}
                films={festival2023Data.programme[1].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[3].text}
                films={festival2023Data.programme[0].steps[3].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[1].steps[2].text}
                films={festival2023Data.programme[1].steps[2].films}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default function GanacheFestival2023Page() {
  return (
    <div className="space-y-24 md:space-y-32 lg:space-y-48">
      <Festival />
      <Programme />
      <Selection films={festival2023Data.films} columns={3} />
      <Parrain {...festival2023Data.parrain} />
      <Team members={festival2023Data.team} />
      <Partners partners={festival2023Data.partners} />
    </div>
  );
}
