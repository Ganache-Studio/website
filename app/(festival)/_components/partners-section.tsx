import Image from 'next/image';

import { PartnerItem } from '@/data/(festival)/types';

import { Section } from './section';
import { Title } from './title';

type PartnersProps = {
  partners: PartnerItem[];
};

export const PartnersSection = ({ partners }: PartnersProps) => {
  return (
    <Section id="partenaires">
      <Title>LES PARTENAIRES</Title>

      <div className="flex flex-wrap justify-center gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex w-full max-w-[80px] min-w-[60px] items-center justify-center p-1 text-center transition-all duration-300 ease-in-out hover:p-0 md:max-w-[100px] md:min-w-[80px] lg:max-w-[120px] lg:min-w-[100px]"
          >
            <div className="relative w-full">
              {partner.url ? (
                <a href={partner.url} target="_blank" rel="noreferrer">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={0}
                    height={0}
                    className="h-auto w-full object-contain"
                  />
                </a>
              ) : (
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={0}
                  height={0}
                  className="h-auto w-full object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
