import Image from 'next/image';

import { TeamItem } from '@/data/(festival)/types';

import { Section } from './section';
import { Title } from './title';

type TeamProps = {
  members: TeamItem[];
};

export const TeamSection = ({ members }: TeamProps) => {
  return (
    <Section id="equipe">
      <Title>L&apos;ÉQUIPE</Title>

      <div className="flex flex-wrap justify-center gap-4">
        {members.map((member, index) => (
          <div key={index} className="w-full max-w-[100px] min-w-[80px] text-center md:max-w-[180px] md:min-w-[160px]">
            <div className="relative w-full">
              <Image
                src={member.image}
                alt={member.name}
                width={0}
                height={0}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center lg:text-right">
        <p className="text-sm lg:text-base">
          Nous contacter :{' '}
          <a href="mailto:festival@ganache.studio" className="underline hover:no-underline">
            festival@ganache.studio
          </a>
        </p>
      </div>
    </Section>
  );
};
