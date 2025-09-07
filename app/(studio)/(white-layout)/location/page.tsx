import type { Metadata } from 'next';
import Image from 'next/image';

import { locationItems } from '@/data/(studio)/location/location-items';
import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/location']);

const LocationName = ({ name }: { name: string }) => {
  return (
    <div className="absolute top-0 flex h-full w-full items-center justify-center text-center text-3xl font-bold text-white md:text-4xl">
      {name}
    </div>
  );
};

const LocationDescriptions = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <div className="absolute top-0 flex h-full w-full flex-col items-center justify-end pb-2 md:text-lg">
      {descriptions.map((description, index) => (
        <p key={index} className="font-bold text-white">
          {description}
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 text-sm md:text-base">
      <p className="font-bold">Matériel à louer en plein centre de Paris</p>
      <p>
        {'écrivez nous à '}
        <a className="underline" href="mailto:hello@ganache.studio">
          hello@ganache.studio
        </a>
      </p>
    </div>
  );
};

const LocationPage = () => {
  return (
    <>
      {/* Mobile */}
      <div className="mb-10 space-y-4 xl:hidden">
        <div className="h-full space-y-4">
          {locationItems.map(item => {
            return (
              <div key={item.name} className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  loading="lazy"
                  className="h-[500px] w-full object-cover md:h-[700px]"
                />
                <LocationName name={item.name} />
                <LocationDescriptions descriptions={item.descriptions} />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>

      {/* Desktop */}
      <div className="hidden h-dvh w-full flex-col items-center justify-center space-y-10 py-10 xl:flex">
        <div className="mx-10 flex h-full max-w-7xl items-center space-x-10">
          {locationItems.map(item => (
            <div key={item.name} className="relative h-full w-full">
              <Image src={item.image} alt={item.name} width={0} height={0} className="h-full w-full object-cover" />
              <LocationName name={item.name} />
              <LocationDescriptions descriptions={item.descriptions} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
