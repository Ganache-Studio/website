import { Metadata } from 'next';
import Image from 'next/image';

import { festival2023Data } from '@/data/(festival)/2023';
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

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/ganache-festival-2023']);

const PresentationSection = () => {
  return (
    <Section id="presentation">
      <div className="space-y-4 text-sm lg:space-y-6 lg:text-base">
        <PhotoGallery photos={festival2023Data.photos} columns={3} />
        <p className="text-justify">
          La première édition du Ganache Festival s&apos;est tenue les 21 et 22 avril à Paris. La grande salle du Grand
          Action fut quasiment comble tout le week-end, et les 18 films de la sélection ont trouvé un public chaleureux,
          enthousiaste et bienveillant. Ganache Studio remercie du fond du cœur tous.tes les spectateur.ice.s
          d&apos;avoir participé à ce moment de cinéma, ainsi que les artistes venu.e.s présenter leurs films. À
          l&apos;année prochaine !
        </p>
        <p className="text-end">Ganache Studio et l&apos;équipe du Ganache Festival</p>
      </div>

      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image className="w-full" src={festival2023Data.affiche} alt="Affiche Festival 2023" width={0} height={0} />
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
      <iframe className="aspect-video w-full" src={festival2023Data.teaser} allowFullScreen />
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
          <p className="text-xl md:text-2xl">{festival2023Data.programme[0].title}</p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[0].title}
            films={festival2023Data.programme[0].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[1].title}
            films={festival2023Data.programme[0].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[2].title}
            films={festival2023Data.programme[0].steps[2].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[0].steps[3].title}
            films={festival2023Data.programme[0].steps[3].films}
          />
          <div className="border-b border-gray-300" />

          <p className="text-xl md:text-2xl">{festival2023Data.programme[1].title}</p>
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[1].steps[0].title}
            films={festival2023Data.programme[1].steps[0].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[1].steps[1].title}
            films={festival2023Data.programme[1].steps[1].films}
          />
          <div className="border-b border-gray-300" />
          <ProgrammeStep
            title={festival2023Data.programme[1].steps[2].title}
            films={festival2023Data.programme[1].steps[2].films}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden space-y-8 md:block">
          <div className="flex space-x-4">
            {festival2023Data.programme.map(({ day, title }) => (
              <div key={day} className="flex-1/2">
                <h4 className="text-2xl">{title}</h4>
              </div>
            ))}
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[0].title}
                films={festival2023Data.programme[0].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[1].title}
                films={festival2023Data.programme[0].steps[1].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[1].steps[0].title}
                films={festival2023Data.programme[1].steps[0].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[2].title}
                films={festival2023Data.programme[0].steps[2].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[1].steps[1].title}
                films={festival2023Data.programme[1].steps[1].films}
              />
            </div>
          </div>
          <div className="border-b border-gray-300" />
          <div className="flex space-x-4">
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[0].steps[3].title}
                films={festival2023Data.programme[0].steps[3].films}
              />
            </div>
            <div className="flex-1/2">
              <ProgrammeStep
                title={festival2023Data.programme[1].steps[2].title}
                films={festival2023Data.programme[1].steps[2].films}
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
          <DesktopLayout edition={1} navigationItems={festival2023Data.navigationItems} />
        </div>
        <div className="lg:hidden">
          <MobileLayout edition={1} navigationItems={festival2023Data.navigationItems} />
        </div>
        <main className="mx-6 mt-16 space-y-24 md:mx-8 md:mt-20 md:space-y-32 lg:mx-56 lg:mt-[7vw] lg:space-y-48">
          <PresentationSection />
          <ProgrammeSection />
          <SelectionSection selection={festival2023Data.selection} columns={3} />
          <ParrainSection parrain={festival2023Data.parrain} />
          <TeamSection members={festival2023Data.team} />
          <PartnersSection partners={festival2023Data.partners} />
        </main>
        <FooterSection year="2023" />
      </div>
    </FestivalProvider>
  );
}
