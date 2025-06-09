import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { FilmPresentation as FilmPresentationType } from '../../../../../_types/film-presentation.type';

const Media = ({
  imageUrl,
  vimeoUrl,
  titles,
}: {
  imageUrl?: string;
  vimeoUrl?: string;
  titles: FilmPresentationType['titles'];
}) => {
  if (imageUrl)
    return (
      <Image
        src={imageUrl}
        alt={titles.map(({ text }) => text).join(' • ')}
        width={0}
        height={0}
        sizes="100dvw"
        className="h-auto w-full"
        loading="lazy"
      />
    );

  if (vimeoUrl)
    return (
      <iframe
        className="aspect-video"
        src={vimeoUrl}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    );

  return null;
};

const Title = ({ titles }: { titles: FilmPresentationType['titles'] }) => {
  return (
    <p className="text-xs font-bold md:text-sm">
      {titles.map(({ text, italic }, index) => (
        <span key={text} className={clsx({ italic })}>
          {text} {index < titles.length - 1 && ' • '}
        </span>
      ))}
    </p>
  );
};

const Description = ({ description }: { description?: string }) => {
  if (!description) return null;

  return (
    <div
      className="text-xs italic md:text-sm"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};

const AdditionalHtml = ({ additionalHtml }: { additionalHtml?: string }) => {
  if (!additionalHtml) return null;

  return (
    <div
      className="space-y-2 text-xs md:text-sm"
      dangerouslySetInnerHTML={{ __html: additionalHtml }}
    />
  );
};

const Affiche = ({ affiche }: { affiche?: string }) => {
  if (!affiche) return null;

  return (
    <p className="text-xs md:text-sm">
      <Link className="font-bold underline" href={affiche} target="_blank">
        AFFICHE
      </Link>
    </p>
  );
};

const Capsule = ({ showCapsule }: { showCapsule?: boolean }) => {
  if (!showCapsule) return null;

  return (
    <p className="text-xs md:text-sm">
      {'Projet '}
      <Link className="font-bold underline" href="/capsules">
        CAPSULES
      </Link>
    </p>
  );
};

const Festivals = ({ festivals }: { festivals?: string[] }) => {
  if (!festivals || festivals.length === 0) return null;

  return (
    <ul className="list-none text-xs md:text-sm">
      {festivals.map((festival, index) => (
        <li className="italic" key={index}>
          {`- ${festival}`}
        </li>
      ))}
    </ul>
  );
};

export const FilmPresentation: FunctionComponent<FilmPresentationType> = ({
  id,
  titles,
  description,
  additionalHtml,
  showCapsule,
  affiche,
  festivals,
  imageUrl,
  vimeoUrl,
}) => {
  return (
    <div
      className="flex scroll-mt-16 flex-col md:scroll-mt-20 lg:scroll-mt-0"
      id={id}
    >
      <Media imageUrl={imageUrl} vimeoUrl={vimeoUrl} titles={titles} />

      <div className="mt-3 mr-[5vw] ml-[2vw] font-normal lg:ml-0">
        <Title titles={titles} />
        <Description description={description} />
        <AdditionalHtml additionalHtml={additionalHtml} />
        <Affiche affiche={affiche} />
        <Capsule showCapsule={showCapsule} />
        <Festivals festivals={festivals} />
      </div>
    </div>
  );
};
