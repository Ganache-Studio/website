'use client';

import { useStudioContext } from '@studio/context/studio.context';
import Image from 'next/image';
import { Dialog } from 'radix-ui';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { PubAnyCover } from '@/types/pub-cover.type';

const Title = ({ title }: { title: string }) => <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>;

const Producer = ({ producer }: { producer: string }) => <p className="text-sm text-white md:text-base">{producer}</p>;

const Type = ({ type }: { type: string }) => <p className="text-sm text-white md:text-base">{type}</p>;

const Agence = ({ agence }: { agence?: string }) => {
  if (!agence) return null;
  return <p className="text-sm text-white md:text-base">Agence : {agence}</p>;
};

const Video = ({ pubCover, isPriority = false }: { pubCover: PubAnyCover; isPriority?: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => null);
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      muted
      loop
      playsInline
      preload={isPriority ? 'auto' : 'metadata'}
      src={pubCover.src}
      poster={pubCover.poster}
    />
  );
};

const Picture = ({ pubCover, isPriority = false }: { pubCover: PubAnyCover; isPriority?: boolean }) => {
  return (
    <Image
      src={pubCover.poster}
      alt={pubCover.title}
      fill
      className="h-full w-full object-cover"
      priority={isPriority}
    />
  );
};

export const PubSection = ({
  pubCover,
  index,
  onActive,
  onInView,
  showDescription,
}: PropsWithChildren<{
  pubCover: PubAnyCover;
  index: number;
  onActive: () => void;
  onInView: (index: number) => void;
  showDescription: boolean;
}>) => {
  const { isDrawerOpen } = useStudioContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = sectionRef.current;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            onInView(index);
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px',
      },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [index, onInView]);

  const isVideo = 'vimeoUrl' in pubCover;
  const isPriority = index === 0; // First video/image gets priority

  return (
    <Dialog.DialogTrigger asChild>
      <div
        ref={sectionRef}
        onClick={onActive}
        className="relative h-dvh w-full cursor-pointer snap-start snap-always"
        id={pubCover.id}
      >
        {isVideo ? (
          <Video pubCover={pubCover} isPriority={isPriority} />
        ) : (
          <Picture pubCover={pubCover} isPriority={isPriority} />
        )}
        <div
          className={`absolute right-4 bottom-4 z-50 text-right transition-opacity duration-300 ${
            isDrawerOpen || !showDescription ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Title title={pubCover.title} />
          <Producer producer={pubCover.producer} />
          <Type type={pubCover.type} />
          <Agence agence={pubCover.agence} />
        </div>
      </div>
    </Dialog.DialogTrigger>
  );
};
