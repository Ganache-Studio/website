'use client';

import { useEffect, useState } from 'react';

import { SelectionFilmItem } from '@/data/(festival)/types';

import { SelectionFilmCard } from './selection-film-card';
import { SelectionFilmModal } from './selection-film-modal';

const defaultColor = '#ffffff';
const modalColor = '#201c1c';

const cols = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export const SelectionFilmGallery = ({ selection, columns }: { selection: SelectionFilmItem[]; columns: 3 | 4 }) => {
  const [selectedFilmIndex, setSelectedFilmIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isModalOpen ? modalColor : defaultColor);
    }
  }, [isModalOpen]);

  const handleFilmClick = (index: number) => {
    setSelectedFilmIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setSelectedFilmIndex((selectedFilmIndex + 1) % selection.length);
  };

  const handlePrevious = () => {
    setSelectedFilmIndex(selectedFilmIndex === 0 ? selection.length - 1 : selectedFilmIndex - 1);
  };

  return (
    <>
      <div className={`grid grid-cols-2 ${cols[columns]} gap-1 lg:gap-2`}>
        {selection.map((film, index) => (
          <div key={index} className="relative aspect-[6/4] overflow-hidden">
            <SelectionFilmCard
              selectionFilmItem={film}
              onClick={() => {
                handleFilmClick(index);
              }}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <SelectionFilmModal
          selectionFilmItem={selection[selectedFilmIndex]}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </>
  );
};
