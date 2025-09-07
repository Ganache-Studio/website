import Image from 'next/image';

import { Parrain } from '@/data/(festival)/types';

import { Section } from './section';
import { Title } from './title';

export const ParrainSection = ({ parrain }: { parrain: Parrain }) => {
  const sectionTitle = parrain.gender === 'male' ? 'LE PARRAIN' : 'LA MARRAINE';

  return (
    <Section id="parrain">
      <Title>{sectionTitle}</Title>
      {parrain.teaser && <iframe className="aspect-video w-full" src={parrain.teaser} allowFullScreen />}
      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image className="w-full" src={parrain.affiche} alt="Affiche Parrain/Marraine" width={0} height={0} />
        </div>
        <div className="flex-2/3 space-y-4 lg:space-y-8">
          <div>
            {parrain.title.map((title, index) => (
              <p key={index} className="text-4xl lg:text-6xl">
                {title}
              </p>
            ))}
          </div>
          <p className="text-justify">{parrain.description}</p>
        </div>
      </div>
    </Section>
  );
};
