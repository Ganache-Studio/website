import type { Metadata } from 'next';
import Image from 'next/image';

import { locationPresentations } from '@/data/(studio)/location';
import { generateMetadata } from '@/data/metadata';
import { pages } from '@/data/pages';

export const metadata: Metadata = generateMetadata(pages.Location);

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
          {locationPresentations.map(locationPresentation => {
            return (
              <div key={locationPresentation.name} className="relative">
                <Image
                  src={locationPresentation.imageUrl}
                  alt={locationPresentation.name}
                  width={0}
                  height={0}
                  loading="lazy"
                  className="h-[500px] w-full object-cover md:h-[700px]"
                />
                <LocationName name={locationPresentation.name} />
                <LocationDescriptions descriptions={locationPresentation.descriptions} />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>

      {/* Desktop */}
      <div className="hidden h-dvh w-full flex-col items-center justify-center space-y-10 py-10 xl:flex">
        <div className="mx-10 flex h-full max-w-7xl items-center space-x-10">
          {locationPresentations.map(locationPresentation => (
            <div key={locationPresentation.name} className="relative h-full w-full">
              <Image
                src={locationPresentation.imageUrl}
                alt={locationPresentation.name}
                width={0}
                height={0}
                className="h-full w-full object-cover"
              />
              <LocationName name={locationPresentation.name} />
              <LocationDescriptions descriptions={locationPresentation.descriptions} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LocationPage;
