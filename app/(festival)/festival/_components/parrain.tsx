import Image from 'next/image';

import { Section } from './section';
import { Title } from './title';
import { Parrain as ParrainType } from '../../../_types/festival-data.types';

export const Parrain = ({
  title,
  description,
  posterUrl,
  videoUrl,
  gender,
}: ParrainType) => {
  const sectionTitle = gender === 'male' ? 'LE PARRAIN' : 'LA MARRAINE';

  return (
    <Section id="parrain">
      <Title>{sectionTitle}</Title>
      {videoUrl && (
        <iframe
          className="aspect-video w-full"
          src={videoUrl}
          allowFullScreen
        />
      )}
      <div className="flex flex-col items-center space-y-4 text-sm lg:space-y-6 lg:text-base xl:flex-row xl:space-y-0 xl:space-x-8">
        <div className="flex-1/3">
          <Image
            className="w-full"
            src={posterUrl}
            alt="Affiche Parrain/Marraine"
            width={0}
            height={0}
          />
        </div>
        <div className="flex-2/3 space-y-4 lg:space-y-8">
          <div>
            {title.map((title, index) => (
              <p key={index} className="text-4xl lg:text-6xl">
                {title}
              </p>
            ))}
          </div>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </Section>
  );
};
