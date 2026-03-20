import { Metadata } from 'next';

import { ClickableModalImage } from '@/components/clickable-modal-image';
import { festival2026Data } from '@/data/(festival)/2026';
import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { FooterSection } from '../_components/footer-section';
import { ParrainSection } from '../_components/parrain-section';
import { PartnersSection } from '../_components/partners-section';
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
      <div className="mt-30 flex flex-col items-center space-y-4 text-xs lg:space-y-6 lg:text-sm xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <ClickableModalImage src={festival2026Data.affiche} alt="Affiche Festival 2026" className="w-full" />
        </div>
        <div className="flex-2/3 space-y-4">
          <div className="space-y-2">
            <p className="text-justify">
              La quatrième édition du Ganache Festival se tiendra au cinéma Le Grand Action, à Paris, les 24 et 25 avril
              2026. Cette année encore, nous avons à cœur de :
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
              Nous y montrerons des films portés par de jeunes réalisateur·rice·s, et qui répondent aux critères
              suivants :
            </p>
            <ul className="ml-2 space-y-1">
              <li>— autoproduits ou qui sont le fruit d’une première production,</li>
              <li>— réalisés par des personnes âgées de moins de 35 ans, </li>
              <li>— d’une durée de 30 minutes maximum.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-justify">
              À l&apos;instar des éditions précédentes, le festival se déroulera avec l&apos;accompagnement bienveillant
              d’un parrain connu de la profession, et aucun prix n’y sera décerné.
            </p>
            <p className="text-justify">Ouverture de la billetterie très prochainement.</p>
            <p className="text-justify">À bientôt !</p>
            <p className="text-justify">Ganache Studio et l’équipe du Ganache Festival</p>
          </div>
        </div>
      </div>
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
          <ParrainSection parrain={festival2026Data.parrain} />
          <TeamSection members={festival2026Data.team} />
          <PartnersSection partners={festival2026Data.partners} />
        </main>
        <FooterSection year="2026" />
      </div>
    </FestivalProvider>
  );
}
