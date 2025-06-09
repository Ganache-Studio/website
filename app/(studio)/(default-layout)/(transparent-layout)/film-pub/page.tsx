'use client';

import clsx from 'clsx';
import { Dialog } from 'radix-ui';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { PubModal } from './_components/pub-modal';
import { PubOverlay } from './_components/pub-overlay';
import { PubSection } from './_components/pub-section';
import { pubCovers } from '../../../../_data/(studio)/pub-covers';
import { scrollToSection } from '../../../../_helpers/scroll-to-section';
import { PubAnyCover } from '../../../../_types/pub-cover.type';
import { useStudioContext } from '../../../_context/studio.context';

const DownArrow = ({
  currentIndex,
  isDrawerOpen,
}: {
  currentIndex: number;
  isDrawerOpen: boolean;
}) => {
  return (
    <button
      onClick={() => scrollToSection(pubCovers[currentIndex + 1]?.id)}
      className={clsx(
        'fixed bottom-0 left-1/2 z-20 flex -translate-x-1/2 transform items-center justify-center p-2 text-white transition-opacity duration-300 hover:opacity-100 md:p-3 lg:p-4',
        {
          'pointer-events-auto opacity-30': currentIndex < pubCovers.length - 1,
          'pointer-events-none opacity-0':
            currentIndex >= pubCovers.length - 1 || isDrawerOpen,
          hidden: currentIndex >= pubCovers.length - 1 || isDrawerOpen,
        },
      )}
    >
      <FaChevronDown className="size-4 cursor-pointer" />
    </button>
  );
};

export default function PubPage() {
  const { isDrawerOpen } = useStudioContext();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(true);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentPubCover, setCurrentPubCover] = useState<PubAnyCover>(
    pubCovers[0],
  );

  useEffect(() => {
    setCurrentPubCover(pubCovers[currentIndex]);
  }, [currentIndex]);

  const handleModalOpen = (pubCover: PubAnyCover) => {
    scrollToSection(pubCover.id);
    setCurrentPubCover(pubCover);
    setIsModalOpen(true);
  };

  const handleOverlayHidden = () => {
    setIsOverlayVisible(false);
  };

  return (
    <>
      {isOverlayVisible && <PubOverlay onOverlayHidden={handleOverlayHidden} />}

      <DownArrow currentIndex={currentIndex} isDrawerOpen={isDrawerOpen} />
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="h-dvh w-full snap-y snap-mandatory overflow-y-auto overscroll-none scroll-smooth">
          {pubCovers.map((pubCover, index) => (
            <PubSection
              key={pubCover.id}
              pubCover={pubCover}
              index={index}
              onInView={setCurrentIndex}
              onActive={() => {
                handleModalOpen(pubCover);
              }}
              showDescription={!isOverlayVisible}
            />
          ))}
        </div>
        <PubModal pubCover={currentPubCover} isOpen={isModalOpen} />
      </Dialog.Root>
    </>
  );
}
