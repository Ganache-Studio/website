import { Metadata } from 'next';
import Image from 'next/image';

import { metadataConfig } from '@/data/default-metadata';
import { generateDefaultMetadata } from '@/helpers/generate-default-metadata.helper';

import { Address } from './_components/address';
import ContactList from './_components/contact-list';
import { Footer } from './_components/footer';
import PartnerList from './_components/partner-list';

export const metadata: Metadata = generateDefaultMetadata(metadataConfig['/contact']);

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100dvh-theme(height.16))] p-4 md:min-h-[calc(100dvh-theme(height.20))] lg:min-h-dvh">
      <div className="flex flex-col space-y-8 lg:hidden">
        <div className="space-y-8">
          <div className="space-y-4">
            <ContactList />
          </div>

          <div className="space-y-4">
            <Address />
          </div>
        </div>

        <div className="flex h-16 w-full md:h-24">
          <PartnerList />
        </div>

        <div className="flex flex-1/4 flex-col justify-end">
          <Footer />
        </div>
      </div>
      <div className="hidden w-full space-x-8 lg:flex">
        <div className="flex flex-2/3 flex-col">
          <div className="flex flex-3/4 items-center justify-around">
            <div className="space-y-4">
              <ContactList />
            </div>
            <div className="space-y-4">
              <Address />
            </div>
          </div>
          <div className="flex max-h-24 flex-1/3">
            <PartnerList />
          </div>
          <div className="flex flex-1/4 flex-col justify-end">
            <Footer />
          </div>
        </div>
        <div className="relative flex-1/3 pr-4">
          <div className="relative h-full">
            <Image
              src="https://ganache.studio/media/madame_kupka.jpeg"
              alt="Madame Kupka"
              className="object-cover"
              fill={true}
            />
          </div>
          <p className="absolute right-0 bottom-0 m-0 rotate-180 p-0 text-xs whitespace-nowrap [writing-mode:vertical-lr]">
            František Kupka, <i>Mme Kupka among Verticals</i>, 1910-11
          </p>
        </div>
      </div>
    </div>
  );
}
